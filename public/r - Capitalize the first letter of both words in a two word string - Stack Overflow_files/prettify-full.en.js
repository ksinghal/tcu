'use strict';var IN_GLOBAL_SCOPE=!0;window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;
(function(){function aa(b){function d(e){var c=e.charCodeAt(0);if(92!==c)return c;var a=e.charAt(1);return(c=p[a])?c:"0"<=a&&"7">=a?parseInt(e.substring(1),8):"u"===a||"x"===a?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function c(e){var c=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g),e=
[],a="^"===c[0],b=["["];a&&b.push("^");for(var a=a?1:0,f=c.length;a<f;++a){var h=c[a];if(/\\[bdsw]/i.test(h))b.push(h);else{var h=d(h),l;a+2<f&&"-"===c[a+1]?(l=d(c[a+2]),a+=2):l=h;e.push([h,l]);65>l||122<h||(65>l||90<h||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),97>l||122<h||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});c=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):c.push(f=h);for(a=0;a<c.length;++a)h=c[a],
b.push(g(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&b.push("-"),b.push(g(h[1])));b.push("]");return b.join("")}function t(e){for(var a=e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),b=a.length,d=[],f=0,h=0;f<b;++f){var l=a[f];"("===l?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++q);for(h=f=0;f<b;++f)l=a[f],"("===
l?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&(a[f]="\\"+d[l]);for(f=0;f<b;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<b;++f)l=a[f],e=l.charAt(0),2<=l.length&&"["===e?a[f]=c(l):"\\"!==e&&(a[f]=l.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var q=0,m=!1,j=!1,k=0,a=b.length;k<a;++k){var i=b[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,
""))){m=!0;j=!1;break}}for(var p={b:8,t:9,n:10,v:11,f:12,r:13},n=[],k=0,a=b.length;k<a;++k){i=b[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+t(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function ba(b,d){function g(b){var a=b.nodeType;if(1==a){if(!c.test(b.className)){for(a=b.firstChild;a;a=a.nextSibling)g(a);a=b.nodeName.toLowerCase();if("br"===a||"li"===a)t[j]="\n",m[j<<1]=q++,m[j++<<1|1]=b}}else if(3==a||4==a)a=b.nodeValue,a.length&&(a=d?a.replace(/\r\n?/g,"\n"):a.replace(/[ \t\r\n]+/g,
" "),t[j]=a,m[j<<1]=q,q+=a.length,m[j++<<1|1]=b)}var c=/(?:^|\s)nocode(?:\s|$)/,t=[],q=0,m=[],j=0;g(b);return{sourceCode:t.join("").replace(/\n$/,""),spans:m}}function K(b,d,g,c){d&&(b={sourceCode:d,basePos:b},g(b),c.push.apply(c,b.decorations))}function ca(b){for(var d=void 0,g=b.firstChild;g;g=g.nextSibling)var c=g.nodeType,d=1===c?d?b:g:3===c?da.test(g.nodeValue)?b:d:d;return d===b?void 0:d}function E(b,d){var g={},c;(function(){for(var m=b.concat(d),j=[],k={},a=0,i=m.length;a<i;++a){var p=m[a],
n=p[3];if(n)for(var e=n.length;0<=--e;)g[n.charAt(e)]=p;p=p[1];n=""+p;k.hasOwnProperty(n)||(j.push(p),k[n]=null)}j.push(/[\0-\uffff]/);c=aa(j)})();var t=d.length,q=function(b){for(var j=b.basePos,k=[j,z],a=0,i=b.sourceCode.match(c)||[],p={},n=0,e=i.length;n<e;++n){var x=i[n],w=p[x],s=void 0,f;if("string"===typeof w)f=!1;else{var h=g[x.charAt(0)];if(h)s=x.match(h[1]),w=h[0];else{for(f=0;f<t;++f)if(h=d[f],s=x.match(h[1])){w=h[0];break}s||(w=z)}if((f=5<=w.length&&"lang-"===w.substring(0,5))&&!(s&&"string"===
typeof s[1]))f=!1,w=N;f||(p[x]=w)}h=a;a+=x.length;if(f){f=s[1];var l=x.indexOf(f),B=l+f.length;s[2]&&(B=x.length-s[2].length,l=B-f.length);w=w.substring(5);K(j+h,x.substring(0,l),q,k);K(j+h+l,f,O(w,f),k);K(j+h+B,x.substring(B),q,k)}else k.push(j+h,w)}b.decorations=k};return q}function u(b){var d=[],g=[];b.tripleQuotedStrings?d.push([C,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
null,"'\""]):b.multiLineStrings?d.push([C,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):d.push([C,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);b.verbatimStrings&&g.push([C,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var c=b.hashComments;c&&(b.cStyleComments?(1<c?d.push([D,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):d.push([D,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
null,"#"]),g.push([C,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):d.push([D,/^#[^\r\n]*/,null,"#"]));b.cStyleComments&&(g.push([D,/^\/\/[^\r\n]*/,null]),g.push([D,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(c=b.regexLiterals){var t=(c=1<c?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^"+ea+"("+("/(?=[^/*"+c+"])(?:[^/\\x5B\\x5C"+c+"]|\\x5C"+t+"|\\x5B(?:[^\\x5C\\x5D"+c+"]|\\x5C"+t+")*(?:\\x5D|$))+/")+")")])}(c=b.types)&&g.push([L,c]);c=(""+b.keywords).replace(/^ | $/g,
"");c.length&&g.push([P,RegExp("^(?:"+c.replace(/[\s,]+/g,"|")+")\\b"),null]);d.push([z,/^\s+/,null," \r\n\t\u00a0"]);c="^.[^\\s\\w.$@'\"`/\\\\]*";b.regexLiterals&&(c+="(?!s*/)");g.push([M,/^@[a-z_$][a-z_$@0-9]*/i,null],[L,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[z,/^[a-z_$][a-z_$@0-9]*/i,null],[M,/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],[z,/^\\[\s\S]?/,null],[H,RegExp(c),null]);return E(d,g)}function Q(b,d,g){function c(a){var b=
a.nodeType;if(1==b&&!q.test(a.className))if("br"===a.nodeName)t(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)c(a);else if((3==b||4==b)&&g){var d=a.nodeValue,i=d.match(m);i&&(b=d.substring(0,i.index),a.nodeValue=b,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),t(a),b||a.parentNode.removeChild(a))}}function t(b){function c(a,b){var d=b?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=c(e,1),g=a.nextSibling;e.appendChild(d);
for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!b.nextSibling;)if(b=b.parentNode,!b)return;for(var b=c(b.nextSibling,0),d;(d=b.parentNode)&&1===d.nodeType;)b=d;a.push(b)}for(var q=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=b.ownerDocument,k=j.createElement("li");b.firstChild;)k.appendChild(b.firstChild);for(var a=[k],i=0;i<a.length;++i)c(a[i]);d===(d|0)&&a[0].setAttribute("value",d);var p=j.createElement("ol");p.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=a.length;i<n;++i)k=
a[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),p.appendChild(k);b.appendChild(p)}function r(b,d){for(var g=d.length;0<=--g;){var c=d[g];I.hasOwnProperty(c)?F.console&&console.warn("cannot override language handler %s",c):I[c]=b}}function O(b,d){if(!b||!I.hasOwnProperty(b))b=/^\s*</.test(d)?"default-markup":"default-code";return I[b]}function R(b){var d=b.langExtension;try{var g=ba(b.sourceNode,b.pre),c=g.sourceCode;b.sourceCode=c;b.spans=g.spans;b.basePos=0;
O(d,c)(b);var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent),t=t&&8>=+t[1],d=/\n/g,q=b.sourceCode,m=q.length,g=0,j=b.spans,k=j.length,c=0,a=b.decorations,i=a.length,p=0;a[i]=m;var n,e;for(e=n=0;e<i;)a[e]!==a[e+2]?(a[n++]=a[e++],a[n++]=a[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var r=a[e],w=a[e+1],s=e+2;s+2<=i&&a[s+1]===w;)s+=2;a[n++]=r;a[n++]=w;e=s}a.length=n;var f=b.sourceNode,h;f&&(h=f.style.display,f.style.display="none");try{for(;c<k;){var l=j[c+2]||m,B=a[p+2]||m,s=Math.min(l,B),y=j[c+1],J;if(1!==y.nodeType&&
(J=q.substring(g,s))){t&&(J=J.replace(d,"\r"));y.nodeValue=J;var S=y.ownerDocument,o=S.createElement("span");o.className=a[p+1];var u=y.parentNode;u.replaceChild(o,y);o.appendChild(y);g<l&&(j[c+1]=y=S.createTextNode(q.substring(s,l)),u.insertBefore(y,o.nextSibling))}g=s;g>=l&&(c+=2);g>=B&&(p+=2)}}finally{f&&(f.style.display=h)}}catch(v){F.console&&console.log(v&&v.stack||v)}}function T(b,d,g){var c=document.createElement("div");c.innerHTML="<pre>"+b+"</pre>";c=c.firstChild;g&&Q(c,g,!0);R({langExtension:d,
numberLines:g,sourceNode:c,pre:1});return c.innerHTML}function U(b,d){function g(){for(var c=F.PR_SHOULD_USE_CONTINUATION?a.now()+250:Infinity;i<q.length&&a.now()<c;i++){for(var d=q[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(7===m||8===m)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):3!==m||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!r.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&
o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),u;if(!m&&(u=ca(d))&&s.test(u.tagName))m=u.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,v=t.defaultView,o=(o=o?o.whiteSpace:v&&v.getComputedStyle?v.getComputedStyle(d,null).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);v=j.linenums;if(!(v="true"===v||+v))v=(v=k.match(/\blinenums\b(?::(\d+))?/))?v[1]&&v[1].length?+v[1]:!0:!1;v&&Q(d,v,
o);p={langExtension:m,sourceNode:d,numberLines:v,pre:o};R(p)}}}i<q.length?setTimeout(g,250):"function"===typeof b&&b()}for(var c=d||document.body,t=c.ownerDocument||document,c=[c.getElementsByTagName("pre"),c.getElementsByTagName("code"),c.getElementsByTagName("xmp")],q=[],m=0;m<c.length;++m)for(var j=0,k=c[m].length;j<k;++j)q.push(c[m][j]);var c=null,a=Date;a.now||(a={now:function(){return+new Date}});var i=0,p,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,r=/\bprettyprinted\b/,w=/pre|xmp/i,
s=/^code$/i,f=/^(?:pre|code|xmp)$/i,h={};g()}var F=window,A=["break,continue,do,else,for,if,return,while"],G=[[A,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],V=[G,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
W=[G,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],X=[W,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],G=[G,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
Y=[A,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],Z=[A,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],fa=[A,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],A=[A,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
$=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,C="str",P="kwd",D="com",L="typ",M="lit",H="pun",z="pln",N="src",ea="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",da=/\S/,ga=u({keywords:[V,X,G,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
Y,Z,A],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),I={};r(ga,["default-code"]);r(E([],[[z,/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],[D,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[H,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup,htm,html,mxml,xhtml,xml,xsl".split(","));
r(E([[z,/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[H,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),
["in.tag"]);r(E([],[["atv",/^[\s\S]+/]]),["uq.val"]);r(u({keywords:V,hashComments:!0,cStyleComments:!0,types:$}),"c,cc,cpp,cxx,cyc,m".split(","));r(u({keywords:"null,true,false"}),["json"]);r(u({keywords:X,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:$}),["cs"]);r(u({keywords:W,cStyleComments:!0}),["java"]);r(u({keywords:A,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);r(u({keywords:Y,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);
r(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);r(u({keywords:Z,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);r(u({keywords:G,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);r(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);r(u({keywords:fa,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);r(E([],[[C,/^[\s\S]+/]]),["regex"]);var ha=F.PR={createSimpleLexer:E,registerLangHandler:r,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:D,PR_DECLARATION:"dec",PR_KEYWORD:P,PR_LITERAL:M,PR_NOCODE:"nocode",PR_PLAIN:z,PR_PUNCTUATION:H,PR_SOURCE:N,PR_STRING:C,PR_TAG:"tag",PR_TYPE:L,prettyPrintOne:IN_GLOBAL_SCOPE?
F.prettyPrintOne=T:prettyPrintOne=T,prettyPrint:prettyPrint=IN_GLOBAL_SCOPE?F.prettyPrint=U:prettyPrint=U};"function"===typeof define&&define.amd&&define("google-code-prettify",[],function(){return ha})})();
PR.registerLangHandler(PR.createSimpleLexer([["opn",/^[\(\{\[]+/,null,"([{"],["clo",/^[\)\}\]]+/,null,")]}"],[PR.PR_COMMENT,/^;[^\r\n]*/,null,";"],[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[[PR.PR_KEYWORD,/^(?:def|if|do|let|quote|var|fn|loop|recur|throw|try|monitor-enter|monitor-exit|defmacro|defn|defn-|macroexpand|macroexpand-1|for|doseq|dosync|dotimes|and|or|when|not|assert|doto|proxy|defstruct|first|rest|cons|defprotocol|deftype|defrecord|reify|defmulti|defmethod|meta|with-meta|ns|in-ns|create-ns|import|intern|refer|alias|namespace|resolve|ref|deref|refset|new|set!|memfn|to-array|into-array|aset|gen-class|reduce|map|filter|find|nil?|empty?|hash-map|hash-set|vec|vector|seq|flatten|reverse|assoc|dissoc|list|list?|disj|get|union|difference|intersection|extend|extend-type|extend-protocol|prn)\b/,null],
[PR.PR_TYPE,/^:[0-9a-zA-Z\-]+/]]),["clj"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," \t\r\n\u000c"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']+)\)/i],[PR.PR_KEYWORD,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],
[PR.PR_COMMENT,/^(?:<\!--|--\>)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}\b/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_PLAIN,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])+(?:\'|$)|`[^`]*(?:`|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],[PR.PR_PLAIN,/^(?:[^\/\"\'`]|\/(?![\/\*]))+/i]]),["go"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\x0B\x0C\r ]+/,null,"\t\n\x0B\u000c\r "],[PR.PR_STRING,/^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/,null,'"'],[PR.PR_STRING,/^\'(?:[^\'\\\n\x0C\r]|\\[^&])\'?/,null,"'"],[PR.PR_LITERAL,/^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,"0123456789"]],[[PR.PR_COMMENT,/^(?:(?:--+(?:[^\r\n\x0C]*)?)|(?:\{-(?:[^-]|-+[^-\}])*-\}))/],[PR.PR_KEYWORD,/^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\']|$)/,
null],[PR.PR_PLAIN,/^(?:[A-Z][\w\']*\.)*[a-zA-Z][\w\']*/],[PR.PR_PUNCTUATION,/^[^\t\n\x0B\x0C\r a-zA-Z0-9\'\"]+/]]),["hs"]);
PR.registerLangHandler(PR.createSimpleLexer([["opn",/^\(+/,null,"("],["clo",/^\)+/,null,")"],[PR.PR_COMMENT,/^;[^\r\n]*/,null,";"],[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[[PR.PR_KEYWORD,/^(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\b/,null],
[PR.PR_LITERAL,/^[+\-]?(?:[0#]x[0-9a-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[ed][+\-]?\d+)?)/i],[PR.PR_LITERAL,/^\'(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],[PR.PR_PLAIN,/^-*(?:[a-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0()\"\\\';]+/]]),"cl,el,lisp,lsp,scm,ss,rkt".split(","));
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^--(?:\[(=*)\[[\s\S]*?(?:\]\1\]|$)|[^\r\n]*)/],[PR.PR_STRING,/^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],[PR.PR_KEYWORD,/^(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
[PR.PR_PLAIN,/^[a-z_]\w*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/]]),["lua"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_COMMENT,/^#(?:if[\t\n\r \xA0]+(?:[a-z_$][\w\']*|``[^\r\n\t`]*(?:``|$))|else|endif|light)/i,null,"#"],[PR.PR_STRING,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])(?:\'|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:\/\/[^\r\n]*|\(\*[\s\S]*?\*\))/],[PR.PR_KEYWORD,/^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/],[PR.PR_LITERAL,
/^[+\-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^(?:[a-z_][\w']*[!?#]?|``[^\r\n\t`]*(?:``|$))/i],[PR.PR_PUNCTUATION,/^[^\t\n\r \xA0\"\'\w]+/]]),["fs","ml"]);PR.registerLangHandler(PR.createSimpleLexer([],[]),["none"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_STRING,/^(?:\'(?:[^\'\r\n]|\\.)*(?:\'|$))/,null,"'"],[PR.PR_PLAIN,/^\s+/,null," \r\n\t\u00a0"]],[[PR.PR_COMMENT,/^(?:\/\/[^\r\n]*)|\(\*[\s\S]*?(?:\*\)|$)|^\{[\s\S]*?(?:\}|$)/,null],[PR.PR_KEYWORD,/^(?:AND|ARRAY|AS|ASM|BEGIN|CASE|CLASS|CONST|CONSTRUCTOR|DESTRUCTOR|DISPINTERFACE|DIV|DO|DOWNTO|ELSE|END|EXCEPT|EXPORTS|FILE|FINALIZATION|FINALLY|FOR|FUNCTION|GOTO|IF|IMPLEMENTATION|IN|INHERITED|INITIALIZATION|INLINE|INTERFACE|IS|LABEL|LIBRARY|MOD|NIL|NOT|OBJECT|OF|OR|PACKED|PROCEDURE|PROGRAM|PROPERTY|RAISE|RECORD|REPEAT|RESOURCESTRING|SET|SHL|SHR|STRING|THEN|THREADVAR|TO|TRY|TYPE|UNIT|UNTIL|USES|VAR|WHILE|WITH|XOR)\b/i,
null],[PR.PR_LITERAL,/^(?:true|false|self|nil)/i,null],[PR.PR_PLAIN,/^[a-z][a-z0-9]*/i,null],[PR.PR_LITERAL,/^(?:\$[a-f0-9]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?)/i,null,"0123456789"],[PR.PR_PUNCTUATION,/^.[^\s\w\.$@\'\/]*/,null]]),["pascal"]);
PR.registerLangHandler(PR.sourceDecorator({keywords:"bytes,default,double,enum,extend,extensions,false,group,import,max,message,option,optional,package,repeated,required,returns,rpc,service,syntax,to,true",types:/^(bool|(double|s?fixed|[su]?int)(32|64)|float|string)\b/,cStyleComments:!0}),["proto"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^(?:"(?:(?:""(?:""?(?!")|[^\\"]|\\.)*"{0,3})|(?:[^"\r\n\\]|\\.)*"?))/,null,'"'],[PR.PR_LITERAL,/^`(?:[^\r\n\\`]|\\.)*`?/,null,"`"],[PR.PR_PUNCTUATION,/^[!#%&()*+,\-:;<=>?@\[\\\]^{|}~]+/,null,"!#%&()*+,-:;<=>?@[\\]^{|}~"]],[[PR.PR_STRING,/^'(?:[^\r\n\\']|\\(?:'|[^\r\n']+))'/],[PR.PR_LITERAL,/^'[a-zA-Z_$][\w$]*(?!['$\w])/],[PR.PR_KEYWORD,/^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/],
[PR.PR_LITERAL,/^(?:true|false|null|this)\b/],[PR.PR_LITERAL,/^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i],[PR.PR_TYPE,/^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],[PR.PR_PLAIN,/^[$a-zA-Z_][\w$]*/],[PR.PR_COMMENT,/^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],[PR.PR_PUNCTUATION,/^(?:\.+|\/)/]]),["scala"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],[PR.PR_KEYWORD,/^(?:ADD|ALL|ALTER|AND|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONNECT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOLLOWING|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|MATCH|MATCHED|MERGE|NATURAL|NATIONAL|NOCHECK|NONCLUSTERED|NOCYCLE|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PARTITION|PERCENT|PIVOT|PLAN|PRECEDING|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|ROWS?|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|START|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNBOUNDED|UNION|UNIQUE|UNPIVOT|UPDATE|UPDATETEXT|USE|USER|USING|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WITHIN|WRITETEXT|XML)(?=[^\w-]|$)/i,
null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^[a-z_][\w-]*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),["sql"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_COMMENT,/^%[^\r\n]*/,null,"%"]],[[PR.PR_KEYWORD,/^\\[a-zA-Z@]+/],[PR.PR_KEYWORD,/^\\./],[PR.PR_TYPE,/^[$&]/],[PR.PR_LITERAL,/[+-]?(?:\.\d+|\d+(?:\.\d*)?)(cm|em|ex|in|pc|pt|bp|mm)/i],[PR.PR_PUNCTUATION,/^[{}()\[\]=]+/]]),["latex","tex"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0\u2028\u2029]+/,null,"\t\n\r \u00a0\u2028\u2029"],[PR.PR_STRING,/^(?:[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})(?:[\"\u201C\u201D]c|$)|[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})*(?:[\"\u201C\u201D]|$))/i,null,'"\u201c\u201d'],[PR.PR_COMMENT,/^[\'\u2018\u2019](?:_(?:\r\n?|[^\r]?)|[^\r\n_\u2028\u2029])*/,null,"'\u2018\u2019"]],[[PR.PR_KEYWORD,/^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\b/i,
null],[PR.PR_COMMENT,/^REM\b[^\r\n\u2028\u2029]*/i],[PR.PR_LITERAL,/^(?:True\b|False\b|Nothing\b|\d+(?:E[+\-]?\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\d*\.\d+(?:E[+\-]?\d+)?[FRD]?|#\s+(?:\d+[\-\/]\d+[\-\/]\d+(?:\s+\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)?|\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)\s+#)/i],[PR.PR_PLAIN,/^(?:(?:[a-z]|_\w)\w*(?:\[[%&@!#]+\])?|\[(?:[a-z]|_\w)\w*\])/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \"\'\[\]\xA0\u2018\u2019\u201C\u201D\u2028\u2029]+/],[PR.PR_PUNCTUATION,/^(?:\[|\])/]]),["vb",
"vbs"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"]],[[PR.PR_STRING,/^(?:[BOX]?"(?:[^\"]|"")*"|'.')/i],[PR.PR_COMMENT,/^--[^\r\n]*/],[PR.PR_KEYWORD,/^(?:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)(?=[^\w-]|$)/i,null],
[PR.PR_TYPE,/^(?:bit|bit_vector|character|boolean|integer|real|time|string|severity_level|positive|natural|signed|unsigned|line|text|std_u?logic(?:_vector)?)(?=[^\w-]|$)/i,null],[PR.PR_TYPE,/^\'(?:ACTIVE|ASCENDING|BASE|DELAYED|DRIVING|DRIVING_VALUE|EVENT|HIGH|IMAGE|INSTANCE_NAME|LAST_ACTIVE|LAST_EVENT|LAST_VALUE|LEFT|LEFTOF|LENGTH|LOW|PATH_NAME|POS|PRED|QUIET|RANGE|REVERSE_RANGE|RIGHT|RIGHTOF|SIMPLE_NAME|STABLE|SUCC|TRANSACTION|VAL|VALUE)(?=[^\w-]|$)/i,null],[PR.PR_LITERAL,/^\d+(?:_\d+)*(?:#[\w\\.]+#(?:[+\-]?\d+(?:_\d+)*)?|(?:\.\d+(?:_\d+)*)?(?:E[+\-]?\d+(?:_\d+)*)?)/i],
[PR.PR_PLAIN,/^(?:[a-z]\w*|\\[^\\]*\\)/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0\-\"\']*/]]),["vhdl","vhd"]);StackExchange.prettify={applyCodeStyling:window.prettyPrint};