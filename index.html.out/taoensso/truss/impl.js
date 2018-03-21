// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.truss.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
taoensso.truss.impl.rsome = (function taoensso$truss$impl$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var temp__5535__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(temp__5535__auto__)){
var p = temp__5535__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
taoensso.truss.impl.revery_QMARK_ = (function taoensso$truss$impl$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll);
});
taoensso.truss.impl.some_QMARK_ = (function taoensso$truss$impl$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});
taoensso.truss.impl.set_STAR_ = cljs.core.set;
taoensso.truss.impl.ks_EQ_ = (function taoensso$truss$impl$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.truss.impl.set_STAR_.call(null,ks)));
});

taoensso.truss.impl.ks_LT__EQ_ = (function taoensso$truss$impl$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.truss.impl.set_STAR_.call(null,ks)));
});

taoensso.truss.impl.ks_GT__EQ_ = (function taoensso$truss$impl$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.truss.impl.set_STAR_.call(null,ks)));
});

taoensso.truss.impl.ks_nnil_QMARK_ = (function taoensso$truss$impl$ks_nnil_QMARK_(ks,m){
return taoensso.truss.impl.revery_QMARK_((function (p1__19313_SHARP_){
return taoensso.truss.impl.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__19313_SHARP_));
}),ks);
});
taoensso.truss.impl.default_error_fn = (function taoensso$truss$impl$default_error_fn(data_){
var data = cljs.core.deref(data_);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$msg_.cljs$core$IFn$_invoke$arity$1(data)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$msg_));
});
taoensso.truss.impl._STAR__QMARK_data_STAR_ = null;
taoensso.truss.impl._STAR_error_fn_STAR_ = taoensso.truss.impl.default_error_fn;
taoensso.truss.impl.non_throwing = (function taoensso$truss$impl$non_throwing(pred){
return (function (x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e19314){if((e19314 instanceof Error)){
var _ = e19314;
return null;
} else {
throw e19314;

}
}});
});
/**
 * Returns true for some common preds that are naturally non-throwing.
 */
taoensso.truss.impl.non_throwing_QMARK_ = (function taoensso$truss$impl$non_throwing_QMARK_(p){
return false;
});
/**
 * Expands any special predicate forms and returns [<expanded-pred> <non-throwing?>].
 */
taoensso.truss.impl._xpred = (function taoensso$truss$impl$_xpred(pred){
if(!(cljs.core.vector_QMARK_(pred))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,taoensso.truss.impl.non_throwing_QMARK_(pred)], null);
} else {
var vec__19315 = pred;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19315,(0),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19315,(1),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19315,(2),null);
var a3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19315,(3),null);
if(cljs.core.truth_(a1)){
} else {
throw (new Error(["Assert failed: ","Special predicate [<special-type> <arg>] form w/o <arg>","\n","a1"].join('')));
}

var G__19318 = type;
var G__19318__$1 = (((G__19318 instanceof cljs.core.Keyword))?G__19318.fqn:null);
switch (G__19318__$1) {
case "set=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_set_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_set_STAR_),(function (){var x__9228__auto__ = a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),false], null);

break;
case "set<=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$set_SLASH_subset_QMARK_),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_set_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_set_STAR_),(function (){var x__9228__auto__ = a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),false], null);

break;
case "set>=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$set_SLASH_superset_QMARK_),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_set_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_set_STAR_),(function (){var x__9228__auto__ = a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),false], null);

break;
case "ks=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_ks_EQ_),(function (){var x__9228__auto__ = a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),false], null);

break;
case "ks<=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_ks_LT__EQ_),(function (){var x__9228__auto__ = a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),false], null);

break;
case "ks>=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_ks_GT__EQ_),(function (){var x__9228__auto__ = a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),false], null);

break;
case "ks-nnil?":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_ks_DASH_nnil_QMARK_),(function (){var x__9228__auto__ = a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),false], null);

break;
case "el":
case "in":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_set_STAR_),(function (){var x__9228__auto__ = a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),false], null);

break;
case "not-el":
case "not-in":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_set_STAR_),(function (){var x__9228__auto__ = a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),false], null);

