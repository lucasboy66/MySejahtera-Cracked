webpackJsonp([77], {
    1251: function(l, n, t) {
        "use strict";

        function u(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 1, null, null, null, null, null, null, null)), (l()(), c._27(1, null, ["", ""]))], null, function(l, n) {
                l(n, 1, 0, n.component.taskData.programName)
            })
        }

        function a(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 1, null, null, null, null, null, null, null)), (l()(), c._27(1, null, ["", ""]))], null, function(l, n) {
                l(n, 1, 0, n.component.programName)
            })
        }

        function e(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 5, "ion-row", [
                ["class", "row"],
                ["justify-content-end", ""]
            ], null, null, null, null, null)), c._4(1, 16384, null, 0, E.a, [], null, null), (l()(), c._27(-1, null, ["\n                            "])), (l()(), c._5(3, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), c._27(4, null, ["", "/", ""])), (l()(), c._27(-1, null, ["\n                        "]))], null, function(l, n) {
                var t = n.component;
                l(n, 4, 0, t.addedChar[n.parent.context.$implicit.id], t.checkInOptions.charLimit)
            })
        }

        function i(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 25, null, null, null, null, null, null, null)), (l()(), c._27(-1, null, ["\n                        "])), (l()(), c._5(2, 0, null, null, 19, "ion-item", [
                ["class", "item item-block"]
            ], null, null, null, V.b, V.a)), c._4(3, 1097728, null, 3, $.a, [q.a, M.a, c.k, c.F, [2, H.a]], null, null), c._25(335544320, 1, {
                contentLabel: 0
            }), c._25(603979776, 2, {
                _buttons: 1
            }), c._25(603979776, 3, {
                _icons: 1
            }), c._4(7, 16384, null, 0, J.a, [], null, null), (l()(), c._27(-1, 2, ["\n                            "])), (l()(), c._5(9, 0, null, 1, 2, "ion-label", [
                ["color", "light-text"],
                ["floating", ""]
            ], null, null, null, null, null)), c._4(10, 16384, [
                [1, 4]
            ], 0, W.a, [M.a, c.k, c.F, [8, ""],
                [8, null],
                [8, null],
                [8, null]
            ], {
                color: [0, "color"],
                id: [1, "id"]
            }, null), (l()(), c._27(11, null, ["", ""])), (l()(), c._27(-1, 2, ["\n                            "])), (l()(), c._5(13, 0, null, 3, 7, "ion-textarea", [
                ["autosize", ""],
                ["rows", "1"],
                ["type", "text"]
            ], [
                [8, "id", 0],
                [1, "maxlength", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "input"],
                [null, "ngModelChange"]
            ], function(l, n, t) {
                var u = !0,
                    a = l.component;
                if ("input" === n) {
                    u = !1 !== c._17(l, 14).onInput(t.target) && u
                }
                if ("input" === n) {
                    u = !1 !== a.checkLength(t, l.context.$implicit.id) && u
                }
                if ("ngModelChange" === n) {
                    u = !1 !== (a.checkInResponse[l.context.$implicit.id] = t) && u
                }
                return u
            }, z.b, z.a)), c._4(14, 81920, null, 0, G.a, [c.k], null, null), c._4(15, 540672, null, 0, Y.h, [], {
                maxlength: [0, "maxlength"]
            }, null), c._23(1024, null, Y.i, function(l) {
                return [l]
            }, [Y.h]), c._4(17, 671744, null, 0, Y.o, [
                [8, null],
                [2, Y.i],
                [8, null],
                [8, null]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), c._23(2048, null, Y.k, null, [Y.o]), c._4(19, 16384, null, 0, Y.l, [Y.k], null, null), c._4(20, 5423104, null, 0, B.a, [M.a, K.a, q.a, Q.a, c.k, c.F, [2, X.a],
                [2, $.a],
                [2, Y.k], Z.a
            ], {
                type: [0, "type"]
            }, {
                input: "input"
            }), (l()(), c._27(-1, 2, ["\n                        "])), (l()(), c._27(-1, null, ["\n                        "])), (l()(), c._0(16777216, null, null, 1, null, e)), c._4(24, 16384, null, 0, ll.j, [c.O, c.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), c._27(-1, null, ["\n                    "]))], function(l, n) {
                var t = n.component;
                l(n, 10, 0, "light-text", "checkInToDoCommentsLbl_" + n.context.$implicit.responseCommentId), l(n, 14, 0);
                l(n, 15, 0, c._8(1, "", t.checkInOptions.charLimit, ""));
                l(n, 17, 0, t.checkInResponse[n.context.$implicit.id]);
                l(n, 20, 0, "text");
                l(n, 24, 0, "COVID" != t.myAppName && "COVID_DEMO" != t.myAppName && "COVID_UAE" != t.myAppName)
            }, function(l, n) {
                l(n, 11, 0, n.context.$implicit.title);
                l(n, 13, 0, "checkInToDoCommentsTxtArea_" + n.context.$implicit.responseCommentId, c._17(n, 15).maxlength ? c._17(n, 15).maxlength : null, c._17(n, 19).ngClassUntouched, c._17(n, 19).ngClassTouched, c._17(n, 19).ngClassPristine, c._17(n, 19).ngClassDirty, c._17(n, 19).ngClassValid, c._17(n, 19).ngClassInvalid, c._17(n, 19).ngClassPending)
            })
        }

        function o(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 9, "ion-row", [
                ["align-items-center", ""],
                ["class", "row"],
                ["justify-content-between", ""]
            ], null, null, null, null, null)), c._4(1, 16384, null, 0, E.a, [], null, null), (l()(), c._27(-1, null, ["\n                        "])), (l()(), c._5(3, 0, null, null, 3, "ion-label", [
                ["fixed", ""]
            ], null, null, null, null, null)), c._4(4, 16384, null, 0, W.a, [M.a, c.k, c.F, [8, null],
                [8, null],
                [8, ""],
                [8, null]
            ], {
                id: [0, "id"]
            }, null), (l()(), c._27(5, null, ["", "\n                        "])), c._20(131072, _.i, [_.j, c.g]), (l()(), c._27(-1, null, ["\n                        "])), (l()(), c._5(8, 0, null, null, 0, "star-bar", [], [
                [8, "rate", 0],
                [8, "fontSize", 0],
                [8, "canEdit", 0],
                [8, "rangeLength", 0]
            ], [
                [null, "rateChange"]
            ], function(l, n, t) {
                var u = !0;
                if ("rateChange" === n) {
                    u = !1 !== l.component.onRateChange(t) && u
                }
                return u
            }, null, null)), (l()(), c._27(-1, null, ["\n                    "]))], function(l, n) {
                l(n, 4, 0, "checkInToDoDetailsProgLbl")
            }, function(l, n) {
                l(n, 5, 0, c._28(n, 5, 0, c._17(n, 6).transform("rateYourProgress")));
                l(n, 8, 0, 0, "30px", !0, 5)
            })
        }

        function s(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 7, null, null, null, null, null, null, null)), (l()(), c._27(-1, null, ["\n                    "])), (l()(), c._0(16777216, null, null, 1, null, i)), c._4(3, 802816, null, 0, ll.i, [c.O, c.L, c.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), c._27(-1, null, ["\n                    "])), (l()(), c._0(16777216, null, null, 1, null, o)), c._4(6, 16384, null, 0, ll.j, [c.O, c.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), c._27(-1, null, ["\n                "]))], function(l, n) {
                var t = n.component;
                l(n, 3, 0, t.checkInOptions.commentCategoryList);
                l(n, 6, 0, 1 == t.checkInOptions.ratingRequired)
            }, null)
        }

        function r(l) {
            return c._29(0, [(l()(), c._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), c._4(1, 16384, null, 0, nl.a, [M.a, c.k, c.F, [2, tl.a]], null, null), (l()(), c._27(-1, null, ["\n    "])), (l()(), c._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, ul.b, ul.a)), c._4(4, 49152, null, 0, al.a, [Q.a, [2, tl.a],
                [2, el.a], M.a, c.k, c.F
            ], {
                color: [0, "color"]
            }, null), (l()(), c._27(-1, 3, ["\n        "])), (l()(), c._5(6, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, il.b, il.a)), c._4(7, 49152, null, 0, ol.a, [M.a, c.k, c.F, [2, sl.a],
                [2, al.a]
            ], null, null), (l()(), c._27(8, 0, ["", ""])), c._20(131072, _.i, [_.j, c.g]), (l()(), c._27(-1, 3, ["\n    "])), (l()(), c._27(-1, null, ["\n"])), (l()(), c._27(-1, null, ["\n\n"])), (l()(), c._5(13, 0, null, null, 27, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, rl.b, rl.a)), c._4(14, 4374528, null, 0, X.a, [M.a, K.a, Z.a, c.k, c.F, Q.a, cl.a, c.y, [2, tl.a],
                [2, el.a]
            ], null, null), (l()(), c._27(-1, 1, ["\n    "])), (l()(), c._5(16, 0, null, 1, 23, "ion-card", [], null, null, null, null, null)), c._4(17, 16384, null, 0, _l.a, [M.a, c.k, c.F], null, null), (l()(), c._27(-1, null, ["\n        "])), (l()(), c._5(19, 0, null, null, 8, "ion-card-header", [], null, null, null, null, null)), c._4(20, 16384, null, 0, hl.a, [M.a, c.k, c.F], null, null), (l()(), c._27(-1, null, ["\n            "])), (l()(), c._0(16777216, null, null, 1, null, u)), c._4(23, 16384, null, 0, ll.j, [c.O, c.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), c._27(-1, null, ["\n            "])), (l()(), c._0(16777216, null, null, 1, null, a)), c._4(26, 16384, null, 0, ll.j, [c.O, c.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), c._27(-1, null, ["\n        "])), (l()(), c._27(-1, null, ["\n        "])), (l()(), c._5(29, 0, null, null, 9, "ion-card-content", [], null, null, null, null, null)), c._4(30, 16384, null, 0, dl.a, [M.a, c.k, c.F], null, null), (l()(), c._27(-1, null, ["\n            "])), (l()(), c._5(32, 0, null, null, 5, "ion-list", [
                ["class", "items-lines"]
            ], null, null, null, null, null)), c._4(33, 16384, null, 0, gl.a, [M.a, c.k, c.F, K.a, pl.l, Z.a], null, null), (l()(), c._27(-1, null, ["\n                "])), (l()(), c._0(16777216, null, null, 1, null, s)), c._4(36, 16384, null, 0, ll.j, [c.O, c.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), c._27(-1, null, ["\n            "])), (l()(), c._27(-1, null, ["\n        "])), (l()(), c._27(-1, null, ["\n    "])), (l()(), c._27(-1, 1, ["\n"])), (l()(), c._27(-1, null, ["\n\n"])), (l()(), c._5(42, 0, null, null, 16, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), c._4(43, 16384, null, 0, ml.a, [M.a, c.k, c.F, [2, tl.a]], null, null), (l()(), c._27(-1, null, ["\n    "])), (l()(), c._5(45, 0, null, null, 12, "ion-toolbar", [
                ["class", "toolbar"]
            ], [
                [2, "statusbar-padding", null]
            ], null, null, kl.b, kl.a)), c._4(46, 49152, null, 0, sl.a, [M.a, c.k, c.F], null, null), (l()(), c._27(-1, 3, ["\n        "])), (l()(), c._5(48, 0, null, 2, 8, "ion-buttons", [
                ["right", ""]
            ], null, null, null, null, null)), c._4(49, 16384, null, 1, fl.a, [M.a, c.k, c.F, [2, sl.a],
                [2, al.a]
            ], null, null), c._25(603979776, 4, {
                _buttons: 1
            }), (l()(), c._27(-1, null, ["\n            "])), (l()(), c._5(52, 0, null, null, 3, "button", [
                ["color", "btn-primary"],
                ["ion-button", ""],
                ["solid", ""]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, t) {
                var u = !0,
                    a = l.component;
                if ("click" === n) {
                    u = !1 !== a.submitCheckIn(a.checkInResponse, a.checkInOptions) && u
                }
                return u
            }, Il.b, Il.a)), c._4(53, 1097728, [
                [4, 4]
            ], 0, bl.a, [
                [8, ""], M.a, c.k, c.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"]
            }, null), (l()(), c._27(54, 0, ["", ""])), c._20(131072, _.i, [_.j, c.g]), (l()(), c._27(-1, null, ["\n        "])), (l()(), c._27(-1, 3, ["\n    "])), (l()(), c._27(-1, null, ["\n"]))], function(l, n) {
                var t = n.component;
                l(n, 4, 0, "theme");
                l(n, 23, 0, t.taskData);
                l(n, 26, 0, t.programName);
                l(n, 36, 0, t.checkInOptions);
                l(n, 53, 0, "btn-primary", "")
            }, function(l, n) {
                var t = n.component;
                l(n, 3, 0, c._17(n, 4)._hidden, c._17(n, 4)._sbPadding);
                l(n, 6, 0, "checkInToDoDetailsTitle");
                l(n, 8, 0, c._28(n, 8, 0, c._17(n, 9).transform(t.translateClient + ".checkInTodoDetailsPageTitle")));
                l(n, 13, 0, c._17(n, 14).statusbarPadding, c._17(n, 14)._hasRefresher);
                l(n, 45, 0, c._17(n, 46)._sbPadding);
                l(n, 52, 0, "checkInToDoSubmitCheckIn");
                l(n, 54, 0, c._28(n, 54, 0, c._17(n, 55).transform(t.translateClient + ".checkInTodoDetailsPageSubmit")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = t(1),
            _ = (t(0), t(6), t(9)),
            h = t(12),
            d = t(20),
            g = t(11),
            p = t(49),
            m = t.n(p),
            k = t(409),
            f = t(21),
            I = t(65),
            b = function() {
                function l(l, n, t, u, a, e, i, o, s, r) {
                    this.alertCtrl = l, this.nav = n, this.UserUtils = t, this.navParams = u, this.DataAccess = a, this.translate = e, this.network = i, this.toastCtrl = o, this.checkInProvider = s, this.ReusableUtils = r, this.translateClient = I.a.translation, this.myAppName = I.a.appName, this.placeHolder = "", this.range = [1, 2, 3, 4, 5], this.errorCodeEnabled = !1, this.addedChar = {}, this.programName = "", this.isPush = !1;
                    this.placeHolder = this.UserUtils.getTranslatedString("addComments", {}), this.checkInResponse = {}, this.threadId = null, this.childThreadReference = null, this.taskData = null, this.ratings = 0, this.navParams.get("isPush") && (this.isPush = this.navParams.get("isPush")), this.isPush ? this.getTemplate(this.navParams.get("threadGroupId")) : this.navParams.data && (this.taskData = JSON.parse(this.navParams.get("taskData")), this.getTemplate(this.taskData.threadGroupId))
                }
                return l.prototype.getTemplate = function(l) {
                    var n = this;
                    n.checkInProvider.getToDoTemplate(l, n.isPush).subscribe(function(l) {
                        n.checkInOptions = l, n.frequency = n.checkInOptions.frequency, n.startDate = n.checkInOptions.startDate, n.startDate = new Date(n.startDate).toUTCString().split(" "), n.startDate = n.startDate[1] + " " + n.startDate[2], n.endDate = n.checkInOptions.endDate, n.endDate = new Date(n.endDate).toUTCString().split(" "), n.endDate = n.endDate[1] + " " + n.endDate[2], n.taskData || (n.programName = n.checkInOptions.programName), null != n.checkInOptions.charLimit && void 0 != n.checkInOptions.charLimit || (n.checkInOptions.charLimit = 3e3), m.a.each(n.checkInOptions.commentCategoryList, function(l) {
                            n.checkInResponse[l.id] = "", n.addedChar[l.id] = 0
                        })
                    }, function(l) {
                        n.ReusableUtils.showHttpError(l)
                    })
                }, l.prototype.onRateChange = function(l) {
                    this.ratings = l
                }, l.prototype.checkLength = function(l, n) {
                    var t = l.target.value.trim();
                    t.length <= this.checkInOptions.charLimit && (this.addedChar[n] = t.length), l.target.maxLength < l.target.textLength && (l.target.value = t.slice(0, l.target.maxLength), this.addedChar[n] = l.target.maxLength, this.checkInResponse[n] = l.target.value)
                }, l.prototype.submitCheckIn = function(l, n) {
                    if (this.network.checkInternetConnection()) {
                        var t = this,
                            u = [],
                            a = t.checkInProvider.validateToDoCheckInSubmit(l, n.ratingRequired, t.ratings);
                        if (a.commentValues)
                            if (a.starRating) u = t.checkInProvider.constructCheckInTodoSubmit(l), t.checkInProvider.submitToDoCheckin(u, n.checkinsId, t.ratings).subscribe(function(l) {
                                var n = JSON.parse(l);
                                if (n.success) t.nav.pop();
                                else {
                                    var u = "";
                                    u = t.UserUtils.getTranslatedString("enterValidDetails", {}), t.ReusableUtils.showToastWithOk(u)
                                }
                            }, function(l) {
                                var n = "";
                                n = t.UserUtils.getTranslatedString("enterValidDetails", {}), t.ReusableUtils.showToastWithOk(n)
                            });
                            else {
                                var e = "";
                                e = t.UserUtils.getTranslatedString("checkinError", {}), t.ReusableUtils.showToastWithOk(e)
                            }
                        else t.ReusableUtils.showResponseErrorToast("Please enter all the fields")
                    }
                }, l
            }(),
            C = t(219),
            D = t(220),
            v = t(138),
            O = t(176),
            T = t(218),
            P = t(221),
            y = O.b,
            x = function() {
                return function() {}
            }(),
            L = t(773),
            R = t(774),
            U = t(775),
            F = t(776),
            w = t(777),
            j = t(778),
            N = t(779),
            S = t(780),
            A = t(781),
            E = t(61),
            V = t(56),
            $ = t(25),
            q = t(23),
            M = t(3),
            H = t(48),
            J = t(53),
            W = t(82),
            z = t(178),
            G = t(227),
            Y = t(30),
            B = t(124),
            K = t(5),
            Q = t(18),
            X = t(36),
            Z = t(14),
            ll = t(10),
            nl = t(102),
            tl = t(7),
            ul = t(140),
            al = t(75),
            el = t(16),
            il = t(139),
            ol = t(103),
            sl = t(80),
            rl = t(67),
            cl = t(47),
            _l = t(60),
            hl = t(161),
            dl = t(54),
            gl = t(63),
            pl = t(19),
            ml = t(95),
            kl = t(159),
            fl = t(105),
            Il = t(37),
            bl = t(27),
            Cl = t(116),
            Dl = t(17),
            vl = t(104),
            Ol = c._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            Tl = c._1("ng-component", b, function(l) {
                return c._29(0, [(l()(), c._5(0, 0, null, null, 2, "ng-component", [], null, null, null, r, Ol)), c._23(512, null, k.a, k.a, [h.a, g.a, d.a]), c._4(2, 49152, null, 0, b, [Cl.a, el.a, g.a, Dl.a, h.a, _.j, d.a, vl.a, k.a, f.a], null, null)], null, null)
            }, {}, {}, []),
            Pl = t(31),
            yl = t(402),
            xl = t(222),
            Ll = t(158);
        t.d(n, "CheckInTodoDetailsModuleNgFactory", function() {
            return Rl
        });
        var Rl = c._2(x, [], function(l) {
            return c._13([c._14(512, c.i, c.Y, [
                [8, [L.a, R.a, U.a, F.a, w.a, j.a, N.a, S.a, A.a, Tl]],
                [3, c.i], c.w
            ]), c._14(4608, ll.l, ll.k, [c.v, [2, ll.u]]), c._14(4608, Y.u, Y.u, []), c._14(4608, Y.d, Y.d, []), c._14(5120, _.f, y, [v.c]), c._14(4608, _.c, _.e, []), c._14(4608, _.h, _.d, []), c._14(4608, _.b, _.a, []), c._14(4608, _.j, _.j, [_.m, _.f, _.c, _.h, _.b, _.k, _.l]), c._14(4608, Pl.a, Pl.a, []), c._14(512, ll.b, ll.b, []), c._14(512, P.a, P.a, []), c._14(512, Y.s, Y.s, []), c._14(512, Y.g, Y.g, []), c._14(512, Y.q, Y.q, []), c._14(512, yl.a, yl.a, []), c._14(512, D.a, D.a, []), c._14(512, xl.a, xl.a, []), c._14(512, _.g, _.g, []), c._14(512, T.a, T.a, []), c._14(512, C.a, C.a, []), c._14(512, yl.b, yl.b, []), c._14(512, x, x, []), c._14(256, _.l, void 0, []), c._14(256, _.k, void 0, []), c._14(256, Ll.a, b, [])])
        })
    }
});