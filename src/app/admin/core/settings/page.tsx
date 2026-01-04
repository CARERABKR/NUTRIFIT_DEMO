'use client';

import React, { useState } from 'react';
import { 
  Save, RotateCcw, Monitor, Shield, 
  Cpu, Bell, CreditCard, ToggleLeft, ToggleRight 
} from 'lucide-react';

export default function SettingsPage() {
  // [상태 관리 예시] 토글 스위치 상태
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [safetyStrictness, setSafetyStrictness] = useState('strict');

  return (
    <div className="space-y-6">
      {/* 1. 헤더 및 저장 버튼 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">환경 설정</h1>
          <p className="text-slate-500 mt-1">
            시스템 운영 정책 및 AI 알고리즘의 전역 파라미터를 관리합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all">
            <RotateCcw size={16} />
            초기화
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md transition-all">
            <Save size={16} />
            변경사항 저장
          </button>
        </div>
      </div>

      {/* 2. 설정 섹션들 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* [A] 시스템 일반 설정 */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
            <Monitor className="text-slate-500" size={20} />
            <h2 className="font-bold text-slate-800">시스템 일반</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">서비스 점검 모드</p>
                <p className="text-xs text-slate-500 mt-1">활성화 시 사용자 접근이 차단되고 점검 페이지가 표시됩니다.</p>
              </div>
              <button 
                onClick={() => setMaintenanceMode(!maintenanceMode)}
                className={`transition-colors duration-200 ${maintenanceMode ? 'text-red-600' : 'text-slate-300'}`}
              >
                {maintenanceMode ? <ToggleRight size={40} /> : <ToggleLeft size={40} />}
              </button>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">관리자 세션 만료 시간 (분)</label>
              <input 
                type="number" 
                defaultValue={60}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">시스템 공지사항 (헤더 노출)</label>
              <input 
                type="text" 
                placeholder="예: 1월 10일 새벽 2시 정기 점검 예정입니다."
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-500"
              />
            </div>
          </div>
        </div>

        {/* [B] AI 엔진 및 보안 파라미터 */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
            <Cpu className="text-brand-600" size={20} />
            <h2 className="font-bold text-slate-800">AI 엔진 및 보안</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-700">안전 필터링(Safety Gate) 강도</p>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setSafetyStrictness('strict')}
                  className={`p-3 rounded-lg text-sm font-bold border transition-all ${
                    safetyStrictness === 'strict' 
                    ? 'bg-red-50 border-red-200 text-red-700 ring-1 ring-red-200' 
                    : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  엄격 (Strict)
                  <span className="block text-[10px] font-normal mt-1 opacity-80">모든 잠재 위험 차단</span>
                </button>
                <button 
                  onClick={() => setSafetyStrictness('balanced')}
                  className={`p-3 rounded-lg text-sm font-bold border transition-all ${
                    safetyStrictness === 'balanced' 
                    ? 'bg-blue-50 border-blue-200 text-blue-700 ring-1 ring-blue-200' 
                    : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  균형 (Balanced)
                  <span className="block text-[10px] font-normal mt-1 opacity-80">임상적 유의성 우선</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">AI 모델 자동 재학습 주기</label>
              <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-500">
                <option>매일 (새벽 3시)</option>
                <option>매주 (일요일)</option>
                <option>매월 (1일)</option>
                <option>수동 실행만 허용</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-sm font-bold text-slate-700">데이터 독성 감지 자동 차단</p>
                <p className="text-xs text-slate-500">비정상 데이터 입력 시 학습 데이터에서 즉시 제외</p>
              </div>
              <ToggleRight className="text-brand-600" size={32} />
            </div>
          </div>
        </div>

        {/* [C] 운영 및 정산 정책 */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
            <CreditCard className="text-slate-500" size={20} />
            <h2 className="font-bold text-slate-800">운영 및 정산 정책</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">기본 파트너 수수료율 (%)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    defaultValue={12.0}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-500"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">%</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">VAT 적용 방식</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                  <option>별도 (Excluded)</option>
                  <option>포함 (Included)</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">물류비 공제 기준 (건당)</label>
              <div className="relative">
                <input 
                  type="number" 
                  defaultValue={4500}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-500"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">원</span>
              </div>
            </div>
          </div>
        </div>

        {/* [D] 알림 및 로그 */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">
          <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
            <Bell className="text-slate-500" size={20} />
            <h2 className="font-bold text-slate-800">알림 및 로그</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-50">
              <span className="text-sm font-medium text-slate-700">시스템 장애 발생 시 SMS 발송</span>
              <ToggleRight className="text-green-600" size={32} />
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-50">
              <span className="text-sm font-medium text-slate-700">보안 위협 감지 시 이메일 알림</span>
              <ToggleRight className="text-green-600" size={32} />
            </div>
            <div className="space-y-2 pt-2">
              <label className="text-sm font-bold text-slate-700">감사 로그 보관 기간</label>
              <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                <option>3년 (법적 의무)</option>
                <option>1년</option>
                <option>영구 보관</option>
              </select>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}