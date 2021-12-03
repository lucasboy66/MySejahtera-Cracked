webpackJsonp([39], {
    1303: function(l, n, t) {
        "use strict";

        function u(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 1, "p", [
                ["class", "textWrap2"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), s._27(1, null, ["Check-in at ", ""]))], null, function(l, n) {
                l(n, 1, 0, n.parent.context.$implicit.location)
            })
        }

        function i(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 1, "p", [
                ["class", "textWrap2"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), s._27(1, null, ["Check-out at ", ""]))], null, function(l, n) {
                l(n, 1, 0, n.parent.context.$implicit.location)
            })
        }

        function a(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 21, "ion-card", [
                ["class", "checkinHistory"]
            ], null, null, null, null, null)), s._4(1, 16384, null, 0, F.a, [S.a, s.k, s.F], null, null), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._5(3, 0, null, null, 17, "ion-item", [
                ["class", "item item-block"]
            ], null, [
                [null, "click"]
            ], function(l, n, t) {
                var u = !0;
                if ("click" === n) {
                    u = !1 !== l.component.openSuccessPage(l.context.$implicit) && u
                }
                return u
            }, j.b, j.a)), s._4(4, 1097728, null, 3, w.a, [E.a, S.a, s.k, s.F, [2, O.a]], null, null), s._25(335544320, 1, {
                contentLabel: 0
            }), s._25(603979776, 2, {
                _buttons: 1
            }), s._25(603979776, 3, {
                _icons: 1
            }), s._4(8, 16384, null, 0, C.a, [], null, null), (l()(), s._27(-1, 2, ["\n            "])), (l()(), s._5(10, 0, null, 0, 0, "img", [
                ["item-start", ""],
                ["src", "assets/imgs/flat/checkinHistory2.svg"]
            ], null, null, null, null, null)), (l()(), s._27(-1, 2, ["\n            "])), (l()(), s._0(16777216, null, 2, 1, null, u)), s._4(13, 16384, null, 0, P.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, 2, ["\n            "])), (l()(), s._0(16777216, null, 2, 1, null, i)), s._4(16, 16384, null, 0, P.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, 2, ["\n            "])), (l()(), s._5(18, 0, null, 2, 1, "small", [], null, null, null, null, null)), (l()(), s._27(19, null, ["", " ", ""])), (l()(), s._27(-1, 2, ["\n        "])), (l()(), s._27(-1, null, ["\n    "]))], function(l, n) {
                l(n, 13, 0, !n.context.$implicit.isCheckout);
                l(n, 16, 0, n.context.$implicit.isCheckout)
            }, function(l, n) {
                l(n, 19, 0, n.context.$implicit.todayDate, n.context.$implicit.todayTime)
            })
        }

        function e(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 5, "ion-infinite-scroll", [], null, [
                [null, "ionInfinite"]
            ], function(l, n, t) {
                var u = !0;
                if ("ionInfinite" === n) {
                    u = !1 !== l.component.getMore(t) && u
                }
                return u
            }, null, null)), s._4(1, 1196032, null, 0, $.a, [D.a, s.y, s.k, R.a], null, {
                ionInfinite: "ionInfinite"
            }), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._5(3, 0, null, null, 1, "ion-infinite-scroll-content", [], [
                [1, "state", 0]
            ], null, null, M.b, M.a)), s._4(4, 114688, null, 0, T.a, [$.a, S.a], null, null), (l()(), s._27(-1, null, ["\n    "]))], function(l, n) {
                l(n, 4, 0)
            }, function(l, n) {
                l(n, 3, 0, s._17(n, 4).inf.state)
            })
        }

        function o(l) {
            return s._29(0, [(l()(), s._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), s._4(1, 16384, null, 0, W.a, [S.a, s.k, s.F, [2, q.a]], null, null), (l()(), s._27(-1, null, ["\n    "])), (l()(), s._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, A.b, A.a)), s._4(4, 49152, null, 0, B.a, [J.a, [2, q.a],
                [2, N.a], S.a, s.k, s.F
            ], {
                color: [0, "color"]
            }, null), (l()(), s._27(-1, 3, ["\n        "])), (l()(), s._5(6, 0, null, 3, 3, "ion-title", [], null, null, null, Q.b, Q.a)), s._4(7, 49152, null, 0, V.a, [S.a, s.k, s.F, [2, Y.a],
                [2, B.a]
            ], null, null), (l()(), s._27(8, 0, ["\n            ", "\n        "])), s._20(131072, c.i, [c.j, s.g]), (l()(), s._27(-1, 3, ["\n    "])), (l()(), s._27(-1, null, ["\n"])), (l()(), s._27(-1, null, ["\n\n"])), (l()(), s._5(13, 0, null, null, 24, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, z.b, z.a)), s._4(14, 4374528, null, 0, D.a, [S.a, G.a, R.a, s.k, s.F, J.a, K.a, s.y, [2, q.a],
                [2, N.a]
            ], null, null), (l()(), s._27(-1, 1, ["\n    "])), (l()(), s._5(16, 0, null, 1, 14, "ion-card", [
                ["class", "checkinHistory"]
            ], null, null, null, null, null)), s._4(17, 16384, null, 0, F.a, [S.a, s.k, s.F], null, null), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._5(19, 0, null, null, 10, "ion-card-content", [
                ["class", "note"]
            ], null, null, null, null, null)), s._4(20, 16384, null, 0, U.a, [S.a, s.k, s.F], null, null), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._5(22, 0, null, null, 2, "p", [
                ["class", "mt-1"]
            ], null, null, null, null, null)), (l()(), s._27(23, null, ["", ""])), s._20(131072, c.i, [c.j, s.g]), (l()(), s._27(-1, null, ["\n            "])), (l()(), s._5(26, 0, null, null, 2, "p", [
                ["class", "mt-2"]
            ], null, null, null, null, null)), (l()(), s._27(27, null, ["", ""])), s._20(131072, c.i, [c.j, s.g]), (l()(), s._27(-1, null, ["\n        "])), (l()(), s._27(-1, null, ["\n    "])), (l()(), s._27(-1, 1, ["\n    \n    "])), (l()(), s._0(16777216, null, 1, 1, null, a)), s._4(33, 802816, null, 0, P.i, [s.O, s.L, s.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), s._27(-1, 1, ["\n    "])), (l()(), s._0(16777216, null, 1, 1, null, e)), s._4(36, 16384, null, 0, P.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), s._27(-1, 1, ["\n"]))], function(l, n) {
                var t = n.component;
                l(n, 4, 0, "theme");
                l(n, 33, 0, t.historyList);
                l(n, 36, 0, t.isInfiniteScrollEnabled)
            }, function(l, n) {
                l(n, 3, 0, s._17(n, 4)._hidden, s._17(n, 4)._sbPadding);
                l(n, 8, 0, s._28(n, 8, 0, s._17(n, 9).transform("history")));
                l(n, 13, 0, s._17(n, 14).statusbarPadding, s._17(n, 14)._hasRefresher);
                l(n, 23, 0, s._28(n, 23, 0, s._17(n, 24).transform("historyRemovedOnLogout")));
                l(n, 27, 0, s._28(n, 27, 0, s._17(n, 28).transform("canCheckoutFromHere")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t(1),
            r = (t(0), t(6), t(68)),
            c = t(9),
            _ = function() {
                function l(l, n, t) {
                    this.nav = l, this.DBAccess = n, this.translate = t, this.isInfiniteScrollEnabled = !1, this.allHistory = [], this.historyList = []
                }
                return l.prototype.ionViewDidEnter = function() {
                    this.getHistory()
                }, l.prototype.getHistory = function() {
                    var l = this,
                        n = "SELECT * FROM checkInHistory WHERE checkInTime > " + ((new Date).getTime() - 2592e6),
                        t = [];
                    try {
                        l.DBAccess.getRecords(n, []).then(function(n) {
                            if (n.tx.rows.length > 0) {
                                for (var u = 0; u < n.tx.rows.length; u++) {
                                    var i = JSON.parse(n.tx.rows.item(u).jsonData);
                                    i.time = n.tx.rows.item(u).checkInTime, t.push(i)
                                }
                                l.allHistory = t.reverse(), n.tx.rows.length > 10 ? (l.historyList = l.allHistory.slice(0, 10), l.isInfiniteScrollEnabled = !0) : l.historyList = l.allHistory
                            }
                        }, function(l) {})
                    } catch (l) {}
                }, l.prototype.getMore = function(l) {
                    try {
                        if (this.allHistory.length > this.historyList.length) {
                            var n = this.historyList.length,
                                t = this.historyList.length + 9,
                                u = this.allHistory.length - 1;
                            if (this.allHistory.length - this.historyList.length > 10)
                                for (; n < t; n++) this.historyList.push(this.allHistory[n]);
                            else {
                                for (; n <= u; n++) this.historyList.push(this.allHistory[n]);
                                this.isInfiniteScrollEnabled = !1
                            }
                            l.complete()
                        } else l.complete(), this.isInfiniteScrollEnabled = !1
                    } catch (l) {}
                }, l.prototype.openSuccessPage = function(l) {
                    this.nav.push("ScanQRCodePage", {
                        historyItem: l
                    })
                }, l
            }(),
            h = t(219),
            f = t(220),
            g = t(138),
            y = t(176).b,
            p = function() {
                return function() {}
            }(),
            d = t(773),
            m = t(774),
            b = t(775),
            k = t(776),
            H = t(777),
            v = t(778),
            I = t(779),
            L = t(780),
            x = t(781),
            F = t(60),
            S = t(3),
            j = t(56),
            w = t(25),
            E = t(23),
            O = t(48),
            C = t(53),
            P = t(10),
            $ = t(165),
            D = t(36),
            R = t(14),
            M = t(412),
            T = t(183),
            W = t(102),
            q = t(7),
            A = t(140),
            B = t(75),
            J = t(18),
            N = t(16),
            Q = t(139),
            V = t(103),
            Y = t(80),
            z = t(67),
            G = t(5),
            K = t(47),
            U = t(54),
            X = s._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            Z = s._1("ScanHistory", _, function(l) {
                return s._29(0, [(l()(), s._5(0, 0, null, null, 1, "ScanHistory", [], null, null, null, o, X)), s._4(1, 49152, null, 0, _, [N.a, r.a, c.j], null, null)], null, null)
            }, {}, {}, []),
            ll = t(30),
            nl = t(31),
            tl = t(221),
            ul = t(402),
            il = t(222),
            al = t(218),
            el = t(158);
        t.d(n, "ScanHistoryPageModuleNgFactory", function() {
            return ol
        });
        var ol = s._2(p, [], function(l) {
            return s._13([s._14(512, s.i, s.Y, [
                [8, [d.a, m.a, b.a, k.a, H.a, v.a, I.a, L.a, x.a, Z]],
                [3, s.i], s.w
            ]), s._14(4608, P.l, P.k, [s.v, [2, P.u]]), s._14(4608, ll.u, ll.u, []), s._14(4608, ll.d, ll.d, []), s._14(5120, c.f, y, [g.c]), s._14(4608, c.c, c.e, []), s._14(4608, c.h, c.d, []), s._14(4608, c.b, c.a, []), s._14(4608, c.j, c.j, [c.m, c.f, c.c, c.h, c.b, c.k, c.l]), s._14(4608, nl.a, nl.a, []), s._14(512, P.b, P.b, []), s._14(512, tl.a, tl.a, []), s._14(512, ll.s, ll.s, []), s._14(512, ll.g, ll.g, []), s._14(512, ll.q, ll.q, []), s._14(512, ul.a, ul.a, []), s._14(512, f.a, f.a, []), s._14(512, il.a, il.a, []), s._14(512, c.g, c.g, []), s._14(512, al.a, al.a, []), s._14(512, h.a, h.a, []), s._14(512, ul.b, ul.b, []), s._14(512, p, p, []), s._14(256, c.l, void 0, []), s._14(256, c.k, void 0, []), s._14(256, el.a, _, [])])
        })
    }
});