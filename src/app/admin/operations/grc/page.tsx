'use client';

import React from 'react';
import { 
  ShieldCheck, AlertTriangle, FileText, Scale, 
  CheckCircle2, XCircle, AlertCircle, ArrowRight, 
  Lock, Globe, Search 
} from 'lucide-react';

// [임시 데이터] 주요 컴플라이언스 체크리스트
const COMPLIANCE_LIST = [
  { id: 1, name: '개인정보 보호법 (PIPA)', category: 'Privacy', status: 'Compliant', score: 100, lastCheck: '2026.01.02' },
  { id: 2, name: '반려동물 사료관리법', category: 'Product', status: 'Compliant', score: 98, lastCheck: '2025.12.28' },
  { id: 3, name: '전자상거래법', category: 'Commerce', status: 'Review', score: 85, lastCheck: '2025.12.15' },
  { id: 4, name: '중대재해처벌법', category: 'Labor', status: 'Compliant', score: 100, lastCheck: '2025.11.30' },
  { id: 5, name: 'ISO 27001 (정보보안)', category: 'Security', status: 'Warning', score: 72, lastCheck: '2025.12.10' },
];

// [임시 데이터] 10대 핵심 리스크
const KEY_RISKS = [
  { id: 'R-01', name: '원자재 가격 변동', level: 'High', impact: '수익성 악화', mitigation: '장기 공급 계약 체결' },
  { id: 'R-02', name: 'AI 알고리즘 편향성', level: 'Medium', impact: '평판 하락', mitigation: '정기 감사 및 윤리 위원회' },
  { id: 'R-03', name: '클라우드 보안 사고', level: 'Low', impact: '서비스 중단', mitigation: '이중화 및 모의 해킹' },
];

export default function GrcPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">기업 지배 구조 (GRC)</h1>
          <p className="text-slate-500 mt-1">
            Governance, Risk, Compliance 전반의 건전성을 모니터링하고 내부 통제를 강화합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all">
            <FileText size={16} />
            내부 감사 리포트
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md transition-all">
            <Scale size={16} />
            규제 대응 현황판
          </button>
        </div>
      </div>

      {/* 2. 핵심 지표 (KPI Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 종합 컴플라이언스 점수 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <ShieldCheck size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              Stable
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">종합 규제 준수율</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">94.5%</p>
          <p className="text-xs text-slate-400 mt-2">전 분기 대비 +2.1% 개선</p>
        </div>

        {/* 발견된 리스크 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-50 text-red-600 rounded-xl">
              <AlertTriangle size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">
              Action Req
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">고위험 리스크 (High)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">3건</p>
          <p className="text-xs text-slate-400 mt-2">즉각적인 조치 필요</p>
        </div>

        {/* 내부 통제 위반 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
              <AlertCircle size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              Warning
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">내부 통제 위반</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">12건</p>
          <p className="text-xs text-slate-400 mt-2">법인카드/근태 규정 등</p>
        </div>

        {/* 감사 진행률 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <CheckCircle2 size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
              Q1 Audit
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">정기 감사 진행률</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">45%</p>
          <p className="text-xs text-slate-400 mt-2">1월 15일 완료 예정</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 컴플라이언스 현황 테이블 */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">법적 규제 준수 현황 (Compliance)</h3>
            <div className="flex gap-2">
              <button className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-200">전체 보기</button>
            </div>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4 pl-6">규제 항목</th>
                <th className="p-4">카테고리</th>
                <th className="p-4">준수 점수</th>
                <th className="p-4">상태</th>
                <th className="p-4 pr-6 text-right">최근 점검일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {COMPLIANCE_LIST.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 pl-6 font-bold text-slate-900">{item.name}</td>
                  <td className="p-4 text-slate-600">
                    <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs">{item.category}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-100 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${item.score >= 90 ? 'bg-green-500' : item.score >= 80 ? 'bg-orange-400' : 'bg-red-500'}`} 
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-slate-700">{item.score}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    {item.status === 'Compliant' ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600">
                        <CheckCircle2 size={14} /> 적합
                      </span>
                    ) : item.status === 'Review' ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500">
                        <AlertCircle size={14} /> 검토 필요
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600">
                        <XCircle size={14} /> 미흡
                      </span>
                    )}
                  </td>
                  <td className="p-4 pr-6 text-right text-slate-400 text-xs font-mono">{item.lastCheck}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* [오른쪽] 10대 핵심 리스크 (Top Risks) */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <h3 className="font-bold text-slate-900 mb-6">주요 관리 리스크 (Top Risks)</h3>
          
          <div className="space-y-4">
            {KEY_RISKS.map((risk, idx) => (
              <div key={risk.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded border
                    ${risk.level === 'High' ? 'bg-red-50 text-red-600 border-red-100' : 
                      risk.level === 'Medium' ? 'bg-orange-50 text-orange-600 border-orange-100' : 
                      'bg-green-50 text-green-600 border-green-100'}
                  `}>
                    {risk.level} Risk
                  </span>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-slate-600 transition-colors cursor-pointer" />
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">{risk.name}</h4>
                <p className="text-xs text-slate-500 mb-2">예상 영향: {risk.impact}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-white px-2 py-1 rounded border border-slate-100 inline-block">
                  <ShieldCheck size={12} />
                  {risk.mitigation}
                </div>
              </div>
            ))}
            
            <button className="w-full py-3 mt-2 border border-dashed border-slate-300 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 hover:border-slate-400 transition-all">
              + 새 리스크 등록하기
            </button>
          </div>
        </div>

      </div>

      {/* 3. 보안 인증 현황 (Certifications) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            <Lock size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">ISMS-P 인증</p>
            <p className="text-xs text-slate-500">유효기간: 2026.12.31</p>
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded mt-1 inline-block">갱신 완료</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
            <Globe size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">ISO 27001</p>
            <p className="text-xs text-slate-500">국제 정보보호 표준</p>
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded mt-1 inline-block">유지 중</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card flex items-center gap-4 opacity-60">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">HACCP (펫푸드)</p>
            <p className="text-xs text-slate-500">심사 준비 중</p>
            <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded mt-1 inline-block">D-45</span>
          </div>
        </div>
      </div>
    </div>
  );
}