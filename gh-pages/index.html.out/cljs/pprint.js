// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__9560__auto__ = [];
var len__9553__auto___16348 = arguments.length;
var i__9554__auto___16349 = (0);
while(true){
if((i__9554__auto___16349 < len__9553__auto___16348)){
args__9560__auto__.push((arguments[i__9554__auto___16349]));

var G__16350 = (i__9554__auto___16349 + (1));
i__9554__auto___16349 = G__16350;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq16347){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16347));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__9560__auto__ = [];
var len__9553__auto___16352 = arguments.length;
var i__9554__auto___16353 = (0);
while(true){
if((i__9554__auto___16353 < len__9553__auto___16352)){
args__9560__auto__.push((arguments[i__9554__auto___16353]));

var G__16354 = (i__9554__auto___16353 + (1));
i__9554__auto___16353 = G__16354;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq16351){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16351));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__16355 = cljs.core._EQ_;
var expr__16356 = c;
if(cljs.core.truth_((function (){var G__16358 = "\b";
var G__16359 = expr__16356;
return (pred__16355.cljs$core$IFn$_invoke$arity$2 ? pred__16355.cljs$core$IFn$_invoke$arity$2(G__16358,G__16359) : pred__16355.call(null,G__16358,G__16359));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__16360 = "\t";
var G__16361 = expr__16356;
return (pred__16355.cljs$core$IFn$_invoke$arity$2 ? pred__16355.cljs$core$IFn$_invoke$arity$2(G__16360,G__16361) : pred__16355.call(null,G__16360,G__16361));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__16362 = "\n";
var G__16363 = expr__16356;
return (pred__16355.cljs$core$IFn$_invoke$arity$2 ? pred__16355.cljs$core$IFn$_invoke$arity$2(G__16362,G__16363) : pred__16355.call(null,G__16362,G__16363));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__16364 = "\f";
var G__16365 = expr__16356;
return (pred__16355.cljs$core$IFn$_invoke$arity$2 ? pred__16355.cljs$core$IFn$_invoke$arity$2(G__16364,G__16365) : pred__16355.call(null,G__16364,G__16365));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__16366 = "\r";
var G__16367 = expr__16356;
return (pred__16355.cljs$core$IFn$_invoke$arity$2 ? pred__16355.cljs$core$IFn$_invoke$arity$2(G__16366,G__16367) : pred__16355.call(null,G__16366,G__16367));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__16368 = "\"";
var G__16369 = expr__16356;
return (pred__16355.cljs$core$IFn$_invoke$arity$2 ? pred__16355.cljs$core$IFn$_invoke$arity$2(G__16368,G__16369) : pred__16355.call(null,G__16368,G__16369));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__16370 = "\\";
var G__16371 = expr__16356;
return (pred__16355.cljs$core$IFn$_invoke$arity$2 ? pred__16355.cljs$core$IFn$_invoke$arity$2(G__16370,G__16371) : pred__16355.call(null,G__16370,G__16371));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__9560__auto__ = [];
var len__9553__auto___16373 = arguments.length;
var i__9554__auto___16374 = (0);
while(true){
if((i__9554__auto___16374 < len__9553__auto___16373)){
args__9560__auto__.push((arguments[i__9554__auto___16374]));

var G__16375 = (i__9554__auto___16374 + (1));
i__9554__auto___16374 = G__16375;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq16372){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16372));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__9560__auto__ = [];
var len__9553__auto___16377 = arguments.length;
var i__9554__auto___16378 = (0);
while(true){
if((i__9554__auto___16378 < len__9553__auto___16377)){
args__9560__auto__.push((arguments[i__9554__auto___16378]));

var G__16379 = (i__9554__auto___16378 + (1));
i__9554__auto___16378 = G__16379;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq16376){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16376));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__16380 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(1),null);
var G__16383 = new_context;
var G__16384 = remainder;
var G__16385 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__16383;
lis__$1 = G__16384;
acc = G__16385;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__16386 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16386,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16386,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__16389 = new_context;
var G__16390 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__16389;
acc = G__16390;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__16391 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16391,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16391,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16391,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__16394 = new_context;
var G__16395 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__16394;
acc = G__16395;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9156__auto__ = (function cljs$pprint$unzip_map_$_iter__16396(s__16397){
return (new cljs.core.LazySeq(null,(function (){
var s__16397__$1 = s__16397;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__16397__$1);
if(temp__5535__auto__){
var s__16397__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16397__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__16397__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__16399 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__16398 = (0);
while(true){
if((i__16398 < size__9155__auto__)){
var vec__16400 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__16398);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16400,(0),null);
var vec__16403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16400,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16403,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16403,(1),null);
cljs.core.chunk_append(b__16399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__16428 = (i__16398 + (1));
i__16398 = G__16428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16399),cljs$pprint$unzip_map_$_iter__16396(cljs.core.chunk_rest(s__16397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16399),null);
}
} else {
var vec__16406 = cljs.core.first(s__16397__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16406,(0),null);
var vec__16409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16406,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16409,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16409,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__16396(cljs.core.rest(s__16397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9156__auto__ = (function cljs$pprint$unzip_map_$_iter__16412(s__16413){
return (new cljs.core.LazySeq(null,(function (){
var s__16413__$1 = s__16413;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__16413__$1);
if(temp__5535__auto__){
var s__16413__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16413__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__16413__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__16415 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__16414 = (0);
while(true){
if((i__16414 < size__9155__auto__)){
var vec__16416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__16414);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16416,(0),null);
var vec__16419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16416,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16419,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16419,(1),null);
cljs.core.chunk_append(b__16415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__16429 = (i__16414 + (1));
i__16414 = G__16429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16415),cljs$pprint$unzip_map_$_iter__16412(cljs.core.chunk_rest(s__16413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16415),null);
}
} else {
var vec__16422 = cljs.core.first(s__16413__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16422,(0),null);
var vec__16425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16422,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16425,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16425,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__16412(cljs.core.rest(s__16413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9156__auto__ = (function cljs$pprint$tuple_map_$_iter__16430(s__16431){
return (new cljs.core.LazySeq(null,(function (){
var s__16431__$1 = s__16431;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__16431__$1);
if(temp__5535__auto__){
var s__16431__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16431__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__16431__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__16433 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__16432 = (0);
while(true){
if((i__16432 < size__9155__auto__)){
var vec__16434 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__16432);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16434,(1),null);
cljs.core.chunk_append(b__16433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__16440 = (i__16432 + (1));
i__16432 = G__16440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16433),cljs$pprint$tuple_map_$_iter__16430(cljs.core.chunk_rest(s__16431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16433),null);
}
} else {
var vec__16437 = cljs.core.first(s__16431__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16437,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__16430(cljs.core.rest(s__16431__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__16441 = (n - (1));
n = G__16441;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__16442 = (n + (1));
n = G__16442;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__16444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__16444) : test.call(null,G__16444));
})()))){
return pos;
} else {
var G__16445 = (pos + (1));
pos = G__16445;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__9007__auto__ = (((pp == null))?null:pp);
var m__9008__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__9008__auto__.call(null,pp));
} else {
var m__9008__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__9008__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__16446 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__16446) : sym.call(null,G__16446));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__16449 = arguments.length;
switch (G__16449) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint16450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16450 = (function (writer,max_columns,fields,meta16451){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta16451 = meta16451;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_16452,meta16451__$1){
var self__ = this;
var _16452__$1 = this;
return (new cljs.pprint.t_cljs$pprint16450(self__.writer,self__.max_columns,self__.fields,meta16451__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint16450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_16452){
var self__ = this;
var _16452__$1 = this;
return self__.meta16451;
});})(fields))
;

cljs.pprint.t_cljs$pprint16450.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint16450.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint16450.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16453 = cljs.core._EQ_;
var expr__16454 = cljs.core.type(x);
if(cljs.core.truth_((pred__16453.cljs$core$IFn$_invoke$arity$2 ? pred__16453.cljs$core$IFn$_invoke$arity$2(String,expr__16454) : pred__16453.call(null,String,expr__16454)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__16453,expr__16454,this$__$1,fields){
return (function (p1__16447_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16447_SHARP_,"\n");
});})(s,nl,pred__16453,expr__16454,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__16453.cljs$core$IFn$_invoke$arity$2 ? pred__16453.cljs$core$IFn$_invoke$arity$2(Number,expr__16454) : pred__16453.call(null,Number,expr__16454)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16454)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint16450.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta16451], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint16450.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16450.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16450";

cljs.pprint.t_cljs$pprint16450.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint16450");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint16450 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint16450(writer__$1,max_columns__$1,fields__$1,meta16451){
return (new cljs.pprint.t_cljs$pprint16450(writer__$1,max_columns__$1,fields__$1,meta16451));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint16450(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k16458,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__16462 = k16458;
var G__16462__$1 = (((G__16462 instanceof cljs.core.Keyword))?G__16462.fqn:null);
switch (G__16462__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16458,else__8965__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.logical-block{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16457){
var self__ = this;
var G__16457__$1 = this;
return (new cljs.core.RecordIter((0),G__16457__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__16463 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__16463(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16459,other16460){
var self__ = this;
var this16459__$1 = this;
return (!((other16460 == null))) && ((this16459__$1.constructor === other16460.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.parent,other16460.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.section,other16460.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.start_col,other16460.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.indent,other16460.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.done_nl,other16460.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.intra_block_nl,other16460.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.prefix,other16460.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.per_line_prefix,other16460.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.suffix,other16460.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.logical_block_callback,other16460.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16459__$1.__extmap,other16460.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__16457){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__16464 = cljs.core.keyword_identical_QMARK_;
var expr__16465 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__16467 = cljs.core.cst$kw$parent;
var G__16468 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16467,G__16468) : pred__16464.call(null,G__16467,G__16468));
})())){
return (new cljs.pprint.logical_block(G__16457,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16469 = cljs.core.cst$kw$section;
var G__16470 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16469,G__16470) : pred__16464.call(null,G__16469,G__16470));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__16457,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16471 = cljs.core.cst$kw$start_DASH_col;
var G__16472 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16471,G__16472) : pred__16464.call(null,G__16471,G__16472));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__16457,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16473 = cljs.core.cst$kw$indent;
var G__16474 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16473,G__16474) : pred__16464.call(null,G__16473,G__16474));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__16457,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16475 = cljs.core.cst$kw$done_DASH_nl;
var G__16476 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16475,G__16476) : pred__16464.call(null,G__16475,G__16476));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__16457,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16477 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__16478 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16477,G__16478) : pred__16464.call(null,G__16477,G__16478));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__16457,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16479 = cljs.core.cst$kw$prefix;
var G__16480 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16479,G__16480) : pred__16464.call(null,G__16479,G__16480));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__16457,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16481 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__16482 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16481,G__16482) : pred__16464.call(null,G__16481,G__16482));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__16457,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16483 = cljs.core.cst$kw$suffix;
var G__16484 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16483,G__16484) : pred__16464.call(null,G__16483,G__16484));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__16457,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16485 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__16486 = expr__16465;
return (pred__16464.cljs$core$IFn$_invoke$arity$2 ? pred__16464.cljs$core$IFn$_invoke$arity$2(G__16485,G__16486) : pred__16464.call(null,G__16485,G__16486));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__16457,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__16457),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__16457){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__16457,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__16461){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__16461),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__16461),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__16461),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__16461),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__16461),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__16461),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__16461),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__16461),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__16461),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__16461),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16461,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__16488 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__16488;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k16490,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__16494 = k16490;
var G__16494__$1 = (((G__16494 instanceof cljs.core.Keyword))?G__16494.fqn:null);
switch (G__16494__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16490,else__8965__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16489){
var self__ = this;
var G__16489__$1 = this;
return (new cljs.core.RecordIter((0),G__16489__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__16495 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__16495(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16491,other16492){
var self__ = this;
var this16491__$1 = this;
return (!((other16492 == null))) && ((this16491__$1.constructor === other16492.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16491__$1.type_tag,other16492.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16491__$1.data,other16492.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16491__$1.trailing_white_space,other16492.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16491__$1.start_pos,other16492.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16491__$1.end_pos,other16492.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16491__$1.__extmap,other16492.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__16489){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__16496 = cljs.core.keyword_identical_QMARK_;
var expr__16497 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__16499 = cljs.core.cst$kw$type_DASH_tag;
var G__16500 = expr__16497;
return (pred__16496.cljs$core$IFn$_invoke$arity$2 ? pred__16496.cljs$core$IFn$_invoke$arity$2(G__16499,G__16500) : pred__16496.call(null,G__16499,G__16500));
})())){
return (new cljs.pprint.buffer_blob(G__16489,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16501 = cljs.core.cst$kw$data;
var G__16502 = expr__16497;
return (pred__16496.cljs$core$IFn$_invoke$arity$2 ? pred__16496.cljs$core$IFn$_invoke$arity$2(G__16501,G__16502) : pred__16496.call(null,G__16501,G__16502));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__16489,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16503 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__16504 = expr__16497;
return (pred__16496.cljs$core$IFn$_invoke$arity$2 ? pred__16496.cljs$core$IFn$_invoke$arity$2(G__16503,G__16504) : pred__16496.call(null,G__16503,G__16504));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__16489,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16505 = cljs.core.cst$kw$start_DASH_pos;
var G__16506 = expr__16497;
return (pred__16496.cljs$core$IFn$_invoke$arity$2 ? pred__16496.cljs$core$IFn$_invoke$arity$2(G__16505,G__16506) : pred__16496.call(null,G__16505,G__16506));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__16489,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16507 = cljs.core.cst$kw$end_DASH_pos;
var G__16508 = expr__16497;
return (pred__16496.cljs$core$IFn$_invoke$arity$2 ? pred__16496.cljs$core$IFn$_invoke$arity$2(G__16507,G__16508) : pred__16496.call(null,G__16507,G__16508));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__16489,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__16489),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__16489){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__16489,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__16493){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16493),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__16493),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__16493),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16493),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16493),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16493,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__16278__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16278__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k16511,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__16515 = k16511;
var G__16515__$1 = (((G__16515 instanceof cljs.core.Keyword))?G__16515.fqn:null);
switch (G__16515__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16511,else__8965__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.nl-t{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16510){
var self__ = this;
var G__16510__$1 = this;
return (new cljs.core.RecordIter((0),G__16510__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__16516 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__16516(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16512,other16513){
var self__ = this;
var this16512__$1 = this;
return (!((other16513 == null))) && ((this16512__$1.constructor === other16513.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16512__$1.type_tag,other16513.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16512__$1.type,other16513.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16512__$1.logical_block,other16513.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16512__$1.start_pos,other16513.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16512__$1.end_pos,other16513.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16512__$1.__extmap,other16513.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__16510){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__16517 = cljs.core.keyword_identical_QMARK_;
var expr__16518 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__16520 = cljs.core.cst$kw$type_DASH_tag;
var G__16521 = expr__16518;
return (pred__16517.cljs$core$IFn$_invoke$arity$2 ? pred__16517.cljs$core$IFn$_invoke$arity$2(G__16520,G__16521) : pred__16517.call(null,G__16520,G__16521));
})())){
return (new cljs.pprint.nl_t(G__16510,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16522 = cljs.core.cst$kw$type;
var G__16523 = expr__16518;
return (pred__16517.cljs$core$IFn$_invoke$arity$2 ? pred__16517.cljs$core$IFn$_invoke$arity$2(G__16522,G__16523) : pred__16517.call(null,G__16522,G__16523));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__16510,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16524 = cljs.core.cst$kw$logical_DASH_block;
var G__16525 = expr__16518;
return (pred__16517.cljs$core$IFn$_invoke$arity$2 ? pred__16517.cljs$core$IFn$_invoke$arity$2(G__16524,G__16525) : pred__16517.call(null,G__16524,G__16525));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__16510,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16526 = cljs.core.cst$kw$start_DASH_pos;
var G__16527 = expr__16518;
return (pred__16517.cljs$core$IFn$_invoke$arity$2 ? pred__16517.cljs$core$IFn$_invoke$arity$2(G__16526,G__16527) : pred__16517.call(null,G__16526,G__16527));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__16510,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16528 = cljs.core.cst$kw$end_DASH_pos;
var G__16529 = expr__16518;
return (pred__16517.cljs$core$IFn$_invoke$arity$2 ? pred__16517.cljs$core$IFn$_invoke$arity$2(G__16528,G__16529) : pred__16517.call(null,G__16528,G__16529));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__16510,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__16510),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__16510){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__16510,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__16514){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16514),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__16514),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16514),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16514),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16514),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16514,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__16278__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16278__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k16532,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__16536 = k16532;
var G__16536__$1 = (((G__16536 instanceof cljs.core.Keyword))?G__16536.fqn:null);
switch (G__16536__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16532,else__8965__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16531){
var self__ = this;
var G__16531__$1 = this;
return (new cljs.core.RecordIter((0),G__16531__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__16537 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__16537(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16533,other16534){
var self__ = this;
var this16533__$1 = this;
return (!((other16534 == null))) && ((this16533__$1.constructor === other16534.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16533__$1.type_tag,other16534.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16533__$1.logical_block,other16534.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16533__$1.start_pos,other16534.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16533__$1.end_pos,other16534.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16533__$1.__extmap,other16534.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__16531){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__16538 = cljs.core.keyword_identical_QMARK_;
var expr__16539 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__16541 = cljs.core.cst$kw$type_DASH_tag;
var G__16542 = expr__16539;
return (pred__16538.cljs$core$IFn$_invoke$arity$2 ? pred__16538.cljs$core$IFn$_invoke$arity$2(G__16541,G__16542) : pred__16538.call(null,G__16541,G__16542));
})())){
return (new cljs.pprint.start_block_t(G__16531,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16543 = cljs.core.cst$kw$logical_DASH_block;
var G__16544 = expr__16539;
return (pred__16538.cljs$core$IFn$_invoke$arity$2 ? pred__16538.cljs$core$IFn$_invoke$arity$2(G__16543,G__16544) : pred__16538.call(null,G__16543,G__16544));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__16531,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16545 = cljs.core.cst$kw$start_DASH_pos;
var G__16546 = expr__16539;
return (pred__16538.cljs$core$IFn$_invoke$arity$2 ? pred__16538.cljs$core$IFn$_invoke$arity$2(G__16545,G__16546) : pred__16538.call(null,G__16545,G__16546));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__16531,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16547 = cljs.core.cst$kw$end_DASH_pos;
var G__16548 = expr__16539;
return (pred__16538.cljs$core$IFn$_invoke$arity$2 ? pred__16538.cljs$core$IFn$_invoke$arity$2(G__16547,G__16548) : pred__16538.call(null,G__16547,G__16548));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16531,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__16531),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__16531){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16531,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__16535){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16535),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16535),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16535),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16535),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16535,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__16278__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16278__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k16551,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__16555 = k16551;
var G__16555__$1 = (((G__16555 instanceof cljs.core.Keyword))?G__16555.fqn:null);
switch (G__16555__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16551,else__8965__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16550){
var self__ = this;
var G__16550__$1 = this;
return (new cljs.core.RecordIter((0),G__16550__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__16556 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__16556(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16552,other16553){
var self__ = this;
var this16552__$1 = this;
return (!((other16553 == null))) && ((this16552__$1.constructor === other16553.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16552__$1.type_tag,other16553.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16552__$1.logical_block,other16553.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16552__$1.start_pos,other16553.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16552__$1.end_pos,other16553.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16552__$1.__extmap,other16553.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__16550){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__16557 = cljs.core.keyword_identical_QMARK_;
var expr__16558 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__16560 = cljs.core.cst$kw$type_DASH_tag;
var G__16561 = expr__16558;
return (pred__16557.cljs$core$IFn$_invoke$arity$2 ? pred__16557.cljs$core$IFn$_invoke$arity$2(G__16560,G__16561) : pred__16557.call(null,G__16560,G__16561));
})())){
return (new cljs.pprint.end_block_t(G__16550,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16562 = cljs.core.cst$kw$logical_DASH_block;
var G__16563 = expr__16558;
return (pred__16557.cljs$core$IFn$_invoke$arity$2 ? pred__16557.cljs$core$IFn$_invoke$arity$2(G__16562,G__16563) : pred__16557.call(null,G__16562,G__16563));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__16550,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16564 = cljs.core.cst$kw$start_DASH_pos;
var G__16565 = expr__16558;
return (pred__16557.cljs$core$IFn$_invoke$arity$2 ? pred__16557.cljs$core$IFn$_invoke$arity$2(G__16564,G__16565) : pred__16557.call(null,G__16564,G__16565));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__16550,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16566 = cljs.core.cst$kw$end_DASH_pos;
var G__16567 = expr__16558;
return (pred__16557.cljs$core$IFn$_invoke$arity$2 ? pred__16557.cljs$core$IFn$_invoke$arity$2(G__16566,G__16567) : pred__16557.call(null,G__16566,G__16567));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16550,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__16550),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__16550){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16550,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__16554){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16554),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16554),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16554),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16554),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16554,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__16278__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16278__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k16570,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__16574 = k16570;
var G__16574__$1 = (((G__16574 instanceof cljs.core.Keyword))?G__16574.fqn:null);
switch (G__16574__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16570,else__8965__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.indent-t{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16569){
var self__ = this;
var G__16569__$1 = this;
return (new cljs.core.RecordIter((0),G__16569__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__16575 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__16575(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16571,other16572){
var self__ = this;
var this16571__$1 = this;
return (!((other16572 == null))) && ((this16571__$1.constructor === other16572.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16571__$1.type_tag,other16572.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16571__$1.logical_block,other16572.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16571__$1.relative_to,other16572.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16571__$1.offset,other16572.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16571__$1.start_pos,other16572.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16571__$1.end_pos,other16572.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16571__$1.__extmap,other16572.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__16569){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__16576 = cljs.core.keyword_identical_QMARK_;
var expr__16577 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__16579 = cljs.core.cst$kw$type_DASH_tag;
var G__16580 = expr__16577;
return (pred__16576.cljs$core$IFn$_invoke$arity$2 ? pred__16576.cljs$core$IFn$_invoke$arity$2(G__16579,G__16580) : pred__16576.call(null,G__16579,G__16580));
})())){
return (new cljs.pprint.indent_t(G__16569,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16581 = cljs.core.cst$kw$logical_DASH_block;
var G__16582 = expr__16577;
return (pred__16576.cljs$core$IFn$_invoke$arity$2 ? pred__16576.cljs$core$IFn$_invoke$arity$2(G__16581,G__16582) : pred__16576.call(null,G__16581,G__16582));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__16569,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16583 = cljs.core.cst$kw$relative_DASH_to;
var G__16584 = expr__16577;
return (pred__16576.cljs$core$IFn$_invoke$arity$2 ? pred__16576.cljs$core$IFn$_invoke$arity$2(G__16583,G__16584) : pred__16576.call(null,G__16583,G__16584));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__16569,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16585 = cljs.core.cst$kw$offset;
var G__16586 = expr__16577;
return (pred__16576.cljs$core$IFn$_invoke$arity$2 ? pred__16576.cljs$core$IFn$_invoke$arity$2(G__16585,G__16586) : pred__16576.call(null,G__16585,G__16586));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__16569,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16587 = cljs.core.cst$kw$start_DASH_pos;
var G__16588 = expr__16577;
return (pred__16576.cljs$core$IFn$_invoke$arity$2 ? pred__16576.cljs$core$IFn$_invoke$arity$2(G__16587,G__16588) : pred__16576.call(null,G__16587,G__16588));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__16569,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16589 = cljs.core.cst$kw$end_DASH_pos;
var G__16590 = expr__16577;
return (pred__16576.cljs$core$IFn$_invoke$arity$2 ? pred__16576.cljs$core$IFn$_invoke$arity$2(G__16589,G__16590) : pred__16576.call(null,G__16589,G__16590));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__16569,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__16569),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__16569){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__16569,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__16573){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16573),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16573),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__16573),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__16573),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16573),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16573),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16573,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__16278__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16278__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__){
return (function (p1__16593_SHARP_,p2__16592_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__16592_SHARP_);
});})(method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__))
,cljs.core.cst$kw$default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___16595 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___16595)){
var cb_16596 = temp__5535__auto___16595;
var G__16594_16597 = cljs.core.cst$kw$start;
(cb_16596.cljs$core$IFn$_invoke$arity$1 ? cb_16596.cljs$core$IFn$_invoke$arity$1(G__16594_16597) : cb_16596.call(null,G__16594_16597));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5535__auto___16598 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5535__auto___16598)){
var prefix_16599 = temp__5535__auto___16598;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_16599);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5535__auto___16601 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___16601)){
var cb_16602 = temp__5535__auto___16601;
var G__16600_16603 = cljs.core.cst$kw$end;
(cb_16602.cljs$core$IFn$_invoke$arity$1 ? cb_16602.cljs$core$IFn$_invoke$arity$1(G__16600_16603) : cb_16602.call(null,G__16600_16603));
} else {
}

