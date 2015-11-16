/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.iClip.iClip;

import net.java.html.json.Model;
import net.java.html.json.Property;

/**
 *
 * @author dgraf
 */


@Model(className="CouponList", targetId="", properties = {
    @Property(name = "issuedcoupons", type = com.iClip.iClip.Coupon.class, array = true),
    @Property(name = "allcoupons", type = com.iClip.iClip.Coupon.class, array = true)
    
})

public class CouponListModel
{
    @Model(className = "Coupon", targetId="", properties = {
    @Property(name = "couponid", type = String.class),
    @Property(name = "couponlogourl", type = String.class),
    @Property(name = "couponexpires", type = String.class),
    @Property(name = "couponname", type = String.class),
    @Property(name = "couponissuername", type = String.class),
    @Property(name = "couponoffer", type = String.class),
    @Property(name = "monetaryvalue", type = String.class),
    @Property(name = "monetarycurrency", type = String.class)
            })
    public static class CouponModel {}  
  
}
