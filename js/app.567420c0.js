(function(){"use strict";var n={4094:function(n,e,t){var r=t(8935),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("mainPage")],1)},i=[],s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"mainPage"},[t("div",{attrs:{id:"main"}},[t("div",{attrs:{id:"mask"}},[t("div",{attrs:{id:"info"}},[t("div",{attrs:{id:"pad"}},[t("div",{attrs:{id:"sentence"}},[n._v(n._s(n.sentence))]),t("br"),t("div",{attrs:{id:"from"}},[n._v("——"+n._s(n.sentence_from))])])])])])])},c=[],a=t(8342),u=t.n(a),f={name:"mainPage",data(){return{sentences:[],sentence:"",sentence_id:"",sentence_from:""}},props:{msg:String},mounted(){const n=this;u().getJSON("./sentences.json",(function(e){n.sentences=e;let t=Math.floor(Math.random()*n.sentences.length);n.sentence=e[t].name,n.sentence_id=e[t]._id.sid,n.sentence_from=e[t].from,console.log(n.sentence),console.log(n.sentence_id),console.log(n.sentence_from)}))}},l=f,d=t(1001),p=(0,d.Z)(l,s,c,!1,null,"319f5616",null),v=p.exports,m={name:"App",components:{mainPage:v}},h=m,g=(0,d.Z)(h,o,i,!1,null,null,null),_=g.exports;r.Z.config.productionTip=!1,new r.Z({render:n=>n(_)}).$mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,i){if(!r){var s=1/0;for(f=0;f<n.length;f++){r=n[f][0],o=n[f][1],i=n[f][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(c=!1,i<s&&(s=i));if(c){n.splice(f--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[r,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,s=r[0],c=r[1],a=r[2],u=0;if(s.some((function(e){return 0!==n[e]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(a)var f=a(t)}for(e&&e(r);u<s.length;u++)i=s[u],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(f)},r=self["webpackChunkpoems"]=self["webpackChunkpoems"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4094)}));r=t.O(r)})();
//# sourceMappingURL=app.567420c0.js.map