var temp__5535__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5535__auto__)){
var suffix = temp__5535__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__16604 = cljs.core._EQ_;
var expr__16605 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__16607 = cljs.core.cst$kw$block;
var G__16608 = expr__16605;
return (pred__16604.cljs$core$IFn$_invoke$arity$2 ? pred__16604.cljs$core$IFn$_invoke$arity$2(G__16607,G__16608) : pred__16604.call(null,G__16607,G__16608));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__16609 = cljs.core.cst$kw$current;
var G__16610 = expr__16605;
return (pred__16604.cljs$core$IFn$_invoke$arity$2 ? pred__16604.cljs$core$IFn$_invoke$arity$2(G__16609,G__16610) : pred__16604.call(null,G__16609,G__16610));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16605)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__8274__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__8262__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__8262__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5533__auto___16611 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___16611)){
var tws_16612 = temp__5533__auto___16611;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16612);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__16613 = cljs.core.seq(tokens);
var chunk__16614 = null;
var count__16615 = (0);
var i__16616 = (0);
while(true){
if((i__16616 < count__16615)){
var token = chunk__16614.cljs$core$IIndexed$_nth$arity$2(null,i__16616);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___16617 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___16617)){
var tws_16618 = temp__5533__auto___16617;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16618);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_16619 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8262__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8262__auto__)){
return tws_16619;
} else {
return and__8262__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16619);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__16620 = seq__16613;
var G__16621 = chunk__16614;
var G__16622 = count__16615;
var G__16623 = (i__16616 + (1));
seq__16613 = G__16620;
chunk__16614 = G__16621;
count__16615 = G__16622;
i__16616 = G__16623;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__16613);
if(temp__5535__auto__){
var seq__16613__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16613__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__16613__$1);
var G__16624 = cljs.core.chunk_rest(seq__16613__$1);
var G__16625 = c__9205__auto__;
var G__16626 = cljs.core.count(c__9205__auto__);
var G__16627 = (0);
seq__16613 = G__16624;
chunk__16614 = G__16625;
count__16615 = G__16626;
i__16616 = G__16627;
continue;
} else {
var token = cljs.core.first(seq__16613__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5533__auto___16628 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto___16628)){
var tws_16629 = temp__5533__auto___16628;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16629);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_16630 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8262__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8262__auto__)){
return tws_16630;
} else {
return and__8262__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_16630);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__16631 = cljs.core.next(seq__16613__$1);
var G__16632 = null;
var G__16633 = (0);
var G__16634 = (0);
seq__16613 = G__16631;
chunk__16614 = G__16632;
count__16615 = G__16633;
i__16616 = G__16634;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__8274__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__8262__auto__ = miser_width;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = maxcol;
if(cljs.core.truth_(and__8262__auto____$1)){
var and__8262__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__8262__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__8262__auto____$2;
}
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__))
,cljs.core.cst$kw$default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__8274__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__8274__auto____$1){
return or__8274__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__16635_SHARP_){
return cljs.core.not((function (){var and__8262__auto__ = cljs.pprint.nl_t_QMARK_(p1__16635_SHARP_);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__16635_SHARP_),lb);
} else {
return and__8262__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__16636_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__16636_SHARP_);
return cljs.core.not((function (){var and__8262__auto__ = cljs.pprint.nl_t_QMARK_(p1__16636_SHARP_);
if(cljs.core.truth_(and__8262__auto__)){
var or__8274__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__8274__auto__){
return or__8274__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__8262__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__16637 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__16637;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_16638 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_16638);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16639_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__16639_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__16640 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16640,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16640,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__16643 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16643,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16643,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__16646 = newl;
var G__16647 = this$;
var G__16648 = section;
var G__16649 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__16646,G__16647,G__16648,G__16649) : cljs.pprint.emit_nl_QMARK_.call(null,G__16646,G__16647,G__16648,G__16649));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__16650 = new_buffer;
buffer = G__16650;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5533__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5533__auto__)){
var buf = temp__5533__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5535__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto__)){
var tws = temp__5535__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_16655 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_16656 = (oldpos_16655 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_16656);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_16655,newpos_16656));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__16651_16657 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__16652_16658 = null;
var count__16653_16659 = (0);
var i__16654_16660 = (0);
while(true){
if((i__16654_16660 < count__16653_16659)){
var l_16661__$1 = chunk__16652_16658.cljs$core$IIndexed$_nth$arity$2(null,i__16654_16660);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_16661__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__16662 = seq__16651_16657;
var G__16663 = chunk__16652_16658;
var G__16664 = count__16653_16659;
var G__16665 = (i__16654_16660 + (1));
seq__16651_16657 = G__16662;
chunk__16652_16658 = G__16663;
count__16653_16659 = G__16664;
i__16654_16660 = G__16665;
continue;
} else {
var temp__5535__auto___16666 = cljs.core.seq(seq__16651_16657);
if(temp__5535__auto___16666){
var seq__16651_16667__$1 = temp__5535__auto___16666;
if(cljs.core.chunked_seq_QMARK_(seq__16651_16667__$1)){
var c__9205__auto___16668 = cljs.core.chunk_first(seq__16651_16667__$1);
var G__16669 = cljs.core.chunk_rest(seq__16651_16667__$1);
var G__16670 = c__9205__auto___16668;
var G__16671 = cljs.core.count(c__9205__auto___16668);
var G__16672 = (0);
seq__16651_16657 = G__16669;
chunk__16652_16658 = G__16670;
count__16653_16659 = G__16671;
i__16654_16660 = G__16672;
continue;
} else {
var l_16673__$1 = cljs.core.first(seq__16651_16667__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_16673__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__16674 = cljs.core.next(seq__16651_16667__$1);
var G__16675 = null;
var G__16676 = (0);
var G__16677 = (0);
seq__16651_16657 = G__16674;
chunk__16652_16658 = G__16675;
count__16653_16659 = G__16676;
i__16654_16660 = G__16677;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint16678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16678 = (function (writer,max_columns,miser_width,lb,fields,meta16679){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta16679 = meta16679;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_16680,meta16679__$1){
var self__ = this;
var _16680__$1 = this;
return (new cljs.pprint.t_cljs$pprint16678(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta16679__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_16680){
var self__ = this;
var _16680__$1 = this;
return self__.meta16679;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16678.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16678.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16681 = cljs.core._EQ_;
var expr__16682 = cljs.core.type(x);
if(cljs.core.truth_((pred__16681.cljs$core$IFn$_invoke$arity$2 ? pred__16681.cljs$core$IFn$_invoke$arity$2(String,expr__16682) : pred__16681.call(null,String,expr__16682)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__16681.cljs$core$IFn$_invoke$arity$2 ? pred__16681.cljs$core$IFn$_invoke$arity$2(Number,expr__16682) : pred__16681.call(null,Number,expr__16682)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16682)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16678.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16678.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint16678.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16678.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta16679], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint16678.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16678.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16678";

cljs.pprint.t_cljs$pprint16678.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint16678");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint16678 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint16678(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta16679){
return (new cljs.pprint.t_cljs$pprint16678(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta16679));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint16678(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5535__auto___16685 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___16685)){
var cb_16686 = temp__5535__auto___16685;
var G__16684_16687 = cljs.core.cst$kw$start;
(cb_16686.cljs$core$IFn$_invoke$arity$1 ? cb_16686.cljs$core$IFn$_invoke$arity$1(G__16684_16687) : cb_16686.call(null,G__16684_16687));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5535__auto___16689 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5535__auto___16689)){
var cb_16690 = temp__5535__auto___16689;
var G__16688_16691 = cljs.core.cst$kw$end;
(cb_16690.cljs$core$IFn$_invoke$arity$1 ? cb_16690.cljs$core$IFn$_invoke$arity$1(G__16688_16691) : cb_16690.call(null,G__16688_16691));
} else {
}
} else {
var oldpos_16692 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_16693 = (oldpos_16692 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_16693);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_16692,newpos_16693));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__16694 = cljs.core._EQ_;
var expr__16695 = relative_to;
if(cljs.core.truth_((function (){var G__16697 = cljs.core.cst$kw$block;
var G__16698 = expr__16695;
return (pred__16694.cljs$core$IFn$_invoke$arity$2 ? pred__16694.cljs$core$IFn$_invoke$arity$2(G__16697,G__16698) : pred__16694.call(null,G__16697,G__16698));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__16699 = cljs.core.cst$kw$current;
var G__16700 = expr__16695;
return (pred__16694.cljs$core$IFn$_invoke$arity$2 ? pred__16694.cljs$core$IFn$_invoke$arity$2(G__16699,G__16700) : pred__16694.call(null,G__16699,G__16700));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16695)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__16701_SHARP_){
var temp__5535__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__16701_SHARP_));
if(cljs.core.truth_(temp__5535__auto__)){
var v = temp__5535__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__16701_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__8262__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__8262__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__8262__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__8262__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__8262__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__9560__auto__ = [];
var len__9553__auto___16720 = arguments.length;
var i__9554__auto___16721 = (0);
while(true){
if((i__9554__auto___16721 < len__9553__auto___16720)){
args__9560__auto__.push((arguments[i__9554__auto___16721]));

var G__16722 = (i__9554__auto___16721 + (1));
i__9554__auto___16721 = G__16722;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_16706 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_16707 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_16708 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_16709 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_16710 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_16711 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_16712 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_16713 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_16714 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_16715 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_16716 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_16717 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__16261__auto___16723 = base_writer;
var new_writer__16262__auto___16724 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16261__auto___16723));
var _STAR_out_STAR_16718_16725 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16262__auto___16724)?cljs.pprint.make_pretty_writer(base_writer__16261__auto___16723,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16261__auto___16723);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16718_16725;
}} else {
var _STAR_out_STAR_16719_16726 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16719_16726;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_16717;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_16716;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_16715;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_16714;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_16713;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_16712;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_16711;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_16710;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_16709;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_16708;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_16707;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_16706;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq16704){
var G__16705 = cljs.core.first(seq16704);
var seq16704__$1 = cljs.core.next(seq16704);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__16705,seq16704__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__16728 = arguments.length;
switch (G__16728) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_16729 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16729;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__16261__auto__ = writer;
var new_writer__16262__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16261__auto__));
var _STAR_out_STAR_16730 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16262__auto__)?cljs.pprint.make_pretty_writer(base_writer__16261__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16261__auto__);

try{var _STAR_print_pretty_STAR_16731_16733 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_16731_16733;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_16730;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__8262__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__8262__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__8262__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__9560__auto__ = [];
var len__9553__auto___16737 = arguments.length;
var i__9554__auto___16738 = (0);
while(true){
if((i__9554__auto___16738 < len__9553__auto___16737)){
args__9560__auto__.push((arguments[i__9554__auto___16738]));

var G__16739 = (i__9554__auto___16738 + (1));
i__9554__auto___16738 = G__16739;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((2) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9561__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq16734){
var G__16735 = cljs.core.first(seq16734);
var seq16734__$1 = cljs.core.next(seq16734);
var G__16736 = cljs.core.first(seq16734__$1);
var seq16734__$2 = cljs.core.next(seq16734__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__16735,G__16736,seq16734__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k16741,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__16745 = k16741;
var G__16745__$1 = (((G__16745 instanceof cljs.core.Keyword))?G__16745.fqn:null);
switch (G__16745__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16741,else__8965__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16740){
var self__ = this;
var G__16740__$1 = this;
return (new cljs.core.RecordIter((0),G__16740__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__16746 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__16746(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16742,other16743){
var self__ = this;
var this16742__$1 = this;
return (!((other16743 == null))) && ((this16742__$1.constructor === other16743.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16742__$1.seq,other16743.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16742__$1.rest,other16743.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16742__$1.pos,other16743.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16742__$1.__extmap,other16743.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__16740){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__16747 = cljs.core.keyword_identical_QMARK_;
var expr__16748 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__16750 = cljs.core.cst$kw$seq;
var G__16751 = expr__16748;
return (pred__16747.cljs$core$IFn$_invoke$arity$2 ? pred__16747.cljs$core$IFn$_invoke$arity$2(G__16750,G__16751) : pred__16747.call(null,G__16750,G__16751));
})())){
return (new cljs.pprint.arg_navigator(G__16740,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16752 = cljs.core.cst$kw$rest;
var G__16753 = expr__16748;
return (pred__16747.cljs$core$IFn$_invoke$arity$2 ? pred__16747.cljs$core$IFn$_invoke$arity$2(G__16752,G__16753) : pred__16747.call(null,G__16752,G__16753));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__16740,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16754 = cljs.core.cst$kw$pos;
var G__16755 = expr__16748;
return (pred__16747.cljs$core$IFn$_invoke$arity$2 ? pred__16747.cljs$core$IFn$_invoke$arity$2(G__16754,G__16755) : pred__16747.call(null,G__16754,G__16755));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__16740,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__16740),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__16740){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__16740,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__16744){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__16744),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__16744),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__16744),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16744,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__16757 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16757,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16757,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__16760 = navigator;
var G__16761 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__16760,G__16761) : cljs.pprint.relative_reposition.call(null,G__16760,G__16761));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8962__auto__,k__8963__auto__){
var self__ = this;
var this__8962__auto____$1 = this;
return this__8962__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8963__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8964__auto__,k16763,else__8965__auto__){
var self__ = this;
var this__8964__auto____$1 = this;
var G__16767 = k16763;
var G__16767__$1 = (((G__16767 instanceof cljs.core.Keyword))?G__16767.fqn:null);
switch (G__16767__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16763,else__8965__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8976__auto__,writer__8977__auto__,opts__8978__auto__){
var self__ = this;
var this__8976__auto____$1 = this;
var pr_pair__8979__auto__ = ((function (this__8976__auto____$1){
return (function (keyval__8980__auto__){
return cljs.core.pr_sequential_writer(writer__8977__auto__,cljs.core.pr_writer,""," ","",opts__8978__auto__,keyval__8980__auto__);
});})(this__8976__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8977__auto__,pr_pair__8979__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__8978__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16762){
var self__ = this;
var G__16762__$1 = this;
return (new cljs.core.RecordIter((0),G__16762__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8960__auto__){
var self__ = this;
var this__8960__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8957__auto__){
var self__ = this;
var this__8957__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8966__auto__){
var self__ = this;
var this__8966__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8958__auto__){
var self__ = this;
var this__8958__auto____$1 = this;
var h__8730__auto__ = self__.__hash;
if(!((h__8730__auto__ == null))){
return h__8730__auto__;
} else {
var h__8730__auto____$1 = (function (){var fexpr__16768 = ((function (h__8730__auto__,this__8958__auto____$1){
return (function (coll__8959__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__8959__auto__));
});})(h__8730__auto__,this__8958__auto____$1))
;
return fexpr__16768(this__8958__auto____$1);
})();
self__.__hash = h__8730__auto____$1;

return h__8730__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16764,other16765){
var self__ = this;
var this16764__$1 = this;
return (!((other16765 == null))) && ((this16764__$1.constructor === other16765.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16764__$1.func,other16765.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16764__$1.def,other16765.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16764__$1.params,other16765.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16764__$1.offset,other16765.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16764__$1.__extmap,other16765.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8971__auto__,k__8972__auto__){
var self__ = this;
var this__8971__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__8972__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8971__auto____$1),self__.__meta),k__8972__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8972__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8969__auto__,k__8970__auto__,G__16762){
var self__ = this;
var this__8969__auto____$1 = this;
var pred__16769 = cljs.core.keyword_identical_QMARK_;
var expr__16770 = k__8970__auto__;
if(cljs.core.truth_((function (){var G__16772 = cljs.core.cst$kw$func;
var G__16773 = expr__16770;
return (pred__16769.cljs$core$IFn$_invoke$arity$2 ? pred__16769.cljs$core$IFn$_invoke$arity$2(G__16772,G__16773) : pred__16769.call(null,G__16772,G__16773));
})())){
return (new cljs.pprint.compiled_directive(G__16762,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16774 = cljs.core.cst$kw$def;
var G__16775 = expr__16770;
return (pred__16769.cljs$core$IFn$_invoke$arity$2 ? pred__16769.cljs$core$IFn$_invoke$arity$2(G__16774,G__16775) : pred__16769.call(null,G__16774,G__16775));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__16762,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16776 = cljs.core.cst$kw$params;
var G__16777 = expr__16770;
return (pred__16769.cljs$core$IFn$_invoke$arity$2 ? pred__16769.cljs$core$IFn$_invoke$arity$2(G__16776,G__16777) : pred__16769.call(null,G__16776,G__16777));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__16762,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16778 = cljs.core.cst$kw$offset;
var G__16779 = expr__16770;
return (pred__16769.cljs$core$IFn$_invoke$arity$2 ? pred__16769.cljs$core$IFn$_invoke$arity$2(G__16778,G__16779) : pred__16769.call(null,G__16778,G__16779));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__16762,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8970__auto__,G__16762),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8974__auto__){
var self__ = this;
var this__8974__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8961__auto__,G__16762){
var self__ = this;
var this__8961__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__16762,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8967__auto__,entry__8968__auto__){
var self__ = this;
var this__8967__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8968__auto__)){
return this__8967__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8968__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8967__auto____$1,entry__8968__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__9000__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__9000__auto__,writer__9001__auto__){
return cljs.core._write(writer__9001__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__16766){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__16766),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__16766),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__16766),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__16766),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16766,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__16781,navigator){
var vec__16782 = p__16781;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16782,(0),null);
var vec__16785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16782,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16785,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16785,(1),null);
var vec__16788 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16788,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16788,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__16791 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16791,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16791,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__8274__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__16794 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16794,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16794,(1),null);
var base_output = (function (){var or__8274__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__16797_SHARP_){
if((p1__16797_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__16797_SHARP_,base),cljs.core.quot(p1__16797_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__16798_SHARP_){
if((p1__16798_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__16798_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__16798_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__16800 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16800,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16800,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_16803 = (arg < (0));
var pos_arg_16804 = ((neg_16803)?(- arg):arg);
var raw_str_16805 = cljs.pprint.opt_base_str(base,pos_arg_16804);
var group_str_16806 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_16803,pos_arg_16804,raw_str_16805,vec__16800,arg,arg_navigator__$1){
return (function (p1__16799_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__16799_SHARP_);
});})(neg_16803,pos_arg_16804,raw_str_16805,vec__16800,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_16805));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_16805);
var signed_str_16807 = ((neg_16803)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_16806)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_16806)].join(''):group_str_16806
));
var padded_str_16808 = (((signed_str_16807.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_16807.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_16807)].join(''):signed_str_16807);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_16808], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__16809 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__16810 = (pos - (1));
var G__16811 = cljs.core.first(remainder);
var G__16812 = cljs.core.next(remainder);
acc = G__16809;
pos = G__16810;
this$ = G__16811;
remainder = G__16812;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__16813 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16813,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16813,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_16816 = (((arg < (0)))?(- arg):arg);
var parts_16817 = cljs.pprint.remainders((1000),abs_arg_16816);
if((cljs.core.count(parts_16817) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_16818 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_16817);
var full_str_16819 = cljs.pprint.add_english_scales(parts_strs_16818,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_16819)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__16820 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16820,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16820,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_16823 = (((arg < (0)))?(- arg):arg);
var parts_16824 = cljs.pprint.remainders((1000),abs_arg_16823);
if((cljs.core.count(parts_16824) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_16825 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_16824));
var head_str_16826 = cljs.pprint.add_english_scales(parts_strs_16825,(1));
var tail_str_16827 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_16824));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_16826))) && (!(cljs.core.empty_QMARK_(tail_str_16827))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_16826),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_16827)].join(''):((!(cljs.core.empty_QMARK_(head_str_16826)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_16826),"th"].join(''):tail_str_16827
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_16828 = cljs.core.rem(arg,(100));
var not_teens_16829 = (((11) < low_two_digits_16828)) || (((19) > low_two_digits_16828));
var low_digit_16830 = cljs.core.rem(low_two_digits_16828,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_16830 === (1))) && (not_teens_16829))?"st":((((low_digit_16830 === (2))) && (not_teens_16829))?"nd":((((low_digit_16830 === (3))) && (not_teens_16829))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__16831 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_16834 = cljs.pprint.remainders((10),arg);
var acc_16835 = cljs.core.PersistentVector.EMPTY;
var pos_16836 = (cljs.core.count(digits_16834) - (1));
var digits_16837__$1 = digits_16834;
while(true){
if(cljs.core.empty_QMARK_(digits_16837__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_16835)], 0));
} else {
var digit_16838 = cljs.core.first(digits_16837__$1);
var G__16839 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_16838))?acc_16835:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_16835,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_16836),(digit_16838 - (1)))));
var G__16840 = (pos_16836 - (1));
var G__16841 = cljs.core.next(digits_16837__$1);
acc_16835 = G__16839;
pos_16836 = G__16840;
digits_16837__$1 = G__16841;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__16842 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16842,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16842,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__16845 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16845,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16845,(1),null);
var pred__16848_16855 = cljs.core._EQ_;
var expr__16849_16856 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__16851 = "o";
var G__16852 = expr__16849_16856;
return (pred__16848_16855.cljs$core$IFn$_invoke$arity$2 ? pred__16848_16855.cljs$core$IFn$_invoke$arity$2(G__16851,G__16852) : pred__16848_16855.call(null,G__16851,G__16852));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__16853 = "u";
var G__16854 = expr__16849_16856;
return (pred__16848_16855.cljs$core$IFn$_invoke$arity$2 ? pred__16848_16855.cljs$core$IFn$_invoke$arity$2(G__16853,G__16854) : pred__16848_16855.call(null,G__16853,G__16854));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__16848_16855.cljs$core$IFn$_invoke$arity$2 ? pred__16848_16855.cljs$core$IFn$_invoke$arity$2(null,expr__16849_16856) : pred__16848_16855.call(null,null,expr__16849_16856)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16849_16856)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__16857 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16857,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16857,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__16860 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16860,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16860,(1),null);
var vec__16863 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16863,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16863,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__16866 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__16869 = (i - (1));
i = G__16869;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__8274__auto__ = d;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__8626__auto__ = (2);
var y__8627__auto__ = w;
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__8626__auto__ = (e + (1));
var y__8627__auto__ = (w__$1 - (1));
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})():(w__$1 + e)
));
var vec__16870 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16870,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16870,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16870,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16870,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__16873 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16873,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16873,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__16876 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16876,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16876,(1),null);
var vec__16879 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16879,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16879,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__16882 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16882,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16882,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__8274__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__16885 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16885,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16885,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16885,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__8262__auto__ = w;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = d;
if(cljs.core.truth_(and__8262__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_16888 = cljs.core.count(fixed_repr__$1);
var signed_len_16889 = (cljs.core.truth_(add_sign)?(len_16888 + (1)):len_16888);
var prepend_zero_16890__$1 = (prepend_zero) && (!((signed_len_16889 >= w)));
var append_zero_16891__$1 = (append_zero) && (!((signed_len_16889 >= w)));
var full_len_16892 = (((prepend_zero_16890__$1) || (append_zero_16891__$1))?(signed_len_16889 + (1)):signed_len_16889);
if(cljs.core.truth_((function (){var and__8262__auto__ = (full_len_16892 > w);
if(and__8262__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_16892),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_16890__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_16891__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__16893 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16893,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16893,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__16899_16909 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__16900_16910 = G__16899_16909;
var mantissa_16911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16900_16910,(0),null);
var exp_16912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16900_16910,(1),null);
var G__16899_16913__$1 = G__16899_16909;
while(true){
var vec__16903_16914 = G__16899_16913__$1;
var mantissa_16915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16903_16914,(0),null);
var exp_16916__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16903_16914,(1),null);
var w_16917 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_16918 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_16919 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_16920 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_16921 = (function (){var or__8274__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return "E";
}
})();
var add_sign_16922 = (function (){var or__8274__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_16923 = (k_16920 <= (0));
var scaled_exp_16924 = (exp_16916__$1 - (k_16920 - (1)));
var scaled_exp_str_16925 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_16924))].join('');
var scaled_exp_str_16926__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_16921),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_16924 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_16919)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_16919 - cljs.core.count(scaled_exp_str_16925)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_16925)].join('');
var exp_width_16927 = cljs.core.count(scaled_exp_str_16926__$1);
var base_mantissa_width_16928 = cljs.core.count(mantissa_16915__$1);
var scaled_mantissa_16929 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_16920),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_16915__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_16918)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_16918 - (base_mantissa_width_16928 - (1))) - (((k_16920 < (0)))?(- k_16920):(0))),"0")):null))].join('');
var w_mantissa_16930 = (cljs.core.truth_(w_16917)?(w_16917 - exp_width_16927):null);
var vec__16906_16931 = cljs.pprint.round_str(scaled_mantissa_16929,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_16920,(0)))?(d_16918 - (1)):(((k_16920 > (0)))?d_16918:(((k_16920 < (0)))?(d_16918 - (1)):null))),(cljs.core.truth_(w_mantissa_16930)?(w_mantissa_16930 - (cljs.core.truth_(add_sign_16922)?(1):(0))):null));
var rounded_mantissa_16932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16906_16931,(0),null);
var __16933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16906_16931,(1),null);
var incr_exp_16934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16906_16931,(2),null);
var full_mantissa_16935 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_16932,k_16920);
var append_zero_16936 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_16920,cljs.core.count(rounded_mantissa_16932))) && ((d_16918 == null));
if(cljs.core.not(incr_exp_16934)){
if(cljs.core.truth_(w_16917)){
var len_16937 = (cljs.core.count(full_mantissa_16935) + exp_width_16927);
var signed_len_16938 = (cljs.core.truth_(add_sign_16922)?(len_16937 + (1)):len_16937);
var prepend_zero_16939__$1 = (prepend_zero_16923) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_16938,w_16917)));
var full_len_16940 = ((prepend_zero_16939__$1)?(signed_len_16938 + (1)):signed_len_16938);
var append_zero_16941__$1 = (append_zero_16936) && ((full_len_16940 < w_16917));
if(cljs.core.truth_((function (){var and__8262__auto__ = (function (){var or__8274__auto__ = (full_len_16940 > w_16917);
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = e_16919;
if(cljs.core.truth_(and__8262__auto__)){
return ((exp_width_16927 - (2)) > e_16919);
} else {
return and__8262__auto__;
}
}
})();
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_16917,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_16917 - full_len_16940) - ((append_zero_16941__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_16922)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_16939__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_16935),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_16941__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_16926__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_16922)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_16923)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_16935),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_16936)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_16926__$1)].join('')], 0));
}
} else {
var G__16942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_16932,(exp_16916__$1 + (1))], null);
G__16899_16913__$1 = G__16942;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__16943 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16943,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16943,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__16946 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16946,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16946,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__8626__auto__ = cljs.core.count(mantissa);
var y__8627__auto__ = (function (){var x__8633__auto__ = n;
var y__8634__auto__ = (7);
return ((x__8633__auto__ < y__8634__auto__) ? x__8633__auto__ : y__8634__auto__);
})();
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__16949 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16949,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16949,(1),null);
var vec__16952 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16952,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16952,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__8274__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (arg < (0));
}
})();
var vec__16955 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16955,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16955,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16955,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8262__auto__)){
return add_sign;
} else {
return and__8262__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__8262__auto__){
return add_sign;
} else {
return and__8262__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__16958 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16958,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16958,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__16961 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16961,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16961,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__16964 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16964,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16964,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16967 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16967,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16967,(1),null);
var vec__16970 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8274__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = max_count;
if(cljs.core.truth_(and__8262__auto__)){
return (count >= max_count);
} else {
return and__8262__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__16973 = (count + (1));
var G__16974 = iter_result;
var G__16975 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__16973;
args__$1 = G__16974;
last_pos = G__16975;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16976 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16976,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16976,(1),null);
var vec__16979 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16979,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16979,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__8274__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = max_count;
if(cljs.core.truth_(and__8262__auto__)){
return (count >= max_count);
} else {
return and__8262__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__16982 = (count + (1));
var G__16983 = cljs.core.next(arg_list__$1);
count = G__16982;
arg_list__$1 = G__16983;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16984 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16984,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16984,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8274__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = max_count;
if(cljs.core.truth_(and__8262__auto__)){
return (count >= max_count);
} else {
return and__8262__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__16987 = (count + (1));
var G__16988 = iter_result;
var G__16989 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__16987;
navigator__$2 = G__16988;
last_pos = G__16989;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__16990 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16990,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16990,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__8274__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8274__auto__){
return or__8274__auto__;
} else {
var and__8262__auto__ = max_count;
if(cljs.core.truth_(and__8262__auto__)){
return (count >= max_count);
} else {
return and__8262__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__16993 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16993,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16993,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__16996 = (count + (1));
var G__16997 = navigator__$3;
count = G__16996;
navigator__$2 = G__16997;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__16998 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_17001 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17001;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16998,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16998,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__17002 = cljs.core.next(clauses__$1);
var G__17003 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__17004 = iter_result;
clauses__$1 = G__17002;
acc = G__17003;
navigator__$1 = G__17004;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__17005 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var else$ = temp__5535__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__17008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17005,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17008,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17005,(1),null);
var navigator__$1 = (function (){var or__8274__auto__ = new_navigator;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return navigator;
}
})();
var vec__17011 = (function (){var temp__5535__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5535__auto__)){
var p = temp__5535__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17011,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17011,(1),null);
var navigator__$2 = (function (){var or__8274__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__8274__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__8274__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__17014 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17014,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17014,(1),null);
var slots = (function (){var x__8626__auto__ = (1);
var y__8627__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__8626__auto__ = minpad;
var y__8627__auto__ = cljs.core.quot(total_pad,slots);
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__8262__auto__ = eol_str;
if(cljs.core.truth_(and__8262__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_17017__$1 = slots;
var extra_pad_17018__$1 = extra_pad;
var strs_17019__$1 = strs;
var pad_only_17020 = (function (){var or__8274__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_17019__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_17019__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_17020))?cljs.core.first(strs_17019__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__8274__auto__ = pad_only_17020;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = cljs.core.next(strs_17019__$1);
if(or__8274__auto____$1){
return or__8274__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_17018__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__17021 = (slots_17017__$1 - (1));
var G__17022 = (extra_pad_17018__$1 - (1));
var G__17023 = (cljs.core.truth_(pad_only_17020)?strs_17019__$1:cljs.core.next(strs_17019__$1));
var G__17024 = false;
slots_17017__$1 = G__17021;
extra_pad_17018__$1 = G__17022;
strs_17019__$1 = G__17023;
pad_only_17020 = G__17024;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint17025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17025 = (function (writer,meta17026){
this.writer = writer;
this.meta17026 = meta17026;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17027,meta17026__$1){
var self__ = this;
var _17027__$1 = this;
return (new cljs.pprint.t_cljs$pprint17025(self__.writer,meta17026__$1));
});

cljs.pprint.t_cljs$pprint17025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17027){
var self__ = this;
var _17027__$1 = this;
return self__.meta17026;
});

cljs.pprint.t_cljs$pprint17025.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint17025.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17028 = cljs.core._EQ_;
var expr__17029 = cljs.core.type(x);
if(cljs.core.truth_((pred__17028.cljs$core$IFn$_invoke$arity$2 ? pred__17028.cljs$core$IFn$_invoke$arity$2(String,expr__17029) : pred__17028.call(null,String,expr__17029)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__17028.cljs$core$IFn$_invoke$arity$2 ? pred__17028.cljs$core$IFn$_invoke$arity$2(Number,expr__17029) : pred__17028.call(null,Number,expr__17029)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17029)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint17025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta17026], null);
});

cljs.pprint.t_cljs$pprint17025.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17025.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17025";

cljs.pprint.t_cljs$pprint17025.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17025");
});

cljs.pprint.__GT_t_cljs$pprint17025 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint17025(writer__$1,meta17026){
return (new cljs.pprint.t_cljs$pprint17025(writer__$1,meta17026));
});

}

