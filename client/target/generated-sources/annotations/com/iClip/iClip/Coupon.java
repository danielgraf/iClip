package com.iClip.iClip;
import net.java.html.json.*;
public final class Coupon implements Cloneable {
  private static final Html4JavaType TYPE = new Html4JavaType();
  private final org.netbeans.html.json.spi.Proto proto;
  private java.lang.String prop_couponid;
  public java.lang.String getCouponid() {
    proto.accessProperty("couponid");
    return prop_couponid;
  }
  public void setCouponid(java.lang.String v) {
    proto.verifyUnlocked();
    Object o = prop_couponid;
    if (TYPE.isSame(o , v)) return;
    prop_couponid = v;
    proto.valueHasMutated("couponid", o, v);
  }
  private java.lang.String prop_couponlogourl;
  public java.lang.String getCouponlogourl() {
    proto.accessProperty("couponlogourl");
    return prop_couponlogourl;
  }
  public void setCouponlogourl(java.lang.String v) {
    proto.verifyUnlocked();
    Object o = prop_couponlogourl;
    if (TYPE.isSame(o , v)) return;
    prop_couponlogourl = v;
    proto.valueHasMutated("couponlogourl", o, v);
  }
  private java.lang.String prop_couponexpires;
  public java.lang.String getCouponexpires() {
    proto.accessProperty("couponexpires");
    return prop_couponexpires;
  }
  public void setCouponexpires(java.lang.String v) {
    proto.verifyUnlocked();
    Object o = prop_couponexpires;
    if (TYPE.isSame(o , v)) return;
    prop_couponexpires = v;
    proto.valueHasMutated("couponexpires", o, v);
  }
  private java.lang.String prop_couponname;
  public java.lang.String getCouponname() {
    proto.accessProperty("couponname");
    return prop_couponname;
  }
  public void setCouponname(java.lang.String v) {
    proto.verifyUnlocked();
    Object o = prop_couponname;
    if (TYPE.isSame(o , v)) return;
    prop_couponname = v;
    proto.valueHasMutated("couponname", o, v);
  }
  private java.lang.String prop_couponissuername;
  public java.lang.String getCouponissuername() {
    proto.accessProperty("couponissuername");
    return prop_couponissuername;
  }
  public void setCouponissuername(java.lang.String v) {
    proto.verifyUnlocked();
    Object o = prop_couponissuername;
    if (TYPE.isSame(o , v)) return;
    prop_couponissuername = v;
    proto.valueHasMutated("couponissuername", o, v);
  }
  private java.lang.String prop_couponoffer;
  public java.lang.String getCouponoffer() {
    proto.accessProperty("couponoffer");
    return prop_couponoffer;
  }
  public void setCouponoffer(java.lang.String v) {
    proto.verifyUnlocked();
    Object o = prop_couponoffer;
    if (TYPE.isSame(o , v)) return;
    prop_couponoffer = v;
    proto.valueHasMutated("couponoffer", o, v);
  }
  private java.lang.String prop_monetaryvalue;
  public java.lang.String getMonetaryvalue() {
    proto.accessProperty("monetaryvalue");
    return prop_monetaryvalue;
  }
  public void setMonetaryvalue(java.lang.String v) {
    proto.verifyUnlocked();
    Object o = prop_monetaryvalue;
    if (TYPE.isSame(o , v)) return;
    prop_monetaryvalue = v;
    proto.valueHasMutated("monetaryvalue", o, v);
  }
  private java.lang.String prop_monetarycurrency;
  public java.lang.String getMonetarycurrency() {
    proto.accessProperty("monetarycurrency");
    return prop_monetarycurrency;
  }
  public void setMonetarycurrency(java.lang.String v) {
    proto.verifyUnlocked();
    Object o = prop_monetarycurrency;
    if (TYPE.isSame(o , v)) return;
    prop_monetarycurrency = v;
    proto.valueHasMutated("monetarycurrency", o, v);
  }
  private static Class<CouponListModel.CouponModel> modelFor() { return null; }
  private Coupon(net.java.html.BrwsrCtx context) {
    this.proto = TYPE.createProto(this, context);
  };
  public Coupon() {
    this(net.java.html.BrwsrCtx.findDefault(Coupon.class));
  };
  public Coupon(java.lang.String aCouponid, java.lang.String aCouponlogourl, java.lang.String aCouponexpires, java.lang.String aCouponname, java.lang.String aCouponissuername, java.lang.String aCouponoffer, java.lang.String aMonetaryvalue, java.lang.String aMonetarycurrency) {
    this(net.java.html.BrwsrCtx.findDefault(Coupon.class));
    this.prop_couponid = aCouponid;
    this.prop_couponlogourl = aCouponlogourl;
    this.prop_couponexpires = aCouponexpires;
    this.prop_couponname = aCouponname;
    this.prop_couponissuername = aCouponissuername;
    this.prop_couponoffer = aCouponoffer;
    this.prop_monetaryvalue = aMonetaryvalue;
    this.prop_monetarycurrency = aMonetarycurrency;
  };
  private static class Html4JavaType extends org.netbeans.html.json.spi.Proto.Type<Coupon> {
    private Html4JavaType() {
      super(Coupon.class, CouponListModel.CouponModel.class, 8, 0);
      registerProperty("couponid", 0, false);
      registerProperty("couponlogourl", 1, false);
      registerProperty("couponexpires", 2, false);
      registerProperty("couponname", 3, false);
      registerProperty("couponissuername", 4, false);
      registerProperty("couponoffer", 5, false);
      registerProperty("monetaryvalue", 6, false);
      registerProperty("monetarycurrency", 7, false);
    }
    @Override public void setValue(Coupon data, int type, Object value) {
      switch (type) {
        case 0: data.setCouponid(TYPE.extractValue(java.lang.String.class, value)); return;
        case 1: data.setCouponlogourl(TYPE.extractValue(java.lang.String.class, value)); return;
        case 2: data.setCouponexpires(TYPE.extractValue(java.lang.String.class, value)); return;
        case 3: data.setCouponname(TYPE.extractValue(java.lang.String.class, value)); return;
        case 4: data.setCouponissuername(TYPE.extractValue(java.lang.String.class, value)); return;
        case 5: data.setCouponoffer(TYPE.extractValue(java.lang.String.class, value)); return;
        case 6: data.setMonetaryvalue(TYPE.extractValue(java.lang.String.class, value)); return;
        case 7: data.setMonetarycurrency(TYPE.extractValue(java.lang.String.class, value)); return;
      }
      throw new UnsupportedOperationException();
    }
    @Override public Object getValue(Coupon data, int type) {
      switch (type) {
        case 0: return data.getCouponid();
        case 1: return data.getCouponlogourl();
        case 2: return data.getCouponexpires();
        case 3: return data.getCouponname();
        case 4: return data.getCouponissuername();
        case 5: return data.getCouponoffer();
        case 6: return data.getMonetaryvalue();
        case 7: return data.getMonetarycurrency();
      }
      throw new UnsupportedOperationException();
    }
    @Override public void call(Coupon model, int type, Object data, Object ev) throws Exception {
      switch (type) {
      }
      throw new UnsupportedOperationException();
    }
    @Override public org.netbeans.html.json.spi.Proto protoFor(Object obj) {
      return ((Coupon)obj).proto;    }
    @Override public void onChange(Coupon model, int type) {
      switch (type) {
    }
      throw new UnsupportedOperationException();
    }
  @Override public void onMessage(Coupon model, int index, int type, Object data, Object[] params) {
    switch (index) {
    }
    throw new UnsupportedOperationException("index: " + index + " type: " + type);
  }
    @Override public Coupon read(net.java.html.BrwsrCtx c, Object json) { return new Coupon(c, json); }
    @Override public Coupon cloneTo(Coupon o, net.java.html.BrwsrCtx c) { return o.clone(c); }
  }
  private Coupon(net.java.html.BrwsrCtx c, Object json) {
    this(c);
    Object[] ret = new Object[8];
    proto.extract(json, new String[] {
      "couponid",
      "couponlogourl",
      "couponexpires",
      "couponname",
      "couponissuername",
      "couponoffer",
      "monetaryvalue",
      "monetarycurrency",
    }, ret);
    this.prop_couponid = (java.lang.String)ret[0];
    this.prop_couponlogourl = (java.lang.String)ret[1];
    this.prop_couponexpires = (java.lang.String)ret[2];
    this.prop_couponname = (java.lang.String)ret[3];
    this.prop_couponissuername = (java.lang.String)ret[4];
    this.prop_couponoffer = (java.lang.String)ret[5];
    this.prop_monetaryvalue = (java.lang.String)ret[6];
    this.prop_monetarycurrency = (java.lang.String)ret[7];
  }
  private static Object[] useAsArray(Object o) {
    return o instanceof Object[] ? ((Object[])o) : o == null ? new Object[0] : new Object[] { o };
  }
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append('{');
    sb.append('"').append("couponid").append('"').append(":");
    sb.append(TYPE.toJSON(prop_couponid));
    sb.append(',');
    sb.append('"').append("couponlogourl").append('"').append(":");
    sb.append(TYPE.toJSON(prop_couponlogourl));
    sb.append(',');
    sb.append('"').append("couponexpires").append('"').append(":");
    sb.append(TYPE.toJSON(prop_couponexpires));
    sb.append(',');
    sb.append('"').append("couponname").append('"').append(":");
    sb.append(TYPE.toJSON(prop_couponname));
    sb.append(',');
    sb.append('"').append("couponissuername").append('"').append(":");
    sb.append(TYPE.toJSON(prop_couponissuername));
    sb.append(',');
    sb.append('"').append("couponoffer").append('"').append(":");
    sb.append(TYPE.toJSON(prop_couponoffer));
    sb.append(',');
    sb.append('"').append("monetaryvalue").append('"').append(":");
    sb.append(TYPE.toJSON(prop_monetaryvalue));
    sb.append(',');
    sb.append('"').append("monetarycurrency").append('"').append(":");
    sb.append(TYPE.toJSON(prop_monetarycurrency));
    sb.append('}');
    return sb.toString();
  }
  public Coupon clone() {
    return clone(proto.getContext());
  }
  private Coupon clone(net.java.html.BrwsrCtx ctx) {
    Coupon ret = new Coupon(ctx);
    ret.prop_couponid = getCouponid();
    ret.prop_couponlogourl = getCouponlogourl();
    ret.prop_couponexpires = getCouponexpires();
    ret.prop_couponname = getCouponname();
    ret.prop_couponissuername = getCouponissuername();
    ret.prop_couponoffer = getCouponoffer();
    ret.prop_monetaryvalue = getMonetaryvalue();
    ret.prop_monetarycurrency = getMonetarycurrency();
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
  public Coupon applyBindings() {
    proto.applyBindings();
    return this;
  }
  public boolean equals(Object o) {
    if (o == this) return true;
    if (!(o instanceof Coupon)) return false;
    Coupon p = (Coupon)o;
    if (!TYPE.isSame(prop_couponid, p.prop_couponid)) return false;
    if (!TYPE.isSame(prop_couponlogourl, p.prop_couponlogourl)) return false;
    if (!TYPE.isSame(prop_couponexpires, p.prop_couponexpires)) return false;
    if (!TYPE.isSame(prop_couponname, p.prop_couponname)) return false;
    if (!TYPE.isSame(prop_couponissuername, p.prop_couponissuername)) return false;
    if (!TYPE.isSame(prop_couponoffer, p.prop_couponoffer)) return false;
    if (!TYPE.isSame(prop_monetaryvalue, p.prop_monetaryvalue)) return false;
    if (!TYPE.isSame(prop_monetarycurrency, p.prop_monetarycurrency)) return false;
    return true;
  }
  public int hashCode() {
    int h = Coupon.class.getName().hashCode();
    h = TYPE.hashPlus(prop_couponid, h);
    h = TYPE.hashPlus(prop_couponlogourl, h);
    h = TYPE.hashPlus(prop_couponexpires, h);
    h = TYPE.hashPlus(prop_couponname, h);
    h = TYPE.hashPlus(prop_couponissuername, h);
    h = TYPE.hashPlus(prop_couponoffer, h);
    h = TYPE.hashPlus(prop_monetaryvalue, h);
    h = TYPE.hashPlus(prop_monetarycurrency, h);
    return h;
  }
}
