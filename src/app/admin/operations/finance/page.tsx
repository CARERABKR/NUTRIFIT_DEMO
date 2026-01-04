'use client';

import React from 'react';
import { 
  CreditCard, DollarSign, TrendingUp, Download, 
  FileText, Calendar, ArrowUpRight, ArrowDownRight, 
  CheckCircle2, AlertCircle, MoreHorizontal 
} from 'lucide-react';

// [임시 데이터] 최근 거래/정산 내역
const TRANSACTIONS = [
  { id: 'TRX-2026-001', date: '2026.01.05', type: '정산 지급', partner: '청담우리동물병원', amount: -4500000, status: 'Completed' },
  { id: 'TRX-2026-002', date: '2026.01.05', type: '구독 매출', partner: 'Stripe 결제', amount: 1250000, status: 'Completed' },
  { id: 'TRX-2026-003', date: '2026.01.04', type: '환불 처리', partner: '김철수 고객', amount: -45000, status: 'Refunded' },
  { id: 'TRX-2026-004', date: '2026.01.04', type: '구독 매출', partner: 'Stripe 결제', amount: 890000, status: 'Completed' },
  { id: 'TRX-2026-005', date: '2026.01.03', type: '정산 대기', partner: '해운대동물병원', amount: -3200000, status: 'Pending' },
];

export default function FinancePage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">재무 및 정산</h1>
          <p className="text-slate-500 mt-1">
            실시간 매출 흐름과 병원 파트너 정산 내역을 투명하게 관리합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all">
            <Calendar size={16} />
            2026년 1월
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md transition-all">
            <Download size={16} />
            세무 리포트 다운로드
          </button>
        </div>
      </div>

      {/* 2. 핵심 재무 지표 (KPI Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 월간 매출 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <DollarSign size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +12.4% <ArrowUpRight size={12} />
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">이번 달 매출 (Revenue)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">₩ 124,500,000</p>
          <p className="text-xs text-slate-400 mt-2">목표 달성률 102%</p>
        </div>

        {/* 정산 예정금 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <CreditCard size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
              D-5
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">정산 예정 금액 (Payable)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">₩ 42,000,000</p>
          <p className="text-xs text-slate-400 mt-2">다음 지급일: 1월 10일</p>
        </div>

        {/* 영업 이익 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-xl">
              <TrendingUp size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              30.5%
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">영업 이익 (Operating Profit)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">₩ 38,200,000</p>
          <p className="text-xs text-slate-400 mt-2">전월 대비 +5.2% 성장</p>
        </div>

        {/* 미수금 현황 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
              <AlertCircle size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              Clean
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">미수금 (Receivable)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">₩ 0</p>
          <p className="text-xs text-slate-400 mt-2">모든 결제가 정상 처리됨</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 매출 추이 그래프 */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900">실시간 매출 추이 (30일)</h3>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-brand-500 rounded-full"></span>
              <span className="text-xs text-slate-500">매출</span>
              <span className="w-3 h-3 bg-slate-200 rounded-full ml-2"></span>
              <span className="text-xs text-slate-500">비용</span>
            </div>
          </div>
          
          {/* 막대 그래프 시각화 */}
          <div className="h-64 flex items-end justify-between gap-3 px-2">
            {[45, 50, 40, 60, 75, 65, 80, 95, 85, 90, 100, 110].map((h, i) => (
              <div key={i} className="w-full flex flex-col gap-1 h-full justify-end group cursor-pointer">
                {/* 툴팁 (Hover 시 표시) */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center mb-1">
                  <span className="text-[10px] font-bold bg-slate-800 text-white px-1.5 py-0.5 rounded">
                    Day {i + 1}
                  </span>
                </div>
                {/* 막대 (Bar) */}
                <div className="w-full bg-slate-100 rounded-t-sm relative flex flex-col justify-end overflow-hidden" style={{ height: `${h}%` }}>
                  <div className="w-full bg-brand-500 absolute bottom-0 transition-all duration-500 group-hover:bg-brand-600" style={{ height: '70%' }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs text-slate-400 px-2 font-medium">
            <span>1일</span>
            <span>15일</span>
            <span>30일</span>
          </div>
        </div>

        {/* [오른쪽] 비용 분석 (Progress Bar 형태) */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <h3 className="font-bold text-slate-900 mb-6">이번 달 지출 분석</h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-700">파트너 정산금</span>
                <span className="font-bold text-slate-900">42% (4,200만)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-700">제품 원가 (COGS)</span>
                <span className="font-bold text-slate-900">25% (2,500만)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-700">마케팅/운영비</span>
                <span className="font-bold text-slate-900">18% (1,800만)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>

            <div className="pt-6 mt-2 border-t border-slate-50">
               <button className="w-full py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                 <FileText size={16} />
                 지출 증빙 영수증 관리
               </button>
            </div>
          </div>
        </div>

      </div>

      {/* 3. 최근 거래 내역 테이블 */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">최근 거래 내역 (Transactions)</h3>
          <button className="text-xs font-bold text-brand-600 hover:underline">전체 내역 보기 &rarr;</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4 pl-6">거래 일자</th>
                <th className="p-4">구분</th>
                <th className="p-4">거래처 / 고객</th>
                <th className="p-4 text-right">금액</th>
                <th className="p-4 text-center">상태</th>
                <th className="p-4 text-right pr-6">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {TRANSACTIONS.map((trx) => (
                <tr key={trx.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 pl-6">
                    <div className="font-bold text-slate-900">{trx.date}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{trx.id}</div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold
                      ${trx.type.includes('매출') ? 'bg-green-50 text-green-700' : 
                        trx.type.includes('정산') ? 'bg-purple-50 text-purple-700' : 
                        'bg-red-50 text-red-700'}
                    `}>
                      {trx.type}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">{trx.partner}</td>
                  <td className={`p-4 text-right font-bold ${trx.amount > 0 ? 'text-blue-600' : 'text-slate-900'}`}>
                    {trx.amount > 0 ? '+' : ''}{trx.amount.toLocaleString()} 원
                  </td>
                  <td className="p-4 text-center">
                    {trx.status === 'Completed' ? (
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-green-600">
                        <CheckCircle2 size={14} /> 완료
                      </div>
                    ) : trx.status === 'Pending' ? (
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-orange-500">
                        <AlertCircle size={14} /> 대기
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-400">
                        취소됨
                      </div>
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