return (new cljs.pprint.t_cljs$pprint17025(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint17031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17031 = (function (writer,meta17032){
this.writer = writer;
this.meta17032 = meta17032;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17033,meta17032__$1){
var self__ = this;
var _17033__$1 = this;
return (new cljs.pprint.t_cljs$pprint17031(self__.writer,meta17032__$1));
});

cljs.pprint.t_cljs$pprint17031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17033){
var self__ = this;
var _17033__$1 = this;
return self__.meta17032;
});

cljs.pprint.t_cljs$pprint17031.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint17031.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17034 = cljs.core._EQ_;
var expr__17035 = cljs.core.type(x);
if(cljs.core.truth_((pred__17034.cljs$core$IFn$_invoke$arity$2 ? pred__17034.cljs$core$IFn$_invoke$arity$2(String,expr__17035) : pred__17034.call(null,String,expr__17035)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__17034.cljs$core$IFn$_invoke$arity$2 ? pred__17034.cljs$core$IFn$_invoke$arity$2(Number,expr__17035) : pred__17034.call(null,Number,expr__17035)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17035)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint17031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta17032], null);
});

cljs.pprint.t_cljs$pprint17031.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17031.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17031";

cljs.pprint.t_cljs$pprint17031.cljs$lang$ctorPrWriter = (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17031");
});

