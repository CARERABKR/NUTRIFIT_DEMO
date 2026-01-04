'use client';

import React from 'react';
import { 
  Layers, DollarSign, Users, Package, 
  TrendingUp, AlertCircle, CheckCircle2, 
  BarChart3, ArrowUpRight, ArrowDownRight, FileText 
} from 'lucide-react';

export default function ErpPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">전사 자원 관리 (ERP)</h1>
          <p className="text-slate-500 mt-1">
            재무, 인사, 재고 등 기업의 핵심 리소스 현황을 통합 관리합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <FileText size={16} />
            결재 대기 문서 (3)
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <Layers size={16} />
            리소스 리포트 생성
          </button>
        </div>
      </div>

      {/* 2. 핵심 리소스 요약 (KPI Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 재무 상태 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <DollarSign size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              +8.4% <ArrowUpRight size={12} />
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">이번 달 영업이익</p>
          <p className="text-2xl font-bold text-slate-900">₩ 1.8억</p>
          <p className="text-xs text-slate-400 mt-1">목표 달성률 105%</p>
        </div>

        {/* 인적 자원 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Users size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">Total HC</span>
          </div>
          <p className="text-sm font-bold text-slate-500">임직원 및 파트너</p>
          <p className="text-2xl font-bold text-slate-900">72명</p>
          <p className="text-xs text-slate-400 mt-1">본사 14명 / 파트너 수의사 58명</p>
        </div>

        {/* 재고 자산 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <Package size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
              Alert
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">원자재 재고 가치</p>
          <p className="text-2xl font-bold text-slate-900">₩ 4,200만</p>
          <p className="text-xs text-orange-500 mt-1">관절 영양제 원료 부족 예상</p>
        </div>

        {/* 운영 효율 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <TrendingUp size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">Efficiency</span>
          </div>
          <p className="text-sm font-bold text-slate-500">리소스 가동률</p>
          <p className="text-2xl font-bold text-slate-900">92.5%</p>
          <p className="text-xs text-slate-400 mt-1">물류 센터 부하 높음</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* [왼쪽] 예산 집행 현황 (Budget Monitoring) */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="text-slate-500" size={18} />
              부서별 예산 집행 현황 (Q1)
            </h3>
            <span className="text-xs text-slate-400">단위: 백만원</span>
          </div>
          
          <div className="space-y-6">
            {/* 마케팅 */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-700">마케팅/영업 (Marketing)</span>
                <span className="font-bold text-slate-900">85% (8,500 / 10,000)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* R&D */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-700">R&D (AI/Data)</span>
                <span className="font-bold text-slate-900">45% (4,500 / 10,000)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            {/* 운영/물류 */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-700">운영/물류 (Ops)</span>
                <span className="font-bold text-orange-600">92% (9,200 / 10,000)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <p className="text-xs text-orange-500 text-right font-bold">⚠️ 예산 초과 임박</p>
            </div>

            {/* 일반관리 */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-700">일반 관리 (Admin)</span>
                <span className="font-bold text-slate-900">30% (900 / 3,000)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-slate-400 h-2.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* [오른쪽] 원자재 재고 현황 (Raw Materials) */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Package className="text-slate-500" size={18} />
              주요 원자재 재고 알림
            </h3>
            <span className="text-xs font-bold text-brand-600 cursor-pointer">WMS 전체보기 &rarr;</span>
          </div>
          <div className="p-0">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-bold">
                <tr>
                  <th className="p-4 pl-6">품목명</th>
                  <th className="p-4">현재고</th>
                  <th className="p-4">상태</th>
                  <th className="p-4 pr-6">조치</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800">오메가-3 (rTG)</td>
                  <td className="p-4 text-slate-600">1,200 kg</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">충분</span></td>
                  <td className="p-4 pr-6 text-slate-400 text-xs">-</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800">글루코사민</td>
                  <td className="p-4 text-slate-600">80 kg</td>
                  <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">부족 (Low)</span></td>
                  <td className="p-4 pr-6"><button className="text-xs font-bold text-brand-600 underline">발주 신청</button></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800">유산균 (Probiotics)</td>
                  <td className="p-4 text-slate-600">450 kg</td>
                  <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">충분</span></td>
                  <td className="p-4 pr-6 text-slate-400 text-xs">-</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800">친환경 패키지 Box</td>
                  <td className="p-4 text-slate-600">500 ea</td>
                  <td className="p-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-bold">주의</span></td>
                  <td className="p-4 pr-6"><button className="text-xs font-bold text-brand-600 underline">재고 확인</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <AlertCircle size={14} className="text-slate-400" />
              <span>자동 발주 시스템(Auto-Order)이 켜져 있습니다. (재고 10% 미만 시)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}