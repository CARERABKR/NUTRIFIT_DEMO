'use client';

import React from 'react';
import { 
  Cpu, GitBranch, ShieldAlert, FileText, 
  Settings, RefreshCw, Zap 
} from 'lucide-react';

export default function EnginePage() {
  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI 엔진 제어실</h1>
          <p className="text-slate-500 mt-1">
            Neuro-Symbolic 알고리즘의 학습 상태를 모니터링하고 Safety Gate 규칙을 관리합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <FileText size={16} />
            기술 문서 보기
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 shadow-md shadow-brand-500/20">
            <RefreshCw size={16} />
            모델 재학습 (Retrain)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* [1] Safety Gate */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 bg-red-50/30">
            <div className="flex items-center gap-3 mb-2">
              <ShieldAlert className="text-red-500" size={24} />
              <h2 className="text-lg font-bold text-slate-800">Safety Gate (Rules)</h2>
            </div>
            <p className="text-sm text-slate-500">수의학적 금기 사항 100% 차단 시스템</p>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <div>
                <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded mb-1 inline-block">Layer 1</span>
                <p className="font-bold text-slate-800">기저질환 금기 성분</p>
                <p className="text-xs text-slate-400">신부전(인), 심장(나트륨) 등</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900">42<span className="text-sm font-normal text-slate-400">건</span></p>
                <p className="text-xs text-slate-400">오늘 차단됨</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <div>
                <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded mb-1 inline-block">Layer 2</span>
                <p className="font-bold text-slate-800">약물 상호작용</p>
                <p className="text-xs text-slate-400">복용 약물 충돌 체크</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900">18<span className="text-sm font-normal text-slate-400">건</span></p>
                <p className="text-xs text-slate-400">오늘 차단됨</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <button className="text-sm font-bold text-slate-600 hover:text-slate-900 flex items-center justify-center gap-2">
              <Settings size={14} />
              금기 규칙(Rule) 편집하기
            </button>
          </div>
        </div>

        {/* [2] AI Logic */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 bg-blue-50/30">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="text-brand-600" size={24} />
              <h2 className="text-lg font-bold text-slate-800">AI Recommendation</h2>
            </div>
            <p className="text-sm text-slate-500">임상 데이터 기반 개인화 랭킹 모델</p>
          </div>

          <div className="p-6">
            <div className="relative pt-4 pb-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100"></div>
              
              <div className="relative pl-10 mb-6">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-brand-500 rounded-full border-2 border-white -translate-x-1/2"></div>
                <h4 className="text-sm font-bold text-slate-900">v2.4.0 배포 완료</h4>
                <p className="text-xs text-slate-400 mt-1">2026.01.04 14:00 • Accuracy 94.2%</p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-2.5 top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-white -translate-x-1/2"></div>
                <h4 className="text-sm font-bold text-slate-500">다음 학습 대기 중</h4>
                <p className="text-xs text-slate-400 mt-1">데이터 1,500건 누적 시 자동 시작</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-slate-900 text-white rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-slate-400">Current Load</span>
                <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                  <Zap size={10} /> Stable
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-1">
                <div className="bg-brand-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-right text-xs text-slate-400">45% Usage</p>
            </div>
          </div>
        </div>

        {/* [3] XAI Logic Flow */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 bg-purple-50/30">
            <div className="flex items-center gap-3 mb-2">
              <GitBranch className="text-purple-600" size={24} />
              <h2 className="text-lg font-bold text-slate-800">XAI Logic Flow</h2>
            </div>
            <p className="text-sm text-slate-500">추천 근거 생성 및 데이터 흐름 시각화</p>
          </div>
          
          <div className="p-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-full py-3 px-4 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600">
              User Input (설문/사진)
            </div>
            <div className="h-4 w-0.5 bg-slate-300"></div>
            <div className="w-full py-3 px-4 bg-red-50 border border-red-200 rounded-lg text-sm font-bold text-red-600">
              Safety Gate (필터링)
            </div>
            <div className="h-4 w-0.5 bg-slate-300"></div>
            <div className="w-full py-3 px-4 bg-brand-50 border border-brand-200 rounded-lg text-sm font-bold text-brand-600">
              Neuro-Symbolic Ranking
            </div>
            <div className="h-4 w-0.5 bg-slate-300"></div>
            <div className="w-full py-3 px-4 bg-purple-50 border border-purple-200 rounded-lg text-sm font-bold text-purple-600">
              XAI Report 생성
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}