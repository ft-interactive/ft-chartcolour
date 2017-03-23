(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.gChartcolour = global.gChartcolour || {})));
}(this, function (exports) { 'use strict';

  var backgrounds = {
  	web:'#FFF1e0',
  	social:'#333',
  	video:'#335',
  	print:'#FEE',
  	clean:'#FFF',
  };

  var basicLineWeb = ['#CEC6B9','#AF516C']; //the first colour is neutral / background, the second colour primary/ highlight
  //export default ['#d5ccbf','#ed588d']; //new web colours uncomment when they are approved the first colour is neutral / background, the second colour primary/ highlight

  var basicLinePrint = ['#c6d6cc','#006a93']; //the first colour is neutral / background, the second colour primary/ highlight

  var basicLineSocial = ['#81838F','#EB3F50'];

  var categorical = [
  	'#045787',
  	'#00a9b8',
  	'#0090ff',
  	'#ed588d',
  	'#94ddff',
  	'#fab316',
  	'#d5ccbf'
  ];

  var categorical_2 = [
  	'#701329',
  	'#D93473',
  	'#0F5499',
  	'#0095A6',
  	'#9BC44E',
  	'#70CCCC',
  	'#D4C7BF'
  ];

  var diverging = [
  	'#5F3C41',
  	'#805F70',
  	'#9389A2',
  	'#9AB8CE',
  	'#9EEAEC',
  	'#63412D',
  	'#7A6A3A',
  	'#81975E',
  	'#80C49E',
  	'#9EEAEC'
  ];

  var extendedLine = ['#d5ccbf','#ed588d','#FF0000','#00FF00']; //

  var linePrint = ['#006a93','#ddb831','#c6d6cc','#ad1c21','#55a2c7','#0083b3'];

  var lineSocial = ['#eb3f50','#00d9ca','#bf9413','#1f5e99','#a7ff59','#ff9b96','#81838f'];

  var lineWeb = ['#af516c','#efb1af','#d7706c','#76acb8','#81d0e6','#4e86b6','#b8b1a9'];

  var sequentialMulti = [
    '#fff1e5',
    '#c4dbdb',
    '#91c3d0',
    '#66a9c3',
    '#428db6',
    '#2571a8',
    '#0f5499'
  ];

  var sequentialSingle = [
  	'#5A0105',
  	'#851F1A',
  	'#AB4333',
  	'#C96A54',
  	'#DC977C',
  	'#E0C7AC'
  ];

  var sequentialSingle__teal = [
  	'#B1F2F2',
  	'#91D5D7',
  	'#73B8BC',
  	'#589BA1',
  	'#3F7F86',
  	'#29646B',
  	'#164A50'
  ];

  var categoricalUkPolitics = {
  	conservative:'#6fa7da',
  	labour:'#e45151',
  	'liberal democrats':'#f2a432',
  	ukip:'#c16fad',
  	green:'#65a68c',
  	independent:'#cdc6b9',
  	other:'#aea9a2',
  };

  exports.background = backgrounds;
  exports.basicLineWeb = basicLineWeb;
  exports.basicLinePrint = basicLinePrint;
  exports.basicLineSocial = basicLineSocial;
  exports.categorical = categorical;
  exports.categorical_2 = categorical_2;
  exports.diverging = diverging;
  exports.extendedLine = extendedLine;
  exports.linePrint = linePrint;
  exports.lineSocial = lineSocial;
  exports.lineWeb = lineWeb;
  exports.sequentialMulti = sequentialMulti;
  exports.sequentialSingle = sequentialSingle;
  exports.sequentialSingle_teal = sequentialSingle__teal;
  exports.ukPoliticalParties = categoricalUkPolitics;

  Object.defineProperty(exports, '__esModule', { value: true });

}));