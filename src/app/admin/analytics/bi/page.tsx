'use client';

import React from 'react';
import { 
  BarChart4, TrendingUp, Users, DollarSign, 
  Download, Calendar, PieChart, ArrowUpRight, ArrowDownRight 
} from 'lucide-react';

export default function BIPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">비즈니스 분석 (BI)</h1>
          <p className="text-slate-500 mt-1">
            [사업계획서] 단위 경제(Unit Economics) 및 채널별 마케팅 효율을 분석합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <Calendar size={16} />
            2026년 1월
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <Download size={16} />
            리포트 다운로드
          </button>
        </div>
      </div>

      {/* 2. 핵심 재무 지표 (Unit Economics) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-brand-50 text-brand-600 rounded-lg">
              <DollarSign size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              +12.5% <ArrowUpRight size={12} />
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">평균 객단가 (ARPU)</p>
          <p className="text-2xl font-bold text-slate-900">₩ 45,000</p>
          <p className="text-xs text-slate-400 mt-1">목표 대비 100% 달성</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <TrendingUp size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              +5.2% <ArrowUpRight size={12} />
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">공헌이익률 (Margin)</p>
          <p className="text-2xl font-bold text-slate-900">38.0%</p>
          <p className="text-xs text-slate-400 mt-1">건당 이익 ₩ 17,100</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <Users size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
              -2.1% <ArrowDownRight size={12} />
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">고객 획득 비용 (CAC)</p>
          <p className="text-2xl font-bold text-slate-900">₩ 34,200</p>
          <p className="text-xs text-slate-400 mt-1">Target: ₩ 35,000 이하</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <PieChart size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              High <ArrowUpRight size={12} />
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">LTV / CAC 비율</p>
          <p className="text-2xl font-bold text-slate-900">3.8x</p>
          <p className="text-xs text-slate-400 mt-1">건전성 매우 좋음 (&gt;3.0)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 채널별 성과 분석 (Table) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">채널별 마케팅 효율 (ROAS)</h3>
            <button className="text-xs font-bold text-brand-600 hover:underline">상세 분석 &rarr;</button>
          </div>
          <div className="p-0">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-bold">
                <tr>
                  <th className="p-4 pl-6">채널명</th>
                  <th className="p-4">획득 비용 (CAC)</th>
                  <th className="p-4">전환율 (CVR)</th>
                  <th className="p-4">비중</th>
                  <th className="p-4 pr-6">성과 평가</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800">🏥 병원 파트너십</td>
                  <td className="p-4 text-green-600 font-bold">₩ 15,000</td>
                  <td className="p-4">20.5%</td>
                  <td className="p-4">50%</td>
                  <td className="p-4 pr-6"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Best</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800">🔍 검색 광고 (SA)</td>
                  <td className="p-4 text-slate-600">₩ 35,000</td>
                  <td className="p-4">2.8%</td>
                  <td className="p-4">20%</td>
                  <td className="p-4 pr-6"><span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold">Normal</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800">📱 SNS (Meta)</td>
                  <td className="p-4 text-slate-600">₩ 30,000</td>
                  <td className="p-4">1.5%</td>
                  <td className="p-4">20%</td>
                  <td className="p-4 pr-6"><span className="px-2 py-1 bg-orange-50 text-orange-600 rounded text-xs font-bold">Warning</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800">🗣️ 바이럴/체험단</td>
                  <td className="p-4 text-blue-600 font-bold">₩ 20,000</td>
                  <td className="p-4">6.2%</td>
                  <td className="p-4">10%</td>
                  <td className="p-4 pr-6"><span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold">Good</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* [오른쪽] 수익 구조 시각화 (Waterfall Chart 느낌) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <h3 className="font-bold text-slate-900 mb-6">구독 수익 구조 (Profit Structure)</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-700">총 매출 (Revenue)</span>
                <span className="font-bold text-slate-900">100% (4.5만)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-slate-800 h-3 rounded-full w-full"></div>
              </div>
            </div>

            <div className="pl-4 space-y-4 border-l-2 border-slate-100">
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>(-) 제품 원가 (COGS)</span>
                  <span>35%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-red-400 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>(-) 물류/패키징비</span>
                  <span>10%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>(-) 파트너 수수료</span>
                  <span>12%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm font-bold text-brand-600">공헌이익 (Profit)</p>
                  <p className="text-xs text-slate-400">마케팅비/고정비 재원</p>
                </div>
                <p className="text-xl font-bold text-brand-600">38%</p>
              </div>
              <div className="w-full bg-brand-100 rounded-full h-3 mt-2">
                <div className="bg-brand-500 h-3 rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}