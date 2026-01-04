'use client';

import React from 'react';
import { 
  Package, Archive, ScanBarcode, Truck, 
  ArrowUpRight, AlertCircle, Map, Search, 
  ArrowRight, Box
} from 'lucide-react';

export default function WmsPage() {
  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">창고 관리 (WMS)</h1>
          <p className="text-slate-500 mt-1">
            실시간 재고 현황 및 입출고 프로세스를 빈(Bin) 단위로 정밀하게 추적합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <ScanBarcode size={16} />
            PDA 모드 전환
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <Box size={16} />
            재고 실사 등록
          </button>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Package size={20} /></div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12%</span>
          </div>
          <p className="text-sm font-bold text-slate-500">총 보관 재고</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">14,250 ea</p>
          <p className="text-xs text-slate-400 mt-2">가용 적재율 82%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-xl"><ArrowUpRight size={20} /></div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Today</span>
          </div>
          <p className="text-sm font-bold text-slate-500">금일 출고 완료</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">450 건</p>
          <p className="text-xs text-slate-400 mt-2">오후 2시 마감 기준</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Truck size={20} /></div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Ingest</span>
          </div>
          <p className="text-sm font-bold text-slate-500">입고 대기</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">12 Pallets</p>
          <p className="text-xs text-slate-400 mt-2">Zone A-04 하역 중</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><AlertCircle size={20} /></div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Low</span>
          </div>
          <p className="text-sm font-bold text-slate-500">재고 부족 알림</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">3 품목</p>
          <p className="text-xs text-slate-400 mt-2">안전재고 미만</p>
        </div>
      </div>

      {/* 웨어하우스 맵 시각화 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Map size={18} className="text-slate-500" />
              Zone 별 적재 현황
            </h3>
            <div className="flex gap-2">
              <span className="text-[10px] flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span>여유</span>
              <span className="text-[10px] flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400"></span>혼잡</span>
              <span className="text-[10px] flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span>Full</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 h-64">
            {['A', 'B', 'C', 'D'].map((zone, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-3 flex flex-col justify-between hover:bg-slate-50 transition-colors cursor-pointer relative group">
                <span className="font-bold text-slate-700">Zone {zone}</span>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Usage</span>
                    <span>{i === 0 ? '95%' : i === 1 ? '45%' : '70%'}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full">
                    <div className={`h-2 rounded-full ${i === 0 ? 'bg-red-500' : i === 1 ? 'bg-blue-500' : 'bg-orange-400'}`} style={{width: i === 0 ? '95%' : i === 1 ? '45%' : '70%'}}></div>
                  </div>
                </div>
                {/* 랙 시각화 (장식) */}
                <div className="grid grid-cols-3 gap-1 mt-2 opacity-30">
                  {[...Array(9)].map((_, j) => <div key={j} className="h-4 bg-slate-400 rounded-sm"></div>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 입고 예정 리스트 */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <h3 className="font-bold text-slate-900 mb-4">입고 예정 (Inbound)</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                  <Truck size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">PO-2026-00{item}</p>
                  <p className="text-xs text-slate-500">오메가3 원료 500kg</p>
                  <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded w-fit">
                    14:00 도착 예정
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full py-3 text-sm font-bold text-slate-500 hover:text-slate-800 border-t border-slate-200 mt-2">
              전체 일정 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}