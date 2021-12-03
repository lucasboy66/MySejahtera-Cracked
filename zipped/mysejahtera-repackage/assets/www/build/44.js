webpackJsonp([44], {
    1292: function(l, n, u) {
        "use strict";

        function a(l) {
            return t._29(0, [(l()(), t._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), t._4(1, 16384, null, 0, P.a, [U.a, t.k, t.F, [2, j.a]], null, null), (l()(), t._27(-1, null, ["\n    "])), (l()(), t._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, H.b, H.a)), t._4(4, 49152, null, 0, M.a, [A.a, [2, j.a],
                [2, C.a], U.a, t.k, t.F
            ], {
                color: [0, "color"]
            }, null), (l()(), t._27(-1, 3, ["\n      "])), (l()(), t._5(6, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, V.b, V.a)), t._4(7, 49152, null, 0, x.a, [U.a, t.k, t.F, [2, I.a],
                [2, M.a]
            ], null, null), (l()(), t._27(8, 0, ["", ""])), t._20(131072, s.i, [s.j, t.g]), (l()(), t._27(-1, 3, ["\n    "])), (l()(), t._27(-1, null, ["\n  "])), (l()(), t._27(-1, null, ["\n  \n  \n  "])), (l()(), t._5(13, 0, null, null, 28, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, L.b, L.a)), t._4(14, 4374528, null, 0, q.a, [U.a, B.a, O.a, t.k, t.F, A.a, T.a, t.y, [2, j.a],
                [2, C.a]
            ], null, null), (l()(), t._27(-1, 1, ["\n    "])), (l()(), t._5(16, 0, null, 1, 24, "ion-card", [], null, null, null, null, null)), t._4(17, 16384, null, 0, D.a, [U.a, t.k, t.F], null, null), (l()(), t._27(-1, null, ["\n      "])), (l()(), t._5(19, 0, null, null, 20, "ion-list", [
                ["class", "items-lines"]
            ], null, null, null, null, null)), t._4(20, 16384, null, 0, J.a, [U.a, t.k, t.F, B.a, N.l, O.a], null, null), (l()(), t._27(-1, null, ["\n        "])), (l()(), t._5(22, 0, null, null, 16, "button", [
                ["class", "item item-block"],
                ["ion-item", ""],
                ["name", "Tap_VirtualHealthPortal"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, u) {
                var a = !0;
                if ("click" === n) {
                    a = !1 !== l.component.doctor2U() && a
                }
                return a
            }, R.b, R.a)), t._4(23, 1097728, null, 3, Y.a, [z.a, U.a, t.k, t.F, [2, E.a]], null, null), t._25(335544320, 1, {
                contentLabel: 0
            }), t._25(603979776, 2, {
                _buttons: 1
            }), t._25(603979776, 3, {
                _icons: 1
            }), t._4(27, 16384, null, 0, G.a, [], null, null), (l()(), t._27(-1, 2, ["\n          "])), (l()(), t._5(29, 0, null, 0, 4, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), t._4(30, 16384, null, 0, K.a, [], null, null), (l()(), t._27(-1, null, ["\n            "])), (l()(), t._5(32, 0, null, null, 0, "img", [
                ["src", "assets/imgs/audit-icons/examination.png"]
            ], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), t._27(-1, null, ["\n          "])), (l()(), t._27(-1, 2, ["\n          "])), (l()(), t._5(35, 0, null, 2, 2, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), t._27(36, null, ["", ""])), t._20(131072, s.i, [s.j, t.g]), (l()(), t._27(-1, 2, ["\n        "])), (l()(), t._27(-1, null, ["\n    "])), (l()(), t._27(-1, null, ["\n  "])), (l()(), t._27(-1, 1, ["\n  "]))], function(l, n) {
                l(n, 4, 0, "theme")
            }, function(l, n) {
                var u = n.component;
                l(n, 3, 0, t._17(n, 4)._hidden, t._17(n, 4)._sbPadding);
                l(n, 6, 0, u.provideFbTitle);
                l(n, 8, 0, t._28(n, 8, 0, t._17(n, 9).transform("VHA")));
                l(n, 13, 0, t._17(n, 14).statusbarPadding, t._17(n, 14)._hasRefresher);
                l(n, 22, 0, "postMenuFlexiblePay");
                l(n, 32, 0, "postMenuFlexiblePayIcon");
                l(n, 35, 0, "postMenuLbl");
                l(n, 36, 0, t._28(n, 36, 0, t._17(n, 37).transform("doctor2U")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var t = u(1),
            o = (u(0), u(6), u(21)),
            _ = function() {
                function l(l, n, u) {
                    this.navCtrl = l, this.navParams = n, this.reusableUtils = u
                }
                return l.prototype.ionViewDidLoad = function() {}, l.prototype.doctor2U = function() {
                    var l = "https://www.doc2us.com/covid-19-advisory";
                    this.reusableUtils.logHealthCare(l), this.reusableUtils._launchInAppBrowser(l)
                }, l.prototype.doctorOnCall = function() {
                    var l = "https://www.doctoroncall.com.my/coronavirus";
                    this.reusableUtils.logHealthCare(l), this.reusableUtils._launchInAppBrowser(l)
                }, l
            }(),
            i = u(219),
            e = u(218),
            r = u(220),
            s = u(9),
            c = u(176),
            d = u(138),
            b = c.b,
            p = function() {
                return function() {}
            }(),
            h = u(773),
            f = u(774),
            m = u(775),
            g = u(776),
            v = u(777),
            k = u(778),
            y = u(779),
            w = u(780),
            F = u(781),
            P = u(102),
            U = u(3),
            j = u(7),
            H = u(140),
            M = u(75),
            A = u(18),
            C = u(16),
            V = u(139),
            x = u(103),
            I = u(80),
            L = u(67),
            q = u(36),
            B = u(5),
            O = u(14),
            T = u(47),
            D = u(60),
            J = u(63),
            N = u(19),
            R = u(56),
            Y = u(25),
            z = u(23),
            E = u(48),
            G = u(53),
            K = u(141),
            Q = u(17),
            S = t._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            W = t._1("ng-component", _, function(l) {
                return t._29(0, [(l()(), t._5(0, 0, null, null, 1, "ng-component", [], null, null, null, a, S)), t._4(1, 49152, null, 0, _, [C.a, Q.a, o.a], null, null)], null, null)
            }, {}, {}, []),
            X = u(10),
            Z = u(30),
            $ = u(31),
            ll = u(221),
            nl = u(402),
            ul = u(222),
            al = u(158);
        u.d(n, "VirtualHealthAdvisoryPageModuleNgFactory", function() {
            return tl
        });
        var tl = t._2(p, [], function(l) {
            return t._13([t._14(512, t.i, t.Y, [
                [8, [h.a, f.a, m.a, g.a, v.a, k.a, y.a, w.a, F.a, W]],
                [3, t.i], t.w
            ]), t._14(4608, X.l, X.k, [t.v, [2, X.u]]), t._14(4608, Z.u, Z.u, []), t._14(4608, Z.d, Z.d, []), t._14(5120, s.f, b, [d.c]), t._14(4608, s.c, s.e, []), t._14(4608, s.h, s.d, []), t._14(4608, s.b, s.a, []), t._14(4608, s.j, s.j, [s.m, s.f, s.c, s.h, s.b, s.k, s.l]), t._14(4608, $.a, $.a, []), t._14(512, X.b, X.b, []), t._14(512, ll.a, ll.a, []), t._14(512, Z.s, Z.s, []), t._14(512, Z.g, Z.g, []), t._14(512, Z.q, Z.q, []), t._14(512, nl.a, nl.a, []), t._14(512, r.a, r.a, []), t._14(512, ul.a, ul.a, []), t._14(512, s.g, s.g, []), t._14(512, e.a, e.a, []), t._14(512, i.a, i.a, []), t._14(512, nl.b, nl.b, []), t._14(512, p, p, []), t._14(256, s.l, void 0, []), t._14(256, s.k, void 0, []), t._14(256, al.a, _, [])])
        })
    }
});