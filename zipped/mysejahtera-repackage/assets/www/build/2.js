webpackJsonp([2], {
    1298: function(l, n, e) {
        "use strict";

        function u(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), V._27(1, null, ["", ""]))], null, function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.userUtils.getInitials(e.displayName))
            })
        }

        function t(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, e) {
                var u = !0;
                if ("load" === n) {
                    u = !1 !== V._17(l, 1).onLoad() && u
                }
                if ("error" === n) {
                    u = !1 !== V._17(l, 1).onError() && u
                }
                return u
            }, null, null)), V._4(1, 540672, null, 0, Al.a, [Nl.a, V.k, Rl.a], {
                cache: [0, "cache"]
            }, null)], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.userUtils.getImagePath(e.imageUrl))
            }, function(l, n) {
                l(n, 0, 0, "teamlistImg_" + n.component.employee.employeeId)
            })
        }

        function r(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "ion-icon", [
                ["item-end", ""],
                ["name", "ios-arrow-forward"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), V._4(1, 147456, [
                [3, 4]
            ], 0, yl.a, [_l.a, V.k, V.F], {
                name: [0, "name"]
            }, null)], function(l, n) {
                l(n, 1, 0, "ios-arrow-forward")
            }, function(l, n) {
                l(n, 0, 0, V._17(n, 1)._hidden)
            })
        }

        function i(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 29, "ion-card", [], null, null, null, null, null)), V._4(1, 16384, null, 0, Ll.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n    "])), (l()(), V._5(3, 0, null, null, 25, "ion-item", [
                ["class", "item item-block"]
            ], null, null, null, Ml.b, Ml.a)), V._4(4, 1097728, null, 3, Bl.a, [Ul.a, _l.a, V.k, V.F, [2, jl.a]], null, null), V._25(335544320, 1, {
                contentLabel: 0
            }), V._25(603979776, 2, {
                _buttons: 1
            }), V._25(603979776, 3, {
                _icons: 1
            }), V._4(8, 16384, null, 0, Fl.a, [], null, null), (l()(), V._27(-1, 2, ["\n        "])), (l()(), V._5(10, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), V._4(11, 16384, null, 0, Hl.a, [], null, null), (l()(), V._27(-1, null, ["\n        "])), (l()(), V._0(16777216, null, null, 1, null, u)), V._4(14, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n        "])), (l()(), V._0(16777216, null, null, 1, null, t)), V._4(17, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n        "])), (l()(), V._27(-1, 2, ["\n        "])), (l()(), V._5(20, 0, null, 2, 0, "h5", [
                ["class", "bold"],
                ["text-wrap", ""]
            ], [
                [8, "id", 0],
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), V._27(-1, 2, ["\n        "])), (l()(), V._5(22, 0, null, 2, 1, "p", [
                ["text-wrap", ""]
            ], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), V._27(23, null, ["", ""])), (l()(), V._27(-1, 2, ["\n        "])), (l()(), V._27(-1, 2, ["\n        "])), (l()(), V._0(16777216, null, 4, 1, null, r)), V._4(27, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, 2, ["\n    "])), (l()(), V._27(-1, null, ["\n"]))], function(l, n) {
                var e = n.component;
                l(n, 14, 0, !e.imageUrl);
                l(n, 17, 0, e.imageUrl);
                l(n, 27, 0, "COVID" != e.myAppName && "COVID_UAE" != e.myAppName)
            }, function(l, n) {
                var e = n.component;
                l(n, 20, 0, "teamlistDispName_" + e.employee.employeeId, e.displayName);
                l(n, 22, 0, "teamlistDesg_" + e.employee.employeeId);
                l(n, 23, 0, e.designation)
            })
        }

        function o(l) {
            return V._29(0, [(l()(), V._0(16777216, null, null, 1, null, i)), V._4(1, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n\n\n"]))], function(l, n) {
                l(n, 1, 0, n.component.employee)
            }, null)
        }

        function a(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 22, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, ol.b, ol.a)), V._4(1, 49152, null, 0, al.a, [sl.a, [2, cl.a],
                [2, fl.a], _l.a, V.k, V.F
            ], {
                color: [0, "color"]
            }, null), (l()(), V._27(-1, 3, ["\n    "])), (l()(), V._5(3, 0, null, 3, 6, "ion-title", [
                ["class", "title-navbar"]
            ], null, null, null, dl.b, dl.a)), V._4(4, 49152, null, 0, gl.a, [_l.a, V.k, V.F, [2, hl.a],
                [2, al.a]
            ], null, null), (l()(), V._27(-1, 0, ["\n      "])), (l()(), V._5(6, 0, null, 0, 2, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), V._27(7, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, 0, ["\n    "])), (l()(), V._27(-1, 3, ["\n    "])), (l()(), V._5(11, 0, null, 2, 10, "ion-buttons", [
                ["end", ""]
            ], null, null, null, null, null)), V._4(12, 16384, null, 1, ml.a, [_l.a, V.k, V.F, [2, hl.a],
                [2, al.a]
            ], null, null), V._25(603979776, 2, {
                _buttons: 1
            }), (l()(), V._27(-1, null, ["\n      "])), (l()(), V._5(15, 0, null, null, 5, "button", [
                ["icon-only", ""],
                ["ion-button", ""],
                ["name", "Tap_Settings"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var u = !0;
                if ("click" === n) {
                    u = !1 !== l.component.openMoreMenu() && u
                }
                return u
            }, pl.b, pl.a)), V._4(16, 1097728, [
                [2, 4]
            ], 0, vl.a, [
                [8, ""], _l.a, V.k, V.F
            ], null, null), (l()(), V._27(-1, 0, ["\n        "])), (l()(), V._5(18, 0, null, 0, 1, "ion-icon", [
                ["name", "md-menu"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), V._4(19, 147456, null, 0, yl.a, [_l.a, V.k, V.F], {
                name: [0, "name"]
            }, null), (l()(), V._27(-1, 0, ["\n      "])), (l()(), V._27(-1, null, ["\n    "])), (l()(), V._27(-1, 3, ["\n  "]))], function(l, n) {
                l(n, 1, 0, "theme");
                l(n, 19, 0, "md-menu")
            }, function(l, n) {
                l(n, 0, 0, V._17(n, 1)._hidden, V._17(n, 1)._sbPadding);
                l(n, 6, 0, "profileHeadingNotTab");
                l(n, 7, 0, V._28(n, 7, 0, V._17(n, 8).transform("profile")));
                l(n, 15, 0, "profileModalClick");
                l(n, 18, 0, V._17(n, 19)._hidden)
            })
        }

        function s(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 19, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, ol.b, ol.a)), V._4(1, 49152, null, 0, al.a, [sl.a, [2, cl.a],
                [2, fl.a], _l.a, V.k, V.F
            ], {
                color: [0, "color"]
            }, null), (l()(), V._27(-1, 3, ["\n    "])), (l()(), V._5(3, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, dl.b, dl.a)), V._4(4, 49152, null, 0, gl.a, [_l.a, V.k, V.F, [2, hl.a],
                [2, al.a]
            ], null, null), (l()(), V._27(5, 0, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, 3, ["\n    "])), (l()(), V._5(8, 0, null, 2, 10, "ion-buttons", [
                ["end", ""]
            ], null, null, null, null, null)), V._4(9, 16384, null, 1, ml.a, [_l.a, V.k, V.F, [2, hl.a],
                [2, al.a]
            ], null, null), V._25(603979776, 3, {
                _buttons: 1
            }), (l()(), V._27(-1, null, ["\n      "])), (l()(), V._5(12, 0, null, null, 5, "button", [
                ["icon-only", ""],
                ["ion-button", ""],
                ["name", "Tap_Settings"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var u = !0;
                if ("click" === n) {
                    u = !1 !== l.component.openMoreMenu() && u
                }
                return u
            }, pl.b, pl.a)), V._4(13, 1097728, [
                [3, 4]
            ], 0, vl.a, [
                [8, ""], _l.a, V.k, V.F
            ], null, null), (l()(), V._27(-1, 0, ["\n        "])), (l()(), V._5(15, 0, null, 0, 1, "ion-icon", [
                ["name", "md-menu"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), V._4(16, 147456, null, 0, yl.a, [_l.a, V.k, V.F], {
                name: [0, "name"]
            }, null), (l()(), V._27(-1, 0, ["\n      "])), (l()(), V._27(-1, null, ["\n    "])), (l()(), V._27(-1, 3, ["\n  "]))], function(l, n) {
                l(n, 1, 0, "theme");
                l(n, 16, 0, "md-menu")
            }, function(l, n) {
                l(n, 0, 0, V._17(n, 1)._hidden, V._17(n, 1)._sbPadding);
                l(n, 3, 0, "profileHeadingNotTab");
                l(n, 5, 0, V._28(n, 5, 0, V._17(n, 6).transform("profile")));
                l(n, 12, 0, "profileModalClick");
                l(n, 15, 0, V._17(n, 16)._hidden)
            })
        }

        function c(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 8, "ion-header", [], null, null, null, null, null)), V._4(1, 16384, null, 0, bl.a, [_l.a, V.k, V.F, [2, cl.a]], null, null), (l()(), V._27(-1, null, ["\n  "])), (l()(), V._0(16777216, null, null, 1, null, a)), V._4(4, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n  "])), (l()(), V._0(16777216, null, null, 1, null, s)), V._4(7, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n"]))], function(l, n) {
                var e = n.component;
                l(n, 4, 0, !e.scrolling);
                l(n, 7, 0, e.scrolling)
            }, null)
        }

        function f(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), V._4(1, 16384, null, 0, bl.a, [_l.a, V.k, V.F, [2, cl.a]], null, null), (l()(), V._27(-1, null, ["\n  "])), (l()(), V._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, ol.b, ol.a)), V._4(4, 49152, null, 0, al.a, [sl.a, [2, cl.a],
                [2, fl.a], _l.a, V.k, V.F
            ], {
                color: [0, "color"]
            }, null), (l()(), V._27(-1, 3, ["\n    "])), (l()(), V._5(6, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, dl.b, dl.a)), V._4(7, 49152, null, 0, gl.a, [_l.a, V.k, V.F, [2, hl.a],
                [2, al.a]
            ], null, null), (l()(), V._27(8, 0, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, 3, ["\n  "])), (l()(), V._27(-1, null, ["\n"]))], function(l, n) {
                l(n, 4, 0, "theme")
            }, function(l, n) {
                l(n, 3, 0, V._17(n, 4)._hidden, V._17(n, 4)._sbPadding);
                l(n, 6, 0, "profileHeadingNotTab");
                l(n, 8, 0, V._28(n, 8, 0, V._17(n, 9).transform("status")))
            })
        }

        function _(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 8, null, null, null, null, null, null, null)), (l()(), V._27(-1, null, ["\n    "])), (l()(), V._5(2, 0, null, null, 5, "ion-refresher", [], [
                [2, "refresher-active", null],
                [4, "top", null]
            ], [
                [null, "ionRefresh"]
            ], function(l, n, e) {
                var u = !0;
                if ("ionRefresh" === n) {
                    u = !1 !== l.component.doRefresh(e) && u
                }
                return u
            }, null, null)), V._4(3, 212992, null, 0, Il.a, [Cl.a, Sl.a, V.y, El.l], null, {
                ionRefresh: "ionRefresh"
            }), (l()(), V._27(-1, null, ["\n      "])), (l()(), V._5(5, 0, null, null, 1, "ion-refresher-content", [], [
                [1, "state", 0]
            ], null, null, Pl.b, Pl.a)), V._4(6, 114688, null, 0, Tl.a, [Il.a, _l.a], null, null), (l()(), V._27(-1, null, ["\n    "])), (l()(), V._27(-1, null, ["\n  "]))], function(l, n) {
                l(n, 3, 0), l(n, 6, 0)
            }, function(l, n) {
                l(n, 2, 0, "inactive" !== V._17(n, 3).state, V._17(n, 3)._top);
                l(n, 5, 0, V._17(n, 6).r.state)
            })
        }

        function d(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 10, "ion-card", [
                ["style", "border: solid 2px; border-left: solid 8px"],
                ["text-center", ""]
            ], null, null, null, null, null)), V._4(1, 278528, null, 0, wl.m, [V.u, V.k, V.G], {
                ngStyle: [0, "ngStyle"]
            }, null), V._21(2, {
                "border-color": 0
            }), V._4(3, 16384, null, 0, Ll.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(5, 0, null, null, 4, "ion-card-content", [], null, null, null, null, null)), V._4(6, 16384, null, 0, kl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(8, 0, null, null, 0, "p", [
                ["text-wrap", ""]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._27(-1, null, ["\n            "]))], function(l, n) {
                l(n, 1, 0, l(n, 2, 0, n.component.user.hasHighRiskDependents ? "red" : "green"))
            }, function(l, n) {
                l(n, 8, 0, n.component.getDependentMessage())
            })
        }

        function g(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 44, "ion-card", [
                ["class", "covidLabResult"]
            ], null, null, null, null, null)), V._4(1, 278528, null, 0, wl.m, [V.u, V.k, V.G], {
                ngStyle: [0, "ngStyle"]
            }, null), V._21(2, {
                "background-color": 0
            }), V._4(3, 16384, null, 0, Ll.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(5, 0, null, null, 38, "ion-card-content", [
                ["class", "pb-2"]
            ], null, null, null, null, null)), V._4(6, 16384, null, 0, kl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(8, 0, null, null, 10, "ion-row", [
                ["class", "mb-3 row"],
                ["justify-content-between", ""]
            ], null, null, null, null, null)), V._4(9, 16384, null, 0, Dl.a, [], null, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(11, 0, null, null, 4, "p", [
                ["class", "covidTag mb-4 bold"]
            ], null, null, null, null, null)), V._4(12, 278528, null, 0, wl.m, [V.u, V.k, V.G], {
                ngStyle: [0, "ngStyle"]
            }, null), V._21(13, {
                color: 0
            }), (l()(), V._27(14, null, ["\n                    ", "\n                  "])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(17, 0, null, null, 0, "img", [
                ["src", "/assets/imgs/audit-icons/Lambang_Malaysia.svg"],
                ["style", "width: 50px"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(20, 0, null, null, 18, "ion-row", [
                ["class", "row"]
            ], null, null, null, null, null)), V._4(21, 16384, null, 0, Dl.a, [], null, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(23, 0, null, null, 7, "ion-col", [
                ["class", "col"],
                ["style", "width: 60%"]
            ], null, null, null, null, null)), V._4(24, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(26, 0, null, null, 3, "p", [
                ["class", "text-white small"]
            ], null, null, null, null, null)), (l()(), V._27(27, null, ["\n                      ", ": ", "\n                    "])), V._20(131072, Q.i, [Q.j, V.g]), V._22(29, 2), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(32, 0, null, null, 5, "ion-col", [
                ["class", "row align-items-center col"],
                ["justify-content-end", ""]
            ], null, null, null, null, null)), V._4(33, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(35, 0, null, null, 1, "h1", [
                ["class", "text-white bold"]
            ], null, null, null, null, null)), (l()(), V._27(36, null, ["", ""])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(40, 0, null, null, 2, "p", [
                ["class", "small mt-5"],
                ["text-right", ""]
            ], null, null, null, null, null)), (l()(), V._27(41, null, ["\n                  ", ": MKAK, KKM\n                "])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._27(-1, null, ["\n            "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, l(n, 2, 0, "NEGATIVE" === e.labTest.testResult ? "#70ad46" : "#f22b43"));
                l(n, 12, 0, l(n, 13, 0, "NEGATIVE" === e.labTest.testResult ? "#70ad46" : "#f22b43"))
            }, function(l, n) {
                var e = n.component;
                l(n, 14, 0, V._28(n, 14, 0, V._17(n, 15).transform(e.labTest.testResult)));
                l(n, 27, 0, V._28(n, 27, 0, V._17(n, 28).transform("confirmationDate")), V._28(n, 27, 1, l(n, 29, 0, V._17(n.parent.parent.parent, 0), e.labTest.pcrDate, "dd/MM/yyyy")));
                l(n, 36, 0, e.labTest.labTestType);
                l(n, 41, 0, V._28(n, 41, 0, V._17(n, 42).transform("source")))
            })
        }

        function h(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 2, "p", [
                ["class", "small text-white fs-8"],
                ["ext-wrap", ""]
            ], null, null, null, null, null)), (l()(), V._27(1, null, ["\n                  ", "\n                "])), V._20(131072, Q.i, [Q.j, V.g])], null, function(l, n) {
                l(n, 1, 0, V._28(n, 1, 0, V._17(n, 2).transform("sec11")))
            })
        }

        function m(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 2, "p", [
                ["class", "small text-white fs-8"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), V._27(1, null, ["\n                  ", "\n                "])), V._20(131072, Q.i, [Q.j, V.g])], null, function(l, n) {
                l(n, 1, 0, V._28(n, 1, 0, V._17(n, 2).transform("sec")))
            })
        }

        function p(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 0, "div", [
                ["class", "imgCompletedWhite"]
            ], null, null, null, null, null))], null, null)
        }

        function v(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 9, "ion-col", [
                ["class", "mb-3 col"],
                ["col-12", ""]
            ], null, null, null, null, null)), V._4(1, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(3, 0, null, null, 2, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), V._27(4, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(7, 0, null, null, 1, "p", [
                ["class", "small text-black"]
            ], null, null, null, null, null)), (l()(), V._27(8, null, ["", ""])), (l()(), V._27(-1, null, ["\n                  "]))], null, function(l, n) {
                var e = n.component;
                l(n, 4, 0, V._28(n, 4, 0, V._17(n, 5).transform("location")));
                l(n, 8, 0, e.HSO.location)
            })
        }

        function y(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 95, "ion-card", [
                ["class", "hso-card"]
            ], null, null, null, null, null)), V._4(1, 16384, null, 0, Ll.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(3, 0, null, null, 21, "ion-card-header", [
                ["class", "completedWhite"],
                ["text-center", ""]
            ], null, null, null, null, null)), V._4(4, 16384, null, 0, xl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(6, 0, null, null, 0, "img", [
                ["class", "mx-auto mb-2"],
                ["src", "assets/img/health_ministry.svg"],
                ["style", "width: 80px"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(8, 0, null, null, 2, "p", [
                ["class", "text-white mb-3 fs-10"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), V._27(9, null, ["\n                  ", "\n                "])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(12, 0, null, null, 2, "h3", [
                ["class", "bold text-white"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), V._27(13, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._0(16777216, null, null, 1, null, h)), V._4(17, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._0(16777216, null, null, 1, null, m)), V._4(20, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._0(16777216, null, null, 1, null, p)), V._4(23, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(26, 0, null, null, 64, "ion-card-content", [], null, null, null, null, null)), V._4(27, 16384, null, 0, kl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(29, 0, null, null, 60, "ion-row", [
                ["class", "row"]
            ], null, null, null, null, null)), V._4(30, 16384, null, 0, Dl.a, [], null, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._0(16777216, null, null, 1, null, v)), V._4(33, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(35, 0, null, null, 9, "ion-col", [
                ["class", "mb-3 col"],
                ["col-6", ""]
            ], null, null, null, null, null)), V._4(36, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(38, 0, null, null, 2, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), V._27(39, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(42, 0, null, null, 1, "p", [
                ["class", "small text-black"]
            ], null, null, null, null, null)), (l()(), V._27(43, null, ["", ""])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(46, 0, null, null, 9, "ion-col", [
                ["class", "mb-3 col"],
                ["col-6", ""],
                ["text-right", ""]
            ], null, null, null, null, null)), V._4(47, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(49, 0, null, null, 2, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), V._27(50, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(53, 0, null, null, 1, "p", [
                ["class", "small text-black"]
            ], null, null, null, null, null)), (l()(), V._27(54, null, ["", ""])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(57, 0, null, null, 9, "ion-col", [
                ["class", "mb-3 col"],
                ["col-6", ""]
            ], null, null, null, null, null)), V._4(58, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(60, 0, null, null, 2, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), V._27(61, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(64, 0, null, null, 1, "p", [
                ["class", "small text-black"]
            ], null, null, null, null, null)), (l()(), V._27(65, null, ["", ""])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(68, 0, null, null, 9, "ion-col", [
                ["class", "mb-3 col"],
                ["col-6", ""],
                ["text-right", ""]
            ], null, null, null, null, null)), V._4(69, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(71, 0, null, null, 2, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), V._27(72, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(75, 0, null, null, 1, "p", [
                ["class", "small text-black"]
            ], null, null, null, null, null)), (l()(), V._27(76, null, ["", ""])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(79, 0, null, null, 9, "ion-col", [
                ["class", "col"],
                ["col-12", ""]
            ], null, null, null, null, null)), V._4(80, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(82, 0, null, null, 2, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), V._27(83, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(86, 0, null, null, 1, "p", [
                ["class", "small text-black"]
            ], null, null, null, null, null)), (l()(), V._27(87, null, ["", ""])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(92, 0, null, null, 2, "ion-card-content", [
                ["class", "footer"],
                ["text-center", ""]
            ], null, null, null, null, null)), V._4(93, 16384, null, 0, kl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(94, null, ["\n                ", "\n              "])), (l()(), V._27(-1, null, ["\n            "]))], function(l, n) {
                var e = n.component;
                l(n, 17, 0, e.HSO.isSec11);
                l(n, 20, 0, !e.HSO.isSec11);
                l(n, 23, 0, e.HSO.completed);
                l(n, 33, 0, !e.HSO.isSec11)
            }, function(l, n) {
                var e = n.component;
                l(n, 9, 0, V._28(n, 9, 0, V._17(n, 10).transform("moh")));
                l(n, 13, 0, V._28(n, 13, 0, V._17(n, 14).transform("hso")));
                l(n, 39, 0, V._28(n, 39, 0, V._17(n, 40).transform("name")));
                l(n, 43, 0, e.HSO.name);
                l(n, 50, 0, V._28(n, 50, 0, V._17(n, 51).transform("mysjId")));
                l(n, 54, 0, e.HSO.contact);
                l(n, 61, 0, V._28(n, 61, 0, V._17(n, 62).transform("timeStamp")));
                l(n, 65, 0, e.HSO.createdDate);
                l(n, 72, 0, V._28(n, 72, 0, V._17(n, 73).transform("IC")));
                l(n, 76, 0, e.HSO.passportNumber);
                l(n, 83, 0, V._28(n, 83, 0, V._17(n, 84).transform("adr")));
                l(n, 87, 0, e.HSO.address || "-");
                l(n, 94, 0, e.duration)
            })
        }

        function b(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 46, "div", [
                ["class", "exemptedCertification"]
            ], null, null, null, null, null)), V._4(1, 278528, null, 0, wl.h, [V.t, V.u, V.k, V.G], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(3, 0, null, null, 0, "img", [
                ["class", "logo"],
                ["src", "assets/img/health_ministry.svg"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(5, 0, null, null, 31, "ion-card", [
                ["class", "first"]
            ], null, null, null, null, null)), V._4(6, 16384, null, 0, Ll.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(8, 0, null, null, 27, "ion-card-content", [], null, null, null, null, null)), V._4(9, 16384, null, 0, kl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._5(11, 0, null, null, 23, "ion-row", [
                ["class", "row"]
            ], null, null, null, null, null)), V._4(12, 16384, null, 0, Dl.a, [], null, null), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._5(14, 0, null, null, 19, "ion-col", [
                ["class", "col"],
                ["col-12", ""],
                ["text-center", ""]
            ], null, null, null, null, null)), V._4(15, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                              "])), (l()(), V._5(17, 0, null, null, 2, "h1", [
                ["class", "bold mb-3"]
            ], null, null, null, null, null)), (l()(), V._27(18, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                              "])), (l()(), V._5(21, 0, null, null, 2, "h3", [
                ["class", "mb-3"]
            ], null, null, null, null, null)), (l()(), V._27(22, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                              "])), (l()(), V._5(25, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                              "])), (l()(), V._5(27, 0, null, null, 0, "h3", [
                ["class", "bold mb-1"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), V._27(-1, null, ["\n                              "])), (l()(), V._5(29, 0, null, null, 0, "h3", [
                ["class", "mb-1"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), V._27(-1, null, ["\n                              "])), (l()(), V._5(31, 0, null, null, 1, "h4", [
                ["class", "mb-4"]
            ], null, null, null, null, null)), (l()(), V._27(32, null, ["D.O.B: ", " "])), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(38, 0, null, null, 7, "ion-card", [
                ["class", "second"]
            ], null, null, null, null, null)), V._4(39, 16384, null, 0, Ll.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(41, 0, null, null, 3, "ion-card-content", [], null, null, null, null, null)), V._4(42, 16384, null, 0, kl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(43, null, [" ", " "])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._27(-1, null, ["\n          "]))], function(l, n) {
                l(n, 1, 0, "exemptedCertification", n.component.vaccineCertificate.yellow ? "" : "white")
            }, function(l, n) {
                var e = n.component;
                l(n, 18, 0, V._28(n, 18, 0, V._17(n, 19).transform("exemptionCertificate")));
                l(n, 22, 0, V._28(n, 22, 0, V._17(n, 23).transform("covidVaccination")));
                l(n, 27, 0, e.vaccineCertificate.name);
                l(n, 29, 0, e.vaccineCertificate.icOrPassport);
                l(n, 32, 0, e.vaccineCertificate.dateOfBirth);
                l(n, 43, 0, V._28(n, 43, 0, V._17(n, 44).transform("exemptedFromVaccineNote")))
            })
        }

        function w(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 2, "h3", [
                ["class", "mb-2"]
            ], null, null, null, null, null)), (l()(), V._27(1, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g])], null, function(l, n) {
                l(n, 1, 0, V._28(n, 1, 0, V._17(n, 2).transform("status")))
            })
        }

        function I(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 20, "div", [
                ["class", "dose"],
                ["text-left", ""]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                            "])), (l()(), V._5(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), V._27(3, null, ["", ": "])), (l()(), V._27(-1, null, ["\n                            "])), (l()(), V._5(5, 0, null, null, 2, "p", [
                ["class", "mt-2"]
            ], null, null, null, null, null)), (l()(), V._27(6, null, ["", ": ", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                            "])), (l()(), V._5(9, 0, null, null, 2, "p", [
                ["class", "mt-1"]
            ], null, null, null, null, null)), (l()(), V._27(10, null, ["", ": ", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                            "])), (l()(), V._5(13, 0, null, null, 2, "p", [
                ["class", "mt-1"]
            ], null, null, null, null, null)), (l()(), V._27(14, null, ["", ": ", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                            "])), (l()(), V._5(17, 0, null, null, 2, "p", [
                ["class", "mt-1"]
            ], null, null, null, null, null)), (l()(), V._27(18, null, ["", ": ", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                          "]))], null, function(l, n) {
                l(n, 3, 0, n.context.$implicit.title);
                l(n, 6, 0, V._28(n, 6, 0, V._17(n, 7).transform("date")), n.context.$implicit.dosageDate);
                l(n, 10, 0, V._28(n, 10, 0, V._17(n, 11).transform("manufacturer")), n.context.$implicit.productName);
                l(n, 14, 0, V._28(n, 14, 0, V._17(n, 15).transform("facility")), n.context.$implicit.facilityName);
                l(n, 18, 0, V._28(n, 18, 0, V._17(n, 19).transform("batch")), n.context.$implicit.batchNumber)
            })
        }

        function C(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "b", [
                ["class", "mb-3"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["Dose 1 of 1"]))], null, null)
        }

        function S(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "b", [
                ["class", "mb-3"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["Booster Dose"]))], null, null)
        }

        function E(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "b", [
                ["class", "mb-3"]
            ], null, null, null, null, null)), (l()(), V._27(1, null, ["Dose ", " of 2"]))], null, function(l, n) {
                l(n, 1, 0, n.parent.context.index + 1)
            })
        }

        function P(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "b", [
                ["class", "mb-3"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["Booster Dose"]))], null, null)
        }

        function T(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 15, "div", [
                ["class", "doseQR"],
                ["text-left", ""]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                            "])), (l()(), V._0(16777216, null, null, 1, null, C)), V._4(3, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                            "])), (l()(), V._0(16777216, null, null, 1, null, S)), V._4(6, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n\n                            "])), (l()(), V._0(16777216, null, null, 1, null, E)), V._4(9, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                            "])), (l()(), V._0(16777216, null, null, 1, null, P)), V._4(12, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                            "])), (l()(), V._5(14, 0, null, null, 0, "img", [
                ["class", "mx-auto"],
                ["style", "width: 125px"]
            ], [
                [8, "src", 4]
            ], null, null, null, null)), (l()(), V._27(-1, null, ["\n                          "]))], function(l, n) {
                var e = n.component;
                l(n, 3, 0, n.context.index < 1 && e.vaccineCertificate.singleDose);
                l(n, 6, 0, n.context.index >= 1 && e.vaccineCertificate.singleDose);
                l(n, 9, 0, n.context.index <= 1 && !e.vaccineCertificate.singleDose);
                l(n, 12, 0, n.context.index > 1 && !e.vaccineCertificate.singleDose)
            }, function(l, n) {
                l(n, 14, 0, n.context.$implicit)
            })
        }

        function L(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 6, "div", [
                ["class", "vaccineQR"]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var u = !0;
                if ("click" === n) {
                    u = !1 !== l.component.getQRCode() && u
                }
                return u
            }, null, null)), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._5(2, 0, null, null, 0, "img", [
                ["class", "mx-auto"],
                ["src", "assets/imgs/audit-icons/sampleQRCode.png"],
                ["style", "width: 30px"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._5(4, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), V._27(-1, null, ["Show QR"])), (l()(), V._27(-1, null, ["\n                        "]))], null, null)
        }

        function k(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), V._27(-1, null, ["Download"]))], null, null)
        }

        function D(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), V._27(-1, null, ["Generate"]))], null, null)
        }

        function O(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 9, "div", [
                ["class", "vaccineQR"]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var u = !0;
                if ("click" === n) {
                    u = !1 !== l.component.downloadVaccinationCert() && u
                }
                return u
            }, null, null)), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._5(2, 0, null, null, 0, "img", [
                ["class", "mx-auto"],
                ["src", "assets/imgs/audit-icons/pdf.png"],
                ["style", "width: 30px"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._0(16777216, null, null, 1, null, k)), V._4(5, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._0(16777216, null, null, 1, null, D)), V._4(8, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                        "]))], function(l, n) {
                var e = n.component;
                l(n, 5, 0, e.vaccineCertificate.vaccinationCertGenerated);
                l(n, 8, 0, !e.vaccineCertificate.vaccinationCertGenerated)
            }, null)
        }

        function x(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 6, "div", [
                ["class", "vaccineQR"]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var u = !0,
                    t = l.component;
                if ("click" === n) {
                    u = !1 !== (!(t.showQR = null) && (t.vaccineQrCodes = [])) && u
                }
                return u
            }, null, null)), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._5(2, 0, null, null, 0, "img", [
                ["class", "mx-auto"],
                ["src", "assets/imgs/audit-icons/previous.svg"],
                ["style", "width: 30px"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._5(4, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), V._27(-1, null, ["Back"])), (l()(), V._27(-1, null, ["\n                    "]))], null, null)
        }

        function A(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 115, "div", [
                ["class", "vaccineCertification"]
            ], null, null, null, null, null)), V._4(1, 278528, null, 0, wl.h, [V.t, V.u, V.k, V.G], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (l()(), V._27(-1, null, ["\n            "])), (l()(), V._5(3, 0, null, null, 0, "img", [
                ["class", "logo"],
                ["src", "assets/img/health_ministry.svg"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n            "])), (l()(), V._5(5, 0, null, null, 109, "ion-card", [], null, null, null, null, null)), V._4(6, 16384, null, 0, Ll.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(8, 0, null, null, 105, "ion-card-content", [], null, null, null, null, null)), V._4(9, 16384, null, 0, kl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(11, 0, null, null, 101, "ion-row", [
                ["class", "row"]
            ], null, null, null, null, null)), V._4(12, 16384, null, 0, Dl.a, [], null, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(14, 0, null, null, 15, "ion-col", [
                ["class", "col"],
                ["col-12", ""],
                ["text-center", ""]
            ], null, null, null, null, null)), V._4(15, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(17, 0, null, null, 2, "h1", [
                ["class", "bold mb-1"]
            ], null, null, null, null, null)), (l()(), V._27(18, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(21, 0, null, null, 2, "h3", [
                ["class", "mb-2"]
            ], null, null, null, null, null)), (l()(), V._27(22, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._0(16777216, null, null, 1, null, w)), V._4(26, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(28, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n\n                  "])), (l()(), V._5(31, 0, null, null, 47, "div", [
                ["class", "flip-card"]
            ], null, null, null, null, null)), V._4(32, 278528, null, 0, wl.m, [V.u, V.k, V.G], {
                ngStyle: [0, "ngStyle"]
            }, null), V._21(33, {
                height: 0
            }), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(35, 0, null, null, 42, "div", [
                ["class", "flip-card-inner"]
            ], null, null, null, null, null)), V._4(36, 278528, null, 0, wl.m, [V.u, V.k, V.G], {
                ngStyle: [0, "ngStyle"]
            }, null), V._21(37, {
                transform: 0
            }), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._5(39, 0, null, null, 20, "div", [
                ["class", "flip-card-front"]
            ], null, null, null, null, null)), V._4(40, 278528, null, 0, wl.m, [V.u, V.k, V.G], {
                ngStyle: [0, "ngStyle"]
            }, null), V._21(41, {
                opacity: 0
            }), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._5(43, 0, null, null, 9, "ion-col", [
                ["class", "col"],
                ["col-12", ""],
                ["text-center", ""]
            ], null, null, null, null, null)), V._4(44, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._5(46, 0, null, null, 0, "h3", [
                ["class", "bold mt-1 mb-1"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._5(48, 0, null, null, 0, "h3", [
                ["class", "mb-1"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._5(50, 0, null, null, 1, "h4", [
                ["class", "mb-4"]
            ], null, null, null, null, null)), (l()(), V._27(51, null, ["D.O.B: ", " "])), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._27(-1, null, ["\n                        \n                        "])), (l()(), V._5(54, 0, null, null, 4, "div", [
                ["class", "scrollbox"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._0(16777216, null, null, 1, null, I)), V._4(57, 802816, null, 0, wl.i, [V.O, V.L, V.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._27(-1, null, ["\n\n                      "])), (l()(), V._5(61, 0, null, null, 15, "div", [
                ["class", "flip-card-back"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._5(63, 0, null, null, 6, "ion-col", [
                ["class", "col"],
                ["col-12", ""],
                ["text-center", ""]
            ], null, null, null, null, null)), V._4(64, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._5(66, 0, null, null, 2, "p", [
                ["class", ""]
            ], null, null, null, null, null)), (l()(), V._27(67, null, ["", ""])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._5(71, 0, null, null, 4, "div", [
                ["class", "scrollbox"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n                          "])), (l()(), V._0(16777216, null, null, 1, null, T)), V._4(74, 802816, null, 0, wl.i, [V.O, V.L, V.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n\n                  "])), (l()(), V._5(80, 0, null, null, 31, "ion-col", [
                ["class", "col"],
                ["col-12", ""]
            ], null, null, null, null, null)), V._4(81, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._5(83, 0, null, null, 24, "ion-row", [
                ["class", "row"]
            ], null, null, null, null, null)), V._4(84, 16384, null, 0, Dl.a, [], null, null), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._5(86, 0, null, null, 2, "ion-col", [
                ["class", "col"],
                ["col-3", ""]
            ], null, null, null, null, null)), V._4(87, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._5(90, 0, null, null, 5, "ion-col", [
                ["class", "col"],
                ["col-3", ""]
            ], null, null, null, null, null)), V._4(91, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._0(16777216, null, null, 1, null, L)), V._4(94, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._5(97, 0, null, null, 5, "ion-col", [
                ["class", "col"],
                ["col-3", ""]
            ], null, null, null, null, null)), V._4(98, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._0(16777216, null, null, 1, null, O)), V._4(101, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._5(104, 0, null, null, 2, "ion-col", [
                ["class", "col"],
                ["col-3", ""]
            ], null, null, null, null, null)), V._4(105, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._27(-1, null, ["\n\n                    "])), (l()(), V._0(16777216, null, null, 1, null, x)), V._4(110, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n\n                "])), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._27(-1, null, ["\n            "])), (l()(), V._27(-1, null, ["\n          "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, "vaccineCertification", e.vaccineCertificate.fullyVaccinated ? "" : "white");
                l(n, 26, 0, 1 == e.vaccineCertificate.doseDetailsList.length && !e.vaccineCertificate.fullyVaccinated && !e.vaccineCertificate.singleDose);
                l(n, 32, 0, l(n, 33, 0, e.showQR ? "calc(180px * " + e.vaccineCertificate.doseDetailsList.length + " + 45px)" : "auto"));
                l(n, 36, 0, l(n, 37, 0, e.showQR ? "rotateY(180deg)" : "rotateY(0deg)"));
                l(n, 40, 0, l(n, 41, 0, e.showQR ? "0" : "1"));
                l(n, 57, 0, e.vaccineCertificate.doseDetailsList);
                l(n, 74, 0, e.vaccineQrCodes);
                l(n, 94, 0, !e.showQR);
                l(n, 101, 0, !e.showQR);
                l(n, 110, 0, e.showQR)
            }, function(l, n) {
                var e = n.component;
                l(n, 18, 0, V._28(n, 18, 0, V._17(n, 19).transform("digitalCertificate")));
                l(n, 22, 0, V._28(n, 22, 0, V._17(n, 23).transform("covidVaccination")));
                l(n, 46, 0, e.vaccineCertificate.name);
                l(n, 48, 0, e.vaccineCertificate.icOrPassport);
                l(n, 51, 0, e.vaccineCertificate.dateOfBirth);
                l(n, 67, 0, V._28(n, 67, 0, V._17(n, 68).transform("forAuthorities")))
            })
        }

        function N(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "img", [
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "alt", 0],
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, e) {
                var u = !0;
                if ("load" === n) {
                    u = !1 !== V._17(l, 1).onLoad() && u
                }
                if ("error" === n) {
                    u = !1 !== V._17(l, 1).onError() && u
                }
                return u
            }, null, null)), V._4(1, 540672, null, 0, Al.a, [Nl.a, V.k, Rl.a], {
                cache: [0, "cache"],
                employeeId: [1, "employeeId"]
            }, null)], function(l, n) {
                l(n, 1, 0, n.parent.context.$implicit.imageUrl, n.parent.context.$implicit.employeeId)
            }, function(l, n) {
                l(n, 0, 0, n.component.UserUtils.getInitials(n.parent.context.$implicit.displayName), "teamlistImg_" + n.parent.context.$implicit.employeeId)
            })
        }

        function R(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), V._27(1, null, ["", ""]))], null, function(l, n) {
                var e = n.component;
                l(n, 0, 0, "teamlistIonIcon_" + n.parent.context.$implicit.employeeId);
                l(n, 1, 0, e.UserUtils.getInitials(n.parent.context.$implicit.displayName))
            })
        }

        function M(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 20, "ion-item", [
                ["class", "item item-block"],
                ["name", "Tap_Team_Profile"]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var u = !0;
                if ("click" === n) {
                    u = !1 !== l.component.openSubOrdinatePage(e, l.context.$implicit, "subProfile") && u
                }
                return u
            }, Ml.b, Ml.a)), V._4(1, 1097728, null, 3, Bl.a, [Ul.a, _l.a, V.k, V.F, [2, jl.a]], null, null), V._25(335544320, 4, {
                contentLabel: 0
            }), V._25(603979776, 5, {
                _buttons: 1
            }), V._25(603979776, 6, {
                _icons: 1
            }), V._4(5, 16384, null, 0, Fl.a, [], null, null), (l()(), V._27(-1, 2, ["\n                      "])), (l()(), V._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), V._4(8, 16384, null, 0, Hl.a, [], null, null), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._0(16777216, null, null, 1, null, N)), V._4(11, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                        "])), (l()(), V._0(16777216, null, null, 1, null, R)), V._4(14, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n                      "])), (l()(), V._27(-1, 2, ["\n                      "])), (l()(), V._5(17, 0, null, 2, 0, "p", [
                ["text-wrap", ""]
            ], [
                [8, "id", 0],
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), V._27(-1, 2, ["\n                      "])), (l()(), V._5(19, 0, null, 2, 0, "small", [], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), V._27(-1, 2, ["\n                    "]))], function(l, n) {
                l(n, 11, 0, n.context.$implicit.imageUrl);
                l(n, 14, 0, !n.context.$implicit.imageUrl)
            }, function(l, n) {
                l(n, 17, 0, "teamlistName_" + n.context.$implicit.employeeId, n.context.$implicit.displayName);
                l(n, 19, 0, n.context.$implicit.designation)
            })
        }

        function B(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 21, null, null, null, null, null, null, null)), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._5(2, 0, null, null, 18, "ion-card", [
                ["class", "hide-in-tablet"]
            ], null, null, null, null, null)), V._4(3, 16384, null, 0, Ll.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(5, 0, null, null, 3, "ion-card-header", [], null, null, null, null, null)), V._4(6, 16384, null, 0, xl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(7, null, ["\n                  ", "\n                "])), V._20(131072, Q.i, [Q.j, V.g]), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._5(10, 0, null, null, 9, "ion-card-content", [], null, null, null, null, null)), V._4(11, 16384, null, 0, kl.a, [_l.a, V.k, V.F], null, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._5(13, 0, null, null, 5, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), V._4(14, 16384, null, 0, Vl.a, [_l.a, V.k, V.F, Cl.a, El.l, zl.a], null, null), (l()(), V._27(-1, null, ["\n                    "])), (l()(), V._0(16777216, null, null, 1, null, M)), V._4(17, 802816, null, 0, wl.i, [V.O, V.L, V.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), V._27(-1, null, ["\n                  "])), (l()(), V._27(-1, null, ["\n                "])), (l()(), V._27(-1, null, ["\n              "])), (l()(), V._27(-1, null, ["\n            "]))], function(l, n) {
                l(n, 17, 0, n.component.mySubordinates)
            }, function(l, n) {
                l(n, 7, 0, V._28(n, 7, 0, V._17(n, 8).transform("myDependent")))
            })
        }

        function U(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 28, null, null, null, null, null, null, null)), (l()(), V._27(-1, null, ["\n            "])), (l()(), V._5(2, 0, null, null, 2, "employment-details", [], null, [
                [null, "refreshPage"]
            ], function(l, n, e) {
                var u = !0;
                if ("refreshPage" === n) {
                    u = !1 !== l.component.syncPage() && u
                }
                return u
            }, Ql.b, Ql.a)), V._4(3, 638976, null, 0, Jl.a, [fl.a, Yl.a, Kl.a, Gl.a], {
                img1: [0, "img1"],
                img2: [1, "img2"],
                employee: [2, "employee"],
                designationCode: [3, "designationCode"],
                isSubordinate: [4, "isSubordinate"],
                generated: [5, "generated"]
            }, {
                doRefresh: "refreshPage"
            }), (l()(), V._27(-1, null, ["\n            "])), (l()(), V._27(-1, null, ["\n\n            "])), (l()(), V._27(-1, null, ["\n            "])), (l()(), V._0(16777216, null, null, 1, null, d)), V._4(8, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n\n            "])), (l()(), V._27(-1, null, ["\n            "])), (l()(), V._0(16777216, null, null, 1, null, g)), V._4(12, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n\n            "])), (l()(), V._27(-1, null, ["\n            "])), (l()(), V._0(16777216, null, null, 1, null, y)), V._4(16, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n\n            "])), (l()(), V._27(-1, null, ["\n            "])), (l()(), V._0(16777216, null, null, 1, null, b)), V._4(20, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n\n          "])), (l()(), V._27(-1, null, ["\n          "])), (l()(), V._0(16777216, null, null, 1, null, A)), V._4(24, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n\n            "])), (l()(), V._0(16777216, null, null, 1, null, B)), V._4(27, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n          "]))], function(l, n) {
                var e = n.component;
                l(n, 3, 0, e.image1, e.image2, e.user, e.user.designationCode, e.isSubordinate, e.generated);
                l(n, 8, 0, e.isTabPage && e.user.homeLocation);
                l(n, 12, 0, e.labTest);
                l(n, 16, 0, e.HSO);
                l(n, 20, 0, e.vaccineCertificate && e.vaccineCertificate.exempted);
                l(n, 24, 0, e.vaccineCertificate && !e.vaccineCertificate.exempted);
                l(n, 27, 0, e.hasTeam)
            }, null)
        }

        function j(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 30, "ion-grid", [
                ["class", "grid"],
                ["no-padding", ""]
            ], null, null, null, null, null)), V._4(1, 16384, null, 0, Wl.a, [], null, null), (l()(), V._27(-1, null, ["\n      "])), (l()(), V._5(3, 0, null, null, 26, "ion-row", [
                ["class", "row"]
            ], null, null, null, null, null)), V._4(4, 16384, null, 0, Dl.a, [], null, null), (l()(), V._27(-1, null, ["\n        "])), (l()(), V._5(6, 0, null, null, 6, "ion-col", [
                ["class", "col"],
                ["col-0", ""],
                ["col-lg-3", ""],
                ["col-md-0", ""],
                ["col-sm-0", ""]
            ], null, null, null, null, null)), V._4(7, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n          "])), (l()(), V._5(9, 0, null, null, 2, "profile-details", [], null, null, null, $l.b, $l.a)), V._4(10, 49152, null, 0, ql.a, [Zl.a, fl.a, Gl.a, Kl.a, Xl.a, ln.a], {
                empId: [0, "empId"],
                displayName: [1, "displayName"],
                imageUrl: [2, "imageUrl"],
                designation: [3, "designation"],
                email: [4, "email"],
                isSubordinate: [5, "isSubordinate"],
                count: [6, "count"]
            }, null), (l()(), V._27(-1, null, ["\n          "])), (l()(), V._27(-1, null, ["\n        "])), (l()(), V._27(-1, null, ["\n        "])), (l()(), V._5(14, 0, null, null, 9, "ion-col", [
                ["class", "col"],
                ["col-12", ""],
                ["col-lg-6", ""],
                ["col-md-8", ""],
                ["col-sm-12", ""]
            ], null, null, null, null, null)), V._4(15, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n          "])), (l()(), V._5(17, 0, null, null, 2, "mobile-profile-details", [
                ["class", "hide-in-tablet"],
                ["name", "Tap_Profile_Details"]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var u = !0;
                if ("click" === n) {
                    u = !1 !== l.component.openMoreMenu() && u
                }
                return u
            }, o, en)), V._4(18, 49152, null, 0, nn.a, [Zl.a, fl.a, Gl.a, Kl.a, Xl.a, ln.a], {
                empId: [0, "empId"],
                displayName: [1, "displayName"],
                imageUrl: [2, "imageUrl"],
                designation: [3, "designation"],
                email: [4, "email"],
                isSubordinate: [5, "isSubordinate"],
                count: [6, "count"],
                currentLang: [7, "currentLang"]
            }, null), (l()(), V._27(-1, null, ["\n          "])), (l()(), V._27(-1, null, ["\n\n          "])), (l()(), V._0(16777216, null, null, 1, null, U)), V._4(22, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n        "])), (l()(), V._27(-1, null, ["\n        "])), (l()(), V._5(25, 0, null, null, 3, "ion-col", [
                ["class", "col"],
                ["col-0", ""],
                ["col-lg-3", ""],
                ["col-md-4", ""],
                ["col-sm-12", ""]
            ], null, null, null, null, null)), V._4(26, 16384, null, 0, Ol.a, [], null, null), (l()(), V._27(-1, null, ["\n          "])), (l()(), V._27(-1, null, ["\n        "])), (l()(), V._27(-1, null, ["\n      "])), (l()(), V._27(-1, null, ["\n    "]))], function(l, n) {
                var e = n.component;
                l(n, 10, 0, e.presentEmpId, e.user.displayName, e.user.imageUrl, e.user.designation, e.user.userName, e.isSubordinate, e.incrementCount);
                l(n, 18, 0, e.presentEmpId, e.user.displayName, e.user.imageUrl, e.user.designation, e.user.userName, e.isSubordinate, e.incrementCount, e.translate.currentLang);
                l(n, 22, 0, "COVID" == e.myAppName || "COVID_DEMO" == e.myAppName || "COVID_UAE" == e.myAppName)
            }, null)
        }

        function F(l) {
            return V._29(0, [(l()(), V._5(0, 0, null, null, 5, "ion-infinite-scroll", [], null, [
                [null, "ionInfinite"]
            ], function(l, n, e) {
                var u = !0;
                if ("ionInfinite" === n) {
                    u = !1 !== l.component.doInfiniteInfo(e) && u
                }
                return u
            }, null, null)), V._4(1, 1196032, null, 0, un.a, [Sl.a, V.y, V.k, zl.a], null, {
                ionInfinite: "ionInfinite"
            }), (l()(), V._27(-1, null, ["\n      "])), (l()(), V._5(3, 0, null, null, 1, "ion-infinite-scroll-content", [], [
                [1, "state", 0]
            ], null, null, tn.b, tn.a)), V._4(4, 114688, null, 0, rn.a, [un.a, _l.a], null, null), (l()(), V._27(-1, null, ["\n    "]))], function(l, n) {
                l(n, 4, 0)
            }, function(l, n) {
                l(n, 3, 0, V._17(n, 4).inf.state)
            })
        }

        function H(l) {
            return V._29(0, [V._20(0, wl.d, [V.v]), V._25(402653184, 1, {
                content: 0
            }), (l()(), V._0(16777216, null, null, 1, null, c)), V._4(3, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n\n"])), (l()(), V._0(16777216, null, null, 1, null, f)), V._4(6, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n\n"])), (l()(), V._5(8, 0, null, null, 17, "ion-content", [
                ["class", "manulife-cards"]
            ], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], [
                [null, "ionScroll"]
            ], function(l, n, e) {
                var u = !0;
                if ("ionScroll" === n) {
                    u = !1 !== l.component.onScroll(e) && u
                }
                return u
            }, on.b, on.a)), V._4(9, 4374528, [
                [1, 4]
            ], 0, Sl.a, [_l.a, Cl.a, zl.a, V.k, V.F, sl.a, an.a, V.y, [2, cl.a],
                [2, fl.a]
            ], null, {
                ionScroll: "ionScroll"
            }), (l()(), V._27(-1, 1, ["\n  "])), (l()(), V._0(16777216, null, 1, 1, null, _)), V._4(12, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, 1, ["\n  "])), (l()(), V._5(14, 0, null, 1, 1, "div", [], null, null, null, null, null)), V._4(15, 278528, null, 0, wl.h, [V.t, V.u, V.k, V.G], {
                ngClass: [0, "ngClass"]
            }, null), (l()(), V._27(-1, 1, ["\n  "])), (l()(), V._5(17, 0, null, 1, 7, "div", [
                ["class", "pull-up"]
            ], null, null, null, null, null)), (l()(), V._27(-1, null, ["\n    "])), (l()(), V._0(16777216, null, null, 1, null, j)), V._4(20, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n    "])), (l()(), V._0(16777216, null, null, 1, null, F)), V._4(23, 16384, null, 0, wl.j, [V.O, V.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), V._27(-1, null, ["\n  "])), (l()(), V._27(-1, 1, ["\n"]))], function(l, n) {
                var e = n.component;
                l(n, 3, 0, e.isTabPage);
                l(n, 6, 0, !e.isTabPage);
                l(n, 12, 0, e.isTabPage);
                l(n, 15, 0, 0 == e.scrolling ? "sliding" : "sliding closed");
                l(n, 20, 0, e.user);
                l(n, 23, 0, e.isInfiniteProfileEnabled)
            }, function(l, n) {
                l(n, 8, 0, V._17(n, 9).statusbarPadding, V._17(n, 9)._hasRefresher)
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var V = e(1),
            z = (e(0), e(6), e(1330)),
            Q = e(9),
            J = e(219),
            Y = e(220),
            K = e(138),
            G = e(176),
            W = e(218),
            $ = G.b,
            q = function() {
                return function() {}
            }(),
            Z = e(773),
            X = e(774),
            ll = e(775),
            nl = e(776),
            el = e(777),
            ul = e(778),
            tl = e(779),
            rl = e(780),
            il = e(781),
            ol = e(140),
            al = e(75),
            sl = e(18),
            cl = e(7),
            fl = e(16),
            _l = e(3),
            dl = e(139),
            gl = e(103),
            hl = e(80),
            ml = e(105),
            pl = e(37),
            vl = e(27),
            yl = e(38),
            bl = e(102),
            wl = e(10),
            Il = e(187),
            Cl = e(5),
            Sl = e(36),
            El = e(19),
            Pl = e(813),
            Tl = e(238),
            Ll = e(60),
            kl = e(54),
            Dl = e(61),
            Ol = e(106),
            xl = e(161),
            Al = e(177),
            Nl = e(85),
            Rl = e(81),
            Ml = e(56),
            Bl = e(25),
            Ul = e(23),
            jl = e(48),
            Fl = e(53),
            Hl = e(141),
            Vl = e(63),
            zl = e(14),
            Ql = e(1362),
            Jl = e(782),
            Yl = e(17),
            Kl = e(13),
            Gl = e(11),
            Wl = e(182),
            $l = e(1365),
            ql = e(791),
            Zl = e(230),
            Xl = e(50),
            ln = e(21),
            nn = e(811),
            en = V._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            un = e(165),
            tn = e(412),
            rn = e(183),
            on = e(67),
            an = e(47),
            sn = e(404),
            cn = e(12),
            fn = e(20),
            _n = e(147),
            dn = e(88),
            gn = e(52),
            hn = e(84),
            mn = e(116),
            pn = e(403),
            vn = e(64),
            yn = e(69),
            bn = e(142),
            wn = e(104),
            In = e(163),
            Cn = e(31),
            Sn = e(123),
            En = e(160),
            Pn = V._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            Tn = V._1("ng-component", z.a, function(l) {
                return V._29(0, [(l()(), V._5(0, 0, null, null, 4, "ng-component", [], null, null, null, H, Pn)), V._23(512, null, sn.a, sn.a, [cn.a, Gl.a, fn.a, _n.a]), V._23(512, null, dn.a, dn.a, [cn.a, Nl.a, Gl.a, Q.j, fn.a, ln.a, cn.a, Kl.a, Cl.a, gn.a, hn.a, mn.a, Q.j, Rl.a]), V._23(512, null, pn.a, pn.a, [cn.a, Gl.a, fn.a, vn.a, Nl.a, Kl.a]), V._4(4, 49152, null, 0, z.a, [yn.c, Xl.a, V.y, bn.a, fl.a, Yl.a, Kl.a, cn.a, Gl.a, _n.a, Q.j, V.g, mn.a, hn.a, fn.a, wn.a, In.a, sn.a, dn.a, ln.a, Cn.a, pn.a, Sn.a, En.a], null, null)], null, null)
            }, {}, {}, []),
            Ln = e(30),
            kn = e(221),
            Dn = e(402),
            On = e(222),
            xn = e(158);
        e.d(n, "ProfilePageModuleNgFactory", function() {
            return An
        });
        var An = V._2(q, [], function(l) {
            return V._13([V._14(512, V.i, V.Y, [
                [8, [Z.a, X.a, ll.a, nl.a, el.a, ul.a, tl.a, rl.a, il.a, Tn]],
                [3, V.i], V.w
            ]), V._14(4608, wl.l, wl.k, [V.v, [2, wl.u]]), V._14(4608, Ln.u, Ln.u, []), V._14(4608, Ln.d, Ln.d, []), V._14(5120, Q.f, $, [K.c]), V._14(4608, Q.c, Q.e, []), V._14(4608, Q.h, Q.d, []), V._14(4608, Q.b, Q.a, []), V._14(4608, Q.j, Q.j, [Q.m, Q.f, Q.c, Q.h, Q.b, Q.k, Q.l]), V._14(4608, Cn.a, Cn.a, []), V._14(512, wl.b, wl.b, []), V._14(512, kn.a, kn.a, []), V._14(512, Ln.s, Ln.s, []), V._14(512, Ln.g, Ln.g, []), V._14(512, Ln.q, Ln.q, []), V._14(512, Dn.a, Dn.a, []), V._14(512, Y.a, Y.a, []), V._14(512, On.a, On.a, []), V._14(512, Q.g, Q.g, []), V._14(512, W.a, W.a, []), V._14(512, J.a, J.a, []), V._14(512, Dn.b, Dn.b, []), V._14(512, q, q, []), V._14(256, Q.l, void 0, []), V._14(256, Q.k, void 0, []), V._14(256, xn.a, z.a, [])])
        })
    },
    1324: function(l, n) {
        var e, u = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        n.getSymbolSize = function(l) {
            if (!l) throw new Error('"version" cannot be null or undefined');
            if (l < 1 || l > 40) throw new Error('"version" should be in range from 1 to 40');
            return 4 * l + 17
        }, n.getSymbolTotalCodewords = function(l) {
            return u[l]
        }, n.getBCHDigit = function(l) {
            for (var n = 0; 0 !== l;) n++, l >>>= 1;
            return n
        }, n.setToSJISFunction = function(l) {
            if ("function" != typeof l) throw new Error('"toSJISFunc" is not a valid function.');
            e = l
        }, n.isKanjiModeEnabled = function() {
            return void 0 !== e
        }, n.toSJIS = function(l) {
            return e(l)
        }
    },
    1325: function(l, n, e) {
        var u = e(1332),
            t = e(1333);
        n.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        }, n.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        }, n.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        }, n.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        }, n.MIXED = {
            bit: -1
        }, n.getCharCountIndicator = function(l, n) {
            if (!l.ccBits) throw new Error("Invalid mode: " + l);
            if (!u.isValid(n)) throw new Error("Invalid version: " + n);
            return n >= 1 && n < 10 ? l.ccBits[0] : n < 27 ? l.ccBits[1] : l.ccBits[2]
        }, n.getBestModeForData = function(l) {
            return t.testNumeric(l) ? n.NUMERIC : t.testAlphanumeric(l) ? n.ALPHANUMERIC : t.testKanji(l) ? n.KANJI : n.BYTE
        }, n.toString = function(l) {
            if (l && l.id) return l.id;
            throw new Error("Invalid mode")
        }, n.isValid = function(l) {
            return l && l.bit && l.ccBits
        }, n.from = function(l, e) {
            if (n.isValid(l)) return l;
            try {
                return function(l) {
                    if ("string" != typeof l) throw new Error("Param is not a string");
                    switch (l.toLowerCase()) {
                        case "numeric":
                            return n.NUMERIC;
                        case "alphanumeric":
                            return n.ALPHANUMERIC;
                        case "kanji":
                            return n.KANJI;
                        case "byte":
                            return n.BYTE;
                        default:
                            throw new Error("Unknown mode: " + l)
                    }
                }(l)
            } catch (l) {
                return e
            }
        }
    },
    1326: function(l, n, e) {
        "use strict";

        function u(l, n, e) {
            return "number" == typeof l ? i(l) : function(l, n, e) {
                if ("number" == typeof l) throw new TypeError('"value" argument must not be a number');
                if ("undefined" != typeof ArrayBuffer && l instanceof ArrayBuffer) return function(l, n, e) {
                    if (n < 0 || l.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (l.byteLength < n + (e || 0)) throw new RangeError("'length' is out of bounds");
                    var t;
                    t = void 0 === n && void 0 === e ? new Uint8Array(l) : void 0 === e ? new Uint8Array(l, n) : new Uint8Array(l, n, e);
                    return t.__proto__ = u.prototype, t
                }(l, n, e);
                if ("string" == typeof l) return function(l) {
                    var n = 0 | s(l),
                        e = r(n),
                        u = e.write(l);
                    u !== n && (e = e.slice(0, u));
                    return e
                }(l);
                return function(l) {
                    if (u.isBuffer(l)) {
                        var n = 0 | t(l.length),
                            e = r(n);
                        return 0 === e.length ? e : (l.copy(e, 0, 0, n), e)
                    }
                    if (l) {
                        if ("undefined" != typeof ArrayBuffer && l.buffer instanceof ArrayBuffer || "length" in l) return "number" != typeof l.length || function(l) {
                            return l != l
                        }(l.length) ? r(0) : o(l);
                        if ("Buffer" === l.type && Array.isArray(l.data)) return o(l.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(l)
            }(l, n, e)
        }

        function t(l) {
            if (l >= f) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + f.toString(16) + " bytes");
            return 0 | l
        }

        function r(l) {
            var n = new Uint8Array(l);
            return n.__proto__ = u.prototype, n
        }

        function i(l) {
            return r(l < 0 ? 0 : 0 | t(l))
        }

        function o(l) {
            for (var n = l.length < 0 ? 0 : 0 | t(l.length), e = r(n), u = 0; u < n; u += 1) e[u] = 255 & l[u];
            return e
        }

        function a(l, n) {
            n = n || 1 / 0;
            for (var e, u = l.length, t = null, r = [], i = 0; i < u; ++i) {
                if ((e = l.charCodeAt(i)) > 55295 && e < 57344) {
                    if (!t) {
                        if (e > 56319) {
                            (n -= 3) > -1 && r.push(239, 191, 189);
                            continue
                        }
                        if (i + 1 === u) {
                            (n -= 3) > -1 && r.push(239, 191, 189);
                            continue
                        }
                        t = e;
                        continue
                    }
                    if (e < 56320) {
                        (n -= 3) > -1 && r.push(239, 191, 189), t = e;
                        continue
                    }
                    e = 65536 + (t - 55296 << 10 | e - 56320)
                } else t && (n -= 3) > -1 && r.push(239, 191, 189);
                if (t = null, e < 128) {
                    if ((n -= 1) < 0) break;
                    r.push(e)
                } else if (e < 2048) {
                    if ((n -= 2) < 0) break;
                    r.push(e >> 6 | 192, 63 & e | 128)
                } else if (e < 65536) {
                    if ((n -= 3) < 0) break;
                    r.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                } else {
                    if (!(e < 1114112)) throw new Error("Invalid code point");
                    if ((n -= 4) < 0) break;
                    r.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                }
            }
            return r
        }

        function s(l) {
            if (u.isBuffer(l)) return l.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(l) || l instanceof ArrayBuffer)) return l.byteLength;
            "string" != typeof l && (l = "" + l);
            return 0 === l.length ? 0 : a(l).length
        }
        var c = e(406),
            f = 2147483647;
        u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        }), u.prototype.write = function(l, n, e) {
            void 0 === n ? (e = this.length, n = 0) : void 0 === e && "string" == typeof n ? (e = this.length, n = 0) : isFinite(n) && (n |= 0, isFinite(e) ? e |= 0 : e = void 0);
            var u = this.length - n;
            if ((void 0 === e || e > u) && (e = u), l.length > 0 && (e < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            return function(l, n, e, u) {
                return function(l, n, e, u) {
                    for (var t = 0; t < u && !(t + e >= n.length || t >= l.length); ++t) n[t + e] = l[t];
                    return t
                }(a(n, l.length - e), l, e, u)
            }(this, l, n, e)
        }, u.prototype.slice = function(l, n) {
            var e = this.length;
            l = ~~l, n = void 0 === n ? e : ~~n, l < 0 ? (l += e) < 0 && (l = 0) : l > e && (l = e), n < 0 ? (n += e) < 0 && (n = 0) : n > e && (n = e), n < l && (n = l);
            var t = this.subarray(l, n);
            return t.__proto__ = u.prototype, t
        }, u.prototype.copy = function(l, n, e, u) {
            if (e || (e = 0), u || 0 === u || (u = this.length), n >= l.length && (n = l.length), n || (n = 0), u > 0 && u < e && (u = e), u === e) return 0;
            if (0 === l.length || 0 === this.length) return 0;
            if (n < 0) throw new RangeError("targetStart out of bounds");
            if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
            if (u < 0) throw new RangeError("sourceEnd out of bounds");
            u > this.length && (u = this.length), l.length - n < u - e && (u = l.length - n + e);
            var t, r = u - e;
            if (this === l && e < n && n < u)
                for (t = r - 1; t >= 0; --t) l[t + n] = this[t + e];
            else if (r < 1e3)
                for (t = 0; t < r; ++t) l[t + n] = this[t + e];
            else Uint8Array.prototype.set.call(l, this.subarray(e, e + r), n);
            return r
        }, u.prototype.fill = function(l, n, e) {
            if ("string" == typeof l) {
                if ("string" == typeof n ? (n = 0, e = this.length) : "string" == typeof e && (e = this.length), 1 === l.length) {
                    var t = l.charCodeAt(0);
                    t < 256 && (l = t)
                }
            } else "number" == typeof l && (l &= 255);
            if (n < 0 || this.length < n || this.length < e) throw new RangeError("Out of range index");
            if (e <= n) return this;
            n >>>= 0, e = void 0 === e ? this.length : e >>> 0, l || (l = 0);
            var r;
            if ("number" == typeof l)
                for (r = n; r < e; ++r) this[r] = l;
            else {
                var i = u.isBuffer(l) ? l : new u(l),
                    o = i.length;
                for (r = 0; r < e - n; ++r) this[r + n] = i[r % o]
            }
            return this
        }, u.concat = function(l, n) {
            if (!c(l)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === l.length) return r(null);
            var e;
            if (void 0 === n)
                for (n = 0, e = 0; e < l.length; ++e) n += l[e].length;
            var t = i(n),
                o = 0;
            for (e = 0; e < l.length; ++e) {
                var a = l[e];
                if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(t, o), o += a.length
            }
            return t
        }, u.byteLength = s, u.prototype._isBuffer = !0, u.isBuffer = function(l) {
            return !(null == l || !l._isBuffer)
        }, l.exports = u
    },
    1327: function(l, n) {
        n.L = {
            bit: 1
        }, n.M = {
            bit: 0
        }, n.Q = {
            bit: 3
        }, n.H = {
            bit: 2
        }, n.isValid = function(l) {
            return l && void 0 !== l.bit && l.bit >= 0 && l.bit < 4
        }, n.from = function(l, e) {
            if (n.isValid(l)) return l;
            try {
                return function(l) {
                    if ("string" != typeof l) throw new Error("Param is not a string");
                    switch (l.toLowerCase()) {
                        case "l":
                        case "low":
                            return n.L;
                        case "m":
                        case "medium":
                            return n.M;
                        case "q":
                        case "quartile":
                            return n.Q;
                        case "h":
                        case "high":
                            return n.H;
                        default:
                            throw new Error("Unknown EC Level: " + l)
                    }
                }(l)
            } catch (l) {
                return e
            }
        }
    },
    1330: function(l, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return o
        });
        e(0), e(6);
        var u = e(49),
            t = e.n(u),
            r = (e(12), e(20), e(163), e(13), e(11), e(142), e(147), e(404), e(88), e(21), e(31), e(65)),
            i = (e(403), e(1339)),
            o = (e.n(i), e(123), function() {
                function l(l, n, e, u, o, a, s, c, f, _, d, g, h, m, p, v, y, b, w, I, C, S, E, P) {
                    var T = this;
                    this.sanitizer = l, this.modalCtrl = n, this.zone = e, this.keyboard = u, this.nav = o, this.navParams = a, this.StorageAccess = s, this.DataAccess = c, this.UserUtils = f, this.graphConfig = _, this.translate = d, this.ref = g, this.Alert = h, this.loadingCtrl = m, this.network = p, this.toastCtrl = v, this.connectivityService = y, this.profileProvider = b, this.commonProvider = w, this.ReusableUtils = I, this.mixPanelService = C, this.meetInProvider = S, this.hubProvider = E, this.events = P, this.showQR = null, this.vaccineQrCodes = [], this.labTest = null, this.vaccine = null, this.vaccineCertificate = null, this.isGreenBubblePass = null, this.zoneDetails = null, this.zoneKey = null, this.myAppName = r.a.appName, this.opacityVal = 1, this.scrolling = !1, this.presentEmpId = null, this.errorCodeEnabled = !1, this.showScore = !0, this.isTabPage = !0, this.isOn = !0, this.isDisabled = !1, this.userBasicInfo = "", this.designationData = "", this.team = "null", this.employee = {}, this.employee1 = "", this.widgets = [], this.scorecardWidgets = [], this.activeScorecardWidgets = [], this.competencyScorecardWidgets = [], this.otherWidgets = [], this.user = {}, this.mySubordinates = [], this.allSubordinates = [], this.hasTeam = !1, this.isMoreSubordinates = !1, this.teamScoreChartData = {}, this.myScoreChartData = {}, this.isSubordinate = null, this.showToast = !0, this.myInput = "", this.hasMyTeamScore = !1, this.hasMyScore = !1, this.pageNum = 0, this.isInfiniteProfileEnabled = !1, this.totalInfoCount = 0, this.fromMyTeam = !1, this.incrementCount = 0, this.myAngularxQrCode = null, this.riskCategory = "", this.code = "some sample string", this.image2 = null, this.image1 = null, this.duration = "", this.flag = !1, this.dependents = [], this.openMoreMenu = t.a.throttle(function() {
                        this.isTabPage && this.nav.push("SettingsPage", {
                            employee: JSON.stringify(this.user)
                        })
                    }, 3e3, {
                        trailing: !1
                    }), this.getQRCode = t.a.throttle(function() {
                        var l, n, e, u = T,
                            t = i;
                        if (u.navParams.get("employee") ? (l = u.navParams.get("employee").employeeId, n = {
                                data: {
                                    passportNumber: u.user.passportNumber,
                                    dateOfBirth: u.user.dateOfBirth,
                                    country: u.user.country
                                },
                                IcNumber: u.user.licenceNumber,
                                id: u.user.employeeId,
                                flag: !0,
                                editableFields: u.user.editableFields
                            }, e = "editDependentPage") : (e = "AboutYouPage", n = {
                                employee: JSON.stringify(u.user)
                            }), u.user.dateOfBirth) {
                            var r = u.loadingCtrl.create();
                            r.present(), u.profileProvider.getQRCardUrl(l).subscribe(function(l) {
                                r.dismiss();
                                var n = l.data;
                                if (l.success) {
                                    for (var e in n) t.toDataURL(n[e], {
                                        errorCorrectionLevel: "L"
                                    }, function(l, n) {
                                        u.vaccineQrCodes.push(n)
                                    });
                                    u.showQR = 1
                                } else {
                                    u.Alert.create({
                                        message: l.errorMessage,
                                        buttons: ["Ok"]
                                    }).present()
                                }
                            }, function(l) {
                                r.dismiss(), u.ReusableUtils.showToastWithOk("pleaseTryAfterSometime"), u.ReusableUtils.saveErrorLog({}, l)
                            })
                        } else {
                            var o;
                            u.translate.get("takeMeThere").subscribe(function(l) {
                                return o = l
                            });
                            var a;
                            l ? u.translate.get("depDobError").subscribe(function(l) {
                                return a = l
                            }) : u.translate.get("userDobError").subscribe(function(l) {
                                return a = l
                            });
                            u.Alert.create({
                                message: a,
                                buttons: [{
                                    text: o,
                                    handler: function(l) {
                                        u.nav.push(e, n)
                                    }
                                }]
                            }).present()
                        }
                    }, 5e3, {
                        trailing: !1
                    });
                    var L = this;
                    L.displayData = " ", L.fromMyTeam = L.navParams.get("fromMyTeam"), L.StorageAccess.getValue("username").then(function(l) {
                        L.uName = l
                    }), L.clearTeamWhenUserSwitched(), L.getAllData()
                }
                return l.prototype.clearTeamWhenUserSwitched = function() {
                    var l = this;
                    l.StorageAccess.getValue("switchUser").then(function(n) {
                        n && (l.StorageAccess.setValue("switchUser", null), l.StorageAccess.setValue("vaccineDependents", null), l.StorageAccess.setValue("dependentsList", null), l.mySubordinates = [], l.HSO = void 0, l.labTest = null, l.vaccine = null, l.vaccineCertificate = null)
                    })
                }, l.prototype.updateTravelBubble = function() {
                    var l = this;
                    if (l.isTabPage) {
                        var n = [],
                            e = !1,
                            u = t.a.uniq(t.a.keys(l.districtZoneDetails.zoneMessageMap).join().replace(/_MY/g, "").split(","));
                        t.a.each(l.districtZoneDetails.data, function(u, t) {
                            n.push(t.split("_")[0]), -1 != u.indexOf(l.user.homeLocation) && (l.isGreenBubblePass = !1, e = !0, l.zoneKey = t.split("_")[0], l.zoneDetails = l.districtZoneDetails.zoneMessageMap["ms_MY" == l.translate.currentLang ? l.zoneKey + "_MY" : l.zoneKey], l.passCardColor = l.zoneDetails.cardColourCode)
                        }), e || (l.zoneKey = "HIGH_RISK" == t.a.difference(u, n)[0] ? t.a.difference(u, n)[1] : t.a.difference(u, n)[0], l.zoneDetails = l.districtZoneDetails.zoneMessageMap["ms_MY" == l.translate.currentLang ? l.zoneKey + "_MY" : l.zoneKey], l.passCardColor = l.zoneDetails.cardColourCode), "Low" == l.risk ? l.isGreenBubblePass = !0 : (l.passCardColor = l.districtZoneDetails.zoneMessageMap.HIGH_RISK.cardColourCode, l.isGreenBubblePass = !1)
                    }
                }, l.prototype.getHSODetails = function(l) {
                    l.data && (this.HSO = l.data, this.HSO.createdDate = new Date(this.HSO.createdDate), this.HSO.endDate = new Date(this.HSO.endDate), this.duration = this.HSO.createdDate.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    }).replace(/ /g, "-") + " " + this.UserUtils.getTranslatedString("TO", {}) + " " + this.HSO.endDate.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    }).replace(/ /g, "-"), this.HSO.createdDate = this.HSO.createdDate.toLocaleString("en-US", {
                        month: "long",
                        day: "numeric"
                    }) + " " + this.HSO.createdDate.toLocaleTimeString("en-US"))
                }, l.prototype.getFormattedDate = function() {
                    return this.UserUtils.getFormattedDate((new Date).getTime())
                }, l.prototype.ionSelected = function() {
                    var l = this;
                    setTimeout(function() {
                        l.content.scrollToTop(500)
                    }, 1)
                }, l.prototype.getUserDetailsById = function(l, n) {
                    var e = this;
                    e.isTabPage ? e.hubProvider.getEmployeeInfo(n).subscribe(function(l) {
                        e.StorageAccess.setValue("empId", l.employeeId), e.StorageAccess.setValue("employeeInfo", l), e.StorageAccess.setValue("empInfo", JSON.stringify(l)), l && (e.riskCategory = l.designationCode, e.user = l, e.risk = e.user.designationCode.includes("LOW") ? "Low" : "High", e.StorageAccess.getValue("districtZoneDetails").then(function(l) {
                            l && (e.districtZoneDetails = JSON.parse(l), e.updateTravelBubble())
                        }), "location" in l && l.location ? (e.latCord = l.location.lat, e.longCord = l.location.lng, e.image1 = r.a.devLink + l.location.imageUrl, e.generateQRCode(), e.getStatus()) : e.generateQRCode(), e.displayData = e.user.displayName, e.designationData = e.user.designation ? e.user.designation : "")
                    }, function(l) {
                        e.ReusableUtils.showHttpError(l), e.ReusableUtils.saveErrorLog({}, l)
                    }) : l && e.profileProvider.getEmployeeInfo(l).subscribe(function(l) {
                        l && (e.riskCategory = l.designationCode, e.user = l, e.getProfileCards(e.user.employeeId), "location" in l && l.location ? (e.latCord = l.location.lat, e.longCord = l.location.lng, e.image1 = r.a.devLink + l.location.imageUrl, e.generateQRCode(), e.getStatus()) : e.generateQRCode(), e.displayData = e.user.displayName, e.designationData = e.user.designation ? e.user.designation : "")
                    }, function(l) {
                        e.ReusableUtils.showHttpError(l), e.ReusableUtils.saveErrorLog({}, l)
                    })
                }, l.prototype.toggle = function(l) {
                    this.isDisabled || (this.isOn = l)
                }, l.prototype.getWidgetOrders = function(l) {
                    this.scorecardWidgets = t.a.filter(l, function(l) {
                        return "PUBLISHED_SCORECARD_REVIEW" == l.type
                    }), this.otherWidgets = t.a.filter(l, function(l) {
                        return "PUBLISHED_SCORECARD_REVIEW" != l.type
                    })
                }, l.prototype.getActiveScorecards = function(l) {
                    var n = this;
                    n.profileProvider.getActivePerformanceScorecards(l).subscribe(function(l) {
                        l.data && (n.activeScorecardWidgets = l.data)
                    }, function(l) {
                        n.ReusableUtils.showHttpError(l)
                    })
                }, l.prototype.getCompetencyScorecards = function(l) {
                    try {
                        var n = this;
                        n.profileProvider.getCompetencyScorecards(l).subscribe(function(l) {
                            n.competencyScorecardWidgets = l
                        }, function(l) {
                            n.ReusableUtils.showHttpError(l)
                        })
                    } catch (l) {}
                }, l.prototype.getProfileInformation = function(l, n) {
                    var e = this;
                    e.profileProvider.getProfileInfo(l, e.pageNum).subscribe(function(l) {
                        0 == e.widgets.length ? e.widgets = l.tasks : (e.widgets.length < 10 && (e.widgets = []), t.a.each(l.tasks, function(l) {
                            e.widgets.push(l)
                        })), e.isInfiniteProfileEnabled = l.totalCount > e.widgets.length, e.totalInfoCount = l.totalCount, e.getWidgetOrders(e.widgets), e.loading.dismiss(), n && n.complete()
                    }, function(l) {
                        e.ReusableUtils.showHttpError(l), e.ReusableUtils.saveErrorLog({}, l), n && n.complete()
                    })
                }, l.prototype.getTeam = function(l) {
                    var n = this;
                    "mobile" == n.connectivityService.getPlatform() && n.profileProvider.getMyTeamMembers(l).subscribe(function(l) {
                        n.team = l, n.mySubordinates = l, n.dependents = l.slice(), n.getVaccineTeam(), n.mySubordinates.length > 0 && (n.hasTeam = !0)
                    }, function(l) {
                        n.ReusableUtils.showHttpError(l), n.ReusableUtils.saveErrorLog({}, l)
                    })
                }, l.prototype.getVaccineTeam = function() {
                    var l = this;
                    l.StorageAccess.getValue("vaccineDependents").then(function(n) {
                        if (n) {
                            var e = "string" == typeof n ? JSON.parse(n) : n;
                            e.length > 0 ? e.forEach(function(n) {
                                -1 === t.a.findIndex(l.mySubordinates, {
                                    employeeId: n.employeeId
                                }) && l.mySubordinates.push(n)
                            }) : l.mySubordinates.forEach(function(n, e) {
                                -1 === t.a.findIndex(l.dependents, {
                                    employeeId: n.employeeId
                                }) && l.mySubordinates.splice(e, 1)
                            }), l.mySubordinates.length > 0 && (l.hasTeam = !0)
                        } else l.hubProvider.getVaccinationEmployeeInfo().subscribe(function(n) {
                            var e = "string" == typeof n ? JSON.parse(n) : n;
                            e && (l.StorageAccess.setValue("employeeInfo", e.employeeInfo), l.StorageAccess.setValue("empInfo", JSON.stringify(e.employeeInfo)), l.StorageAccess.setValue("vaccineDependents", e.vaccineDependents), e.vaccineDependents.forEach(function(n) {
                                -1 === t.a.findIndex(l.mySubordinates, {
                                    employeeId: n.employeeId
                                }) && l.mySubordinates.push(n)
                            }), l.mySubordinates.length > 0 && (l.hasTeam = !0))
                        }, function(n) {
                            l.ReusableUtils.showHttpError(n), l.ReusableUtils.saveErrorLog({}, n)
                        })
                    })
                }, l.prototype.getMyScoreChart = function(l, n) {
                    this.myScoreChartData = this.profileProvider.getProgressChart(l)
                }, l.prototype.getTeamScoreChart = function(l, n) {
                    this.teamScoreChartData = this.profileProvider.getProgressChart(l)
                }, l.prototype.isDefined = function(l) {
                    return !(t.a.isUndefined(l) || t.a.isNull(l))
                }, l.prototype.getScores = function(l) {
                    var n = this;
                    n.profileProvider.getScores(l).subscribe(function(e) {
                        if (n.showScore = e.showScore, n.commonProvider.isDefined(e.myScore)) {
                            var u = {
                                status: n.commonProvider.isDefined(e.myScorePercentage) ? Math.round(e.myScorePercentage) : 0,
                                color: n.commonProvider.isDefined(e.myScoreColor) ? e.myScoreColor : null,
                                title: n.commonProvider.isDefined(e.myScore) ? e.myScore : "-"
                            };
                            n.hasMyScore = !0, n.getMyScoreChart(u, l)
                        }
                        if (n.commonProvider.isDefined(e.teamScore)) {
                            var t = {
                                status: n.commonProvider.isDefined(e.teamScorePercentage) ? Math.round(e.teamScorePercentage) : 0,
                                color: n.commonProvider.isDefined(e.teamScoreColor) ? e.teamScoreColor : null,
                                title: n.commonProvider.isDefined(e.teamScore) ? e.teamScore : "-"
                            };
                            n.hasMyTeamScore = !0, n.getTeamScoreChart(t, l)
                        }
                    }, function(l) {
                        n.ReusableUtils.showHttpError(l)
                    })
                }, l.prototype.ionViewWillEnter = function() {}, l.prototype.generateQRCode = function() {
                    var l = this,
                        n = i;
                    l.myAngularxQrCode = JSON.stringify({
                        username: l.uName,
                        licenceNumber: l.user.licenceNumber,
                        image1: l.image1,
                        image2: l.image2,
                        displayName: l.user.displayName,
                        lastModifiedOn: l.user.lastModifiedOn,
                        imageUrl: l.user.imageUrl,
                        employeeId: l.user.employeeId,
                        designation: l.user.designation,
                        designationCode: l.user.designationCode
                    }), l.commonProvider.encrypt(l.myAngularxQrCode).then(function(e) {
                        n.toDataURL(e, {
                            errorCorrectionLevel: "L"
                        }, function(n, e) {
                            l.generated = e
                        })
                    }).catch(function(l) {})
                }, l.prototype.getProfileCards = function(l) {
                    var n = this;
                    n.translate.get("yes").subscribe(function(l) {
                        return l
                    }), n.translate.get("no").subscribe(function(l) {
                        return l
                    }), n.profileProvider.getProfileCards(l).subscribe(function(l) {
                        l && l.length && t.a.each(l, function(l) {
                            "HSO" == l.type ? n.getHSODetails(l) : "LAB_TEST" == l.type ? n.labTest = l.data : "VACCINE_CERTIFICATE" == l.type && (n.vaccineCertificate = l.data)
                        }), l && l.length || (n.HSO = void 0, n.labTest = null, n.vaccine = null, n.vaccineCertificate = null)
                    }, function(l) {
                        n.ReusableUtils.saveErrorLog({}, l)
                    })
                }, l.prototype.getAllData = function() {
                    var l = this;
                    l.loading = l.ReusableUtils.presentLoadingCustom(), l.loading.present();
                    var n = null;
                    l.navParams.data && (l.user = l.navParams.get("employee"), n = l.user), n ? (l.isTabPage = !1, l.isSubordinate = !0, l.incrementCount = l.incrementCount + 1, l.presentEmpId = n.employeeId, l.getUserDetailsById(n.employeeId)) : (l.getProfileCards(), l.isSubordinate = !1, l.StorageAccess.getValue("empInfo").then(function(n) {
                        l.riskCategory = JSON.parse(n).designationCode, l.user = JSON.parse(n), l.risk = l.user.designationCode.includes("LOW") ? "Low" : "High", l.StorageAccess.getValue("image2").then(function(n) {
                            n && (l.image2 = n)
                        }), "location" in l.user && l.user.location ? (l.latCord = JSON.parse(n).location.lat, l.longCord = JSON.parse(n).location.lng, l.image1 = r.a.devLink + l.user.location.imageUrl, l.generateQRCode(), l.getStatus()) : l.generateQRCode(), l.incrementCount = l.incrementCount + 1, l.presentEmpId = l.user.employeeId, l.user.displayName && (l.displayData = l.user.displayName), l.designationData = l.user.designation ? l.user.designation : "", l.user.hasTeam ? l.getTeam(l.user.employeeId) : l.getVaccineTeam(), "homeLocation" in l.user ? l.StorageAccess.getValue("districtZoneDetails").then(function(n) {
                            n && (l.districtZoneDetails = JSON.parse(n), l.updateTravelBubble())
                        }) : l.getUserDetailsById(l.user.employeeId)
                    })), l.loading.dismiss()
                }, l.prototype.syncPage = function() {
                    this.refreshPage(null, "SYNC")
                }, l.prototype.refreshPage = function(l, n) {
                    this.widgets = [], this.competencyScorecardWidgets = [], this.activeScorecardWidgets = [], this.scorecardWidgets = [], this.otherWidgets = [], this.HSO = void 0, this.getUserDetailsById(this.presentEmpId, n), this.user.hasTeam ? this.getTeam(this.presentEmpId) : this.getVaccineTeam(), this.getProfileCards(), l && l.complete()
                }, l.prototype.doRefresh = function(l) {
                    this.network.checkInternetConnection() ? this.refreshPage(l, "SYNC") : l.complete()
                }, l.prototype.showAll = function() {
                    this.nav.push("TeamList", {
                        subordinates: JSON.stringify(this.allSubordinates)
                    })
                }, l.prototype.search = function(l) {
                    var n = this.myInput;
                    this.allSubordinates = "" != n.trim() ? t.a.filter(this.team, function(l) {
                        return l.displayName.toLowerCase().indexOf(n.toLowerCase()) > -1
                    }) : this.team
                }, l.prototype.onBlur = function(l) {
                    this.keyboard.hide()
                }, l.prototype.onClear = function(l) {
                    this.allSubordinates = this.team
                }, l.prototype.onCancel = function(l) {
                    this.keyboard.hide(), this.allSubordinates = this.team
                }, l.prototype.openSubOrdinatePage = function(l, n, e) {
                    this.nav.push("ProfilePage", {
                        employee: n
                    })
                }, l.prototype.doInfiniteInfo = function(l) {
                    this.totalInfoCount > this.widgets.length ? (this.pageNum++, this.getProfileInformation(this.user.employeeId, l)) : l.complete()
                }, l.prototype.onScroll = function(l) {
                    var n = this;
                    this.zone.run(function() {
                        ("up" != l.directionY || l.scrollTop >= l.scrollHeight - l.contentHeight) && 0 !== l.scrollTop ? l.scrollTop > 0 && (n.scrolling = !0) : n.scrolling = !1
                    })
                }, l.prototype.getStatus = function() {
                    var l, n = this;
                    l = r.a.devLink + "/register/api/location/status?locale=" + n.translate.currentLang;
                    var e = {
                        lat: n.latCord,
                        lng: n.longCord,
                        classification: n.riskCategory
                    };
                    n.StorageAccess.getValue("bAth").then(function(u) {
                        var t = JSON.parse(u);
                        n.meetInProvider.fetchHotSpot(l, e, t).then(function(l) {
                            "data" in l && (n.StorageAccess.setValue("image2", r.a.devLink + l.data), n.image2 = r.a.devLink + l.data, n.generateQRCode())
                        }, function(l) {
                            n.generateQRCode(), n.ReusableUtils.saveErrorLog({}, l)
                        })
                    })
                }, l.prototype.travelPermit = function() {
                    try {
                        this.nav.push("TravelPassDetails", {
                            districtZoneDetails: this.districtZoneDetails,
                            lastModifiedZoneDate: this.lastModifiedZoneDate,
                            greenZoneStatesAndDistricts: this.greenZoneStatesAndDistricts,
                            isGreenZone: this.isGreenBubblePass,
                            zoneKey: this.zoneKey,
                            risk: "Low" != this.risk
                        })
                    } catch (l) {}
                }, l.prototype.getDependentMessage = function() {
                    var l = "ms_MY" == this.translate.currentLang ? "Risiko Tanggungan : " : "Dependent Risk : ",
                        n = "ms_MY" == this.translate.currentLang ? this.user.hasHighRiskDependents ? "Tinggi" : "Rendah" : this.user.hasHighRiskDependents ? "High" : "Low";
                    return this.user.hasHighRiskDependents ? l + "<b style='color:#FF0000'>" + n + "</b>" : l + "<b style='color:#0CBA1C'}>" + n + "</b>"
                }, l.prototype.getEmpId = function() {
                    return this.navParams.get("employee") ? this.navParams.get("employee").employeeId : null
                }, l.prototype.downloadVaccinationCert = function() {
                    var l, n, e, u = this,
                        t = this;
                    if (t.navParams.get("employee") ? (l = t.navParams.get("employee").employeeId, n = {
                            data: {
                                passportNumber: t.user.passportNumber,
                                dateOfBirth: t.user.dateOfBirth,
                                country: t.user.country
                            },
                            IcNumber: t.user.licenceNumber,
                            id: t.user.employeeId,
                            flag: !0,
                            editableFields: t.user.editableFields
                        }, e = "editDependentPage") : (e = "AboutYouPage", n = {
                            employee: JSON.stringify(t.user)
                        }), t.user.dateOfBirth) {
                        var r = t.getEmpId();
                        if (t.vaccineCertificate.vaccinationCertGenerated) {
                            var i = "/v1/mobileApp/vaccination/certificate/download";
                            r && (i = i + "?employeeId=" + r);
                            t.commonProvider.downloadFileFromUrl(i, "vaccination_" + t.vaccineCertificate.icOrPassport, "pdf", "vaccinationCertDownloaded")
                        } else {
                            var o = this.loadingCtrl.create();
                            o.present(), t.commonProvider.generateVaccinationCert(r).subscribe(function(l) {
                                if (l.success) t.vaccineCertificate.vaccinationCertGenerated = !0, u.ReusableUtils.showToastWithOk("vaccinationCertGenerationRequestSuccess", 3e3);
                                else {
                                    var n = t.UserUtils.getTranslatedString("error!", {}),
                                        e = t.UserUtils.getTranslatedString("ok", {});
                                    t.Alert.create({
                                        title: n,
                                        subTitle: l.errorMessage,
                                        buttons: [e]
                                    }).present()
                                }
                                o.dismiss()
                            }, function(l) {
                                u.ReusableUtils.showToastWithOk("vaccinationCertGenerationRequestFailed", 5e3), o.dismiss()
                            })
                        }
                    } else {
                        var a;
                        t.translate.get("takeMeThere").subscribe(function(l) {
                            return a = l
                        });
                        var s;
                        l ? t.translate.get("depDobError").subscribe(function(l) {
                            return s = l
                        }) : t.translate.get("userDobError").subscribe(function(l) {
                            return s = l
                        });
                        t.Alert.create({
                            message: s,
                            buttons: [{
                                text: a,
                                handler: function(l) {
                                    t.nav.push(e, n)
                                }
                            }]
                        }).present()
                    }
                }, l
            }())
    },
    1331: function(l, n, e) {
        var u = e(1327),
            t = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
            r = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        n.getBlocksCount = function(l, n) {
            switch (n) {
                case u.L:
                    return t[4 * (l - 1) + 0];
                case u.M:
                    return t[4 * (l - 1) + 1];
                case u.Q:
                    return t[4 * (l - 1) + 2];
                case u.H:
                    return t[4 * (l - 1) + 3];
                default:
                    return
            }
        }, n.getTotalCodewordsCount = function(l, n) {
            switch (n) {
                case u.L:
                    return r[4 * (l - 1) + 0];
                case u.M:
                    return r[4 * (l - 1) + 1];
                case u.Q:
                    return r[4 * (l - 1) + 2];
                case u.H:
                    return r[4 * (l - 1) + 3];
                default:
                    return
            }
        }
    },
    1332: function(l, n, e) {
        function u(l, n) {
            return a.getCharCountIndicator(l, n) + 4
        }

        function t(l, n) {
            var e = 0;
            return l.forEach(function(l) {
                var t = u(l.mode, n);
                e += t + l.getBitsLength()
            }), e
        }
        var r = e(1324),
            i = e(1331),
            o = e(1327),
            a = e(1325),
            s = e(406),
            c = r.getBCHDigit(7973);
        n.isValid = function(l) {
            return !isNaN(l) && l >= 1 && l <= 40
        }, n.from = function(l, e) {
            return n.isValid(l) ? parseInt(l, 10) : e
        }, n.getCapacity = function(l, e, t) {
            if (!n.isValid(l)) throw new Error("Invalid QR Code version");
            void 0 === t && (t = a.BYTE);
            var o = 8 * (r.getSymbolTotalCodewords(l) - i.getTotalCodewordsCount(l, e));
            if (t === a.MIXED) return o;
            var s = o - u(t, l);
            switch (t) {
                case a.NUMERIC:
                    return Math.floor(s / 10 * 3);
                case a.ALPHANUMERIC:
                    return Math.floor(s / 11 * 2);
                case a.KANJI:
                    return Math.floor(s / 13);
                case a.BYTE:
                default:
                    return Math.floor(s / 8)
            }
        }, n.getBestVersionForData = function(l, e) {
            var u, r = o.from(e, o.M);
            if (s(l)) {
                if (l.length > 1) return function(l, e) {
                    for (var u = 1; u <= 40; u++)
                        if (t(l, u) <= n.getCapacity(u, e, a.MIXED)) return u
                }(l, r);
                if (0 === l.length) return 1;
                u = l[0]
            } else u = l;
            return function(l, e, u) {
                for (var t = 1; t <= 40; t++)
                    if (e <= n.getCapacity(t, u, l)) return t
            }(u.mode, u.getLength(), r)
        }, n.getEncodedBits = function(l) {
            if (!n.isValid(l) || l < 7) throw new Error("Invalid QR Code version");
            for (var e = l << 12; r.getBCHDigit(e) - c >= 0;) e ^= 7973 << r.getBCHDigit(e) - c;
            return l << 12 | e
        }
    },
    1333: function(l, n) {
        var e = "(?:[　-〿]|[぀-ゟ]|[゠-ヿ]|[＀-￯]|[一-龯]|[★-☆]|[←-↕]|※|[‐―‘’‥…“”∥≠]|[Α-ё]|[§¨±´×÷])+";
        n.KANJI = new RegExp(e, "g"), n.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+-./:]+", "g"), n.BYTE = new RegExp("(?:(?![A-Z0-9 $%*+-./:]|(?:[　-〿]|[぀-ゟ]|[゠-ヿ]|[＀-￯]|[一-龯]|[★-☆]|[←-↕]|※|[‐―‘’‥…“”∥≠]|[Α-ё]|[§¨±´×÷])+).)+", "g"), n.NUMERIC = new RegExp("[0-9]+", "g"), n.ALPHANUMERIC = new RegExp("[A-Z $%*+-./:]+", "g");
        var u = new RegExp("^" + e + "$"),
            t = new RegExp("^[0-9]+$"),
            r = new RegExp("^[A-Z0-9 $%*+-./:]+$");
        n.testKanji = function(l) {
            return u.test(l)
        }, n.testNumeric = function(l) {
            return t.test(l)
        }, n.testAlphanumeric = function(l) {
            return r.test(l)
        }
    },
    1334: function(l, n) {
        function e(l) {
            if ("string" != typeof l) throw new Error("Color should be defined as hex string");
            var n = l.slice().replace("#", "").split("");
            if (n.length < 3 || 5 === n.length || n.length > 8) throw new Error("Invalid hex color: " + l);
            3 !== n.length && 4 !== n.length || (n = Array.prototype.concat.apply([], n.map(function(l) {
                return [l, l]
            }))), 6 === n.length && n.push("F", "F");
            var e = parseInt(n.join(""), 16);
            return {
                r: e >> 24 & 255,
                g: e >> 16 & 255,
                b: e >> 8 & 255,
                a: 255 & e
            }
        }
        n.getOptions = function(l) {
            l || (l = {}), l.color || (l.color = {});
            return {
                scale: l.scale || 4,
                margin: void 0 === l.margin || null === l.margin || l.margin < 0 ? 4 : l.margin,
                color: {
                    dark: e(l.color.dark || "#000000ff"),
                    light: e(l.color.light || "#ffffffff")
                },
                type: l.type,
                rendererOpts: l.rendererOpts || {}
            }
        }, n.qrToImageData = function(l, n, e, u, t) {
            for (var r = n.modules.size, i = n.modules.data, o = e * u, a = r * u + 2 * o, s = [t.light, t.dark], c = 0; c < a; c++)
                for (var f = 0; f < a; f++) {
                    var _ = 4 * (c * a + f),
                        d = t.light;
                    if (c >= o && f >= o && c < a - o && f < a - o) {
                        d = s[i[Math.floor((c - o) / u) * r + Math.floor((f - o) / u)]]
                    }
                    l[_++] = d.r, l[_++] = d.g, l[_++] = d.b, l[_] = d.a
                }
        }
    },
    1339: function(l, n, e) {
        function u(l, n, e, u, r) {
            var i = arguments.length - 1;
            if (i < 2) throw new Error("Too few arguments provided");
            if (2 === i ? (r = e, e = n, n = u = void 0) : 3 === i && (n.getContext && void 0 === r ? (r = u, u = void 0) : (r = u, u = e, e = n, n = void 0)), "function" != typeof r) throw new Error("Callback required as last argument");
            try {
                r(null, l(t.create(e, u), n, u))
            } catch (l) {
                r(l)
            }
        }
        var t = e(1340),
            r = e(1356),
            i = e(1357);
        n.create = t.create, n.toCanvas = u.bind(null, r.render), n.toDataURL = u.bind(null, r.renderToDataURL), n.toString = u.bind(null, function(l, n, e) {
            return i.render(l, e)
        }), n.qrcodedraw = function() {
            return {
                draw: n.toCanvas
            }
        }
    },
    1340: function(l, n, e) {
        function u(l, n, e) {
            var u, t, r = l.size,
                i = p.getEncodedBits(n, e);
            for (u = 0; u < 15; u++) t = 1 == (i >> u & 1), l.set(u < 6 ? u : u < 8 ? u + 1 : r - 15 + u, 8, t, !0), l.set(8, u < 8 ? r - u - 1 : u < 9 ? 15 - u - 1 + 1 : 15 - u - 1, t, !0);
            l.set(r - 8, 8, 1, !0)
        }

        function t(l, n, e) {
            var u = new s;
            e.forEach(function(n) {
                u.put(n.mode.bit, 4), u.put(n.getLength(), v.getCharCountIndicator(n.mode, l)), n.write(u)
            });
            var t = 8 * (o.getSymbolTotalCodewords(l) - g.getTotalCodewordsCount(l, n));
            for (u.getLengthInBits() + 4 <= t && u.put(0, 4); u.getLengthInBits() % 8 != 0;) u.putBit(0);
            for (var r = (t - u.getLengthInBits()) / 8, a = 0; a < r; a++) u.put(a % 2 ? 17 : 236, 8);
            return function(l, n, e) {
                for (var u = o.getSymbolTotalCodewords(n), t = g.getTotalCodewordsCount(n, e), r = u - t, a = g.getBlocksCount(n, e), s = a - u % a, c = Math.floor(u / a), f = Math.floor(r / a), _ = f + 1, d = c - f, m = new h(d), p = 0, v = new Array(a), y = new Array(a), b = 0, w = new i(l.buffer), I = 0; I < a; I++) {
                    var C = I < s ? f : _;
                    v[I] = w.slice(p, p + C), y[I] = m.encode(v[I]), p += C, b = Math.max(b, C)
                }
                var S, E, P = new i(u),
                    T = 0;
                for (S = 0; S < b; S++)
                    for (E = 0; E < a; E++) S < v[E].length && (P[T++] = v[E][S]);
                for (S = 0; S < d; S++)
                    for (E = 0; E < a; E++) P[T++] = y[E][S];
                return P
            }(u, l, n)
        }

        function r(l, n, e) {
            var r;
            if (b(l)) r = y.fromArray(l);
            else {
                if ("string" != typeof l) throw new Error("Invalid data");
                var i = n;
                if (!i) {
                    var a = y.rawSplit(l);
                    i = m.getBestVersionForData(a, e)
                }
                r = y.fromString(l, i || 40)
            }
            var s = m.getBestVersionForData(r, e);
            if (!s) throw new Error("The amount of data is too big to be stored in a QR Code");
            if (n) {
                if (n < s) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + s + ".\n")
            } else n = s;
            var g = t(n, e, r),
                h = o.getSymbolSize(n),
                p = new c(h);
            ! function(l, n) {
                for (var e = l.size, u = _.getPositions(n), t = 0; t < u.length; t++)
                    for (var r = u[t][0], i = u[t][1], o = -1; o <= 7; o++)
                        if (!(r + o <= -1 || e <= r + o))
                            for (var a = -1; a <= 7; a++) i + a <= -1 || e <= i + a || l.set(r + o, i + a, o >= 0 && o <= 6 && (0 === a || 6 === a) || a >= 0 && a <= 6 && (0 === o || 6 === o) || o >= 2 && o <= 4 && a >= 2 && a <= 4, !0)
            }(p, n),
            function(l) {
                for (var n = l.size, e = 8; e < n - 8; e++) {
                    var u = e % 2 == 0;
                    l.set(e, 6, u, !0), l.set(6, e, u, !0)
                }
            }(p),
            function(l, n) {
                for (var e = f.getPositions(n), u = 0; u < e.length; u++)
                    for (var t = e[u][0], r = e[u][1], i = -2; i <= 2; i++)
                        for (var o = -2; o <= 2; o++) l.set(t + i, r + o, -2 === i || 2 === i || -2 === o || 2 === o || 0 === i && 0 === o, !0)
            }(p, n), u(p, e, 0), n >= 7 && function(l, n) {
                    for (var e, u, t, r = l.size, i = m.getEncodedBits(n), o = 0; o < 18; o++) e = Math.floor(o / 3), l.set(e, u = o % 3 + r - 8 - 3, t = 1 == (i >> o & 1), !0), l.set(u, e, t, !0)
                }(p, n),
                function(l, n) {
                    for (var e = l.size, u = -1, t = e - 1, r = 7, i = 0, o = e - 1; o > 0; o -= 2)
                        for (6 === o && o--;;) {
                            for (var a = 0; a < 2; a++)
                                if (!l.isReserved(t, o - a)) {
                                    var s = !1;
                                    i < n.length && (s = 1 == (n[i] >>> r & 1)), l.set(t, o - a, s), -1 == --r && (i++, r = 7)
                                } if ((t += u) < 0 || e <= t) {
                                t -= u, u = -u;
                                break
                            }
                        }
                }(p, g);
            var v = d.getBestMask(p, u.bind(null, p, e));
            return d.applyMask(v, p), u(p, e, v), {
                modules: p,
                version: n,
                errorCorrectionLevel: e,
                maskPattern: v,
                segments: r
            }
        }
        var i = e(1326),
            o = e(1324),
            a = e(1327),
            s = e(1341),
            c = e(1342),
            f = e(1343),
            _ = e(1344),
            d = e(1345),
            g = e(1331),
            h = e(1346),
            m = e(1332),
            p = e(1349),
            v = e(1325),
            y = e(1350),
            b = e(406);
        n.create = function(l, n) {
            if (void 0 === l || "" === l) throw new Error("No input text");
            var e, u = a.M;
            return void 0 !== n && (u = a.from(n.errorCorrectionLevel, a.M), e = m.from(n.version), n.toSJISFunc && o.setToSJISFunction(n.toSJISFunc)), r(l, e, u)
        }
    },
    1341: function(l, n) {
        function e() {
            this.buffer = [], this.length = 0
        }
        e.prototype = {
            get: function(l) {
                var n = Math.floor(l / 8);
                return 1 == (this.buffer[n] >>> 7 - l % 8 & 1)
            },
            put: function(l, n) {
                for (var e = 0; e < n; e++) this.putBit(1 == (l >>> n - e - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(l) {
                var n = Math.floor(this.length / 8);
                this.buffer.length <= n && this.buffer.push(0), l && (this.buffer[n] |= 128 >>> this.length % 8), this.length++
            }
        }, l.exports = e
    },
    1342: function(l, n, e) {
        function u(l) {
            if (!l || l < 1) throw new Error("BitMatrix size must be defined and greater than 0");
            this.size = l, this.data = new t(l * l), this.data.fill(0), this.reservedBit = new t(l * l), this.reservedBit.fill(0)
        }
        var t = e(1326);
        u.prototype.set = function(l, n, e, u) {
            var t = l * this.size + n;
            this.data[t] = e, u && (this.reservedBit[t] = !0)
        }, u.prototype.get = function(l, n) {
            return this.data[l * this.size + n]
        }, u.prototype.xor = function(l, n, e) {
            this.data[l * this.size + n] ^= e
        }, u.prototype.isReserved = function(l, n) {
            return this.reservedBit[l * this.size + n]
        }, l.exports = u
    },
    1343: function(l, n, e) {
        var u = e(1324).getSymbolSize;
        n.getRowColCoords = function(l) {
            if (1 === l) return [];
            for (var n = Math.floor(l / 7) + 2, e = u(l), t = 145 === e ? 26 : 2 * Math.ceil((e - 13) / (2 * n - 2)), r = [e - 7], i = 1; i < n - 1; i++) r[i] = r[i - 1] - t;
            return r.push(6), r.reverse()
        }, n.getPositions = function(l) {
            for (var e = [], u = n.getRowColCoords(l), t = u.length, r = 0; r < t; r++)
                for (var i = 0; i < t; i++) 0 === r && 0 === i || 0 === r && i === t - 1 || r === t - 1 && 0 === i || e.push([u[r], u[i]]);
            return e
        }
    },
    1344: function(l, n, e) {
        var u = e(1324).getSymbolSize;
        n.getPositions = function(l) {
            var n = u(l);
            return [
                [0, 0],
                [n - 7, 0],
                [0, n - 7]
            ]
        }
    },
    1345: function(l, n) {
        function e(l, e, u) {
            switch (l) {
                case n.Patterns.PATTERN000:
                    return (e + u) % 2 == 0;
                case n.Patterns.PATTERN001:
                    return e % 2 == 0;
                case n.Patterns.PATTERN010:
                    return u % 3 == 0;
                case n.Patterns.PATTERN011:
                    return (e + u) % 3 == 0;
                case n.Patterns.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(u / 3)) % 2 == 0;
                case n.Patterns.PATTERN101:
                    return e * u % 2 + e * u % 3 == 0;
                case n.Patterns.PATTERN110:
                    return (e * u % 2 + e * u % 3) % 2 == 0;
                case n.Patterns.PATTERN111:
                    return (e * u % 3 + (e + u) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + l)
            }
        }
        n.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        var u = 3,
            t = 3,
            r = 40,
            i = 10;
        n.getPenaltyN1 = function(l) {
            for (var n = l.size, e = 0, t = 0, r = 0, i = null, o = null, a = 0; a < n; a++) {
                t = r = 0, i = o = null;
                for (var s = 0; s < n; s++) {
                    var c = l.get(a, s);
                    c === i ? t++ : (t >= 5 && (e += u + (t - 5)), i = c, t = 1), (c = l.get(s, a)) === o ? r++ : (r >= 5 && (e += u + (r - 5)), o = c, r = 1)
                }
                t >= 5 && (e += u + (t - 5)), r >= 5 && (e += u + (r - 5))
            }
            return e
        }, n.getPenaltyN2 = function(l) {
            for (var n = l.size, e = 0, u = 0; u < n - 1; u++)
                for (var r = 0; r < n - 1; r++) {
                    var i = l.get(u, r) + l.get(u, r + 1) + l.get(u + 1, r) + l.get(u + 1, r + 1);
                    4 !== i && 0 !== i || e++
                }
            return e * t
        }, n.getPenaltyN3 = function(l) {
            for (var n = l.size, e = 0, u = 0, t = 0, i = 0; i < n; i++) {
                u = t = 0;
                for (var o = 0; o < n; o++) u = u << 1 & 2047 | l.get(i, o), o >= 10 && (1488 === u || 93 === u) && e++, t = t << 1 & 2047 | l.get(o, i), o >= 10 && (1488 === t || 93 === t) && e++
            }
            return e * r
        }, n.getPenaltyN4 = function(l) {
            for (var n = 0, e = l.data.length, u = 0; u < e; u++) n += l.data[u];
            return Math.abs(Math.ceil(100 * n / e / 5) - 10) * i
        }, n.applyMask = function(l, n) {
            for (var u = n.size, t = 0; t < u; t++)
                for (var r = 0; r < u; r++) n.isReserved(r, t) || n.xor(r, t, e(l, r, t))
        }, n.getBestMask = function(l, e) {
            for (var u = Object.keys(n.Patterns).length, t = 0, r = 1 / 0, i = 0; i < u; i++) {
                e(i), n.applyMask(i, l);
                var o = n.getPenaltyN1(l) + n.getPenaltyN2(l) + n.getPenaltyN3(l) + n.getPenaltyN4(l);
                n.applyMask(i, l), o < r && (r = o, t = i)
            }
            return t
        }
    },
    1346: function(l, n, e) {
        function u(l) {
            this.genPoly = void 0, this.degree = l, this.degree && this.initialize(this.degree)
        }
        var t = e(1326),
            r = e(1347);
        u.prototype.initialize = function(l) {
            this.degree = l, this.genPoly = r.generateECPolynomial(this.degree)
        }, u.prototype.encode = function(l) {
            if (!this.genPoly) throw new Error("Encoder not initialized");
            var n = new t(this.degree);
            n.fill(0);
            var e = t.concat([l, n], l.length + this.degree),
                u = r.mod(e, this.genPoly),
                i = this.degree - u.length;
            if (i > 0) {
                var o = new t(this.degree);
                return o.fill(0), u.copy(o, i), o
            }
            return u
        }, l.exports = u
    },
    1347: function(l, n, e) {
        var u = e(1326),
            t = e(1348);
        n.mul = function(l, n) {
            var e = new u(l.length + n.length - 1);
            e.fill(0);
            for (var r = 0; r < l.length; r++)
                for (var i = 0; i < n.length; i++) e[r + i] ^= t.mul(l[r], n[i]);
            return e
        }, n.mod = function(l, n) {
            for (var e = new u(l); e.length - n.length >= 0;) {
                for (var r = e[0], i = 0; i < n.length; i++) e[i] ^= t.mul(n[i], r);
                for (var o = 0; o < e.length && 0 === e[o];) o++;
                e = e.slice(o)
            }
            return e
        }, n.generateECPolynomial = function(l) {
            for (var e = new u([1]), r = 0; r < l; r++) e = n.mul(e, [1, t.exp(r)]);
            return e
        }
    },
    1348: function(l, n, e) {
        var u = e(1326),
            t = new u(512),
            r = new u(256);
        ! function() {
            for (var l = 1, n = 0; n < 255; n++) t[n] = l, r[l] = n, 256 & (l <<= 1) && (l ^= 285);
            for (n = 255; n < 512; n++) t[n] = t[n - 255]
        }(), n.log = function(l) {
            if (l < 1) throw new Error("log(" + l + ")");
            return r[l]
        }, n.exp = function(l) {
            return t[l]
        }, n.mul = function(l, n) {
            return 0 === l || 0 === n ? 0 : t[r[l] + r[n]]
        }
    },
    1349: function(l, n, e) {
        var u = e(1324),
            t = u.getBCHDigit(1335);
        n.getEncodedBits = function(l, n) {
            for (var e = l.bit << 3 | n, r = e << 10; u.getBCHDigit(r) - t >= 0;) r ^= 1335 << u.getBCHDigit(r) - t;
            return 21522 ^ (e << 10 | r)
        }
    },
    1350: function(l, n, e) {
        function u(l) {
            return unescape(encodeURIComponent(l)).length
        }

        function t(l, n, e) {
            for (var u, t = []; null !== (u = l.exec(e));) t.push({
                data: u[0],
                index: u.index,
                mode: n,
                length: u[0].length
            });
            return t
        }

        function r(l) {
            var n, e, u = t(d.NUMERIC, a.NUMERIC, l),
                r = t(d.ALPHANUMERIC, a.ALPHANUMERIC, l);
            g.isKanjiModeEnabled() ? (n = t(d.BYTE, a.BYTE, l), e = t(d.KANJI, a.KANJI, l)) : (n = t(d.BYTE_KANJI, a.BYTE, l), e = []);
            return u.concat(r, n, e).sort(function(l, n) {
                return l.index - n.index
            }).map(function(l) {
                return {
                    data: l.data,
                    mode: l.mode,
                    length: l.length
                }
            })
        }

        function i(l, n) {
            switch (n) {
                case a.NUMERIC:
                    return s.getBitsLength(l);
                case a.ALPHANUMERIC:
                    return c.getBitsLength(l);
                case a.KANJI:
                    return _.getBitsLength(l);
                case a.BYTE:
                    return f.getBitsLength(l)
            }
        }

        function o(l, n) {
            var e, u = a.getBestModeForData(l);
            if ((e = a.from(n, u)) !== a.BYTE && e.bit < u.bit) throw new Error('"' + l + '" cannot be encoded with mode ' + a.toString(e) + ".\n Suggested mode is: " + a.toString(u));
            switch (e !== a.KANJI || g.isKanjiModeEnabled() || (e = a.BYTE), e) {
                case a.NUMERIC:
                    return new s(l);
                case a.ALPHANUMERIC:
                    return new c(l);
                case a.KANJI:
                    return new _(l);
                case a.BYTE:
                    return new f(l)
            }
        }
        var a = e(1325),
            s = e(1351),
            c = e(1352),
            f = e(1353),
            _ = e(1354),
            d = e(1333),
            g = e(1324),
            h = e(1355);
        n.fromArray = function(l) {
            return l.reduce(function(l, n) {
                return "string" == typeof n ? l.push(o(n, null)) : n.data && l.push(o(n.data, n.mode)), l
            }, [])
        }, n.fromString = function(l, e) {
            for (var t = function(l, n) {
                    for (var e = {}, u = {
                            start: {}
                        }, t = ["start"], r = 0; r < l.length; r++) {
                        for (var o = l[r], s = [], c = 0; c < o.length; c++) {
                            var f = o[c],
                                _ = "" + r + c;
                            s.push(_), e[_] = {
                                node: f,
                                lastCount: 0
                            }, u[_] = {};
                            for (var d = 0; d < t.length; d++) {
                                var g = t[d];
                                e[g] && e[g].node.mode === f.mode ? (u[g][_] = i(e[g].lastCount + f.length, f.mode) - i(e[g].lastCount, f.mode), e[g].lastCount += f.length) : (e[g] && (e[g].lastCount = f.length), u[g][_] = i(f.length, f.mode) + 4 + a.getCharCountIndicator(f.mode, n))
                            }
                        }
                        t = s
                    }
                    for (d = 0; d < t.length; d++) u[t[d]].end = 0;
                    return {
                        map: u,
                        table: e
                    }
                }(function(l) {
                    for (var n = [], e = 0; e < l.length; e++) {
                        var t = l[e];
                        switch (t.mode) {
                            case a.NUMERIC:
                                n.push([t, {
                                    data: t.data,
                                    mode: a.ALPHANUMERIC,
                                    length: t.length
                                }, {
                                    data: t.data,
                                    mode: a.BYTE,
                                    length: t.length
                                }]);
                                break;
                            case a.ALPHANUMERIC:
                                n.push([t, {
                                    data: t.data,
                                    mode: a.BYTE,
                                    length: t.length
                                }]);
                                break;
                            case a.KANJI:
                                n.push([t, {
                                    data: t.data,
                                    mode: a.BYTE,
                                    length: u(t.data)
                                }]);
                                break;
                            case a.BYTE:
                                n.push([{
                                    data: t.data,
                                    mode: a.BYTE,
                                    length: u(t.data)
                                }])
                        }
                    }
                    return n
                }(r(l, g.isKanjiModeEnabled())), e), o = h.find_path(t.map, "start", "end"), s = [], c = 1; c < o.length - 1; c++) s.push(t.table[o[c]].node);
            return n.fromArray(function(l) {
                return l.reduce(function(l, n) {
                    var e = l.length - 1 >= 0 ? l[l.length - 1] : null;
                    return e && e.mode === n.mode ? (l[l.length - 1].data += n.data, l) : (l.push(n), l)
                }, [])
            }(s))
        }, n.rawSplit = function(l) {
            return n.fromArray(r(l, g.isKanjiModeEnabled()))
        }
    },
    1351: function(l, n, e) {
        function u(l) {
            this.mode = t.NUMERIC, this.data = l.toString()
        }
        var t = e(1325);
        u.getBitsLength = function(l) {
            return 10 * Math.floor(l / 3) + (l % 3 ? l % 3 * 3 + 1 : 0)
        }, u.prototype.getLength = function() {
            return this.data.length
        }, u.prototype.getBitsLength = function() {
            return u.getBitsLength(this.data.length)
        }, u.prototype.write = function(l) {
            var n, e, u;
            for (n = 0; n + 3 <= this.data.length; n += 3) e = this.data.substr(n, 3), u = parseInt(e, 10), l.put(u, 10);
            var t = this.data.length - n;
            t > 0 && (e = this.data.substr(n), u = parseInt(e, 10), l.put(u, 3 * t + 1))
        }, l.exports = u
    },
    1352: function(l, n, e) {
        function u(l) {
            this.mode = t.ALPHANUMERIC, this.data = l
        }
        var t = e(1325),
            r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
        u.getBitsLength = function(l) {
            return 11 * Math.floor(l / 2) + l % 2 * 6
        }, u.prototype.getLength = function() {
            return this.data.length
        }, u.prototype.getBitsLength = function() {
            return u.getBitsLength(this.data.length)
        }, u.prototype.write = function(l) {
            var n;
            for (n = 0; n + 2 <= this.data.length; n += 2) {
                var e = 45 * r.indexOf(this.data[n]);
                e += r.indexOf(this.data[n + 1]), l.put(e, 11)
            }
            this.data.length % 2 && l.put(r.indexOf(this.data[n]), 6)
        }, l.exports = u
    },
    1353: function(l, n, e) {
        function u(l) {
            this.mode = r.BYTE, this.data = new t(l)
        }
        var t = e(1326),
            r = e(1325);
        u.getBitsLength = function(l) {
            return 8 * l
        }, u.prototype.getLength = function() {
            return this.data.length
        }, u.prototype.getBitsLength = function() {
            return u.getBitsLength(this.data.length)
        }, u.prototype.write = function(l) {
            for (var n = 0, e = this.data.length; n < e; n++) l.put(this.data[n], 8)
        }, l.exports = u
    },
    1354: function(l, n, e) {
        function u(l) {
            this.mode = t.KANJI, this.data = l
        }
        var t = e(1325),
            r = e(1324);
        u.getBitsLength = function(l) {
            return 13 * l
        }, u.prototype.getLength = function() {
            return this.data.length
        }, u.prototype.getBitsLength = function() {
            return u.getBitsLength(this.data.length)
        }, u.prototype.write = function(l) {
            var n;
            for (n = 0; n < this.data.length; n++) {
                var e = r.toSJIS(this.data[n]);
                if (e >= 33088 && e <= 40956) e -= 33088;
                else {
                    if (!(e >= 57408 && e <= 60351)) throw new Error("Invalid SJIS character: " + this.data[n] + "\nMake sure your charset is UTF-8");
                    e -= 49472
                }
                l.put(e = 192 * (e >>> 8 & 255) + (255 & e), 13)
            }
        }, l.exports = u
    },
    1355: function(l, n, e) {
        "use strict";
        var u = {
            single_source_shortest_paths: function(l, n, e) {
                var t = {},
                    r = {};
                r[n] = 0;
                var i = u.PriorityQueue.make();
                i.push(n, 0);
                for (var o, a, s, c, f, _, d; !i.empty();) {
                    c = (o = i.pop()).cost, f = l[a = o.value] || {};
                    for (s in f) f.hasOwnProperty(s) && (_ = c + f[s], d = r[s], (void 0 === r[s] || d > _) && (r[s] = _, i.push(s, _), t[s] = a))
                }
                if (void 0 !== e && void 0 === r[e]) {
                    var g = ["Could not find a path from ", n, " to ", e, "."].join("");
                    throw new Error(g)
                }
                return t
            },
            extract_shortest_path_from_predecessor_list: function(l, n) {
                for (var e = [], u = n; u;) e.push(u), l[u], u = l[u];
                return e.reverse(), e
            },
            find_path: function(l, n, e) {
                var t = u.single_source_shortest_paths(l, n, e);
                return u.extract_shortest_path_from_predecessor_list(t, e)
            },
            PriorityQueue: {
                make: function(l) {
                    var n, e = u.PriorityQueue,
                        t = {};
                    l = l || {};
                    for (n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t.queue = [], t.sorter = l.sorter || e.default_sorter, t
                },
                default_sorter: function(l, n) {
                    return l.cost - n.cost
                },
                push: function(l, n) {
                    this.queue.push({
                        value: l,
                        cost: n
                    }), this.queue.sort(this.sorter)
                },
                pop: function() {
                    return this.queue.shift()
                },
                empty: function() {
                    return 0 === this.queue.length
                }
            }
        };
        l.exports = u
    },
    1356: function(l, n, e) {
        var u = e(1334);
        n.render = function(l, n, e) {
            var t = e,
                r = n;
            void 0 !== t || n && n.getContext || (t = n, n = void 0), n || (r = function() {
                try {
                    return document.createElement("canvas")
                } catch (l) {
                    throw new Error("You need to specify a canvas element")
                }
            }()), t = u.getOptions(t);
            var i = (l.modules.size + 2 * t.margin) * t.scale,
                o = r.getContext("2d"),
                a = o.createImageData(i, i);
            return u.qrToImageData(a.data, l, t.margin, t.scale, t.color),
                function(l, n, e) {
                    l.clearRect(0, 0, n.width, n.height), n.style || (n.style = {}), n.height = e, n.width = e, n.style.height = e + "px", n.style.width = e + "px"
                }(o, r, i), o.putImageData(a, 0, 0), r
        }, n.renderToDataURL = function(l, e, u) {
            var t = u;
            void 0 !== t || e && e.getContext || (t = e, e = void 0), t || (t = {});
            return n.render(l, e, t).toDataURL(t.type || "image/png", (t.rendererOpts || {}).quality)
        }
    },
    1357: function(l, n, e) {
        function u(l) {
            return 'fill="rgb(' + [l.r, l.g, l.b].join(",") + ')" fill-opacity="' + (l.a / 255).toFixed(2) + '"'
        }
        var t = e(1334);
        n.render = function(l, n) {
            var e = t.getOptions(n),
                r = l.modules.size,
                i = l.modules.data,
                o = (r + 2 * e.margin) * e.scale,
                a = '<?xml version="1.0" encoding="utf-8"?>\n';
            a += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n', a += '<svg version="1.1" baseProfile="full"', a += ' width="' + o + '" height="' + o + '"', a += ' viewBox="0 0 ' + o + " " + o + '"', a += ' xmlns="http://www.w3.org/2000/svg"', a += ' xmlns:xlink="http://www.w3.org/1999/xlink"', a += ' xmlns:ev="http://www.w3.org/2001/xml-events">\n', a += '<rect x="0" y="0" width="' + o + '" height="' + o + '" ' + u(e.color.light) + " />\n", a += '<defs><rect id="p" width="' + e.scale + '" height="' + e.scale + '" /></defs>\n', a += "<g " + u(e.color.dark) + ">\n";
            for (var s = 0; s < r; s++)
                for (var c = 0; c < r; c++)
                    if (i[s * r + c]) {
                        a += '<use x="' + (e.margin + c) * e.scale + '" y="' + (e.margin + s) * e.scale + '" xlink:href="#p" />\n'
                    } return a += "</g>\n", a += "</svg>"
        }
    },
    1362: function(l, n, e) {
        "use strict";

        function u(l) {
            return d._29(0, [(l()(), d._5(0, 0, null, null, 11, "ion-row", [
                ["class", "my-4 row"]
            ], null, null, null, null, null)), d._4(1, 16384, null, 0, g.a, [], null, null), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._5(3, 0, null, null, 3, "ion-col", [
                ["class", "col"],
                ["col-5", ""]
            ], null, null, null, null, null)), d._4(4, 16384, null, 0, h.a, [], null, null), (l()(), d._27(5, null, ["", ""])), d._20(131072, m.i, [m.j, d.g]), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._5(8, 0, null, null, 2, "ion-col", [
                ["class", "bold col"],
                ["col-7", ""],
                ["text-right", ""]
            ], null, null, null, null, null)), d._4(9, 16384, null, 0, h.a, [], null, null), (l()(), d._27(10, null, ["", ""])), (l()(), d._27(-1, null, ["\n      "]))], null, function(l, n) {
                var e = n.component;
                l(n, 5, 0, d._28(n, 5, 0, d._17(n, 6).transform("MySJID")));
                l(n, 10, 0, e.employee.userName)
            })
        }

        function t(l) {
            return d._29(0, [(l()(), d._5(0, 0, null, null, 11, "ion-row", [
                ["class", "my-4 row"]
            ], null, null, null, null, null)), d._4(1, 16384, null, 0, g.a, [], null, null), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._5(3, 0, null, null, 3, "ion-col", [
                ["class", "col"],
                ["col-5", ""]
            ], null, null, null, null, null)), d._4(4, 16384, null, 0, h.a, [], null, null), (l()(), d._27(5, null, ["", ""])), d._20(131072, m.i, [m.j, d.g]), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._5(8, 0, null, null, 2, "ion-col", [
                ["class", "bold col"],
                ["col-7", ""],
                ["text-right", ""]
            ], null, null, null, null, null)), d._4(9, 16384, null, 0, h.a, [], null, null), (l()(), d._27(10, null, ["", ""])), (l()(), d._27(-1, null, ["\n      "]))], null, function(l, n) {
                var e = n.component;
                l(n, 5, 0, d._28(n, 5, 0, d._17(n, 6).transform("IC")));
                l(n, 10, 0, e.employee.licenceNumber)
            })
        }

        function r(l) {
            return d._29(0, [(l()(), d._5(0, 0, null, null, 11, "ion-row", [
                ["class", "my-4 row"]
            ], null, null, null, null, null)), d._4(1, 16384, null, 0, g.a, [], null, null), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._5(3, 0, null, null, 3, "ion-col", [
                ["class", "col"],
                ["col-5", ""]
            ], null, null, null, null, null)), d._4(4, 16384, null, 0, h.a, [], null, null), (l()(), d._27(5, null, ["", ""])), d._20(131072, m.i, [m.j, d.g]), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._5(8, 0, null, null, 2, "ion-col", [
                ["class", "bold col"],
                ["col-7", ""],
                ["text-right", ""]
            ], null, null, null, null, null)), d._4(9, 16384, null, 0, h.a, [], null, null), (l()(), d._27(10, null, ["", ""])), (l()(), d._27(-1, null, ["\n      "]))], null, function(l, n) {
                var e = n.component;
                l(n, 5, 0, d._28(n, 5, 0, d._17(n, 6).transform("userState")));
                l(n, 10, 0, e.employee.organizationName)
            })
        }

        function i(l) {
            return d._29(0, [(l()(), d._5(0, 0, null, null, 38, null, null, null, null, null, null, null)), (l()(), d._27(-1, null, ["\n  "])), (l()(), d._5(2, 0, null, null, 16, "ion-card", [], null, null, null, null, null)), d._4(3, 16384, null, 0, p.a, [v.a, d.k, d.F], null, null), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._5(5, 0, null, null, 12, "ion-card-content", [], null, null, null, null, null)), d._4(6, 16384, null, 0, y.a, [v.a, d.k, d.F], null, null), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._0(16777216, null, null, 1, null, u)), d._4(9, 16384, null, 0, b.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._0(16777216, null, null, 1, null, t)), d._4(12, 16384, null, 0, b.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._0(16777216, null, null, 1, null, r)), d._4(15, 16384, null, 0, b.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), d._27(-1, null, ["\n\n      "])), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._27(-1, null, ["\n  "])), (l()(), d._27(-1, null, ["\n\n  "])), (l()(), d._5(20, 0, null, null, 17, "ion-card", [
                ["class", "refresh"]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var u = !0;
                if ("click" === n) {
                    u = !1 !== l.component.doRefreshPage() && u
                }
                return u
            }, null, null)), d._4(21, 16384, null, 0, p.a, [v.a, d.k, d.F], null, null), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._5(23, 0, null, null, 13, "ion-card-content", [], null, null, null, null, null)), d._4(24, 16384, null, 0, y.a, [v.a, d.k, d.F], null, null), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._5(26, 0, null, null, 5, "div", [
                ["class", "imgContent"]
            ], null, null, null, null, null)), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._5(28, 0, null, null, 1, "img", [
                ["src", "/assets/imgs/audit-icons/refresh.svg"]
            ], null, null, null, null, null)), d._4(29, 278528, null, 0, b.h, [d.t, d.u, d.k, d.G], {
                ngClass: [0, "ngClass"]
            }, null), (l()(), d._27(30, null, ["\n        ", "\n      "])), d._20(131072, m.i, [m.j, d.g]), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._5(33, 0, null, null, 2, "div", [
                ["class", "btn"]
            ], null, null, null, null, null)), (l()(), d._27(34, null, ["", ""])), d._20(131072, m.i, [m.j, d.g]), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._27(-1, null, ["\n  "])), (l()(), d._27(-1, null, ["\n"]))], function(l, n) {
                var e = n.component;
                l(n, 9, 0, e.employee.userName);
                l(n, 12, 0, e.employee.licenceNumber);
                l(n, 15, 0, e.employee.organizationName);
                l(n, 29, 0, e.clicked ? "rotate" : "")
            }, function(l, n) {
                l(n, 30, 0, d._28(n, 30, 0, d._17(n, 31).transform("clickToRefreshYourProfile")));
                l(n, 34, 0, d._28(n, 34, 0, d._17(n, 35).transform("refresh")))
            })
        }

        function o(l) {
            return d._29(0, [(l()(), d._5(0, 0, null, null, 0, "img", [], [
                [8, "src", 4]
            ], null, null, null, null))], null, function(l, n) {
                l(n, 0, 0, n.component.generated)
            })
        }

        function a(l) {
            return d._29(0, [(l()(), d._5(0, 0, null, null, 0, "img", [
                ["class", "qrlogos"],
                ["src", "assets/imgs/loading.gif"]
            ], null, null, null, null, null))], null, null)
        }

        function s(l) {
            return d._29(0, [(l()(), d._5(0, 0, null, null, 0, "img", [
                ["class", "pl-3 pr-1"]
            ], [
                [8, "src", 4]
            ], null, null, null, null))], null, function(l, n) {
                l(n, 0, 0, n.component.img2)
            })
        }

        function c(l) {
            return d._29(0, [(l()(), d._5(0, 0, null, null, 0, "img", [
                ["class", "pr-3 pl-1"]
            ], [
                [8, "src", 4]
            ], null, null, null, null))], null, function(l, n) {
                l(n, 0, 0, n.component.img1)
            })
        }

        function f(l) {
            return d._29(0, [(l()(), d._5(0, 0, null, null, 67, null, null, null, null, null, null, null)), (l()(), d._27(-1, null, ["\n  "])), (l()(), d._5(2, 0, null, null, 64, "ion-card", [], null, null, null, null, null)), d._4(3, 16384, null, 0, p.a, [v.a, d.k, d.F], null, null), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._5(5, 0, null, null, 5, "ion-card-content", [], null, null, null, null, null)), d._4(6, 16384, null, 0, y.a, [v.a, d.k, d.F], null, null), (l()(), d._5(7, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), d._27(8, null, ["", "\n        ", ""])), d._20(131072, m.i, [m.j, d.g]), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._5(12, 0, null, null, 1, "img", [
                ["imageCache", ""]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, e) {
                var u = !0;
                if ("load" === n) {
                    u = !1 !== d._17(l, 13).onLoad() && u
                }
                if ("error" === n) {
                    u = !1 !== d._17(l, 13).onError() && u
                }
                return u
            }, null, null)), d._4(13, 540672, null, 0, w.a, [I.a, d.k, C.a], {
                cache: [0, "cache"]
            }, null), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._5(15, 0, null, null, 8, "ion-card-content", [
                ["class", "qrcode"]
            ], null, null, null, null, null)), d._4(16, 16384, null, 0, y.a, [v.a, d.k, d.F], null, null), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._0(16777216, null, null, 1, null, o)), d._4(19, 16384, null, 0, b.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._0(16777216, null, null, 1, null, a)), d._4(22, 16384, null, 0, b.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._5(25, 0, null, null, 20, "ion-grid", [
                ["class", "grid"]
            ], null, null, null, null, null)), d._4(26, 16384, null, 0, S.a, [], null, null), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._5(28, 0, null, null, 16, "ion-row", [
                ["class", "mb-3 row"]
            ], null, null, null, null, null)), d._4(29, 16384, null, 0, g.a, [], null, null), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._5(31, 0, null, null, 5, "ion-col", [
                ["class", "col"],
                ["col-6", ""]
            ], null, null, null, null, null)), d._4(32, 16384, null, 0, h.a, [], null, null), (l()(), d._27(-1, null, ["\n          "])), (l()(), d._0(16777216, null, null, 1, null, s)), d._4(35, 16384, null, 0, b.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._5(38, 0, null, null, 5, "ion-col", [
                ["class", "col"],
                ["col-6", ""]
            ], null, null, null, null, null)), d._4(39, 16384, null, 0, h.a, [], null, null), (l()(), d._27(-1, null, ["\n          "])), (l()(), d._0(16777216, null, null, 1, null, c)), d._4(42, 16384, null, 0, b.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), d._27(-1, null, ["\n        "])), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._5(47, 0, null, null, 18, "ion-list", [], null, null, null, null, null)), d._4(48, 16384, null, 0, E.a, [v.a, d.k, d.F, P.a, T.l, L.a], null, null), (l()(), d._27(-1, null, ["\n      "])), (l()(), d._5(50, 0, null, null, 14, "ion-item", [
                ["class", "qrbg item item-block"]
            ], null, null, null, k.b, k.a)), d._4(51, 1097728, null, 3, D.a, [O.a, v.a, d.k, d.F, [2, x.a]], null, null), d._25(335544320, 1, {
                contentLabel: 0
            }), d._25(603979776, 2, {
                _buttons: 1
            }), d._25(603979776, 3, {
                _icons: 1
            }), d._4(55, 16384, null, 0, A.a, [], null, null), (l()(), d._27(-1, 2, ["\n        "])), (l()(), d._5(57, 0, null, 2, 2, "small", [
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), d._27(58, null, ["", ""])), d._20(131072, m.i, [m.j, d.g]), (l()(), d._27(-1, 2, ["\n        "])), (l()(), d._5(61, 0, null, 4, 0, "img", [
                ["class", "qrlogos"],
                ["item-end", ""],
                ["src", "assets/imgs/img1.png"]
            ], null, null, null, null, null)), (l()(), d._27(-1, 2, ["\n        "])), (l()(), d._5(63, 0, null, 4, 0, "img", [
                ["class", "qrlogos"],
                ["item-end", ""],
                ["src", "assets/imgs/img2.png"]
            ], null, null, null, null, null)), (l()(), d._27(-1, 2, ["\n      "])), (l()(), d._27(-1, null, ["\n    "])), (l()(), d._27(-1, null, ["\n  "])), (l()(), d._27(-1, null, ["\n"]))], function(l, n) {
                var e = n.component;
                l(n, 13, 0, e.getImagePath());
                l(n, 19, 0, e.generated);
                l(n, 22, 0, !e.generated);
                l(n, 35, 0, e.img2);
                l(n, 42, 0, e.img1)
            }, function(l, n) {
                var e = n.component;
                l(n, 8, 0, d._28(n, 8, 0, d._17(n, 9).transform("asOf")), e.UserUtils.getFormattedDate(e.employee.lastModifiedOn));
                l(n, 12, 0, e.images);
                l(n, 58, 0, d._28(n, 58, 0, d._17(n, 59).transform("fyiText")))
            })
        }

        function _(l) {
            return d._29(0, [(l()(), d._0(16777216, null, null, 1, null, i)), d._4(1, 16384, null, 0, b.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), d._27(-1, null, ["\n"])), (l()(), d._0(16777216, null, null, 1, null, f)), d._4(4, 16384, null, 0, b.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), d._27(-1, null, ["\n"]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, !e.isSubordinate);
                l(n, 4, 0, ("COVID" == e.myAppName || "COVID_DEMO" == e.myAppName || "COVID_UAE" == e.myAppName) && e.idFound)
            }, null)
        }
        e.d(n, "a", function() {
            return N
        }), n.b = _;
        var d = e(1),
            g = e(61),
            h = e(106),
            m = e(9),
            p = e(60),
            v = e(3),
            y = e(54),
            b = e(10),
            w = e(177),
            I = e(85),
            C = e(81),
            S = e(182),
            E = e(63),
            P = e(5),
            T = e(19),
            L = e(14),
            k = e(56),
            D = e(25),
            O = e(23),
            x = e(48),
            A = e(53),
            N = (e(13), e(11), d._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }))
    },
    1365: function(l, n, e) {
        "use strict";

        function u(l) {
            return r._29(0, [(l()(), r._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["class", "pic rounded-top"],
                ["imageCache", ""]
            ], null, [
                [null, "load"],
                [null, "error"]
            ], function(l, n, e) {
                var u = !0;
                if ("load" === n) {
                    u = !1 !== r._17(l, 1).onLoad() && u
                }
                if ("error" === n) {
                    u = !1 !== r._17(l, 1).onError() && u
                }
                return u
            }, null, null)), r._4(1, 540672, null, 0, i.a, [o.a, r.k, a.a], {
                cache: [0, "cache"]
            }, null)], function(l, n) {
                l(n, 1, 0, n.component.imageUrl)
            }, null)
        }

        function t(l) {
            return r._29(0, [(l()(), r._27(-1, null, ["\n\n"])), (l()(), r._5(1, 0, null, null, 18, "ion-card", [], null, null, null, null, null)), r._4(2, 16384, null, 0, s.a, [c.a, r.k, r.F], null, null), (l()(), r._27(-1, null, ["\n"])), (l()(), r._5(4, 0, null, null, 14, "div", [
                ["class", "profile-img"]
            ], null, null, null, null, null)), (l()(), r._27(-1, null, ["\n        "])), (l()(), r._5(6, 0, null, null, 0, "div", [
                ["class", "overlay"]
            ], null, null, null, null, null)), (l()(), r._27(-1, null, ["\n        "])), (l()(), r._0(16777216, null, null, 1, null, u)), r._4(9, 16384, null, 0, f.j, [r.O, r.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), r._27(-1, null, ["\n        "])), (l()(), r._5(11, 0, null, null, 6, "div", [
                ["class", "username"]
            ], null, null, null, null, null)), (l()(), r._27(-1, null, ["\n            "])), (l()(), r._5(13, 0, null, null, 0, "h3", [
                ["class", "bold"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), r._27(-1, null, ["\n            "])), (l()(), r._5(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), r._27(16, null, ["", ""])), (l()(), r._27(-1, null, ["\n        "])), (l()(), r._27(-1, null, ["\n    "])), (l()(), r._27(-1, null, ["\n"]))], function(l, n) {
                l(n, 9, 0, n.component.imageUrl)
            }, function(l, n) {
                var e = n.component;
                l(n, 13, 0, e.displayName);
                l(n, 16, 0, e.designation)
            })
        }
        e.d(n, "a", function() {
            return _
        }), n.b = t;
        var r = e(1),
            i = e(177),
            o = e(85),
            a = e(81),
            s = e(60),
            c = e(3),
            f = e(10),
            _ = (e(230), e(11), e(13), e(21), r._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }))
    }
});