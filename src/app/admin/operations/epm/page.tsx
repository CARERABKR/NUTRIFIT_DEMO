'use client';

import React from 'react';
import { 
  PieChart, Target, TrendingUp, Award, 
  ArrowUpRight, ArrowDownRight, CheckCircle2, 
  BarChart3, Layers, Zap, MoreHorizontal, Download 
} from 'lucide-react';

// [임시 데이터] 부서별 성과 평가 (OKR)
const DEPT_PERFORMANCE = [
  { id: 1, name: '마케팅 본부', kpi: '신규 구독자 1만 달성', achievement: 105, grade: 'S', status: 'Exceed' },
  { id: 2, name: '제품 개발(R&D)', kpi: 'AI 모델 정확도 95%', achievement: 94, grade: 'A', status: 'On Track' },
  { id: 3, name: '고객 경험(CX)', kpi: 'CS 응답속도 < 1시간', achievement: 88, grade: 'B', status: 'Warning' },
  { id: 4, name: '경영 지원', kpi: '운영 비용 10% 절감', achievement: 98, grade: 'A', status: 'On Track' },
];

export default function EpmPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">기업 성과 관리 (EPM)</h1>
          <p className="text-slate-500 mt-1">
            전사적 목표(BSC) 달성도 및 부서별 핵심 성과 지표(KPI)를 평가합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all">
            <Target size={16} />
            2026 목표 설정
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md transition-all">
            <Download size={16} />
            평가 리포트
          </button>
        </div>
      </div>

      {/* 2. 전사 성과 요약 (BSC 관점) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 재무 관점 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <BarChart3 size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +15% <ArrowUpRight size={12} />
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">재무 성과 (Financial)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">92.5점</p>
          <p className="text-xs text-slate-400 mt-2">매출 목표 초과 달성</p>
        </div>

        {/* 고객 관점 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <PieChart size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
              Stable
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">고객 만족 (Customer)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">88.0점</p>
          <p className="text-xs text-slate-400 mt-2">NPS 점수 소폭 상승</p>
        </div>

        {/* 프로세스 관점 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
              <Layers size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              Review
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">내부 프로세스 (Process)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">76.4점</p>
          <p className="text-xs text-slate-400 mt-2">물류 효율화 개선 필요</p>
        </div>

        {/* 학습/성장 관점 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-xl">
              <Zap size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              Best
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">학습과 성장 (Growth)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">95.0점</p>
          <p className="text-xs text-slate-400 mt-2">AI 기술 역량 확보 우수</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 목표 달성 현황 (Goal Alignment) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900">2026 전사 핵심 목표 (OKRs)</h3>
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Q1 Progress</span>
          </div>
          
          <div className="space-y-6">
            {/* Objective 1 */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-bold text-brand-600 mb-1 block">Objective 1</span>
                  <p className="font-bold text-slate-800 text-sm">반려동물 헬스케어 시장 점유율 1위 달성</p>
                </div>
                <span className="font-bold text-slate-900 text-lg">82%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-brand-500 h-3 rounded-full relative" style={{ width: '82%' }}>
                  <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <p className="text-xs text-slate-400 text-right">KR: 월간 활성 구독자 5만 명 (현재 4.1만)</p>
            </div>

            {/* Objective 2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-bold text-blue-600 mb-1 block">Objective 2</span>
                  <p className="font-bold text-slate-800 text-sm">고객 신뢰도 및 안전성 강화</p>
                </div>
                <span className="font-bold text-slate-900 text-lg">95%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <p className="text-xs text-slate-400 text-right">KR: 부작용 리포트 0건 유지 (달성 중)</p>
            </div>

            {/* Objective 3 */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-bold text-orange-600 mb-1 block">Objective 3</span>
                  <p className="font-bold text-slate-800 text-sm">운영 효율화를 통한 수익성 개선</p>
                </div>
                <span className="font-bold text-slate-900 text-lg">64%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-orange-500 h-3 rounded-full" style={{ width: '64%' }}></div>
              </div>
              <p className="text-xs text-slate-400 text-right">KR: 물류 비용 15% 절감 (진행 중)</p>
            </div>
          </div>
        </div>

        {/* [오른쪽] 우수 성과자 (Top Performers) */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 bg-gradient-to-br from-yellow-50/50 to-white">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Award className="text-yellow-500" size={20} />
              이달의 우수 성과 (MVP)
            </h3>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { name: '김지민 팀장', team: '마케팅팀', desc: 'ROAS 300% 달성 기여', score: 'S' },
              { name: '이도현 수석', team: 'AI Lab', desc: '추천 알고리즘 고도화', score: 'A+' },
              { name: '박수진 매니저', team: 'CX팀', desc: '고객 만족도 역대 최고', score: 'A' },
            ].map((person, idx) => (
              <div key={idx} className="p-5 flex items-center gap-4 hover:bg-slate-50/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {person.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-bold text-slate-800">{person.name}</p>
                    <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded">
                      {person.score}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{person.team} • {person.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
             <button className="text-xs font-bold text-slate-500 hover:text-slate-800">전체 임직원 평가 보기</button>
          </div>
        </div>

      </div>

      {/* 3. 부서별 상세 성과표 */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h3 className="font-bold text-slate-900">부서별 KPI 달성 현황</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4 pl-6">부서명</th>
                <th className="p-4">핵심 목표 (KPI)</th>
                <th className="p-4">달성률</th>
                <th className="p-4">등급</th>
                <th className="p-4">상태</th>
                <th className="p-4 text-right pr-6">상세</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {DEPT_PERFORMANCE.map((dept) => (
                <tr key={dept.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 pl-6 font-bold text-slate-900">{dept.name}</td>
                  <td className="p-4 text-slate-600">{dept.kpi}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-slate-100 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${dept.achievement >= 100 ? 'bg-green-500' : dept.achievement >= 90 ? 'bg-blue-500' : 'bg-orange-500'}`} 
                          style={{ width: `${Math.min(dept.achievement, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-slate-700">{dept.achievement}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold border
                      ${dept.grade === 'S' ? 'bg-purple-50 text-purple-700 border-purple-100' : 
                        dept.grade === 'A' ? 'bg-green-50 text-green-700 border-green-100' : 
                        'bg-orange-50 text-orange-700 border-orange-100'}
                    `}>
                      {dept.grade}
                    </span>
                  </td>
                  <td className="p-4">
                    {dept.status === 'Exceed' ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600">
                        <CheckCircle2 size={14} /> 초과 달성
                      </span>
                    ) : dept.status === 'On Track' ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                        <TrendingUp size={14} /> 순항 중
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500">
                        <ArrowDownRight size={14} /> 주의 필요
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right pr-6">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}