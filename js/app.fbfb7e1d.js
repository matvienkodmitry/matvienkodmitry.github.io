(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4a7bd58e"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},1:function(e,t){},"121f":function(e,t,a){e.exports=a.p+"img/pic02.cbcb3462.jpg"},"1abc":function(e,t,a){},"1af5":function(e,t,a){"use strict";var n=a("1abc"),r=a.n(n);r.a},2247:function(e,t,a){},"30b0":function(e,t,a){},3439:function(e,t,a){},3625:function(e,t,a){e.exports=a.p+"img/bg.c0ff5b73.jpg"},"375f":function(e,t,a){"use strict";var n=a("bbb3"),r=a.n(n);r.a},"3c6f":function(e,t,a){e.exports=a.p+"img/logo_white.ad8a2e9d.svg"},"420b":function(e,t,a){},"4c48":function(e,t,a){"use strict";var n=a("bbe3"),r=a.n(n);r.a},5268:function(e,t,a){"use strict";var n=a("7423"),r=a.n(n);r.a},"5c0b":function(e,t,a){"use strict";var n=a("2247"),r=a.n(n);r.a},"72a2":function(e,t,a){"use strict";var n=a("3439"),r=a.n(n);r.a},7423:function(e,t,a){},"81fb":function(e,t,a){},bbb3:function(e,t,a){},bbe3:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Home")],1)},o=[],s=a("5530"),i=(a("96cf"),a("1da1")),l=a("2f62"),c=a("e852");function u(e){var t=e.query,a=e.variables,n=e.preview,r=n?"https://graphql.datocms.com/preview":"https://graphql.datocms.com/",o=new c["GraphQLClient"](r,{headers:{authorization:"Bearer ".concat("9ae92c6be837add859e5afdb716f39")}});return o.request(t,a)}a("15f5"),a("7051");var d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"is-preload"},[a("div",{staticClass:"home-page",attrs:{id:"wrapper"}},[a("LanguageButton",{attrs:{languages:e.languages},on:{"select-language":e.onSelectLanguage}}),e.showedArticle?e._e():a("header",{staticClass:"home-page_header",attrs:{id:"header"}},[e._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"inner"},[a("h1",[e._v(e._s(e.heading1))]),a("h3",[e._v(e._s(e.heading2))]),e.typedText?[a("VueTypedJs",{ref:"typedText",attrs:{strings:e.typedText,loop:!0,showCursor:!1}},[a("p",{staticClass:"typing"})])]:e._e()],2)]),a("nav",[a("ul",{staticClass:"first-row"},[a("li",[a("a",{on:{click:function(t){return e.openArticle("Bio")}}},[e._v(e._s(["Bio","Био"][e.selectedLanguageIndex]))])]),a("li",[a("a",{on:{click:function(t){return e.openArticle("News")}}},[e._v(e._s(["News","Новости"][e.selectedLanguageIndex]))])]),a("li",[a("a",{on:{click:function(t){return e.openArticle("Photos")}}},[e._v(e._s(["Photos","Фото"][e.selectedLanguageIndex]))])]),a("li",[a("a",{on:{click:function(t){return e.openArticle("Videos")}}},[e._v(e._s(["Videos","Видео"][e.selectedLanguageIndex]))])])]),a("ul",[a("li",[a("a",{on:{click:function(t){return e.openArticle("Repertoire")}}},[e._v(e._s(["Repertoire","Репертуар"][e.selectedLanguageIndex]))])]),a("li",[a("a",{on:{click:function(t){return e.openArticle("Contacts")}}},[e._v(e._s(["Contacts","Контакты"][e.selectedLanguageIndex]))])])])])]),a("transition",{attrs:{name:"fade"}},[e.showedArticle?a("div",{attrs:{id:"main"}},[a(e.showedArticle,{tag:"component",on:{close:e.closeArticle}})],1):e._e()]),e._m(1)],1),a("div",{attrs:{id:"bg"}})])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:a("3c6f"),alt:"logo"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{attrs:{id:"footer"}},[a("p",{staticClass:"copyright"},[e._v("© Copyright: Anton Glebov")])])}],v=(a("7db0"),a("d81d"),a("b0c0"),a("e67d")),g=a.n(v),f=a("8cb8"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ArticleInstance",{attrs:{title:"Bio"},on:{close:function(t){return e.$emit("close")}}},[n("h3",[e._v(e._s(e.heading1))]),n("h5",[e._v(e._s(e.heading2))]),n("span",{staticClass:"image main"},[n("img",{attrs:{src:a("3625"),alt:""}})]),n("p",{staticClass:"text"},[e._v(" "+e._s(e.text)+" ")])])},h=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{attrs:{id:"news"}},[a("h2",{staticClass:"major"},[e._v(e._s(e.title))]),e._t("default"),a("div",{staticClass:"close",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])],2)},_=[],x={name:"ArticleInstance",props:{title:{type:String,default:""}}},y=x,P=(a("4c48"),a("2877")),j=Object(P["a"])(y,b,_,!1,null,"0ef6bb1c",null),C=j.exports,L={name:"Bio",components:{ArticleInstance:C},computed:{homePageData:function(){return this.$store.state.homePageData},heading1:function(){var e,t;return null===(e=this.homePageData)||void 0===e||null===(t=e._allBioPageHeading1Locales[this.selectedLanguageIndex])||void 0===t?void 0:t.value},heading2:function(){var e,t;return null===(e=this.homePageData)||void 0===e||null===(t=e._allBioPageHeading2Locales[this.selectedLanguageIndex])||void 0===t?void 0:t.value},text:function(){var e,t;return null===(e=this.homePageData)||void 0===e||null===(t=e._allBioPageTextLocales[this.selectedLanguageIndex])||void 0===t?void 0:t.value},selectedLanguageIndex:function(){return this.$store.state.selectedLanguageIndex}}},w=L,k=(a("1af5"),Object(P["a"])(w,m,h,!1,null,"3815be81",null)),O=k.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ArticleInstance",{attrs:{title:"Contacts"},on:{close:function(t){return e.$emit("close")}}},[a("div",{staticClass:"contact-wrap"},e._l(e.contacts,(function(t){return a("p",{staticClass:"contact"},[e._v(" "+e._s(t)+" ")])})),0),a("form",{attrs:{method:"post",action:"#"}},[a("div",{staticClass:"fields"},[a("div",{staticClass:"field half"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{attrs:{type:"text",name:"name",id:"name"}})]),a("div",{staticClass:"field half"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{attrs:{type:"text",name:"email",id:"email"}})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"message"}},[e._v("Message")]),a("textarea",{attrs:{name:"message",id:"message",rows:"4"}})])]),a("ul",{staticClass:"actions"},[a("li",[a("input",{staticClass:"primary",attrs:{type:"submit",value:"Send Message"}})]),a("li",[a("input",{attrs:{type:"reset",value:"Reset"}})])])]),a("ul",{staticClass:"icons"},[a("li",[a("a",{staticClass:"btn",attrs:{href:"tel:+79250358016"}},[a("i",{staticClass:"fa fa-phone"})])]),a("li",[a("a",{staticClass:"btn",attrs:{href:"https://www.facebook.com/100003497267910"}},[a("i",{staticClass:"icon brands fa-facebook-f"})])]),a("li",[a("a",{staticClass:"btn",attrs:{href:"https://telegram.me/DmitryMatvienko"}},[a("i",{staticClass:"fab fa-telegram"})])]),a("li",[a("a",{staticClass:"btn",attrs:{href:"mailto:d.matvienko1990@gmail.com"}},[a("i",{staticClass:"far fa-envelope"})])]),a("li",[a("a",{staticClass:"btn",attrs:{href:"viber://add?number=79250358016"}},[a("i",{staticClass:"fab fa-viber"})])])])])},$=[],A={name:"Contacts",components:{ArticleInstance:C},computed:{homePageData:function(){return this.$store.state.homePageData},contacts:function(){var e,t;return null===(e=this.homePageData)||void 0===e||null===(t=e._allContactsPageLocales[this.selectedLanguageIndex])||void 0===t?void 0:t.value},selectedLanguageIndex:function(){return this.$store.state.selectedLanguageIndex}}},T=A,D=(a("fd8e"),Object(P["a"])(T,I,$,!1,null,"5af694b1",null)),E=D.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ArticleInstance",{attrs:{title:"News"},on:{close:function(t){return e.$emit("close")}}},[n("span",{staticClass:"image main"},[n("img",{attrs:{src:a("121f"),alt:""}})]),n("p",[e._v(" Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. ")]),n("p",[e._v(" Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus. ")])])},S=[],q={name:"News",components:{ArticleInstance:C}},B=q,R=Object(P["a"])(B,H,S,!1,null,"099815fc",null),M=R.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"toggle-language"},e._l(e.languages,(function(t,n){return a("li",{key:n,class:{active:t.isSelected},on:{click:function(a){return e.$emit("select-language",t.name)}}},[e._v(" "+e._s(t.name)+" ")])})),0)},N=[],G={name:"LanguageButton",data:function(){return{}},props:{languages:{type:Array}}},J=G,W=(a("72a2"),Object(P["a"])(J,V,N,!1,null,"68f54812",null)),z=W.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ArticleInstance",{staticClass:"photos",attrs:{title:"Photos"},on:{close:function(t){return e.$emit("close")}}},[a("vue-masonry-wall",{attrs:{items:e.loadedPhotos,options:e.options},on:{append:e.append},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.item;return[a("div",{staticClass:"Item"},[a("img",{attrs:{src:t.url}})])]}}])})],1)},Q=[],U=(a("fb6a"),a("93a1")),Y={name:"Photos",components:{ArticleInstance:C,VueMasonryWall:U["a"]},data:function(){return{loadedGroup:1,photosInGroup:3,options:{width:300,padding:{default:12,1:6,2:8}}}},computed:{homePageData:function(){return this.$store.state.homePageData},photos:function(){var e,t;return null!==(e=null===(t=this.homePageData)||void 0===t?void 0:t.photosPage)&&void 0!==e?e:[]},loadedPhotos:function(){var e=this.loadedGroup*this.photosInGroup;return this.photos.slice(0,e)},photoUrls:function(){var e,t,a=null!==(e=null===(t=this.homePageData)||void 0===t?void 0:t.photosPage)&&void 0!==e?e:[];return a.map((function(e){return e.url}))}},methods:{append:function(){this.loadedGroup++,console.log("append")}}},K=Y,X=(a("d453"),Object(P["a"])(K,F,Q,!1,null,"6a0ea396",null)),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ArticleInstance",{attrs:{title:"Video"},on:{close:function(t){return e.$emit("close")}}},[a("section",[a("div",{staticClass:"videos-wrapper"},e._l(e.videos,(function(t){return a("div",{staticClass:"video-wrapper"},[a("video-player",{ref:"videoPlayer",refInFor:!0,staticClass:"video-player-box",attrs:{options:Object.assign({},e.defaultPlayerOptions,{sources:[{type:"video/youtube",src:t.videoLink.url}]}),playsinline:!0}}),a("hr"),t&&t.videoTitle?a("p",{staticClass:"description"},[e._v(" "+e._s(t.videoTitle)+" ")]):e._e()],1)})),0)])])},te=[],ae=(a("fda2"),a("d6d3"));a("e3d7");var ne={name:"Videos",components:{ArticleInstance:C,videoPlayer:ae["videoPlayer"]},data:function(){return{defaultPlayerOptions:{language:"en",fluid:!0,techOrder:["youtube"]}}},computed:{homePageData:function(){return this.$store.state.homePageData},videos:function(){var e;return null===(e=this.homePageData)||void 0===e?void 0:e.videosPage}}},re=ne,oe=(a("d746"),Object(P["a"])(re,ee,te,!1,null,"35f2d7f8",null)),se=oe.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ArticleInstance",{attrs:{title:"Repertoire"},on:{close:function(t){return e.$emit("close")}}},[n("span",{staticClass:"image main"},[n("img",{attrs:{src:a("121f"),alt:""}})]),n("p",{domProps:{innerHTML:e._s(e.markdownRepertoireText)}})])},le=[],ce=a("0e54"),ue=a.n(ce),de={name:"Repertoire",components:{ArticleInstance:C},computed:{repertoireText:function(){var e;return null===(e=this.$store.state.homePageData)||void 0===e?void 0:e.repertoire},markdownRepertoireText:function(){return ue()(this.repertoireText,{sanitize:!0})}}},pe=de,ve=Object(P["a"])(pe,ie,le,!1,null,"2d258f5e",null),ge=ve.exports,fe={name:"Home",components:{Bio:O,Contacts:E,News:M,Photos:Z,LanguageButton:z,Videos:se,Repertoire:ge,VueTypedJs:f["VueTypedJs"]},data:function(){return{languages:[{name:"En",isSelected:!0},{name:"Ru",isSelected:!1}],showedArticle:void 0}},computed:{heading1:function(){var e,t;return null===(e=this.homePageData)||void 0===e||null===(t=e._allHomePageHeading1Locales[this.selectedLanguageIndex])||void 0===t?void 0:t.value},heading2:function(){var e,t;return null===(e=this.homePageData)||void 0===e||null===(t=e._allHomePageHeading2Locales[this.selectedLanguageIndex])||void 0===t?void 0:t.value},text:function(){var e,t;return null===(e=this.homePageData)||void 0===e||null===(t=e._allHomePageTextLocales[this.selectedLanguageIndex])||void 0===t?void 0:t.value},typedText:function(){var e,t;return null===(e=this.homePageData)||void 0===e||null===(t=e._allHomePageTypedtextLocales[this.selectedLanguageIndex])||void 0===t?void 0:t.value},homePageData:function(){return this.$store.state.homePageData},selectedLanguage:function(){return this.languages.find((function(e){return e.isSelected})).name},selectedLanguageIndex:function(){return this.$store.state.selectedLanguageIndex}},watch:{typedText:function(e){var t=this.$refs.typedText;t&&(t.typedObj.strings=e,t.typedObj.reset())}},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["setSelectedLanguageIndex"])),{},{closeArticle:function(){document.body.classList.remove("is-article-visible"),this.showedArticle=void 0},openArticle:function(e){document.body.classList.add("is-article-visible"),this.showedArticle=e},onSelectLanguage:function(e){this.languages.map((function(t){return t.name===e?t.isSelected=!0:t.isSelected=!1})),this.setSelectedLanguageIndex("En"===this.selectedLanguage?0:1)}}),directives:{ClickOutside:g.a}},me=fe,he=(a("375f"),Object(P["a"])(me,d,p,!1,null,"60c8d0fe",null)),be=he.exports,_e="query MyQuery {\n  allRoots {\n    _allBioPageHeading1Locales {\n      locale\n      value\n    }\n    _allBioPageHeading2Locales {\n      locale\n      value\n    }\n    _allBioPageTextLocales {\n      locale\n      value\n    }\n    _allHomePageHeading1Locales {\n      locale\n      value\n    }\n    _allHomePageHeading2Locales {\n      locale\n      value\n    }\n    _allHomePageTypedtextLocales {\n      locale\n      value\n    }\n    _allHomePageTextLocales {\n      locale\n      value\n    }\n    _allContactsPageLocales {\n      locale\n      value\n    }\n    repertoire\n    photosPage {\n      url\n    }\n    videosPage {\n      videoLink {\n        url\n      }\n      videoTitle\n    }\n  }\n}",xe={name:"App",components:{Home:be},data:function(){return{data:null,error:null,loading:!0}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u({query:_e,variables:{limit:10}});case 3:e.data=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0;case 9:return t.prev=9,a=e.data&&e.data.allRoots&&e.data.allRoots[0],a&&e.setHomePageData(a),t.finish(9);case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[0,6,9,13]])})))()},methods:Object(s["a"])({},Object(l["b"])(["setHomePageData"]))},ye=xe,Pe=(a("5c0b"),Object(P["a"])(ye,r,o,!1,null,null,null)),je=Pe.exports,Ce=(a("d3b7"),a("8c4f")),Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},we=[],ke=a("d4ec"),Oe=a("262e"),Ie=a("2caf"),$e=a("9ab4"),Ae=a("60a3"),Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},De=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),e._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],Ee=function(e){Object(Oe["a"])(a,e);var t=Object(Ie["a"])(a);function a(){return Object(ke["a"])(this,a),t.apply(this,arguments)}return a}(Ae["c"]);Object($e["a"])([Object(Ae["b"])()],Ee.prototype,"msg",void 0),Ee=Object($e["a"])([Ae["a"]],Ee);var He=Ee,Se=He,qe=(a("5268"),Object(P["a"])(Se,Te,De,!1,null,"b0e308de",null)),Be=qe.exports,Re=function(e){Object(Oe["a"])(a,e);var t=Object(Ie["a"])(a);function a(){return Object(ke["a"])(this,a),t.apply(this,arguments)}return a}(Ae["c"]);Re=Object($e["a"])([Object(Ae["a"])({components:{HelloWorld:Be}})],Re);var Me=Re,Ve=Me,Ne=Object(P["a"])(Ve,Le,we,!1,null,null,null),Ge=Ne.exports;n["a"].use(Ce["a"]);var Je=[{path:"/",name:"Home",component:Ge},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],We=new Ce["a"]({mode:"history",base:"/",routes:Je}),ze=We;n["a"].use(l["a"]);var Fe=new l["a"].Store({state:{homePageData:void 0,selectedLanguageIndex:0},mutations:{setHomePageData:function(e,t){e.homePageData=t},setSelectedLanguageIndex:function(e,t){e.selectedLanguageIndex=t}},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:ze,store:Fe,render:function(e){return e(je)}}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d453:function(e,t,a){"use strict";var n=a("420b"),r=a.n(n);r.a},d746:function(e,t,a){"use strict";var n=a("81fb"),r=a.n(n);r.a},fd8e:function(e,t,a){"use strict";var n=a("30b0"),r=a.n(n);r.a}});
//# sourceMappingURL=app.fbfb7e1d.js.map