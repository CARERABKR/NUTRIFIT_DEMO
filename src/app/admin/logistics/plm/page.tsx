'use client';

import React from 'react';
import { 
  GitBranch, FileText, CheckCircle2, Clock, 
  Users, Layers, ArrowRight, FolderOpen 
} from 'lucide-react';

export default function PlmPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">제품 수명 주기 (PLM)</h1>
          <p className="text-slate-500 mt-1">
            신제품 기획부터 폐기까지의 전체 라이프사이클과 버전을 관리합니다.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
          <FileText size={16} />
          신규 프로젝트 생성
        </button>
      </div>

      {/* 진행 중인 프로젝트 카드 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          { name: '관절 케어 Pro v2.0', phase: 'Development', progress: 65, team: 'R&D Team A', dDay: 'D-20' },
          { name: '덴탈 츄 (개껌)', phase: 'Planning', progress: 20, team: 'Product Team', dDay: 'D-45' },
          { name: '유산균 스틱 (고양이용)', phase: 'Testing', progress: 90, team: 'QA Team', dDay: 'D-5' },
        ].map((project, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all group cursor-pointer">
             <div className="flex justify-between items-start mb-4">
               <span className={`px-2.5 py-1 rounded-full text-xs font-bold border
                 ${project.phase === 'Testing' ? 'bg-purple-50 text-purple-700 border-purple-100' : 
                   project.phase === 'Development' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                   'bg-slate-50 text-slate-600 border-slate-200'}
               `}>
                 {project.phase}
               </span>
               <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">{project.dDay}</span>
             </div>
             <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.name}</h3>
             <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
               <Users size={12} /> {project.team}
             </p>
             
             <div className="space-y-1">
               <div className="flex justify-between text-xs font-bold text-slate-600">
                 <span>Progress</span>
                 <span>{project.progress}%</span>
               </div>
               <div className="w-full bg-slate-100 rounded-full h-1.5">
                 <div className="bg-slate-800 h-1.5 rounded-full transition-all duration-1000" style={{width: `${project.progress}%`}}></div>
               </div>
             </div>
          </div>
        ))}
      </div>

      {/* 상세 워크플로우 (간략) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
        <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
           <GitBranch size={20} className="text-slate-500" />
           제품 개발 로드맵 (Roadmap)
        </h3>
        <div className="relative flex items-center justify-between px-10 py-8">
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
           
           {['기획 (Plan)', '설계 (Design)', '개발 (Dev)', '검증 (Test)', '출시 (Launch)'].map((step, idx) => (
             <div key={idx} className="relative z-10 flex flex-col items-center gap-3">
               <div className={`w-10 h-10 rounded-full border-4 flex items-center justify-center font-bold text-sm bg-white
                 ${idx < 3 ? 'border-brand-500 text-brand-600' : 'border-slate-200 text-slate-400'}
               `}>
                 {idx + 1}
               </div>
               <span className={`text-xs font-bold ${idx < 3 ? 'text-slate-800' : 'text-slate-400'}`}>{step}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}