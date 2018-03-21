// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ably.realtime.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
ably.realtime.core.ably_QMARK_ = (function ably$realtime$core$ably_QMARK_(a){
return typeof a.channels !== 'undefined';
});
ably.realtime.core._ably = (function ably$realtime$core$_ably(params_or_key){
return (new Ably.Realtime(cljs.core.clj__GT_js(params_or_key)));
});
ably.realtime.core.ably = cljs.core.memoize(ably.realtime.core._ably);
