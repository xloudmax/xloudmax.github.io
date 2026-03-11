import{c as i,j as e,T as l}from"./main-Ccb7qfPN.js";import{e as o,c as n}from"./vendor-antd-BxDQD0KH.js";const{Title:d,Text:c}=n,m=({children:r,title:t,subtitle:s})=>{const{isDarkMode:a}=i();return e.jsxs("div",{className:"min-h-screen flex items-center justify-center px-4 relative transition-all duration-1000 overflow-hidden",children:[e.jsx(l,{}),e.jsx("style",{children:`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.98);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}),e.jsx("div",{className:"w-full max-w-md relative z-10 animate-fade-in-up",children:e.jsxs(o,{className:"shadow-2xl border-0 overflow-hidden",style:{background:a?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.6)",backdropFilter:"blur(40px) saturate(180%)",WebkitBackdropFilter:"blur(40px) saturate(180%)",borderRadius:"32px",border:`1px solid ${a?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.4)"}`,boxShadow:a?"0 25px 50px -12px rgba(0, 0, 0, 0.5)":"0 20px 40px -12px rgba(100, 116, 139, 0.25)",maxWidth:"420px",margin:"0 auto"},bodyStyle:{padding:"40px 32px"},children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsx(d,{level:2,className:"mb-2 tracking-tight",style:{color:a?"#fff":"#111827",fontWeight:700,letterSpacing:"-0.5px"},children:t}),e.jsx(c,{className:"text-base font-medium",style:{color:a?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.5)"},children:s})]}),r]})})]})};export{m as A};
