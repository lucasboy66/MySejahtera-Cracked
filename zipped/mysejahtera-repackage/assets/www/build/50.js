webpackJsonp([50], {
    1286: function(l, n, e) {
        "use strict";

        function t(l) {
            return o._29(0, [(l()(), o._5(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), o._27(1, null, ["", ""]))], null, function(l, n) {
                l(n, 1, 0, n.component.UserUtils.getInitials(n.parent.context.$implicit.displayName))
            })
        }

        function a(l) {
            return o._29(0, [(l()(), o._5(0, 0, null, null, 1, "img", [
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "src", 4]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, e) {
                var t = !0;
                if ("load" === n) {
                    t = !1 !== o._17(l, 1).onLoad() && t
                }
                if ("error" === n) {
                    t = !1 !== o._17(l, 1).onError() && t
                }
                return t
            }, null, null)), o._4(1, 540672, null, 0, S.a, [T.a, o.k, $.a], null, null)], null, function(l, n) {
                l(n, 0, 0, n.parent.context.$implicit.imageUrl)
            })
        }

        function u(l) {
            return o._29(0, [(l()(), o._5(0, 0, null, null, 30, "ion-item", [
                ["class", "item item-block"]
            ], null, null, null, M.b, M.a)), o._4(1, 1097728, null, 3, A.a, [N.a, O.a, o.k, o.F, [2, R.a]], null, null), o._25(335544320, 1, {
                contentLabel: 0
            }), o._25(603979776, 2, {
                _buttons: 1
            }), o._25(603979776, 3, {
                _icons: 1
            }), o._4(5, 16384, null, 0, E.a, [], null, null), (l()(), o._27(-1, 2, ["\n          "])), (l()(), o._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), o._4(8, 16384, null, 0, V.a, [], null, null), (l()(), o._27(-1, null, ["\n            "])), (l()(), o._0(16777216, null, null, 1, null, t)), o._4(11, 16384, null, 0, K.j, [o.O, o.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), o._27(-1, null, ["\n            "])), (l()(), o._0(16777216, null, null, 1, null, a)), o._4(14, 16384, null, 0, K.j, [o.O, o.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), o._27(-1, null, ["\n          "])), (l()(), o._27(-1, 2, ["\n          "])), (l()(), o._5(17, 0, null, 2, 1, "p", [
                ["class", "bold"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), o._27(18, null, ["", ""])), (l()(), o._27(-1, 2, ["\n          "])), (l()(), o._5(20, 0, null, 2, 1, "small", [], null, null, null, null, null)), (l()(), o._27(21, null, ["", ""])), (l()(), o._27(-1, 2, ["\n          "])), (l()(), o._5(23, 0, null, 4, 2, "ion-icon", [
                ["class", "pr-3"],
                ["color", "light-text"],
                ["item-end", ""],
                ["name", "md-create"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.editDependent(l.context.$implicit.displayName, l.context.$implicit.licenceNumber, l.context.$implicit.dateOfBirth, l.context.$implicit.passportNumber, l.context.$implicit.employeeId, l.context.$implicit.editableFields) && t
                }
                return t
            }, null, null)), o._4(24, 147456, [
                [3, 4]
            ], 0, q.a, [O.a, o.k, o.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (l()(), o._27(-1, null, ["\n          "])), (l()(), o._27(-1, 2, ["\n          "])), (l()(), o._5(27, 0, null, 4, 2, "ion-icon", [
                ["color", "light-text"],
                ["item-end", ""],
                ["name", "md-close"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.confirmDelete(l.context.$implicit.employeeId) && t
                }
                return t
            }, null, null)), o._4(28, 147456, [
                [3, 4]
            ], 0, q.a, [O.a, o.k, o.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (l()(), o._27(-1, null, ["\n          "])), (l()(), o._27(-1, 2, ["\n        "]))], function(l, n) {
                l(n, 11, 0, !n.context.$implicit.imageUrl);
                l(n, 14, 0, n.context.$implicit.imageUrl);
                l(n, 24, 0, "light-text", "md-create");
                l(n, 28, 0, "light-text", "md-close")
            }, function(l, n) {
                var e = n.component;
                l(n, 18, 0, n.context.$implicit.displayName);
                l(n, 21, 0, e.getRelation(n.context.$implicit.relation));
                l(n, 23, 0, o._17(n, 24)._hidden);
                l(n, 27, 0, o._17(n, 28)._hidden)
            })
        }

        function i(l) {
            return o._29(0, [(l()(), o._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), o._4(1, 16384, null, 0, B.a, [O.a, o.k, o.F, [2, G.a]], null, null), (l()(), o._27(-1, null, ["\n  "])), (l()(), o._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, H.b, H.a)), o._4(4, 49152, null, 0, Y.a, [J.a, [2, G.a],
                [2, W.a], O.a, o.k, o.F
            ], null, null), (l()(), o._27(-1, 3, ["\n    "])), (l()(), o._5(6, 0, null, 3, 3, "ion-title", [], null, null, null, z.b, z.a)), o._4(7, 49152, null, 0, Q.a, [O.a, o.k, o.F, [2, X.a],
                [2, Y.a]
            ], null, null), (l()(), o._27(8, 0, ["", ""])), o._20(131072, r.i, [r.j, o.g]), (l()(), o._27(-1, 3, ["\n  "])), (l()(), o._27(-1, null, ["\n"])), (l()(), o._27(-1, null, ["\n"])), (l()(), o._5(13, 0, null, null, 27, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, Z.b, Z.a)), o._4(14, 4374528, null, 0, ll.a, [O.a, nl.a, el.a, o.k, o.F, J.a, tl.a, o.y, [2, G.a],
                [2, W.a]
            ], null, null), (l()(), o._27(-1, 1, ["\n  "])), (l()(), o._5(16, 0, null, 1, 23, "ion-card", [], null, null, null, null, null)), o._4(17, 16384, null, 0, al.a, [O.a, o.k, o.F], null, null), (l()(), o._27(-1, null, ["\n    "])), (l()(), o._5(19, 0, null, null, 7, "ion-card-header", [], null, null, null, null, null)), o._4(20, 16384, null, 0, ul.a, [O.a, o.k, o.F], null, null), (l()(), o._27(21, null, ["\n      ", "\n      "])), o._20(131072, r.i, [r.j, o.g]), (l()(), o._5(23, 0, null, null, 2, "p", [
                ["class", "small"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), o._27(24, null, ["", ""])), o._20(131072, r.i, [r.j, o.g]), (l()(), o._27(-1, null, ["\n    "])), (l()(), o._27(-1, null, ["\n    "])), (l()(), o._5(28, 0, null, null, 10, "ion-card-content", [], null, null, null, null, null)), o._4(29, 16384, null, 0, il.a, [O.a, o.k, o.F], null, null), (l()(), o._27(-1, null, ["\n      "])), (l()(), o._27(-1, null, ["\n      "])), (l()(), o._5(32, 0, null, null, 5, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), o._4(33, 16384, null, 0, ol.a, [O.a, o.k, o.F, nl.a, rl.l, el.a], null, null), (l()(), o._27(-1, null, ["\n        "])), (l()(), o._0(16777216, null, null, 1, null, u)), o._4(36, 802816, null, 0, K.i, [o.O, o.L, o.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), o._27(-1, null, ["\n      "])), (l()(), o._27(-1, null, ["\n    "])), (l()(), o._27(-1, null, ["\n  "])), (l()(), o._27(-1, 1, ["\n"])), (l()(), o._27(-1, null, ["\n"])), (l()(), o._5(42, 0, null, null, 16, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), o._4(43, 16384, null, 0, sl.a, [O.a, o.k, o.F, [2, G.a]], null, null), (l()(), o._27(-1, null, ["\n  "])), (l()(), o._5(45, 0, null, null, 12, "ion-toolbar", [
                ["class", "toolbar"]
            ], [
                [2, "statusbar-padding", null]
            ], null, null, cl.b, cl.a)), o._4(46, 49152, null, 0, X.a, [O.a, o.k, o.F], null, null), (l()(), o._27(-1, 3, ["\n    "])), (l()(), o._5(48, 0, null, 2, 8, "ion-buttons", [
                ["right", ""]
            ], null, null, null, null, null)), o._4(49, 16384, null, 1, _l.a, [O.a, o.k, o.F, [2, X.a],
                [2, Y.a]
            ], null, null), o._25(603979776, 4, {
                _buttons: 1
            }), (l()(), o._27(-1, null, ["\n      "])), (l()(), o._5(52, 0, null, null, 3, "button", [
                ["color", "primary"],
                ["ion-button", ""],
                ["solid", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, e) {
                var t = !0;
                if ("click" === n) {
                    t = !1 !== l.component.addDependent() && t
                }
                return t
            }, dl.b, dl.a)), o._4(53, 1097728, [
                [4, 4]
            ], 0, pl.a, [
                [8, ""], O.a, o.k, o.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (l()(), o._27(54, 0, ["\n        ", "\n      "])), o._20(131072, r.i, [r.j, o.g]), (l()(), o._27(-1, null, ["\n    "])), (l()(), o._27(-1, 3, ["\n  "])), (l()(), o._27(-1, null, ["\n"])), (l()(), o._27(-1, null, ["\n"]))], function(l, n) {
                l(n, 36, 0, n.component.team);
                l(n, 53, 0, "primary", "")
            }, function(l, n) {
                l(n, 3, 0, o._17(n, 4)._hidden, o._17(n, 4)._sbPadding);
                l(n, 8, 0, o._28(n, 8, 0, o._17(n, 9).transform("manageDependents")));
                l(n, 13, 0, o._17(n, 14).statusbarPadding, o._17(n, 14)._hasRefresher);
                l(n, 21, 0, o._28(n, 21, 0, o._17(n, 22).transform("myDependents")));
                l(n, 24, 0, o._28(n, 24, 0, o._17(n, 25).transform("dependentsNote")));
                l(n, 45, 0, o._17(n, 46)._sbPadding);
                l(n, 54, 0, o._28(n, 54, 0, o._17(n, 55).transform("addDependents​")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e(1),
            r = (e(0), e(6), e(9)),
            s = e(219),
            c = e(220),
            _ = e(138),
            d = e(176),
            p = e(218),
            m = e(49),
            g = e.n(m),
            f = e(404),
            h = e(13),
            b = e(21),
            k = e(11),
            v = function() {
                function l(l, n, e, t, a, u, i, o, r, s) {
                    var c = this;
                    this.navCtrl = l, this.profileProvider = n, this.StorageAccess = e, this.ReusableUtils = t, this.UserUtils = a, this.toastCtrl = u, this.loadingCtrl = i, this.events = o, this.translate = r, this.alertCtrl = s, this.getMyTeamMembers = g.a.throttle(function(l) {
                        var n = c;
                        n.presentLoading(), n.profileProvider.getMyTeamMembers(l).subscribe(function(l) {
                            var e = (new Date).getTime();
                            n.StorageAccess.setValue("refreshTime", e), n.StorageAccess.setValue("dependentsList", l), n.team = l, n.dismissLoading()
                        }, function(e) {
                            n.dismissLoading(), n.ReusableUtils.saveErrorLog({
                                employeeId: l
                            }, e), n.ReusableUtils.showHttpError(e)
                        })
                    }, 2e3, {
                        trailing: !1
                    }), this.showAlert = g.a.throttle(function(l) {
                        var n = this.UserUtils.getTranslatedString(l, {});
                        this.alertCtrl.create({
                            message: n,
                            buttons: [{
                                text: "OK",
                                role: "OK",
                                handler: function() {}
                            }]
                        }).present()
                    }, 3e3, {
                        trailing: !1
                    })
                }
                return l.prototype.getRelation = function(l) {
                    var n = {
                            pasangan: "Spouse",
                            anak: "Child",
                            saudarakandung: "Siblings",
                            ibubapamentua: "Parents / Parents-in-law",
                            nenekdatuk: "Grandparents",
                            penjaga: "Guardian"
                        },
                        e = {
                            spouse: "Pasangan",
                            child: "Anak",
                            siblings: "Saudara Kandung",
                            "parentsparents-in-law": "Ibu / Bapa / Mentua",
                            grandparents: "Nenek / Datuk",
                            guardian: "Penjaga"
                        },
                        t = l.toLowerCase().split(" ").join("").split("/").join("");
                    return "ms_MY" == this.translate.currentLang ? t in e ? e[t] : l : t in n ? n[t] : l
                }, l.prototype.ionViewWillEnter = function() {
                    var l = this;
                    l.StorageAccess.getValue("employeeInfo").then(function(n) {
                        l.empInfo = n, l.getMyTeamMembers(l.empInfo.employeeId)
                    })
                }, l.prototype.presentLoading = function() {
                    this.loading = this.loadingCtrl.create({
                        dismissOnPageChange: !0
                    }), this.loading.present()
                }, l.prototype.dismissLoading = function() {
                    this.loading.dismissAll()
                }, l.prototype.confirmDelete = function(l) {
                    var n, e, t, a, u = this;
                    n = u.UserUtils.getTranslatedString("deleteDependent", {}), e = u.UserUtils.getTranslatedString("warning", {}), t = u.UserUtils.getTranslatedString("cancel", {}), a = u.UserUtils.getTranslatedString("confirm", {});
                    this.alertCtrl.create({
                        title: n,
                        message: e,
                        buttons: [{
                            text: t,
                            role: "cancel",
                            handler: function() {}
                        }, {
                            text: a,
                            handler: function() {
                                u.removeDependent(l)
                            }
                        }]
                    }).present()
                }, l.prototype.removeDependent = function(l) {
                    var n = this;
                    n.presentLoading(), n.profileProvider.deleteDependent(l).subscribe(function(l) {
                        var e = l;
                        e.success ? (n.dismissLoading(), n.ReusableUtils.showToast("dependentDeleted"), n.StorageAccess.setValue("employeeInfoChanged", !0), n.events.publish("refreshEmployeeInfo"), n.getMyTeamMembers(n.empInfo.employeeId)) : (n.dismissLoading(), e.data.length > 0 ? e.data.forEach(function(l) {
                            n.showAlert(l)
                        }) : n.showAlert("unableToDelete"))
                    }, function(e) {
                        n.dismissLoading(), n.ReusableUtils.saveErrorLog({
                            dependentId: l
                        }, e), n.ReusableUtils.showHttpError(e)
                    })
                }, l.prototype.addDependent = function() {
                    this.navCtrl.push("addDependentPage")
                }, l.prototype.editDependent = function(l, n, e, t, a, u) {
                    this.navCtrl.push("editDependentPage", {
                        data: {
                            displayName: l,
                            licenceNumber: n
                        },
                        id: a,
                        editableFields: u
                    })
                }, l
            }(),
            y = d.b,
            U = function() {
                return function() {}
            }(),
            x = e(773),
            D = e(774),
            F = e(775),
            L = e(776),
            I = e(777),
            w = e(778),
            P = e(779),
            j = e(780),
            C = e(781),
            S = e(177),
            T = e(85),
            $ = e(81),
            M = e(56),
            A = e(25),
            N = e(23),
            O = e(3),
            R = e(48),
            E = e(53),
            V = e(141),
            K = e(10),
            q = e(38),
            B = e(102),
            G = e(7),
            H = e(140),
            Y = e(75),
            J = e(18),
            W = e(16),
            z = e(139),
            Q = e(103),
            X = e(80),
            Z = e(67),
            ll = e(36),
            nl = e(5),
            el = e(14),
            tl = e(47),
            al = e(60),
            ul = e(161),
            il = e(54),
            ol = e(63),
            rl = e(19),
            sl = e(95),
            cl = e(159),
            _l = e(105),
            dl = e(37),
            pl = e(27),
            ml = e(12),
            gl = e(20),
            fl = e(147),
            hl = e(104),
            bl = e(84),
            kl = e(160),
            vl = e(116),
            yl = o._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            Ul = o._1("ng-component", v, function(l) {
                return o._29(0, [(l()(), o._5(0, 0, null, null, 2, "ng-component", [], null, null, null, i, yl)), o._23(512, null, f.a, f.a, [ml.a, k.a, gl.a, fl.a]), o._4(2, 49152, null, 0, v, [W.a, f.a, h.a, b.a, k.a, hl.a, bl.a, kl.a, r.j, vl.a], null, null)], null, null)
            }, {}, {}, []),
            xl = e(30),
            Dl = e(31),
            Fl = e(221),
            Ll = e(402),
            Il = e(222),
            wl = e(158);
        e.d(n, "manageDependentPageModuleNgFactory", function() {
            return Pl
        });
        var Pl = o._2(U, [], function(l) {
            return o._13([o._14(512, o.i, o.Y, [
                [8, [x.a, D.a, F.a, L.a, I.a, w.a, P.a, j.a, C.a, Ul]],
                [3, o.i], o.w
            ]), o._14(4608, K.l, K.k, [o.v, [2, K.u]]), o._14(4608, xl.u, xl.u, []), o._14(4608, xl.d, xl.d, []), o._14(5120, r.f, y, [_.c]), o._14(4608, r.c, r.e, []), o._14(4608, r.h, r.d, []), o._14(4608, r.b, r.a, []), o._14(4608, r.j, r.j, [r.m, r.f, r.c, r.h, r.b, r.k, r.l]), o._14(4608, Dl.a, Dl.a, []), o._14(512, K.b, K.b, []), o._14(512, Fl.a, Fl.a, []), o._14(512, xl.s, xl.s, []), o._14(512, xl.g, xl.g, []), o._14(512, xl.q, xl.q, []), o._14(512, Ll.a, Ll.a, []), o._14(512, c.a, c.a, []), o._14(512, Il.a, Il.a, []), o._14(512, r.g, r.g, []), o._14(512, p.a, p.a, []), o._14(512, s.a, s.a, []), o._14(512, Ll.b, Ll.b, []), o._14(512, U, U, []), o._14(256, r.l, void 0, []), o._14(256, r.k, void 0, []), o._14(256, wl.a, v, [])])
        })
    }
});