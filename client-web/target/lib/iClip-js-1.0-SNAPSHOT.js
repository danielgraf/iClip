bck2brwsr.register({
  'magic' : 'kafíčko'
}, function(exports) {
  var vm = {};
  function link(n, assign) {
    return function() {
      var no_ = n['replace__Ljava_lang_String_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2']('_', '_1').toString();
      var cls = no_['replace__Ljava_lang_String_2CC']('/', '_').toString();
      var dot = n['replace__Ljava_lang_String_2CC']('/', '.').toString();
      exports.loadClass(dot);
      assign(exports[cls]);
      return exports[cls](arguments);
    };
  };

  var invoker = {};
vm.java_lang_Object = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Object;
  return link('java/lang/Object', function(f) { vm.java_lang_Object = f;})(instance);
}
vm.java_lang_Class = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Class;
  return link('java/lang/Class', function(f) { vm.java_lang_Class = f;})(instance);
}
vm.java_lang_ArithmeticException = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_ArithmeticException;
  return link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException = f;})(instance);
}
vm.org_apidesign_vm4brwsr_VM = link('org/apidesign/vm4brwsr/VM', function(f) { vm.org_apidesign_vm4brwsr_VM =  f; });

vm.com_iClip_iClip_js_$JsCallbacks$ = function com_iClip_iClip_js_$JsCallbacks$() {
  var m;
  var CLS = com_iClip_iClip_js_$JsCallbacks$;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_VM = null;
  m = c._VM = function (v) {  if (arguments.length == 1) CLS.fld_VM = v; return CLS.fld_VM; };
  m = c._p = function (v) {  if (arguments.length == 1) this.fld_com_iClip_iClip_js_$JsCallbacks$_p = v; return this.fld_com_iClip_iClip_js_$JsCallbacks$_p; };
  m = c._last = function (v) {  if (arguments.length == 1) this.fld_com_iClip_iClip_js_$JsCallbacks$_last = v; return this.fld_com_iClip_iClip_js_$JsCallbacks$_last; };
    m = CLS.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2 = function(lcA1) {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
c._p.call(lcA0, lcA1);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.current__Lcom_iClip_iClip_js_$JsCallbacks$_2 = function() {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {
var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activePresenter__Lorg_netbeans_html_boot_spi_Fn$Presenter_2']();
var lcA1 = stA0;
if ((lcA1) !== (c._p.call(lcA0))) { gt = 14; break IF; }
return lcA0;
    }
    X_14: for (;;) { IF: if (gt <= 14) {

if ((c._last.call(lcA0)) === null) { gt = 37; break IF; }
if ((lcA1) !== (c._p.call(c._last.call(lcA0)))) { gt = 37; break IF; }
return c._last.call(lcA0);
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = lcA0;var stA1 = new vm.com_iClip_iClip_js_$JsCallbacks$;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA1, lcA1);
var stA2 = stA1, stA1 = stA0, stA0 = stA2;
c._last.call(stA1, stA2);
return stA0;

    }
}}}
};
    m.access = 16;
    m.cls = CLS;
    m = c.java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA2 = stA0;
