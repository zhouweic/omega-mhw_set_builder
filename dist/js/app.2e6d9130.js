(function(e){function l(l){for(var a,n,i=l[0],u=l[1],s=l[2],c=0,b=[];c<i.length;c++)n=i[c],o[n]&&b.push(o[n][0]),o[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(l);while(b.length)b.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,l=0;l<r.length;l++){for(var t=r[l],a=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(a=!1)}a&&(r.splice(l--,1),e=n(n.s=t[0]))}return e}var a={},o={app:0},r=[];function n(l){if(a[l])return a[l].exports;var t=a[l]={i:l,l:!1,exports:{}};return e[l].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=a,n.d=function(e,l,t){n.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,l){if(1&l&&(e=n(e)),8&l)return e;if(4&l&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var a in e)n.d(t,a,function(l){return e[l]}.bind(null,a));return t},n.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(l,"a",l),l},n.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},n.p="/omega-mhw_set_builder/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=l,i=i.slice();for(var s=0;s<i.length;s++)l(i[s]);var p=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,l,t){e.exports=t("56d7")},"32df":function(e,l,t){},"35f8":function(e,l,t){},"56d7":function(e,l,t){"use strict";t.r(l);var a=t("2b0e"),o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{attrs:{id:"app"}},[t("el-container",[t("el-main",[t("standard-set-builder")],1)],1)],1)},r=[],n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form",{attrs:{model:e.builder,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"武器"}},[t("el-select",{attrs:{placeholder:"请选择武器"},model:{value:e.builder.weapon,callback:function(l){e.$set(e.builder,"weapon",l)},expression:"builder.weapon"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1),t("el-form-item",{attrs:{label:"头"}},[t("el-select",{attrs:{placeholder:"请选择头"},model:{value:e.builder.head,callback:function(l){e.$set(e.builder,"head",l)},expression:"builder.head"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1),t("el-form-item",{attrs:{label:"胸"}},[t("el-select",{attrs:{placeholder:"请选择胸"},model:{value:e.builder.chest,callback:function(l){e.$set(e.builder,"chest",l)},expression:"builder.chest"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1),t("el-form-item",{attrs:{label:"手"}},[t("el-select",{attrs:{placeholder:"请选择手"},model:{value:e.builder.hand,callback:function(l){e.$set(e.builder,"hand",l)},expression:"builder.hand"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1),t("el-form-item",{attrs:{label:"腰"}},[t("el-select",{attrs:{placeholder:"请选择腰"},model:{value:e.builder.waist,callback:function(l){e.$set(e.builder,"waist",l)},expression:"builder.waist"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1),t("el-form-item",{attrs:{label:"腿"}},[t("el-select",{attrs:{placeholder:"请选择腿"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1),t("el-form-item",{attrs:{label:"护石"}},[t("el-select",{attrs:{placeholder:"请选择护石"},model:{value:e.builder.stone,callback:function(l){e.$set(e.builder,"stone",l)},expression:"builder.stone"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1)],1)],1),t("el-col",{attrs:{span:16}},[t("el-form",{attrs:{"label-position":"top"}},[t("el-form-item",{attrs:{label:"1级槽"}},[t("el-select",{attrs:{placeholder:"请选择1级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择1级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择1级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择1级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择1级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择1级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择1级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1),t("el-form-item",{attrs:{label:"2级槽"}},[t("el-select",{attrs:{placeholder:"请选择2级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择2级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择2级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择2级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择2级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1),t("el-form-item",{attrs:{label:"3级槽"}},[t("el-select",{attrs:{placeholder:"请选择3级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1),t("el-select",{attrs:{placeholder:"请选择3级槽珠子"},model:{value:e.builder.leg,callback:function(l){e.$set(e.builder,"leg",l)},expression:"builder.leg"}},[t("el-option",{attrs:{label:"武器一",value:"weapon1"}}),t("el-option",{attrs:{label:"武器二",value:"weapon2"}})],1)],1)],1)],1),t("el-col",{attrs:{span:24}},[t("h1",[e._v("----------TODO: 放置配装信息---------")])])],1)},i=[],u={name:"StandardSetBuilder",data:function(){return{builder:{}}}},s=u,p=(t("9593"),t("2877")),c=Object(p["a"])(s,n,i,!1,null,null,null);c.options.__file="standard-set-builder.vue";var b=c.exports,d={name:"SetBuilder",components:{StandardSetBuilder:b}},v=d,f=(t("9707"),Object(p["a"])(v,o,r,!1,null,null,null));f.options.__file="SetBuilder.vue";var w=f.exports,m=t("5c96"),g=t.n(m);t("0fae");a["default"].use(g.a),a["default"].config.productionTip=!1,new a["default"]({render:e=>e(w)}).$mount("#app")},9593:function(e,l,t){"use strict";var a=t("35f8"),o=t.n(a);o.a},9707:function(e,l,t){"use strict";var a=t("32df"),o=t.n(a);o.a}});
//# sourceMappingURL=app.2e6d9130.js.map