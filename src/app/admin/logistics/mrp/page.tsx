'use client';

import React from 'react';
import { 
  Calculator, Package, Layers, Calendar, 
  ArrowRight, AlertCircle, ShoppingCart, BarChart3 
} from 'lucide-react';

export default function MrpPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">자재 소요 계획 (MRP)</h1>
          <p className="text-slate-500 mt-1">
            생산 계획에 맞춰 필요한 원자재 수량을 산출하고 발주를 자동화합니다.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
          <Calculator size={16} />
          소요량 산출 실행
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Package className="text-brand-600" size={20} />
            주요 자재 부족 예상 (Shortage)
          </h3>
          <div className="space-y-4">
            {[
              { name: '오메가-3 오일 (Premium)', stock: 120, need: 500, date: '1월 10일' },
              { name: '친환경 포장 박스 (S)', stock: 50, need: 2000, date: '1월 8일' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-red-50/50 border border-red-100 rounded-xl">
                <div>
                  <p className="font-bold text-slate-800">{item.name}</p>
                  <p className="text-xs text-red-600 mt-1 font-bold">부족분: {item.need - item.stock} ea</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">필요 시점</p>
                  <p className="text-sm font-bold text-slate-900">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShoppingCart className="text-blue-600" size={20} />
            자동 발주 추천 (Purchase Suggestion)
          </h3>
          <div className="space-y-4">
            <div className="p-4 border border-slate-200 rounded-xl flex justify-between items-center hover:bg-slate-50 transition-colors">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-1 inline-block">발주 제안</span>
                <p className="font-bold text-slate-800">글루코사민 분말 100kg</p>
                <p className="text-xs text-slate-500">공급사: Qingdao Pharma</p>
              </div>
              <button className="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-700">
                발주 승인
              </button>
            </div>
            <div className="p-4 border border-slate-200 rounded-xl flex justify-between items-center hover:bg-slate-50 transition-colors">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-1 inline-block">발주 제안</span>
                <p className="font-bold text-slate-800">비타민 D3 50kg</p>
                <p className="text-xs text-slate-500">공급사: Dupont Bio</p>
              </div>
              <button className="px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-700">
                발주 승인
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOM (Bill of Materials) 트리 구조 예시 */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-900">제품 BOM 구조 (Bill of Materials)</h3>
          <select className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
            <option>관절 튼튼 영양제 (Product A)</option>
          </select>
        </div>
        <div className="flex flex-col items-center pb-4">
          <div className="px-6 py-3 bg-brand-50 border border-brand-200 rounded-lg text-brand-700 font-bold mb-4">
            [완제품] 관절 튼튼 영양제 1Box
          </div>
          <div className="w-0.5 h-6 bg-slate-300 mb-4"></div>
          <div className="flex gap-8 w-full justify-center">
             <div className="flex flex-col items-center">
                <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium mb-2 shadow-sm">
                  💊 타블렛 (30정)
                </div>
                <div className="w-0.5 h-4 bg-slate-300 mb-2"></div>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-slate-50 border rounded text-slate-500">글루코사민</span>
                  <span className="text-xs px-2 py-1 bg-slate-50 border rounded text-slate-500">MSM</span>
                </div>
             </div>
             <div className="flex flex-col items-center">
                <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium mb-2 shadow-sm">
                  📦 패키지
                </div>
                <div className="w-0.5 h-4 bg-slate-300 mb-2"></div>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-slate-50 border rounded text-slate-500">종이 박스</span>
                  <span className="text-xs px-2 py-1 bg-slate-50 border rounded text-slate-500">라벨 스티커</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}