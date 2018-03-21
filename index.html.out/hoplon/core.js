// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');
goog.require('clojure.data');
cljs.core.enable_console_print_BANG_();






hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8274__auto__ = (function (){var and__8262__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8262__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__18742 = (i + (1));
var G__18743 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__18742;
ret = G__18743;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__18745 = arguments.length;
switch (G__18745) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__18747 = (i + (1));
i = G__18747;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;

hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18749_SHARP_,p2__18748_SHARP_){
if((p2__18748_SHARP_ == null)){
return p1__18749_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__18749_SHARP_,p2__18748_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var old = hoplon.core.child_vec(this$);
var G__18756 = old;
var vec__18758 = G__18756;
var seq__18759 = cljs.core.seq(vec__18758);
var first__18760 = cljs.core.first(seq__18759);
var seq__18759__$1 = cljs.core.next(seq__18759);
var o = first__18760;
var os = seq__18759__$1;
var G__18757 = new$__$1;
var vec__18761 = G__18757;
var seq__18762 = cljs.core.seq(vec__18761);
var first__18763 = cljs.core.first(seq__18762);
var seq__18762__$1 = cljs.core.next(seq__18762);
var x = first__18763;
var xs = seq__18762__$1;
var G__18756__$1 = G__18756;
var G__18757__$1 = G__18757;
while(true){
var vec__18764 = G__18756__$1;
var seq__18765 = cljs.core.seq(vec__18764);
var first__18766 = cljs.core.first(seq__18765);
var seq__18765__$1 = cljs.core.next(seq__18765);
var o__$1 = first__18766;
var os__$1 = seq__18765__$1;
var vec__18767 = G__18757__$1;
var seq__18768 = cljs.core.seq(vec__18767);
var first__18769 = cljs.core.first(seq__18768);
var seq__18768__$1 = cljs.core.next(seq__18768);
var x__$1 = first__18769;
var xs__$1 = seq__18768__$1;
if(cljs.core.truth_((function (){var or__8274__auto__ = o__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return x__$1;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,o__$1)){
} else {
if(cljs.core.truth_((function (){var and__8262__auto__ = x__$1;
if(cljs.core.truth_(and__8262__auto__)){
return o__$1;
} else {
return and__8262__auto__;
}
})())){
this$.replaceChild(x__$1,o__$1);
} else {
if(cljs.core.truth_(x__$1)){
this$.appendChild(x__$1);
} else {
if(cljs.core.truth_(o__$1)){
this$.removeChild(o__$1);
} else {
}
}
}
}

var G__18770 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([x__$1]),os__$1);
var G__18771 = xs__$1;
G__18756__$1 = G__18770;
G__18757__$1 = G__18771;
continue;
} else {
return null;
}
break;
}
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core._elem_BANG_ = (function hoplon$core$_elem_BANG_(elem,this$,value){
return (hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.elem_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.elem_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_elem_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__18773 = arguments.length;
switch (G__18773) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__18774_18777 = init;
var G__18775_18778 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18774_18777,G__18775_18778) : f.call(null,G__18774_18777,G__18775_18778));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Class normalization for attribute providers. Converts from strings and
 *   sequences to hashmaps.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__18779_SHARP_){
return cljs.core.zipmap(p1__18779_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__18781 = arguments.length;
switch (G__18781) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

/**
 * Executes a function once an element has been attached to the DOM.
 */
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__18783 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18784 = (0);
return setTimeout(G__18783,G__18784);
} else {
var temp__5533__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5533__auto__)){
var v = temp__5533__auto__;
return v.push(f);
} else {
var G__18785_18803 = this$;
var G__18786_18804 = "_hoplonWhenDom";
var G__18787_18805 = [f];
goog.object.set(G__18785_18803,G__18786_18804,G__18787_18805);

var G__18788 = ((function (temp__5533__auto__){
return (function (){
var fexpr__18796 = ((function (temp__5533__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__18797 = ((function (temp__5533__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5533__auto__))
;
var G__18798 = (20);
return setTimeout(G__18797,G__18798);
} else {
var seq__18799_18806 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__18800_18807 = null;
var count__18801_18808 = (0);
var i__18802_18809 = (0);
while(true){
if((i__18802_18809 < count__18801_18808)){
var f_18810__$1 = chunk__18800_18807.cljs$core$IIndexed$_nth$arity$2(null,i__18802_18809);
(f_18810__$1.cljs$core$IFn$_invoke$arity$0 ? f_18810__$1.cljs$core$IFn$_invoke$arity$0() : f_18810__$1.call(null));

var G__18811 = seq__18799_18806;
var G__18812 = chunk__18800_18807;
var G__18813 = count__18801_18808;
var G__18814 = (i__18802_18809 + (1));
seq__18799_18806 = G__18811;
chunk__18800_18807 = G__18812;
count__18801_18808 = G__18813;
i__18802_18809 = G__18814;
continue;
} else {
var temp__5535__auto___18815 = cljs.core.seq(seq__18799_18806);
if(temp__5535__auto___18815){
var seq__18799_18816__$1 = temp__5535__auto___18815;
if(cljs.core.chunked_seq_QMARK_(seq__18799_18816__$1)){
var c__9205__auto___18817 = cljs.core.chunk_first(seq__18799_18816__$1);
var G__18818 = cljs.core.chunk_rest(seq__18799_18816__$1);
var G__18819 = c__9205__auto___18817;
var G__18820 = cljs.core.count(c__9205__auto___18817);
var G__18821 = (0);
seq__18799_18806 = G__18818;
chunk__18800_18807 = G__18819;
count__18801_18808 = G__18820;
i__18802_18809 = G__18821;
continue;
} else {
var f_18822__$1 = cljs.core.first(seq__18799_18816__$1);
(f_18822__$1.cljs$core$IFn$_invoke$arity$0 ? f_18822__$1.cljs$core$IFn$_invoke$arity$0() : f_18822__$1.call(null));

var G__18823 = cljs.core.next(seq__18799_18816__$1);
var G__18824 = null;
var G__18825 = (0);
var G__18826 = (0);
seq__18799_18806 = G__18823;
chunk__18800_18807 = G__18824;
count__18801_18808 = G__18825;
i__18802_18809 = G__18826;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5533__auto__))
;
return fexpr__18796();
});})(temp__5533__auto__))
;
var G__18789 = (0);
return setTimeout(G__18788,G__18789);
}
}
});
/**
 * Executes a function once the window load event is fired.
 */
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__18827 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18828 = (0);
return setTimeout(G__18827,G__18828);
}));
});
/**
 * Parses a sequence of element arguments into attributes and children.
 */
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__18834 = args;
var vec__18835 = G__18834;
var seq__18836 = cljs.core.seq(vec__18835);
var first__18837 = cljs.core.first(seq__18836);
var seq__18836__$1 = cljs.core.next(seq__18836);
var arg = first__18837;
var args__$1 = seq__18836__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__18834__$1 = G__18834;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__18838 = G__18834__$1;
var seq__18839 = cljs.core.seq(vec__18838);
var first__18840 = cljs.core.first(seq__18839);
var seq__18839__$1 = cljs.core.next(seq__18839);
var arg__$1 = first__18840;
var args__$2 = seq__18839__$1;
if(cljs.core.not((function (){var or__8274__auto__ = arg__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__18841 = cljs.core.reduce_kv(cljs.core.assoc_BANG_,attr__$2,arg__$1);
var G__18842 = kids__$2;
var G__18843 = args__$2;
attr__$1 = G__18841;
kids__$1 = G__18842;
G__18834__$1 = G__18843;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__18844 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__18834__$1,attr__$2,kids__$2,vec__18838,seq__18839,first__18840,seq__18839__$1,arg__$1,args__$2,attr,kids,G__18834,vec__18835,seq__18836,first__18837,seq__18836__$1,arg,args__$1){
return (function (p1__18829_SHARP_,p2__18830_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18829_SHARP_,p2__18830_SHARP_,true);
});})(attr__$1,kids__$1,G__18834__$1,attr__$2,kids__$2,vec__18838,seq__18839,first__18840,seq__18839__$1,arg__$1,args__$2,attr,kids,G__18834,vec__18835,seq__18836,first__18837,seq__18836__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__18845 = kids__$2;
var G__18846 = args__$2;
attr__$1 = G__18844;
kids__$1 = G__18845;
G__18834__$1 = G__18846;
continue;
} else {
if(cljs.core.truth_((hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.attribute_QMARK_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.attribute_QMARK_.call(null,arg__$1)))){
var G__18847 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__18848 = kids__$2;
var G__18849 = cljs.core.rest(args__$2);
attr__$1 = G__18847;
kids__$1 = G__18848;
G__18834__$1 = G__18849;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__18850 = attr__$2;
var G__18851 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18852 = args__$2;
attr__$1 = G__18850;
kids__$1 = G__18851;
G__18834__$1 = G__18852;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__18853 = attr__$2;
var G__18854 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18855 = args__$2;
attr__$1 = G__18853;
kids__$1 = G__18854;
G__18834__$1 = G__18855;
continue;
} else {
var G__18856 = attr__$2;
var G__18857 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__18858 = args__$2;
attr__$1 = G__18856;
kids__$1 = G__18857;
G__18834__$1 = G__18858;
continue;

}
}
}
}
}
}
break;
}
});
/**
 * A multi-method dispatch function.
 * 
 * Will dispatch against three arguments:
 * 
 *   * `elem` - the target DOM Element containing the attribute
 *   * `key` - the attribute keyword or symbol
 *   * `value` - the attribute value
 * 
 * The dispatcher will attempt to dispatch agains the key namespace or key.
 * 
 * ex. when key is `:namespace/key` will dispatch on `:namespace/*` otherwise `key`
 */
