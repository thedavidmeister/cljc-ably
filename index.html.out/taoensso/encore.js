// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.test');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(91),(0)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__21179 = arguments.length;
switch (G__21179) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__21180 = (((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21180,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21180,(1),null);
var vec__21183 = (((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21183,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21183,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__21188 = arguments.length;
switch (G__21188) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = (cljs.core.truth_((function (){var G__21189 = readers;
var G__21190 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21189,G__21190) : taoensso.encore.kw_identical_QMARK_.call(null,G__21189,G__21190));
})())?(function (){var G__21191 = cljs.core.symbol;
var G__21192 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__21191,G__21192) : taoensso.encore.map_keys.call(null,G__21191,G__21192));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__21193 = default$;
var G__21194 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21193,G__21194) : taoensso.encore.kw_identical_QMARK_.call(null,G__21193,G__21194));
})())?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__21197 = arguments.length;
switch (G__21197) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_21198 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_21199 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_21199;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_21198;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__19543__auto__ = (function (){var or__8274__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__19543__auto__)){
var data_map = b2__19543__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__8262__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__8262__auto__){
var and__8262__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__8262__auto____$1)){
return true;
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__8262__auto__ = (x instanceof cljs.core.Symbol);
if(and__8262__auto__){
var and__8262__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__8262__auto____$1)){
return true;
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__8262__auto__ = (x instanceof cljs.core.Keyword);
if(and__8262__auto__){
var and__8262__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__8262__auto____$1)){
return true;
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_(x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__8262__auto__ = typeof x === 'number';
if(and__8262__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__8262__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return null;
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__19543__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__19543__auto__)){
var ns = b2__19543__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__19543__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__19543__auto__)){
var n = b2__19543__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__19543__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__19543__auto__)){
var n = b2__19543__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__19543__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__19543__auto__)){
var n = b2__19543__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__19543__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__19543__auto__)){
var n = b2__19543__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__19543__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__19543__auto__)){
var n = b2__19543__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__19543__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__19543__auto__)){
var f = b2__19543__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__19543__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(b2__19543__auto__)){
var email = b2__19543__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e21205){if((e21205 instanceof Error)){
var _ = e21205;
return false;
} else {
throw e21205;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__21207 = arguments.length;
switch (G__21207) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)].join(''))," failure against arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$fail_DASH__QMARK_data,fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`as-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(as_name)),"` failed against: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nzero,x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank,x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nempty_DASH_str,x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$kw,x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$name,x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$qname,x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$udt,x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$int,x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_int,x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_int,x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$float,x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_float,x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_float,x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__8274__auto__ = taoensso.encore.as__QMARK_pval(x);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pval,x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(cljs.core.cst$kw$bool,x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__21210 = arguments.length;
switch (G__21210) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__21214){
var vec__21215 = p__21214;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21215,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
var inc_21221 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = ((function (inc_21221){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,inc_21221){
return (function (acc,in$){
var G__21218 = acc;
var G__21219 = cljs.core._vreset_BANG_(i,inc_21221(cljs.core._deref(i)));
var G__21220 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__21218,G__21219,G__21220) : rf.call(null,G__21218,G__21219,G__21220));
});})(i,inc_21221))
,init,coll);
});})(inc_21221))
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__21222 = acc;
var G__21223 = k;
var G__21224 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21222,G__21223,G__21224) : f.call(null,G__21222,G__21223,G__21224));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21226_SHARP_,p2__21225_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__21225_SHARP_) : proc.call(null,p2__21225_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__21229_SHARP_,p2__21227_SHARP_,p3__21228_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__21227_SHARP_,p3__21228_SHARP_) : proc.call(null,p2__21227_SHARP_,p3__21228_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__21232_SHARP_,p2__21230_SHARP_,p3__21231_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__21230_SHARP_,p3__21231_SHARP_) : proc.call(null,p2__21230_SHARP_,p3__21231_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__21235_SHARP_,p2__21233_SHARP_,p3__21234_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__21233_SHARP_,p3__21234_SHARP_) : proc.call(null,p2__21233_SHARP_,p3__21234_SHARP_));
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var b2__19543__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__19543__auto__)){
var p = b2__19543__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var b2__19543__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__19543__auto__)){
var p = b2__19543__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
var inc_21237 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = ((function (inc_21237){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_((-1));
return ((function (idx_,inc_21237){
return (function (){
return cljs.core._vreset_BANG_(idx_,inc_21237(cljs.core._deref(idx_)));
});
;})(idx_,inc_21237))
});})(inc_21237))
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__21239 = arguments.length;
switch (G__21239) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((function (){var G__21240 = (x - y);
return Math.abs(G__21240);
})() < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return ((function (){var G__21241 = (x - y);
return Math.abs(G__21241);
})() < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__21244 = arguments.length;
switch (G__21244) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__21245 = type;
var G__21245__$1 = (((G__21245 instanceof cljs.core.Keyword))?G__21245.fqn:null);
switch (G__21245__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
var G__21248 = n;
return Math.round(G__21248);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__21249 = (n * 10.0);
return Math.round(G__21249);
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__21250 = (n * 100.0);
return Math.round(G__21250);
})() / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__21252 = arguments.length;
switch (G__21252) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__21253){
var map__21254 = p__21253;
var map__21254__$1 = ((((!((map__21254 == null)))?((((map__21254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21254):map__21254);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21254__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21254__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21254__$1,cljs.core.cst$kw$factor,(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__21257 = cljs.core.meta(x);
var G__21258 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__21257,G__21258) : taoensso.encore.merge.call(null,G__21257,G__21258));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__21264 = arguments.length;
switch (G__21264) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21266 = arguments.length;
var i__9554__auto___21267 = (0);
while(true){
if((i__9554__auto___21267 < len__9553__auto___21266)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21267]));

var G__21268 = (i__9554__auto___21267 + (1));
i__9554__auto___21267 = G__21268;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9577__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__8262__auto__ = taoensso.encore.some_QMARK_(x);
if(and__8262__auto__){
var and__8262__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__8262__auto____$1){
return taoensso.encore.revery_QMARK_(((function (and__8262__auto____$1,and__8262__auto__){
return (function (p1__21259_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21259_SHARP_,x);
});})(and__8262__auto____$1,and__8262__auto__))
,more);
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq21261){
var G__21262 = cljs.core.first(seq21261);
var seq21261__$1 = cljs.core.next(seq21261);
var G__21263 = cljs.core.first(seq21261__$1);
var seq21261__$2 = cljs.core.next(seq21261__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21262,G__21263,seq21261__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__21274 = arguments.length;
switch (G__21274) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21276 = arguments.length;
var i__9554__auto___21277 = (0);
while(true){
if((i__9554__auto___21277 < len__9553__auto___21276)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21277]));

var G__21278 = (i__9554__auto___21277 + (1));
i__9554__auto___21277 = G__21278;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq21270){
var G__21271 = cljs.core.first(seq21270);
var seq21270__$1 = cljs.core.next(seq21270);
var G__21272 = cljs.core.first(seq21270__$1);
var seq21270__$2 = cljs.core.next(seq21270__$1);
var G__21273 = cljs.core.first(seq21270__$2);
var seq21270__$3 = cljs.core.next(seq21270__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__21271,G__21272,G__21273,seq21270__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__21279 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21279,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21279,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__19543__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__19543__auto__)){
var s = b2__19543__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var b2__19543__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__19543__auto__)){
var s = b2__19543__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__21283 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21283,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21283,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21283,(2),null);
var vec__21286 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21286,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21286,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21286,(2),null);
var vec__21289 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__21283,xc,yc,zc,vec__21286,xm,ym,zm){
return (function (p1__21282_SHARP_){
var or__8274__auto__ = p1__21282_SHARP_;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
});})(vec__21283,xc,yc,zc,vec__21286,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21289,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21289,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21289,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__21293 = arguments.length;
switch (G__21293) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21296 = arguments.length;
var i__9554__auto___21297 = (0);
while(true){
if((i__9554__auto___21297 < len__9553__auto___21296)){
args__9560__auto__.push((arguments[i__9554__auto___21297]));

var G__21298 = (i__9554__auto___21297 + (1));
i__9554__auto___21297 = G__21298;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq21295){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21295));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__21300 = arguments.length;
switch (G__21300) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_21309 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_21309){
return (function taoensso$encore$oget_in(var_args){
var G__21305 = arguments.length;
switch (G__21305) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_21309))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_21309){
return (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
});})(sentinel_21309))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_21309){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = (function (){var G__21306 = o__$1;
var G__21307 = cljs.core.first(ks__$1);
var G__21308 = sentinel_21309;
return goog.object.get(G__21306,G__21307,G__21308);
})();
if((o__$2 === sentinel_21309)){
return not_found;
} else {
var G__21311 = o__$2;
var G__21312 = cljs.core.next(ks__$1);
o__$1 = G__21311;
ks__$1 = G__21312;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_21309))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__21317 = arguments.length;
switch (G__21317) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21324 = arguments.length;
var i__9554__auto___21325 = (0);
while(true){
if((i__9554__auto___21325 < len__9553__auto___21324)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21325]));

var G__21326 = (i__9554__auto___21325 + (1));
i__9554__auto___21325 = G__21326;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9577__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq21314){
var G__21315 = cljs.core.first(seq21314);
var seq21314__$1 = cljs.core.next(seq21314);
var G__21316 = cljs.core.first(seq21314__$1);
var seq21314__$2 = cljs.core.next(seq21314__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__21315,G__21316,seq21314__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__21322 = arguments.length;
switch (G__21322) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21328 = arguments.length;
var i__9554__auto___21329 = (0);
while(true){
if((i__9554__auto___21329 < len__9553__auto___21328)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21329]));

var G__21330 = (i__9554__auto___21329 + (1));
i__9554__auto___21329 = G__21330;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9577__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq21319){
var G__21320 = cljs.core.first(seq21319);
var seq21319__$1 = cljs.core.next(seq21319);
var G__21321 = cljs.core.first(seq21319__$1);
var seq21319__$2 = cljs.core.next(seq21319__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__21320,G__21321,seq21319__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__21336 = arguments.length;
switch (G__21336) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21350 = arguments.length;
var i__9554__auto___21351 = (0);
while(true){
if((i__9554__auto___21351 < len__9553__auto___21350)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21351]));

var G__21352 = (i__9554__auto___21351 + (1));
i__9554__auto___21351 = G__21352;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq21332){
var G__21333 = cljs.core.first(seq21332);
var seq21332__$1 = cljs.core.next(seq21332);
var G__21334 = cljs.core.first(seq21332__$1);
var seq21332__$2 = cljs.core.next(seq21332__$1);
var G__21335 = cljs.core.first(seq21332__$2);
var seq21332__$3 = cljs.core.next(seq21332__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__21333,G__21334,G__21335,seq21332__$3);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__21342 = arguments.length;
switch (G__21342) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21354 = arguments.length;
var i__9554__auto___21355 = (0);
while(true){
if((i__9554__auto___21355 < len__9553__auto___21354)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21355]));

var G__21356 = (i__9554__auto___21355 + (1));
i__9554__auto___21355 = G__21356;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq21338){
var G__21339 = cljs.core.first(seq21338);
var seq21338__$1 = cljs.core.next(seq21338);
var G__21340 = cljs.core.first(seq21338__$1);
var seq21338__$2 = cljs.core.next(seq21338__$1);
var G__21341 = cljs.core.first(seq21338__$2);
var seq21338__$3 = cljs.core.next(seq21338__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__21339,G__21340,G__21341,seq21338__$3);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__21348 = arguments.length;
switch (G__21348) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21358 = arguments.length;
var i__9554__auto___21359 = (0);
while(true){
if((i__9554__auto___21359 < len__9553__auto___21358)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21359]));

var G__21360 = (i__9554__auto___21359 + (1));
i__9554__auto___21359 = G__21360;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq21344){
var G__21345 = cljs.core.first(seq21344);
var seq21344__$1 = cljs.core.next(seq21344);
var G__21346 = cljs.core.first(seq21344__$1);
var seq21344__$2 = cljs.core.next(seq21344__$1);
var G__21347 = cljs.core.first(seq21344__$2);
var seq21344__$3 = cljs.core.next(seq21344__$2);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(G__21345,G__21346,G__21347,seq21344__$3);
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__21362 = arguments.length;
switch (G__21362) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__21365 = arguments.length;
switch (G__21365) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__21367 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21367,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__21370 = xs__$1;
var seq__21371 = cljs.core.seq(vec__21370);
var first__21372 = cljs.core.first(seq__21371);
var seq__21371__$1 = cljs.core.next(seq__21371);
var x1 = first__21372;
var xn = seq__21371__$1;
if(xn){
var G__21373 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__21374 = xn;
butlast = G__21373;
xs__$1 = G__21374;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21377 = arguments.length;
var i__9554__auto___21378 = (0);
while(true){
if((i__9554__auto___21378 < len__9553__auto___21377)){
args__9560__auto__.push((arguments[i__9554__auto___21378]));

var G__21379 = (i__9554__auto___21378 + (1));
i__9554__auto___21378 = G__21379;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,(taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(lx) : taoensso.encore.seq_kvs.call(null,lx)));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq21375){
var G__21376 = cljs.core.first(seq21375);
var seq21375__$1 = cljs.core.next(seq21375);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__21376,seq21375__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__21384 = arguments.length;
switch (G__21384) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21386 = arguments.length;
var i__9554__auto___21387 = (0);
while(true){
if((i__9554__auto___21387 < len__9553__auto___21386)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21387]));

var G__21388 = (i__9554__auto___21387 + (1));
i__9554__auto___21387 = G__21388;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9577__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq21381){
var G__21382 = cljs.core.first(seq21381);
var seq21381__$1 = cljs.core.next(seq21381);
var G__21383 = cljs.core.first(seq21381__$1);
var seq21381__$2 = cljs.core.next(seq21381__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__21382,G__21383,seq21381__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__21390 = arguments.length;
switch (G__21390) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__21393 = arguments.length;
switch (G__21393) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__21395 = null;
var G__21395__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21395__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__21395__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen_),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__21395 = function(acc,input){
switch(arguments.length){
case 0:
return G__21395__0.call(this);
case 1:
return G__21395__1.call(this,acc);
case 2:
return G__21395__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__21395.cljs$core$IFn$_invoke$arity$0 = G__21395__0;
G__21395.cljs$core$IFn$_invoke$arity$1 = G__21395__1;
G__21395.cljs$core$IFn$_invoke$arity$2 = G__21395__2;
return G__21395;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__21396_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__21396_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__21398 = arguments.length;
switch (G__21398) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__19543__auto__ = cljs.core.seq(ks);
if(b2__19543__auto__){
var ks_seq = b2__19543__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__19543__auto____$1 = cljs.core.next(ks_seq);
if(b2__19543__auto____$1){
var ks__$1 = b2__19543__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__21399 = f;
var G__21400 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21399,G__21400) : taoensso.encore.kw_identical_QMARK_.call(null,G__21399,G__21400));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__21401 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21401) : f.call(null,G__21401));
})();
if(cljs.core.truth_((function (){var G__21402 = v;
var G__21403 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21402,G__21403) : taoensso.encore.kw_identical_QMARK_.call(null,G__21402,G__21403));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__21406 = arguments.length;
switch (G__21406) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__21413 = arguments.length;
switch (G__21413) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21415 = arguments.length;
var i__9554__auto___21416 = (0);
while(true){
if((i__9554__auto___21416 < len__9553__auto___21415)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21416]));

var G__21417 = (i__9554__auto___21416 + (1));
i__9554__auto___21416 = G__21417;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq21409){
var G__21410 = cljs.core.first(seq21409);
var seq21409__$1 = cljs.core.next(seq21409);
var G__21411 = cljs.core.first(seq21409__$1);
var seq21409__$2 = cljs.core.next(seq21409__$1);
var G__21412 = cljs.core.first(seq21409__$2);
var seq21409__$3 = cljs.core.next(seq21409__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__21410,G__21411,G__21412,seq21409__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__21422 = arguments.length;
switch (G__21422) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21424 = arguments.length;
var i__9554__auto___21425 = (0);
while(true){
if((i__9554__auto___21425 < len__9553__auto___21424)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21425]));

var G__21426 = (i__9554__auto___21425 + (1));
i__9554__auto___21425 = G__21426;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9577__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq21419){
var G__21420 = cljs.core.first(seq21419);
var seq21419__$1 = cljs.core.next(seq21419);
var G__21421 = cljs.core.first(seq21419__$1);
var seq21419__$2 = cljs.core.next(seq21419__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__21420,G__21421,seq21419__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if((s1) && (s2)){
var G__21427 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__21428 = cljs.core.next(s1);
var G__21429 = cljs.core.next(s2);
v = G__21427;
s1 = G__21428;
s2 = G__21429;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
var not_found_21436 = {};
taoensso.encore._merge_with = ((function (not_found_21436){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (not_found_21436){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv(((function (not_found_21436){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_21436);
if((lv === not_found_21436)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__21432 = rv;
var G__21433 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21432,G__21433) : taoensso.encore.kw_identical_QMARK_.call(null,G__21432,G__21433));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__8262__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__8262__auto__)){
return (cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv));
} else {
return and__8262__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(cljs.core.truth_((function (){var G__21434 = new_rv;
var G__21435 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21434,G__21435) : taoensso.encore.kw_identical_QMARK_.call(null,G__21434,G__21435));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
});})(not_found_21436))
,(function (){var or__8274__auto__ = acc;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_21436))
,null,maps);
});})(not_found_21436))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21443 = arguments.length;
var i__9554__auto___21444 = (0);
while(true){
if((i__9554__auto___21444 < len__9553__auto___21443)){
args__9560__auto__.push((arguments[i__9554__auto___21444]));

var G__21445 = (i__9554__auto___21444 + (1));
i__9554__auto___21444 = G__21445;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.merge.cljs$lang$applyTo = (function (seq21437){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21437));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21446 = arguments.length;
var i__9554__auto___21447 = (0);
while(true){
if((i__9554__auto___21447 < len__9553__auto___21446)){
args__9560__auto__.push((arguments[i__9554__auto___21447]));

var G__21448 = (i__9554__auto___21447 + (1));
i__9554__auto___21447 = G__21448;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq21438){
var G__21439 = cljs.core.first(seq21438);
var seq21438__$1 = cljs.core.next(seq21438);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__21439,seq21438__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21449 = arguments.length;
var i__9554__auto___21450 = (0);
while(true){
if((i__9554__auto___21450 < len__9553__auto___21449)){
args__9560__auto__.push((arguments[i__9554__auto___21450]));

var G__21451 = (i__9554__auto___21450 + (1));
i__9554__auto___21450 = G__21451;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq21440){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21440));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21452 = arguments.length;
var i__9554__auto___21453 = (0);
while(true){
if((i__9554__auto___21453 < len__9553__auto___21452)){
args__9560__auto__.push((arguments[i__9554__auto___21453]));

var G__21454 = (i__9554__auto___21453 + (1));
i__9554__auto___21453 = G__21454;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq21441){
var G__21442 = cljs.core.first(seq21441);
var seq21441__$1 = cljs.core.next(seq21441);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__21442,seq21441__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newv,cljs.core.cst$sym$returnv], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = cljs.core.cst$sym$clojure$lang$IAtom;
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__21455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21455) : f.call(null,G__21455));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref(atom_);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_((function (){var G__21456 = f;
var G__21457 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21456,G__21457) : taoensso.encore.kw_identical_QMARK_.call(null,G__21456,G__21457));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__21458 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__21459 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__21458,G__21459) : return$.call(null,G__21458,G__21459));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__21460 = v1;
var G__21461 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21460,G__21461) : taoensso.encore.kw_identical_QMARK_.call(null,G__21460,G__21461));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__21462 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__21463 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__21462,G__21463) : return$.call(null,G__21462,G__21463));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__19543__auto__ = cljs.core.seq(ks);
if(b2__19543__auto__){
var ks_seq = b2__19543__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__21464 = f;
var G__21465 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21464,G__21465) : taoensso.encore.kw_identical_QMARK_.call(null,G__21464,G__21465));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__19543__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__19543__auto__))
,ks);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__21466 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__21467 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__21466,G__21467) : return$.call(null,G__21466,G__21467));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__21468 = v1;
var G__21469 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21468,G__21469) : taoensso.encore.kw_identical_QMARK_.call(null,G__21468,G__21469));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__19543__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__19543__auto__))
,ks):cljs.core.assoc_in(m0,ks,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__19543__auto__ = cljs.core.seq(ks);
if(b2__19543__auto__){
var ks_seq = b2__19543__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__21470 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__21471 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__21470,G__21471) : return$.call(null,G__21470,G__21471));
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_21474 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_21474){
return (function taoensso$encore$swap_val_BANG_(var_args){
var G__21473 = arguments.length;
switch (G__21473) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_21474))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21474){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_21474,atom_,k,null,f);
});})(return_21474))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21474){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_21474,atom_,k,not_found,f);
});})(return_21474))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_21478 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_21478){
return (function taoensso$encore$reset_val_BANG_(var_args){
var G__21477 = arguments.length;
switch (G__21477) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_21478))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21478){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_21478,atom_,k,null,val);
});})(return_21478))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21478){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_21478,atom_,k,not_found,val);
});})(return_21478))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_21482 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_21482){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__21481 = arguments.length;
switch (G__21481) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_21482))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21482){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_21482,atom_,k,null,f);
});})(return_21482))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21482){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_21482,atom_,k,not_found,f);
});})(return_21482))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__21485 = arguments.length;
switch (G__21485) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__21486 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,cljs.core.cst$kw$swap_SLASH_dissoc);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21486,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_21492 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_21492){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_21492,new_val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_21492))
;
var return_21495 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_21495){
return (function taoensso$encore$swap_in_BANG_(var_args){
var G__21494 = arguments.length;
switch (G__21494) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_21495))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_21495){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_21495,atom_,f);
});})(return_21495))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21495){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_21495,atom_,ks,null,f);
});})(return_21495))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21495){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_21495,atom_,ks,not_found,f);
});})(return_21495))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_21499 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_21499){
return (function taoensso$encore$reset_in_BANG_(var_args){
var G__21498 = arguments.length;
switch (G__21498) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_21499))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_21499){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_21499,atom_,val);
});})(return_21499))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21499){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_21499,atom_,ks,null,val);
});})(return_21499))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21499){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_21499,atom_,ks,not_found,val);
});})(return_21499))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_21503 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_21503){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__21502 = arguments.length;
switch (G__21502) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_21503))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_21503){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_21503,atom_,f);
});})(return_21503))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_21503){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_21503,atom_,ks,null,f);
});})(return_21503))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_21503){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_21503,atom_,ks,not_found,f);
});})(return_21503))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__19543__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__19543__auto__)){
var perf = b2__19543__auto__;
var b2__19543__auto____$1 = (function (){var or__8274__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__8274__auto____$1)){
return or__8274__auto____$1;
} else {
var or__8274__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__8274__auto____$2)){
return or__8274__auto____$2;
} else {
var or__8274__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__8274__auto____$3)){
return or__8274__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__19543__auto____$1)){
var f = b2__19543__auto____$1;
return ((function (f,b2__19543__auto____$1,perf,b2__19543__auto__){
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
;})(f,b2__19543__auto____$1,perf,b2__19543__auto__))
} else {
return ((function (b2__19543__auto____$1,perf,b2__19543__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__19543__auto____$1,perf,b2__19543__auto__))
}
} else {
return ((function (b2__19543__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__19543__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__21513__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__21507 = x1;
var G__21508 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21507,G__21508) : taoensso.encore.kw_identical_QMARK_.call(null,G__21507,G__21508));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__21509 = x2;
var G__21510 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21509,G__21510) : taoensso.encore.kw_identical_QMARK_.call(null,G__21509,G__21510));
})())){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_(cache_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cache_),xn));
}

return null;
} else {
if(cljs.core.truth_((function (){var G__21511 = x1;
var G__21512 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21511,G__21512) : taoensso.encore.kw_identical_QMARK_.call(null,G__21511,G__21512));
})())){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__21513 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__21514__i = 0, G__21514__a = new Array(arguments.length -  0);
while (G__21514__i < G__21514__a.length) {G__21514__a[G__21514__i] = arguments[G__21514__i + 0]; ++G__21514__i;}
  xs = new cljs.core.IndexedSeq(G__21514__a,0,null);
} 
return G__21513__delegate.call(this,xs);};
G__21513.cljs$lang$maxFixedArity = 0;
G__21513.cljs$lang$applyTo = (function (arglist__21515){
var xs = cljs.core.seq(arglist__21515);
return G__21513__delegate(xs);
});
G__21513.cljs$core$IFn$_invoke$arity$variadic = G__21513__delegate;
return G__21513;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__21516__delegate = function (args){
return cljs.core.deref((function (){var or__8274__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_),args);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__8274__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__8274__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__8274__auto__,cache_))
,null))]);
}
});})(or__8274__auto__,cache_))
),args);
}
})());
};
var G__21516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21517__i = 0, G__21517__a = new Array(arguments.length -  0);
while (G__21517__i < G__21517__a.length) {G__21517__a[G__21517__i] = arguments[G__21517__i + 0]; ++G__21517__i;}
  args = new cljs.core.IndexedSeq(G__21517__a,0,null);
} 
return G__21516__delegate.call(this,args);};
G__21516.cljs$lang$maxFixedArity = 0;
G__21516.cljs$lang$applyTo = (function (arglist__21518){
var args = cljs.core.seq(arglist__21518);
return G__21516__delegate(args);
});
G__21516.cljs$core$IFn$_invoke$arity$variadic = G__21516__delegate;
return G__21516;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lru,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lfu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var G__21520 = arguments.length;
switch (G__21520) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_21544 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e21521){if((e21521 instanceof Error)){
var e = e21521;
return e;
} else {
throw e21521;

}
}})();
if((e_21544 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1736,"(pos-int? ttl-ms)",ttl_ms,e_21544,null);
}

var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__21545__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__21522 = a1;
var G__21523 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21522,G__21523) : taoensso.encore.kw_identical_QMARK_.call(null,G__21522,G__21523));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__21524 = a2;
var G__21525 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21524,G__21525) : taoensso.encore.kw_identical_QMARK_.call(null,G__21524,G__21525));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_21546 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_21546);

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_21546,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_21546,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_21546,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$((function (){var or__8274__auto__ = m;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_21546,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__21526 = a1;
var G__21527 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21526,G__21527) : taoensso.encore.kw_identical_QMARK_.call(null,G__21526,G__21527));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__8274__auto__ = (_QMARK_e == null);
if(or__8274__auto__){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__8274__auto____$1)){
return or__8274__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref(e.delay);
}
};
var G__21545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21547__i = 0, G__21547__a = new Array(arguments.length -  0);
while (G__21547__i < G__21547__a.length) {G__21547__a[G__21547__i] = arguments[G__21547__i + 0]; ++G__21547__i;}
  args = new cljs.core.IndexedSeq(G__21547__a,0,null);
} 
return G__21545__delegate.call(this,args);};
G__21545.cljs$lang$maxFixedArity = 0;
G__21545.cljs$lang$applyTo = (function (arglist__21548){
var args = cljs.core.seq(arglist__21548);
return G__21545__delegate(args);
});
G__21545.cljs$core$IFn$_invoke$arity$variadic = G__21545__delegate;
return G__21545;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (){var fexpr__21530 = (function (x){
var or__8274__auto__ = (x == null);
if(or__8274__auto__){
return or__8274__auto__;
} else {
var fexpr__21532 = taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_);
return (fexpr__21532.cljs$core$IFn$_invoke$arity$1 ? fexpr__21532.cljs$core$IFn$_invoke$arity$1(x) : fexpr__21532.call(null,x));
}
});
return fexpr__21530(ttl_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1787,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_21549 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e21533){if((e21533 instanceof Error)){
var e = e21533;
return e;
} else {
throw e21533;

}
}})();
if((e_21549 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1788,"(pos-int? cache-size)",cache_size,e_21549,null);
}

var tick_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__8274__auto__ = ttl_ms;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$(cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__21550__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__21534 = a1;
var G__21535 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21534,G__21535) : taoensso.encore.kw_identical_QMARK_.call(null,G__21534,G__21535));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__21536 = a2;
var G__21537 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21536,G__21537) : taoensso.encore.kw_identical_QMARK_.call(null,G__21536,G__21537));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_21551 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_21551);

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__8274__auto__ = m;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_21552 = cljs.core.deref(cache_);
var n_to_gc_21553 = (cljs.core.count(snapshot_21552) - cache_size__$1);
if((n_to_gc_21553 > (64))){
var ks_to_gc_21554 = (function (){var G__21538 = n_to_gc_21553;
var G__21539 = ((function (G__21538,snapshot_21552,n_to_gc_21553,latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_21552,k);
return (e.tick_lru + e.tick_lfu);
});})(G__21538,snapshot_21552,n_to_gc_21553,latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
;
var G__21540 = cljs.core.keys(snapshot_21552);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__21538,G__21539,G__21540) : taoensso.encore.top.call(null,G__21538,G__21539,G__21540));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (ks_to_gc_21554,snapshot_21552,n_to_gc_21553,latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_21554,snapshot_21552,n_to_gc_21553,latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_21554,snapshot_21552,n_to_gc_21553,latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__8274__auto__ = m;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_21554));
});})(ks_to_gc_21554,snapshot_21552,n_to_gc_21553,latch_21551,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__21541 = a1;
var G__21542 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21541,G__21542) : taoensso.encore.kw_identical_QMARK_.call(null,G__21541,G__21542));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__8274__auto__ = (_QMARK_e == null);
if(or__8274__auto__){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__8274__auto____$1)){
return or__8274__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref(e.delay);
}
};
var G__21550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21555__i = 0, G__21555__a = new Array(arguments.length -  0);
while (G__21555__i < G__21555__a.length) {G__21555__a[G__21555__i] = arguments[G__21555__i + 0]; ++G__21555__i;}
  args = new cljs.core.IndexedSeq(G__21555__a,0,null);
} 
return G__21550__delegate.call(this,args);};
G__21550.cljs$lang$maxFixedArity = 0;
G__21550.cljs$lang$applyTo = (function (arglist__21556){
var args = cljs.core.seq(arglist__21556);
return G__21550__delegate(args);
});
G__21550.cljs$core$IFn$_invoke$arity$variadic = G__21550__delegate;
return G__21550;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$udt0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$worst_DASH_sid,cljs.core.with_meta(cljs.core.cst$sym$worst_DASH_ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_21569 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e21557){if((e21557 instanceof Error)){
var e = e21557;
return e;
} else {
throw e21557;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1888,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e21558){if((e21558 instanceof Error)){
var e = e21558;
return e;
} else {
throw e21558;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1888,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_21569){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(((function (limit_spec_21569){
return (function (acc,sid,p__21559){
var vec__21560 = p__21559;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21560,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21560,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_21569(n,ms));
});})(limit_spec_21569))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,limit_spec_21569){
return (function (acc,p__21563){
var vec__21564 = p__21563;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21564,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21564,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21564,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__8274__auto__ = _QMARK_id;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core._vreset_BANG_(i,(function (){var G__21568 = cljs.core._deref(i);
var fexpr__21567 = ((function (G__21568,or__8274__auto__,vec__21564,n,ms,_QMARK_id,i,limit_spec_21569){
return (function (i__$1){
return (i__$1 + (1));
});})(G__21568,or__8274__auto__,vec__21564,n,ms,_QMARK_id,i,limit_spec_21569))
;
return fexpr__21567(G__21568);
})());
}
})(),limit_spec_21569(n,ms));
});})(i,limit_spec_21569))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_21569))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reqs_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
var latch_21576 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_21576);

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,((function (latch_21576,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_21576,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv(((function (latch_21576,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__19543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__19543__auto__)){
var s = b2__19543__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
});})(latch_21576,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
});})(latch_21576,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$((function (){var or__8274__auto__ = reqs;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_21576,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref(reqs_);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__19543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__19543__auto__)){
var s = b2__19543__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__8274__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__19543__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__19543__auto__)){
var h = b2__19543__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__19543__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__19543__auto__)){
var l = b2__19543__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__19543__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__19543__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__19543__auto____$1)){
var e = b2__19543__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__19543__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_(reqs_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_((function (){var G__21570 = cmd;
var G__21571 = cljs.core.cst$kw$rl_SLASH_reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21570,G__21571) : taoensso.encore.kw_identical_QMARK_.call(null,G__21570,G__21571));
})())){
if(cljs.core.truth_((function (){var G__21572 = req_id;
var G__21573 = cljs.core.cst$kw$rl_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21572,G__21573) : taoensso.encore.kw_identical_QMARK_.call(null,G__21572,G__21573));
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_((function (){var G__21574 = cmd;
var G__21575 = cljs.core.cst$kw$rl_SLASH_peek;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21574,G__21575) : taoensso.encore.kw_identical_QMARK_.call(null,G__21574,G__21575));
})())){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,cmd,cljs.core.cst$kw$req_DASH_id,req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__21577 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21577,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21577,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__21584 = arguments.length;
switch (G__21584) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___21586 = arguments.length;
var i__9554__auto___21587 = (0);
while(true){
if((i__9554__auto___21587 < len__9553__auto___21586)){
args_arr__9576__auto__.push((arguments[i__9554__auto___21587]));

var G__21588 = (i__9554__auto___21587 + (1));
i__9554__auto___21587 = G__21588;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9577__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq21581){
var G__21582 = cljs.core.first(seq21581);
var seq21581__$1 = cljs.core.next(seq21581);
var G__21583 = cljs.core.first(seq21581__$1);
var seq21581__$2 = cljs.core.next(seq21581__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__21582,G__21583,seq21581__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__21590 = arguments.length;
switch (G__21590) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__8262__auto__ = separator;
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__8262__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__21593 = arguments.length;
switch (G__21593) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__21596 = arguments.length;
switch (G__21596) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__21599 = arguments.length;
switch (G__21599) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__21602__delegate = function (args){
var G__21601 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__21601) : replacement.call(null,G__21601));
};
var G__21602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21603__i = 0, G__21603__a = new Array(arguments.length -  0);
while (G__21603__i < G__21603__a.length) {G__21603__a[G__21603__i] = arguments[G__21603__i + 0]; ++G__21603__i;}
  args = new cljs.core.IndexedSeq(G__21603__a,0,null);
} 
return G__21602__delegate.call(this,args);};
G__21602.cljs$lang$maxFixedArity = 0;
G__21602.cljs$lang$applyTo = (function (arglist__21604){
var args = cljs.core.seq(arglist__21604);
return G__21602__delegate(args);
});
G__21602.cljs$core$IFn$_invoke$arity$variadic = G__21602__delegate;
return G__21602;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__8274__auto__ = fmt;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21607 = arguments.length;
var i__9554__auto___21608 = (0);
while(true){
if((i__9554__auto___21608 < len__9553__auto___21607)){
args__9560__auto__.push((arguments[i__9554__auto___21608]));

var G__21609 = (i__9554__auto___21608 + (1));
i__9554__auto___21608 = G__21609;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq21605){
var G__21606 = cljs.core.first(seq21605);
var seq21605__$1 = cljs.core.next(seq21605);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__21606,seq21605__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__8274__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21611 = arguments.length;
var i__9554__auto___21612 = (0);
while(true){
if((i__9554__auto___21612 < len__9553__auto___21611)){
args__9560__auto__.push((arguments[i__9554__auto___21612]));

var G__21613 = (i__9554__auto___21612 + (1));
i__9554__auto___21612 = G__21613;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq21610){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21610));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__21615 = arguments.length;
switch (G__21615) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21618 = arguments.length;
var i__9554__auto___21619 = (0);
while(true){
if((i__9554__auto___21619 < len__9553__auto___21618)){
args__9560__auto__.push((arguments[i__9554__auto___21619]));

var G__21620 = (i__9554__auto___21619 + (1));
i__9554__auto___21619 = G__21620;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

taoensso.encore.into_str.cljs$lang$applyTo = (function (seq21617){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21617));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
var sentinel_21625 = {};
var nil__GT_sentinel_21626 = ((function (sentinel_21625){
return (function (x){
if((x == null)){
return sentinel_21625;
} else {
return x;
}
});})(sentinel_21625))
;
var sentinel__GT_nil_21627 = ((function (sentinel_21625,nil__GT_sentinel_21626){
return (function (x){
if((x === sentinel_21625)){
return null;
} else {
return x;
}
});})(sentinel_21625,nil__GT_sentinel_21626))
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = ((function (sentinel_21625,nil__GT_sentinel_21626,sentinel__GT_nil_21627){
return (function taoensso$encore$reduce_top(var_args){
var G__21624 = arguments.length;
switch (G__21624) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_21625,nil__GT_sentinel_21626,sentinel__GT_nil_21627))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_21625,nil__GT_sentinel_21626,sentinel__GT_nil_21627){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_21625,nil__GT_sentinel_21626,sentinel__GT_nil_21627))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_21625,nil__GT_sentinel_21626,sentinel__GT_nil_21627){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_21625,nil__GT_sentinel_21626,sentinel__GT_nil_21627))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_21625,nil__GT_sentinel_21626,sentinel__GT_nil_21627){
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__8633__auto__ = coll_size;
var y__8634__auto__ = cljs.core.long$(n);
return ((x__8633__auto__ < y__8634__auto__) ? x__8633__auto__ : y__8634__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
});})(sentinel_21625,nil__GT_sentinel_21626,sentinel__GT_nil_21627))
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__21630 = arguments.length;
switch (G__21630) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__21633 = arguments.length;
switch (G__21633) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21652 = arguments.length;
var i__9554__auto___21653 = (0);
while(true){
if((i__9554__auto___21653 < len__9553__auto___21652)){
args__9560__auto__.push((arguments[i__9554__auto___21653]));

var G__21654 = (i__9554__auto___21653 + (1));
i__9554__auto___21653 = G__21654;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__21648){
var map__21649 = p__21648;
var map__21649__$1 = ((((!((map__21649 == null)))?((((map__21649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21649):map__21649);
var opts = map__21649__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$ms);
taoensso.truss.impl.revery_QMARK_(((function (map__21649,map__21649__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_((function (){var fexpr__21651 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null);
return (fexpr__21651.cljs$core$IFn$_invoke$arity$1 ? fexpr__21651.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__21651.call(null,__in));
})())){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2391,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__21649,map__21649__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq21647){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21647));
});

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
var G__21669__delegate = function (xs){
var b2__19543__auto__ = console.log;
if(cljs.core.truth_(b2__19543__auto__)){
var f = b2__19543__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__21669 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__21670__i = 0, G__21670__a = new Array(arguments.length -  0);
while (G__21670__i < G__21670__a.length) {G__21670__a[G__21670__i] = arguments[G__21670__i + 0]; ++G__21670__i;}
  xs = new cljs.core.IndexedSeq(G__21670__a,0,null);
} 
return G__21669__delegate.call(this,xs);};
G__21669.cljs$lang$maxFixedArity = 0;
G__21669.cljs$lang$applyTo = (function (arglist__21671){
var xs = cljs.core.seq(arglist__21671);
return G__21669__delegate(xs);
});
G__21669.cljs$core$IFn$_invoke$arity$variadic = G__21669__delegate;
return G__21669;
})()
:(function() { 
var G__21672__delegate = function (xs){
return null;
};
var G__21672 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__21673__i = 0, G__21673__a = new Array(arguments.length -  0);
while (G__21673__i < G__21673__a.length) {G__21673__a[G__21673__i] = arguments[G__21673__i + 0]; ++G__21673__i;}
  xs = new cljs.core.IndexedSeq(G__21673__a,0,null);
} 
return G__21672__delegate.call(this,xs);};
G__21672.cljs$lang$maxFixedArity = 0;
G__21672.cljs$lang$applyTo = (function (arglist__21674){
var xs = cljs.core.seq(arglist__21674);
return G__21672__delegate(xs);
});
G__21672.cljs$core$IFn$_invoke$arity$variadic = G__21672__delegate;
return G__21672;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21675 = arguments.length;
var i__9554__auto___21676 = (0);
while(true){
if((i__9554__auto___21676 < len__9553__auto___21675)){
args__9560__auto__.push((arguments[i__9554__auto___21676]));

var G__21677 = (i__9554__auto___21676 + (1));
i__9554__auto___21676 = G__21677;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__21660 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__21660) : taoensso.encore.console_log.call(null,G__21660));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq21659){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21659));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21678 = arguments.length;
var i__9554__auto___21679 = (0);
while(true){
if((i__9554__auto___21679 < len__9553__auto___21678)){
args__9560__auto__.push((arguments[i__9554__auto___21679]));

var G__21680 = (i__9554__auto___21679 + (1));
i__9554__auto___21679 = G__21680;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__21662 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return alert(G__21662);
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq21661){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21661));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21681 = arguments.length;
var i__9554__auto___21682 = (0);
while(true){
if((i__9554__auto___21682 < len__9553__auto___21681)){
args__9560__auto__.push((arguments[i__9554__auto___21682]));

var G__21683 = (i__9554__auto___21682 + (1));
i__9554__auto___21682 = G__21683;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__21665 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__21665) : taoensso.encore.console_log.call(null,G__21665));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq21663){
var G__21664 = cljs.core.first(seq21663);
var seq21663__$1 = cljs.core.next(seq21663);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__21664,seq21663__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21684 = arguments.length;
var i__9554__auto___21685 = (0);
while(true){
if((i__9554__auto___21685 < len__9553__auto___21684)){
args__9560__auto__.push((arguments[i__9554__auto___21685]));

var G__21686 = (i__9554__auto___21685 + (1));
i__9554__auto___21685 = G__21686;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__21668 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__21668);
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq21666){
var G__21667 = cljs.core.first(seq21666);
var seq21666__$1 = cljs.core.next(seq21666);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__21667,seq21666__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__19543__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__19543__auto__)){
var js_win = b2__19543__auto__;
var b2__19543__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__19543__auto____$1)){
var loc = b2__19543__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref(taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return (function (){var G__21687 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__21687);
})().toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_((taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : taoensso.encore.js_form_data_QMARK_.call(null,params)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_21705 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e21688){if((e21688 instanceof Error)){
var e = e21688;
return e;
} else {
throw e21688;

}
}})();
if((e_21705 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2694,"(map? params)",params,e_21705,null);
}

if(cljs.core.truth_((function (){var and__8262__auto__ = typeof FormData !== 'undefined';
if(and__8262__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__8262__auto__;
}
})())){
var form_data = (new FormData());
var seq__21689_21706 = cljs.core.seq(params);
var chunk__21690_21707 = null;
var count__21691_21708 = (0);
var i__21692_21709 = (0);
while(true){
if((i__21692_21709 < count__21691_21708)){
var vec__21693_21710 = chunk__21690_21707.cljs$core$IIndexed$_nth$arity$2(null,i__21692_21709);
var k_21711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21693_21710,(0),null);
var v_21712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21693_21710,(1),null);
form_data.append(cljs.core.name(k_21711),v_21712);

var G__21713 = seq__21689_21706;
var G__21714 = chunk__21690_21707;
var G__21715 = count__21691_21708;
var G__21716 = (i__21692_21709 + (1));
seq__21689_21706 = G__21713;
chunk__21690_21707 = G__21714;
count__21691_21708 = G__21715;
i__21692_21709 = G__21716;
continue;
} else {
var temp__5535__auto___21717 = cljs.core.seq(seq__21689_21706);
if(temp__5535__auto___21717){
var seq__21689_21718__$1 = temp__5535__auto___21717;
if(cljs.core.chunked_seq_QMARK_(seq__21689_21718__$1)){
var c__9205__auto___21719 = cljs.core.chunk_first(seq__21689_21718__$1);
var G__21720 = cljs.core.chunk_rest(seq__21689_21718__$1);
var G__21721 = c__9205__auto___21719;
var G__21722 = cljs.core.count(c__9205__auto___21719);
var G__21723 = (0);
seq__21689_21706 = G__21720;
chunk__21690_21707 = G__21721;
count__21691_21708 = G__21722;
i__21692_21709 = G__21723;
continue;
} else {
var vec__21696_21724 = cljs.core.first(seq__21689_21718__$1);
var k_21725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21696_21724,(0),null);
var v_21726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21696_21724,(1),null);
form_data.append(cljs.core.name(k_21725),v_21726);

var G__21727 = cljs.core.next(seq__21689_21718__$1);
var G__21728 = null;
var G__21729 = (0);
var G__21730 = (0);
seq__21689_21706 = G__21727;
chunk__21690_21707 = G__21728;
count__21691_21708 = G__21729;
i__21692_21709 = G__21730;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.cljs$core$IFn$_invoke$arity$1(params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_((function (){var fexpr__21701 = ((function (url_encode,adaptive_encode){
return (function (x){
var or__8274__auto__ = (x == null);
if(or__8274__auto__){
return or__8274__auto__;
} else {
var fexpr__21703 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__21703.cljs$core$IFn$_invoke$arity$1 ? fexpr__21703.cljs$core$IFn$_invoke$arity$1(x) : fexpr__21703.call(null,x));
}
});})(url_encode,adaptive_encode))
;
return fexpr__21701(params);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2706,"([:or nil? map?] params)",params,null,null);
}

var G__21704 = method;
var G__21704__$1 = (((G__21704 instanceof cljs.core.Keyword))?G__21704.fqn:null);
switch (G__21704__$1) {
case "get":
return url_encode.cljs$core$IFn$_invoke$arity$2(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21704__$1)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__21733,callback_fn){
var map__21734 = p__21733;
var map__21734__$1 = ((((!((map__21734 == null)))?((((map__21734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21734):map__21734);
var opts = map__21734__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21734__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21734__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21734__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21734__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21734__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21734__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_((function (){var fexpr__21738 = ((function (map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__8274__auto__ = (x == null);
if(or__8274__auto__){
return or__8274__auto__;
} else {
var fexpr__21740 = taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_);
return (fexpr__21740.cljs$core$IFn$_invoke$arity$1 ? fexpr__21740.cljs$core$IFn$_invoke$arity$1(x) : fexpr__21740.call(null,x));
}
});})(map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
return fexpr__21738(timeout_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2738,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__19543__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__19543__auto__)){
var xhr = b2__19543__auto__;
try{var timeout_ms__$1 = (function (){var or__8274__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__21746 = method;
var G__21746__$1 = (((G__21746 instanceof cljs.core.Keyword))?G__21746.fqn:null);
switch (G__21746__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21746__$1)].join('')));

}
})();
var vec__21743 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21743,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21743,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys(((function (timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__21732_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__21732_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var G__21747_21766 = xhr;
var G__21748_21767 = G__21747_21766;
var G__21749_21768 = goog.net.EventType.READY;
var G__21750_21769 = ((function (G__21748_21767,G__21749_21768,G__21747_21766,timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__21748_21767,G__21749_21768,G__21747_21766,timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__21748_21767,G__21749_21768,G__21750_21769);

var G__21751_21770 = G__21747_21766;
var G__21752_21771 = goog.net.EventType.COMPLETE;
var G__21753_21772 = ((function (G__21751_21770,G__21752_21771,G__21747_21766,timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__21754 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?resp_type:(((_QMARK_content_type == null))?cljs.core.cst$kw$text:(function (){var cts = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__21751_21770,G__21752_21771,G__21747_21766,timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__21751_21770,G__21752_21771,G__21747_21766,timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_("/edn"))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(match_QMARK_("/json"))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(match_QMARK_("/xml"))){
return cljs.core.cst$kw$xml;
} else {
return cljs.core.cst$kw$text;
}
}
}
})()));
try{var G__21758 = resp_type__$1;
var G__21758__$1 = (((G__21758 instanceof cljs.core.Keyword))?G__21758.fqn:null);
switch (G__21758__$1) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21758__$1)].join('')));

}
}catch (e21757){if((e21757 instanceof Error)){
var _e = e21757;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e21757;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21754,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21754,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21754,(2),null);
var G__21759 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout]),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__21759) : callback_fn.call(null,G__21759));
});})(G__21751_21770,G__21752_21771,G__21747_21766,timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__21751_21770,G__21752_21771,G__21753_21772);


var b2__19543__auto___21774__$1 = cljs.core.cst$kw$progress_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__19543__auto___21774__$1)){
var pf_21775 = b2__19543__auto___21774__$1;
var G__21760_21776 = xhr;
var G__21761_21777 = goog.net.EventType.PROGRESS;
var G__21762_21778 = ((function (G__21760_21776,G__21761_21777,pf_21775,b2__19543__auto___21774__$1,timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__8262__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__8262__auto__;
}
})())?(loaded / total):null);
var G__21763 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf_21775.cljs$core$IFn$_invoke$arity$1 ? pf_21775.cljs$core$IFn$_invoke$arity$1(G__21763) : pf_21775.call(null,G__21763));
});})(G__21760_21776,G__21761_21777,pf_21775,b2__19543__auto___21774__$1,timeout_ms__$1,xhr_method,vec__21743,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__19543__auto__,map__21734,map__21734__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listen(G__21760_21776,G__21761_21777,G__21762_21778);
} else {
}

xhr.setTimeoutInterval((function (){var or__8274__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e21741){if((e21741 instanceof Error)){
var e = e21741;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__21742_21779 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__21742_21779) : callback_fn.call(null,G__21742_21779));

return null;
} else {
throw e21741;

}
}} else {
var G__21764_21780 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__21764_21780) : callback_fn.call(null,G__21764_21780));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace((function (){var G__21781 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
var G__21782 = s;
return encodeURIComponent(G__21781,G__21782);
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21789 = arguments.length;
var i__9554__auto___21790 = (0);
while(true){
if((i__9554__auto___21790 < len__9553__auto___21789)){
args__9560__auto__.push((arguments[i__9554__auto___21790]));

var G__21791 = (i__9554__auto___21790 + (1));
i__9554__auto___21790 = G__21791;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21785){
var vec__21786 = p__21785;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq21783){
var G__21784 = cljs.core.first(seq21783);
var seq21783__$1 = cljs.core.next(seq21783);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__21784,seq21783__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode(taoensso.encore.as_qname(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode((function (){var or__8274__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__9156__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__21792(s__21793){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__21793__$1 = s__21793;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__21793__$1);
if(temp__5535__auto__){
var s__21793__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21793__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__21793__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__21795 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__21794 = (0);
while(true){
if((i__21794 < size__9155__auto__)){
var vec__21796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__21794);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21796,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__21795,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__8274__auto__ = cljs.core.seq(v);
if(or__8274__auto__){
return or__8274__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__21802 = (i__21794 + (1));
i__21794 = G__21802;
continue;
} else {
var G__21803 = (i__21794 + (1));
i__21794 = G__21803;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21795),taoensso$encore$format_query_string_$_iter__21792(cljs.core.chunk_rest(s__21793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21795),null);
}
} else {
var vec__21799 = cljs.core.first(s__21793__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21799,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__8274__auto__ = cljs.core.seq(v);
if(or__8274__auto__){
return or__8274__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__21792(cljs.core.rest(s__21793__$2)));
} else {
var G__21804 = cljs.core.rest(s__21793__$2);
s__21793__$1 = G__21804;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__9156__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__19543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__19543__auto__)){
var cur = b2__19543__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21814 = arguments.length;
var i__9554__auto___21815 = (0);
while(true){
if((i__9554__auto___21815 < len__9553__auto___21814)){
args__9560__auto__.push((arguments[i__9554__auto___21815]));

var G__21816 = (i__9554__auto___21815 + (1));
i__9554__auto___21815 = G__21816;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__21807){
var vec__21808 = p__21807;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,(1),null);
if((clojure.string.blank_QMARK_(s)) || (!(taoensso.encore.str_contains_QMARK_(s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__21808,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__19543__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__19543__auto__)){
var vec__21811 = b2__19543__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21811,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__21808,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq21805){
var G__21806 = cljs.core.first(seq21805);
var seq21805__$1 = cljs.core.next(seq21805);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__21806,seq21805__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__21817 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21817,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21817,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__19543__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__19543__auto__)){
var qstr = b2__19543__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__21820__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__21820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21821__i = 0, G__21821__a = new Array(arguments.length -  0);
while (G__21821__i < G__21821__a.length) {G__21821__a[G__21821__i] = arguments[G__21821__i + 0]; ++G__21821__i;}
  args = new cljs.core.IndexedSeq(G__21821__a,0,null);
} 
return G__21820__delegate.call(this,args);};
G__21820.cljs$lang$maxFixedArity = 0;
G__21820.cljs$lang$applyTo = (function (arglist__21822){
var args = cljs.core.seq(arglist__21822);
return G__21820__delegate(args);
});
G__21820.cljs$core$IFn$_invoke$arity$variadic = G__21820__delegate;
return G__21820;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,f,cljs.core.cst$kw$type,cljs.core.type(f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_(x)){
return (function (ns_str){
return cljs.core.re_find(x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_(x,"*")){
var re = cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"$"].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find(re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,x);
});
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_(x)){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$whitelist.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$blacklist.cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_(x)) || (cljs.core.set_QMARK_(x))){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(x,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1(x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__21825 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21825) : match_QMARK_.call(null,G__21825));
})())){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq(whitelist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,whitelist);
var vec__21826 = match_fns;
var seq__21827 = cljs.core.seq(vec__21826);
var first__21828 = cljs.core.first(seq__21827);
var seq__21827__$1 = cljs.core.next(seq__21827);
var m1 = first__21828;
var mn = seq__21827__$1;
if(mn){
return ((function (match_fns,vec__21826,seq__21827,first__21828,seq__21827__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome(((function (match_fns,vec__21826,seq__21827,first__21828,seq__21827__$1,m1,mn,compile1){
return (function (p1__21823_SHARP_){
return (p1__21823_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21823_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__21823_SHARP_.call(null,ns_str));
});})(match_fns,vec__21826,seq__21827,first__21828,seq__21827__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__21826,seq__21827,first__21828,seq__21827__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__21826,seq__21827,first__21828,seq__21827__$1,m1,mn,compile1){
return (function (ns_str){
return (m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str));
});
;})(match_fns,vec__21826,seq__21827,first__21828,seq__21827__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq(blacklist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,blacklist);
var vec__21829 = match_fns;
var seq__21830 = cljs.core.seq(vec__21829);
var first__21831 = cljs.core.first(seq__21830);
var seq__21830__$1 = cljs.core.next(seq__21830);
var m1 = first__21831;
var mn = seq__21830__$1;
if(mn){
return ((function (match_fns,vec__21829,seq__21830,first__21831,seq__21830__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome(((function (match_fns,vec__21829,seq__21830,first__21831,seq__21830__$1,m1,mn,white,compile1){
return (function (p1__21824_SHARP_){
return (p1__21824_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21824_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__21824_SHARP_.call(null,ns_str));
});})(match_fns,vec__21829,seq__21830,first__21831,seq__21830__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__21829,seq__21830,first__21831,seq__21830__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__21829,seq__21830,first__21831,seq__21830__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not((m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str)));
});
;})(match_fns,vec__21829,seq__21830,first__21831,seq__21830__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__8262__auto__ = white;
if(cljs.core.truth_(and__8262__auto__)){
return black;
} else {
return and__8262__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
if(cljs.core.truth_((white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(ns_str) : white.call(null,ns_str)))){
if(cljs.core.truth_((black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(ns_str) : black.call(null,ns_str)))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__21832 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(G__21832) : white.call(null,G__21832));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__21833 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(G__21833) : black.call(null,G__21833));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__9007__auto__ = (((_ == null))?null:_);
var m__9008__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__9008__auto__.call(null,_,msecs,f));
} else {
var m__9008__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__9008__auto____$1.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return cljs.core.cst$kw$timeout_SLASH_pending;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return cljs.core.cst$kw$timeout_SLASH_cancelled;
} else {
return cljs.core.deref(result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__9007__auto__ = (((_ == null))?null:_);
var m__9008__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto__.call(null,_));
} else {
var m__9008__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__9007__auto__ = (((_ == null))?null:_);
var m__9008__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto__.call(null,_));
} else {
var m__9008__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__9007__auto__ = (((_ == null))?null:_);
var m__9008__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto__.call(null,_));
} else {
var m__9008__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__9007__auto__ = (((_ == null))?null:_);
var m__9008__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto__.call(null,_));
} else {
var m__9008__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__9007__auto__ = (((_ == null))?null:_);
var m__9008__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto__.call(null,_));
} else {
var m__9008__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__9007__auto__ = (((_ == null))?null:_);
var m__9008__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto__.call(null,_));
} else {
var m__9008__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9008__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,self__.f,cljs.core.cst$kw$udt,self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result(cljs.core.deref(self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var G__21838 = cljs.core.deref(self__.result__);
var G__21839 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21838,G__21839) : taoensso.encore.kw_identical_QMARK_.call(null,G__21838,G__21839));
})());
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__21840 = cljs.core.deref(self__.result__);
var G__21841 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21840,G__21841) : taoensso.encore.kw_identical_QMARK_.call(null,G__21840,G__21841));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__21842 = cljs.core.deref(self__.result__);
var G__21843 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21842,G__21843) : taoensso.encore.kw_identical_QMARK_.call(null,G__21842,G__21843));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$result__,cljs.core.cst$sym$udt], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__21845 = arguments.length;
switch (G__21845) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_))){
return cljs.core.deref(result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_21847 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_21847,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__21849){
var map__21850 = p__21849;
var map__21850__$1 = ((((!((map__21850 == null)))?((((map__21850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21850):map__21850);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21850__$1,cljs.core.cst$kw$before,cljs.core.cst$sym$do);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21850__$1,cljs.core.cst$kw$after,cljs.core.cst$sym$do);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9228__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__21848__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9228__auto__ = before;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__21848__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})(),(function (){var x__9228__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9228__auto__ = after;
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9228__auto__);
})()], 0))));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21978 = arguments.length;
var i__9554__auto___21979 = (0);
while(true){
if((i__9554__auto___21979 < len__9553__auto___21978)){
args__9560__auto__.push((arguments[i__9554__auto___21979]));

var G__21980 = (i__9554__auto___21979 + (1));
i__9554__auto___21979 = G__21980;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__21858){
var vec__21859 = p__21858;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21859,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21859,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__8274__auto__ = type;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq21856){
var G__21857 = cljs.core.first(seq21856);
var seq21856__$1 = cljs.core.next(seq21856);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__21857,seq21856__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__21863 = arguments.length;
switch (G__21863) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21982 = arguments.length;
var i__9554__auto___21983 = (0);
while(true){
if((i__9554__auto___21983 < len__9553__auto___21982)){
args__9560__auto__.push((arguments[i__9554__auto___21983]));

var G__21984 = (i__9554__auto___21983 + (1));
i__9554__auto___21983 = G__21984;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq21864){
var G__21865 = cljs.core.first(seq21864);
var seq21864__$1 = cljs.core.next(seq21864);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__21865,seq21864__$1);
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome((function (p__21866){
var vec__21867 = p__21866;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21867,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21867,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21867,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__21985__delegate = function (args){
var b2__19543__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__19543__auto__)){
var vec__21870 = b2__19543__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__21985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21986__i = 0, G__21986__a = new Array(arguments.length -  0);
while (G__21986__i < G__21986__a.length) {G__21986__a[G__21986__i] = arguments[G__21986__i + 0]; ++G__21986__i;}
  args = new cljs.core.IndexedSeq(G__21986__a,0,null);
} 
return G__21985__delegate.call(this,args);};
G__21985.cljs$lang$maxFixedArity = 0;
G__21985.cljs$lang$applyTo = (function (arglist__21987){
var args = cljs.core.seq(arglist__21987);
return G__21985__delegate(args);
});
G__21985.cljs$core$IFn$_invoke$arity$variadic = G__21985__delegate;
return G__21985;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
var G__21988__delegate = function (args){
var b2__19543__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__19543__auto__)){
var backoff = b2__19543__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__21988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21989__i = 0, G__21989__a = new Array(arguments.length -  0);
while (G__21989__i < G__21989__a.length) {G__21989__a[G__21989__i] = arguments[G__21989__i + 0]; ++G__21989__i;}
  args = new cljs.core.IndexedSeq(G__21989__a,0,null);
} 
return G__21988__delegate.call(this,args);};
G__21988.cljs$lang$maxFixedArity = 0;
G__21988.cljs$lang$applyTo = (function (arglist__21990){
var args = cljs.core.seq(arglist__21990);
return G__21988__delegate(args);
});
G__21988.cljs$core$IFn$_invoke$arity$variadic = G__21988__delegate;
return G__21988;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__21991__delegate = function (args){
var b2__19543__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__19543__auto__)){
var backoff_ms = b2__19543__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__21991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21992__i = 0, G__21992__a = new Array(arguments.length -  0);
while (G__21992__i < G__21992__a.length) {G__21992__a[G__21992__i] = arguments[G__21992__i + 0]; ++G__21992__i;}
  args = new cljs.core.IndexedSeq(G__21992__a,0,null);
} 
return G__21991__delegate.call(this,args);};
G__21991.cljs$lang$maxFixedArity = 0;
G__21991.cljs$lang$applyTo = (function (arglist__21993){
var args = cljs.core.seq(arglist__21993);
return G__21991__delegate(args);
});
G__21991.cljs$core$IFn$_invoke$arity$variadic = G__21991__delegate;
return G__21991;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug);

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21994 = arguments.length;
var i__9554__auto___21995 = (0);
while(true){
if((i__9554__auto___21995 < len__9553__auto___21994)){
args__9560__auto__.push((arguments[i__9554__auto___21995]));

var G__21996 = (i__9554__auto___21995 + (1));
i__9554__auto___21995 = G__21996;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__21875){
var vec__21876 = p__21875;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21876,(0),null);
var b2__19543__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__19543__auto__)){
var js_win = b2__19543__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__8274__auto__ = nattempt;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq21873){
var G__21874 = cljs.core.first(seq21873);
var seq21873__$1 = cljs.core.next(seq21873);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21874,seq21873__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__9560__auto__ = [];
var len__9553__auto___21997 = arguments.length;
var i__9554__auto___21998 = (0);
while(true){
if((i__9554__auto___21998 < len__9553__auto___21997)){
args__9560__auto__.push((arguments[i__9554__auto___21998]));

var G__21999 = (i__9554__auto___21998 + (1));
i__9554__auto___21998 = G__21999;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__21881 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21881) : taoensso.encore.log_QMARK_.call(null,G__21881));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq21879){
var G__21880 = cljs.core.first(seq21879);
var seq21879__$1 = cljs.core.next(seq21879);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__21880,seq21879__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22000 = arguments.length;
var i__9554__auto___22001 = (0);
while(true){
if((i__9554__auto___22001 < len__9553__auto___22000)){
args__9560__auto__.push((arguments[i__9554__auto___22001]));

var G__22002 = (i__9554__auto___22001 + (1));
i__9554__auto___22001 = G__22002;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__21884 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21884) : taoensso.encore.log_QMARK_.call(null,G__21884));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq21882){
var G__21883 = cljs.core.first(seq21882);
var seq21882__$1 = cljs.core.next(seq21882);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__21883,seq21882__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22003 = arguments.length;
var i__9554__auto___22004 = (0);
while(true){
if((i__9554__auto___22004 < len__9553__auto___22003)){
args__9560__auto__.push((arguments[i__9554__auto___22004]));

var G__22005 = (i__9554__auto___22004 + (1));
i__9554__auto___22004 = G__22005;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__21887 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21887) : taoensso.encore.log_QMARK_.call(null,G__21887));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq21885){
var G__21886 = cljs.core.first(seq21885);
var seq21885__$1 = cljs.core.next(seq21885);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__21886,seq21885__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22006 = arguments.length;
var i__9554__auto___22007 = (0);
while(true){
if((i__9554__auto___22007 < len__9553__auto___22006)){
args__9560__auto__.push((arguments[i__9554__auto___22007]));

var G__22008 = (i__9554__auto___22007 + (1));
i__9554__auto___22007 = G__22008;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__21890 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21890) : taoensso.encore.log_QMARK_.call(null,G__21890));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq21888){
var G__21889 = cljs.core.first(seq21888);
var seq21888__$1 = cljs.core.next(seq21888);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__21889,seq21888__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22009 = arguments.length;
var i__9554__auto___22010 = (0);
while(true){
if((i__9554__auto___22010 < len__9553__auto___22009)){
args__9560__auto__.push((arguments[i__9554__auto___22010]));

var G__22011 = (i__9554__auto___22010 + (1));
i__9554__auto___22010 = G__22011;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__21893 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21893) : taoensso.encore.log_QMARK_.call(null,G__21893));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq21891){
var G__21892 = cljs.core.first(seq21891);
var seq21891__$1 = cljs.core.next(seq21891);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__21892,seq21891__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22012 = arguments.length;
var i__9554__auto___22013 = (0);
while(true){
if((i__9554__auto___22013 < len__9553__auto___22012)){
args__9560__auto__.push((arguments[i__9554__auto___22013]));

var G__22014 = (i__9554__auto___22013 + (1));
i__9554__auto___22013 = G__22014;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__21896 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21896) : taoensso.encore.log_QMARK_.call(null,G__21896));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq21894){
var G__21895 = cljs.core.first(seq21894);
var seq21894__$1 = cljs.core.next(seq21894);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__21895,seq21894__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22015 = arguments.length;
var i__9554__auto___22016 = (0);
while(true){
if((i__9554__auto___22016 < len__9553__auto___22015)){
args__9560__auto__.push((arguments[i__9554__auto___22016]));

var G__22017 = (i__9554__auto___22016 + (1));
i__9554__auto___22016 = G__22017;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__21899 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21899) : taoensso.encore.log_QMARK_.call(null,G__21899));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq21897){
var G__21898 = cljs.core.first(seq21897);
var seq21897__$1 = cljs.core.next(seq21897);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__21898,seq21897__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22018 = arguments.length;
var i__9554__auto___22019 = (0);
while(true){
if((i__9554__auto___22019 < len__9553__auto___22018)){
args__9560__auto__.push((arguments[i__9554__auto___22019]));

var G__22020 = (i__9554__auto___22019 + (1));
i__9554__auto___22019 = G__22020;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__21902){
var vec__21903 = p__21902;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21903,(0),null);
var comparator = (function (){var or__8274__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__21903,_QMARK_comparator){
return (function (p1__21852_SHARP_,p2__21853_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__21852_SHARP_,p2__21853_SHARP_) : comparator.call(null,p1__21852_SHARP_,p2__21853_SHARP_)) > (0))){
return p2__21853_SHARP_;
} else {
return p1__21852_SHARP_;
}
});})(comparator,vec__21903,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq21900){
var G__21901 = cljs.core.first(seq21900);
var seq21900__$1 = cljs.core.next(seq21900);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__21901,seq21900__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22021 = arguments.length;
var i__9554__auto___22022 = (0);
while(true){
if((i__9554__auto___22022 < len__9553__auto___22021)){
args__9560__auto__.push((arguments[i__9554__auto___22022]));

var G__22023 = (i__9554__auto___22022 + (1));
i__9554__auto___22022 = G__22023;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__21908){
var vec__21909 = p__21908;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21909,(0),null);
var comparator = (function (){var or__8274__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__21909,_QMARK_comparator){
return (function (p1__21854_SHARP_,p2__21855_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__21854_SHARP_,p2__21855_SHARP_) : comparator.call(null,p1__21854_SHARP_,p2__21855_SHARP_)) < (0))){
return p2__21855_SHARP_;
} else {
return p1__21854_SHARP_;
}
});})(comparator,vec__21909,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq21906){
var G__21907 = cljs.core.first(seq21906);
var seq21906__$1 = cljs.core.next(seq21906);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__21907,seq21906__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__8274__auto__ = x;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__21916 = (function (p__21917,seen__$1){
while(true){
var vec__21918 = p__21917;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21918,(0),null);
var xs__$1 = vec__21918;
var b2__19543__auto__ = cljs.core.seq(xs__$1);
if(b2__19543__auto__){
var s = b2__19543__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__22024 = cljs.core.rest(s);
var G__22025 = seen__$1;
p__21917 = G__22024;
seen__$1 = G__22025;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
});
return fexpr__21916(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__21922 = arguments.length;
switch (G__21922) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21923,in$){
var vec__21924 = p__21923;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_((function (){var G__21927 = kf;
var G__21928 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21927,G__21928) : taoensso.encore.kw_identical_QMARK_.call(null,G__21927,G__21928));
})())?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22027 = arguments.length;
var i__9554__auto___22028 = (0);
while(true){
if((i__9554__auto___22028 < len__9553__auto___22027)){
args__9560__auto__.push((arguments[i__9554__auto___22028]));

var G__22029 = (i__9554__auto___22028 + (1));
i__9554__auto___22028 = G__22029;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__21931){
var vec__21932 = p__21931;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21932,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21932,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__21932,kf,vf){
return (function (_,v){
return v;
});})(vec__21932,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__21932,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__21932,kf,vf))
:(cljs.core.truth_((function (){var G__21935 = kf;
var G__21936 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21935,G__21936) : taoensso.encore.kw_identical_QMARK_.call(null,G__21935,G__21936));
})())?((function (vf__$1,vec__21932,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__21932,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__21932,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__21932,kf,vf))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq21929){
var G__21930 = cljs.core.first(seq21929);
var seq21929__$1 = cljs.core.next(seq21929);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__21930,seq21929__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22030 = arguments.length;
var i__9554__auto___22031 = (0);
while(true){
if((i__9554__auto___22031 < len__9553__auto___22030)){
args__9560__auto__.push((arguments[i__9554__auto___22031]));

var G__22032 = (i__9554__auto___22031 + (1));
i__9554__auto___22031 = G__22032;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((2) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9561__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq21937){
var G__21938 = cljs.core.first(seq21937);
var seq21937__$1 = cljs.core.next(seq21937);
var G__21939 = cljs.core.first(seq21937__$1);
var seq21937__$2 = cljs.core.next(seq21937__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__21938,G__21939,seq21937__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__8633__auto__ = signed_idx;
var y__8634__auto__ = max_idx;
return ((x__8633__auto__ < y__8634__auto__) ? x__8633__auto__ : y__8634__auto__);
} else {
var x__8626__auto__ = (0);
var y__8627__auto__ = (signed_idx + max_idx);
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22033 = arguments.length;
var i__9554__auto___22034 = (0);
while(true){
if((i__9554__auto___22034 < len__9553__auto___22033)){
args__9560__auto__.push((arguments[i__9554__auto___22034]));

var G__22035 = (i__9554__auto___22034 + (1));
i__9554__auto___22034 = G__22035;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((2) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9561__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__21943){
var map__21944 = p__21943;
var map__21944__$1 = ((((!((map__21944 == null)))?((((map__21944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21944):map__21944);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21944__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21944__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__20002__auto__ = (start_idx_STAR_ + max_len);
var n2__20003__auto__ = xlen;
if((n1__20002__auto__ > n2__20003__auto__)){
return n2__20003__auto__;
} else {
return n1__20002__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq21940){
var G__21941 = cljs.core.first(seq21940);
var seq21940__$1 = cljs.core.next(seq21940);
var G__21942 = cljs.core.first(seq21940__$1);
var seq21940__$2 = cljs.core.next(seq21940__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__21941,G__21942,seq21940__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22036 = arguments.length;
var i__9554__auto___22037 = (0);
while(true){
if((i__9554__auto___22037 < len__9553__auto___22036)){
args__9560__auto__.push((arguments[i__9554__auto___22037]));

var G__22038 = (i__9554__auto___22037 + (1));
i__9554__auto___22037 = G__22038;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((2) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9561__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__21949){
var vec__21950 = p__21949;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21950,(0),null);
var vec__21953 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21953,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21953,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq21946){
var G__21947 = cljs.core.first(seq21946);
var seq21946__$1 = cljs.core.next(seq21946);
var G__21948 = cljs.core.first(seq21946__$1);
var seq21946__$2 = cljs.core.next(seq21946__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__21947,G__21948,seq21946__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22039 = arguments.length;
var i__9554__auto___22040 = (0);
while(true){
if((i__9554__auto___22040 < len__9553__auto___22039)){
args__9560__auto__.push((arguments[i__9554__auto___22040]));

var G__22041 = (i__9554__auto___22040 + (1));
i__9554__auto___22040 = G__22041;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((2) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9561__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__21959){
var vec__21960 = p__21959;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960,(0),null);
var vec__21963 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21963,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21963,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq21956){
var G__21957 = cljs.core.first(seq21956);
var seq21956__$1 = cljs.core.next(seq21956);
var G__21958 = cljs.core.first(seq21956__$1);
var seq21956__$2 = cljs.core.next(seq21956__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21957,G__21958,seq21956__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_(x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_(coll))){
var vec__21968 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21968,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__22042 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__22043 = cljs.core.next(ks__$1);
var G__22044 = cljs.core.next(vs__$1);
m = G__22042;
ks__$1 = G__22043;
vs__$1 = G__22044;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__9560__auto__ = [];
var len__9553__auto___22045 = arguments.length;
var i__9554__auto___22046 = (0);
while(true){
if((i__9554__auto___22046 < len__9553__auto___22045)){
args__9560__auto__.push((arguments[i__9554__auto___22046]));

var G__22047 = (i__9554__auto___22046 + (1));
i__9554__auto___22046 = G__22047;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__21973 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21973,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21973,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21973,(2),null);
var f = (cljs.core.truth_((function (){var G__21976 = type;
var G__21977 = cljs.core.cst$kw$reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__21976,G__21977) : taoensso.encore.kw_identical_QMARK_.call(null,G__21976,G__21977));
})())?((function (vec__21973,type,ks,valf){
return (function (_){
return valf;
});})(vec__21973,type,ks,valf))
:valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq21971){
var G__21972 = cljs.core.first(seq21971);
var seq21971__$1 = cljs.core.next(seq21971);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__21972,seq21971__$1);
});

