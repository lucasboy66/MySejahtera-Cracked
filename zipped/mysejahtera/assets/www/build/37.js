webpackJsonp([37], {
    1305: function(l, n, u) {
        "use strict";

        function t(l) {
            return r._29(0, [(l()(), r._5(0, 0, null, null, 0, "img", [], [
                [8, "src", 4],
                [8, "id", 0]
            ], null, null, null, null))], null, function(l, n) {
                l(n, 0, 0, n.parent.context.$implicit.imageUrl, "shaaredPeopleListImageUrl_" + (n.parent.context.$implicit.employeeId - 0))
            })
        }

        function a(l) {
            return r._29(0, [(l()(), r._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), r._27(1, null, ["", ""]))], null, function(l, n) {
                var u = n.component;
                l(n, 0, 0, "sharedListTwoLetterName_" + n.parent.context.$implicit.employeeId);
                l(n, 1, 0, u.UserUtils.getInitials(n.parent.context.$implicit.displayName))
            })
        }

        function e(l) {
            return r._29(0, [(l()(), r._5(0, 0, null, null, 19, "ion-item", [
                ["class", "item item-block"]
            ], null, null, null, w.b, w.a)), r._4(1, 1097728, null, 3, x.a, [F.a, U.a, r.k, r.F, [2, O.a]], null, null), r._25(335544320, 1, {
                contentLabel: 0
            }), r._25(603979776, 2, {
                _buttons: 1
            }), r._25(603979776, 3, {
                _icons: 1
            }), r._4(5, 16384, null, 0, $.a, [], null, null), (l()(), r._27(-1, 2, ["\n            "])), (l()(), r._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), r._4(8, 16384, null, 0, M.a, [], null, null), (l()(), r._27(-1, null, ["\n                "])), (l()(), r._0(16777216, null, null, 1, null, t)), r._4(11, 16384, null, 0, N.j, [r.O, r.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), r._27(-1, null, ["\n                "])), (l()(), r._0(16777216, null, null, 1, null, a)), r._4(14, 16384, null, 0, N.j, [r.O, r.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), r._27(-1, null, ["\n            "])), (l()(), r._27(-1, 2, ["\n            "])), (l()(), r._5(17, 0, null, 2, 1, "h6", [
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), r._27(18, null, ["", ""])), (l()(), r._27(-1, 2, ["\n        "]))], function(l, n) {
                l(n, 11, 0, n.context.$implicit.imageUrl);
                l(n, 14, 0, !n.context.$implicit.imageUrl)
            }, function(l, n) {
                l(n, 18, 0, n.context.$implicit.displayName)
            })
        }

        function i(l) {
            return r._29(0, [(l()(), r._5(0, 0, null, null, 5, "ion-list", [
                ["class", "items-no-lines"]
            ], null, [
                [null, "swipe"]
            ], function(l, n, u) {
                var t = !0;
                if ("swipe" === n) {
                    t = !1 !== l.component.closeModal() && t
                }
                return t
            }, null, null)), r._4(1, 16384, null, 0, C.a, [U.a, r.k, r.F, S.a, T.l, q.a], null, null), (l()(), r._27(-1, null, ["\n        "])), (l()(), r._0(16777216, null, null, 1, null, e)), r._4(4, 802816, null, 0, N.i, [r.O, r.L, r.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), r._27(-1, null, ["\n    "]))], function(l, n) {
                l(n, 4, 0, n.component.sharedPeopleList)
            }, null)
        }

        function o(l) {
            return r._29(0, [(l()(), r._5(0, 0, null, null, 9, "ion-content", [
                ["class", "modal-content"]
            ], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, E.b, E.a)), r._4(1, 4374528, null, 0, R.a, [U.a, S.a, q.a, r.k, r.F, A.a, D.a, r.y, [2, H.a],
                [2, J.a]
            ], null, null), (l()(), r._27(-1, 1, ["\n    "])), (l()(), r._5(3, 0, null, 1, 2, "h3", [
                ["class", "bold"]
            ], null, null, null, null, null)), (l()(), r._27(4, null, ["", ""])), r._20(131072, c.i, [c.j, r.g]), (l()(), r._27(-1, 1, ["\n    "])), (l()(), r._0(16777216, null, 1, 1, null, i)), r._4(8, 16384, null, 0, N.j, [r.O, r.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), r._27(-1, 1, ["\n"])), (l()(), r._27(-1, null, ["\n\n"])), (l()(), r._5(11, 0, null, null, 7, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), r._4(12, 16384, null, 0, V.a, [U.a, r.k, r.F, [2, H.a]], null, null), (l()(), r._27(-1, null, ["\n    "])), (l()(), r._5(14, 0, null, null, 3, "button", [
                ["clear", ""],
                ["color", "dark"],
                ["full", ""],
                ["ion-button", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.closeModal() && t
                }
                return t
            }, W.b, W.a)), r._4(15, 1097728, null, 0, Y.a, [
                [8, ""], U.a, r.k, r.F
            ], {
                color: [0, "color"],
                clear: [1, "clear"],
                full: [2, "full"]
            }, null), (l()(), r._27(16, 0, ["", ""])), r._20(131072, c.i, [c.j, r.g]), (l()(), r._27(-1, null, ["\n"]))], function(l, n) {
                l(n, 8, 0, n.component.sharedPeopleList);
                l(n, 15, 0, "dark", "", "")
            }, function(l, n) {
                l(n, 0, 0, r._17(n, 1).statusbarPadding, r._17(n, 1)._hasRefresher);
                l(n, 4, 0, r._28(n, 4, 0, r._17(n, 5).transform("shareList")));
                l(n, 16, 0, r._28(n, 16, 0, r._17(n, 17).transform("cancel")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = u(1),
            _ = (u(0), u(6), u(138)),
            c = u(9),
            s = u(176),
            f = u(88),
            p = u(11),
            m = function() {
                function l(l, n, u, t, a, e) {
                    this.navCtrl = l, this.viewCtrl = n, this.commomProvider = u, this.UserUtils = t, this.translate = a, this.navParams = e, this.empType = "SHARED"
                }
                return l.prototype.closeModal = function() {
                    this.viewCtrl.dismiss()
                }, l.prototype.ionViewWillEnter = function() {
                    var l = this;
                    l.commomProvider.getSharedPeopleList(l.navParams.data.threadId, l.empType).subscribe(function(n) {
                        l.sharedPeopleList = n
                    }, function(l) {})
                }, l
            }(),
            d = s.b,
            g = function() {
                return function() {}
            }(),
            h = u(773),
            b = u(774),
            v = u(775),
            k = u(776),
            L = u(777),
            y = u(778),
            P = u(779),
            I = u(780),
            j = u(781),
            w = u(56),
            x = u(25),
            F = u(23),
            U = u(3),
            O = u(48),
            $ = u(53),
            M = u(141),
            N = u(10),
            C = u(63),
            S = u(5),
            T = u(19),
            q = u(14),
            E = u(67),
            R = u(36),
            A = u(18),
            D = u(47),
            H = u(7),
            J = u(16),
            V = u(95),
            W = u(37),
            Y = u(27),
            z = u(17),
            B = r._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            G = r._1("ng-component", m, function(l) {
                return r._29(0, [(l()(), r._5(0, 0, null, null, 1, "ng-component", [], null, null, null, o, B)), r._4(1, 49152, null, 0, m, [J.a, H.a, f.a, p.a, c.j, z.a], null, null)], null, null)
            }, {}, {}, []),
            K = u(30),
            Q = u(402),
            X = u(158);
        u.d(n, "SharedListModalPagePageModuleNgFactory", function() {
            return Z
        });
        var Z = r._2(g, [], function(l) {
            return r._13([r._14(512, r.i, r.Y, [
                [8, [h.a, b.a, v.a, k.a, L.a, y.a, P.a, I.a, j.a, G]],
                [3, r.i], r.w
            ]), r._14(4608, N.l, N.k, [r.v, [2, N.u]]), r._14(4608, K.u, K.u, []), r._14(4608, K.d, K.d, []), r._14(5120, c.f, d, [_.c]), r._14(4608, c.c, c.e, []), r._14(4608, c.h, c.d, []), r._14(4608, c.b, c.a, []), r._14(4608, c.j, c.j, [c.m, c.f, c.c, c.h, c.b, c.k, c.l]), r._14(512, N.b, N.b, []), r._14(512, K.s, K.s, []), r._14(512, K.g, K.g, []), r._14(512, K.q, K.q, []), r._14(512, Q.a, Q.a, []), r._14(512, Q.b, Q.b, []), r._14(512, c.g, c.g, []), r._14(512, g, g, []), r._14(256, X.a, m, []), r._14(256, c.l, void 0, []), r._14(256, c.k, void 0, [])])
        })
    }
});