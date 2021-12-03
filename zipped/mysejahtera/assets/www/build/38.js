webpackJsonp([38], {
    1304: function(l, n, u) {
        "use strict";

        function e(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 5, null, null, null, null, null, null, null)), (l()(), s._27(-1, null, ["\n                    "])), (l()(), s._5(2, 0, null, null, 2, "small", [
                ["class", "row mt-3"],
                ["justify-content-center", ""]
            ], null, null, null, null, null)), (l()(), s._27(3, null, ["", ""])), s._20(131072, d.i, [d.j, s.g]), (l()(), s._27(-1, null, ["\n                "]))], null, function(l, n) {
                l(n, 3, 0, s._28(n, 3, 0, s._17(n, 4).transform("noResult")))
            })
        }

        function t(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(1, null, ["", ""]))], null, function(l, n) {
                var u = n.component;
                l(n, 0, 0, "employee_" + n.parent.context.index);
                l(n, 1, 0, u.UserUtils.getInitials(n.parent.context.$implicit.displayName))
            })
        }

        function a(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, u) {
                var e = !0;
                if ("load" === n) {
                    e = !1 !== s._17(l, 1).onLoad() && e
                }
                if ("error" === n) {
                    e = !1 !== s._17(l, 1).onError() && e
                }
                return e
            }, null, null)), s._4(1, 540672, null, 0, P.a, [R.a, s.k, $.a], {
                cache: [0, "cache"]
            }, null)], function(l, n) {
                l(n, 1, 0, n.parent.context.$implicit.imageUrl)
            }, function(l, n) {
                l(n, 0, 0, "employee_" + n.parent.context.index)
            })
        }

        function o(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 28, "ion-item", [
                ["class", "item item-block"],
                ["text-wrap", ""]
            ], null, null, null, A.b, A.a)), s._4(1, 1097728, null, 3, N.a, [S.a, D.a, s.k, s.F, [2, T.a]], null, null), s._25(335544320, 2, {
                contentLabel: 0
            }), s._25(603979776, 3, {
                _buttons: 1
            }), s._25(603979776, 4, {
                _icons: 1
            }), s._4(5, 16384, null, 0, V.a, [], null, null), (l()(), s._27(-1, 2, ["\n                    "])), (l()(), s._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(8, 16384, null, 0, q.a, [], null, null), (l()(), s._27(-1, null, ["\n                        "])), (l()(), s._0(16777216, null, null, 1, null, t)), s._4(11, 16384, null, 0, H.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, null, ["\n                        "])), (l()(), s._0(16777216, null, null, 1, null, a)), s._4(14, 16384, null, 0, H.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, null, ["\n                    "])), (l()(), s._27(-1, 2, ["\n                    "])), (l()(), s._5(17, 0, null, 1, 5, "ion-label", [], null, null, null, null, null)), s._4(18, 16384, [
                [2, 4]
            ], 0, J.a, [D.a, s.k, s.F, [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], null, null), (l()(), s._27(-1, null, ["\n                        "])), (l()(), s._5(20, 0, null, null, 1, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(21, null, [" ", ""])), (l()(), s._27(-1, null, ["\n                    "])), (l()(), s._27(-1, 2, ["\n                    "])), (l()(), s._5(24, 0, null, 4, 3, "ion-checkbox", [
                ["item-end", ""]
            ], [
                [2, "checkbox-disabled", null]
            ], [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0,
                    t = l.component;
                if ("click" === n) {
                    e = !1 !== s._17(l, 26)._click(u) && e
                }
                if ("click" === n) {
                    e = !1 !== t.addOrRemoveEmployee(l.context.$implicit, l.context.index) && e
                }
                return e
            }, Y.b, Y.a)), s._23(5120, null, z.j, function(l) {
                return [l]
            }, [B.a]), s._4(26, 1228800, null, 0, B.a, [D.a, S.a, [2, N.a], s.k, s.F], {
                checked: [0, "checked"]
            }, null), (l()(), s._27(-1, null, ["\n                    "])), (l()(), s._27(-1, 2, ["\n                "]))], function(l, n) {
                l(n, 11, 0, !n.context.$implicit.imageUrl);
                l(n, 14, 0, n.context.$implicit.imageUrl);
                l(n, 26, 0, n.context.$implicit.checked)
            }, function(l, n) {
                l(n, 20, 0, "CMAddOwner_" + n.context.index);
                l(n, 21, 0, n.context.$implicit.displayName);
                l(n, 24, 0, s._17(n, 26)._disabled)
            })
        }

        function i(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 29, "ion-content", [
                ["class", "modal-content"]
            ], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, G.b, G.a)), s._4(1, 4374528, null, 0, K.a, [D.a, Q.a, W.a, s.k, s.F, X.a, Z.a, s.y, [2, ll.a],
                [2, nl.a]
            ], null, null), (l()(), s._27(-1, 1, ["\n    "])), (l()(), s._5(3, 0, null, 1, 3, "ion-row", [
                ["class", "dependencyNote row"]
            ], null, null, null, null, null)), s._4(4, 16384, null, 0, ul.a, [], null, null), (l()(), s._27(5, null, ["\n        ", "\n    "])), s._20(131072, d.i, [d.j, s.g]), (l()(), s._27(-1, 1, ["\n    "])), (l()(), s._5(8, 0, null, 1, 2, "h3", [
                ["class", "bold"]
            ], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), s._27(9, null, ["", ""])), s._20(131072, d.i, [d.j, s.g]), (l()(), s._27(-1, 1, ["\n        "])), (l()(), s._5(12, 0, null, 1, 16, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), s._4(13, 16384, null, 0, el.a, [D.a, s.k, s.F, Q.a, tl.l, W.a], null, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._27(-1, null, ["\n\n            "])), (l()(), s._5(16, 0, null, null, 11, "ion-list", [
                ["class", "items-no-lines"],
                ["radio-group", ""],
                ["role", "radiogroup"]
            ], null, null, null, null, null)), s._23(5120, null, z.j, function(l) {
                return [l]
            }, [al.a]), s._4(18, 16384, null, 0, el.a, [D.a, s.k, s.F, Q.a, tl.l, W.a], null, null), s._4(19, 1064960, null, 1, al.a, [s.F, s.k, s.g], null, null), s._25(335544320, 1, {
                _header: 0
            }), (l()(), s._27(-1, null, ["\n                "])), (l()(), s._0(16777216, null, null, 1, null, e)), s._4(23, 16384, null, 0, H.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, null, ["\n                "])), (l()(), s._0(16777216, null, null, 1, null, o)), s._4(26, 802816, null, 0, H.i, [s.O, s.L, s.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._27(-1, 1, ["\n"])), (l()(), s._27(-1, null, ["\n\n"])), (l()(), s._5(31, 0, null, null, 22, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), s._4(32, 16384, null, 0, ol.a, [D.a, s.k, s.F, [2, ll.a]], null, null), (l()(), s._27(-1, null, ["\n    "])), (l()(), s._5(34, 0, null, null, 18, "ion-toolbar", [
                ["class", "toolbar"]
            ], [
                [2, "statusbar-padding", null]
            ], null, null, il.b, il.a)), s._4(35, 49152, null, 0, sl.a, [D.a, s.k, s.F], null, null), (l()(), s._27(-1, 3, ["\n        "])), (l()(), s._27(-1, 3, ["\n        "])), (l()(), s._5(38, 0, null, 2, 13, "ion-buttons", [
                ["right", ""]
            ], null, null, null, null, null)), s._4(39, 16384, null, 1, cl.a, [D.a, s.k, s.F, [2, sl.a],
                [2, rl.a]
            ], null, null), s._25(603979776, 5, {
                _buttons: 1
            }), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._5(42, 0, null, null, 3, "button", [
                ["color", "btn-secondadry"],
                ["ion-button", ""],
                ["solid", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== l.component.cancel() && e
                }
                return e
            }, _l.b, _l.a)), s._4(43, 1097728, [
                [5, 4]
            ], 0, dl.a, [
                [8, ""], D.a, s.k, s.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (l()(), s._27(44, 0, ["", ""])), s._20(131072, d.i, [d.j, s.g]), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._5(47, 0, null, null, 3, "button", [
                ["color", "btn-primary"],
                ["ion-button", ""],
                ["solid", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== l.component.addMembers() && e
                }
                return e
            }, _l.b, _l.a)), s._4(48, 1097728, [
                [5, 4]
            ], 0, dl.a, [
                [8, ""], D.a, s.k, s.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (l()(), s._27(49, 0, ["", ""])), s._20(131072, d.i, [d.j, s.g]), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._27(-1, 3, ["\n    "])), (l()(), s._27(-1, null, ["\n"]))], function(l, n) {
                var u = n.component;
                l(n, 23, 0, 0 == u.employees.length);
                l(n, 26, 0, u.employees);
                l(n, 43, 0, "btn-secondadry", "");
                l(n, 48, 0, "btn-primary", "")
            }, function(l, n) {
                l(n, 0, 0, s._17(n, 1).statusbarPadding, s._17(n, 1)._hasRefresher);
                l(n, 5, 0, s._28(n, 5, 0, s._17(n, 6).transform("selectDependentNote")));
                l(n, 8, 0, "searchEmployeeHeader");
                l(n, 9, 0, s._28(n, 9, 0, s._17(n, 10).transform("selectDependent")));
                l(n, 34, 0, s._17(n, 35)._sbPadding);
                l(n, 44, 0, s._28(n, 44, 0, s._17(n, 45).transform("back")));
                l(n, 49, 0, s._28(n, 49, 0, s._17(n, 50).transform("checkIn")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = u(1),
            c = (u(0), u(221)),
            r = u(220),
            _ = u(219),
            d = (u(6), u(9)),
            p = u(138),
            f = u(176),
            m = u(49),
            h = u.n(m),
            b = u(11),
            g = u(13),
            k = u(404),
            y = u(21),
            v = function() {
                function l(l, n, u, e, t, a, o, i, s, c) {
                    var r = this;
                    this.toastCtrl = l, this.UserUtils = n, this.platform = u, this.navCtrl = e, this.translate = t, this.viewCtrl = a, this.StorageAccess = o, this.profileProvider = i, this.ReusableUtils = s, this.navParams = c, this.employees = [], this.dependents = [], this.placeholder = "search", this.user = {}, this.myInput = "", this.errorCodeEnabled = !1, this.empInfo = {}, this.StorageAccess.getValue("employeeInfo").then(function(l) {
                        r.empInfo = l, r.getTeam()
                    })
                }
                return l.prototype.getTeam = function() {
                    var l = this;
                    l.StorageAccess.getValue("dependentsList").then(function(n) {
                        n ? (l.employees = n, l.employees.forEach(function(l) {
                            l.checked = !1
                        })) : l.profileProvider.getMyTeamMembers(l.empInfo.employeeId).subscribe(function(n) {
                            l.employees = n, l.employees.forEach(function(l) {
                                l.checked = !1
                            }), l.StorageAccess.setValue("dependentsList", n)
                        }, function(n) {
                            l.ReusableUtils.saveErrorLog({}, n), l.ReusableUtils.showHttpError(n)
                        })
                    })
                }, l.prototype.addOrRemoveEmployee = function(l, n) {
                    var u = h.a.findIndex(this.dependents, {
                        employeeId: l.employeeId
                    }); - 1 != u ? (this.employees[n].checked = !1, this.dependents.splice(u, 1)) : (this.employees[n].checked = !0, this.dependents.push(l))
                }, l.prototype.addMembers = function() {
                    this.viewCtrl.dismiss(this.dependents)
                }, l.prototype.cancel = function() {
                    this.viewCtrl.dismiss({
                        cancel: !0
                    })
                }, l
            }(),
            x = f.b,
            I = function() {
                return function() {}
            }(),
            j = u(773),
            F = u(774),
            w = u(775),
            O = u(776),
            U = u(777),
            E = u(778),
            L = u(779),
            C = u(780),
            M = u(781),
            P = u(177),
            R = u(85),
            $ = u(81),
            A = u(56),
            N = u(25),
            S = u(23),
            D = u(3),
            T = u(48),
            V = u(53),
            q = u(141),
            H = u(10),
            J = u(82),
            Y = u(224),
            z = u(30),
            B = u(145),
            G = u(67),
            K = u(36),
            Q = u(5),
            W = u(14),
            X = u(18),
            Z = u(47),
            ll = u(7),
            nl = u(16),
            ul = u(61),
            el = u(63),
            tl = u(19),
            al = u(148),
            ol = u(95),
            il = u(159),
            sl = u(80),
            cl = u(105),
            rl = u(75),
            _l = u(37),
            dl = u(27),
            pl = u(104),
            fl = u(17),
            ml = s._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            hl = s._1("ng-component", v, function(l) {
                return s._29(0, [(l()(), s._5(0, 0, null, null, 1, "ng-component", [], null, null, null, i, ml)), s._4(1, 49152, null, 0, v, [pl.a, b.a, Q.a, nl.a, d.j, ll.a, g.a, k.a, y.a, fl.a], null, null)], null, null)
            }, {}, {}, []),
            bl = u(31),
            gl = u(402),
            kl = u(222),
            yl = u(218),
            vl = u(158);
        u.d(n, "selectDependentModalPageModuleNgFactory", function() {
            return xl
        });
        var xl = s._2(I, [], function(l) {
            return s._13([s._14(512, s.i, s.Y, [
                [8, [j.a, F.a, w.a, O.a, U.a, E.a, L.a, C.a, M.a, hl]],
                [3, s.i], s.w
            ]), s._14(4608, H.l, H.k, [s.v, [2, H.u]]), s._14(4608, z.u, z.u, []), s._14(4608, z.d, z.d, []), s._14(5120, d.f, x, [p.c]), s._14(4608, d.c, d.e, []), s._14(4608, d.h, d.d, []), s._14(4608, d.b, d.a, []), s._14(4608, d.j, d.j, [d.m, d.f, d.c, d.h, d.b, d.k, d.l]), s._14(4608, bl.a, bl.a, []), s._14(512, H.b, H.b, []), s._14(512, z.s, z.s, []), s._14(512, z.g, z.g, []), s._14(512, z.q, z.q, []), s._14(512, gl.a, gl.a, []), s._14(512, gl.b, gl.b, []), s._14(512, c.a, c.a, []), s._14(512, r.a, r.a, []), s._14(512, kl.a, kl.a, []), s._14(512, d.g, d.g, []), s._14(512, yl.a, yl.a, []), s._14(512, _.a, _.a, []), s._14(512, I, I, []), s._14(256, d.l, void 0, []), s._14(256, d.k, void 0, []), s._14(256, vl.a, v, [])])
        })
    }
});