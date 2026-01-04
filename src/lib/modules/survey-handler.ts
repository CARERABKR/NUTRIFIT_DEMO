/**
 * [Step 1] 사용자 건강 데이터 처리 및 보정 알고리즘
 * - 누락값(Missing Value) 보정
 * - 논리적 모순(Contradiction) 감지
 * - 정규화(Normalization)
 */
export interface RawSurveyData {
  age: number;
  weight: number;
  activityLevel: string; // 'none' | 'low' | 'high'
  walkHoursPerDay?: number;
  symptoms: string[];
}

export class SurveyHandler {
  /**
   * 설문 데이터를 검증하고 전처리합니다.
   */
  process(data: RawSurveyData): RawSurveyData {
    let processed = { ...data };

    // 1. 논리적 모순 자동 보정 [cite: 11]
    // 예: "활동량 없음"인데 "매일 3시간 산책"이라고 응답한 경우 -> 활동량을 'high'로 보정
    if (processed.activityLevel === 'none' && (processed.walkHoursPerDay || 0) >= 3) {
      console.warn('Logic contradiction detected: Auto-correcting activity level.');
      processed.activityLevel = 'high';
    }

    // 2. 누락값 처리 (기본값 할당)
    if (processed.walkHoursPerDay === undefined) {
      processed.walkHoursPerDay = 0;
    }

    return processed;
  }

  /**
   * 증상 강도(Severity)를 0.0 ~ 1.0 사이로 정규화합니다. [cite: 14]
   * @param severity 1~10 척도
   */
  normalizeSeverity(severity: number): number {
    return Math.min(Math.max(severity, 0), 10) / 10.0;
  }
}