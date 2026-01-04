// src/app/api/recommend/route.ts
import { NextResponse } from 'next/server';
import { SafetyGate } from '@/lib/modules/safety-gate';
import { RuleEngine } from '@/lib/modules/rule-engine';
import { AuditLogger } from '@/lib/modules/audit-logger';

export async function POST(req: Request) {
  const body = await req.json();
  const { userProfile, allProducts } = body;

  const safetyGate = new SafetyGate();
  const ruleEngine = new RuleEngine();
  const auditor = new AuditLogger();

  // 1. [Safety Gate] 안전 필터링 실행
  const safeProducts = await safetyGate.filterSafeProducts(userProfile, allProducts);

  // 2. [Rule Engine] 점수 산출 및 랭킹
  const finalRanking = ruleEngine.rankProducts(
    { age: userProfile.age, breed: userProfile.breed, symptoms: userProfile.symptoms },
    safeProducts
  );

  // 3. [Audit] 추천 생성 기록 저장 (설명 가능한 AI 근거 포함)
  await auditor.logAction(
    userProfile.userId,
    'RECOMMENDATION_GENERATED',
    `Product_Count:${finalRanking.length}`,
    { top_recommendation: finalRanking[0]?.name, reason: finalRanking[0]?.matchReason }
  );

  return NextResponse.json({ 
    recommendations: finalRanking,
    meta: {
      totalCandidates: allProducts.length,
      safeCount: safeProducts.length
    }
  });
}