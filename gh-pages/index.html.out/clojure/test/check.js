// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.clojure_test');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed){
clojure.test.check.clojure_test.report_trial(property,num_trials,num_trials);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,true,cljs.core.cst$kw$num_DASH_tests,num_trials,cljs.core.cst$kw$seed,seed], null);
});
/**
 * True if the value is not falsy or an exception
 */
clojure.test.check.not_falsey_or_exception_QMARK_ = (function clojure$test$check$not_falsey_or_exception_QMARK_(value){
var and__8262__auto__ = value;
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.not(clojure.test.check.impl.exception_like_QMARK_(value));
} else {
return and__8262__auto__;
}
});
/**
 * Tests `property` `num-tests` times.
 *   Takes optional keys `:seed` and `:max-size`. The seed parameter
 *   can be used to re-run previous tests, as the seed used is returned
 *   after a test is run. The max-size can be used to control the 'size'
 *   of generated values. The size will start at 0, and grow up to
 *   max-size, as the number of tests increases. Generators will use
 *   the size parameter to bound their growth. This prevents, for example,
 *   generating a five-thousand element vector on the very first test.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 *    (quick-check 100 p)
 *   
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__9560__auto__ = [];
var len__9553__auto___17848 = arguments.length;
var i__9554__auto___17849 = (0);
while(true){
if((i__9554__auto___17849 < len__9553__auto___17848)){
args__9560__auto__.push((arguments[i__9554__auto___17849]));

var G__17850 = (i__9554__auto___17849 + (1));
i__9554__auto___17849 = G__17850;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((2) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9561__auto__);
});

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__17836){
var map__17837 = p__17836;
var map__17837__$1 = ((((!((map__17837 == null)))?((((map__17837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17837):map__17837);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17837__$1,cljs.core.cst$kw$seed);
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17837__$1,cljs.core.cst$kw$max_DASH_size,(200));
var vec__17839 = clojure.test.check.make_rng(seed);
var created_seed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(0),null);
var rng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete(property,num_tests,created_seed);
} else {
var vec__17842 = size_seq__$1;
var seq__17843 = cljs.core.seq(vec__17842);
var first__17844 = cljs.core.first(seq__17843);
var seq__17843__$1 = cljs.core.next(seq__17843);
var size = first__17844;
var rest_size_seq = seq__17843__$1;
var vec__17845 = clojure.test.check.random.split(rstate);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17845,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17845,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen(property,r1,size);
var result_map = clojure.test.check.rose_tree.root(result_map_rose);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(result_map);
var args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(result_map);
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_(result))){
clojure.test.check.clojure_test.report_trial(property,so_far,num_tests);

var G__17851 = (so_far + (1));
var G__17852 = rest_size_seq;
var G__17853 = r2;
so_far = G__17851;
size_seq__$1 = G__17852;
rstate = G__17853;
continue;
} else {
return (clojure.test.check.failure.cljs$core$IFn$_invoke$arity$5 ? clojure.test.check.failure.cljs$core$IFn$_invoke$arity$5(property,result_map_rose,so_far,size,created_seed) : clojure.test.check.failure.call(null,property,result_map_rose,so_far,size,created_seed));
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq17833){
var G__17834 = cljs.core.first(seq17833);
var seq17833__$1 = cljs.core.next(seq17833);
var G__17835 = cljs.core.first(seq17833__$1);
var seq17833__$2 = cljs.core.next(seq17833__$1);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic(G__17834,G__17835,seq17833__$2);
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$total_DASH_nodes_DASH_visited,total_nodes_visited,cljs.core.cst$kw$depth,depth,cljs.core.cst$kw$result,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(smallest),cljs.core.cst$kw$smallest,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree){
var shrinks_this_depth = clojure.test.check.rose_tree.children(rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root(rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_(nodes)){
return clojure.test.check.smallest_shrink(total_nodes_visited,depth,current_smallest);
} else {
var vec__17854 = nodes;
var seq__17855 = cljs.core.seq(vec__17854);
var first__17856 = cljs.core.first(seq__17855);
var seq__17855__$1 = cljs.core.next(seq__17855);
var head = first__17856;
var tail = seq__17855__$1;
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_(result))){
var G__17857 = tail;
var G__17858 = current_smallest;
var G__17859 = (total_nodes_visited + (1));
var G__17860 = depth;
nodes = G__17857;
current_smallest = G__17858;
total_nodes_visited = G__17859;
depth = G__17860;
continue;
} else {
var temp__5533__auto__ = cljs.core.seq(clojure.test.check.rose_tree.children(head));
if(temp__5533__auto__){
var children = temp__5533__auto__;
var G__17861 = children;
var G__17862 = clojure.test.check.rose_tree.root(head);
var G__17863 = (total_nodes_visited + (1));
var G__17864 = (depth + (1));
nodes = G__17861;
current_smallest = G__17862;
total_nodes_visited = G__17863;
depth = G__17864;
continue;
} else {
var G__17865 = tail;
var G__17866 = clojure.test.check.rose_tree.root(head);
var G__17867 = (total_nodes_visited + (1));
var G__17868 = depth;
nodes = G__17865;
current_smallest = G__17866;
total_nodes_visited = G__17867;
depth = G__17868;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed){
var root = clojure.test.check.rose_tree.root(failing_rose_tree);
var result = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(root);
var failing_args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(root);
clojure.test.check.clojure_test.report_failure(property,result,trial_number,failing_args);

return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$seed,seed,cljs.core.cst$kw$failing_DASH_size,size,cljs.core.cst$kw$num_DASH_tests,(trial_number + (1)),cljs.core.cst$kw$fail,cljs.core.vec(failing_args),cljs.core.cst$kw$shrunk,clojure.test.check.shrink_loop(failing_rose_tree)], null);
});
