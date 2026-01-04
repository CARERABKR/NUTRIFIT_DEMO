'use client';

import React from 'react';
import { 
  ShieldAlert, Siren, Activity, Lock, 
  Search, AlertTriangle, FileCode, CheckCircle2, 
  Globe, Server, Eye 
} from 'lucide-react';

export default function SiemPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">보안 정보 관리 (SIEM)</h1>
          <p className="text-slate-500 mt-1">
            전사적 보안 로그를 중앙에서 수집·분석하여 데이터 독성 및 해킹 위협에 실시간 대응합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 font-bold rounded-lg border border-green-200">
            <CheckCircle2 size={18} />
            시스템 정상 (Green)
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <Search size={16} />
            로그 정밀 분석
          </button>
        </div>
      </div>

      {/* 2. 위협 인텔리전스 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
              <Siren size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">Threat Level</span>
          </div>
          <p className="text-sm font-bold text-slate-500">현재 보안 위협도</p>
          <p className="text-2xl font-bold text-green-600">Level 1</p>
          <p className="text-xs text-slate-400 mt-1">정상 상태 유지 중</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
              <ShieldAlert size={20} />
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
              +2
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">차단된 공격 (24h)</p>
          <p className="text-2xl font-bold text-slate-900">14건</p>
          <p className="text-xs text-slate-400 mt-1">데이터 독성 시도 포함</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Activity size={20} />
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              99.9%
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">AI 모델 가동률</p>
          <p className="text-2xl font-bold text-slate-900">Stable</p>
          <p className="text-xs text-slate-400 mt-1">무결성 검증 통과</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Globe size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">Traffic</span>
          </div>
          <p className="text-sm font-bold text-slate-500">네트워크 트래픽</p>
          <p className="text-2xl font-bold text-slate-900">2.4k/s</p>
          <p className="text-xs text-slate-400 mt-1">평소 대비 10% 증가</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 최근 보안 이벤트 테이블 */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert size={18} className="text-slate-500" />
              최근 보안 이벤트 (Security Events)
            </h3>
            <button className="text-xs font-bold text-brand-600 hover:underline">전체 로그 보기 &rarr;</button>
          </div>
          <div className="p-0">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-bold">
                <tr>
                  <th className="p-4 pl-6">발생 시각</th>
                  <th className="p-4">이벤트 유형</th>
                  <th className="p-4">소스 (Source)</th>
                  <th className="p-4">상세 내용</th>
                  <th className="p-4 pr-6">심각도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 text-slate-500 font-mono text-xs">14:24:05</td>
                  <td className="p-4 font-bold text-slate-800">데이터 독성 감지</td>
                  <td className="p-4 text-slate-600">Client #8821</td>
                  <td className="p-4 text-slate-600">비정상 체중(100g) 입력 시도 차단</td>
                  <td className="p-4 pr-6"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">High</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 text-slate-500 font-mono text-xs">14:10:12</td>
                  <td className="p-4 font-bold text-slate-800">API 레이트 리밋</td>
                  <td className="p-4 text-slate-600">IP 211.45.xx.xx</td>
                  <td className="p-4 text-slate-600">분당 1,000회 요청 초과</td>
                  <td className="p-4 pr-6"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-bold">Medium</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 text-slate-500 font-mono text-xs">13:55:00</td>
                  <td className="p-4 font-bold text-slate-800">모델 무결성 검증</td>
                  <td className="p-4 text-slate-600">System Core</td>
                  <td className="p-4 text-slate-600">해시값 불일치 없음 (정상)</td>
                  <td className="p-4 pr-6"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Info</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 text-slate-500 font-mono text-xs">13:30:21</td>
                  <td className="p-4 font-bold text-slate-800">권한 상승 시도</td>
                  <td className="p-4 text-slate-600">User ID: guest</td>
                  <td className="p-4 text-slate-600">Admin 페이지 접근 거부됨</td>
                  <td className="p-4 pr-6"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">High</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* [오른쪽] 탐지 및 방어 현황 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <h3 className="font-bold text-slate-900 mb-6">탐지 및 방어 현황</h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-700 flex items-center gap-1"><AlertTriangle size={12}/> 데이터 독성 (Poisoning)</span>
                <span>45% (주요 위협)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-700 flex items-center gap-1"><Server size={12}/> DDoS / 트래픽 공격</span>
                <span>30%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-700 flex items-center gap-1"><FileCode size={12}/> 모델 역추적 (Inversion)</span>
                <span>15%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-50">
              <div className="p-4 bg-slate-900 text-white rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Eye size={20} className="text-green-400" />
                  <span className="font-bold text-sm">실시간 AI 감시 중</span>
                </div>
                <p className="text-xs text-slate-400">
                  뉴트리핏 보안 엔진이 모든 API 요청과 데이터 흐름을 24시간 모니터링하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}