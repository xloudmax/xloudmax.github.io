import{_ as l,g as Me,s as Le,q as We,p as Ve,a as Oe,b as Ne,c as at,d as kt,e as Pe,l as bt,k as ze,j as Re,y as Ye,u as Be}from"./MarkdownViewer-Dq-QBc62.js";import{q as z,ac as qe,ad as je}from"./vendor-antd-DVH3vydC.js";import{g as He}from"./vendor-react-BtLacSrB.js";import{t as Xe,m as Ge,a as Ue,b as Qt,c as $t,d as Ke,e as Ze,f as Je,g as Qe,h as $e,i as tr,j as er,k as te,l as ee,n as re,s as ie,o as ne}from"./time-D3I3YGOI.js";import{l as rr}from"./linear-DsFxHvB9.js";import{R as ue,x as ir,y as de,z as fe,C as he,A as St,B as nr}from"./step-CNfwnWan.js";import"./main-Dgn7sjAG.js";import"./vendor-utils-Ce1ZTWB2.js";import"./index-DDvXf51x.js";import"./init-Dmth1JHB.js";import"./value-DHjWBi5C.js";import"./defaultLocale-C4B-KCzX.js";function ar(t){return t}var yt=1,It=2,Wt=3,mt=4,ae=1e-6;function sr(t){return"translate("+t+",0)"}function cr(t){return"translate(0,"+t+")"}function lr(t){return e=>+t(e)}function or(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function ur(){return!this.__axis}function ke(t,e){var r=[],i=null,n=null,h=6,d=6,S=3,A=typeof window<"u"&&window.devicePixelRatio>1?0:.5,C=t===yt||t===mt?-1:1,_=t===mt||t===It?"x":"y",M=t===yt||t===Wt?sr:cr;function x(p){var O=i??(e.ticks?e.ticks.apply(e,r):e.domain()),D=n??(e.tickFormat?e.tickFormat.apply(e,r):ar),et=Math.max(h,0)+S,Z=e.range(),H=+Z[0]+A,X=+Z[Z.length-1]+A,G=(e.bandwidth?or:lr)(e.copy(),A),j=p.selection?p.selection():p,B=j.selectAll(".domain").data([null]),P=j.selectAll(".tick").data(O,e).order(),g=P.exit(),T=P.enter().append("g").attr("class","tick"),v=P.select("line"),b=P.select("text");B=B.merge(B.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),P=P.merge(T),v=v.merge(T.append("line").attr("stroke","currentColor").attr(_+"2",C*h)),b=b.merge(T.append("text").attr("fill","currentColor").attr(_,C*et).attr("dy",t===yt?"0em":t===Wt?"0.71em":"0.32em")),p!==j&&(B=B.transition(p),P=P.transition(p),v=v.transition(p),b=b.transition(p),g=g.transition(p).attr("opacity",ae).attr("transform",function(y){return isFinite(y=G(y))?M(y+A):this.getAttribute("transform")}),T.attr("opacity",ae).attr("transform",function(y){var w=this.parentNode.__axis;return M((w&&isFinite(w=w(y))?w:G(y))+A)})),g.remove(),B.attr("d",t===mt||t===It?d?"M"+C*d+","+H+"H"+A+"V"+X+"H"+C*d:"M"+A+","+H+"V"+X:d?"M"+H+","+C*d+"V"+A+"H"+X+"V"+C*d:"M"+H+","+A+"H"+X),P.attr("opacity",1).attr("transform",function(y){return M(G(y)+A)}),v.attr(_+"2",C*h),b.attr(_,C*et).text(D),j.filter(ur).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===It?"start":t===mt?"end":"middle"),j.each(function(){this.__axis=G})}return x.scale=function(p){return arguments.length?(e=p,x):e},x.ticks=function(){return r=Array.from(arguments),x},x.tickArguments=function(p){return arguments.length?(r=p==null?[]:Array.from(p),x):r.slice()},x.tickValues=function(p){return arguments.length?(i=p==null?null:Array.from(p),x):i&&i.slice()},x.tickFormat=function(p){return arguments.length?(n=p,x):n},x.tickSize=function(p){return arguments.length?(h=d=+p,x):h},x.tickSizeInner=function(p){return arguments.length?(h=+p,x):h},x.tickSizeOuter=function(p){return arguments.length?(d=+p,x):d},x.tickPadding=function(p){return arguments.length?(S=+p,x):S},x.offset=function(p){return arguments.length?(A=+p,x):A},x}function dr(t){return ke(yt,t)}function fr(t){return ke(Wt,t)}const hr=Math.PI/180,kr=180/Math.PI,xt=18,me=.96422,ye=1,ge=.82521,pe=4/29,st=6/29,ve=3*st*st,mr=st*st*st;function be(t){if(t instanceof K)return new K(t.l,t.a,t.b,t.opacity);if(t instanceof tt)return xe(t);t instanceof ue||(t=ir(t));var e=Lt(t.r),r=Lt(t.g),i=Lt(t.b),n=At((.2225045*e+.7168786*r+.0606169*i)/ye),h,d;return e===r&&r===i?h=d=n:(h=At((.4360747*e+.3850649*r+.1430804*i)/me),d=At((.0139322*e+.0971045*r+.7141733*i)/ge)),new K(116*n-16,500*(h-n),200*(n-d),t.opacity)}function yr(t,e,r,i){return arguments.length===1?be(t):new K(t,e,r,i??1)}function K(t,e,r,i){this.l=+t,this.a=+e,this.b=+r,this.opacity=+i}de(K,yr,fe(he,{brighter(t){return new K(this.l+xt*(t??1),this.a,this.b,this.opacity)},darker(t){return new K(this.l-xt*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,r=isNaN(this.b)?t:t-this.b/200;return e=me*Ft(e),t=ye*Ft(t),r=ge*Ft(r),new ue(Mt(3.1338561*e-1.6168667*t-.4906146*r),Mt(-.9787684*e+1.9161415*t+.033454*r),Mt(.0719453*e-.2289914*t+1.4052427*r),this.opacity)}}));function At(t){return t>mr?Math.pow(t,1/3):t/ve+pe}function Ft(t){return t>st?t*t*t:ve*(t-pe)}function Mt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Lt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function gr(t){if(t instanceof tt)return new tt(t.h,t.c,t.l,t.opacity);if(t instanceof K||(t=be(t)),t.a===0&&t.b===0)return new tt(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*kr;return new tt(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Vt(t,e,r,i){return arguments.length===1?gr(t):new tt(t,e,r,i??1)}function tt(t,e,r,i){this.h=+t,this.c=+e,this.l=+r,this.opacity=+i}function xe(t){if(isNaN(t.h))return new K(t.l,0,0,t.opacity);var e=t.h*hr;return new K(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}de(tt,Vt,fe(he,{brighter(t){return new tt(this.h,this.c,this.l+xt*(t??1),this.opacity)},darker(t){return new tt(this.h,this.c,this.l-xt*(t??1),this.opacity)},rgb(){return xe(this).rgb()}}));function pr(t){return function(e,r){var i=t((e=Vt(e)).h,(r=Vt(r)).h),n=St(e.c,r.c),h=St(e.l,r.l),d=St(e.opacity,r.opacity);return function(S){return e.h=i(S),e.c=n(S),e.l=h(S),e.opacity=d(S),e+""}}}const vr=pr(nr);var gt={exports:{}},br=gt.exports,se;function xr(){return se||(se=1,(function(t,e){(function(r,i){t.exports=i()})(br,(function(){var r="day";return function(i,n,h){var d=function(C){return C.add(4-C.isoWeekday(),r)},S=n.prototype;S.isoWeekYear=function(){return d(this).year()},S.isoWeek=function(C){if(!this.$utils().u(C))return this.add(7*(C-this.isoWeek()),r);var _,M,x,p,O=d(this),D=(_=this.isoWeekYear(),M=this.$u,x=(M?h.utc:h)().year(_).startOf("year"),p=4-x.isoWeekday(),x.isoWeekday()>4&&(p+=7),x.add(p,r));return O.diff(D,"week")+1},S.isoWeekday=function(C){return this.$utils().u(C)?this.day()||7:this.day(this.day()%7?C:C-7)};var A=S.startOf;S.startOf=function(C,_){var M=this.$utils(),x=!!M.u(_)||_;return M.p(C)==="isoweek"?x?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):A.bind(this)(C,_)}}}))})(gt)),gt.exports}var Tr=xr();const wr=He(Tr);var Ot=(function(){var t=l(function(w,o,f,k){for(f=f||{},k=w.length;k--;f[w[k]]=o);return f},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],i=[1,27],n=[1,28],h=[1,29],d=[1,30],S=[1,31],A=[1,32],C=[1,33],_=[1,34],M=[1,9],x=[1,10],p=[1,11],O=[1,12],D=[1,13],et=[1,14],Z=[1,15],H=[1,16],X=[1,19],G=[1,20],j=[1,21],B=[1,22],P=[1,23],g=[1,25],T=[1,35],v={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(o,f,k,u,m,s,c){var a=s.length-1;switch(m){case 1:return s[a-1];case 2:this.$=[];break;case 3:s[a-1].push(s[a]),this.$=s[a-1];break;case 4:case 5:this.$=s[a];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(s[a].substr(11)),this.$=s[a].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=s[a].substr(18);break;case 19:u.TopAxis(),this.$=s[a].substr(8);break;case 20:u.setAxisFormat(s[a].substr(11)),this.$=s[a].substr(11);break;case 21:u.setTickInterval(s[a].substr(13)),this.$=s[a].substr(13);break;case 22:u.setExcludes(s[a].substr(9)),this.$=s[a].substr(9);break;case 23:u.setIncludes(s[a].substr(9)),this.$=s[a].substr(9);break;case 24:u.setTodayMarker(s[a].substr(12)),this.$=s[a].substr(12);break;case 27:u.setDiagramTitle(s[a].substr(6)),this.$=s[a].substr(6);break;case 28:this.$=s[a].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=s[a].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(s[a].substr(8)),this.$=s[a].substr(8);break;case 33:u.addTask(s[a-1],s[a]),this.$="task";break;case 34:this.$=s[a-1],u.setClickEvent(s[a-1],s[a],null);break;case 35:this.$=s[a-2],u.setClickEvent(s[a-2],s[a-1],s[a]);break;case 36:this.$=s[a-2],u.setClickEvent(s[a-2],s[a-1],null),u.setLink(s[a-2],s[a]);break;case 37:this.$=s[a-3],u.setClickEvent(s[a-3],s[a-2],s[a-1]),u.setLink(s[a-3],s[a]);break;case 38:this.$=s[a-2],u.setClickEvent(s[a-2],s[a],null),u.setLink(s[a-2],s[a-1]);break;case 39:this.$=s[a-3],u.setClickEvent(s[a-3],s[a-1],s[a]),u.setLink(s[a-3],s[a-2]);break;case 40:this.$=s[a-1],u.setLink(s[a-1],s[a]);break;case 41:case 47:this.$=s[a-1]+" "+s[a];break;case 42:case 43:case 45:this.$=s[a-2]+" "+s[a-1]+" "+s[a];break;case 44:case 46:this.$=s[a-3]+" "+s[a-2]+" "+s[a-1]+" "+s[a];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:i,14:n,15:h,16:d,17:S,18:A,19:18,20:C,21:_,22:M,23:x,24:p,25:O,26:D,27:et,28:Z,29:H,30:X,31:G,33:j,35:B,36:P,37:24,38:g,40:T},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:r,13:i,14:n,15:h,16:d,17:S,18:A,19:18,20:C,21:_,22:M,23:x,24:p,25:O,26:D,27:et,28:Z,29:H,30:X,31:G,33:j,35:B,36:P,37:24,38:g,40:T},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:l(function(o,f){if(f.recoverable)this.trace(o);else{var k=new Error(o);throw k.hash=f,k}},"parseError"),parse:l(function(o){var f=this,k=[0],u=[],m=[null],s=[],c=this.table,a="",F=0,E=0,I=2,N=1,L=s.slice.call(arguments,1),W=Object.create(this.lexer),J={yy:{}};for(var _t in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_t)&&(J.yy[_t]=this.yy[_t]);W.setInput(o,J.yy),J.yy.lexer=W,J.yy.parser=this,typeof W.yylloc>"u"&&(W.yylloc={});var Ct=W.yylloc;s.push(Ct);var Ae=W.options&&W.options.ranges;typeof J.yy.parseError=="function"?this.parseError=J.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Fe(Y){k.length=k.length-2*Y,m.length=m.length-Y,s.length=s.length-Y}l(Fe,"popStack");function Zt(){var Y;return Y=u.pop()||W.lex()||N,typeof Y!="number"&&(Y instanceof Array&&(u=Y,Y=u.pop()),Y=f.symbols_[Y]||Y),Y}l(Zt,"lex");for(var R,rt,q,Dt,nt={},ft,Q,Jt,ht;;){if(rt=k[k.length-1],this.defaultActions[rt]?q=this.defaultActions[rt]:((R===null||typeof R>"u")&&(R=Zt()),q=c[rt]&&c[rt][R]),typeof q>"u"||!q.length||!q[0]){var Et="";ht=[];for(ft in c[rt])this.terminals_[ft]&&ft>I&&ht.push("'"+this.terminals_[ft]+"'");W.showPosition?Et="Parse error on line "+(F+1)+`:
`+W.showPosition()+`
Expecting `+ht.join(", ")+", got '"+(this.terminals_[R]||R)+"'":Et="Parse error on line "+(F+1)+": Unexpected "+(R==N?"end of input":"'"+(this.terminals_[R]||R)+"'"),this.parseError(Et,{text:W.match,token:this.terminals_[R]||R,line:W.yylineno,loc:Ct,expected:ht})}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+rt+", token: "+R);switch(q[0]){case 1:k.push(R),m.push(W.yytext),s.push(W.yylloc),k.push(q[1]),R=null,E=W.yyleng,a=W.yytext,F=W.yylineno,Ct=W.yylloc;break;case 2:if(Q=this.productions_[q[1]][1],nt.$=m[m.length-Q],nt._$={first_line:s[s.length-(Q||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(Q||1)].first_column,last_column:s[s.length-1].last_column},Ae&&(nt._$.range=[s[s.length-(Q||1)].range[0],s[s.length-1].range[1]]),Dt=this.performAction.apply(nt,[a,E,F,J.yy,q[1],m,s].concat(L)),typeof Dt<"u")return Dt;Q&&(k=k.slice(0,-1*Q*2),m=m.slice(0,-1*Q),s=s.slice(0,-1*Q)),k.push(this.productions_[q[1]][0]),m.push(nt.$),s.push(nt._$),Jt=c[k[k.length-2]][k[k.length-1]],k.push(Jt);break;case 3:return!0}}return!0},"parse")},b=(function(){var w={EOF:1,parseError:l(function(f,k){if(this.yy.parser)this.yy.parser.parseError(f,k);else throw new Error(f)},"parseError"),setInput:l(function(o,f){return this.yy=f||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:l(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var f=o.match(/(?:\r\n?|\n).*/g);return f?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:l(function(o){var f=o.length,k=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-f),this.offset-=f;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),k.length-1&&(this.yylineno-=k.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:k?(k.length===u.length?this.yylloc.first_column:0)+u[u.length-k.length].length-k[0].length:this.yylloc.first_column-f},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-f]),this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(o){this.unput(this.match.slice(o))},"less"),pastInput:l(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var o=this.pastInput(),f=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+f+"^"},"showPosition"),test_match:l(function(o,f){var k,u,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),u=o[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],k=this.performAction.call(this,this.yy,this,f,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),k)return k;if(this._backtrack){for(var s in m)this[s]=m[s];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,f,k,u;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),s=0;s<m.length;s++)if(k=this._input.match(this.rules[m[s]]),k&&(!f||k[0].length>f[0].length)){if(f=k,u=s,this.options.backtrack_lexer){if(o=this.test_match(k,m[s]),o!==!1)return o;if(this._backtrack){f=!1;continue}else return!1}else if(!this.options.flex)break}return f?(o=this.test_match(f,m[u]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var f=this.next();return f||this.lex()},"lex"),begin:l(function(f){this.conditionStack.push(f)},"begin"),popState:l(function(){var f=this.conditionStack.length-1;return f>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:l(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(f){return f=this.conditionStack.length-1-Math.abs(f||0),f>=0?this.conditionStack[f]:"INITIAL"},"topState"),pushState:l(function(f){this.begin(f)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(f,k,u,m){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return w})();v.lexer=b;function y(){this.yy={}}return l(y,"Parser"),y.prototype=v,v.Parser=y,new y})();Ot.parser=Ot;var _r=Ot;z.extend(wr);z.extend(qe);z.extend(je);var ce={friday:5,saturday:6},U="",Rt="",Yt=void 0,Bt="",ot=[],ut=[],qt=new Map,jt=[],Tt=[],lt="",Ht="",Te=["active","done","crit","milestone","vert"],Xt=[],dt=!1,Gt=!1,Ut="sunday",wt="saturday",Nt=0,Cr=l(function(){jt=[],Tt=[],lt="",Xt=[],pt=0,zt=void 0,vt=void 0,V=[],U="",Rt="",Ht="",Yt=void 0,Bt="",ot=[],ut=[],dt=!1,Gt=!1,Nt=0,qt=new Map,Ye(),Ut="sunday",wt="saturday"},"clear"),Dr=l(function(t){Rt=t},"setAxisFormat"),Er=l(function(){return Rt},"getAxisFormat"),Sr=l(function(t){Yt=t},"setTickInterval"),Ir=l(function(){return Yt},"getTickInterval"),Ar=l(function(t){Bt=t},"setTodayMarker"),Fr=l(function(){return Bt},"getTodayMarker"),Mr=l(function(t){U=t},"setDateFormat"),Lr=l(function(){dt=!0},"enableInclusiveEndDates"),Wr=l(function(){return dt},"endDatesAreInclusive"),Vr=l(function(){Gt=!0},"enableTopAxis"),Or=l(function(){return Gt},"topAxisEnabled"),Nr=l(function(t){Ht=t},"setDisplayMode"),Pr=l(function(){return Ht},"getDisplayMode"),zr=l(function(){return U},"getDateFormat"),Rr=l(function(t){ot=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),Yr=l(function(){return ot},"getIncludes"),Br=l(function(t){ut=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),qr=l(function(){return ut},"getExcludes"),jr=l(function(){return qt},"getLinks"),Hr=l(function(t){lt=t,jt.push(t)},"addSection"),Xr=l(function(){return jt},"getSections"),Gr=l(function(){let t=le();const e=10;let r=0;for(;!t&&r<e;)t=le(),r++;return Tt=V,Tt},"getTasks"),we=l(function(t,e,r,i){const n=t.format(e.trim()),h=t.format("YYYY-MM-DD");return i.includes(n)||i.includes(h)?!1:r.includes("weekends")&&(t.isoWeekday()===ce[wt]||t.isoWeekday()===ce[wt]+1)||r.includes(t.format("dddd").toLowerCase())?!0:r.includes(n)||r.includes(h)},"isInvalidDate"),Ur=l(function(t){Ut=t},"setWeekday"),Kr=l(function(){return Ut},"getWeekday"),Zr=l(function(t){wt=t},"setWeekend"),_e=l(function(t,e,r,i){if(!r.length||t.manualEndTime)return;let n;t.startTime instanceof Date?n=z(t.startTime):n=z(t.startTime,e,!0),n=n.add(1,"d");let h;t.endTime instanceof Date?h=z(t.endTime):h=z(t.endTime,e,!0);const[d,S]=Jr(n,h,e,r,i);t.endTime=d.toDate(),t.renderEndTime=S},"checkTaskDates"),Jr=l(function(t,e,r,i,n){let h=!1,d=null;for(;t<=e;)h||(d=e.toDate()),h=we(t,r,i,n),h&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,d]},"fixTaskDates"),Pt=l(function(t,e,r){if(r=r.trim(),(e.trim()==="x"||e.trim()==="X")&&/^\d+$/.test(r))return new Date(Number(r));const n=/^after\s+(?<ids>[\d\w- ]+)/.exec(r);if(n!==null){let d=null;for(const A of n.groups.ids.split(" ")){let C=it(A);C!==void 0&&(!d||C.endTime>d.endTime)&&(d=C)}if(d)return d.endTime;const S=new Date;return S.setHours(0,0,0,0),S}let h=z(r,e.trim(),!0);if(h.isValid())return h.toDate();{bt.debug("Invalid date:"+r),bt.debug("With date format:"+e.trim());const d=new Date(r);if(d===void 0||isNaN(d.getTime())||d.getFullYear()<-1e4||d.getFullYear()>1e4)throw new Error("Invalid date:"+r);return d}},"getStartDate"),Ce=l(function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),De=l(function(t,e,r,i=!1){r=r.trim();const h=/^until\s+(?<ids>[\d\w- ]+)/.exec(r);if(h!==null){let _=null;for(const x of h.groups.ids.split(" ")){let p=it(x);p!==void 0&&(!_||p.startTime<_.startTime)&&(_=p)}if(_)return _.startTime;const M=new Date;return M.setHours(0,0,0,0),M}let d=z(r,e.trim(),!0);if(d.isValid())return i&&(d=d.add(1,"d")),d.toDate();let S=z(t);const[A,C]=Ce(r);if(!Number.isNaN(A)){const _=S.add(A,C);_.isValid()&&(S=_)}return S.toDate()},"getEndDate"),pt=0,ct=l(function(t){return t===void 0?(pt=pt+1,"task"+pt):t},"parseId"),Qr=l(function(t,e){let r;e.substr(0,1)===":"?r=e.substr(1,e.length):r=e;const i=r.split(","),n={};Kt(i,n,Te);for(let d=0;d<i.length;d++)i[d]=i[d].trim();let h="";switch(i.length){case 1:n.id=ct(),n.startTime=t.endTime,h=i[0];break;case 2:n.id=ct(),n.startTime=Pt(void 0,U,i[0]),h=i[1];break;case 3:n.id=ct(i[0]),n.startTime=Pt(void 0,U,i[1]),h=i[2];break}return h&&(n.endTime=De(n.startTime,U,h,dt),n.manualEndTime=z(h,"YYYY-MM-DD",!0).isValid(),_e(n,U,ut,ot)),n},"compileData"),$r=l(function(t,e){let r;e.substr(0,1)===":"?r=e.substr(1,e.length):r=e;const i=r.split(","),n={};Kt(i,n,Te);for(let h=0;h<i.length;h++)i[h]=i[h].trim();switch(i.length){case 1:n.id=ct(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:i[0]};break;case 2:n.id=ct(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=ct(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]};break}return n},"parseData"),zt,vt,V=[],Ee={},ti=l(function(t,e){const r={section:lt,type:lt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=$r(vt,e);r.raw.startTime=i.startTime,r.raw.endTime=i.endTime,r.id=i.id,r.prevTaskId=vt,r.active=i.active,r.done=i.done,r.crit=i.crit,r.milestone=i.milestone,r.vert=i.vert,r.order=Nt,Nt++;const n=V.push(r);vt=r.id,Ee[r.id]=n-1},"addTask"),it=l(function(t){const e=Ee[t];return V[e]},"findTaskById"),ei=l(function(t,e){const r={section:lt,type:lt,description:t,task:t,classes:[]},i=Qr(zt,e);r.startTime=i.startTime,r.endTime=i.endTime,r.id=i.id,r.active=i.active,r.done=i.done,r.crit=i.crit,r.milestone=i.milestone,r.vert=i.vert,zt=r,Tt.push(r)},"addTaskOrg"),le=l(function(){const t=l(function(r){const i=V[r];let n="";switch(V[r].raw.startTime.type){case"prevTaskEnd":{const h=it(i.prevTaskId);i.startTime=h.endTime;break}case"getStartDate":n=Pt(void 0,U,V[r].raw.startTime.startData),n&&(V[r].startTime=n);break}return V[r].startTime&&(V[r].endTime=De(V[r].startTime,U,V[r].raw.endTime.data,dt),V[r].endTime&&(V[r].processed=!0,V[r].manualEndTime=z(V[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),_e(V[r],U,ut,ot))),V[r].processed},"compileTask");let e=!0;for(const[r,i]of V.entries())t(r),e=e&&i.processed;return e},"compileTasks"),ri=l(function(t,e){let r=e;at().securityLevel!=="loose"&&(r=Re.sanitizeUrl(e)),t.split(",").forEach(function(i){it(i)!==void 0&&(Ie(i,()=>{window.open(r,"_self")}),qt.set(i,r))}),Se(t,"clickable")},"setLink"),Se=l(function(t,e){t.split(",").forEach(function(r){let i=it(r);i!==void 0&&i.classes.push(e)})},"setClass"),ii=l(function(t,e,r){if(at().securityLevel!=="loose"||e===void 0)return;let i=[];if(typeof r=="string"){i=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<i.length;h++){let d=i[h].trim();d.startsWith('"')&&d.endsWith('"')&&(d=d.substr(1,d.length-2)),i[h]=d}}i.length===0&&i.push(t),it(t)!==void 0&&Ie(t,()=>{Be.runFunc(e,...i)})},"setClickFun"),Ie=l(function(t,e){Xt.push(function(){const r=document.querySelector(`[id="${t}"]`);r!==null&&r.addEventListener("click",function(){e()})},function(){const r=document.querySelector(`[id="${t}-text"]`);r!==null&&r.addEventListener("click",function(){e()})})},"pushFun"),ni=l(function(t,e,r){t.split(",").forEach(function(i){ii(i,e,r)}),Se(t,"clickable")},"setClickEvent"),ai=l(function(t){Xt.forEach(function(e){e(t)})},"bindFunctions"),si={getConfig:l(()=>at().gantt,"getConfig"),clear:Cr,setDateFormat:Mr,getDateFormat:zr,enableInclusiveEndDates:Lr,endDatesAreInclusive:Wr,enableTopAxis:Vr,topAxisEnabled:Or,setAxisFormat:Dr,getAxisFormat:Er,setTickInterval:Sr,getTickInterval:Ir,setTodayMarker:Ar,getTodayMarker:Fr,setAccTitle:Ne,getAccTitle:Oe,setDiagramTitle:Ve,getDiagramTitle:We,setDisplayMode:Nr,getDisplayMode:Pr,setAccDescription:Le,getAccDescription:Me,addSection:Hr,getSections:Xr,getTasks:Gr,addTask:ti,findTaskById:it,addTaskOrg:ei,setIncludes:Rr,getIncludes:Yr,setExcludes:Br,getExcludes:qr,setClickEvent:ni,setLink:ri,getLinks:jr,bindFunctions:ai,parseDuration:Ce,isInvalidDate:we,setWeekday:Ur,getWeekday:Kr,setWeekend:Zr};function Kt(t,e,r){let i=!0;for(;i;)i=!1,r.forEach(function(n){const h="^\\s*"+n+"\\s*$",d=new RegExp(h);t[0].match(d)&&(e[n]=!0,t.shift(1),i=!0)})}l(Kt,"getTaskTags");var ci=l(function(){bt.debug("Something is calling, setConf, remove the call")},"setConf"),oe={monday:er,tuesday:tr,wednesday:$e,thursday:Qe,friday:Je,saturday:Ze,sunday:Ke},li=l((t,e)=>{let r=[...t].map(()=>-1/0),i=[...t].sort((h,d)=>h.startTime-d.startTime||h.order-d.order),n=0;for(const h of i)for(let d=0;d<r.length;d++)if(h.startTime>=r[d]){r[d]=h.endTime,h.order=d+e,d>n&&(n=d);break}return n},"getMaxIntersections"),$,oi=l(function(t,e,r,i){const n=at().gantt,h=at().securityLevel;let d;h==="sandbox"&&(d=kt("#i"+e));const S=h==="sandbox"?kt(d.nodes()[0].contentDocument.body):kt("body"),A=h==="sandbox"?d.nodes()[0].contentDocument:document,C=A.getElementById(e);$=C.parentElement.offsetWidth,$===void 0&&($=1200),n.useWidth!==void 0&&($=n.useWidth);const _=i.db.getTasks();let M=[];for(const g of _)M.push(g.type);M=P(M);const x={};let p=2*n.topPadding;if(i.db.getDisplayMode()==="compact"||n.displayMode==="compact"){const g={};for(const v of _)g[v.section]===void 0?g[v.section]=[v]:g[v.section].push(v);let T=0;for(const v of Object.keys(g)){const b=li(g[v],T)+1;T+=b,p+=b*(n.barHeight+n.barGap),x[v]=b}}else{p+=_.length*(n.barHeight+n.barGap);for(const g of M)x[g]=_.filter(T=>T.type===g).length}C.setAttribute("viewBox","0 0 "+$+" "+p);const O=S.select(`[id="${e}"]`),D=Xe().domain([Ge(_,function(g){return g.startTime}),Ue(_,function(g){return g.endTime})]).rangeRound([0,$-n.leftPadding-n.rightPadding]);function et(g,T){const v=g.startTime,b=T.startTime;let y=0;return v>b?y=1:v<b&&(y=-1),y}l(et,"taskCompare"),_.sort(et),Z(_,$,p),Pe(O,p,$,n.useMaxWidth),O.append("text").text(i.db.getDiagramTitle()).attr("x",$/2).attr("y",n.titleTopMargin).attr("class","titleText");function Z(g,T,v){const b=n.barHeight,y=b+n.barGap,w=n.topPadding,o=n.leftPadding,f=rr().domain([0,M.length]).range(["#00B9FA","#F95002"]).interpolate(vr);X(y,w,o,T,v,g,i.db.getExcludes(),i.db.getIncludes()),G(o,w,T,v),H(g,y,w,o,b,f,T),j(y,w),B(o,w,T,v)}l(Z,"makeGantt");function H(g,T,v,b,y,w,o){g.sort((c,a)=>c.vert===a.vert?0:c.vert?1:-1);const k=[...new Set(g.map(c=>c.order))].map(c=>g.find(a=>a.order===c));O.append("g").selectAll("rect").data(k).enter().append("rect").attr("x",0).attr("y",function(c,a){return a=c.order,a*T+v-2}).attr("width",function(){return o-n.rightPadding/2}).attr("height",T).attr("class",function(c){for(const[a,F]of M.entries())if(c.type===F)return"section section"+a%n.numberSectionStyles;return"section section0"}).enter();const u=O.append("g").selectAll("rect").data(g).enter(),m=i.db.getLinks();if(u.append("rect").attr("id",function(c){return c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?D(c.startTime)+b+.5*(D(c.endTime)-D(c.startTime))-.5*y:D(c.startTime)+b}).attr("y",function(c,a){return a=c.order,c.vert?n.gridLineStartPadding:a*T+v}).attr("width",function(c){return c.milestone?y:c.vert?.08*y:D(c.renderEndTime||c.endTime)-D(c.startTime)}).attr("height",function(c){return c.vert?_.length*(n.barHeight+n.barGap)+n.barHeight*2:y}).attr("transform-origin",function(c,a){return a=c.order,(D(c.startTime)+b+.5*(D(c.endTime)-D(c.startTime))).toString()+"px "+(a*T+v+.5*y).toString()+"px"}).attr("class",function(c){const a="task";let F="";c.classes.length>0&&(F=c.classes.join(" "));let E=0;for(const[N,L]of M.entries())c.type===L&&(E=N%n.numberSectionStyles);let I="";return c.active?c.crit?I+=" activeCrit":I=" active":c.done?c.crit?I=" doneCrit":I=" done":c.crit&&(I+=" crit"),I.length===0&&(I=" task"),c.milestone&&(I=" milestone "+I),c.vert&&(I=" vert "+I),I+=E,I+=" "+F,a+I}),u.append("text").attr("id",function(c){return c.id+"-text"}).text(function(c){return c.task}).attr("font-size",n.fontSize).attr("x",function(c){let a=D(c.startTime),F=D(c.renderEndTime||c.endTime);if(c.milestone&&(a+=.5*(D(c.endTime)-D(c.startTime))-.5*y,F=a+y),c.vert)return D(c.startTime)+b;const E=this.getBBox().width;return E>F-a?F+E+1.5*n.leftPadding>o?a+b-5:F+b+5:(F-a)/2+a+b}).attr("y",function(c,a){return c.vert?n.gridLineStartPadding+_.length*(n.barHeight+n.barGap)+60:(a=c.order,a*T+n.barHeight/2+(n.fontSize/2-2)+v)}).attr("text-height",y).attr("class",function(c){const a=D(c.startTime);let F=D(c.endTime);c.milestone&&(F=a+y);const E=this.getBBox().width;let I="";c.classes.length>0&&(I=c.classes.join(" "));let N=0;for(const[W,J]of M.entries())c.type===J&&(N=W%n.numberSectionStyles);let L="";return c.active&&(c.crit?L="activeCritText"+N:L="activeText"+N),c.done?c.crit?L=L+" doneCritText"+N:L=L+" doneText"+N:c.crit&&(L=L+" critText"+N),c.milestone&&(L+=" milestoneText"),c.vert&&(L+=" vertText"),E>F-a?F+E+1.5*n.leftPadding>o?I+" taskTextOutsideLeft taskTextOutside"+N+" "+L:I+" taskTextOutsideRight taskTextOutside"+N+" "+L+" width-"+E:I+" taskText taskText"+N+" "+L+" width-"+E}),at().securityLevel==="sandbox"){let c;c=kt("#i"+e);const a=c.nodes()[0].contentDocument;u.filter(function(F){return m.has(F.id)}).each(function(F){var E=a.querySelector("#"+F.id),I=a.querySelector("#"+F.id+"-text");const N=E.parentNode;var L=a.createElement("a");L.setAttribute("xlink:href",m.get(F.id)),L.setAttribute("target","_top"),N.appendChild(L),L.appendChild(E),L.appendChild(I)})}}l(H,"drawRects");function X(g,T,v,b,y,w,o,f){if(o.length===0&&f.length===0)return;let k,u;for(const{startTime:E,endTime:I}of w)(k===void 0||E<k)&&(k=E),(u===void 0||I>u)&&(u=I);if(!k||!u)return;if(z(u).diff(z(k),"year")>5){bt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const m=i.db.getDateFormat(),s=[];let c=null,a=z(k);for(;a.valueOf()<=u;)i.db.isInvalidDate(a,m,o,f)?c?c.end=a:c={start:a,end:a}:c&&(s.push(c),c=null),a=a.add(1,"d");O.append("g").selectAll("rect").data(s).enter().append("rect").attr("id",E=>"exclude-"+E.start.format("YYYY-MM-DD")).attr("x",E=>D(E.start.startOf("day"))+v).attr("y",n.gridLineStartPadding).attr("width",E=>D(E.end.endOf("day"))-D(E.start.startOf("day"))).attr("height",y-T-n.gridLineStartPadding).attr("transform-origin",function(E,I){return(D(E.start)+v+.5*(D(E.end)-D(E.start))).toString()+"px "+(I*g+.5*y).toString()+"px"}).attr("class","exclude-range")}l(X,"drawExcludeDays");function G(g,T,v,b){const y=i.db.getDateFormat(),w=i.db.getAxisFormat();let o;w?o=w:y==="D"?o="%d":o=n.axisFormat??"%Y-%m-%d";let f=fr(D).tickSize(-b+T+n.gridLineStartPadding).tickFormat(Qt(o));const u=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||n.tickInterval);if(u!==null){const m=u[1],s=u[2],c=i.db.getWeekday()||n.weekday;switch(s){case"millisecond":f.ticks(ne.every(m));break;case"second":f.ticks(ie.every(m));break;case"minute":f.ticks(re.every(m));break;case"hour":f.ticks(ee.every(m));break;case"day":f.ticks(te.every(m));break;case"week":f.ticks(oe[c].every(m));break;case"month":f.ticks($t.every(m));break}}if(O.append("g").attr("class","grid").attr("transform","translate("+g+", "+(b-50)+")").call(f).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||n.topAxis){let m=dr(D).tickSize(-b+T+n.gridLineStartPadding).tickFormat(Qt(o));if(u!==null){const s=u[1],c=u[2],a=i.db.getWeekday()||n.weekday;switch(c){case"millisecond":m.ticks(ne.every(s));break;case"second":m.ticks(ie.every(s));break;case"minute":m.ticks(re.every(s));break;case"hour":m.ticks(ee.every(s));break;case"day":m.ticks(te.every(s));break;case"week":m.ticks(oe[a].every(s));break;case"month":m.ticks($t.every(s));break}}O.append("g").attr("class","grid").attr("transform","translate("+g+", "+T+")").call(m).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(G,"makeGrid");function j(g,T){let v=0;const b=Object.keys(x).map(y=>[y,x[y]]);O.append("g").selectAll("text").data(b).enter().append(function(y){const w=y[0].split(ze.lineBreakRegex),o=-(w.length-1)/2,f=A.createElementNS("http://www.w3.org/2000/svg","text");f.setAttribute("dy",o+"em");for(const[k,u]of w.entries()){const m=A.createElementNS("http://www.w3.org/2000/svg","tspan");m.setAttribute("alignment-baseline","central"),m.setAttribute("x","10"),k>0&&m.setAttribute("dy","1em"),m.textContent=u,f.appendChild(m)}return f}).attr("x",10).attr("y",function(y,w){if(w>0)for(let o=0;o<w;o++)return v+=b[w-1][1],y[1]*g/2+v*g+T;else return y[1]*g/2+T}).attr("font-size",n.sectionFontSize).attr("class",function(y){for(const[w,o]of M.entries())if(y[0]===o)return"sectionTitle sectionTitle"+w%n.numberSectionStyles;return"sectionTitle"})}l(j,"vertLabels");function B(g,T,v,b){const y=i.db.getTodayMarker();if(y==="off")return;const w=O.append("g").attr("class","today"),o=new Date,f=w.append("line");f.attr("x1",D(o)+g).attr("x2",D(o)+g).attr("y1",n.titleTopMargin).attr("y2",b-n.titleTopMargin).attr("class","today"),y!==""&&f.attr("style",y.replace(/,/g,";"))}l(B,"drawToday");function P(g){const T={},v=[];for(let b=0,y=g.length;b<y;++b)Object.prototype.hasOwnProperty.call(T,g[b])||(T[g[b]]=!0,v.push(g[b]));return v}l(P,"checkUnique")},"draw"),ui={setConf:ci,draw:oi},di=l(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),fi=di,Ci={parser:_r,db:si,renderer:ui,styles:fi};export{Ci as diagram};
