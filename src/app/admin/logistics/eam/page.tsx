'use client';

import React from 'react';
import { 
  Wrench, Activity, AlertTriangle, Calendar, 
  CheckCircle2, HardDrive, Thermometer 
} from 'lucide-react';

export default function EamPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">자산 운용 (EAM)</h1>
          <p className="text-slate-500 mt-1">
            설비 수명 연장을 위한 예방 정비 및 자산 상태를 관리합니다.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
          <Wrench size={16} />
          정비 이력 조회
        </button>
      </div>

      {/* 설비 상태 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 설비 1: 정상 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <CheckCircle2 className="text-green-500" size={24} />
          </div>
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
               <Activity size={24} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900">혼합기 (Mixer-01)</h3>
               <p className="text-xs text-slate-500">Main Factory • Line A</p>
             </div>
          </div>
          <div className="space-y-3">
             <div className="flex justify-between text-xs">
               <span className="text-slate-500 flex items-center gap-1"><Thermometer size={12}/> 온도</span>
               <span className="font-bold text-slate-800">42°C (Normal)</span>
             </div>
             <div className="flex justify-between text-xs">
               <span className="text-slate-500 flex items-center gap-1"><Activity size={12}/> 진동</span>
               <span className="font-bold text-slate-800">0.2mm/s</span>
             </div>
             <div className="pt-3 border-t border-slate-50 text-center">
               <span className="text-[10px] text-slate-400">다음 정비일: 2026.02.15</span>
             </div>
          </div>
        </div>

        {/* 설비 2: 주의 */}
        <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-card relative overflow-hidden ring-1 ring-orange-100">
          <div className="absolute top-0 right-0 p-4">
            <AlertTriangle className="text-orange-500" size={24} />
          </div>
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
               <HardDrive size={24} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900">포장기 (Packer-03)</h3>
               <p className="text-xs text-slate-500">Main Factory • Line B</p>
             </div>
          </div>
          <div className="space-y-3">
             <div className="flex justify-between text-xs">
               <span className="text-slate-500 flex items-center gap-1"><Thermometer size={12}/> 온도</span>
               <span className="font-bold text-orange-600">65°C (High)</span>
             </div>
             <div className="flex justify-between text-xs">
               <span className="text-slate-500 flex items-center gap-1"><Activity size={12}/> 진동</span>
               <span className="font-bold text-slate-800">0.5mm/s</span>
             </div>
             <div className="pt-3 border-t border-slate-50 text-center">
               <button className="text-xs font-bold text-white bg-orange-500 px-3 py-1.5 rounded-lg hover:bg-orange-600 w-full">
                 점검 요청
               </button>
             </div>
          </div>
        </div>

        {/* 설비 3: 정상 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <CheckCircle2 className="text-green-500" size={24} />
          </div>
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
               <Activity size={24} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900">컨베이어 (Conv-A)</h3>
               <p className="text-xs text-slate-500">Logistics Center</p>
             </div>
          </div>
          <div className="space-y-3">
             <div className="flex justify-between text-xs">
               <span className="text-slate-500 flex items-center gap-1"><Thermometer size={12}/> 속도</span>
               <span className="font-bold text-slate-800">0.5 m/s</span>
             </div>
             <div className="flex justify-between text-xs">
               <span className="text-slate-500 flex items-center gap-1"><Activity size={12}/> 부하</span>
               <span className="font-bold text-slate-800">45%</span>
             </div>
             <div className="pt-3 border-t border-slate-50 text-center">
               <span className="text-[10px] text-slate-400">다음 정비일: 2026.03.01</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}