var lcA3 = null;
try {
invoker.run__V(lcA1);
var lcA4 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 56; break IF; }}
var stA0 = e;{ gt = 64; break IF; }
}
if ((lcA2) === null) { gt = 53; break IF; }
if ((lcA3) === null) { gt = 47; break IF; }
try {
invoker.close__V(lcA2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 36; break IF; }}
throw e;
}{ gt = 53; break IF; }
    }
    X_36: for (;;) { IF: if (gt <= 36) {
var lcA5 = stA0;
invoker.addSuppressed__VLjava_lang_Throwable_2(lcA3,lcA5);
{ gt = 53; break IF; }
    }
    X_47: for (;;) { IF: if (gt <= 47) {

invoker.close__V(lcA2);
    }
    X_53: for (;;) { IF: if (gt <= 53) {

return lcA4;
    }
    X_56: for (;;) { IF: if (gt <= 56) {
try {var lcA4 = stA0;
var lcA3 = lcA4;
{ var stA0 = lcA4; throw lcA4; }
} catch (e) {
var stA0 = e;{ gt = 64; break IF; }
}    }
    X_64: for (;;) { IF: if (gt <= 64) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_64; }
}
if ((lcA2) === null) { gt = 100; break IF; }
if ((lcA3) === null) { gt = 94; break IF; }
try {
invoker.close__V(lcA2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 83; break IF; }}
throw e;
}{ gt = 100; break IF; }
    }
    X_83: for (;;) { IF: if (gt <= 83) {
var lcA7 = stA0;
invoker.addSuppressed__VLjava_lang_Throwable_2(lcA3,lcA7);
{ gt = 100; break IF; }
    }
    X_94: for (;;) { IF: if (gt <= 94) {

invoker.close__V(lcA2);
    }
    X_100: for (;;) { IF: if (gt <= 100) {

{ var stA0 = lcA6; throw lcA6; }

    }
}}}}}}}}}
};
c['java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.raw$java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = c._p.call(lcA0) != null && c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript'] ? 1 : 0;
if ((stI0) == 0) { gt = 24; break IF; }
if (c._p.call(lcA0) !== null && !c._p.call(lcA0)['$instOf_org_netbeans_html_boot_spi_Fn$FromJavaScript']) vm.java_lang_Class(false).castEx();
var stA0 = invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2(c._p.call(lcA0),lcA1);
var lcA1 = stA0;
    }
    X_24: for (;;) { IF: if (gt <= 24) {

var stA0 = (refs_java_lang_Class || (refs_java_lang_Class = vm.java_lang_Class(false)))['activate__Ljava_io_Closeable_2Lorg_netbeans_html_boot_spi_Fn$Presenter_2'](c._p.call(lcA0));
var lcA2 = stA0;
var lcA3 = null;
try {
if (lcA1 !== null && !lcA1['$instOf_java_lang_Runnable']) vm.java_lang_Class(false).castEx();
invoker.run__V(lcA1);
var lcA4 = null;
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 83; break IF; }}
var stA0 = e;{ gt = 91; break IF; }
}
if ((lcA2) === null) { gt = 80; break IF; }
if ((lcA3) === null) { gt = 74; break IF; }
try {
invoker.close__V(lcA2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 63; break IF; }}
throw e;
}{ gt = 80; break IF; }
    }
    X_63: for (;;) { IF: if (gt <= 63) {
var lcA5 = stA0;
invoker.addSuppressed__VLjava_lang_Throwable_2(lcA3,lcA5);
{ gt = 80; break IF; }
    }
    X_74: for (;;) { IF: if (gt <= 74) {

invoker.close__V(lcA2);
    }
    X_80: for (;;) { IF: if (gt <= 80) {

return lcA4;
    }
    X_83: for (;;) { IF: if (gt <= 83) {
try {var lcA4 = stA0;
var lcA3 = lcA4;
{ var stA0 = lcA4; throw lcA4; }
} catch (e) {
var stA0 = e;{ gt = 91; break IF; }
}    }
    X_91: for (;;) { IF: if (gt <= 91) {
try {var lcA6 = stA0;
} catch (e) {
var stA0 = e;{ gt = 0; continue X_91; }
}
if ((lcA2) === null) { gt = 127; break IF; }
if ((lcA3) === null) { gt = 121; break IF; }
try {
invoker.close__V(lcA2);
} catch (e) {
e = vm.java_lang_Class(false).bck2BrwsrThrwrbl(e);if (e['$instOf_java_lang_Throwable']) {var stA0 = e;{ gt = 110; break IF; }}
throw e;
}{ gt = 127; break IF; }
    }
    X_110: for (;;) { IF: if (gt <= 110) {
var lcA7 = stA0;
invoker.addSuppressed__VLjava_lang_Throwable_2(lcA3,lcA7);
{ gt = 127; break IF; }
    }
    X_121: for (;;) { IF: if (gt <= 121) {

invoker.close__V(lcA2);
    }
    X_127: for (;;) { IF: if (gt <= 127) {

{ var stA0 = lcA6; throw lcA6; }

    }
}}}}}}}}}}
};
c['raw$java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new vm.com_iClip_iClip_js_$JsCallbacks$;
c.constructor.cons__VLorg_netbeans_html_boot_spi_Fn$Presenter_2.call(stA0, null);
c._VM(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function com_iClip_iClip_js_$JsCallbacks$fillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_iClip_iClip_js_$JsCallbacks$', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_iClip_iClip_js_$JsCallbacks$fillInstOf });
    com_iClip_iClip_js_$JsCallbacks$fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/iClip/iClip/js/$JsCallbacks$';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_java_lang_Object;
    var refs_java_lang_Class;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this.fld_com_iClip_iClip_js_$JsCallbacks$_p = null;
    this.fld_com_iClip_iClip_js_$JsCallbacks$_last = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['com_iClip_iClip_js_$JsCallbacks$'] = vm.com_iClip_iClip_js_$JsCallbacks$;

vm.java_lang_Throwable = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Throwable;
  return link('java/lang/Throwable', function(f) { vm.java_lang_Throwable = f;})(instance);
}
vm.org_netbeans_html_boot_spi_Fn = link('org/netbeans/html/boot/spi/Fn', function(f) { vm.org_netbeans_html_boot_spi_Fn =  f; });

vm.com_iClip_iClip_js_Dialogs = function com_iClip_iClip_js_Dialogs() {
  var m;
  var CLS = com_iClip_iClip_js_Dialogs;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS.fld_$$fn$$confirmByUser_1 = null;
  m = c._$$fn$$confirmByUser_1 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$confirmByUser_1 = v; return CLS.fld_$$fn$$confirmByUser_1; };
  CLS.fld_$$fn$$screenSize_2 = null;
  m = c._$$fn$$screenSize_2 = function (v) {  if (arguments.length == 1) CLS.fld_$$fn$$screenSize_2 = v; return CLS.fld_$$fn$$screenSize_2; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.confirmByUser__VLjava_lang_String_2Ljava_lang_Runnable_2 = function(msg,callback) {

  msg = vm.java_lang_Class(false).toJS(msg);
  callback = vm.java_lang_Class(false).toJS(callback);if (confirm(msg)) {
  vm.com_iClip_iClip_js_$JsCallbacks$(false)._VM().java_1lang_1Runnable$run$__Ljava_lang_Object_2Ljava_lang_Runnable_2(callback);
}

}

c['confirmByUser__VLjava_lang_String_2Ljava_lang_Runnable_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.screenSize__Ljava_lang_String_2 = function() {
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

return 'Screen size is ' + x + ' times ' + y;

}

c['screenSize__Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    c.constructor = CLS;
    function com_iClip_iClip_js_DialogsfillInstOf(x) {
        Object.defineProperty(x, '$instOf_com_iClip_iClip_js_Dialogs', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: com_iClip_iClip_js_DialogsfillInstOf });
    com_iClip_iClip_js_DialogsfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'com/iClip/iClip/js/Dialogs';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
exports['com_iClip_iClip_js_Dialogs'] = vm.com_iClip_iClip_js_Dialogs;

  invoker.run__V = function(target, p0) {
    return target['run__V'](p0);
  };
  invoker.close__V = function(target, p0) {
    return target['close__V'](p0);
  };
  invoker.addSuppressed__VLjava_lang_Throwable_2 = function(target, p0, p1) {
    return target['addSuppressed__VLjava_lang_Throwable_2'](p0,p1);
  };
  invoker.toJava__Ljava_lang_Object_2Ljava_lang_Object_2 = function(target, p0, p1) {
    return target['toJava__Ljava_lang_Object_2Ljava_lang_Object_2'](p0,p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNDQ3MzQ2NDM0Mjg0DQpCdWlsZC1KZGs6IDEuOC4wXzYwDQpCdWlsdC1CeTogZGdyYWYNCkJ1bmRsZS1NYW5pZmVzdFZlcnNpb246IDINCkJ1bmRsZS1OYW1lOiBpQ2xpcCBKYXZhU2NyaXB0IExpYnJhcmllcw0KQnVuZGxlLVN5bWJvbGljTmFtZTogY29tLmlDbGlwLmlDbGlwLmpzDQpCdW5kbGUtVmVyc2lvbjogMS4wLjAuU05BUFNIT1QNCkNyZWF0ZWQtQnk6IEFwYWNoZSBNYXZlbiBCdW5kbGUgUGx1Z2luDQpFeHBvcnQtUGFja2FnZTogY29tLmlDbGlwLmlDbGlwLmpzO3ZlcnNpb249IjEuMC4wLlNOQVBTSE9UIg0KSW1wb3J0LVBhY2thZ2U6IG9yZy5uZXRiZWFucy5odG1sLmJvb3Quc3BpO3ZlcnNpb249IlsxLjIsMikiDQpUb29sOiBCbmQtMi4xLjAuMjAxMzA0MjYtMTIyMjEzDQo=');
});