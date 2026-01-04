'use client';

import React from 'react';
import { 
  Globe, Truck, Package, AlertTriangle, 
  ArrowRight, BarChart3, Clock, CheckCircle2, 
  MapPin, Anchor, ArrowUpRight, Search 
} from 'lucide-react';

// [임시 데이터] 주요 공급사 현황
const SUPPLIERS = [
  { id: 'SUP-01', name: 'Nordic Naturals', country: 'Norway', material: 'Omega-3 Oil', leadTime: '14일', reliability: 98, status: 'Stable' },
  { id: 'SUP-02', name: 'Dupont Bio', country: 'USA', material: 'Probiotics', leadTime: '10일', reliability: 95, status: 'Stable' },
  { id: 'SUP-03', name: 'Qingdao Pharma', country: 'China', material: 'Glucosamine', leadTime: '21일', reliability: 82, status: 'Warning' },
  { id: 'SUP-04', name: 'EcoPack Korea', country: 'Korea', material: 'Paper Box', leadTime: '3일', reliability: 99, status: 'Stable' },
];

export default function ScmPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">공급망 관리 (SCM)</h1>
          <p className="text-slate-500 mt-1">
            전 세계 원자재 파트너사 및 조달 리드타임을 실시간으로 관리합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all">
            <Globe size={16} />
            글로벌 소싱 맵
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md transition-all">
            <Truck size={16} />
            발주서 생성
          </button>
        </div>
      </div>

      {/* 2. SCM 핵심 지표 (KPI Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 공급망 건전성 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Anchor size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              Stable
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">공급망 건전성</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">94.2점</p>
          <p className="text-xs text-slate-400 mt-2">주요 파트너 리스크 낮음</p>
        </div>

        {/* 평균 리드타임 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <Clock size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              -2일 <ArrowUpRight size={12} className="rotate-180" />
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">평균 조달 기간 (Lead Time)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">12.5일</p>
          <p className="text-xs text-slate-400 mt-2">전월 대비 단축됨</p>
        </div>

        {/* 입고 예정 물량 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-xl">
              <Package size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
              Incoming
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">금주 입고 예정</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">4,500 kg</p>
          <p className="text-xs text-slate-400 mt-2">오메가-3 등 4종</p>
        </div>

        {/* 조달 리스크 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
              <AlertTriangle size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              Warning
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">원자재 가격 변동</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">+8.4%</p>
          <p className="text-xs text-slate-400 mt-2">환율 상승 영향 주의</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 글로벌 소싱 현황 (리스트 형태) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">주요 파트너사 현황 (Suppliers)</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="공급사 검색..." 
                className="pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="p-4 pl-6">공급사명</th>
                  <th className="p-4">국가</th>
                  <th className="p-4">주요 품목</th>
                  <th className="p-4">평균 리드타임</th>
                  <th className="p-4">신뢰도</th>
                  <th className="p-4 text-right pr-6">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {SUPPLIERS.map((supplier) => (
                  <tr key={supplier.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 pl-6 font-bold text-slate-900">{supplier.name}</td>
                    <td className="p-4 text-slate-600 flex items-center gap-2">
                      <MapPin size={14} className="text-slate-400" />
                      {supplier.country}
                    </td>
                    <td className="p-4 text-slate-600">
                      <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs">{supplier.material}</span>
                    </td>
                    <td className="p-4 text-slate-600">{supplier.leadTime}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-slate-100 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full ${supplier.reliability >= 90 ? 'bg-green-500' : 'bg-orange-500'}`} 
                            style={{ width: `${supplier.reliability}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-slate-700">{supplier.reliability}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-right pr-6">
                      {supplier.status === 'Stable' ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600">
                          <CheckCircle2 size={14} /> 정상
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500">
                          <AlertTriangle size={14} /> 지연 주의
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* [오른쪽] 물류 네트워크 시각화 (간략) */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <h3 className="font-bold text-slate-900 mb-6">물류 리스크 모니터링</h3>
          
          <div className="space-y-4">
            {/* 노르웨이 경로 */}
            <div className="relative p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="absolute top-4 right-4 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                정상 운항
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">NO</div>
                <div className="h-[2px] w-12 bg-slate-300 relative">
                   <div className="absolute -top-1.5 left-1/2 -translate-x-1/2">
                     <Truck size={12} className="text-slate-400" />
                   </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xs">KR</div>
              </div>
              <p className="text-sm font-bold text-slate-800">Route: Norway &rarr; Busan</p>
              <p className="text-xs text-slate-500 mt-1">예상 도착: 1월 20일 (D-15)</p>
            </div>

            {/* 중국 경로 */}
            <div className="relative p-4 rounded-xl border border-orange-100 bg-orange-50/30">
              <div className="absolute top-4 right-4 text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded flex items-center gap-1">
                <AlertTriangle size={10} /> 통관 지연
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">CN</div>
                <div className="h-[2px] w-12 bg-orange-300 relative">
                   <div className="absolute -top-1.5 left-1/4">
                     <Truck size={12} className="text-orange-500" />
                   </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xs">KR</div>
              </div>
              <p className="text-sm font-bold text-slate-800">Route: Qingdao &rarr; Incheon</p>
              <p className="text-xs text-slate-500 mt-1">예상 도착: 1월 8일 (D-3)</p>
            </div>

            {/* 미국 경로 */}
            <div className="relative p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="absolute top-4 right-4 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                정상 운항
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">US</div>
                <div className="h-[2px] w-12 bg-slate-300 relative">
                   <div className="absolute -top-1.5 right-1/4">
                     <Truck size={12} className="text-slate-400" />
                   </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-xs">KR</div>
              </div>
              <p className="text-sm font-bold text-slate-800">Route: LA &rarr; Busan</p>
              <p className="text-xs text-slate-500 mt-1">예상 도착: 1월 25일 (D-20)</p>
            </div>
          </div>
        </div>

      </div>

      {/* 3. 하단 재고 예측 차트 (간략) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            <BarChart3 className="text-slate-500" size={18} />
            원자재 재고 소진 예측 (Inventory Forecast)
          </h3>
          <span className="text-xs text-slate-400">안전 재고 기준선 표시됨</span>
        </div>
        <div className="h-40 flex items-end gap-1 border-b border-slate-100 pb-2 relative">
          <div className="absolute bottom-10 w-full h-[1px] bg-red-300 border-dashed border-t border-red-300 z-10"></div>
          <span className="absolute bottom-11 right-0 text-[10px] text-red-500 font-bold bg-white px-1">Safety Stock</span>
          
          {[60, 58, 55, 52, 50, 48, 45, 42, 40, 38, 35, 32, 30, 28, 65, 62, 60, 58, 55, 52, 50, 48, 45, 42].map((h, i) => (
            <div key={i} className="flex-1 bg-brand-50 rounded-t-sm relative group">
              <div 
                className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-500 ${h < 35 ? 'bg-orange-400' : 'bg-brand-400'}`} 
                style={{ height: `${h}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-400 mt-2">
          <span>오늘</span>
          <span>+1주</span>
          <span>+2주</span>
          <span>+3주 (입고예정)</span>
          <span>+4주</span>
        </div>
      </div>
    </div>
  );
}