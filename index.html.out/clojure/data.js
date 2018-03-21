// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__18049){
var vec__18050 = p__18049;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18050,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__18053 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18053,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18053,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18053,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__18057 = arguments.length;
switch (G__18057) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__8626__auto__ = cljs.core.count(a);
var y__8627__auto__ = cljs.core.count(b);
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__9007__auto__ = (((x == null))?null:x);
var m__9008__auto__ = (clojure.data.equality_partition[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__9008__auto__.call(null,x));
} else {
var m__9008__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__9008__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__9007__auto__ = (((a == null))?null:a);
var m__9008__auto__ = (clojure.data.diff_similar[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__9008__auto__.call(null,a,b));
} else {
var m__9008__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__9008__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__18059_18083 = clojure.data.equality_partition;
var G__18060_18084 = "null";
var G__18061_18085 = ((function (G__18059_18083,G__18060_18084){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18059_18083,G__18060_18084))
;
goog.object.set(G__18059_18083,G__18060_18084,G__18061_18085);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__18062_18086 = clojure.data.equality_partition;
var G__18063_18087 = "string";
var G__18064_18088 = ((function (G__18062_18086,G__18063_18087){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18062_18086,G__18063_18087))
;
goog.object.set(G__18062_18086,G__18063_18087,G__18064_18088);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__18065_18089 = clojure.data.equality_partition;
var G__18066_18090 = "number";
var G__18067_18091 = ((function (G__18065_18089,G__18066_18090){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18065_18089,G__18066_18090))
;
goog.object.set(G__18065_18089,G__18066_18090,G__18067_18091);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__18068_18092 = clojure.data.equality_partition;
var G__18069_18093 = "array";
var G__18070_18094 = ((function (G__18068_18092,G__18069_18093){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__18068_18092,G__18069_18093))
;
goog.object.set(G__18068_18092,G__18069_18093,G__18070_18094);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__18071_18095 = clojure.data.equality_partition;
var G__18072_18096 = "function";
var G__18073_18097 = ((function (G__18071_18095,G__18072_18096){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18071_18095,G__18072_18096))
;
goog.object.set(G__18071_18095,G__18072_18096,G__18073_18097);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__18074_18098 = clojure.data.equality_partition;
var G__18075_18099 = "boolean";
var G__18076_18100 = ((function (G__18074_18098,G__18075_18099){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18074_18098,G__18075_18099))
;
goog.object.set(G__18074_18098,G__18075_18099,G__18076_18100);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__18077_18101 = clojure.data.equality_partition;
var G__18078_18102 = "_";
var G__18079_18103 = ((function (G__18077_18101,G__18078_18102){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__18077_18101,G__18078_18102))
;
goog.object.set(G__18077_18101,G__18078_18102,G__18079_18103);
goog.object.set(clojure.data.Diff,"null",true);

var G__18104_18128 = clojure.data.diff_similar;
var G__18105_18129 = "null";
var G__18106_18130 = ((function (G__18104_18128,G__18105_18129){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18104_18128,G__18105_18129))
;
goog.object.set(G__18104_18128,G__18105_18129,G__18106_18130);

goog.object.set(clojure.data.Diff,"string",true);

var G__18107_18131 = clojure.data.diff_similar;
var G__18108_18132 = "string";
var G__18109_18133 = ((function (G__18107_18131,G__18108_18132){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18107_18131,G__18108_18132))
;
goog.object.set(G__18107_18131,G__18108_18132,G__18109_18133);

goog.object.set(clojure.data.Diff,"number",true);

var G__18110_18134 = clojure.data.diff_similar;
var G__18111_18135 = "number";
var G__18112_18136 = ((function (G__18110_18134,G__18111_18135){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18110_18134,G__18111_18135))
;
goog.object.set(G__18110_18134,G__18111_18135,G__18112_18136);

goog.object.set(clojure.data.Diff,"array",true);

var G__18113_18137 = clojure.data.diff_similar;
var G__18114_18138 = "array";
var G__18115_18139 = ((function (G__18113_18137,G__18114_18138){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__18113_18137,G__18114_18138))
;
goog.object.set(G__18113_18137,G__18114_18138,G__18115_18139);

goog.object.set(clojure.data.Diff,"function",true);

var G__18116_18140 = clojure.data.diff_similar;
var G__18117_18141 = "function";
var G__18118_18142 = ((function (G__18116_18140,G__18117_18141){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18116_18140,G__18117_18141))
;
goog.object.set(G__18116_18140,G__18117_18141,G__18118_18142);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__18119_18143 = clojure.data.diff_similar;
var G__18120_18144 = "boolean";
var G__18121_18145 = ((function (G__18119_18143,G__18120_18144){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18119_18143,G__18120_18144))
;
goog.object.set(G__18119_18143,G__18120_18144,G__18121_18145);

goog.object.set(clojure.data.Diff,"_",true);

var G__18122_18146 = clojure.data.diff_similar;
var G__18123_18147 = "_";
var G__18124_18148 = ((function (G__18122_18146,G__18123_18147){
return (function (a,b){
var fexpr__18126 = (function (){var G__18127 = clojure.data.equality_partition(a);
var G__18127__$1 = (((G__18127 instanceof cljs.core.Keyword))?G__18127.fqn:null);
switch (G__18127__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18127__$1)].join('')));

}
})();
return (fexpr__18126.cljs$core$IFn$_invoke$arity$2 ? fexpr__18126.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__18126.call(null,a,b));
});})(G__18122_18146,G__18123_18147))
;
goog.object.set(G__18122_18146,G__18123_18147,G__18124_18148);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
