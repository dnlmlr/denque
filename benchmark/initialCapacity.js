'use strict';

require('./print');

var Benchmark = require('benchmark');
var Denque = require('./../');
var DoubleEndedQueue = require('double-ended-queue');

var suite = new Benchmark.Suite();

var n = 1000000;
var m = 1000;
var l = 100;

suite
  .add('Denque (1000000) default capacity', function () {
    var denque = new Denque();
    for (var i = 0; i < n; i++) denque.push(i);
  })
  .add('Denque (1000000) preallocated capacity', function () {
    var denque = new Denque(n);
    for (var i = 0; i < n; i++) denque.push(i);
  })
  .add('Denque (1000) default capacity', function () {
    var denque = new Denque();
    for (var i = 0; i < m; i++) denque.push(i);
  })
  .add('Denque (1000) preallocated capacity', function () {
    var denque = new Denque(m);
    for (var i = 0; i < m; i++) denque.push(i);
  })
  .add('Denque (100) default capacity', function () {
    var denque = new Denque();
    for (var i = 0; i < l; i++) denque.push(i);
  })
  .add('Denque (100) preallocated capacity', function () {
    var denque = new Denque(l);
    for (var i = 0; i < l; i++) denque.push(i);
  })
  .add('DoubleEndedQueue default capacity', function () {
    var denque = new DoubleEndedQueue();
    for (var i = 0; i < n; i++) denque.push(i);
  })
  .add('DoubleEndedQueue preallocated capacity', function () {
    var denque = new DoubleEndedQueue(n);
    for (var i = 0; i < n; i++) denque.push(i);
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
