import { Product } from './safety-gate';

export interface RankingParams {
  age: number;
  breed: string;
  symptoms: string[]; // 호소 증상 (예: 'joint_pain', 'skin_itch')
}

export interface ScoredProduct extends Product {
  score: number;
  matchReasons: string[]; // 추천 근거 (XAI용)
}

export class RuleEngine {
  /**
   * [Step 7] 임상 우선순위 기반 다목적 랭킹 [cite: 57]
   */
  rankProducts(params: RankingParams, safeProducts: Product[]): ScoredProduct[] {
    return safeProducts.map(product => {
      let score = 0;
      let reasons: string[] = [];

      // 1. 증상 적합성 (Symptom Matching) [+50점] [cite: 177]
      // 실제 구현 시에는 DB의 태그 매핑 테이블을 조회해야 함
      if (params.symptoms.includes('joint_pain') && product.ingredients.includes('glucosamine')) {
        score += 50;
        reasons.push('관절 통증 완화 성분 포함 (+50)');
      }

      // 2. 나이 가중치 (Age Factor) [+30점] [cite: 178]
      // 7세 이상 노령견에게는 항산화/소화 용이성 가점
      if (params.age >= 7 && product.ingredients.includes('antioxidant')) {
        score += 30;
        reasons.push('7세 이상 노령견 맞춤 항산화 케어 (+30)');
      }

      // 3. 견종 특이성 (Breed Specificity) [+20점] [cite: 175]
      // 예: 말티즈는 심장 질환 호발 견종
      if (params.breed === 'Maltese' && product.ingredients.includes('coenzyme_q10')) {
        score += 20;
        reasons.push('말티즈 호발 질환(심장) 예방 (+20)');
      }

      return { ...product, score, matchReasons: reasons };
    }).sort((a, b) => b.score - a.score); // 점수 높은 순 정렬
  }
}