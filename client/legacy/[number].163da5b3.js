import{_ as n,a as t,b as e,c,i as r,s as a,d as o,S as i,z as s,o as u,e as f,t as l,I as h,j as d,p,f as v,g as m,h as g,k as b,l as E,m as $,q as D,r as w,u as y,v as R,w as _,x as T,y as x,J as S,H as L,A,n as O,B as H,C as k,D as C,E as I,F as M,G as P}from"./client.9b8802b6.js";import{c as N,_ as B,h as F,L as U}from"./createOctokit.90a0ee0b.js";function V(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,a=t(n);if(c){var o=t(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return e(this,r)}}function j(n,t,e){var c=n.slice();return c[9]=t[e],c}function G(n){var t,e,c,r,a,o=n[4].title+"",i=("closed"===n[4].state?s.i18n.incidentFixed:s.i18n.incidentOngoing)+"";return{c:function(){t=l(o),e=u(),c=f("span"),r=l(i),this.h()},l:function(n){t=g(n,o),e=p(n),c=v(n,"SPAN",{class:!0});var a=m(c);r=g(a,i),a.forEach(d),this.h()},h:function(){b(c,"class",a=L("tag ".concat(n[4].state))+" svelte-4o16l6")},m:function(n,a){E(n,t,a),E(n,e,a),E(n,c,a),$(c,r)},p:function(n,e){16&e&&o!==(o=n[4].title+"")&&A(t,o),16&e&&i!==(i=("closed"===n[4].state?s.i18n.incidentFixed:s.i18n.incidentOngoing)+"")&&A(r,i),16&e&&a!==(a=L("tag ".concat(n[4].state))+" svelte-4o16l6")&&b(c,"class",a)},d:function(n){n&&d(t),n&&d(e),n&&d(c)}}}function q(n){var t,e=s.i18n.incidentDetails+"";return{c:function(){t=l(e)},l:function(n){t=g(n,e)},m:function(n,e){E(n,t,e)},p:O,d:function(n){n&&d(t)}}}function z(n){for(var t,e,c,r,a,o,i,h,D,w,y,R,_,T,x,S,L,C,I,M=s.i18n.incidentOpenedAt+"",P=new Date(n[4].created_at).toLocaleString()+"",N=s.i18n.incidentSubscribe+"",B=s.i18n.incidentViewOnGitHub+"",F=n[4].closed_at&&K(n),U=n[3],V=[],G=0;G<U.length;G+=1)V[G]=Q(j(n,U,G));return{c:function(){t=f("div"),e=f("dl"),c=f("dt"),r=l(M),a=f("dd"),o=l(P),F&&F.c(),i=u(),h=f("div"),D=f("p"),w=f("a"),y=l(N),_=u(),T=f("p"),x=f("a"),S=l(B),C=u();for(var n=0;n<V.length;n+=1)V[n].c();I=H(),this.h()},l:function(n){t=v(n,"DIV",{class:!0});var s=m(t);e=v(s,"DL",{});var u=m(e);c=v(u,"DT",{});var f=m(c);r=g(f,M),f.forEach(d),a=v(u,"DD",{});var l=m(a);o=g(l,P),l.forEach(d),F&&F.l(u),u.forEach(d),i=p(s),h=v(s,"DIV",{class:!0});var b=m(h);D=v(b,"P",{class:!0});var E=m(D);w=v(E,"A",{href:!0});var $=m(w);y=g($,N),$.forEach(d),E.forEach(d),_=p(b),T=v(b,"P",{class:!0});var R=m(T);x=v(R,"A",{href:!0});var L=m(x);S=g(L,B),L.forEach(d),R.forEach(d),b.forEach(d),s.forEach(d),C=p(n);for(var A=0;A<V.length;A+=1)V[A].l(n);I=H(),this.h()},h:function(){b(w,"href",R="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0])),b(D,"class","svelte-4o16l6"),b(x,"href",L="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0])),b(T,"class","svelte-4o16l6"),b(h,"class","r svelte-4o16l6"),b(t,"class","f")},m:function(n,s){E(n,t,s),$(t,e),$(e,c),$(c,r),$(e,a),$(a,o),F&&F.m(e,null),$(t,i),$(t,h),$(h,D),$(D,w),$(w,y),$(h,_),$(h,T),$(T,x),$(x,S),E(n,C,s);for(var u=0;u<V.length;u+=1)V[u].m(n,s);E(n,I,s)},p:function(n,t){if(16&t&&P!==(P=new Date(n[4].created_at).toLocaleString()+"")&&A(o,P),n[4].closed_at?F?F.p(n,t):((F=K(n)).c(),F.m(e,null)):F&&(F.d(1),F=null),1&t&&R!==(R="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0]))&&b(w,"href",R),1&t&&L!==(L="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0]))&&b(x,"href",L),40&t){var c;for(U=n[3],c=0;c<U.length;c+=1){var r=j(n,U,c);V[c]?V[c].p(r,t):(V[c]=Q(r),V[c].c(),V[c].m(I.parentNode,I))}for(;c<V.length;c+=1)V[c].d(1);V.length=U.length}},i:O,o:O,d:function(n){n&&d(t),F&&F.d(),n&&d(C),k(V,n),n&&d(I)}}}function J(n){var t,e;return t=new U({}),{c:function(){C(t.$$.fragment)},l:function(n){I(t.$$.fragment,n)},m:function(n,c){M(t,n,c),e=!0},p:O,i:function(n){e||(_(t.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),e=!1},d:function(n){P(t,n)}}}function K(n){var t,e,c,r,a=s.i18n.incidentClosedAt+"",o=new Date(n[4].closed_at).toLocaleString()+"";return{c:function(){t=f("dt"),e=l(a),c=f("dd"),r=l(o)},l:function(n){t=v(n,"DT",{});var i=m(t);e=g(i,a),i.forEach(d),c=v(n,"DD",{});var s=m(c);r=g(s,o),s.forEach(d)},m:function(n,a){E(n,t,a),$(t,e),E(n,c,a),$(c,r)},p:function(n,t){16&t&&o!==(o=new Date(n[4].closed_at).toLocaleString()+"")&&A(r,o)},d:function(n){n&&d(t),n&&d(c)}}}function Q(n){var t,e,c,r,a,o=n[5](n[9].body)+"",i=s.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(n[9].html_url,">").concat(new Date(n[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(n[9].user.html_url,">@").concat(n[9].user.login,"</a>"))+"";return{c:function(){t=f("article"),e=f("p"),c=u(),r=f("div"),a=u(),this.h()},l:function(n){t=v(n,"ARTICLE",{});var o=m(t);e=v(o,"P",{class:!0}),m(e).forEach(d),c=p(o),r=v(o,"DIV",{}),m(r).forEach(d),a=p(o),o.forEach(d),this.h()},h:function(){b(e,"class","svelte-4o16l6")},m:function(n,s){E(n,t,s),$(t,e),e.innerHTML=o,$(t,c),$(t,r),r.innerHTML=i,$(t,a)},p:function(n,t){8&t&&o!==(o=n[5](n[9].body)+"")&&(e.innerHTML=o),8&t&&i!==(i=s.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(n[9].html_url,">").concat(new Date(n[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(n[9].user.html_url,">@").concat(n[9].user.login,"</a>"))+"")&&(r.innerHTML=i)},d:function(n){n&&d(t)}}}function W(n){var t,e,c,r,a,o,i,T,x,S,L,A,O=s.i18n.incidentBack+"";function H(n,t){return n[2]?q:G}document.title=t=s.i18n.incidentTitle.replace("$NUMBER",n[0]);var k=H(n),C=k(n),I=[J,z],M=[];function P(n,t){return n[1]?0:1}return o=P(n),i=M[o]=I[o](n),{c:function(){e=u(),c=f("h2"),C.c(),r=u(),a=f("section"),i.c(),T=u(),x=f("footer"),S=f("a"),L=l(O),this.h()},l:function(n){h('[data-svelte="svelte-1txp228"]',document.head).forEach(d),e=p(n),c=v(n,"H2",{class:!0});var t=m(c);C.l(t),t.forEach(d),r=p(n),a=v(n,"SECTION",{});var o=m(a);i.l(o),o.forEach(d),T=p(n),x=v(n,"FOOTER",{class:!0});var s=m(x);S=v(s,"A",{href:!0});var u=m(S);L=g(u,O),u.forEach(d),s.forEach(d),this.h()},h:function(){b(c,"class","svelte-4o16l6"),b(S,"href","../"),b(x,"class","svelte-4o16l6")},m:function(n,t){E(n,e,t),E(n,c,t),C.m(c,null),E(n,r,t),E(n,a,t),M[o].m(a,null),E(n,T,t),E(n,x,t),$(x,S),$(S,L),A=!0},p:function(n,e){var r=D(e,1)[0];(!A||1&r)&&t!==(t=s.i18n.incidentTitle.replace("$NUMBER",n[0]))&&(document.title=t),k===(k=H(n))&&C?C.p(n,r):(C.d(1),(C=k(n))&&(C.c(),C.m(c,null)));var u=o;(o=P(n))===u?M[o].p(n,r):(w(),y(M[u],1,1,(function(){M[u]=null})),R(),(i=M[o])?i.p(n,r):(i=M[o]=I[o](n)).c(),_(i,1),i.m(a,null))},i:function(n){A||(_(i),A=!0)},o:function(n){y(i),A=!1},d:function(n){n&&d(e),n&&d(c),C.d(),n&&d(r),n&&d(a),M[o].d(),n&&d(T),n&&d(x)}}}function X(n,t,e){var c=t.number,r=S,a=!0,o=!0,i=N(),u=s.owner,f=s.repo,l=[],h={};return T(B(x.mark((function n(){return x.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=e,n.next=4,i.issues.get({owner:u,repo:f,issue_number:c,sort:"created",direction:"desc"});case 4:n.t1=h=n.sent.data,(0,n.t0)(4,n.t1),n.next=11;break;case 8:n.prev=8,n.t2=n.catch(0),F(n.t2);case 11:return e(2,o=!1),n.prev=12,n.t3=e,n.next=16,i.issues.listComments({owner:u,repo:f,issue_number:c});case 16:n.t4=l=n.sent.data.reverse(),(0,n.t3)(3,n.t4),n.next=23;break;case 20:n.prev=20,n.t5=n.catch(12),F(n.t5);case 23:e(1,a=!1);case 24:case"end":return n.stop()}}),n,null,[[0,8],[12,20]])})))),n.$$set=function(n){"number"in n&&e(0,c=n.number)},[c,a,o,l,h,r]}var Y=function(t){n(s,i);var e=V(s);function s(n){var t;return c(this,s),t=e.call(this),r(o(t),n,X,W,a,{number:0}),t}return s}();function Z(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,a=t(n);if(c){var o=t(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return e(this,r)}}function nn(n){var t,e;return t=new Y({props:{number:n[0]}}),{c:function(){C(t.$$.fragment)},l:function(n){I(t.$$.fragment,n)},m:function(n,c){M(t,n,c),e=!0},p:function(n,e){var c={};1&D(e,1)[0]&&(c.number=n[0]),t.$set(c)},i:function(n){e||(_(t.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),e=!1},d:function(n){P(t,n)}}}function tn(n){return en.apply(this,arguments)}function en(){return(en=B(x.mark((function n(t){var e;return x.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.params.number,n.abrupt("return",{number:e});case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function cn(n,t,e){var c=t.number;return n.$$set=function(n){"number"in n&&e(0,c=n.number)},[c]}var rn=function(t){n(s,i);var e=Z(s);function s(n){var t;return c(this,s),t=e.call(this),r(o(t),n,cn,nn,a,{number:0}),t}return s}();export default rn;export{tn as preload};
