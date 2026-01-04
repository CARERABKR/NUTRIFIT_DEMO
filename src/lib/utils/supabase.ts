// src/lib/utils/supabase.ts

import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// 환경변수 체크
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Supabase 환경변수(Service Role Key)가 누락되었습니다.');
}

// Service Role Key를 사용한 관리자 클라이언트 생성
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY, // 여기서 불러옵니다
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);