// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ably.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('medley.core');
goog.require('taoensso.timbre');
goog.require('cljs.test');
ably.channels.channel_QMARK_ = (function ably$channels$channel_QMARK_(ch){
return typeof ch.channelOptions !== 'undefined';
});
ably.channels.valid_channel_name_QMARK_ = (function ably$channels$valid_channel_name_QMARK_(s){
if(typeof s === 'string'){
var vec__23114 = s;
var seq__23115 = cljs.core.seq(vec__23114);
var first__23116 = cljs.core.first(seq__23115);
var seq__23115__$1 = cljs.core.next(seq__23115);
var x = first__23116;
var _ = seq__23115__$1;
var x__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
var invalid_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",s)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",x__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",x__$1));
return !(invalid_QMARK_);
} else {
return null;
}
});
ably.channels.normalize_name = (function ably$channels$normalize_name(channel_name){
if(cljs.core.uuid_QMARK_(channel_name)){
var G__23117 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel_name)].join('');
return (ably.channels.normalize_name.cljs$core$IFn$_invoke$arity$1 ? ably.channels.normalize_name.cljs$core$IFn$_invoke$arity$1(G__23117) : ably.channels.normalize_name.call(null,G__23117));
} else {
if(cljs.core.truth_(ably.channels.valid_channel_name_QMARK_(channel_name))){
return channel_name;
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"ably.channels",null,34,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invalid channel",channel_name], null);
}),null)),null,-752347117);

}
}
});
ably.channels.channels = (function ably$channels$channels(ably__$1){
if(cljs.core.truth_(ably__$1)){
return ably__$1.channels;
} else {
return null;
}
});
ably.channels.get_BANG_ = (function ably$channels$get_BANG_(ably__$1,chid){
if(typeof chid === 'string'){
} else {
throw (new Error("Assert failed: (string? chid)"));
}

if(cljs.core.truth_(ably__$1)){
return ably.channels.channels(ably__$1).get(chid);
} else {
return null;
}
});
ably.channels.name_or_channel__GT_channel = (function ably$channels$name_or_channel__GT_channel(ably__$1,name_or_channel){
if(cljs.core.truth_(ably__$1)){
if(cljs.core.truth_(ably.channels.channel_QMARK_(name_or_channel))){
return name_or_channel;
} else {
return ably.channels.get_BANG_(ably__$1,ably.channels.normalize_name(name_or_channel));
}
} else {
return null;
}
});
ably.channels._QMARK__QMARK_valid_channel_name_QMARK_ = (function ably$channels$_QMARK__QMARK_valid_channel_name_QMARK_(){
return cljs.test.test_var(ably.channels._QMARK__QMARK_valid_channel_name_QMARK_.cljs$lang$var);
});
ably.channels._QMARK__QMARK_valid_channel_name_QMARK_.cljs$lang$test = (function (){
try{var values__17550__auto___23126 = (function (){var x__9228__auto__ = ably.channels.valid_channel_name_QMARK_(cljs.core.cst$kw$foo);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})();
var result__17551__auto___23127 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17550__auto___23126);
if(cljs.core.truth_(result__17551__auto___23127)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,cljs.core.cst$kw$foo)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17550__auto___23126),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,cljs.core.cst$kw$foo)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17550__auto___23126);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23118){var t__17595__auto___23128 = e23118;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,cljs.core.cst$kw$foo)),cljs.core.cst$kw$actual,t__17595__auto___23128,cljs.core.cst$kw$message,null], null));
}
try{var values__17550__auto___23129 = (function (){var x__9228__auto__ = ably.channels.valid_channel_name_QMARK_("");
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})();
var result__17551__auto___23130 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17550__auto___23129);
if(cljs.core.truth_(result__17551__auto___23130)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17550__auto___23129),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17550__auto___23129);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23119){var t__17595__auto___23131 = e23119;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"")),cljs.core.cst$kw$actual,t__17595__auto___23131,cljs.core.cst$kw$message,null], null));
}
try{var values__17550__auto___23132 = (function (){var x__9228__auto__ = ably.channels.valid_channel_name_QMARK_(":foo");
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})();
var result__17551__auto___23133 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17550__auto___23132);
if(cljs.core.truth_(result__17551__auto___23133)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,":foo")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17550__auto___23132),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,":foo")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17550__auto___23132);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23120){var t__17595__auto___23134 = e23120;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,":foo")),cljs.core.cst$kw$actual,t__17595__auto___23134,cljs.core.cst$kw$message,null], null));
}
try{var values__17550__auto___23135 = (function (){var x__9228__auto__ = ably.channels.valid_channel_name_QMARK_("[foo]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})();
var result__17551__auto___23136 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17550__auto___23135);
if(cljs.core.truth_(result__17551__auto___23136)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"[foo]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17550__auto___23135),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"[foo]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17550__auto___23135);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23121){var t__17595__auto___23137 = e23121;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"[foo]")),cljs.core.cst$kw$actual,t__17595__auto___23137,cljs.core.cst$kw$message,null], null));
}
try{var values__17550__auto___23138 = cljs.core._conj(cljs.core.List.EMPTY,"foo");
var result__17551__auto___23139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ably.channels.valid_channel_name_QMARK_,values__17550__auto___23138);
if(cljs.core.truth_(result__17551__auto___23139)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo"),cljs.core.cst$kw$actual,cljs.core.cons(ably.channels.valid_channel_name_QMARK_,values__17550__auto___23138),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,values__17550__auto___23138);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23122){var t__17595__auto___23140 = e23122;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo"),cljs.core.cst$kw$actual,t__17595__auto___23140,cljs.core.cst$kw$message,null], null));
}
try{var values__17550__auto___23141 = cljs.core._conj(cljs.core.List.EMPTY,"foo:bar");
var result__17551__auto___23142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ably.channels.valid_channel_name_QMARK_,values__17550__auto___23141);
if(cljs.core.truth_(result__17551__auto___23142)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo:bar"),cljs.core.cst$kw$actual,cljs.core.cons(ably.channels.valid_channel_name_QMARK_,values__17550__auto___23141),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo:bar"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,values__17550__auto___23141);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23123){var t__17595__auto___23143 = e23123;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo:bar"),cljs.core.cst$kw$actual,t__17595__auto___23143,cljs.core.cst$kw$message,null], null));
}
try{var values__17550__auto___23144 = cljs.core._conj(cljs.core.List.EMPTY,"foo[bar");
var result__17551__auto___23145 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ably.channels.valid_channel_name_QMARK_,values__17550__auto___23144);
if(cljs.core.truth_(result__17551__auto___23145)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo[bar"),cljs.core.cst$kw$actual,cljs.core.cons(ably.channels.valid_channel_name_QMARK_,values__17550__auto___23144),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo[bar"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,values__17550__auto___23144);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23124){var t__17595__auto___23146 = e23124;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo[bar"),cljs.core.cst$kw$actual,t__17595__auto___23146,cljs.core.cst$kw$message,null], null));
}
try{var values__17550__auto__ = cljs.core._conj(cljs.core.List.EMPTY,"foo]bar");
var result__17551__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ably.channels.valid_channel_name_QMARK_,values__17550__auto__);
if(cljs.core.truth_(result__17551__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo]bar"),cljs.core.cst$kw$actual,cljs.core.cons(ably.channels.valid_channel_name_QMARK_,values__17550__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo]bar"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,values__17550__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17551__auto__;
}catch (e23125){var t__17595__auto__ = e23125;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$valid_DASH_channel_DASH_name_QMARK_,"foo]bar"),cljs.core.cst$kw$actual,t__17595__auto__,cljs.core.cst$kw$message,null], null));
}});