cljs.pprint.__GT_t_cljs$pprint17031 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint17031(writer__$1,meta17032){
return (new cljs.pprint.t_cljs$pprint17031(writer__$1,meta17032));
});

}

return (new cljs.pprint.t_cljs$pprint17031(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__8262__auto__ = first_QMARK_;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = f;
if(cljs.core.truth_(and__8262__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__8262__auto__ = m;
if(cljs.core.truth_(and__8262__auto__)){
return (m.index + (1));
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint17037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17037 = (function (writer,last_was_whitespace_QMARK_,meta17038){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta17038 = meta17038;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_17039,meta17038__$1){
var self__ = this;
var _17039__$1 = this;
return (new cljs.pprint.t_cljs$pprint17037(self__.writer,self__.last_was_whitespace_QMARK_,meta17038__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_17039){
var self__ = this;
var _17039__$1 = this;
return self__.meta17038;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17037.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17037.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17040 = cljs.core._EQ_;
var expr__17041 = cljs.core.type(x);
if(cljs.core.truth_((pred__17040.cljs$core$IFn$_invoke$arity$2 ? pred__17040.cljs$core$IFn$_invoke$arity$2(String,expr__17041) : pred__17040.call(null,String,expr__17041)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__17043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__17043);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__17040.cljs$core$IFn$_invoke$arity$2 ? pred__17040.cljs$core$IFn$_invoke$arity$2(Number,expr__17041) : pred__17040.call(null,Number,expr__17041)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17041)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17037.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta17038], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17037.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17037.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17037";

cljs.pprint.t_cljs$pprint17037.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17037");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint17037 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint17037(writer__$1,last_was_whitespace_QMARK___$1,meta17038){
return (new cljs.pprint.t_cljs$pprint17037(writer__$1,last_was_whitespace_QMARK___$1,meta17038));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint17037(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint17044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17044 = (function (writer,capped,meta17045){
this.writer = writer;
this.capped = capped;
this.meta17045 = meta17045;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_17046,meta17045__$1){
var self__ = this;
var _17046__$1 = this;
return (new cljs.pprint.t_cljs$pprint17044(self__.writer,self__.capped,meta17045__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint17044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_17046){
var self__ = this;
var _17046__$1 = this;
return self__.meta17045;
});})(capped))
;

cljs.pprint.t_cljs$pprint17044.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint17044.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17047 = cljs.core._EQ_;
var expr__17048 = cljs.core.type(x);
if(cljs.core.truth_((pred__17047.cljs$core$IFn$_invoke$arity$2 ? pred__17047.cljs$core$IFn$_invoke$arity$2(String,expr__17048) : pred__17047.call(null,String,expr__17048)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__8262__auto__ = m;
if(cljs.core.truth_(and__8262__auto__)){
return m.index;
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__17047.cljs$core$IFn$_invoke$arity$2 ? pred__17047.cljs$core$IFn$_invoke$arity$2(Number,expr__17048) : pred__17047.call(null,Number,expr__17048)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__8262__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__8262__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17048)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint17044.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta17045], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint17044.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17044.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17044";

cljs.pprint.t_cljs$pprint17044.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__8945__auto__,writer__8946__auto__,opt__8947__auto__){
return cljs.core._write(writer__8946__auto__,"cljs.pprint/t_cljs$pprint17044");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint17044 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint17044(writer__$1,capped__$1,meta17045){
return (new cljs.pprint.t_cljs$pprint17044(writer__$1,capped__$1,meta17045));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint17044(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_17050 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17050;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_17052 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_17053 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_17054 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_17055 = (((current_17054 < colnum_17052))?(colnum_17052 - current_17054):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_17053,(0)))?(0):(colinc_17053 - cljs.core.rem((current_17054 - colnum_17052),colinc_17053))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_17055," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_17056 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_17057 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_17058 = (colrel_17056 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_17059 = (((colinc_17057 > (0)))?cljs.core.rem(start_col_17058,colinc_17057):(0));
var space_count_17060 = (colrel_17056 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_17059))?(0):(colinc_17057 - offset_17059)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_17060," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__17061 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17061,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17061,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17064_17066 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17065_17067 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17065_17067;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17064_17066;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17068_SHARP_,p2__17069_SHARP_,p3__17070_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__17068_SHARP_,p2__17069_SHARP_,p3__17070_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17071_SHARP_,p2__17072_SHARP_,p3__17073_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__17071_SHARP_,p2__17072_SHARP_,p3__17073_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17074_SHARP_,p2__17075_SHARP_,p3__17076_SHARP_){
return cljs.pprint.format_integer((10),p1__17074_SHARP_,p2__17075_SHARP_,p3__17076_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17077_SHARP_,p2__17078_SHARP_,p3__17079_SHARP_){
return cljs.pprint.format_integer((2),p1__17077_SHARP_,p2__17078_SHARP_,p3__17079_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17080_SHARP_,p2__17081_SHARP_,p3__17082_SHARP_){
return cljs.pprint.format_integer((8),p1__17080_SHARP_,p2__17081_SHARP_,p3__17082_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17083_SHARP_,p2__17084_SHARP_,p3__17085_SHARP_){
return cljs.pprint.format_integer((16),p1__17083_SHARP_,p2__17084_SHARP_,p3__17085_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__17086_SHARP_,p2__17087_SHARP_,p3__17088_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__17086_SHARP_),p1__17086_SHARP_,p2__17087_SHARP_,p3__17088_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())){
return (function (p1__17089_SHARP_,p2__17090_SHARP_,p3__17091_SHARP_){
return cljs.pprint.format_old_roman(p1__17089_SHARP_,p2__17090_SHARP_,p3__17091_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17092_SHARP_,p2__17093_SHARP_,p3__17094_SHARP_){
return cljs.pprint.format_new_roman(p1__17092_SHARP_,p2__17093_SHARP_,p3__17094_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17095_SHARP_,p2__17096_SHARP_,p3__17097_SHARP_){
return cljs.pprint.format_ordinal_english(p1__17095_SHARP_,p2__17096_SHARP_,p3__17097_SHARP_);
});
} else {
return (function (p1__17098_SHARP_,p2__17099_SHARP_,p3__17100_SHARP_){
return cljs.pprint.format_cardinal_english(p1__17098_SHARP_,p2__17099_SHARP_,p3__17100_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__17110 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17110,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17110,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9319__auto___17128 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17129 = (0);
while(true){
if((i_17129 < n__9319__auto___17128)){
cljs.pprint.prn();

var G__17130 = (i_17129 + (1));
i_17129 = G__17130;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_17131 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_17131 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__9319__auto___17132 = (cnt_17131 - (1));
var i_17133 = (0);
while(true){
if((i_17133 < n__9319__auto___17132)){
cljs.pprint.prn();

var G__17134 = (i_17133 + (1));
i_17133 = G__17134;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9319__auto___17135 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_17136 = (0);
while(true){
if((i_17136 < n__9319__auto___17135)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__17137 = (i_17136 + (1));
i_17136 = G__17137;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17101_SHARP_,p2__17102_SHARP_,p3__17103_SHARP_){
return cljs.pprint.relative_tabulation(p1__17101_SHARP_,p2__17102_SHARP_,p3__17103_SHARP_);
});
} else {
return (function (p1__17104_SHARP_,p2__17105_SHARP_,p3__17106_SHARP_){
return cljs.pprint.absolute_tabulation(p1__17104_SHARP_,p2__17105_SHARP_,p3__17106_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__17113 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17113,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17113,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__17116 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17116,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17116,(1),null);
var vec__17119 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17119,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17119,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__17107_SHARP_,p2__17108_SHARP_,p3__17109_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__17107_SHARP_,p2__17108_SHARP_,p3__17109_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8262__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__8262__auto__ = arg1;
if(cljs.core.truth_(and__8262__auto__)){
var and__8262__auto____$1 = arg2;
if(cljs.core.truth_(and__8262__auto____$1)){
return arg3;
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__8262__auto__ = arg1;
if(cljs.core.truth_(and__8262__auto__)){
return arg2;
} else {
return and__8262__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__8274__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__17122 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17122,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17122,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__17125 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17125,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17125,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__17138){
var vec__17139 = p__17138;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17139,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17139,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17139,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__17142){
var vec__17143 = p__17142;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17143,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17143,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__17146){
var vec__17147 = p__17146;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17147,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17147,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17147,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8262__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8262__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8262__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8262__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8262__auto__){
var and__8262__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__8262__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8262__auto____$1;
}
} else {
return and__8262__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__8633__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__8634__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__8633__auto__ < y__8634__auto__) ? x__8633__auto__ : y__8634__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__17150_SHARP_,p2__17151_SHARP_){
var val = cljs.core.first(p1__17150_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__17151_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__17151_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__17150_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__9156__auto__ = (function cljs$pprint$map_params_$_iter__17155(s__17156){
return (new cljs.core.LazySeq(null,(function (){
var s__17156__$1 = s__17156;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17156__$1);
if(temp__5535__auto__){
var s__17156__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17156__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__17156__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__17158 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__17157 = (0);
while(true){
if((i__17157 < size__9155__auto__)){
var vec__17159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__17157);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17159,(0),null);
var vec__17162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17159,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17162,(0),null);
cljs.core.chunk_append(b__17158,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__17171 = (i__17157 + (1));
i__17157 = G__17171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17158),cljs$pprint$map_params_$_iter__17155(cljs.core.chunk_rest(s__17156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17158),null);
}
} else {
var vec__17165 = cljs.core.first(s__17156__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17165,(0),null);
var vec__17168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17165,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17168,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__17155(cljs.core.rest(s__17156__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17152_SHARP_,p2__17153_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__17152_SHARP_,p2__17153_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17154_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__17154_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__17172 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17172,(0),null);
var vec__17175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17172,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17175,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17175,(1),null);
var vec__17178 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17178,(0),null);
var vec__17181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17178,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__17184 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__17184.cljs$core$IFn$_invoke$arity$2 ? fexpr__17184.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__17184.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__8262__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__8262__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__17185 = (function (){var G__17188 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__17189 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__17190 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__17188,G__17189,G__17190) : cljs.pprint.collect_clauses.call(null,G__17188,G__17189,G__17190));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17185,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17185,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__17191){
var vec__17192 = p__17191;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17192,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17192,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17192,(2),null);
var vec__17195 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17195,(0),null);
var vec__17198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17195,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17198,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17198,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17198,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17198,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_17201 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_17201){
return (function (p__17202){
var vec__17203 = p__17202;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17203,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17203,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_17201))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_17201;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__8274__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__8274__auto____$1)){
return or__8274__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__17206 = cljs.core.next(format__$1);
format__$1 = G__17206;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__17208 = arguments.length;
switch (G__17208) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__8262__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__8262__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_17209 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17209;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__17210 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17210,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17210,(1),null);
var vec__17213 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17213,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17213,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__17217 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__17217) : cljs.pprint.reader_macros.call(null,G__17217));
})();
if(cljs.core.truth_((function (){var and__8262__auto__ = macro_char;
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__8262__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17218_17221 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17219_17222 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count17220_17223 = (0);
var alis_17224__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17220_17223 < cljs.core._STAR_print_length_STAR_))){
if(alis_17224__$1){
cljs.pprint.write_out(cljs.core.first(alis_17224__$1));

if(cljs.core.next(alis_17224__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17225 = (length_count17220_17223 + (1));
var G__17226 = cljs.core.next(alis_17224__$1);
length_count17220_17223 = G__17225;
alis_17224__$1 = G__17226;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17219_17222;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17218_17221;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17227_17230 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17228_17231 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count17229_17232 = (0);
var aseq_17233 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17229_17232 < cljs.core._STAR_print_length_STAR_))){
if(aseq_17233){
cljs.pprint.write_out(cljs.core.first(aseq_17233));

if(cljs.core.next(aseq_17233)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17234 = (length_count17229_17232 + (1));
var G__17235 = cljs.core.next(aseq_17233);
length_count17229_17232 = G__17234;
aseq_17233 = G__17235;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17228_17231;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17227_17230;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__16326__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__){
return (function() { 
var G__17236__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17236 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17237__i = 0, G__17237__a = new Array(arguments.length -  0);
while (G__17237__i < G__17237__a.length) {G__17237__a[G__17237__i] = arguments[G__17237__i + 0]; ++G__17237__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17237__a,0,null);
} 
return G__17236__delegate.call(this,args__16328__auto__);};
G__17236.cljs$lang$maxFixedArity = 0;
G__17236.cljs$lang$applyTo = (function (arglist__17238){
var args__16328__auto__ = cljs.core.seq(arglist__17238);
return G__17236__delegate(args__16328__auto__);
});
G__17236.cljs$core$IFn$_invoke$arity$variadic = G__17236__delegate;
return G__17236;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__17239 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__17242 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9841,9841,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__17242.cljs$core$IFn$_invoke$arity$1 ? fexpr__17242.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__17242.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17239,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17239,(1),null);
var amap__$1 = (function (){var or__8274__auto__ = lift_map;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17243_17248 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17244_17249 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count17245_17250 = (0);
var aseq_17251 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17245_17250 < cljs.core._STAR_print_length_STAR_))){
if(aseq_17251){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17246_17252 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17247_17253 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_17251));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_17251)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17247_17253;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17246_17252;
}}


if(cljs.core.next(aseq_17251)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17254 = (length_count17245_17250 + (1));
var G__17255 = cljs.core.next(aseq_17251);
length_count17245_17250 = G__17254;
aseq_17251 = G__17255;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17244_17249;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17243_17248;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__16326__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__){
return (function() { 
var G__17256__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17256 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17257__i = 0, G__17257__a = new Array(arguments.length -  0);
while (G__17257__i < G__17257__a.length) {G__17257__a[G__17257__i] = arguments[G__17257__i + 0]; ++G__17257__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17257__a,0,null);
} 
return G__17256__delegate.call(this,args__16328__auto__);};
G__17256.cljs$lang$maxFixedArity = 0;
G__17256.cljs$lang$applyTo = (function (arglist__17258){
var args__16328__auto__ = cljs.core.seq(arglist__17258);
return G__17256__delegate(args__16328__auto__);
});
G__17256.cljs$core$IFn$_invoke$arity$variadic = G__17256__delegate;
return G__17256;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__8274__auto__ = (function (){var temp__5535__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5535__auto__)){
var match = temp__5535__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17259_17263 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17260_17264 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__8262__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__8262__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__8262__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17260_17264;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17259_17263;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__16326__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__){
return (function() { 
var G__17265__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17265 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17266__i = 0, G__17266__a = new Array(arguments.length -  0);
while (G__17266__i < G__17266__a.length) {G__17266__a[G__17266__i] = arguments[G__17266__i + 0]; ++G__17266__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17266__a,0,null);
} 
return G__17265__delegate.call(this,args__16328__auto__);};
G__17265.cljs$lang$maxFixedArity = 0;
G__17265.cljs$lang$applyTo = (function (arglist__17267){
var args__16328__auto__ = cljs.core.seq(arglist__17267);
return G__17265__delegate(args__16328__auto__);
});
G__17265.cljs$core$IFn$_invoke$arity$variadic = G__17265__delegate;
return G__17265;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__17269 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17269,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17269,(1),null);
var vec__17272 = reference;
var seq__17273 = cljs.core.seq(vec__17272);
var first__17274 = cljs.core.first(seq__17273);
var seq__17273__$1 = cljs.core.next(seq__17273);
var keyw = first__17274;
var args = seq__17273__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17275_17291 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17276_17292 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__17277_17293 = (function (){var format_in__16326__auto__ = "~w~:i";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args){
return (function() { 
var G__17294__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17294 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17295__i = 0, G__17295__a = new Array(arguments.length -  0);
while (G__17295__i < G__17295__a.length) {G__17295__a[G__17295__i] = arguments[G__17295__i + 0]; ++G__17295__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17295__a,0,null);
} 
return G__17294__delegate.call(this,args__16328__auto__);};
G__17294.cljs$lang$maxFixedArity = 0;
G__17294.cljs$lang$applyTo = (function (arglist__17296){
var args__16328__auto__ = cljs.core.seq(arglist__17296);
return G__17294__delegate(args__16328__auto__);
});
G__17294.cljs$core$IFn$_invoke$arity$variadic = G__17294__delegate;
return G__17294;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args))
})();
(fexpr__17277_17293.cljs$core$IFn$_invoke$arity$1 ? fexpr__17277_17293.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__17277_17293.call(null,keyw));

var args_17297__$1 = args;
while(true){
if(cljs.core.seq(args_17297__$1)){
var fexpr__17278_17298 = (function (){var format_in__16326__auto__ = " ";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (args_17297__$1,format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args){
return (function() { 
var G__17299__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17299 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17300__i = 0, G__17300__a = new Array(arguments.length -  0);
while (G__17300__i < G__17300__a.length) {G__17300__a[G__17300__i] = arguments[G__17300__i + 0]; ++G__17300__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17300__a,0,null);
} 
return G__17299__delegate.call(this,args__16328__auto__);};
G__17299.cljs$lang$maxFixedArity = 0;
G__17299.cljs$lang$applyTo = (function (arglist__17301){
var args__16328__auto__ = cljs.core.seq(arglist__17301);
return G__17299__delegate(args__16328__auto__);
});
G__17299.cljs$core$IFn$_invoke$arity$variadic = G__17299__delegate;
return G__17299;
})()
;
;})(args_17297__$1,format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args))
})();
(fexpr__17278_17298.cljs$core$IFn$_invoke$arity$0 ? fexpr__17278_17298.cljs$core$IFn$_invoke$arity$0() : fexpr__17278_17298.call(null));

var arg_17302 = cljs.core.first(args_17297__$1);
if(cljs.core.sequential_QMARK_(arg_17302)){
var vec__17279_17303 = cljs.pprint.brackets(arg_17302);
var start_17304__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17279_17303,(0),null);
var end_17305__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17279_17303,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17282_17306 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17283_17307 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_17304__$1,null,end_17305__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_17302),(3))) && ((cljs.core.second(arg_17302) instanceof cljs.core.Keyword))){
var vec__17284_17308 = arg_17302;
var ns_17309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17284_17308,(0),null);
var kw_17310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17284_17308,(1),null);
var lis_17311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17284_17308,(2),null);
var fexpr__17287_17312 = (function (){var format_in__16326__auto__ = "~w ~w ";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (args_17297__$1,format_in__16326__auto__,cf__16327__auto__,vec__17284_17308,ns_17309,kw_17310,lis_17311,_STAR_current_level_STAR_17282_17306,_STAR_current_length_STAR_17283_17307,vec__17279_17303,start_17304__$1,end_17305__$1,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args){
return (function() { 
var G__17313__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17313 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17314__i = 0, G__17314__a = new Array(arguments.length -  0);
while (G__17314__i < G__17314__a.length) {G__17314__a[G__17314__i] = arguments[G__17314__i + 0]; ++G__17314__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17314__a,0,null);
} 
return G__17313__delegate.call(this,args__16328__auto__);};
G__17313.cljs$lang$maxFixedArity = 0;
G__17313.cljs$lang$applyTo = (function (arglist__17315){
var args__16328__auto__ = cljs.core.seq(arglist__17315);
return G__17313__delegate(args__16328__auto__);
});
G__17313.cljs$core$IFn$_invoke$arity$variadic = G__17313__delegate;
return G__17313;
})()
;
;})(args_17297__$1,format_in__16326__auto__,cf__16327__auto__,vec__17284_17308,ns_17309,kw_17310,lis_17311,_STAR_current_level_STAR_17282_17306,_STAR_current_length_STAR_17283_17307,vec__17279_17303,start_17304__$1,end_17305__$1,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args))
})();
(fexpr__17287_17312.cljs$core$IFn$_invoke$arity$2 ? fexpr__17287_17312.cljs$core$IFn$_invoke$arity$2(ns_17309,kw_17310) : fexpr__17287_17312.call(null,ns_17309,kw_17310));

if(cljs.core.sequential_QMARK_(lis_17311)){
var fexpr__17288_17316 = (function (){var format_in__16326__auto__ = ((cljs.core.vector_QMARK_(lis_17311))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (args_17297__$1,format_in__16326__auto__,cf__16327__auto__,vec__17284_17308,ns_17309,kw_17310,lis_17311,_STAR_current_level_STAR_17282_17306,_STAR_current_length_STAR_17283_17307,vec__17279_17303,start_17304__$1,end_17305__$1,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args){
return (function() { 
var G__17317__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17317 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17318__i = 0, G__17318__a = new Array(arguments.length -  0);
while (G__17318__i < G__17318__a.length) {G__17318__a[G__17318__i] = arguments[G__17318__i + 0]; ++G__17318__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17318__a,0,null);
} 
return G__17317__delegate.call(this,args__16328__auto__);};
G__17317.cljs$lang$maxFixedArity = 0;
G__17317.cljs$lang$applyTo = (function (arglist__17319){
var args__16328__auto__ = cljs.core.seq(arglist__17319);
return G__17317__delegate(args__16328__auto__);
});
G__17317.cljs$core$IFn$_invoke$arity$variadic = G__17317__delegate;
return G__17317;
})()
;
;})(args_17297__$1,format_in__16326__auto__,cf__16327__auto__,vec__17284_17308,ns_17309,kw_17310,lis_17311,_STAR_current_level_STAR_17282_17306,_STAR_current_length_STAR_17283_17307,vec__17279_17303,start_17304__$1,end_17305__$1,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args))
})();
(fexpr__17288_17316.cljs$core$IFn$_invoke$arity$1 ? fexpr__17288_17316.cljs$core$IFn$_invoke$arity$1(lis_17311) : fexpr__17288_17316.call(null,lis_17311));
} else {
cljs.pprint.write_out(lis_17311);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__16326__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (args_17297__$1,format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17282_17306,_STAR_current_length_STAR_17283_17307,vec__17279_17303,start_17304__$1,end_17305__$1,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args){
return (function() { 
var G__17320__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17320 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17321__i = 0, G__17321__a = new Array(arguments.length -  0);
while (G__17321__i < G__17321__a.length) {G__17321__a[G__17321__i] = arguments[G__17321__i + 0]; ++G__17321__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17321__a,0,null);
} 
return G__17320__delegate.call(this,args__16328__auto__);};
G__17320.cljs$lang$maxFixedArity = 0;
G__17320.cljs$lang$applyTo = (function (arglist__17322){
var args__16328__auto__ = cljs.core.seq(arglist__17322);
return G__17320__delegate(args__16328__auto__);
});
G__17320.cljs$core$IFn$_invoke$arity$variadic = G__17320__delegate;
return G__17320;
})()
;
;})(args_17297__$1,format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17282_17306,_STAR_current_length_STAR_17283_17307,vec__17279_17303,start_17304__$1,end_17305__$1,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args))
})(),arg_17302);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17283_17307;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17282_17306;
}}


