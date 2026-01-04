'use client';

import React from 'react';
import { 
  Folder, FileText, UploadCloud, Image as ImageIcon, 
  MoreVertical, Grid, List, Search, Film 
} from 'lucide-react';

export default function EcmPage() {
  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">콘텐츠 관리 (ECM)</h1>
          <p className="text-slate-500 mt-1">
            마케팅 자산, 제품 이미지, 개인화 리포트 문서를 중앙에서 통합 관리합니다.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
            <Folder size={16} />
            새 폴더
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 shadow-md">
            <UploadCloud size={16} />
            파일 업로드
          </button>
        </div>
      </div>

      {/* 저장소 현황 */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-card flex items-center justify-between">
        <div className="flex gap-8">
           <div>
             <p className="text-sm font-bold text-slate-500">총 자산 수</p>
             <p className="text-2xl font-bold text-slate-900">12,450</p>
           </div>
           <div>
             <p className="text-sm font-bold text-slate-500">사용 용량</p>
             <p className="text-2xl font-bold text-slate-900">450 GB <span className="text-sm font-normal text-slate-400">/ 1TB</span></p>
           </div>
        </div>
        <div className="flex-1 max-w-md ml-8">
           <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
             <span>Storage Usage</span>
             <span>45%</span>
           </div>
           <div className="w-full bg-slate-100 rounded-full h-3 flex overflow-hidden">
             <div className="bg-blue-500 h-full" style={{width: '30%'}}></div> {/* Images */}
             <div className="bg-purple-500 h-full" style={{width: '10%'}}></div> {/* Videos */}
             <div className="bg-orange-400 h-full" style={{width: '5%'}}></div> {/* Docs */}
           </div>
           <div className="flex gap-4 mt-2 justify-end">
             <span className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-blue-500"></div>Images</span>
             <span className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-purple-500"></div>Videos</span>
             <span className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-orange-400"></div>Docs</span>
           </div>
        </div>
      </div>

      {/* 파일 브라우저 UI */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-card min-h-[500px] flex flex-col">
        {/* 툴바 */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span className="hover:text-slate-900 cursor-pointer">Home</span>
            <span>/</span>
            <span className="hover:text-slate-900 cursor-pointer">Marketing</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">2026_Q1_Campaign</span>
          </div>
          <div className="flex gap-2">
             <div className="relative">
               <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
               <input type="text" placeholder="검색..." className="pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none" />
             </div>
             <div className="flex bg-slate-100 rounded-lg p-1">
               <button className="p-1.5 bg-white rounded shadow-sm text-slate-800"><Grid size={14}/></button>
               <button className="p-1.5 text-slate-400 hover:text-slate-600"><List size={14}/></button>
             </div>
          </div>
        </div>

        {/* 파일 그리드 */}
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* 폴더 */}
          <div className="group cursor-pointer">
            <div className="aspect-square bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors">
              <Folder size={40} className="text-blue-400 fill-blue-400" />
            </div>
            <p className="text-xs font-bold text-center text-slate-700 truncate">Instagram_Assets</p>
            <p className="text-[10px] text-center text-slate-400">12 items</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-square bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors">
              <Folder size={40} className="text-blue-400 fill-blue-400" />
            </div>
            <p className="text-xs font-bold text-center text-slate-700 truncate">Banner_Source</p>
            <p className="text-[10px] text-center text-slate-400">5 items</p>
          </div>

          {/* 파일들 */}
          {[
            { name: 'Main_Banner_v2.png', type: 'img', size: '2.4 MB' },
            { name: 'Promo_Video_Final.mp4', type: 'vid', size: '45 MB' },
            { name: 'Campaign_Plan.pdf', type: 'doc', size: '1.2 MB' },
            { name: 'Logo_Vector.svg', type: 'img', size: '0.5 MB' },
            { name: 'Product_Shot_01.jpg', type: 'img', size: '4.1 MB' },
            { name: 'Copy_Draft.docx', type: 'doc', size: '0.8 MB' },
          ].map((file, i) => (
            <div key={i} className="group cursor-pointer relative">
               <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
                 <MoreVertical size={14} className="text-slate-500" />
               </button>
               <div className="aspect-square bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center mb-2 group-hover:border-brand-300 transition-colors overflow-hidden">
                 {file.type === 'img' ? <ImageIcon size={32} className="text-slate-400" /> : 
                  file.type === 'vid' ? <Film size={32} className="text-purple-400" /> :
                  <FileText size={32} className="text-orange-400" />}
               </div>
               <p className="text-xs font-bold text-center text-slate-700 truncate px-1">{file.name}</p>
               <p className="text-[10px] text-center text-slate-400">{file.size}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}