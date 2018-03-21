// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22057 = arguments.length;
var i__9554__auto___22058 = (0);
while(true){
if((i__9554__auto___22058 < len__9553__auto___22057)){
args__9560__auto__.push((arguments[i__9554__auto___22058]));

var G__22059 = (i__9554__auto___22058 + (1));
i__9554__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__22051){
var vec__22052 = p__22051;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((function (vec__22052,_opts){
return (function (data){
var map__22055 = data;
var map__22055__$1 = ((((!((map__22055 == null)))?((((map__22055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22055):map__22055);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22055__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.force(output_)], 0));
});})(vec__22052,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq22050){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22050));
});

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22069 = arguments.length;
var i__9554__auto___22070 = (0);
while(true){
if((i__9554__auto___22070 < len__9553__auto___22069)){
args__9560__auto__.push((arguments[i__9554__auto___22070]));

var G__22071 = (i__9554__auto___22070 + (1));
i__9554__auto___22070 = G__22071;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__22061){
var vec__22062 = p__22061;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22062,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$async_QMARK_,false,cljs.core.cst$kw$min_DASH_level,null,cljs.core.cst$kw$rate_DASH_limit,null,cljs.core.cst$kw$output_DASH_fn,cljs.core.cst$kw$inherit,cljs.core.cst$kw$fn,((typeof console !== 'undefined')?(function (){var level__GT_logger = ((function (vec__22062,opts){
return (function (level){
var or__8274__auto__ = (function (){var G__22066 = level;
var G__22066__$1 = (((G__22066 instanceof cljs.core.Keyword))?G__22066.fqn:null);
switch (G__22066__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22066__$1)].join('')));

}
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return console.log;
}
});})(vec__22062,opts))
;
return ((function (level__GT_logger,vec__22062,opts){
return (function (data){
var temp__5535__auto__ = level__GT_logger(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5535__auto__)){
var logger = temp__5535__auto__;
if(cljs.core.truth_((function (){var or__8274__auto__ = cljs.core.cst$kw$raw_DASH_console_QMARK_.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_], null));
}
})())){
var output = (function (){var G__22068 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_QMARK_err,null], 0));
var fexpr__22067 = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__22067.cljs$core$IFn$_invoke$arity$1 ? fexpr__22067.cljs$core$IFn$_invoke$arity$1(G__22068) : fexpr__22067.call(null,G__22068));
})();
var args = (function (){var vargs = cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(data);
var temp__5533__auto__ = cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5533__auto__)){
var err = temp__5533__auto__;
return cljs.core.cons(output,cljs.core.cons(err,vargs));
} else {
return cljs.core.cons(output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(cljs.core.cst$kw$output_.cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
;})(level__GT_logger,vec__22062,opts))
})():((function (vec__22062,opts){
return (function (data){
return null;
});})(vec__22062,opts))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq22060){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22060));
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
