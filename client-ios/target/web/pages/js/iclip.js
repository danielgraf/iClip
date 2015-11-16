var iclip = angular.module('iClip', []);

iclip.controller('iClipController', ['$scope', '$http', '$interval', function ($scope, $http, $interval)
{
        $scope.mycoupons = [];
        $scope.allcoupons = [];
        $scope.user_id = "10003";
        $scope.iclipapi = "http://iqs.io:6959/iclip";
        
        $scope.refresh = function()
        {
            for (i = 0; i < iclip._invokeQueue.length; i++)
            {
             console.log(iclip._invokeQueue[i][2][1]);
         };
            
             $http({method: 'GET', url: $scope.iclipapi, params: {list: 'allcoupons', user_id: $scope.userid}}).success(function (data, status) {
                if (angular.toJson($scope.allcoupons) !== JSON.stringify(data))
                {
                    $scope.allcoupons = data;    
                }
            }).error(function (data, status) {
                
                $scope.showfail("AW NO.", data);

            });
        };
        
        $scope.refreshMyCoupons = function()
        {
            $http({method: 'GET', url: $scope.iclipapi, params: {list: 'mycoupons', user_id: $scope.user_id}}).success(function (data, status) {
                if (angular.toJson($scope.mycoupons) !== JSON.stringify(data))
                {
                    $scope.mycoupons = data;    
                }
            }).error(function (data, status) {
                
                $scope.showfail("AW NO.", data);

            });
        };

/*
        testcoupon1 = {couponid: "12345678",
            couponlogourl: "http://blog.ensign-net.co.uk/wp-content/uploads/2012/12/jd-sports-logo.jpg",
            couponissuername: "Tracksuit Pushers",
            couponexpiry: "31/03/2016",
            couponoffer: "£1.00 off all purchases",
            monetaryvalue: "1.00",
            monetarycurrency: "GBP"};

        testcoupon2 = {couponid: "12345679",
            couponlogourl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/CostaLogo.svg/1024px-CostaLogo.svg.png",
            couponissuername: "Tasty Java Ltd",
            couponexpiry: "31/03/2016",
            couponoffer: "50p off all coffee",
            monetaryvalue: "0.50",
            monetarycurrency: "GBP"};

        testcoupon3 = {couponid: "12345610",
            couponlogourl: "http://media.creativebloq.futurecdn.net/sites/creativebloq.com/files/images/2013/11/mcdonalds4.jpg",
            couponissuername: "Evil Burger Inc",
            couponexpiry: "31/03/2016",
            couponoffer: "£1.50 off every dirty burger",
            monetaryvalue: "1.50",
            monetarycurrency: "GBP"};

        $scope.allcoupons.push(testcoupon1);
        $scope.allcoupons.push(testcoupon2);
        $scope.allcoupons.push(testcoupon3);
*/
        $scope.getAllCoupons = function ()
        {
            res = [];
            for (i = 0; i < $scope.allcoupons.length; i++)
            {
                thisCoupon = $scope.allcoupons[i];
                var result = $.grep($scope.mycoupons, function (e) {
                    return e.couponid === thisCoupon.couponid;
                });
                console.log(result);
                if (result.length === 0)
                    res.push(thisCoupon);
            }
            return res;

        };

        $scope.clipit = function (coupon)
        {
            $http({method: 'POST', url: $scope.iclipapi, params: {coupon_id: coupon.couponid, user_id: $scope.user_id}}).success(function (data, status) {
                
                $scope.refresh();
                $scope.showalert("You clipped it !", "now go redeem it");   
                
            }).error(function (data, status) {
                
                $scope.showfail("AW NO. RC", status);
            });
            
        };

        $scope.deleteit = function (coupon)
        {
            params = {user_id: $scope.user_id, coupon_id: coupon.couponid };
            $http({method: 'DELETE', url: $scope.iclipapi, params: params}).success(function (data, status)
            {
                $scope.refresh();
                $scope.showalert("You deleted it ?", "You missed out !");

            }).error(function (data, status)
            {
                //...and if it doesn't, throw up an error message
                 $scope.showfail("That went wrong - RC" + status);

            });
        };

        $scope.showalert = function (message, submessage) {
            
            $('#alertdiv').remove();

            $('#alertplaceholder').append('<div id="alertdiv" style="text-align: center; height: 64px; line-height: 64px;" class="alert-success"><span><strong>' + message + '</strong> ' + submessage + '</span></div>');

            window.setTimeout(function () {
                $("#alertdiv").fadeTo(500, 0).slideUp(500, function () {
                    $(this).remove();
                });
            }, 1000);
        };
        
        $scope.showfail = function (message, submessage) {

            $('#alertdiv').remove();
            $('#alertplaceholder').append('<div id="alertdiv" style="text-align: center; height: 64px; line-height: 64px;" class="alert-danger"><span><strong>' + message + '</strong> ' + submessage + '</span></div>');

            window.setTimeout(function () {
                $("#alertdiv").fadeTo(500, 0).slideUp(500, function () {
                    $(this).remove();
                });
            }, 1000);
        };
        
        $scope.refresh();
        $scope.refreshMyCoupons();
        
        $interval(function () {
                $scope.refresh();
                $scope.refreshMyCoupons();
            }, 1000);


        $(document).ready(function ()
        {
            console.log("PAGE READY");
        });
    }]);