if(cljs.core.next(args_17297__$1)){
var fexpr__17289_17323 = (function (){var format_in__16326__auto__ = "~_";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (args_17297__$1,format_in__16326__auto__,cf__16327__auto__,vec__17279_17303,start_17304__$1,end_17305__$1,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args){
return (function() { 
var G__17324__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17324 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17325__i = 0, G__17325__a = new Array(arguments.length -  0);
while (G__17325__i < G__17325__a.length) {G__17325__a[G__17325__i] = arguments[G__17325__i + 0]; ++G__17325__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17325__a,0,null);
} 
return G__17324__delegate.call(this,args__16328__auto__);};
G__17324.cljs$lang$maxFixedArity = 0;
G__17324.cljs$lang$applyTo = (function (arglist__17326){
var args__16328__auto__ = cljs.core.seq(arglist__17326);
return G__17324__delegate(args__16328__auto__);
});
G__17324.cljs$core$IFn$_invoke$arity$variadic = G__17324__delegate;
return G__17324;
})()
;
;})(args_17297__$1,format_in__16326__auto__,cf__16327__auto__,vec__17279_17303,start_17304__$1,end_17305__$1,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args))
})();
(fexpr__17289_17323.cljs$core$IFn$_invoke$arity$0 ? fexpr__17289_17323.cljs$core$IFn$_invoke$arity$0() : fexpr__17289_17323.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_17302);

