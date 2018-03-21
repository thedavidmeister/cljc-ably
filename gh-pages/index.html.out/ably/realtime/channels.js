// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ably.realtime.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ably.realtime.core');
goog.require('taoensso.timbre');
goog.require('ably.channels');
goog.require('cljs.test');
ably.realtime.channels.subscribe_BANG_ = (function ably$realtime$channels$subscribe_BANG_(ably__$1,name_or_channel,k,cb){
if(cljs.core.truth_(ably.realtime.core.ably_QMARK_(ably__$1))){
} else {
throw (new Error("Assert failed: (ably.realtime.core/ably? ably)"));
}

var temp__5535__auto__ = ably.channels.name_or_channel__GT_channel(ably__$1,name_or_channel);
if(cljs.core.truth_(temp__5535__auto__)){
var channel = temp__5535__auto__;
var cb_SINGLEQUOTE_ = cb;
return channel.subscribe([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cb_SINGLEQUOTE_);
} else {
return null;
}
});
ably.realtime.channels.publish_BANG_ = (function ably$realtime$channels$publish_BANG_(ably__$1,name_or_channel,k,v,cb){
if(cljs.core.truth_(ably.realtime.core.ably_QMARK_(ably__$1))){
} else {
throw (new Error("Assert failed: (ably.realtime.core/ably? ably)"));
}

var temp__5535__auto__ = ably.channels.name_or_channel__GT_channel(ably__$1,name_or_channel);
if(cljs.core.truth_(temp__5535__auto__)){
var channel = temp__5535__auto__;
var cb_SINGLEQUOTE_ = cb;
return channel.publish([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)),cb_SINGLEQUOTE_);
} else {
return null;
}
});
