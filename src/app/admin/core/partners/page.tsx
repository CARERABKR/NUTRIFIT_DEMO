'use client';

import React, { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { 
  Plus, Copy, CheckCircle2, 
  RefreshCw, Search, Loader2, Stethoscope 
} from 'lucide-react';

type PartnerCode = {
  code: string;
  hospital_name: string;
  is_claimed: boolean;
  created_at: string;
};

export default function PartnerManagementPage() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [codes, setCodes] = useState<PartnerCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [hospitalName, setHospitalName] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  // 코드 목록 불러오기 (관리자 권한이 있는 경우에만 데이터가 보입니다)
  const fetchCodes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('partner_codes')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setCodes(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  const generateCode = () => {
    const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
    const year = new Date().getFullYear();
    setGeneratedCode(`VET-${randomStr}-${year}`);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hospitalName || !generatedCode) return;

    // RLS 정책 수정 후에는 권한 없는 유저도 이 insert 문을 실행할 수 있습니다.
    const { error } = await supabase
      .from('partner_codes')
      .insert([{
        code: generatedCode,
        hospital_name: hospitalName,
        is_claimed: false
      }]);

    if (error) {
      alert('발급 실패: ' + error.message);
    } else {
      alert(`[${hospitalName}]용 코드가 발급되었습니다.`);
      setHospitalName('');
      setGeneratedCode('');
      setIsCreating(false);
      fetchCodes(); // 목록 갱신
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('코드가 복사되었습니다.');
  };

  return (
    <div className="space-y-6">
      {/* 원래의 헤더 디자인 */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">병원 파트너 코드 관리</h1>
          <p className="text-slate-500 mt-1">파트너 병원에게 전달할 인증 코드를 생성합니다.</p>
        </div>
        <button 
          onClick={() => { setIsCreating(true); generateCode(); }}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-md"
        >
          <Plus size={18} /> 새 코드 발급
        </button>
      </div>

      {/* 원래의 인라인 발급 폼 */}
      {isCreating && (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-inner animate-in slide-in-from-top-2">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Stethoscope className="text-blue-600" size={20} /> 신규 병원 코드 생성
          </h3>
          <form onSubmit={handleCreate} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold text-slate-500 mb-1.5">병원 이름</label>
              <input 
                type="text" 
                placeholder="예: 청담우리동물병원" 
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-900"
              />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold text-slate-500 mb-1.5">인증 코드 (자동 생성)</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={generatedCode}
                  readOnly
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-mono font-bold text-blue-600"
                />
                <button type="button" onClick={generateCode} className="px-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50">
                  <RefreshCw size={16} />
                </button>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button type="button" onClick={() => setIsCreating(false)} className="px-5 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50">취소</button>
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-md">발급 및 저장</button>
            </div>
          </form>
        </div>
      )}

      {/* 원래의 목록 테이블 */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase">
              <th className="p-4 pl-6">병원명</th>
              <th className="p-4">인증 코드</th>
              <th className="p-4">가입 상태</th>
              <th className="p-4 text-right pr-6">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-sm">
            {loading ? (
              <tr><td colSpan={4} className="p-8 text-center text-slate-400">불러오는 중...</td></tr>
            ) : codes.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-slate-400">발급 내역이 없습니다.</td></tr>
            ) : (
              codes.map((item) => (
                <tr key={item.code} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 pl-6 font-bold text-slate-900">{item.hospital_name}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-slate-100 rounded-lg font-mono font-bold text-slate-600 text-xs">{item.code}</span>
                  </td>
                  <td className="p-4">
                    {item.is_claimed ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                        <CheckCircle2 size={12} /> 가입 완료
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                        <Loader2 size={12} className="animate-spin" /> 가입 대기
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right pr-6">
                    <button onClick={() => copyToClipboard(item.code)} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">코드 복사</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}