'use client';

import React from 'react';
import { 
  ShieldAlert, AlertTriangle, Pill, 
  Activity, ArrowDown, Settings, Plus 
} from 'lucide-react';

export default function SafetyGatePage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">안전 필터링 (Safety Gate)</h1>
          <p className="text-slate-500 mt-1">
            수의학적 금기 성분 및 약물 상호작용 규칙을 관리하여 부작용을 원천 차단합니다.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 shadow-md shadow-red-500/20 transition-all">
          <Plus size={18} />
          새 금기 규칙 추가
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] Safety Funnel 시각화 (기술보고서 Funnel 도식화) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Layer 1: 기저질환 */}
          <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-card relative overflow-hidden group hover:border-red-300 transition-all">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Layer 1: 기저질환 금기 (Contraindication)</h3>
                  <p className="text-sm text-slate-500">특정 질환 악화 성분 원천 배제</p>
                </div>
              </div>
              <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
                142건 차단 (오늘)
              </span>
            </div>
            
            {/* 규칙 태그들 */}
            <div className="flex flex-wrap gap-2 pl-12">
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 flex items-center gap-2">
                신부전(Renal) <span className="text-red-500">❌ 인(Phosphorus)</span>
              </div>
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 flex items-center gap-2">
                심장병(Heart) <span className="text-red-500">❌ 나트륨(Na)</span>
              </div>
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 flex items-center gap-2">
                췌장염(Pancreas) <span className="text-red-500">❌ 고지방</span>
              </div>
            </div>
          </div>

          {/* 연결 화살표 UI */}
          <div className="flex justify-center -my-2">
            <ArrowDown className="text-slate-300" size={24} />
          </div>

          {/* Layer 2: 약물 상호작용 */}
          <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-card relative overflow-hidden group hover:border-orange-300 transition-all">
            <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <Pill size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Layer 2: 약물 상호작용 (Interaction)</h3>
                  <p className="text-sm text-slate-500">복용 중인 의약품과 충돌하는 영양소 필터링</p>
                </div>
              </div>
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                18건 차단 (오늘)
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 pl-12">
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 flex items-center gap-2">
                혈전용해제 <span className="text-orange-500">⚠️ 오메가3(고함량)</span>
              </div>
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 flex items-center gap-2">
                항생제(테트라사이클린) <span className="text-orange-500">⚠️ 칼슘/마그네슘</span>
              </div>
            </div>
          </div>

          {/* 연결 화살표 UI */}
          <div className="flex justify-center -my-2">
            <ArrowDown className="text-slate-300" size={24} />
          </div>

          {/* Layer 3: 알러지/과다급여 */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-card relative overflow-hidden group hover:border-blue-300 transition-all">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Layer 3: 알러지 및 과다 급여</h3>
                  <p className="text-sm text-slate-500">개체별 알러지원 및 일일 권장량 초과 방지</p>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                56건 차단 (오늘)
              </span>
            </div>
          </div>

        </div>

        {/* [오른쪽] 통계 및 설정 */}
        <div className="space-y-6">
          
          {/* 차단 통계 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
            <h3 className="font-bold text-slate-800 mb-4">오늘의 필터링 현황</h3>
            <div className="flex items-end gap-2 h-40 mb-2">
              <div className="w-1/3 bg-red-100 rounded-t-lg relative group">
                <div className="absolute bottom-0 w-full bg-red-500 rounded-t-lg" style={{ height: '70%' }}></div>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs font-bold">질환</span>
              </div>
              <div className="w-1/3 bg-orange-100 rounded-t-lg relative group">
                <div className="absolute bottom-0 w-full bg-orange-500 rounded-t-lg" style={{ height: '20%' }}></div>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs font-bold">약물</span>
              </div>
              <div className="w-1/3 bg-blue-100 rounded-t-lg relative group">
                <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg" style={{ height: '40%' }}></div>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs font-bold">알러지</span>
              </div>
            </div>
            <p className="text-center text-xs text-slate-400">총 216건의 위험 요소가 사전 차단되었습니다.</p>
          </div>

          {/* 설정 바로가기 */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="text-slate-600" size={20} />
              <h3 className="font-bold text-slate-800">규칙 데이터베이스</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              수의사 자문위원회의 승인을 거친 최신 금기 성분 리스트(v2.4)가 적용 중입니다.
            </p>
            <button className="w-full py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all">
              DB 업데이트 내역 보기
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}