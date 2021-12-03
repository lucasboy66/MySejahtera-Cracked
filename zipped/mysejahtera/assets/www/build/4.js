webpackJsonp([4], {
    1296: function(l, n, u) {
        "use strict";

        function a(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 3, "ion-title", [], null, null, null, al.b, al.a)), R._4(1, 49152, null, 0, el.a, [tl.a, R.k, R.F, [2, ol.a],
                [2, il.a]
            ], null, null), (l()(), R._27(2, 0, ["", ""])), R._20(131072, S.i, [S.j, R.g])], null, function(l, n) {
                l(n, 2, 0, R._28(n, 2, 0, R._17(n, 3).transform("QRCodeResults")))
            })
        }

        function e(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 0, "img", [
                ["src", "assets/imgs/audit-icons/sampleQRCode.png"],
                ["width", "100%"]
            ], null, null, null, null, null))], null, null)
        }

        function t(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 1, "img", [
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "alt", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, u) {
                var a = !0;
                if ("load" === n) {
                    a = !1 !== R._17(l, 1).onLoad() && a
                }
                if ("error" === n) {
                    a = !1 !== R._17(l, 1).onError() && a
                }
                return a
            }, null, null)), R._4(1, 540672, null, 0, sl.a, [cl.a, R.k, rl.a], {
                cache: [0, "cache"],
                employeeId: [1, "employeeId"]
            }, null)], function(l, n) {
                var u = n.component;
                l(n, 1, 0, u.scannedData.imageUrl, u.scannedData.employeeId)
            }, function(l, n) {
                var u = n.component;
                l(n, 0, 0, u.UserUtils.getInitials(u.scannedData.displayName))
            })
        }

        function o(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), R._27(1, null, ["", ""]))], null, function(l, n) {
                var u = n.component;
                l(n, 0, 0, "teamlistIonIcon_" + u.scannedData.employeeId);
                l(n, 1, 0, u.UserUtils.getInitials(u.scannedData.displayName))
            })
        }

        function i(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 2, "p", [
                ["class", "text-black mb-2"],
                ["item-start", ""]
            ], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), R._27(1, null, ["\n                                ", ": ", ""])), R._20(131072, S.i, [S.j, R.g])], null, function(l, n) {
                var u = n.component;
                l(n, 0, 0, "empDetailsOrgBtn");
                l(n, 1, 0, R._28(n, 1, 0, R._17(n, 2).transform("IC")), u.scannedData.licenceNumber)
            })
        }

        function s(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 1, "img", [
                ["class", "pr-1"],
                ["imageCache", ""]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, u) {
                var a = !0;
                if ("load" === n) {
                    a = !1 !== R._17(l, 1).onLoad() && a
                }
                if ("error" === n) {
                    a = !1 !== R._17(l, 1).onError() && a
                }
                return a
            }, null, null)), R._4(1, 540672, null, 0, sl.a, [cl.a, R.k, rl.a], {
                cache: [0, "cache"]
            }, null)], function(l, n) {
                l(n, 1, 0, n.component.scannedData.image2)
            }, function(l, n) {
                l(n, 0, 0, "teamlistIonIcon_" + n.component.scannedData.employeeId)
            })
        }

        function c(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 1, "img", [
                ["class", "pl-1"],
                ["imageCache", ""]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, u) {
                var a = !0;
                if ("load" === n) {
                    a = !1 !== R._17(l, 1).onLoad() && a
                }
                if ("error" === n) {
                    a = !1 !== R._17(l, 1).onError() && a
                }
                return a
            }, null, null)), R._4(1, 540672, null, 0, sl.a, [cl.a, R.k, rl.a], {
                cache: [0, "cache"]
            }, null)], function(l, n) {
                l(n, 1, 0, n.component.scannedData.image1)
            }, function(l, n) {
                l(n, 0, 0, "teamlistIonIcon_" + n.component.scannedData.employeeId)
            })
        }

        function r(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 23, null, null, null, null, null, null, null)), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._5(2, 0, null, null, 20, "ion-grid", [
                ["class", "grid"]
            ], null, null, null, null, null)), R._4(3, 16384, null, 0, _l.a, [], null, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(5, 0, null, null, 16, "ion-row", [
                ["class", "mb-3 mt-3 row"]
            ], null, null, null, null, null)), R._4(6, 16384, null, 0, ml.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(8, 0, null, null, 5, "ion-col", [
                ["class", "col"]
            ], null, null, null, null, null)), R._4(9, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                    "])), (l()(), R._0(16777216, null, null, 1, null, s)), R._4(12, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(15, 0, null, null, 5, "ion-col", [
                ["class", "col"]
            ], null, null, null, null, null)), R._4(16, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                    "])), (l()(), R._0(16777216, null, null, 1, null, c)), R._4(19, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._27(-1, null, ["\n                    "]))], function(l, n) {
                var u = n.component;
                l(n, 12, 0, u.scannedData.image2);
                l(n, 19, 0, u.scannedData.image1)
            }, null)
        }

        function _(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 53, null, null, null, null, null, null, null)), (l()(), R._27(-1, null, ["\n                    "])), (l()(), R._5(2, 0, null, null, 47, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), R._4(3, 16384, null, 0, fl.a, [tl.a, R.k, R.F, pl.a, hl.l, gl.a], null, null), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._5(5, 0, null, null, 20, "ion-item", [
                ["class", "item item-block"]
            ], null, null, null, kl.b, kl.a)), R._4(6, 1097728, null, 3, vl.a, [yl.a, tl.a, R.k, R.F, [2, Il.a]], null, null), R._25(335544320, 2, {
                contentLabel: 0
            }), R._25(603979776, 3, {
                _buttons: 1
            }), R._25(603979776, 4, {
                _icons: 1
            }), R._4(10, 16384, null, 0, bl.a, [], null, null), (l()(), R._27(-1, 2, ["\n                            "])), (l()(), R._5(12, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), R._4(13, 16384, null, 0, Cl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._0(16777216, null, null, 1, null, t)), R._4(16, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._0(16777216, null, null, 1, null, o)), R._4(19, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, 2, ["\n                            "])), (l()(), R._5(22, 0, null, 2, 0, "p", [
                ["text-wrap", ""]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), R._27(-1, 2, ["\n                            "])), (l()(), R._5(24, 0, null, 2, 0, "small", [], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), R._27(-1, 2, ["\n                        "])), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._5(27, 0, null, null, 10, "ion-row", [
                ["class", "mb-2 row"]
            ], null, null, null, null, null)), R._4(28, 16384, null, 0, ml.a, [], null, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._0(16777216, null, null, 1, null, i)), R._4(31, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(33, 0, null, null, 3, "p", [
                ["class", "text-black"],
                ["item-start", ""]
            ], [
                [8, "id", 0]
            ], null, null, null, null)), (l()(), R._5(34, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), R._27(35, null, ["", "\n                                    ", ""])), R._20(131072, S.i, [S.j, R.g]), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._5(39, 0, null, null, 9, "ion-row", [
                ["class", "img-gallery row"]
            ], null, null, null, null, null)), R._4(40, 16384, null, 0, ml.a, [], null, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(42, 0, null, null, 5, "ion-col", [
                ["class", "col"],
                ["col-12", ""]
            ], null, null, null, null, null)), R._4(43, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(45, 0, null, null, 1, "img", [
                ["alt", ""],
                ["imageCache", ""]
            ], [
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(l, n, u) {
                var a = !0;
                if ("load" === n) {
                    a = !1 !== R._17(l, 46).onLoad() && a
                }
                if ("error" === n) {
                    a = !1 !== R._17(l, 46).onError() && a
                }
                return a
            }, null, null)), R._4(46, 540672, null, 0, sl.a, [cl.a, R.k, rl.a], {
                cache: [0, "cache"]
            }, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._27(-1, null, ["\n                    "])), (l()(), R._27(-1, null, ["\n                    "])), (l()(), R._0(16777216, null, null, 1, null, r)), R._4(52, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                "]))], function(l, n) {
                var u = n.component;
                l(n, 16, 0, u.scannedData.imageUrl);
                l(n, 19, 0, !u.scannedData.imageUrl);
                l(n, 31, 0, u.scannedData.licenceNumber);
                l(n, 46, 0, u.getImagePath());
                l(n, 52, 0, u.scannedData.image1 || u.scannedData.image2)
            }, function(l, n) {
                var u = n.component;
                l(n, 22, 0, u.scannedData.displayName);
                l(n, 24, 0, u.scannedData.designation);
                l(n, 33, 0, "empDetailsOrgBtn");
                l(n, 35, 0, R._28(n, 35, 0, R._17(n, 36).transform("asOf")), u.UserUtils.getFormattedDate(u.scannedData.lastModifiedOn));
                l(n, 45, 0, u.images)
            })
        }

        function m(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 15, null, null, null, null, null, null, null)), (l()(), R._27(-1, null, ["\n        "])), (l()(), R._5(2, 0, null, null, 12, "ion-card", [], null, null, null, null, null)), R._4(3, 16384, null, 0, Dl.a, [tl.a, R.k, R.F], null, null), (l()(), R._27(-1, null, ["\n            "])), (l()(), R._5(5, 0, null, null, 8, "ion-card-content", [], null, null, null, null, null)), R._4(6, 16384, null, 0, Rl.a, [tl.a, R.k, R.F], null, null), (l()(), R._27(-1, null, ["\n                "])), (l()(), R._0(16777216, null, null, 1, null, e)), R._4(9, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                "])), (l()(), R._0(16777216, null, null, 1, null, _)), R._4(12, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n            "])), (l()(), R._27(-1, null, ["\n        "])), (l()(), R._27(-1, null, ["\n    "]))], function(l, n) {
                var u = n.component;
                l(n, 9, 0, u.noData);
                l(n, 12, 0, !u.noData)
            }, null)
        }

        function d(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 0, "img", [
                ["class", "myThank-check"],
                ["src", "assets/imgs/covid/in.svg"]
            ], null, null, null, null, null))], null, null)
        }

        function f(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 0, "img", [
                ["class", "myThank-check"],
                ["src", "assets/imgs/covid/out.svg"]
            ], null, null, null, null, null))], null, null)
        }

        function p(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), R._27(-1, null, ["Maklumat Check-in"]))], null, null)
        }

        function h(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), R._27(-1, null, ["Maklumat Check-out"]))], null, null)
        }

        function g(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 8, "ion-col", [
                ["class", "mb-3 col"],
                ["col-6", ""],
                ["text-right", ""]
            ], null, null, null, null, null)), R._4(1, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(3, 0, null, null, 1, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["No. Telefon"])), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(6, 0, null, null, 1, "p", [
                ["class", "text-black"]
            ], null, null, null, null, null)), (l()(), R._27(7, null, ["", ""])), (l()(), R._27(-1, null, ["\n                            "]))], null, function(l, n) {
                l(n, 7, 0, n.component.uName)
            })
        }

        function k(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 7, "ion-col", [
                ["class", "mb-3 col"],
                ["col-6", ""],
                ["text-right", ""]
            ], null, null, null, null, null)), R._4(1, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(3, 0, null, null, 1, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["E-mel"])), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(6, 0, null, null, 0, "p", [
                ["class", "text-black"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), R._27(-1, null, ["\n                            "]))], null, function(l, n) {
                l(n, 6, 0, n.component.uName)
            })
        }

        function v(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 10, "ion-col", [
                ["class", "col"],
                ["col-12", ""],
                ["text-center", ""]
            ], null, null, null, null, null)), R._4(1, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(3, 0, null, null, 1, "p", [
                ["class", "small mb-2"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Status Risiko"])), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(6, 0, null, null, 3, "p", [], null, null, null, null, null)), (l()(), R._5(7, 0, null, null, 2, "span", [
                ["class", "pill"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), R._4(8, 278528, null, 0, j.m, [R.u, R.k, R.G], {
                ngStyle: [0, "ngStyle"]
            }, null), R._21(9, {
                "background-color": 0
            }), (l()(), R._27(-1, null, ["\n                            "]))], function(l, n) {
                l(n, 8, 0, l(n, 9, 0, "Low" == n.component.risk ? "green" : "red"))
            }, function(l, n) {
                l(n, 7, 0, n.component.risk)
            })
        }

        function y(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 30, "ion-row", [
                ["class", "colCheckinCards row"],
                ["text-center", ""]
            ], null, null, null, null, null)), R._4(1, 16384, null, 0, ml.a, [], null, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(3, 0, null, null, 12, "ion-col", [
                ["class", "col"]
            ], null, null, null, null, null)), R._4(4, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(6, 0, null, null, 8, "div", [
                ["class", "mr-2"]
            ], null, null, null, null, null)), R._4(7, 278528, null, 0, j.m, [R.u, R.k, R.G], {
                ngStyle: [0, "ngStyle"]
            }, null), R._21(8, {
                "background-color": 0
            }), (l()(), R._27(-1, null, ["\n                                    "])), (l()(), R._5(10, 0, null, null, 1, "p", [
                ["class", "text-white"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Status Risiko"])), (l()(), R._27(-1, null, ["\n                                    "])), (l()(), R._5(13, 0, null, null, 0, "p", [
                ["class", "bold mt-2 text-white"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(17, 0, null, null, 12, "ion-col", [
                ["class", "col"]
            ], null, null, null, null, null)), R._4(18, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(20, 0, null, null, 8, "div", [
                ["class", "ml-2 border"]
            ], null, null, null, null, null)), R._4(21, 278528, null, 0, j.m, [R.u, R.k, R.G], {
                ngStyle: [0, "ngStyle"]
            }, null), R._21(22, {
                "background-color": 0
            }), (l()(), R._27(-1, null, ["\n                                    "])), (l()(), R._5(24, 0, null, null, 1, "p", [
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Status Vaksinasi"])), (l()(), R._27(-1, null, ["\n                                    "])), (l()(), R._5(27, 0, null, null, 0, "p", [
                ["class", "bold mt-2"],
                ["text-wrap", ""]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n                        "]))], function(l, n) {
                var u = n.component;
                l(n, 7, 0, l(n, 8, 0, u.empInfo.riskStatus.color));
                l(n, 21, 0, l(n, 22, 0, u.empInfo.vacStatus.color))
            }, function(l, n) {
                var u = n.component;
                l(n, 13, 0, u.risk);
                l(n, 27, 0, u.vacStatus)
            })
        }

        function I(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 131, null, null, null, null, null, null, null)), (l()(), R._27(-1, null, ["\n        "])), (l()(), R._5(2, 0, null, null, 128, "div", [
                ["style", "display: grid; height: 100%; align-items: center; margin-top: 20px;"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["\n            "])), (l()(), R._5(4, 0, null, null, 125, "div", [], null, null, null, null, null)), (l()(), R._27(-1, null, ["\n                "])), (l()(), R._5(6, 0, null, null, 34, "ion-card", [
                ["class", "myThank-content"]
            ], null, null, null, null, null)), R._4(7, 16384, null, 0, Dl.a, [tl.a, R.k, R.F], null, null), (l()(), R._27(-1, null, ["\n                    "])), (l()(), R._5(9, 0, null, null, 30, "ion-card-content", [], null, null, null, null, null)), R._4(10, 16384, null, 0, Rl.a, [tl.a, R.k, R.F], null, null), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._0(16777216, null, null, 1, null, d)), R._4(14, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._0(16777216, null, null, 1, null, f)), R._4(17, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._5(19, 0, null, null, 18, "ion-row", [
                ["align-items-center", ""],
                ["class", "row"]
            ], null, null, null, null, null)), R._4(20, 16384, null, 0, ml.a, [], null, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(22, 0, null, null, 4, "ion-col", [
                ["class", "col"],
                ["col-4", ""]
            ], null, null, null, null, null)), R._4(23, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(25, 0, null, null, 0, "img", [
                ["src", "assets/imgs/logoMy.svg"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(28, 0, null, null, 8, "ion-col", [
                ["class", "col"],
                ["col-8", ""],
                ["text-right", ""]
            ], null, null, null, null, null)), R._4(29, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(31, 0, null, null, 1, "h1", [
                ["class", "text-white bold"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Terima Kasih"])), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(34, 0, null, null, 1, "p", [
                ["class", "text-white"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Pendaftaran anda berjaya!"])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._27(-1, null, ["\n                    "])), (l()(), R._27(-1, null, ["\n                "])), (l()(), R._27(-1, null, ["\n\n                "])), (l()(), R._5(42, 0, null, null, 86, "ion-card", [
                ["class", "myThank-contentTwo"]
            ], null, null, null, null, null)), R._4(43, 16384, null, 0, Dl.a, [tl.a, R.k, R.F], null, null), (l()(), R._27(-1, null, ["\n                    "])), (l()(), R._5(45, 0, null, null, 67, "ion-card-content", [
                ["class", "py-4"]
            ], null, null, null, null, null)), R._4(46, 16384, null, 0, Rl.a, [tl.a, R.k, R.F], null, null), (l()(), R._27(-1, null, ["\n                        "])), (l()(), R._5(48, 0, null, null, 60, "ion-row", [
                ["class", "row"]
            ], null, null, null, null, null)), R._4(49, 16384, null, 0, ml.a, [], null, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(51, 0, null, null, 8, "ion-col", [
                ["class", "mb-4 col"],
                ["col-12", ""],
                ["text-center", ""]
            ], null, null, null, null, null)), R._4(52, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._0(16777216, null, null, 1, null, p)), R._4(55, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._0(16777216, null, null, 1, null, h)), R._4(58, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(61, 0, null, null, 8, "ion-col", [
                ["class", "mb-3 col"],
                ["col-12", ""]
            ], null, null, null, null, null)), R._4(62, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(64, 0, null, null, 1, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Lokasi"])), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(67, 0, null, null, 1, "p", [
                ["class", "text-black"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), R._27(-1, null, ["MidValley North Gate, LG1"])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(71, 0, null, null, 7, "ion-col", [
                ["class", "mb-3 col"],
                ["col-6", ""]
            ], null, null, null, null, null)), R._4(72, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(74, 0, null, null, 1, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Nama"])), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(77, 0, null, null, 0, "p", [
                ["class", "text-black"]
            ], [
                [8, "innerHTML", 1]
            ], null, null, null, null)), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n\n                            "])), (l()(), R._0(16777216, null, null, 1, null, g)), R._4(81, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._0(16777216, null, null, 1, null, k)), R._4(84, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(86, 0, null, null, 8, "ion-col", [
                ["class", "mb-3 col"],
                ["col-6", ""]
            ], null, null, null, null, null)), R._4(87, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(89, 0, null, null, 1, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Tarikh"])), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(92, 0, null, null, 1, "p", [
                ["class", "text-black"]
            ], null, null, null, null, null)), (l()(), R._27(93, null, ["", ""])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._5(96, 0, null, null, 8, "ion-col", [
                ["class", "mb-3 col"],
                ["col-6", ""],
                ["text-right", ""]
            ], null, null, null, null, null)), R._4(97, 16384, null, 0, dl.a, [], null, null), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(99, 0, null, null, 1, "p", [
                ["class", "small"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Masa"])), (l()(), R._27(-1, null, ["\n                                "])), (l()(), R._5(102, 0, null, null, 1, "p", [
                ["class", "text-black"]
            ], null, null, null, null, null)), (l()(), R._27(103, null, ["", ""])), (l()(), R._27(-1, null, ["\n                            "])), (l()(), R._27(-1, null, ["\n\n                            "])), (l()(), R._0(16777216, null, null, 1, null, v)), R._4(107, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n\n                        "])), (l()(), R._27(-1, null, ["\n\n                        "])), (l()(), R._0(16777216, null, null, 1, null, y)), R._4(111, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, null, ["\n                    "])), (l()(), R._27(-1, null, ["\n                    "])), (l()(), R._5(114, 0, null, null, 13, "ion-item", [
                ["class", "myThank-footer item item-block"]
            ], null, null, null, kl.b, kl.a)), R._4(115, 1097728, null, 3, vl.a, [yl.a, tl.a, R.k, R.F, [2, Il.a]], null, null), R._25(335544320, 5, {
                contentLabel: 0
            }), R._25(603979776, 6, {
                _buttons: 1
            }), R._25(603979776, 7, {
                _icons: 1
            }), R._4(119, 16384, null, 0, bl.a, [], null, null), (l()(), R._27(-1, 2, ["\n                        "])), (l()(), R._5(121, 0, null, 2, 1, "p", [
                ["class", "small"],
                ["text-wrap", ""]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["Sila tunjukkan tiket ini kepada pemilik premis apabila diminta"])), (l()(), R._27(-1, 2, ["\n                        "])), (l()(), R._5(124, 0, null, 4, 0, "img", [
                ["item-end", ""],
                ["src", "assets/imgs/img1.png"],
                ["style", "width: 40px;"]
            ], null, null, null, null, null)), (l()(), R._27(-1, 2, ["\n                        "])), (l()(), R._5(126, 0, null, 4, 0, "img", [
                ["item-end", ""],
                ["src", "assets/imgs/img2.png"],
                ["style", "width: 40px;"]
            ], null, null, null, null, null)), (l()(), R._27(-1, 2, ["\n                    "])), (l()(), R._27(-1, null, ["\n                "])), (l()(), R._27(-1, null, ["\n            "])), (l()(), R._27(-1, null, ["\n        "])), (l()(), R._27(-1, null, ["\n    "]))], function(l, n) {
                var u = n.component;
                l(n, 14, 0, !u.isCheckout);
                l(n, 17, 0, u.isCheckout);
                l(n, 55, 0, !u.isCheckout);
                l(n, 58, 0, u.isCheckout);
                l(n, 81, 0, !u.isEmail);
                l(n, 84, 0, u.isEmail);
                l(n, 107, 0, !u.vacStatus);
                l(n, 111, 0, u.vacStatus)
            }, function(l, n) {
                var u = n.component;
                l(n, 67, 0, u.locationName);
                l(n, 77, 0, u.name);
                l(n, 93, 0, u.todayDate);
                l(n, 103, 0, u.todayTime)
            })
        }

        function b(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 20, null, null, null, null, null, null, null)), (l()(), R._27(-1, null, ["\n        "])), (l()(), R._5(2, 0, null, null, 17, "ion-card", [], null, null, null, null, null)), R._4(3, 16384, null, 0, Dl.a, [tl.a, R.k, R.F], null, null), (l()(), R._27(-1, null, ["\n            "])), (l()(), R._5(5, 0, null, null, 13, "ion-card-content", [
                ["text-center", ""]
            ], null, null, null, null, null)), R._4(6, 16384, null, 0, Rl.a, [tl.a, R.k, R.F], null, null), (l()(), R._27(-1, null, ["\n                "])), (l()(), R._5(8, 0, null, null, 0, "img", [
                ["class", "mb-5 mx-auto w-75"],
                ["src", "assets/imgs/Warning.png"]
            ], null, null, null, null, null)), (l()(), R._27(-1, null, ["\n                "])), (l()(), R._5(10, 0, null, null, 2, "h4", [
                ["class", "bold mx-3"]
            ], null, null, null, null, null)), (l()(), R._27(11, null, ["", ""])), R._20(131072, S.i, [S.j, R.g]), (l()(), R._27(-1, null, ["\n                "])), (l()(), R._5(14, 0, null, null, 3, "button", [
                ["class", "greeting-btn mt-5"],
                ["ion-button", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var a = !0;
                if ("click" === n) {
                    a = !1 !== l.component.scanCode() && a
                }
                return a
            }, Sl.b, Sl.a)), R._4(15, 1097728, null, 0, Nl.a, [
                [8, ""], tl.a, R.k, R.F
            ], null, null), (l()(), R._27(16, 0, ["", ""])), R._20(131072, S.i, [S.j, R.g]), (l()(), R._27(-1, null, ["\n            "])), (l()(), R._27(-1, null, ["\n        "])), (l()(), R._27(-1, null, ["\n    "]))], null, function(l, n) {
                l(n, 11, 0, R._28(n, 11, 0, R._17(n, 12).transform("wrongQRCode")));
                l(n, 16, 0, R._28(n, 16, 0, R._17(n, 17).transform("tryAgain")))
            })
        }

        function C(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 11, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), R._4(1, 16384, null, 0, Tl.a, [tl.a, R.k, R.F, [2, Ll.a]], null, null), (l()(), R._27(-1, null, ["\n    "])), (l()(), R._5(3, 0, null, null, 7, "ion-toolbar", [
                ["class", "toolbar"]
            ], [
                [2, "statusbar-padding", null]
            ], null, null, El.b, El.a)), R._4(4, 49152, null, 0, ol.a, [tl.a, R.k, R.F], null, null), (l()(), R._27(-1, 3, ["\n        "])), (l()(), R._5(6, 0, null, 3, 3, "button", [
                ["block", ""],
                ["ion-button", ""]
            ], null, [
                [null, "click"]
            ], function(l, n, u) {
                var a = !0;
                if ("click" === n) {
                    a = !1 !== l.component.doCheckout() && a
                }
                return a
            }, Sl.b, Sl.a)), R._4(7, 1097728, null, 0, Nl.a, [
                [8, ""], tl.a, R.k, R.F
            ], {
                block: [0, "block"]
            }, null), (l()(), R._27(8, 0, ["", ""])), R._20(131072, S.i, [S.j, R.g]), (l()(), R._27(-1, 3, ["\n    "])), (l()(), R._27(-1, null, ["\n"]))], function(l, n) {
                l(n, 7, 0, "")
            }, function(l, n) {
                l(n, 3, 0, R._17(n, 4)._sbPadding);
                l(n, 8, 0, R._28(n, 8, 0, R._17(n, 9).transform("checkOut")))
            })
        }

        function D(l) {
            return R._29(0, [(l()(), R._5(0, 0, null, null, 21, "ion-header", [], null, null, null, null, null)), R._4(1, 16384, null, 0, Ol.a, [tl.a, R.k, R.F, [2, Ll.a]], null, null), (l()(), R._27(-1, null, ["\n    "])), (l()(), R._5(3, 0, null, null, 17, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, wl.b, wl.a)), R._4(4, 49152, null, 0, il.a, [jl.a, [2, Ll.a],
                [2, Pl.a], tl.a, R.k, R.F
            ], {
                color: [0, "color"]
            }, null), (l()(), R._27(-1, 3, ["\n        "])), (l()(), R._0(16777216, null, 3, 1, null, a)), R._4(7, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, 3, ["\n        "])), (l()(), R._5(9, 0, null, 2, 10, "ion-buttons", [
                ["end", ""]
            ], null, null, null, null, null)), R._4(10, 16384, null, 1, Ql.a, [tl.a, R.k, R.F, [2, ol.a],
                [2, il.a]
            ], null, null), R._25(603979776, 1, {
                _buttons: 1
            }), (l()(), R._27(-1, null, ["\n            "])), (l()(), R._5(13, 0, null, null, 5, "button", [
                ["icon-only", ""],
                ["ion-button", ""]
            ], [
                [8, "id", 0]
            ], [
                [null, "click"]
            ], function(l, n, u) {
                var a = !0;
                if ("click" === n) {
                    a = !1 !== l.component.scanCode() && a
                }
                return a
            }, Sl.b, Sl.a)), R._4(14, 1097728, [
                [1, 4]
            ], 0, Nl.a, [
                [8, ""], tl.a, R.k, R.F
            ], null, null), (l()(), R._27(-1, 0, ["\n                "])), (l()(), R._5(16, 0, null, 0, 1, "ion-icon", [
                ["name", "ios-qr-scanner-outline"],
                ["role", "img"]
            ], [
                [2, "hide", null]
            ], null, null, null, null)), R._4(17, 147456, null, 0, xl.a, [tl.a, R.k, R.F], {
                name: [0, "name"]
            }, null), (l()(), R._27(-1, 0, ["\n            "])), (l()(), R._27(-1, null, ["\n        "])), (l()(), R._27(-1, 3, ["\n    "])), (l()(), R._27(-1, null, ["\n"])), (l()(), R._27(-1, null, ["\n\n"])), (l()(), R._5(23, 0, null, null, 13, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, Fl.b, Fl.a)), R._4(24, 278528, null, 0, j.m, [R.u, R.k, R.G], {
                ngStyle: [0, "ngStyle"]
            }, null), R._21(25, {
                "background-color": 0
            }), R._4(26, 4374528, null, 0, Ml.a, [tl.a, pl.a, gl.a, R.k, R.F, jl.a, Al.a, R.y, [2, Ll.a],
                [2, Pl.a]
            ], null, null), (l()(), R._27(-1, 1, ["\n    "])), (l()(), R._0(16777216, null, 1, 1, null, m)), R._4(29, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, 1, ["\n\n    "])), (l()(), R._0(16777216, null, 1, 1, null, I)), R._4(32, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, 1, ["\n\n    "])), (l()(), R._0(16777216, null, 1, 1, null, b)), R._4(35, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null), (l()(), R._27(-1, 1, ["\n"])), (l()(), R._27(-1, null, ["\n\n"])), (l()(), R._0(16777216, null, null, 1, null, C)), R._4(39, 16384, null, 0, j.j, [R.O, R.L], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var u = n.component;
                l(n, 4, 0, "theme");
                l(n, 7, 0, u.isProfileQR);
                l(n, 17, 0, "ios-qr-scanner-outline");
                l(n, 24, 0, l(n, 25, 0, u.isCheckInQR ? "#697386" : ""));
                l(n, 29, 0, u.isProfileQR);
                l(n, 32, 0, u.isCheckInQR);
                l(n, 35, 0, u.isErrorQR);
                l(n, 39, 0, u.enableCheckout)
            }, function(l, n) {
                l(n, 3, 0, R._17(n, 4)._hidden, R._17(n, 4)._sbPadding);
                l(n, 13, 0, "profileModalClick");
                l(n, 16, 0, R._17(n, 17)._hidden);
                l(n, 23, 0, R._17(n, 26).statusbarPadding, R._17(n, 26)._hasRefresher)
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var R = u(1),
            S = (u(0), u(6), u(9)),
            N = u(88),
            T = u(407),
            L = u(11),
            E = u(13),
            O = u(12),
            w = u(68),
            j = u(10),
            P = u(425),
            Q = u(21),
            x = u(65),
            F = u(1372),
            M = u(49),
            A = u.n(M),
            U = function() {
                function l(l, n, u, a, e, t, o, i, s, c, r, _, m, d) {
                    this.ReusableUtils = l, this.platform = n, this.DBAccess = u, this.http = a, this.datePipe = e, this.StorageAccess = t, this.viewCtrl = o, this.nav = i, this.navParams = s, this.translate = c, this.barcodeScanner = r, this.commonProvider = _, this.UserUtils = m, this.appRate = d, this.empInfo = {
                        displayName: "",
                        designation: "",
                        vacStatus: {
                            status: "",
                            color: "",
                            textColor: ""
                        },
                        riskStatus: {
                            status: "",
                            color: "",
                            textColor: ""
                        }
                    }, this.isEmail = !0, this.isCheckInQR = !1, this.isEmpForm = !1, this.isProfileQR = !1, this.isErrorQR = !1, this.enableCheckout = !1, this.isCheckout = !1, this.window = window, this.noData = !0, this.scannedData = {}, this.depNames = "", this.depNamesWithBr = "", this.name = "";
                    var f = this;
                    f.deleteOldHistory(), f.StorageAccess.getValue("username").then(function(l) {
                        f.uName = l.includes("@") ? l : "+" + l, f.isEmail = !!l.includes("@")
                    });
                    var p = new Date;
                    if (f.todayDate = f.datePipe.transform(p.getTime(), "MMM d, y"), f.todayTime = f.datePipe.transform(p.getTime(), "h:mm:ss a"), f.navParams.data)
                        if (f.depNames = f.navParams.get("dependentNames"), f.depNamesWithBr = f.navParams.get("depNamesWithbreak"), f.navParams.get("isCheckout")) f.lastCheckinData = f.navParams.get("data"), f.lastCheckinTime = f.navParams.get("time"), f.updateCheckoutDetails();
                        else if (f.navParams.get("data")) {
                        var h = f.navParams.get("data");
                        f.getDetails(h)
                    } else if (f.navParams.get("historyItem")) {
                        var g = f.navParams.get("historyItem");
                        f.lastCheckinData = g, f.lastCheckinTime = g.time, f.isErrorQR = !1, f.isProfileQR = !1, f.isCheckInQR = !0, f.enableCheckout = !1, A.a.has(g, "isCheckout") ? (f.enableCheckout = !1, f.isCheckout = !0) : (f.enableCheckout = !(A.a.has(g, "hasCheckedOut") || !A.a.has(g, "id")), f.isCheckout = !1), f.todayDate = g.todayDate, f.todayTime = g.todayTime, f.StorageAccess.getValue("empInfo").then(function(l) {
                            f.empInfo = JSON.parse(l)
                        }), f.locationName = g.location, f.risk = g.userStatus, f.vacStatus = g.vacStatus, g.name.includes(",") ? (f.name = g.name.split(","), f.name = f.name.join(",<br>")) : f.name = g.name, f.eName = g.name
                    } else f.isErrorQR = !0, f.isProfileQR = !1, f.isCheckInQR = !1
                }
                return l.prototype.ionViewDidEnter = function() {
                    var l, n, u, a, e;
                    this.translate.get("rateAppTitle").subscribe(function(n) {
                        l = n
                    }), this.translate.get("rateAppMessage").subscribe(function(l) {
                        n = l
                    }), this.translate.get("rateAppCancelLabel").subscribe(function(l) {
                        u = l
                    }), this.translate.get("rateAppLaterLabel").subscribe(function(l) {
                        a = l
                    }), this.translate.get("rateAppLabel").subscribe(function(l) {
                        e = l
                    }), this.isCheckInQR && (this.appRate.preferences = {
                        inAppReview: !1,
                        displayAppName: "MySejahtera",
                        usesUntilPrompt: 20,
                        simpleMode: !0,
                        promptAgainForEachNewVersion: !1,
                        storeAppURL: {
                            ios: "1504055630",
                            android: "market://details?id=my.gov.onegovappstore.mysejahtera"
                        },
                        customLocale: {
                            title: l,
                            message: n,
                            cancelButtonLabel: u,
                            laterButtonLabel: a,
                            rateButtonLabel: e
                        }
                    }, this.appRate.promptForRating(!1))
                }, l.prototype.getDetails = function(l) {
                    var n = this;
                    if ("" == l) return n.isErrorQR = !0, n.isProfileQR = !1, void(n.isCheckInQR = !1);
                    var u = new Date;
                    if (n.todayDate = n.datePipe.transform(u.getTime(), "MMM d, y"), n.todayTime = n.datePipe.transform(u.getTime(), "h:mm:ss a"), n.isCheckout = !1, l.includes("https://mysejahtera.malaysia.gov.my/qrscan") || l.includes("https://mysejahteraqr.kpisoft.com/qrscan") || l.includes("https://covid-19malaysia.kpisoft.com/qrscan")) {
                        l.includes("formType=GB_EMPLOYEE") && (n.isEmpForm = !0), l.includes("formType=TRAVELLER") && (n.StorageAccess.setValue("isTraveller", !0), n.StorageAccess.setValue("employeeInfoChanged", !0)), n.isCheckInQR = !0, n.isProfileQR = !1, n.isErrorQR = !1, n.enableCheckout = !0, n.qrCodeData = l, n.locationID = n.getQueryString("lId", n.qrCodeData);
                        var a = n.getQueryString("eln", n.qrCodeData);
                        n.locationName = a ? atob(a) : n.getQueryString("ln", n.qrCodeData).split("_").join(" "), n.StorageAccess.getValue("empInfo").then(function(l) {
                            n.empInfo = JSON.parse(l), n.depNames ? (n.name = n.empInfo.displayName + ", <br> " + n.depNamesWithBr, n.eName = n.empInfo.displayName + ", " + n.depNames) : (n.name = n.empInfo.displayName, n.eName = n.empInfo.displayName), n.risk = n.empInfo.designationCode && n.empInfo.designationCode.includes("LOW") ? "Low" : "High", n.vacStatus = n.empInfo.vacStatus ? n.empInfo.vacStatus.status : "Not Vaccinated", n.saveDetails(new Date)
                        })
                    } else n.commonProvider.decrypt(l).then(function(l) {
                        l.includes("displayName") && l.includes("lastModifiedOn") && l.includes("imageUrl") ? (n.isProfileQR = !0, n.isCheckInQR = !1, n.isErrorQR = !1, n.scannedData = JSON.parse(l), n.noData = !1) : (n.isErrorQR = !0, n.isProfileQR = !1, n.isCheckInQR = !1)
                    }).catch(function(l) {
                        n.isErrorQR = !0, n.isProfileQR = !1, n.isCheckInQR = !1
                    })
                }, l.prototype.scanCode = function() {
                    var l = this,
                        n = {
                            name: encodeURIComponent(l.empInfo.displayName),
                            contact: l.uName,
                            userStatus: l.empInfo.designationCode,
                            licenceNumber: l.empInfo.licenceNumber,
                            createdDate: (new Date).toJSON()
                        },
                        u = btoa(JSON.stringify(n));
                    try {
                        l.barcodeScanner.scan({
                            prompt: "Place a QR Code inside the scan area",
                            showTorchButton: !0
                        }).then(function(n) {
                            var a = n.text;
                            if (n.cancelled);
                            else if (n.text.includes("isExternal=true")) {
                                var e = n.text + "&data=" + encodeURIComponent(u);
                                l.ReusableUtils._launchInAppBrowser(e)
                            } else l.getDetails(a)
                        }).catch(function(l) {})
                    } catch (l) {}
                }, l.prototype.getImagePath = function() {
                    if (this.scannedData.designationCode) return x.a.devLink + "/epms/v1/mobileApp/profile/image/" + this.scannedData.designationCode + ".png"
                }, l.prototype.getQueryString = function(l, n) {
                    var u = new RegExp("[?&]" + l + "=([^&#]*)", "i").exec(n);
                    return u ? decodeURIComponent(u[1]) : null
                }, l.prototype.deleteOldHistory = function() {
                    var l = (new Date).getTime() - 2592e6;
                    this.DBAccess.addRecord("DELETE FROM checkInHistory WHERE checkInTime < " + l, []).then(function(l) {}, function(l) {})
                }, l.prototype.saveDetails = function(l) {
                    var n = this,
                        u = {
                            id: Object(F.v4)().replace(/-/g, ""),
                            name: n.eName,
                            contact: n.uName,
                            userStatus: n.risk,
                            tenant: n.locationID,
                            location: n.locationName,
                            createdDate: l.toJSON(),
                            vacStatus: n.vacStatus,
                            type: 1
                        },
                        a = x.a.devLink + "/clockin";
                    n.isEmpForm && (a = x.a.devLink + "/clockinOffice");
                    var e = JSON.parse(JSON.stringify(u));
                    e.todayDate = n.datePipe.transform(l.getTime(), "MMM d, y"), e.todayTime = n.datePipe.transform(l.getTime(), "h:mm:ss a"), e.isEmpForm = n.isEmpForm;
                    var t = [JSON.stringify(e), l.getTime()];
                    n.lastCheckinData = e, n.lastCheckinTime = l.getTime(), n.DBAccess.addRecord("INSERT INTO checkInHistory(jsonData, checkInTime)VALUES (?,?)", t).then(function(l) {}, function(l) {}), n.http.noBasePostCheckIn(a, u).then(function(l) {}, function(a) {
                        n.ReusableUtils.saveErrorLog(u, a), u.isEmpForm = n.isEmpForm;
                        var e = [JSON.stringify(u), l.getTime()];
                        n.DBAccess.addRecord("INSERT INTO checkInQue(jsonData, checkInTime)VALUES (?,?)", e).then(function(l) {}, function(l) {})
                    })
                }, l.prototype.updateCheckoutDetails = function() {
                    var l = this;
                    if (!l.lastCheckinData) return l.isErrorQR = !0, l.isProfileQR = !1, void(l.isCheckInQR = !1);
                    l.enableCheckout = !1, l.isCheckout = !0, l.isEmpForm = !!A.a.has(l.lastCheckinData, "isEmpForm") && l.lastCheckinData.isEmpForm, l.isCheckInQR = !0, l.isProfileQR = !1, l.isErrorQR = !1, l.locationID = l.lastCheckinData.tenant, l.locationName = l.lastCheckinData.location, l.name = l.lastCheckinData.name, l.risk = l.lastCheckinData.userStatus, l.vacStatus = l.lastCheckinData.vacStatus, l.StorageAccess.getValue("empInfo").then(function(n) {
                        l.empInfo = JSON.parse(n)
                    }), l.doCheckout()
                }, l.prototype.doCheckout = function() {
                    var l = this;
                    l.enableCheckout = !1, l.isCheckout = !0, l.updateLastCheckinData();
                    var n = new Date,
                        u = {
                            id: l.lastCheckinData.id,
                            name: l.lastCheckinData.name,
                            contact: l.lastCheckinData.contact,
                            userStatus: l.lastCheckinData.userStatus,
                            tenant: l.lastCheckinData.tenant,
                            location: l.lastCheckinData.location,
                            createdDate: l.lastCheckinData.createdDate,
                            checkoutDate: n.toJSON(),
                            vacStatus: l.lastCheckinData.vacStatus,
                            type: l.lastCheckinData.type
                        },
                        a = JSON.parse(JSON.stringify(u));
                    a.todayDate = l.datePipe.transform(n.getTime(), "MMM d, y"), a.todayTime = l.datePipe.transform(n.getTime(), "h:mm:ss a"), a.isEmpForm = l.isEmpForm, a.isCheckout = !0, l.todayDate = a.todayDate, l.todayTime = a.todayTime;
                    var e = [JSON.stringify(a), n.getTime()];
                    l.DBAccess.addRecord("INSERT INTO checkInHistory(jsonData, checkInTime)VALUES (?,?)", e).then(function(l) {}, function(l) {});
                    var t = x.a.devLink + "/clockin";
                    l.isEmpForm && (t = x.a.devLink + "/clockinOffice"), l.http.noBasePostCheckIn(t, u).then(function(l) {}, function(a) {
                        l.ReusableUtils.saveErrorLog(u, a), u.isEmpForm = l.isEmpForm;
                        var e = [JSON.stringify(u), n.getTime()];
                        l.DBAccess.addRecord("INSERT INTO checkInQue(jsonData, checkInTime)VALUES (?,?)", e).then(function(l) {}, function(l) {})
                    })
                }, l.prototype.updateLastCheckinData = function() {
                    var l = this.lastCheckinData;
                    l.hasCheckedOut = !0;
                    var n = JSON.stringify(l);
                    this.DBAccess.updateRecords("UPDATE checkInHistory set jsonData = ? WHERE checkInTime = ?", [n, this.lastCheckinTime]).then(function(l) {}, function(l) {})
                }, l
            }(),
            B = u(219),
            V = u(220),
            J = u(138),
            H = u(176),
            q = u(218),
            W = H.b,
            G = function() {
                return function() {}
            }(),
            Y = u(773),
            K = u(774),
            z = u(775),
            X = u(776),
            Z = u(777),
            $ = u(778),
            ll = u(779),
            nl = u(780),
            ul = u(781),
            al = u(139),
            el = u(103),
            tl = u(3),
            ol = u(80),
            il = u(75),
            sl = u(177),
            cl = u(85),
            rl = u(81),
            _l = u(182),
            ml = u(61),
            dl = u(106),
            fl = u(63),
            pl = u(5),
            hl = u(19),
            gl = u(14),
            kl = u(56),
            vl = u(25),
            yl = u(23),
            Il = u(48),
            bl = u(53),
            Cl = u(141),
            Dl = u(60),
            Rl = u(54),
            Sl = u(37),
            Nl = u(27),
            Tl = u(95),
            Ll = u(7),
            El = u(159),
            Ol = u(102),
            wl = u(140),
            jl = u(18),
            Pl = u(16),
            Ql = u(105),
            xl = u(38),
            Fl = u(67),
            Ml = u(36),
            Al = u(47),
            Ul = u(20),
            Bl = u(52),
            Vl = u(84),
            Jl = u(116),
            Hl = u(17),
            ql = R._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            Wl = R._1("ng-component", U, function(l) {
                return R._29(0, [(l()(), R._5(0, 0, null, null, 3, "ng-component", [], null, null, null, D, ql)), R._23(512, null, T.a, T.a, []), R._23(512, null, N.a, N.a, [O.a, cl.a, L.a, S.j, Ul.a, Q.a, O.a, E.a, pl.a, Bl.a, Vl.a, Jl.a, S.j, rl.a]), R._4(3, 49152, null, 0, U, [Q.a, pl.a, w.a, O.a, j.d, E.a, Ll.a, Pl.a, Hl.a, S.j, T.a, N.a, L.a, P.a], null, null)], null, null)
            }, {}, {}, []),
            Gl = u(30),
            Yl = u(31),
            Kl = u(221),
            zl = u(402),
            Xl = u(222),
            Zl = u(158);
        u.d(n, "ScanQRCodePageModuleNgFactory", function() {
            return $l
        });
        var $l = R._2(G, [], function(l) {
            return R._13([R._14(512, R.i, R.Y, [
                [8, [Y.a, K.a, z.a, X.a, Z.a, $.a, ll.a, nl.a, ul.a, Wl]],
                [3, R.i], R.w
            ]), R._14(4608, j.l, j.k, [R.v, [2, j.u]]), R._14(4608, Gl.u, Gl.u, []), R._14(4608, Gl.d, Gl.d, []), R._14(5120, S.f, W, [J.c]), R._14(4608, S.c, S.e, []), R._14(4608, S.h, S.d, []), R._14(4608, S.b, S.a, []), R._14(4608, S.j, S.j, [S.m, S.f, S.c, S.h, S.b, S.k, S.l]), R._14(4608, Yl.a, Yl.a, []), R._14(512, j.b, j.b, []), R._14(512, Kl.a, Kl.a, []), R._14(512, Gl.s, Gl.s, []), R._14(512, Gl.g, Gl.g, []), R._14(512, Gl.q, Gl.q, []), R._14(512, zl.a, zl.a, []), R._14(512, V.a, V.a, []), R._14(512, Xl.a, Xl.a, []), R._14(512, S.g, S.g, []), R._14(512, q.a, q.a, []), R._14(512, B.a, B.a, []), R._14(512, zl.b, zl.b, []), R._14(512, G, G, []), R._14(256, S.l, void 0, []), R._14(256, S.k, void 0, []), R._14(256, Zl.a, U, [])])
        })
    },
    1370: function(l, n) {
        var u = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (u) {
            var a = new Uint8Array(16);
            l.exports = function() {
                return u(a), a
            }
        } else {
            var e = new Array(16);
            l.exports = function() {
                for (var l, n = 0; n < 16; n++) 0 == (3 & n) && (l = 4294967296 * Math.random()), e[n] = l >>> ((3 & n) << 3) & 255;
                return e
            }
        }
    },
    1371: function(l, n) {
        for (var u = [], a = 0; a < 256; ++a) u[a] = (a + 256).toString(16).substr(1);
        l.exports = function(l, n) {
            var a = n || 0;
            return [u[l[a++]], u[l[a++]], u[l[a++]], u[l[a++]], "-", u[l[a++]], u[l[a++]], "-", u[l[a++]], u[l[a++]], "-", u[l[a++]], u[l[a++]], "-", u[l[a++]], u[l[a++]], u[l[a++]], u[l[a++]], u[l[a++]], u[l[a++]]].join("")
        }
    },
    1372: function(l, n, u) {
        var a = u(1373),
            e = u(1374),
            t = e;
        t.v1 = a, t.v4 = e, l.exports = t
    },
    1373: function(l, n, u) {
        var a, e, t = u(1370),
            o = u(1371),
            i = 0,
            s = 0;
        l.exports = function(l, n, u) {
            var c = n && u || 0,
                r = n || [],
                _ = (l = l || {}).node || a,
                m = void 0 !== l.clockseq ? l.clockseq : e;
            if (null == _ || null == m) {
                var d = t();
                null == _ && (_ = a = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == m && (m = e = 16383 & (d[6] << 8 | d[7]))
            }
            var f = void 0 !== l.msecs ? l.msecs : (new Date).getTime(),
                p = void 0 !== l.nsecs ? l.nsecs : s + 1,
                h = f - i + (p - s) / 1e4;
            if (h < 0 && void 0 === l.clockseq && (m = m + 1 & 16383), (h < 0 || f > i) && void 0 === l.nsecs && (p = 0), p >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            i = f, s = p, e = m;
            var g = (1e4 * (268435455 & (f += 122192928e5)) + p) % 4294967296;
            r[c++] = g >>> 24 & 255, r[c++] = g >>> 16 & 255, r[c++] = g >>> 8 & 255, r[c++] = 255 & g;
            var k = f / 4294967296 * 1e4 & 268435455;
            r[c++] = k >>> 8 & 255, r[c++] = 255 & k, r[c++] = k >>> 24 & 15 | 16, r[c++] = k >>> 16 & 255, r[c++] = m >>> 8 | 128, r[c++] = 255 & m;
            for (var v = 0; v < 6; ++v) r[c + v] = _[v];
            return n || o(r)
        }
    },
    1374: function(l, n, u) {
        var a = u(1370),
            e = u(1371);
        l.exports = function(l, n, u) {
            var t = n && u || 0;
            "string" == typeof l && (n = "binary" === l ? new Array(16) : null, l = null);
            var o = (l = l || {}).random || (l.rng || a)();
            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, n)
                for (var i = 0; i < 16; ++i) n[t + i] = o[i];
            return n || e(o)
        }
    }
});