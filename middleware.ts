import { createServerClient, type NextRequest } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return request.cookies.get(name)?.value },
        set(name: string, value: string, options: any) {
          request.cookies.set({ name, value, ...options })
          response = NextResponse.next({ request: { headers: request.headers } })
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({ request: { headers: request.headers } })
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  // 서버 측 세션 강제 확인
  const { data: { user } } = await supabase.auth.getUser()

  // 관리자 경로 접근 제어
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!user) {
      // 세션이 없으면 무조건 로그인 페이지로 리다이렉트
      const loginUrl = new URL('/login', request.url)
      const redirectResponse = NextResponse.redirect(loginUrl)
      // 뒤로가기 방지를 위한 캐시 차단 헤더 주입
      redirectResponse.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate')
      return redirectResponse
    }
  }

  // 응답에 강력한 캐시 방지 헤더 적용 (뒤로가기 시 세션 재진입 방지)
  response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate')
  response.headers.set('Pragma', 'no-cache')
  response.headers.set('Expires', '0')
  
  return response
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}