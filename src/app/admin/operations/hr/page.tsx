'use client';

import React from 'react';
import { 
  Users, UserPlus, Calendar, Heart, 
  Search, MoreHorizontal, Briefcase, 
  CheckCircle2, Clock, Plane 
} from 'lucide-react';

// [임시 데이터] 직원 목록 (최근 입사자)
const NEW_HIRES = [
  { id: 1, name: '김지현', role: 'UX Designer', dept: '디자인팀', date: '2026.01.02', status: 'Onboarding' },
  { id: 2, name: '이준호', role: 'Backend Dev', dept: '개발팀', date: '2025.12.28', status: 'Probation' },
  { id: 3, name: '박민수', role: 'CS Manager', dept: '운영팀', date: '2025.12.15', status: 'Active' },
  { id: 4, name: 'Choi Sarah', role: 'AI Researcher', dept: 'R&D', date: '2025.12.10', status: 'Active' },
];

// [임시 데이터] 채용 파이프라인
const RECRUITMENT_STATS = [
  { stage: '서류 검토', count: 14, color: 'bg-slate-500' },
  { stage: '1차 면접', count: 8, color: 'bg-blue-500' },
  { stage: '과제 전형', count: 5, color: 'bg-purple-500' },
  { stage: '최종 면접', count: 2, color: 'bg-green-500' },
];

export default function HrPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">인사 관리 (HR)</h1>
          <p className="text-slate-500 mt-1">
            임직원 근태, 채용 현황 및 조직 문화를 통합 관리합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all">
            <Search size={16} />
            직원 검색
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md transition-all">
            <UserPlus size={16} />
            임직원 등록
          </button>
        </div>
      </div>

      {/* 2. 핵심 HR 지표 (KPI Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 총 임직원 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Users size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              +4명
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">총 임직원 (Total)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">72명</p>
          <p className="text-xs text-slate-400 mt-2">정규직 68명 / 계약직 4명</p>
        </div>

        {/* 채용 진행 중 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <Briefcase size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
              Hiring
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">채용 진행 (Open Role)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">8개 포지션</p>
          <p className="text-xs text-slate-400 mt-2">지원자 총 29명 대기 중</p>
        </div>

        {/* 금일 부재자 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
              <Plane size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              Today
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">오늘의 휴가/재택</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">5명</p>
          <p className="text-xs text-slate-400 mt-2">연차 3명 / 재택 2명</p>
        </div>

        {/* 조직 만족도 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-50 text-red-600 rounded-xl">
              <Heart size={20} />
            </div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              High
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">조직 만족도 (eNPS)</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">4.8 <span className="text-lg font-normal text-slate-400">/ 5.0</span></p>
          <p className="text-xs text-slate-400 mt-2">지난 분기 대비 0.2 상승</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 채용 파이프라인 현황 */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900">채용 파이프라인 (Recruiting Pipeline)</h3>
            <button className="text-xs font-bold text-brand-600 hover:underline">채용 공고 관리 &rarr;</button>
          </div>
          
          <div className="relative pt-4 pb-8 px-4">
            {/* 파이프라인 시각화 (프로세스 바 형태) */}
            <div className="flex items-center justify-between relative z-10">
              {RECRUITMENT_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center group w-1/4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md mb-3 transition-transform group-hover:scale-110 ${stat.color}`}>
                    {stat.count}
                  </div>
                  <p className="text-sm font-bold text-slate-800">{stat.stage}</p>
                  <p className="text-xs text-slate-400 mt-1">Updated 2h ago</p>
                </div>
              ))}
            </div>
            {/* 연결선 */}
            <div className="absolute top-10 left-0 w-full h-1 bg-slate-100 -z-0 rounded-full">
              <div className="h-full bg-slate-200 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-slate-50 rounded-xl flex items-center gap-4 border border-slate-100">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Briefcase size={20} className="text-slate-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-800">이번 주 주요 면접 일정</p>
              <p className="text-xs text-slate-500">총 3건의 기술 면접이 예정되어 있습니다.</p>
            </div>
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100">
              캘린더 보기
            </button>
          </div>
        </div>

        {/* [오른쪽] 근태 승인 대기 */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Clock size={18} className="text-slate-500" />
              근태 승인 대기
            </h3>
            <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">3건</span>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { name: '정수진 (마케팅)', type: '연차', date: '1월 8일 (금)', reason: '개인 사정' },
              { name: '박철민 (개발)', type: '반차', date: '1월 5일 (오후)', reason: '병원 진료' },
              { name: '이동욱 (영업)', type: '외근', date: '1월 6일 (전일)', reason: '고객사 미팅' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    <span className="font-medium text-brand-600">{item.type}</span> • {item.date}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors">
                    <CheckCircle2 size={16} className="rotate-45" /> {/* 거절 아이콘 대용 */}
                  </button>
                  <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                    <CheckCircle2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
            <button className="text-xs font-bold text-slate-500 hover:text-slate-800">모두 승인하기</button>
          </div>
        </div>

      </div>

      {/* 3. 최근 입사자 목록 (New Hires) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h3 className="font-bold text-slate-900">최근 입사자 (New Joiners)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4 pl-6">이름</th>
                <th className="p-4">직무 / 부서</th>
                <th className="p-4">입사일</th>
                <th className="p-4">온보딩 상태</th>
                <th className="p-4 text-right pr-6">설정</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {NEW_HIRES.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 pl-6 font-bold text-slate-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs">
                      {user.name.slice(0, 1)}
                    </div>
                    {user.name}
                  </td>
                  <td className="p-4 text-slate-600">
                    {user.role} <span className="text-slate-300 mx-1">|</span> {user.dept}
                  </td>
                  <td className="p-4 text-slate-500 font-mono text-xs">{user.date}</td>
                  <td className="p-4">
                    {user.status === 'Onboarding' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        Onboarding
                      </span>
                    ) : user.status === 'Probation' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700">
                        수습 기간 (3개월)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">
                        Active
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right pr-6">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}