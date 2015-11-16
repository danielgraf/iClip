package com.iClip.iClip;
import net.java.html.json.*;
public final class CouponList implements Cloneable {
  private static final Html4JavaType TYPE = new Html4JavaType();
  private final org.netbeans.html.json.spi.Proto proto;
  private final java.util.List<com.iClip.iClip.Coupon> prop_issuedcoupons;
  public java.util.List<com.iClip.iClip.Coupon> getIssuedcoupons() {
    proto.accessProperty("issuedcoupons");
    return prop_issuedcoupons;
  }
  private final java.util.List<com.iClip.iClip.Coupon> prop_allcoupons;
  public java.util.List<com.iClip.iClip.Coupon> getAllcoupons() {
    proto.accessProperty("allcoupons");
    return prop_allcoupons;
  }
  private static Class<CouponListModel> modelFor() { return null; }
  private CouponList(net.java.html.BrwsrCtx context) {
    this.proto = TYPE.createProto(this, context);
    this.prop_issuedcoupons = proto.createList("issuedcoupons", -1);
    this.prop_allcoupons = proto.createList("allcoupons", -1);
  };
  public CouponList() {
    this(net.java.html.BrwsrCtx.findDefault(CouponList.class));
  };
  public CouponList(com.iClip.iClip.Coupon... aIssuedcoupons) {
    this(net.java.html.BrwsrCtx.findDefault(CouponList.class));
    proto.initTo(this.prop_issuedcoupons, aIssuedcoupons);
  };
  private static class Html4JavaType extends org.netbeans.html.json.spi.Proto.Type<CouponList> {
    private Html4JavaType() {
      super(CouponList.class, CouponListModel.class, 2, 0);
      registerProperty("issuedcoupons", 0, false);
      registerProperty("allcoupons", 1, false);
    }
    @Override public void setValue(CouponList data, int type, Object value) {
      switch (type) {
        case 0: TYPE.replaceValue(data.getIssuedcoupons(), com.iClip.iClip.Coupon.class, value); return;
        case 1: TYPE.replaceValue(data.getAllcoupons(), com.iClip.iClip.Coupon.class, value); return;
      }
      throw new UnsupportedOperationException();
    }
    @Override public Object getValue(CouponList data, int type) {
      switch (type) {
        case 0: return data.getIssuedcoupons();
        case 1: return data.getAllcoupons();
      }
      throw new UnsupportedOperationException();
    }
    @Override public void call(CouponList model, int type, Object data, Object ev) throws Exception {
      switch (type) {
      }
      throw new UnsupportedOperationException();
    }
    @Override public org.netbeans.html.json.spi.Proto protoFor(Object obj) {
      return ((CouponList)obj).proto;    }
    @Override public void onChange(CouponList model, int type) {
      switch (type) {
    }
      throw new UnsupportedOperationException();
    }
  @Override public void onMessage(CouponList model, int index, int type, Object data, Object[] params) {
    switch (index) {
    }
    throw new UnsupportedOperationException("index: " + index + " type: " + type);
  }
    @Override public CouponList read(net.java.html.BrwsrCtx c, Object json) { return new CouponList(c, json); }
    @Override public CouponList cloneTo(CouponList o, net.java.html.BrwsrCtx c) { return o.clone(c); }
  }
  private CouponList(net.java.html.BrwsrCtx c, Object json) {
    this(c);
    Object[] ret = new Object[2];
    proto.extract(json, new String[] {
      "issuedcoupons",
      "allcoupons",
    }, ret);
    for (Object e : useAsArray(ret[0])) {
      this.prop_issuedcoupons.add(proto.read(com.iClip.iClip.Coupon.class, e));
    }
    for (Object e : useAsArray(ret[1])) {
      this.prop_allcoupons.add(proto.read(com.iClip.iClip.Coupon.class, e));
    }
  }
  private static Object[] useAsArray(Object o) {
    return o instanceof Object[] ? ((Object[])o) : o == null ? new Object[0] : new Object[] { o };
  }
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append('{');
    sb.append('"').append("issuedcoupons").append('"').append(":");
    sb.append(TYPE.toJSON(prop_issuedcoupons));
    sb.append(',');
    sb.append('"').append("allcoupons").append('"').append(":");
    sb.append(TYPE.toJSON(prop_allcoupons));
    sb.append('}');
    return sb.toString();
  }
  public CouponList clone() {
    return clone(proto.getContext());
  }
  private CouponList clone(net.java.html.BrwsrCtx ctx) {
    CouponList ret = new CouponList(ctx);
    proto.cloneList(ret.getIssuedcoupons(), ctx, prop_issuedcoupons);
    proto.cloneList(ret.getAllcoupons(), ctx, prop_allcoupons);
    return ret;
  }
  /** Activates this model instance in the current {@link 
net.java.html.json.Models#bind(java.lang.Object, net.java.html.BrwsrCtx) browser context}. 
In case of using Knockout technology, this means to 
bind JSON like data in this model instance with Knockout tags in 
the surrounding HTML page.
This method binds to element '""' on the page
@return <code>this</code> object
*/
  public CouponList applyBindings() {
    proto.applyBindings();
    return this;
  }
  public boolean equals(Object o) {
    if (o == this) return true;
    if (!(o instanceof CouponList)) return false;
    CouponList p = (CouponList)o;
    if (!TYPE.isSame(prop_issuedcoupons, p.prop_issuedcoupons)) return false;
    if (!TYPE.isSame(prop_allcoupons, p.prop_allcoupons)) return false;
    return true;
  }
  public int hashCode() {
    int h = CouponList.class.getName().hashCode();
    h = TYPE.hashPlus(prop_issuedcoupons, h);
    h = TYPE.hashPlus(prop_allcoupons, h);
    return h;
  }
}
