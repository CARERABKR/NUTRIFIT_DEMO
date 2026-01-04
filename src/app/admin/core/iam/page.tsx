'use client';

import React, { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { 
  Shield, UserPlus, MoreHorizontal, Search, 
  CheckCircle2, XCircle, Stethoscope, RefreshCw 
} from 'lucide-react';

type Profile = {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'partner' | 'user';
  department: string | null;
  status: boolean;
  last_login: string;
};

export default function IamPage() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('role', filter);
      }
      
      if (search) {
        query = query.ilike('name', `%${search}%`);
      }

      const { data, error } = await query;

      if (!error && data) {
        const mappedData = data.map((user: any) => ({
          id: user.id,
          email: user.email,
          name: user.name || 'Unknown',
          role: user.role,
          department: user.doctor_code || '-', 
          status: user.is_approved, 
          last_login: user.updated_at ? new Date(user.updated_at).toLocaleString() : '미접속',
        }));
        setUsers(mappedData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filter]);

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') fetchUsers();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">계정 및 권한 (IAM)</h1>
          <p className="text-slate-500 mt-1">시스템 접근 권한 및 파트너 수의사 계정을 중앙 관리합니다.</p>
        </div>
        <div className="flex gap-2">
           <button onClick={fetchUsers} className="p-2 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 shadow-sm">
             <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
           </button>
           <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-md">
             <UserPlus size={18} /> 새 계정 초대
           </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="이름 검색 후 엔터..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            className="w-full h-10 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-900 transition-all"
          />
        </div>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="h-10 px-4 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 focus:outline-none focus:border-slate-900"
        >
          <option value="all">전체 권한</option>
          <option value="admin">Master Admin</option>
          <option value="partner">Partner Vet</option>
          <option value="user">General User</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500 font-bold uppercase tracking-widest">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="p-4 pl-6">사용자 정보</th>
                  <th className="p-4">역할 (Role)</th>
                  <th className="p-4">소속 / 부서</th>
                  <th className="p-4">계정 상태</th>
                  <th className="p-4">최근 접속</th>
                  <th className="p-4 text-right pr-6">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 pl-6">
                      <div className="font-bold text-slate-900">{user.name}</div>
                      <div className="text-xs text-slate-400">{user.email}</div>
                    </td>
                    <td className="p-4">
                      {user.role === 'partner' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                          <Stethoscope size={12} /> Partner Vet
                        </span>
                      ) : user.role === 'admin' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          <Shield size={12} /> Admin
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-500 border border-slate-100">
                          User
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-slate-600">{user.department}</td>
                    <td className="p-4">
                      {user.status ? (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                          <CheckCircle2 size={14} /> Active
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                          <XCircle size={14} /> Pending
                        </div>
                      )}
                    </td>
                    <td className="p-4 text-xs text-slate-500 font-mono tracking-tighter">{user.last_login}</td>
                    <td className="p-4 text-right pr-6">
                      <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}