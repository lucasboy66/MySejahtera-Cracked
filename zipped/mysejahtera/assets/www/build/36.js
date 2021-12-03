webpackJsonp([36], {
    1307: function(l, n, u) {
        "use strict";

        function e(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 5, null, null, null, null, null, null, null)), (l()(), _._27(-1, null, ["\n                        "])), (l()(), _._5(2, 0, null, null, 2, "small", [
                ["class", "row mt-3"],
                ["justify-content-center", ""]
            ], null, null, null, null, null)), (l()(), _._27(3, null, ["", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, null, ["\n                    "]))], null, function(l, n) {
                l(n, 3, 0, _._28(n, 3, 0, _._17(n, 4).transform("noResult")))
            })
        }

        function a(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 0, "img", [], [
                [8, "src", 4]
            ], null, null, null, null))], null, function(l, n) {
                l(n, 0, 0, n.parent.context.$implicit.imageUrl)
            })
        }

        function t(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), _._27(1, null, ["", ""]))], null, function(l, n) {
                var u = n.component;
                l(n, 0, 0, "employee_" + n.parent.context.index);
                l(n, 1, 0, u.UserUtils.getInitials(n.parent.context.$implicit.displayName))
            })
        }

        function i(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 29, "ion-item", [
                ["class", "item item-block"]
            ], null, null, null, V.b, V.a)), _._4(1, 1097728, null, 3, M.a, [N.a, R.a, _.k, _.F, [2, $.a]], null, null), _._25(335544320, 5, {
                contentLabel: 0
            }), _._25(603979776, 6, {
                _buttons: 1
            }), _._25(603979776, 7, {
                _icons: 1
            }), _._4(5, 16384, null, 0, T.a, [], null, null), (l()(), _._27(-1, 2, ["\n                        "])), (l()(), _._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), _._4(8, 16384, null, 0, D.a, [], null, null), (l()(), _._27(-1, null, ["\n                            "])), (l()(), _._0(16777216, null, null, 1, null, a)), _._4(11, 16384, null, 0, J.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, null, ["\n                            "])), (l()(), _._0(16777216, null, null, 1, null, t)), _._4(14, 16384, null, 0, J.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, null, ["\n                        "])), (l()(), _._27(-1, 2, ["\n                        "])), (l()(), _._5(17, 0, null, 1, 8, "ion-label", [], null, null, null, null, null)), _._4(18, 16384, [
                [5, 4]
            ], 0, B.a, [R.a, _.k, _.F, [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], null, null), (l()(), _._27(-1, null, ["\n                            "])), (l()(), _._5(20, 0, null, null, 1, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), _._27(21, null, ["", " "])), (l()(), _._27(-1, null, ["\n                            "])), (l()(), _._5(23, 0, null, null, 1, "small", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), _._27(24, null, ["", ""])), (l()(), _._27(-1, null, ["\n                        "])), (l()(), _._27(-1, 2, ["\n                        "])), (l()(), _._5(27, 0, null, 4, 1, "ion-radio", [
                ["item-end", ""],
                ["name", "Select_User"]
            ], [
                [2, "radio-disabled", null]
            ], [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== _._17(l, 28)._click(u) && e
                }
                return e
            }, q.b, q.a)), _._4(28, 245760, null, 0, H.a, [N.a, R.a, _.k, _.F, [2, M.a],
                [2, Y.a]
            ], {
                value: [0, "value"]
            }, null), (l()(), _._27(-1, 2, ["\n                    "]))], function(l, n) {
                l(n, 11, 0, n.context.$implicit.imageUrl);
                l(n, 14, 0, !n.context.$implicit.imageUrl);
                l(n, 28, 0, n.context.$implicit.username)
            }, function(l, n) {
                l(n, 20, 0, "employeeName_" + n.context.index);
                l(n, 21, 0, n.context.$implicit.displayName);
                l(n, 23, 0, "employeeCode_" + n.context.index);
                l(n, 24, 0, n.context.$implicit.empCode);
                l(n, 27, 0, _._17(n, 28)._disabled)
            })
        }

        function o(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 13, "div", [
                ["radio-group", ""],
                ["role", "radiogroup"]
            ], [
                [8, "id", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"]
            ], function(l, n, u) {
                var e = !0;
                if ("ngModelChange" === n) {
                    e = !1 !== (l.component.selectedEmployee = u) && e
                }
                return e
            }, null, null)), _._4(1, 1064960, null, 1, Y.a, [_.F, _.k, _.g], null, null), _._25(335544320, 4, {
                _header: 0
            }), _._23(1024, null, z.j, function(l) {
                return [l]
            }, [Y.a]), _._4(4, 671744, null, 0, z.o, [
                [8, null],
                [8, null],
                [8, null],
                [2, z.j]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), _._23(2048, null, z.k, null, [z.o]), _._4(6, 16384, null, 0, z.l, [z.k], null, null), (l()(), _._27(-1, null, ["\n                    "])), (l()(), _._0(16777216, null, null, 1, null, e)), _._4(9, 16384, null, 0, J.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, null, ["\n                    "])), (l()(), _._0(16777216, null, null, 1, null, i)), _._4(12, 802816, null, 0, J.i, [_.O, _.L, _.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), _._27(-1, null, ["\n                "]))], function(l, n) {
                var u = n.component;
                l(n, 4, 0, u.selectedEmployee);
                l(n, 9, 0, 0 == u.employees.data.length);
                l(n, 12, 0, u.employees.data)
            }, function(l, n) {
                l(n, 0, 0, "switchUserList", _._17(n, 6).ngClassUntouched, _._17(n, 6).ngClassTouched, _._17(n, 6).ngClassPristine, _._17(n, 6).ngClassDirty, _._17(n, 6).ngClassValid, _._17(n, 6).ngClassInvalid, _._17(n, 6).ngClassPending)
            })
        }

        function s(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 5, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), _._4(1, 16384, null, 0, G.a, [R.a, _.k, _.F, K.a, Q.l, W.a], null, null), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._0(16777216, null, null, 1, null, o)), _._4(4, 16384, null, 0, J.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, null, ["\n            "]))], function(l, n) {
                var u = n.component;
                l(n, 4, 0, null == u.employees ? null : u.employees.data)
            }, null)
        }

        function r(l) {
            return _._29(0, [(l()(), _._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), _._4(1, 16384, null, 0, X.a, [R.a, _.k, _.F, [2, Z.a]], null, null), (l()(), _._27(-1, null, ["\n    "])), (l()(), _._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, ll.b, ll.a)), _._4(4, 49152, null, 0, nl.a, [ul.a, [2, Z.a],
                [2, el.a], R.a, _.k, _.F
            ], null, null), (l()(), _._27(-1, 3, ["\n        "])), (l()(), _._5(6, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, al.b, al.a)), _._4(7, 49152, null, 0, tl.a, [R.a, _.k, _.F, [2, il.a],
                [2, nl.a]
            ], null, null), (l()(), _._27(8, 0, ["", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, 3, ["\n    "])), (l()(), _._27(-1, null, ["\n"])), (l()(), _._27(-1, null, ["\n\n"])), (l()(), _._5(13, 0, null, null, 37, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, ol.b, ol.a)), _._4(14, 4374528, null, 0, sl.a, [R.a, K.a, W.a, _.k, _.F, ul.a, rl.a, _.y, [2, Z.a],
                [2, el.a]
            ], null, null), (l()(), _._27(-1, 1, ["\n    "])), (l()(), _._5(16, 0, null, 1, 33, "ion-card", [], null, null, null, null, null)), _._4(17, 16384, null, 0, _l.a, [R.a, _.k, _.F], null, null), (l()(), _._27(-1, null, ["\n        "])), (l()(), _._5(19, 0, null, null, 29, "ion-card-content", [], null, null, null, null, null)), _._4(20, 16384, null, 0, cl.a, [R.a, _.k, _.F], null, null), (l()(), _._27(-1, null, ["\n            "])), (l()(), _._27(-1, null, ["\n                "])), (l()(), _._5(23, 0, null, null, 20, "ion-item", [
                ["class", "p-0 item item-block"]
            ], null, null, null, V.b, V.a)), _._4(24, 1097728, null, 3, M.a, [N.a, R.a, _.k, _.F, [2, $.a]], null, null), _._25(335544320, 1, {
                contentLabel: 0
            }), _._25(603979776, 2, {
                _buttons: 1
            }), _._25(603979776, 3, {
                _icons: 1
            }), _._4(28, 16384, null, 0, T.a, [], null, null), (l()(), _._27(-1, 2, ["\n                    "])), (l()(), _._5(30, 0, null, 2, 5, "ion-searchbar", [
                ["class", "mb-3"]
            ], [
                [8, "id", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "searchbar-animated", null],
                [2, "searchbar-has-value", null],
                [2, "searchbar-active", null],
                [2, "searchbar-show-cancel", null],
                [2, "searchbar-left-aligned", null],
                [2, "searchbar-has-focus", null]
            ], [
                [null, "ngModelChange"]
            ], function(l, n, u) {
                var e = !0;
                if ("ngModelChange" === n) {
                    e = !1 !== (l.component.searchEmployee = u) && e
                }
                return e
            }, dl.b, dl.a)), _._4(31, 671744, null, 0, z.o, [
                [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), _._23(2048, null, z.k, null, [z.o]), _._4(33, 16384, null, 0, z.l, [z.k], null, null), _._4(34, 1294336, null, 0, gl.a, [R.a, K.a, _.k, _.F, [2, z.k]], {
                placeholder: [0, "placeholder"]
            }, null), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, 2, ["\n                    "])), (l()(), _._5(37, 0, null, 4, 5, "button", [
                ["class", "mb-4"],
                ["clear", ""],
                ["icon-only", ""],
                ["ion-button", ""],
                ["item-end", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0,
                    a = l.component;
                if ("click" === n) {
                    e = !1 !== a.search(a.searchEmployee, null, !1, 0) && e
                }
                return e
            }, ml.b, ml.a)), _._4(38, 1097728, [
                [2, 4]
            ], 0, hl.a, [
                [8, ""], R.a, _.k, _.F
            ], {
                clear: [0, "clear"]
            }, null), (l()(), _._27(-1, 0, ["\n                        "])), (l()(), _._5(40, 0, null, 0, 1, "ion-icon", [
                ["name", "ios-search-outline"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), _._4(41, 147456, null, 0, pl.a, [R.a, _.k, _.F], {
                name: [0, "name"]
            }, null), (l()(), _._27(-1, 0, ["\n                    "])), (l()(), _._27(-1, 2, ["\n                "])), (l()(), _._27(-1, null, ["\n            "])), (l()(), _._27(-1, null, ["\n            "])), (l()(), _._0(16777216, null, null, 1, null, s)), _._4(47, 16384, null, 0, J.j, [_.O, _.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), _._27(-1, null, ["\n        "])), (l()(), _._27(-1, null, ["\n    "])), (l()(), _._27(-1, 1, ["\n"])), (l()(), _._27(-1, null, ["\n\n"])), (l()(), _._5(52, 0, null, null, 16, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), _._4(53, 16384, null, 0, fl.a, [R.a, _.k, _.F, [2, Z.a]], null, null), (l()(), _._27(-1, null, ["\n    "])), (l()(), _._5(55, 0, null, null, 12, "ion-toolbar", [
                ["class", "toolbar"]
            ], [
                [2, "statusbar-padding", null]
            ], null, null, bl.b, bl.a)), _._4(56, 49152, null, 0, il.a, [R.a, _.k, _.F], null, null), (l()(), _._27(-1, 3, ["\n        "])), (l()(), _._5(58, 0, null, 2, 8, "ion-buttons", [
                ["right", ""]
            ], null, null, null, null, null)), _._4(59, 16384, null, 1, vl.a, [R.a, _.k, _.F, [2, il.a],
                [2, nl.a]
            ], null, null), _._25(603979776, 8, {
                _buttons: 1
            }), (l()(), _._27(-1, null, ["\n            "])), (l()(), _._5(62, 0, null, null, 3, "button", [
                ["color", "btn-primary"],
                ["ion-button", ""],
                ["name", "Save_User"],
                ["solid", ""]
            ], [
                [8, "disabled", 0],
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, u) {
                var e = !0,
                    a = l.component;
                if ("click" === n) {
                    e = !1 !== a.switchUser(a.selectedEmployee) && e
                }
                return e
            }, ml.b, ml.a)), _._4(63, 1097728, [
                [8, 4]
            ], 0, hl.a, [
                [8, ""], R.a, _.k, _.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (l()(), _._27(64, 0, ["", ""])), _._20(131072, f.i, [f.j, _.g]), (l()(), _._27(-1, null, ["\n        "])), (l()(), _._27(-1, 3, ["\n    "])), (l()(), _._27(-1, null, ["\n"]))], function(l, n) {
                var u = n.component;
                l(n, 31, 0, u.searchEmployee);
                l(n, 34, 0, _._8(1, "", _._28(n, 34, 0, _._17(n, 35).transform("search")), ""));
                l(n, 38, 0, "");
                l(n, 41, 0, "ios-search-outline");
                l(n, 47, 0, u.employees);
                l(n, 63, 0, "btn-primary", "")
            }, function(l, n) {
                var u = n.component;
                l(n, 3, 0, _._17(n, 4)._hidden, _._17(n, 4)._sbPadding);
                l(n, 6, 0, "switchUserHeader");
                l(n, 8, 0, _._28(n, 8, 0, _._17(n, 9).transform("switchUser")));
                l(n, 13, 0, _._17(n, 14).statusbarPadding, _._17(n, 14)._hasRefresher);
                l(n, 30, 1, ["switchUserChooseSearchBar", _._17(n, 33).ngClassUntouched, _._17(n, 33).ngClassTouched, _._17(n, 33).ngClassPristine, _._17(n, 33).ngClassDirty, _._17(n, 33).ngClassValid, _._17(n, 33).ngClassInvalid, _._17(n, 33).ngClassPending, _._17(n, 34)._animated, _._17(n, 34)._value, _._17(n, 34)._isActive, _._17(n, 34)._showCancelButton, _._17(n, 34)._shouldAlignLeft, _._17(n, 34)._isFocus]);
                l(n, 40, 0, _._17(n, 41)._hidden);
                l(n, 55, 0, _._17(n, 56)._sbPadding);
                l(n, 62, 0, !u.selectedEmployee, "switchButton");
                l(n, 64, 0, _._28(n, 64, 0, _._17(n, 65).transform("switch")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var _ = u(1),
            c = (u(0), u(6), u(424)),
            d = u(11),
            g = u(49),
            m = u.n(g),
            h = u(13),
            p = u(21),
            f = u(9),
            b = u(223),
            v = u(88),
            y = function() {
                function l(l, n, u, e, a, t, i, o, s, r, _, c, d) {
                    this.navCtrl = l, this.navParams = n, this.switchUserProvider = u, this.UserUtils = e, this.StorageAccess = a, this.ReusableUtils = t, this.viewCtrl = i, this.translate = o, this.eventEmitterService = s, this.commonProvider = r, this.platform = _, this.event = c, this.loadingCtrl = d, this.searchEmployee = "", this.pageNumber = 0, this.search = m.a.throttle(function(l, n, u, e) {
                        var a = this;
                        a.switchUserProvider.searchEmployee(encodeURIComponent(l.trim()), e).subscribe(function(n) {
                            var u = JSON.parse(n);
                            u && a.searchEmployee.trim() == l.trim() && (a.employees = u)
                        }, function() {})
                    }, 500, {
                        trailing: !0
                    })
                }
                return l.prototype.cancel = function() {
                    this.navCtrl.pop()
                }, l.prototype.switchUser = function(l) {
                    var n = this;
                    n.switchUserProvider.switchUser(l).subscribe(function(l) {
                        n.StorageAccess.setValue("isDirty", !0), n.StorageAccess.setValue("switchUser", !0), n.StorageAccess.removeValue("empId"), n.StorageAccess.removeValue("employeeInfo"), n.StorageAccess.removeValue("empInfo"), n.StorageAccess.removeValue("vaccineDependents"), n.StorageAccess.removeValue("dependentsList"), n.event.publish("clearProfileInfo"), n.commonProvider.getTabsInfo().subscribe(function(l) {
                            n.StorageAccess.setValue("isDashboardConfigured", JSON.stringify(l)), n.StorageAccess.setValue("profileMenuList", l), n.eventEmitterService.setMenuListEmitter(l), n.navCtrl.parent.parent.setRoot("TabsPage");
                            var u = n.loadingCtrl.create();
                            u.present(), setTimeout(function() {
                                u.dismiss()
                            }, 5e3)
                        }, function(l) {
                            n.ReusableUtils.saveErrorLog({}, l), n.ReusableUtils.showHttpError(l)
                        })
                    }, function(u) {
                        n.ReusableUtils.saveErrorLog({
                            userName: l
                        }, u);
                        var e = u;
                        e = JSON.parse(e.error), n.ReusableUtils.showToast(e.message)
                    })
                }, l
            }(),
            k = u(176),
            C = u(138),
            U = u(218),
            F = k.b,
            w = function() {
                return function() {}
            }(),
            I = u(773),
            S = u(774),
            P = u(775),
            j = u(776),
            E = u(777),
            L = u(778),
            x = u(779),
            A = u(780),
            O = u(781),
            V = u(56),
            M = u(25),
            N = u(23),
            R = u(3),
            $ = u(48),
            T = u(53),
            D = u(141),
            J = u(10),
            B = u(82),
            q = u(413),
            H = u(185),
            Y = u(148),
            z = u(30),
            G = u(63),
            K = u(5),
            Q = u(19),
            W = u(14),
            X = u(102),
            Z = u(7),
            ll = u(140),
            nl = u(75),
            ul = u(18),
            el = u(16),
            al = u(139),
            tl = u(103),
            il = u(80),
            ol = u(67),
            sl = u(36),
            rl = u(47),
            _l = u(60),
            cl = u(54),
            dl = u(180),
            gl = u(127),
            ml = u(37),
            hl = u(27),
            pl = u(38),
            fl = u(95),
            bl = u(159),
            vl = u(105),
            yl = u(12),
            kl = u(17),
            Cl = u(160),
            Ul = u(84),
            Fl = _._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            wl = _._1("ng-component", y, function(l) {
                return _._29(0, [(l()(), _._5(0, 0, null, null, 2, "ng-component", [], null, null, null, r, Fl)), _._23(512, null, c.a, c.a, [yl.a]), _._4(2, 49152, null, 0, y, [el.a, kl.a, c.a, d.a, h.a, p.a, Z.a, f.j, b.a, v.a, K.a, Cl.a, Ul.a], null, null)], null, null)
            }, {}, {}, []),
            Il = u(31),
            Sl = u(402),
            Pl = u(158);
        u.d(n, "SwitchUserPageModuleNgFactory", function() {
            return jl
        });
        var jl = _._2(w, [], function(l) {
            return _._13([_._14(512, _.i, _.Y, [
                [8, [I.a, S.a, P.a, j.a, E.a, L.a, x.a, A.a, O.a, wl]],
                [3, _.i], _.w
            ]), _._14(5120, f.f, F, [C.c]), _._14(4608, f.c, f.e, []), _._14(4608, f.h, f.d, []), _._14(4608, f.b, f.a, []), _._14(4608, f.j, f.j, [f.m, f.f, f.c, f.h, f.b, f.k, f.l]), _._14(4608, Il.a, Il.a, []), _._14(4608, J.l, J.k, [_.v, [2, J.u]]), _._14(4608, z.u, z.u, []), _._14(4608, z.d, z.d, []), _._14(512, f.g, f.g, []), _._14(512, U.a, U.a, []), _._14(512, J.b, J.b, []), _._14(512, z.s, z.s, []), _._14(512, z.g, z.g, []), _._14(512, z.q, z.q, []), _._14(512, Sl.a, Sl.a, []), _._14(512, Sl.b, Sl.b, []), _._14(512, w, w, []), _._14(256, f.l, void 0, []), _._14(256, f.k, void 0, []), _._14(256, Pl.a, y, [])])
        })
    }
});