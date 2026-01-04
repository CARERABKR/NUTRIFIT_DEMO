'use client';

import React from 'react';
import { 
  Fingerprint, Shield, Server, Smartphone, 
  ArrowRight, Lock, Activity, Users, Globe 
} from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">프라이버시 및 연합 학습</h1>
          <p className="text-slate-500 mt-1">
            민감한 건강 데이터를 중앙 서버로 전송하지 않고(Data Localization), 로컬에서 학습된 가중치만 수집하여 AI를 고도화합니다.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 font-bold rounded-lg border border-green-200">
          <Shield size={18} />
          차분 프라이버시(Differential Privacy) 적용 중
        </div>
      </div>

      {/* 2. 핵심 지표 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Users size={20} />
            </div>
            <span className="text-sm font-bold text-slate-500">참여 클라이언트</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">8,421<span className="text-sm font-normal text-slate-400">명</span></p>
          <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <Activity size={12} /> 실시간 학습 중
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Globe size={20} />
            </div>
            <span className="text-sm font-bold text-slate-500">글로벌 모델 버전</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">v2.4.1</p>
          <p className="text-xs text-slate-400 mt-1">마지막 업데이트: 10분 전</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
              <Lock size={20} />
            </div>
            <span className="text-sm font-bold text-slate-500">프라이버시 예산 (ε)</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">1.2<span className="text-sm font-normal text-slate-400"> (Safe)</span></p>
          <p className="text-xs text-slate-400 mt-1">노이즈 주입 강도: High</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
              <Fingerprint size={20} />
            </div>
            <span className="text-sm font-bold text-slate-500">데이터 유출 방지</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">0<span className="text-sm font-normal text-slate-400">건</span></p>
          <p className="text-xs text-green-600 mt-1">무결성 검증 완료</p>
        </div>
      </div>

      {/* 3. 연합 학습 프로세스 시각화 (기술보고서 도식화) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h2 className="text-lg font-bold text-slate-900">실시간 학습 데이터 흐름 (Privacy Flow)</h2>
          <p className="text-sm text-slate-500 mt-1">
            사용자 기기(Edge)에서 학습된 결과만 암호화되어 서버로 전송됩니다. [cite_start]원본 데이터는 절대 외부로 나가지 않습니다. [cite: 97, 107]
          </p>
        </div>
        
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            
            {/* Edge Devices */}
            <div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center relative z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 border border-slate-200 rounded-full text-xs font-bold text-slate-500">
                Edge (사용자 기기)
              </div>
              <div className="flex justify-center gap-4 mb-4 mt-2">
                <Smartphone className="text-slate-400" size={32} />
                <Smartphone className="text-slate-400" size={32} />
                <Smartphone className="text-slate-400" size={32} />
              </div>
              <h3 className="font-bold text-slate-800">로컬 학습 (On-Device Training)</h3>
              <p className="text-xs text-slate-500 mt-2">
                개인 건강 데이터(설문, 사진)를 사용하여<br/>각 기기 내부에서 모델을 학습시킵니다.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                <Lock size={12} /> 데이터 반출 불가
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="hidden md:flex flex-col items-center justify-center flex-1 z-0">
              <div className="w-full h-0.5 bg-slate-200 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs font-bold text-brand-600">
                  암호화된 가중치(Weights)만 전송
                </div>
                <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              </div>
              <div className="mt-2 text-[10px] text-slate-400">
                + [cite_start]차분 프라이버시 노이즈(Noise) 주입 [cite: 103]
              </div>
            </div>

            {/* Cloud Server */}
            <div className="flex-1 bg-brand-50 p-6 rounded-2xl border border-brand-100 text-center relative z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 border border-brand-100 rounded-full text-xs font-bold text-brand-600">
                Cloud (중앙 서버)
              </div>
              <div className="flex justify-center mb-4 mt-2">
                <div className="p-3 bg-white rounded-full shadow-sm text-brand-600">
                  <Server size={32} />
                </div>
              </div>
              <h3 className="font-bold text-slate-800">글로벌 모델 통합 (Aggregation)</h3>
              <p className="text-xs text-slate-600 mt-2">
                [cite_start]수집된 수천 개의 가중치를 평균(Averaging)내어<br/>더 똑똑해진 글로벌 모델을 만듭니다. [cite: 99]
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-white px-2 py-1 rounded border border-green-100 shadow-sm">
                <Fingerprint size={12} /> 익명성 보장됨
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}