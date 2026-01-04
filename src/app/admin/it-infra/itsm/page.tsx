'use client';

import React from 'react';
import { 
  Headphones, Ticket, LifeBuoy, CheckCircle2, 
  AlertCircle, Clock, Search, MoreHorizontal 
} from 'lucide-react';

export default function ItsmPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">IT 서비스 관리 (ITSM)</h1>
          <p className="text-slate-500 mt-1">
            사내 IT 지원 요청 및 장애 티켓을 처리합니다.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
          <Ticket size={16} />
          티켓 생성
        </button>
      </div>

      {/* 티켓 현황 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Ticket size={20} /></div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Open</span>
          </div>
          <p className="text-sm font-bold text-slate-500">처리 대기</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">12건</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><AlertCircle size={20} /></div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Urgent</span>
          </div>
          <p className="text-sm font-bold text-slate-500">긴급 장애</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">1건</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Clock size={20} /></div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Good</span>
          </div>
          <p className="text-sm font-bold text-slate-500">평균 해결 시간</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">2.4시간</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-xl"><LifeBuoy size={20} /></div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">98%</span>
          </div>
          <p className="text-sm font-bold text-slate-500">SLA 준수율</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">Target 95%</p>
        </div>
      </div>

      {/* 티켓 리스트 */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
          <h3 className="font-bold text-slate-900">최근 접수된 티켓</h3>
          <div className="relative">
             <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
             <input type="text" placeholder="티켓 검색..." className="pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none" />
          </div>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 font-bold">
            <tr>
              <th className="p-4 pl-6">ID</th>
              <th className="p-4">제목</th>
              <th className="p-4">요청자</th>
              <th className="p-4">우선순위</th>
              <th className="p-4">상태</th>
              <th className="p-4 pr-6 text-right">설정</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[
              { id: '#1024', title: 'VPN 접속 오류 (Mac OS)', user: '김디자이너', priority: 'High', status: 'In Progress' },
              { id: '#1023', title: 'Adobe 라이선스 할당 요청', user: '이마케터', priority: 'Medium', status: 'New' },
              { id: '#1022', title: '회의실 모니터 연결 불량', user: '박기획', priority: 'Low', status: 'Resolved' },
              { id: '#1021', title: '사내 메신저 로그인 불가', user: '최개발', priority: 'Critical', status: 'Resolved' },
            ].map((ticket, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 pl-6 font-mono text-slate-500">{ticket.id}</td>
                <td className="p-4 font-bold text-slate-800">{ticket.title}</td>
                <td className="p-4 text-slate-600 flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">{ticket.user[0]}</div>
                   {ticket.user}
                </td>
                <td className="p-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded 
                    ${ticket.priority === 'Critical' ? 'bg-red-100 text-red-600' : 
                      ticket.priority === 'High' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="p-4">
                   {ticket.status === 'Resolved' ? (
                     <span className="flex items-center gap-1 text-xs font-bold text-green-600"><CheckCircle2 size={12}/> 해결됨</span>
                   ) : ticket.status === 'In Progress' ? (
                     <span className="flex items-center gap-1 text-xs font-bold text-blue-600"><Headphones size={12}/> 처리 중</span>
                   ) : (
                     <span className="flex items-center gap-1 text-xs font-bold text-slate-500">접수</span>
                   )}
                </td>
                <td className="p-4 pr-6 text-right">
                  <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}