if(cljs.core.next(args_17297__$1)){
var fexpr__17290_17327 = (function (){var format_in__16326__auto__ = "~:_";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (args_17297__$1,format_in__16326__auto__,cf__16327__auto__,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args){
return (function() { 
var G__17328__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17328 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17329__i = 0, G__17329__a = new Array(arguments.length -  0);
while (G__17329__i < G__17329__a.length) {G__17329__a[G__17329__i] = arguments[G__17329__i + 0]; ++G__17329__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17329__a,0,null);
} 
return G__17328__delegate.call(this,args__16328__auto__);};
G__17328.cljs$lang$maxFixedArity = 0;
G__17328.cljs$lang$applyTo = (function (arglist__17330){
var args__16328__auto__ = cljs.core.seq(arglist__17330);
return G__17328__delegate(args__16328__auto__);
});
G__17328.cljs$core$IFn$_invoke$arity$variadic = G__17328__delegate;
return G__17328;
})()
;
;})(args_17297__$1,format_in__16326__auto__,cf__16327__auto__,arg_17302,_STAR_current_level_STAR_17275_17291,_STAR_current_length_STAR_17276_17292,vec__17269,start,end,vec__17272,seq__17273,first__17274,seq__17273__$1,keyw,args))
})();
(fexpr__17290_17327.cljs$core$IFn$_invoke$arity$0 ? fexpr__17290_17327.cljs$core$IFn$_invoke$arity$0() : fexpr__17290_17327.call(null));
} else {
}
}

