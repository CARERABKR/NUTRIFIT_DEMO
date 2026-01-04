'use client';

import React from 'react';
import { ClipboardCheck, Download, Filter } from 'lucide-react';

// [임시 데이터] 감사 로그
const AUDIT_LOGS = [
  { id: 'LOG-001', time: '2026-01-04 14:05', type: 'Safety Rule', detail: '신부전 환자(ID:88)에게 [인] 성분 포함 영양제 추천 차단', user: 'System (Auto)', level: 'High' },
  { id: 'LOG-002', time: '2026-01-04 13:42', type: 'Access', detail: '박가영(Master)님이 [AI 엔진 제어실] 설정 변경', user: '박가영', level: 'Medium' },
  { id: 'LOG-003', time: '2026-01-04 12:10', type: 'Data Update', detail: '수의사 자문위원회 승인에 따른 [관절 영양제] 가중치 업데이트 (v2.3)', user: '임요한 (CTO)', level: 'Critical' },
  { id: 'LOG-004', time: '2026-01-04 11:00', type: 'Login', detail: '김민수 원장(Partner) 로그인 성공', user: '김민수', level: 'Low' },
];

export default function AuditPage() {
  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">시스템 감사 로그 (Audit Trail)</h1>
          <p className="text-slate-500 mt-1">
            알고리즘 판단 과정 및 시스템 운영 이력을 위변조가 불가능한 형태로 기록합니다.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
          <Download size={16} />
          로그 다운로드 (CSV)
        </button>
      </div>

      {/* 로그 테이블 */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
            <Filter size={14} /> 필터
          </button>
          <input type="date" className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-xs font-bold text-slate-500 uppercase">
              <th className="p-4 w-32">Log ID</th>
              <th className="p-4 w-40">발생 시각</th>
              <th className="p-4 w-32">유형</th>
              <th className="p-4">상세 내용</th>
              <th className="p-4 w-32">수행자</th>
              <th className="p-4 w-24">중요도</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-sm">
            {AUDIT_LOGS.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-mono text-slate-400">{log.id}</td>
                <td className="p-4 text-slate-600">{log.time}</td>
                <td className="p-4 font-bold text-slate-700">{log.type}</td>
                <td className="p-4 text-slate-800">{log.detail}</td>
                <td className="p-4 text-slate-600">{log.user}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold
                    ${log.level === 'Critical' ? 'bg-red-50 text-red-600' : 
                      log.level === 'High' ? 'bg-orange-50 text-orange-600' : 
                      log.level === 'Medium' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}
                  `}>
                    {log.level}
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