hoplon.core.dispatcher = (function hoplon$core$dispatcher(elem,key,value){
var temp__5533__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5533__auto__)){
var n = temp__5533__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonNode = function(){};

hoplon.core._node = (function hoplon$core$_node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonNode$_node$arity$1 == null)))){
return this$.hoplon$core$IHoplonNode$_node$arity$1(this$);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._node[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto__.call(null,this$));
} else {
var m__9008__auto____$1 = (hoplon.core._node["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonNode.-node",this$);
}
}
}
});

hoplon.core.node_QMARK_ = (function hoplon$core$node_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonNode$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonNode,this$);
}
});
goog.object.set(hoplon.core.IHoplonNode,"string",true);

var G__18860_18867 = hoplon.core._node;
var G__18861_18868 = "string";
var G__18862_18869 = ((function (G__18860_18867,G__18861_18868){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__18860_18867,G__18861_18868))
;
goog.object.set(G__18860_18867,G__18861_18868,G__18862_18869);

goog.object.set(hoplon.core.IHoplonNode,"number",true);

var G__18863_18870 = hoplon.core._node;
var G__18864_18871 = "number";
var G__18865_18872 = ((function (G__18863_18870,G__18864_18871){
return (function (this$){
var G__18866 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__18866) : hoplon.core.$text.call(null,G__18866));
});})(G__18863_18870,G__18864_18871))
;
goog.object.set(G__18863_18870,G__18864_18871,G__18865_18872);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(cljs.core.truth_(hoplon.core.node_QMARK_(x))){
return hoplon.core._node(x);
} else {
return x;
}
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attribute_BANG_ = (function hoplon$core$_attribute_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3(this$,elem,value);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._attribute_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9008__auto__.call(null,this$,elem,value));
} else {
var m__9008__auto____$1 = (hoplon.core._attribute_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9008__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attribute!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attribute_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
return hoplon.core._elem_BANG_(elem,this$__$1,value);
});
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts18876_18904 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18876_18904){
return (function (ret__17932__auto__,p__18877){
var vec__18878 = p__18877;
var ___17933__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18878,(0),null);
var f__17934__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18878,(1),null);
var sym__17935__auto__ = (f__17934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17934__auto__.cljs$core$IFn$_invoke$arity$0() : f__17934__auto__.call(null));
var G__18881 = ret__17932__auto__;
if(cljs.core.truth_(sym__17935__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18881,sym__17935__auto__);
} else {
return G__18881;
}
});})(opts18876_18904))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18876_18904){
return (function (p1__17931__17936__auto__){
var G__18883 = cljs.core.first(p1__17931__17936__auto__);
var fexpr__18882 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18876_18904);
return (fexpr__18882.cljs$core$IFn$_invoke$arity$1 ? fexpr__18882.cljs$core$IFn$_invoke$arity$1(G__18883) : fexpr__18882.call(null,G__18883));
});})(opts18876_18904))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18876_18904){
return (function (){
var checked__17900__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._elem_BANG_,new cljs.core.Var(function(){return hoplon.core._elem_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_elem_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/cljc-ably/4ko/-6x2tjj/index.html.out/hoplon/core.cljs",14,1,88,88,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._elem_BANG_)?hoplon.core._elem_BANG_.cljs$lang$test:null)])),opts18876_18904);
if(cljs.core.truth_(checked__17900__auto__)){
hoplon.core._elem_BANG_ = checked__17900__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_elem_BANG_;
});})(opts18876_18904))
], null)))));

