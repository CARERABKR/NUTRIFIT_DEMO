'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, Target, Calculator, ArrowUpRight, 
  DollarSign, PieChart, AlertCircle, Download, RefreshCw 
} from 'lucide-react';

export default function FpnaPage() {
  // [시뮬레이션 상태] 가상의 슬라이더 값
  const [cac, setCac] = useState(35000);
  const [retention, setRetention] = useState(85);

  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">재무 분석 및 예측 (FP&A)</h1>
          <p className="text-slate-500 mt-1">
            향후 3개년 성장 로드맵 및 비용 시나리오(What-if)를 시뮬레이션합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <RefreshCw size={16} />
            AI 예측 모델 갱신
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <Download size={16} />
            예산안 다운로드
          </button>
        </div>
      </div>

      {/* 2. 핵심 재무 지표 (Forecast) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Target size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">Year 3 목표</span>
          </div>
          <p className="text-sm font-bold text-slate-500">2026 예상 매출</p>
          <p className="text-2xl font-bold text-slate-900">₩ 42억</p>
          <p className="text-xs text-green-600 mt-1 font-bold">흑자 전환 예상 (OP 4.2억)</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <DollarSign size={20} />
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              Runway
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">현금 보유고 (Cash)</p>
          <p className="text-2xl font-bold text-slate-900">14.5 개월</p>
          <p className="text-xs text-slate-400 mt-1">추가 투자 없이 운영 가능</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <TrendingUp size={20} />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              +15%
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">월간 성장률 (MoM)</p>
          <p className="text-2xl font-bold text-slate-900">12.4%</p>
          <p className="text-xs text-slate-400 mt-1">구독자 순증 추세 지속</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <AlertCircle size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">Alert</span>
          </div>
          <p className="text-sm font-bold text-slate-500">예산 소진율 (Burn Rate)</p>
          <p className="text-2xl font-bold text-slate-900">92%</p>
          <p className="text-xs text-orange-500 mt-1 font-bold">마케팅 예산 주의 필요</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 3개년 성장 시뮬레이션 (사업계획서 P.1 데이터) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card">
          <div className="p-6 border-b border-slate-50">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp size={18} className="text-slate-500" />
              [cite_start]3개년 재무 성장 예측 (2026~2028) [cite: 126]
            </h3>
          </div>
          <div className="p-6">
            <div className="flex items-end gap-8 h-64 px-4 pb-2 border-b border-slate-100">
              {/* Year 1 */}
              <div className="w-1/3 flex flex-col justify-end gap-2 group">
                <div className="text-center mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded">4.5억 / 적자</span>
                </div>
                <div className="w-full bg-slate-100 rounded-t-lg relative h-full">
                  <div className="absolute bottom-0 w-full bg-slate-300 rounded-t-lg transition-all duration-700" style={{ height: '20%' }}></div>
                  <div className="absolute bottom-0 w-full bg-red-400 rounded-t-lg opacity-80" style={{ height: '8%' }}></div>
                </div>
                <p className="text-center text-sm font-bold text-slate-600">Year 1 (기반 구축)</p>
              </div>

              {/* Year 2 */}
              <div className="w-1/3 flex flex-col justify-end gap-2 group">
                <div className="text-center mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded">18억 / BEP 근접</span>
                </div>
                <div className="w-full bg-slate-100 rounded-t-lg relative h-full">
                  <div className="absolute bottom-0 w-full bg-brand-300 rounded-t-lg transition-all duration-700" style={{ height: '45%' }}></div>
                  <div className="absolute bottom-0 w-full bg-yellow-400 rounded-t-lg opacity-80" style={{ height: '2%' }}></div>
                </div>
                <p className="text-center text-sm font-bold text-slate-600">Year 2 (확장)</p>
              </div>

              {/* Year 3 */}
              <div className="w-1/3 flex flex-col justify-end gap-2 group">
                <div className="text-center mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold bg-slate-800 text-white px-2 py-1 rounded">42억 / 흑자전환</span>
                </div>
                <div className="w-full bg-slate-100 rounded-t-lg relative h-full">
                  <div className="absolute bottom-0 w-full bg-brand-600 rounded-t-lg transition-all duration-700" style={{ height: '85%' }}></div>
                  <div className="absolute bottom-0 w-full bg-green-500 rounded-t-lg opacity-80" style={{ height: '15%' }}></div>
                </div>
                <p className="text-center text-sm font-bold text-slate-600">Year 3 (도약)</p>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500">구독자 수</p>
                <p className="text-lg font-bold text-slate-900">1,500명</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500">구독자 수</p>
                <p className="text-lg font-bold text-slate-900">5,000명</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500">구독자 수</p>
                <p className="text-lg font-bold text-brand-600">12,000명</p>
              </div>
            </div>
          </div>
        </div>

        {/* [오른쪽] 수익성 시뮬레이터 (Interactive) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="text-brand-600" size={20} />
            <h3 className="font-bold text-slate-900">What-If 시뮬레이터</h3>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-bold text-slate-700">고객 획득 비용 (CAC)</label>
                <span className="text-sm font-bold text-blue-600">₩ {cac.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="10000" max="100000" step="1000" 
                value={cac} onChange={(e) => setCac(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <p className="text-xs text-slate-400">현재 가정: 35,000원 (보수적)</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-bold text-slate-700">구독 유지율 (Retention)</label>
                <span className="text-sm font-bold text-green-600">{retention}%</span>
              </div>
              <input 
                type="range" min="50" max="100" step="1" 
                value={retention} onChange={(e) => setRetention(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <p className="text-xs text-slate-400">목표: 92% (병원 파트너십 효과)</p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <div className="p-4 bg-slate-50 rounded-xl">
                <p className="text-center text-xs text-slate-500 mb-1">예상 고객 생애 가치 (LTV)</p>
                <p className="text-center text-3xl font-bold text-slate-900">
                  ₩ {(45000 * 0.38 * (100 / (100 - retention))).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
                <div className={`mt-2 text-center text-xs font-bold px-2 py-1 rounded-full inline-block w-full
                  ${(45000 * 0.38 * (100 / (100 - retention))) / cac > 3 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                `}>
                  LTV / CAC = {((45000 * 0.38 * (100 / (100 - retention))) / cac).toFixed(1)}x
                  {((45000 * 0.38 * (100 / (100 - retention))) / cac > 3 ? ' (Healthy)' : ' (Warning)')}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}