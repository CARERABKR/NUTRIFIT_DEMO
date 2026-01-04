'use client';

import React from 'react';
import { 
  TrendingUp, Users, AlertCircle, CheckCircle2, 
  Wallet, Activity, ArrowUpRight, ShieldCheck 
} from 'lucide-react';

// [1] KPI 카드 컴포넌트
const StatCard = ({ title, value, change, trend, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-opacity-100`}>
        <Icon size={24} className={color.replace('bg-', 'text-')} />
      </div>
      <span className={`flex items-center text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
        {trend === 'up' ? '+' : ''}{change}%
        <ArrowUpRight size={16} className="ml-1" />
      </span>
    </div>
    <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-slate-900">{value}</p>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* 1. 헤더 영역 */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">통합 대시보드</h1>
        <p className="text-slate-500 mt-1">
          뉴트리핏 서비스의 실시간 매출, 구독자 현황 및 주요 시스템 지표를 모니터링합니다.
        </p>
      </div>

      {/* 2. 핵심 KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="월간 구독 매출 (MRR)" 
          value="₩ 48,500,000" 
          change={12.5} 
          trend="up" 
          icon={Wallet} 
          color="bg-brand-500" 
        />
        <StatCard 
          title="활성 구독자 (Active)" 
          value="1,240 명" 
          change={8.2} 
          trend="up" 
          icon={Users} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="병원 파트너" 
          value="58 개소" 
          change={4.0} 
          trend="up" 
          icon={Activity} 
          color="bg-purple-500" 
        />
        <StatCard 
          title="Safety Gate 차단" 
          value="142 건" 
          change={-2.1} 
          trend="down" 
          icon={AlertCircle} 
          color="bg-red-500" 
        />
      </div>

      {/* 3. 차트 및 현황 영역 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 매출 추이 */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900">구독 성장 추이</h3>
            <span className="text-xs font-medium px-3 py-1 bg-green-50 text-green-700 rounded-full">
              목표 달성률 102%
            </span>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {[40, 55, 45, 60, 75, 65, 85, 90, 80, 95, 100, 110].map((h, i) => (
              <div key={i} className="w-full bg-brand-50 rounded-t-lg relative group">
                <div 
                  className="absolute bottom-0 w-full bg-brand-500 rounded-t-lg transition-all duration-500 group-hover:bg-brand-600" 
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs text-slate-400 px-2">
            <span>1월</span><span>12월</span>
          </div>
        </div>

        {/* [오른쪽] 시스템 상태 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <h3 className="font-bold text-slate-900 mb-6">시스템 상태 (Health Check)</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <Activity size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700">API Gateway</p>
                  <p className="text-xs text-slate-400">정상 가동 중 (99.9%)</p>
                </div>
              </div>
              <CheckCircle2 size={18} className="text-green-500" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700">Safety Gate</p>
                  <p className="text-xs text-slate-400">필터링 엔진 v2.1.0</p>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700">AI Inference</p>
                  <p className="text-xs text-slate-400">평균 응답 0.8s</p>
                </div>
              </div>
              <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">
                Optimal
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-50">
            <button className="w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors">
              전체 리포트 다운로드
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}