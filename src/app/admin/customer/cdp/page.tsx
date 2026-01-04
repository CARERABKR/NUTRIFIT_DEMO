'use client';

import React from 'react';
import { 
  Database, Fingerprint, Layers, Share2, 
  BarChart, PieChart, RefreshCw, UserCheck 
} from 'lucide-react';

export default function CdpPage() {
  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">고객 데이터 플랫폼 (CDP)</h1>
          <p className="text-slate-500 mt-1">
            온/오프라인 고객 행동 데이터를 통합하여 단일 고객 뷰(Single View)를 구축합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <RefreshCw size={16} />
            데이터 동기화
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <Layers size={16} />
            세그먼트 생성
          </button>
        </div>
      </div>

      {/* 데이터 소스 연결 상태 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Fingerprint size={20} /></div>
            <span className="text-sm font-bold text-slate-500">식별된 프로필</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">14,250</p>
          <p className="text-xs text-slate-400 mt-1">통합 완료율 98.2%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Share2 size={20} /></div>
            <span className="text-sm font-bold text-slate-500">연동된 소스</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">8개 채널</p>
          <p className="text-xs text-slate-400 mt-1">Web, App, POS, CRM 등</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><UserCheck size={20} /></div>
            <span className="text-sm font-bold text-slate-500">데이터 품질</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">High</p>
          <p className="text-xs text-slate-400 mt-1">중복 제거됨</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Database size={20} /></div>
            <span className="text-sm font-bold text-slate-500">수집 이벤트</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">1.2M+</p>
          <p className="text-xs text-slate-400 mt-1">지난 24시간 기준</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* [왼쪽] 고객 여정 맵 (Funnel) */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <BarChart size={20} className="text-slate-500" />
            고객 여정 퍼널 (User Journey)
          </h3>
          <div className="space-y-4">
            {[
              { label: '방문 (Visit)', count: '45,000', rate: '100%', color: 'bg-slate-200' },
              { label: '건강설문 시작', count: '12,500', rate: '27%', color: 'bg-blue-200' },
              { label: '설문 완료', count: '8,400', rate: '18%', color: 'bg-blue-300' },
              { label: '회원가입', count: '3,200', rate: '7%', color: 'bg-brand-300' },
              { label: '첫 구매', count: '1,850', rate: '4%', color: 'bg-brand-500' },
            ].map((step, i) => (
              <div key={i} className="relative group">
                 <div className="flex justify-between items-end mb-1 px-1">
                   <span className="text-sm font-bold text-slate-700">{step.label}</span>
                   <div className="text-right">
                     <span className="text-xs font-bold text-slate-900 block">{step.count}</span>
                     <span className="text-[10px] text-slate-400">{step.rate}</span>
                   </div>
                 </div>
                 <div className="w-full h-8 rounded-lg bg-slate-50 overflow-hidden relative">
                    <div 
                      className={`h-full rounded-lg ${step.color} transition-all duration-1000 group-hover:opacity-80`} 
                      style={{ width: step.rate }}
                    ></div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* [오른쪽] 오디언스 세그먼트 분석 */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <PieChart size={20} className="text-slate-500" />
            주요 오디언스 세그먼트 (Audience)
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
             {[
               { name: '고관여 VIP', count: '2,400명', desc: '월 2회 이상 구매', color: 'bg-purple-50 border-purple-100 text-purple-700' },
               { name: '이탈 위험군', count: '850명', desc: '최근 60일 미접속', color: 'bg-red-50 border-red-100 text-red-700' },
               { name: '신규 가입자', count: '3,200명', desc: '가입 7일 이내', color: 'bg-green-50 border-green-100 text-green-700' },
               { name: '잠재 고객', count: '15,000명', desc: '장바구니 보유', color: 'bg-blue-50 border-blue-100 text-blue-700' },
             ].map((seg, i) => (
               <div key={i} className={`p-5 rounded-xl border ${seg.color.split(' ')[1]} ${seg.color.split(' ')[0]} hover:shadow-sm transition-all cursor-pointer`}>
                 <h4 className={`font-bold text-sm mb-1 ${seg.color.split(' ')[2]}`}>{seg.name}</h4>
                 <p className="text-2xl font-bold text-slate-900">{seg.count}</p>
                 <p className="text-xs text-slate-500 mt-2 opacity-80">{seg.desc}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-600 mb-2">추천 액션 (AI Suggestion)</p>
            <div className="flex justify-between items-center">
              <p className="text-xs text-slate-500">이탈 위험군 대상 재방문 유도 쿠폰 발송</p>
              <button className="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-700">
                캠페인 생성
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}