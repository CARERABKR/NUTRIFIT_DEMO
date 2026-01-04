'use client';

import React from 'react';
import Sidebar from '@/components/admin/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 왼쪽 사이드바 고정 */}
      <div className="w-[260px] flex-shrink-0">
        <Sidebar />
      </div>

      {/* 오른쪽 메인 콘텐츠 영역 */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}