var opts18886_18905 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18886_18905){
return (function (ret__17932__auto__,p__18887){
var vec__18888 = p__18887;
var ___17933__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18888,(0),null);
var f__17934__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18888,(1),null);
var sym__17935__auto__ = (f__17934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17934__auto__.cljs$core$IFn$_invoke$arity$0() : f__17934__auto__.call(null));
var G__18891 = ret__17932__auto__;
if(cljs.core.truth_(sym__17935__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18891,sym__17935__auto__);
} else {
return G__18891;
}
});})(opts18886_18905))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18886_18905){
return (function (p1__17931__17936__auto__){
var G__18893 = cljs.core.first(p1__17931__17936__auto__);
var fexpr__18892 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18886_18905);
return (fexpr__18892.cljs$core$IFn$_invoke$arity$1 ? fexpr__18892.cljs$core$IFn$_invoke$arity$1(G__18893) : fexpr__18892.call(null,G__18893));
});})(opts18886_18905))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18886_18905){
return (function (){
var checked__17900__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/cljc-ably/4ko/-6x2tjj/index.html.out/hoplon/core.cljs",12,1,78,78,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts18886_18905);
if(cljs.core.truth_(checked__17900__auto__)){
hoplon.core._do_BANG_ = checked__17900__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts18886_18905))
], null)))));

var opts18896 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18896){
return (function (ret__17932__auto__,p__18897){
var vec__18898 = p__18897;
var ___17933__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18898,(0),null);
var f__17934__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18898,(1),null);
var sym__17935__auto__ = (f__17934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17934__auto__.cljs$core$IFn$_invoke$arity$0() : f__17934__auto__.call(null));
var G__18901 = ret__17932__auto__;
if(cljs.core.truth_(sym__17935__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18901,sym__17935__auto__);
} else {
return G__18901;
}
});})(opts18896))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18896){
return (function (p1__17931__17936__auto__){
var G__18903 = cljs.core.first(p1__17931__17936__auto__);
var fexpr__18902 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18896);
return (fexpr__18902.cljs$core$IFn$_invoke$arity$1 ? fexpr__18902.cljs$core$IFn$_invoke$arity$1(G__18903) : fexpr__18902.call(null,G__18903));
});})(opts18896))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18896){
return (function (){
var checked__17900__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/cljc-ably/4ko/-6x2tjj/index.html.out/hoplon/core.cljs",12,1,83,83,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts18896);
if(cljs.core.truth_(checked__17900__auto__)){
hoplon.core._on_BANG_ = checked__17900__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts18896))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

/**
 * Sets attributes on a managed element using native functionality.
 */
hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto__.call(null,this$,kvs));
} else {
var m__9008__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

/**
 * Sets styles on a managed element using native functionality.
 */
hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto__.call(null,this$,kvs));
} else {
var m__9008__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

/**
 * Returns the hoplon managed kids atom, or creates it if missing exist.
 */
hoplon.core._hoplon_kids = (function hoplon$core$_hoplon_kids(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 == null)))){
return this$.hoplon$core$IHoplonElement$_hoplon_kids$arity$1(this$);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._hoplon_kids[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto__.call(null,this$));
} else {
var m__9008__auto____$1 = (hoplon.core._hoplon_kids["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-hoplon-kids",this$);
}
}
}
});

/**
 * Appends `child` to `this` for the case of `this` being a managed element.
 */
hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto__.call(null,this$,child));
} else {
var m__9008__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

/**
 * Removes `child` from `this` for the case of `this` being a managed element.
 */
hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto__.call(null,this$,child));
} else {
var m__9008__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

/**
 * Replaces `existing` with `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto__.call(null,this$,new$,existing));
} else {
var m__9008__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

/**
 * Inserts `existing` before `new` in `this` for the case of `this` being a managed element.
 */
hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto__.call(null,this$,new$,existing));
} else {
var m__9008__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon and implement the IHoplonElement protocol.
 */
hoplon.core.element_QMARK_ = (function hoplon$core$element_QMARK_(this$){
var and__8262__auto__ = (this$ instanceof Element);
if(and__8262__auto__){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonElement$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonElement,this$);
}
} else {
return and__8262__auto__;
}
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon, and have not been extended with IHoplonElement.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && (cljs.core.not(hoplon.core.element_QMARK_(elem)));
});
hoplon.core.native_node_QMARK_ = (function hoplon$core$native_node_QMARK_(node){

return ((node instanceof Node)) && (cljs.core.not(hoplon.core.element_QMARK_(node)));
});
hoplon.core.hoplonify_BANG_ = (function hoplon$core$hoplonify_BANG_(elem){
var x18914 = elem;
x18914.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x18914.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x18914){
return (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<HoplonElement: ",this$__$1.tagName,">"], 0));
});})(x18914))
;

x18914.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

x18914.cljs$core$ILookup$_lookup$arity$2 = ((function (x18914){
return (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$__$1.getAttribute(cljs.core.name(k));
} else {
var G__18915 = this$__$1.children;
var G__18916 = k;
return goog.object.get(G__18915,G__18916);
}
});})(x18914))
;

x18914.cljs$core$ILookup$_lookup$arity$3 = ((function (x18914){
return (function (this$,k,not_found){
var this$__$1 = this;
var or__8274__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return not_found;
}
});})(x18914))
;

x18914.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

x18914.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = ((function (x18914){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__18917 = cljs.core.seq(kvs);
var chunk__18919 = null;
var count__18920 = (0);
var i__18921 = (0);
while(true){
if((i__18921 < count__18920)){
var vec__18923 = chunk__18919.cljs$core$IIndexed$_nth$arity$2(null,i__18921);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18923,(1),null);
var k_18945__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_18945__$1);
} else {
e.setAttribute(k_18945__$1,((v === true)?k_18945__$1:v));
}

var G__18946 = seq__18917;
var G__18947 = chunk__18919;
var G__18948 = count__18920;
var G__18949 = (i__18921 + (1));
seq__18917 = G__18946;
chunk__18919 = G__18947;
count__18920 = G__18948;
i__18921 = G__18949;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__18917);
if(temp__5535__auto__){
var seq__18917__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18917__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__18917__$1);
var G__18950 = cljs.core.chunk_rest(seq__18917__$1);
var G__18951 = c__9205__auto__;
var G__18952 = cljs.core.count(c__9205__auto__);
var G__18953 = (0);
seq__18917 = G__18950;
chunk__18919 = G__18951;
count__18920 = G__18952;
i__18921 = G__18953;
continue;
} else {
var vec__18926 = cljs.core.first(seq__18917__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18926,(1),null);
var k_18954__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_18954__$1);
} else {
e.setAttribute(k_18954__$1,((v === true)?k_18954__$1:v));
}

var G__18955 = cljs.core.next(seq__18917__$1);
var G__18956 = null;
var G__18957 = (0);
var G__18958 = (0);
seq__18917 = G__18955;
chunk__18919 = G__18956;
count__18920 = G__18957;
i__18921 = G__18958;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18914))
;

