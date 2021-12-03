webpackJsonp([72], {
    1256: function(l, n, u) {
        "use strict";

        function a(l) {
            return e._29(0, [(l()(), e._5(0, 0, null, null, 5, "ion-col", [
                ["class", "col"],
                ["width-33", ""]
            ], null, null, null, null, null)), e._4(1, 16384, null, 0, L.a, [], null, null), (l()(), e._27(-1, null, ["\n                    "])), (l()(), e._5(3, 0, null, null, 1, "img", [
                ["alt", ""],
                ["class", "w-full max-h"],
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"],
                [null, "load"],
                [null, "error"]
            ], function(l, n, u) {
                var a = !0,
                    t = l.component;
                if ("load" === n) {
                    a = !1 !== e._17(l, 4).onLoad() && a
                }
                if ("error" === n) {
                    a = !1 !== e._17(l, 4).onError() && a
                }
                if ("click" === n) {
                    a = !1 !== t.enlargeAndShow(t.imagesList, l.context.index) && a
                }
                return a
            }, null, null)), e._4(4, 540672, null, 0, P.a, [j.a, e.k, M.a], {
                cache: [0, "cache"]
            }, null), (l()(), e._27(-1, null, ["\n                "]))], function(l, n) {
                l(n, 4, 0, n.context.$implicit)
            }, function(l, n) {
                l(n, 3, 0, "coachinViewMoreImgs_" + n.context.index)
            })
        }

        function t(l) {
            return e._29(0, [(l()(), e._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), e._4(1, 16384, null, 0, C.a, [E.a, e.k, e.F, [2, O.a]], null, null), (l()(), e._27(-1, null, ["\n    "])), (l()(), e._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, V.b, V.a)), e._4(4, 49152, null, 0, A.a, [S.a, [2, O.a],
                [2, q.a], E.a, e.k, e.F
            ], null, null), (l()(), e._27(-1, 3, ["\n        "])), (l()(), e._5(6, 0, null, 3, 3, "ion-title", [
                ["class", "text-1x"]
            ], [
                [8, "id", 0]
            ], null, null, U.b, U.a)), e._4(7, 49152, null, 0, I.a, [E.a, e.k, e.F, [2, J.a],
                [2, A.a]
            ], null, null), (l()(), e._27(8, 0, [" ", " "])), e._20(131072, _.i, [_.j, e.g]), (l()(), e._27(-1, 3, ["\n    "])), (l()(), e._27(-1, null, ["\n"])), (l()(), e._27(-1, null, ["\n\n"])), (l()(), e._5(13, 0, null, null, 21, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, N.b, N.a)), e._4(14, 4374528, null, 0, R.a, [E.a, T.a, W.a, e.k, e.F, S.a, Y.a, e.y, [2, O.a],
                [2, q.a]
            ], null, null), (l()(), e._27(-1, 1, ["\n    "])), (l()(), e._5(16, 0, null, 1, 17, "ion-row", [
                ["class", "center-content row"]
            ], null, null, null, null, null)), e._4(17, 16384, null, 0, $.a, [], null, null), (l()(), e._27(-1, null, ["\n        "])), (l()(), e._5(19, 0, null, null, 13, "ion-item", [
                ["class", "item item-block"]
            ], null, null, null, z.b, z.a)), e._4(20, 1097728, null, 3, B.a, [D.a, E.a, e.k, e.F, [2, G.a]], null, null), e._25(335544320, 1, {
                contentLabel: 0
            }), e._25(603979776, 2, {
                _buttons: 1
            }), e._25(603979776, 3, {
                _icons: 1
            }), e._4(24, 16384, null, 0, H.a, [], null, null), (l()(), e._27(-1, 2, ["\n            "])), (l()(), e._5(26, 0, null, 2, 5, "ion-row", [
                ["class", "emp-pics row"],
                ["wrap", ""]
            ], null, null, null, null, null)), e._4(27, 16384, null, 0, $.a, [], null, null), (l()(), e._27(-1, null, ["\n                "])), (l()(), e._0(16777216, null, null, 1, null, a)), e._4(30, 802816, null, 0, K.i, [e.O, e.L, e.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), e._27(-1, null, ["\n            "])), (l()(), e._27(-1, 2, ["\n        "])), (l()(), e._27(-1, null, ["\n    "])), (l()(), e._27(-1, 1, ["\n"]))], function(l, n) {
                l(n, 30, 0, n.component.imagesList)
            }, function(l, n) {
                l(n, 3, 0, e._17(n, 4)._hidden, e._17(n, 4)._sbPadding);
                l(n, 6, 0, "coachinViewMoreTitle");
                l(n, 8, 0, e._28(n, 8, 0, e._17(n, 9).transform("Photo")));
                l(n, 13, 0, e._17(n, 14).statusbarPadding, e._17(n, 14)._hasRefresher)
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var e = u(1),
            i = (u(0), u(6), u(11)),
            _ = u(9),
            o = function() {
                function l(l, n, u, a, t) {
                    this.navCtrl = l, this.navParams = n, this.UserUtils = u, this.translate = a, this.modalCtrl = t, this.imagesList = []
                }
                return l.prototype.ionViewWillEnter = function() {
                    try {
                        this.imagesList = this.navParams.get("imagesList")
                    } catch (l) {}
                }, l.prototype.enlargeAndShow = function(l, n) {
                    try {
                        this.modalCtrl.create("EnlargeAndSave", {
                            images: l,
                            index: n
                        }).present()
                    } catch (l) {}
                }, l
            }(),
            r = u(219),
            s = u(220),
            c = u(138),
            d = u(176),
            f = u(218),
            g = d.b,
            h = function() {
                return function() {}
            }(),
            m = u(773),
            b = u(774),
            p = u(775),
            w = u(776),
            k = u(777),
            v = u(778),
            y = u(779),
            x = u(780),
            F = u(781),
            L = u(106),
            P = u(177),
            j = u(85),
            M = u(81),
            C = u(102),
            E = u(3),
            O = u(7),
            V = u(140),
            A = u(75),
            S = u(18),
            q = u(16),
            U = u(139),
            I = u(103),
            J = u(80),
            N = u(67),
            R = u(36),
            T = u(5),
            W = u(14),
            Y = u(47),
            $ = u(61),
            z = u(56),
            B = u(25),
            D = u(23),
            G = u(48),
            H = u(53),
            K = u(10),
            Q = u(17),
            X = u(50),
            Z = e._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            ll = e._1("page-viewmoreemployees", o, function(l) {
                return e._29(0, [(l()(), e._5(0, 0, null, null, 1, "page-viewmoreemployees", [], null, null, null, t, Z)), e._4(1, 49152, null, 0, o, [q.a, Q.a, i.a, _.j, X.a], null, null)], null, null)
            }, {}, {}, []),
            nl = u(30),
            ul = u(31),
            al = u(221),
            tl = u(402),
            el = u(222),
            il = u(158);
        u.d(n, "ViewMoreEmployeesModuleNgFactory", function() {
            return _l
        });
        var _l = e._2(h, [], function(l) {
            return e._13([e._14(512, e.i, e.Y, [
                [8, [m.a, b.a, p.a, w.a, k.a, v.a, y.a, x.a, F.a, ll]],
                [3, e.i], e.w
            ]), e._14(4608, K.l, K.k, [e.v, [2, K.u]]), e._14(4608, nl.u, nl.u, []), e._14(4608, nl.d, nl.d, []), e._14(5120, _.f, g, [c.c]), e._14(4608, _.c, _.e, []), e._14(4608, _.h, _.d, []), e._14(4608, _.b, _.a, []), e._14(4608, _.j, _.j, [_.m, _.f, _.c, _.h, _.b, _.k, _.l]), e._14(4608, ul.a, ul.a, []), e._14(512, K.b, K.b, []), e._14(512, al.a, al.a, []), e._14(512, nl.s, nl.s, []), e._14(512, nl.g, nl.g, []), e._14(512, nl.q, nl.q, []), e._14(512, tl.a, tl.a, []), e._14(512, s.a, s.a, []), e._14(512, el.a, el.a, []), e._14(512, _.g, _.g, []), e._14(512, f.a, f.a, []), e._14(512, r.a, r.a, []), e._14(512, tl.b, tl.b, []), e._14(512, h, h, []), e._14(256, _.l, void 0, []), e._14(256, _.k, void 0, []), e._14(256, il.a, o, [])])
        })
    }
});