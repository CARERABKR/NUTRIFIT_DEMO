'use client';

import React from 'react';
import { 
  ClipboardCheck, Calendar, TrendingUp, Briefcase, 
  ArrowRight, AlertTriangle, Layers, Clock 
} from 'lucide-react';

export default function PpmPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">프로젝트 관리 (PPM)</h1>
          <p className="text-slate-500 mt-1">
            IT 프로젝트 포트폴리오의 일정, 리소스, 리스크를 종합 관리합니다.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
          <Briefcase size={16} />
          프로젝트 등록
        </button>
      </div>

      {/* 프로젝트 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Layers size={24} /></div>
             <div>
               <p className="text-sm font-bold text-slate-500">진행 중 프로젝트</p>
               <p className="text-2xl font-bold text-slate-900">5개</p>
             </div>
          </div>
          <div className="mt-4 flex gap-2">
             <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">인프라: 2</span>
             <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">개발: 3</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-green-50 text-green-600 rounded-xl"><TrendingUp size={24} /></div>
             <div>
               <p className="text-sm font-bold text-slate-500">일정 준수율</p>
               <p className="text-2xl font-bold text-slate-900">88%</p>
             </div>
          </div>
          <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full">
             <div className="bg-green-500 h-1.5 rounded-full" style={{width: '88%'}}></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><AlertTriangle size={24} /></div>
             <div>
               <p className="text-sm font-bold text-slate-500">리스크 관리</p>
               <p className="text-2xl font-bold text-slate-900">Low</p>
             </div>
          </div>
          <p className="text-xs text-slate-400 mt-4">지연 예상 프로젝트 1건</p>
        </div>
      </div>

      {/* 프로젝트 타임라인 (간트차트 스타일) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
        <div className="flex justify-between items-center mb-6">
           <h3 className="font-bold text-slate-900 flex items-center gap-2">
             <Calendar size={20} className="text-slate-500" />
             프로젝트 타임라인 (2026 Q1)
           </h3>
           <span className="text-xs text-slate-400">오늘: 1월 5일</span>
        </div>

        <div className="space-y-6">
          {[
            { name: '차세대 ERP 구축', start: 0, width: 60, color: 'bg-blue-500', status: 'On Track', pm: '김PM' },
            { name: '클라우드 마이그레이션', start: 20, width: 40, color: 'bg-purple-500', status: 'On Track', pm: '이엔지니어' },
            { name: '재해복구(DR) 모의훈련', start: 40, width: 20, color: 'bg-orange-400', status: 'Delayed', pm: '박보안' },
            { name: '사내 챗봇 도입', start: 10, width: 30, color: 'bg-green-500', status: 'Done', pm: '최개발' },
          ].map((proj, i) => (
            <div key={i} className="relative">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-slate-800">{proj.name}</span>
                <div className="flex items-center gap-3">
                   <span className="text-xs text-slate-500">PM: {proj.pm}</span>
                   <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full 
                     ${proj.status === 'Delayed' ? 'bg-red-100 text-red-600' : 
                       proj.status === 'Done' ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                     {proj.status}
                   </span>
                </div>
              </div>
              <div className="w-full h-8 bg-slate-50 rounded-lg relative overflow-hidden">
                {/* 배경 그리드 (장식) */}
                <div className="absolute inset-0 grid grid-cols-12 divide-x divide-slate-200 opacity-30">
                  {[...Array(12)].map((_, j) => <div key={j}></div>)}
                </div>
                {/* 막대 */}
                <div 
                  className={`absolute top-1 bottom-1 rounded-md ${proj.color} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                  style={{ left: `${proj.start}%`, width: `${proj.width}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}