x18914.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = ((function (x18914){
return (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__18929 = cljs.core.seq(kvs);
var chunk__18930 = null;
var count__18931 = (0);
var i__18932 = (0);
while(true){
if((i__18932 < count__18931)){
var vec__18933 = chunk__18930.cljs$core$IIndexed$_nth$arity$2(null,i__18932);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18933,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18933,(1),null);
var G__18936_18959 = e.style;
var G__18937_18960 = cljs.core.name(k);
var G__18938_18961 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18936_18959,G__18937_18960,G__18938_18961);

var G__18962 = seq__18929;
var G__18963 = chunk__18930;
var G__18964 = count__18931;
var G__18965 = (i__18932 + (1));
seq__18929 = G__18962;
chunk__18930 = G__18963;
count__18931 = G__18964;
i__18932 = G__18965;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__18929);
if(temp__5535__auto__){
var seq__18929__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18929__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__18929__$1);
var G__18966 = cljs.core.chunk_rest(seq__18929__$1);
var G__18967 = c__9205__auto__;
var G__18968 = cljs.core.count(c__9205__auto__);
var G__18969 = (0);
seq__18929 = G__18966;
chunk__18930 = G__18967;
count__18931 = G__18968;
i__18932 = G__18969;
continue;
} else {
var vec__18939 = cljs.core.first(seq__18929__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18939,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18939,(1),null);
var G__18942_18970 = e.style;
var G__18943_18971 = cljs.core.name(k);
var G__18944_18972 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18942_18970,G__18943_18971,G__18944_18972);

var G__18973 = cljs.core.next(seq__18929__$1);
var G__18974 = null;
var G__18975 = (0);
var G__18976 = (0);
seq__18929 = G__18973;
chunk__18930 = G__18974;
count__18931 = G__18975;
i__18932 = G__18976;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18914))
;

x18914.hoplon$core$IHoplonElement$_hoplon_kids$arity$1 = ((function (x18914){
return (function (this$){
var this$__$1 = this;
var temp__5533__auto__ = this$__$1.hoplonKids;
if(cljs.core.truth_(temp__5533__auto__)){
var hl_kids = temp__5533__auto__;
return hl_kids;
} else {
var kids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));

return kids;
}
});})(x18914))
;

x18914.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = ((function (x18914){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_18977 = hoplon.core._hoplon_kids(this$__$1);
var i_18978 = cljs.core.count(cljs.core.deref(kids_18977));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_18977,i_18978,child__$1,this$__$1,x18914){
return (function (p1__18909_SHARP_,p2__18908_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18977,cljs.core.assoc,i_18978,p2__18908_SHARP_);
});})(kids_18977,i_18978,child__$1,this$__$1,x18914))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18977,cljs.core.assoc,i_18978,child__$1);
}

return child__$1;
});})(x18914))
;

x18914.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = ((function (x18914){
return (function (this$,child){
var this$__$1 = this;
var child__$1 = child;
var kids_18979 = hoplon.core._hoplon_kids(this$__$1);
var before_count_18980 = cljs.core.count(cljs.core.deref(kids_18979));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_18979,((function (kids_18979,before_count_18980,child__$1,this$__$1,x18914){
return (function (p1__18910_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(child__$1)),p1__18910_SHARP_));
});})(kids_18979,before_count_18980,child__$1,this$__$1,x18914))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kids_18979,((function (kids_18979,before_count_18980,child__$1,this$__$1,x18914){
return (function (p1__18911_SHARP_){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,child__$1),p1__18911_SHARP_));
});})(kids_18979,before_count_18980,child__$1,this$__$1,x18914))
);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(kids_18979)),(before_count_18980 - (1)))){
} else {
throw (new Error("Attempted to remove a node that is not a child of parent."));
}

return child__$1;
});})(x18914))
;

x18914.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = ((function (x18914){
return (function (this$,new$,existing){
var this$__$1 = this;
var existing__$1 = existing;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (existing__$1,this$__$1,x18914){
return (function (p1__18912_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (existing__$1,this$__$1,x18914){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing__$1)){
return new$;
} else {
return el;
}
});})(existing__$1,this$__$1,x18914))
,p1__18912_SHARP_);
});})(existing__$1,this$__$1,x18914))
);

return existing__$1;
});})(x18914))
;

x18914.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = ((function (x18914){
return (function (this$,new$,existing){
var this$__$1 = this;
var new$__$1 = new$;
if(cljs.core.not(existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.core._hoplon_kids(this$__$1),cljs.core.conj,new$__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$__$1,existing)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.core._hoplon_kids(this$__$1),((function (new$__$1,this$__$1,x18914){
return (function (p1__18913_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (new$__$1,this$__$1,x18914){
return (function (el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,existing)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new$__$1,el], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null);
}
});})(new$__$1,this$__$1,x18914))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18913_SHARP_], 0)));
});})(new$__$1,this$__$1,x18914))
);
} else {
}
}

return new$__$1;
});})(x18914))
;

