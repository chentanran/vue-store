(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/follow/follow"],{"0f23":function(t,n,e){"use strict";var o=e("4105"),u=e.n(o);u.a},4105:function(t,n,e){},6036:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{activeIndex:0,list:[],articleShow:!1,authorLists:[]}},onLoad:function(){var n=this;t.$on("update_article",(function(){n.getFollow()})),t.$on("update_author",(function(t){n.getAuthor()})),this.getFollow(),this.getAuthor()},methods:{tab:function(t){this.activeIndex=t},change:function(t){this.activeIndex=t.detail.current},getFollow:function(){var t=this;this.$api.get_follow().then((function(n){t.list=n.data,t.articleShow=0===t.list.length}))},getAuthor:function(){var t=this;this.$api.get_author().then((function(n){var e=n.data;t.authorLists=e}))}}};n.default=e}).call(this,e("543d")["default"])},"71fb":function(t,n,e){"use strict";e.r(n);var o=e("6036"),u=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=u.a},ac36:function(t,n,e){"use strict";(function(t){e("bb4e");o(e("66fd"));var n=o(e("d0e4"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},d0e4:function(t,n,e){"use strict";e.r(n);var o=e("f5f6"),u=e("71fb");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("0f23");var r,a=e("f0c5"),l=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=l.exports},f5f6:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={listScroll:function(){return e.e("components/list-scroll/list-scroll").then(e.bind(null,"1dd9"))},uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"61de"))},listCard:function(){return e.e("components/list-card/list-card").then(e.bind(null,"44c9"))},listAuthor:function(){return e.e("components/list-author/list-author").then(e.bind(null,"1c62"))}},u=function(){var t=this,n=t.$createElement;t._self._c},i=[]}},[["ac36","common/runtime","common/vendor"]]]);