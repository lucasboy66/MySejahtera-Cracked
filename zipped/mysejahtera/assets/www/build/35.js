webpackJsonp([35], {
    1310: function(l, n, t) {
        "use strict";

        function a(l) {
            return b._29(0, [b._25(402653184, 1, {
                _vp: 0
            }), (l()(), b._5(1, 16777216, [
                [1, 3],
                ["viewport", 1]
            ], null, 0, "div", [], null, null, null, null, null)), (l()(), b._5(2, 0, null, null, 0, "div", [
                ["class", "nav-decor"]
            ], null, null, null, null, null))], null, null)
        }

        function u(l) {
            return b._29(0, [(l()(), b._5(0, 0, null, null, 1, "ion-icon", [
                ["class", "tab-button-icon"],
                ["role", "img"]
            ], [
                [1, "aria-hidden", 0],
                [2, "hide", null]
            ], null, null, null, null)), b._4(1, 147456, null, 0, ll.a, [z.a, b.k, b.F], {
                name: [0, "name"],
                isActive: [1, "isActive"]
            }, null)], function(l, n) {
                var t = n.component;
                l(n, 1, 0, t.tab.tabIcon, t.tab.isSelected)
            }, function(l, n) {
                l(n, 0, 0, n.component.hasTitle ? "true" : null, b._17(n, 1)._hidden)
            })
        }

        function o(l) {
            return b._29(0, [(l()(), b._5(0, 0, null, null, 1, "span", [
                ["class", "tab-button-text"]
            ], null, null, null, null, null)), (l()(), b._27(1, null, ["", ""]))], null, function(l, n) {
                l(n, 1, 0, n.component.tab.tabTitle)
            })
        }

        function i(l) {
            return b._29(0, [(l()(), b._5(0, 0, null, null, 2, "ion-badge", [
                ["class", "tab-badge"]
            ], null, null, null, null, null)), b._4(1, 16384, null, 0, nl.a, [z.a, b.k, b.F], {
                color: [0, "color"]
            }, null), (l()(), b._27(2, null, ["", ""]))], function(l, n) {
                l(n, 1, 0, n.component.tab.tabBadgeStyle)
            }, function(l, n) {
                l(n, 2, 0, n.component.tab.tabBadge)
            })
        }

        function e(l) {
            return b._29(0, [(l()(), b._0(16777216, null, null, 1, null, u)), b._4(1, 16384, null, 0, tl.j, [b.O, b.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), b._0(16777216, null, null, 1, null, o)), b._4(3, 16384, null, 0, tl.j, [b.O, b.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), b._0(16777216, null, null, 1, null, i)), b._4(5, 16384, null, 0, tl.j, [b.O, b.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), b._5(6, 0, null, null, 0, "div", [
                ["class", "button-effect"]
            ], null, null, null, null, null))], function(l, n) {
                var t = n.component;
                l(n, 1, 0, t.tab.tabIcon);
                l(n, 3, 0, t.tab.tabTitle);
                l(n, 5, 0, t.tab.tabBadge)
            }, null)
        }

        function s(l) {
            return b._29(0, [(l()(), b._5(0, 0, null, null, 1, "a", [
                ["class", "tab-button"],
                ["href", "#"],
                ["role", "tab"]
            ], [
                [1, "id", 0],
                [1, "aria-controls", 0],
                [1, "aria-selected", 0],
                [2, "has-title", null],
                [2, "has-icon", null],
                [2, "has-title-only", null],
                [2, "icon-only", null],
                [2, "has-badge", null],
                [2, "disable-hover", null],
                [2, "tab-disabled", null],
                [2, "tab-hidden", null]
            ], [
                [null, "ionSelect"],
                [null, "click"]
            ], function(l, n, t) {
                var a = !0,
                    u = l.component;
                if ("click" === n) {
                    a = !1 !== b._17(l, 1).onClick() && a
                }
                if ("ionSelect" === n) {
                    a = !1 !== u.select(l.context.$implicit) && a
                }
                return a
            }, e, ul)), b._4(1, 114688, null, 0, al.a, [z.a, b.k, b.F], {
                tab: [0, "tab"]
            }, {
                ionSelect: "ionSelect"
            })], function(l, n) {
                l(n, 1, 0, n.context.$implicit)
            }, function(l, n) {
                l(n, 0, 1, [b._17(n, 1).tab._btnId, b._17(n, 1).tab._tabId, b._17(n, 1).tab.isSelected, b._17(n, 1).hasTitle, b._17(n, 1).hasIcon, b._17(n, 1).hasTitleOnly, b._17(n, 1).hasIconOnly, b._17(n, 1).hasBadge, b._17(n, 1).disHover, !b._17(n, 1).tab.enabled, !b._17(n, 1).tab.show])
            })
        }

        function c(l) {
            return b._29(0, [b._25(402653184, 1, {
                _highlight: 0
            }), b._25(402653184, 2, {
                _tabbar: 0
            }), b._25(402653184, 3, {
                portal: 0
            }), (l()(), b._5(3, 0, [
                [2, 0],
                ["tabbar", 1]
            ], null, 4, "div", [
                ["class", "tabbar"],
                ["role", "tablist"]
            ], null, null, null, null, null)), (l()(), b._0(16777216, null, null, 1, null, s)), b._4(5, 802816, null, 0, tl.i, [b.O, b.L, b.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), b._5(6, 0, null, null, 1, "div", [
                ["class", "tab-highlight"]
            ], null, null, null, null, null)), b._4(7, 16384, [
                [1, 4]
            ], 0, ol.a, [b.k, X.a], null, null), b._16(null, 0), (l()(), b._5(9, 16777216, [
                [3, 3],
                ["portal", 1]
            ], null, 0, "div", [
                ["tab-portal", ""]
            ], null, null, null, null, null))], function(l, n) {
                l(n, 5, 0, n.component._tabs)
            }, null)
        }

        function _(l) {
            return b._29(0, [(l()(), b._5(0, 0, null, null, 2, "ion-tab", [
                ["role", "tabpanel"]
            ], [
                [8, "id", 0],
                [1, "id", 0],
                [1, "aria-labelledby", 0]
            ], null, null, a, Z)), b._4(1, 245760, null, 0, J.a, [N.a, Y.a, z.a, G.a, b.k, b.y, b.F, b.i, b.g, K.l, V.a, [2, W.a], X.a, b.l], {
                root: [0, "root"],
                tabTitle: [1, "tabTitle"],
                tabIcon: [2, "tabIcon"]
            }, null), b._20(131072, d.i, [d.j, b.g])], function(l, n) {
                l(n, 1, 0, n.context.$implicit.root, b._28(n, 1, 1, b._17(n, 2).transform(n.context.$implicit.title)), n.context.$implicit.icon)
            }, function(l, n) {
                l(n, 0, 0, n.context.$implicit.id, b._17(n, 1)._tabId, b._17(n, 1)._btnId)
            })
        }

        function r(l) {
            return b._29(0, [b._25(402653184, 1, {
                tabRef: 0
            }), (l()(), b._5(1, 0, null, null, 9, "ion-tabs", [], null, null, null, c, _l)), b._23(6144, null, il.a, null, [N.a]), b._4(3, 4374528, [
                [1, 4],
                ["myTabs", 4]
            ], 0, N.a, [
                [2, el.a],
                [2, sl.a], Y.a, z.a, b.k, G.a, b.F, W.a, cl.a
            ], null, null), (l()(), b._27(-1, 0, ["\n    "])), (l()(), b._27(-1, 0, ["\n  "])), (l()(), b._0(16777216, null, 0, 1, null, _)), b._4(7, 802816, null, 0, tl.i, [b.O, b.L, b.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), b._27(-1, 0, ["\n  "])), (l()(), b._27(-1, 0, ["\n  "])), (l()(), b._27(-1, 0, ["\n"])), (l()(), b._27(-1, null, ["\n\n"]))], function(l, n) {
                l(n, 7, 0, n.component.tabs)
            }, null)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var b = t(1),
            d = (t(0), t(6), t(9)),
            h = t(64),
            f = t(12),
            m = t(11),
            g = t(13),
            p = t(68),
            v = t(40),
            y = t(65),
            I = t(163),
            k = t(405),
            T = t(223),
            P = t(88),
            R = t(21),
            O = t(31),
            S = function() {
                function l(l, n, t, a, u, o, i, e, s, c, _, r, b, d, h, f) {
                    this.network = l, this.nav = n, this.config = t, this.DataAccess = a, this.DBAccess = u, this.UserUtils = o, this.toastCtrl = i, this.StorageAccess = e, this.translate = s, this.device = c, this.connectivity = _, this.eventEmitterService = r, this.modalCtrl = b, this.commonProvider = d, this.ReusableUtils = h, this.mixPanelService = f, this.translateClient = y.a.translation, this.local = window.localStorage, this.tab1Root = "HomePage", this.tab2Root = k.b, this.tab3Root = "TeamPage", this.tab4Root = "ProfilePage", this.tab5Root = "TaskManagementHub", this.tab6Root = "DeckItems", this.tab7Root = "MoreMenu", this.tab8Root = "RewardsModule", this.tab9Root = "PointHistoryPage", this.errorCodeEnabled = !1, this.tabs = [];
                    this.tabs.push({
                        name: "Tap_Hub",
                        title: this.translateClient + ".hub",
                        root: "HomePage",
                        icon: "custom-home",
                        id: "tabHub"
                    }), this.tabs.push({
                        name: "Tap_Dashboard",
                        title: "dashboard",
                        root: k.b,
                        icon: "custom-dashboard",
                        id: "tabDashbaord"
                    }), this.tabs.push({
                        name: "Tap_QRCode",
                        title: "checkIn",
                        root: "ScanAndCheckInTab",
                        icon: "custom-my-qr",
                        id: "myQRCode"
                    }), this.tabs.push({
                        name: "Tap_Profile",
                        title: "profile",
                        root: "ProfilePage",
                        icon: "custom-profile",
                        id: "tabProfile"
                    })
                }
                return l.prototype.tabChanged = function(l) {}, l
            }(),
            C = t(219),
            F = t(220),
            j = t(138),
            w = t(176),
            x = t(218),
            H = w.b,
            A = function() {
                return function() {}
            }(),
            M = t(773),
            $ = t(774),
            B = t(775),
            D = t(776),
            L = t(777),
            q = t(778),
            U = t(779),
            E = t(780),
            Q = t(781),
            J = t(428),
            N = t(300),
            Y = t(18),
            z = t(3),
            G = t(5),
            K = t(19),
            V = t(128),
            W = t(57),
            X = t(14),
            Z = b._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            ll = t(38),
            nl = t(427),
            tl = t(10),
            al = t(429),
            ul = b._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            ol = t(307),
            il = t(151),
            el = t(16),
            sl = t(7),
            cl = t(47),
            _l = b._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            rl = t(104),
            bl = t(50),
            dl = b._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            hl = b._1("ng-component", S, function(l) {
                return b._29(0, [(l()(), b._5(0, 0, null, null, 1, "ng-component", [], null, null, null, r, dl)), b._4(1, 49152, null, 0, S, [v.a, el.a, z.a, f.a, p.a, m.a, rl.a, g.a, d.j, h.a, I.a, T.a, bl.a, P.a, R.a, O.a], null, null)], null, null)
            }, {}, {}, []),
            fl = t(30),
            ml = t(221),
            gl = t(402),
            pl = t(222),
            vl = t(158);
        t.d(n, "TabsPageModuleNgFactory", function() {
            return yl
        });
        var yl = b._2(A, [], function(l) {
            return b._13([b._14(512, b.i, b.Y, [
                [8, [M.a, $.a, B.a, D.a, L.a, q.a, U.a, E.a, Q.a, hl]],
                [3, b.i], b.w
            ]), b._14(4608, tl.l, tl.k, [b.v, [2, tl.u]]), b._14(4608, fl.u, fl.u, []), b._14(4608, fl.d, fl.d, []), b._14(5120, d.f, H, [j.c]), b._14(4608, d.c, d.e, []), b._14(4608, d.h, d.d, []), b._14(4608, d.b, d.a, []), b._14(4608, d.j, d.j, [d.m, d.f, d.c, d.h, d.b, d.k, d.l]), b._14(4608, O.a, O.a, []), b._14(512, tl.b, tl.b, []), b._14(512, ml.a, ml.a, []), b._14(512, fl.s, fl.s, []), b._14(512, fl.g, fl.g, []), b._14(512, fl.q, fl.q, []), b._14(512, gl.a, gl.a, []), b._14(512, F.a, F.a, []), b._14(512, pl.a, pl.a, []), b._14(512, d.g, d.g, []), b._14(512, x.a, x.a, []), b._14(512, C.a, C.a, []), b._14(512, gl.b, gl.b, []), b._14(512, A, A, []), b._14(256, d.l, void 0, []), b._14(256, d.k, void 0, []), b._14(256, vl.a, S, [])])
        })
    }
});