webpackJsonp([6], {
    1242: function(t, e, n) {
        "use strict";

        function o(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 3, "ion-segment-button", [
                ["class", "segment-button"],
                ["role", "button"],
                ["tappable", ""],
                ["value", "myteam"]
            ], [
                [2, "segment-button-disabled", null],
                [2, "segment-activated", null],
                [1, "aria-pressed", 0]
            ], [
                [null, "ionSelect"],
                [null, "click"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("click" === e) {
                    o = !1 !== N._17(t, 1).onClick() && o
                }
                if ("ionSelect" === e) {
                    o = !1 !== r.changeSegment("myteam") && o
                }
                return o
            }, nt.b, nt.a)), N._4(1, 114688, [
                [1, 4]
            ], 0, ot.a, [], {
                value: [0, "value"]
            }, {
                ionSelect: "ionSelect"
            }), (t()(), N._27(2, 0, ["\n                    ", "\n                "])), N._20(131072, D.i, [D.j, N.g])], function(t, e) {
                t(e, 1, 0, "myteam")
            }, function(t, e) {
                t(e, 0, 0, N._17(e, 1)._disabled, N._17(e, 1).isActive, N._17(e, 1).isActive);
                t(e, 2, 0, N._28(e, 2, 0, N._17(e, 3).transform("myTeam")))
            })
        }

        function r(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 3, "ion-segment-button", [
                ["class", "segment-button"],
                ["role", "button"],
                ["tappable", ""],
                ["value", "group"]
            ], [
                [2, "segment-button-disabled", null],
                [2, "segment-activated", null],
                [1, "aria-pressed", 0]
            ], [
                [null, "ionSelect"],
                [null, "click"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("click" === e) {
                    o = !1 !== N._17(t, 1).onClick() && o
                }
                if ("ionSelect" === e) {
                    o = !1 !== r.changeSegment("group") && o
                }
                return o
            }, nt.b, nt.a)), N._4(1, 114688, [
                [1, 4]
            ], 0, ot.a, [], {
                value: [0, "value"]
            }, {
                ionSelect: "ionSelect"
            }), (t()(), N._27(2, 0, ["\n                    ", "\n                "])), N._20(131072, D.i, [D.j, N.g])], function(t, e) {
                t(e, 1, 0, "group")
            }, function(t, e) {
                t(e, 0, 0, N._17(e, 1)._disabled, N._17(e, 1).isActive, N._17(e, 1).isActive);
                t(e, 2, 0, N._28(e, 2, 0, N._17(e, 3).transform("userGroup")))
            })
        }

        function l(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 17, "ion-segment", [], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "segment-disabled", null]
            ], [
                [null, "ngModelChange"]
            ], function(t, e, n) {
                var o = !0;
                if ("ngModelChange" === e) {
                    o = !1 !== (t.component.segments = n) && o
                }
                return o
            }, null, null)), N._4(1, 671744, null, 0, rt.o, [
                [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), N._23(2048, null, rt.k, null, [rt.o]), N._4(3, 16384, null, 0, rt.l, [rt.k], null, null), N._4(4, 1196032, null, 1, lt.a, [it.a, N.k, N.F, [2, rt.k]], null, null), N._25(603979776, 1, {
                _buttons: 1
            }), (t()(), N._27(-1, null, ["\n                "])), (t()(), N._5(7, 0, null, null, 3, "ion-segment-button", [
                ["class", "segment-button"],
                ["role", "button"],
                ["tappable", ""],
                ["value", "seeall"]
            ], [
                [2, "segment-button-disabled", null],
                [2, "segment-activated", null],
                [1, "aria-pressed", 0]
            ], [
                [null, "ionSelect"],
                [null, "click"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("click" === e) {
                    o = !1 !== N._17(t, 8).onClick() && o
                }
                if ("ionSelect" === e) {
                    o = !1 !== r.changeSegment("seeall") && o
                }
                return o
            }, nt.b, nt.a)), N._4(8, 114688, [
                [1, 4]
            ], 0, ot.a, [], {
                value: [0, "value"]
            }, {
                ionSelect: "ionSelect"
            }), (t()(), N._27(9, 0, ["\n                    ", "\n                "])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, null, ["\n                "])), (t()(), N._0(16777216, null, null, 1, null, o)), N._4(13, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                "])), (t()(), N._0(16777216, null, null, 1, null, r)), N._4(16, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n            "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.segments);
                t(e, 8, 0, "seeall");
                t(e, 13, 0, n.teamCheck);
                t(e, 16, 0, n.myGroupCheck)
            }, function(t, e) {
                t(e, 0, 0, N._17(e, 3).ngClassUntouched, N._17(e, 3).ngClassTouched, N._17(e, 3).ngClassPristine, N._17(e, 3).ngClassDirty, N._17(e, 3).ngClassValid, N._17(e, 3).ngClassInvalid, N._17(e, 3).ngClassPending, N._17(e, 4)._disabled);
                t(e, 7, 0, N._17(e, 8)._disabled, N._17(e, 8).isActive, N._17(e, 8).isActive);
                t(e, 9, 0, N._28(e, 9, 0, N._17(e, 10).transform("seeAll")))
            })
        }

        function i(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 5, null, null, null, null, null, null, null)), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._5(2, 0, null, null, 2, "small", [
                ["class", "row mt-4"],
                ["justify-content-center", ""]
            ], null, null, null, null, null)), (t()(), N._27(3, null, ["", ""])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, null, ["\n                    "]))], null, function(t, e) {
                t(e, 3, 0, N._28(e, 3, 0, N._17(e, 4).transform("noResult")))
            })
        }

        function u(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 16, "ion-item", [
                ["class", "item item-block"],
                ["text-wrap", ""]
            ], null, null, null, at.b, at.a)), N._4(1, 1097728, null, 3, st.a, [ct.a, it.a, N.k, N.F, [2, ft.a]], null, null), N._25(335544320, 2, {
                contentLabel: 0
            }), N._25(603979776, 3, {
                _buttons: 1
            }), N._25(603979776, 4, {
                _icons: 1
            }), N._4(5, 16384, null, 0, dt.a, [], null, null), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(7, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), N._4(8, 16384, [
                [2, 4]
            ], 0, ht.a, [it.a, N.k, N.F, [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], null, null), (t()(), N._27(9, null, ["", ""])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(12, 0, null, 4, 3, "ion-checkbox", [
                ["item-end", ""]
            ], [
                [2, "checkbox-disabled", null]
            ], [
                [null, "ionChange"],
                [null, "click"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("click" === e) {
                    o = !1 !== N._17(t, 14)._click(n) && o
                }
                if ("ionChange" === e) {
                    o = !1 !== r.selectAllFunction(n) && o
                }
                return o
            }, pt.b, pt.a)), N._23(5120, null, rt.j, function(t) {
                return [t]
            }, [yt.a]), N._4(14, 1228800, null, 0, yt.a, [it.a, ct.a, [2, st.a], N.k, N.F], {
                checked: [0, "checked"]
            }, {
                ionChange: "ionChange"
            }), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                    "]))], function(t, e) {
                t(e, 14, 0, e.component.selectAll)
            }, function(t, e) {
                t(e, 9, 0, N._28(e, 9, 0, N._17(e, 10).transform("selectAll")));
                t(e, 12, 0, N._17(e, 14)._disabled)
            })
        }

        function a(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (t()(), N._27(1, null, ["", ""]))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, "employee_" + e.parent.context.index);
                t(e, 1, 0, n.UserUtils.getInitials(e.parent.context.$implicit.displayName))
            })
        }

        function s(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(t, e, n) {
                var o = !0;
                if ("load" === e) {
                    o = !1 !== N._17(t, 1).onLoad() && o
                }
                if ("error" === e) {
                    o = !1 !== N._17(t, 1).onError() && o
                }
                return o
            }, null, null)), N._4(1, 540672, null, 0, vt.a, [bt.a, N.k, mt.a], {
                cache: [0, "cache"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.parent.context.$implicit.imageUrl)
            }, function(t, e) {
                t(e, 0, 0, "employee_" + e.parent.context.index)
            })
        }

        function c(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 28, "ion-item", [
                ["class", "item item-block"],
                ["text-wrap", ""]
            ], null, null, null, at.b, at.a)), N._4(1, 1097728, null, 3, st.a, [ct.a, it.a, N.k, N.F, [2, ft.a]], null, null), N._25(335544320, 5, {
                contentLabel: 0
            }), N._25(603979776, 6, {
                _buttons: 1
            }), N._25(603979776, 7, {
                _icons: 1
            }), N._4(5, 16384, null, 0, dt.a, [], null, null), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), N._4(8, 16384, null, 0, gt.a, [], null, null), (t()(), N._27(-1, null, ["\n                            "])), (t()(), N._0(16777216, null, null, 1, null, a)), N._4(11, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                            "])), (t()(), N._0(16777216, null, null, 1, null, s)), N._4(14, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(17, 0, null, 1, 5, "ion-label", [], null, null, null, null, null)), N._4(18, 16384, [
                [5, 4]
            ], 0, ht.a, [it.a, N.k, N.F, [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], null, null), (t()(), N._27(-1, null, ["\n                            "])), (t()(), N._5(20, 0, null, null, 1, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (t()(), N._27(21, null, [" ", ""])), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(24, 0, null, 4, 3, "ion-checkbox", [
                ["item-end", ""]
            ], [
                [2, "checkbox-disabled", null]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("click" === e) {
                    o = !1 !== N._17(t, 26)._click(n) && o
                }
                if ("click" === e) {
                    o = !1 !== r.addOrRemoveEmployee(t.context.$implicit) && o
                }
                return o
            }, pt.b, pt.a)), N._23(5120, null, rt.j, function(t) {
                return [t]
            }, [yt.a]), N._4(26, 1228800, null, 0, yt.a, [it.a, ct.a, [2, st.a], N.k, N.F], {
                checked: [0, "checked"]
            }, null), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                    "]))], function(t, e) {
                var n = e.component;
                t(e, 11, 0, !e.context.$implicit.imageUrl);
                t(e, 14, 0, e.context.$implicit.imageUrl);
                t(e, 26, 0, n.selectAll ? e.context.$implicit.checked : n.getChecked(e.context.$implicit.id))
            }, function(t, e) {
                t(e, 20, 0, "makeAnnouncementChooseEmp_" + e.context.index);
                t(e, 21, 0, e.context.$implicit.displayName);
                t(e, 24, 0, N._17(e, 26)._disabled)
            })
        }

        function f(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 5, "ion-infinite-scroll", [], [
                [8, "id", 0]
            ], [
                [null, "ionInfinite"]
            ], function(t, e, n) {
                var o = !0;
                if ("ionInfinite" === e) {
                    o = !1 !== t.component.doInfiniteInfo(n) && o
                }
                return o
            }, null, null)), N._4(1, 1196032, null, 0, _t.a, [Ot.a, N.y, N.k, kt.a], null, {
                ionInfinite: "ionInfinite"
            }), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._5(3, 0, null, null, 1, "ion-infinite-scroll-content", [], [
                [1, "state", 0]
            ], null, null, xt.b, xt.a)), N._4(4, 114688, null, 0, Et.a, [_t.a, it.a], null, null), (t()(), N._27(-1, null, ["\n                    "]))], function(t, e) {
                t(e, 4, 0)
            }, function(t, e) {
                t(e, 0, 0, "homeToKnowInfiniteScroll");
                t(e, 3, 0, N._17(e, 4).inf.state)
            })
        }

        function d(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 14, "ion-list", [], null, null, null, null, null)), N._4(1, 16384, null, 0, wt.a, [it.a, N.k, N.F, At.a, jt.l, kt.a], null, null), (t()(), N._27(-1, null, ["\n                    "])), (t()(), N._0(16777216, null, null, 1, null, i)), N._4(4, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n\n                    "])), (t()(), N._0(16777216, null, null, 1, null, u)), N._4(7, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                    "])), (t()(), N._0(16777216, null, null, 1, null, c)), N._4(10, 802816, null, 0, ut.i, [N.O, N.L, N.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), N._27(-1, null, ["\n                    "])), (t()(), N._0(16777216, null, null, 1, null, f)), N._4(13, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                "]))], function(t, e) {
                var n = e.component;
                t(e, 4, 0, 0 == n.totalElements);
                t(e, 7, 0, n.totalElements > 0);
                t(e, 10, 0, n.employees);
                t(e, 13, 0, n.isInfiniteSearchEnabled && 0 != n.totalElements)
            }, null)
        }

        function h(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 5, null, null, null, null, null, null, null)), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._5(2, 0, null, null, 2, "small", [
                ["class", "row mt-3"],
                ["justify-content-center", ""]
            ], null, null, null, null, null)), (t()(), N._27(3, null, ["", ""])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, null, ["\n                    "]))], null, function(t, e) {
                t(e, 3, 0, N._28(e, 3, 0, N._17(e, 4).transform("noResult")))
            })
        }

        function p(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 15, "ion-item", [
                ["class", "item item-block"],
                ["text-wrap", ""]
            ], null, null, null, at.b, at.a)), N._4(1, 1097728, null, 3, st.a, [ct.a, it.a, N.k, N.F, [2, ft.a]], null, null), N._25(335544320, 8, {
                contentLabel: 0
            }), N._25(603979776, 9, {
                _buttons: 1
            }), N._25(603979776, 10, {
                _icons: 1
            }), N._4(5, 16384, null, 0, dt.a, [], null, null), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(7, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), N._4(8, 16384, [
                [8, 4]
            ], 0, ht.a, [it.a, N.k, N.F, [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], null, null), (t()(), N._27(9, null, ["", ""])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(12, 0, null, 4, 2, "ion-checkbox", [
                ["item-end", ""]
            ], [
                [2, "checkbox-disabled", null]
            ], [
                [null, "ionChange"],
                [null, "click"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("click" === e) {
                    o = !1 !== N._17(t, 14)._click(n) && o
                }
                if ("ionChange" === e) {
                    o = !1 !== r.selectAllFunction(n, "myteam") && o
                }
                return o
            }, pt.b, pt.a)), N._23(5120, null, rt.j, function(t) {
                return [t]
            }, [yt.a]), N._4(14, 1228800, null, 0, yt.a, [it.a, ct.a, [2, st.a], N.k, N.F], {
                checked: [0, "checked"]
            }, {
                ionChange: "ionChange"
            }), (t()(), N._27(-1, 2, ["\n                    "]))], function(t, e) {
                t(e, 14, 0, e.component.selectAllMyTeam)
            }, function(t, e) {
                t(e, 9, 0, N._28(e, 9, 0, N._17(e, 10).transform("selectAll")));
                t(e, 12, 0, N._17(e, 14)._disabled)
            })
        }

        function y(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (t()(), N._27(1, null, ["", ""]))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, "employee_" + e.parent.context.index);
                t(e, 1, 0, n.UserUtils.getInitials(e.parent.context.$implicit.displayName))
            })
        }

        function v(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(t, e, n) {
                var o = !0;
                if ("load" === e) {
                    o = !1 !== N._17(t, 1).onLoad() && o
                }
                if ("error" === e) {
                    o = !1 !== N._17(t, 1).onError() && o
                }
                return o
            }, null, null)), N._4(1, 540672, null, 0, vt.a, [bt.a, N.k, mt.a], {
                cache: [0, "cache"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.parent.context.$implicit.imageUrl)
            }, function(t, e) {
                t(e, 0, 0, "employee_" + e.parent.context.index)
            })
        }

        function b(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 28, "ion-item", [
                ["class", "item item-block"],
                ["text-wrap", ""]
            ], null, null, null, at.b, at.a)), N._4(1, 1097728, null, 3, st.a, [ct.a, it.a, N.k, N.F, [2, ft.a]], null, null), N._25(335544320, 11, {
                contentLabel: 0
            }), N._25(603979776, 12, {
                _buttons: 1
            }), N._25(603979776, 13, {
                _icons: 1
            }), N._4(5, 16384, null, 0, dt.a, [], null, null), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), N._4(8, 16384, null, 0, gt.a, [], null, null), (t()(), N._27(-1, null, ["\n                            "])), (t()(), N._0(16777216, null, null, 1, null, y)), N._4(11, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                            "])), (t()(), N._0(16777216, null, null, 1, null, v)), N._4(14, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(17, 0, null, 1, 5, "ion-label", [], null, null, null, null, null)), N._4(18, 16384, [
                [11, 4]
            ], 0, ht.a, [it.a, N.k, N.F, [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], null, null), (t()(), N._27(-1, null, ["\n                            "])), (t()(), N._5(20, 0, null, null, 1, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (t()(), N._27(21, null, ["", ""])), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(24, 0, null, 4, 3, "ion-checkbox", [
                ["item-end", ""]
            ], [
                [2, "checkbox-disabled", null]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("click" === e) {
                    o = !1 !== N._17(t, 26)._click(n) && o
                }
                if ("click" === e) {
                    o = !1 !== r.addOrRemoveEmployee(t.context.$implicit, "myteam") && o
                }
                return o
            }, pt.b, pt.a)), N._23(5120, null, rt.j, function(t) {
                return [t]
            }, [yt.a]), N._4(26, 1228800, null, 0, yt.a, [it.a, ct.a, [2, st.a], N.k, N.F], {
                checked: [0, "checked"]
            }, null), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                    "]))], function(t, e) {
                var n = e.component;
                t(e, 11, 0, !e.context.$implicit.imageUrl);
                t(e, 14, 0, e.context.$implicit.imageUrl);
                t(e, 26, 0, n.selectAllMyTeam ? e.context.$implicit.checked : n.getChecked(e.context.$implicit.id, "myteam"))
            }, function(t, e) {
                t(e, 20, 0, "makeAnnouncementChooseEmp_" + e.context.index);
                t(e, 21, 0, e.context.$implicit.displayName);
                t(e, 24, 0, N._17(e, 26)._disabled)
            })
        }

        function m(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 11, "ion-list", [], null, null, null, null, null)), N._4(1, 16384, null, 0, wt.a, [it.a, N.k, N.F, At.a, jt.l, kt.a], null, null), (t()(), N._27(-1, null, ["\n\n                    "])), (t()(), N._0(16777216, null, null, 1, null, h)), N._4(4, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                    "])), (t()(), N._0(16777216, null, null, 1, null, p)), N._4(7, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                    "])), (t()(), N._0(16777216, null, null, 1, null, b)), N._4(10, 802816, null, 0, ut.i, [N.O, N.L, N.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), N._27(-1, null, ["\n                "]))], function(t, e) {
                var n = e.component;
                t(e, 4, 0, 0 == n.myTeam.length);
                t(e, 7, 0, n.myTeam.length > 0);
                t(e, 10, 0, n.myTeam)
            }, null)
        }

        function g(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 5, null, null, null, null, null, null, null)), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._5(2, 0, null, null, 2, "small", [
                ["class", "row mt-3"],
                ["justify-content-center", ""]
            ], null, null, null, null, null)), (t()(), N._27(3, null, ["", ""])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, null, ["\n                    "]))], null, function(t, e) {
                t(e, 3, 0, N._28(e, 3, 0, N._17(e, 4).transform("noResult")))
            })
        }

        function _(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 15, "ion-item", [
                ["class", "item item-block"],
                ["text-wrap", ""]
            ], null, null, null, at.b, at.a)), N._4(1, 1097728, null, 3, st.a, [ct.a, it.a, N.k, N.F, [2, ft.a]], null, null), N._25(335544320, 14, {
                contentLabel: 0
            }), N._25(603979776, 15, {
                _buttons: 1
            }), N._25(603979776, 16, {
                _icons: 1
            }), N._4(5, 16384, null, 0, dt.a, [], null, null), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(7, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), N._4(8, 16384, [
                [14, 4]
            ], 0, ht.a, [it.a, N.k, N.F, [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], null, null), (t()(), N._27(9, null, ["", ""])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(12, 0, null, 4, 2, "ion-checkbox", [
                ["item-end", ""]
            ], [
                [2, "checkbox-disabled", null]
            ], [
                [null, "ionChange"],
                [null, "click"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("click" === e) {
                    o = !1 !== N._17(t, 14)._click(n) && o
                }
                if ("ionChange" === e) {
                    o = !1 !== r.selectAllFunction(n, "group") && o
                }
                return o
            }, pt.b, pt.a)), N._23(5120, null, rt.j, function(t) {
                return [t]
            }, [yt.a]), N._4(14, 1228800, null, 0, yt.a, [it.a, ct.a, [2, st.a], N.k, N.F], {
                checked: [0, "checked"]
            }, {
                ionChange: "ionChange"
            }), (t()(), N._27(-1, 2, ["\n                    "]))], function(t, e) {
                t(e, 14, 0, e.component.selectAllGroups)
            }, function(t, e) {
                t(e, 9, 0, N._28(e, 9, 0, N._17(e, 10).transform("selectAll")));
                t(e, 12, 0, N._17(e, 14)._disabled)
            })
        }

        function O(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (t()(), N._27(1, null, ["", ""]))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, "employee_" + e.parent.context.index);
                t(e, 1, 0, n.UserUtils.getInitials(e.parent.context.$implicit.name))
            })
        }

        function k(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(t, e, n) {
                var o = !0;
                if ("load" === e) {
                    o = !1 !== N._17(t, 1).onLoad() && o
                }
                if ("error" === e) {
                    o = !1 !== N._17(t, 1).onError() && o
                }
                return o
            }, null, null)), N._4(1, 540672, null, 0, vt.a, [bt.a, N.k, mt.a], {
                cache: [0, "cache"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.parent.context.$implicit.imageUrl)
            }, function(t, e) {
                t(e, 0, 0, "employee_" + e.parent.context.index)
            })
        }

        function x(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 28, "ion-item", [
                ["class", "item item-block"],
                ["text-wrap", ""]
            ], null, null, null, at.b, at.a)), N._4(1, 1097728, null, 3, st.a, [ct.a, it.a, N.k, N.F, [2, ft.a]], null, null), N._25(335544320, 17, {
                contentLabel: 0
            }), N._25(603979776, 18, {
                _buttons: 1
            }), N._25(603979776, 19, {
                _icons: 1
            }), N._4(5, 16384, null, 0, dt.a, [], null, null), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), N._4(8, 16384, null, 0, gt.a, [], null, null), (t()(), N._27(-1, null, ["\n                            "])), (t()(), N._0(16777216, null, null, 1, null, O)), N._4(11, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                            "])), (t()(), N._0(16777216, null, null, 1, null, k)), N._4(14, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(17, 0, null, 1, 5, "ion-label", [], null, null, null, null, null)), N._4(18, 16384, [
                [17, 4]
            ], 0, ht.a, [it.a, N.k, N.F, [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], null, null), (t()(), N._27(-1, null, ["\n                            "])), (t()(), N._5(20, 0, null, null, 1, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (t()(), N._27(21, null, ["", ""])), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                        "])), (t()(), N._5(24, 0, null, 4, 3, "ion-checkbox", [
                ["item-end", ""]
            ], [
                [2, "checkbox-disabled", null]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("click" === e) {
                    o = !1 !== N._17(t, 26)._click(n) && o
                }
                if ("click" === e) {
                    o = !1 !== r.addOrRemoveEmployee(t.context.$implicit, "group") && o
                }
                return o
            }, pt.b, pt.a)), N._23(5120, null, rt.j, function(t) {
                return [t]
            }, [yt.a]), N._4(26, 1228800, null, 0, yt.a, [it.a, ct.a, [2, st.a], N.k, N.F], {
                checked: [0, "checked"]
            }, null), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._27(-1, 2, ["\n                    "]))], function(t, e) {
                var n = e.component;
                t(e, 11, 0, !e.context.$implicit.imageUrl);
                t(e, 14, 0, e.context.$implicit.imageUrl);
                t(e, 26, 0, n.selectAllGroups ? n.selectAllGroups : n.getChecked(e.context.$implicit.id, "group"))
            }, function(t, e) {
                t(e, 20, 0, "makeAnnouncementChooseEmp_" + e.context.index);
                t(e, 21, 0, e.context.$implicit.name);
                t(e, 24, 0, N._17(e, 26)._disabled)
            })
        }

        function E(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 5, "ion-infinite-scroll", [], [
                [8, "id", 0]
            ], [
                [null, "ionInfinite"]
            ], function(t, e, n) {
                var o = !0;
                if ("ionInfinite" === e) {
                    o = !1 !== t.component.doInfiniteInfo(n, "group") && o
                }
                return o
            }, null, null)), N._4(1, 1196032, null, 0, _t.a, [Ot.a, N.y, N.k, kt.a], null, {
                ionInfinite: "ionInfinite"
            }), (t()(), N._27(-1, null, ["\n                        "])), (t()(), N._5(3, 0, null, null, 1, "ion-infinite-scroll-content", [], [
                [1, "state", 0]
            ], null, null, xt.b, xt.a)), N._4(4, 114688, null, 0, Et.a, [_t.a, it.a], null, null), (t()(), N._27(-1, null, ["\n                    "]))], function(t, e) {
                t(e, 4, 0)
            }, function(t, e) {
                t(e, 0, 0, "homeToKnowInfiniteScroll");
                t(e, 3, 0, N._17(e, 4).inf.state)
            })
        }

        function w(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 14, "ion-list", [], null, null, null, null, null)), N._4(1, 16384, null, 0, wt.a, [it.a, N.k, N.F, At.a, jt.l, kt.a], null, null), (t()(), N._27(-1, null, ["\n                    "])), (t()(), N._0(16777216, null, null, 1, null, g)), N._4(4, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                    "])), (t()(), N._0(16777216, null, null, 1, null, _)), N._4(7, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                    "])), (t()(), N._0(16777216, null, null, 1, null, x)), N._4(10, 802816, null, 0, ut.i, [N.O, N.L, N.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(), N._27(-1, null, ["\n                    "])), (t()(), N._0(16777216, null, null, 1, null, E)), N._4(13, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n                "]))], function(t, e) {
                var n = e.component;
                t(e, 4, 0, 0 == n.totalGroupElements);
                t(e, 7, 0, n.totalGroupElements > 0);
                t(e, 10, 0, n.groups);
                t(e, 13, 0, n.isInfiniteSearchEnabledGroup)
            }, null)
        }

        function A(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 3, "button", [
                ["color", "btn-secondary"],
                ["ion-button", ""],
                ["name", "Schedule_Annoucement"],
                ["solid", ""]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var o = !0;
                if ("click" === e) {
                    o = !1 !== t.component.post("schedule") && o
                }
                return o
            }, Nt.b, Nt.a)), N._4(1, 1097728, [
                [20, 4]
            ], 0, Tt.a, [
                [8, ""], it.a, N.k, N.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (t()(), N._27(2, 0, ["", ""])), N._20(131072, D.i, [D.j, N.g])], function(t, e) {
                t(e, 1, 0, "btn-secondary", "")
            }, function(t, e) {
                t(e, 0, 0, "makeAnnouncementScheduleBtn");
                t(e, 2, 0, N._28(e, 2, 0, N._17(e, 3).transform("schedule")))
            })
        }

        function j(t) {
            return N._29(0, [(t()(), N._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), N._4(1, 16384, null, 0, Pt.a, [it.a, N.k, N.F, [2, St.a]], null, null), (t()(), N._27(-1, null, ["\n    "])), (t()(), N._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, qt.b, qt.a)), N._4(4, 49152, null, 0, Ct.a, [Lt.a, [2, St.a],
                [2, It.a], it.a, N.k, N.F
            ], {
                color: [0, "color"]
            }, null), (t()(), N._27(-1, 3, ["\n        "])), (t()(), N._5(6, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, Mt.b, Mt.a)), N._4(7, 49152, null, 0, Rt.a, [it.a, N.k, N.F, [2, Dt.a],
                [2, Ct.a]
            ], null, null), (t()(), N._27(8, 0, ["", ""])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, 3, ["\n    "])), (t()(), N._27(-1, null, ["\n"])), (t()(), N._27(-1, null, ["\n\n"])), (t()(), N._5(13, 0, null, null, 38, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, Bt.b, Bt.a)), N._4(14, 4374528, null, 0, Ot.a, [it.a, At.a, kt.a, N.k, N.F, Lt.a, Ut.a, N.y, [2, St.a],
                [2, It.a]
            ], null, null), (t()(), N._27(-1, 1, ["\n    "])), (t()(), N._5(16, 0, null, 1, 34, "ion-card", [], null, null, null, null, null)), N._4(17, 16384, null, 0, Ft.a, [it.a, N.k, N.F], null, null), (t()(), N._27(-1, null, ["\n        "])), (t()(), N._5(19, 0, null, null, 3, "ion-card-header", [], [
                [8, "id", 0]
            ], null, null, null, null)), N._4(20, 16384, null, 0, Ht.a, [it.a, N.k, N.F], null, null), (t()(), N._27(21, null, ["\n            ", "\n        "])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, null, ["\n        "])), (t()(), N._5(24, 0, null, null, 25, "ion-card-content", [], null, null, null, null, null)), N._4(25, 16384, null, 0, Gt.a, [it.a, N.k, N.F], null, null), (t()(), N._27(-1, null, ["\n            "])), (t()(), N._5(27, 0, null, null, 5, "ion-searchbar", [
                ["class", "mb-3"],
                ["name", "Select_Recipient"],
                ["placeholder", "Search employees and teams"]
            ], [
                [8, "id", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "searchbar-animated", null],
                [2, "searchbar-has-value", null],
                [2, "searchbar-active", null],
                [2, "searchbar-show-cancel", null],
                [2, "searchbar-left-aligned", null],
                [2, "searchbar-has-focus", null]
            ], [
                [null, "ngModelChange"],
                [null, "ionInput"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                if ("ngModelChange" === e) {
                    o = !1 !== (r.searchEmployee = n) && o
                }
                if ("ionInput" === e) {
                    o = !1 !== ("seeall" == r.segmentsCheck ? r.search(r.searchEmployee, null, !1, 0) : "myteam" == r.segmentsCheck ? r.search(r.searchEmployee, null, !1, 0) : r.myGroups(r.searchEmployee, null, !1, 1)) && o
                }
                return o
            }, Kt.b, Kt.a)), N._4(28, 671744, null, 0, rt.o, [
                [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), N._23(2048, null, rt.k, null, [rt.o]), N._4(30, 16384, null, 0, rt.l, [rt.k], null, null), N._4(31, 1294336, null, 0, zt.a, [it.a, At.a, N.k, N.F, [2, rt.k]], {
                placeholder: [0, "placeholder"]
            }, {
                ionInput: "ionInput"
            }), (t()(), N._27(-1, null, ["\n            "])), (t()(), N._27(-1, null, ["\n\n            "])), (t()(), N._0(16777216, null, null, 1, null, l)), N._4(35, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n            "])), (t()(), N._5(37, 0, null, null, 11, "div", [], null, null, null, null, null)), N._4(38, 16384, null, 0, ut.n, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (t()(), N._27(-1, null, ["\n                "])), (t()(), N._0(16777216, null, null, 1, null, d)), N._4(41, 278528, null, 0, ut.o, [N.O, N.L, ut.n], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (t()(), N._27(-1, null, ["\n                "])), (t()(), N._0(16777216, null, null, 1, null, m)), N._4(44, 278528, null, 0, ut.o, [N.O, N.L, ut.n], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (t()(), N._27(-1, null, ["\n                "])), (t()(), N._0(16777216, null, null, 1, null, w)), N._4(47, 278528, null, 0, ut.o, [N.O, N.L, ut.n], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (t()(), N._27(-1, null, ["\n            "])), (t()(), N._27(-1, null, ["\n        "])), (t()(), N._27(-1, null, ["\n    "])), (t()(), N._27(-1, 1, ["\n"])), (t()(), N._27(-1, null, ["\n\n"])), (t()(), N._5(53, 0, null, null, 19, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), N._4(54, 16384, null, 0, Vt.a, [it.a, N.k, N.F, [2, St.a]], null, null), (t()(), N._27(-1, null, ["\n    "])), (t()(), N._5(56, 0, null, null, 15, "ion-toolbar", [
                ["class", "toolbar"]
            ], [
                [2, "statusbar-padding", null]
            ], null, null, Wt.b, Wt.a)), N._4(57, 49152, null, 0, Dt.a, [it.a, N.k, N.F], null, null), (t()(), N._27(-1, 3, ["\n        "])), (t()(), N._5(59, 0, null, 2, 11, "ion-buttons", [
                ["right", ""]
            ], null, null, null, null, null)), N._4(60, 16384, null, 1, Zt.a, [it.a, N.k, N.F, [2, Dt.a],
                [2, Ct.a]
            ], null, null), N._25(603979776, 20, {
                _buttons: 1
            }), (t()(), N._27(-1, null, ["\n            "])), (t()(), N._0(16777216, null, null, 1, null, A)), N._4(64, 16384, null, 0, ut.j, [N.O, N.L], {
                ngIf: [0, "ngIf"]
            }, null), (t()(), N._27(-1, null, ["\n            "])), (t()(), N._5(66, 0, null, null, 3, "button", [
                ["color", "btn-primary"],
                ["ion-button", ""],
                ["name", "Post_Annoucement"],
                ["solid", ""]
            ], [
                [8, "id", 0],
                [8, "disabled", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var o = !0;
                if ("click" === e) {
                    o = !1 !== t.component.post() && o
                }
                return o
            }, Nt.b, Nt.a)), N._4(67, 1097728, [
                [20, 4]
            ], 0, Tt.a, [
                [8, ""], it.a, N.k, N.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (t()(), N._27(68, 0, ["", ""])), N._20(131072, D.i, [D.j, N.g]), (t()(), N._27(-1, null, ["\n        "])), (t()(), N._27(-1, 3, ["\n    "])), (t()(), N._27(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 4, 0, "theme");
                t(e, 28, 0, "Select_Recipient", n.searchEmployee);
                t(e, 31, 0, "Search employees and teams");
                t(e, 35, 0, n.seeAllCheck && n.myTeamCheck && n.groupCheck);
                t(e, 38, 0, n.segments);
                t(e, 41, 0, "seeall");
                t(e, 44, 0, "myteam");
                t(e, 47, 0, "group");
                t(e, 64, 0, !n.FromPreview);
                t(e, 67, 0, "btn-primary", "")
            }, function(t, e) {
                var n = e.component;
                t(e, 3, 0, N._17(e, 4)._hidden, N._17(e, 4)._sbPadding);
                t(e, 6, 0, "makeAnnouncementEmpHeader");
                t(e, 8, 0, N._28(e, 8, 0, N._17(e, 9).transform("makeAnnouncementMenu")));
                t(e, 13, 0, N._17(e, 14).statusbarPadding, N._17(e, 14)._hasRefresher);
                t(e, 19, 0, "makeAnnouncementChooseRec");
                t(e, 21, 0, N._28(e, 21, 0, N._17(e, 22).transform("chooseRecipient")));
                t(e, 27, 1, ["makeAnnouncementChooseSearchBar", N._17(e, 30).ngClassUntouched, N._17(e, 30).ngClassTouched, N._17(e, 30).ngClassPristine, N._17(e, 30).ngClassDirty, N._17(e, 30).ngClassValid, N._17(e, 30).ngClassInvalid, N._17(e, 30).ngClassPending, N._17(e, 31)._animated, N._17(e, 31)._value, N._17(e, 31)._isActive, N._17(e, 31)._showCancelButton, N._17(e, 31)._shouldAlignLeft, N._17(e, 31)._isFocus]);
                t(e, 56, 0, N._17(e, 57)._sbPadding);
                t(e, 66, 0, "makeAnnouncementPost", n.disablePost);
                t(e, 68, 0, N._28(e, 68, 0, N._17(e, 69).transform("announceNow")))
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var N = n(1),
            T = (n(0), n(6), n(415)),
            P = n(88),
            S = n(11),
            q = n(21),
            C = n(13),
            L = n(49),
            I = n.n(L),
            M = null,
            R = function() {
                function t(t, e, n, o, r, l, i, u, a) {
                    this.viewCtrl = t, this.navParams = e, this.navCtrl = n, this.announcementProvider = o, this.UserUtils = r, this.ReusableUtils = l, this.loadingCtrl = i, this.commonProvider = u, this.StorageAccess = a, this.searchEmployee = "", this.selectedEmployees = [], this.disablePost = !0, this.isInfiniteSearchEnabled = !0, this.pageNumber = 0, this.selectAll = !1, this.selectAllGroups = !1, this.excludeEmpIds = [], this.segments = "seeall", this.totalElements = 0, this.totalGroups = 0, this.myTeam = [], this.groups = [], this.userGroupIds = [], this.groupPageNumber = 1, this.isInfiniteSearchEnabledGroup = !0, this.segmentsCheck = "seeall", this.excludeEmpIdsobj = [], this.selectedEmployeesObj = [], this.selectAllMyTeam = !1, this.seeAllCheck = !1, this.myTeamCheck = !1, this.groupCheck = !1, this.teamCheck = !1, this.myGroupCheck = !1, this.FromPreview = !1, this.search = I.a.throttle(function(t, e, n, o) {
                        var r = this;
                        "myteam" == r.segmentsCheck ? r.myTeamCall(t) : "seeall" == r.segmentsCheck && (r.isInfiniteSearchEnabled = !0, r.isInfiniteSearchEnabledGroup = !0, r.announcementProvider.searchEmployee(encodeURIComponent(t.trim()), o).subscribe(function(l) {
                            r.seeAllCheck = !0, l && r.searchEmployee.trim() == t.trim() && (r.pageNumber = o + 1, n ? I.a.each(l.content, function(t) {
                                r.employees.push(t)
                            }) : r.employees = l.content, r.totalPages = l.totalPages, r.totalElements = l.totalElements, 1 == r.totalPages && (r.isInfiniteSearchEnabled = !1), e && e.complete()), r.selectAll || r.selectAllMyTeam ? (I.a.each(r.employees, function(t) {
                                t.hasOwnProperty("checked") || (t.checked = r.getCheckSelectAll(t.id))
                            }), I.a.each(r.myTeam, function(t) {
                                t.checked = r.getCheckSelectAll(t.id)
                            })) : (I.a.each(r.employees, function(t) {
                                t.hasOwnProperty("checked") || (t.checked = r.getChecked(t.id))
                            }), I.a.each(r.myTeam, function(t) {
                                t.checked = r.getChecked(t.id)
                            }))
                        }, function() {}))
                    }, 500, {
                        trailing: !0
                    });
                    this.presentLoading(), this.announcementData = this.navParams.get("announcementData"), this.FromPreview = this.navParams.get("FromPreview"), this.empId = this.navParams.get("empId"), this.myTeamCall(), this.search(this.searchEmployee, null, !1, this.pageNumber), this.myGroups(this.searchEmployee, null, !1, this.groupPageNumber)
                }
                return t.prototype.getChecked = function(t, e) {
                    var n = this;
                    if ("group" == e) return -1 != n.userGroupIds.indexOf(t);
                    if (n.selectAllMyTeam) {
                        var o = I.a.findWhere(n.myTeam, {
                            id: t
                        });
                        return I.a.isUndefined(o) ? -1 != n.selectedEmployees.indexOf(t) : I.a.find(n.myTeam, function(e) {
                            return e.id == t && -1 == n.excludeEmpIds.indexOf(t)
                        })
                    }
                    return -1 != n.selectedEmployees.indexOf(t)
                }, t.prototype.getCheckSelectAll = function(t) {
                    return -1 == this.excludeEmpIds.indexOf(t)
                }, t.prototype.scheduleAnnouncement = function() {
                    this.navCtrl.push("AnnouncementSchedule", {
                        announcementData: this.announcementData
                    })
                }, t.prototype.addOrRemoveEmployee = function(t, e) {
                    var n = this;
                    if ("group" == e) n.selectAllGroups ? t.checked ? (t.checked = !1, I.a.each(n.groups, function(t) {
                        t.checked ? n.disablePost = !1 : t.checked || n.groups.every(n.setSelectAll) && (n.selectAllGroups = !1, n.selectedEmployees.length <= 0 && !n.selectAll && (n.disablePost = !0))
                    })) : t.checked || (t.checked = !0) : -1 != n.userGroupIds.indexOf(t.id) ? (n.userGroupIds = I.a.without(n.userGroupIds, t.id), n.disablePost = !(n.userGroupIds.length > 0 || n.selectedEmployees.length > 0)) : (n.userGroupIds.push(t.id), n.disablePost = !1);
                    else if ("myteam" == e)
                        if (n.selectAllMyTeam) {
                            if (n.selectAllMyTeam) {
                                var o = I.a.findWhere(n.excludeEmpIdsobj, {
                                    id: t.id
                                });
                                n.selectAll ? t.checked ? (t.checked = !1, n.excludeEmpIdsobj.push(t), n.excludeEmpIds.push(t.id), I.a.each(n.myTeam, function(e) {
                                    e.id == t.id && (e.checked = !1), e.checked ? n.disablePost = !1 : e.checked || n.myTeam.every(n.setSelectAll) && n.userGroupIds.length <= 0 && !n.selectAllGroups && !n.selectAll && (n.disablePost = !0)
                                }), n.employees.filter(function(e) {
                                    e.id == t.id && (e.checked = !1)
                                })) : t.checked || (t.checked = !0, n.employees.filter(function(e) {
                                    e.id == t.id && (e.checked = !0)
                                }), n.excludeEmpIdsobj = I()(n.excludeEmpIdsobj).filter(function(e) {
                                    return e.id != t.id
                                }), n.excludeEmpIds = I()(n.excludeEmpIds).filter(function(e) {
                                    return e != t.id
                                })) : -1 != n.excludeEmpIds.indexOf(t.id) ? (n.excludeEmpIds = I.a.without(n.excludeEmpIds, t.id), n.excludeEmpIdsobj = I.a.without(n.excludeEmpIdsobj, I.a.findWhere(n.excludeEmpIdsobj, {
                                    id: t.id
                                })), n.disablePost = !(n.selectedEmployees.length > 0 || n.userGroupIds.length > 0 || n.selectAllMyTeam)) : I.a.isUndefined(o) && (n.excludeEmpIdsobj.push(t), n.excludeEmpIds.push(t.id), n.disablePost = !1)
                            }
                        } else n.selectAll ? t.checked ? (t.checked = !1, n.excludeEmpIdsobj.push(t), n.excludeEmpIds.push(t.id), I.a.each(n.myTeam, function(e) {
                            e.id == t.id && (e.checked = !1), e.checked ? n.disablePost = !1 : e.checked || n.myTeam.every(n.setSelectAll) && n.userGroupIds.length <= 0 && !n.selectAllGroups && !n.selectAll && (n.disablePost = !0)
                        }), n.employees.filter(function(e) {
                            e.id == t.id && (e.checked = !1)
                        })) : t.checked || (t.checked = !0, n.employees.filter(function(e) {
                            e.id == t.id && (e.checked = !0)
                        }), n.excludeEmpIdsobj = I()(n.excludeEmpIdsobj).filter(function(e) {
                            return e.id != t.id
                        }), n.excludeEmpIds = I()(n.excludeEmpIds).filter(function(e) {
                            return e != t.id
                        })) : -1 != n.selectedEmployees.indexOf(t.id) ? (n.selectedEmployees = I.a.without(n.selectedEmployees, t.id), n.disablePost = !(n.selectedEmployees.length > 0 || n.userGroupIds.length > 0)) : (n.selectedEmployeesObj.push(t), n.selectedEmployees.push(t.id), n.disablePost = !1);
                    else if (n.selectAll || n.selectAllMyTeam)
                        if (!n.selectAll && n.selectAllMyTeam)
                            if (-1 != n.excludeEmpIds.indexOf(t.id)) n.excludeEmpIds = I.a.without(n.excludeEmpIds, t.id), n.excludeEmpIdsobj = I.a.without(n.excludeEmpIdsobj, I.a.findWhere(n.excludeEmpIdsobj, {
                                id: t.id
                            })), n.disablePost = !(n.selectedEmployees.length > 0 || n.userGroupIds.length > 0 || n.selectAllMyTeam);
                            else {
                                var r = I.a.findWhere(n.myTeam, {
                                    id: t.id
                                });
                                I.a.isUndefined(r) ? (n.selectedEmployeesObj.push(t), n.selectedEmployees.push(t.id), n.disablePost = !1) : (n.excludeEmpIdsobj.push(t), n.excludeEmpIds.push(t.id), n.disablePost = !1)
                            }
                    else t.checked ? (t.checked = !1, n.excludeEmpIdsobj.push(t), n.excludeEmpIds.push(t.id), n.myTeam.filter(function(e) {
                        e.id == t.id && (e.checked = !1)
                    }), I.a.each(n.employees, function(t) {
                        t.checked ? n.disablePost = !1 : t.checked || n.employees.every(n.setSelectAll) && (n.selectAll = !1, n.userGroupIds.length <= 0 && !n.selectAllGroups && (n.disablePost = !0))
                    })) : t.checked || (t.checked = !0, n.myTeam.filter(function(e) {
                        e.id == t.id && (e.checked = !0)
                    }), n.excludeEmpIdsobj = I()(n.excludeEmpIdsobj).filter(function(e) {
                        return e.id != t.id
                    }), n.excludeEmpIds = I()(n.excludeEmpIds).filter(function(e) {
                        return e != t.id
                    }));
                    else -1 != n.selectedEmployees.indexOf(t.id) ? (n.selectedEmployees = I.a.without(n.selectedEmployees, t.id), n.disablePost = !(n.selectedEmployees.length > 0 || n.userGroupIds.length > 0)) : (n.selectedEmployeesObj.push(t), n.selectedEmployees.push(t.id), n.disablePost = !1)
                }, t.prototype.setSelectAll = function(t, e, n) {
                    return 0 === e || t.checked === n[e - 1].checked
                }, t.prototype.presentLoading = function() {
                    (M = this.ReusableUtils.presentLoadingCustom()).present()
                }, t.prototype.dismissLoading = function() {
                    M && (M.dismissAll(), M.onDidDismiss(function() {
                        M = null
                    }))
                }, t.prototype.post = function(t) {
                    var e = this;
                    e.selectedEmployees.length > 0 || e.selectAll || e.userGroupIds.length > 0 || e.selectAllGroups || e.selectAllMyTeam ? (e.announcementData.employeeIds = e.selectedEmployees, e.announcementData.userGroupIds = e.userGroupIds, e.selectAll && (e.announcementData.selectAll = e.selectAll, e.announcementData.employeeIds = [], e.announcementData.excludeEmpIds = e.excludeEmpIds), e.selectAllGroups && (e.announcementData.selectAllGroups = e.selectAllGroups, e.announcementData.userGroupIds = []), e.selectAllMyTeam && (e.announcementData.selectAllFromTeam = e.selectAllMyTeam, e.announcementData.excludeEmpIds = e.excludeEmpIds), e.presentLoading(), I.a.each(e.announcementData.attachmentList, function(t) {
                        t.docName = t.docName.toString()
                    }), "schedule" == t ? e.navCtrl.push("AnnouncementSchedule", {
                        announcementData: e.announcementData
                    }) : e.announcementProvider.postAnnouncement(e.announcementData).subscribe(function() {
                        e.dismissLoading(), e.navCtrl.setRoot("TabsPage").then(function() {})
                    }, function() {
                        return e.ReusableUtils.showToast("pleaseTryAfterSometime"), e.dismissLoading(), !1
                    })) : e.ReusableUtils.showToast("pleaseSelectEmployees")
                }, t.prototype.doInfiniteInfo = function(t, e) {
                    "group" == e ? this.totalGroupPages > this.groupPageNumber ? this.myGroups(this.searchEmployee, t, !0, this.groupPageNumber) : (t.complete(), this.isInfiniteSearchEnabledGroup = !1) : this.totalPages > this.pageNumber ? this.search(this.searchEmployee, t, !0, this.pageNumber) : (t.complete(), this.isInfiniteSearchEnabled = !1)
                }, t.prototype.selectAllFunction = function(t, e) {
                    var n = this;
                    "group" == e ? t.checked ? (n.selectAllGroups = !0, n.disablePost = !1, I.a.each(n.groups, function(t) {
                        t.checked = !0
                    })) : (n.selectAllGroups = !1, n.userGroupIds = [], !n.selectAll && !n.selectAllMyTeam && n.selectedEmployees.length <= 0 && (n.disablePost = !0)) : "myteam" == e ? t.checked ? (n.selectAllMyTeam = !0, n.disablePost = !1, I.a.each(n.myTeam, function(t) {
                        t.checked = !0
                    }), n.selectAll && I.a.each(n.myTeam, function(t) {
                        var e = I.a.findWhere(n.excludeEmpIdsobj, {
                            id: t.id
                        });
                        I.a.isUndefined(e) || (n.excludeEmpIds = I.a.without(n.excludeEmpIds, t.id), n.excludeEmpIdsobj = I.a.without(n.excludeEmpIdsobj, I.a.findWhere(n.excludeEmpIdsobj, {
                            id: t.id
                        })))
                    })) : (I.a.each(n.myTeam, n.selectAll ? function(t) {
                        var e = I.a.findWhere(n.excludeEmpIdsobj, {
                            id: t.id
                        });
                        I.a.isUndefined(e) && (n.excludeEmpIds.push(t.id), n.excludeEmpIdsobj.push(t))
                    } : function(t) {
                        var e = I.a.findWhere(n.excludeEmpIdsobj, {
                            id: t.id
                        });
                        I.a.isUndefined(e) || (n.excludeEmpIds = I.a.without(n.excludeEmpIds, t.id), n.excludeEmpIdsobj = I.a.without(n.excludeEmpIdsobj, I.a.findWhere(n.excludeEmpIdsobj, {
                            id: t.id
                        })))
                    }), n.selectAllMyTeam = !1, n.userGroupIds = [], !n.selectAll && !n.selectAllMyTeam && n.selectedEmployees.length <= 0 && n.userGroupIds.length <= 0 && !n.selectAllGroups && (n.disablePost = !0)) : (n.excludeEmpIdsobj.length = 0, n.excludeEmpIds.length = 0, t.checked ? (n.selectAll = !0, n.selectAllMyTeam = !0, n.disablePost = !1, I.a.each(n.employees, function(t) {
                        t.checked = !0
                    }), n.myTeam.filter(function(t) {
                        t.checked = !0
                    })) : (n.selectAll = !1, n.selectAllMyTeam = !1, n.selectedEmployees = [], n.selectedEmployeesObj = [], !n.selectAllGroups && !n.selectAllMyTeam && n.userGroupIds.length <= 0 && n.selectedEmployees.length <= 0 && (n.disablePost = !0)))
                }, t.prototype.myGroups = function(t, e, n, o) {
                    var r = this;
                    r.commonProvider.getAllGroups({
                        userGrpName: t,
                        page: o,
                        pageSize: 10
                    }).subscribe(function(l) {
                        var i = JSON.parse(l);
                        r.groupCheck = !0, i && r.searchEmployee.trim() == t.trim() && (r.groupPageNumber = o + 1, n ? I.a.each(i.content, function(t) {
                            r.groups.push(t)
                        }) : (r.groups = i.content, r.groups.length && (r.myGroupCheck = !0)), r.totalGroupPages = i.totalPages, r.totalGroupElements = i.totalElements, 1 == r.totalGroupPages && (r.isInfiniteSearchEnabledGroup = !1), e && e.complete()), I.a.each(r.groups, r.selectAllGroups ? function(t) {
                            t.hasOwnProperty("checked") || (t.checked = !0)
                        } : function(t) {
                            t.hasOwnProperty("checked") || (t.checked = !1)
                        })
                    })
                }, t.prototype.myTeamCall = function(t) {
                    var e = this;
                    e.commonProvider.getMySubordinates("0", e.searchEmployee).subscribe(function(t) {
                        M && e.dismissLoading(), e.myTeam = [], e.myTeamCheck = !0, t && I.a.each(t.content, function(t) {
                            t.id = t.id;
                            var n = I.a.findWhere(e.selectedEmployeesObj, {
                                    id: t.id
                                }),
                                o = I.a.findWhere(e.myTeam, {
                                    id: t.id
                                }),
                                r = I.a.findWhere(e.excludeEmpIdsobj, {
                                    id: t.id
                                });
                            I.a.isUndefined(o) ? e.selectAllMyTeam ? e.selectAllMyTeam && (e.selectAll ? e.selectAll && (I.a.isUndefined(r) ? (t.checked = !0, e.myTeam.push(t)) : (t.checked = !1, e.myTeam.push(t))) : I.a.isUndefined(r) ? (t.checked = !0, e.myTeam.push(t)) : (t.checked = !1, e.myTeam.push(t))) : e.selectAll ? e.selectAll && (I.a.isUndefined(r) ? (t.checked = !0, e.myTeam.push(t)) : (t.checked = !1, e.myTeam.push(t))) : I.a.isUndefined(n) ? (e.teamCheck = !0, t.checked = !1, e.myTeam.push(t)) : (t.checked = !0, e.myTeam.push(t)) : I.a.isUndefined(o) || I.a.isUndefined(n) ? !I.a.isUndefined(o) && I.a.isUndefined(n) && I.a.each(e.myTeam, function(n) {
                                t.id == n.id && (n.checked = !!e.selectAll && !!I.a.isUndefined(r))
                            }) : I.a.each(e.myTeam, function(e) {
                                t.id == e.id && (e.checked = !0)
                            })
                        })
                    }, function(t) {
                        e.ReusableUtils.showHttpError(t)
                    })
                }, t.prototype.changeSegment = function(t) {
                    this.searchEmployee = "", this.pageNumber = 0, this.groupPageNumber = 1, "seeall" == t ? (this.segmentsCheck = "seeall", this.myTeamCall(), this.search(this.searchEmployee, null, !1, this.pageNumber)) : "myteam" == t ? (this.segmentsCheck = "myteam", this.myTeamCall()) : "group" == t && (this.segmentsCheck = "group", this.myTeamCall(), this.myGroups(this.searchEmployee, null, !1, this.groupPageNumber))
                }, t
            }(),
            D = n(9),
            B = n(219),
            U = n(220),
            F = n(221),
            H = (n(1337), n(138)),
            G = n(176),
            K = n(218),
            z = G.b,
            V = function() {
                return function() {}
            }(),
            W = n(773),
            Z = n(774),
            $ = n(775),
            Y = n(776),
            X = n(777),
            Q = n(778),
            J = n(779),
            tt = n(780),
            et = n(781),
            nt = n(1360),
            ot = n(291),
            rt = n(30),
            lt = n(426),
            it = n(3),
            ut = n(10),
            at = n(56),
            st = n(25),
            ct = n(23),
            ft = n(48),
            dt = n(53),
            ht = n(82),
            pt = n(224),
            yt = n(145),
            vt = n(177),
            bt = n(85),
            mt = n(81),
            gt = n(141),
            _t = n(165),
            Ot = n(36),
            kt = n(14),
            xt = n(412),
            Et = n(183),
            wt = n(63),
            At = n(5),
            jt = n(19),
            Nt = n(37),
            Tt = n(27),
            Pt = n(102),
            St = n(7),
            qt = n(140),
            Ct = n(75),
            Lt = n(18),
            It = n(16),
            Mt = n(139),
            Rt = n(103),
            Dt = n(80),
            Bt = n(67),
            Ut = n(47),
            Ft = n(60),
            Ht = n(161),
            Gt = n(54),
            Kt = n(180),
            zt = n(127),
            Vt = n(95),
            Wt = n(159),
            Zt = n(105),
            $t = n(12),
            Yt = n(20),
            Xt = n(17),
            Qt = n(84),
            Jt = N._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            te = N._1("ng-component", R, function(t) {
                return N._29(0, [(t()(), N._5(0, 0, null, null, 2, "ng-component", [], null, null, null, j, Jt)), N._23(512, null, T.a, T.a, [$t.a, S.a, Yt.a]), N._4(2, 49152, null, 0, R, [St.a, Xt.a, It.a, T.a, S.a, q.a, Qt.a, P.a, C.a], null, null)], null, null)
            }, {}, {}, []),
            ee = n(31),
            ne = n(402),
            oe = n(222),
            re = n(1328),
            le = n(158);
        n.d(e, "AnnouncementSelectionModuleNgFactory", function() {
            return ie
        });
        var ie = N._2(V, [], function(t) {
            return N._13([N._14(512, N.i, N.Y, [
                [8, [W.a, Z.a, $.a, Y.a, X.a, Q.a, J.a, tt.a, et.a, te]],
                [3, N.i], N.w
            ]), N._14(4608, ut.l, ut.k, [N.v, [2, ut.u]]), N._14(4608, rt.u, rt.u, []), N._14(4608, rt.d, rt.d, []), N._14(5120, D.f, z, [H.c]), N._14(4608, D.c, D.e, []), N._14(4608, D.h, D.d, []), N._14(4608, D.b, D.a, []), N._14(4608, D.j, D.j, [D.m, D.f, D.c, D.h, D.b, D.k, D.l]), N._14(4608, ee.a, ee.a, []), N._14(512, ut.b, ut.b, []), N._14(512, F.a, F.a, []), N._14(512, rt.s, rt.s, []), N._14(512, rt.g, rt.g, []), N._14(512, rt.q, rt.q, []), N._14(512, ne.a, ne.a, []), N._14(512, U.a, U.a, []), N._14(512, oe.a, oe.a, []), N._14(512, D.g, D.g, []), N._14(512, K.a, K.a, []), N._14(512, B.a, B.a, []), N._14(512, re.a, re.a, []), N._14(512, ne.b, ne.b, []), N._14(512, V, V, []), N._14(256, D.l, void 0, []), N._14(256, D.k, void 0, []), N._14(256, le.a, R, [])])
        })
    },
    1328: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        n(1329);
        var o = function() {
            return function() {}
        }()
    },
    1329: function(t, e, n) {
        "use strict";
        n(69);
        var o = n(1338);
        n.n(o)
    },
    1337: function(t, e, n) {
        "use strict";
        n(1328), n(1329)
    },
    1338: function(t, e, n) {
        (function(e) {
            ! function(e, n) {
                t.exports = n()
            }("undefined" != typeof self && self, function() {
                return function(t) {
                    function e(o) {
                        if (n[o]) return n[o].exports;
                        var r = n[o] = {
                            i: o,
                            l: !1,
                            exports: {}
                        };
                        return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
                    }
                    var n = {};
                    return e.m = t, e.c = n, e.d = function(t, n, o) {
                        e.o(t, n) || Object.defineProperty(t, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: o
                        })
                    }, e.n = function(t) {
                        var n = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return e.d(n, "a", n), n
                    }, e.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, e.p = "", e(e.s = 109)
                }([function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n(17),
                        r = n(18),
                        l = n(19),
                        i = n(45),
                        u = n(46),
                        a = n(47),
                        s = n(48),
                        c = n(49),
                        f = n(12),
                        d = n(32),
                        h = n(33),
                        p = n(31),
                        y = n(1);
                    e.default = {
                        Scope: y.Scope,
                        create: y.create,
                        find: y.find,
                        query: y.query,
                        register: y.register,
                        Container: o.default,
                        Format: r.default,
                        Leaf: l.default,
                        Embed: s.default,
                        Scroll: i.default,
                        Block: a.default,
                        Inline: u.default,
                        Text: c.default,
                        Attributor: {
                            Attribute: f.default,
                            Class: d.default,
                            Style: h.default,
                            Store: p.default
                        }
                    }
                }, function(t, e, n) {
                    "use strict";

                    function o(t, n) {
                        return void 0 === n && (n = !1), null == t ? null : null != t[e.DATA_KEY] ? t[e.DATA_KEY].blot : n ? o(t.parentNode, n) : null
                    }

                    function r(t, e) {
                        void 0 === e && (e = d.ANY);
                        var n;
                        if ("string" == typeof t) n = f[t] || a[t];
                        else if (t instanceof Text || t.nodeType === Node.TEXT_NODE) n = f.text;
                        else if ("number" == typeof t) t & d.LEVEL & d.BLOCK ? n = f.block : t & d.LEVEL & d.INLINE && (n = f.inline);
                        else if (t instanceof HTMLElement) {
                            var o = (t.getAttribute("class") || "").split(/\s+/);
                            for (var r in o)
                                if (n = s[o[r]]) break;
                            n = n || c[t.tagName]
                        }
                        return null == n ? null : e & d.LEVEL & n.scope && e & d.TYPE & n.scope ? n : null
                    }

                    function l() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        if (t.length > 1) return t.map(function(t) {
                            return l(t)
                        });
                        var n = t[0];
                        if ("string" != typeof n.blotName && "string" != typeof n.attrName) throw new u("Invalid definition");
                        if ("abstract" === n.blotName) throw new u("Cannot register abstract class");
                        if (f[n.blotName || n.attrName] = n, "string" == typeof n.keyName) a[n.keyName] = n;
                        else if (null != n.className && (s[n.className] = n), null != n.tagName) {
                            n.tagName = Array.isArray(n.tagName) ? n.tagName.map(function(t) {
                                return t.toUpperCase()
                            }) : n.tagName.toUpperCase();
                            (Array.isArray(n.tagName) ? n.tagName : [n.tagName]).forEach(function(t) {
                                null != c[t] && null != n.className || (c[t] = n)
                            })
                        }
                        return n
                    }
                    var i = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var u = function(t) {
                        function e(e) {
                            var n = this;
                            return e = "[Parchment] " + e, n = t.call(this, e) || this, n.message = e, n.name = n.constructor.name, n
                        }
                        return i(e, t), e
                    }(Error);
                    e.ParchmentError = u;
                    var a = {},
                        s = {},
                        c = {},
                        f = {};
                    e.DATA_KEY = "__blot";
                    var d;
                    ! function(t) {
                        t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY"
                    }(d = e.Scope || (e.Scope = {})), e.create = function(t, e) {
                        var n = r(t);
                        if (null == n) throw new u("Unable to create " + t + " blot");
                        var o = n;
                        return new o(t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : o.create(e), e)
                    }, e.find = o, e.query = r, e.register = l
                }, function(t, e, n) {
                    var o = n(51),
                        r = n(11),
                        l = n(3),
                        i = n(20),
                        u = String.fromCharCode(0),
                        a = function(t) {
                            this.ops = Array.isArray(t) ? t : null != t && Array.isArray(t.ops) ? t.ops : []
                        };
                    a.prototype.insert = function(t, e) {
                        var n = {};
                        return 0 === t.length ? this : (n.insert = t, null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n))
                    }, a.prototype.delete = function(t) {
                        return t <= 0 ? this : this.push({
                            delete: t
                        })
                    }, a.prototype.retain = function(t, e) {
                        if (t <= 0) return this;
                        var n = {
                            retain: t
                        };
                        return null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n)
                    }, a.prototype.push = function(t) {
                        var e = this.ops.length,
                            n = this.ops[e - 1];
                        if (t = l(!0, {}, t), "object" == typeof n) {
                            if ("number" == typeof t.delete && "number" == typeof n.delete) return this.ops[e - 1] = {
                                delete: n.delete + t.delete
                            }, this;
                            if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != typeof(n = this.ops[e - 1]))) return this.ops.unshift(t), this;
                            if (r(t.attributes, n.attributes)) {
                                if ("string" == typeof t.insert && "string" == typeof n.insert) return this.ops[e - 1] = {
                                    insert: n.insert + t.insert
                                }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
                                if ("number" == typeof t.retain && "number" == typeof n.retain) return this.ops[e - 1] = {
                                    retain: n.retain + t.retain
                                }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this
                            }
                        }
                        return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
                    }, a.prototype.chop = function() {
                        var t = this.ops[this.ops.length - 1];
                        return t && t.retain && !t.attributes && this.ops.pop(), this
                    }, a.prototype.filter = function(t) {
                        return this.ops.filter(t)
                    }, a.prototype.forEach = function(t) {
                        this.ops.forEach(t)
                    }, a.prototype.map = function(t) {
                        return this.ops.map(t)
                    }, a.prototype.partition = function(t) {
                        var e = [],
                            n = [];
                        return this.forEach(function(o) {
                            (t(o) ? e : n).push(o)
                        }), [e, n]
                    }, a.prototype.reduce = function(t, e) {
                        return this.ops.reduce(t, e)
                    }, a.prototype.changeLength = function() {
                        return this.reduce(function(t, e) {
                            return e.insert ? t + i.length(e) : e.delete ? t - e.delete : t
                        }, 0)
                    }, a.prototype.length = function() {
                        return this.reduce(function(t, e) {
                            return t + i.length(e)
                        }, 0)
                    }, a.prototype.slice = function(t, e) {
                        t = t || 0, "number" != typeof e && (e = 1 / 0);
                        for (var n = [], o = i.iterator(this.ops), r = 0; r < e && o.hasNext();) {
                            var l;
                            r < t ? l = o.next(t - r) : (l = o.next(e - r), n.push(l)), r += i.length(l)
                        }
                        return new a(n)
                    }, a.prototype.compose = function(t) {
                        var e = i.iterator(this.ops),
                            n = i.iterator(t.ops),
                            o = [],
                            l = n.peek();
                        if (null != l && "number" == typeof l.retain && null == l.attributes) {
                            for (var u = l.retain;
                                "insert" === e.peekType() && e.peekLength() <= u;) u -= e.peekLength(), o.push(e.next());
                            l.retain - u > 0 && n.next(l.retain - u)
                        }
                        for (var s = new a(o); e.hasNext() || n.hasNext();)
                            if ("insert" === n.peekType()) s.push(n.next());
                            else if ("delete" === e.peekType()) s.push(e.next());
                        else {
                            var c = Math.min(e.peekLength(), n.peekLength()),
                                f = e.next(c),
                                d = n.next(c);
                            if ("number" == typeof d.retain) {
                                var h = {};
                                "number" == typeof f.retain ? h.retain = c : h.insert = f.insert;
                                var p = i.attributes.compose(f.attributes, d.attributes, "number" == typeof f.retain);
                                if (p && (h.attributes = p), s.push(h), !n.hasNext() && r(s.ops[s.ops.length - 1], h)) {
                                    var y = new a(e.rest());
                                    return s.concat(y).chop()
                                }
                            } else "number" == typeof d.delete && "number" == typeof f.retain && s.push(d)
                        }
                        return s.chop()
                    }, a.prototype.concat = function(t) {
                        var e = new a(this.ops.slice());
                        return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e
                    }, a.prototype.diff = function(t, e) {
                        if (this.ops === t.ops) return new a;
                        var n = [this, t].map(function(e) {
                                return e.map(function(n) {
                                    if (null != n.insert) return "string" == typeof n.insert ? n.insert : u;
                                    var o = e === t ? "on" : "with";
                                    throw new Error("diff() called " + o + " non-document")
                                }).join("")
                            }),
                            l = new a,
                            s = o(n[0], n[1], e),
                            c = i.iterator(this.ops),
                            f = i.iterator(t.ops);
                        return s.forEach(function(t) {
                            for (var e = t[1].length; e > 0;) {
                                var n = 0;
                                switch (t[0]) {
                                    case o.INSERT:
                                        n = Math.min(f.peekLength(), e), l.push(f.next(n));
                                        break;
                                    case o.DELETE:
                                        n = Math.min(e, c.peekLength()), c.next(n), l.delete(n);
                                        break;
                                    case o.EQUAL:
                                        n = Math.min(c.peekLength(), f.peekLength(), e);
                                        var u = c.next(n),
                                            a = f.next(n);
                                        r(u.insert, a.insert) ? l.retain(n, i.attributes.diff(u.attributes, a.attributes)) : l.push(a).delete(n)
                                }
                                e -= n
                            }
                        }), l.chop()
                    }, a.prototype.eachLine = function(t, e) {
                        e = e || "\n";
                        for (var n = i.iterator(this.ops), o = new a, r = 0; n.hasNext();) {
                            if ("insert" !== n.peekType()) return;
                            var l = n.peek(),
                                u = i.length(l) - n.peekLength(),
                                s = "string" == typeof l.insert ? l.insert.indexOf(e, u) - u : -1;
                            if (s < 0) o.push(n.next());
                            else if (s > 0) o.push(n.next(s));
                            else {
                                if (!1 === t(o, n.next(1).attributes || {}, r)) return;
                                r += 1, o = new a
                            }
                        }
                        o.length() > 0 && t(o, {}, r)
                    }, a.prototype.transform = function(t, e) {
                        if (e = !!e, "number" == typeof t) return this.transformPosition(t, e);
                        for (var n = i.iterator(this.ops), o = i.iterator(t.ops), r = new a; n.hasNext() || o.hasNext();)
                            if ("insert" !== n.peekType() || !e && "insert" === o.peekType())
                                if ("insert" === o.peekType()) r.push(o.next());
                                else {
                                    var l = Math.min(n.peekLength(), o.peekLength()),
                                        u = n.next(l),
                                        s = o.next(l);
                                    if (u.delete) continue;
                                    s.delete ? r.push(s) : r.retain(l, i.attributes.transform(u.attributes, s.attributes, e))
                                }
                        else r.retain(i.length(n.next()));
                        return r.chop()
                    }, a.prototype.transformPosition = function(t, e) {
                        e = !!e;
                        for (var n = i.iterator(this.ops), o = 0; n.hasNext() && o <= t;) {
                            var r = n.peekLength(),
                                l = n.peekType();
                            n.next(), "delete" !== l ? ("insert" === l && (o < t || !e) && (t += r), o += r) : t -= Math.min(r, t - o)
                        }
                        return t
                    }, t.exports = a
                }, function(t, e) {
                    "use strict";
                    var n = Object.prototype.hasOwnProperty,
                        o = Object.prototype.toString,
                        r = Object.defineProperty,
                        l = Object.getOwnPropertyDescriptor,
                        i = function(t) {
                            return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === o.call(t)
                        },
                        u = function(t) {
                            if (!t || "[object Object]" !== o.call(t)) return !1;
                            var e = n.call(t, "constructor"),
                                r = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
                            if (t.constructor && !e && !r) return !1;
                            var l;
                            for (l in t);
                            return void 0 === l || n.call(t, l)
                        },
                        a = function(t, e) {
                            r && "__proto__" === e.name ? r(t, e.name, {
                                enumerable: !0,
                                configurable: !0,
                                value: e.newValue,
                                writable: !0
                            }) : t[e.name] = e.newValue
                        },
                        s = function(t, e) {
                            if ("__proto__" === e) {
                                if (!n.call(t, e)) return;
                                if (l) return l(t, e).value
                            }
                            return t[e]
                        };
                    t.exports = function t() {
                        var e, n, o, r, l, c, f = arguments[0],
                            d = 1,
                            h = arguments.length,
                            p = !1;
                        for ("boolean" == typeof f && (p = f, f = arguments[1] || {}, d = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); d < h; ++d)
                            if (null != (e = arguments[d]))
                                for (n in e) o = s(f, n), f !== (r = s(e, n)) && (p && r && (u(r) || (l = i(r))) ? (l ? (l = !1, c = o && i(o) ? o : []) : c = o && u(o) ? o : {}, a(f, {
                                    name: n,
                                    newValue: t(p, c, r)
                                })) : void 0 !== r && a(f, {
                                    name: n,
                                    newValue: r
                                }));
                        return f
                    }
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function u(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return null == t ? e : ("function" == typeof t.formats && (e = (0, c.default)(e, t.formats())), null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : u(t.parent, e))
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = e.BlockEmbed = e.bubbleFormats = void 0;
                    var a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        s = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        c = o(n(3)),
                        f = o(n(2)),
                        d = o(n(0)),
                        h = o(n(16)),
                        p = o(n(6)),
                        y = o(n(7)),
                        v = function(t) {
                            function e() {
                                return r(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return i(e, d.default.Embed), a(e, [{
                                key: "attach",
                                value: function() {
                                    s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this), this.attributes = new d.default.Attributor.Store(this.domNode)
                                }
                            }, {
                                key: "delta",
                                value: function() {
                                    return (new f.default).insert(this.value(), (0, c.default)(this.formats(), this.attributes.values()))
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    var n = d.default.query(t, d.default.Scope.BLOCK_ATTRIBUTE);
                                    null != n && this.attributes.attribute(n, e)
                                }
                            }, {
                                key: "formatAt",
                                value: function(t, e, n, o) {
                                    this.format(n, o)
                                }
                            }, {
                                key: "insertAt",
                                value: function(t, n, o) {
                                    if ("string" == typeof n && n.endsWith("\n")) {
                                        var r = d.default.create(b.blotName);
                                        this.parent.insertBefore(r, 0 === t ? this : this.next), r.insertAt(0, n.slice(0, -1))
                                    } else s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, o)
                                }
                            }]), e
                        }();
                    v.scope = d.default.Scope.BLOCK_BLOT;
                    var b = function(t) {
                        function e(t) {
                            r(this, e);
                            var n = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                            return n.cache = {}, n
                        }
                        return i(e, d.default.Block), a(e, [{
                            key: "delta",
                            value: function() {
                                return null == this.cache.delta && (this.cache.delta = this.descendants(d.default.Leaf).reduce(function(t, e) {
                                    return 0 === e.length() ? t : t.insert(e.value(), u(e))
                                }, new f.default).insert("\n", u(this))), this.cache.delta
                            }
                        }, {
                            key: "deleteAt",
                            value: function(t, n) {
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), this.cache = {}
                            }
                        }, {
                            key: "formatAt",
                            value: function(t, n, o, r) {
                                n <= 0 || (d.default.query(o, d.default.Scope.BLOCK) ? t + n === this.length() && this.format(o, r) : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, Math.min(n, this.length() - t - 1), o, r), this.cache = {})
                            }
                        }, {
                            key: "insertAt",
                            value: function(t, n, o) {
                                if (null != o) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, o);
                                if (0 !== n.length) {
                                    var r = n.split("\n"),
                                        l = r.shift();
                                    l.length > 0 && (t < this.length() - 1 || null == this.children.tail ? s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), l) : this.children.tail.insertAt(this.children.tail.length(), l), this.cache = {});
                                    var i = this;
                                    r.reduce(function(t, e) {
                                        return (i = i.split(t, !0)).insertAt(0, e), e.length
                                    }, t + l.length)
                                }
                            }
                        }, {
                            key: "insertBefore",
                            value: function(t, n) {
                                var o = this.children.head;
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n), o instanceof h.default && o.remove(), this.cache = {}
                            }
                        }, {
                            key: "length",
                            value: function() {
                                return null == this.cache.length && (this.cache.length = s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "length", this).call(this) + 1), this.cache.length
                            }
                        }, {
                            key: "moveChildren",
                            value: function(t, n) {
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t, n), this.cache = {}
                            }
                        }, {
                            key: "optimize",
                            value: function(t) {
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.cache = {}
                            }
                        }, {
                            key: "path",
                            value: function(t) {
                                return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !0)
                            }
                        }, {
                            key: "removeChild",
                            value: function(t) {
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t), this.cache = {}
                            }
                        }, {
                            key: "split",
                            value: function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (n && (0 === t || t >= this.length() - 1)) {
                                    var o = this.clone();
                                    return 0 === t ? (this.parent.insertBefore(o, this), this) : (this.parent.insertBefore(o, this.next), o)
                                }
                                var r = s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this, t, n);
                                return this.cache = {}, r
                            }
                        }]), e
                    }();
                    b.blotName = "block", b.tagName = "P", b.defaultChild = "break", b.allowedChildren = [p.default, d.default.Embed, y.default], e.bubbleFormats = u, e.BlockEmbed = v, e.default = b
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function l(t, e) {
                        if ((e = (0, g.default)(!0, {
                                container: t,
                                modules: {
                                    clipboard: !0,
                                    keyboard: !0,
                                    history: !0
                                }
                            }, e)).theme && e.theme !== x.DEFAULTS.theme) {
                            if (e.theme = x.import("themes/" + e.theme), null == e.theme) throw new Error("Invalid theme " + e.theme + ". Did you register it?")
                        } else e.theme = O.default;
                        var n = (0, g.default)(!0, {}, e.theme.DEFAULTS);
                        [n, e].forEach(function(t) {
                            t.modules = t.modules || {}, Object.keys(t.modules).forEach(function(e) {
                                !0 === t.modules[e] && (t.modules[e] = {})
                            })
                        });
                        var o = Object.keys(n.modules).concat(Object.keys(e.modules)).reduce(function(t, e) {
                            var n = x.import("modules/" + e);
                            return null == n ? k.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] = n.DEFAULTS || {}, t
                        }, {});
                        return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
                            container: e.modules.toolbar
                        }), e = (0, g.default)(!0, {}, x.DEFAULTS, {
                            modules: o
                        }, n, e), ["bounds", "container", "scrollingContainer"].forEach(function(t) {
                            "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), e.modules = Object.keys(e.modules).reduce(function(t, n) {
                            return e.modules[n] && (t[n] = e.modules[n]), t
                        }, {}), e
                    }

                    function i(t, e, n, o) {
                        if (this.options.strict && !this.isEnabled() && e === p.default.sources.USER) return new d.default;
                        var r = null == n ? null : this.getSelection(),
                            l = this.editor.delta,
                            i = t();
                        if (null != r && (!0 === n && (n = r.index), null == o ? r = a(r, i, e) : 0 !== o && (r = a(r, n, o, e)), this.setSelection(r, p.default.sources.SILENT)), i.length() > 0) {
                            var u, s = [p.default.events.TEXT_CHANGE, i, l, e];
                            if ((u = this.emitter).emit.apply(u, [p.default.events.EDITOR_CHANGE].concat(s)), e !== p.default.sources.SILENT) {
                                var c;
                                (c = this.emitter).emit.apply(c, s)
                            }
                        }
                        return i
                    }

                    function u(t, e, n, o, r) {
                        var l = {};
                        return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (r = o, o = n, n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (r = o, o = n, n = e, e = 0), "object" === (void 0 === n ? "undefined" : s(n)) ? (l = n, r = o) : "string" == typeof n && (null != o ? l[n] = o : r = n), r = r || p.default.sources.API, [t, e, l, r]
                    }

                    function a(t, e, n, o) {
                        if (null == t) return null;
                        var r = void 0,
                            l = void 0;
                        if (e instanceof d.default) {
                            var i = [t.index, t.index + t.length].map(function(t) {
                                    return e.transformPosition(t, o !== p.default.sources.USER)
                                }),
                                u = c(i, 2);
                            r = u[0], l = u[1]
                        } else {
                            var a = [t.index, t.index + t.length].map(function(t) {
                                    return t < e || t === e && o === p.default.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n)
                                }),
                                s = c(a, 2);
                            r = s[0], l = s[1]
                        }
                        return new b.Range(r, l - r)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = e.overload = e.expandConfig = void 0;
                    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        c = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        f = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }();
                    n(50);
                    var d = o(n(2)),
                        h = o(n(14)),
                        p = o(n(8)),
                        y = o(n(9)),
                        v = o(n(0)),
                        b = n(15),
                        m = o(b),
                        g = o(n(3)),
                        _ = o(n(10)),
                        O = o(n(34)),
                        k = (0, _.default)("quill"),
                        x = function() {
                            function t(e) {
                                var n = this,
                                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t), this.options = l(e, o), this.container = this.options.container, null == this.container) return k.error("Invalid Quill container", e);
                                this.options.debug && t.debug(this.options.debug);
                                var r = this.container.innerHTML.trim();
                                this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new p.default, this.scroll = v.default.create(this.root, {
                                    emitter: this.emitter,
                                    whitelist: this.options.formats
                                }), this.editor = new h.default(this.scroll), this.selection = new m.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(p.default.events.EDITOR_CHANGE, function(t) {
                                    t === p.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank())
                                }), this.emitter.on(p.default.events.SCROLL_UPDATE, function(t, e) {
                                    var o = n.selection.lastRange,
                                        r = o && 0 === o.length ? o.index : void 0;
                                    i.call(n, function() {
                                        return n.editor.update(null, e, r)
                                    }, t)
                                });
                                var u = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + r + "<p><br></p></div>");
                                this.setContents(u), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable()
                            }
                            return f(t, null, [{
                                key: "debug",
                                value: function(t) {
                                    !0 === t && (t = "log"), _.default.level(t)
                                }
                            }, {
                                key: "find",
                                value: function(t) {
                                    return t.__quill || v.default.find(t)
                                }
                            }, {
                                key: "import",
                                value: function(t) {
                                    return null == this.imports[t] && k.error("Cannot import " + t + ". Are you sure it was registered?"), this.imports[t]
                                }
                            }, {
                                key: "register",
                                value: function(t, e) {
                                    var n = this,
                                        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    if ("string" != typeof t) {
                                        var r = t.attrName || t.blotName;
                                        "string" == typeof r ? this.register("formats/" + r, t, e) : Object.keys(t).forEach(function(o) {
                                            n.register(o, t[o], e)
                                        })
                                    } else null == this.imports[t] || o || k.warn("Overwriting " + t + " with", e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName ? v.default.register(e) : t.startsWith("modules") && "function" == typeof e.register && e.register()
                                }
                            }]), f(t, [{
                                key: "addContainer",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    if ("string" == typeof t) {
                                        var n = t;
                                        (t = document.createElement("div")).classList.add(n)
                                    }
                                    return this.container.insertBefore(t, e), t
                                }
                            }, {
                                key: "blur",
                                value: function() {
                                    this.selection.setRange(null)
                                }
                            }, {
                                key: "deleteText",
                                value: function(t, e, n) {
                                    var o = this,
                                        r = u(t, e, n),
                                        l = c(r, 4);
                                    return t = l[0], e = l[1], n = l[3], i.call(this, function() {
                                        return o.editor.deleteText(t, e)
                                    }, n, t, -1 * e)
                                }
                            }, {
                                key: "disable",
                                value: function() {
                                    this.enable(!1)
                                }
                            }, {
                                key: "enable",
                                value: function() {
                                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t)
                                }
                            }, {
                                key: "focus",
                                value: function() {
                                    var t = this.scrollingContainer.scrollTop;
                                    this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView()
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    var n = this;
                                    return i.call(this, function() {
                                        var o = n.getSelection(!0),
                                            l = new d.default;
                                        if (null == o) return l;
                                        if (v.default.query(t, v.default.Scope.BLOCK)) l = n.editor.formatLine(o.index, o.length, r({}, t, e));
                                        else {
                                            if (0 === o.length) return n.selection.format(t, e), l;
                                            l = n.editor.formatText(o.index, o.length, r({}, t, e))
                                        }
                                        return n.setSelection(o, p.default.sources.SILENT), l
                                    }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.default.sources.API)
                                }
                            }, {
                                key: "formatLine",
                                value: function(t, e, n, o, r) {
                                    var l = this,
                                        a = void 0,
                                        s = u(t, e, n, o, r),
                                        f = c(s, 4);
                                    return t = f[0], e = f[1], a = f[2], r = f[3], i.call(this, function() {
                                        return l.editor.formatLine(t, e, a)
                                    }, r, t, 0)
                                }
                            }, {
                                key: "formatText",
                                value: function(t, e, n, o, r) {
                                    var l = this,
                                        a = void 0,
                                        s = u(t, e, n, o, r),
                                        f = c(s, 4);
                                    return t = f[0], e = f[1], a = f[2], r = f[3], i.call(this, function() {
                                        return l.editor.formatText(t, e, a)
                                    }, r, t, 0)
                                }
                            }, {
                                key: "getBounds",
                                value: function(t) {
                                    var e = void 0;
                                    e = "number" == typeof t ? this.selection.getBounds(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) : this.selection.getBounds(t.index, t.length);
                                    var n = this.container.getBoundingClientRect();
                                    return {
                                        bottom: e.bottom - n.top,
                                        height: e.height,
                                        left: e.left - n.left,
                                        right: e.right - n.left,
                                        top: e.top - n.top,
                                        width: e.width
                                    }
                                }
                            }, {
                                key: "getContents",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                        n = u(t, e),
                                        o = c(n, 2);
                                    return t = o[0], e = o[1], this.editor.getContents(t, e)
                                }
                            }, {
                                key: "getFormat",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0);
                                    return "number" == typeof t ? this.editor.getFormat(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) : this.editor.getFormat(t.index, t.length)
                                }
                            }, {
                                key: "getIndex",
                                value: function(t) {
                                    return t.offset(this.scroll)
                                }
                            }, {
                                key: "getLength",
                                value: function() {
                                    return this.scroll.length()
                                }
                            }, {
                                key: "getLeaf",
                                value: function(t) {
                                    return this.scroll.leaf(t)
                                }
                            }, {
                                key: "getLine",
                                value: function(t) {
                                    return this.scroll.line(t)
                                }
                            }, {
                                key: "getLines",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                                    return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
                                }
                            }, {
                                key: "getModule",
                                value: function(t) {
                                    return this.theme.modules[t]
                                }
                            }, {
                                key: "getSelection",
                                value: function() {
                                    return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0]
                                }
                            }, {
                                key: "getText",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                        n = u(t, e),
                                        o = c(n, 2);
                                    return t = o[0], e = o[1], this.editor.getText(t, e)
                                }
                            }, {
                                key: "hasFocus",
                                value: function() {
                                    return this.selection.hasFocus()
                                }
                            }, {
                                key: "insertEmbed",
                                value: function(e, n, o) {
                                    var r = this;
                                    return i.call(this, function() {
                                        return r.editor.insertEmbed(e, n, o)
                                    }, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API, e)
                                }
                            }, {
                                key: "insertText",
                                value: function(t, e, n, o, r) {
                                    var l = this,
                                        a = void 0,
                                        s = u(t, 0, n, o, r),
                                        f = c(s, 4);
                                    return t = f[0], a = f[2], r = f[3], i.call(this, function() {
                                        return l.editor.insertText(t, e, a)
                                    }, r, t, e.length)
                                }
                            }, {
                                key: "isEnabled",
                                value: function() {
                                    return !this.container.classList.contains("ql-disabled")
                                }
                            }, {
                                key: "off",
                                value: function() {
                                    return this.emitter.off.apply(this.emitter, arguments)
                                }
                            }, {
                                key: "on",
                                value: function() {
                                    return this.emitter.on.apply(this.emitter, arguments)
                                }
                            }, {
                                key: "once",
                                value: function() {
                                    return this.emitter.once.apply(this.emitter, arguments)
                                }
                            }, {
                                key: "pasteHTML",
                                value: function(t, e, n) {
                                    this.clipboard.dangerouslyPasteHTML(t, e, n)
                                }
                            }, {
                                key: "removeFormat",
                                value: function(t, e, n) {
                                    var o = this,
                                        r = u(t, e, n),
                                        l = c(r, 4);
                                    return t = l[0], e = l[1], n = l[3], i.call(this, function() {
                                        return o.editor.removeFormat(t, e)
                                    }, n, t)
                                }
                            }, {
                                key: "scrollIntoView",
                                value: function() {
                                    this.selection.scrollIntoView(this.scrollingContainer)
                                }
                            }, {
                                key: "setContents",
                                value: function(t) {
                                    var e = this;
                                    return i.call(this, function() {
                                        t = new d.default(t);
                                        var n = e.getLength(),
                                            o = e.editor.deleteText(0, n),
                                            r = e.editor.applyDelta(t),
                                            l = r.ops[r.ops.length - 1];
                                        null != l && "string" == typeof l.insert && "\n" === l.insert[l.insert.length - 1] && (e.editor.deleteText(e.getLength() - 1, 1), r.delete(1));
                                        return o.compose(r)
                                    }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.default.sources.API)
                                }
                            }, {
                                key: "setSelection",
                                value: function(e, n, o) {
                                    if (null == e) this.selection.setRange(null, n || t.sources.API);
                                    else {
                                        var r = u(e, n, o),
                                            l = c(r, 4);
                                        o = l[3], this.selection.setRange(new b.Range(e = l[0], n = l[1]), o), o !== p.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
                                    }
                                }
                            }, {
                                key: "setText",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.default.sources.API,
                                        n = (new d.default).insert(t);
                                    return this.setContents(n, e)
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.default.sources.USER,
                                        e = this.scroll.update(t);
                                    return this.selection.update(t), e
                                }
                            }, {
                                key: "updateContents",
                                value: function(t) {
                                    var e = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.default.sources.API;
                                    return i.call(this, function() {
                                        return t = new d.default(t), e.editor.applyDelta(t, n)
                                    }, n, !0)
                                }
                            }]), t
                        }();
                    x.DEFAULTS = {
                        bounds: null,
                        formats: null,
                        modules: {},
                        placeholder: "",
                        readOnly: !1,
                        scrollingContainer: null,
                        strict: !0,
                        theme: "default"
                    }, x.events = p.default.events, x.sources = p.default.sources, x.version = "1.3.7", x.imports = {
                        delta: d.default,
                        parchment: v.default,
                        "core/module": y.default,
                        "core/theme": O.default
                    }, e.expandConfig = l, e.overload = u, e.default = x
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        l = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        i = o(n(7)),
                        u = o(n(0)),
                        a = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, u.default.Inline), r(e, [{
                                key: "formatAt",
                                value: function(t, n, o, r) {
                                    if (e.compare(this.statics.blotName, o) < 0 && u.default.query(o, u.default.Scope.BLOT)) {
                                        var i = this.isolate(t, n);
                                        r && i.wrap(o, r)
                                    } else l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, o, r)
                                }
                            }, {
                                key: "optimize",
                                value: function(t) {
                                    if (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                                        var n = this.parent.isolate(this.offset(), this.length());
                                        this.moveChildren(n), n.wrap(this)
                                    }
                                }
                            }], [{
                                key: "compare",
                                value: function(t, n) {
                                    var o = e.order.indexOf(t),
                                        r = e.order.indexOf(n);
                                    return o >= 0 || r >= 0 ? o - r : t === n ? 0 : t < n ? -1 : 1
                                }
                            }]), e
                        }();
                    a.allowedChildren = [a, u.default.Embed, i.default], a.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], e.default = a
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        r = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, o.default.Text), e
                        }();
                    e.default = r
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        l = o(n(54)),
                        i = (0, o(n(10)).default)("quill:events");
                    ["selectionchange", "mousedown", "mouseup", "click"].forEach(function(t) {
                        document.addEventListener(t, function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(t) {
                                if (t.__quill && t.__quill.emitter) {
                                    var n;
                                    (n = t.__quill.emitter).handleDOM.apply(n, e)
                                }
                            })
                        })
                    });
                    var u = function(t) {
                        function e() {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e);
                            var t = function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" != typeof e && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return t.listeners = {}, t.on("error", i.error), t
                        }
                        return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(e, l.default), r(e, [{
                            key: "emit",
                            value: function() {
                                i.log.apply(i, arguments),
                                    function t(e, n, o) {
                                        null === e && (e = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === r) {
                                            var l = Object.getPrototypeOf(e);
                                            return null === l ? void 0 : t(l, n, o)
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        if (void 0 !== i) return i.call(o)
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).apply(this, arguments)
                            }
                        }, {
                            key: "handleDOM",
                            value: function(t) {
                                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                                (this.listeners[t.type] || []).forEach(function(e) {
                                    var o = e.node,
                                        r = e.handler;
                                    (t.target === o || o.contains(t.target)) && r.apply(void 0, [t].concat(n))
                                })
                            }
                        }, {
                            key: "listenDOM",
                            value: function(t, e, n) {
                                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
                                    node: e,
                                    handler: n
                                })
                            }
                        }]), e
                    }();
                    u.events = {
                        EDITOR_CHANGE: "editor-change",
                        SCROLL_BEFORE_UPDATE: "scroll-before-update",
                        SCROLL_OPTIMIZE: "scroll-optimize",
                        SCROLL_UPDATE: "scroll-update",
                        SELECTION_CHANGE: "selection-change",
                        TEXT_CHANGE: "text-change"
                    }, u.sources = {
                        API: "api",
                        SILENT: "silent",
                        USER: "user"
                    }, e.default = u
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.quill = e, this.options = n
                    };
                    o.DEFAULTS = {}, e.default = o
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        if (l.indexOf(t) <= l.indexOf(i)) {
                            for (var e, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                            (e = console)[t].apply(e, o)
                        }
                    }

                    function r(t) {
                        return l.reduce(function(e, n) {
                            return e[n] = o.bind(console, n, t), e
                        }, {})
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = ["error", "warn", "log", "info"],
                        i = "warn";
                    o.level = r.level = function(t) {
                        i = t
                    }, e.default = r
                }, function(t, e, n) {
                    function o(t) {
                        return null === t || void 0 === t
                    }

                    function r(t) {
                        return !(!t || "object" != typeof t || "number" != typeof t.length) && ("function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0]))
                    }
                    var l = Array.prototype.slice,
                        i = n(52),
                        u = n(53),
                        a = t.exports = function(t, e, n) {
                            return n || (n = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? n.strict ? t === e : t == e : function(t, e, n) {
                                var s, c;
                                if (o(t) || o(e)) return !1;
                                if (t.prototype !== e.prototype) return !1;
                                if (u(t)) return !!u(e) && (t = l.call(t), e = l.call(e), a(t, e, n));
                                if (r(t)) {
                                    if (!r(e)) return !1;
                                    if (t.length !== e.length) return !1;
                                    for (s = 0; s < t.length; s++)
                                        if (t[s] !== e[s]) return !1;
                                    return !0
                                }
                                try {
                                    var f = i(t),
                                        d = i(e)
                                } catch (t) {
                                    return !1
                                }
                                if (f.length != d.length) return !1;
                                for (f.sort(), d.sort(), s = f.length - 1; s >= 0; s--)
                                    if (f[s] != d[s]) return !1;
                                for (s = f.length - 1; s >= 0; s--)
                                    if (c = f[s], !a(t[c], e[c], n)) return !1;
                                return typeof t == typeof e
                            }(t, e, n))
                        }
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n(1);
                    e.default = function() {
                        function t(t, e, n) {
                            void 0 === n && (n = {}), this.attrName = t, this.keyName = e;
                            this.scope = null != n.scope ? n.scope & o.Scope.LEVEL | o.Scope.TYPE & o.Scope.ATTRIBUTE : o.Scope.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist)
                        }
                        return t.keys = function(t) {
                            return [].map.call(t.attributes, function(t) {
                                return t.name
                            })
                        }, t.prototype.add = function(t, e) {
                            return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0)
                        }, t.prototype.canAdd = function(t, e) {
                            return null != o.query(t, o.Scope.BLOT & (this.scope | o.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1))
                        }, t.prototype.remove = function(t) {
                            t.removeAttribute(this.keyName)
                        }, t.prototype.value = function(t) {
                            var e = t.getAttribute(this.keyName);
                            return this.canAdd(t, e) && e ? e : ""
                        }, t
                    }()
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = e.Code = void 0;
                    var u = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        s = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        c = o(n(2)),
                        f = o(n(0)),
                        d = o(n(4)),
                        h = o(n(6)),
                        p = o(n(7)),
                        y = function(t) {
                            function e() {
                                return r(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return i(e, h.default), e
                        }();
                    y.blotName = "code", y.tagName = "CODE";
                    var v = function(t) {
                        function e() {
                            return r(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return i(e, d.default), a(e, [{
                            key: "delta",
                            value: function() {
                                var t = this,
                                    e = this.domNode.textContent;
                                return e.endsWith("\n") && (e = e.slice(0, -1)), e.split("\n").reduce(function(e, n) {
                                    return e.insert(n).insert("\n", t.formats())
                                }, new c.default)
                            }
                        }, {
                            key: "format",
                            value: function(t, n) {
                                if (t !== this.statics.blotName || !n) {
                                    var o = this.descendant(p.default, this.length() - 1),
                                        r = u(o, 1)[0];
                                    null != r && r.deleteAt(r.length() - 1, 1), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                                }
                            }
                        }, {
                            key: "formatAt",
                            value: function(t, n, o, r) {
                                if (0 !== n && null != f.default.query(o, f.default.Scope.BLOCK) && (o !== this.statics.blotName || r !== this.statics.formats(this.domNode))) {
                                    var l = this.newlineIndex(t);
                                    if (!(l < 0 || l >= t + n)) {
                                        var i = this.newlineIndex(t, !0) + 1,
                                            u = l - i + 1,
                                            a = this.isolate(i, u),
                                            s = a.next;
                                        a.format(o, r), s instanceof e && s.formatAt(0, t - i + n - u, o, r)
                                    }
                                }
                            }
                        }, {
                            key: "insertAt",
                            value: function(t, e, n) {
                                if (null == n) {
                                    var o = this.descendant(p.default, t),
                                        r = u(o, 2);
                                    r[0].insertAt(r[1], e)
                                }
                            }
                        }, {
                            key: "length",
                            value: function() {
                                var t = this.domNode.textContent.length;
                                return this.domNode.textContent.endsWith("\n") ? t : t + 1
                            }
                        }, {
                            key: "newlineIndex",
                            value: function(t) {
                                if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return this.domNode.textContent.slice(0, t).lastIndexOf("\n");
                                var e = this.domNode.textContent.slice(t).indexOf("\n");
                                return e > -1 ? t + e : -1
                            }
                        }, {
                            key: "optimize",
                            value: function(t) {
                                this.domNode.textContent.endsWith("\n") || this.appendChild(f.default.create("text", "\n")), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                                var n = this.next;
                                null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode) && (n.optimize(t), n.moveChildren(this), n.remove())
                            }
                        }, {
                            key: "replace",
                            value: function(t) {
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t) {
                                    var e = f.default.find(t);
                                    null == e ? t.parentNode.removeChild(t) : e instanceof f.default.Embed ? e.remove() : e.unwrap()
                                })
                            }
                        }], [{
                            key: "create",
                            value: function(t) {
                                var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                return n.setAttribute("spellcheck", !1), n
                            }
                        }, {
                            key: "formats",
                            value: function() {
                                return !0
                            }
                        }]), e
                    }();
                    v.blotName = "code-block", v.tagName = "PRE", v.TAB = "  ", e.Code = y, e.default = v
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        l = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        u = o(n(2)),
                        a = o(n(20)),
                        s = o(n(0)),
                        c = o(n(13)),
                        f = o(n(24)),
                        d = n(4),
                        h = o(d),
                        p = o(n(16)),
                        y = o(n(21)),
                        v = o(n(11)),
                        b = o(n(3)),
                        m = /^[ -~]*$/;
                    e.default = function() {
                        function t(e) {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.scroll = e, this.delta = this.getDelta()
                        }
                        return i(t, [{
                            key: "applyDelta",
                            value: function(t) {
                                var e = this,
                                    n = !1;
                                this.scroll.update();
                                var o = this.scroll.length();
                                return this.scroll.batchStart(), (t = function(t) {
                                    return t.reduce(function(t, e) {
                                        if (1 === e.insert) {
                                            var n = (0, y.default)(e.attributes);
                                            return delete n.image, t.insert({
                                                image: e.attributes.image
                                            }, n)
                                        }
                                        if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || ((e = (0, y.default)(e)).attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet", delete e.attributes.bullet)), "string" == typeof e.insert) {
                                            var o = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                                            return t.insert(o, e.attributes)
                                        }
                                        return t.push(e)
                                    }, new u.default)
                                }(t)).reduce(function(t, i) {
                                    var u = i.retain || i.delete || i.insert.length || 1,
                                        c = i.attributes || {};
                                    if (null != i.insert) {
                                        if ("string" == typeof i.insert) {
                                            var f = i.insert;
                                            f.endsWith("\n") && n && (n = !1, f = f.slice(0, -1)), t >= o && !f.endsWith("\n") && (n = !0), e.scroll.insertAt(t, f);
                                            var p = e.scroll.line(t),
                                                y = l(p, 2),
                                                v = y[0],
                                                m = y[1],
                                                g = (0, b.default)({}, (0, d.bubbleFormats)(v));
                                            if (v instanceof h.default) {
                                                var _ = v.descendant(s.default.Leaf, m),
                                                    O = l(_, 1);
                                                g = (0, b.default)(g, (0, d.bubbleFormats)(O[0]))
                                            }
                                            c = a.default.attributes.diff(g, c) || {}
                                        } else if ("object" === r(i.insert)) {
                                            var k = Object.keys(i.insert)[0];
                                            if (null == k) return t;
                                            e.scroll.insertAt(t, k, i.insert[k])
                                        }
                                        o += u
                                    }
                                    return Object.keys(c).forEach(function(n) {
                                        e.scroll.formatAt(t, u, n, c[n])
                                    }), t + u
                                }, 0), t.reduce(function(t, n) {
                                    return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + (n.retain || n.insert.length || 1)
                                }, 0), this.scroll.batchEnd(), this.update(t)
                            }
                        }, {
                            key: "deleteText",
                            value: function(t, e) {
                                return this.scroll.deleteAt(t, e), this.update((new u.default).retain(t).delete(e))
                            }
                        }, {
                            key: "formatLine",
                            value: function(t, e) {
                                var n = this,
                                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                return this.scroll.update(), Object.keys(o).forEach(function(r) {
                                    if (null == n.scroll.whitelist || n.scroll.whitelist[r]) {
                                        var l = n.scroll.lines(t, Math.max(e, 1)),
                                            i = e;
                                        l.forEach(function(e) {
                                            var l = e.length();
                                            if (e instanceof c.default) {
                                                var u = t - e.offset(n.scroll),
                                                    a = e.newlineIndex(u + i) - u + 1;
                                                e.formatAt(u, a, r, o[r])
                                            } else e.format(r, o[r]);
                                            i -= l
                                        })
                                    }
                                }), this.scroll.optimize(), this.update((new u.default).retain(t).retain(e, (0, y.default)(o)))
                            }
                        }, {
                            key: "formatText",
                            value: function(t, e) {
                                var n = this,
                                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                return Object.keys(o).forEach(function(r) {
                                    n.scroll.formatAt(t, e, r, o[r])
                                }), this.update((new u.default).retain(t).retain(e, (0, y.default)(o)))
                            }
                        }, {
                            key: "getContents",
                            value: function(t, e) {
                                return this.delta.slice(t, t + e)
                            }
                        }, {
                            key: "getDelta",
                            value: function() {
                                return this.scroll.lines().reduce(function(t, e) {
                                    return t.concat(e.delta())
                                }, new u.default)
                            }
                        }, {
                            key: "getFormat",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = [],
                                    o = [];
                                0 === e ? this.scroll.path(t).forEach(function(t) {
                                    var e = l(t, 1)[0];
                                    e instanceof h.default ? n.push(e) : e instanceof s.default.Leaf && o.push(e)
                                }) : (n = this.scroll.lines(t, e), o = this.scroll.descendants(s.default.Leaf, t, e));
                                var r = [n, o].map(function(t) {
                                    if (0 === t.length) return {};
                                    for (var e = (0, d.bubbleFormats)(t.shift()); Object.keys(e).length > 0;) {
                                        var n = t.shift();
                                        if (null == n) return e;
                                        e = function(t, e) {
                                            return Object.keys(e).reduce(function(n, o) {
                                                return null == t[o] ? n : (e[o] === t[o] ? n[o] = e[o] : Array.isArray(e[o]) ? e[o].indexOf(t[o]) < 0 && (n[o] = e[o].concat([t[o]])) : n[o] = [e[o], t[o]], n)
                                            }, {})
                                        }((0, d.bubbleFormats)(n), e)
                                    }
                                    return e
                                });
                                return b.default.apply(b.default, r)
                            }
                        }, {
                            key: "getText",
                            value: function(t, e) {
                                return this.getContents(t, e).filter(function(t) {
                                    return "string" == typeof t.insert
                                }).map(function(t) {
                                    return t.insert
                                }).join("")
                            }
                        }, {
                            key: "insertEmbed",
                            value: function(t, e, n) {
                                return this.scroll.insertAt(t, e, n), this.update((new u.default).retain(t).insert(function(t, e, n) {
                                    return e in t ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[e] = n, t
                                }({}, e, n)))
                            }
                        }, {
                            key: "insertText",
                            value: function(t, e) {
                                var n = this,
                                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(o).forEach(function(r) {
                                    n.scroll.formatAt(t, e.length, r, o[r])
                                }), this.update((new u.default).retain(t).insert(e, (0, y.default)(o)))
                            }
                        }, {
                            key: "isBlank",
                            value: function() {
                                if (0 == this.scroll.children.length) return !0;
                                if (this.scroll.children.length > 1) return !1;
                                var t = this.scroll.children.head;
                                return t.statics.blotName === h.default.blotName && (!(t.children.length > 1) && t.children.head instanceof p.default)
                            }
                        }, {
                            key: "removeFormat",
                            value: function(t, e) {
                                var n = this.getText(t, e),
                                    o = this.scroll.line(t + e),
                                    r = l(o, 2),
                                    i = r[0],
                                    a = r[1],
                                    s = 0,
                                    f = new u.default;
                                null != i && (s = i instanceof c.default ? i.newlineIndex(a) - a + 1 : i.length() - a, f = i.delta().slice(a, a + s - 1).insert("\n"));
                                var d = this.getContents(t, e + s).diff((new u.default).insert(n).concat(f)),
                                    h = (new u.default).retain(t).concat(d);
                                return this.applyDelta(h)
                            }
                        }, {
                            key: "update",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                    o = this.delta;
                                if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(m) && s.default.find(e[0].target)) {
                                    var r = s.default.find(e[0].target),
                                        l = (0, d.bubbleFormats)(r),
                                        i = r.offset(this.scroll),
                                        a = e[0].oldValue.replace(f.default.CONTENTS, ""),
                                        c = (new u.default).insert(a),
                                        h = (new u.default).insert(r.value());
                                    t = (new u.default).retain(i).concat(c.diff(h, n)).reduce(function(t, e) {
                                        return e.insert ? t.insert(e.insert, l) : t.push(e)
                                    }, new u.default), this.delta = o.compose(t)
                                } else this.delta = this.getDelta(), t && (0, v.default)(o.compose(t), this.delta) || (t = o.diff(this.delta, n));
                                return t
                            }
                        }]), t
                    }()
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                            return n
                        }
                        return Array.from(t)
                    }

                    function l(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function i(t, e) {
                        return e instanceof Text && (e = e.parentNode), t.contains(e)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = e.Range = void 0;
                    var u = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        s = o(n(0)),
                        c = o(n(21)),
                        f = o(n(11)),
                        d = o(n(8)),
                        h = (0, o(n(10)).default)("quill:selection"),
                        p = function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            l(this, t), this.index = e, this.length = n
                        },
                        y = function() {
                            function t(e, n) {
                                var o = this;
                                l(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = s.default.create("cursor", this), this.lastRange = this.savedRange = new p(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
                                    o.mouseDown || setTimeout(o.update.bind(o, d.default.sources.USER), 1)
                                }), this.emitter.on(d.default.events.EDITOR_CHANGE, function(t, e) {
                                    t === d.default.events.TEXT_CHANGE && e.length() > 0 && o.update(d.default.sources.SILENT)
                                }), this.emitter.on(d.default.events.SCROLL_BEFORE_UPDATE, function() {
                                    if (o.hasFocus()) {
                                        var t = o.getNativeRange();
                                        null != t && t.start.node !== o.cursor.textNode && o.emitter.once(d.default.events.SCROLL_UPDATE, function() {
                                            try {
                                                o.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset)
                                            } catch (t) {}
                                        })
                                    }
                                }), this.emitter.on(d.default.events.SCROLL_OPTIMIZE, function(t, e) {
                                    if (e.range) {
                                        var n = e.range;
                                        o.setNativeRange(n.startNode, n.startOffset, n.endNode, n.endOffset)
                                    }
                                }), this.update(d.default.sources.SILENT)
                            }
                            return a(t, [{
                                key: "handleComposition",
                                value: function() {
                                    var t = this;
                                    this.root.addEventListener("compositionstart", function() {
                                        t.composing = !0
                                    }), this.root.addEventListener("compositionend", function() {
                                        if (t.composing = !1, t.cursor.parent) {
                                            var e = t.cursor.restore();
                                            if (!e) return;
                                            setTimeout(function() {
                                                t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset)
                                            }, 1)
                                        }
                                    })
                                }
                            }, {
                                key: "handleDragging",
                                value: function() {
                                    var t = this;
                                    this.emitter.listenDOM("mousedown", document.body, function() {
                                        t.mouseDown = !0
                                    }), this.emitter.listenDOM("mouseup", document.body, function() {
                                        t.mouseDown = !1, t.update(d.default.sources.USER)
                                    })
                                }
                            }, {
                                key: "focus",
                                value: function() {
                                    this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange))
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
                                        this.scroll.update();
                                        var n = this.getNativeRange();
                                        if (null != n && n.native.collapsed && !s.default.query(t, s.default.Scope.BLOCK)) {
                                            if (n.start.node !== this.cursor.textNode) {
                                                var o = s.default.find(n.start.node, !1);
                                                if (null == o) return;
                                                if (o instanceof s.default.Leaf) {
                                                    var r = o.split(n.start.offset);
                                                    o.parent.insertBefore(this.cursor, r)
                                                } else o.insertBefore(this.cursor, n.start.node);
                                                this.cursor.attach()
                                            }
                                            this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update()
                                        }
                                    }
                                }
                            }, {
                                key: "getBounds",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        n = this.scroll.length();
                                    t = Math.min(t, n - 1), e = Math.min(t + e, n - 1) - t;
                                    var o = void 0,
                                        r = this.scroll.leaf(t),
                                        l = u(r, 2),
                                        i = l[0],
                                        a = l[1];
                                    if (null == i) return null;
                                    var s = i.position(a, !0),
                                        c = u(s, 2);
                                    o = c[0], a = c[1];
                                    var f = document.createRange();
                                    if (e > 0) {
                                        f.setStart(o, a);
                                        var d = this.scroll.leaf(t + e),
                                            h = u(d, 2);
                                        if (i = h[0], a = h[1], null == i) return null;
                                        var p = i.position(a, !0),
                                            y = u(p, 2);
                                        return o = y[0], a = y[1], f.setEnd(o, a), f.getBoundingClientRect()
                                    }
                                    var v = "left",
                                        b = void 0;
                                    return o instanceof Text ? (a < o.data.length ? (f.setStart(o, a), f.setEnd(o, a + 1)) : (f.setStart(o, a - 1), f.setEnd(o, a), v = "right"), b = f.getBoundingClientRect()) : (b = i.domNode.getBoundingClientRect(), a > 0 && (v = "right")), {
                                        bottom: b.top + b.height,
                                        height: b.height,
                                        left: b[v],
                                        right: b[v],
                                        top: b.top,
                                        width: 0
                                    }
                                }
                            }, {
                                key: "getNativeRange",
                                value: function() {
                                    var t = document.getSelection();
                                    if (null == t || t.rangeCount <= 0) return null;
                                    var e = t.getRangeAt(0);
                                    if (null == e) return null;
                                    var n = this.normalizeNative(e);
                                    return h.info("getNativeRange", n), n
                                }
                            }, {
                                key: "getRange",
                                value: function() {
                                    var t = this.getNativeRange();
                                    if (null == t) return [null, null];
                                    return [this.normalizedToRange(t), t]
                                }
                            }, {
                                key: "hasFocus",
                                value: function() {
                                    return document.activeElement === this.root
                                }
                            }, {
                                key: "normalizedToRange",
                                value: function(t) {
                                    var e = this,
                                        n = [
                                            [t.start.node, t.start.offset]
                                        ];
                                    t.native.collapsed || n.push([t.end.node, t.end.offset]);
                                    var o = n.map(function(t) {
                                            var n = u(t, 2),
                                                o = n[0],
                                                r = n[1],
                                                l = s.default.find(o, !0),
                                                i = l.offset(e.scroll);
                                            return 0 === r ? i : l instanceof s.default.Container ? i + l.length() : i + l.index(o, r)
                                        }),
                                        l = Math.min(Math.max.apply(Math, r(o)), this.scroll.length() - 1),
                                        i = Math.min.apply(Math, [l].concat(r(o)));
                                    return new p(i, l - i)
                                }
                            }, {
                                key: "normalizeNative",
                                value: function(t) {
                                    if (!i(this.root, t.startContainer) || !t.collapsed && !i(this.root, t.endContainer)) return null;
                                    var e = {
                                        start: {
                                            node: t.startContainer,
                                            offset: t.startOffset
                                        },
                                        end: {
                                            node: t.endContainer,
                                            offset: t.endOffset
                                        },
                                        native: t
                                    };
                                    return [e.start, e.end].forEach(function(t) {
                                        for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;)
                                            if (e.childNodes.length > n) e = e.childNodes[n], n = 0;
                                            else {
                                                if (e.childNodes.length !== n) break;
                                                n = (e = e.lastChild) instanceof Text ? e.data.length : e.childNodes.length + 1
                                            } t.node = e, t.offset = n
                                    }), e
                                }
                            }, {
                                key: "rangeToNative",
                                value: function(t) {
                                    var e = this,
                                        n = t.collapsed ? [t.index] : [t.index, t.index + t.length],
                                        o = [],
                                        r = this.scroll.length();
                                    return n.forEach(function(t, n) {
                                        t = Math.min(r - 1, t);
                                        var l = e.scroll.leaf(t),
                                            i = u(l, 2),
                                            a = i[1],
                                            s = i[0].position(a, 0 !== n),
                                            c = u(s, 2);
                                        o.push(c[0], a = c[1])
                                    }), o.length < 2 && (o = o.concat(o)), o
                                }
                            }, {
                                key: "scrollIntoView",
                                value: function(t) {
                                    var e = this.lastRange;
                                    if (null != e) {
                                        var n = this.getBounds(e.index, e.length);
                                        if (null != n) {
                                            var o = this.scroll.length() - 1,
                                                r = this.scroll.line(Math.min(e.index, o)),
                                                l = u(r, 1)[0],
                                                i = l;
                                            if (e.length > 0) {
                                                var a = this.scroll.line(Math.min(e.index + e.length, o));
                                                i = u(a, 1)[0]
                                            }
                                            if (null != l && null != i) {
                                                var s = t.getBoundingClientRect();
                                                n.top < s.top ? t.scrollTop -= s.top - n.top : n.bottom > s.bottom && (t.scrollTop += n.bottom - s.bottom)
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "setNativeRange",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
                                        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                    if (h.info("setNativeRange", t, e, n, o), null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
                                        var l = document.getSelection();
                                        if (null != l)
                                            if (null != t) {
                                                this.hasFocus() || this.root.focus();
                                                var i = (this.getNativeRange() || {}).native;
                                                if (null == i || r || t !== i.startContainer || e !== i.startOffset || n !== i.endContainer || o !== i.endOffset) {
                                                    "BR" == t.tagName && (e = [].indexOf.call(t.parentNode.childNodes, t), t = t.parentNode), "BR" == n.tagName && (o = [].indexOf.call(n.parentNode.childNodes, n), n = n.parentNode);
                                                    var u = document.createRange();
                                                    u.setStart(t, e), u.setEnd(n, o), l.removeAllRanges(), l.addRange(u)
                                                }
                                            } else l.removeAllRanges(), this.root.blur(), document.body.focus()
                                    }
                                }
                            }, {
                                key: "setRange",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default.sources.API;
                                    if ("string" == typeof e && (n = e, e = !1), h.info("setRange", t), null != t) {
                                        var o = this.rangeToNative(t);
                                        this.setNativeRange.apply(this, r(o).concat([e]))
                                    } else this.setNativeRange(null);
                                    this.update(n)
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.default.sources.USER,
                                        e = this.lastRange,
                                        n = this.getRange(),
                                        o = u(n, 2),
                                        r = o[1];
                                    if (this.lastRange = o[0], null != this.lastRange && (this.savedRange = this.lastRange), !(0, f.default)(e, this.lastRange)) {
                                        var l;
                                        !this.composing && null != r && r.native.collapsed && r.start.node !== this.cursor.textNode && this.cursor.restore();
                                        var i = [d.default.events.SELECTION_CHANGE, (0, c.default)(this.lastRange), (0, c.default)(e), t];
                                        if ((l = this.emitter).emit.apply(l, [d.default.events.EDITOR_CHANGE].concat(i)), t !== d.default.sources.SILENT) {
                                            var a;
                                            (a = this.emitter).emit.apply(a, i)
                                        }
                                    }
                                }
                            }]), t
                        }();
                    e.Range = p, e.default = y
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        l = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, r.default.Embed), o(e, [{
                                key: "insertInto",
                                value: function(t, n) {
                                    0 === t.children.length ? function t(e, n, o) {
                                        null === e && (e = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === r) {
                                            var l = Object.getPrototypeOf(e);
                                            return null === l ? void 0 : t(l, n, o)
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        if (void 0 !== i) return i.call(o)
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertInto", this).call(this, t, n) : this.remove()
                                }
                            }, {
                                key: "length",
                                value: function() {
                                    return 0
                                }
                            }, {
                                key: "value",
                                value: function() {
                                    return ""
                                }
                            }], [{
                                key: "value",
                                value: function() {}
                            }]), e
                        }();
                    l.blotName = "break", l.tagName = "BR", e.default = l
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        var e = u.find(t);
                        if (null == e) try {
                            e = u.create(t)
                        } catch (n) {
                            e = u.create(u.Scope.INLINE), [].slice.call(t.childNodes).forEach(function(t) {
                                e.domNode.appendChild(t)
                            }), t.parentNode && t.parentNode.replaceChild(e.domNode, t), e.attach()
                        }
                        return e
                    }
                    var r = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = n(44),
                        i = n(30),
                        u = n(1);
                    e.default = function(t) {
                        function e(e) {
                            var n = t.call(this, e) || this;
                            return n.build(), n
                        }
                        return r(e, t), e.prototype.appendChild = function(t) {
                            this.insertBefore(t)
                        }, e.prototype.attach = function() {
                            t.prototype.attach.call(this), this.children.forEach(function(t) {
                                t.attach()
                            })
                        }, e.prototype.build = function() {
                            var t = this;
                            this.children = new l.default, [].slice.call(this.domNode.childNodes).reverse().forEach(function(e) {
                                try {
                                    var n = o(e);
                                    t.insertBefore(n, t.children.head || void 0)
                                } catch (t) {
                                    if (t instanceof u.ParchmentError) return;
                                    throw t
                                }
                            })
                        }, e.prototype.deleteAt = function(t, e) {
                            if (0 === t && e === this.length()) return this.remove();
                            this.children.forEachAt(t, e, function(t, e, n) {
                                t.deleteAt(e, n)
                            })
                        }, e.prototype.descendant = function(t, n) {
                            var o = this.children.find(n),
                                r = o[0],
                                l = o[1];
                            return null == t.blotName && t(r) || null != t.blotName && r instanceof t ? [r, l] : r instanceof e ? r.descendant(t, l) : [null, -1]
                        }, e.prototype.descendants = function(t, n, o) {
                            void 0 === n && (n = 0), void 0 === o && (o = Number.MAX_VALUE);
                            var r = [],
                                l = o;
                            return this.children.forEachAt(n, o, function(n, o, i) {
                                (null == t.blotName && t(n) || null != t.blotName && n instanceof t) && r.push(n), n instanceof e && (r = r.concat(n.descendants(t, o, l))), l -= i
                            }), r
                        }, e.prototype.detach = function() {
                            this.children.forEach(function(t) {
                                t.detach()
                            }), t.prototype.detach.call(this)
                        }, e.prototype.formatAt = function(t, e, n, o) {
                            this.children.forEachAt(t, e, function(t, e, r) {
                                t.formatAt(e, r, n, o)
                            })
                        }, e.prototype.insertAt = function(t, e, n) {
                            var o = this.children.find(t),
                                r = o[0];
                            if (r) r.insertAt(o[1], e, n);
                            else {
                                var l = null == n ? u.create("text", e) : u.create(e, n);
                                this.appendChild(l)
                            }
                        }, e.prototype.insertBefore = function(t, e) {
                            if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(e) {
                                    return t instanceof e
                                })) throw new u.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
                            t.insertInto(this, e)
                        }, e.prototype.length = function() {
                            return this.children.reduce(function(t, e) {
                                return t + e.length()
                            }, 0)
                        }, e.prototype.moveChildren = function(t, e) {
                            this.children.forEach(function(n) {
                                t.insertBefore(n, e)
                            })
                        }, e.prototype.optimize = function(e) {
                            if (t.prototype.optimize.call(this, e), 0 === this.children.length)
                                if (null != this.statics.defaultChild) {
                                    var n = u.create(this.statics.defaultChild);
                                    this.appendChild(n), n.optimize(e)
                                } else this.remove()
                        }, e.prototype.path = function(t, n) {
                            void 0 === n && (n = !1);
                            var o = this.children.find(t, n),
                                r = o[0],
                                l = o[1],
                                i = [
                                    [this, t]
                                ];
                            return r instanceof e ? i.concat(r.path(l, n)) : (null != r && i.push([r, l]), i)
                        }, e.prototype.removeChild = function(t) {
                            this.children.remove(t)
                        }, e.prototype.replace = function(n) {
                            n instanceof e && n.moveChildren(this), t.prototype.replace.call(this, n)
                        }, e.prototype.split = function(t, e) {
                            if (void 0 === e && (e = !1), !e) {
                                if (0 === t) return this;
                                if (t === this.length()) return this.next
                            }
                            var n = this.clone();
                            return this.parent.insertBefore(n, this.next), this.children.forEachAt(t, this.length(), function(t, o, r) {
                                t = t.split(o, e), n.appendChild(t)
                            }), n
                        }, e.prototype.unwrap = function() {
                            this.moveChildren(this.parent, this.next), this.remove()
                        }, e.prototype.update = function(t, e) {
                            var n = this,
                                r = [],
                                l = [];
                            t.forEach(function(t) {
                                t.target === n.domNode && "childList" === t.type && (r.push.apply(r, t.addedNodes), l.push.apply(l, t.removedNodes))
                            }), l.forEach(function(t) {
                                if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                                    var e = u.find(t);
                                    null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach())
                                }
                            }), r.filter(function(t) {
                                return t.parentNode == n.domNode
                            }).sort(function(t, e) {
                                return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
                            }).forEach(function(t) {
                                var e = null;
                                null != t.nextSibling && (e = u.find(t.nextSibling));
                                var r = o(t);
                                r.next == e && null != r.next || (null != r.parent && r.parent.removeChild(n), n.insertBefore(r, e || void 0))
                            })
                        }, e
                    }(i.default)
                }, function(t, e, n) {
                    "use strict";
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(12),
                        l = n(31),
                        i = n(17),
                        u = n(1);
                    e.default = function(t) {
                        function e(e) {
                            var n = t.call(this, e) || this;
                            return n.attributes = new l.default(n.domNode), n
                        }
                        return o(e, t), e.formats = function(t) {
                            return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
                        }, e.prototype.format = function(t, e) {
                            var n = u.query(t);
                            n instanceof r.default ? this.attributes.attribute(n, e) : e && (null == n || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e))
                        }, e.prototype.formats = function() {
                            var t = this.attributes.values(),
                                e = this.statics.formats(this.domNode);
                            return null != e && (t[this.statics.blotName] = e), t
                        }, e.prototype.replaceWith = function(e, n) {
                            var o = t.prototype.replaceWith.call(this, e, n);
                            return this.attributes.copy(o), o
                        }, e.prototype.update = function(e, n) {
                            var o = this;
                            t.prototype.update.call(this, e, n), e.some(function(t) {
                                return t.target === o.domNode && "attributes" === t.type
                            }) && this.attributes.build()
                        }, e.prototype.wrap = function(n, o) {
                            var r = t.prototype.wrap.call(this, n, o);
                            return r instanceof e && r.statics.scope === this.statics.scope && this.attributes.move(r), r
                        }, e
                    }(i.default)
                }, function(t, e, n) {
                    "use strict";
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(30),
                        l = n(1);
                    e.default = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return o(e, t), e.value = function(t) {
                            return !0
                        }, e.prototype.index = function(t, e) {
                            return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1
                        }, e.prototype.position = function(t, e) {
                            var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                            return t > 0 && (n += 1), [this.parent.domNode, n]
                        }, e.prototype.value = function() {
                            var t;
                            return t = {}, t[this.statics.blotName] = this.statics.value(this.domNode) || !0, t
                        }, e.scope = l.Scope.INLINE_BLOT, e
                    }(r.default)
                }, function(t, e, n) {
                    function o(t) {
                        this.ops = t, this.index = 0, this.offset = 0
                    }
                    var r = n(11),
                        l = n(3),
                        i = {
                            attributes: {
                                compose: function(t, e, n) {
                                    "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                                    var o = l(!0, {}, e);
                                    n || (o = Object.keys(o).reduce(function(t, e) {
                                        return null != o[e] && (t[e] = o[e]), t
                                    }, {}));
                                    for (var r in t) void 0 !== t[r] && void 0 === e[r] && (o[r] = t[r]);
                                    return Object.keys(o).length > 0 ? o : void 0
                                },
                                diff: function(t, e) {
                                    "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                                    var n = Object.keys(t).concat(Object.keys(e)).reduce(function(n, o) {
                                        return r(t[o], e[o]) || (n[o] = void 0 === e[o] ? null : e[o]), n
                                    }, {});
                                    return Object.keys(n).length > 0 ? n : void 0
                                },
                                transform: function(t, e, n) {
                                    if ("object" != typeof t) return e;
                                    if ("object" == typeof e) {
                                        if (!n) return e;
                                        var o = Object.keys(e).reduce(function(n, o) {
                                            return void 0 === t[o] && (n[o] = e[o]), n
                                        }, {});
                                        return Object.keys(o).length > 0 ? o : void 0
                                    }
                                }
                            },
                            iterator: function(t) {
                                return new o(t)
                            },
                            length: function(t) {
                                return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1
                            }
                        };
                    o.prototype.hasNext = function() {
                        return this.peekLength() < 1 / 0
                    }, o.prototype.next = function(t) {
                        t || (t = 1 / 0);
                        var e = this.ops[this.index];
                        if (e) {
                            var n = this.offset,
                                o = i.length(e);
                            if (t >= o - n ? (t = o - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete) return {
                                delete: t
                            };
                            var r = {};
                            return e.attributes && (r.attributes = e.attributes), "number" == typeof e.retain ? r.retain = t : r.insert = "string" == typeof e.insert ? e.insert.substr(n, t) : e.insert, r
                        }
                        return {
                            retain: 1 / 0
                        }
                    }, o.prototype.peek = function() {
                        return this.ops[this.index]
                    }, o.prototype.peekLength = function() {
                        return this.ops[this.index] ? i.length(this.ops[this.index]) - this.offset : 1 / 0
                    }, o.prototype.peekType = function() {
                        return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
                    }, o.prototype.rest = function() {
                        if (this.hasNext()) {
                            if (0 === this.offset) return this.ops.slice(this.index);
                            var t = this.offset,
                                e = this.index,
                                n = this.next(),
                                o = this.ops.slice(this.index);
                            return this.offset = t, this.index = e, [n].concat(o)
                        }
                        return []
                    }, t.exports = i
                }, function(t, n) {
                    var o = function() {
                        "use strict";

                        function t(t, e) {
                            return null != e && t instanceof e
                        }

                        function n(o, a, s, c, f) {
                            function d(o, s) {
                                if (null === o) return null;
                                if (0 === s) return o;
                                var v, b;
                                if ("object" != typeof o) return o;
                                if (t(o, l)) v = new l;
                                else if (t(o, i)) v = new i;
                                else if (t(o, u)) v = new u(function(t, e) {
                                    o.then(function(e) {
                                        t(d(e, s - 1))
                                    }, function(t) {
                                        e(d(t, s - 1))
                                    })
                                });
                                else if (n.__isArray(o)) v = [];
                                else if (n.__isRegExp(o)) v = new RegExp(o.source, r(o)), o.lastIndex && (v.lastIndex = o.lastIndex);
                                else if (n.__isDate(o)) v = new Date(o.getTime());
                                else {
                                    if (y && e.isBuffer(o)) return v = e.allocUnsafe ? e.allocUnsafe(o.length) : new e(o.length), o.copy(v), v;
                                    t(o, Error) ? v = Object.create(o) : void 0 === c ? (b = Object.getPrototypeOf(o), v = Object.create(b)) : (v = Object.create(c), b = c)
                                }
                                if (a) {
                                    var m = h.indexOf(o);
                                    if (-1 != m) return p[m];
                                    h.push(o), p.push(v)
                                }
                                t(o, l) && o.forEach(function(t, e) {
                                    var n = d(e, s - 1),
                                        o = d(t, s - 1);
                                    v.set(n, o)
                                }), t(o, i) && o.forEach(function(t) {
                                    var e = d(t, s - 1);
                                    v.add(e)
                                });
                                for (var g in o) {
                                    var _;
                                    b && (_ = Object.getOwnPropertyDescriptor(b, g)), _ && null == _.set || (v[g] = d(o[g], s - 1))
                                }
                                if (Object.getOwnPropertySymbols) {
                                    var O = Object.getOwnPropertySymbols(o);
                                    for (g = 0; g < O.length; g++) {
                                        var k = O[g];
                                        (!(E = Object.getOwnPropertyDescriptor(o, k)) || E.enumerable || f) && (v[k] = d(o[k], s - 1), E.enumerable || Object.defineProperty(v, k, {
                                            enumerable: !1
                                        }))
                                    }
                                }
                                if (f) {
                                    var x = Object.getOwnPropertyNames(o);
                                    for (g = 0; g < x.length; g++) {
                                        var E, w = x[g];
                                        (E = Object.getOwnPropertyDescriptor(o, w)) && E.enumerable || (v[w] = d(o[w], s - 1), Object.defineProperty(v, w, {
                                            enumerable: !1
                                        }))
                                    }
                                }
                                return v
                            }
                            "object" == typeof a && (s = a.depth, c = a.prototype, f = a.includeNonEnumerable, a = a.circular);
                            var h = [],
                                p = [],
                                y = void 0 !== e;
                            return void 0 === a && (a = !0), void 0 === s && (s = 1 / 0), d(o, s)
                        }

                        function o(t) {
                            return Object.prototype.toString.call(t)
                        }

                        function r(t) {
                            var e = "";
                            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e
                        }
                        var l;
                        try {
                            l = Map
                        } catch (t) {
                            l = function() {}
                        }
                        var i;
                        try {
                            i = Set
                        } catch (t) {
                            i = function() {}
                        }
                        var u;
                        try {
                            u = Promise
                        } catch (t) {
                            u = function() {}
                        }
                        return n.clonePrototype = function(t) {
                            if (null === t) return null;
                            var e = function() {};
                            return e.prototype = t, new e
                        }, n.__objToStr = o, n.__isDate = function(t) {
                            return "object" == typeof t && "[object Date]" === o(t)
                        }, n.__isArray = function(t) {
                            return "object" == typeof t && "[object Array]" === o(t)
                        }, n.__isRegExp = function(t) {
                            return "object" == typeof t && "[object RegExp]" === o(t)
                        }, n.__getRegExpFlags = r, n
                    }();
                    "object" == typeof t && t.exports && (t.exports = o)
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t) {
                        return t instanceof f.default || t instanceof c.BlockEmbed
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        u = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        a = o(n(0)),
                        s = o(n(8)),
                        c = n(4),
                        f = o(c),
                        d = o(n(16)),
                        h = o(n(13)),
                        p = o(n(25)),
                        y = function(t) {
                            function e(t, n) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var o = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return o.emitter = n.emitter, Array.isArray(n.whitelist) && (o.whitelist = n.whitelist.reduce(function(t, e) {
                                    return t[e] = !0, t
                                }, {})), o.domNode.addEventListener("DOMNodeInserted", function() {}), o.optimize(), o.enable(), o
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, a.default.Scroll), i(e, [{
                                key: "batchStart",
                                value: function() {
                                    this.batch = !0
                                }
                            }, {
                                key: "batchEnd",
                                value: function() {
                                    this.batch = !1, this.optimize()
                                }
                            }, {
                                key: "deleteAt",
                                value: function(t, n) {
                                    var o = this.line(t),
                                        r = l(o, 2),
                                        i = r[0],
                                        a = r[1],
                                        s = this.line(t + n),
                                        f = l(s, 1)[0];
                                    if (u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), null != f && i !== f && a > 0) {
                                        if (i instanceof c.BlockEmbed || f instanceof c.BlockEmbed) return void this.optimize();
                                        if (i instanceof h.default) {
                                            var p = i.newlineIndex(i.length(), !0);
                                            if (p > -1 && (i = i.split(p + 1)) === f) return void this.optimize()
                                        } else if (f instanceof h.default) {
                                            var y = f.newlineIndex(0);
                                            y > -1 && f.split(y + 1)
                                        }
                                        i.moveChildren(f, f.children.head instanceof d.default ? null : f.children.head), i.remove()
                                    }
                                    this.optimize()
                                }
                            }, {
                                key: "enable",
                                value: function() {
                                    this.domNode.setAttribute("contenteditable", !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0])
                                }
                            }, {
                                key: "formatAt",
                                value: function(t, n, o, r) {
                                    (null == this.whitelist || this.whitelist[o]) && (u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, o, r), this.optimize())
                                }
                            }, {
                                key: "insertAt",
                                value: function(t, n, o) {
                                    if (null == o || null == this.whitelist || this.whitelist[n]) {
                                        if (t >= this.length())
                                            if (null == o || null == a.default.query(n, a.default.Scope.BLOCK)) {
                                                var r = a.default.create(this.statics.defaultChild);
                                                this.appendChild(r), null == o && n.endsWith("\n") && (n = n.slice(0, -1)), r.insertAt(0, n, o)
                                            } else {
                                                var l = a.default.create(n, o);
                                                this.appendChild(l)
                                            }
                                        else u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, o);
                                        this.optimize()
                                    }
                                }
                            }, {
                                key: "insertBefore",
                                value: function(t, n) {
                                    if (t.statics.scope === a.default.Scope.INLINE_BLOT) {
                                        var o = a.default.create(this.statics.defaultChild);
                                        o.appendChild(t), t = o
                                    }
                                    u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n)
                                }
                            }, {
                                key: "leaf",
                                value: function(t) {
                                    return this.path(t).pop() || [null, -1]
                                }
                            }, {
                                key: "line",
                                value: function(t) {
                                    return t === this.length() ? this.line(t - 1) : this.descendant(r, t)
                                }
                            }, {
                                key: "lines",
                                value: function() {
                                    return function t(e, n, o) {
                                        var l = [],
                                            i = o;
                                        return e.children.forEachAt(n, o, function(e, n, o) {
                                            r(e) ? l.push(e) : e instanceof a.default.Container && (l = l.concat(t(e, n, i))), i -= o
                                        }), l
                                    }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE)
                                }
                            }, {
                                key: "optimize",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    !0 !== this.batch && (u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t, n), t.length > 0 && this.emitter.emit(s.default.events.SCROLL_OPTIMIZE, t, n))
                                }
                            }, {
                                key: "path",
                                value: function(t) {
                                    return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t).slice(1)
                                }
                            }, {
                                key: "update",
                                value: function(t) {
                                    if (!0 !== this.batch) {
                                        var n = s.default.sources.USER;
                                        "string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), t.length > 0 && this.emitter.emit(s.default.events.SCROLL_BEFORE_UPDATE, n, t), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(s.default.events.SCROLL_UPDATE, n, t)
                                    }
                                }
                            }]), e
                        }();
                    y.blotName = "scroll", y.className = "ql-editor", y.tagName = "DIV", y.defaultChild = "block", y.allowedChildren = [f.default, c.BlockEmbed, p.default], e.default = y
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function l(t, e) {
                        var n;
                        return n = {
                            key: t,
                            shiftKey: e,
                            altKey: null
                        }, r(n, t === j.keys.LEFT ? "prefix" : "suffix", /^$/), r(n, "handler", function(n) {
                            var o = n.index;
                            t === j.keys.RIGHT && (o += n.length + 1);
                            var r = this.quill.getLeaf(o);
                            return !(p(r, 1)[0] instanceof O.default.Embed) || (t === j.keys.LEFT ? e ? this.quill.setSelection(n.index - 1, n.length + 1, k.default.sources.USER) : this.quill.setSelection(n.index - 1, k.default.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, k.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, k.default.sources.USER), !1)
                        }), n
                    }

                    function i(t, e) {
                        if (!(0 === t.index || this.quill.getLength() <= 1)) {
                            var n = this.quill.getLine(t.index),
                                o = p(n, 1)[0],
                                r = {};
                            if (0 === e.offset) {
                                var l = this.quill.getLine(t.index - 1),
                                    i = p(l, 1)[0];
                                if (null != i && i.length() > 1) {
                                    var u = o.formats(),
                                        a = this.quill.getFormat(t.index - 1, 1);
                                    r = _.default.attributes.diff(u, a) || {}
                                }
                            }
                            var s = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
                            this.quill.deleteText(t.index - s, s, k.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(t.index - s, s, r, k.default.sources.USER), this.quill.focus()
                        }
                    }

                    function u(t, e) {
                        var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
                        if (!(t.index >= this.quill.getLength() - n)) {
                            var o = {},
                                r = 0,
                                l = this.quill.getLine(t.index),
                                i = p(l, 1)[0];
                            if (e.offset >= i.length() - 1) {
                                var u = this.quill.getLine(t.index + 1),
                                    a = p(u, 1)[0];
                                if (a) {
                                    var s = i.formats(),
                                        c = this.quill.getFormat(t.index, 1);
                                    o = _.default.attributes.diff(s, c) || {}, r = a.length()
                                }
                            }
                            this.quill.deleteText(t.index, n, k.default.sources.USER), Object.keys(o).length > 0 && this.quill.formatLine(t.index + r - 1, n, o, k.default.sources.USER)
                        }
                    }

                    function a(t) {
                        var e = this.quill.getLines(t),
                            n = {};
                        if (e.length > 1) {
                            var o = e[0].formats(),
                                r = e[e.length - 1].formats();
                            n = _.default.attributes.diff(r, o) || {}
                        }
                        this.quill.deleteText(t, k.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(t.index, 1, n, k.default.sources.USER), this.quill.setSelection(t.index, k.default.sources.SILENT), this.quill.focus()
                    }

                    function s(t, e) {
                        var n = this;
                        t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
                        var o = Object.keys(e.format).reduce(function(t, n) {
                            return O.default.query(n, O.default.Scope.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]), t
                        }, {});
                        this.quill.insertText(t.index, "\n", o, k.default.sources.USER), this.quill.setSelection(t.index + 1, k.default.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach(function(t) {
                            null == o[t] && (Array.isArray(e.format[t]) || "link" !== t && n.quill.format(t, e.format[t], k.default.sources.USER))
                        })
                    }

                    function c(t) {
                        return {
                            key: j.keys.TAB,
                            shiftKey: !t,
                            format: {
                                "code-block": !0
                            },
                            handler: function(e) {
                                var n = O.default.query("code-block"),
                                    o = e.index,
                                    r = e.length,
                                    l = this.quill.scroll.descendant(n, o),
                                    i = p(l, 2),
                                    u = i[0],
                                    a = i[1];
                                if (null != u) {
                                    var s = this.quill.getIndex(u),
                                        c = u.newlineIndex(a, !0) + 1,
                                        f = u.newlineIndex(s + a + r),
                                        d = u.domNode.textContent.slice(c, f).split("\n");
                                    a = 0, d.forEach(function(e, l) {
                                        t ? (u.insertAt(c + a, n.TAB), a += n.TAB.length, 0 === l ? o += n.TAB.length : r += n.TAB.length) : e.startsWith(n.TAB) && (u.deleteAt(c + a, n.TAB.length), a -= n.TAB.length, 0 === l ? o -= n.TAB.length : r -= n.TAB.length), a += e.length + 1
                                    }), this.quill.update(k.default.sources.USER), this.quill.setSelection(o, r, k.default.sources.SILENT)
                                }
                            }
                        }
                    }

                    function f(t) {
                        return {
                            key: t[0].toUpperCase(),
                            shortKey: !0,
                            handler: function(e, n) {
                                this.quill.format(t, !n.format[t], k.default.sources.USER)
                            }
                        }
                    }

                    function d(t) {
                        if ("string" == typeof t || "number" == typeof t) return d({
                            key: t
                        });
                        if ("object" === (void 0 === t ? "undefined" : h(t)) && (t = (0, v.default)(t, !1)), "string" == typeof t.key)
                            if (null != j.keys[t.key.toUpperCase()]) t.key = j.keys[t.key.toUpperCase()];
                            else {
                                if (1 !== t.key.length) return null;
                                t.key = t.key.toUpperCase().charCodeAt(0)
                            } return t.shortKey && (t[A] = t.shortKey, delete t.shortKey), t
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.SHORTKEY = e.default = void 0;
                    var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        p = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        y = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        v = o(n(21)),
                        b = o(n(11)),
                        m = o(n(3)),
                        g = o(n(2)),
                        _ = o(n(20)),
                        O = o(n(0)),
                        k = o(n(5)),
                        x = o(n(10)),
                        E = o(n(9)),
                        w = (0, x.default)("quill:keyboard"),
                        A = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
                        j = function(t) {
                            function e(t, n) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var o = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return o.bindings = {}, Object.keys(o.options.bindings).forEach(function(e) {
                                    ("list autofill" !== e || null == t.scroll.whitelist || t.scroll.whitelist.list) && o.options.bindings[e] && o.addBinding(o.options.bindings[e])
                                }), o.addBinding({
                                    key: e.keys.ENTER,
                                    shiftKey: null
                                }, s), o.addBinding({
                                    key: e.keys.ENTER,
                                    metaKey: null,
                                    ctrlKey: null,
                                    altKey: null
                                }, function() {}), /Firefox/i.test(navigator.userAgent) ? (o.addBinding({
                                    key: e.keys.BACKSPACE
                                }, {
                                    collapsed: !0
                                }, i), o.addBinding({
                                    key: e.keys.DELETE
                                }, {
                                    collapsed: !0
                                }, u)) : (o.addBinding({
                                    key: e.keys.BACKSPACE
                                }, {
                                    collapsed: !0,
                                    prefix: /^.?$/
                                }, i), o.addBinding({
                                    key: e.keys.DELETE
                                }, {
                                    collapsed: !0,
                                    suffix: /^.?$/
                                }, u)), o.addBinding({
                                    key: e.keys.BACKSPACE
                                }, {
                                    collapsed: !1
                                }, a), o.addBinding({
                                    key: e.keys.DELETE
                                }, {
                                    collapsed: !1
                                }, a), o.addBinding({
                                    key: e.keys.BACKSPACE,
                                    altKey: null,
                                    ctrlKey: null,
                                    metaKey: null,
                                    shiftKey: null
                                }, {
                                    collapsed: !0,
                                    offset: 0
                                }, i), o.listen(), o
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, E.default), y(e, null, [{
                                key: "match",
                                value: function(t, e) {
                                    return e = d(e), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(n) {
                                        return !!e[n] !== t[n] && null !== e[n]
                                    }) && e.key === (t.which || t.keyCode)
                                }
                            }]), y(e, [{
                                key: "addBinding",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        o = d(t);
                                    if (null == o || null == o.key) return w.warn("Attempted to add invalid keyboard binding", o);
                                    "function" == typeof e && (e = {
                                        handler: e
                                    }), "function" == typeof n && (n = {
                                        handler: n
                                    }), o = (0, m.default)(o, e, n), this.bindings[o.key] = this.bindings[o.key] || [], this.bindings[o.key].push(o)
                                }
                            }, {
                                key: "listen",
                                value: function() {
                                    var t = this;
                                    this.quill.root.addEventListener("keydown", function(n) {
                                        if (!n.defaultPrevented) {
                                            var o = (t.bindings[n.which || n.keyCode] || []).filter(function(t) {
                                                return e.match(n, t)
                                            });
                                            if (0 !== o.length) {
                                                var r = t.quill.getSelection();
                                                if (null != r && t.quill.hasFocus()) {
                                                    var l = t.quill.getLine(r.index),
                                                        i = p(l, 2),
                                                        u = i[0],
                                                        a = i[1],
                                                        s = t.quill.getLeaf(r.index),
                                                        c = p(s, 2),
                                                        f = c[0],
                                                        d = c[1],
                                                        y = 0 === r.length ? [f, d] : t.quill.getLeaf(r.index + r.length),
                                                        v = p(y, 2),
                                                        m = v[0],
                                                        g = v[1],
                                                        _ = f instanceof O.default.Text ? f.value().slice(0, d) : "",
                                                        k = m instanceof O.default.Text ? m.value().slice(g) : "",
                                                        x = {
                                                            collapsed: 0 === r.length,
                                                            empty: 0 === r.length && u.length() <= 1,
                                                            format: t.quill.getFormat(r),
                                                            offset: a,
                                                            prefix: _,
                                                            suffix: k
                                                        };
                                                    o.some(function(e) {
                                                        if (null != e.collapsed && e.collapsed !== x.collapsed) return !1;
                                                        if (null != e.empty && e.empty !== x.empty) return !1;
                                                        if (null != e.offset && e.offset !== x.offset) return !1;
                                                        if (Array.isArray(e.format)) {
                                                            if (e.format.every(function(t) {
                                                                    return null == x.format[t]
                                                                })) return !1
                                                        } else if ("object" === h(e.format) && !Object.keys(e.format).every(function(t) {
                                                                return !0 === e.format[t] ? null != x.format[t] : !1 === e.format[t] ? null == x.format[t] : (0, b.default)(e.format[t], x.format[t])
                                                            })) return !1;
                                                        return !(null != e.prefix && !e.prefix.test(x.prefix)) && (!(null != e.suffix && !e.suffix.test(x.suffix)) && !0 !== e.handler.call(t, r, x))
                                                    }) && n.preventDefault()
                                                }
                                            }
                                        }
                                    })
                                }
                            }]), e
                        }();
                    j.keys = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        ESCAPE: 27,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    }, j.DEFAULTS = {
                        bindings: {
                            bold: f("bold"),
                            italic: f("italic"),
                            underline: f("underline"),
                            indent: {
                                key: j.keys.TAB,
                                format: ["blockquote", "indent", "list"],
                                handler: function(t, e) {
                                    if (e.collapsed && 0 !== e.offset) return !0;
                                    this.quill.format("indent", "+1", k.default.sources.USER)
                                }
                            },
                            outdent: {
                                key: j.keys.TAB,
                                shiftKey: !0,
                                format: ["blockquote", "indent", "list"],
                                handler: function(t, e) {
                                    if (e.collapsed && 0 !== e.offset) return !0;
                                    this.quill.format("indent", "-1", k.default.sources.USER)
                                }
                            },
                            "outdent backspace": {
                                key: j.keys.BACKSPACE,
                                collapsed: !0,
                                shiftKey: null,
                                metaKey: null,
                                ctrlKey: null,
                                altKey: null,
                                format: ["indent", "list"],
                                offset: 0,
                                handler: function(t, e) {
                                    null != e.format.indent ? this.quill.format("indent", "-1", k.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, k.default.sources.USER)
                                }
                            },
                            "indent code-block": c(!0),
                            "outdent code-block": c(!1),
                            "remove tab": {
                                key: j.keys.TAB,
                                shiftKey: !0,
                                collapsed: !0,
                                prefix: /\t$/,
                                handler: function(t) {
                                    this.quill.deleteText(t.index - 1, 1, k.default.sources.USER)
                                }
                            },
                            tab: {
                                key: j.keys.TAB,
                                handler: function(t) {
                                    this.quill.history.cutoff();
                                    var e = (new g.default).retain(t.index).delete(t.length).insert("\t");
                                    this.quill.updateContents(e, k.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, k.default.sources.SILENT)
                                }
                            },
                            "list empty enter": {
                                key: j.keys.ENTER,
                                collapsed: !0,
                                format: ["list"],
                                empty: !0,
                                handler: function(t, e) {
                                    this.quill.format("list", !1, k.default.sources.USER), e.format.indent && this.quill.format("indent", !1, k.default.sources.USER)
                                }
                            },
                            "checklist enter": {
                                key: j.keys.ENTER,
                                collapsed: !0,
                                format: {
                                    list: "checked"
                                },
                                handler: function(t) {
                                    var e = this.quill.getLine(t.index),
                                        n = p(e, 2),
                                        o = n[0],
                                        r = n[1],
                                        l = (0, m.default)({}, o.formats(), {
                                            list: "checked"
                                        }),
                                        i = (new g.default).retain(t.index).insert("\n", l).retain(o.length() - r - 1).retain(1, {
                                            list: "unchecked"
                                        });
                                    this.quill.updateContents(i, k.default.sources.USER), this.quill.setSelection(t.index + 1, k.default.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "header enter": {
                                key: j.keys.ENTER,
                                collapsed: !0,
                                format: ["header"],
                                suffix: /^$/,
                                handler: function(t, e) {
                                    var n = this.quill.getLine(t.index),
                                        o = p(n, 2),
                                        r = o[0],
                                        l = o[1],
                                        i = (new g.default).retain(t.index).insert("\n", e.format).retain(r.length() - l - 1).retain(1, {
                                            header: null
                                        });
                                    this.quill.updateContents(i, k.default.sources.USER), this.quill.setSelection(t.index + 1, k.default.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "list autofill": {
                                key: " ",
                                collapsed: !0,
                                format: {
                                    list: !1
                                },
                                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                                handler: function(t, e) {
                                    var n = e.prefix.length,
                                        o = this.quill.getLine(t.index),
                                        r = p(o, 2),
                                        l = r[0],
                                        i = r[1];
                                    if (i > n) return !0;
                                    var u = void 0;
                                    switch (e.prefix.trim()) {
                                        case "[]":
                                        case "[ ]":
                                            u = "unchecked";
                                            break;
                                        case "[x]":
                                            u = "checked";
                                            break;
                                        case "-":
                                        case "*":
                                            u = "bullet";
                                            break;
                                        default:
                                            u = "ordered"
                                    }
                                    this.quill.insertText(t.index, " ", k.default.sources.USER), this.quill.history.cutoff();
                                    var a = (new g.default).retain(t.index - i).delete(n + 1).retain(l.length() - 2 - i).retain(1, {
                                        list: u
                                    });
                                    this.quill.updateContents(a, k.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index - n, k.default.sources.SILENT)
                                }
                            },
                            "code exit": {
                                key: j.keys.ENTER,
                                collapsed: !0,
                                format: ["code-block"],
                                prefix: /\n\n$/,
                                suffix: /^\s+$/,
                                handler: function(t) {
                                    var e = this.quill.getLine(t.index),
                                        n = p(e, 2),
                                        o = n[0],
                                        r = n[1],
                                        l = (new g.default).retain(t.index + o.length() - r - 2).retain(1, {
                                            "code-block": null
                                        }).delete(1);
                                    this.quill.updateContents(l, k.default.sources.USER)
                                }
                            },
                            "embed left": l(j.keys.LEFT, !1),
                            "embed left shift": l(j.keys.LEFT, !0),
                            "embed right": l(j.keys.RIGHT, !1),
                            "embed right shift": l(j.keys.RIGHT, !0)
                        }
                    }, e.default = j, e.SHORTKEY = A
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        l = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        u = o(n(0)),
                        a = o(n(7)),
                        s = function(t) {
                            function e(t, n) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var o = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return o.selection = n, o.textNode = document.createTextNode(e.CONTENTS), o.domNode.appendChild(o.textNode), o._length = 0, o
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, u.default.Embed), i(e, null, [{
                                key: "value",
                                value: function() {}
                            }]), i(e, [{
                                key: "detach",
                                value: function() {
                                    null != this.parent && this.parent.removeChild(this)
                                }
                            }, {
                                key: "format",
                                value: function(t, n) {
                                    if (0 !== this._length) return l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                                    for (var o = this, r = 0; null != o && o.statics.scope !== u.default.Scope.BLOCK_BLOT;) r += o.offset(o.parent), o = o.parent;
                                    null != o && (this._length = e.CONTENTS.length, o.optimize(), o.formatAt(r, e.CONTENTS.length, t, n), this._length = 0)
                                }
                            }, {
                                key: "index",
                                value: function(t, n) {
                                    return t === this.textNode ? 0 : l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n)
                                }
                            }, {
                                key: "length",
                                value: function() {
                                    return this._length
                                }
                            }, {
                                key: "position",
                                value: function() {
                                    return [this.textNode, this.textNode.data.length]
                                }
                            }, {
                                key: "remove",
                                value: function() {
                                    l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this), this.parent = null
                                }
                            }, {
                                key: "restore",
                                value: function() {
                                    if (!this.selection.composing && null != this.parent) {
                                        var t = this.textNode,
                                            n = this.selection.getNativeRange(),
                                            o = void 0,
                                            l = void 0,
                                            i = void 0;
                                        if (null != n && n.start.node === t && n.end.node === t) {
                                            var s = [t, n.start.offset, n.end.offset];
                                            o = s[0], l = s[1], i = s[2]
                                        }
                                        for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                                        if (this.textNode.data !== e.CONTENTS) {
                                            var c = this.textNode.data.split(e.CONTENTS).join("");
                                            this.next instanceof a.default ? (o = this.next.domNode, this.next.insertAt(0, c), this.textNode.data = e.CONTENTS) : (this.textNode.data = c, this.parent.insertBefore(u.default.create(this.textNode), this), this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode))
                                        }
                                        if (this.remove(), null != l) {
                                            var f = [l, i].map(function(t) {
                                                    return Math.max(0, Math.min(o.data.length, t - 1))
                                                }),
                                                d = r(f, 2);
                                            return l = d[0], i = d[1], {
                                                startNode: o,
                                                startOffset: l,
                                                endNode: o,
                                                endOffset: i
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "update",
                                value: function(t, e) {
                                    var n = this;
                                    if (t.some(function(t) {
                                            return "characterData" === t.type && t.target === n.textNode
                                        })) {
                                        var o = this.restore();
                                        o && (e.range = o)
                                    }
                                }
                            }, {
                                key: "value",
                                value: function() {
                                    return ""
                                }
                            }]), e
                        }();
                    s.blotName = "cursor", s.className = "ql-cursor", s.tagName = "span", s.CONTENTS = "\ufeff", e.default = s
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = o(n(0)),
                        l = n(4),
                        i = o(l),
                        u = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, r.default.Container), e
                        }();
                    u.allowedChildren = [i.default, l.BlockEmbed, u], e.default = u
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        l = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, r.default.Attributor.Style), o(e, [{
                                key: "value",
                                value: function(t) {
                                    var n = function t(e, n, o) {
                                        null === e && (e = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === r) {
                                            var l = Object.getPrototypeOf(e);
                                            return null === l ? void 0 : t(l, n, o)
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        if (void 0 !== i) return i.call(o)
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t);
                                    return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(t) {
                                        return ("00" + parseInt(t).toString(16)).slice(-2)
                                    }).join("")) : n
                                }
                            }]), e
                        }(),
                        i = new r.default.Attributor.Class("color", "ql-color", {
                            scope: r.default.Scope.INLINE
                        }),
                        u = new l("color", "color", {
                            scope: r.default.Scope.INLINE
                        });
                    e.ColorAttributor = l, e.ColorClass = i, e.ColorStyle = u
                }, function(t, e, n) {
                    "use strict";

                    function o(t, e) {
                        var n = document.createElement("a");
                        n.href = t;
                        var o = n.href.slice(0, n.href.indexOf(":"));
                        return e.indexOf(o) > -1
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.sanitize = e.default = void 0;
                    var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        l = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        i = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(6)),
                        u = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, i.default), r(e, [{
                                key: "format",
                                value: function(t, n) {
                                    if (t !== this.statics.blotName || !n) return l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                                    n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n)
                                }
                            }], [{
                                key: "create",
                                value: function(t) {
                                    var n = l(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                    return t = this.sanitize(t), n.setAttribute("href", t), n.setAttribute("rel", "noopener noreferrer"), n.setAttribute("target", "_blank"), n
                                }
                            }, {
                                key: "formats",
                                value: function(t) {
                                    return t.getAttribute("href")
                                }
                            }, {
                                key: "sanitize",
                                value: function(t) {
                                    return o(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL
                                }
                            }]), e
                        }();
                    u.blotName = "link", u.tagName = "A", u.SANITIZED_URL = "about:blank", u.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], e.default = u, e.sanitize = o
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        t.setAttribute(e, !("true" === t.getAttribute(e)))
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        u = o(n(23)),
                        a = o(n(107)),
                        s = 0;
                    e.default = function() {
                        function t(e) {
                            var n = this;
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
                                n.togglePicker()
                            }), this.label.addEventListener("keydown", function(t) {
                                switch (t.keyCode) {
                                    case u.default.keys.ENTER:
                                        n.togglePicker();
                                        break;
                                    case u.default.keys.ESCAPE:
                                        n.escape(), t.preventDefault()
                                }
                            }), this.select.addEventListener("change", this.update.bind(this))
                        }
                        return i(t, [{
                            key: "togglePicker",
                            value: function() {
                                this.container.classList.toggle("ql-expanded"), r(this.label, "aria-expanded"), r(this.options, "aria-hidden")
                            }
                        }, {
                            key: "buildItem",
                            value: function(t) {
                                var e = this,
                                    n = document.createElement("span");
                                return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), t.hasAttribute("value") && n.setAttribute("data-value", t.getAttribute("value")), t.textContent && n.setAttribute("data-label", t.textContent), n.addEventListener("click", function() {
                                    e.selectItem(n, !0)
                                }), n.addEventListener("keydown", function(t) {
                                    switch (t.keyCode) {
                                        case u.default.keys.ENTER:
                                            e.selectItem(n, !0), t.preventDefault();
                                            break;
                                        case u.default.keys.ESCAPE:
                                            e.escape(), t.preventDefault()
                                    }
                                }), n
                            }
                        }, {
                            key: "buildLabel",
                            value: function() {
                                var t = document.createElement("span");
                                return t.classList.add("ql-picker-label"), t.innerHTML = a.default, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t
                            }
                        }, {
                            key: "buildOptions",
                            value: function() {
                                var t = this,
                                    e = document.createElement("span");
                                e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = "ql-picker-options-" + s, s += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, [].slice.call(this.select.options).forEach(function(n) {
                                    var o = t.buildItem(n);
                                    e.appendChild(o), !0 === n.selected && t.selectItem(o)
                                }), this.container.appendChild(e)
                            }
                        }, {
                            key: "buildPicker",
                            value: function() {
                                var t = this;
                                [].slice.call(this.select.attributes).forEach(function(e) {
                                    t.container.setAttribute(e.name, e.value)
                                }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions()
                            }
                        }, {
                            key: "escape",
                            value: function() {
                                var t = this;
                                this.close(), setTimeout(function() {
                                    return t.label.focus()
                                }, 1)
                            }
                        }, {
                            key: "close",
                            value: function() {
                                this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true")
                            }
                        }, {
                            key: "selectItem",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = this.container.querySelector(".ql-selected");
                                if (t !== n && (null != n && n.classList.remove("ql-selected"), null != t && (t.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e))) {
                                    if ("function" == typeof Event) this.select.dispatchEvent(new Event("change"));
                                    else if ("object" === ("undefined" == typeof Event ? "undefined" : l(Event))) {
                                        var o = document.createEvent("Event");
                                        o.initEvent("change", !0, !0), this.select.dispatchEvent(o)
                                    }
                                    this.close()
                                }
                            }
                        }, {
                            key: "update",
                            value: function() {
                                var t = void 0;
                                if (this.select.selectedIndex > -1) {
                                    var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                                    t = this.select.options[this.select.selectedIndex], this.selectItem(e)
                                } else this.selectItem(null);
                                var n = null != t && t !== this.select.querySelector("option[selected]");
                                this.label.classList.toggle("ql-active", n)
                            }
                        }]), t
                    }()
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = o(n(0)),
                        l = o(n(5)),
                        i = n(4),
                        u = o(i),
                        a = o(n(16)),
                        s = o(n(25)),
                        c = o(n(24)),
                        f = o(n(35)),
                        d = o(n(6)),
                        h = o(n(22)),
                        p = o(n(7)),
                        y = o(n(55)),
                        v = o(n(42)),
                        b = o(n(23));
                    l.default.register({
                        "blots/block": u.default,
                        "blots/block/embed": i.BlockEmbed,
                        "blots/break": a.default,
                        "blots/container": s.default,
                        "blots/cursor": c.default,
                        "blots/embed": f.default,
                        "blots/inline": d.default,
                        "blots/scroll": h.default,
                        "blots/text": p.default,
                        "modules/clipboard": y.default,
                        "modules/history": v.default,
                        "modules/keyboard": b.default
                    }), r.default.register(u.default, a.default, c.default, d.default, h.default, p.default), e.default = l.default
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n(1);
                    e.default = function() {
                        function t(t) {
                            this.domNode = t, this.domNode[o.DATA_KEY] = {
                                blot: this
                            }
                        }
                        return Object.defineProperty(t.prototype, "statics", {
                            get: function() {
                                return this.constructor
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.create = function(t) {
                            if (null == this.tagName) throw new o.ParchmentError("Blot definition missing tagName");
                            var e;
                            return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t).toString() === t && (t = parseInt(t))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e
                        }, t.prototype.attach = function() {
                            null != this.parent && (this.scroll = this.parent.scroll)
                        }, t.prototype.clone = function() {
                            var t = this.domNode.cloneNode(!1);
                            return o.create(t)
                        }, t.prototype.detach = function() {
                            null != this.parent && this.parent.removeChild(this), delete this.domNode[o.DATA_KEY]
                        }, t.prototype.deleteAt = function(t, e) {
                            this.isolate(t, e).remove()
                        }, t.prototype.formatAt = function(t, e, n, r) {
                            var l = this.isolate(t, e);
                            if (null != o.query(n, o.Scope.BLOT) && r) l.wrap(n, r);
                            else if (null != o.query(n, o.Scope.ATTRIBUTE)) {
                                var i = o.create(this.statics.scope);
                                l.wrap(i), i.format(n, r)
                            }
                        }, t.prototype.insertAt = function(t, e, n) {
                            var r = null == n ? o.create("text", e) : o.create(e, n),
                                l = this.split(t);
                            this.parent.insertBefore(r, l)
                        }, t.prototype.insertInto = function(t, e) {
                            void 0 === e && (e = null), null != this.parent && this.parent.children.remove(this);
                            var n = null;
                            t.children.insertBefore(this, e), null != e && (n = e.domNode), this.domNode.parentNode == t.domNode && this.domNode.nextSibling == n || t.domNode.insertBefore(this.domNode, n), this.parent = t, this.attach()
                        }, t.prototype.isolate = function(t, e) {
                            var n = this.split(t);
                            return n.split(e), n
                        }, t.prototype.length = function() {
                            return 1
                        }, t.prototype.offset = function(t) {
                            return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
                        }, t.prototype.optimize = function(t) {
                            null != this.domNode[o.DATA_KEY] && delete this.domNode[o.DATA_KEY].mutations
                        }, t.prototype.remove = function() {
                            null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach()
                        }, t.prototype.replace = function(t) {
                            null != t.parent && (t.parent.insertBefore(this, t.next), t.remove())
                        }, t.prototype.replaceWith = function(t, e) {
                            var n = "string" == typeof t ? o.create(t, e) : t;
                            return n.replace(this), n
                        }, t.prototype.split = function(t, e) {
                            return 0 === t ? this : this.next
                        }, t.prototype.update = function(t, e) {}, t.prototype.wrap = function(t, e) {
                            var n = "string" == typeof t ? o.create(t, e) : t;
                            return null != this.parent && this.parent.insertBefore(n, this.next), n.appendChild(this), n
                        }, t.blotName = "abstract", t
                    }()
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n(12),
                        r = n(32),
                        l = n(33),
                        i = n(1);
                    e.default = function() {
                        function t(t) {
                            this.attributes = {}, this.domNode = t, this.build()
                        }
                        return t.prototype.attribute = function(t, e) {
                            e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName])
                        }, t.prototype.build = function() {
                            var t = this;
                            this.attributes = {};
                            var e = o.default.keys(this.domNode),
                                n = r.default.keys(this.domNode),
                                u = l.default.keys(this.domNode);
                            e.concat(n).concat(u).forEach(function(e) {
                                var n = i.query(e, i.Scope.ATTRIBUTE);
                                n instanceof o.default && (t.attributes[n.attrName] = n)
                            })
                        }, t.prototype.copy = function(t) {
                            var e = this;
                            Object.keys(this.attributes).forEach(function(n) {
                                var o = e.attributes[n].value(e.domNode);
                                t.format(n, o)
                            })
                        }, t.prototype.move = function(t) {
                            var e = this;
                            this.copy(t), Object.keys(this.attributes).forEach(function(t) {
                                e.attributes[t].remove(e.domNode)
                            }), this.attributes = {}
                        }, t.prototype.values = function() {
                            var t = this;
                            return Object.keys(this.attributes).reduce(function(e, n) {
                                return e[n] = t.attributes[n].value(t.domNode), e
                            }, {})
                        }, t
                    }()
                }, function(t, e, n) {
                    "use strict";

                    function o(t, e) {
                        return (t.getAttribute("class") || "").split(/\s+/).filter(function(t) {
                            return 0 === t.indexOf(e + "-")
                        })
                    }
                    var r = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = n(12);
                    e.default = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return r(e, t), e.keys = function(t) {
                            return (t.getAttribute("class") || "").split(/\s+/).map(function(t) {
                                return t.split("-").slice(0, -1).join("-")
                            })
                        }, e.prototype.add = function(t, e) {
                            return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0)
                        }, e.prototype.remove = function(t) {
                            o(t, this.keyName).forEach(function(e) {
                                t.classList.remove(e)
                            }), 0 === t.classList.length && t.removeAttribute("class")
                        }, e.prototype.value = function(t) {
                            var e = (o(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
                            return this.canAdd(t, e) ? e : ""
                        }, e
                    }(l.default)
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        var e = t.split("-"),
                            n = e.slice(1).map(function(t) {
                                return t[0].toUpperCase() + t.slice(1)
                            }).join("");
                        return e[0] + n
                    }
                    var r = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = n(12);
                    e.default = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return r(e, t), e.keys = function(t) {
                            return (t.getAttribute("style") || "").split(";").map(function(t) {
                                return t.split(":")[0].trim()
                            })
                        }, e.prototype.add = function(t, e) {
                            return !!this.canAdd(t, e) && (t.style[o(this.keyName)] = e, !0)
                        }, e.prototype.remove = function(t) {
                            t.style[o(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style")
                        }, e.prototype.value = function(t) {
                            var e = t.style[o(this.keyName)];
                            return this.canAdd(t, e) ? e : ""
                        }, e
                    }(l.default)
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function() {
                            function t(e, n) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), this.quill = e, this.options = n, this.modules = {}
                            }
                            return o(t, [{
                                key: "init",
                                value: function() {
                                    var t = this;
                                    Object.keys(this.options.modules).forEach(function(e) {
                                        null == t.modules[e] && t.addModule(e)
                                    })
                                }
                            }, {
                                key: "addModule",
                                value: function(t) {
                                    var e = this.quill.constructor.import("modules/" + t);
                                    return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t]
                                }
                            }]), t
                        }();
                    r.DEFAULTS = {
                        modules: {}
                    }, r.themes = {
                        default: r
                    }, e.default = r
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        l = o(n(0)),
                        i = o(n(7)),
                        u = "\ufeff",
                        a = function(t) {
                            function e(t) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var n = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function(t) {
                                    n.contentNode.appendChild(t)
                                }), n.leftGuard = document.createTextNode(u), n.rightGuard = document.createTextNode(u), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, l.default.Embed), r(e, [{
                                key: "index",
                                value: function(t, n) {
                                    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : function t(e, n, o) {
                                        null === e && (e = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === r) {
                                            var l = Object.getPrototypeOf(e);
                                            return null === l ? void 0 : t(l, n, o)
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        if (void 0 !== i) return i.call(o)
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n)
                                }
                            }, {
                                key: "restore",
                                value: function(t) {
                                    var e = void 0,
                                        n = void 0,
                                        o = t.data.split(u).join("");
                                    if (t === this.leftGuard)
                                        if (this.prev instanceof i.default) {
                                            var r = this.prev.length();
                                            this.prev.insertAt(r, o), e = {
                                                startNode: this.prev.domNode,
                                                startOffset: r + o.length
                                            }
                                        } else n = document.createTextNode(o), this.parent.insertBefore(l.default.create(n), this), e = {
                                            startNode: n,
                                            startOffset: o.length
                                        };
                                    else t === this.rightGuard && (this.next instanceof i.default ? (this.next.insertAt(0, o), e = {
                                        startNode: this.next.domNode,
                                        startOffset: o.length
                                    }) : (n = document.createTextNode(o), this.parent.insertBefore(l.default.create(n), this.next), e = {
                                        startNode: n,
                                        startOffset: o.length
                                    }));
                                    return t.data = u, e
                                }
                            }, {
                                key: "update",
                                value: function(t, e) {
                                    var n = this;
                                    t.forEach(function(t) {
                                        if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
                                            var o = n.restore(t.target);
                                            o && (e.range = o)
                                        }
                                    })
                                }
                            }]), e
                        }();
                    e.default = a
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0;
                    var o = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        r = {
                            scope: o.default.Scope.BLOCK,
                            whitelist: ["right", "center", "justify"]
                        },
                        l = new o.default.Attributor.Attribute("align", "align", r),
                        i = new o.default.Attributor.Class("align", "ql-align", r),
                        u = new o.default.Attributor.Style("align", "text-align", r);
                    e.AlignAttribute = l, e.AlignClass = i, e.AlignStyle = u
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.BackgroundStyle = e.BackgroundClass = void 0;
                    var o = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        r = n(26),
                        l = new o.default.Attributor.Class("background", "ql-bg", {
                            scope: o.default.Scope.INLINE
                        }),
                        i = new r.ColorAttributor("background", "background-color", {
                            scope: o.default.Scope.INLINE
                        });
                    e.BackgroundClass = l, e.BackgroundStyle = i
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0;
                    var o = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        r = {
                            scope: o.default.Scope.BLOCK,
                            whitelist: ["rtl"]
                        },
                        l = new o.default.Attributor.Attribute("direction", "dir", r),
                        i = new o.default.Attributor.Class("direction", "ql-direction", r),
                        u = new o.default.Attributor.Style("direction", "direction", r);
                    e.DirectionAttribute = l, e.DirectionClass = i, e.DirectionStyle = u
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.FontClass = e.FontStyle = void 0;
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        l = {
                            scope: r.default.Scope.INLINE,
                            whitelist: ["serif", "monospace"]
                        },
                        i = new r.default.Attributor.Class("font", "ql-font", l),
                        u = new(function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, r.default.Attributor.Style), o(e, [{
                                key: "value",
                                value: function(t) {
                                    return function t(e, n, o) {
                                        null === e && (e = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === r) {
                                            var l = Object.getPrototypeOf(e);
                                            return null === l ? void 0 : t(l, n, o)
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        if (void 0 !== i) return i.call(o)
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t).replace(/["']/g, "")
                                }
                            }]), e
                        }())("font", "font-family", l);
                    e.FontStyle = u, e.FontClass = i
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.SizeStyle = e.SizeClass = void 0;
                    var o = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        r = new o.default.Attributor.Class("size", "ql-size", {
                            scope: o.default.Scope.INLINE,
                            whitelist: ["small", "large", "huge"]
                        }),
                        l = new o.default.Attributor.Style("size", "font-size", {
                            scope: o.default.Scope.INLINE,
                            whitelist: ["10px", "18px", "32px"]
                        });
                    e.SizeClass = r, e.SizeStyle = l
                }, function(t, e, n) {
                    "use strict";
                    t.exports = {
                        align: {
                            "": n(76),
                            center: n(77),
                            right: n(78),
                            justify: n(79)
                        },
                        background: n(80),
                        blockquote: n(81),
                        bold: n(82),
                        clean: n(83),
                        code: n(58),
                        "code-block": n(58),
                        color: n(84),
                        direction: {
                            "": n(85),
                            rtl: n(86)
                        },
                        float: {
                            center: n(87),
                            full: n(88),
                            left: n(89),
                            right: n(90)
                        },
                        formula: n(91),
                        header: {
                            1: n(92),
                            2: n(93)
                        },
                        italic: n(94),
                        image: n(95),
                        indent: {
                            "+1": n(96),
                            "-1": n(97)
                        },
                        link: n(98),
                        list: {
                            ordered: n(99),
                            bullet: n(100),
                            check: n(101)
                        },
                        script: {
                            sub: n(102),
                            super: n(103)
                        },
                        strike: n(104),
                        underline: n(105),
                        video: n(106)
                    }
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t) {
                        var e = t.reduce(function(t, e) {
                                return t += e.delete || 0
                            }, 0),
                            n = t.length() - e;
                        return function(t) {
                            var e = t.ops[t.ops.length - 1];
                            return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null != e.attributes && Object.keys(e.attributes).some(function(t) {
                                return null != i.default.query(t, i.default.Scope.BLOCK)
                            }))
                        }(t) && (n -= 1), n
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.getLastChangeIndex = e.default = void 0;
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        i = o(n(0)),
                        u = o(n(5)),
                        a = o(n(9)),
                        s = function(t) {
                            function e(t, n) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var o = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return o.lastRecorded = 0, o.ignoreChange = !1, o.clear(), o.quill.on(u.default.events.EDITOR_CHANGE, function(t, e, n, r) {
                                    t !== u.default.events.TEXT_CHANGE || o.ignoreChange || (o.options.userOnly && r !== u.default.sources.USER ? o.transform(e) : o.record(e, n))
                                }), o.quill.keyboard.addBinding({
                                    key: "Z",
                                    shortKey: !0
                                }, o.undo.bind(o)), o.quill.keyboard.addBinding({
                                    key: "Z",
                                    shortKey: !0,
                                    shiftKey: !0
                                }, o.redo.bind(o)), /Win/i.test(navigator.platform) && o.quill.keyboard.addBinding({
                                    key: "Y",
                                    shortKey: !0
                                }, o.redo.bind(o)), o
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, a.default), l(e, [{
                                key: "change",
                                value: function(t, e) {
                                    if (0 !== this.stack[t].length) {
                                        var n = this.stack[t].pop();
                                        this.stack[e].push(n), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n[t], u.default.sources.USER), this.ignoreChange = !1;
                                        var o = r(n[t]);
                                        this.quill.setSelection(o)
                                    }
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    this.stack = {
                                        undo: [],
                                        redo: []
                                    }
                                }
                            }, {
                                key: "cutoff",
                                value: function() {
                                    this.lastRecorded = 0
                                }
                            }, {
                                key: "record",
                                value: function(t, e) {
                                    if (0 !== t.ops.length) {
                                        this.stack.redo = [];
                                        var n = this.quill.getContents().diff(e),
                                            o = Date.now();
                                        if (this.lastRecorded + this.options.delay > o && this.stack.undo.length > 0) {
                                            var r = this.stack.undo.pop();
                                            n = n.compose(r.undo), t = r.redo.compose(t)
                                        } else this.lastRecorded = o;
                                        this.stack.undo.push({
                                            redo: t,
                                            undo: n
                                        }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift()
                                    }
                                }
                            }, {
                                key: "redo",
                                value: function() {
                                    this.change("redo", "undo")
                                }
                            }, {
                                key: "transform",
                                value: function(t) {
                                    this.stack.undo.forEach(function(e) {
                                        e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
                                    }), this.stack.redo.forEach(function(e) {
                                        e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0)
                                    })
                                }
                            }, {
                                key: "undo",
                                value: function() {
                                    this.change("undo", "redo")
                                }
                            }]), e
                        }();
                    s.DEFAULTS = {
                        delay: 1e3,
                        maxStack: 100,
                        userOnly: !1
                    }, e.default = s, e.getLastChangeIndex = r
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function u(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e.forEach(function(e) {
                            var o = document.createElement("option");
                            e === n ? o.setAttribute("selected", "selected") : o.setAttribute("value", e), t.appendChild(o)
                        })
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = e.BaseTooltip = void 0;
                    var a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        s = o(n(3)),
                        c = o(n(2)),
                        f = o(n(8)),
                        d = o(n(23)),
                        h = o(n(34)),
                        p = o(n(59)),
                        y = o(n(60)),
                        v = o(n(28)),
                        b = o(n(61)),
                        m = [!1, "center", "right", "justify"],
                        g = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
                        _ = [!1, "serif", "monospace"],
                        O = ["1", "2", "3", !1],
                        k = ["small", !1, "large", "huge"],
                        x = function(t) {
                            function e(t, n) {
                                r(this, e);
                                var o = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return t.emitter.listenDOM("click", document.body, function e(n) {
                                    if (!document.body.contains(t.root)) return document.body.removeEventListener("click", e);
                                    null == o.tooltip || o.tooltip.root.contains(n.target) || document.activeElement === o.tooltip.textbox || o.quill.hasFocus() || o.tooltip.hide(), null != o.pickers && o.pickers.forEach(function(t) {
                                        t.container.contains(n.target) || t.close()
                                    })
                                }), o
                            }
                            return i(e, h.default), a(e, [{
                                key: "addModule",
                                value: function(t) {
                                    var n = function t(e, n, o) {
                                        null === e && (e = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === r) {
                                            var l = Object.getPrototypeOf(e);
                                            return null === l ? void 0 : t(l, n, o)
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        if (void 0 !== i) return i.call(o)
                                    }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(this, t);
                                    return "toolbar" === t && this.extendToolbar(n), n
                                }
                            }, {
                                key: "buildButtons",
                                value: function(t, e) {
                                    t.forEach(function(t) {
                                        (t.getAttribute("class") || "").split(/\s+/).forEach(function(n) {
                                            if (n.startsWith("ql-") && (n = n.slice("ql-".length), null != e[n]))
                                                if ("direction" === n) t.innerHTML = e[n][""] + e[n].rtl;
                                                else if ("string" == typeof e[n]) t.innerHTML = e[n];
                                            else {
                                                var o = t.value || "";
                                                null != o && e[n][o] && (t.innerHTML = e[n][o])
                                            }
                                        })
                                    })
                                }
                            }, {
                                key: "buildPickers",
                                value: function(t, e) {
                                    var n = this;
                                    this.pickers = t.map(function(t) {
                                        if (t.classList.contains("ql-align")) return null == t.querySelector("option") && u(t, m), new y.default(t, e.align);
                                        if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
                                            var n = t.classList.contains("ql-background") ? "background" : "color";
                                            return null == t.querySelector("option") && u(t, g, "background" === n ? "#ffffff" : "#000000"), new p.default(t, e[n])
                                        }
                                        return null == t.querySelector("option") && (t.classList.contains("ql-font") ? u(t, _) : t.classList.contains("ql-header") ? u(t, O) : t.classList.contains("ql-size") && u(t, k)), new v.default(t)
                                    });
                                    this.quill.on(f.default.events.EDITOR_CHANGE, function() {
                                        n.pickers.forEach(function(t) {
                                            t.update()
                                        })
                                    })
                                }
                            }]), e
                        }();
                    x.DEFAULTS = (0, s.default)(!0, {}, h.default.DEFAULTS, {
                        modules: {
                            toolbar: {
                                handlers: {
                                    formula: function() {
                                        this.quill.theme.tooltip.edit("formula")
                                    },
                                    image: function() {
                                        var t = this,
                                            e = this.container.querySelector("input.ql-image[type=file]");
                                        null == e && ((e = document.createElement("input")).setAttribute("type", "file"), e.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e.classList.add("ql-image"), e.addEventListener("change", function() {
                                            if (null != e.files && null != e.files[0]) {
                                                var n = new FileReader;
                                                n.onload = function(n) {
                                                    var o = t.quill.getSelection(!0);
                                                    t.quill.updateContents((new c.default).retain(o.index).delete(o.length).insert({
                                                        image: n.target.result
                                                    }), f.default.sources.USER), t.quill.setSelection(o.index + 1, f.default.sources.SILENT), e.value = ""
                                                }, n.readAsDataURL(e.files[0])
                                            }
                                        }), this.container.appendChild(e)), e.click()
                                    },
                                    video: function() {
                                        this.quill.theme.tooltip.edit("video")
                                    }
                                }
                            }
                        }
                    });
                    var E = function(t) {
                        function e(t, n) {
                            r(this, e);
                            var o = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                            return o.textbox = o.root.querySelector('input[type="text"]'), o.listen(), o
                        }
                        return i(e, b.default), a(e, [{
                            key: "listen",
                            value: function() {
                                var t = this;
                                this.textbox.addEventListener("keydown", function(e) {
                                    d.default.match(e, "enter") ? (t.save(), e.preventDefault()) : d.default.match(e, "escape") && (t.cancel(), e.preventDefault())
                                })
                            }
                        }, {
                            key: "cancel",
                            value: function() {
                                this.hide()
                            }
                        }, {
                            key: "edit",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute("data-mode", t)
                            }
                        }, {
                            key: "restoreFocus",
                            value: function() {
                                var t = this.quill.scrollingContainer.scrollTop;
                                this.quill.focus(), this.quill.scrollingContainer.scrollTop = t
                            }
                        }, {
                            key: "save",
                            value: function() {
                                var t = this.textbox.value;
                                switch (this.root.getAttribute("data-mode")) {
                                    case "link":
                                        var e = this.quill.root.scrollTop;
                                        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, f.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, f.default.sources.USER)), this.quill.root.scrollTop = e;
                                        break;
                                    case "video":
                                        t = function(t) {
                                            var e = t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
                                            return e ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/" : t
                                        }(t);
                                    case "formula":
                                        if (!t) break;
                                        var n = this.quill.getSelection(!0);
                                        if (null != n) {
                                            var o = n.index + n.length;
                                            this.quill.insertEmbed(o, this.root.getAttribute("data-mode"), t, f.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(o + 1, " ", f.default.sources.USER), this.quill.setSelection(o + 2, f.default.sources.USER)
                                        }
                                }
                                this.textbox.value = "", this.hide()
                            }
                        }]), e
                    }();
                    e.BaseTooltip = E, e.default = x
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    e.default = function() {
                        function t() {
                            this.head = this.tail = null, this.length = 0
                        }
                        return t.prototype.append = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            this.insertBefore(t[0], null), t.length > 1 && this.append.apply(this, t.slice(1))
                        }, t.prototype.contains = function(t) {
                            for (var e, n = this.iterator(); e = n();)
                                if (e === t) return !0;
                            return !1
                        }, t.prototype.insertBefore = function(t, e) {
                            t && (t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1)
                        }, t.prototype.offset = function(t) {
                            for (var e = 0, n = this.head; null != n;) {
                                if (n === t) return e;
                                e += n.length(), n = n.next
                            }
                            return -1
                        }, t.prototype.remove = function(t) {
                            this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1)
                        }, t.prototype.iterator = function(t) {
                            return void 0 === t && (t = this.head),
                                function() {
                                    var e = t;
                                    return null != t && (t = t.next), e
                                }
                        }, t.prototype.find = function(t, e) {
                            void 0 === e && (e = !1);
                            for (var n, o = this.iterator(); n = o();) {
                                var r = n.length();
                                if (t < r || e && t === r && (null == n.next || 0 !== n.next.length())) return [n, t];
                                t -= r
                            }
                            return [null, 0]
                        }, t.prototype.forEach = function(t) {
                            for (var e, n = this.iterator(); e = n();) t(e)
                        }, t.prototype.forEachAt = function(t, e, n) {
                            if (!(e <= 0))
                                for (var o, r = this.find(t), l = t - r[1], i = this.iterator(r[0]);
                                    (o = i()) && l < t + e;) {
                                    var u = o.length();
                                    t > l ? n(o, t - l, Math.min(e, l + u - t)) : n(o, 0, Math.min(u, t + e - l)), l += u
                                }
                        }, t.prototype.map = function(t) {
                            return this.reduce(function(e, n) {
                                return e.push(t(n)), e
                            }, [])
                        }, t.prototype.reduce = function(t, e) {
                            for (var n, o = this.iterator(); n = o();) e = t(e, n);
                            return e
                        }, t
                    }()
                }, function(t, e, n) {
                    "use strict";
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(17),
                        l = n(1),
                        i = {
                            attributes: !0,
                            characterData: !0,
                            characterDataOldValue: !0,
                            childList: !0,
                            subtree: !0
                        };
                    e.default = function(t) {
                        function e(e) {
                            var n = t.call(this, e) || this;
                            return n.scroll = n, n.observer = new MutationObserver(function(t) {
                                n.update(t)
                            }), n.observer.observe(n.domNode, i), n.attach(), n
                        }
                        return o(e, t), e.prototype.detach = function() {
                            t.prototype.detach.call(this), this.observer.disconnect()
                        }, e.prototype.deleteAt = function(e, n) {
                            this.update(), 0 === e && n === this.length() ? this.children.forEach(function(t) {
                                t.remove()
                            }) : t.prototype.deleteAt.call(this, e, n)
                        }, e.prototype.formatAt = function(e, n, o, r) {
                            this.update(), t.prototype.formatAt.call(this, e, n, o, r)
                        }, e.prototype.insertAt = function(e, n, o) {
                            this.update(), t.prototype.insertAt.call(this, e, n, o)
                        }, e.prototype.optimize = function(e, n) {
                            var o = this;
                            void 0 === e && (e = []), void 0 === n && (n = {}), t.prototype.optimize.call(this, n);
                            for (var i = [].slice.call(this.observer.takeRecords()); i.length > 0;) e.push(i.pop());
                            for (var u = function(t, e) {
                                    void 0 === e && (e = !0), null != t && t !== o && null != t.domNode.parentNode && (null == t.domNode[l.DATA_KEY].mutations && (t.domNode[l.DATA_KEY].mutations = []), e && u(t.parent))
                                }, a = function(t) {
                                    null != t.domNode[l.DATA_KEY] && null != t.domNode[l.DATA_KEY].mutations && (t instanceof r.default && t.children.forEach(a), t.optimize(n))
                                }, s = e, c = 0; s.length > 0; c += 1) {
                                if (c >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
                                for (s.forEach(function(t) {
                                        var e = l.find(t.target, !0);
                                        null != e && (e.domNode === t.target && ("childList" === t.type ? (u(l.find(t.previousSibling, !1)), [].forEach.call(t.addedNodes, function(t) {
                                            var e = l.find(t, !1);
                                            u(e, !1), e instanceof r.default && e.children.forEach(function(t) {
                                                u(t, !1)
                                            })
                                        })) : "attributes" === t.type && u(e.prev)), u(e))
                                    }), this.children.forEach(a), i = (s = [].slice.call(this.observer.takeRecords())).slice(); i.length > 0;) e.push(i.pop())
                            }
                        }, e.prototype.update = function(e, n) {
                            var o = this;
                            void 0 === n && (n = {}), (e = e || this.observer.takeRecords()).map(function(t) {
                                var e = l.find(t.target, !0);
                                return null == e ? null : null == e.domNode[l.DATA_KEY].mutations ? (e.domNode[l.DATA_KEY].mutations = [t], e) : (e.domNode[l.DATA_KEY].mutations.push(t), null)
                            }).forEach(function(t) {
                                null != t && t !== o && null != t.domNode[l.DATA_KEY] && t.update(t.domNode[l.DATA_KEY].mutations || [], n)
                            }), null != this.domNode[l.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[l.DATA_KEY].mutations, n), this.optimize(e, n)
                        }, e.blotName = "scroll", e.defaultChild = "block", e.scope = l.Scope.BLOCK_BLOT, e.tagName = "DIV", e
                    }(r.default)
                }, function(t, e, n) {
                    "use strict";
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(18),
                        l = n(1);
                    e.default = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return o(e, t), e.formats = function(n) {
                            if (n.tagName !== e.tagName) return t.formats.call(this, n)
                        }, e.prototype.format = function(n, o) {
                            var l = this;
                            n !== this.statics.blotName || o ? t.prototype.format.call(this, n, o) : (this.children.forEach(function(t) {
                                t instanceof r.default || (t = t.wrap(e.blotName, !0)), l.attributes.copy(t)
                            }), this.unwrap())
                        }, e.prototype.formatAt = function(e, n, o, r) {
                            if (null != this.formats()[o] || l.query(o, l.Scope.ATTRIBUTE)) {
                                this.isolate(e, n).format(o, r)
                            } else t.prototype.formatAt.call(this, e, n, o, r)
                        }, e.prototype.optimize = function(n) {
                            t.prototype.optimize.call(this, n);
                            var o = this.formats();
                            if (0 === Object.keys(o).length) return this.unwrap();
                            var r = this.next;
                            r instanceof e && r.prev === this && function(t, e) {
                                if (Object.keys(t).length !== Object.keys(e).length) return !1;
                                for (var n in t)
                                    if (t[n] !== e[n]) return !1;
                                return !0
                            }(o, r.formats()) && (r.moveChildren(this), r.remove())
                        }, e.blotName = "inline", e.scope = l.Scope.INLINE_BLOT, e.tagName = "SPAN", e
                    }(r.default)
                }, function(t, e, n) {
                    "use strict";
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(18),
                        l = n(1);
                    e.default = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return o(e, t), e.formats = function(n) {
                            var o = l.query(e.blotName).tagName;
                            if (n.tagName !== o) return t.formats.call(this, n)
                        }, e.prototype.format = function(n, o) {
                            null != l.query(n, l.Scope.BLOCK) && (n !== this.statics.blotName || o ? t.prototype.format.call(this, n, o) : this.replaceWith(e.blotName))
                        }, e.prototype.formatAt = function(e, n, o, r) {
                            null != l.query(o, l.Scope.BLOCK) ? this.format(o, r) : t.prototype.formatAt.call(this, e, n, o, r)
                        }, e.prototype.insertAt = function(e, n, o) {
                            if (null == o || null != l.query(n, l.Scope.INLINE)) t.prototype.insertAt.call(this, e, n, o);
                            else {
                                var r = this.split(e),
                                    i = l.create(n, o);
                                r.parent.insertBefore(i, r)
                            }
                        }, e.prototype.update = function(e, n) {
                            navigator.userAgent.match(/Trident/) ? this.build() : t.prototype.update.call(this, e, n)
                        }, e.blotName = "block", e.scope = l.Scope.BLOCK_BLOT, e.tagName = "P", e
                    }(r.default)
                }, function(t, e, n) {
                    "use strict";
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(19);
                    e.default = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return o(e, t), e.formats = function(t) {}, e.prototype.format = function(e, n) {
                            t.prototype.formatAt.call(this, 0, this.length(), e, n)
                        }, e.prototype.formatAt = function(e, n, o, r) {
                            0 === e && n === this.length() ? this.format(o, r) : t.prototype.formatAt.call(this, e, n, o, r)
                        }, e.prototype.formats = function() {
                            return this.statics.formats(this.domNode)
                        }, e
                    }(r.default)
                }, function(t, e, n) {
                    "use strict";
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        };
                        return function(e, n) {
                            function o() {
                                this.constructor = e
                            }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(19),
                        l = n(1);
                    e.default = function(t) {
                        function e(e) {
                            var n = t.call(this, e) || this;
                            return n.text = n.statics.value(n.domNode), n
                        }
                        return o(e, t), e.create = function(t) {
                            return document.createTextNode(t)
                        }, e.value = function(t) {
                            var e = t.data;
                            return e.normalize && (e = e.normalize()), e
                        }, e.prototype.deleteAt = function(t, e) {
                            this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
                        }, e.prototype.index = function(t, e) {
                            return this.domNode === t ? e : -1
                        }, e.prototype.insertAt = function(e, n, o) {
                            null == o ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, o)
                        }, e.prototype.length = function() {
                            return this.text.length
                        }, e.prototype.optimize = function(n) {
                            t.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove())
                        }, e.prototype.position = function(t, e) {
                            return void 0 === e && (e = !1), [this.domNode, t]
                        }, e.prototype.split = function(t, e) {
                            if (void 0 === e && (e = !1), !e) {
                                if (0 === t) return this;
                                if (t === this.length()) return this.next
                            }
                            var n = l.create(this.domNode.splitText(t));
                            return this.parent.insertBefore(n, this.next), this.text = this.statics.value(this.domNode), n
                        }, e.prototype.update = function(t, e) {
                            var n = this;
                            t.some(function(t) {
                                return "characterData" === t.type && t.target === n.domNode
                            }) && (this.text = this.statics.value(this.domNode))
                        }, e.prototype.value = function() {
                            return this.text
                        }, e.blotName = "text", e.scope = l.Scope.INLINE_BLOT, e
                    }(r.default)
                }, function(t, e, n) {
                    "use strict";
                    var o = document.createElement("div");
                    if (o.classList.toggle("test-class", !1), o.classList.contains("test-class")) {
                        var r = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function(t, e) {
                            return arguments.length > 1 && !this.contains(t) == !e ? e : r.call(this, t)
                        }
                    }
                    String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
                        return e = e || 0, this.substr(e, t.length) === t
                    }), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
                        var n = this.toString();
                        ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length);
                        var o = n.indexOf(t, e -= t.length);
                        return -1 !== o && o === e
                    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
                        value: function(t) {
                            if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                            if ("function" != typeof t) throw new TypeError("predicate must be a function");
                            for (var e, n = Object(this), o = n.length >>> 0, r = arguments[1], l = 0; l < o; l++)
                                if (e = n[l], t.call(r, e, l, n)) return e
                        }
                    }), document.addEventListener("DOMContentLoaded", function() {
                        document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1)
                    })
                }, function(t, e) {
                    function n(t, e, f) {
                        if (t == e) return t ? [
                            [c, t]
                        ] : [];
                        (f < 0 || t.length < f) && (f = null);
                        var d = r(t, e),
                            h = t.substring(0, d);
                        d = l(t = t.substring(d), e = e.substring(d));
                        var p = t.substring(t.length - d),
                            y = function(t, e) {
                                var i;
                                if (!t) return [
                                    [s, e]
                                ];
                                if (!e) return [
                                    [a, t]
                                ];
                                var u = t.length > e.length ? t : e,
                                    f = t.length > e.length ? e : t,
                                    d = u.indexOf(f);
                                if (-1 != d) return i = [
                                    [s, u.substring(0, d)],
                                    [c, f],
                                    [s, u.substring(d + f.length)]
                                ], t.length > e.length && (i[0][0] = i[2][0] = a), i;
                                if (1 == f.length) return [
                                    [a, t],
                                    [s, e]
                                ];
                                var h = function(t, e) {
                                    function n(t, e, n) {
                                        for (var o, i, u, a, s = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; - 1 != (c = e.indexOf(s, c + 1));) {
                                            var d = r(t.substring(n), e.substring(c)),
                                                h = l(t.substring(0, n), e.substring(0, c));
                                            f.length < h + d && (f = e.substring(c - h, c) + e.substring(c, c + d), o = t.substring(0, n - h), i = t.substring(n + d), u = e.substring(0, c - h), a = e.substring(c + d))
                                        }
                                        return 2 * f.length >= t.length ? [o, i, u, a, f] : null
                                    }
                                    var o = t.length > e.length ? t : e,
                                        i = t.length > e.length ? e : t;
                                    if (o.length < 4 || 2 * i.length < o.length) return null;
                                    var u, a = n(o, i, Math.ceil(o.length / 4)),
                                        s = n(o, i, Math.ceil(o.length / 2));
                                    if (!a && !s) return null;
                                    u = s ? a && a[4].length > s[4].length ? a : s : a;
                                    var c, f, d, h;
                                    t.length > e.length ? (c = u[0], f = u[1], d = u[2], h = u[3]) : (d = u[0], h = u[1], c = u[2], f = u[3]);
                                    return [c, f, d, h, u[4]]
                                }(t, e);
                                if (h) {
                                    var p = h[0],
                                        y = h[1],
                                        v = h[2],
                                        b = h[3],
                                        m = h[4],
                                        g = n(p, v),
                                        _ = n(y, b);
                                    return g.concat([
                                        [c, m]
                                    ], _)
                                }
                                return function(t, e) {
                                    for (var n = t.length, r = e.length, l = Math.ceil((n + r) / 2), i = l, u = 2 * l, c = new Array(u), f = new Array(u), d = 0; d < u; d++) c[d] = -1, f[d] = -1;
                                    c[i + 1] = 0, f[i + 1] = 0;
                                    for (var h = n - r, p = h % 2 != 0, y = 0, v = 0, b = 0, m = 0, g = 0; g < l; g++) {
                                        for (var _ = -g + y; _ <= g - v; _ += 2) {
                                            for (var O = i + _, k = (j = _ == -g || _ != g && c[O - 1] < c[O + 1] ? c[O + 1] : c[O - 1] + 1) - _; j < n && k < r && t.charAt(j) == e.charAt(k);) j++, k++;
                                            if (c[O] = j, j > n) v += 2;
                                            else if (k > r) y += 2;
                                            else if (p) {
                                                var x = i + h - _;
                                                if (x >= 0 && x < u && -1 != f[x]) {
                                                    var E = n - f[x];
                                                    if (j >= E) return o(t, e, j, k)
                                                }
                                            }
                                        }
                                        for (var w = -g + b; w <= g - m; w += 2) {
                                            for (var x = i + w, A = (E = w == -g || w != g && f[x - 1] < f[x + 1] ? f[x + 1] : f[x - 1] + 1) - w; E < n && A < r && t.charAt(n - E - 1) == e.charAt(r - A - 1);) E++, A++;
                                            if (f[x] = E, E > n) m += 2;
                                            else if (A > r) b += 2;
                                            else if (!p) {
                                                var O = i + h - w;
                                                if (O >= 0 && O < u && -1 != c[O]) {
                                                    var j = c[O],
                                                        k = i + j - O;
                                                    if (E = n - E, j >= E) return o(t, e, j, k)
                                                }
                                            }
                                        }
                                    }
                                    return [
                                        [a, t],
                                        [s, e]
                                    ]
                                }(t, e)
                            }(t = t.substring(0, t.length - d), e = e.substring(0, e.length - d));
                        return h && y.unshift([c, h]), p && y.push([c, p]), i(y), null != f && (y = function(t, e) {
                            var n = function(t, e) {
                                    if (0 === e) return [c, t];
                                    for (var n = 0, o = 0; o < t.length; o++) {
                                        var r = t[o];
                                        if (r[0] === a || r[0] === c) {
                                            var l = n + r[1].length;
                                            if (e === l) return [o + 1, t];
                                            if (e < l) {
                                                t = t.slice();
                                                var i = e - n,
                                                    u = [r[0], r[1].slice(0, i)],
                                                    s = [r[0], r[1].slice(i)];
                                                return t.splice(o, 1, u, s), [o + 1, t]
                                            }
                                            n = l
                                        }
                                    }
                                    throw new Error("cursor_pos is out of bounds!")
                                }(t, e),
                                o = n[1],
                                r = n[0],
                                l = o[r],
                                i = o[r + 1];
                            if (null == l) return t;
                            if (l[0] !== c) return t;
                            if (null != i && l[1] + i[1] === i[1] + l[1]) return o.splice(r, 2, i, l), u(o, r, 2);
                            if (null != i && 0 === i[1].indexOf(l[1])) {
                                o.splice(r, 2, [i[0], l[1]], [0, l[1]]);
                                var s = i[1].slice(l[1].length);
                                return s.length > 0 && o.splice(r + 2, 0, [i[0], s]), u(o, r, 3)
                            }
                            return t
                        }(y, f)), y = function(t) {
                            for (var e = !1, n = function(t) {
                                    return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343
                                }, o = function(t) {
                                    return t.charCodeAt(t.length - 1) >= 55296 && t.charCodeAt(t.length - 1) <= 56319
                                }, r = 2; r < t.length; r += 1) t[r - 2][0] === c && o(t[r - 2][1]) && t[r - 1][0] === a && n(t[r - 1][1]) && t[r][0] === s && n(t[r][1]) && (e = !0, t[r - 1][1] = t[r - 2][1].slice(-1) + t[r - 1][1], t[r][1] = t[r - 2][1].slice(-1) + t[r][1], t[r - 2][1] = t[r - 2][1].slice(0, -1));
                            if (!e) return t;
                            for (var l = [], r = 0; r < t.length; r += 1) t[r][1].length > 0 && l.push(t[r]);
                            return l
                        }(y)
                    }

                    function o(t, e, o, r) {
                        var l = t.substring(0, o),
                            i = e.substring(0, r),
                            u = t.substring(o),
                            a = e.substring(r),
                            s = n(l, i),
                            c = n(u, a);
                        return s.concat(c)
                    }

                    function r(t, e) {
                        if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                        for (var n = 0, o = Math.min(t.length, e.length), r = o, l = 0; n < r;) t.substring(l, r) == e.substring(l, r) ? l = n = r : o = r, r = Math.floor((o - n) / 2 + n);
                        return r
                    }

                    function l(t, e) {
                        if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
                        for (var n = 0, o = Math.min(t.length, e.length), r = o, l = 0; n < r;) t.substring(t.length - r, t.length - l) == e.substring(e.length - r, e.length - l) ? l = n = r : o = r, r = Math.floor((o - n) / 2 + n);
                        return r
                    }

                    function i(t) {
                        t.push([c, ""]);
                        for (var e, n = 0, o = 0, u = 0, f = "", d = ""; n < t.length;) switch (t[n][0]) {
                            case s:
                                u++, d += t[n][1], n++;
                                break;
                            case a:
                                o++, f += t[n][1], n++;
                                break;
                            case c:
                                o + u > 1 ? (0 !== o && 0 !== u && (0 !== (e = r(d, f)) && (n - o - u > 0 && t[n - o - u - 1][0] == c ? t[n - o - u - 1][1] += d.substring(0, e) : (t.splice(0, 0, [c, d.substring(0, e)]), n++), d = d.substring(e), f = f.substring(e)), 0 !== (e = l(d, f)) && (t[n][1] = d.substring(d.length - e) + t[n][1], d = d.substring(0, d.length - e), f = f.substring(0, f.length - e))), 0 === o ? t.splice(n - u, o + u, [s, d]) : 0 === u ? t.splice(n - o, o + u, [a, f]) : t.splice(n - o - u, o + u, [a, f], [s, d]), n = n - o - u + (o ? 1 : 0) + (u ? 1 : 0) + 1) : 0 !== n && t[n - 1][0] == c ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++, u = 0, o = 0, f = "", d = ""
                        }
                        "" === t[t.length - 1][1] && t.pop();
                        var h = !1;
                        for (n = 1; n < t.length - 1;) t[n - 1][0] == c && t[n + 1][0] == c && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), h = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), h = !0)), n++;
                        h && i(t)
                    }

                    function u(t, e, n) {
                        for (var o = e + n - 1; o >= 0 && o >= e - 1; o--)
                            if (o + 1 < t.length) {
                                var r = t[o],
                                    l = t[o + 1];
                                r[0] === l[1] && t.splice(o, 2, [r[0], r[1] + l[1]])
                            } return t
                    }
                    var a = -1,
                        s = 1,
                        c = 0,
                        f = n;
                    f.INSERT = s, f.DELETE = a, f.EQUAL = c, t.exports = f
                }, function(t, e) {
                    function n(t) {
                        var e = [];
                        for (var n in t) e.push(n);
                        return e
                    }(t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
                }, function(t, e) {
                    function n(t) {
                        return "[object Arguments]" == Object.prototype.toString.call(t)
                    }

                    function o(t) {
                        return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
                    }
                    var r = "[object Arguments]" == function() {
                        return Object.prototype.toString.call(arguments)
                    }();
                    (e = t.exports = r ? n : o).supported = n, e.unsupported = o
                }, function(t, e) {
                    "use strict";

                    function n() {}

                    function o(t, e, n) {
                        this.fn = t, this.context = e, this.once = n || !1
                    }

                    function r() {
                        this._events = new n, this._eventsCount = 0
                    }
                    var l = Object.prototype.hasOwnProperty,
                        i = "~";
                    Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (i = !1)), r.prototype.eventNames = function() {
                        var t, e, n = [];
                        if (0 === this._eventsCount) return n;
                        for (e in t = this._events) l.call(t, e) && n.push(i ? e.slice(1) : e);
                        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
                    }, r.prototype.listeners = function(t, e) {
                        var n = this._events[i ? i + t : t];
                        if (e) return !!n;
                        if (!n) return [];
                        if (n.fn) return [n.fn];
                        for (var o = 0, r = n.length, l = new Array(r); o < r; o++) l[o] = n[o].fn;
                        return l
                    }, r.prototype.emit = function(t, e, n, o, r, l) {
                        var u = i ? i + t : t;
                        if (!this._events[u]) return !1;
                        var a, s, c = this._events[u],
                            f = arguments.length;
                        if (c.fn) {
                            switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
                                case 1:
                                    return c.fn.call(c.context), !0;
                                case 2:
                                    return c.fn.call(c.context, e), !0;
                                case 3:
                                    return c.fn.call(c.context, e, n), !0;
                                case 4:
                                    return c.fn.call(c.context, e, n, o), !0;
                                case 5:
                                    return c.fn.call(c.context, e, n, o, r), !0;
                                case 6:
                                    return c.fn.call(c.context, e, n, o, r, l), !0
                            }
                            for (s = 1, a = new Array(f - 1); s < f; s++) a[s - 1] = arguments[s];
                            c.fn.apply(c.context, a)
                        } else {
                            var d, h = c.length;
                            for (s = 0; s < h; s++) switch (c[s].once && this.removeListener(t, c[s].fn, void 0, !0), f) {
                                case 1:
                                    c[s].fn.call(c[s].context);
                                    break;
                                case 2:
                                    c[s].fn.call(c[s].context, e);
                                    break;
                                case 3:
                                    c[s].fn.call(c[s].context, e, n);
                                    break;
                                case 4:
                                    c[s].fn.call(c[s].context, e, n, o);
                                    break;
                                default:
                                    if (!a)
                                        for (d = 1, a = new Array(f - 1); d < f; d++) a[d - 1] = arguments[d];
                                    c[s].fn.apply(c[s].context, a)
                            }
                        }
                        return !0
                    }, r.prototype.on = function(t, e, n) {
                        var r = new o(e, n || this),
                            l = i ? i + t : t;
                        return this._events[l] ? this._events[l].fn ? this._events[l] = [this._events[l], r] : this._events[l].push(r) : (this._events[l] = r, this._eventsCount++), this
                    }, r.prototype.once = function(t, e, n) {
                        var r = new o(e, n || this, !0),
                            l = i ? i + t : t;
                        return this._events[l] ? this._events[l].fn ? this._events[l] = [this._events[l], r] : this._events[l].push(r) : (this._events[l] = r, this._eventsCount++), this
                    }, r.prototype.removeListener = function(t, e, o, r) {
                        var l = i ? i + t : t;
                        if (!this._events[l]) return this;
                        if (!e) return 0 == --this._eventsCount ? this._events = new n : delete this._events[l], this;
                        var u = this._events[l];
                        if (u.fn) u.fn !== e || r && !u.once || o && u.context !== o || (0 == --this._eventsCount ? this._events = new n : delete this._events[l]);
                        else {
                            for (var a = 0, s = [], c = u.length; a < c; a++)(u[a].fn !== e || r && !u[a].once || o && u[a].context !== o) && s.push(u[a]);
                            s.length ? this._events[l] = 1 === s.length ? s[0] : s : 0 == --this._eventsCount ? this._events = new n : delete this._events[l]
                        }
                        return this
                    }, r.prototype.removeAllListeners = function(t) {
                        var e;
                        return t ? this._events[e = i ? i + t : t] && (0 == --this._eventsCount ? this._events = new n : delete this._events[e]) : (this._events = new n, this._eventsCount = 0), this
                    }, r.prototype.off = r.prototype.removeListener, r.prototype.addListener = r.prototype.on, r.prototype.setMaxListeners = function() {
                        return this
                    }, r.prefixed = i, r.EventEmitter = r, void 0 !== t && (t.exports = r)
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function l(t, e, n) {
                        return "object" === (void 0 === e ? "undefined" : v(e)) ? Object.keys(e).reduce(function(t, n) {
                            return l(t, n, e[n])
                        }, t) : t.reduce(function(t, o) {
                            return o.attributes && o.attributes[e] ? t.push(o) : t.insert(o.insert, (0, g.default)({}, r({}, e, n), o.attributes))
                        }, new _.default)
                    }

                    function i(t) {
                        if (t.nodeType !== Node.ELEMENT_NODE) return {};
                        return t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t))
                    }

                    function u(t, e) {
                        for (var n = "", o = t.ops.length - 1; o >= 0 && n.length < e.length; --o) {
                            var r = t.ops[o];
                            if ("string" != typeof r.insert) break;
                            n = r.insert + n
                        }
                        return n.slice(-1 * e.length) === e
                    }

                    function a(t) {
                        if (0 === t.childNodes.length) return !1;
                        var e = i(t);
                        return ["block", "list-item"].indexOf(e.display) > -1
                    }

                    function s(t, e, n) {
                        return t.nodeType === t.TEXT_NODE ? n.reduce(function(e, n) {
                            return n(t, e)
                        }, new _.default) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], function(o, r) {
                            var l = s(r, e, n);
                            return r.nodeType === t.ELEMENT_NODE && (l = e.reduce(function(t, e) {
                                return e(r, t)
                            }, l), l = (r[C] || []).reduce(function(t, e) {
                                return e(r, t)
                            }, l)), o.concat(l)
                        }, new _.default) : new _.default
                    }

                    function c(t, e, n) {
                        return l(n, t, !0)
                    }

                    function f(t, e) {
                        var n = O.default.Attributor.Attribute.keys(t),
                            o = O.default.Attributor.Class.keys(t),
                            r = O.default.Attributor.Style.keys(t),
                            i = {};
                        return n.concat(o).concat(r).forEach(function(e) {
                            var n = O.default.query(e, O.default.Scope.ATTRIBUTE);
                            null != n && (i[n.attrName] = n.value(t), i[n.attrName]) || (null == (n = I[e]) || n.attrName !== e && n.keyName !== e || (i[n.attrName] = n.value(t) || void 0), null == (n = M[e]) || n.attrName !== e && n.keyName !== e || (i[(n = M[e]).attrName] = n.value(t) || void 0))
                        }), Object.keys(i).length > 0 && (e = l(e, i)), e
                    }

                    function d(t, e) {
                        var n = O.default.query(t);
                        if (null == n) return e;
                        if (n.prototype instanceof O.default.Embed) {
                            var o = {},
                                r = n.value(t);
                            null != r && (o[n.blotName] = r, e = (new _.default).insert(o, n.formats(t)))
                        } else "function" == typeof n.formats && (e = l(e, n.blotName, n.formats(t)));
                        return e
                    }

                    function h(t, e) {
                        return u(e, "\n") || (a(t) || e.length() > 0 && t.nextSibling && a(t.nextSibling)) && e.insert("\n"), e
                    }

                    function p(t, e) {
                        if (a(t) && null != t.nextElementSibling && !u(e, "\n\n")) {
                            var n = t.offsetHeight + parseFloat(i(t).marginTop) + parseFloat(i(t).marginBottom);
                            t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n")
                        }
                        return e
                    }

                    function y(t, e) {
                        var n = t.data;
                        if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
                        if (0 === n.trim().length && t.parentNode.classList.contains("ql-clipboard")) return e;
                        if (!i(t.parentNode).whiteSpace.startsWith("pre")) {
                            var o = function(t, e) {
                                return (e = e.replace(/[^\u00a0]/g, "")).length < 1 && t ? " " : e
                            };
                            n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, o.bind(o, !0)), (null == t.previousSibling && a(t.parentNode) || null != t.previousSibling && a(t.previousSibling)) && (n = n.replace(/^\s+/, o.bind(o, !1))), (null == t.nextSibling && a(t.parentNode) || null != t.nextSibling && a(t.nextSibling)) && (n = n.replace(/\s+$/, o.bind(o, !1)))
                        }
                        return e.insert(n)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;
                    var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        b = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        m = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        g = o(n(3)),
                        _ = o(n(2)),
                        O = o(n(0)),
                        k = o(n(5)),
                        x = o(n(10)),
                        E = o(n(9)),
                        w = n(36),
                        A = n(37),
                        j = o(n(13)),
                        N = n(26),
                        T = n(38),
                        P = n(39),
                        S = n(40),
                        q = (0, x.default)("quill:clipboard"),
                        C = "__ql-matcher",
                        L = [
                            [Node.TEXT_NODE, y],
                            [Node.TEXT_NODE, h],
                            ["br", function(t, e) {
                                return u(e, "\n") || e.insert("\n"), e
                            }],
                            [Node.ELEMENT_NODE, h],
                            [Node.ELEMENT_NODE, d],
                            [Node.ELEMENT_NODE, p],
                            [Node.ELEMENT_NODE, f],
                            [Node.ELEMENT_NODE, function(t, e) {
                                var n = {},
                                    o = t.style || {};
                                return o.fontStyle && "italic" === i(t).fontStyle && (n.italic = !0), o.fontWeight && (i(t).fontWeight.startsWith("bold") || parseInt(i(t).fontWeight) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (e = l(e, n)), parseFloat(o.textIndent || 0) > 0 && (e = (new _.default).insert("\t").concat(e)), e
                            }],
                            ["li", function(t, e) {
                                var n = O.default.query(t);
                                if (null == n || "list-item" !== n.blotName || !u(e, "\n")) return e;
                                for (var o = -1, r = t.parentNode; !r.classList.contains("ql-clipboard");) "list" === (O.default.query(r) || {}).blotName && (o += 1), r = r.parentNode;
                                return o <= 0 ? e : e.compose((new _.default).retain(e.length() - 1).retain(1, {
                                    indent: o
                                }))
                            }],
                            ["b", c.bind(c, "bold")],
                            ["i", c.bind(c, "italic")],
                            ["style", function() {
                                return new _.default
                            }]
                        ],
                        I = [w.AlignAttribute, T.DirectionAttribute].reduce(function(t, e) {
                            return t[e.keyName] = e, t
                        }, {}),
                        M = [w.AlignStyle, A.BackgroundStyle, N.ColorStyle, T.DirectionStyle, P.FontStyle, S.SizeStyle].reduce(function(t, e) {
                            return t[e.keyName] = e, t
                        }, {}),
                        R = function(t) {
                            function e(t, n) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var o = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return o.quill.root.addEventListener("paste", o.onPaste.bind(o)), o.container = o.quill.addContainer("ql-clipboard"), o.container.setAttribute("contenteditable", !0), o.container.setAttribute("tabindex", -1), o.matchers = [], L.concat(o.options.matchers).forEach(function(t) {
                                    var e = b(t, 2),
                                        r = e[1];
                                    (n.matchVisual || r !== p) && o.addMatcher(e[0], r)
                                }), o
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, E.default), m(e, [{
                                key: "addMatcher",
                                value: function(t, e) {
                                    this.matchers.push([t, e])
                                }
                            }, {
                                key: "convert",
                                value: function(t) {
                                    if ("string" == typeof t) return this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><"), this.convert();
                                    var e = this.quill.getFormat(this.quill.selection.savedRange.index);
                                    if (e[j.default.blotName]) {
                                        var n = this.container.innerText;
                                        return this.container.innerHTML = "", (new _.default).insert(n, r({}, j.default.blotName, e[j.default.blotName]))
                                    }
                                    var o = this.prepareMatching(),
                                        l = b(o, 2),
                                        i = s(this.container, l[0], l[1]);
                                    return u(i, "\n") && null == i.ops[i.ops.length - 1].attributes && (i = i.compose((new _.default).retain(i.length() - 1).delete(1))), q.log("convert", this.container.innerHTML, i), this.container.innerHTML = "", i
                                }
                            }, {
                                key: "dangerouslyPasteHTML",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k.default.sources.API;
                                    if ("string" == typeof t) this.quill.setContents(this.convert(t), e), this.quill.setSelection(0, k.default.sources.SILENT);
                                    else {
                                        var o = this.convert(e);
                                        this.quill.updateContents((new _.default).retain(t).concat(o), n), this.quill.setSelection(t + o.length(), k.default.sources.SILENT)
                                    }
                                }
                            }, {
                                key: "onPaste",
                                value: function(t) {
                                    var e = this;
                                    if (!t.defaultPrevented && this.quill.isEnabled()) {
                                        var n = this.quill.getSelection(),
                                            o = (new _.default).retain(n.index),
                                            r = this.quill.scrollingContainer.scrollTop;
                                        this.container.focus(), this.quill.selection.update(k.default.sources.SILENT), setTimeout(function() {
                                            o = o.concat(e.convert()).delete(n.length), e.quill.updateContents(o, k.default.sources.USER), e.quill.setSelection(o.length() - n.length, k.default.sources.SILENT), e.quill.scrollingContainer.scrollTop = r, e.quill.focus()
                                        }, 1)
                                    }
                                }
                            }, {
                                key: "prepareMatching",
                                value: function() {
                                    var t = this,
                                        e = [],
                                        n = [];
                                    return this.matchers.forEach(function(o) {
                                        var r = b(o, 2),
                                            l = r[0],
                                            i = r[1];
                                        switch (l) {
                                            case Node.TEXT_NODE:
                                                n.push(i);
                                                break;
                                            case Node.ELEMENT_NODE:
                                                e.push(i);
                                                break;
                                            default:
                                                [].forEach.call(t.container.querySelectorAll(l), function(t) {
                                                    t[C] = t[C] || [], t[C].push(i)
                                                })
                                        }
                                    }), [e, n]
                                }
                            }]), e
                        }();
                    R.DEFAULTS = {
                        matchers: [],
                        matchVisual: !0
                    }, e.default = R, e.matchAttributor = f, e.matchBlot = d, e.matchNewline = h, e.matchSpacing = p, e.matchText = y
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        l = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(6)),
                        i = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, l.default), o(e, [{
                                key: "optimize",
                                value: function(t) {
                                    r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
                                }
                            }], [{
                                key: "create",
                                value: function() {
                                    return r(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this)
                                }
                            }, {
                                key: "formats",
                                value: function() {
                                    return !0
                                }
                            }]), e
                        }();
                    i.blotName = "bold", i.tagName = ["STRONG", "B"], e.default = i
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function l(t, e, n) {
                        var o = document.createElement("button");
                        o.setAttribute("type", "button"), o.classList.add("ql-" + e), null != n && (o.value = n), t.appendChild(o)
                    }

                    function i(t, e) {
                        Array.isArray(e[0]) || (e = [e]), e.forEach(function(e) {
                            var n = document.createElement("span");
                            n.classList.add("ql-formats"), e.forEach(function(t) {
                                if ("string" == typeof t) l(n, t);
                                else {
                                    var e = Object.keys(t)[0],
                                        o = t[e];
                                    Array.isArray(o) ? function(t, e, n) {
                                        var o = document.createElement("select");
                                        o.classList.add("ql-" + e), n.forEach(function(t) {
                                            var e = document.createElement("option");
                                            !1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), o.appendChild(e)
                                        }), t.appendChild(o)
                                    }(n, e, o) : l(n, e, o)
                                }
                            }), t.appendChild(n)
                        })
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.addControls = e.default = void 0;
                    var u = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        s = o(n(2)),
                        c = o(n(0)),
                        f = o(n(5)),
                        d = o(n(10)),
                        h = o(n(9)),
                        p = (0, d.default)("quill:toolbar"),
                        y = function(t) {
                            function e(t, n) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var o = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                if (Array.isArray(o.options.container)) {
                                    var l = document.createElement("div");
                                    i(l, o.options.container), t.container.parentNode.insertBefore(l, t.container), o.container = l
                                } else o.container = "string" == typeof o.options.container ? document.querySelector(o.options.container) : o.options.container;
                                if (!(o.container instanceof HTMLElement)) {
                                    var a;
                                    return a = p.error("Container required for toolbar", o.options), r(o, a)
                                }
                                return o.container.classList.add("ql-toolbar"), o.controls = [], o.handlers = {}, Object.keys(o.options.handlers).forEach(function(t) {
                                    o.addHandler(t, o.options.handlers[t])
                                }), [].forEach.call(o.container.querySelectorAll("button, select"), function(t) {
                                    o.attach(t)
                                }), o.quill.on(f.default.events.EDITOR_CHANGE, function(t, e) {
                                    t === f.default.events.SELECTION_CHANGE && o.update(e)
                                }), o.quill.on(f.default.events.SCROLL_OPTIMIZE, function() {
                                    var t = o.quill.selection.getRange(),
                                        e = u(t, 1);
                                    o.update(e[0])
                                }), o
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, h.default), a(e, [{
                                key: "addHandler",
                                value: function(t, e) {
                                    this.handlers[t] = e
                                }
                            }, {
                                key: "attach",
                                value: function(t) {
                                    var e = this,
                                        n = [].find.call(t.classList, function(t) {
                                            return 0 === t.indexOf("ql-")
                                        });
                                    if (n) {
                                        if (n = n.slice("ql-".length), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null == this.handlers[n]) {
                                            if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) return void p.warn("ignoring attaching to disabled format", n, t);
                                            if (null == c.default.query(n)) return void p.warn("ignoring attaching to nonexistent format", n, t)
                                        }
                                        t.addEventListener("SELECT" === t.tagName ? "change" : "click", function(o) {
                                            var r = void 0;
                                            if ("SELECT" === t.tagName) {
                                                if (t.selectedIndex < 0) return;
                                                var l = t.options[t.selectedIndex];
                                                r = !l.hasAttribute("selected") && (l.value || !1)
                                            } else r = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")), o.preventDefault();
                                            e.quill.focus();
                                            var i = e.quill.selection.getRange(),
                                                a = u(i, 1)[0];
                                            if (null != e.handlers[n]) e.handlers[n].call(e, r);
                                            else if (c.default.query(n).prototype instanceof c.default.Embed) {
                                                if (!(r = prompt("Enter " + n))) return;
                                                e.quill.updateContents((new s.default).retain(a.index).delete(a.length).insert(function(t, e, n) {
                                                    return e in t ? Object.defineProperty(t, e, {
                                                        value: n,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    }) : t[e] = n, t
                                                }({}, n, r)), f.default.sources.USER)
                                            } else e.quill.format(n, r, f.default.sources.USER);
                                            e.update(a)
                                        }), this.controls.push([n, t])
                                    }
                                }
                            }, {
                                key: "update",
                                value: function(t) {
                                    var e = null == t ? {} : this.quill.getFormat(t);
                                    this.controls.forEach(function(n) {
                                        var o = u(n, 2),
                                            r = o[0],
                                            l = o[1];
                                        if ("SELECT" === l.tagName) {
                                            var i = void 0;
                                            if (null == t) i = null;
                                            else if (null == e[r]) i = l.querySelector("option[selected]");
                                            else if (!Array.isArray(e[r])) {
                                                var a = e[r];
                                                "string" == typeof a && (a = a.replace(/\"/g, '\\"')), i = l.querySelector('option[value="' + a + '"]')
                                            }
                                            null == i ? (l.value = "", l.selectedIndex = -1) : i.selected = !0
                                        } else if (null == t) l.classList.remove("ql-active");
                                        else if (l.hasAttribute("value")) {
                                            var s = e[r] === l.getAttribute("value") || null != e[r] && e[r].toString() === l.getAttribute("value") || null == e[r] && !l.getAttribute("value");
                                            l.classList.toggle("ql-active", s)
                                        } else l.classList.toggle("ql-active", null != e[r])
                                    })
                                }
                            }]), e
                        }();
                    y.DEFAULTS = {}, y.DEFAULTS = {
                        container: null,
                        handlers: {
                            clean: function() {
                                var t = this,
                                    e = this.quill.getSelection();
                                if (null != e)
                                    if (0 == e.length) {
                                        var n = this.quill.getFormat();
                                        Object.keys(n).forEach(function(e) {
                                            null != c.default.query(e, c.default.Scope.INLINE) && t.quill.format(e, !1)
                                        })
                                    } else this.quill.removeFormat(e, f.default.sources.USER)
                            },
                            direction: function(t) {
                                var e = this.quill.getFormat().align;
                                "rtl" === t && null == e ? this.quill.format("align", "right", f.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, f.default.sources.USER), this.quill.format("direction", t, f.default.sources.USER)
                            },
                            indent: function(t) {
                                var e = this.quill.getSelection(),
                                    n = this.quill.getFormat(e),
                                    o = parseInt(n.indent || 0);
                                if ("+1" === t || "-1" === t) {
                                    var r = "+1" === t ? 1 : -1;
                                    "rtl" === n.direction && (r *= -1), this.quill.format("indent", o + r, f.default.sources.USER)
                                }
                            },
                            link: function(t) {
                                !0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, f.default.sources.USER)
                            },
                            list: function(t) {
                                var e = this.quill.getSelection(),
                                    n = this.quill.getFormat(e);
                                this.quill.format("list", "check" === t ? "checked" !== n.list && "unchecked" !== n.list && "unchecked" : t, f.default.sources.USER)
                            }
                        }
                    }, e.default = y, e.addControls = i
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        l = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(28)),
                        i = function(t) {
                            function e(t, n) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var o = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return o.label.innerHTML = n, o.container.classList.add("ql-color-picker"), [].slice.call(o.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(t) {
                                    t.classList.add("ql-primary")
                                }), o
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, l.default), o(e, [{
                                key: "buildItem",
                                value: function(t) {
                                    var n = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(this, t);
                                    return n.style.backgroundColor = t.getAttribute("value") || "", n
                                }
                            }, {
                                key: "selectItem",
                                value: function(t, n) {
                                    r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n);
                                    var o = this.label.querySelector(".ql-color-label"),
                                        l = t ? t.getAttribute("data-value") || "" : "";
                                    o && ("line" === o.tagName ? o.style.stroke = l : o.style.fill = l)
                                }
                            }]), e
                        }();
                    e.default = i
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(28)),
                        l = function(t) {
                            function e(t, n) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e);
                                var o = function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return o.container.classList.add("ql-icon-picker"), [].forEach.call(o.container.querySelectorAll(".ql-picker-item"), function(t) {
                                    t.innerHTML = n[t.getAttribute("data-value") || ""]
                                }), o.defaultItem = o.container.querySelector(".ql-selected"), o.selectItem(o.defaultItem), o
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, r.default), o(e, [{
                                key: "selectItem",
                                value: function(t, n) {
                                    (function t(e, n, o) {
                                        null === e && (e = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === r) {
                                            var l = Object.getPrototypeOf(e);
                                            return null === l ? void 0 : t(l, n, o)
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        if (void 0 !== i) return i.call(o)
                                    })(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n), this.label.innerHTML = (t = t || this.defaultItem).innerHTML
                                }
                            }]), e
                        }();
                    e.default = l
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                            }
                        }
                        return function(e, n, o) {
                            return n && t(e.prototype, n), o && t(e, o), e
                        }
                    }();
                    e.default = function() {
                        function t(e, n) {
                            var o = this;
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.quill = e, this.boundsContainer = n || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
                                o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px"
                            }), this.hide()
                        }
                        return o(t, [{
                            key: "hide",
                            value: function() {
                                this.root.classList.add("ql-hidden")
                            }
                        }, {
                            key: "position",
                            value: function(t) {
                                var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
                                    n = t.bottom + this.quill.root.scrollTop;
                                this.root.style.left = e + "px", this.root.style.top = n + "px", this.root.classList.remove("ql-flip");
                                var o = this.boundsContainer.getBoundingClientRect(),
                                    r = this.root.getBoundingClientRect(),
                                    l = 0;
                                if (r.right > o.right && (this.root.style.left = e + (l = o.right - r.right) + "px"), r.left < o.left && (this.root.style.left = e + (l = o.left - r.left) + "px"), r.bottom > o.bottom) {
                                    this.root.style.top = n - (t.bottom - t.top + (r.bottom - r.top)) + "px", this.root.classList.add("ql-flip")
                                }
                                return l
                            }
                        }, {
                            key: "show",
                            value: function() {
                                this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden")
                            }
                        }]), t
                    }()
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var u = function() {
                            return function(t, e) {
                                if (Array.isArray(t)) return t;
                                if (Symbol.iterator in Object(t)) return function(t, e) {
                                    var n = [],
                                        o = !0,
                                        r = !1,
                                        l = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); o = !0);
                                    } catch (t) {
                                        r = !0, l = t
                                    } finally {
                                        try {
                                            !o && u.return && u.return()
                                        } finally {
                                            if (r) throw l
                                        }
                                    }
                                    return n
                                }(t, e);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        a = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        s = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        c = o(n(3)),
                        f = o(n(8)),
                        d = n(43),
                        h = o(d),
                        p = o(n(27)),
                        y = n(15),
                        v = o(n(41)),
                        b = [
                            [{
                                header: ["1", "2", "3", !1]
                            }],
                            ["bold", "italic", "underline", "link"],
                            [{
                                list: "ordered"
                            }, {
                                list: "bullet"
                            }],
                            ["clean"]
                        ],
                        m = function(t) {
                            function e(t, n) {
                                r(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = b);
                                var o = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return o.quill.container.classList.add("ql-snow"), o
                            }
                            return i(e, h.default), s(e, [{
                                key: "extendToolbar",
                                value: function(t) {
                                    t.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), v.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), v.default), this.tooltip = new g(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
                                        key: "K",
                                        shortKey: !0
                                    }, function(e, n) {
                                        t.handlers.link.call(t, !n.format.link)
                                    })
                                }
                            }]), e
                        }();
                    m.DEFAULTS = (0, c.default)(!0, {}, h.default.DEFAULTS, {
                        modules: {
                            toolbar: {
                                handlers: {
                                    link: function(t) {
                                        if (t) {
                                            var e = this.quill.getSelection();
                                            if (null == e || 0 == e.length) return;
                                            var n = this.quill.getText(e);
                                            /^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n);
                                            this.quill.theme.tooltip.edit("link", n)
                                        } else this.quill.format("link", !1)
                                    }
                                }
                            }
                        }
                    });
                    var g = function(t) {
                        function e(t, n) {
                            r(this, e);
                            var o = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                            return o.preview = o.root.querySelector("a.ql-preview"), o
                        }
                        return i(e, d.BaseTooltip), s(e, [{
                            key: "listen",
                            value: function() {
                                var t = this;
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(e) {
                                    t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent), e.preventDefault()
                                }), this.root.querySelector("a.ql-remove").addEventListener("click", function(e) {
                                    if (null != t.linkRange) {
                                        var n = t.linkRange;
                                        t.restoreFocus(), t.quill.formatText(n, "link", !1, f.default.sources.USER), delete t.linkRange
                                    }
                                    e.preventDefault(), t.hide()
                                }), this.quill.on(f.default.events.SELECTION_CHANGE, function(e, n, o) {
                                    if (null != e) {
                                        if (0 === e.length && o === f.default.sources.USER) {
                                            var r = t.quill.scroll.descendant(p.default, e.index),
                                                l = u(r, 2),
                                                i = l[0];
                                            if (null != i) {
                                                t.linkRange = new y.Range(e.index - l[1], i.length());
                                                var a = p.default.formats(i.domNode);
                                                return t.preview.textContent = a, t.preview.setAttribute("href", a), t.show(), void t.position(t.quill.getBounds(t.linkRange))
                                            }
                                        } else delete t.linkRange;
                                        t.hide()
                                    }
                                })
                            }
                        }, {
                            key: "show",
                            value: function() {
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this.root.removeAttribute("data-mode")
                            }
                        }]), e
                    }();
                    g.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e.default = m
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = o(n(29)),
                        l = n(36),
                        i = n(38),
                        u = n(64),
                        a = o(n(65)),
                        s = o(n(66)),
                        c = n(67),
                        f = o(c),
                        d = n(37),
                        h = n(26),
                        p = n(39),
                        y = n(40),
                        v = o(n(56)),
                        b = o(n(68)),
                        m = o(n(27)),
                        g = o(n(69)),
                        _ = o(n(70)),
                        O = o(n(71)),
                        k = o(n(72)),
                        x = o(n(73)),
                        E = n(13),
                        w = o(E),
                        A = o(n(74)),
                        j = o(n(75)),
                        N = o(n(57)),
                        T = o(n(41)),
                        P = o(n(28)),
                        S = o(n(59)),
                        q = o(n(60)),
                        C = o(n(61)),
                        L = o(n(108)),
                        I = o(n(62));
                    r.default.register({
                        "attributors/attribute/direction": i.DirectionAttribute,
                        "attributors/class/align": l.AlignClass,
                        "attributors/class/background": d.BackgroundClass,
                        "attributors/class/color": h.ColorClass,
                        "attributors/class/direction": i.DirectionClass,
                        "attributors/class/font": p.FontClass,
                        "attributors/class/size": y.SizeClass,
                        "attributors/style/align": l.AlignStyle,
                        "attributors/style/background": d.BackgroundStyle,
                        "attributors/style/color": h.ColorStyle,
                        "attributors/style/direction": i.DirectionStyle,
                        "attributors/style/font": p.FontStyle,
                        "attributors/style/size": y.SizeStyle
                    }, !0), r.default.register({
                        "formats/align": l.AlignClass,
                        "formats/direction": i.DirectionClass,
                        "formats/indent": u.IndentClass,
                        "formats/background": d.BackgroundStyle,
                        "formats/color": h.ColorStyle,
                        "formats/font": p.FontClass,
                        "formats/size": y.SizeClass,
                        "formats/blockquote": a.default,
                        "formats/code-block": w.default,
                        "formats/header": s.default,
                        "formats/list": f.default,
                        "formats/bold": v.default,
                        "formats/code": E.Code,
                        "formats/italic": b.default,
                        "formats/link": m.default,
                        "formats/script": g.default,
                        "formats/strike": _.default,
                        "formats/underline": O.default,
                        "formats/image": k.default,
                        "formats/video": x.default,
                        "formats/list/item": c.ListItem,
                        "modules/formula": A.default,
                        "modules/syntax": j.default,
                        "modules/toolbar": N.default,
                        "themes/bubble": L.default,
                        "themes/snow": I.default,
                        "ui/icons": T.default,
                        "ui/picker": P.default,
                        "ui/icon-picker": q.default,
                        "ui/color-picker": S.default,
                        "ui/tooltip": C.default
                    }, !0), e.default = r.default
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.IndentClass = void 0;
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        l = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        i = new(function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, l.default.Attributor.Class), o(e, [{
                                key: "add",
                                value: function(t, n) {
                                    if ("+1" === n || "-1" === n) {
                                        var o = this.value(t) || 0;
                                        n = "+1" === n ? o + 1 : o - 1
                                    }
                                    return 0 === n ? (this.remove(t), !0) : r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, n)
                                }
                            }, {
                                key: "canAdd",
                                value: function(t, n) {
                                    return r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, n) || r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, parseInt(n))
                                }
                            }, {
                                key: "value",
                                value: function(t) {
                                    return parseInt(r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)) || void 0
                                }
                            }]), e
                        }())("indent", "ql-indent", {
                            scope: l.default.Scope.BLOCK,
                            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
                        });
                    e.IndentClass = i
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(4)),
                        r = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, o.default), e
                        }();
                    r.blotName = "blockquote", r.tagName = "blockquote", e.default = r
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(4)),
                        l = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, r.default), o(e, null, [{
                                key: "formats",
                                value: function(t) {
                                    return this.tagName.indexOf(t.tagName) + 1
                                }
                            }]), e
                        }();
                    l.blotName = "header", l.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e.default = l
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = e.ListItem = void 0;
                    var u = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        a = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        s = o(n(0)),
                        c = o(n(4)),
                        f = o(n(25)),
                        d = function(t) {
                            function e() {
                                return r(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return i(e, c.default), u(e, [{
                                key: "format",
                                value: function(t, n) {
                                    t !== h.blotName || n ? a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) : this.replaceWith(s.default.create(this.statics.scope))
                                }
                            }, {
                                key: "remove",
                                value: function() {
                                    null == this.prev && null == this.next ? this.parent.remove() : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this)
                                }
                            }, {
                                key: "replaceWith",
                                value: function(t, n) {
                                    return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ? (this.parent.replaceWith(t, n), this) : (this.parent.unwrap(), a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, n))
                                }
                            }], [{
                                key: "formats",
                                value: function(t) {
                                    return t.tagName === this.tagName ? void 0 : a(e.__proto__ || Object.getPrototypeOf(e), "formats", this).call(this, t)
                                }
                            }]), e
                        }();
                    d.blotName = "list-item", d.tagName = "LI";
                    var h = function(t) {
                        function e(t) {
                            r(this, e);
                            var n = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
                                o = function(e) {
                                    if (e.target.parentNode === t) {
                                        var o = n.statics.formats(t),
                                            r = s.default.find(e.target);
                                        "checked" === o ? r.format("list", "unchecked") : "unchecked" === o && r.format("list", "checked")
                                    }
                                };
                            return t.addEventListener("touchstart", o), t.addEventListener("mousedown", o), n
                        }
                        return i(e, f.default), u(e, null, [{
                            key: "create",
                            value: function(t) {
                                var n = "ordered" === t ? "OL" : "UL",
                                    o = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, n);
                                return "checked" !== t && "unchecked" !== t || o.setAttribute("data-checked", "checked" === t), o
                            }
                        }, {
                            key: "formats",
                            value: function(t) {
                                return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? t.hasAttribute("data-checked") ? "true" === t.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0
                            }
                        }]), u(e, [{
                            key: "format",
                            value: function(t, e) {
                                this.children.length > 0 && this.children.tail.format(t, e)
                            }
                        }, {
                            key: "formats",
                            value: function() {
                                return function(t, e, n) {
                                    return e in t ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[e] = n, t
                                }({}, this.statics.blotName, this.statics.formats(this.domNode))
                            }
                        }, {
                            key: "insertBefore",
                            value: function(t, n) {
                                if (t instanceof d) a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);
                                else {
                                    var o = null == n ? this.length() : n.offset(this),
                                        r = this.split(o);
                                    r.parent.insertBefore(t, r)
                                }
                            }
                        }, {
                            key: "optimize",
                            value: function(t) {
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                                var n = this.next;
                                null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n.moveChildren(this), n.remove())
                            }
                        }, {
                            key: "replace",
                            value: function(t) {
                                if (t.statics.blotName !== this.statics.blotName) {
                                    var n = s.default.create(this.statics.defaultChild);
                                    t.moveChildren(n), this.appendChild(n)
                                }
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t)
                            }
                        }]), e
                    }();
                    h.blotName = "list", h.scope = s.default.Scope.BLOCK_BLOT, h.tagName = ["OL", "UL"], h.defaultChild = "list-item", h.allowedChildren = [d], e.ListItem = d, e.default = h
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(56)),
                        r = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, o.default), e
                        }();
                    r.blotName = "italic", r.tagName = ["EM", "I"], e.default = r
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(6)),
                        l = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, r.default), o(e, null, [{
                                key: "create",
                                value: function(t) {
                                    return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : function t(e, n, o) {
                                        null === e && (e = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === r) {
                                            var l = Object.getPrototypeOf(e);
                                            return null === l ? void 0 : t(l, n, o)
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        if (void 0 !== i) return i.call(o)
                                    }(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t)
                                }
                            }, {
                                key: "formats",
                                value: function(t) {
                                    return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0
                                }
                            }]), e
                        }();
                    l.blotName = "script", l.tagName = ["SUB", "SUP"], e.default = l
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(6)),
                        r = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, o.default), e
                        }();
                    r.blotName = "strike", r.tagName = "S", e.default = r
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(6)),
                        r = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, o.default), e
                        }();
                    r.blotName = "underline", r.tagName = "U", e.default = r
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        l = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(0)),
                        i = n(27),
                        u = ["alt", "height", "width"],
                        a = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, l.default.Embed), o(e, [{
                                key: "format",
                                value: function(t, n) {
                                    u.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                                }
                            }], [{
                                key: "create",
                                value: function(t) {
                                    var n = r(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                    return "string" == typeof t && n.setAttribute("src", this.sanitize(t)), n
                                }
                            }, {
                                key: "formats",
                                value: function(t) {
                                    return u.reduce(function(e, n) {
                                        return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e
                                    }, {})
                                }
                            }, {
                                key: "match",
                                value: function(t) {
                                    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
                                }
                            }, {
                                key: "sanitize",
                                value: function(t) {
                                    return (0, i.sanitize)(t, ["http", "https", "data"]) ? t : "//:0"
                                }
                            }, {
                                key: "value",
                                value: function(t) {
                                    return t.getAttribute("src")
                                }
                            }]), e
                        }();
                    a.blotName = "image", a.tagName = "IMG", e.default = a
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        r = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        l = n(4),
                        i = function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        }(n(27)),
                        u = ["height", "width"],
                        a = function(t) {
                            function e() {
                                return function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e),
                                    function(t, e) {
                                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return function(t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                            }(e, l.BlockEmbed), o(e, [{
                                key: "format",
                                value: function(t, n) {
                                    u.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                                }
                            }], [{
                                key: "create",
                                value: function(t) {
                                    var n = r(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                    return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(t)), n
                                }
                            }, {
                                key: "formats",
                                value: function(t) {
                                    return u.reduce(function(e, n) {
                                        return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e
                                    }, {})
                                }
                            }, {
                                key: "sanitize",
                                value: function(t) {
                                    return i.default.sanitize(t)
                                }
                            }, {
                                key: "value",
                                value: function(t) {
                                    return t.getAttribute("src")
                                }
                            }]), e
                        }();
                    a.blotName = "video", a.className = "ql-video", a.tagName = "IFRAME", e.default = a
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = e.FormulaBlot = void 0;
                    var u = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        a = o(n(35)),
                        s = o(n(5)),
                        c = o(n(9)),
                        f = function(t) {
                            function e() {
                                return r(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return i(e, a.default), u(e, null, [{
                                key: "create",
                                value: function(t) {
                                    var n = function t(e, n, o) {
                                        null === e && (e = Function.prototype);
                                        var r = Object.getOwnPropertyDescriptor(e, n);
                                        if (void 0 === r) {
                                            var l = Object.getPrototypeOf(e);
                                            return null === l ? void 0 : t(l, n, o)
                                        }
                                        if ("value" in r) return r.value;
                                        var i = r.get;
                                        if (void 0 !== i) return i.call(o)
                                    }(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
                                    return "string" == typeof t && (window.katex.render(t, n, {
                                        throwOnError: !1,
                                        errorColor: "#f00"
                                    }), n.setAttribute("data-value", t)), n
                                }
                            }, {
                                key: "value",
                                value: function(t) {
                                    return t.getAttribute("data-value")
                                }
                            }]), e
                        }();
                    f.blotName = "formula", f.className = "ql-formula", f.tagName = "SPAN";
                    var d = function(t) {
                        function e() {
                            r(this, e);
                            var t = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            if (null == window.katex) throw new Error("Formula module requires KaTeX.");
                            return t
                        }
                        return i(e, c.default), u(e, null, [{
                            key: "register",
                            value: function() {
                                s.default.register(f, !0)
                            }
                        }]), e
                    }();
                    e.FormulaBlot = f, e.default = d
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = e.CodeToken = e.CodeBlock = void 0;
                    var u = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        a = o(n(0)),
                        s = o(n(5)),
                        c = o(n(9)),
                        f = o(n(13)),
                        d = function(t) {
                            function e() {
                                return r(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                            }
                            return i(e, f.default), u(e, [{
                                key: "replaceWith",
                                value: function(t) {
                                    this.domNode.textContent = this.domNode.textContent, this.attach(),
                                        function t(e, n, o) {
                                            null === e && (e = Function.prototype);
                                            var r = Object.getOwnPropertyDescriptor(e, n);
                                            if (void 0 === r) {
                                                var l = Object.getPrototypeOf(e);
                                                return null === l ? void 0 : t(l, n, o)
                                            }
                                            if ("value" in r) return r.value;
                                            var i = r.get;
                                            if (void 0 !== i) return i.call(o)
                                        }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t)
                                }
                            }, {
                                key: "highlight",
                                value: function(t) {
                                    var e = this.domNode.textContent;
                                    this.cachedText !== e && ((e.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t(e), this.domNode.normalize(), this.attach()), this.cachedText = e)
                                }
                            }]), e
                        }();
                    d.className = "ql-syntax";
                    var h = new a.default.Attributor.Class("token", "hljs", {
                            scope: a.default.Scope.INLINE
                        }),
                        p = function(t) {
                            function e(t, n) {
                                r(this, e);
                                var o = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                if ("function" != typeof o.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
                                var i = null;
                                return o.quill.on(s.default.events.SCROLL_OPTIMIZE, function() {
                                    clearTimeout(i), i = setTimeout(function() {
                                        o.highlight(), i = null
                                    }, o.options.interval)
                                }), o.highlight(), o
                            }
                            return i(e, c.default), u(e, null, [{
                                key: "register",
                                value: function() {
                                    s.default.register(h, !0), s.default.register(d, !0)
                                }
                            }]), u(e, [{
                                key: "highlight",
                                value: function() {
                                    var t = this;
                                    if (!this.quill.selection.composing) {
                                        this.quill.update(s.default.sources.USER);
                                        var e = this.quill.getSelection();
                                        this.quill.scroll.descendants(d).forEach(function(e) {
                                            e.highlight(t.options.highlight)
                                        }), this.quill.update(s.default.sources.SILENT), null != e && this.quill.setSelection(e, s.default.sources.SILENT)
                                    }
                                }
                            }]), e
                        }();
                    p.DEFAULTS = {
                        highlight: null == window.hljs ? null : function(t) {
                            return window.hljs.highlightAuto(t).value
                        },
                        interval: 1e3
                    }, e.CodeBlock = d, e.CodeToken = h, e.default = p
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
                }, function(t, e) {
                    t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
                }, function(t, e) {
                    t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
                }, function(t, e) {
                    t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
                }, function(t, e, n) {
                    "use strict";

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function l(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = e.BubbleTooltip = void 0;
                    var u = function t(e, n, o) {
                            null === e && (e = Function.prototype);
                            var r = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === r) {
                                var l = Object.getPrototypeOf(e);
                                return null === l ? void 0 : t(l, n, o)
                            }
                            if ("value" in r) return r.value;
                            var i = r.get;
                            if (void 0 !== i) return i.call(o)
                        },
                        a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function(e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }(),
                        s = o(n(3)),
                        c = o(n(8)),
                        f = n(43),
                        d = o(f),
                        h = n(15),
                        p = o(n(41)),
                        y = [
                            ["bold", "italic", "link"],
                            [{
                                header: 1
                            }, {
                                header: 2
                            }, "blockquote"]
                        ],
                        v = function(t) {
                            function e(t, n) {
                                r(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = y);
                                var o = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return o.quill.container.classList.add("ql-bubble"), o
                            }
                            return i(e, d.default), a(e, [{
                                key: "extendToolbar",
                                value: function(t) {
                                    this.tooltip = new b(this.quill, this.options.bounds), this.tooltip.root.appendChild(t.container), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), p.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), p.default)
                                }
                            }]), e
                        }();
                    v.DEFAULTS = (0, s.default)(!0, {}, d.default.DEFAULTS, {
                        modules: {
                            toolbar: {
                                handlers: {
                                    link: function(t) {
                                        t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1)
                                    }
                                }
                            }
                        }
                    });
                    var b = function(t) {
                        function e(t, n) {
                            r(this, e);
                            var o = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                            return o.quill.on(c.default.events.EDITOR_CHANGE, function(t, e, n, r) {
                                if (t === c.default.events.SELECTION_CHANGE)
                                    if (null != e && e.length > 0 && r === c.default.sources.USER) {
                                        o.show(), o.root.style.left = "0px", o.root.style.width = "", o.root.style.width = o.root.offsetWidth + "px";
                                        var l = o.quill.getLines(e.index, e.length);
                                        if (1 === l.length) o.position(o.quill.getBounds(e));
                                        else {
                                            var i = l[l.length - 1],
                                                u = o.quill.getIndex(i),
                                                a = Math.min(i.length() - 1, e.index + e.length - u),
                                                s = o.quill.getBounds(new h.Range(u, a));
                                            o.position(s)
                                        }
                                    } else document.activeElement !== o.textbox && o.quill.hasFocus() && o.hide()
                            }), o
                        }
                        return i(e, f.BaseTooltip), a(e, [{
                            key: "listen",
                            value: function() {
                                var t = this;
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                                    t.root.classList.remove("ql-editing")
                                }), this.quill.on(c.default.events.SCROLL_OPTIMIZE, function() {
                                    setTimeout(function() {
                                        if (!t.root.classList.contains("ql-hidden")) {
                                            var e = t.quill.getSelection();
                                            null != e && t.position(t.quill.getBounds(e))
                                        }
                                    }, 1)
                                })
                            }
                        }, {
                            key: "cancel",
                            value: function() {
                                this.show()
                            }
                        }, {
                            key: "position",
                            value: function(t) {
                                var n = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(this, t),
                                    o = this.root.querySelector(".ql-tooltip-arrow");
                                if (o.style.marginLeft = "", 0 === n) return n;
                                o.style.marginLeft = -1 * n - o.offsetWidth / 2 + "px"
                            }
                        }]), e
                    }();
                    b.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e.BubbleTooltip = b, e.default = v
                }, function(t, e, n) {
                    t.exports = n(63)
                }]).default
            })
        }).call(e, n(71).Buffer)
    },
    1360: function(t, e, n) {
        "use strict";

        function o(t) {
            return r._29(0, [r._16(null, 0), (t()(), r._5(1, 0, null, null, 0, "div", [
                ["class", "button-effect"]
            ], null, null, null, null, null))], null, null)
        }
        n.d(e, "a", function() {
            return l
        }), e.b = o;
        var r = n(1),
            l = r._3({
                encapsulation: 2,
                styles: [],
                data: {}
            })
    }
});