return x18914;
});
hoplon.core.__GT_hoplon = (function hoplon$core$__GT_hoplon(elem){
if(cljs.core.truth_(hoplon.core.element_QMARK_(elem))){
return elem;
} else {
var _ = elem;
hoplon.core.hoplonify_BANG_(elem);

return _;
}
});
hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__18986 = arguments.length;
switch (G__18986) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___18988 = arguments.length;
var i__9554__auto___18989 = (0);
while(true){
if((i__9554__auto___18989 < len__9553__auto___18988)){
args_arr__9576__auto__.push((arguments[i__9554__auto___18989]));

var G__18990 = (i__9554__auto___18989 + (1));
i__9554__auto___18989 = G__18990;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq18982){
var G__18983 = cljs.core.first(seq18982);
var seq18982__$1 = cljs.core.next(seq18982);
var G__18984 = cljs.core.first(seq18982__$1);
var seq18982__$2 = cljs.core.next(seq18982__$1);
var G__18985 = cljs.core.first(seq18982__$2);
var seq18982__$3 = cljs.core.next(seq18982__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18983,G__18984,G__18985,seq18982__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__18996 = arguments.length;
switch (G__18996) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___18998 = arguments.length;
var i__9554__auto___18999 = (0);
while(true){
if((i__9554__auto___18999 < len__9553__auto___18998)){
args_arr__9576__auto__.push((arguments[i__9554__auto___18999]));

var G__19000 = (i__9554__auto___18999 + (1));
i__9554__auto___18999 = G__19000;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(hoplon.core.__GT_hoplon(this$),kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq18992){
var G__18993 = cljs.core.first(seq18992);
var seq18992__$1 = cljs.core.next(seq18992);
var G__18994 = cljs.core.first(seq18992__$1);
var seq18992__$2 = cljs.core.next(seq18992__$1);
var G__18995 = cljs.core.first(seq18992__$2);
var seq18992__$3 = cljs.core.next(seq18992__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18993,G__18994,G__18995,seq18992__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(hoplon.core.__GT_hoplon(this$),child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(hoplon.core.__GT_hoplon(this$),new$,existing);
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__19002_SHARP_,p2__19001_SHARP_,p3__19003_SHARP_){
hoplon.core._attribute_BANG_(p2__19001_SHARP_,p1__19002_SHARP_,p3__19003_SHARP_);

return p1__19002_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__19004){
var vec__19005 = p__19004;
var seq__19006 = cljs.core.seq(vec__19005);
var first__19007 = cljs.core.first(seq__19006);
var seq__19006__$1 = cljs.core.next(seq__19006);
var child_cell = first__19007;
var _ = seq__19006__$1;
var kids = vec__19005;
var this$__$1 = this$;
var seq__19008_19012 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__19009_19013 = null;
var count__19010_19014 = (0);
var i__19011_19015 = (0);
while(true){
if((i__19011_19015 < count__19010_19014)){
var x_19016 = chunk__19009_19013.cljs$core$IIndexed$_nth$arity$2(null,i__19011_19015);
var temp__5535__auto___19017 = hoplon.core.__GT_node(x_19016);
if(cljs.core.truth_(temp__5535__auto___19017)){
var x_19018__$1 = temp__5535__auto___19017;
hoplon.core._append_child_BANG_(this$__$1,x_19018__$1);
} else {
}

var G__19019 = seq__19008_19012;
var G__19020 = chunk__19009_19013;
var G__19021 = count__19010_19014;
var G__19022 = (i__19011_19015 + (1));
seq__19008_19012 = G__19019;
chunk__19009_19013 = G__19020;
count__19010_19014 = G__19021;
i__19011_19015 = G__19022;
continue;
} else {
var temp__5535__auto___19023 = cljs.core.seq(seq__19008_19012);
if(temp__5535__auto___19023){
var seq__19008_19024__$1 = temp__5535__auto___19023;
if(cljs.core.chunked_seq_QMARK_(seq__19008_19024__$1)){
var c__9205__auto___19025 = cljs.core.chunk_first(seq__19008_19024__$1);
var G__19026 = cljs.core.chunk_rest(seq__19008_19024__$1);
var G__19027 = c__9205__auto___19025;
var G__19028 = cljs.core.count(c__9205__auto___19025);
var G__19029 = (0);
seq__19008_19012 = G__19026;
chunk__19009_19013 = G__19027;
count__19010_19014 = G__19028;
i__19011_19015 = G__19029;
continue;
} else {
var x_19030 = cljs.core.first(seq__19008_19024__$1);
var temp__5535__auto___19031__$1 = hoplon.core.__GT_node(x_19030);
if(cljs.core.truth_(temp__5535__auto___19031__$1)){
var x_19032__$1 = temp__5535__auto___19031__$1;
hoplon.core._append_child_BANG_(this$__$1,x_19032__$1);
} else {
}

var G__19033 = cljs.core.next(seq__19008_19024__$1);
var G__19034 = null;
var G__19035 = (0);
var G__19036 = (0);
seq__19008_19012 = G__19033;
chunk__19009_19013 = G__19034;
count__19010_19014 = G__19035;
i__19011_19015 = G__19036;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19043 = arguments.length;
var i__9554__auto___19044 = (0);
while(true){
if((i__9554__auto___19044 < len__9553__auto___19043)){
args__9560__auto__.push((arguments[i__9554__auto___19044]));

var G__19045 = (i__9554__auto___19044 + (1));
i__9554__auto___19044 = G__19045;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__19039 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19039,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19039,(1),null);
var G__19042 = hoplon.core.__GT_hoplon(this$);
hoplon.core.add_attributes_BANG_(G__19042,attr);

hoplon.core.add_children_BANG_(G__19042,kids);

return G__19042;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq19037){
var G__19038 = cljs.core.first(seq19037);
var seq19037__$1 = cljs.core.next(seq19037);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19038,seq19037__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__19047 = null;
var G__19047__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19047__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19047__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19047__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19047__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19047__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19047__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19047__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19047__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19047__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19047__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19047__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19047__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19047__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19047__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19047__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19047__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19047__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19047__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19047__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19047__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19047__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19047 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19047__1.call(this,self__);
case 2:
return G__19047__2.call(this,self__,a);
case 3:
return G__19047__3.call(this,self__,a,b);
case 4:
return G__19047__4.call(this,self__,a,b,c);
case 5:
return G__19047__5.call(this,self__,a,b,c,d);
case 6:
return G__19047__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19047__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19047__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19047__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19047__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19047__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19047__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19047__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19047__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19047__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19047__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19047__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19047__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19047__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19047__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19047__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19047__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19047.cljs$core$IFn$_invoke$arity$1 = G__19047__1;
G__19047.cljs$core$IFn$_invoke$arity$2 = G__19047__2;
G__19047.cljs$core$IFn$_invoke$arity$3 = G__19047__3;
G__19047.cljs$core$IFn$_invoke$arity$4 = G__19047__4;
G__19047.cljs$core$IFn$_invoke$arity$5 = G__19047__5;
G__19047.cljs$core$IFn$_invoke$arity$6 = G__19047__6;
G__19047.cljs$core$IFn$_invoke$arity$7 = G__19047__7;
G__19047.cljs$core$IFn$_invoke$arity$8 = G__19047__8;
G__19047.cljs$core$IFn$_invoke$arity$9 = G__19047__9;
G__19047.cljs$core$IFn$_invoke$arity$10 = G__19047__10;
G__19047.cljs$core$IFn$_invoke$arity$11 = G__19047__11;
G__19047.cljs$core$IFn$_invoke$arity$12 = G__19047__12;
G__19047.cljs$core$IFn$_invoke$arity$13 = G__19047__13;
G__19047.cljs$core$IFn$_invoke$arity$14 = G__19047__14;
G__19047.cljs$core$IFn$_invoke$arity$15 = G__19047__15;
G__19047.cljs$core$IFn$_invoke$arity$16 = G__19047__16;
G__19047.cljs$core$IFn$_invoke$arity$17 = G__19047__17;
G__19047.cljs$core$IFn$_invoke$arity$18 = G__19047__18;
G__19047.cljs$core$IFn$_invoke$arity$19 = G__19047__19;
G__19047.cljs$core$IFn$_invoke$arity$20 = G__19047__20;
G__19047.cljs$core$IFn$_invoke$arity$21 = G__19047__21;
G__19047.cljs$core$IFn$_invoke$arity$22 = G__19047__22;
return G__19047;
})()
;

Element.prototype.apply = (function (self__,args19046){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19046)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
DocumentFragment.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<DocumentFragment>"], 0));
});

DocumentFragment.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.call = (function() {
var G__19049 = null;
var G__19049__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19049__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19049__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19049__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19049__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19049__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19049__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19049__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19049__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19049__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19049__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19049__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19049__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19049__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19049__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19049__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19049__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19049__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19049__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19049__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19049__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19049__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19049 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19049__1.call(this,self__);
case 2:
return G__19049__2.call(this,self__,a);
case 3:
return G__19049__3.call(this,self__,a,b);
case 4:
return G__19049__4.call(this,self__,a,b,c);
case 5:
return G__19049__5.call(this,self__,a,b,c,d);
case 6:
return G__19049__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19049__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19049__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19049__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19049__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19049__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19049__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19049__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19049__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19049__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19049__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19049__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19049__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19049__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19049__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19049__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19049__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19049.cljs$core$IFn$_invoke$arity$1 = G__19049__1;
G__19049.cljs$core$IFn$_invoke$arity$2 = G__19049__2;
G__19049.cljs$core$IFn$_invoke$arity$3 = G__19049__3;
G__19049.cljs$core$IFn$_invoke$arity$4 = G__19049__4;
G__19049.cljs$core$IFn$_invoke$arity$5 = G__19049__5;
G__19049.cljs$core$IFn$_invoke$arity$6 = G__19049__6;
G__19049.cljs$core$IFn$_invoke$arity$7 = G__19049__7;
G__19049.cljs$core$IFn$_invoke$arity$8 = G__19049__8;
G__19049.cljs$core$IFn$_invoke$arity$9 = G__19049__9;
G__19049.cljs$core$IFn$_invoke$arity$10 = G__19049__10;
G__19049.cljs$core$IFn$_invoke$arity$11 = G__19049__11;
G__19049.cljs$core$IFn$_invoke$arity$12 = G__19049__12;
G__19049.cljs$core$IFn$_invoke$arity$13 = G__19049__13;
G__19049.cljs$core$IFn$_invoke$arity$14 = G__19049__14;
G__19049.cljs$core$IFn$_invoke$arity$15 = G__19049__15;
G__19049.cljs$core$IFn$_invoke$arity$16 = G__19049__16;
G__19049.cljs$core$IFn$_invoke$arity$17 = G__19049__17;
G__19049.cljs$core$IFn$_invoke$arity$18 = G__19049__18;
G__19049.cljs$core$IFn$_invoke$arity$19 = G__19049__19;
G__19049.cljs$core$IFn$_invoke$arity$20 = G__19049__20;
G__19049.cljs$core$IFn$_invoke$arity$21 = G__19049__21;
G__19049.cljs$core$IFn$_invoke$arity$22 = G__19049__22;
return G__19049;
})()
;

DocumentFragment.prototype.apply = (function (self__,args19048){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19048)));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

DocumentFragment.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){

return (function() { 
var G__19056__delegate = function (args){
var oelem = goog.object.get(document,elem);
if(cljs.core.truth_(oelem)){
} else {
var G__19050_19057 = document;
var G__19051_19058 = elem;
var G__19052_19059 = document.createElement(elem);
goog.object.set(G__19050_19057,G__19051_19058,G__19052_19059);
}

var helem = hoplon.core.__GT_hoplon(oelem);
var vec__19053_19060 = hoplon.core.parse_args(args);
var attrs_19061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19053_19060,(0),null);
var kids_19062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19053_19060,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs_19061))){
} else {
hoplon.core.merge_kids(helem,null,null);

hoplon.core.add_attributes_BANG_(helem,attrs_19061);

hoplon.core.add_children_BANG_(helem,kids_19062);
}

return helem;
};
var G__19056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19063__i = 0, G__19063__a = new Array(arguments.length -  0);
while (G__19063__i < G__19063__a.length) {G__19063__a[G__19063__i] = arguments[G__19063__i + 0]; ++G__19063__i;}
  args = new cljs.core.IndexedSeq(G__19063__a,0,null);
} 
return G__19056__delegate.call(this,args);};
G__19056.cljs$lang$maxFixedArity = 0;
G__19056.cljs$lang$applyTo = (function (arglist__19064){
var args = cljs.core.seq(arglist__19064);
return G__19056__delegate(args);
});
G__19056.cljs$core$IFn$_invoke$arity$variadic = G__19056__delegate;
return G__19056;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){

return (function() { 
var G__19068__delegate = function (args){
var vec__19065 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19065,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19065,(1),null);
var elem = document.createElement(tag);
var hl = hoplon.core.__GT_hoplon(elem);
return (hl.cljs$core$IFn$_invoke$arity$2 ? hl.cljs$core$IFn$_invoke$arity$2(attr,kids) : hl.call(null,attr,kids));
};
var G__19068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19069__i = 0, G__19069__a = new Array(arguments.length -  0);
while (G__19069__i < G__19069__a.length) {G__19069__a[G__19069__i] = arguments[G__19069__i + 0]; ++G__19069__i;}
  args = new cljs.core.IndexedSeq(G__19069__a,0,null);
} 
return G__19068__delegate.call(this,args);};
G__19068.cljs$lang$maxFixedArity = 0;
G__19068.cljs$lang$applyTo = (function (arglist__19070){
var args = cljs.core.seq(arglist__19070);
return G__19068__delegate(args);
});
G__19068.cljs$core$IFn$_invoke$arity$variadic = G__19068__delegate;
return G__19068;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19072 = arguments.length;
var i__9554__auto___19073 = (0);
while(true){
if((i__9554__auto___19073 < len__9553__auto___19072)){
args__9560__auto__.push((arguments[i__9554__auto___19073]));

var G__19074 = (i__9554__auto___19073 + (1));
i__9554__auto___19073 = G__19074;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

var el = document.documentElement;
hoplon.core.add_attributes_BANG_(hoplon.core.__GT_hoplon(el),cljs.core.first(hoplon.core.parse_args(args)));

return el;
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq19071){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19071));
});

/**
 * Updates and returns the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton("head");
/**
 * Updates and returns the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton("body");
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__19075_SHARP_){
return document.createTextNode(p1__19075_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19076_SHARP_){
return document.createComment(p1__19076_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
if(typeof hoplon.core.elem_BANG_ !== 'undefined'){
} else {
hoplon.core.elem_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","elem!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
hoplon.core.elem_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,value){
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,(function (p1__19078_SHARP_,p2__19077_SHARP_){
return hoplon.core._do_BANG_(elem,key,p2__19077_SHARP_);
}));
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,key,value);
} else {
return hoplon.core._do_BANG_(elem,key,value);

}
}
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19079 = elem;
var G__19080 = cljs.core.cst$kw$attr;
var G__19081 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19079,G__19080,G__19081) : hoplon.core.do_BANG_.call(null,G__19079,G__19080,G__19081));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),hoplon.core.dispatcher,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return elem.addEventListener(cljs.core.name(event),callback);
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template `tpl` is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__19086 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19084,G__19085){
return (G__19084.cljs$core$IFn$_invoke$arity$1 ? G__19084.cljs$core$IFn$_invoke$arity$1(G__19085) : G__19084.call(null,G__19085));
});})(on_deck))
);
return (fexpr__19086.cljs$core$IFn$_invoke$arity$2 ? fexpr__19086.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19086.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19082_SHARP_){
var fexpr__19090 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19088,G__19087,G__19089){
return (G__19087.cljs$core$IFn$_invoke$arity$3 ? G__19087.cljs$core$IFn$_invoke$arity$3(G__19088,G__19089,null) : G__19087.call(null,G__19088,G__19089,null));
});})(on_deck,items_seq))
);
return (fexpr__19090.cljs$core$IFn$_invoke$arity$3 ? fexpr__19090.cljs$core$IFn$_invoke$arity$3(items_seq,cljs.core.nth,p1__19082_SHARP_) : fexpr__19090.call(null,items_seq,cljs.core.nth,p1__19082_SHARP_));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19083_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19083_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19083_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__19091 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19092 = null;
var count__19093 = (0);
var i__19094 = (0);
while(true){
if((i__19094 < count__19093)){
var i = chunk__19092.cljs$core$IIndexed$_nth$arity$2(null,i__19094);
var e_19097 = (function (){var or__8274__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__19095 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19095) : tpl.call(null,G__19095));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19097);

var G__19098 = seq__19091;
var G__19099 = chunk__19092;
var G__19100 = count__19093;
var G__19101 = (i__19094 + (1));
seq__19091 = G__19098;
chunk__19092 = G__19099;
count__19093 = G__19100;
i__19094 = G__19101;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__19091);
if(temp__5535__auto__){
var seq__19091__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19091__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19091__$1);
var G__19102 = cljs.core.chunk_rest(seq__19091__$1);
var G__19103 = c__9205__auto__;
var G__19104 = cljs.core.count(c__9205__auto__);
var G__19105 = (0);
seq__19091 = G__19102;
chunk__19092 = G__19103;
count__19093 = G__19104;
i__19094 = G__19105;
continue;
} else {
var i = cljs.core.first(seq__19091__$1);
var e_19106 = (function (){var or__8274__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__19096 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19096) : tpl.call(null,G__19096));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19106);

var G__19107 = cljs.core.next(seq__19091__$1);
var G__19108 = null;
var G__19109 = (0);
var G__19110 = (0);
seq__19091 = G__19107;
chunk__19092 = G__19108;
count__19093 = G__19109;
i__19094 = G__19110;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9319__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9319__auto__)){
var e_19111 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19111);

var G__19112 = (_ + (1));
_ = G__19112;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
var els_state_19150 = cljs.core.memoize((function (scope){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));
var items_state_19151 = cljs.core.memoize(((function (els_state_19150){
return (function (scope){
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});})(els_state_19150))
);
/**
 * Like `loop-tpl*` but accepts a `key-fn` which, given a list item returns an
 *   (immutable) key under which to cache and reuse the rendered DOM element.
 *   Also accepts a `scope` allowing keyed items to be tracked across multiple lists
 *   for use in e.g. drag and drop applications.
 *   Only one item per key is supported per scope, it is the application's
 *   responsibility to ensure that item values are consistent and correct across
 *   multiple lists.
 */
hoplon.core.keyed_loop_tpl_STAR_ = ((function (els_state_19150,items_state_19151){
return (function hoplon$core$keyed_loop_tpl_STAR_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19152 = arguments.length;
var i__9554__auto___19153 = (0);
while(true){
if((i__9554__auto___19153 < len__9553__auto___19152)){
args__9560__auto__.push((arguments[i__9554__auto___19153]));

var G__19154 = (i__9554__auto___19153 + (1));
i__9554__auto___19153 = G__19154;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((2) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((2)),(0),null)):null);
return hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9561__auto__);
});})(els_state_19150,items_state_19151))
;

hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (els_state_19150,items_state_19151){
return (function (items,tpl,p__19117){
var map__19118 = p__19117;
var map__19118__$1 = ((((!((map__19118 == null)))?((((map__19118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19118):map__19118);
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19118__$1,cljs.core.cst$kw$scope);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19118__$1,cljs.core.cst$kw$key_DASH_fn);
var key_fn__$1 = (function (){var or__8274__auto__ = key_fn;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.identity;
}
})();
var ks = (function (){var fexpr__19123 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151){
return (function (G__19122,G__19120,G__19121){
return (G__19120.cljs$core$IFn$_invoke$arity$2 ? G__19120.cljs$core$IFn$_invoke$arity$2(G__19121,G__19122) : G__19120.call(null,G__19121,G__19122));
});})(key_fn__$1,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151))
);
return (fexpr__19123.cljs$core$IFn$_invoke$arity$3 ? fexpr__19123.cljs$core$IFn$_invoke$arity$3(items,cljs.core.map,key_fn__$1) : fexpr__19123.call(null,items,cljs.core.map,key_fn__$1));
})();
var els = (cljs.core.truth_(scope)?(els_state_19150.cljs$core$IFn$_invoke$arity$1 ? els_state_19150.cljs$core$IFn$_invoke$arity$1(scope) : els_state_19150.call(null,scope)):cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var scoped_items = (cljs.core.truth_(scope)?(items_state_19151.cljs$core$IFn$_invoke$arity$1 ? items_state_19151.cljs$core$IFn$_invoke$arity$1(scope) : items_state_19151.call(null,scope)):(function (){var fexpr__19127 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,ks,els,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151){
return (function (G__19126,G__19124,G__19125){
return (G__19124.cljs$core$IFn$_invoke$arity$2 ? G__19124.cljs$core$IFn$_invoke$arity$2(G__19125,G__19126) : G__19124.call(null,G__19125,G__19126));
});})(key_fn__$1,ks,els,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151))
);
return (fexpr__19127.cljs$core$IFn$_invoke$arity$3 ? fexpr__19127.cljs$core$IFn$_invoke$arity$3(items,cljs.core.zipmap,ks) : fexpr__19127.call(null,items,cljs.core.zipmap,ks));
})());
var k__GT_el = ((function (key_fn__$1,ks,els,scoped_items,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151){
return (function (p1__19113_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(els),p1__19113_SHARP_);
});})(key_fn__$1,ks,els,scoped_items,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151))
;
if(cljs.core.truth_(scope)){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items,((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151){
return (function (_,n){
return javelin.core.dosync_STAR_(((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151){
return (function (){
var seq__19128 = cljs.core.seq(n);
var chunk__19129 = null;
var count__19130 = (0);
var i__19131 = (0);
while(true){
if((i__19131 < count__19130)){
var i = chunk__19129.cljs$core$IIndexed$_nth$arity$2(null,i__19131);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scoped_items,cljs.core.assoc,(key_fn__$1.cljs$core$IFn$_invoke$arity$1 ? key_fn__$1.cljs$core$IFn$_invoke$arity$1(i) : key_fn__$1.call(null,i)),i);

var G__19155 = seq__19128;
var G__19156 = chunk__19129;
var G__19157 = count__19130;
var G__19158 = (i__19131 + (1));
seq__19128 = G__19155;
chunk__19129 = G__19156;
count__19130 = G__19157;
i__19131 = G__19158;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__19128);
if(temp__5535__auto__){
var seq__19128__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19128__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19128__$1);
var G__19159 = cljs.core.chunk_rest(seq__19128__$1);
var G__19160 = c__9205__auto__;
var G__19161 = cljs.core.count(c__9205__auto__);
var G__19162 = (0);
seq__19128 = G__19159;
chunk__19129 = G__19160;
count__19130 = G__19161;
i__19131 = G__19162;
continue;
} else {
var i = cljs.core.first(seq__19128__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scoped_items,cljs.core.assoc,(key_fn__$1.cljs$core$IFn$_invoke$arity$1 ? key_fn__$1.cljs$core$IFn$_invoke$arity$1(i) : key_fn__$1.call(null,i)),i);

var G__19163 = cljs.core.next(seq__19128__$1);
var G__19164 = null;
var G__19165 = (0);
var G__19166 = (0);
seq__19128 = G__19163;
chunk__19129 = G__19164;
count__19130 = G__19165;
i__19131 = G__19166;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151))
);
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151))
);
} else {
}

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(ks,((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151){
return (function (_,n){
var seq__19132 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core.deref(els)),n));
var chunk__19133 = null;
var count__19134 = (0);
var i__19135 = (0);
while(true){
if((i__19135 < count__19134)){
var k = chunk__19133.cljs$core$IIndexed$_nth$arity$2(null,i__19135);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,k,(function (){var G__19136 = (function (){var fexpr__19140 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__19132,chunk__19133,count__19134,i__19135,k,key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151){
return (function (G__19138,G__19137,G__19139){
return (G__19137.cljs$core$IFn$_invoke$arity$2 ? G__19137.cljs$core$IFn$_invoke$arity$2(G__19138,G__19139) : G__19137.call(null,G__19138,G__19139));
});})(seq__19132,chunk__19133,count__19134,i__19135,k,key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151))
);
return (fexpr__19140.cljs$core$IFn$_invoke$arity$3 ? fexpr__19140.cljs$core$IFn$_invoke$arity$3(scoped_items,cljs.core.get,k) : fexpr__19140.call(null,scoped_items,cljs.core.get,k));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19136) : tpl.call(null,G__19136));
})());

var G__19167 = seq__19132;
var G__19168 = chunk__19133;
var G__19169 = count__19134;
var G__19170 = (i__19135 + (1));
seq__19132 = G__19167;
chunk__19133 = G__19168;
count__19134 = G__19169;
i__19135 = G__19170;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__19132);
if(temp__5535__auto__){
var seq__19132__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19132__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19132__$1);
var G__19171 = cljs.core.chunk_rest(seq__19132__$1);
var G__19172 = c__9205__auto__;
var G__19173 = cljs.core.count(c__9205__auto__);
var G__19174 = (0);
seq__19132 = G__19171;
chunk__19133 = G__19172;
count__19134 = G__19173;
i__19135 = G__19174;
continue;
} else {
var k = cljs.core.first(seq__19132__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(els,cljs.core.assoc,k,(function (){var G__19141 = (function (){var fexpr__19145 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (seq__19132,chunk__19133,count__19134,i__19135,k,seq__19132__$1,temp__5535__auto__,key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151){
return (function (G__19143,G__19142,G__19144){
return (G__19142.cljs$core$IFn$_invoke$arity$2 ? G__19142.cljs$core$IFn$_invoke$arity$2(G__19143,G__19144) : G__19142.call(null,G__19143,G__19144));
});})(seq__19132,chunk__19133,count__19134,i__19135,k,seq__19132__$1,temp__5535__auto__,key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151))
);
return (fexpr__19145.cljs$core$IFn$_invoke$arity$3 ? fexpr__19145.cljs$core$IFn$_invoke$arity$3(scoped_items,cljs.core.get,k) : fexpr__19145.call(null,scoped_items,cljs.core.get,k));
})();
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19141) : tpl.call(null,G__19141));
})());