var G__17331 = cljs.core.next(args_17297__$1);
args_17297__$1 = G__17331;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17276_17292;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17275_17291;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__17332 = alis;
var seq__17333 = cljs.core.seq(vec__17332);
var first__17334 = cljs.core.first(seq__17333);
var seq__17333__$1 = cljs.core.next(seq__17333);
var ns_sym = first__17334;
var first__17334__$1 = cljs.core.first(seq__17333__$1);
var seq__17333__$2 = cljs.core.next(seq__17333__$1);
var ns_name = first__17334__$1;
var stuff = seq__17333__$2;
var vec__17335 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17335,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17335,(1),null);
var vec__17338 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17338,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17338,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17341_17348 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17342_17349 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__17343_17350 = (function (){var format_in__16326__auto__ = "~w ~1I~@_~w";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17341_17348,_STAR_current_length_STAR_17342_17349,vec__17332,seq__17333,first__17334,seq__17333__$1,ns_sym,first__17334__$1,seq__17333__$2,ns_name,stuff,vec__17335,doc_str,stuff__$1,vec__17338,attr_map,references){
return (function() { 
var G__17351__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17351 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17352__i = 0, G__17352__a = new Array(arguments.length -  0);
while (G__17352__i < G__17352__a.length) {G__17352__a[G__17352__i] = arguments[G__17352__i + 0]; ++G__17352__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17352__a,0,null);
} 
return G__17351__delegate.call(this,args__16328__auto__);};
G__17351.cljs$lang$maxFixedArity = 0;
G__17351.cljs$lang$applyTo = (function (arglist__17353){
var args__16328__auto__ = cljs.core.seq(arglist__17353);
return G__17351__delegate(args__16328__auto__);
});
G__17351.cljs$core$IFn$_invoke$arity$variadic = G__17351__delegate;
return G__17351;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17341_17348,_STAR_current_length_STAR_17342_17349,vec__17332,seq__17333,first__17334,seq__17333__$1,ns_sym,first__17334__$1,seq__17333__$2,ns_name,stuff,vec__17335,doc_str,stuff__$1,vec__17338,attr_map,references))
})();
(fexpr__17343_17350.cljs$core$IFn$_invoke$arity$2 ? fexpr__17343_17350.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__17343_17350.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__8274__auto__ = doc_str;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var or__8274__auto____$1 = attr_map;
if(cljs.core.truth_(or__8274__auto____$1)){
return or__8274__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__17344_17354 = (function (){var format_in__16326__auto__ = "~@:_";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17341_17348,_STAR_current_length_STAR_17342_17349,vec__17332,seq__17333,first__17334,seq__17333__$1,ns_sym,first__17334__$1,seq__17333__$2,ns_name,stuff,vec__17335,doc_str,stuff__$1,vec__17338,attr_map,references){
return (function() { 
var G__17355__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17355 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17356__i = 0, G__17356__a = new Array(arguments.length -  0);
while (G__17356__i < G__17356__a.length) {G__17356__a[G__17356__i] = arguments[G__17356__i + 0]; ++G__17356__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17356__a,0,null);
} 
return G__17355__delegate.call(this,args__16328__auto__);};
G__17355.cljs$lang$maxFixedArity = 0;
G__17355.cljs$lang$applyTo = (function (arglist__17357){
var args__16328__auto__ = cljs.core.seq(arglist__17357);
return G__17355__delegate(args__16328__auto__);
});
G__17355.cljs$core$IFn$_invoke$arity$variadic = G__17355__delegate;
return G__17355;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17341_17348,_STAR_current_length_STAR_17342_17349,vec__17332,seq__17333,first__17334,seq__17333__$1,ns_sym,first__17334__$1,seq__17333__$2,ns_name,stuff,vec__17335,doc_str,stuff__$1,vec__17338,attr_map,references))
})();
(fexpr__17344_17354.cljs$core$IFn$_invoke$arity$0 ? fexpr__17344_17354.cljs$core$IFn$_invoke$arity$0() : fexpr__17344_17354.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__8274__auto__ = attr_map;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__17346_17358 = attr_map;
var G__17347_17359 = cljs.core.seq(references);
var fexpr__17345_17360 = (function (){var format_in__16326__auto__ = "~w~:[~;~:@_~]";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,G__17346_17358,G__17347_17359,_STAR_current_level_STAR_17341_17348,_STAR_current_length_STAR_17342_17349,vec__17332,seq__17333,first__17334,seq__17333__$1,ns_sym,first__17334__$1,seq__17333__$2,ns_name,stuff,vec__17335,doc_str,stuff__$1,vec__17338,attr_map,references){
return (function() { 
var G__17361__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17361 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17362__i = 0, G__17362__a = new Array(arguments.length -  0);
while (G__17362__i < G__17362__a.length) {G__17362__a[G__17362__i] = arguments[G__17362__i + 0]; ++G__17362__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17362__a,0,null);
} 
return G__17361__delegate.call(this,args__16328__auto__);};
G__17361.cljs$lang$maxFixedArity = 0;
G__17361.cljs$lang$applyTo = (function (arglist__17363){
var args__16328__auto__ = cljs.core.seq(arglist__17363);
return G__17361__delegate(args__16328__auto__);
});
G__17361.cljs$core$IFn$_invoke$arity$variadic = G__17361__delegate;
return G__17361;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,G__17346_17358,G__17347_17359,_STAR_current_level_STAR_17341_17348,_STAR_current_length_STAR_17342_17349,vec__17332,seq__17333,first__17334,seq__17333__$1,ns_sym,first__17334__$1,seq__17333__$2,ns_name,stuff,vec__17335,doc_str,stuff__$1,vec__17338,attr_map,references))
})();
(fexpr__17345_17360.cljs$core$IFn$_invoke$arity$2 ? fexpr__17345_17360.cljs$core$IFn$_invoke$arity$2(G__17346_17358,G__17347_17359) : fexpr__17345_17360.call(null,G__17346_17358,G__17347_17359));
} else {
}

var references_17364__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_17364__$1));

var temp__5535__auto___17365 = cljs.core.next(references_17364__$1);
if(temp__5535__auto___17365){
var references_17366__$2 = temp__5535__auto___17365;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17367 = references_17366__$2;
references_17364__$1 = G__17367;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17342_17349;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17341_17348;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__16326__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__){
return (function() { 
var G__17368__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17368 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17369__i = 0, G__17369__a = new Array(arguments.length -  0);
while (G__17369__i < G__17369__a.length) {G__17369__a[G__17369__i] = arguments[G__17369__i + 0]; ++G__17369__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17369__a,0,null);
} 
return G__17368__delegate.call(this,args__16328__auto__);};
G__17368.cljs$lang$maxFixedArity = 0;
G__17368.cljs$lang$applyTo = (function (arglist__17370){
var args__16328__auto__ = cljs.core.seq(arglist__17370);
return G__17368__delegate(args__16328__auto__);
});
G__17368.cljs$core$IFn$_invoke$arity$variadic = G__17368__delegate;
return G__17368;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__17371_17374 = (function (){var format_in__16326__auto__ = " ~_";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__){
return (function() { 
var G__17375__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17375 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17376__i = 0, G__17376__a = new Array(arguments.length -  0);
while (G__17376__i < G__17376__a.length) {G__17376__a[G__17376__i] = arguments[G__17376__i + 0]; ++G__17376__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17376__a,0,null);
} 
return G__17375__delegate.call(this,args__16328__auto__);};
G__17375.cljs$lang$maxFixedArity = 0;
G__17375.cljs$lang$applyTo = (function (arglist__17377){
var args__16328__auto__ = cljs.core.seq(arglist__17377);
return G__17375__delegate(args__16328__auto__);
});
G__17375.cljs$core$IFn$_invoke$arity$variadic = G__17375__delegate;
return G__17375;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__))
})();
(fexpr__17371_17374.cljs$core$IFn$_invoke$arity$0 ? fexpr__17371_17374.cljs$core$IFn$_invoke$arity$0() : fexpr__17371_17374.call(null));
} else {
var fexpr__17372_17378 = (function (){var format_in__16326__auto__ = " ~@_";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__){
return (function() { 
var G__17379__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17379 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17380__i = 0, G__17380__a = new Array(arguments.length -  0);
while (G__17380__i < G__17380__a.length) {G__17380__a[G__17380__i] = arguments[G__17380__i + 0]; ++G__17380__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17380__a,0,null);
} 
return G__17379__delegate.call(this,args__16328__auto__);};
G__17379.cljs$lang$maxFixedArity = 0;
G__17379.cljs$lang$applyTo = (function (arglist__17381){
var args__16328__auto__ = cljs.core.seq(arglist__17381);
return G__17379__delegate(args__16328__auto__);
});
G__17379.cljs$core$IFn$_invoke$arity$variadic = G__17379__delegate;
return G__17379;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__))
})();
(fexpr__17372_17378.cljs$core$IFn$_invoke$arity$0 ? fexpr__17372_17378.cljs$core$IFn$_invoke$arity$0() : fexpr__17372_17378.call(null));
}

var fexpr__17373 = (function (){var format_in__16326__auto__ = "~{~w~^ ~_~}";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__){
return (function() { 
var G__17382__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17382 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17383__i = 0, G__17383__a = new Array(arguments.length -  0);
while (G__17383__i < G__17383__a.length) {G__17383__a[G__17383__i] = arguments[G__17383__i + 0]; ++G__17383__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17383__a,0,null);
} 
return G__17382__delegate.call(this,args__16328__auto__);};
G__17382.cljs$lang$maxFixedArity = 0;
G__17382.cljs$lang$applyTo = (function (arglist__17384){
var args__16328__auto__ = cljs.core.seq(arglist__17384);
return G__17382__delegate(args__16328__auto__);
});
G__17382.cljs$core$IFn$_invoke$arity$variadic = G__17382__delegate;
return G__17382;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__))
})();
return (fexpr__17373.cljs$core$IFn$_invoke$arity$1 ? fexpr__17373.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__17373.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__17385 = (function (){var format_in__16326__auto__ = " ~_~{~w~^ ~_~}";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__){
return (function() { 
var G__17386__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17386 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17387__i = 0, G__17387__a = new Array(arguments.length -  0);
while (G__17387__i < G__17387__a.length) {G__17387__a[G__17387__i] = arguments[G__17387__i + 0]; ++G__17387__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17387__a,0,null);
} 
return G__17386__delegate.call(this,args__16328__auto__);};
G__17386.cljs$lang$maxFixedArity = 0;
G__17386.cljs$lang$applyTo = (function (arglist__17388){
var args__16328__auto__ = cljs.core.seq(arglist__17388);
return G__17386__delegate(args__16328__auto__);
});
G__17386.cljs$core$IFn$_invoke$arity$variadic = G__17386__delegate;
return G__17386;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__))
})();
return (fexpr__17385.cljs$core$IFn$_invoke$arity$1 ? fexpr__17385.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__17385.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__17389 = alis;
var seq__17390 = cljs.core.seq(vec__17389);
var first__17391 = cljs.core.first(seq__17390);
var seq__17390__$1 = cljs.core.next(seq__17390);
var defn_sym = first__17391;
var first__17391__$1 = cljs.core.first(seq__17390__$1);
var seq__17390__$2 = cljs.core.next(seq__17390__$1);
var defn_name = first__17391__$1;
var stuff = seq__17390__$2;
var vec__17392 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17392,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17392,(1),null);
var vec__17395 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17395,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17395,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17398_17403 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17399_17404 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__17400_17405 = (function (){var format_in__16326__auto__ = "~w ~1I~@_~w";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17398_17403,_STAR_current_length_STAR_17399_17404,vec__17389,seq__17390,first__17391,seq__17390__$1,defn_sym,first__17391__$1,seq__17390__$2,defn_name,stuff,vec__17392,doc_str,stuff__$1,vec__17395,attr_map,stuff__$2){
return (function() { 
var G__17406__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17406 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17407__i = 0, G__17407__a = new Array(arguments.length -  0);
while (G__17407__i < G__17407__a.length) {G__17407__a[G__17407__i] = arguments[G__17407__i + 0]; ++G__17407__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17407__a,0,null);
} 
return G__17406__delegate.call(this,args__16328__auto__);};
G__17406.cljs$lang$maxFixedArity = 0;
G__17406.cljs$lang$applyTo = (function (arglist__17408){
var args__16328__auto__ = cljs.core.seq(arglist__17408);
return G__17406__delegate(args__16328__auto__);
});
G__17406.cljs$core$IFn$_invoke$arity$variadic = G__17406__delegate;
return G__17406;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17398_17403,_STAR_current_length_STAR_17399_17404,vec__17389,seq__17390,first__17391,seq__17390__$1,defn_sym,first__17391__$1,seq__17390__$2,defn_name,stuff,vec__17392,doc_str,stuff__$1,vec__17395,attr_map,stuff__$2))
})();
(fexpr__17400_17405.cljs$core$IFn$_invoke$arity$2 ? fexpr__17400_17405.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__17400_17405.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__17401_17409 = (function (){var format_in__16326__auto__ = " ~_~w";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17398_17403,_STAR_current_length_STAR_17399_17404,vec__17389,seq__17390,first__17391,seq__17390__$1,defn_sym,first__17391__$1,seq__17390__$2,defn_name,stuff,vec__17392,doc_str,stuff__$1,vec__17395,attr_map,stuff__$2){
return (function() { 
var G__17410__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17410 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17411__i = 0, G__17411__a = new Array(arguments.length -  0);
while (G__17411__i < G__17411__a.length) {G__17411__a[G__17411__i] = arguments[G__17411__i + 0]; ++G__17411__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17411__a,0,null);
} 
return G__17410__delegate.call(this,args__16328__auto__);};
G__17410.cljs$lang$maxFixedArity = 0;
G__17410.cljs$lang$applyTo = (function (arglist__17412){
var args__16328__auto__ = cljs.core.seq(arglist__17412);
return G__17410__delegate(args__16328__auto__);
});
G__17410.cljs$core$IFn$_invoke$arity$variadic = G__17410__delegate;
return G__17410;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17398_17403,_STAR_current_length_STAR_17399_17404,vec__17389,seq__17390,first__17391,seq__17390__$1,defn_sym,first__17391__$1,seq__17390__$2,defn_name,stuff,vec__17392,doc_str,stuff__$1,vec__17395,attr_map,stuff__$2))
})();
(fexpr__17401_17409.cljs$core$IFn$_invoke$arity$1 ? fexpr__17401_17409.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__17401_17409.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__17402_17413 = (function (){var format_in__16326__auto__ = " ~_~w";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17398_17403,_STAR_current_length_STAR_17399_17404,vec__17389,seq__17390,first__17391,seq__17390__$1,defn_sym,first__17391__$1,seq__17390__$2,defn_name,stuff,vec__17392,doc_str,stuff__$1,vec__17395,attr_map,stuff__$2){
return (function() { 
var G__17414__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17414 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17415__i = 0, G__17415__a = new Array(arguments.length -  0);
while (G__17415__i < G__17415__a.length) {G__17415__a[G__17415__i] = arguments[G__17415__i + 0]; ++G__17415__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17415__a,0,null);
} 
return G__17414__delegate.call(this,args__16328__auto__);};
G__17414.cljs$lang$maxFixedArity = 0;
G__17414.cljs$lang$applyTo = (function (arglist__17416){
var args__16328__auto__ = cljs.core.seq(arglist__17416);
return G__17414__delegate(args__16328__auto__);
});
G__17414.cljs$core$IFn$_invoke$arity$variadic = G__17414__delegate;
return G__17414;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17398_17403,_STAR_current_length_STAR_17399_17404,vec__17389,seq__17390,first__17391,seq__17390__$1,defn_sym,first__17391__$1,seq__17390__$2,defn_name,stuff,vec__17392,doc_str,stuff__$1,vec__17395,attr_map,stuff__$2))
})();
(fexpr__17402_17413.cljs$core$IFn$_invoke$arity$1 ? fexpr__17402_17413.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__17402_17413.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__8274__auto__ = doc_str;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__8274__auto__ = doc_str;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17399_17404;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17398_17403;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17417_17422 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17418_17423 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count17419_17424 = (0);
var binding_17425 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17419_17424 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_17425)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17420_17426 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17421_17427 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_17425));

