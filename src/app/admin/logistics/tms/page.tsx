'use client';

import React from 'react';
import { 
  Truck, MapPin, Navigation, Clock, 
  Calendar, CheckCircle2, AlertTriangle, Search 
} from 'lucide-react';

export default function TmsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">배송 관리 (TMS)</h1>
          <p className="text-slate-500 mt-1">
            배차 최적화 및 실시간 차량 관제를 통해 라스트마일 배송을 관리합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <Search size={16} />
            송장 조회
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <Navigation size={16} />
            배차 계획 실행
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Truck size={20} /></div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Total</span>
          </div>
          <p className="text-sm font-bold text-slate-500">운행 중 차량</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">18 대</p>
          <p className="text-xs text-slate-400 mt-2">서울/경기 권역</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-xl"><CheckCircle2 size={20} /></div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">98.5%</span>
          </div>
          <p className="text-sm font-bold text-slate-500">배송 완료율</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">1,240 건</p>
          <p className="text-xs text-slate-400 mt-2">오늘 예정 물량 기준</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><AlertTriangle size={20} /></div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Delay</span>
          </div>
          <p className="text-sm font-bold text-slate-500">배송 지연</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">14 건</p>
          <p className="text-xs text-slate-400 mt-2">기상 악화 및 오배송</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Clock size={20} /></div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Fast</span>
          </div>
          <p className="text-sm font-bold text-slate-500">평균 배송 시간</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">1.2 일</p>
          <p className="text-xs text-slate-400 mt-2">익일 배송 준수율 높음</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
        <h3 className="font-bold text-slate-900 mb-6">실시간 배송 현황 리스트</h3>
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-100">
            <tr>
              <th className="p-4 pl-6">송장번호</th>
              <th className="p-4">담당 기사</th>
              <th className="p-4">현재 위치</th>
              <th className="p-4">도착 예정</th>
              <th className="p-4 pr-6 text-right">상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="hover:bg-slate-50/50">
                <td className="p-4 pl-6 font-mono text-slate-600">INV-2026-00{item}</td>
                <td className="p-4 font-bold text-slate-800">김철수 기사님</td>
                <td className="p-4 text-slate-500 flex items-center gap-2"><MapPin size={14}/> 강남구 역삼동</td>
                <td className="p-4 text-slate-500">15:30 (30분 남음)</td>
                <td className="p-4 pr-6 text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                    <Truck size={12} /> 이동 중
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}