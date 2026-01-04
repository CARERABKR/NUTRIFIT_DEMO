'use client';

import React from 'react';
import { 
  Network, Share2, Webhook, Link, 
  Activity, CheckCircle2, XCircle, ArrowRight 
} from 'lucide-react';

export default function IpaasPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">시스템 통합 (iPaaS)</h1>
          <p className="text-slate-500 mt-1">
            내/외부 API 연동 상태 및 데이터 흐름을 중앙에서 관리합니다.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
          <Link size={16} />
          새 커넥터 연결
        </button>
      </div>

      {/* 통합 현황 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Network size={24} /></div>
             <div>
               <p className="text-sm font-bold text-slate-500">활성 통합 흐름</p>
               <p className="text-2xl font-bold text-slate-900">24개</p>
             </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between text-xs">
             <span className="text-slate-400">일일 트랜잭션</span>
             <span className="font-bold text-slate-700">1.2M 건</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-green-50 text-green-600 rounded-xl"><Activity size={24} /></div>
             <div>
               <p className="text-sm font-bold text-slate-500">API 가동률</p>
               <p className="text-2xl font-bold text-slate-900">99.8%</p>
             </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between text-xs">
             <span className="text-slate-400">평균 응답속도</span>
             <span className="font-bold text-slate-700">145ms</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-red-50 text-red-600 rounded-xl"><XCircle size={24} /></div>
             <div>
               <p className="text-sm font-bold text-slate-500">연동 에러</p>
               <p className="text-2xl font-bold text-slate-900">8건</p>
             </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between text-xs">
             <span className="text-slate-400">최근 발생</span>
             <span className="font-bold text-red-600">결제 모듈 타임아웃</span>
          </div>
        </div>
      </div>

      {/* 커넥터 상태 리스트 */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h3 className="font-bold text-slate-900">주요 서비스 커넥터 상태</h3>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            { name: 'Stripe Payments', type: 'Billing', status: 'Active', latency: '210ms', lastSync: '1분 전' },
            { name: 'Slack Notification', type: 'Messaging', status: 'Active', latency: '85ms', lastSync: '방금 전' },
            { name: 'SAP ERP Sync', type: 'Legacy', status: 'Warning', latency: '850ms', lastSync: '3시간 전' },
            { name: 'AWS S3 Bucket', type: 'Storage', status: 'Active', latency: '45ms', lastSync: '10분 전' },
          ].map((conn, i) => (
            <div key={i} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border
                  ${conn.name.includes('Stripe') ? 'bg-indigo-50 border-indigo-100 text-indigo-600' : 
                    conn.name.includes('Slack') ? 'bg-orange-50 border-orange-100 text-orange-600' : 
                    'bg-slate-50 border-slate-200 text-slate-600'}`}>
                  <Webhook size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{conn.name}</p>
                  <p className="text-xs text-slate-500">{conn.type} • Last Sync: {conn.lastSync}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-slate-400">Latency</p>
                  <p className={`text-sm font-bold ${parseInt(conn.latency) > 500 ? 'text-red-500' : 'text-slate-700'}`}>
                    {conn.latency}
                  </p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1
                  ${conn.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
                  {conn.status === 'Active' ? <CheckCircle2 size={12}/> : <XCircle size={12}/>}
                  {conn.status}
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-600">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}