if(cljs.core.next(binding_17425)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_17425));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17421_17427;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17420_17426;
}}


if(cljs.core.next(cljs.core.rest(binding_17425))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17428 = (length_count17419_17424 + (1));
var G__17429 = cljs.core.next(cljs.core.rest(binding_17425));
length_count17419_17424 = G__17428;
binding_17425 = G__17429;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17418_17423;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17417_17422;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17430_17435 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17431_17436 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__17432_17437 = (function (){var format_in__16326__auto__ = "~w ~1I~@_";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17430_17435,_STAR_current_length_STAR_17431_17436,base_sym){
return (function() { 
var G__17438__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17438 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17439__i = 0, G__17439__a = new Array(arguments.length -  0);
while (G__17439__i < G__17439__a.length) {G__17439__a[G__17439__i] = arguments[G__17439__i + 0]; ++G__17439__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17439__a,0,null);
} 
return G__17438__delegate.call(this,args__16328__auto__);};
G__17438.cljs$lang$maxFixedArity = 0;
G__17438.cljs$lang$applyTo = (function (arglist__17440){
var args__16328__auto__ = cljs.core.seq(arglist__17440);
return G__17438__delegate(args__16328__auto__);
});
G__17438.cljs$core$IFn$_invoke$arity$variadic = G__17438__delegate;
return G__17438;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17430_17435,_STAR_current_length_STAR_17431_17436,base_sym))
})();
(fexpr__17432_17437.cljs$core$IFn$_invoke$arity$1 ? fexpr__17432_17437.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__17432_17437.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__17434_17441 = cljs.core.next(cljs.core.rest(alis));
var fexpr__17433_17442 = (function (){var format_in__16326__auto__ = " ~_~{~w~^ ~_~}";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,G__17434_17441,_STAR_current_level_STAR_17430_17435,_STAR_current_length_STAR_17431_17436,base_sym){
return (function() { 
var G__17443__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17443 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17444__i = 0, G__17444__a = new Array(arguments.length -  0);
while (G__17444__i < G__17444__a.length) {G__17444__a[G__17444__i] = arguments[G__17444__i + 0]; ++G__17444__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17444__a,0,null);
} 
return G__17443__delegate.call(this,args__16328__auto__);};
G__17443.cljs$lang$maxFixedArity = 0;
G__17443.cljs$lang$applyTo = (function (arglist__17445){
var args__16328__auto__ = cljs.core.seq(arglist__17445);
return G__17443__delegate(args__16328__auto__);
});
G__17443.cljs$core$IFn$_invoke$arity$variadic = G__17443__delegate;
return G__17443;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,G__17434_17441,_STAR_current_level_STAR_17430_17435,_STAR_current_length_STAR_17431_17436,base_sym))
})();
(fexpr__17433_17442.cljs$core$IFn$_invoke$arity$1 ? fexpr__17433_17442.cljs$core$IFn$_invoke$arity$1(G__17434_17441) : fexpr__17433_17442.call(null,G__17434_17441));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17431_17436;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17430_17435;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__16326__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__){
return (function() { 
var G__17446__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17446 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17447__i = 0, G__17447__a = new Array(arguments.length -  0);
while (G__17447__i < G__17447__a.length) {G__17447__a[G__17447__i] = arguments[G__17447__i + 0]; ++G__17447__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17447__a,0,null);
} 
return G__17446__delegate.call(this,args__16328__auto__);};
G__17446.cljs$lang$maxFixedArity = 0;
G__17446.cljs$lang$applyTo = (function (arglist__17448){
var args__16328__auto__ = cljs.core.seq(arglist__17448);
return G__17446__delegate(args__16328__auto__);
});
G__17446.cljs$core$IFn$_invoke$arity$variadic = G__17446__delegate;
return G__17446;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17449_17454 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17450_17455 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count17451_17456 = (0);
var alis_17457__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17451_17456 < cljs.core._STAR_print_length_STAR_))){
if(alis_17457__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17452_17458 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17453_17459 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_17457__$1));

if(cljs.core.next(alis_17457__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_17457__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17453_17459;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17452_17458;
}}


if(cljs.core.next(cljs.core.rest(alis_17457__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17460 = (length_count17451_17456 + (1));
var G__17461 = cljs.core.next(cljs.core.rest(alis_17457__$1));
length_count17451_17456 = G__17460;
alis_17457__$1 = G__17461;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17450_17455;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17449_17454;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17462_17467 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17463_17468 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__16326__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17462_17467,_STAR_current_length_STAR_17463_17468){
return (function() { 
var G__17469__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17469 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17470__i = 0, G__17470__a = new Array(arguments.length -  0);
while (G__17470__i < G__17470__a.length) {G__17470__a[G__17470__i] = arguments[G__17470__i + 0]; ++G__17470__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17470__a,0,null);
} 
return G__17469__delegate.call(this,args__16328__auto__);};
G__17469.cljs$lang$maxFixedArity = 0;
G__17469.cljs$lang$applyTo = (function (arglist__17471){
var args__16328__auto__ = cljs.core.seq(arglist__17471);
return G__17469__delegate(args__16328__auto__);
});
G__17469.cljs$core$IFn$_invoke$arity$variadic = G__17469__delegate;
return G__17469;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,_STAR_current_level_STAR_17462_17467,_STAR_current_length_STAR_17463_17468))
})(),alis);

var length_count17464_17472 = (0);
var alis_17473__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17464_17472 < cljs.core._STAR_print_length_STAR_))){
if(alis_17473__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17465_17474 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17466_17475 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_17473__$1));

if(cljs.core.next(alis_17473__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_17473__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17466_17475;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17465_17474;
}}


if(cljs.core.next(cljs.core.rest(alis_17473__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17476 = (length_count17464_17472 + (1));
var G__17477 = cljs.core.next(cljs.core.rest(alis_17473__$1));
length_count17464_17472 = G__17476;
alis_17473__$1 = G__17477;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17463_17468;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17462_17467;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_17480 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_17480,args,nlis){
return (function (p1__17478_SHARP_,p2__17479_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__17478_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17479_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_17480,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__17481 = (function (){var format_in__16326__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__16327__auto__ = ((typeof format_in__16326__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16326__auto__) : cljs.pprint.cached_compile.call(null,format_in__16326__auto__)):format_in__16326__auto__);
return ((function (format_in__16326__auto__,cf__16327__auto__,_STAR_symbol_map_STAR_17480,args,nlis){
return (function() { 
var G__17482__delegate = function (args__16328__auto__){
var navigator__16329__auto__ = cljs.pprint.init_navigator(args__16328__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16327__auto__,navigator__16329__auto__);
};
var G__17482 = function (var_args){
var args__16328__auto__ = null;
if (arguments.length > 0) {
var G__17483__i = 0, G__17483__a = new Array(arguments.length -  0);
while (G__17483__i < G__17483__a.length) {G__17483__a[G__17483__i] = arguments[G__17483__i + 0]; ++G__17483__i;}
  args__16328__auto__ = new cljs.core.IndexedSeq(G__17483__a,0,null);
} 
return G__17482__delegate.call(this,args__16328__auto__);};
G__17482.cljs$lang$maxFixedArity = 0;
G__17482.cljs$lang$applyTo = (function (arglist__17484){
var args__16328__auto__ = cljs.core.seq(arglist__17484);
return G__17482__delegate(args__16328__auto__);
});
G__17482.cljs$core$IFn$_invoke$arity$variadic = G__17482__delegate;
return G__17482;
})()
;
;})(format_in__16326__auto__,cf__16327__auto__,_STAR_symbol_map_STAR_17480,args,nlis))
})();
return (fexpr__17481.cljs$core$IFn$_invoke$arity$1 ? fexpr__17481.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__17481.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_17480;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17485_17488 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17486_17489 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count17487_17490 = (0);
var alis_17491__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count17487_17490 < cljs.core._STAR_print_length_STAR_))){
if(alis_17491__$1){
cljs.pprint.write_out(cljs.core.first(alis_17491__$1));

if(cljs.core.next(alis_17491__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__17492 = (length_count17487_17490 + (1));
var G__17493 = cljs.core.next(alis_17491__$1);
length_count17487_17490 = G__17492;
alis_17491__$1 = G__17493;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17486_17489;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17485_17488;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9156__auto__ = (function cljs$pprint$two_forms_$_iter__17494(s__17495){
return (new cljs.core.LazySeq(null,(function (){
var s__17495__$1 = s__17495;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17495__$1);
if(temp__5535__auto__){
var s__17495__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17495__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__17495__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__17497 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__17496 = (0);
while(true){
if((i__17496 < size__9155__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__17496);
cljs.core.chunk_append(b__17497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__17498 = (i__17496 + (1));
i__17496 = G__17498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17497),cljs$pprint$two_forms_$_iter__17494(cljs.core.chunk_rest(s__17495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17497),null);
}
} else {
var x = cljs.core.first(s__17495__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__17494(cljs.core.rest(s__17495__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9156__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__17499_SHARP_){
var vec__17500 = p1__17499_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17500,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17500,(1),null);
if(cljs.core.not((function (){var or__8274__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__17499_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5533__auto__ = (function (){var G__17503 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__17503) : cljs.pprint._STAR_code_table_STAR_.call(null,G__17503));
})();
if(cljs.core.truth_(temp__5533__auto__)){
var special_form = temp__5533__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5533__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5533__auto__)){
var arg_num = temp__5533__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__8626__auto__ = (0);
var y__8627__auto__ = (width - cljs.core.count(s));
return ((x__8626__auto__ > y__8627__auto__) ? x__8626__auto__ : y__8627__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__17508 = arguments.length;
switch (G__17508) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_17509 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_17509){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_17509){
return (function (p1__17504_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__17504_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_17509))
,rows));
});})(_STAR_print_newline_STAR_17509))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_17509){
return (function (p1__17505_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__17505_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_17509))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_17509){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__9156__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_17509){
return (function cljs$pprint$iter__17510(s__17511){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_17509){
return (function (){
var s__17511__$1 = s__17511;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__17511__$1);
if(temp__5535__auto__){
var s__17511__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17511__$2)){
var c__9154__auto__ = cljs.core.chunk_first(s__17511__$2);
var size__9155__auto__ = cljs.core.count(c__9154__auto__);
var b__17513 = cljs.core.chunk_buffer(size__9155__auto__);
if((function (){var i__17512 = (0);
while(true){
if((i__17512 < size__9155__auto__)){
var vec__17514 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9154__auto__,i__17512);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17514,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17514,(1),null);
cljs.core.chunk_append(b__17513,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__17525 = (i__17512 + (1));
i__17512 = G__17525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17513),cljs$pprint$iter__17510(cljs.core.chunk_rest(s__17511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17513),null);
}
} else {
var vec__17517 = cljs.core.first(s__17511__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17517,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17517,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__17510(cljs.core.rest(s__17511__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_17509))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_17509))
;
return iter__9156__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__9156__auto__,widths,spacers,_STAR_print_newline_STAR_17509){
return (function (p1__17506_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__17506_SHARP_);
});})(iter__9156__auto__,widths,spacers,_STAR_print_newline_STAR_17509))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_17509))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__17520 = cljs.core.seq(rows);
var chunk__17521 = null;
var count__17522 = (0);
var i__17523 = (0);
while(true){
if((i__17523 < count__17522)){
var row = chunk__17521.cljs$core$IIndexed$_nth$arity$2(null,i__17523);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__17526 = seq__17520;
var G__17527 = chunk__17521;
var G__17528 = count__17522;
var G__17529 = (i__17523 + (1));
seq__17520 = G__17526;
chunk__17521 = G__17527;
count__17522 = G__17528;
i__17523 = G__17529;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__17520);
if(temp__5535__auto__){
var seq__17520__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17520__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__17520__$1);
var G__17530 = cljs.core.chunk_rest(seq__17520__$1);
var G__17531 = c__9205__auto__;
var G__17532 = cljs.core.count(c__9205__auto__);
var G__17533 = (0);
seq__17520 = G__17530;
chunk__17521 = G__17531;
count__17522 = G__17532;
i__17523 = G__17533;
continue;
} else {
var row = cljs.core.first(seq__17520__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__17534 = cljs.core.next(seq__17520__$1);
var G__17535 = null;
var G__17536 = (0);
var G__17537 = (0);
seq__17520 = G__17534;
chunk__17521 = G__17535;
count__17522 = G__17536;
i__17523 = G__17537;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17509;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

