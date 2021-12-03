webpackJsonp([64], {
    1268: function(l, n, e) {
        "use strict";

        function a(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), g._4(1, 16384, [
                [7, 4]
            ], 0, O.a, [g.k], {
                selected: [0, "selected"],
                value: [1, "value"]
            }, null), (l()(), g._27(2, null, ["", " (", ")\n            "]))], function(l, n) {
                l(n, 1, 0, "+60" == n.context.$implicit.dial_code, n.context.$implicit.dial_code)
            }, function(l, n) {
                l(n, 2, 0, n.context.$implicit.code, n.context.$implicit.dial_code)
            })
        }

        function d(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 11, "ion-select", [
                ["class", "mr-3"]
            ], [
                [2, "select-disabled", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"],
                [null, "click"],
                [null, "keyup.space"]
            ], function(l, n, e) {
                var a = !0,
                    d = l.component;
                if ("click" === n) {
                    a = !1 !== g._17(l, 1)._click(e) && a
                }
                if ("keyup.space" === n) {
                    a = !1 !== g._17(l, 1)._keyup() && a
                }
                if ("ngModelChange" === n) {
                    a = !1 !== (d.ISDCode = e) && a
                }
                return a
            }, w.b, w.a)), g._4(1, 1228800, null, 1, R.a, [K.a, V.a, H.a, g.k, g.F, [2, x.a], J.a], {
                cancelText: [0, "cancelText"]
            }, null), g._25(603979776, 7, {
                options: 1
            }), g._20(131072, h.i, [h.j, g.g]), g._23(1024, null, W.j, function(l) {
                return [l]
            }, [R.a]), g._4(5, 671744, null, 0, W.o, [
                [8, null],
                [8, null],
                [8, null],
                [2, W.j]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), g._23(2048, null, W.k, null, [W.o]), g._4(7, 16384, null, 0, W.l, [W.k], null, null), (l()(), g._27(-1, null, ["\n            "])), (l()(), g._0(16777216, null, null, 1, null, a)), g._4(10, 802816, null, 0, Y.i, [g.O, g.L, g.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), g._27(-1, null, ["\n          "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, g._28(n, 1, 0, g._17(n, 3).transform("cancel")));
                l(n, 5, 0, e.ISDCode);
                l(n, 10, 0, e.countryCode)
            }, function(l, n) {
                l(n, 0, 0, g._17(n, 1)._disabled, g._17(n, 7).ngClassUntouched, g._17(n, 7).ngClassTouched, g._17(n, 7).ngClassPristine, g._17(n, 7).ngClassDirty, g._17(n, 7).ngClassValid, g._17(n, 7).ngClassInvalid, g._17(n, 7).ngClassPending)
            })
        }

        function i(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 5, "ion-input", [
                ["type", "email"]
            ], [
                [8, "id", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"]
            ], function(l, n, e) {
                var a = !0;
                if ("ngModelChange" === n) {
                    a = !1 !== (l.component.userEmail = e) && a
                }
                return a
            }, Z.b, Z.a)), g._4(1, 671744, null, 0, W.o, [
                [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), g._23(2048, null, W.k, null, [W.o]), g._4(3, 16384, null, 0, W.l, [W.k], null, null), g._4(4, 5423104, null, 0, z.a, [H.a, $.a, V.a, K.a, g.k, g.F, [2, q.a],
                [2, x.a],
                [2, W.k], Q.a
            ], {
                type: [0, "type"],
                placeholder: [1, "placeholder"]
            }, null), (l()(), g._27(-1, null, ["\n          "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.userEmail);
                l(n, 4, 0, "email", e.Email)
            }, function(l, n) {
                l(n, 0, 0, "forgotPwdEmailInput", g._17(n, 3).ngClassUntouched, g._17(n, 3).ngClassTouched, g._17(n, 3).ngClassPristine, g._17(n, 3).ngClassDirty, g._17(n, 3).ngClassValid, g._17(n, 3).ngClassInvalid, g._17(n, 3).ngClassPending)
            })
        }

        function o(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 5, "ion-input", [
                ["type", "tel"]
            ], [
                [8, "id", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"],
                [null, "input"]
            ], function(l, n, e) {
                var a = !0,
                    d = l.component;
                if ("ngModelChange" === n) {
                    a = !1 !== (d.userEmail = e) && a
                }
                if ("input" === n) {
                    a = !1 !== d.check(e) && a
                }
                return a
            }, Z.b, Z.a)), g._4(1, 671744, null, 0, W.o, [
                [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), g._23(2048, null, W.k, null, [W.o]), g._4(3, 16384, null, 0, W.l, [W.k], null, null), g._4(4, 5423104, null, 0, z.a, [H.a, $.a, V.a, K.a, g.k, g.F, [2, q.a],
                [2, x.a],
                [2, W.k], Q.a
            ], {
                type: [0, "type"],
                placeholder: [1, "placeholder"]
            }, {
                input: "input"
            }), (l()(), g._27(-1, null, ["\n          "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.userEmail);
                l(n, 4, 0, "tel", e.Email)
            }, function(l, n) {
                l(n, 0, 0, "forgotPwdEmailInput", g._17(n, 3).ngClassUntouched, g._17(n, 3).ngClassTouched, g._17(n, 3).ngClassPristine, g._17(n, 3).ngClassDirty, g._17(n, 3).ngClassValid, g._17(n, 3).ngClassInvalid, g._17(n, 3).ngClassPending)
            })
        }

        function c(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), g._4(1, 16384, [
                [11, 4]
            ], 0, O.a, [g.k], {
                selected: [0, "selected"],
                value: [1, "value"]
            }, null), (l()(), g._27(2, null, ["", " (", ")\n            "]))], function(l, n) {
                l(n, 1, 0, "+60" == n.context.$implicit.dial_code, n.context.$implicit.dial_code)
            }, function(l, n) {
                l(n, 2, 0, n.context.$implicit.code, n.context.$implicit.dial_code)
            })
        }

        function u(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 11, "ion-select", [
                ["class", "mr-3"]
            ], [
                [2, "select-disabled", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"],
                [null, "click"],
                [null, "keyup.space"]
            ], function(l, n, e) {
                var a = !0,
                    d = l.component;
                if ("click" === n) {
                    a = !1 !== g._17(l, 1)._click(e) && a
                }
                if ("keyup.space" === n) {
                    a = !1 !== g._17(l, 1)._keyup() && a
                }
                if ("ngModelChange" === n) {
                    a = !1 !== (d.reEmterISDCode = e) && a
                }
                return a
            }, w.b, w.a)), g._4(1, 1228800, null, 1, R.a, [K.a, V.a, H.a, g.k, g.F, [2, x.a], J.a], {
                cancelText: [0, "cancelText"]
            }, null), g._25(603979776, 11, {
                options: 1
            }), g._20(131072, h.i, [h.j, g.g]), g._23(1024, null, W.j, function(l) {
                return [l]
            }, [R.a]), g._4(5, 671744, null, 0, W.o, [
                [8, null],
                [8, null],
                [8, null],
                [2, W.j]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), g._23(2048, null, W.k, null, [W.o]), g._4(7, 16384, null, 0, W.l, [W.k], null, null), (l()(), g._27(-1, null, ["\n            "])), (l()(), g._0(16777216, null, null, 1, null, c)), g._4(10, 802816, null, 0, Y.i, [g.O, g.L, g.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), g._27(-1, null, ["\n          "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, g._28(n, 1, 0, g._17(n, 3).transform("cancel")));
                l(n, 5, 0, e.reEmterISDCode);
                l(n, 10, 0, e.countryCode)
            }, function(l, n) {
                l(n, 0, 0, g._17(n, 1)._disabled, g._17(n, 7).ngClassUntouched, g._17(n, 7).ngClassTouched, g._17(n, 7).ngClassPristine, g._17(n, 7).ngClassDirty, g._17(n, 7).ngClassValid, g._17(n, 7).ngClassInvalid, g._17(n, 7).ngClassPending)
            })
        }

        function t(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 5, "ion-input", [
                ["type", "email"]
            ], [
                [8, "id", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"]
            ], function(l, n, e) {
                var a = !0;
                if ("ngModelChange" === n) {
                    a = !1 !== (l.component.reEnteredUserEmail = e) && a
                }
                return a
            }, Z.b, Z.a)), g._4(1, 671744, null, 0, W.o, [
                [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), g._23(2048, null, W.k, null, [W.o]), g._4(3, 16384, null, 0, W.l, [W.k], null, null), g._4(4, 5423104, null, 0, z.a, [H.a, $.a, V.a, K.a, g.k, g.F, [2, q.a],
                [2, x.a],
                [2, W.k], Q.a
            ], {
                type: [0, "type"],
                placeholder: [1, "placeholder"]
            }, null), (l()(), g._27(-1, null, ["\n          "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.reEnteredUserEmail);
                l(n, 4, 0, "email", e.Email)
            }, function(l, n) {
                l(n, 0, 0, "forgotPwdEmailInput", g._17(n, 3).ngClassUntouched, g._17(n, 3).ngClassTouched, g._17(n, 3).ngClassPristine, g._17(n, 3).ngClassDirty, g._17(n, 3).ngClassValid, g._17(n, 3).ngClassInvalid, g._17(n, 3).ngClassPending)
            })
        }

        function _(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 5, "ion-input", [
                ["type", "tel"]
            ], [
                [8, "id", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"],
                [null, "input"]
            ], function(l, n, e) {
                var a = !0,
                    d = l.component;
                if ("ngModelChange" === n) {
                    a = !1 !== (d.reEnteredUserEmail = e) && a
                }
                if ("input" === n) {
                    a = !1 !== d.check(e) && a
                }
                return a
            }, Z.b, Z.a)), g._4(1, 671744, null, 0, W.o, [
                [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), g._23(2048, null, W.k, null, [W.o]), g._4(3, 16384, null, 0, W.l, [W.k], null, null), g._4(4, 5423104, null, 0, z.a, [H.a, $.a, V.a, K.a, g.k, g.F, [2, q.a],
                [2, x.a],
                [2, W.k], Q.a
            ], {
                type: [0, "type"],
                placeholder: [1, "placeholder"]
            }, {
                input: "input"
            }), (l()(), g._27(-1, null, ["\n          "]))], function(l, n) {
                var e = n.component;
                l(n, 1, 0, e.reEnteredUserEmail);
                l(n, 4, 0, "tel", e.Email)
            }, function(l, n) {
                l(n, 0, 0, "forgotPwdEmailInput", g._17(n, 3).ngClassUntouched, g._17(n, 3).ngClassTouched, g._17(n, 3).ngClassPristine, g._17(n, 3).ngClassDirty, g._17(n, 3).ngClassValid, g._17(n, 3).ngClassInvalid, g._17(n, 3).ngClassPending)
            })
        }

        function s(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 2, "p", [
                ["class", "text-link"]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var a = !0;
                if ("click" === n) {
                    a = !1 !== l.component.chageUserNameField(!0) && a
                }
                return a
            }, null, null)), (l()(), g._27(1, null, ["\n            ", "\n          "])), g._20(131072, h.i, [h.j, g.g])], null, function(l, n) {
                l(n, 1, 0, g._28(n, 1, 0, g._17(n, 2).transform("mysjIsEmail")))
            })
        }

        function r(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 2, "p", [
                ["class", "text-link"]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var a = !0;
                if ("click" === n) {
                    a = !1 !== l.component.chageUserNameField(!1) && a
                }
                return a
            }, null, null)), (l()(), g._27(1, null, ["\n            ", "\n          "])), g._20(131072, h.i, [h.j, g.g])], null, function(l, n) {
                l(n, 1, 0, g._28(n, 1, 0, g._17(n, 2).transform("mysjIsNumber")))
            })
        }

        function m(l) {
            return g._29(0, [(l()(), g._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), g._4(1, 16384, null, 0, X.a, [H.a, g.k, g.F, [2, ll.a]], null, null), (l()(), g._27(-1, null, ["\n  "])), (l()(), g._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, nl.b, nl.a)), g._4(4, 49152, null, 0, el.a, [K.a, [2, ll.a],
                [2, al.a], H.a, g.k, g.F
            ], {
                color: [0, "color"]
            }, null), (l()(), g._27(-1, 3, ["\n    "])), (l()(), g._5(6, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, dl.b, dl.a)), g._4(7, 49152, null, 0, il.a, [H.a, g.k, g.F, [2, ol.a],
                [2, el.a]
            ], null, null), (l()(), g._27(8, 0, ["\n      ", "\n    "])), g._20(131072, h.i, [h.j, g.g]), (l()(), g._27(-1, 3, ["\n  "])), (l()(), g._27(-1, null, ["\n"])), (l()(), g._27(-1, null, ["\n"])), (l()(), g._5(13, 0, null, null, 83, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, cl.b, cl.a)), g._4(14, 4374528, null, 0, q.a, [H.a, $.a, Q.a, g.k, g.F, K.a, ul.a, g.y, [2, ll.a],
                [2, al.a]
            ], null, null), (l()(), g._27(-1, 1, ["\n  "])), (l()(), g._5(16, 0, null, 1, 79, "ion-card", [], null, null, null, null, null)), g._4(17, 16384, null, 0, tl.a, [H.a, g.k, g.F], null, null), (l()(), g._27(-1, null, ["\n    "])), (l()(), g._5(19, 0, null, null, 75, "ion-card-content", [], null, null, null, null, null)), g._4(20, 16384, null, 0, _l.a, [H.a, g.k, g.F], null, null), (l()(), g._27(-1, null, ["\n      "])), (l()(), g._5(22, 0, null, null, 71, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), g._4(23, 16384, null, 0, sl.a, [H.a, g.k, g.F, $.a, rl.l, Q.a], null, null), (l()(), g._27(-1, null, ["\n        "])), (l()(), g._5(25, 0, null, null, 13, "ion-item", [
                ["class", "mb-4 item item-block"]
            ], null, null, null, ml.b, ml.a)), g._4(26, 1097728, null, 3, x.a, [V.a, H.a, g.k, g.F, [2, gl.a]], null, null), g._25(335544320, 1, {
                contentLabel: 0
            }), g._25(603979776, 2, {
                _buttons: 1
            }), g._25(603979776, 3, {
                _icons: 1
            }), g._4(30, 16384, null, 0, hl.a, [], null, null), (l()(), g._27(-1, 2, ["\n          "])), (l()(), g._5(32, 0, null, 2, 2, "p", [], null, null, null, null, null)), (l()(), g._27(33, null, ["", ""])), g._20(131072, h.i, [h.j, g.g]), (l()(), g._27(-1, 2, ["\n          "])), (l()(), g._5(36, 0, null, 2, 1, "h5", [
                ["class", "bold mt-2"]
            ], null, null, null, null, null)), (l()(), g._27(37, null, ["", ""])), (l()(), g._27(-1, 2, ["\n        "])), (l()(), g._27(-1, null, ["\n\n        "])), (l()(), g._5(40, 0, null, null, 2, "p", [
                ["class", "text-light"]
            ], null, null, null, null, null)), (l()(), g._27(41, null, ["", ""])), g._20(131072, h.i, [h.j, g.g]), (l()(), g._27(-1, null, ["\n        "])), (l()(), g._5(44, 0, null, null, 15, "ion-item", [
                ["class", "login-input item item-block"]
            ], null, null, null, ml.b, ml.a)), g._4(45, 1097728, null, 3, x.a, [V.a, H.a, g.k, g.F, [2, gl.a]], null, null), g._25(335544320, 4, {
                contentLabel: 0
            }), g._25(603979776, 5, {
                _buttons: 1
            }), g._25(603979776, 6, {
                _icons: 1
            }), g._4(49, 16384, null, 0, hl.a, [], null, null), (l()(), g._27(-1, 2, ["\n          "])), (l()(), g._0(16777216, null, 3, 1, null, d)), g._4(52, 16384, null, 0, Y.j, [g.O, g.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), g._27(-1, 2, ["\n          "])), (l()(), g._0(16777216, null, 3, 1, null, i)), g._4(55, 16384, null, 0, Y.j, [g.O, g.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), g._27(-1, 2, ["\n          "])), (l()(), g._0(16777216, null, 3, 1, null, o)), g._4(58, 16384, null, 0, Y.j, [g.O, g.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), g._27(-1, 2, ["\n        "])), (l()(), g._27(-1, null, ["\n        "])), (l()(), g._5(61, 0, null, null, 2, "p", [
                ["class", "text-light mt-4"]
            ], null, null, null, null, null)), (l()(), g._27(62, null, ["", ""])), g._20(131072, h.i, [h.j, g.g]), (l()(), g._27(-1, null, ["\n        "])), (l()(), g._5(65, 0, null, null, 15, "ion-item", [
                ["class", "login-input item item-block"]
            ], null, null, null, ml.b, ml.a)), g._4(66, 1097728, null, 3, x.a, [V.a, H.a, g.k, g.F, [2, gl.a]], null, null), g._25(335544320, 8, {
                contentLabel: 0
            }), g._25(603979776, 9, {
                _buttons: 1
            }), g._25(603979776, 10, {
                _icons: 1
            }), g._4(70, 16384, null, 0, hl.a, [], null, null), (l()(), g._27(-1, 2, ["\n          "])), (l()(), g._0(16777216, null, 3, 1, null, u)), g._4(73, 16384, null, 0, Y.j, [g.O, g.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), g._27(-1, 2, ["\n          "])), (l()(), g._0(16777216, null, 3, 1, null, t)), g._4(76, 16384, null, 0, Y.j, [g.O, g.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), g._27(-1, 2, ["\n          "])), (l()(), g._0(16777216, null, 3, 1, null, _)), g._4(79, 16384, null, 0, Y.j, [g.O, g.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), g._27(-1, 2, ["\n        "])), (l()(), g._27(-1, null, ["\n        "])), (l()(), g._5(82, 0, null, null, 10, "ion-item", [
                ["class", "item item-block"],
                ["text-center", ""]
            ], null, null, null, ml.b, ml.a)), g._4(83, 1097728, null, 3, x.a, [V.a, H.a, g.k, g.F, [2, gl.a]], null, null), g._25(335544320, 12, {
                contentLabel: 0
            }), g._25(603979776, 13, {
                _buttons: 1
            }), g._25(603979776, 14, {
                _icons: 1
            }), g._4(87, 16384, null, 0, hl.a, [], null, null), (l()(), g._0(16777216, null, 2, 1, null, s)), g._4(89, 16384, null, 0, Y.j, [g.O, g.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), g._27(-1, 2, ["\n          "])), (l()(), g._0(16777216, null, 2, 1, null, r)), g._4(92, 16384, null, 0, Y.j, [g.O, g.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), g._27(-1, null, ["\n      "])), (l()(), g._27(-1, null, ["\n    "])), (l()(), g._27(-1, null, ["\n  "])), (l()(), g._27(-1, 1, ["\n"])), (l()(), g._27(-1, null, ["\n\n"])), (l()(), g._5(98, 0, null, null, 16, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), g._4(99, 16384, null, 0, pl.a, [H.a, g.k, g.F, [2, ll.a]], null, null), (l()(), g._27(-1, null, ["\n  "])), (l()(), g._5(101, 0, null, null, 12, "ion-toolbar", [
                ["class", "toolbar"]
            ], [
                [2, "statusbar-padding", null]
            ], null, null, Cl.b, Cl.a)), g._4(102, 49152, null, 0, ol.a, [H.a, g.k, g.F], null, null), (l()(), g._27(-1, 3, ["\n    "])), (l()(), g._5(104, 0, null, 2, 8, "ion-buttons", [
                ["right", ""]
            ], null, null, null, null, null)), g._4(105, 16384, null, 1, El.a, [H.a, g.k, g.F, [2, ol.a],
                [2, el.a]
            ], null, null), g._25(603979776, 15, {
                _buttons: 1
            }), (l()(), g._27(-1, null, ["\n      "])), (l()(), g._5(108, 0, null, null, 3, "button", [
                ["color", "btn-primary"],
                ["ion-button", ""],
                ["name", "Tap_About_You"],
                ["solid", ""]
            ], [
                [8, "disabled", 0],
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var a = !0;
                if ("click" === n) {
                    a = !1 !== l.component.save() && a
                }
                return a
            }, fl.b, fl.a)), g._4(109, 1097728, [
                [15, 4]
            ], 0, bl.a, [
                [8, ""], H.a, g.k, g.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (l()(), g._27(110, 0, ["\n        ", "\n      "])), g._20(131072, h.i, [h.j, g.g]), (l()(), g._27(-1, null, ["\n    "])), (l()(), g._27(-1, 3, ["\n  "])), (l()(), g._27(-1, null, ["\n"])), (l()(), g._27(-1, null, ["\n"]))], function(l, n) {
                var e = n.component;
                l(n, 4, 0, "theme");
                l(n, 52, 0, !e.EmailLogin);
                l(n, 55, 0, e.EmailLogin);
                l(n, 58, 0, !e.EmailLogin);
                l(n, 73, 0, !e.EmailLogin);
                l(n, 76, 0, e.EmailLogin);
                l(n, 79, 0, !e.EmailLogin);
                l(n, 89, 0, !e.EmailLogin);
                l(n, 92, 0, e.EmailLogin);
                l(n, 109, 0, "btn-primary", "")
            }, function(l, n) {
                var e = n.component;
                l(n, 3, 0, g._17(n, 4)._hidden, g._17(n, 4)._sbPadding);
                l(n, 6, 0, "aboutYouTitle");
                l(n, 8, 0, g._28(n, 8, 0, g._17(n, 9).transform("changeMYSJId")));
                l(n, 13, 0, g._17(n, 14).statusbarPadding, g._17(n, 14)._hasRefresher);
                l(n, 33, 0, g._28(n, 33, 0, g._17(n, 34).transform("currentMysjId")));
                l(n, 37, 0, e.userId);
                l(n, 41, 0, g._28(n, 41, 0, g._17(n, 42).transform("newMysjId")));
                l(n, 62, 0, g._28(n, 62, 0, g._17(n, 63).transform("reEnterNewMysjId")));
                l(n, 101, 0, g._17(n, 102)._sbPadding);
                l(n, 108, 0, !e.userEmail || !e.reEnteredUserEmail, "aboutYouSaveBtn");
                l(n, 110, 0, g._28(n, 110, 0, g._17(n, 111).transform("confirm")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var g = e(1),
            h = (e(0), e(6), e(9)),
            p = e(219),
            C = e(220),
            E = e(138),
            f = e(176),
            b = e(218),
            I = e(11),
            M = e(65),
            k = e(49),
            S = e(21),
            y = e(143),
            v = function() {
                function l(l, n, e, a, d, i) {
                    var o = this;
                    this.UserUtils = l, this.navParams = n, this.reusableUtils = e, this.settingsProvider = a, this.nav = d, this.loadingCtrl = i, this.translateClient = M.a.translation, this.EmailLogin = !1, this.userEmail = "", this.ISDCode = "+60", this.reEmterISDCode = "+60", this.Email = "", this.reEnteredUserEmail = "", this.countryCode = [{
                        name: "Malaysia",
                        dial_code: "+60",
                        code: "MY"
                    }, {
                        name: "Afghanistan",
                        dial_code: "+93",
                        code: "AF"
                    }, {
                        name: "Albania",
                        dial_code: "+355",
                        code: "AL"
                    }, {
                        name: "Algeria",
                        dial_code: "+213",
                        code: "DZ"
                    }, {
                        name: "AmericanSamoa",
                        dial_code: "+1 684",
                        code: "AS"
                    }, {
                        name: "Andorra",
                        dial_code: "+376",
                        code: "AD"
                    }, {
                        name: "Angola",
                        dial_code: "+244",
                        code: "AO"
                    }, {
                        name: "Anguilla",
                        dial_code: "+1 264",
                        code: "AI"
                    }, {
                        name: "Antarctica",
                        dial_code: "+672",
                        code: "AQ"
                    }, {
                        name: "Antigua and Barbuda",
                        dial_code: "+1268",
                        code: "AG"
                    }, {
                        name: "Argentina",
                        dial_code: "+54",
                        code: "AR"
                    }, {
                        name: "Armenia",
                        dial_code: "+374",
                        code: "AM"
                    }, {
                        name: "Aruba",
                        dial_code: "+297",
                        code: "AW"
                    }, {
                        name: "Australia",
                        dial_code: "+61",
                        code: "AU"
                    }, {
                        name: "Austria",
                        dial_code: "+43",
                        code: "AT"
                    }, {
                        name: "Azerbaijan",
                        dial_code: "+994",
                        code: "AZ"
                    }, {
                        name: "Bahamas",
                        dial_code: "+1 242",
                        code: "BS"
                    }, {
                        name: "Bahrain",
                        dial_code: "+973",
                        code: "BH"
                    }, {
                        name: "Bangladesh",
                        dial_code: "+880",
                        code: "BD"
                    }, {
                        name: "Barbados",
                        dial_code: "+1 246",
                        code: "BB"
                    }, {
                        name: "Belarus",
                        dial_code: "+375",
                        code: "BY"
                    }, {
                        name: "Belgium",
                        dial_code: "+32",
                        code: "BE"
                    }, {
                        name: "Belize",
                        dial_code: "+501",
                        code: "BZ"
                    }, {
                        name: "Benin",
                        dial_code: "+229",
                        code: "BJ"
                    }, {
                        name: "Bermuda",
                        dial_code: "+1 441",
                        code: "BM"
                    }, {
                        name: "Bhutan",
                        dial_code: "+975",
                        code: "BT"
                    }, {
                        name: "Bolivia, Plurinational State of",
                        dial_code: "+591",
                        code: "BO"
                    }, {
                        name: "Bosnia and Herzegovina",
                        dial_code: "+387",
                        code: "BA"
                    }, {
                        name: "Botswana",
                        dial_code: "+267",
                        code: "BW"
                    }, {
                        name: "Brazil",
                        dial_code: "+55",
                        code: "BR"
                    }, {
                        name: "British Indian Ocean Territory",
                        dial_code: "+246",
                        code: "IO"
                    }, {
                        name: "Brunei Darussalam",
                        dial_code: "+673",
                        code: "BN"
                    }, {
                        name: "Bulgaria",
                        dial_code: "+359",
                        code: "BG"
                    }, {
                        name: "Burkina Faso",
                        dial_code: "+226",
                        code: "BF"
                    }, {
                        name: "Burundi",
                        dial_code: "+257",
                        code: "BI"
                    }, {
                        name: "Cambodia",
                        dial_code: "+855",
                        code: "KH"
                    }, {
                        name: "Cameroon",
                        dial_code: "+237",
                        code: "CM"
                    }, {
                        name: "Canada",
                        dial_code: "+1",
                        code: "CA"
                    }, {
                        name: "Cape Verde",
                        dial_code: "+238",
                        code: "CV"
                    }, {
                        name: "Cayman Islands",
                        dial_code: "+ 345",
                        code: "KY"
                    }, {
                        name: "Central African Republic",
                        dial_code: "+236",
                        code: "CF"
                    }, {
                        name: "Chad",
                        dial_code: "+235",
                        code: "TD"
                    }, {
                        name: "Chile",
                        dial_code: "+56",
                        code: "CL"
                    }, {
                        name: "China",
                        dial_code: "+86",
                        code: "CN"
                    }, {
                        name: "Christmas Island",
                        dial_code: "+61",
                        code: "CX"
                    }, {
                        name: "Cocos (Keeling) Islands",
                        dial_code: "+61",
                        code: "CC"
                    }, {
                        name: "Colombia",
                        dial_code: "+57",
                        code: "CO"
                    }, {
                        name: "Comoros",
                        dial_code: "+269",
                        code: "KM"
                    }, {
                        name: "Congo",
                        dial_code: "+242",
                        code: "CG"
                    }, {
                        name: "Congo, The Democratic Republic of the Congo",
                        dial_code: "+243",
                        code: "CD"
                    }, {
                        name: "Cook Islands",
                        dial_code: "+682",
                        code: "CK"
                    }, {
                        name: "Costa Rica",
                        dial_code: "+506",
                        code: "CR"
                    }, {
                        name: "Cote d'Ivoire",
                        dial_code: "+225",
                        code: "CI"
                    }, {
                        name: "Croatia",
                        dial_code: "+385",
                        code: "HR"
                    }, {
                        name: "Cuba",
                        dial_code: "+53",
                        code: "CU"
                    }, {
                        name: "Cyprus",
                        dial_code: "+357",
                        code: "CY"
                    }, {
                        name: "Czech Republic",
                        dial_code: "+420",
                        code: "CZ"
                    }, {
                        name: "Denmark",
                        dial_code: "+45",
                        code: "DK"
                    }, {
                        name: "Djibouti",
                        dial_code: "+253",
                        code: "DJ"
                    }, {
                        name: "Dominica",
                        dial_code: "+1 767",
                        code: "DM"
                    }, {
                        name: "Dominican Republic",
                        dial_code: "+1 849",
                        code: "DO"
                    }, {
                        name: "Ecuador",
                        dial_code: "+593",
                        code: "EC"
                    }, {
                        name: "Egypt",
                        dial_code: "+20",
                        code: "EG"
                    }, {
                        name: "El Salvador",
                        dial_code: "+503",
                        code: "SV"
                    }, {
                        name: "Equatorial Guinea",
                        dial_code: "+240",
                        code: "GQ"
                    }, {
                        name: "Eritrea",
                        dial_code: "+291",
                        code: "ER"
                    }, {
                        name: "Estonia",
                        dial_code: "+372",
                        code: "EE"
                    }, {
                        name: "Ethiopia",
                        dial_code: "+251",
                        code: "ET"
                    }, {
                        name: "Falkland Islands (Malvinas)",
                        dial_code: "+500",
                        code: "FK"
                    }, {
                        name: "Faroe Islands",
                        dial_code: "+298",
                        code: "FO"
                    }, {
                        name: "Fiji",
                        dial_code: "+679",
                        code: "FJ"
                    }, {
                        name: "Finland",
                        dial_code: "+358",
                        code: "FI"
                    }, {
                        name: "France",
                        dial_code: "+33",
                        code: "FR"
                    }, {
                        name: "French Guiana",
                        dial_code: "+594",
                        code: "GF"
                    }, {
                        name: "French Polynesia",
                        dial_code: "+689",
                        code: "PF"
                    }, {
                        name: "Gabon",
                        dial_code: "+241",
                        code: "GA"
                    }, {
                        name: "Gambia",
                        dial_code: "+220",
                        code: "GM"
                    }, {
                        name: "Georgia",
                        dial_code: "+995",
                        code: "GE"
                    }, {
                        name: "Germany",
                        dial_code: "+49",
                        code: "DE"
                    }, {
                        name: "Ghana",
                        dial_code: "+233",
                        code: "GH"
                    }, {
                        name: "Gibraltar",
                        dial_code: "+350",
                        code: "GI"
                    }, {
                        name: "Greece",
                        dial_code: "+30",
                        code: "GR"
                    }, {
                        name: "Greenland",
                        dial_code: "+299",
                        code: "GL"
                    }, {
                        name: "Grenada",
                        dial_code: "+1 473",
                        code: "GD"
                    }, {
                        name: "Guadeloupe",
                        dial_code: "+590",
                        code: "GP"
                    }, {
                        name: "Guam",
                        dial_code: "+1 671",
                        code: "GU"
                    }, {
                        name: "Guatemala",
                        dial_code: "+502",
                        code: "GT"
                    }, {
                        name: "Guernsey",
                        dial_code: "+44",
                        code: "GG"
                    }, {
                        name: "Guinea",
                        dial_code: "+224",
                        code: "GN"
                    }, {
                        name: "Guinea-Bissau",
                        dial_code: "+245",
                        code: "GW"
                    }, {
                        name: "Guyana",
                        dial_code: "+595",
                        code: "GY"
                    }, {
                        name: "Haiti",
                        dial_code: "+509",
                        code: "HT"
                    }, {
                        name: "Holy See (Vatican City State)",
                        dial_code: "+379",
                        code: "VA"
                    }, {
                        name: "Honduras",
                        dial_code: "+504",
                        code: "HN"
                    }, {
                        name: "Hong Kong",
                        dial_code: "+852",
                        code: "HK"
                    }, {
                        name: "Hungary",
                        dial_code: "+36",
                        code: "HU"
                    }, {
                        name: "Iceland",
                        dial_code: "+354",
                        code: "IS"
                    }, {
                        name: "India",
                        dial_code: "+91",
                        code: "IN"
                    }, {
                        name: "Indonesia",
                        dial_code: "+62",
                        code: "ID"
                    }, {
                        name: "Iran, Islamic Republic of Persian Gulf",
                        dial_code: "+98",
                        code: "IR"
                    }, {
                        name: "Iraq",
                        dial_code: "+964",
                        code: "IQ"
                    }, {
                        name: "Ireland",
                        dial_code: "+353",
                        code: "IE"
                    }, {
                        name: "Isle of Man",
                        dial_code: "+44",
                        code: "IM"
                    }, {
                        name: "Israel",
                        dial_code: "+972",
                        code: "IL"
                    }, {
                        name: "Italy",
                        dial_code: "+39",
                        code: "IT"
                    }, {
                        name: "Jamaica",
                        dial_code: "+1 876",
                        code: "JM"
                    }, {
                        name: "Japan",
                        dial_code: "+81",
                        code: "JP"
                    }, {
                        name: "Jersey",
                        dial_code: "+44",
                        code: "JE"
                    }, {
                        name: "Jordan",
                        dial_code: "+962",
                        code: "JO"
                    }, {
                        name: "Kazakhstan",
                        dial_code: "+7 7",
                        code: "KZ"
                    }, {
                        name: "Kenya",
                        dial_code: "+254",
                        code: "KE"
                    }, {
                        name: "Kiribati",
                        dial_code: "+686",
                        code: "KI"
                    }, {
                        name: "Korea, Democratic People's Republic of Korea",
                        dial_code: "+850",
                        code: "KP"
                    }, {
                        name: "Korea, Republic of South Korea",
                        dial_code: "+82",
                        code: "KR"
                    }, {
                        name: "Kuwait",
                        dial_code: "+965",
                        code: "KW"
                    }, {
                        name: "Kyrgyzstan",
                        dial_code: "+996",
                        code: "KG"
                    }, {
                        name: "Laos",
                        dial_code: "+856",
                        code: "LA"
                    }, {
                        name: "Latvia",
                        dial_code: "+371",
                        code: "LV"
                    }, {
                        name: "Lebanon",
                        dial_code: "+961",
                        code: "LB"
                    }, {
                        name: "Lesotho",
                        dial_code: "+266",
                        code: "LS"
                    }, {
                        name: "Liberia",
                        dial_code: "+231",
                        code: "LR"
                    }, {
                        name: "Libyan Arab Jamahiriya",
                        dial_code: "+218",
                        code: "LY"
                    }, {
                        name: "Liechtenstein",
                        dial_code: "+423",
                        code: "LI"
                    }, {
                        name: "Lithuania",
                        dial_code: "+370",
                        code: "LT"
                    }, {
                        name: "Luxembourg",
                        dial_code: "+352",
                        code: "LU"
                    }, {
                        name: "Macao",
                        dial_code: "+853",
                        code: "MO"
                    }, {
                        name: "Macedonia",
                        dial_code: "+389",
                        code: "MK"
                    }, {
                        name: "Madagascar",
                        dial_code: "+261",
                        code: "MG"
                    }, {
                        name: "Malawi",
                        dial_code: "+265",
                        code: "MW"
                    }, {
                        name: "Maldives",
                        dial_code: "+960",
                        code: "MV"
                    }, {
                        name: "Mali",
                        dial_code: "+223",
                        code: "ML"
                    }, {
                        name: "Malta",
                        dial_code: "+356",
                        code: "MT"
                    }, {
                        name: "Marshall Islands",
                        dial_code: "+692",
                        code: "MH"
                    }, {
                        name: "Martinique",
                        dial_code: "+596",
                        code: "MQ"
                    }, {
                        name: "Mauritania",
                        dial_code: "+222",
                        code: "MR"
                    }, {
                        name: "Mauritius",
                        dial_code: "+230",
                        code: "MU"
                    }, {
                        name: "Mayotte",
                        dial_code: "+262",
                        code: "YT"
                    }, {
                        name: "Mexico",
                        dial_code: "+52",
                        code: "MX"
                    }, {
                        name: "Micronesia, Federated States of Micronesia",
                        dial_code: "+691",
                        code: "FM"
                    }, {
                        name: "Moldova",
                        dial_code: "+373",
                        code: "MD"
                    }, {
                        name: "Monaco",
                        dial_code: "+377",
                        code: "MC"
                    }, {
                        name: "Mongolia",
                        dial_code: "+976",
                        code: "MN"
                    }, {
                        name: "Montenegro",
                        dial_code: "+382",
                        code: "ME"
                    }, {
                        name: "Montserrat",
                        dial_code: "+1664",
                        code: "MS"
                    }, {
                        name: "Morocco",
                        dial_code: "+212",
                        code: "MA"
                    }, {
                        name: "Mozambique",
                        dial_code: "+258",
                        code: "MZ"
                    }, {
                        name: "Myanmar",
                        dial_code: "+95",
                        code: "MM"
                    }, {
                        name: "Namibia",
                        dial_code: "+264",
                        code: "NA"
                    }, {
                        name: "Nauru",
                        dial_code: "+674",
                        code: "NR"
                    }, {
                        name: "Nepal",
                        dial_code: "+977",
                        code: "NP"
                    }, {
                        name: "Netherlands",
                        dial_code: "+31",
                        code: "NL"
                    }, {
                        name: "Netherlands Antilles",
                        dial_code: "+599",
                        code: "AN"
                    }, {
                        name: "New Caledonia",
                        dial_code: "+687",
                        code: "NC"
                    }, {
                        name: "New Zealand",
                        dial_code: "+64",
                        code: "NZ"
                    }, {
                        name: "Nicaragua",
                        dial_code: "+505",
                        code: "NI"
                    }, {
                        name: "Niger",
                        dial_code: "+227",
                        code: "NE"
                    }, {
                        name: "Nigeria",
                        dial_code: "+234",
                        code: "NG"
                    }, {
                        name: "Niue",
                        dial_code: "+683",
                        code: "NU"
                    }, {
                        name: "Norfolk Island",
                        dial_code: "+672",
                        code: "NF"
                    }, {
                        name: "Northern Mariana Islands",
                        dial_code: "+1 670",
                        code: "MP"
                    }, {
                        name: "Norway",
                        dial_code: "+47",
                        code: "NO"
                    }, {
                        name: "Oman",
                        dial_code: "+968",
                        code: "OM"
                    }, {
                        name: "Pakistan",
                        dial_code: "+92",
                        code: "PK"
                    }, {
                        name: "Palau",
                        dial_code: "+680",
                        code: "PW"
                    }, {
                        name: "Palestinian Territory, Occupied",
                        dial_code: "+970",
                        code: "PS"
                    }, {
                        name: "Panama",
                        dial_code: "+507",
                        code: "PA"
                    }, {
                        name: "Papua New Guinea",
                        dial_code: "+675",
                        code: "PG"
                    }, {
                        name: "Paraguay",
                        dial_code: "+595",
                        code: "PY"
                    }, {
                        name: "Peru",
                        dial_code: "+51",
                        code: "PE"
                    }, {
                        name: "Philippines",
                        dial_code: "+63",
                        code: "PH"
                    }, {
                        name: "Pitcairn",
                        dial_code: "+872",
                        code: "PN"
                    }, {
                        name: "Poland",
                        dial_code: "+48",
                        code: "PL"
                    }, {
                        name: "Portugal",
                        dial_code: "+351",
                        code: "PT"
                    }, {
                        name: "Puerto Rico",
                        dial_code: "+1 939",
                        code: "PR"
                    }, {
                        name: "Qatar",
                        dial_code: "+974",
                        code: "QA"
                    }, {
                        name: "Romania",
                        dial_code: "+40",
                        code: "RO"
                    }, {
                        name: "Russia",
                        dial_code: "+7",
                        code: "RU"
                    }, {
                        name: "Rwanda",
                        dial_code: "+250",
                        code: "RW"
                    }, {
                        name: "Reunion",
                        dial_code: "+262",
                        code: "RE"
                    }, {
                        name: "Saint Barthelemy",
                        dial_code: "+590",
                        code: "BL"
                    }, {
                        name: "Saint Helena, Ascension and Tristan Da Cunha",
                        dial_code: "+290",
                        code: "SH"
                    }, {
                        name: "Saint Kitts and Nevis",
                        dial_code: "+1 869",
                        code: "KN"
                    }, {
                        name: "Saint Lucia",
                        dial_code: "+1 758",
                        code: "LC"
                    }, {
                        name: "Saint Martin",
                        dial_code: "+590",
                        code: "MF"
                    }, {
                        name: "Saint Pierre and Miquelon",
                        dial_code: "+508",
                        code: "PM"
                    }, {
                        name: "Saint Vincent and the Grenadines",
                        dial_code: "+1 784",
                        code: "VC"
                    }, {
                        name: "Samoa",
                        dial_code: "+685",
                        code: "WS"
                    }, {
                        name: "San Marino",
                        dial_code: "+378",
                        code: "SM"
                    }, {
                        name: "Sao Tome and Principe",
                        dial_code: "+239",
                        code: "ST"
                    }, {
                        name: "Saudi Arabia",
                        dial_code: "+966",
                        code: "SA"
                    }, {
                        name: "Senegal",
                        dial_code: "+221",
                        code: "SN"
                    }, {
                        name: "Serbia",
                        dial_code: "+381",
                        code: "RS"
                    }, {
                        name: "Seychelles",
                        dial_code: "+248",
                        code: "SC"
                    }, {
                        name: "Sierra Leone",
                        dial_code: "+232",
                        code: "SL"
                    }, {
                        name: "Singapore",
                        dial_code: "+65",
                        code: "SG"
                    }, {
                        name: "Slovakia",
                        dial_code: "+421",
                        code: "SK"
                    }, {
                        name: "Slovenia",
                        dial_code: "+386",
                        code: "SI"
                    }, {
                        name: "Solomon Islands",
                        dial_code: "+677",
                        code: "SB"
                    }, {
                        name: "Somalia",
                        dial_code: "+252",
                        code: "SO"
                    }, {
                        name: "South Africa",
                        dial_code: "+27",
                        code: "ZA"
                    }, {
                        name: "South Georgia and the South Sandwich Islands",
                        dial_code: "+500",
                        code: "GS"
                    }, {
                        name: "Spain",
                        dial_code: "+34",
                        code: "ES"
                    }, {
                        name: "Sri Lanka",
                        dial_code: "+94",
                        code: "LK"
                    }, {
                        name: "Sudan",
                        dial_code: "+249",
                        code: "SD"
                    }, {
                        name: "Suriname",
                        dial_code: "+597",
                        code: "SR"
                    }, {
                        name: "Svalbard and Jan Mayen",
                        dial_code: "+47",
                        code: "SJ"
                    }, {
                        name: "Swaziland",
                        dial_code: "+268",
                        code: "SZ"
                    }, {
                        name: "Sweden",
                        dial_code: "+46",
                        code: "SE"
                    }, {
                        name: "Switzerland",
                        dial_code: "+41",
                        code: "CH"
                    }, {
                        name: "Syrian Arab Republic",
                        dial_code: "+963",
                        code: "SY"
                    }, {
                        name: "Taiwan",
                        dial_code: "+886",
                        code: "TW"
                    }, {
                        name: "Tajikistan",
                        dial_code: "+992",
                        code: "TJ"
                    }, {
                        name: "Tanzania, United Republic of Tanzania",
                        dial_code: "+255",
                        code: "TZ"
                    }, {
                        name: "Thailand",
                        dial_code: "+66",
                        code: "TH"
                    }, {
                        name: "Timor-Leste",
                        dial_code: "+670",
                        code: "TL"
                    }, {
                        name: "Togo",
                        dial_code: "+228",
                        code: "TG"
                    }, {
                        name: "Tokelau",
                        dial_code: "+690",
                        code: "TK"
                    }, {
                        name: "Tonga",
                        dial_code: "+676",
                        code: "TO"
                    }, {
                        name: "Trinidad and Tobago",
                        dial_code: "+1 868",
                        code: "TT"
                    }, {
                        name: "Tunisia",
                        dial_code: "+216",
                        code: "TN"
                    }, {
                        name: "Turkey",
                        dial_code: "+90",
                        code: "TR"
                    }, {
                        name: "Turkmenistan",
                        dial_code: "+993",
                        code: "TM"
                    }, {
                        name: "Turks and Caicos Islands",
                        dial_code: "+1 649",
                        code: "TC"
                    }, {
                        name: "Tuvalu",
                        dial_code: "+688",
                        code: "TV"
                    }, {
                        name: "Uganda",
                        dial_code: "+256",
                        code: "UG"
                    }, {
                        name: "Ukraine",
                        dial_code: "+380",
                        code: "UA"
                    }, {
                        name: "United Arab Emirates",
                        dial_code: "+971",
                        code: "AE"
                    }, {
                        name: "United Kingdom",
                        dial_code: "+44",
                        code: "GB"
                    }, {
                        name: "United States",
                        dial_code: "+1",
                        code: "US"
                    }, {
                        name: "Uruguay",
                        dial_code: "+598",
                        code: "UY"
                    }, {
                        name: "Uzbekistan",
                        dial_code: "+998",
                        code: "UZ"
                    }, {
                        name: "Vanuatu",
                        dial_code: "+678",
                        code: "VU"
                    }, {
                        name: "Venezuela, Bolivarian Republic of Venezuela",
                        dial_code: "+58",
                        code: "VE"
                    }, {
                        name: "Vietnam",
                        dial_code: "+84",
                        code: "VN"
                    }, {
                        name: "Virgin Islands, British",
                        dial_code: "+1 284",
                        code: "VG"
                    }, {
                        name: "Virgin Islands, U.S.",
                        dial_code: "+1 340",
                        code: "VI"
                    }, {
                        name: "Wallis and Futuna",
                        dial_code: "+681",
                        code: "WF"
                    }, {
                        name: "Yemen",
                        dial_code: "+967",
                        code: "YE"
                    }, {
                        name: "Zambia",
                        dial_code: "+260",
                        code: "ZM"
                    }, {
                        name: "Zimbabwe",
                        dial_code: "+263",
                        code: "ZW"
                    }], this.chageUserNameField = Object(k.throttle)(function(l) {
                        var n = o;
                        n.userEmail = "", n.reEnteredUserEmail = "", n.ISDCode = "+60", n.reEmterISDCode = "+60", l ? (n.EmailLogin = !0, n.Email = n.UserUtils.getTranslatedString(n.translateClient + ".usernameEmail", {})) : (n.EmailLogin = !1, n.Email = n.UserUtils.getTranslatedString(n.translateClient + ".usernameNumber", {}))
                    }, 300);
                    this.userId = this.navParams.get("empId"), this.Email = this.UserUtils.getTranslatedString(this.translateClient + ".usernameNumber", {})
                }
                return l.prototype.check = function(l) {
                    l.stopPropagation();
                    var n = /^\d+$/,
                        e = l.target.value;
                    if (null != l.data) {
                        if (n.test(l.data)) return;
                        l.target.value = e.slice(0, -1)
                    }
                }, l.prototype.save = function() {
                    if (this.EmailLogin) {
                        if (this.EmailLogin && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userEmail) || this.EmailLogin && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.reEnteredUserEmail)) return void this.reusableUtils.showToastWithOk("invalidEmail")
                    } else if ("60" == this.ISDCode.slice(1, this.ISDCode.length) && ("0" == this.userEmail[0] ? this.userEmail = this.userEmail.slice(1, this.userEmail.length) : "6" == this.userEmail[0] && "0" == this.userEmail[1] && (this.userEmail = this.userEmail.slice(2, this.userEmail.length))), "60" == this.reEmterISDCode.slice(1, this.reEmterISDCode.length) && ("0" == this.reEnteredUserEmail[0] ? this.reEnteredUserEmail = this.reEnteredUserEmail.slice(1, this.reEnteredUserEmail.length) : "6" == this.reEnteredUserEmail[0] && "0" == this.reEnteredUserEmail[1] && (this.reEnteredUserEmail = this.reEnteredUserEmail.slice(2, this.reEnteredUserEmail.length))), this.userEmail.length < 5 || this.userEmail.length > 15 || this.reEnteredUserEmail.length < 5 || this.reEnteredUserEmail.length > 15) return void this.reusableUtils.showToastWithOk("invalidNumber");
                    this.validate()
                }, l.prototype.validate = function() {
                    this.EmailLogin || this.ISDCode === this.reEmterISDCode && this.userEmail === this.reEnteredUserEmail ? this.EmailLogin && this.userEmail !== this.reEnteredUserEmail ? this.reusableUtils.showToastWithOk("iDsDontMatch") : this.EmailLogin ? this.EmailLogin && this.makechangeMysjIdCall(!1, {
                        email: this.userEmail
                    }) : this.makechangeMysjIdCall(!0, {
                        contactNumber: this.userEmail,
                        countryCode: this.ISDCode
                    }) : this.reusableUtils.showToastWithOk("iDsDontMatch")
                }, l.prototype.makechangeMysjIdCall = function(l, n) {
                    var e, a = this;
                    (e = a.loadingCtrl.create({
                        dismissOnPageChange: !0
                    })).present(), a.settingsProvider.changeMysjId(l, n).subscribe(function(l) {
                        var n = "string" == typeof l ? JSON.parse(l) : l;
                        n.success ? (a.nav.push("RegistrationPage", {
                            mysjId: !0,
                            id: n.data.contactNumber
                        }), e.dismiss()) : (a.reusableUtils.showToastWithOk(n.errorMessage), e.dismiss())
                    }, function(l) {
                        e.dismiss(), a.reusableUtils.saveErrorLog({}, l), a.reusableUtils.showHttpError(l)
                    })
                }, l
            }(),
            U = f.b,
            T = function() {
                return function() {}
            }(),
            L = e(773),
            P = e(774),
            G = e(775),
            F = e(776),
            A = e(777),
            N = e(778),
            B = e(779),
            D = e(780),
            j = e(781),
            O = e(125),
            w = e(179),
            R = e(126),
            K = e(18),
            V = e(23),
            H = e(3),
            x = e(25),
            J = e(57),
            W = e(30),
            Y = e(10),
            Z = e(178),
            z = e(124),
            $ = e(5),
            q = e(36),
            Q = e(14),
            X = e(102),
            ll = e(7),
            nl = e(140),
            el = e(75),
            al = e(16),
            dl = e(139),
            il = e(103),
            ol = e(80),
            cl = e(67),
            ul = e(47),
            tl = e(60),
            _l = e(54),
            sl = e(63),
            rl = e(19),
            ml = e(56),
            gl = e(48),
            hl = e(53),
            pl = e(95),
            Cl = e(159),
            El = e(105),
            fl = e(37),
            bl = e(27),
            Il = e(12),
            Ml = e(20),
            kl = e(68),
            Sl = e(13),
            yl = e(17),
            vl = e(84),
            Ul = g._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            Tl = g._1("ng-component", v, function(l) {
                return g._29(0, [(l()(), g._5(0, 0, null, null, 2, "ng-component", [], null, null, null, m, Ul)), g._23(512, null, y.a, y.a, [Il.a, I.a, Ml.a, kl.a, Sl.a]), g._4(2, 49152, null, 0, v, [I.a, yl.a, S.a, y.a, al.a, vl.a], null, null)], null, null)
            }, {}, {}, []),
            Ll = e(31),
            Pl = e(221),
            Gl = e(402),
            Fl = e(222),
            Al = e(158);
        e.d(n, "changeMysjIdPageModuleNgFactory", function() {
            return Nl
        });
        var Nl = g._2(T, [], function(l) {
            return g._13([g._14(512, g.i, g.Y, [
                [8, [L.a, P.a, G.a, F.a, A.a, N.a, B.a, D.a, j.a, Tl]],
                [3, g.i], g.w
            ]), g._14(4608, Y.l, Y.k, [g.v, [2, Y.u]]), g._14(4608, W.u, W.u, []), g._14(4608, W.d, W.d, []), g._14(5120, h.f, U, [E.c]), g._14(4608, h.c, h.e, []), g._14(4608, h.h, h.d, []), g._14(4608, h.b, h.a, []), g._14(4608, h.j, h.j, [h.m, h.f, h.c, h.h, h.b, h.k, h.l]), g._14(4608, Ll.a, Ll.a, []), g._14(512, Y.b, Y.b, []), g._14(512, Pl.a, Pl.a, []), g._14(512, W.s, W.s, []), g._14(512, W.g, W.g, []), g._14(512, W.q, W.q, []), g._14(512, Gl.a, Gl.a, []), g._14(512, C.a, C.a, []), g._14(512, Fl.a, Fl.a, []), g._14(512, h.g, h.g, []), g._14(512, b.a, b.a, []), g._14(512, p.a, p.a, []), g._14(512, Gl.b, Gl.b, []), g._14(512, T, T, []), g._14(256, h.l, void 0, []), g._14(256, h.k, void 0, []), g._14(256, Al.a, v, [])])
        })
    }
});