/**
  * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
  *
  * @version v1.14.1
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

(function(a,b){if('function'==typeof define&&define.amd)define([],b);else if('undefined'!=typeof exports)b();else{b(),a.bootstrapTableAddrbar={exports:{}}.exports}})(this,function(){'use strict';function a(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function b(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function c(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var d=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if('value'in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},f=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h['return']&&h['return']()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}();(function(g){function h(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:window.location.search,c=new RegExp('(^|&)'+a+'=([^&]*)(&|$)'),d=b.substr(1).match(c);return d?decodeURIComponent(d[2]):null}function i(a){for(var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:window.location.search,c=function(a){return Object.keys(a).map(function(b){return[b,a[b]]})}(a),d=Array.isArray(c),e=0,_iterator=d?c:c[Symbol.iterator]();;){var g;if(d){if(e>=c.length)break;g=c[e++]}else{if(e=c.next(),e.done)break;g=e.value}var h=g,i=f(h,2),j=i[0],k=i[1],l=j+'='+k;if(b.match(j+'=([^&]*)')){var m=new RegExp('('+j+'=)([^&]*)','gi');b=b.replace(m,l)}else{var n=b.match('[?]')?'&':'?';b=b+n+l}}return b}g.BootstrapTable=function(f){function j(){return a(this,j),b(this,(j.__proto__||Object.getPrototypeOf(j)).apply(this,arguments))}return c(j,f),d(j,[{key:'init',value:function(){var a=this;if(this.options.addrbar){this.addrbarInit=!0;var b=this.options.addrPrefix||'';this.options.pageSize=this.options.pageSize||(h(b+'limit')?parseInt(h(b+'limit')):g.BootstrapTable.DEFAULTS.pageSize),this.options.pageNumber=this.options.pageNumber||(h(b+'page')?parseInt(h(b+'page')):g.BootstrapTable.DEFAULTS.pageNumber),this.options.sortOrder=this.options.sortOrder||(h(b+'order')?h(b+'order'):g.BootstrapTable.DEFAULTS.sortOrder),this.options.sortName=this.options.sortName||(h(b+'sort')?h(b+'sort'):'id'),this.options.searchText=this.options.searchText||(h(b+'search')?h(b+'search'):g.BootstrapTable.DEFAULTS.searchText);var c=this.options.onLoadSuccess;this.options.onLoadSuccess=function(d){if(a.addrbarInit)a.addrbarInit=!1;else{var e={};e[b+'page']=a.options.pageNumber,e[b+'limit']=a.options.pageSize,e[b+'order']=a.options.sortOrder,e[b+'sort']=a.options.sortName,e[b+'search']=a.options.searchText,window.history.pushState({},'',i(e))}c&&c.call(a,d)}}e(j.prototype.__proto__||Object.getPrototypeOf(j.prototype),'init',this).call(this)}}]),j}(g.BootstrapTable)})(jQuery)});