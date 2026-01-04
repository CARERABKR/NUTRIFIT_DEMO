'use client';

import React from 'react';
import { 
  GraduationCap, BookOpen, Award, PlayCircle, 
  CheckCircle2, TrendingUp, Users 
} from 'lucide-react';

export default function LmsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">학습 관리 (LMS)</h1>
          <p className="text-slate-500 mt-1">
            임직원 직무 교육 및 보안 교육 이수 현황을 관리합니다.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
          <BookOpen size={16} />
          과정 개설
        </button>
      </div>

      {/* 학습 현황 대시보드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Users size={20} /></div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Active</span>
          </div>
          <p className="text-sm font-bold text-slate-500">학습 중인 임직원</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">68명</p>
          <p className="text-xs text-slate-400 mt-2">전체의 94% 참여 중</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-xl"><CheckCircle2 size={20} /></div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12%</span>
          </div>
          <p className="text-sm font-bold text-slate-500">과정 이수율</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">82.5%</p>
          <p className="text-xs text-slate-400 mt-2">필수 교육 기준</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Award size={20} /></div>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">Avg</span>
          </div>
          <p className="text-sm font-bold text-slate-500">평균 평가 점수</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">92점</p>
          <p className="text-xs text-slate-400 mt-2">만족도 4.8/5.0</p>
        </div>
      </div>

      {/* 과정 목록 */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
        <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
          <GraduationCap className="text-slate-500" size={20} />
          진행 중인 필수 교육 과정
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: '2026 정보보안 필수 교육', due: '1월 31일 마감', progress: 75, color: 'bg-red-500' },
            { title: '직장 내 괴롭힘 방지 교육', due: '2월 15일 마감', progress: 40, color: 'bg-blue-500' },
            { title: '신규 입사자 OJT (공통)', due: '상시 운영', progress: 90, color: 'bg-green-500' },
            { title: '브랜드 가이드라인 이해', due: '선택 과정', progress: 20, color: 'bg-orange-400' },
          ].map((course, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-5 hover:bg-slate-50 transition-colors">
               <div className="flex justify-between items-start mb-2">
                 <h4 className="font-bold text-slate-800 text-lg">{course.title}</h4>
                 <PlayCircle className="text-slate-400 cursor-pointer hover:text-slate-600" size={24} />
               </div>
               <p className="text-xs text-slate-500 mb-4">{course.due}</p>
               
               <div className="space-y-1">
                 <div className="flex justify-between text-xs font-bold text-slate-600">
                   <span>진척도</span>
                   <span>{course.progress}%</span>
                 </div>
                 <div className="w-full bg-slate-100 rounded-full h-2">
                   <div className={`h-2 rounded-full ${course.color}`} style={{width: `${course.progress}%`}}></div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}