ably.channels._QMARK__QMARK_valid_channel_name_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return ably.channels._QMARK__QMARK_valid_channel_name_QMARK_;},cljs.core.cst$sym$ably$channels_SLASH__QMARK__QMARK_valid_DASH_channel_DASH_name_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$ably$channels,cljs.core.cst$sym$_QMARK__QMARK_valid_DASH_channel_DASH_name_QMARK_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/cljc-ably/4hg/uanrg/ably/channels.cljc",31,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(ably.channels._QMARK__QMARK_valid_channel_name_QMARK_)?ably.channels._QMARK__QMARK_valid_channel_name_QMARK_.cljs$lang$test:null)]));
ably.channels._QMARK__QMARK_normalize_name = (function ably$channels$_QMARK__QMARK_normalize_name(){
return cljs.test.test_var(ably.channels._QMARK__QMARK_normalize_name.cljs$lang$var);
});
ably.channels._QMARK__QMARK_normalize_name.cljs$lang$test = (function (){
var n_23160 = medley.core.random_uuid();
try{var values__17550__auto___23161 = (function (){var x__9228__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23160)].join('');
return cljs.core._conj((function (){var x__9228__auto____$1 = ably.channels.normalize_name(n_23160);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto____$1);
})(),x__9228__auto__);
})();
var result__17551__auto___23162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17550__auto___23161);
if(cljs.core.truth_(result__17551__auto___23162)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$n),cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$n)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17550__auto___23161),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$n),cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$n)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17550__auto___23161);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23147){var t__17595__auto___23163 = e23147;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$n),cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$n)),cljs.core.cst$kw$actual,t__17595__auto___23163,cljs.core.cst$kw$message,null], null));
}
var seq__23148_23164 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","foo:bar","foo[bar"], null));
var chunk__23149_23165 = null;
var count__23150_23166 = (0);
var i__23151_23167 = (0);
while(true){
if((i__23151_23167 < count__23150_23166)){
var v_23168 = chunk__23149_23165.cljs$core$IIndexed$_nth$arity$2(null,i__23151_23167);
try{var values__17550__auto___23169 = (function (){var x__9228__auto__ = v_23168;
return cljs.core._conj((function (){var x__9228__auto____$1 = ably.channels.normalize_name(v_23168);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto____$1);
})(),x__9228__auto__);
})();
var result__17551__auto___23170 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17550__auto___23169);
if(cljs.core.truth_(result__17551__auto___23170)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$v,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$v)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17550__auto___23169),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$v,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$v)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17550__auto___23169);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23152){var t__17595__auto___23171 = e23152;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$v,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$v)),cljs.core.cst$kw$actual,t__17595__auto___23171,cljs.core.cst$kw$message,null], null));
}
var G__23172 = seq__23148_23164;
var G__23173 = chunk__23149_23165;
var G__23174 = count__23150_23166;
var G__23175 = (i__23151_23167 + (1));
seq__23148_23164 = G__23172;
chunk__23149_23165 = G__23173;
count__23150_23166 = G__23174;
i__23151_23167 = G__23175;
continue;
} else {
var temp__5535__auto___23176 = cljs.core.seq(seq__23148_23164);
if(temp__5535__auto___23176){
var seq__23148_23177__$1 = temp__5535__auto___23176;
if(cljs.core.chunked_seq_QMARK_(seq__23148_23177__$1)){
var c__9205__auto___23178 = cljs.core.chunk_first(seq__23148_23177__$1);
var G__23179 = cljs.core.chunk_rest(seq__23148_23177__$1);
var G__23180 = c__9205__auto___23178;
var G__23181 = cljs.core.count(c__9205__auto___23178);
var G__23182 = (0);
seq__23148_23164 = G__23179;
chunk__23149_23165 = G__23180;
count__23150_23166 = G__23181;
i__23151_23167 = G__23182;
continue;
} else {
var v_23183 = cljs.core.first(seq__23148_23177__$1);
try{var values__17550__auto___23184 = (function (){var x__9228__auto__ = v_23183;
return cljs.core._conj((function (){var x__9228__auto____$1 = ably.channels.normalize_name(v_23183);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto____$1);
})(),x__9228__auto__);
})();
var result__17551__auto___23185 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17550__auto___23184);
if(cljs.core.truth_(result__17551__auto___23185)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$v,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$v)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17550__auto___23184),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$v,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$v)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17550__auto___23184);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23153){var t__17595__auto___23186 = e23153;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$v,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$v)),cljs.core.cst$kw$actual,t__17595__auto___23186,cljs.core.cst$kw$message,null], null));
}
var G__23187 = cljs.core.next(seq__23148_23177__$1);
var G__23188 = null;
var G__23189 = (0);
var G__23190 = (0);
seq__23148_23164 = G__23187;
chunk__23149_23165 = G__23188;
count__23150_23166 = G__23189;
i__23151_23167 = G__23190;
continue;
}
} else {
}
}
break;
}

