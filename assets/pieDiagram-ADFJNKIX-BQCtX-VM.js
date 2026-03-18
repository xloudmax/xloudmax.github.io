import{_ as u,g as j,s as q,a as H,b as Z,q as J,p as K,l as z,c as Q,D as X,H as Y,O as tt,e as et,y as at,F as rt}from"./MarkdownViewer-CQoqawXq.js";import{p as nt}from"./chunk-4BX2VUAB-Bts1dRDo.js";import{p as it}from"./treemap-KMMF4GRG-BJktDe-p.js";import{d as I}from"./arc-CrbFrSnK.js";import{o as st}from"./ordinal-DILIJJjt.js";import{b as S,t as F,n as ot}from"./step-CNfwnWan.js";import"./main-Dxe96qr2.js";import"./vendor-react-BtLacSrB.js";import"./vendor-antd-oNyGNwRy.js";import"./vendor-utils-Ce1ZTWB2.js";import"./index-CQfHLveB.js";import"./_baseUniq-DdljStMC.js";import"./_basePickBy-Bvhl0Jbn.js";import"./clone-DXjIEPof.js";import"./init-Dmth1JHB.js";function lt(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function ct(t){return t}function pt(){var t=ct,a=lt,f=null,y=S(0),s=S(F),l=S(0);function o(e){var n,c=(e=ot(e)).length,d,x,h=0,p=new Array(c),i=new Array(c),v=+y.apply(this,arguments),w=Math.min(F,Math.max(-F,s.apply(this,arguments)-v)),m,C=Math.min(Math.abs(w)/c,l.apply(this,arguments)),$=C*(w<0?-1:1),g;for(n=0;n<c;++n)(g=i[p[n]=n]=+t(e[n],n,e))>0&&(h+=g);for(a!=null?p.sort(function(A,D){return a(i[A],i[D])}):f!=null&&p.sort(function(A,D){return f(e[A],e[D])}),n=0,x=h?(w-c*$)/h:0;n<c;++n,v=m)d=p[n],g=i[d],m=v+(g>0?g*x:0)+$,i[d]={data:e[d],index:n,value:g,startAngle:v,endAngle:m,padAngle:C};return i}return o.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),o):t},o.sortValues=function(e){return arguments.length?(a=e,f=null,o):a},o.sort=function(e){return arguments.length?(f=e,a=null,o):f},o.startAngle=function(e){return arguments.length?(y=typeof e=="function"?e:S(+e),o):y},o.endAngle=function(e){return arguments.length?(s=typeof e=="function"?e:S(+e),o):s},o.padAngle=function(e){return arguments.length?(l=typeof e=="function"?e:S(+e),o):l},o}var ut=rt.pie,G={sections:new Map,showData:!1},T=G.sections,N=G.showData,dt=structuredClone(ut),gt=u(()=>structuredClone(dt),"getConfig"),ft=u(()=>{T=new Map,N=G.showData,at()},"clear"),mt=u(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ht=u(()=>T,"getSections"),vt=u(t=>{N=t},"setShowData"),St=u(()=>N,"getShowData"),L={getConfig:gt,clear:ft,setDiagramTitle:K,getDiagramTitle:J,setAccTitle:Z,getAccTitle:H,setAccDescription:q,getAccDescription:j,addSection:mt,getSections:ht,setShowData:vt,getShowData:St},yt=u((t,a)=>{nt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),xt={parse:u(async t=>{const a=await it("pie",t);z.debug(a),yt(a,L)},"parse")},wt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),At=wt,Dt=u(t=>{const a=[...t.values()].reduce((s,l)=>s+l,0),f=[...t.entries()].map(([s,l])=>({label:s,value:l})).filter(s=>s.value/a*100>=1).sort((s,l)=>l.value-s.value);return pt().value(s=>s.value)(f)},"createPieArcs"),Ct=u((t,a,f,y)=>{z.debug(`rendering pie chart
`+t);const s=y.db,l=Q(),o=X(s.getConfig(),l.pie),e=40,n=18,c=4,d=450,x=d,h=Y(a),p=h.append("g");p.attr("transform","translate("+x/2+","+d/2+")");const{themeVariables:i}=l;let[v]=tt(i.pieOuterStrokeWidth);v??=2;const w=o.textPosition,m=Math.min(x,d)/2-e,C=I().innerRadius(0).outerRadius(m),$=I().innerRadius(m*w).outerRadius(m*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const g=s.getSections(),A=Dt(g),D=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let b=0;g.forEach(r=>{b+=r});const O=A.filter(r=>(r.data.value/b*100).toFixed(0)!=="0"),E=st(D);p.selectAll("mySlices").data(O).enter().append("path").attr("d",C).attr("fill",r=>E(r.data.label)).attr("class","pieCircle"),p.selectAll("mySlices").data(O).enter().append("text").text(r=>(r.data.value/b*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const W=[...g.entries()].map(([r,M])=>({label:r,value:M})),k=p.selectAll(".legend").data(W).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{const R=n+c,B=R*W.length/2,V=12*n,U=M*R-B;return"translate("+V+","+U+")"});k.append("rect").attr("width",n).attr("height",n).style("fill",r=>E(r.label)).style("stroke",r=>E(r.label)),k.append("text").attr("x",n+c).attr("y",n-c).text(r=>s.getShowData()?`${r.label} [${r.value}]`:r.label);const _=Math.max(...k.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),P=x+e+n+c+_;h.attr("viewBox",`0 0 ${P} ${d}`),et(h,d,P,o.useMaxWidth)},"draw"),$t={draw:Ct},_t={parser:xt,db:L,renderer:$t,styles:At};export{_t as diagram};
