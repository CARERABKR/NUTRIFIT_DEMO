import Link from 'next/link';
import { ChevronRight, ShieldCheck, Activity, UserPlus } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* 1. GNB (상단 네비게이션) */}
      <header className="h-20 px-6 md:px-20 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="flex items-center gap-2">
          {/* 로고 영역 */}
          <div className="w-8 h-8 bg-nutri-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            N
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            NutriFit<span className="text-nutri-500">.</span>
          </span>
        </div>
        <div className="flex gap-4">
          <Link href="/auth/login" className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
            로그인
          </Link>
          <Link href="/survey-intro" className="px-5 py-2.5 text-sm font-bold text-white bg-nutri-600 hover:bg-nutri-700 rounded-full shadow-lg shadow-nutri-500/20 transition-all">
            3분 건강설문 시작
          </Link>
        </div>
      </header>

      {/* 2. Hero Section (메인 배너) */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* 텍스트 영역 */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nutri-50 border border-nutri-100 rounded-full text-nutri-700 font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-nutri-500 animate-pulse"></span>
              수의사 검증형 영양제 구독
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              데이터로 증명하는 <br />
              <span className="text-nutri-600">반려동물 헬스케어</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              더 이상 감에 의존하지 마세요.<br/>
              병원 진료 데이터와 AI 분석을 결합하여<br/>
              우리 아이에게 꼭 필요한 영양 성분만 설계해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
                무료 진단 받기
                <ChevronRight size={20} />
              </button>
              <div className="flex items-center gap-4 px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="text-right">
                  <p className="text-xs text-slate-500">누적 분석 데이터</p>
                  <p className="text-xl font-bold text-slate-900">1,240,000+</p>
                </div>
              </div>
            </div>
          </div>

          {/* 이미지/그래픽 영역 */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-nutri-100 to-slate-50 rounded-full blur-3xl opacity-60"></div>
            <div className="relative bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100">
              {/* 차트 UI 예시 */}
              <div className="space-y-6">
                <div className="flex justify-between items-end pb-4 border-b border-slate-100">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Health Score</p>
                    <p className="text-4xl font-bold text-nutri-600">84.5<span className="text-lg text-slate-400 font-normal">/100</span></p>
                  </div>
                  <div className="flex gap-1">
                    {[40, 65, 50, 85, 70, 90].map((h, i) => (
                      <div key={i} className="w-3 bg-nutri-100 rounded-t-sm" style={{ height: `${h}px` }}>
                        {i === 5 && <div className="w-full h-full bg-nutri-500 rounded-t-sm"></div>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <ShieldCheck className="text-nutri-600 mb-2" size={24} />
                    <p className="text-sm font-bold text-slate-700">금기성분 차단</p>
                    <p className="text-xs text-slate-500">신장질환 위험 성분 제외됨</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <Activity className="text-chart-warning mb-2" size={24} />
                    <p className="text-sm font-bold text-slate-700">관절 주의</p>
                    <p className="text-xs text-slate-500">슬개골 탈구 위험 2단계</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section (핵심 기능) */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">왜 뉴트리핏인가요?</h2>
            <p className="text-slate-500">단순한 영양제 판매가 아닌, 수의학적 관리 시스템을 제공합니다.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Safety Gate",
                desc: "기저질환과 충돌하는 위험 성분을 100% 필터링하여 부작용을 원천 차단합니다."
              },
              {
                icon: UserPlus,
                title: "Doctor Code",
                desc: "다니던 동물병원 수의사가 직접 승인하고 처방한 맞춤형 설계를 받아보세요."
              },
              {
                icon: Activity,
                title: "XAI Report",
                desc: "왜 이 성분이 필요한지, AI가 분석한 의학적 근거를 투명하게 설명해 드립니다."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-nutri-600">
                  <feature.icon size={30} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}