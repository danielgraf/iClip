package com.iClip.iClip.js;

import net.java.html.js.JavaScriptBody;

/** Use {@link JavaScriptBody} annotation on methods to
 * directly interact with JavaScript. See
 * http://bits.netbeans.org/html+java/1.2/net/java/html/js/package-summary.html
 * to understand how.
 */
public final class Dialogs {
    private Dialogs() {
    }
    
    /** Shows confirmation dialog to the user.
     * 
     * @param msg the message
     * @param callback called back when the use accepts (can be null)
     */
    @JavaScriptBody(
        args = { "msg", "callback" }, 
        javacall = true, 
        body = "if (confirm(msg)) {\n"
             + "  callback.@java.lang.Runnable::run()();\n"
             + "}\n"
    )
    public static native void confirmByUser(String msg, Runnable callback);
    
    @JavaScriptBody(
        args = {}, body = 
        "var w = window,\n" +
        "    d = document,\n" +
        "    e = d.documentElement,\n" +
        "    g = d.getElementsByTagName('body')[0],\n" +
        "    x = w.innerWidth || e.clientWidth || g.clientWidth,\n" +
        "    y = w.innerHeight|| e.clientHeight|| g.clientHeight;\n" +
        "\n" +
        "return 'Screen size is ' + x + ' times ' + y;\n"
    )
    public static native String screenSize();
}
