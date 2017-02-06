var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var a=/\blang(?:uage)?-(\w+)\b/i,b=0,c=_self.Prism={util:{encode:function(a){return a instanceof d?new d(a.type,c.util.encode(a.content),a.alias):"Array"===c.util.type(a)?a.map(c.util.encode):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++b}),a.__id},clone:function(a){var b=c.util.type(a);switch(b){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=c.util.clone(a[e]));return d;case"Array":return a.map&&a.map(function(a){return c.util.clone(a)})}return a}},languages:{extend:function(a,b){var d=c.util.clone(c.languages[a]);for(var e in b)d[e]=b[e];return d},insertBefore:function(a,b,d,e){e=e||c.languages;var f=e[a];if(2==arguments.length){d=arguments[1];for(var g in d)d.hasOwnProperty(g)&&(f[g]=d[g]);return f}var h={};for(var i in f)if(f.hasOwnProperty(i)){if(i==b)for(var g in d)d.hasOwnProperty(g)&&(h[g]=d[g]);h[i]=f[i]}return c.languages.DFS(c.languages,function(b,c){c===e[a]&&b!=a&&(this[b]=h)}),e[a]=h},DFS:function(a,b,d,e){e=e||{};for(var f in a)a.hasOwnProperty(f)&&(b.call(a,f,a[f],d||f),"Object"!==c.util.type(a[f])||e[c.util.objId(a[f])]?"Array"!==c.util.type(a[f])||e[c.util.objId(a[f])]||(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,f,e)):(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,null,e)))}},plugins:{},highlightAll:function(a,b){var d={callback:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",d);for(var e,f=d.elements||document.querySelectorAll(d.selector),g=0;e=f[g++];)c.highlightElement(e,a===!0,d.callback)},highlightElement:function(b,d,e){for(var f,g,h=b;h&&!a.test(h.className);)h=h.parentNode;h&&(f=(h.className.match(a)||[,""])[1],g=c.languages[f]),b.className=b.className.replace(a,"").replace(/\s+/g," ")+" language-"+f,h=b.parentNode,/pre/i.test(h.nodeName)&&(h.className=h.className.replace(a,"").replace(/\s+/g," ")+" language-"+f);var i=b.textContent,j={element:b,language:f,grammar:g,code:i};if(c.hooks.run("before-sanity-check",j),!j.code||!j.grammar)return void c.hooks.run("complete",j);if(c.hooks.run("before-highlight",j),d&&_self.Worker){var k=new Worker(c.filename);k.onmessage=function(a){j.highlightedCode=a.data,c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(j.element),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)},k.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else j.highlightedCode=c.highlight(j.code,j.grammar,j.language),c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(b),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)},highlight:function(a,b,e){var f=c.tokenize(a,b);return d.stringify(c.util.encode(f),e)},tokenize:function(a,b,d){var e=c.Token,f=[a],g=b.rest;if(g){for(var h in g)b[h]=g[h];delete b.rest}a:for(var h in b)if(b.hasOwnProperty(h)&&b[h]){var i=b[h];i="Array"===c.util.type(i)?i:[i];for(var j=0;j<i.length;++j){var k=i[j],l=k.inside,m=!!k.lookbehind,n=!!k.greedy,o=0,p=k.alias;k=k.pattern||k;for(var q=0;q<f.length;q++){var r=f[q];if(f.length>a.length)break a;if(!(r instanceof e)){k.lastIndex=0;var s=k.exec(r),t=1;if(!s&&n&&q!=f.length-1){var u=f[q+1].matchedStr||f[q+1],v=r+u;if(q<f.length-2&&(v+=f[q+2].matchedStr||f[q+2]),k.lastIndex=0,s=k.exec(v),!s)continue;var w=s.index+(m?s[1].length:0);if(w>=r.length)continue;var x=s.index+s[0].length,y=r.length+u.length;if(t=3,x<=y){if(f[q+1].greedy)continue;t=2,v=v.slice(0,y)}r=v}if(s){m&&(o=s[1].length);var w=s.index+o,s=s[0].slice(o),x=w+s.length,z=r.slice(0,w),A=r.slice(x),B=[q,t];z&&B.push(z);var C=new e(h,l?c.tokenize(s,l):s,p,s,n);B.push(C),A&&B.push(A),Array.prototype.splice.apply(f,B)}}}}}return f},hooks:{all:{},add:function(a,b){var d=c.hooks.all;d[a]=d[a]||[],d[a].push(b)},run:function(a,b){var d=c.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(b)}}},d=c.Token=function(a,b,c,d,e){this.type=a,this.content=b,this.alias=c,this.matchedStr=d||null,this.greedy=!!e};if(d.stringify=function(a,b,e){if("string"==typeof a)return a;if("Array"===c.util.type(a))return a.map(function(c){return d.stringify(c,b,a)}).join("");var f={type:a.type,content:d.stringify(a.content,b,e),tag:"span",classes:["token",a.type],attributes:{},language:b,parent:e};if("comment"==f.type&&(f.attributes.spellcheck="true"),a.alias){var g="Array"===c.util.type(a.alias)?a.alias:[a.alias];Array.prototype.push.apply(f.classes,g)}c.hooks.run("wrap",f);var h="";for(var i in f.attributes)h+=(h?" ":"")+i+'="'+(f.attributes[i]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+h+">"+f.content+"</"+f.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(a){var b=JSON.parse(a.data),d=b.language,e=b.code,f=b.immediateClose;_self.postMessage(c.highlight(e,c.languages[d],d)),f&&_self.close()},!1),_self.Prism):_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(c.filename=e.src,document.addEventListener&&!e.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",c.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.languages.markup&&(Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",function(a){a.selector+=", .lang-markup script[type='text/plain'], .language-markup script[type='text/plain'], script[type='text/plain'].lang-markup, script[type='text/plain'].language-markup"}),Prism.hooks.add("before-sanity-check",function(a){if("markup"==a.language){if(a.element.matches("script[type='text/plain']")){var b=document.createElement("code"),c=document.createElement("pre");return c.className=b.className=a.element.className,a.code=a.code.replace(/&lt;\/script(>|&gt;)/gi,"</script>"),b.textContent=a.code,c.appendChild(b),a.element.parentNode.replaceChild(c,a.element),void(a.element=b)}var c=a.element.parentNode;!a.code&&c&&"pre"==c.nodeName.toLowerCase()&&a.element.childNodes.length&&"#comment"==a.element.childNodes[0].nodeName&&(a.element.textContent=a.code=a.element.childNodes[0].textContent)}}))}(),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(!this.transitioning&&!this.$element.hasClass("in")){if(b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in"),d&&d.length){if(e=d.data("collapse"),e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[b](this.$element[0][c])}},hide:function(){var b;!this.transitioning&&this.$element.hasClass("in")&&(b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0))},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[null!==a?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){"show"==c.type&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c),c.isDefaultPrevented()||(this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=a.extend({},a.fn.collapse.defaults,d.data(),"object"==typeof c&&c);e||d.data("collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":d.data();d[a(e).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(e).collapse(f)})}(window.jQuery),!function(a){"use strict";a(function(){a.support.transition=function(){var a=function(){var a,b=document.createElement("bootstrap"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(a in c)if(void 0!==b.style[a])return c[a]}();return a&&{end:a}}()})}(window.jQuery);var websiteApp=angular.module("websiteApp",["ngRoute","formsAngular","ui.date","ngGrid","ngCkeditor","ui.select2","fng.uiSelect","uploadModule","door3.css"]);websiteApp.directive("ngPrism",[function(){return{restrict:"A",link:function(a,b,c){b.ready(function(){b[0].className.indexOf("language-markup")!==-1&&(b[0].innerHTML="<!--\n"+b[0].innerHTML.replace(" ng-scope","")+"\n-->"),Prism.highlightElement(b[0])})}}}]),websiteApp.config(["$routeProvider",function(a){a.otherwise({redirectTo:"/"})}]).controller("DemoCtrl",["$scope","$location","$anchorScroll",function(a,b,c){a.scrollToSection=function(a){b.hash(a),c()}}]),websiteApp.frameworks=["bs2","bs3"],websiteApp.defaultFramework="bs2",formsAngular.config(["$locationProvider","cssFrameworkServiceProvider","routingServiceProvider",function(a,b,c){c.start({fixedRoutes:[{route:"/",options:{templateUrl:"partials/landing-page.html"}},{route:"/get-started",options:{templateUrl:"partials/get-started.html"}},{route:"/forms",options:{templateUrl:"partials/forms.html"}},{route:"/schemas",options:{templateUrl:"partials/schemas.html"}},{route:"/plugins",options:{templateUrl:"partials/plugins.html"}},{route:"/more",options:{templateUrl:"partials/more.html"}},{route:"/in-the-wild",options:{templateUrl:"partials/in-the-wild.html"}},{route:"/supported-by",options:{templateUrl:"partials/supported-by.html"}},{route:"/examples",options:{templateUrl:"partials/examples.html"}},{route:"/api-docs",options:{templateUrl:"partials/api-docs.html"}},{route:"/404",options:{templateUrl:"partials/404.html"}},{route:"/z_custom_form/new",options:{templateUrl:"partials/custom-new.html"}},{route:"/z_custom_form/:id/edit",options:{templateUrl:"partials/custom-edit.html"}},{route:"/z_custom_form/:form/new",options:{templateUrl:"partials/custom-new.html"}},{route:"/z_custom_form/:form/:id/edit",options:{templateUrl:"partials/custom-edit.html"}}],routing:"ngroute",html5Mode:!1,variants:websiteApp.frameworks}),b.setOptions({framework:websiteApp.defaultFramework})}]),websiteApp.css={bs2:["styles/main-bs2.css","bower_components/select2-bootstrap-css-1-2/select2-bootstrap.css"],bs3:["styles/main-bs3.css","bower_components/select2-bootstrap-css-1-3/select2-bootstrap.css"]},websiteApp.cssLoaded=!1,websiteApp.run(["$location","$css","cssFrameworkService",function(a,b,c){if(9e3===a.$$port){var d,e=a.path().slice(1);websiteApp.frameworks.indexOf(e)!==-1?(c.setFrameworkForDemoWebsite(e),d=a.path().slice(1+e.length),d[0]||(d="/")):e=websiteApp.defaultFramework,b.add(websiteApp.css[e]),d&&a.path(d)}else b.add(["styles/201702061144app.css"])}]).controller("CSSSwitchCtrl",["$location","$scope","cssFrameworkService","$css",function(a,b,c,d){9e3===a.$$port&&b.$on("fngFormLoadStart",function(a,b){b.variant&&b.variant!==c.framework()&&(d.remove(websiteApp.css[c.framework()]),c.setFrameworkForDemoWebsite(b.variant),d.add(websiteApp.css[c.framework()]))})}]),websiteApp.controller("BEnhancedSchemaCtrl",["$scope","$data","$timeout",function(a,b){function c(a){var b=["#81B7DB","#C2A369","#6DDB4F","#47820C"];""!==a?angular.element(document.querySelector("#cg_f_eyeColour")).css("background-color",b[parseInt(a)]):angular.element(document.querySelector("#cg_f_eyeColour")).css("background-color","white")}a.record=b.record,b.dropDownDisplay="Custom Dropdown",a.doAlert=function(b,c){var d=b;c&&(d+="\nThe id is "+a.record._id),alert(d)},a.changeCase=function(){function b(b){for(var c in a.record)"_id"!==c&&"string"==typeof a.record[c]&&("lower"===b?a.record[c]=a.record[c].toLowerCase():a.record[c]=a.record[c].toUpperCase())}b(a.record.surname===a.record.surname.toLowerCase()?"upper":"lower")},a.contextMenu=[{fn:a.doAlert,args:["Reading the data",!0],listing:!1,creating:!1,editing:!0,text:"Demonstrate reading the data"},{fn:a.changeCase,listing:!1,creating:!1,editing:!0,text:"Demonstrate modifying the data"},{fn:a.doAlert,args:["Big process",!1],listing:!0,creating:!1,editing:!1,text:"Run some file wide process"}],a.onAllReady=function(){var b=angular.element(document.querySelector("#f_eyeColour"));b.on("change",function(a){c(a.val)}),a.record.eyeColour&&a.record.eyeColour.id&&c(a.record.eyeColour.id)}}]),websiteApp.controller("BEnhancedSchemaJustnameandpostcodeCtrl",["$scope","$data",function(a,b){a.record=b.record,b.modelNameDisplay="Another override",b.dropDownDisplay="Custom 2nd Level",a.contextMenu=[{divider:!0},{fn:a.doAlert,args:["Reading the data 2",!0],listing:!1,creating:!1,editing:!0,text:"Demonstrate reading the data 2"}]}]),websiteApp.controller("DArrayExampleCtrl",["$scope","$data",function(a,b){a.disableFunctions=b.disableFunctions,a.dataEventFunctions=b.dataEventFunctions,a.record=b.record,a.disableFunctions.isDeleteDisabled=function(a,b){return b.accepted},a.dataEventFunctions.onAfterCreate=function(a){alert("Here is an example onAfterCreate event. "+JSON.stringify(a))}}]),websiteApp.controller("HDeepNestingCtrl",["$data",function(a){a.modelNameDisplay="Nesting (work in early progress - buggy)"}]),websiteApp.controller("InTheWildCtrl",["$scope",function(a){a.sites=[{url:"http://www.caremarkjobs.co.uk",img:"caremarkjobs.png",text:"Recruitment site for a small business"},{url:"https://connectedcommunitycare.org",img:"ccc.png",text:"Statutory reports for social care in Australia",tags:["Login Required"]},{img:"plait.png",text:"Mobile care planning",tags:["In development"]}]}]),websiteApp.directive("emailField",["$compile","$filter","pluginHelper","formMarkupHelper","cssFrameworkService",function(a,b,c,d,e){return{restrict:"E",replace:!0,priority:1,compile:function(){return function(b,f,g){var h,i=c.extractFromAttr(g,"fngUiSelect");h=c.buildInputMarkup(b,g.model,i.info,i.options,!1,!1,function(a){var b={};return"bs2"===e.framework()?(b.prepend='<div class="input-prepend"><span class="add-on">@</span>',b.append="</div>"):(b.prepend='<div class="input-group"><div class="input-group-addon '+a.compactClass+'">@</div>',b.append="</div>"),b.prepend+d.generateSimpleInput(a.common+d.addTextInputMarkup(a,i.info,""),i.info,i.options)+b.append}),f.replaceWith(a(h)(b))}}}}]),websiteApp.directive("affix",["$compile","cssFrameworkService",function(a,b){return{restrict:"E",replace:!0,templateUrl:"/scripts/template/affix-"+b.framework()+".html",compile:function(){var b=$("body"),c=[];return{post:function(d,e){d.affixes=c,$(".affix-section",b).find("section").each(function(){var b=$(this);c.push({id:b.attr("id"),name:b.attr("name")}),a(e)(d)})}}}}}]).directive("affixScroll",["$window",function(a){return{link:function(b,c){var d,e=80,f=c.offset().top-e,g=f+c.height()-e;angular.element(a).on("scroll.affix-scroll",function(){var b=c.attr("id");if(angular.isDefined(a.pageYOffset))d=a.pageYOffset;else{var e=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;d=e.scrollTop}var h=$("li#"+b+"Opt");f<d&&d<g?h.hasClass("active")||h.addClass("active"):h.hasClass("active")&&h.removeClass("active")})}}}]).directive("uiScrollfix",["$window",function(a){return{require:"^?uiScrollfixTarget",link:function(b,c,d,e){function f(){var b;if(angular.isDefined(a.pageYOffset))b=a.pageYOffset;else{var e=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;b=e.scrollTop}!c.hasClass("ui-scrollfix")&&b>d.uiScrollfix?c.addClass("ui-scrollfix"):c.hasClass("ui-scrollfix")&&b<d.uiScrollfix&&c.removeClass("ui-scrollfix")}var g=c[0].offsetTop,h=e&&e.$element||angular.element(a);d.uiScrollfix?"string"==typeof d.uiScrollfix&&("-"===d.uiScrollfix.charAt(0)?d.uiScrollfix=g-parseFloat(d.uiScrollfix.substr(1)):"+"===d.uiScrollfix.charAt(0)&&(d.uiScrollfix=g+parseFloat(d.uiScrollfix.substr(1)))):d.uiScrollfix=g,h.on("scroll",f),b.$on("$destroy",function(){h.off("scroll",f)})}}}]).directive("uiScrollfixTarget",[function(){return{controller:["$element",function(a){this.$element=a}]}}]),websiteApp.controller("FriendCtrl",["$scope","$routeParams","$location","$http",function(a,b,c,d){a.frdShowAdd=!1,a.frdNewFriend={},a.selectedFriend=null,a.frdHideDetails=function(){a.record.friendList&&a.record.friendList.length>0?(a.frdPopupName="Move mouse over a friend",a.frdPopupComments="to see their details"):(a.record.surname?a.frdPopupName=(a.record.forename||"")+" "+a.record.surname+" is Norman No Mates!":a.frdPopupName="",a.frdPopupComments="Click on the button ---> to add a friend")},a.$on("fngCancel",function(){_.find(a.record.friendList,function(b){return b.friend===a.selectedFriend})||(a.selectedFriend=null,a.frdHideDetails())}),a.showFriendDetails=function(b){d.get("/api/a_unadorned_schema/"+a.textToId(b.friend),{cache:!0}).then(function(c){var d=c.data;d&&d.success!==!1?(a.selectedFriend=b,a.frdPopupName=d.forename+" "+d.surname,a.frdPopupComments=b.comment):a.frdPopupName="This friend does not exist - someone may have deleted the record"}).error(function(){a.popupName="Error reading friend details",a.popupComments="Please try again"})},a.frdRemoveFriend=function(b){a.selectedFriend=null,a.frdHideDetails(),a.record.friendList.splice(b,1),a.baseForm.$setDirty()},a.selectedClass=function(b){return b===a.selectedFriend?"selectedFriend":""},a.frdShowAddForm=function(){a.frdShowAdd=!0,a.frdNewFriend={}},a.textToId=function(b){return a.f_friendList_friend_ids[a.f_friendList_friendOptions.indexOf(b)]},a.frdSaveFriend=function(){a.record.friendList=a.record.friendList||[],a.record.friendList.push(a.newFriend.friendList),a.selectedFriend=a.newFriend.friendList,a.frdShowAdd=!1,a.newFriend={},a.baseForm.$setDirty()},a.frdHideDetails()}]).directive("friends",function(){return{restrict:"E",replace:!0,priority:1,controller:"FriendCtrl",templateUrl:"scripts/template/friends.html"}});