break;
default:
var self = ((function (G__19318,G__19318__$1,vec__19315,type,a1,a2,a3){
return (function (_QMARK_pred){
if(cljs.core.truth_(_QMARK_pred)){
return (taoensso.truss.impl._xpred.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl._xpred.cljs$core$IFn$_invoke$arity$1(_QMARK_pred) : taoensso.truss.impl._xpred.call(null,_QMARK_pred));
} else {
return null;
}
});})(G__19318,G__19318__$1,vec__19315,type,a1,a2,a3))
;
var vec__19319 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self(a1),self(a2),self(a3)], null);
var vec__19322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19319,(0),null);
var a1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19322,(0),null);
var nt_a1_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19322,(1),null);
var vec__19325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19319,(1),null);
var a2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19325,(0),null);
var nt_a2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19325,(1),null);
var vec__19328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19319,(2),null);
var a3__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328,(0),null);
var nt_a3_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328,(1),null);
var nt_a1 = (cljs.core.truth_(a1__$1)?(cljs.core.truth_(nt_a1_QMARK_)?a1__$1:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_non_DASH_throwing),(function (){var x__9228__auto__ = a1__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())))):null);
var nt_a2 = (cljs.core.truth_(a2__$1)?(cljs.core.truth_(nt_a2_QMARK_)?a2__$1:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_non_DASH_throwing),(function (){var x__9228__auto__ = a2__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())))):null);
var nt_a3 = (cljs.core.truth_(a3__$1)?(cljs.core.truth_(nt_a3_QMARK_)?a3__$1:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$taoensso$truss$impl_SLASH_non_DASH_throwing),(function (){var x__9228__auto__ = a3__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())))):null);
var nt_comp_QMARK_ = (cljs.core.truth_(a3__$1)?(function (){var and__8262__auto__ = nt_a1_QMARK_;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = nt_a2_QMARK_;
if(cljs.core.truth_(and__8262__auto____$1)){
return nt_a3_QMARK_;
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})():(cljs.core.truth_(a2__$1)?(function (){var and__8262__auto__ = nt_a1_QMARK_;
if(cljs.core.truth_(and__8262__auto__)){
return nt_a2_QMARK_;
} else {
return and__8262__auto__;
}
})():(cljs.core.truth_(a1__$1)?nt_a1_QMARK_:null)));
var G__19331 = type;
var G__19331__$1 = (((G__19331 instanceof cljs.core.Keyword))?G__19331.fqn:null);
switch (G__19331__$1) {
case "and":
if(cljs.core.truth_(a3__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a1__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a2__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a3__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a2__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a1__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a2__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a1__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1__$1,nt_a1_QMARK_], null);
} else {
return null;
}
}
}

break;
case "or":
if(cljs.core.truth_(a3__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = nt_a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = nt_a2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = nt_a3;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),true], null);
} else {
if(cljs.core.truth_(a2__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = nt_a1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = nt_a2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),true], null);
} else {
if(cljs.core.truth_(a1__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1__$1,nt_a1_QMARK_], null);
} else {
return null;
}
}
}

