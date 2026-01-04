import { supabaseAdmin } from '../utils/supabase';

type ActionType = 
  | 'LOGIN' 
  | 'RECOMMENDATION_GENERATED' // 추천 결과 생성
  | 'RULE_UPDATE'             // 알고리즘 룰 변경 [cite: 86]
  | 'EMERGENCY_STOP';         // 긴급 중단

export class AuditLogger {
  /**
   * [Step 9] 로그 추적 및 감사 대응 [cite: 74]
   * 모든 연산 과정을 기록하여 투명성과 재현성을 보장합니다.
   */
  async logAction(
    userId: string | null,
    action: ActionType,
    target: string,
    details: object = {},
    ip?: string
  ) {
    try {
      const { error } = await supabaseAdmin.from('security_logs').insert({
        user_id: userId,
        action_type: action,
        resource_target: target,
        ip_address: ip || 'system',
        details: details, // JSON 형태로 상세 내용 저장
        severity: this.getSeverity(action)
      });

      if (error) {
        console.error('Audit Log DB Error:', error);
      }
    } catch (e) {
      console.error('Audit Log System Error:', e);
    }
  }

  private getSeverity(action: ActionType): string {
    switch (action) {
      case 'RULE_UPDATE':
      case 'EMERGENCY_STOP':
        return 'CRITICAL'; // 시스템 로직 변경은 치명적 중요도
      case 'RECOMMENDATION_GENERATED':
        return 'INFO';
      default:
        return 'WARNING';
    }
  }
}