'use client';

import React from 'react';
import { 
  Factory, Activity, Zap, PlayCircle, 
  StopCircle, AlertTriangle, Settings, Timer 
} from 'lucide-react';

export default function MesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">생산 실행 (MES)</h1>
          <p className="text-slate-500 mt-1">
            제조 라인의 가동 현황과 품질 데이터를 실시간으로 모니터링합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 font-bold rounded-lg border border-green-200">
            <Activity size={18} />
            Line A 가동 중
          </div>
        </div>
      </div>

      {/* 라인별 모니터링 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line A */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><Factory size={24} /></div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Production Line A</h3>
                <p className="text-xs text-green-600 font-bold mt-0.5">● Running</p>
              </div>
            </div>
            <div className="text-right">
               <p className="text-xs text-slate-400">Target: 5,000</p>
               <p className="text-2xl font-bold text-slate-900">3,420</p>
            </div>
          </div>
          
          {/* OEE 지표 */}
          <div className="grid grid-cols-3 gap-4 mb-6">
             <div className="text-center p-3 bg-slate-50 rounded-xl">
               <p className="text-xs text-slate-500 mb-1">가동률 (Availability)</p>
               <p className="text-lg font-bold text-blue-600">98%</p>
             </div>
             <div className="text-center p-3 bg-slate-50 rounded-xl">
               <p className="text-xs text-slate-500 mb-1">성능 (Performance)</p>
               <p className="text-lg font-bold text-green-600">92%</p>
             </div>
             <div className="text-center p-3 bg-slate-50 rounded-xl">
               <p className="text-xs text-slate-500 mb-1">양품률 (Quality)</p>
               <p className="text-lg font-bold text-purple-600">99.5%</p>
             </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 flex items-center justify-center gap-2">
              <StopCircle size={16} /> 일시 정지
            </button>
            <button className="flex-1 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 flex items-center justify-center gap-2">
              <Settings size={16} /> 공정 제어
            </button>
          </div>
        </div>

        {/* Line B */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card opacity-90">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded-lg text-slate-400"><Factory size={24} /></div>
              <div>
                <h3 className="text-lg font-bold text-slate-500">Production Line B</h3>
                <p className="text-xs text-orange-500 font-bold mt-0.5">● Maintenance</p>
              </div>
            </div>
            <div className="text-right opacity-50">
               <p className="text-xs text-slate-400">Target: 3,000</p>
               <p className="text-2xl font-bold text-slate-500">0</p>
            </div>
          </div>
          
           <div className="flex flex-col items-center justify-center h-32 bg-slate-50 rounded-xl border border-dashed border-slate-200 mb-6">
             <Settings className="text-slate-300 mb-2 animate-spin-slow" size={32} />
             <p className="text-sm font-bold text-slate-500">정기 점검 중입니다.</p>
             <p className="text-xs text-slate-400">예상 완료: 16:00</p>
           </div>

          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
              <PlayCircle size={16} /> 가동 시작
            </button>
          </div>
        </div>
      </div>

      {/* 하단 실시간 품질 로그 */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-card">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700">
           <h3 className="font-bold flex items-center gap-2">
             <Activity size={18} className="text-green-400" />
             실시간 공정 로그 (Live Stream)
           </h3>
           <span className="text-xs text-green-400 font-mono">Monitoring...</span>
        </div>
        <div className="font-mono text-xs space-y-2 h-32 overflow-y-auto custom-scrollbar text-slate-300">
          <p>[14:20:05] <span className="text-blue-400">INFO</span> Line A: Mixer speed adjusted to 1200rpm (Auto).</p>
          <p>[14:20:02] <span className="text-green-400">PASS</span> Line A: Quality check #8821 passed (Weight: 50.1g).</p>
          <p>[14:19:45] <span className="text-blue-400">INFO</span> Line A: Batch #2024 finished.</p>
          <p>[14:15:22] <span className="text-yellow-400">WARN</span> Line B: Maintenance mode activated by User(ID:Admin).</p>
        </div>
      </div>
    </div>
  );
}