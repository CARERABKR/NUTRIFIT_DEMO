'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import { 
  LayoutGrid, ShieldCheck, PieChart, Activity, 
  Truck, Users, ChevronDown, ChevronRight, LogOut, User,
  Database, Server, Settings, FileText, Lock, 
  CreditCard, Briefcase, Factory, Package, Globe, 
  GraduationCap, Headphones, Wrench, BarChart4, 
  Archive, Network, Cpu, ClipboardCheck, Layers,
  Fingerprint, ScanEye, Building2 
} from 'lucide-react';

const MENU_GROUPS = [
  {
    title: '핵심 관리',
    items: [
      { name: '대시보드', href: '/admin/core/dashboard', icon: LayoutGrid },
      { name: '계정 및 권한 (IAM)', href: '/admin/core/iam', icon: Users },
      { name: '파트너 코드 관리', href: '/admin/core/partners', icon: Building2 },
      { name: '통합 보안 관제', href: '/admin/core/security', icon: Lock }, 
      { name: '시스템 감사 로그', href: '/admin/core/audit', icon: ClipboardCheck },
      { name: '환경 설정', href: '/admin/core/settings', icon: Settings },
    ]
  },
  {
    title: 'AI 및 데이터',
    items: [
      { name: 'AI 분석 엔진', href: '/admin/analytics/engine', icon: Cpu },
      { name: '안전 필터링 (Safety Gate)', href: '/admin/analytics/safety', icon: ShieldCheck },
      { name: '프라이버시 (연합 학습)', href: '/admin/analytics/privacy', icon: Fingerprint },
      { name: '비즈니스 분석 (BI)', href: '/admin/analytics/bi', icon: BarChart4 },
      { name: '데이터 저장소 (DWH)', href: '/admin/analytics/dwh', icon: Database },
      { name: '재무 예측 (FP&A)', href: '/admin/analytics/fpna', icon: Activity },
      { name: '보안 정보 관리 (SIEM)', href: '/admin/analytics/siem', icon: ScanEye },
    ]
  },
  {
    title: '경영 지원',
    items: [
      { name: '전사 자원 관리 (ERP)', href: '/admin/operations/erp', icon: Layers },
      { name: '재무 및 정산', href: '/admin/operations/finance', icon: CreditCard },
      { name: '인사 관리 (HR)', href: '/admin/operations/hr', icon: Briefcase },
      { name: '기업 성과 관리', href: '/admin/operations/epm', icon: PieChart },
      { name: '기업 지배 구조 (GRC)', href: '/admin/operations/grc', icon: ClipboardCheck },
    ]
  },
  {
    title: '물류 및 생산',
    items: [
      { name: '공급망 관리 (SCM)', href: '/admin/logistics/scm', icon: Globe },
      { name: '창고 관리 (WMS)', href: '/admin/logistics/wms', icon: Archive },
      { name: '배송 관리 (TMS)', href: '/admin/logistics/tms', icon: Truck },
      { name: '자재 소요 관리 (MRP)', href: '/admin/logistics/mrp', icon: Package },
      { name: '생산 실행 (MES)', href: '/admin/logistics/mes', icon: Factory },
      { name: '제품 수명 주기 (PLM)', href: '/admin/logistics/plm', icon: Activity },
      { name: '자산 운용 (EAM)', href: '/admin/logistics/eam', icon: Wrench },
    ]
  },
  {
    title: '고객 및 콘텐츠',
    items: [
      { name: '고객 관계 관리 (CRM)', href: '/admin/customer/crm', icon: Users },
      { name: '고객 데이터 (CDP)', href: '/admin/customer/cdp', icon: Database },
      { name: '콘텐츠 관리 (ECM)', href: '/admin/customer/ecm', icon: FileText },
    ]
  },
  {
    title: 'IT 인프라',
    items: [
      { name: '시스템 운영', href: '/admin/it-infra/system', icon: Server },
      { name: '시스템 통합 (iPaaS)', href: '/admin/it-infra/ipaas', icon: Network },
      { name: '서비스 운영 (ITSM)', href: '/admin/it-infra/itsm', icon: Headphones },
      { name: '학습 관리 (LMS)', href: '/admin/it-infra/lms', icon: GraduationCap },
      { name: '프로젝트 관리 (PPM)', href: '/admin/it-infra/ppm', icon: ClipboardCheck },
    ]
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>('핵심 관리');
  
  // 실시간 유저 정보 상태
  const [userData, setUserData] = useState<{ name: string; role: string } | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .maybeSingle();
          
          if (error) throw error;

          if (profile) {
            setUserData({
              // DB 컬럼명(name 또는 full_name)에 따라 자동으로 매칭합니다.
              name: profile.name || profile.full_name || '이름 없음',
              role: profile.role === 'admin' ? '총괄 관리자' : '파트너'
            });
          }
        }
      } catch (err) {
        console.error("Sidebar 데이터 로딩 실패:", err);
      }
    };

    fetchUserProfile();
  }, [supabase]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut(); 
      if (typeof window !== 'undefined') {
        localStorage.clear();
        sessionStorage.clear();
        window.location.replace('/login'); 
      }
    } catch (error) {
      window.location.replace('/login');
    }
  };

  const toggleGroup = (title: string) => {
    setOpenGroup(prev => (prev === title ? null : title));
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-white border-r border-slate-200 z-50 flex flex-col font-sans transition-all duration-300">
      
      <div className="flex-none bg-white z-10">
        <div className="h-[72px] flex items-center px-6 border-b border-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm">
              뉴
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-none">뉴트리핏</h1>
              <span className="text-[11px] font-medium text-slate-400">관리자 시스템</span>
            </div>
          </div>
        </div>

        {/* 프로필 영역: 실제 DB 데이터 연동 */}
        <div className="px-4 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
              <User size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900">
                {userData ? userData.name : '정보 확인 중...'}
              </span>
              <span className="text-[10px] text-slate-500 font-medium leading-tight">
                {userData ? userData.role : ''}
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        {MENU_GROUPS.map((group) => {
          const isOpen = openGroup === group.title;
          return (
            <div key={group.title} className="rounded-lg overflow-hidden">
              <button
                onClick={() => toggleGroup(group.title)}
                className={`w-full flex items-center justify-between px-3 py-3 text-xs font-bold transition-colors duration-200
                  ${isOpen ? 'text-slate-800' : 'text-slate-400 hover:text-slate-600'}
                `}
              >
                <span>{group.title}</span>
                {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="space-y-0.5 pl-1">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
                          <item.icon size={16} className={isActive ? 'text-slate-900' : 'text-slate-300'} />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="flex-none p-4 border-t border-slate-100 bg-white">
        <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group">
          <LogOut size={16} className="text-slate-400 group-hover:text-red-600 transition-colors" />
          <span>로그아웃</span>
        </button>
      </div>
    </aside>
  );
}