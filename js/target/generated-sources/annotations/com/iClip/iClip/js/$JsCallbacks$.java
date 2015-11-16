package com.iClip.iClip.js;
public final class $JsCallbacks$ {
  static final $JsCallbacks$ VM = new $JsCallbacks$(null);
  private final org.netbeans.html.boot.spi.Fn.Presenter p;
  private $JsCallbacks$ last;
  private $JsCallbacks$(org.netbeans.html.boot.spi.Fn.Presenter p) {
    this.p = p;
  }
  final $JsCallbacks$ current() {
    org.netbeans.html.boot.spi.Fn.Presenter now = org.netbeans.html.boot.spi.Fn.activePresenter();
    if (now == p) return this;
    if (last != null && now == last.p) return last;
    return last = new $JsCallbacks$(now);
  }

  public java.lang.Object java_lang_Runnable$run$(java.lang.Runnable self) throws Throwable {
    try (java.io.Closeable a = org.netbeans.html.boot.spi.Fn.activate(p)) { 
    self.run();
    return null;
    }
  }

  public java.lang.Object raw$java_lang_Runnable$run$(Object self) throws Throwable {
    if (p instanceof org.netbeans.html.boot.spi.Fn.FromJavaScript) {
      self = ((org.netbeans.html.boot.spi.Fn.FromJavaScript)p).toJava(self);
    }
    try (java.io.Closeable a = org.netbeans.html.boot.spi.Fn.activate(p)) { 
    ((java.lang.Runnable)self).run();
    return null;
    }
  }
}
