'use client';

import React from 'react';
import { 
  Server, Cpu, HardDrive, Activity, 
  Power, RefreshCw, AlertCircle, CheckCircle2, 
  Terminal, Shield 
} from 'lucide-react';

export default function SystemPage() {
  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">시스템 운영 (Ops)</h1>
          <p className="text-slate-500 mt-1">
            전사 서버 인프라 상태와 리소스 사용량을 실시간으로 모니터링합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <Terminal size={16} />
            웹 터미널 접속
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <RefreshCw size={16} />
            상태 새로고침
          </button>
        </div>
      </div>

      {/* 리소스 현황 KPI */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-xl"><Activity size={20} /></div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Healthy</span>
          </div>
          <p className="text-sm font-bold text-slate-500">시스템 가동률 (Uptime)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">99.99%</p>
          <p className="text-xs text-slate-400 mt-2">최근 30일 무중단</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Cpu size={20} /></div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Stable</span>
          </div>
          <p className="text-sm font-bold text-slate-500">CPU 평균 사용률</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">42.5%</p>
          <p className="text-xs text-slate-400 mt-2">피크 시간대 65%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><HardDrive size={20} /></div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Warning</span>
          </div>
          <p className="text-sm font-bold text-slate-500">스토리지 사용량</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">8.2 TB</p>
          <p className="text-xs text-slate-400 mt-2">전체 용량의 85% 사용</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-slate-100 text-slate-600 rounded-xl"><Shield size={20} /></div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">v2.4.1</span>
          </div>
          <p className="text-sm font-bold text-slate-500">보안 패치 상태</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">최신</p>
          <p className="text-xs text-slate-400 mt-2">취약점 점검 완료</p>
        </div>
      </div>

      {/* 서버 인스턴스 리스트 */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
        <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Server size={20} className="text-slate-500" />
          주요 서버 인스턴스 상태
        </h3>
        <div className="space-y-4">
          {[
            { name: 'prod-api-svr-01', role: 'API Gateway', ip: '10.0.1.5', cpu: 45, mem: 60, status: 'Running' },
            { name: 'prod-db-master', role: 'PostgreSQL Primary', ip: '10.0.2.10', cpu: 25, mem: 82, status: 'Running' },
            { name: 'dev-build-agent', role: 'CI/CD Runner', ip: '10.0.3.55', cpu: 10, mem: 30, status: 'Idle' },
            { name: 'analytics-worker', role: 'Data Processing', ip: '10.0.4.12', cpu: 88, mem: 90, status: 'Heavy Load' },
          ].map((svr, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${svr.status === 'Running' ? 'bg-green-100 text-green-600' : svr.status === 'Idle' ? 'bg-slate-200 text-slate-500' : 'bg-orange-100 text-orange-600'}`}>
                  <Power size={18} />
                </div>
                <div>
                  <p className="font-bold text-slate-800">{svr.name}</p>
                  <p className="text-xs text-slate-500">{svr.role} • {svr.ip}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="w-32">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">CPU</span>
                    <span className="font-bold text-slate-700">{svr.cpu}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full ${svr.cpu > 80 ? 'bg-orange-500' : 'bg-blue-500'}`} style={{width: `${svr.cpu}%`}}></div>
                  </div>
                </div>
                <div className="w-32">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Memory</span>
                    <span className="font-bold text-slate-700">{svr.mem}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full ${svr.mem > 80 ? 'bg-orange-500' : 'bg-purple-500'}`} style={{width: `${svr.mem}%`}}></div>
                  </div>
                </div>
                <div className="w-24 text-right">
                   {svr.status === 'Running' ? (
                     <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600"><CheckCircle2 size={12}/> 정상</span>
                   ) : svr.status === 'Idle' ? (
                     <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500">대기</span>
                   ) : (
                     <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500"><AlertCircle size={12}/> 부하</span>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}