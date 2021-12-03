webpackJsonp([70], {
    1258: function(l, n, u) {
        "use strict";

        function a(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), c._27(1, null, ["", ""]))], null, function(l, n) {
                l(n, 1, 0, n.component.UserUtils.getInitials(n.parent.context.$implicit.displayName))
            })
        }

        function t(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], null, [
                [null, "load"],
                [null, "error"]
            ], function(l, n, u) {
                var a = !0;
                if ("load" === n) {
                    a = !1 !== c._17(l, 1).onLoad() && a
                }
                if ("error" === n) {
                    a = !1 !== c._17(l, 1).onError() && a
                }
                return a
            }, null, null)), c._4(1, 540672, null, 0, w.a, [P.a, c.k, N.a], {
                cache: [0, "cache"],
                employeeId: [1, "employeeId"]
            }, null)], function(l, n) {
                l(n, 1, 0, n.parent.context.$implicit.imageUrl, n.parent.context.$implicit.id)
            }, null)
        }

        function e(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 1, "p", [
                ["text-wrap", ""]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), c._27(-1, null, ["\n            "]))], null, function(l, n) {
                l(n, 0, 0, n.parent.context.$implicit.displayName)
            })
        }

        function i(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 0, "p", [
                ["text-wrap", ""]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null))], null, function(l, n) {
                l(n, 0, 0, n.parent.context.$implicit.name)
            })
        }

        function o(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 22, "ion-item", [
                ["class", "item item-block"]
            ], null, null, null, q.b, q.a)), c._4(1, 1097728, null, 3, A.a, [E.a, H.a, c.k, c.F, [2, S.a]], null, null), c._25(335544320, 1, {
                contentLabel: 0
            }), c._25(603979776, 2, {
                _buttons: 1
            }), c._25(603979776, 3, {
                _icons: 1
            }), c._4(5, 16384, null, 0, T.a, [], null, null), (l()(), c._27(-1, 2, ["\n            "])), (l()(), c._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), c._4(8, 16384, null, 0, C.a, [], null, null), (l()(), c._27(-1, null, ["\n                "])), (l()(), c._0(16777216, null, null, 1, null, a)), c._4(11, 16384, null, 0, D.j, [c.O, c.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), c._27(-1, null, ["\n                "])), (l()(), c._0(16777216, null, null, 1, null, t)), c._4(14, 16384, null, 0, D.j, [c.O, c.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), c._27(-1, null, ["\n            "])), (l()(), c._27(-1, 2, ["\n            "])), (l()(), c._0(16777216, null, 2, 1, null, e)), c._4(18, 16384, null, 0, D.j, [c.O, c.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), c._27(-1, 2, ["\n            "])), (l()(), c._0(16777216, null, 2, 1, null, i)), c._4(21, 16384, null, 0, D.j, [c.O, c.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), c._27(-1, 2, ["\n        "]))], function(l, n) {
                l(n, 11, 0, !n.context.$implicit.imageUrl);
                l(n, 14, 0, n.context.$implicit.imageUrl);
                l(n, 18, 0, n.context.$implicit.displayName);
                l(n, 21, 0, n.context.$implicit.name)
            }, null)
        }

        function _(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 13, "ion-content", [
                ["class", "modal-content"]
            ], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, J.b, J.a)), c._4(1, 4374528, null, 0, R.a, [H.a, Y.a, z.a, c.k, c.F, B.a, G.a, c.y, [2, K.a],
                [2, Q.a]
            ], null, null), (l()(), c._27(-1, 1, ["\n    "])), (l()(), c._5(3, 0, null, 1, 2, "h3", [
                ["class", "bold"]
            ], null, null, null, null, null)), (l()(), c._27(4, null, ["", ""])), c._20(131072, r.i, [r.j, c.g]), (l()(), c._27(-1, 1, ["\n    "])), (l()(), c._5(7, 0, null, 1, 5, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), c._4(8, 16384, null, 0, V.a, [H.a, c.k, c.F, Y.a, W.l, z.a], null, null), (l()(), c._27(-1, null, ["\n        "])), (l()(), c._0(16777216, null, null, 1, null, o)), c._4(11, 802816, null, 0, D.i, [c.O, c.L, c.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), c._27(-1, null, ["\n    "])), (l()(), c._27(-1, 1, ["\n"])), (l()(), c._27(-1, null, ["\n\n"])), (l()(), c._5(15, 0, null, null, 7, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), c._4(16, 16384, null, 0, X.a, [H.a, c.k, c.F, [2, K.a]], null, null), (l()(), c._27(-1, null, ["\n    "])), (l()(), c._5(18, 0, null, null, 3, "button", [
                ["clear", ""],
                ["color", "dark"],
                ["full", ""],
                ["ion-button", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var a = !0;
                if ("click" === n) {
                    a = !1 !== l.component.closeModal() && a
                }
                return a
            }, Z.b, Z.a)), c._4(19, 1097728, null, 0, ll.a, [
                [8, ""], H.a, c.k, c.F
            ], {
                color: [0, "color"],
                clear: [1, "clear"],
                full: [2, "full"]
            }, null), (l()(), c._27(20, 0, ["", ""])), c._20(131072, r.i, [r.j, c.g]), (l()(), c._27(-1, null, ["\n"]))], function(l, n) {
                l(n, 11, 0, n.component.employees);
                l(n, 19, 0, "dark", "", "")
            }, function(l, n) {
                l(n, 0, 0, c._17(n, 1).statusbarPadding, c._17(n, 1)._hasRefresher);
                l(n, 4, 0, c._28(n, 4, 0, c._17(n, 5).transform("Shared List")));
                l(n, 20, 0, c._28(n, 20, 0, c._17(n, 21).transform("close")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = u(1),
            r = (u(0), u(6), u(9)),
            s = u(12),
            f = u(13),
            m = u(11),
            p = function() {
                function l(l, n, u, a, t, e, i) {
                    this.nav = l, this.navParams = n, this.DataAccess = u, this.StorageAccess = a, this.translate = t, this.UserUtils = e, this.view = i, this.employees = [], this.team = [], this.navParams.data && (this.employees = this.navParams.get("empMap"))
                }
                return l.prototype.closeModal = function() {
                    this.view.dismiss()
                }, l
            }(),
            d = u(219),
            g = u(220),
            h = u(138),
            b = u(176),
            k = u(218),
            v = b.b,
            y = function() {
                return function() {}
            }(),
            x = u(773),
            I = u(774),
            L = u(775),
            j = u(776),
            $ = u(777),
            F = u(778),
            O = u(779),
            M = u(780),
            U = u(781),
            w = u(177),
            P = u(85),
            N = u(81),
            q = u(56),
            A = u(25),
            E = u(23),
            H = u(3),
            S = u(48),
            T = u(53),
            C = u(141),
            D = u(10),
            J = u(67),
            R = u(36),
            Y = u(5),
            z = u(14),
            B = u(18),
            G = u(47),
            K = u(7),
            Q = u(16),
            V = u(63),
            W = u(19),
            X = u(95),
            Z = u(37),
            ll = u(27),
            nl = u(17),
            ul = c._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            al = c._1("ng-component", p, function(l) {
                return c._29(0, [(l()(), c._5(0, 0, null, null, 1, "ng-component", [], null, null, null, _, ul)), c._4(1, 49152, null, 0, p, [Q.a, nl.a, s.a, f.a, r.j, m.a, K.a], null, null)], null, null)
            }, {}, {}, []),
            tl = u(30),
            el = u(31),
            il = u(221),
            ol = u(402),
            _l = u(222),
            cl = u(158);
        u.d(n, "EmployeeListModuleNgFactory", function() {
            return rl
        });
        var rl = c._2(y, [], function(l) {
            return c._13([c._14(512, c.i, c.Y, [
                [8, [x.a, I.a, L.a, j.a, $.a, F.a, O.a, M.a, U.a, al]],
                [3, c.i], c.w
            ]), c._14(4608, D.l, D.k, [c.v, [2, D.u]]), c._14(4608, tl.u, tl.u, []), c._14(4608, tl.d, tl.d, []), c._14(5120, r.f, v, [h.c]), c._14(4608, r.c, r.e, []), c._14(4608, r.h, r.d, []), c._14(4608, r.b, r.a, []), c._14(4608, r.j, r.j, [r.m, r.f, r.c, r.h, r.b, r.k, r.l]), c._14(4608, el.a, el.a, []), c._14(512, D.b, D.b, []), c._14(512, il.a, il.a, []), c._14(512, tl.s, tl.s, []), c._14(512, tl.g, tl.g, []), c._14(512, tl.q, tl.q, []), c._14(512, ol.a, ol.a, []), c._14(512, g.a, g.a, []), c._14(512, _l.a, _l.a, []), c._14(512, r.g, r.g, []), c._14(512, k.a, k.a, []), c._14(512, d.a, d.a, []), c._14(512, ol.b, ol.b, []), c._14(512, y, y, []), c._14(256, r.l, void 0, []), c._14(256, r.k, void 0, []), c._14(256, cl.a, p, [])])
        })
    }
});