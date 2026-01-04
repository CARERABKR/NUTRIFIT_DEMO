'use client';

import React from 'react';
import { 
  Users, Phone, Mail, MessageCircle, 
  Search, Star, MoreHorizontal, UserPlus, 
  CheckCircle2, Clock, Filter 
} from 'lucide-react';

// [임시 데이터] 고객 목록
const CUSTOMERS = [
  { id: 1, name: '김민지', tier: 'VIP', pet: '코코 (푸들)', lastContact: '2시간 전', status: 'Active', satisfaction: 5 },
  { id: 2, name: '이준호', tier: 'Gold', pet: '망고 (비숑)', lastContact: '1일 전', status: 'Active', satisfaction: 4 },
  { id: 3, name: '박수빈', tier: 'Silver', pet: '루비 (말티즈)', lastContact: '3일 전', status: 'Churn Risk', satisfaction: 2 },
  { id: 4, name: '최현우', tier: 'Gold', pet: '맥스 (리트리버)', lastContact: '5일 전', status: 'Active', satisfaction: 5 },
  { id: 5, name: '정하은', tier: 'Silver', pet: '초코 (닥스훈트)', lastContact: '1주 전', status: 'Inactive', satisfaction: 3 },
];

export default function CrmPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">고객 관계 관리 (CRM)</h1>
          <p className="text-slate-500 mt-1">
            고객별 상담 이력, 등급 및 만족도를 통합 관리하여 이탈을 방지합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <Filter size={16} />
            필터
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <UserPlus size={16} />
            고객 등록
          </button>
        </div>
      </div>

      {/* 2. 핵심 KPI */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Users size={20} /></div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+124명</span>
          </div>
          <p className="text-sm font-bold text-slate-500">전체 고객 수</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">14,250</p>
          <p className="text-xs text-slate-400 mt-2">전월 대비 8% 성장</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Star size={20} /></div>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">High</span>
          </div>
          <p className="text-sm font-bold text-slate-500">VIP 비율</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">18.5%</p>
          <p className="text-xs text-slate-400 mt-2">고객 생애 가치(LTV) 높음</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-xl"><MessageCircle size={20} /></div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Today</span>
          </div>
          <p className="text-sm font-bold text-slate-500">상담 완료</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">142건</p>
          <p className="text-xs text-slate-400 mt-2">평균 응답 5분 이내</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><Clock size={20} /></div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Risk</span>
          </div>
          <p className="text-sm font-bold text-slate-500">이탈 위험군</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">3.2%</p>
          <p className="text-xs text-slate-400 mt-2">집중 케어 필요</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 고객 리스트 테이블 */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">고객 목록 (Customers)</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="이름, 아이디, 펫 이름..." 
                className="pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-brand-500 w-48"
              />
            </div>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 font-bold">
              <tr>
                <th className="p-4 pl-6">고객명 / 펫</th>
                <th className="p-4">등급</th>
                <th className="p-4">최근 상담</th>
                <th className="p-4">만족도</th>
                <th className="p-4">상태</th>
                <th className="p-4 pr-6 text-right">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {CUSTOMERS.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 pl-6">
                    <div className="font-bold text-slate-900">{customer.name}</div>
                    <div className="text-xs text-slate-400">{customer.pet}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold border
                      ${customer.tier === 'VIP' ? 'bg-purple-50 text-purple-700 border-purple-100' : 
                        customer.tier === 'Gold' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 
                        'bg-slate-50 text-slate-600 border-slate-200'}
                    `}>
                      {customer.tier}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">{customer.lastContact}</td>
                  <td className="p-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < customer.satisfaction ? "currentColor" : "none"} className={i < customer.satisfaction ? "" : "text-slate-200"} />
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    {customer.status === 'Active' ? (
                      <span className="text-xs font-bold text-green-600 flex items-center gap-1"><CheckCircle2 size={12}/> 정상</span>
                    ) : customer.status === 'Churn Risk' ? (
                      <span className="text-xs font-bold text-red-500 flex items-center gap-1"><Clock size={12}/> 이탈 위험</span>
                    ) : (
                      <span className="text-xs font-bold text-slate-400">휴면</span>
                    )}
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="p-1.5 hover:bg-slate-100 rounded text-slate-400">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* [오른쪽] 최근 상담 내역 */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <h3 className="font-bold text-slate-900 mb-6">최근 상담 내역 (Live)</h3>
          <div className="space-y-6 relative">
             <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-100"></div>
             
             {[
               { type: 'call', user: '김민지', time: '10분 전', msg: '배송지 변경 요청 처리 완료' },
               { type: 'mail', user: '이준호', time: '45분 전', msg: '구독 상품 성분 문의 답변' },
               { type: 'chat', user: '박수빈', time: '2시간 전', msg: '환불 규정 안내 (불만 접수)' },
             ].map((log, i) => (
               <div key={i} className="relative flex gap-4">
                 <div className={`relative z-10 w-7 h-7 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-[10px]
                   ${log.type === 'call' ? 'bg-green-500' : log.type === 'mail' ? 'bg-blue-500' : 'bg-orange-500'}
                 `}>
                   {log.type === 'call' ? <Phone size={12} /> : log.type === 'mail' ? <Mail size={12} /> : <MessageCircle size={12} />}
                 </div>
                 <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                   <div className="flex justify-between items-center mb-1">
                     <span className="font-bold text-sm text-slate-800">{log.user}</span>
                     <span className="text-xs text-slate-400">{log.time}</span>
                   </div>
                   <p className="text-xs text-slate-600 leading-relaxed">{log.msg}</p>
                 </div>
               </div>
             ))}
          </div>
          <button className="w-full mt-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
            상담 내역 전체보기
          </button>
        </div>
      </div>
    </div>
  );
}