webpackJsonp([61], {
    1277: function(l, n, e) {
        "use strict";

        function t(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, e) {
                var t = !0;
                if ("load" === n) {
                    t = !1 !== s._17(l, 1).onLoad() && t
                }
                if ("error" === n) {
                    t = !1 !== s._17(l, 1).onError() && t
                }
                return t
            }, null, null)), s._4(1, 540672, null, 0, H.a, [q.a, s.k, W.a], {
                cache: [0, "cache"],
                employeeId: [1, "employeeId"]
            }, null)], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.employeeBasicInfo.imageUrl, e.employeeBasicInfo.employeeId)
            }, function(l, n) {
                l(n, 0, 0, "settingsAboutYouImgIcon")
            })
        }

        function u(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0],
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(1, null, ["", ""]))], null, function(l, n) {
                var e = n.component;
                l(n, 0, 0, "settingsAboutYouImgIcon", "employeeslistTwoLetterName_" + e.employeeBasicInfo.employeeId);
                l(n, 1, 0, e.UserUtils.getInitials(e.employeeBasicInfo.displayName))
            })
        }

        function a(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 17, "button", [
                ["class", "item item-block"],
                ["ion-item", ""],
                ["name", "Tap_Switch_User"]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.switchUser() && t
                }
                return t
            }, $.b, $.a)), s._4(1, 1097728, null, 3, K.a, [z.a, G.a, s.k, s.F, [2, Q.a]], null, null), s._25(335544320, 19, {
                contentLabel: 0
            }), s._25(603979776, 20, {
                _buttons: 1
            }), s._25(603979776, 21, {
                _icons: 1
            }), s._4(5, 16384, null, 0, X.a, [], null, null), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._5(7, 0, null, 0, 5, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(8, 16384, null, 0, Z.a, [], null, null), (l()(), s._27(-1, null, ["\n          "])), (l()(), s._5(10, 0, null, null, 1, "ion-icon", [
                ["name", "md-switch"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), s._4(11, 147456, null, 0, ll.a, [G.a, s.k, s.F], {
                name: [0, "name"]
            }, null), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._5(14, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(15, null, ["", ""])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 2, ["\n      "]))], function(l, n) {
                l(n, 11, 0, "md-switch")
            }, function(l, n) {
                l(n, 10, 0, s._17(n, 11)._hidden);
                l(n, 14, 0, "settingsSwitchUser");
                l(n, 15, 0, s._28(n, 15, 0, s._17(n, 16).transform("switchUser")))
            })
        }

        function i(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 17, "button", [
                ["class", "item item-block"],
                ["ion-item", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.backToMe() && t
                }
                return t
            }, $.b, $.a)), s._4(1, 1097728, null, 3, K.a, [z.a, G.a, s.k, s.F, [2, Q.a]], null, null), s._25(335544320, 22, {
                contentLabel: 0
            }), s._25(603979776, 23, {
                _buttons: 1
            }), s._25(603979776, 24, {
                _icons: 1
            }), s._4(5, 16384, null, 0, X.a, [], null, null), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._5(7, 0, null, 0, 5, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(8, 16384, null, 0, Z.a, [], null, null), (l()(), s._27(-1, null, ["\n          "])), (l()(), s._5(10, 0, null, null, 1, "ion-icon", [
                ["name", "md-arrow-round-back"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), s._4(11, 147456, null, 0, ll.a, [G.a, s.k, s.F], {
                name: [0, "name"]
            }, null), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._5(14, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(15, null, ["", ""])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 2, ["\n      "]))], function(l, n) {
                l(n, 11, 0, "md-arrow-round-back")
            }, function(l, n) {
                l(n, 10, 0, s._17(n, 11)._hidden);
                l(n, 14, 0, "settingsReturnToAdmin");
                l(n, 15, 0, s._28(n, 15, 0, s._17(n, 16).transform("backToMe")))
            })
        }

        function o(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), s._4(1, 16384, null, 0, nl.a, [G.a, s.k, s.F, [2, el.a]], null, null), (l()(), s._27(-1, null, ["\n  "])), (l()(), s._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, tl.b, tl.a)), s._4(4, 49152, null, 0, ul.a, [al.a, [2, el.a],
                [2, il.a], G.a, s.k, s.F
            ], null, null), (l()(), s._27(-1, 3, ["\n    "])), (l()(), s._5(6, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, ol.b, ol.a)), s._4(7, 49152, null, 0, sl.a, [G.a, s.k, s.F, [2, rl.a],
                [2, ul.a]
            ], null, null), (l()(), s._27(8, 0, [" ", " "])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 3, ["\n  "])), (l()(), s._27(-1, null, ["\n"])), (l()(), s._27(-1, null, ["\n\n"])), (l()(), s._5(13, 0, null, null, 155, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, cl.b, cl.a)), s._4(14, 4374528, null, 0, _l.a, [G.a, ml.a, gl.a, s.k, s.F, al.a, pl.a, s.y, [2, el.a],
                [2, il.a]
            ], null, null), (l()(), s._27(-1, 1, ["\n  "])), (l()(), s._5(16, 0, null, 1, 151, "ion-card", [], null, null, null, null, null)), s._4(17, 16384, null, 0, dl.a, [G.a, s.k, s.F], null, null), (l()(), s._27(-1, null, ["\n    "])), (l()(), s._5(19, 0, null, null, 147, "ion-list", [
                ["no-lines", ""]
            ], null, null, null, null, null)), s._4(20, 16384, null, 0, hl.a, [G.a, s.k, s.F, ml.a, fl.l, gl.a], null, null), (l()(), s._27(-1, null, ["\n      "])), (l()(), s._5(22, 0, null, null, 118, null, null, null, null, null, null, null)), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._5(25, 0, null, null, 20, "button", [
                ["class", "item item-block"],
                ["ion-item", ""],
                ["name", "Tap_About_You"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.navigateToAboutYou() && t
                }
                return t
            }, $.b, $.a)), s._4(26, 1097728, null, 3, K.a, [z.a, G.a, s.k, s.F, [2, Q.a]], null, null), s._25(335544320, 1, {
                contentLabel: 0
            }), s._25(603979776, 2, {
                _buttons: 1
            }), s._25(603979776, 3, {
                _icons: 1
            }), s._4(30, 16384, null, 0, X.a, [], null, null), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(32, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(33, 16384, null, 0, Z.a, [], null, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._0(16777216, null, null, 1, null, t)), s._4(36, 16384, null, 0, bl.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._0(16777216, null, null, 1, null, u)), s._4(39, 16384, null, 0, bl.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, null, ["\n          "])), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(42, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(43, null, ["", ""])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._5(47, 0, null, null, 17, "button", [
                ["class", "item item-block"],
                ["ion-item", ""],
                ["name", "Tap_Change_Mysj_Id"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.navigateToChangeMysjId() && t
                }
                return t
            }, $.b, $.a)), s._4(48, 1097728, null, 3, K.a, [z.a, G.a, s.k, s.F, [2, Q.a]], null, null), s._25(335544320, 4, {
                contentLabel: 0
            }), s._25(603979776, 5, {
                _buttons: 1
            }), s._25(603979776, 6, {
                _icons: 1
            }), s._4(52, 16384, null, 0, X.a, [], null, null), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(54, 0, null, 0, 5, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(55, 16384, null, 0, Z.a, [], null, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._5(57, 0, null, null, 1, "ion-icon", [
                ["name", "md-create"],
                ["role", "img"]
            ], [
                [8, "id", 0],
                [2, "hide", null]
            ], null, null, null, null)), s._4(58, 147456, null, 0, ll.a, [G.a, s.k, s.F], {
                name: [0, "name"]
            }, null), (l()(), s._27(-1, null, ["\n          "])), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(61, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(62, null, ["", ""])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._5(66, 0, null, null, 17, "button", [
                ["class", "item item-block"],
                ["ion-item", ""],
                ["name", "Tap_Change_Password"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.navigateToChangePassword() && t
                }
                return t
            }, $.b, $.a)), s._4(67, 1097728, null, 3, K.a, [z.a, G.a, s.k, s.F, [2, Q.a]], null, null), s._25(335544320, 7, {
                contentLabel: 0
            }), s._25(603979776, 8, {
                _buttons: 1
            }), s._25(603979776, 9, {
                _icons: 1
            }), s._4(71, 16384, null, 0, X.a, [], null, null), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(73, 0, null, 0, 5, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(74, 16384, null, 0, Z.a, [], null, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._5(76, 0, null, null, 1, "ion-icon", [
                ["name", "md-lock"],
                ["role", "img"]
            ], [
                [8, "id", 0],
                [2, "hide", null]
            ], null, null, null, null)), s._4(77, 147456, null, 0, ll.a, [G.a, s.k, s.F], {
                name: [0, "name"]
            }, null), (l()(), s._27(-1, null, ["\n          "])), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(80, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(81, null, ["", ""])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._5(85, 0, null, null, 17, "button", [
                ["class", "item item-block"],
                ["ion-item", ""],
                ["name", "Tap_Contact_Support"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.mailto() && t
                }
                return t
            }, $.b, $.a)), s._4(86, 1097728, null, 3, K.a, [z.a, G.a, s.k, s.F, [2, Q.a]], null, null), s._25(335544320, 10, {
                contentLabel: 0
            }), s._25(603979776, 11, {
                _buttons: 1
            }), s._25(603979776, 12, {
                _icons: 1
            }), s._4(90, 16384, null, 0, X.a, [], null, null), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(92, 0, null, 0, 5, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(93, 16384, null, 0, Z.a, [], null, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._5(95, 0, null, null, 1, "ion-icon", [
                ["name", "ios-help-buoy"],
                ["role", "img"]
            ], [
                [8, "id", 0],
                [2, "hide", null]
            ], null, null, null, null)), s._4(96, 147456, null, 0, ll.a, [G.a, s.k, s.F], {
                name: [0, "name"]
            }, null), (l()(), s._27(-1, null, ["\n          "])), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(99, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(100, null, ["\n            ", "\n          "])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._27(-1, null, ["\n\n        "])), (l()(), s._5(104, 0, null, null, 17, "button", [
                ["class", "item item-block"],
                ["ion-item", ""],
                ["name", "Tap_Change_Language"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.changeLanguage() && t
                }
                return t
            }, $.b, $.a)), s._4(105, 1097728, null, 3, K.a, [z.a, G.a, s.k, s.F, [2, Q.a]], null, null), s._25(335544320, 13, {
                contentLabel: 0
            }), s._25(603979776, 14, {
                _buttons: 1
            }), s._25(603979776, 15, {
                _icons: 1
            }), s._4(109, 16384, null, 0, X.a, [], null, null), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(111, 0, null, 0, 5, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(112, 16384, null, 0, Z.a, [], null, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._5(114, 0, null, null, 1, "ion-icon", [
                ["name", "md-globe"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), s._4(115, 147456, null, 0, ll.a, [G.a, s.k, s.F], {
                name: [0, "name"]
            }, null), (l()(), s._27(-1, null, ["\n          "])), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(118, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(119, null, ["", ""])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._27(-1, null, ["\n\n        "])), (l()(), s._5(123, 0, null, null, 16, "button", [
                ["class", "item item-block"],
                ["ion-item", ""],
                ["name", "Tap_Privacy_Policy"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.privacyPolicy() && t
                }
                return t
            }, $.b, $.a)), s._4(124, 1097728, null, 3, K.a, [z.a, G.a, s.k, s.F, [2, Q.a]], null, null), s._25(335544320, 16, {
                contentLabel: 0
            }), s._25(603979776, 17, {
                _buttons: 1
            }), s._25(603979776, 18, {
                _icons: 1
            }), s._4(128, 16384, null, 0, X.a, [], null, null), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(130, 0, null, 0, 4, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(131, 16384, null, 0, Z.a, [], null, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._5(133, 0, null, null, 0, "img", [
                ["class", "img-icon"],
                ["src", "/assets/imgs/privacy.svg"]
            ], null, null, null, null, null)), (l()(), s._27(-1, null, ["\n          "])), (l()(), s._27(-1, 2, ["\n          "])), (l()(), s._5(136, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(137, null, ["", ""])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._27(-1, null, ["\n      "])), (l()(), s._27(-1, null, ["\n\n      "])), (l()(), s._0(16777216, null, null, 1, null, a)), s._4(143, 16384, null, 0, bl.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, null, ["\n      "])), (l()(), s._0(16777216, null, null, 1, null, i)), s._4(146, 16384, null, 0, bl.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, null, ["\n      "])), (l()(), s._5(148, 0, null, null, 17, "button", [
                ["class", "item item-block"],
                ["ion-item", ""],
                ["name", "Tap_Log_Out"]
            ], [
                [8, "disabled", 0],
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.logout() && t
                }
                return t
            }, $.b, $.a)), s._4(149, 1097728, null, 3, K.a, [z.a, G.a, s.k, s.F, [2, Q.a]], null, null), s._25(335544320, 25, {
                contentLabel: 0
            }), s._25(603979776, 26, {
                _buttons: 1
            }), s._25(603979776, 27, {
                _icons: 1
            }), s._4(153, 16384, null, 0, X.a, [], null, null), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._5(155, 0, null, 0, 5, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(156, 16384, null, 0, Z.a, [], null, null), (l()(), s._27(-1, null, ["\n          "])), (l()(), s._5(158, 0, null, null, 1, "ion-icon", [
                ["name", "md-log-out"],
                ["role", "img"]
            ], [
                [8, "id", 0],
                [2, "hide", null]
            ], null, null, null, null)), s._4(159, 147456, null, 0, ll.a, [G.a, s.k, s.F], {
                name: [0, "name"]
            }, null), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._5(162, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(163, null, ["", ""])), s._20(131072, r.i, [r.j, s.g]), (l()(), s._27(-1, 2, ["\n      "])), (l()(), s._27(-1, null, ["\n    "])), (l()(), s._27(-1, null, ["\n  "])), (l()(), s._27(-1, 1, ["\n"])), (l()(), s._27(-1, null, ["\n"]))], function(l, n) {
                var e = n.component;
                l(n, 36, 0, e.employeeBasicInfo.imageUrl);
                l(n, 39, 0, !e.employeeBasicInfo.imageUrl);
                l(n, 58, 0, "md-create");
                l(n, 77, 0, "md-lock");
                l(n, 96, 0, "ios-help-buoy");
                l(n, 115, 0, "md-globe");
                l(n, 143, 0, e.enableSwitchUser);
                l(n, 146, 0, e.userSwitched);
                l(n, 159, 0, "md-log-out")
            }, function(l, n) {
                var e = n.component;
                l(n, 3, 0, s._17(n, 4)._hidden, s._17(n, 4)._sbPadding);
                l(n, 6, 0, "settingsTitle");
                l(n, 8, 0, s._28(n, 8, 0, s._17(n, 9).transform("settings")));
                l(n, 13, 0, s._17(n, 14).statusbarPadding, s._17(n, 14)._hasRefresher);
                l(n, 25, 0, "settingsAboutYouBtn");
                l(n, 42, 0, "settingsAboutYouLbl");
                l(n, 43, 0, s._28(n, 43, 0, s._17(n, 44).transform("aboutYou")));
                l(n, 47, 0, "settingsChngMYSJID");
                l(n, 57, 0, "settingsChngMysjIdIcon", s._17(n, 58)._hidden);
                l(n, 61, 0, "settingsChngMysjIdLbl");
                l(n, 62, 0, s._28(n, 62, 0, s._17(n, 63).transform("changeMYSJId")));
                l(n, 66, 0, "settingsChngPwdBtn");
                l(n, 76, 0, "settingsChngPwdIcon", s._17(n, 77)._hidden);
                l(n, 80, 0, "settingsChngPwdLbl");
                l(n, 81, 0, s._28(n, 81, 0, s._17(n, 82).transform("changePassword")));
                l(n, 85, 0, "moreMenuSupportBtn");
                l(n, 95, 0, "moreMenuSupportIcon", s._17(n, 96)._hidden);
                l(n, 99, 0, "moreMenuSupportLbl");
                l(n, 100, 0, s._28(n, 100, 0, s._17(n, 101).transform(e.translateClient + ".contactSupport")));
                l(n, 104, 0, "settingsChngLanguageBtn");
                l(n, 114, 0, s._17(n, 115)._hidden);
                l(n, 118, 0, "settingsChngPwdLbl");
                l(n, 119, 0, s._28(n, 119, 0, s._17(n, 120).transform("changeLanguage")));
                l(n, 123, 0, "settingsChngLanguageBtn");
                l(n, 136, 0, "settingsChngPwdLbl");
                l(n, 137, 0, s._28(n, 137, 0, s._17(n, 138).transform("privacyPolicy")));
                l(n, 148, 0, e.logOutButton, "moreMenuLogBtn");
                l(n, 158, 0, "moreMenuLogIcon", s._17(n, 159)._hidden);
                l(n, 162, 0, "moreMenuLogLbl");
                l(n, 163, 0, s._28(n, 163, 0, s._17(n, 164).transform("logout")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e(1),
            r = (e(0), e(6), e(9)),
            c = e(64),
            _ = e(11),
            m = e(12),
            g = e(13),
            p = e(20),
            d = e(143),
            h = e(21),
            f = e(91),
            b = e(424),
            v = e(223),
            y = e(88),
            k = e(31),
            S = e(410),
            L = e(117),
            I = e(65),
            P = e(49),
            U = e.n(P),
            w = function() {
                function l(l, n, e, t, u, a, i, o, s, r, c, _, m, g, p, d, h, f, b, v, y) {
                    this._browser = l, this.locationTracker = n, this.network = e, this.nav = t, this.navParams = u, this.UserUtils = a, this.StorageAccess = i, this.switchUserProvider = o, this.DataAccess = s, this.translate = r, this.config = c, this.settingsProvider = _, this.ReusableUtils = m, this.alertCtrl = g, this.eventEmitterService = p, this.commonProvider = d, this.viewCtrl = h, this.mixPanelService = f, this.device = b, this.appVersion = v, this.loadingCtrl = y, this.myAppName = I.a.appName, this.translateClient = I.a.translation, this.errorCodeEnabled = !1, this.userSwitched = !1, this.enableSwitchUser = !1, this.languagesPresent = [], this.languages = {}, this.logOutButton = !1;
                    var k = this;
                    k.employee = null, k.StorageAccess.getValue("username").then(function(l) {
                        k.uName = l.includes("@") ? l : "+" + l
                    }), k.appVersion.getVersionNumber().then(function(l) {
                        k.AppVersionNumber = l
                    }).catch(function(l) {});
                    k.UserUtils.getReadableDeviceName().then(function(l) {
                        return k.deviceName = l
                    }, function(l) {
                        return k.deviceName = k.device.model
                    }), k.navParams.data && (k.employeeBasicInfo = JSON.parse(k.navParams.get("employee")), k.getUserDetails())
                }
                return l.prototype.ionViewWillEnter = function() {
                    var l = this;
                    l.StorageAccess.getValue("isDirty").then(function(n) {
                        n && (l.StorageAccess.getValue("empInfo").then(function(n) {
                            l.employeeBasicInfo = JSON.parse(n)
                        }), l.StorageAccess.setValue("isDirty", !1))
                    }), l.StorageAccess.getValue("profileMenuList").then(function(n) {
                        U.a.indexOf(n, "SWITCH_USER") > -1 ? (l.enableSwitchUser = !0, l.userSwitched = !1) : U.a.indexOf(n, "SWITCH_BACK") > -1 ? (l.enableSwitchUser = !1, l.userSwitched = !0) : I.a.CABuild && (l.enableSwitchUser = !0, l.userSwitched = !0)
                    })
                }, l.prototype.getUserDetails = function() {
                    var l = this;
                    l.settingsProvider.getSettingUserDetails().subscribe(function(n) {
                        n && (l.StorageAccess.setValue("empAllInfo", JSON.stringify(n)), l.employee = n, l.employee.imageUrl = l.employeeBasicInfo.imageUrl, l.employee.displayName = l.employeeBasicInfo.displayName, l.employee.employeeId = l.employeeBasicInfo.employeeId)
                    }, function(n) {
                        l.ReusableUtils.saveErrorLog({}, n), l.ReusableUtils.showHttpError(n)
                    })
                }, l.prototype.navigateToAboutYou = function() {
                    this.nav.push("AboutYouPage", {
                        employee: JSON.stringify(this.employeeBasicInfo)
                    })
                }, l.prototype.navigateToNotificationSettings = function() {
                    this.network.checkInternetConnection() && this.nav.push("NotificationSettingsPage", {
                        employee: JSON.stringify(this.employee)
                    })
                }, l.prototype.changeLanguage = function() {
                    var l = this,
                        n = l.ReusableUtils.presentLoadingCustom();
                    n.present(), l.commonProvider.getLanguage().subscribe(function(e) {
                        l.languagesPresent = U.a.unique(e), l.nav.push("ChangeLanguagePage", {
                            languagesPresent: l.languagesPresent
                        }).then(function() {
                            n.dismiss()
                        })
                    }, function(e) {
                        l.ReusableUtils.saveErrorLog({}, e), l.ReusableUtils.showHttpError(e), n.dismiss()
                    })
                }, l.prototype.navigateToChangePassword = function() {
                    this.nav.push("ChangePasswordPage")
                }, l.prototype.navigateToEmploymentDetails = function() {
                    this.nav.push("EmploymentDetailsPage", {
                        employee: JSON.stringify(this.employee)
                    })
                }, l.prototype.switchUser = function() {
                    this.nav.push("SwitchUserPage")
                }, l.prototype.logout = function() {
                    var l = this;
                    if (l.network.checkInternetConnection()) {
                        l.logOutButton = !0;
                        var n = void 0,
                            e = void 0,
                            t = void 0;
                        n = l.UserUtils.getTranslatedString("logout", {}), e = l.UserUtils.getTranslatedString("LogoutConfirmation", {}), t = l.UserUtils.getTranslatedString("cancel", {});
                        l.alertCtrl.create({
                            title: n,
                            message: e,
                            buttons: [{
                                text: t,
                                role: "cancel",
                                handler: function() {
                                    l.logOutButton = !1
                                }
                            }, {
                                text: n,
                                handler: function() {
                                    l.network.checkInternetConnection() && l.confirmLogout()
                                }
                            }]
                        }).present()
                    }
                }, l.prototype.confirmLogout = function() {
                    var l = this;
                    return new Promise(function(n, e) {
                        var t = l;
                        t.StorageAccess.getValue("employeeInfo").then(function(l) {
                            t.user = l, t.user && t.user.analyticsEnabled && (t.mixPanelService.init(t.user.analyticsToken), t.mixPanelService.identify(t.user.tenantName + "_" + t.user.employeeCode), t.mixPanelService.setPeople({
                                $distinct_id: t.user.tenantName + "_" + t.user.employeeCode,
                                $name: t.user.tenantName + "_" + t.user.employeeCode,
                                $first_name: t.user.tenantName + "_" + t.user.employeeCode,
                                $last_name: t.user.tenantName + "_" + t.user.employeeCode
                            }), t.mixPanelService.track("Submit_Logout", {
                                code: t.user.tenantName + "_" + t.user.employeeCode,
                                firstLogin: t.user.firstLogin
                            }), t.mixPanelService.track("Cancel_Logout", {
                                code: t.user.tenantName + "_" + t.user.employeeCode,
                                firstLogin: t.user.firstLogin
                            }), t.mixPanelService.setUserId(t.user.tenantName + "_" + t.user.employeeCode), t.mixPanelService.logEvent("Submit_Logout", {
                                firstLogin: t.user.firstLogin,
                                platform: "Mobile"
                            }), t.mixPanelService.logEvent("Cancel_Logout", {
                                firstLogin: t.user.firstLogin,
                                platform: "Mobile"
                            }))
                        }), t.StorageAccess.getValue("deviceUUID").then(function(l) {
                            if (l) {
                                var n = JSON.parse(l);
                                t.settingsProvider.logout({
                                    deviceId: n
                                }).subscribe(function(l) {
                                    t.locationTracker.stopTracking(), t.settingsProvider.clearAllData(), t.nav.parent.parent.setRoot("LoginPage")
                                }, function(l) {
                                    t.ReusableUtils.saveErrorLog({}, l)
                                })
                            } else t.UserUtils.getDeviceUniqueId().then(function(l) {
                                t.settingsProvider.logout({
                                    deviceId: l
                                }).subscribe(function(l) {
                                    t.locationTracker.stopTracking(), t.settingsProvider.clearAllData(), t.nav.parent.parent.setRoot("LoginPage")
                                }, function(l) {
                                    t.ReusableUtils.saveErrorLog({}, l)
                                })
                            })
                        }).catch(function(l) {
                            t.logOutButton = !1
                        }), t.StorageAccess.setValue("isLoggedIn", !1)
                    })
                }, l.prototype.mailto = function() {
                    var l = {
                            userName: this.uName,
                            appVersion: this.AppVersionNumber,
                            deviceModel: this.deviceName,
                            userStatus: this.employeeBasicInfo.designationCode.includes("LOW") ? "Low" : "High",
                            email: this.employeeBasicInfo.email
                        },
                        n = JSON.stringify(l),
                        e = window.btoa(n),
                        t = "";
                    t = "ms_MY" == this.translate.currentLang ? I.a.devLink.includes("https://mycloud-b0e684dc-3705-11ec-8d3d-0242ac130003.kpisoft.com") ? "https://mycloud-b0e684dc-3705-11ec-8d3d-0242ac130003.kpisoft.com/help" : "https://mysejahtera.malaysia.gov.my/help" : I.a.devLink.includes("https://mycloud-b0e684dc-3705-11ec-8d3d-0242ac130003.kpisoft.com") ? "https://mycloud-b0e684dc-3705-11ec-8d3d-0242ac130003.kpisoft.com/help_en" : "https://mysejahtera.malaysia.gov.my/help_en", this.ReusableUtils._launchInAppBrowser(t = t + "?data=" + e)
                }, l.prototype.backToMe = function() {
                    var l = this;
                    l.switchUserProvider.switchBack().subscribe(function(n) {
                        l.StorageAccess.removeValue("empId"), l.StorageAccess.removeValue("employeeInfo"), l.StorageAccess.removeValue("empInfo"), l.StorageAccess.setValue("switchUser", !0), l.commonProvider.getTabsInfo().subscribe(function(n) {
                            l.StorageAccess.setValue("isDashboardConfigured", JSON.stringify(n)), l.StorageAccess.setValue("profileMenuList", n), l.eventEmitterService.setMenuListEmitter(n), l.nav.parent.parent.setRoot("TabsPage");
                            var e = l.loadingCtrl.create();
                            e.present(), setTimeout(function() {
                                e.dismiss()
                            }, 5e3)
                        }, function(n) {
                            l.ReusableUtils.saveErrorLog({}, n), l.ReusableUtils.showHttpError(n)
                        })
                    }, function(n) {
                        l.ReusableUtils.saveErrorLog({}, n);
                        var e = n;
                        e = JSON.parse(e.error), l.ReusableUtils.showToast(e.message)
                    })
                }, l.prototype.privacyPolicy = function() {
                    var l = " https://mysejahtera.malaysia.gov.my/privasi_en/";
                    this.ReusableUtils._launchInAppBrowser(l)
                }, l.prototype.navigateToChangeMysjId = function() {
                    this.nav.push("changeMysjIdPage", {
                        empId: this.uName
                    })
                }, l
            }(),
            C = e(219),
            N = e(220),
            T = e(138),
            A = e(176),
            B = e(218),
            j = A.b,
            M = function() {
                return function() {}
            }(),
            O = e(773),
            F = e(774),
            V = e(775),
            E = e(776),
            R = e(777),
            D = e(778),
            x = e(779),
            J = e(780),
            Y = e(781),
            H = e(177),
            q = e(85),
            W = e(81),
            $ = e(56),
            K = e(25),
            z = e(23),
            G = e(3),
            Q = e(48),
            X = e(53),
            Z = e(141),
            ll = e(38),
            nl = e(102),
            el = e(7),
            tl = e(140),
            ul = e(75),
            al = e(18),
            il = e(16),
            ol = e(139),
            sl = e(103),
            rl = e(80),
            cl = e(67),
            _l = e(36),
            ml = e(5),
            gl = e(14),
            pl = e(47),
            dl = e(60),
            hl = e(63),
            fl = e(19),
            bl = e(10),
            vl = e(68),
            yl = e(17),
            kl = e(116),
            Sl = e(84),
            Ll = s._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            Il = s._1("ng-component", w, function(l) {
                return s._29(0, [(l()(), s._5(0, 0, null, null, 2, "ng-component", [], null, null, null, o, Ll)), s._23(512, null, d.a, d.a, [m.a, _.a, p.a, vl.a, g.a]), s._4(2, 49152, null, 0, w, [f.a, S.a, p.a, il.a, yl.a, _.a, g.a, b.a, m.a, r.j, G.a, d.a, h.a, kl.a, v.a, y.a, el.a, k.a, c.a, L.a, Sl.a], null, null)], null, null)
            }, {}, {}, []),
            Pl = e(30),
            Ul = e(221),
            wl = e(402),
            Cl = e(222),
            Nl = e(158);
        e.d(n, "SettingsPageModuleNgFactory", function() {
            return Tl
        });
        var Tl = s._2(M, [], function(l) {
            return s._13([s._14(512, s.i, s.Y, [
                [8, [O.a, F.a, V.a, E.a, R.a, D.a, x.a, J.a, Y.a, Il]],
                [3, s.i], s.w
            ]), s._14(4608, bl.l, bl.k, [s.v, [2, bl.u]]), s._14(4608, Pl.u, Pl.u, []), s._14(4608, Pl.d, Pl.d, []), s._14(5120, r.f, j, [T.c]), s._14(4608, r.c, r.e, []), s._14(4608, r.h, r.d, []), s._14(4608, r.b, r.a, []), s._14(4608, r.j, r.j, [r.m, r.f, r.c, r.h, r.b, r.k, r.l]), s._14(4608, k.a, k.a, []), s._14(512, bl.b, bl.b, []), s._14(512, Ul.a, Ul.a, []), s._14(512, Pl.s, Pl.s, []), s._14(512, Pl.g, Pl.g, []), s._14(512, Pl.q, Pl.q, []), s._14(512, wl.a, wl.a, []), s._14(512, N.a, N.a, []), s._14(512, Cl.a, Cl.a, []), s._14(512, r.g, r.g, []), s._14(512, B.a, B.a, []), s._14(512, C.a, C.a, []), s._14(512, wl.b, wl.b, []), s._14(512, M, M, []), s._14(256, r.l, void 0, []), s._14(256, r.k, void 0, []), s._14(256, Nl.a, w, [])])
        })
    }
});