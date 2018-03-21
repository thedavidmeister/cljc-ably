// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('goog.crypt.base64');
goog.require('ably.realtime.channels');
if(typeof pages.index.ably_key !== 'undefined'){
} else {
pages.index.ably_key = (function (){var G__23213 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.hash,(1));
return goog.crypt.base64.decodeString(G__23213);
})();
}
if(typeof pages.index.ably !== 'undefined'){
} else {
pages.index.ably = (ably.realtime.core.ably.cljs$core$IFn$_invoke$arity$1 ? ably.realtime.core.ably.cljs$core$IFn$_invoke$arity$1(pages.index.ably_key) : ably.realtime.core.ably.call(null,pages.index.ably_key));
}
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__23214 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("CLJC ably test") : hoplon.core.title.call(null,"CLJC ably test"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__23214) : hoplon.core.head.call(null,G__23214));
})(),(function (){var G__23215 = (function (){var c = (function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
ably.realtime.channels.subscribe_BANG_(pages.index.ably,"xyz",cljs.core.cst$kw$inc,((function (c){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.inc);
});})(c))
);

return c;
})();
var G__23216 = (function (){var G__23218 = cljs.core.cst$kw$click;
var G__23219 = ((function (G__23218,c){
return (function (){
return ably.realtime.channels.publish_BANG_(pages.index.ably,"xyz",cljs.core.cst$kw$inc,cljs.core.cst$kw$inc,((function (G__23218,c){
return (function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["publish!"], 0));
});})(G__23218,c))
);
});})(G__23218,c))
;
var G__23220 = "Click to increment over network!";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__23218,G__23219,G__23220) : hoplon.core.button.call(null,G__23218,G__23219,G__23220));
})();
var G__23217 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$2("Count: ",c) : hoplon.core.span.call(null,"Count: ",c));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23216,G__23217) : hoplon.core.div.call(null,G__23216,G__23217));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__23215) : hoplon.core.body.call(null,G__23215));
})()], 0));