var seq__23154 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",":",":foo","[","[foo"], null));
var chunk__23155 = null;
var count__23156 = (0);
var i__23157 = (0);
while(true){
if((i__23157 < count__23156)){
var i = chunk__23155.cljs$core$IIndexed$_nth$arity$2(null,i__23157);
try{var values__17550__auto___23191 = (function (){var x__9228__auto__ = ably.channels.normalize_name(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})();
var result__17551__auto___23192 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__17550__auto___23191);
if(cljs.core.truth_(result__17551__auto___23192)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.nil_QMARK_,values__17550__auto___23191),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$nil_QMARK_,values__17550__auto___23191);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23158){var t__17595__auto___23193 = e23158;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17595__auto___23193,cljs.core.cst$kw$message,null], null));
}
var G__23194 = seq__23154;
var G__23195 = chunk__23155;
var G__23196 = count__23156;
var G__23197 = (i__23157 + (1));
seq__23154 = G__23194;
chunk__23155 = G__23195;
count__23156 = G__23196;
i__23157 = G__23197;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__23154);
if(temp__5535__auto__){
var seq__23154__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23154__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__23154__$1);
var G__23198 = cljs.core.chunk_rest(seq__23154__$1);
var G__23199 = c__9205__auto__;
var G__23200 = cljs.core.count(c__9205__auto__);
var G__23201 = (0);
seq__23154 = G__23198;
chunk__23155 = G__23199;
count__23156 = G__23200;
i__23157 = G__23201;
continue;
} else {
var i = cljs.core.first(seq__23154__$1);
try{var values__17550__auto___23202 = (function (){var x__9228__auto__ = ably.channels.normalize_name(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})();
var result__17551__auto___23203 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__17550__auto___23202);
if(cljs.core.truth_(result__17551__auto___23203)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.nil_QMARK_,values__17550__auto___23202),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9228__auto__ = cljs.core.cons(cljs.core.cst$sym$nil_QMARK_,values__17550__auto___23202);
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23159){var t__17595__auto___23204 = e23159;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$normalize_DASH_name,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17595__auto___23204,cljs.core.cst$kw$message,null], null));
}
var G__23205 = cljs.core.next(seq__23154__$1);
var G__23206 = null;
var G__23207 = (0);
var G__23208 = (0);
seq__23154 = G__23205;
chunk__23155 = G__23206;
count__23156 = G__23207;
i__23157 = G__23208;
continue;
}
} else {
return null;
}
}
break;
}
});

ably.channels._QMARK__QMARK_normalize_name.cljs$lang$var = new cljs.core.Var(function(){return ably.channels._QMARK__QMARK_normalize_name;},cljs.core.cst$sym$ably$channels_SLASH__QMARK__QMARK_normalize_DASH_name,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$ably$channels,cljs.core.cst$sym$_QMARK__QMARK_normalize_DASH_name,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/cljc-ably/4hg/uanrg/ably/channels.cljc",26,1,65,65,cljs.core.List.EMPTY,null,(cljs.core.truth_(ably.channels._QMARK__QMARK_normalize_name)?ably.channels._QMARK__QMARK_normalize_name.cljs$lang$test:null)]));
