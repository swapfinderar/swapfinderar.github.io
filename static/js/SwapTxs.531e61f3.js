(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SwapTxs"],{"0fce":function(e,t,o){"use strict";o("a71c")},"57c9":function(e,t,o){"use strict";o("a9e3");var n=o("7a23"),c=o("afd7"),i=o.n(c),r={class:"tx-li-item_1"},s={style:{display:"flex","align-items":"center","justify-content":"left","min-width":"42%"}},a={style:{display:"flex","align-items":"center",flex:"1","justify-content":"center","overflow-x":"hidden","min-width":"0.4rem"}},l={key:0,src:i.a,style:{width:"100%"},alt:"",srcset:""},d={key:1,class:"iconfont icon-jiantou2"},m={style:{display:"flex","align-items":"center","min-width":"42%","justify-content":"right","flex-wrap":"wrap"}},u={style:{"text-align":"right","word-break":"break-word","margin-left":"0.1rem"}},f={class:"tx-li-item_3"},h={key:0},b={key:1},p={key:2},k={key:3,style:{color:"#999999"}},j={key:4};function O(e,t,c,i,O,v){var g,y,w,x,T,_,N,B,V=Object(n["resolveComponent"])("van-image");return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{class:"tx-li-item",onClick:t[0]||(t[0]=Object(n["withModifiers"])((function(){return v.goLink&&v.goLink.apply(v,arguments)}),["stop"]))},[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",s,[Object(n["createVNode"])(V,{round:"",width:"0.32rem",height:"0.32rem","icon-size":"0.32rem",style:{"margin-right":"0.1rem"},"lazy-load":"","show-loading":"",src:e.$f.formatIcon(c.item.from_address+"-"+c.item.chain),"error-icon":o("aeccf")},null,8,["src","error-icon"]),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatNumber2(c.item.from_amount))+" "+Object(n["toDisplayString"])(c.item.from_symbol||""),1)]),Object(n["createElementVNode"])("div",a,[0===c.item.is_merged&&1e3*(null===(g=c.item)||void 0===g?void 0:g.time)>=Date.now()-6e4&&"timeout"!==(null===(y=c.item)||void 0===y?void 0:y.status)&&"fail"!==(null===(w=c.item)||void 0===w?void 0:w.status)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",l)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",d))]),Object(n["createElementVNode"])("div",m,[Object(n["createVNode"])(V,{round:"",width:"0.32rem",height:"0.32rem","icon-size":"0.32rem",style:{"margin-right":"0.1rem","min-width":"0.32rem"},"lazy-load":"","show-loading":"",src:e.$f.formatIcon(c.item.to_address+"-"+c.item.chain),"error-icon":o("aeccf")},null,8,["src","error-icon"]),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$f.formatNumber2(c.item.to_amount)),1),Object(n["createElementVNode"])("span",u,Object(n["toDisplayString"])(c.item.to_symbol||""),1)])]),Object(n["createElementVNode"])("ul",f,[Object(n["createElementVNode"])("li",null,[1===c.item.is_merged?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",h,Object(n["toDisplayString"])(e.$f.formatDate(c.item.time)),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",b,"--")),1===c.item.is_merged&&""!==c.item.from_price_usd?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",p,Object(n["toDisplayString"])(e.$f.formatNumberCurrencyUnit((Number(c.item.from_amount)||0)*(Number(c.item.from_price_usd)||0))),1)):("timeout"===(null===(x=c.item)||void 0===x?void 0:x.status)||"fail"===(null===(T=c.item)||void 0===T?void 0:T.status)||1e3*(null===(_=c.item)||void 0===_?void 0:_.time)<Date.now()-6e4)&&0===c.item.is_merged&&"solana"===(null===(N=c.item)||void 0===N?void 0:N.chain)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",k,Object(n["toDisplayString"])("fail"===(null===(B=c.item)||void 0===B?void 0:B.status)?e.$t("failed"):e.$t("timeout")),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",j,"--"))])])])}var v={name:"TxItem",props:{item:Object},data:function(){return{}},methods:{goLink:function(){this.$f.openBrowser(this.$f.formatExplorerUrl(this.item.chain,this.item.transaction,"tx"))}}},g=(o("8ac1"),o("6b0d")),y=o.n(g);const w=y()(v,[["render",O],["__scopeId","data-v-fd4714dc"]]);t["a"]=w},"8ac1":function(e,t,o){"use strict";o("c04b")},"9b73":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c={class:"swapTxs-container"},i={style:{"background-color":"#fff"}},r={class:"pop-content"},s={class:"search-result"};function a(e,t,a,l,d,m){var u,f=Object(n["resolveComponent"])("van-icon"),h=Object(n["resolveComponent"])("van-nav-bar"),b=Object(n["resolveComponent"])("TxItem"),p=Object(n["resolveComponent"])("DynamicScrollerItem"),k=Object(n["resolveComponent"])("DynamicScroller"),j=Object(n["resolveComponent"])("van-empty"),O=Object(n["resolveComponent"])("van-search"),v=Object(n["resolveComponent"])("van-cell"),g=Object(n["resolveComponent"])("van-image"),y=Object(n["resolveComponent"])("van-action-sheet");return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",c,[Object(n["createVNode"])(h,{"left-text":"","left-arrow":"",fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("allTransactionHistory"),onClickLeft:t[0]||(t[0]=function(t){return e.$router.go(-1)}),onClickRight:t[1]||(t[1]=function(e){return d.show=!0})},{right:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{name:"filter-o",size:"0.4rem"})]})),_:1},8,["title"]),Object(n["createElementVNode"])("ul",i,[(null===(u=m.filterTxs)||void 0===u?void 0:u.length)>0?(Object(n["openBlock"])(),Object(n["createBlock"])(k,{key:0,items:m.filterTxs,"min-item-size":200,"key-field":"id","page-mode":"",buffer:1e3,class:"scroller"},{default:Object(n["withCtx"])((function(e){var t=e.item,o=e.index,c=e.active;return[Object(n["createVNode"])(p,{item:t,active:c,"data-index":o},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{item:t},null,8,["item"])]})),_:2},1032,["item","active","data-index"])]})),_:1},8,["items"])):Object(n["createCommentVNode"])("",!0),Object(n["withDirectives"])(Object(n["createVNode"])(j,{class:"empty",image:e.emptyNoDataLight,description:e.$t("empty")},null,8,["image","description"]),[[n["vShow"],m.filterTxs&&0===m.filterTxs.length&&!d.txsLoading]])]),Object(n["createVNode"])(y,{show:d.show,"onUpdate:show":t[4]||(t[4]=function(e){return d.show=e}),title:e.$t("orderFilter"),style:{"--van-popup-background-color":"#fff","--van-action-sheet-item-background":"#fff"},"cancel-text":e.$t("cancel"),"close-on-click-action":"",closeable:!1},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(O,{modelValue:d.keyword,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.keyword=e}),modelModifiers:{trim:!0},background:"#fff",shape:"round",placeholder:e.$t("searchTokenContractName")},null,8,["modelValue","placeholder"]),Object(n["createElementVNode"])("div",s,[Object(n["withDirectives"])(Object(n["createVNode"])(j,{class:"empty",image:e.emptyNoSearchLight,description:e.$t("noSearchResults")},null,8,["image","description"]),[[n["vShow"],m.searchResultTokens&&0===m.searchResultTokens.length]]),Object(n["withDirectives"])(Object(n["createVNode"])(v,{clickable:"",center:"",title:e.$t("historicalTransactionTokens"),onClick:t[3]||(t[3]=function(e){return m.confirmSelectToken("")})},{"right-icon":Object(n["withCtx"])((function(){return[d.actionToken?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0,size:"0.32rem",color:"#558BED",name:"success"}))]})),_:1},8,["title"]),[[n["vShow"],m.searchResultTokens&&m.searchResultTokens.length>0]]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(m.searchResultTokens,(function(t,c){return Object(n["openBlock"])(),Object(n["createBlock"])(v,{clickable:"",center:"",key:c,title:t.symbol,onClick:function(e){return m.confirmSelectToken(t)}},{icon:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{round:"",width:"0.36rem",height:"0.36rem","icon-size":"0.36rem",style:{"margin-right":"0.1rem"},"lazy-load":"","show-loading":"",src:e.$f.formatIcon(t.address+"-"+t.chain),"error-icon":o("aeccf")},null,8,["src","error-icon"])]})),"right-icon":Object(n["withCtx"])((function(){return[t.address===d.actionToken?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0,size:"0.32rem",color:"#558BED",name:"success"})):Object(n["createCommentVNode"])("",!0)]})),_:2},1032,["title","onClick"])})),128))])])]})),_:1},8,["show","title","cancel-text"])])}o("d3b7"),o("159b"),o("4de4"),o("ac1f"),o("841c"),o("4d63"),o("c607"),o("2c3e"),o("25f0"),o("00b4");var l=o("57c9"),d=o("365c"),m={name:"Txs",components:{TxItem:l["a"]},data:function(){return{show:!1,keyword:"",txs:[],txsLoading:!1,searchTokens:[],filterToken:[],actionToken:""}},computed:{txsTokens:function(){var e=[],t={};return this.txs.forEach((function(o){t[o.from_address]||(e.push({address:o.from_address,symbol:o.from_symbol,chain:o.chain}),t[o.from_address]=!0),t[o.to_address]||(e.push({address:o.to_address,symbol:o.to_symbol,chain:o.chain}),t[o.to_address]=!0)})),e},searchResultTokens:function(){var e;return(null===(e=this.searchTokens)||void 0===e?void 0:e.length)>0?this.searchTokens:this.txsTokens},filterTxs:function(){var e,t,o=this;return this.actionToken?(null===(e=this.txs)||void 0===e||null===(t=e.filter)||void 0===t?void 0:t.call(e,(function(e){return e.from_address===o.actionToken||e.to_address===o.actionToken})))||[]:this.txs}},watch:{"$store.state.currentAccount":function(e){e&&this.getUserAllTxs()},keyword:function(){this.search()}},created:function(){this.getUserAllTxs()},methods:{search:function(){if(""!==this.keyword){var e,t,o=new RegExp(this.keyword,"i");this.searchTokens=(null===(e=this.txsTokens)||void 0===e||null===(t=e.filter)||void 0===t?void 0:t.call(e,(function(e){return o.test(e.address)||o.test(e.symbol)})))||[]}else this.searchTokens=this.txsTokens},getUserAllTxs:function(){var e=this,t=this.$store.state.currentAccount;t&&(this.txsLoading=!0,Object(d["X"])().then((function(t){var o,n;e.txs=(null===t||void 0===t||null===(o=t.filter)||void 0===o?void 0:o.call(t,(function(e){return 1===e.is_merged||0===e.is_merged&&Date.now()-1e3*e.time<6e5})))||[],null!==t&&void 0!==t&&null!==(n=t.some)&&void 0!==n&&n.call(t,(function(e){return 0===e.is_merged&&Date.now()-1e3*e.time<6e5}))&&setTimeout((function(){e.getUserAllTxs()}),6e3)})).finally((function(){e.txsLoading=!1})))},confirmSelectToken:function(e){this.actionToken=e?e.address:"",this.show=!1}}},u=(o("0fce"),o("6b0d")),f=o.n(u);const h=f()(m,[["render",a],["__scopeId","data-v-4106d49f"]]);t["default"]=h},a71c:function(e,t,o){},aeccf:function(e,t,o){e.exports=o.p+"static/img/icon-default.75f6e9a0.png"},afd7:function(e,t,o){e.exports=o.p+"static/img/loading.fdd45987.svg"},c04b:function(e,t,o){}}]);