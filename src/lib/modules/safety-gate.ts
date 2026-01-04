import { supabaseAdmin } from '../utils/supabase';

export interface PetProfile {
  userId: string;
  diseases: string[];      // 기저 질환 (예: 'kidney_failure')
  medications: string[];   // 복용 약물 (예: 'diuretic')
  allergies: string[];     // 알러지 성분
  isPregnant?: boolean;    // 임신/수유 여부 [cite: 180]
}

export interface Product {
  id: string;
  name: string;
  ingredients: string[];       // 성분 리스트
  contraindications: string[]; // 금기 태그 (예: 'kidney_safe_no')
  drugInteractions: string[];  // 약물 상호작용 태그
}

export class SafetyGate {
  /**
   * [Step 8] 후보군 선별 시 Safety Gate 통과 여부 확인 [cite: 52]
   * @returns 안전한 제품 리스트
   */
  async filterSafeProducts(profile: PetProfile, candidates: Product[]): Promise<Product[]> {
    const safeProducts: Product[] = [];
    const blockedLogs: any[] = [];

    for (const product of candidates) {
      const checkResult = this.checkSafety(profile, product);

      if (checkResult.isSafe) {
        safeProducts.push(product);
      } else {
        // [Step 9] 차단 이력 로그 생성 [cite: 78]
        blockedLogs.push({
          user_id: profile.userId,
          blocked_ingredient: product.name,
          reason: checkResult.reason,
          applied_rule_id: checkResult.ruleId,
        });
      }
    }

    // DB에 차단 로그 비동기 저장
    if (blockedLogs.length > 0) {
      await supabaseAdmin.from('safety_gate_logs').insert(blockedLogs);
    }

    return safeProducts;
  }

  /**
   * 개별 제품에 대한 안전성 검사 (결정론적 로직)
   */
  private checkSafety(profile: PetProfile, product: Product): { isSafe: boolean; reason?: string; ruleId?: string } {
    
    // 1. 기저 질환 금기 (Disease Contraindication) [cite: 30]
    // 예: 신부전 환자에게 인/나트륨 함유 제품 배제
    if (profile.diseases.includes('kidney_failure') && product.contraindications.includes('kidney_safe_no')) {
      return { isSafe: false, reason: '신부전 기저질환: 신장 부담 성분 포함', ruleId: 'RULE_DISEASE_01' };
    }

    // 2. 약물 상호작용 (Drug Interaction) [cite: 32]
    // 예: 이뇨제 복용 중 칼륨 과다 섭취 주의
    if (profile.medications.includes('diuretic') && product.drugInteractions.includes('high_potassium')) {
      return { isSafe: false, reason: '약물 상호작용: 이뇨제와 칼륨 충돌 위험', ruleId: 'RULE_DRUG_01' };
    }

    // 3. 알러지 유발 물질 (Allergy Check) [cite: 33]
    const allergyMatch = product.ingredients.find(ing => profile.allergies.includes(ing));
    if (allergyMatch) {
      return { isSafe: false, reason: `알러지 유발 성분 감지: ${allergyMatch}`, ruleId: 'RULE_ALLERGY_01' };
    }

    // 4. 생애 주기 (임신/수유) [cite: 180]
    if (profile.isPregnant && product.contraindications.includes('pregnancy_safe_no')) {
      return { isSafe: false, reason: '임신/수유 중 급여 금지 성분', ruleId: 'RULE_LIFE_CYCLE_01' };
    }

    return { isSafe: true };
  }
}