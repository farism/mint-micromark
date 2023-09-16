/* esm.sh - esbuild bundle(micromark-extension-gfm@3.0.0) es2022 production */
function E(t,n,e,r){let a=t.length,l=0,i;if(n<0?n=-n>a?0:a+n:n=n>a?a:n,e=e>0?e:0,r.length<1e4)i=Array.from(r),i.unshift(n,e),t.splice(...i);else for(e&&t.splice(n,e);l<r.length;)i=r.slice(l,l+1e4),i.unshift(n,0),t.splice(...i),l+=1e4,n+=1e4}var U={}.hasOwnProperty;function ht(t){let n={},e=-1;for(;++e<t.length;)Tt(n,t[e]);return n}function Tt(t,n){let e;for(e in n){let a=(U.call(t,e)?t[e]:void 0)||(t[e]={}),l=n[e],i;if(l)for(i in l){U.call(a,i)||(a[i]=[]);let o=l[i];Ot(a[i],Array.isArray(o)?o:o?[o]:[])}}}function Ot(t,n){let e=-1,r=[];for(;++e<n.length;)(n[e].add==="after"?t:r).push(n[e]);E(t,0,0,r)}function gt(t){let n={},e=-1;for(;++e<t.length;)Ht(n,t[e]);return n}function Ht(t,n){let e;for(e in n){let a=(U.call(t,e)?t[e]:void 0)||(t[e]={}),l=n[e],i;if(l)for(i in l)a[i]=l[i]}}var Pt=F(/\p{P}/u),T=F(/[A-Za-z]/),L=F(/[\dA-Za-z]/),we=F(/[#-'*+\--9=?A-Z^-~]/);function pt(t){return t!==null&&(t<32||t===127)}var De=F(/\d/),de=F(/[\dA-Fa-f]/),Rt=F(/[!-/:-@[-`{-~]/);function C(t){return t!==null&&t<-2}function c(t){return t!==null&&(t<0||t===32)}function k(t){return t===-2||t===-1||t===32}function R(t){return Rt(t)||Pt(t)}var A=F(/\s/);function F(t){return n;function n(e){return e!==null&&e>-1&&t.test(String.fromCharCode(e))}}var Mt={tokenize:Wt,partial:!0},bt={tokenize:Ut,partial:!0},ct={tokenize:qt,partial:!0},kt={tokenize:Vt,partial:!0},jt={tokenize:Zt,partial:!0},xt={tokenize:_t,previous:Dt},wt={tokenize:Bt,previous:dt},y={tokenize:Nt,previous:Ct},D={};function V(){return{text:D}}var z=48;for(;z<123;)D[z]=y,z++,z===58?z=65:z===91&&(z=97);D[43]=y;D[45]=y;D[46]=y;D[95]=y;D[72]=[y,wt];D[104]=[y,wt];D[87]=[y,xt];D[119]=[y,xt];function Nt(t,n,e){let r=this,a,l;return i;function i(u){return!q(u)||!Ct.call(r,r.previous)||Z(r.events)?e(u):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),o(u))}function o(u){return q(u)?(t.consume(u),o):u===64?(t.consume(u),s):e(u)}function s(u){return u===46?t.check(jt,g,h)(u):u===45||u===95||L(u)?(l=!0,t.consume(u),s):g(u)}function h(u){return t.consume(u),a=!0,s}function g(u){return l&&a&&T(r.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),n(u)):e(u)}}function _t(t,n,e){let r=this;return a;function a(i){return i!==87&&i!==119||!Dt.call(r,r.previous)||Z(r.events)?e(i):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(Mt,t.attempt(bt,t.attempt(ct,l),e),e)(i))}function l(i){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),n(i)}}function Bt(t,n,e){let r=this,a="",l=!1;return i;function i(u){return(u===72||u===104)&&dt.call(r,r.previous)&&!Z(r.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),a+=String.fromCodePoint(u),t.consume(u),o):e(u)}function o(u){if(T(u)&&a.length<5)return a+=String.fromCodePoint(u),t.consume(u),o;if(u===58){let p=a.toLowerCase();if(p==="http"||p==="https")return t.consume(u),s}return e(u)}function s(u){return u===47?(t.consume(u),l?h:(l=!0,s)):e(u)}function h(u){return u===null||pt(u)||c(u)||A(u)||R(u)?e(u):t.attempt(bt,t.attempt(ct,g),e)(u)}function g(u){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),n(u)}}function Wt(t,n,e){let r=0;return a;function a(i){return(i===87||i===119)&&r<3?(r++,t.consume(i),a):i===46&&r===3?(t.consume(i),l):e(i)}function l(i){return i===null?e(i):n(i)}}function Ut(t,n,e){let r,a,l;return i;function i(h){return h===46||h===95?t.check(kt,s,o)(h):h===null||c(h)||A(h)||h!==45&&R(h)?s(h):(l=!0,t.consume(h),i)}function o(h){return h===95?r=!0:(a=r,r=void 0),t.consume(h),i}function s(h){return a||r||!l?e(h):n(h)}}function qt(t,n){let e=0,r=0;return a;function a(i){return i===40?(e++,t.consume(i),a):i===41&&r<e?l(i):i===33||i===34||i===38||i===39||i===41||i===42||i===44||i===46||i===58||i===59||i===60||i===63||i===93||i===95||i===126?t.check(kt,n,l)(i):i===null||c(i)||A(i)?n(i):(t.consume(i),a)}function l(i){return i===41&&r++,t.consume(i),a}}function Vt(t,n,e){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(t.consume(o),r):o===38?(t.consume(o),l):o===93?(t.consume(o),a):o===60||o===null||c(o)||A(o)?n(o):e(o)}function a(o){return o===null||o===40||o===91||c(o)||A(o)?n(o):r(o)}function l(o){return T(o)?i(o):e(o)}function i(o){return o===59?(t.consume(o),r):T(o)?(t.consume(o),i):e(o)}}function Zt(t,n,e){return r;function r(l){return t.consume(l),a}function a(l){return L(l)?e(l):n(l)}}function Dt(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||c(t)}function dt(t){return!T(t)}function Ct(t){return!(t===47||q(t))}function q(t){return t===43||t===45||t===46||t===95||L(t)}function Z(t){let n=t.length,e=!1;for(;n--;){let r=t[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){e=!0;break}if(r._gfmAutolinkLiteralWalkedInto){e=!1;break}}return t.length>0&&!e&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),e}var $t={'"':"quot","&":"amp","<":"lt",">":"gt"};function yt(t){return t.replace(/["&<>]/g,n);function n(e){return"&"+$t[e]+";"}}function M(t,n){let e=yt(Gt(t||""));if(!n)return e;let r=e.indexOf(":"),a=e.indexOf("?"),l=e.indexOf("#"),i=e.indexOf("/");return r<0||i>-1&&r>i||a>-1&&r>a||l>-1&&r>l||n.test(e.slice(0,r))?e:""}function Gt(t){let n=[],e=-1,r=0,a=0;for(;++e<t.length;){let l=t.charCodeAt(e),i="";if(l===37&&L(t.charCodeAt(e+1))&&L(t.charCodeAt(e+2)))a=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(i=String.fromCharCode(l));else if(l>55295&&l<57344){let o=t.charCodeAt(e+1);l<56320&&o>56319&&o<57344?(i=String.fromCharCode(l,o),a=1):i="\uFFFD"}else i=String.fromCharCode(l);i&&(n.push(t.slice(r,e),encodeURIComponent(i)),r=e+a+1,i=""),a&&(e+=a,a=0)}return n.join("")+t.slice(r)}function $(){return{exit:{literalAutolinkEmail:Yt,literalAutolinkHttp:Jt,literalAutolinkWww:Qt}}}function Qt(t){G.call(this,t,"http://")}function Yt(t){G.call(this,t,"mailto:")}function Jt(t){G.call(this,t)}function G(t,n){let e=this.sliceSerialize(t);this.tag('<a href="'+M((n||"")+e)+'">'),this.raw(this.encode(e)),this.tag("</a>")}function Q(t){if(t===null||c(t)||A(t))return 1;if(R(t))return 2}function St(t,n,e){let r=[],a=-1;for(;++a<t.length;){let l=t[a].resolveAll;l&&!r.includes(l)&&(n=l(n,e),r.push(l))}return n}function x(t,n,e,r){let a=r?r-1:Number.POSITIVE_INFINITY,l=0;return i;function i(s){return k(s)?(t.enter(e),o(s)):n(s)}function o(s){return k(s)&&l++<a?(t.consume(s),o):(t.exit(e),n(s))}}var Y={tokenize:Xt,partial:!0};function Xt(t,n,e){return r;function r(l){return k(l)?x(t,a,"linePrefix")(l):a(l)}function a(l){return l===null||C(l)?n(l):e(l)}}function I(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var Kt={tokenize:le,partial:!0};function J(){return{document:{91:{tokenize:ne,continuation:{tokenize:ie},exit:re}},text:{91:{tokenize:ee},93:{add:"after",tokenize:vt,resolveTo:te}}}}function vt(t,n,e){let r=this,a=r.events.length,l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i;for(;a--;){let s=r.events[a][1];if(s.type==="labelImage"){i=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return o;function o(s){if(!i||!i._balanced)return e(s);let h=I(r.sliceSerialize({start:i.end,end:r.now()}));return h.codePointAt(0)!==94||!l.includes(h.slice(1))?e(s):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(s),t.exit("gfmFootnoteCallLabelMarker"),n(s))}}function te(t,n){let e=t.length,r;for(;e--;)if(t[e][1].type==="labelImage"&&t[e][0]==="enter"){r=t[e][1];break}t[e+1][1].type="data",t[e+3][1].type="gfmFootnoteCallLabelMarker";let a={type:"gfmFootnoteCall",start:Object.assign({},t[e+3][1].start),end:Object.assign({},t[t.length-1][1].end)},l={type:"gfmFootnoteCallMarker",start:Object.assign({},t[e+3][1].end),end:Object.assign({},t[e+3][1].end)};l.end.column++,l.end.offset++,l.end._bufferIndex++;let i={type:"gfmFootnoteCallString",start:Object.assign({},l.end),end:Object.assign({},t[t.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},i.start),end:Object.assign({},i.end)},s=[t[e+1],t[e+2],["enter",a,n],t[e+3],t[e+4],["enter",l,n],["exit",l,n],["enter",i,n],["enter",o,n],["exit",o,n],["exit",i,n],t[t.length-2],t[t.length-1],["exit",a,n]];return t.splice(e,t.length-e+1,...s),t}function ee(t,n,e){let r=this,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l=0,i;return o;function o(u){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(u),t.exit("gfmFootnoteCallLabelMarker"),s}function s(u){return u!==94?e(u):(t.enter("gfmFootnoteCallMarker"),t.consume(u),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",h)}function h(u){if(l>999||u===93&&!i||u===null||u===91||c(u))return e(u);if(u===93){t.exit("chunkString");let p=t.exit("gfmFootnoteCallString");return a.includes(I(r.sliceSerialize(p)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(u),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),n):e(u)}return c(u)||(i=!0),l++,t.consume(u),u===92?g:h}function g(u){return u===91||u===92||u===93?(t.consume(u),l++,h):h(u)}}function ne(t,n,e){let r=this,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),l,i=0,o;return s;function s(m){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(m){return m===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",g):e(m)}function g(m){if(i>999||m===93&&!o||m===null||m===91||c(m))return e(m);if(m===93){t.exit("chunkString");let w=t.exit("gfmFootnoteDefinitionLabelString");return l=I(r.sliceSerialize(w)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(m),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),p}return c(m)||(o=!0),i++,t.consume(m),m===92?u:g}function u(m){return m===91||m===92||m===93?(t.consume(m),i++,g):g(m)}function p(m){return m===58?(t.enter("definitionMarker"),t.consume(m),t.exit("definitionMarker"),a.includes(l)||a.push(l),x(t,b,"gfmFootnoteDefinitionWhitespace")):e(m)}function b(m){return n(m)}}function ie(t,n,e){return t.check(Y,n,t.attempt(Kt,n,e))}function re(t){t.exit("gfmFootnoteDefinition")}function le(t,n,e){let r=this;return x(t,a,"gfmFootnoteDefinitionIndent",4+1);function a(l){let i=r.events[r.events.length-1];return i&&i[1].type==="gfmFootnoteDefinitionIndent"&&i[2].sliceSerialize(i[1],!0).length===4?n(l):e(l)}}var ae={}.hasOwnProperty,oe={};function At(t,n){return"Back to reference "+(t+1)+(n>1?"-"+n:"")}function X(t){let n=t||oe,e=n.label||"Footnotes",r=n.labelTagName||"h2",a=n.labelAttributes===null||n.labelAttributes===void 0?'class="sr-only"':n.labelAttributes,l=n.backLabel||At,i=n.clobberPrefix===null||n.clobberPrefix===void 0?"user-content-":n.clobberPrefix;return{enter:{gfmFootnoteDefinition(){this.getData("tightStack").push(!1)},gfmFootnoteDefinitionLabelString(){this.buffer()},gfmFootnoteCallString(){this.buffer()}},exit:{gfmFootnoteDefinition(){let o=this.getData("gfmFootnoteDefinitions"),s=this.getData("gfmFootnoteDefinitionStack"),h=this.getData("tightStack"),g=s.pop(),u=this.resume();o||this.setData("gfmFootnoteDefinitions",o={}),ae.call(o,g)||(o[g]=u),h.pop(),this.setData("slurpOneLineEnding",!0),this.setData("lastWasTag")},gfmFootnoteDefinitionLabelString(o){let s=this.getData("gfmFootnoteDefinitionStack");s||this.setData("gfmFootnoteDefinitionStack",s=[]),s.push(I(this.sliceSerialize(o))),this.resume(),this.buffer()},gfmFootnoteCallString(o){let s=this.getData("gfmFootnoteCallOrder"),h=this.getData("gfmFootnoteCallCounts"),g=I(this.sliceSerialize(o)),u;this.resume(),s||this.setData("gfmFootnoteCallOrder",s=[]),h||this.setData("gfmFootnoteCallCounts",h={});let p=s.indexOf(g),b=M(g.toLowerCase());p===-1?(s.push(g),h[g]=1,u=s.length):(h[g]++,u=p+1);let m=h[g];this.tag('<sup><a href="#'+i+"fn-"+b+'" id="'+i+"fnref-"+b+(m>1?"-"+m:"")+'" data-footnote-ref="" aria-describedby="footnote-label">'+String(u)+"</a></sup>")},null(){let o=this.getData("gfmFootnoteCallOrder")||[],s=this.getData("gfmFootnoteCallCounts")||{},h=this.getData("gfmFootnoteDefinitions")||{},g=-1;for(o.length>0&&(this.lineEndingIfNeeded(),this.tag('<section data-footnotes="" class="footnotes"><'+r+' id="footnote-label"'+(a?" "+a:"")+">"),this.raw(this.encode(e)),this.tag("</"+r+">"),this.lineEndingIfNeeded(),this.tag("<ol>"));++g<o.length;){let u=o[g],p=M(u.toLowerCase()),b=0,m=[];for(;++b<=s[u];)m.push('<a href="#'+i+"fnref-"+p+(b>1?"-"+b:"")+'" data-footnote-backref="" aria-label="'+this.encode(typeof l=="string"?l:l(g,b))+'" class="data-footnote-backref">\u21A9'+(b>1?"<sup>"+b+"</sup>":"")+"</a>");let w=m.join(" "),d=!1;this.lineEndingIfNeeded(),this.tag('<li id="'+i+"fn-"+p+'">'),this.lineEndingIfNeeded(),this.tag(h[u].replace(/<\/p>(?:\r?\n|\r)?$/,function(S){return d=!0," "+w+S})),d||(this.lineEndingIfNeeded(),this.tag(w)),this.lineEndingIfNeeded(),this.tag("</li>")}o.length>0&&(this.lineEndingIfNeeded(),this.tag("</ol>"),this.lineEndingIfNeeded(),this.tag("</section>"))}}}}function K(){return{enter:{strikethrough(){this.tag("<del>")}},exit:{strikethrough(){this.tag("</del>")}}}}function v(t){let e=(t||{}).singleTilde,r={tokenize:l,resolveAll:a};return e==null&&(e=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function a(i,o){let s=-1;for(;++s<i.length;)if(i[s][0]==="enter"&&i[s][1].type==="strikethroughSequenceTemporary"&&i[s][1]._close){let h=s;for(;h--;)if(i[h][0]==="exit"&&i[h][1].type==="strikethroughSequenceTemporary"&&i[h][1]._open&&i[s][1].end.offset-i[s][1].start.offset===i[h][1].end.offset-i[h][1].start.offset){i[s][1].type="strikethroughSequence",i[h][1].type="strikethroughSequence";let g={type:"strikethrough",start:Object.assign({},i[h][1].start),end:Object.assign({},i[s][1].end)},u={type:"strikethroughText",start:Object.assign({},i[h][1].end),end:Object.assign({},i[s][1].start)},p=[["enter",g,o],["enter",i[h][1],o],["exit",i[h][1],o],["enter",u,o]],b=o.parser.constructs.insideSpan.null;b&&E(p,p.length,0,St(b,i.slice(h+1,s),o)),E(p,p.length,0,[["exit",u,o],["enter",i[s][1],o],["exit",i[s][1],o],["exit",g,o]]),E(i,h-1,s-h+3,p),s=h+p.length-2;break}}for(s=-1;++s<i.length;)i[s][1].type==="strikethroughSequenceTemporary"&&(i[s][1].type="data");return i}function l(i,o,s){let h=this.previous,g=this.events,u=0;return p;function p(m){return h===126&&g[g.length-1][1].type!=="characterEscape"?s(m):(i.enter("strikethroughSequenceTemporary"),b(m))}function b(m){let w=Q(h);if(m===126)return u>1?s(m):(i.consume(m),u++,b);if(u<2&&!e)return s(m);let d=i.exit("strikethroughSequenceTemporary"),S=Q(m);return d._open=!S||S===2&&!!w,d._close=!w||w===2&&!!S,o(m)}}}var tt={none:"",left:' align="left"',right:' align="right"',center:' align="center"'};function et(){return{enter:{table(t){let n=t._align;this.lineEndingIfNeeded(),this.tag("<table>"),this.setData("tableAlign",n)},tableBody(){this.tag("<tbody>")},tableData(){let t=this.getData("tableAlign"),n=this.getData("tableColumn"),e=tt[t[n]];e===void 0?this.buffer():(this.lineEndingIfNeeded(),this.tag("<td"+e+">"))},tableHead(){this.lineEndingIfNeeded(),this.tag("<thead>")},tableHeader(){let t=this.getData("tableAlign"),n=this.getData("tableColumn"),e=tt[t[n]];this.lineEndingIfNeeded(),this.tag("<th"+e+">")},tableRow(){this.setData("tableColumn",0),this.lineEndingIfNeeded(),this.tag("<tr>")}},exit:{codeTextData(t){let n=this.sliceSerialize(t);this.getData("tableAlign")&&(n=n.replace(/\\([\\|])/g,ue)),this.raw(this.encode(n))},table(){this.setData("tableAlign"),this.setData("slurpAllLineEndings"),this.lineEndingIfNeeded(),this.tag("</table>")},tableBody(){this.lineEndingIfNeeded(),this.tag("</tbody>")},tableData(){let t=this.getData("tableAlign"),n=this.getData("tableColumn");n in t?(this.tag("</td>"),this.setData("tableColumn",n+1)):this.resume()},tableHead(){this.lineEndingIfNeeded(),this.tag("</thead>")},tableHeader(){let t=this.getData("tableColumn");this.tag("</th>"),this.setData("tableColumn",t+1)},tableRow(){let t=this.getData("tableAlign"),n=this.getData("tableColumn");for(;n<t.length;)this.lineEndingIfNeeded(),this.tag("<td"+tt[t[n]]+"></td>"),n++;this.setData("tableColumn",n),this.lineEndingIfNeeded(),this.tag("</tr>")}}}}function ue(t,n){return n==="|"?n:t}var _=class{constructor(){this.map=[]}add(n,e,r){se(this,n,e,r)}consume(n){if(this.map.sort(function(l,i){return l[0]-i[0]}),this.map.length===0)return;let e=this.map.length,r=[];for(;e>0;)e-=1,r.push(n.slice(this.map[e][0]+this.map[e][1]),this.map[e][2]),n.length=this.map[e][0];r.push([...n]),n.length=0;let a=r.pop();for(;a;)n.push(...a),a=r.pop();this.map.length=0}};function se(t,n,e,r){let a=0;if(!(e===0&&r.length===0)){for(;a<t.map.length;){if(t.map[a][0]===n){t.map[a][1]+=e,t.map[a][2].push(...r);return}a+=1}t.map.push([n,e,r])}}function Ft(t,n){let e=!1,r=[];for(;n<t.length;){let a=t[n];if(e){if(a[0]==="enter")a[1].type==="tableContent"&&r.push(t[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(a[1].type==="tableContent"){if(t[n-1][1].type==="tableDelimiterMarker"){let l=r.length-1;r[l]=r[l]==="left"?"center":"right"}}else if(a[1].type==="tableDelimiterRow")break}else a[0]==="enter"&&a[1].type==="tableDelimiterRow"&&(e=!0);n+=1}return r}function nt(){return{flow:{null:{tokenize:fe,resolveAll:me}}}}function fe(t,n,e){let r=this,a=0,l=0,i;return o;function o(f){let P=r.events.length-1;for(;P>-1;){let mt=r.events[P][1].type;if(mt==="lineEnding"||mt==="linePrefix")P--;else break}let st=P>-1?r.events[P][1].type:null,ft=st==="tableHead"||st==="tableRow"?ut:s;return ft===ut&&r.parser.lazy[r.now().line]?e(f):ft(f)}function s(f){return t.enter("tableHead"),t.enter("tableRow"),h(f)}function h(f){return f===124||(i=!0,l+=1),g(f)}function g(f){return f===null?e(f):C(f)?l>1?(l=0,r.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),b):e(f):k(f)?x(t,g,"whitespace")(f):(l+=1,i&&(i=!1,a+=1),f===124?(t.enter("tableCellDivider"),t.consume(f),t.exit("tableCellDivider"),i=!0,g):(t.enter("data"),u(f)))}function u(f){return f===null||f===124||c(f)?(t.exit("data"),g(f)):(t.consume(f),f===92?p:u)}function p(f){return f===92||f===124?(t.consume(f),u):u(f)}function b(f){return r.interrupt=!1,r.parser.lazy[r.now().line]?e(f):(t.enter("tableDelimiterRow"),i=!1,k(f)?x(t,m,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):m(f))}function m(f){return f===45||f===58?d(f):f===124?(i=!0,t.enter("tableCellDivider"),t.consume(f),t.exit("tableCellDivider"),w):H(f)}function w(f){return k(f)?x(t,d,"whitespace")(f):d(f)}function d(f){return f===58?(l+=1,i=!0,t.enter("tableDelimiterMarker"),t.consume(f),t.exit("tableDelimiterMarker"),S):f===45?(l+=1,S(f)):f===null||C(f)?W(f):H(f)}function S(f){return f===45?(t.enter("tableDelimiterFiller"),at(f)):H(f)}function at(f){return f===45?(t.consume(f),at):f===58?(i=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(f),t.exit("tableDelimiterMarker"),ot):(t.exit("tableDelimiterFiller"),ot(f))}function ot(f){return k(f)?x(t,W,"whitespace")(f):W(f)}function W(f){return f===124?m(f):f===null||C(f)?!i||a!==l?H(f):(t.exit("tableDelimiterRow"),t.exit("tableHead"),n(f)):H(f)}function H(f){return e(f)}function ut(f){return t.enter("tableRow"),j(f)}function j(f){return f===124?(t.enter("tableCellDivider"),t.consume(f),t.exit("tableCellDivider"),j):f===null||C(f)?(t.exit("tableRow"),n(f)):k(f)?x(t,j,"whitespace")(f):(t.enter("data"),N(f))}function N(f){return f===null||f===124||c(f)?(t.exit("data"),j(f)):(t.consume(f),f===92?Et:N)}function Et(f){return f===92||f===124?(t.consume(f),N):N(f)}}function me(t,n){let e=-1,r=!0,a=0,l=[0,0,0,0],i=[0,0,0,0],o=!1,s=0,h,g,u,p=new _;for(;++e<t.length;){let b=t[e],m=b[1];b[0]==="enter"?m.type==="tableHead"?(o=!1,s!==0&&(Lt(p,n,s,h,g),g=void 0,s=0),h={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},p.add(e,0,[["enter",h,n]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(r=!0,u=void 0,l=[0,0,0,0],i=[0,e+1,0,0],o&&(o=!1,g={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},p.add(e,0,[["enter",g,n]])),a=m.type==="tableDelimiterRow"?2:g?3:1):a&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(r=!1,i[2]===0&&(l[1]!==0&&(i[0]=i[1],u=B(p,n,l,a,void 0,u),l=[0,0,0,0]),i[2]=e)):m.type==="tableCellDivider"&&(r?r=!1:(l[1]!==0&&(i[0]=i[1],u=B(p,n,l,a,void 0,u)),l=i,i=[l[1],e,0,0])):m.type==="tableHead"?(o=!0,s=e):m.type==="tableRow"||m.type==="tableDelimiterRow"?(s=e,l[1]!==0?(i[0]=i[1],u=B(p,n,l,a,e,u)):i[1]!==0&&(u=B(p,n,i,a,e,u)),a=0):a&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(i[3]=e)}for(s!==0&&Lt(p,n,s,h,g),p.consume(n.events),e=-1;++e<n.events.length;){let b=n.events[e];b[0]==="enter"&&b[1].type==="table"&&(b[1]._align=Ft(n.events,e))}return t}function B(t,n,e,r,a,l){let i=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",o="tableContent";e[0]!==0&&(l.end=Object.assign({},O(n.events,e[0])),t.add(e[0],0,[["exit",l,n]]));let s=O(n.events,e[1]);if(l={type:i,start:Object.assign({},s),end:Object.assign({},s)},t.add(e[1],0,[["enter",l,n]]),e[2]!==0){let h=O(n.events,e[2]),g=O(n.events,e[3]),u={type:o,start:Object.assign({},h),end:Object.assign({},g)};if(t.add(e[2],0,[["enter",u,n]]),r!==2){let p=n.events[e[2]],b=n.events[e[3]];if(p[1].end=Object.assign({},b[1].end),p[1].type="chunkText",p[1].contentType="text",e[3]>e[2]+1){let m=e[2]+1,w=e[3]-e[2]-1;t.add(m,w,[])}}t.add(e[3]+1,0,[["exit",u,n]])}return a!==void 0&&(l.end=Object.assign({},O(n.events,a)),t.add(a,0,[["exit",l,n]]),l=void 0),l}function Lt(t,n,e,r,a){let l=[],i=O(n.events,e);a&&(a.end=Object.assign({},i),l.push(["exit",a,n])),r.end=Object.assign({},i),l.push(["exit",r,n]),t.add(e+1,0,l)}function O(t,n){let e=t[n],r=e[0]==="enter"?"start":"end";return e[1][r]}var It=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi,he=new RegExp("^"+It.source,"i");function it(){return{exit:{htmlFlowData(t){zt.call(this,t,It)},htmlTextData(t){zt.call(this,t,he)}}}}function zt(t,n){let e=this.sliceSerialize(t);this.options.allowDangerousHtml&&(e=e.replace(n,"&lt;$1$2")),this.raw(this.encode(e))}function rt(){return{enter:{taskListCheck(){this.tag('<input type="checkbox" disabled="" ')}},exit:{taskListCheck(){this.tag("/>")},taskListCheckValueChecked(){this.tag('checked="" ')}}}}var ge={tokenize:pe};function lt(){return{text:{91:ge}}}function pe(t,n,e){let r=this;return a;function a(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?e(s):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),l)}function l(s){return c(s)?(t.enter("taskListCheckValueUnchecked"),t.consume(s),t.exit("taskListCheckValueUnchecked"),i):s===88||s===120?(t.enter("taskListCheckValueChecked"),t.consume(s),t.exit("taskListCheckValueChecked"),i):e(s)}function i(s){return s===93?(t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),o):e(s)}function o(s){return C(s)?n(s):k(s)?t.check({tokenize:be},n,e)(s):e(s)}}function be(t,n,e){return x(t,r,"whitespace");function r(a){return a===null?e(a):n(a)}}function _n(t){return ht([V(),J(),v(t),nt(),lt()])}function Bn(t){return gt([$(),X(t),K(),et(),it(),rt()])}export{_n as gfm,Bn as gfmHtml};
//# sourceMappingURL=micromark-extension-gfm.bundle.mjs.map