break;
case "not":
if(cljs.core.truth_(a3__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a1__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a2__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a3__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a2__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a1__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a2__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a1__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9228__auto__ = a1__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0)))),nt_a1_QMARK_], null);
} else {
return null;
}
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19331__$1)].join('')));

}

}
}
});
taoensso.truss.impl.fmt_err_msg = (function taoensso$truss$impl$fmt_err_msg(x1,x2,x3,x4){
return ["Invariant violation in `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x2),"`. Test form `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x3),"` failed against input val `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x4),"`."].join('');
});

/**
* @constructor
*/
taoensso.truss.impl.WrappedError = (function (val){
this.val = val;
});

taoensso.truss.impl.WrappedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
});

taoensso.truss.impl.WrappedError.cljs$lang$type = true;

taoensso.truss.impl.WrappedError.cljs$lang$ctorStr = "taoensso.truss.impl/WrappedError";

taoensso.truss.impl.WrappedError.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"taoensso.truss.impl/WrappedError");
});

taoensso.truss.impl.__GT_WrappedError = (function taoensso$truss$impl$__GT_WrappedError(val){
return (new taoensso.truss.impl.WrappedError(val));
});

taoensso.truss.impl._assertion_error = (function taoensso$truss$impl$_assertion_error(msg){
return (new Error(msg));
});
taoensso.truss.impl._dummy_error = {};
taoensso.truss.impl._invar_violation_BANG_ = (function taoensso$truss$impl$_invar_violation_BANG_(elidable_QMARK_,ns_str,_QMARK_line,form,val,_QMARK_err,_QMARK_data_fn){
var temp__5535__auto__ = taoensso.truss.impl._STAR_error_fn_STAR_;
if(cljs.core.truth_(temp__5535__auto__)){
var error_fn = temp__5535__auto__;
var G__19336 = (new cljs.core.Delay(((function (error_fn,temp__5535__auto__){
return (function (){
var instant = (new Date());
var line_str = (function (){var or__8274__auto__ = _QMARK_line;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return "?";
}
})();
var form_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');
var undefn_val_QMARK_ = (val instanceof taoensso.truss.impl.WrappedError);
var val_str = ((undefn_val_QMARK_)?"<truss/undefined-val>":(((val == null))?"<truss/nil>":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0))
));
var _QMARK_err__$1 = (((taoensso.truss.impl._dummy_error === _QMARK_err))?null:(((_QMARK_err instanceof taoensso.truss.impl.WrappedError))?_QMARK_err.val:_QMARK_err
));
var msg_ = (new cljs.core.Delay(((function (instant,line_str,form_str,undefn_val_QMARK_,val_str,_QMARK_err__$1,error_fn,temp__5535__auto__){
return (function (){
var _QMARK_err_str = (function (){var temp__5535__auto____$1 = _QMARK_err__$1;
if(cljs.core.truth_(temp__5535__auto____$1)){
var e = temp__5535__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err__$1)].join('');
} else {
return null;
}
})();
var msg = taoensso.truss.impl.fmt_err_msg(ns_str,line_str,form_str,val_str);
if(cljs.core.not(_QMARK_err__$1)){
return msg;
} else {
if(undefn_val_QMARK_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," An error was thrown while evaluating input val: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err_str),"]."].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," An error was thrown while evaluating test form: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err_str),"]."].join('');

}
}
});})(instant,line_str,form_str,undefn_val_QMARK_,val_str,_QMARK_err__$1,error_fn,temp__5535__auto__))
,null));
var _QMARK_data = (function (){var temp__5535__auto____$1 = _QMARK_data_fn;
if(cljs.core.truth_(temp__5535__auto____$1)){
var data_fn = temp__5535__auto____$1;
try{return (data_fn.cljs$core$IFn$_invoke$arity$0 ? data_fn.cljs$core$IFn$_invoke$arity$0() : data_fn.call(null));
}catch (e19337){if((e19337 instanceof Error)){
var e = e19337;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_error,e], null);
} else {
throw e19337;

}
}} else {
return null;
}
})();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$_STAR__QMARK_data_STAR_,cljs.core.cst$kw$msg_,cljs.core.cst$kw$elidable_QMARK_,cljs.core.cst$kw$dt,cljs.core.cst$kw$val,cljs.core.cst$kw$ns_DASH_str,cljs.core.cst$kw$val_DASH_type,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$_STAR_assert_STAR_,cljs.core.cst$kw$_QMARK_data,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$form_DASH_str],[taoensso.truss.impl._STAR__QMARK_data_STAR_,msg_,elidable_QMARK_,instant,((undefn_val_QMARK_)?cljs.core.cst$sym$truss_SLASH_undefined_DASH_val:val),ns_str,((undefn_val_QMARK_)?cljs.core.cst$sym$truss_SLASH_undefined_DASH_val:cljs.core.type(val)),_QMARK_err__$1,cljs.core._STAR_assert_STAR_,_QMARK_data,_QMARK_line,form_str]);
});})(error_fn,temp__5535__auto__))
,null));
return (error_fn.cljs$core$IFn$_invoke$arity$1 ? error_fn.cljs$core$IFn$_invoke$arity$1(G__19336) : error_fn.call(null,G__19336));
} else {
return null;
}
});
