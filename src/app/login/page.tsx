'use client';

import React, { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import { 
  Mail, Lock, User, Stethoscope, 
  Building2, ArrowRight, Loader2, AlertCircle, X, LogOut 
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [role, setRole] = useState<'user' | 'partner'>('user'); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showApproveModal, setShowApproveModal] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  // UX 개선: ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowApproveModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
        email, password,
      });

      if (signInError) throw signInError;
      if (!user) throw new Error('사용자 정보를 찾을 수 없습니다.');

      // [보안 및 에러 방지] .single() 대신 .maybeSingle() 사용하여 데이터 부재 시 에러 방지
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role, is_approved')
        .eq('id', user.id)
        .maybeSingle();

      if (profileError) throw profileError;
      if (!profile) throw new Error('등록된 프로필 정보를 찾을 수 없습니다.');

      // 파트너 승인 체크 로직
      if (profile.role === 'partner' && !profile.is_approved) {
        await supabase.auth.signOut();
        setShowApproveModal(true); 
        setLoading(false);
        return;
      }

      /**
       * [리다이렉트 로직 최적화]
       * router.push 대신 window.location.href를 사용하여 
       * 서버 미들웨어가 새로운 세션 쿠키를 즉시 인식하도록 강제 새로고침 리다이렉트 수행
       */
      if (profile.role === 'admin') {
        window.location.href = '/admin/core/dashboard';
      } else if (profile.role === 'partner') {
        window.location.href = '/partner/dashboard';
      } else {
        window.location.href = '/';
      }

    } catch (err: any) {
      setError(err.message || '로그인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (role === 'partner' && !code) throw new Error('파트너 병원 코드를 입력해주세요.');

      const { error } = await supabase.auth.signUp({
        email, password,
        options: {
          data: {
            name: name,
            role: role,
            partner_code: code,
          },
        },
      });

      if (error) throw error;
      alert(role === 'partner' ? '신청이 완료되었습니다. 승인 후 이용 가능합니다.' : '가입 완료!');
      setMode('login');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] relative">
        
        {/* 왼쪽: 브랜드 영역 */}
        <div className="w-full md:w-1/2 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2 tracking-tight">NUTRIFIT</h1>
            <p className="text-slate-400 font-medium">수의사 검증 기반 펫 헬스케어</p>
          </div>
          <div className="relative z-10 space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
              <p className="font-bold text-lg mb-2 text-blue-300">닥터 코드(Doctor Code)</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                다니시는 동물병원의 고유 코드로 전문적인 영양 설계를 시작하세요.
              </p>
            </div>
            <div className="flex gap-2 text-xs text-slate-500 font-mono">
              <span>© 2026 CARELAB Corp.</span>
            </div>
          </div>
        </div>

        {/* 오른쪽: 폼 영역 */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
          <div className="flex gap-8 mb-8 border-b border-slate-100">
            <button onClick={() => { setMode('login'); setError(null); }} className={`pb-3 text-sm font-bold transition-all relative ${mode === 'login' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}>
              로그인
              {mode === 'login' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-t-full"></div>}
            </button>
            <button onClick={() => { setMode('signup'); setError(null); }} className={`pb-3 text-sm font-bold transition-all relative ${mode === 'signup' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}>
              회원가입
              {mode === 'signup' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-t-full"></div>}
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
              <AlertCircle size={18} className="text-red-600 mt-0.5 shrink-0" />
              <span className="text-sm text-red-600 font-medium leading-relaxed">{error}</span>
            </div>
          )}

          <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="space-y-5">
            {mode === 'signup' && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button type="button" onClick={() => setRole('user')} className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${role === 'user' ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'border-slate-200 text-slate-500'}`}>
                  <User size={24} />
                  <span className="text-xs font-bold">일반 보호자</span>
                </button>
                <button type="button" onClick={() => setRole('partner')} className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${role === 'partner' ? 'border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500' : 'border-slate-200 text-slate-500'}`}>
                  <Stethoscope size={24} />
                  <span className="text-xs font-bold">수의사 파트너</span>
                </button>
              </div>
            )}

            <div className="space-y-4">
              {mode === 'signup' && (
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" required placeholder={role === 'partner' ? "원장님 성함 (실명)" : "보호자 닉네임"} value={name} onChange={(e) => setName(e.target.value)} className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-900" />
                </div>
              )}
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" required placeholder="이메일 주소" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-900" />
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="password" required placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-900" />
              </div>
            </div>

            {mode === 'signup' && (
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-600 mb-2 ml-1">
                  {role === 'partner' ? '병원 인증 코드 (필수)' : '추천 병원 코드 (선택)'}
                </label>
                <div className="relative group">
                  <Building2 className={`absolute left-3 top-1/2 -translate-y-1/2 ${role === 'partner' ? 'text-blue-500' : 'text-slate-400'}`} size={18} />
                  <input type="text" required={role === 'partner'} placeholder="코드 입력" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-900 font-mono" />
                </div>
              </div>
            )}

            <button type="submit" disabled={loading} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 mt-8">
              {loading ? <Loader2 size={20} className="animate-spin" /> : <>{mode === 'login' ? '로그인하기' : '가입 신청하기'} <ArrowRight size={18} /></>}
            </button>
          </form>
        </div>
      </div>

      {/* 승인 대기 모달 */}
      {showApproveModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-2xl relative text-center animate-in zoom-in duration-200">
            <button onClick={() => setShowApproveModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-all"><X size={20} /></button>
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Stethoscope size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">승인 대기 중</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              수의사 파트너 계정은 관리자의 승인이 필요합니다.<br/>조금만 기다려 주시면 검토 후 승인해 드릴게요.
            </p>
            <button onClick={() => setShowApproveModal(false)} className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">확인</button>
          </div>
        </div>
      )}
    </div>
  );
}