'use client';

import React from 'react';
import { 
  ShieldCheck, Lock, Eye, AlertTriangle, 
  Activity, Server, FileCode 
} from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">통합 보안 관제</h1>
        <p className="text-slate-500 mt-1">
          AI 모델 무결성 검증, 데이터 독성(Poisoning) 감지 및 온디바이스 보안 상태를 관리합니다.
        </p>
      </div>

      {/* 1. 보안 상태 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500 mb-1">모델 무결성 (Integrity)</p>
            <p className="text-xl font-bold text-green-600 flex items-center gap-2">
              <ShieldCheck size={20} /> Verified
            </p>
            <p className="text-xs text-slate-400 mt-2">마지막 해시 검증: 1분 전</p>
          </div>
          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
            <FileCode size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500 mb-1">데이터 독성 감지</p>
            <p className="text-xl font-bold text-slate-900">0 건</p>
            <p className="text-xs text-slate-400 mt-2">최근 24시간 내 위협 없음</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
            <Activity size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500 mb-1">온디바이스 보안</p>
            <p className="text-xl font-bold text-slate-900">Active</p>
            <p className="text-xs text-slate-400 mt-2">네트워크 격리 실행 중</p>
          </div>
          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
            <Lock size={24} />
          </div>
        </div>
      </div>

      {/* 2. 실시간 로그 */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-card">
        <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4">
          <h3 className="font-bold flex items-center gap-2">
            <Server size={18} className="text-green-400" />
            실시간 보안 로그 (Live Stream)
          </h3>
          <span className="text-xs font-mono text-green-400 animate-pulse">● Monitoring</span>
        </div>
        <div className="font-mono text-xs space-y-2 h-48 overflow-y-auto custom-scrollbar text-slate-300">
          <p>[14:00:01] <span className="text-blue-400">INFO</span> System health check passed. API Gateway latency 12ms.</p>
          <p>[14:00:05] <span className="text-blue-400">INFO</span> User(ID:42) login success via Bio-Auth.</p>
          <p>[14:00:12] <span className="text-green-400">SAFE</span> Safety Gate filtered 'Ibuprofen' from request #9982 (Reason: Toxic to dogs).</p>
          <p>[14:00:45] <span className="text-yellow-400">WARN</span> Unusual traffic detected from IP 192.168.x.x (Rate limit applied).</p>
          <p>[14:01:02] <span className="text-blue-400">INFO</span> Model weights update received from Federated Client #21.</p>
        </div>
      </div>
    </div>
  );
}