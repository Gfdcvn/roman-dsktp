const st="5.19.1",Qn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Qn);let he=!1,er=!1;function nr(){he=!0}nr();const it=1,at=2,ft=4,ot=8,ct=16,rr=1,tr=2,_n=4,ur=8,lr=16,vn=1,sr=2,x=Symbol(),ir=["touchstart","touchmove"];function ar(e){return ir.includes(e)}const qe=!1;var dn=Array.isArray,fr=Array.prototype.indexOf,or=Array.from,pn=Object.defineProperty,U=Object.getOwnPropertyDescriptor,cr=Object.getOwnPropertyDescriptors,_r=Object.prototype,vr=Array.prototype,hn=Object.getPrototypeOf;function oe(e){return typeof e=="function"}const ee=()=>{};function dr(e){return e()}function Me(e){for(var n=0;n<e.length;n++)e[n]()}function _t(e,n,r=!1){return e===void 0?r?n():n:e}const S=2,wn=4,we=8,He=16,R=32,le=64,Ee=128,z=256,xe=512,y=1024,F=2048,G=4096,te=8192,se=16384,pr=32768,Pe=65536,bn=1<<17,hr=1<<19,gn=1<<20,M=Symbol("$state"),yn=Symbol("legacy props"),vt=Symbol("");function mn(e){return e===this.v}function En(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Ye(e){return!En(e,this.v)}function wr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function br(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function yr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function dt(e){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function mr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Er(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function xr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Sr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function N(e,n){var r={f:0,v:e,reactions:null,equals:mn,rv:0,wv:0};return r}function pt(e){return xn(N(e))}function $e(e,n=!1){var t;const r=N(e);return n||(r.equals=Ye),he&&d!==null&&d.l!==null&&((t=d.l).s??(t.s=[])).push(r),r}function ht(e,n=!1){return xn($e(e,n))}function xn(e){return h!==null&&h.f&S&&(D===null?jr([e]):D.push(e)),e}function wt(e,n){return O(e,H(()=>b(e))),n}function O(e,n){return h!==null&&!B&&Ne()&&h.f&(S|He)&&(D===null||!D.includes(e))&&Sr(),Fe(e,n)}function Fe(e,n){return e.equals(n)||(e.v,e.v=n,e.wv=Vn(),Tn(e,F),Ne()&&p!==null&&p.f&y&&!(p.f&(R|le))&&(L===null?kr([e]):L.push(e))),n}function Tn(e,n){var r=e.reactions;if(r!==null)for(var t=Ne(),u=r.length,l=0;l<u;l++){var i=r[l],_=i.f;_&F||!t&&i===p||(C(i,n),_&(y|z)&&(_&S?Tn(i,G):Ie(i)))}}function Q(e,n=null,r){if(typeof e!="object"||e===null||M in e)return e;const t=hn(e);if(t!==_r&&t!==vr)return e;var u=new Map,l=dn(e),i=N(0);l&&u.set("length",N(e.length));var _;return new Proxy(e,{defineProperty(f,s,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Er();var o=u.get(s);return o===void 0?(o=N(c.value),u.set(s,o)):O(o,Q(c.value,_)),!0},deleteProperty(f,s){var c=u.get(s);if(c===void 0)s in f&&u.set(s,N(x));else{if(l&&typeof s=="string"){var o=u.get("length"),a=Number(s);Number.isInteger(a)&&a<o.v&&O(o,a)}O(c,x),en(i)}return!0},get(f,s,c){var w;if(s===M)return e;var o=u.get(s),a=s in f;if(o===void 0&&(!a||(w=U(f,s))!=null&&w.writable)&&(o=N(Q(a?f[s]:x,_)),u.set(s,o)),o!==void 0){var v=b(o);return v===x?void 0:v}return Reflect.get(f,s,c)},getOwnPropertyDescriptor(f,s){var c=Reflect.getOwnPropertyDescriptor(f,s);if(c&&"value"in c){var o=u.get(s);o&&(c.value=b(o))}else if(c===void 0){var a=u.get(s),v=a==null?void 0:a.v;if(a!==void 0&&v!==x)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return c},has(f,s){var v;if(s===M)return!0;var c=u.get(s),o=c!==void 0&&c.v!==x||Reflect.has(f,s);if(c!==void 0||p!==null&&(!o||(v=U(f,s))!=null&&v.writable)){c===void 0&&(c=N(o?Q(f[s],_):x),u.set(s,c));var a=b(c);if(a===x)return!1}return o},set(f,s,c,o){var P;var a=u.get(s),v=s in f;if(l&&s==="length")for(var w=c;w<a.v;w+=1){var m=u.get(w+"");m!==void 0?O(m,x):w in f&&(m=N(x),u.set(w+"",m))}a===void 0?(!v||(P=U(f,s))!=null&&P.writable)&&(a=N(void 0),O(a,Q(c,_)),u.set(s,a)):(v=a.v!==x,O(a,Q(c,_)));var E=Reflect.getOwnPropertyDescriptor(f,s);if(E!=null&&E.set&&E.set.call(o,c),!v){if(l&&typeof s=="string"){var Y=u.get("length"),j=Number(s);Number.isInteger(j)&&j>=Y.v&&O(Y,j+1)}en(i)}return!0},ownKeys(f){b(i);var s=Reflect.ownKeys(f).filter(a=>{var v=u.get(a);return v===void 0||v.v!==x});for(var[c,o]of u)o.v!==x&&!(c in f)&&s.push(c);return s},setPrototypeOf(){xr()}})}function en(e,n=1){O(e,e.v+n)}function nn(e){return e!==null&&typeof e=="object"&&M in e?e[M]:e}function bt(e,n){return Object.is(nn(e),nn(n))}var rn,Sn,An;function Ar(){if(rn===void 0){rn=window;var e=Element.prototype,n=Node.prototype;Sn=U(n,"firstChild").get,An=U(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Ke(e=""){return document.createTextNode(e)}function q(e){return Sn.call(e)}function We(e){return An.call(e)}function gt(e,n){return q(e)}function yt(e,n){{var r=q(e);return r instanceof Comment&&r.data===""?We(r):r}}function mt(e,n=1,r=!1){let t=e;for(;n--;)t=We(t);return t}function Et(e){e.textContent=""}function _e(e){var n=S|F;p===null?n|=z:p.f|=gn;var r=h!==null&&h.f&S?h:null;const t={children:null,ctx:d,deps:null,equals:mn,f:n,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??p};return r!==null&&(r.children??(r.children=[])).push(t),t}function Or(e){const n=_e(e);return n.equals=Ye,n}function On(e){var n=e.children;if(n!==null){e.children=null;for(var r=0;r<n.length;r+=1){var t=n[r];t.f&S?ze(t):W(t)}}}function Pr(e){for(var n=e.parent;n!==null;){if(!(n.f&S))return n;n=n.parent}return null}function Pn(e){var n,r=p;I(Pr(e));try{On(e),n=Yn(e)}finally{I(r)}return n}function Nn(e){var n=Pn(e),r=(K||e.f&z)&&e.deps!==null?G:y;C(e,r),e.equals(n)||(e.v=n,e.wv=Vn())}function ze(e){On(e),pe(e,0),C(e,se),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Cn(e){p===null&&h===null&&gr(),h!==null&&h.f&z&&br(),Xe&&wr()}function Nr(e,n){var r=n.last;r===null?n.last=n.first=e:(r.next=e,e.prev=r,n.last=e)}function ie(e,n,r,t=!0){var u=(e&le)!==0,l=p,i={ctx:d,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|F,first:null,fn:n,last:null,next:null,parent:u?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=ne;try{ln(!0),De(i),i.f|=pr}catch(c){throw W(i),c}finally{ln(_)}}else n!==null&&Ie(i);var f=r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(gn|Ee))===0;if(!f&&!u&&t&&(l!==null&&Nr(i,l),h!==null&&h.f&S)){var s=h;(s.children??(s.children=[])).push(i)}return i}function Dn(e){const n=ie(we,null,!1);return C(n,y),n.teardown=e,n}function tn(e){Cn();var n=p!==null&&(p.f&R)!==0&&d!==null&&!d.m;if(n){var r=d;(r.e??(r.e=[])).push({fn:e,effect:p,reaction:h})}else{var t=In(e);return t}}function Cr(e){return Cn(),Ge(e)}function Dr(e){const n=ie(le,e,!0);return(r={})=>new Promise(t=>{r.outro?Se(n,()=>{W(n),t(void 0)}):(W(n),t(void 0))})}function In(e){return ie(wn,e,!1)}function xt(e,n){var r=d,t={effect:null,ran:!1};r.l.r1.push(t),t.effect=Ge(()=>{e(),!t.ran&&(t.ran=!0,O(r.l.r2,!0),H(n))})}function Tt(){var e=d;Ge(()=>{if(b(e.l.r2)){for(var n of e.l.r1){var r=n.effect;r.f&y&&C(r,G),ae(r)&&De(r),n.ran=!1}e.l.r2.v=!1}})}function Ge(e){return ie(we,e,!0)}function St(e,n=[],r=_e){const t=n.map(r);return Ze(()=>e(...t.map(b)))}function Ze(e,n=0){return ie(we|He|n,e,!0)}function Te(e,n=!0){return ie(we|R,e,!0,n)}function Rn(e){var n=e.teardown;if(n!==null){const r=Xe,t=h;sn(!0),V(null);try{n.call(null)}finally{sn(r),V(t)}}}function Ln(e){var n=e.deriveds;if(n!==null){e.deriveds=null;for(var r=0;r<n.length;r+=1)ze(n[r])}}function qn(e,n=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var t=r.next;W(r,n),r=t}}function Ir(e){for(var n=e.first;n!==null;){var r=n.next;n.f&R||W(n),n=r}}function W(e,n=!0){var r=!1;if((n||e.f&hr)&&e.nodes_start!==null){for(var t=e.nodes_start,u=e.nodes_end;t!==null;){var l=t===u?null:We(t);t.remove(),t=l}r=!0}qn(e,n&&!r),Ln(e),pe(e,0),C(e,se);var i=e.transitions;if(i!==null)for(const f of i)f.stop();Rn(e);var _=e.parent;_!==null&&_.first!==null&&Mn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Mn(e){var n=e.parent,r=e.prev,t=e.next;r!==null&&(r.next=t),t!==null&&(t.prev=r),n!==null&&(n.first===e&&(n.first=t),n.last===e&&(n.last=r))}function Se(e,n){var r=[];Fn(e,r,!0),Rr(r,()=>{W(e),n&&n()})}function Rr(e,n){var r=e.length;if(r>0){var t=()=>--r||n();for(var u of e)u.out(t)}else n()}function Fn(e,n,r){if(!(e.f&te)){if(e.f^=te,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&n.push(i);for(var t=e.first;t!==null;){var u=t.next,l=(t.f&Pe)!==0||(t.f&R)!==0;Fn(t,n,l?r:!1),t=u}}}function un(e){jn(e,!0)}function jn(e,n){if(e.f&te){e.f^=te,e.f&y||(e.f^=y),ae(e)&&(C(e,F),Ie(e));for(var r=e.first;r!==null;){var t=r.next,u=(r.f&Pe)!==0||(r.f&R)!==0;jn(r,u?n:!1),r=t}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||n)&&l.in()}}let Ae=!1,je=[];function kn(){Ae=!1;const e=je.slice();je=[],Me(e)}function Lr(e){Ae||(Ae=!0,queueMicrotask(kn)),je.push(e)}function qr(){Ae&&kn()}function Mr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Un=0,Fr=1;let ye=!1,me=Un,ve=!1,de=null,ne=!1,Xe=!1;function ln(e){ne=e}function sn(e){Xe=e}let $=[],re=0;let h=null,B=!1;function V(e){h=e}let p=null;function I(e){p=e}let D=null;function jr(e){D=e}let T=null,A=0,L=null;function kr(e){L=e}let Bn=1,Oe=0,K=!1,k=null,d=null;function Vn(){return++Bn}function Ne(){return!he||d!==null&&d.l===null}function ae(e){var s;var n=e.f;if(n&F)return!0;if(n&G){var r=e.deps,t=(n&z)!==0;if(r!==null){var u,l,i=(n&xe)!==0,_=t&&p!==null&&!K,f=r.length;if(i||_){for(u=0;u<f;u++)l=r[u],(i||!((s=l==null?void 0:l.reactions)!=null&&s.includes(e)))&&(l.reactions??(l.reactions=[])).push(e);i&&(e.f^=xe)}for(u=0;u<f;u++)if(l=r[u],ae(l)&&Nn(l),l.wv>e.wv)return!0}(!t||p!==null&&!K)&&C(e,y)}return!1}function Ur(e,n){for(var r=n;r!==null;){if(r.f&Ee)try{r.fn(e);return}catch{r.f^=Ee}r=r.parent}throw ye=!1,e}function Br(e){return(e.f&se)===0&&(e.parent===null||(e.parent.f&Ee)===0)}function Ce(e,n,r,t){if(ye){if(r===null&&(ye=!1),Br(n))throw e;return}r!==null&&(ye=!0);{Ur(e,n);return}}function Hn(e,n,r=0){var t=e.reactions;if(t!==null)for(var u=0;u<t.length;u++){var l=t[u];l.f&S?Hn(l,n,r+1):n===l&&(r===0?C(l,F):l.f&y&&C(l,G),Ie(l))}}function Yn(e){var v;var n=T,r=A,t=L,u=h,l=K,i=D,_=d,f=B,s=e.f;T=null,A=0,L=null,h=s&(R|le)?null:e,K=!ne&&(s&z)!==0,D=null,d=e.ctx,B=!1,Oe++;try{var c=(0,e.fn)(),o=e.deps;if(T!==null){var a;if(pe(e,A),o!==null&&A>0)for(o.length=A+T.length,a=0;a<T.length;a++)o[A+a]=T[a];else e.deps=o=T;if(!K)for(a=A;a<o.length;a++)((v=o[a]).reactions??(v.reactions=[])).push(e)}else o!==null&&A<o.length&&(pe(e,A),o.length=A);if(Ne()&&L!==null&&!(e.f&(S|G|F)))for(a=0;a<L.length;a++)Hn(L[a],e);return u!==null&&Oe++,c}finally{T=n,A=r,L=t,h=u,K=l,D=i,d=_,B=f}}function Vr(e,n){let r=n.reactions;if(r!==null){var t=fr.call(r,e);if(t!==-1){var u=r.length-1;u===0?r=n.reactions=null:(r[t]=r[u],r.pop())}}r===null&&n.f&S&&(T===null||!T.includes(n))&&(C(n,G),n.f&(z|xe)||(n.f^=xe),pe(n,0))}function pe(e,n){var r=e.deps;if(r!==null)for(var t=n;t<r.length;t++)Vr(e,r[t])}function De(e){var n=e.f;if(!(n&se)){C(e,y);var r=p,t=d;p=e;try{n&He?Ir(e):qn(e),Ln(e),Rn(e);var u=Yn(e);e.teardown=typeof u=="function"?u:null,e.wv=Bn;var l=e.deps,i;qe&&er&&e.f&F}catch(_){Ce(_,e,r,t||e.ctx)}finally{p=r}}}function $n(){if(re>1e3){re=0;try{yr()}catch(e){if(de!==null)Ce(e,de,null);else throw e}}re++}function Kn(e){var n=e.length;if(n!==0){$n();var r=ne;ne=!0;try{for(var t=0;t<n;t++){var u=e[t];u.f&y||(u.f^=y);var l=[];Wn(u,l),Hr(l)}}finally{ne=r}}}function Hr(e){var n=e.length;if(n!==0)for(var r=0;r<n;r++){var t=e[r];if(!(t.f&(se|te)))try{ae(t)&&(De(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?Mn(t):t.fn=null))}catch(u){Ce(u,t,null,t.ctx)}}}function Yr(){if(ve=!1,re>1001)return;const e=$;$=[],Kn(e),ve||(re=0,de=null)}function Ie(e){me===Un&&(ve||(ve=!0,queueMicrotask(Yr))),de=e;for(var n=e;n.parent!==null;){n=n.parent;var r=n.f;if(r&(le|R)){if(!(r&y))return;n.f^=y}}$.push(n)}function Wn(e,n){var r=e.first,t=[];e:for(;r!==null;){var u=r.f,l=(u&R)!==0,i=l&&(u&y)!==0,_=r.next;if(!i&&!(u&te))if(u&we){if(l)r.f^=y;else try{ae(r)&&De(r)}catch(o){Ce(o,r,null,r.ctx)}var f=r.first;if(f!==null){r=f;continue}}else u&wn&&t.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(e===o)break e;var s=o.next;if(s!==null){r=s;continue e}o=o.parent}}r=_}for(var c=0;c<t.length;c++)f=t[c],n.push(f),Wn(f,n)}function zn(e){var n=me,r=$;try{$n();const u=[];me=Fr,$=u,ve=!1,Kn(r);var t=e==null?void 0:e();return qr(),($.length>0||u.length>0)&&zn(),re=0,de=null,t}finally{me=n,$=r}}async function At(){await Promise.resolve(),zn()}function b(e){var c;var n=e.f,r=(n&S)!==0;if(r&&n&se){var t=Pn(e);return ze(e),t}if(k!==null&&k.add(e),h!==null&&!B){D!==null&&D.includes(e)&&Tr();var u=h.deps;e.rv<Oe&&(e.rv=Oe,T===null&&u!==null&&u[A]===e?A++:T===null?T=[e]:T.push(e))}else if(r&&e.deps===null)for(var l=e,i=l.parent,_=l;i!==null;)if(i.f&S){var f=i;_=f,i=f.parent}else{var s=i;(c=s.deriveds)!=null&&c.includes(_)||(s.deriveds??(s.deriveds=[])).push(_);break}return r&&(l=e,ae(l)&&Nn(l)),e.v}function $r(e){var n=k;k=new Set;var r=k,t;try{if(H(e),n!==null)for(t of k)n.add(t)}finally{k=n}return r}function Ot(e){var n=$r(()=>H(e));for(var r of n)if(r.f&bn)for(const t of r.deps||[])t.f&S||Fe(t,t.v);else Fe(r,r.v)}function H(e){var n=B;try{return B=!0,e()}finally{B=n}}const Kr=-7169;function C(e,n){e.f=e.f&Kr|n}function Pt(e){return Je().get(e)}function Nt(e,n){return Je().set(e,n),n}function Ct(e){return Je().has(e)}function Je(e){return d===null&&Mr(),d.c??(d.c=new Map(Wr(d)||void 0))}function Wr(e){let n=e.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function an(e,n=1){var r=b(e),t=n===1?r++:r--;return O(e,r),t}function Dt(e,n){var r={};for(var t in e)n.includes(t)||(r[t]=e[t]);return r}function zr(e,n=!1,r){d={p:d,c:null,e:null,m:!1,s:e,x:null,l:null},he&&!n&&(d.l={s:null,u:null,r1:[],r2:N(!1)})}function Gr(e){const n=d;if(n!==null){e!==void 0&&(n.x=e);const i=n.e;if(i!==null){var r=p,t=h;n.e=null;try{for(var u=0;u<i.length;u++){var l=i[u];I(l.effect),V(l.reaction),In(l.fn)}}finally{I(r),V(t)}}d=n.p,n.m=!0}return e||{}}function Zr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(M in e)ke(e);else if(!Array.isArray(e))for(let n in e){const r=e[n];typeof r=="object"&&r&&M in r&&ke(r)}}}function ke(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let t in e)try{ke(e[t],n)}catch{}const r=hn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const t=cr(r);for(let u in t){const l=t[u].get;if(l)try{l.call(e)}catch{}}}}}let fn=!1;function Xr(){fn||(fn=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const r of e.target.elements)(n=r.__on_r)==null||n.call(r)})},{capture:!0}))}function Gn(e){var n=h,r=p;V(null),I(null);try{return e()}finally{V(n),I(r)}}function It(e,n,r,t=r){e.addEventListener(n,()=>Gn(r));const u=e.__on_r;u?e.__on_r=()=>{u(),t(!0)}:e.__on_r=()=>t(!0),Xr()}const Zn=new Set,Ue=new Set;function Jr(e,n,r,t){function u(l){if(t.capture||ce.call(n,l),!l.cancelBubble)return Gn(()=>r.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Lr(()=>{n.addEventListener(e,u,t)}):n.addEventListener(e,u,t),u}function Rt(e,n,r,t,u){var l={capture:t,passive:u},i=Jr(e,n,r,l);(n===document.body||n===window||n===document)&&Dn(()=>{n.removeEventListener(e,i,l)})}function Lt(e){for(var n=0;n<e.length;n++)Zn.add(e[n]);for(var r of Ue)r(e)}function ce(e){var j;var n=this,r=n.ownerDocument,t=e.type,u=((j=e.composedPath)==null?void 0:j.call(e))||[],l=u[0]||e.target,i=0,_=e.__root;if(_){var f=u.indexOf(_);if(f!==-1&&(n===document||n===window)){e.__root=n;return}var s=u.indexOf(n);if(s===-1)return;f<=s&&(i=f)}if(l=u[i]||e.target,l!==n){pn(e,"currentTarget",{configurable:!0,get(){return l||r}});var c=h,o=p;V(null),I(null);try{for(var a,v=[];l!==null;){var w=l.assignedSlot||l.parentNode||l.host||null;try{var m=l["__"+t];if(m!==void 0&&!l.disabled)if(dn(m)){var[E,...Y]=m;E.apply(l,[e,...Y])}else m.call(l,e)}catch(P){a?v.push(P):a=P}if(e.cancelBubble||w===n||w===null)break;l=w}if(a){for(let P of v)queueMicrotask(()=>{throw P});throw a}}finally{e.__root=n,delete e.currentTarget,V(c),I(o)}}}function Xn(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function ue(e,n){var r=p;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=n)}function qt(e,n){var r=(n&vn)!==0,t=(n&sr)!==0,u,l=!e.startsWith("<!>");return()=>{u===void 0&&(u=Xn(l?e:"<!>"+e),r||(u=q(u)));var i=t?document.importNode(u,!0):u.cloneNode(!0);if(r){var _=q(i),f=i.lastChild;ue(_,f)}else ue(i,i);return i}}function Mt(e,n,r="svg"){var t=!e.startsWith("<!>"),u=(n&vn)!==0,l=`<${r}>${t?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var _=Xn(l),f=q(_);if(u)for(i=document.createDocumentFragment();q(f);)i.appendChild(q(f));else i=q(f)}var s=i.cloneNode(!0);if(u){var c=q(s),o=s.lastChild;ue(c,o)}else ue(s,s);return s}}function Ft(e=""){{var n=Ke(e+"");return ue(n,n),n}}function jt(){var e=document.createDocumentFragment(),n=document.createComment(""),r=Ke();return e.append(n,r),ue(n,r),e}function kt(e,n){e!==null&&e.before(n)}function Ut(e,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Bt(e,n){return Qr(e,n)}const X=new Map;function Qr(e,{target:n,anchor:r,props:t={},events:u,context:l,intro:i=!0}){Ar();var _=new Set,f=o=>{for(var a=0;a<o.length;a++){var v=o[a];if(!_.has(v)){_.add(v);var w=ar(v);n.addEventListener(v,ce,{passive:w});var m=X.get(v);m===void 0?(document.addEventListener(v,ce,{passive:w}),X.set(v,1)):X.set(v,m+1)}}};f(or(Zn)),Ue.add(f);var s=void 0,c=Dr(()=>{var o=r??n.appendChild(Ke());return Te(()=>{if(l){zr({});var a=d;a.c=l}u&&(t.$$events=u),s=e(o,t)||{},l&&Gr()}),()=>{var w;for(var a of _){n.removeEventListener(a,ce);var v=X.get(a);--v===0?(document.removeEventListener(a,ce),X.delete(a)):X.set(a,v)}Ue.delete(f),o!==r&&((w=o.parentNode)==null||w.removeChild(o))}});return Be.set(s,c),s}let Be=new WeakMap;function Vt(e,n){const r=Be.get(e);return r?(Be.delete(e),r(n)):Promise.resolve()}function Ht(e,n,r=!1){var t=e,u=null,l=null,i=x,_=r?Pe:0,f=!1;const s=(o,a=!0)=>{f=!0,c(a,o)},c=(o,a)=>{i!==(i=o)&&(i?(u?un(u):a&&(u=Te(()=>a(t))),l&&Se(l,()=>{l=null})):(l?un(l):a&&(l=Te(()=>a(t))),u&&Se(u,()=>{u=null})))};Ze(()=>{f=!1,n(s),f||c(null,null)},_)}function Yt(e,n,r){var t=e,u,l;Ze(()=>{u!==(u=n())&&(l&&(Se(l),l=null),u&&(l=Te(()=>r(t,u))))},Pe)}function $t(e=!1){const n=d,r=n.l.u;if(!r)return;let t=()=>Zr(n.s);if(e){let u=0,l={};const i=_e(()=>{let _=!1;const f=n.s;for(const s in f)f[s]!==l[s]&&(l[s]=f[s],_=!0);return _&&u++,u});t=()=>b(i)}r.b.length&&Cr(()=>{on(n,t),Me(r.b)}),tn(()=>{const u=H(()=>r.m.map(dr));return()=>{for(const l of u)typeof l=="function"&&l()}}),r.a.length&&tn(()=>{on(n,t),Me(r.a)})}function on(e,n){if(e.l.s)for(const r of e.l.s)b(r);n()}function Jn(e,n,r){if(e==null)return n(void 0),ee;const t=H(()=>e.subscribe(n,r));return t.unsubscribe?()=>t.unsubscribe():t}const J=[];function Kt(e,n=ee){let r=null;const t=new Set;function u(_){if(En(e,_)&&(e=_,r)){const f=!J.length;for(const s of t)s[1](),J.push(s,e);if(f){for(let s=0;s<J.length;s+=2)J[s][0](J[s+1]);J.length=0}}}function l(_){u(_(e))}function i(_,f=ee){const s=[_,f];return t.add(s),t.size===1&&(r=n(u,l)||ee),_(e),()=>{t.delete(s),t.size===0&&r&&(r(),r=null)}}return{set:u,update:l,subscribe:i}}function et(e){let n;return Jn(e,r=>n=r)(),n}let ge=!1,Ve=Symbol();function Wt(e,n,r){const t=r[n]??(r[n]={store:null,source:$e(void 0),unsubscribe:ee});if(t.store!==e&&!(Ve in r))if(t.unsubscribe(),t.store=e,e==null)t.source.v=void 0,t.unsubscribe=ee;else{var u=!0;t.unsubscribe=Jn(e,l=>{u?t.source.v=l:O(t.source,l)}),u=!1}return Ve in r?et(e):b(t.source)}function zt(){const e={};function n(){Dn(()=>{for(var r in e)e[r].unsubscribe();pn(e,Ve,{enumerable:!1,value:!0})})}return[e,n]}function nt(e){var n=ge;try{return ge=!1,[e(),ge]}finally{ge=n}}const rt={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Gt(e,n,r){return new Proxy({props:e,exclude:n},rt)}const tt={get(e,n){if(!e.exclude.includes(n))return b(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,r){return n in e.special||(e.special[n]=lt({get[n](){return e.props[n]}},n,_n)),e.special[n](r),an(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),an(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Zt(e,n){return new Proxy({props:e,exclude:n,special:{},version:N(0)},tt)}const ut={get(e,n){let r=e.props.length;for(;r--;){let t=e.props[r];if(oe(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t)return t[n]}},set(e,n,r){let t=e.props.length;for(;t--;){let u=e.props[t];oe(u)&&(u=u());const l=U(u,n);if(l&&l.set)return l.set(r),!0}return!1},getOwnPropertyDescriptor(e,n){let r=e.props.length;for(;r--;){let t=e.props[r];if(oe(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t){const u=U(t,n);return u&&!u.configurable&&(u.configurable=!0),u}}},has(e,n){if(n===M||n===yn)return!1;for(let r of e.props)if(oe(r)&&(r=r()),r!=null&&n in r)return!0;return!1},ownKeys(e){const n=[];for(let r of e.props){oe(r)&&(r=r());for(const t in r)n.includes(t)||n.push(t)}return n}};function Xt(...e){return new Proxy({props:e},ut)}function cn(e){for(var n=p,r=p;n!==null&&!(n.f&(R|le));)n=n.parent;try{return I(n),e()}finally{I(r)}}function lt(e,n,r,t){var Qe;var u=(r&rr)!==0,l=!he||(r&tr)!==0,i=(r&ur)!==0,_=(r&lr)!==0,f=!1,s;i?[s,f]=nt(()=>e[n]):s=e[n];var c=M in e||yn in e,o=i&&(((Qe=U(e,n))==null?void 0:Qe.set)??(c&&n in e&&(g=>e[n]=g)))||void 0,a=t,v=!0,w=!1,m=()=>(w=!0,v&&(v=!1,_?a=H(t):a=t),a);s===void 0&&t!==void 0&&(o&&l&&mr(),s=m(),o&&o(s));var E;if(l)E=()=>{var g=e[n];return g===void 0?m():(v=!0,w=!1,g)};else{var Y=cn(()=>(u?_e:Or)(()=>e[n]));Y.f|=bn,E=()=>{var g=b(Y);return g!==void 0&&(a=void 0),g===void 0?a:g}}if(!(r&_n))return E;if(o){var j=e.$$legacy;return function(g,Z){return arguments.length>0?((!l||!Z||j||f)&&o(Z?E():g),g):E()}}var P=!1,Re=!1,be=$e(s),fe=cn(()=>_e(()=>{var g=E(),Z=b(be);return P?(P=!1,Re=!0,Z):(Re=!1,be.v=g)}));return u||(fe.equals=Ye),function(g,Z){if(k!==null&&(P=Re,E(),b(be)),arguments.length>0){const Le=Z?b(fe):l&&i?Q(g):g;return fe.equals(Le)||(P=!0,O(be,Le),w&&a!==void 0&&(a=Le),H(()=>b(fe))),g}return b(fe)}}export{pt as $,H as A,Lr as B,d as C,Mr as D,he as E,tn as F,dn as G,dt as H,xt as I,Zr as J,Tt as K,Rt as L,vt as M,hn as N,cr as O,Kt as P,zt as Q,Wt as R,M as S,Ze as T,Pe as U,Te as V,W,Nt as X,Q as Y,Ct as Z,Pt as _,kt as a,Gt as a0,_e as a1,Bt as a2,Vt as a3,Ke as a4,te as a5,un as a6,Se as a7,or as a8,p as a9,it as aa,Fe as ab,at as ac,Fn as ad,Et as ae,Rr as af,ft as ag,h as ah,ot as ai,$e as aj,N as ak,ct as al,We as am,Ne as an,It as ao,Dn as ap,U as aq,bt as ar,Lt as as,rn as at,an as au,wt as av,At as aw,Ot as ax,st as ay,_t as az,Gr as b,Xt as c,Ft as d,St as e,yt as f,Ut as g,Dt as h,$t as i,gt as j,jt as k,b as l,Or as m,ee as n,Zt as o,zr as p,lt as q,Ht as r,mt as s,qt as t,Mt as u,O as v,ht as w,Yt as x,In as y,Ge as z};
