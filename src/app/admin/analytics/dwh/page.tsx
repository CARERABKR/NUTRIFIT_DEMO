'use client';

import React from 'react';
import { 
  Database, Server, HardDrive, ArrowDown, 
  Clock, CheckCircle2, AlertCircle, Search, 
  FileJson, Table2, Layers 
} from 'lucide-react';

export default function DwhPage() {
  return (
    <div className="space-y-6">
      {/* 1. 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">데이터 저장소 (DWH)</h1>
          <p className="text-slate-500 mt-1">
            설문, 임상 내역, AI 로그 등 뉴트리핏의 모든 원천 데이터를 통합 관리합니다.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
            <CheckCircle2 size={14} />
            수집 파이프라인 정상
          </span>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <Search size={16} />
            SQL 쿼리 실행
          </button>
        </div>
      </div>

      {/* 2. 저장소 상태 요약 (용량/처리량) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Database size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">Total Size</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">8.4 TB</p>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
          </div>
          <p className="text-xs text-slate-400 mt-2">전체 용량의 42% 사용 중</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <ArrowDown size={20} />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              +12%
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">일일 수집량 (Ingest)</p>
          <p className="text-2xl font-bold text-slate-900">124 GB</p>
          <p className="text-xs text-slate-400 mt-1">어제 대비 증가함</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <Table2 size={20} />
            </div>
            <span className="text-xs font-bold text-slate-400">Records</span>
          </div>
          <p className="text-sm font-bold text-slate-500">누적 데이터 행</p>
          <p className="text-2xl font-bold text-slate-900">1.2억 건</p>
          <p className="text-xs text-slate-400 mt-1">펫 건강/로그 데이터 포함</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
              <Clock size={20} />
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              Fast
            </span>
          </div>
          <p className="text-sm font-bold text-slate-500">평균 쿼리 속도</p>
          <p className="text-2xl font-bold text-slate-900">0.42초</p>
          <p className="text-xs text-slate-400 mt-1">P99 Latency: 1.2s</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* [왼쪽] 데이터 테이블 스키마 현황 */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Layers size={18} className="text-slate-500" />
              주요 데이터 테이블 (Table Schema)
            </h3>
            <span className="text-xs text-slate-400">마지막 스키마 변경: 2일 전</span>
          </div>
          <div className="p-0">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-bold">
                <tr>
                  <th className="p-4 pl-6">테이블명</th>
                  <th className="p-4">설명</th>
                  <th className="p-4">유형</th>
                  <th className="p-4">보관 기간</th>
                  <th className="p-4 pr-6">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800 flex items-center gap-2">
                    <FileJson size={14} className="text-brand-500" />
                    pet_health_log
                  </td>
                  <td className="p-4 text-slate-600">반려동물 건강 설문/기록</td>
                  <td className="p-4"><span className="px-2 py-1 bg-slate-100 rounded text-xs">JSONB</span></td>
                  <td className="p-4 text-slate-500">영구 보관</td>
                  <td className="p-4 pr-6"><span className="text-green-600 text-xs font-bold">Active</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800 flex items-center gap-2">
                    <Table2 size={14} className="text-blue-500" />
                    purchase_trx
                  </td>
                  <td className="p-4 text-slate-600">영양제 구독 결제 내역</td>
                  <td className="p-4"><span className="px-2 py-1 bg-slate-100 rounded text-xs">RDBMS</span></td>
                  <td className="p-4 text-slate-500">5년</td>
                  <td className="p-4 pr-6"><span className="text-green-600 text-xs font-bold">Active</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800 flex items-center gap-2">
                    <HardDrive size={14} className="text-purple-500" />
                    vision_analysis
                  </td>
                  <td className="p-4 text-slate-600">피부/대변 사진 분석 결과</td>
                  <td className="p-4"><span className="px-2 py-1 bg-slate-100 rounded text-xs">Blob</span></td>
                  <td className="p-4 text-slate-500">3년</td>
                  <td className="p-4 pr-6"><span className="text-green-600 text-xs font-bold">Active</span></td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 pl-6 font-bold text-slate-800 flex items-center gap-2">
                    <Server size={14} className="text-slate-500" />
                    system_audit
                  </td>
                  <td className="p-4 text-slate-600">관리자 활동 및 보안 로그</td>
                  <td className="p-4"><span className="px-2 py-1 bg-slate-100 rounded text-xs">Log</span></td>
                  <td className="p-4 text-slate-500">1년</td>
                  <td className="p-4 pr-6"><span className="text-orange-500 text-xs font-bold">Archiving</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* [오른쪽] 데이터 파이프라인 상태 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <h3 className="font-bold text-slate-900 mb-6">수집 파이프라인 (ETL)</h3>
          
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-slate-100 pb-6">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
              <h4 className="text-sm font-bold text-slate-800">실시간 로그 수집기</h4>
              <p className="text-xs text-slate-500 mt-1">상태: 정상 (지연 12ms)</p>
              <div className="mt-2 text-xs bg-slate-50 p-2 rounded text-slate-600">
                Source: App, Web, IoT Devices
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-100 pb-6">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
              <h4 className="text-sm font-bold text-slate-800">일 배치 (Daily Batch)</h4>
              <p className="text-xs text-slate-500 mt-1">마지막 실행: 오늘 03:00 AM</p>
              <div className="mt-2 text-xs bg-slate-50 p-2 rounded text-slate-600">
                Job: 정산 데이터 집계 완료
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-400 border-2 border-white"></div>
              <h4 className="text-sm font-bold text-slate-800">데이터 백업 (Backup)</h4>
              <p className="text-xs text-slate-500 mt-1">대기 중 (오늘 04:00 AM 예정)</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-50">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
              <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
              <div>
                <p className="text-xs font-bold text-red-700">용량 임계치 경고</p>
                <p className="text-[10px] text-red-600">로그 파티션(Vol-3) 여유 공간 15%</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}