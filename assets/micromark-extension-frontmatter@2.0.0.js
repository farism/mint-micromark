/* esm.sh - esbuild bundle(micromark-extension-frontmatter@2.0.0) es2022 production */
var D=Object.create;var P=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var J=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var V=(n,t,i,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of R(t))!U.call(n,o)&&o!==i&&P(n,o,{get:()=>t[o],enumerable:!(u=H(t,o))||u.enumerable});return n};var X=(n,t,i)=>(i=n!=null?D(W(n)):{},V(t||!n||!n.__esModule?P(i,"default",{value:n,enumerable:!0}):i,n));var T=J((sn,F)=>{(function(){var n;typeof F<"u"?n=F.exports=u:n=function(){return this||(0,eval)("this")}(),n.format=u,n.vsprintf=i,typeof console<"u"&&typeof console.log=="function"&&(n.printf=t);function t(){console.log(u.apply(null,arguments))}function i(o,m){return u.apply(null,[o].concat(m))}function u(o){for(var m=1,g=[].slice.call(arguments),a=0,k=o.length,l="",p,r=!1,h,f,x=!1,A,c=function(){return g[m++]},b=function(){for(var y="";/\d/.test(o[a]);)y+=o[a++],p=o[a];return y.length>0?parseInt(y):null};a<k;++a)if(p=o[a],r)switch(r=!1,p=="."?(x=!1,p=o[++a]):p=="0"&&o[a+1]=="."?(x=!0,a+=2,p=o[a]):x=!0,A=b(),p){case"b":l+=parseInt(c(),10).toString(2);break;case"c":h=c(),typeof h=="string"||h instanceof String?l+=h:l+=String.fromCharCode(parseInt(h,10));break;case"d":l+=parseInt(c(),10);break;case"f":f=String(parseFloat(c()).toFixed(A||6)),l+=x?f:f.replace(/^0/,"");break;case"j":l+=JSON.stringify(c());break;case"o":l+="0"+parseInt(c(),10).toString(8);break;case"s":l+=c();break;case"x":l+="0x"+parseInt(c(),10).toString(16);break;case"X":l+="0x"+parseInt(c(),10).toString(16).toUpperCase();break;default:l+=p;break}else p==="%"?r=!0:l+=p;return l}})()});var _=w(/\p{P}/u),$=w(/[A-Za-z]/),nn=w(/[\dA-Za-z]/),tn=w(/[#-'*+\--9=?A-Z^-~]/);var rn=w(/\d/),en=w(/[\dA-Fa-f]/),on=w(/[!-/:-@[-`{-~]/);function E(n){return n!==null&&n<-2}function C(n){return n===-2||n===-1||n===32}var an=w(/\s/);function w(n){return t;function t(i){return i!==null&&i>-1&&n.test(String.fromCharCode(i))}}var L=X(T(),1),I=Object.assign(S(Error),{eval:S(EvalError),range:S(RangeError),reference:S(ReferenceError),syntax:S(SyntaxError),type:S(TypeError),uri:S(URIError)});function S(n){return t.displayName=n.displayName||n.name,t;function t(i,...u){let o=i&&(0,L.default)(i,...u);return new n(o)}}var v={}.hasOwnProperty,N={yaml:"-",toml:"+"};function d(n){let t=[],i=-1,u=Array.isArray(n)?n:n?[n]:["yaml"];for(;++i<u.length;)t[i]=B(u[i]);return t}function B(n){let t=n;if(typeof t=="string"){if(!v.call(N,t))throw I("Missing matter definition for `%s`",t);t={type:t,marker:N[t]}}else if(typeof t!="object")throw I("Expected matter to be an object, not `%j`",t);if(!v.call(t,"type"))throw I("Missing `type` in matter `%j`",t);if(!v.call(t,"fence")&&!v.call(t,"marker"))throw I("Missing `marker` or `fence` in matter `%j`",t);return t}function G(n){let t=d(n),i={},u=-1;for(;++u<t.length;){let o=t[u],m=M(o,"open").charCodeAt(0),g=K(o),a=i[m];Array.isArray(a)?a.push(g):i[m]=[g]}return{flow:i}}function K(n){let t=n.anywhere,i=n.type,u=i+"Fence",o=u+"Sequence",m=i+"Value",g={tokenize:p,partial:!0},a,k=0;return{tokenize:l,concrete:!0};function l(r,h,f){let x=this;return A;function A(e){let O=x.now();return O.column===1&&(O.line===1||t)&&(a=M(n,"open"),k=0,e===a.charCodeAt(k))?(r.enter(i),r.enter(u),r.enter(o),c(e)):f(e)}function c(e){return k===a.length?(r.exit(o),C(e)?(r.enter("whitespace"),b(e)):y(e)):e===a.charCodeAt(k++)?(r.consume(e),c):f(e)}function b(e){return C(e)?(r.consume(e),b):(r.exit("whitespace"),y(e))}function y(e){return E(e)?(r.exit(u),r.enter("lineEnding"),r.consume(e),r.exit("lineEnding"),a=M(n,"close"),k=0,r.attempt(g,z,s)):f(e)}function s(e){return e===null||E(e)?q(e):(r.enter(m),j(e))}function j(e){return e===null||E(e)?(r.exit(m),q(e)):(r.consume(e),j)}function q(e){return e===null?f(e):(r.enter("lineEnding"),r.consume(e),r.exit("lineEnding"),r.attempt(g,z,s))}function z(e){return r.exit(i),h(e)}}function p(r,h,f){let x=0;return A;function A(s){return s===a.charCodeAt(x)?(r.enter(u),r.enter(o),c(s)):f(s)}function c(s){return x===a.length?(r.exit(o),C(s)?(r.enter("whitespace"),b(s)):y(s)):s===a.charCodeAt(x++)?(r.consume(s),c):f(s)}function b(s){return C(s)?(r.consume(s),b):(r.exit("whitespace"),y(s))}function y(s){return s===null||E(s)?(r.exit(u),h(s)):f(s)}}}function M(n,t){return n.marker?Z(n.marker,t).repeat(3):Z(n.fence,t)}function Z(n,t){return typeof n=="string"?n:n[t]}function Q(n){let t=d(n),i={},u={},o=-1;for(;++o<t.length;){let a=t[o].type;i[a]=m,u[a]=g}return{enter:i,exit:u};function m(){this.buffer()}function g(){this.resume(),this.setData("slurpOneLineEnding",!0)}}export{G as frontmatter,Q as frontmatterHtml,d as toMatters};
//# sourceMappingURL=micromark-extension-frontmatter.bundle.mjs.map