webpackJsonp([26], {
    1319: function(n, l, e) {
        "use strict";

        function t(n) {
            return d._29(0, [(n()(), d._5(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), d._27(1, null, ["", ""]))], null, function(n, l) {
                n(l, 1, 0, l.component.UserUtils.getInitials(l.parent.context.$implicit.displayName))
            })
        }

        function u(n) {
            return d._29(0, [(n()(), d._5(0, 0, null, null, 1, "img", [
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "src", 4]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(n, l, e) {
                var t = !0;
                if ("load" === l) {
                    t = !1 !== d._17(n, 1).onLoad() && t
                }
                if ("error" === l) {
                    t = !1 !== d._17(n, 1).onError() && t
                }
                return t
            }, null, null)), d._4(1, 540672, null, 0, R.a, [A.a, d.k, E.a], null, null)], null, function(n, l) {
                n(l, 0, 0, l.parent.context.$implicit.imageUrl)
            })
        }

        function a(n) {
            return d._29(0, [(n()(), d._5(0, 0, null, null, 2, "p", [
                ["class", "text-link"],
                ["slot", "end"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.addVaccination(n.parent.context.$implicit) && t
                }
                return t
            }, null, null)), (n()(), d._27(1, null, ["\n              ", "\n            "])), d._20(131072, g.i, [g.j, d.g])], null, function(n, l) {
                n(l, 1, 0, d._28(l, 1, 0, d._17(l, 2).transform("addVaccineDependent")))
            })
        }

        function i(n) {
            return d._29(0, [(n()(), d._5(0, 0, null, null, 2, "p", [
                ["class", "text-link"],
                ["slot", "end"]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.confirmDelete(n.parent.context.$implicit) && t
                }
                return t
            }, null, null)), (n()(), d._27(1, null, ["\n              ", "\n            "])), d._20(131072, g.i, [g.j, d.g])], null, function(n, l) {
                n(l, 1, 0, d._28(l, 1, 0, d._17(l, 2).transform("removevaccinedependent")))
            })
        }

        function c(n) {
            return d._29(0, [(n()(), d._5(0, 0, null, null, 2, "ion-icon", [
                ["class", "px-3"],
                ["color", "light-text"],
                ["item-end", ""],
                ["name", "md-create"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.nav.push("editDependentPage", {
                        data: {
                            passportNumber: n.parent.context.$implicit.passportNumber,
                            dateOfBirth: n.parent.context.$implicit.dateOfBirth,
                            country: n.parent.context.$implicit.country
                        },
                        IcNumber: n.parent.context.$implicit.licenceNumber,
                        id: n.parent.context.$implicit.employeeId,
                        flag: !0,
                        editableFields: n.parent.context.$implicit.editableFields
                    }) && t
                }
                return t
            }, null, null)), d._4(1, 147456, [
                [3, 4]
            ], 0, M.a, [B.a, d.k, d.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (n()(), d._27(-1, null, ["\n            "]))], function(n, l) {
                n(l, 1, 0, "light-text", "md-create")
            }, function(n, l) {
                n(l, 0, 0, d._17(l, 1)._hidden)
            })
        }

        function o(n) {
            return d._29(0, [(n()(), d._5(0, 0, null, null, 2, "ion-icon", [
                ["color", "success"],
                ["item-end", ""],
                ["name", "ios-checkmark-circle"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), d._4(1, 147456, [
                [3, 4]
            ], 0, M.a, [B.a, d.k, d.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (n()(), d._27(-1, null, ["\n            "]))], function(n, l) {
                n(l, 1, 0, "success", "ios-checkmark-circle")
            }, function(n, l) {
                n(l, 0, 0, d._17(l, 1)._hidden)
            })
        }

        function r(n) {
            return d._29(0, [(n()(), d._5(0, 0, null, null, 34, "ion-item", [
                ["class", "item item-block"]
            ], null, null, null, q.b, q.a)), d._4(1, 1097728, null, 3, G.a, [J.a, B.a, d.k, d.F, [2, Y.a]], null, null), d._25(335544320, 1, {
                contentLabel: 0
            }), d._25(603979776, 2, {
                _buttons: 1
            }), d._25(603979776, 3, {
                _icons: 1
            }), d._4(5, 16384, null, 0, H.a, [], null, null), (n()(), d._27(-1, 2, ["\n            "])), (n()(), d._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), d._4(8, 16384, null, 0, K.a, [], null, null), (n()(), d._27(-1, null, ["\n              "])), (n()(), d._0(16777216, null, null, 1, null, t)), d._4(11, 16384, null, 0, W.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), d._27(-1, null, ["\n              "])), (n()(), d._0(16777216, null, null, 1, null, u)), d._4(14, 16384, null, 0, W.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), d._27(-1, null, ["\n            "])), (n()(), d._27(-1, 2, ["\n            "])), (n()(), d._5(17, 0, null, 2, 1, "p", [
                ["class", "bold"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (n()(), d._27(18, null, ["", ""])), (n()(), d._27(-1, 2, ["\n            "])), (n()(), d._5(20, 0, null, 2, 1, "small", [], null, null, null, null, null)), (n()(), d._27(21, null, ["", ""])), (n()(), d._27(-1, 2, ["\n            "])), (n()(), d._0(16777216, null, 2, 1, null, a)), d._4(24, 16384, null, 0, W.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), d._27(-1, 2, ["\n            "])), (n()(), d._0(16777216, null, 2, 1, null, i)), d._4(27, 16384, null, 0, W.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), d._27(-1, 2, ["\n            "])), (n()(), d._0(16777216, null, 4, 1, null, c)), d._4(30, 16384, null, 0, W.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), d._27(-1, 2, ["\n            "])), (n()(), d._0(16777216, null, 4, 1, null, o)), d._4(33, 16384, null, 0, W.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), d._27(-1, 2, ["\n          "]))], function(n, l) {
                var e = l.component;
                n(l, 11, 0, !l.context.$implicit.imageUrl);
                n(l, 14, 0, l.context.$implicit.imageUrl);
                n(l, 24, 0, !e.vaccineDependents.includes(l.context.$implicit));
                n(l, 27, 0, e.vaccineDependents.includes(l.context.$implicit));
                n(l, 30, 0, e.vaccineDependents.includes(l.context.$implicit));
                n(l, 33, 0, e.vaccineDependents.includes(l.context.$implicit))
            }, function(n, l) {
                var e = l.component;
                n(l, 18, 0, l.context.$implicit.displayName);
                n(l, 21, 0, e.getRelation(l.context.$implicit.relation))
            })
        }

        function s(n) {
            return d._29(0, [(n()(), d._5(0, 0, null, null, 4, "ng-contaimer", [], null, null, null, null, null)), (n()(), d._27(-1, null, ["\n          "])), (n()(), d._0(16777216, null, null, 1, null, r)), d._4(3, 802816, null, 0, W.i, [d.O, d.L, d.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), d._27(-1, null, ["\n        "]))], function(n, l) {
                n(l, 3, 0, l.component.team)
            }, null)
        }

        function _(n) {
            return d._29(0, [(n()(), d._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), d._4(1, 16384, null, 0, z.a, [B.a, d.k, d.F, [2, Q.a]], null, null), (n()(), d._27(-1, null, ["\n  "])), (n()(), d._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, X.b, X.a)), d._4(4, 49152, null, 0, Z.a, [nn.a, [2, Q.a],
                [2, ln.a], B.a, d.k, d.F
            ], null, null), (n()(), d._27(-1, 3, ["\n    "])), (n()(), d._5(6, 0, null, 3, 3, "ion-title", [], null, null, null, en.b, en.a)), d._4(7, 49152, null, 0, tn.a, [B.a, d.k, d.F, [2, un.a],
                [2, Z.a]
            ], null, null), (n()(), d._27(8, 0, ["", ""])), d._20(131072, g.i, [g.j, d.g]), (n()(), d._27(-1, 3, ["\n  "])), (n()(), d._27(-1, null, ["\n"])), (n()(), d._27(-1, null, ["\n"])), (n()(), d._5(13, 0, null, null, 23, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, an.b, an.a)), d._4(14, 4374528, null, 0, cn.a, [B.a, on.a, rn.a, d.k, d.F, nn.a, sn.a, d.y, [2, Q.a],
                [2, ln.a]
            ], null, null), (n()(), d._27(-1, 1, ["\n  "])), (n()(), d._5(16, 0, null, 1, 19, "ion-card", [], null, null, null, null, null)), d._4(17, 16384, null, 0, _n.a, [B.a, d.k, d.F], null, null), (n()(), d._27(-1, null, ["\n    "])), (n()(), d._5(19, 0, null, null, 3, "ion-card-header", [], null, null, null, null, null)), d._4(20, 16384, null, 0, dn.a, [B.a, d.k, d.F], null, null), (n()(), d._27(21, null, [" ", " "])), d._20(131072, g.i, [g.j, d.g]), (n()(), d._27(-1, null, ["\n    "])), (n()(), d._5(24, 0, null, null, 10, "ion-card-content", [], null, null, null, null, null)), d._4(25, 16384, null, 0, pn.a, [B.a, d.k, d.F], null, null), (n()(), d._27(-1, null, ["\n      "])), (n()(), d._27(-1, null, ["\n      "])), (n()(), d._5(28, 0, null, null, 5, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), d._4(29, 16384, null, 0, fn.a, [B.a, d.k, d.F, on.a, mn.l, rn.a], null, null), (n()(), d._27(-1, null, ["\n        "])), (n()(), d._0(16777216, null, null, 1, null, s)), d._4(32, 16384, null, 0, W.j, [d.O, d.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), d._27(-1, null, ["\n      "])), (n()(), d._27(-1, null, ["\n    "])), (n()(), d._27(-1, null, ["\n  "])), (n()(), d._27(-1, 1, ["\n"])), (n()(), d._27(-1, null, ["\n"])), (n()(), d._5(38, 0, null, null, 16, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), d._4(39, 16384, null, 0, gn.a, [B.a, d.k, d.F, [2, Q.a]], null, null), (n()(), d._27(-1, null, ["\n  "])), (n()(), d._5(41, 0, null, null, 12, "ion-toolbar", [
                ["class", "toolbar"]
            ], [
                [2, "statusbar-padding", null]
            ], null, null, hn.b, hn.a)), d._4(42, 49152, null, 0, un.a, [B.a, d.k, d.F], null, null), (n()(), d._27(-1, 3, ["\n    "])), (n()(), d._5(44, 0, null, 2, 8, "ion-buttons", [
                ["right", ""]
            ], null, null, null, null, null)), d._4(45, 16384, null, 1, bn.a, [B.a, d.k, d.F, [2, un.a],
                [2, Z.a]
            ], null, null), d._25(603979776, 4, {
                _buttons: 1
            }), (n()(), d._27(-1, null, ["\n      "])), (n()(), d._5(48, 0, null, null, 3, "button", [
                ["color", "primary"],
                ["ion-button", ""],
                ["solid", ""]
            ], null, [
                [null, "click"]
            ], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.addDependent() && t
                }
                return t
            }, vn.b, vn.a)), d._4(49, 1097728, [
                [4, 4]
            ], 0, kn.a, [
                [8, ""], B.a, d.k, d.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (n()(), d._27(50, 0, ["\n        ", "\n      "])), d._20(131072, g.i, [g.j, d.g]), (n()(), d._27(-1, null, ["\n    "])), (n()(), d._27(-1, 3, ["\n  "])), (n()(), d._27(-1, null, ["\n"])), (n()(), d._27(-1, null, ["\n"]))], function(n, l) {
                n(l, 32, 0, l.component.team);
                n(l, 49, 0, "primary", "")
            }, function(n, l) {
                n(l, 3, 0, d._17(l, 4)._hidden, d._17(l, 4)._sbPadding);
                n(l, 8, 0, d._28(l, 8, 0, d._17(l, 9).transform("vaccination")));
                n(l, 13, 0, d._17(l, 14).statusbarPadding, d._17(l, 14)._hasRefresher);
                n(l, 21, 0, d._28(l, 21, 0, d._17(l, 22).transform("manageVaccDependents")));
                n(l, 41, 0, d._17(l, 42)._sbPadding);
                n(l, 50, 0, d._28(l, 50, 0, d._17(l, 51).transform("addDependent")))
            })
        }
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var d = e(1),
            p = (e(0), e(6), e(219)),
            f = e(218),
            m = e(220),
            g = e(9),
            h = e(176),
            b = e(138),
            v = e(49),
            k = e.n(v),
            D = e(88),
            x = e(123),
            y = e(21),
            I = e(13),
            j = e(11),
            F = function() {
                function n(n, l, e, t, u, a, i, c, o, r, s) {
                    var _ = this;
                    this.navParams = n, this.UserUtils = l, this.commonProvider = e, this.nav = t, this.hubProvider = u, this.loadingCtrl = a, this.ReusableUtils = i, this.translate = c, this.alertCtrl = o, this.StorageAccess = r, this.events = s, this.team = [], this.events.subscribe("refreshDependets", function() {
                        _.fetchDependents()
                    })
                }
                return n.prototype.ionViewWillEnter = function() {
                    this.fetchDependents()
                }, n.prototype.fetchDependents = function() {
                    var n = this;
                    this.StorageAccess.getValue("vaccineDependents").then(function(l) {
                        n.vaccineDependents = l, n.createTeam()
                    })
                }, n.prototype.createTeam = function() {
                    var n = this;
                    this.team = [], this.team = this.vaccineDependents.slice(), this.StorageAccess.getValue("dependentsList").then(function(l) {
                        n.dependents = l, n.dependents.forEach(function(l) {
                            -1 === k.a.findIndex(n.team, {
                                employeeId: l.employeeId
                            }) && n.team.push(l)
                        })
                    })
                }, n.prototype.getRelation = function(n) {
                    var l = {
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
                        t = n.toLowerCase().split(" ").join("").split("/").join("");
                    return "ms_MY" == this.translate.currentLang ? t in e ? e[t] : n : t in l ? l[t] : n
                }, n.prototype.addVaccination = function(n) {
                    this.nav.push("VaccinationICVerificationPage", {
                        dependent: !0,
                        dependentData: n
                    })
                }, n.prototype.confirmDelete = function(n) {
                    var l, e, t, u, a = this;
                    l = a.UserUtils.getTranslatedString("deleteVaccineDependent", {}), e = a.UserUtils.getTranslatedString("warning", {}), t = a.UserUtils.getTranslatedString("cancel", {}), u = a.UserUtils.getTranslatedString("confirm", {});
                    this.alertCtrl.create({
                        title: l,
                        message: e,
                        buttons: [{
                            text: t,
                            role: "cancel",
                            handler: function() {}
                        }, {
                            text: u,
                            handler: function() {
                                a.deleteVaccination(n)
                            }
                        }]
                    }).present()
                }, n.prototype.deleteVaccination = function(n) {
                    var l = this,
                        e = this.loadingCtrl.create();
                    e.present(), l.commonProvider.removeVaccinationDependent(n.employeeId).subscribe(function(n) {
                        if (n.success) {
                            var t = "string" == typeof n.data ? JSON.parse(n.data) : n.data;
                            l.StorageAccess.setValue("vaccineDependents", t), l.vaccineDependents = t, l.createTeam(), e.dismiss(), l.events.publish("getVaccineDependents", {
                                noLoader: !0
                            })
                        } else e.dismiss()
                    }, function(n) {
                        e.dismiss(), l.ReusableUtils.showHttpError(n), l.ReusableUtils.saveErrorLog({}, n)
                    })
                }, n.prototype.addDependent = function() {
                    this.nav.push("addDependentPage", {
                        dependent: !0
                    })
                }, n
            }(),
            U = h.b,
            $ = function() {
                return function() {}
            }(),
            P = e(773),
            V = e(774),
            L = e(775),
            O = e(776),
            S = e(777),
            w = e(778),
            N = e(779),
            C = e(780),
            T = e(781),
            R = e(177),
            A = e(85),
            E = e(81),
            M = e(38),
            B = e(3),
            q = e(56),
            G = e(25),
            J = e(23),
            Y = e(48),
            H = e(53),
            K = e(141),
            W = e(10),
            z = e(102),
            Q = e(7),
            X = e(140),
            Z = e(75),
            nn = e(18),
            ln = e(16),
            en = e(139),
            tn = e(103),
            un = e(80),
            an = e(67),
            cn = e(36),
            on = e(5),
            rn = e(14),
            sn = e(47),
            _n = e(60),
            dn = e(161),
            pn = e(54),
            fn = e(63),
            mn = e(19),
            gn = e(95),
            hn = e(159),
            bn = e(105),
            vn = e(37),
            kn = e(27),
            Dn = e(17),
            xn = e(84),
            yn = e(116),
            In = e(160),
            jn = d._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            Fn = d._1("ng-component", F, function(n) {
                return d._29(0, [(n()(), d._5(0, 0, null, null, 1, "ng-component", [], null, null, null, _, jn)), d._4(1, 49152, null, 0, F, [Dn.a, j.a, D.a, ln.a, x.a, xn.a, y.a, g.j, yn.a, I.a, In.a], null, null)], null, null)
            }, {}, {}, []),
            Un = e(30),
            $n = e(31),
            Pn = e(221),
            Vn = e(402),
            Ln = e(222),
            On = e(158);
        e.d(l, "VaccinationDependentsPageModuleNgFactory", function() {
            return Sn
        });
        var Sn = d._2($, [], function(n) {
            return d._13([d._14(512, d.i, d.Y, [
                [8, [P.a, V.a, L.a, O.a, S.a, w.a, N.a, C.a, T.a, Fn]],
                [3, d.i], d.w
            ]), d._14(4608, W.l, W.k, [d.v, [2, W.u]]), d._14(4608, Un.u, Un.u, []), d._14(4608, Un.d, Un.d, []), d._14(5120, g.f, U, [b.c]), d._14(4608, g.c, g.e, []), d._14(4608, g.h, g.d, []), d._14(4608, g.b, g.a, []), d._14(4608, g.j, g.j, [g.m, g.f, g.c, g.h, g.b, g.k, g.l]), d._14(4608, $n.a, $n.a, []), d._14(512, W.b, W.b, []), d._14(512, Pn.a, Pn.a, []), d._14(512, Un.s, Un.s, []), d._14(512, Un.g, Un.g, []), d._14(512, Un.q, Un.q, []), d._14(512, Vn.a, Vn.a, []), d._14(512, m.a, m.a, []), d._14(512, Ln.a, Ln.a, []), d._14(512, g.g, g.g, []), d._14(512, f.a, f.a, []), d._14(512, p.a, p.a, []), d._14(512, Vn.b, Vn.b, []), d._14(512, $, $, []), d._14(256, g.l, void 0, []), d._14(256, g.k, void 0, []), d._14(256, On.a, F, [])])
        })
    }
});