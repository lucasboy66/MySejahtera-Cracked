webpackJsonp([27], {
    1315: function(l, n, u) {
        "use strict";

        function e(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 29, null, null, null, null, null, null, null)), (l()(), _._27(-1, null, ["\n        "])), (l()(), _._5(2, 0, null, null, 12, "ion-card", [], null, null, null, null, null)), _._4(3, 16384, null, 0, C.a, [T.a, _.k, _.F], null, null), (l()(), _._27(-1, null, ["\n            "])), (l()(), _._5(5, 0, null, null, 8, "ion-card-content", [
                ["class", "py-5"],
                ["text-center", ""]
            ], null, null, null, null, null)), _._4(6, 16384, null, 0, M.a, [T.a, _.k, _.F], null, null), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._5(8, 0, null, null, 0, "img", [
                ["class", "w-50 mx-auto py-5"],
                ["src", "../../assets/imgs/DependentWarning.svg"]
            ], null, null, null, null, null)), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._5(10, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), _._27(11, null, ["", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, null, ["\n            "])), (l()(), _._27(-1, null, ["\n        "])), (l()(), _._27(-1, null, ["\n        "])), (l()(), _._5(16, 0, null, null, 12, "ion-row", [
                ["class", "mt-4 row"]
            ], null, null, null, null, null)), _._4(17, 16384, null, 0, $.a, [], null, null), (l()(), _._27(-1, null, ["\n            "])), (l()(), _._5(19, 0, null, null, 8, "ion-buttons", [
                ["class", "mx-auto"]
            ], null, null, null, null, null)), _._4(20, 16384, null, 1, H.a, [T.a, _.k, _.F, [2, J.a],
                [2, q.a]
            ], null, null), _._25(603979776, 1, {
                _buttons: 1
            }), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._5(23, 0, null, null, 3, "button", [
                ["color", "btn-primary"],
                ["ion-button", ""],
                ["solid", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== l.component.nav.pop() && e
                }
                return e
            }, B.b, B.a)), _._4(24, 1097728, [
                [1, 4]
            ], 0, G.a, [
                [8, ""], T.a, _.k, _.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (l()(), _._27(25, 0, ["", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, null, ["\n            "])), (l()(), _._27(-1, null, ["\n        "])), (l()(), _._27(-1, null, ["\n    "]))], function(l, n) {
                l(n, 24, 0, "btn-primary", "")
            }, function(l, n) {
                l(n, 11, 0, _._28(n, 11, 0, _._17(n, 12).transform("alreadyRegistered")));
                l(n, 25, 0, _._28(n, 25, 0, _._17(n, 26).transform("close")))
            })
        }

        function a(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), _._27(1, null, ["", ""]))], null, function(l, n) {
                var u = n.component;
                l(n, 1, 0, u.userUtils.getInitials(null == u.user ? null : u.user.displayName))
            })
        }

        function t(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""]
            ], null, [
                [null, "load"],
                [null, "error"]
            ], function(l, n, u) {
                var e = !0;
                if ("load" === n) {
                    e = !1 !== _._17(l, 1).onLoad() && e
                }
                if ("error" === n) {
                    e = !1 !== _._17(l, 1).onError() && e
                }
                return e
            }, null, null)), _._4(1, 540672, null, 0, Y.a, [W.a, _.k, z.a], {
                cache: [0, "cache"]
            }, null)], function(l, n) {
                var u = n.component;
                l(n, 1, 0, u.userUtils.getImagePath(null == u.user ? null : u.user.imageUrl))
            }, null)
        }

        function i(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 26, "mg-container", [], null, null, null, null, null)), (l()(), _._27(-1, null, ["\n                    "])), (l()(), _._5(2, 0, null, null, 23, "ion-item", [
                ["class", "item item-block"]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== l.component.getVaccineDetails(l.context.$implicit.employeeId, l.context.$implicit) && e
                }
                return e
            }, K.b, K.a)), _._4(3, 1097728, null, 3, Q.a, [X.a, T.a, _.k, _.F, [2, Z.a]], null, null), _._25(335544320, 5, {
                contentLabel: 0
            }), _._25(603979776, 6, {
                _buttons: 1
            }), _._25(603979776, 7, {
                _icons: 1
            }), _._4(7, 16384, null, 0, ll.a, [], null, null), (l()(), _._27(-1, 2, ["\n                        "])), (l()(), _._5(9, 0, null, 0, 6, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), _._4(10, 16384, null, 0, nl.a, [], null, null), (l()(), _._27(-1, null, ["\n                            "])), (l()(), _._5(12, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), _._27(13, null, ["", ""])), (l()(), _._27(-1, null, ["\n                            "])), (l()(), _._27(-1, null, ["\n                        "])), (l()(), _._27(-1, 2, ["\n                        "])), (l()(), _._5(17, 0, null, 2, 2, "p", [
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), _._27(18, null, ["", " ", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, 2, ["\n                        "])), (l()(), _._5(21, 0, null, 2, 0, "p", [], null, null, null, null, null)), (l()(), _._27(-1, 2, ["\n                        "])), (l()(), _._5(23, 0, null, 4, 1, "ion-icon", [
                ["color", "icon-light"],
                ["item-end", ""],
                ["name", "arrow-forward"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), _._4(24, 147456, [
                [7, 4]
            ], 0, ul.a, [T.a, _.k, _.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (l()(), _._27(-1, 2, ["\n                    "])), (l()(), _._27(-1, null, ["\n                "]))], function(l, n) {
                l(n, 24, 0, "icon-light", "arrow-forward")
            }, function(l, n) {
                l(n, 13, 0, n.component.userUtils.getInitials(null == n.context.$implicit ? null : n.context.$implicit.displayName));
                l(n, 18, 0, _._28(n, 18, 0, _._17(n, 19).transform("vaccineFor")), null == n.context.$implicit ? null : n.context.$implicit.displayName);
                l(n, 23, 0, _._17(n, 24)._hidden)
            })
        }

        function o(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 4, null, null, null, null, null, null, null)), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._0(16777216, null, null, 1, null, i)), _._4(3, 802816, null, 0, el.i, [_.O, _.L, _.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), _._27(-1, null, ["\n            "]))], function(l, n) {
                l(n, 3, 0, n.component.vaccineDependents)
            }, null)
        }

        function r(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 20, "ion-item", [
                ["class", "item item-block"]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== l.component.VaccineDependentPage() && e
                }
                return e
            }, K.b, K.a)), _._4(1, 1097728, null, 3, Q.a, [X.a, T.a, _.k, _.F, [2, Z.a]], null, null), _._25(335544320, 8, {
                contentLabel: 0
            }), _._25(603979776, 9, {
                _buttons: 1
            }), _._25(603979776, 10, {
                _icons: 1
            }), _._4(5, 16384, null, 0, ll.a, [], null, null), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(7, 0, null, 0, 4, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), _._4(8, 16384, null, 0, nl.a, [], null, null), (l()(), _._27(-1, null, ["\n                    "])), (l()(), _._5(10, 0, null, null, 0, "img", [
                ["src", "assets/imgs/audit-icons/dependents_new.svg"]
            ], null, null, null, null, null)), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(14, 0, null, 2, 2, "p", [
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), _._27(15, null, ["", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(18, 0, null, 4, 1, "ion-icon", [
                ["color", "icon-light"],
                ["item-end", ""],
                ["name", "arrow-forward"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), _._4(19, 147456, [
                [10, 4]
            ], 0, ul.a, [T.a, _.k, _.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (l()(), _._27(-1, 2, ["\n            "]))], function(l, n) {
                l(n, 19, 0, "icon-light", "arrow-forward")
            }, function(l, n) {
                l(n, 15, 0, _._28(n, 15, 0, _._17(n, 16).transform("add/Remove")));
                l(n, 18, 0, _._17(n, 19)._hidden)
            })
        }

        function c(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 86, "ion-card", [], null, null, null, null, null)), _._4(1, 16384, null, 0, C.a, [T.a, _.k, _.F], null, null), (l()(), _._27(-1, null, ["\n        "])), (l()(), _._5(3, 0, null, null, 82, "ion-list", [], null, null, null, null, null)), _._4(4, 16384, null, 0, al.a, [T.a, _.k, _.F, tl.a, il.l, ol.a], null, null), (l()(), _._27(-1, null, ["\n            "])), (l()(), _._5(6, 0, null, null, 25, "ion-item", [
                ["class", "item item-block"]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== l.component.getVaccineDetails() && e
                }
                return e
            }, K.b, K.a)), _._4(7, 1097728, null, 3, Q.a, [X.a, T.a, _.k, _.F, [2, Z.a]], null, null), _._25(335544320, 2, {
                contentLabel: 0
            }), _._25(603979776, 3, {
                _buttons: 1
            }), _._25(603979776, 4, {
                _icons: 1
            }), _._4(11, 16384, null, 0, ll.a, [], null, null), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(13, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), _._4(14, 16384, null, 0, nl.a, [], null, null), (l()(), _._27(-1, null, ["\n                    "])), (l()(), _._0(16777216, null, null, 1, null, a)), _._4(17, 16384, null, 0, el.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, null, ["\n                    "])), (l()(), _._0(16777216, null, null, 1, null, t)), _._4(20, 16384, null, 0, el.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(23, 0, null, 2, 2, "p", [
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), _._27(24, null, ["", " ", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(27, 0, null, 2, 0, "p", [], null, null, null, null, null)), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(29, 0, null, 4, 1, "ion-icon", [
                ["color", "icon-light"],
                ["item-end", ""],
                ["name", "arrow-forward"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), _._4(30, 147456, [
                [4, 4]
            ], 0, ul.a, [T.a, _.k, _.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (l()(), _._27(-1, 2, ["\n            "])), (l()(), _._27(-1, null, ["\n\n            "])), (l()(), _._0(16777216, null, null, 1, null, o)), _._4(34, 16384, null, 0, el.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, null, ["\n\n            "])), (l()(), _._0(16777216, null, null, 1, null, r)), _._4(37, 16384, null, 0, el.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, null, ["\n\n            "])), (l()(), _._5(39, 0, null, null, 23, "ion-item", [
                ["class", "item item-block"]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== l.component.malaysiaVaccinationPortal() && e
                }
                return e
            }, K.b, K.a)), _._4(40, 1097728, null, 3, Q.a, [X.a, T.a, _.k, _.F, [2, Z.a]], null, null), _._25(335544320, 11, {
                contentLabel: 0
            }), _._25(603979776, 12, {
                _buttons: 1
            }), _._25(603979776, 13, {
                _icons: 1
            }), _._4(44, 16384, null, 0, ll.a, [], null, null), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(46, 0, null, 0, 4, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), _._4(47, 16384, null, 0, nl.a, [], null, null), (l()(), _._27(-1, null, ["\n                    "])), (l()(), _._5(49, 0, null, null, 0, "img", [
                ["src", "/assets/imgs/audit-icons/vaccineBottle.svg"]
            ], null, null, null, null, null)), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(53, 0, null, 2, 1, "p", [
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), _._27(-1, null, ["www.vaksincovid.gov.my​"])), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(56, 0, null, 2, 2, "p", [
                ["class", "small text-light"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), _._27(57, null, ["", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(60, 0, null, 4, 1, "ion-icon", [
                ["color", "icon-light"],
                ["item-end", ""],
                ["name", "arrow-forward"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), _._4(61, 147456, [
                [13, 4]
            ], 0, ul.a, [T.a, _.k, _.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (l()(), _._27(-1, 2, ["\n            "])), (l()(), _._27(-1, null, ["\n\n            "])), (l()(), _._5(64, 0, null, null, 19, "ion-item", [
                ["class", "item item-block"]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== l.component.vaccineResources() && e
                }
                return e
            }, K.b, K.a)), _._4(65, 1097728, null, 3, Q.a, [X.a, T.a, _.k, _.F, [2, Z.a]], null, null), _._25(335544320, 14, {
                contentLabel: 0
            }), _._25(603979776, 15, {
                _buttons: 1
            }), _._25(603979776, 16, {
                _icons: 1
            }), _._4(69, 16384, null, 0, ll.a, [], null, null), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(71, 0, null, 0, 4, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), _._4(72, 16384, null, 0, nl.a, [], null, null), (l()(), _._27(-1, null, ["\n                    "])), (l()(), _._5(74, 0, null, null, 0, "img", [
                ["src", "/assets/imgs/audit-icons/additionalResources_new.svg"]
            ], null, null, null, null, null)), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(77, 0, null, 2, 2, "p", [
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), _._27(78, null, ["", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._5(81, 0, null, 4, 1, "ion-icon", [
                ["color", "icon-light"],
                ["item-end", ""],
                ["name", "arrow-forward"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), _._4(82, 147456, [
                [16, 4]
            ], 0, ul.a, [T.a, _.k, _.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (l()(), _._27(-1, 2, ["\n            "])), (l()(), _._27(-1, null, ["\n\n            "])), (l()(), _._27(-1, null, ["\n        "])), (l()(), _._27(-1, null, ["\n    "]))], function(l, n) {
                var u = n.component;
                l(n, 17, 0, !(null != u.user && u.user.imageUrl));
                l(n, 20, 0, null == u.user ? null : u.user.imageUrl);
                l(n, 30, 0, "icon-light", "arrow-forward");
                l(n, 34, 0, u.vaccineDependents);
                l(n, 37, 0, null == u.user ? null : u.user.selfVerified);
                l(n, 61, 0, "icon-light", "arrow-forward");
                l(n, 82, 0, "icon-light", "arrow-forward")
            }, function(l, n) {
                var u = n.component;
                l(n, 24, 0, _._28(n, 24, 0, _._17(n, 25).transform("vaccineFor")), null == u.user ? null : u.user.displayName);
                l(n, 29, 0, _._17(n, 30)._hidden);
                l(n, 57, 0, _._28(n, 57, 0, _._17(n, 58).transform("malaysiaVaccinationPortalSubHeading")));
                l(n, 60, 0, _._17(n, 61)._hidden);
                l(n, 78, 0, _._28(n, 78, 0, _._17(n, 79).transform("vaccineInformation")));
                l(n, 81, 0, _._17(n, 82)._hidden)
            })
        }

        function s(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), _._4(1, 16384, null, 0, rl.a, [T.a, _.k, _.F, [2, cl.a]], null, null), (l()(), _._27(-1, null, ["\n    "])), (l()(), _._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, sl.b, sl.a)), _._4(4, 49152, null, 0, q.a, [_l.a, [2, cl.a],
                [2, ml.a], T.a, _.k, _.F
            ], {
                color: [0, "color"]
            }, null), (l()(), _._27(-1, 3, ["\n        "])), (l()(), _._5(6, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, dl.b, dl.a)), _._4(7, 49152, null, 0, pl.a, [T.a, _.k, _.F, [2, J.a],
                [2, q.a]
            ], null, null), (l()(), _._27(8, 0, ["", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, 3, ["\n    "])), (l()(), _._27(-1, null, ["\n"])), (l()(), _._27(-1, null, ["\n\n"])), (l()(), _._5(13, 0, null, null, 8, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, fl.b, fl.a)), _._4(14, 4374528, null, 0, gl.a, [T.a, tl.a, ol.a, _.k, _.F, _l.a, hl.a, _.y, [2, cl.a],
                [2, ml.a]
            ], null, null), (l()(), _._27(-1, 1, ["\n    "])), (l()(), _._0(16777216, null, 1, 1, null, e)), _._4(17, 16384, null, 0, el.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, 1, ["\n    "])), (l()(), _._0(16777216, null, 1, 1, null, c)), _._4(20, 16384, null, 0, el.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, 1, ["\n"]))], function(l, n) {
                var u = n.component;
                l(n, 4, 0, "theme");
                l(n, 17, 0, null == u.user ? null : u.user.nonVaccinationAccount);
                l(n, 20, 0, !(null != u.user && u.user.nonVaccinationAccount))
            }, function(l, n) {
                var u = n.component;
                l(n, 3, 0, _._17(n, 4)._hidden, _._17(n, 4)._sbPadding);
                l(n, 6, 0, u.provideFbTitle);
                l(n, 8, 0, _._28(n, 8, 0, _._17(n, 9).transform("vaccination")));
                l(n, 13, 0, _._17(n, 14).statusbarPadding, _._17(n, 14)._hasRefresher)
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var _ = u(1),
            m = (u(0), u(6), u(219)),
            d = u(218),
            p = u(220),
            f = u(9),
            g = u(176),
            h = u(138),
            v = u(88),
            b = u(21),
            k = u(13),
            w = u(11),
            y = u(49),
            V = u.n(y),
            I = u(404),
            P = u(123),
            F = function() {
                function l(l, n, u, e, a, t, i, o, r, c, s, _, m) {
                    var d = this;
                    this.userUtils = l, this.translate = n, this.nav = u, this.alertCtrl = e, this.ReusableUtils = a, this.commonProvider = t, this.storageAccess = i, this.loadingCtrl = o, this.profileProvider = r, this.hubProvider = c, this.viewCtrl = s, this.navParams = _, this.events = m, this.getVaccineDetails = V.a.throttle(function(l, n) {
                        l ? n.isVaxExempted ? this.vaccinationProcessFlowPage([], l, n, !0) : this.getVaccineData(l, n) : this.user.selfVerified ? this.user.isVaxExempted ? this.vaccinationProcessFlowPage([], l, n, !0) : this.getVaccineData() : this.nav.push("VaccinationICVerificationPage")
                    }, 5e3, {
                        trailing: !1
                    }), this.getVaccineDependents(), m.subscribe("getVaccineDependents", function(l) {
                        d.getVaccineDependents(l.noLoader)
                    })
                }
                return l.prototype.getVaccineDependents = function(l) {
                    var n = this,
                        u = this.loadingCtrl.create();
                    l || u.present(), n.hubProvider.getVaccinationEmployeeInfo().subscribe(function(e) {
                        var a = "string" == typeof e ? JSON.parse(e) : e;
                        a ? (n.storageAccess.setValue("employeeInfo", a.employeeInfo), n.storageAccess.setValue("empInfo", JSON.stringify(a.employeeInfo)), n.storageAccess.setValue("vaccineDependents", a.vaccineDependents), n.vaccineDependents = a.vaccineDependents, n.user = a.employeeInfo, n.getTeam(), l || u.dismiss()) : l || u.dismiss()
                    }, function(e) {
                        l || u.dismiss(), n.ReusableUtils.showHttpError(e), n.ReusableUtils.saveErrorLog({}, e)
                    })
                }, l.prototype.getTeam = function() {
                    var l = this;
                    l.storageAccess.getValue("dependentsList").then(function(n) {
                        n ? l.dependentsList = n : l.profileProvider.getMyTeamMembers(l.user.employeeId).subscribe(function(n) {
                            l.dependentsList = n, l.storageAccess.setValue("dependentsList", n)
                        }, function(n) {
                            l.ReusableUtils.saveErrorLog({}, n), l.ReusableUtils.showHttpError(n)
                        })
                    })
                }, l.prototype.getVaccineData = function(l, n) {
                    var u = this,
                        e = this.loadingCtrl.create();
                    e.present(), u.commonProvider.getVaccineData(l).subscribe(function(a) {
                        if (e.dismissAll(), 0 === a.length) {
                            u.nav.push("AssessmentPage", {
                                taskData: {
                                    differentMsg: !0,
                                    formType: l ? "DEPENDENT_PRE_SCREENING_ASSESSMENT" : "PRE_SCREENING_ASSESSMENT",
                                    employeeId: l || u.user.employeeId,
                                    providerId: u.user.employeeId,
                                    day: 0,
                                    setRoot: !1,
                                    setVaccineReload: !0,
                                    thankYouPage: !0
                                }
                            })
                        } else u.vaccinationProcessFlowPage(a, l, n, !1)
                    }, function(l) {
                        e.dismissAll(), u.ReusableUtils.saveErrorLog({}, l)
                    })
                }, l.prototype.vaccinationProcessFlowPage = function(l, n, u, e) {
                    this.nav.push("VaccinationDetails", {
                        vaccineData: l,
                        employeeId: n,
                        user: u,
                        vaxExempted: e
                    })
                }, l.prototype.vaccineResources = function() {
                    this.nav.push("VaccinationResourcesPage")
                }, l.prototype.malaysiaVaccinationPortal = function() {
                    var l = "https://vaksincovid.gov.my";
                    this.ReusableUtils._launchInAppBrowser(l)
                }, l.prototype.VaccineDependentPage = function() {
                    this.nav.push("VaccinationDependentsPage", {})
                }, l
            }(),
            D = g.b,
            E = function() {
                return function() {}
            }(),
            x = u(773),
            L = u(774),
            R = u(775),
            j = u(776),
            N = u(777),
            A = u(778),
            U = u(779),
            S = u(780),
            O = u(781),
            C = u(60),
            T = u(3),
            M = u(54),
            $ = u(61),
            H = u(105),
            J = u(80),
            q = u(75),
            B = u(37),
            G = u(27),
            Y = u(177),
            W = u(85),
            z = u(81),
            K = u(56),
            Q = u(25),
            X = u(23),
            Z = u(48),
            ll = u(53),
            nl = u(141),
            ul = u(38),
            el = u(10),
            al = u(63),
            tl = u(5),
            il = u(19),
            ol = u(14),
            rl = u(102),
            cl = u(7),
            sl = u(140),
            _l = u(18),
            ml = u(16),
            dl = u(139),
            pl = u(103),
            fl = u(67),
            gl = u(36),
            hl = u(47),
            vl = u(116),
            bl = u(84),
            kl = u(17),
            wl = u(160),
            yl = _._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            Vl = _._1("ng-component", F, function(l) {
                return _._29(0, [(l()(), _._5(0, 0, null, null, 1, "ng-component", [], null, null, null, s, yl)), _._4(1, 49152, null, 0, F, [w.a, f.j, ml.a, vl.a, b.a, v.a, k.a, bl.a, I.a, P.a, cl.a, kl.a, wl.a], null, null)], null, null)
            }, {}, {}, []),
            Il = u(30),
            Pl = u(31),
            Fl = u(221),
            Dl = u(402),
            El = u(222),
            xl = u(158);
        u.d(n, "VaccinationPageModuleNgFactory", function() {
            return Ll
        });
        var Ll = _._2(E, [], function(l) {
            return _._13([_._14(512, _.i, _.Y, [
                [8, [x.a, L.a, R.a, j.a, N.a, A.a, U.a, S.a, O.a, Vl]],
                [3, _.i], _.w
            ]), _._14(4608, el.l, el.k, [_.v, [2, el.u]]), _._14(4608, Il.u, Il.u, []), _._14(4608, Il.d, Il.d, []), _._14(5120, f.f, D, [h.c]), _._14(4608, f.c, f.e, []), _._14(4608, f.h, f.d, []), _._14(4608, f.b, f.a, []), _._14(4608, f.j, f.j, [f.m, f.f, f.c, f.h, f.b, f.k, f.l]), _._14(4608, Pl.a, Pl.a, []), _._14(512, el.b, el.b, []), _._14(512, Fl.a, Fl.a, []), _._14(512, Il.s, Il.s, []), _._14(512, Il.g, Il.g, []), _._14(512, Il.q, Il.q, []), _._14(512, Dl.a, Dl.a, []), _._14(512, p.a, p.a, []), _._14(512, El.a, El.a, []), _._14(512, f.g, f.g, []), _._14(512, d.a, d.a, []), _._14(512, m.a, m.a, []), _._14(512, Dl.b, Dl.b, []), _._14(512, E, E, []), _._14(256, f.l, void 0, []), _._14(256, f.k, void 0, []), _._14(256, xl.a, F, [])])
        })
    }
});