var G__19175 = cljs.core.next(seq__19132__$1);
var G__19176 = null;
var G__19177 = (0);
var G__19178 = (0);
seq__19132 = G__19175;
chunk__19133 = G__19176;
count__19134 = G__19177;
i__19135 = G__19178;
continue;
}
} else {
return null;
}
}
break;
}
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151))
);

var fexpr__19149 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151){
return (function (G__19146,G__19148,G__19147){
return (G__19146.cljs$core$IFn$_invoke$arity$2 ? G__19146.cljs$core$IFn$_invoke$arity$2(G__19147,G__19148) : G__19146.call(null,G__19147,G__19148));
});})(key_fn__$1,ks,els,scoped_items,k__GT_el,map__19118,map__19118__$1,scope,key_fn,els_state_19150,items_state_19151))
);
return (fexpr__19149.cljs$core$IFn$_invoke$arity$3 ? fexpr__19149.cljs$core$IFn$_invoke$arity$3(cljs.core.map,ks,k__GT_el) : fexpr__19149.call(null,cljs.core.map,ks,k__GT_el));
});})(els_state_19150,items_state_19151))
;

hoplon.core.keyed_loop_tpl_STAR_.cljs$lang$maxFixedArity = (2);

hoplon.core.keyed_loop_tpl_STAR_.cljs$lang$applyTo = ((function (els_state_19150,items_state_19151){
return (function (seq19114){
var G__19115 = cljs.core.first(seq19114);
var seq19114__$1 = cljs.core.next(seq19114);
var G__19116 = cljs.core.first(seq19114__$1);
var seq19114__$2 = cljs.core.next(seq19114__$1);
return hoplon.core.keyed_loop_tpl_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__19115,G__19116,seq19114__$2);
});})(els_state_19150,items_state_19151))
;

