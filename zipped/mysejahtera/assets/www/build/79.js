webpackJsonp([79], {
    1247: function(n, l, t) {
        "use strict";

        function e(n) {
            return o._29(0, [(n()(), o._5(0, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(n, l, t) {
                var e = !0;
                if ("load" === l) {
                    e = !1 !== o._17(n, 1).onLoad() && e
                }
                if ("error" === l) {
                    e = !1 !== o._17(n, 1).onError() && e
                }
                return e
            }, null, null)), o._4(1, 540672, null, 0, $.a, [j.a, o.k, M.a], {
                cache: [0, "cache"],
                employeeId: [1, "employeeId"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.parent.context.$implicit.imageUrl, l.parent.context.$implicit.employeeId)
            }, function(n, l) {
                n(l, 0, 0, "checkInReviewOwnerInfoImgIcon_" + l.parent.context.index)
            })
        }

        function i(n) {
            return o._29(0, [(n()(), o._5(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), o._27(1, null, ["", ""]))], null, function(n, l) {
                n(l, 1, 0, l.component.UserUtils.getInitials(l.parent.context.$implicit.displayName))
            })
        }

        function a(n) {
            return o._29(0, [(n()(), o._5(0, 0, null, null, 20, "ion-item", [
                ["align-items-start", ""],
                ["class", "item item-block"]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(n, l, t) {
                var e = !0;
                if ("click" === l) {
                    e = !1 !== n.component.showModal(n.context.$implicit) && e
                }
                return e
            }, N.b, N.a)), o._4(1, 1097728, null, 3, T.a, [E.a, H.a, o.k, o.F, [2, J.a]], null, null), o._25(335544320, 1, {
                contentLabel: 0
            }), o._25(603979776, 2, {
                _buttons: 1
            }), o._25(603979776, 3, {
                _icons: 1
            }), o._4(5, 16384, null, 0, q.a, [], null, null), (n()(), o._27(-1, 2, ["\n\t\t\t\t\t"])), (n()(), o._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), o._4(8, 16384, null, 0, S.a, [], null, null), (n()(), o._27(-1, null, ["\n\t\t\t\t\t\t"])), (n()(), o._0(16777216, null, null, 1, null, e)), o._4(11, 16384, null, 0, A.j, [o.O, o.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), o._27(-1, null, ["\n\t\t\t\t\t\t\t"])), (n()(), o._0(16777216, null, null, 1, null, i)), o._4(14, 16384, null, 0, A.j, [o.O, o.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), o._27(-1, null, ["\n\t\t\t\t\t"])), (n()(), o._27(-1, 2, ["\n\t\t\t\t\t"])), (n()(), o._5(17, 0, null, 2, 0, "p", [
                ["text-wrap", ""]
            ], [
                [8, "id", 0],
                [8, "innerHTML", 1]
            ], null, null, null, null)), (n()(), o._27(-1, 2, ["\n\t\t\t\t\t"])), (n()(), o._5(19, 0, null, 2, 0, "small", [
                ["text-wrap", ""]
            ], [
                [8, "id", 0],
                [8, "innerHTML", 1]
            ], null, null, null, null)), (n()(), o._27(-1, 2, ["\n\t\t\t\t"]))], function(n, l) {
                n(l, 11, 0, l.context.$implicit.imageUrl);
                n(l, 14, 0, !l.context.$implicit.imageUrl)
            }, function(n, l) {
                n(l, 0, 0, "checkInReviewOwnerInfoBtn_" + l.context.index);
                n(l, 17, 0, "checkInReviewDetailsName_" + l.context.index, l.context.$implicit.displayName);
                n(l, 19, 0, "checkInReviewOwnerDesg_" + l.context.index, l.context.$implicit.designation)
            })
        }

        function u(n) {
            return o._29(0, [(n()(), o._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), o._4(1, 16384, null, 0, B.a, [H.a, o.k, o.F, [2, G.a]], null, null), (n()(), o._27(-1, null, ["\n\t"])), (n()(), o._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, V.b, V.a)), o._4(4, 49152, null, 0, W.a, [Y.a, [2, G.a],
                [2, z.a], H.a, o.k, o.F
            ], {
                color: [0, "color"]
            }, null), (n()(), o._27(-1, 3, ["\n\t\t"])), (n()(), o._5(6, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, K.b, K.a)), o._4(7, 49152, null, 0, Q.a, [H.a, o.k, o.F, [2, X.a],
                [2, W.a]
            ], null, null), (n()(), o._27(8, 0, ["", ""])), o._20(131072, s.i, [s.j, o.g]), (n()(), o._27(-1, 3, ["\n\t"])), (n()(), o._27(-1, null, ["\n"])), (n()(), o._27(-1, null, ["\n"])), (n()(), o._5(13, 0, null, null, 17, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, Z.b, Z.a)), o._4(14, 4374528, null, 0, nn.a, [H.a, ln.a, tn.a, o.k, o.F, Y.a, en.a, o.y, [2, G.a],
                [2, z.a]
            ], null, null), (n()(), o._27(-1, 1, ["\n\t"])), (n()(), o._5(16, 0, null, 1, 13, "ion-card", [], null, null, null, null, null)), o._4(17, 16384, null, 0, an.a, [H.a, o.k, o.F], null, null), (n()(), o._27(-1, null, ["\n\t\t"])), (n()(), o._5(19, 0, null, null, 9, "ion-card-content", [], null, null, null, null, null)), o._4(20, 16384, null, 0, un.a, [H.a, o.k, o.F], null, null), (n()(), o._27(-1, null, ["\n\t\t\t"])), (n()(), o._5(22, 0, null, null, 5, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), o._4(23, 16384, null, 0, on.a, [H.a, o.k, o.F, ln.a, sn.l, tn.a], null, null), (n()(), o._27(-1, null, ["\n\t\t\t\t"])), (n()(), o._0(16777216, null, null, 1, null, a)), o._4(26, 802816, null, 0, A.i, [o.O, o.L, o.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), o._27(-1, null, ["\n\t\t\t"])), (n()(), o._27(-1, null, ["\n\t\t"])), (n()(), o._27(-1, null, ["\n\t"])), (n()(), o._27(-1, 1, ["\n"]))], function(n, l) {
                var t = l.component;
                n(l, 4, 0, "theme");
                n(l, 26, 0, t.checkInDetails)
            }, function(n, l) {
                n(l, 3, 0, o._17(l, 4)._hidden, o._17(l, 4)._sbPadding);
                n(l, 6, 0, "checkInReviewDetailsHeader");
                n(l, 8, 0, o._28(l, 8, 0, o._17(l, 9).transform("teamCheckIn")));
                n(l, 13, 0, o._17(l, 14).statusbarPadding, o._17(l, 14)._hasRefresher)
            })
        }
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var o = t(1),
            s = (t(0), t(6), t(9)),
            c = t(49),
            r = t.n(c),
            _ = t(11),
            h = t(20),
            d = t(12),
            f = t(409),
            p = t(21),
            g = function() {
                function n(n, l, t, e, i, a, u, o, s, c, r) {
                    this.nav = n, this.network = l, this.navParams = t, this.UserUtils = e, this.translate = i, this.modalCtr = a, this.loadingCtrl = u, this.alertCtrl = o, this.DataAccess = s, this.checkInProvider = c, this.ReusableUtils = r, this.infoListLength = [], this.errorCodeEnabled = !1, this.isPush = !1;
                    this.navParams.data && (this.groupThreadId = this.navParams.get("threadGroupId")), this.navParams.get("isPush") && (this.isPush = this.navParams.get("isPush"))
                }
                return n.prototype.ionViewWillEnter = function() {
                    this.getReviewDeatils()
                }, n.prototype.removeOwner = function(n) {
                    var l = JSON.parse(n),
                        t = [];
                    r.a.each(this.checkInDetails, function(n) {
                        n.employeeId != l.employeeId && t.push(n)
                    }), this.checkInDetails = t
                }, n.prototype.showModal = function(n) {
                    if (this.network.checkInternetConnection()) {
                        this.nav.push("TeamcheckInModal", {
                            owner: JSON.stringify(n),
                            checkInDetails: this.checkInDetails,
                            infoListLength: this.infoListLength,
                            checkInList: this.checkInList
                        })
                    }
                }, n.prototype.getListInfo = function(n) {
                    this.infoListLength = this.checkInList, 1 == this.infoListLength.length && n ? this.nav.popToRoot() : this.getReviewDeatils()
                }, n.prototype.getReviewDeatils = function() {
                    var n = this;
                    n.checkInProvider.getReviewDetails(n.groupThreadId, n.isPush).subscribe(function(l) {
                        n.checkInDetails = l, n.infoListLength = l, n.ownerInfoList = n.infoListLength.length, n.checkInList = l
                    }, function(l) {
                        n.ReusableUtils.showHttpError(l)
                    })
                }, n
            }(),
            m = t(219),
            k = t(220),
            I = t(138),
            v = t(176),
            b = t(218),
            L = v.b,
            w = function() {
                return function() {}
            }(),
            x = t(773),
            y = t(774),
            D = t(775),
            P = t(776),
            R = t(777),
            O = t(778),
            F = t(779),
            U = t(780),
            C = t(781),
            $ = t(177),
            j = t(85),
            M = t(81),
            N = t(56),
            T = t(25),
            E = t(23),
            H = t(3),
            J = t(48),
            q = t(53),
            S = t(141),
            A = t(10),
            B = t(102),
            G = t(7),
            V = t(140),
            W = t(75),
            Y = t(18),
            z = t(16),
            K = t(139),
            Q = t(103),
            X = t(80),
            Z = t(67),
            nn = t(36),
            ln = t(5),
            tn = t(14),
            en = t(47),
            an = t(60),
            un = t(54),
            on = t(63),
            sn = t(19),
            cn = t(17),
            rn = t(50),
            _n = t(84),
            hn = t(116),
            dn = o._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            fn = o._1("ng-component", g, function(n) {
                return o._29(0, [(n()(), o._5(0, 0, null, null, 2, "ng-component", [], null, null, null, u, dn)), o._23(512, null, f.a, f.a, [d.a, _.a, h.a]), o._4(2, 49152, null, 0, g, [z.a, h.a, cn.a, _.a, s.j, rn.a, _n.a, hn.a, d.a, f.a, p.a], null, null)], null, null)
            }, {}, {}, []),
            pn = t(30),
            gn = t(31),
            mn = t(221),
            kn = t(402),
            In = t(222),
            vn = t(158);
        t.d(l, "CheckInReviewDetailsModuleNgFactory", function() {
            return bn
        });
        var bn = o._2(w, [], function(n) {
            return o._13([o._14(512, o.i, o.Y, [
                [8, [x.a, y.a, D.a, P.a, R.a, O.a, F.a, U.a, C.a, fn]],
                [3, o.i], o.w
            ]), o._14(4608, A.l, A.k, [o.v, [2, A.u]]), o._14(4608, pn.u, pn.u, []), o._14(4608, pn.d, pn.d, []), o._14(5120, s.f, L, [I.c]), o._14(4608, s.c, s.e, []), o._14(4608, s.h, s.d, []), o._14(4608, s.b, s.a, []), o._14(4608, s.j, s.j, [s.m, s.f, s.c, s.h, s.b, s.k, s.l]), o._14(4608, gn.a, gn.a, []), o._14(512, A.b, A.b, []), o._14(512, mn.a, mn.a, []), o._14(512, pn.s, pn.s, []), o._14(512, pn.g, pn.g, []), o._14(512, pn.q, pn.q, []), o._14(512, kn.a, kn.a, []), o._14(512, k.a, k.a, []), o._14(512, In.a, In.a, []), o._14(512, s.g, s.g, []), o._14(512, b.a, b.a, []), o._14(512, m.a, m.a, []), o._14(512, kn.b, kn.b, []), o._14(512, w, w, []), o._14(256, s.l, void 0, []), o._14(256, s.k, void 0, []), o._14(256, vn.a, g, [])])
        })
    }
});