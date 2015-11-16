package com.iClip.iClip;

import net.java.html.boot.BrowserBuilder;

public final class Main {
    private Main() {
    }

    public static void main(String... args) throws Exception {
        BrowserBuilder.newBrowser().
            loadPage("pages/index.html").
            loadClass(Main.class).showAndWait();
           // invoke("onPageLoad", args).
            //showAndWait();
        System.exit(0);
    }

    /**
     * Called when the page is ready.
     * @throws java.lang.Exception
     */
    public static void onPageLoad() throws Exception 
    {


    }

}
