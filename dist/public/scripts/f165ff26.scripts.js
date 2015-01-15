!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(!this.transitioning&&!this.$element.hasClass("in")){if(b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in"),d&&d.length){if(e=d.data("collapse"),e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[b](this.$element[0][c])}},hide:function(){var b;!this.transitioning&&this.$element.hasClass("in")&&(b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0))},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[null!==a?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){"show"==c.type&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c),c.isDefaultPrevented()||(this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=a.extend({},a.fn.collapse.defaults,d.data(),"object"==typeof c&&c);e||d.data("collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":d.data();d[a(e).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(e).collapse(f)})}(window.jQuery),!function(a){"use strict";a(function(){a.support.transition=function(){var a=function(){var a,b=document.createElement("bootstrap"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(a in c)if(void 0!==b.style[a])return c[a]}();return a&&{end:a}}()})}(window.jQuery);var websiteApp=angular.module("websiteApp",["ngRoute","formsAngular","ui.date","ngGrid","ngCkeditor","ui.select2","uploadModule"]);websiteApp.config(["$routeProvider",function(a){a.otherwise({redirectTo:"/"})}]).controller("DemoCtrl",["$scope","$location","$anchorScroll",function(a,b,c){a.scrollToSection=function(a){b.hash(a),c()}}]),formsAngular.config(["cssFrameworkServiceProvider","routingServiceProvider",function(a,b){b.start({fixedRoutes:[{route:"/",options:{templateUrl:"partials/landing-page.html"}},{route:"/get-started",options:{templateUrl:"partials/get-started.html"}},{route:"/forms",options:{templateUrl:"partials/forms.html"}},{route:"/schemas",options:{templateUrl:"partials/schemas.html"}},{route:"/plugins",options:{templateUrl:"partials/plugins.html"}},{route:"/more",options:{templateUrl:"partials/more.html"}},{route:"/in-the-wild",options:{templateUrl:"partials/in-the-wild.html"}},{route:"/examples",options:{templateUrl:"partials/examples.html"}},{route:"/api-docs",options:{templateUrl:"partials/api-docs.html"}},{route:"/404",options:{templateUrl:"partials/404.html"}},{route:"/z_custom_form/new",options:{templateUrl:"partials/custom-new.html"}},{route:"/z_custom_form/:id/edit",options:{templateUrl:"partials/custom-edit.html"}},{route:"/z_custom_form/:form/new",options:{templateUrl:"partials/custom-new.html"}},{route:"/z_custom_form/:form/:id/edit",options:{templateUrl:"partials/custom-edit.html"}}],html5Mode:!1,routing:"ngroute"}),a.setOptions({framework:"bs2"})}]),websiteApp.controller("BUsingOptionsCtrl",["$scope","$data","$timeout",function(a,b,c){function d(a){var b=["#81B7DB","#C2A369","#6DDB4F","#47820C"];""!==a?angular.element(document.querySelector("#cg_f_eyeColour")).css("background-color",b[parseInt(a)]):angular.element(document.querySelector("#cg_f_eyeColour")).css("background-color","white")}a.record=b.record,b.dropDownDisplay="Custom Dropdown",a.doAlert=function(b,c){var d=b;c&&(d+="\nThe id is "+a.record._id),alert(d)},a.changeCase=function(){function b(b){for(var c in a.record)"_id"!==c&&"string"==typeof a.record[c]&&(a.record[c]="lower"===b?a.record[c].toLowerCase():a.record[c].toUpperCase())}b(a.record.surname===a.record.surname.toLowerCase()?"upper":"lower")},a.contextMenu=[{fn:a.doAlert,args:["Reading the data",!0],listing:!1,creating:!1,editing:!0,text:"Demonstrate reading the data"},{fn:a.changeCase,listing:!1,creating:!1,editing:!0,text:"Demonstrate modifying the data"},{fn:a.doAlert,args:["Big process",!1],listing:!0,creating:!1,editing:!1,text:"Run some file wide process"}],a.$on("formInputDone",function(){var b=angular.element(document.querySelector("#f_eyeColour"));b.on("change",function(a){d(a.val)}),c(function(){a.record.eyeColour&&a.record.eyeColour.id&&d(a.record.eyeColour.id)},100)})}]),websiteApp.controller("BUsingOptionsJustnameandpostcodeCtrl",["$scope","$data",function(a,b){a.record=b.record,b.modelNameDisplay="Another override",b.dropDownDisplay="Custom 2nd Level",a.contextMenu=[{fn:a.doAlert,args:["Reading the data 2",!0],listing:!1,creating:!1,editing:!0,text:"Demonstrate reading the data 2"}]}]),websiteApp.controller("DArrayExampleCtrl",["$scope","$data",function(a,b){a.disableFunctions=b.disableFunctions,a.dataEventFunctions=b.dataEventFunctions,a.record=b.record,a.disableFunctions.isDeleteDisabled=function(a,b){return b.accepted},a.dataEventFunctions.onAfterCreate=function(a){alert("Here is an example onAfterCreate event. "+JSON.stringify(a))}}]),websiteApp.controller("HDeepNestingCtrl",["$data",function(a){a.modelNameDisplay="Nesting (work in early progress - buggy)"}]),websiteApp.controller("InTheWildCtrl",["$scope",function(a){a.sites=[{url:"http://www.caremarkjobs.co.uk",img:"caremarkjobs.png",text:"Recruitment site for a small business"},{url:"https://connectedcommunitycare.org",img:"ccc.png",text:"Statutory reports for social care in Australia",tags:["Login Required"]},{img:"plait.png",text:"Mobile care planning",tags:["In development"]}]}]),websiteApp.directive("emailField",["$compile","$filter","cssFrameworkService",function(a,b,c){return{restrict:"E",replace:!0,priority:1,compile:function(){return function(d,e,f){d.$watch(f.formInput,function(){var g,h=d[f.schema];"bs2"===c.framework()?(g='<div class="control-group" id="cg_'+h.id+'">',h.label||(h.label=b("titleCase")(h.name)),""!==h.label&&(g+='<label class="control-label" for="'+h.id+'">'+h.label+"</label>"),g+='<div class="controls"><div class="input-prepend"><span class="add-on">@</span><input type="email" ng-model="record.'+h.name+'" id="'+h.id+'" name="'+h.id+'" /></div></div>',g+="</div>"):(g='<div class="form-group" id="cg_'+h.id+'">',h.label||(h.label=b("titleCase")(h.name)),""!==h.label&&(g+='<label class="col-sm-2" for="'+h.id+'">'+h.label+"</label>"),g+='<div class="col-sm-10"><div class="col-xs-4"><div class="input-group"><span class="input-group-addon input-sm">@</span><input type="email" class="form-control input-sm" ng-model="record.'+h.name+'" id="'+h.id+'" name="'+h.id+'" /></div></div></div>',g+="</div>"),e.replaceWith(a(g)(d))})}}}}]),websiteApp.directive("affix",["$compile","cssFrameworkService",function(a,b){return{restrict:"E",replace:!0,templateUrl:"/scripts/template/affix-"+b.framework()+".html",compile:function(){var b=$("body"),c=[];return{post:function(d,e){d.affixes=c,$(".affix-section",b).find("section").each(function(){var b=$(this);c.push({id:b.attr("id"),name:b.attr("name")}),a(e)(d)})}}}}}]).directive("affixScroll",["$window",function(a){return{link:function(b,c){var d,e=80,f=c.offset().top-e,g=f+c.height()-e;angular.element(a).on("scroll.affix-scroll",function(){var b=c.attr("id");if(angular.isDefined(a.pageYOffset))d=a.pageYOffset;else{var e=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;d=e.scrollTop}var h=$("li#"+b+"Opt");d>f&&g>d?h.hasClass("active")||h.addClass("active"):h.hasClass("active")&&h.removeClass("active")})}}}]).directive("uiScrollfix",["$window",function(a){return{require:"^?uiScrollfixTarget",link:function(b,c,d,e){function f(){var b;if(angular.isDefined(a.pageYOffset))b=a.pageYOffset;else{var e=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;b=e.scrollTop}!c.hasClass("ui-scrollfix")&&b>d.uiScrollfix?c.addClass("ui-scrollfix"):c.hasClass("ui-scrollfix")&&b<d.uiScrollfix&&c.removeClass("ui-scrollfix")}var g=c[0].offsetTop,h=e&&e.$element||angular.element(a);d.uiScrollfix?"string"==typeof d.uiScrollfix&&("-"===d.uiScrollfix.charAt(0)?d.uiScrollfix=g-parseFloat(d.uiScrollfix.substr(1)):"+"===d.uiScrollfix.charAt(0)&&(d.uiScrollfix=g+parseFloat(d.uiScrollfix.substr(1)))):d.uiScrollfix=g,h.on("scroll",f),b.$on("$destroy",function(){h.off("scroll",f)})}}}]).directive("uiScrollfixTarget",[function(){return{controller:["$element",function(a){this.$element=a}]}}]);