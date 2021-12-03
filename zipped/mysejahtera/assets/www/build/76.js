webpackJsonp([76], {
    1249: function(n, l, t) {
        "use strict";

        function e(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 11, "ion-item", [
                ["class", "comment row item item-block"]
            ], null, null, null, q.b, q.a)), p._4(1, 1097728, null, 3, J.a, [z.a, G.a, p.k, p.F, [2, Y.a]], null, null), p._25(335544320, 2, {
                contentLabel: 0
            }), p._25(603979776, 3, {
                _buttons: 1
            }), p._25(603979776, 4, {
                _icons: 1
            }), p._4(5, 16384, null, 0, K.a, [], null, null), (n()(), p._27(-1, 2, ["\n            "])), (n()(), p._5(7, 0, null, 2, 3, "button", [
                ["color", "btn-transparent"],
                ["full", ""],
                ["ion-button", ""],
                ["solid", ""]
            ], null, [
                [null, "click"]
            ], function(n, l, t) {
                var e = !0;
                if ("click" === l) {
                    e = !1 !== n.component.doInfinite() && e
                }
                return e
            }, Q.b, Q.a)), p._4(8, 1097728, [
                [3, 4]
            ], 0, X.a, [
                [8, ""], G.a, p.k, p.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"],
                full: [2, "full"]
            }, null), (n()(), p._27(9, 0, ["", ""])), p._20(131072, b.i, [b.j, p.g]), (n()(), p._27(-1, 2, ["\n        "]))], function(n, l) {
                n(l, 8, 0, "btn-transparent", "", "")
            }, function(n, l) {
                n(l, 9, 0, p._28(l, 9, 0, p._17(l, 10).transform("viewPreviousComments")))
            })
        }

        function i(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 1, "img", [
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
                    e = !1 !== p._17(n, 1).onLoad() && e
                }
                if ("error" === l) {
                    e = !1 !== p._17(n, 1).onError() && e
                }
                return e
            }, null, null)), p._4(1, 540672, null, 0, Z.a, [nn.a, p.k, ln.a], {
                cache: [0, "cache"],
                employeeId: [1, "employeeId"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.parent.context.$implicit.commentedBy.imageUrl, l.parent.context.$implicit.commentedBy.id)
            }, function(n, l) {
                n(l, 0, 0, "commentsImgIcon_" + l.parent.context.index)
            })
        }

        function a(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (n()(), p._27(1, null, ["", ""]))], null, function(n, l) {
                var t = l.component;
                n(l, 0, 0, "commentIonIcon_" + t.threadId);
                n(l, 1, 0, t.UserUtils.getInitials(l.parent.context.$implicit.commentedBy.displayName))
            })
        }

        function u(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 2, "ion-icon", [
                ["class", "m-0 align-items-start"],
                ["color", "icon-light"],
                ["item-end", ""],
                ["name", "md-trash"],
                ["role", "img"]
            ], [
                [8, "disabled", 0],
                [8, "id", 0],
                [2, "hide", null]
            ], [
                [null, "click"]
            ], function(n, l, t) {
                var e = !0,
                    i = n.component;
                if ("click" === l) {
                    e = !1 !== i.deleteComment(n.parent.context.$implicit.id, i.threadId) && e
                }
                return e
            }, null, null)), p._4(1, 147456, [
                [7, 4]
            ], 0, tn.a, [G.a, p.k, p.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (n()(), p._27(-1, null, ["\n            "]))], function(n, l) {
                n(l, 1, 0, "icon-light", "md-trash")
            }, function(n, l) {
                n(l, 0, 0, l.component.isDisabled[l.parent.context.$implicit.id], "deleteCommentButton", p._17(l, 1)._hidden)
            })
        }

        function o(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 26, "ion-item", [
                ["align-items-start", ""],
                ["class", "comment row item item-block"]
            ], null, null, null, q.b, q.a)), p._4(1, 1097728, null, 3, J.a, [z.a, G.a, p.k, p.F, [2, Y.a]], null, null), p._25(335544320, 5, {
                contentLabel: 0
            }), p._25(603979776, 6, {
                _buttons: 1
            }), p._25(603979776, 7, {
                _icons: 1
            }), p._4(5, 16384, null, 0, K.a, [], null, null), (n()(), p._27(-1, 2, ["\n            "])), (n()(), p._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), p._4(8, 16384, null, 0, en.a, [], null, null), (n()(), p._27(-1, null, ["\n                "])), (n()(), p._0(16777216, null, null, 1, null, i)), p._4(11, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, null, ["\n                "])), (n()(), p._0(16777216, null, null, 1, null, a)), p._4(14, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, null, ["\n            "])), (n()(), p._27(-1, 2, ["\n            "])), (n()(), p._5(17, 0, null, 2, 1, "p", [
                ["class", "bold"]
            ], [
                [8, "id", 0]
            ], null, null, null, null)), (n()(), p._27(18, null, ["", ""])), (n()(), p._27(-1, 2, ["\n            "])), (n()(), p._5(20, 0, null, 2, 0, "p", [
                ["text-wrap", ""]
            ], [
                [8, "id", 0],
                [8, "innerHTML", 1]
            ], null, null, null, null)), (n()(), p._27(-1, 2, ["\n            "])), (n()(), p._5(22, 0, null, 2, 0, "small", [], [
                [8, "id", 0],
                [8, "innerHTML", 1]
            ], null, null, null, null)), (n()(), p._27(-1, 2, ["\n            "])), (n()(), p._0(16777216, null, 4, 1, null, u)), p._4(25, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, 2, ["\n        "]))], function(n, l) {
                n(l, 11, 0, l.context.$implicit.commentedBy.imageUrl);
                n(l, 14, 0, !l.context.$implicit.commentedBy.imageUrl);
                n(l, 25, 0, l.context.$implicit.canDelete)
            }, function(n, l) {
                var t = l.component;
                n(l, 17, 0, "commentsEmpName_" + l.context.index);
                n(l, 18, 0, l.context.$implicit.commentedBy.displayName);
                n(l, 20, 0, "commentsMsg_" + l.context.index, t.htmlEntitiesDecode(l.context.$implicit.comment));
                n(l, 22, 0, "commentsMsgDate_" + l.context.index, l.context.$implicit.commentedOn)
            })
        }

        function s(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 1, "img", [
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
                    e = !1 !== p._17(n, 1).onLoad() && e
                }
                if ("error" === l) {
                    e = !1 !== p._17(n, 1).onError() && e
                }
                return e
            }, null, null)), p._4(1, 540672, null, 0, Z.a, [nn.a, p.k, ln.a], {
                cache: [0, "cache"],
                employeeId: [1, "employeeId"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.parent.context.$implicit.imageUrl, l.parent.context.$implicit.employeeId)
            }, function(n, l) {
                n(l, 0, 0, "commentsTagImgIcon_" + l.parent.context.index)
            })
        }

        function r(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (n()(), p._27(1, null, ["", ""]))], null, function(n, l) {
                var t = l.component;
                n(l, 0, 0, "commentIonIcon_" + t.threadId);
                n(l, 1, 0, t.UserUtils.getInitials(l.parent.context.$implicit.displayName))
            })
        }

        function c(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 19, "ion-item", [
                ["class", "item item-block"]
            ], null, [
                [null, "tap"]
            ], function(n, l, t) {
                var e = !0;
                if ("tap" === l) {
                    e = !1 !== n.component.selectEmp(n.context.$implicit) && e
                }
                return e
            }, q.b, q.a)), p._4(1, 1097728, null, 3, J.a, [z.a, G.a, p.k, p.F, [2, Y.a]], null, null), p._25(335544320, 8, {
                contentLabel: 0
            }), p._25(603979776, 9, {
                _buttons: 1
            }), p._25(603979776, 10, {
                _icons: 1
            }), p._4(5, 16384, null, 0, K.a, [], null, null), (n()(), p._27(-1, 2, ["\n                        "])), (n()(), p._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), p._4(8, 16384, null, 0, en.a, [], null, null), (n()(), p._27(-1, null, ["\n                            "])), (n()(), p._0(16777216, null, null, 1, null, s)), p._4(11, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, null, ["\n                            "])), (n()(), p._0(16777216, null, null, 1, null, r)), p._4(14, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, null, ["\n                        "])), (n()(), p._27(-1, 2, ["\n                        "])), (n()(), p._5(17, 0, null, 2, 1, "p", [], [
                [8, "id", 0]
            ], null, null, null, null)), (n()(), p._27(18, null, ["", ""])), (n()(), p._27(-1, 2, ["\n                    "]))], function(n, l) {
                n(l, 11, 0, l.context.$implicit.imageUrl);
                n(l, 14, 0, !l.context.$implicit.imageUrl)
            }, function(n, l) {
                n(l, 17, 0, "commentsTagEmpName_" + l.context.index);
                n(l, 18, 0, l.context.$implicit.displayName)
            })
        }

        function m(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 1, "img", [
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
                    e = !1 !== p._17(n, 1).onLoad() && e
                }
                if ("error" === l) {
                    e = !1 !== p._17(n, 1).onError() && e
                }
                return e
            }, null, null)), p._4(1, 540672, null, 0, Z.a, [nn.a, p.k, ln.a], {
                cache: [0, "cache"],
                employeeId: [1, "employeeId"]
            }, null)], function(n, l) {
                var t = l.component;
                n(l, 1, 0, t.emp.imageUrl, t.emp.employeeId)
            }, function(n, l) {
                n(l, 0, 0, "commentsTagImgIcon_" + l.component.tagIndex)
            })
        }

        function d(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (n()(), p._27(1, null, ["", ""]))], null, function(n, l) {
                var t = l.component;
                n(l, 0, 0, "commentIonIcon_" + t.threadId);
                n(l, 1, 0, t.UserUtils.getInitials(t.emp.displayName))
            })
        }

        function _(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 2, "ion-icon", [
                ["class", "m-0 align-items-end"],
                ["color", "icon-light"],
                ["item-end", ""],
                ["name", "md-send"],
                ["role", "img"]
            ], [
                [8, "id", 0],
                [2, "hide", null]
            ], null, null, null, null)), p._4(1, 147456, null, 0, tn.a, [G.a, p.k, p.F], {
                color: [0, "color"],
                name: [1, "name"]
            }, null), (n()(), p._27(-1, null, ["\n            "]))], function(n, l) {
                n(l, 1, 0, "icon-light", "md-send")
            }, function(n, l) {
                n(l, 0, 0, "commentsSendIcon", p._17(l, 1)._hidden)
            })
        }

        function g(n) {
            return p._29(0, [(n()(), p._5(0, 0, null, null, 2, "ion-icon", [
                ["class", "m-0 align-items-end text-blue"],
                ["item-end", ""],
                ["name", "md-send"],
                ["role", "img"]
            ], [
                [8, "id", 0],
                [2, "hide", null]
            ], null, null, null, null)), p._4(1, 147456, null, 0, tn.a, [G.a, p.k, p.F], {
                name: [0, "name"]
            }, null), (n()(), p._27(-1, null, ["\n            "]))], function(n, l) {
                n(l, 1, 0, "md-send")
            }, function(n, l) {
                n(l, 0, 0, "commentsSendIcon", p._17(l, 1)._hidden)
            })
        }

        function h(n) {
            return p._29(0, [p._25(402653184, 1, {
                content: 0
            }), (n()(), p._5(1, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), p._4(2, 16384, null, 0, un.a, [G.a, p.k, p.F, [2, on.a]], null, null), (n()(), p._27(-1, null, ["\n    "])), (n()(), p._5(4, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, sn.b, sn.a)), p._4(5, 49152, null, 0, rn.a, [cn.a, [2, on.a],
                [2, mn.a], G.a, p.k, p.F
            ], {
                color: [0, "color"]
            }, null), (n()(), p._27(-1, 3, ["\n        "])), (n()(), p._5(7, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, dn.b, dn.a)), p._4(8, 49152, null, 0, _n.a, [G.a, p.k, p.F, [2, gn.a],
                [2, rn.a]
            ], null, null), (n()(), p._27(9, 0, ["", ""])), p._20(131072, b.i, [b.j, p.g]), (n()(), p._27(-1, 3, ["\n    "])), (n()(), p._27(-1, null, ["\n"])), (n()(), p._27(-1, null, ["\n\n"])), (n()(), p._5(14, 0, null, null, 12, "ion-content", [
                ["class", "bg-white"]
            ], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, hn.b, hn.a)), p._4(15, 4374528, [
                [1, 4]
            ], 0, pn.a, [G.a, fn.a, bn.a, p.k, p.F, cn.a, yn.a, p.y, [2, on.a],
                [2, mn.a]
            ], null, null), (n()(), p._27(-1, 1, ["\n    "])), (n()(), p._5(17, 0, null, 1, 8, "ion-list", [
                ["no-lines", ""]
            ], null, null, null, null, null)), p._4(18, 16384, null, 0, vn.a, [G.a, p.k, p.F, fn.a, Cn.l, bn.a], null, null), (n()(), p._27(-1, null, ["\n        "])), (n()(), p._0(16777216, null, null, 1, null, e)), p._4(21, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, null, ["\n        "])), (n()(), p._0(16777216, null, null, 1, null, o)), p._4(24, 802816, null, 0, an.i, [p.O, p.L, p.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), p._27(-1, null, ["\n    "])), (n()(), p._27(-1, 1, ["\n"])), (n()(), p._27(-1, null, ["\n\n"])), (n()(), p._5(28, 0, null, null, 60, "ion-footer", [], null, null, null, null, null)), p._4(29, 16384, null, 0, In.a, [G.a, p.k, p.F, [2, on.a]], null, null), (n()(), p._27(-1, null, ["\n    "])), (n()(), p._5(31, 0, null, null, 22, "ion-card", [
                ["class", "m-0"]
            ], null, null, null, null, null)), p._4(32, 16384, null, 0, kn.a, [G.a, p.k, p.F], null, null), (n()(), p._27(-1, null, ["\n        "])), (n()(), p._5(34, 0, null, null, 18, "div", [
                ["class", "tagUserSection"]
            ], null, null, null, null, null)), p._4(35, 278528, null, 0, an.h, [p.t, p.u, p.k, p.G], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), p._27(-1, null, ["\n            "])), (n()(), p._5(37, 0, null, null, 3, "ion-card-header", [], null, null, null, null, null)), p._4(38, 16384, null, 0, Ln.a, [G.a, p.k, p.F], null, null), (n()(), p._27(39, null, ["\n                ", "\n            "])), p._20(131072, b.i, [b.j, p.g]), (n()(), p._27(-1, null, ["\n            "])), (n()(), p._5(42, 0, null, null, 9, "ion-card-content", [], null, null, null, null, null)), p._4(43, 16384, null, 0, Un.a, [G.a, p.k, p.F], null, null), (n()(), p._27(-1, null, ["\n                "])), (n()(), p._5(45, 0, null, null, 5, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), p._4(46, 16384, null, 0, vn.a, [G.a, p.k, p.F, fn.a, Cn.l, bn.a], null, null), (n()(), p._27(-1, null, ["\n                    "])), (n()(), p._0(16777216, null, null, 1, null, c)), p._4(49, 802816, null, 0, an.i, [p.O, p.L, p.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), p._27(-1, null, ["\n                "])), (n()(), p._27(-1, null, ["\n            "])), (n()(), p._27(-1, null, ["\n        "])), (n()(), p._27(-1, null, ["\n    "])), (n()(), p._27(-1, null, ["\n    "])), (n()(), p._5(55, 0, null, null, 32, "ion-item", [
                ["align-items-start", ""],
                ["class", "comment box row item item-block"]
            ], null, null, null, q.b, q.a)), p._4(56, 1097728, null, 3, J.a, [z.a, G.a, p.k, p.F, [2, Y.a]], null, null), p._25(335544320, 11, {
                contentLabel: 0
            }), p._25(603979776, 12, {
                _buttons: 1
            }), p._25(603979776, 13, {
                _icons: 1
            }), p._4(60, 16384, null, 0, K.a, [], null, null), (n()(), p._27(-1, 2, ["\n        "])), (n()(), p._5(62, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), p._4(63, 16384, null, 0, en.a, [], null, null), (n()(), p._27(-1, null, ["\n            "])), (n()(), p._0(16777216, null, null, 1, null, m)), p._4(66, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, null, ["\n            "])), (n()(), p._0(16777216, null, null, 1, null, d)), p._4(69, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, null, ["\n        "])), (n()(), p._27(-1, 2, ["\n        "])), (n()(), p._5(72, 0, null, 3, 4, "ion-textarea", [
                ["autosize", ""],
                ["name", "Insert_Comment"],
                ["type", "text"]
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
                [null, "keyup"],
                [null, "ngModelChange"]
            ], function(n, l, t) {
                var e = !0,
                    i = n.component;
                if ("keyup" === l) {
                    e = !1 !== i.search(i.newComment, t) && e
                }
                if ("ngModelChange" === l) {
                    e = !1 !== (i.newComment = t) && e
                }
                if ("ngModelChange" === l) {
                    e = !1 !== i.checkForCommentField() && e
                }
                return e
            }, Tn.b, Tn.a)), p._4(73, 671744, null, 0, wn.o, [
                [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), p._23(2048, null, wn.k, null, [wn.o]), p._4(75, 16384, null, 0, wn.l, [wn.k], null, null), p._4(76, 5423104, null, 0, xn.a, [G.a, fn.a, z.a, cn.a, p.k, p.F, [2, pn.a],
                [2, J.a],
                [2, wn.k], bn.a
            ], {
                type: [0, "type"],
                placeholder: [1, "placeholder"]
            }, null), (n()(), p._27(-1, 2, ["\n        "])), (n()(), p._5(78, 0, null, 4, 8, "button", [
                ["class", "p-0 m-0"],
                ["clear", ""],
                ["ion-button", ""],
                ["item-end", ""],
                ["name", "Submit_Comment"]
            ], [
                [8, "id", 0],
                [8, "disabled", 0]
            ], [
                [null, "click"]
            ], function(n, l, t) {
                var e = !0,
                    i = n.component;
                if ("click" === l) {
                    e = !1 !== i.validateNewComment(i.newComment) && e
                }
                return e
            }, Q.b, Q.a)), p._4(79, 1097728, [
                [12, 4]
            ], 0, X.a, [
                [8, ""], G.a, p.k, p.F
            ], {
                clear: [0, "clear"]
            }, null), (n()(), p._27(-1, 0, ["\n            "])), (n()(), p._0(16777216, null, 0, 1, null, _)), p._4(82, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, 0, ["\n            "])), (n()(), p._0(16777216, null, 0, 1, null, g)), p._4(85, 16384, null, 0, an.j, [p.O, p.L], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), p._27(-1, 0, ["\n        "])), (n()(), p._27(-1, 2, ["\n    "])), (n()(), p._27(-1, null, ["\n"]))], function(n, l) {
                var t = l.component;
                n(l, 5, 0, "theme");
                n(l, 21, 0, t.enableScroll);
                n(l, 24, 0, t.comments.dataList);
                n(l, 35, 0, "tagUserSection", 1 == t.showTaggingList ? "slideInUp" : "slideInDown");
                n(l, 49, 0, t.employeesToTag);
                n(l, 66, 0, t.emp.imageUrl);
                n(l, 69, 0, !t.emp.imageUrl);
                n(l, 73, 0, "Insert_Comment", t.newComment);
                n(l, 76, 0, "text", t.placeHolder);
                n(l, 79, 0, "");
                n(l, 82, 0, !t.commentExist);
                n(l, 85, 0, t.commentExist)
            }, function(n, l) {
                var t = l.component;
                n(l, 4, 0, p._17(l, 5)._hidden, p._17(l, 5)._sbPadding);
                n(l, 7, 0, "commentsTitle");
                n(l, 9, 0, p._28(l, 9, 0, p._17(l, 10).transform("comments")));
                n(l, 14, 0, p._17(l, 15).statusbarPadding, p._17(l, 15)._hasRefresher);
                n(l, 39, 0, p._28(l, 39, 0, p._17(l, 40).transform("tagUsers")));
                n(l, 72, 0, "commentsSearch", p._17(l, 75).ngClassUntouched, p._17(l, 75).ngClassTouched, p._17(l, 75).ngClassPristine, p._17(l, 75).ngClassDirty, p._17(l, 75).ngClassValid, p._17(l, 75).ngClassInvalid, p._17(l, 75).ngClassPending);
                n(l, 78, 0, "commentsSendBtn", p._8(1, "", t.disabledButton, ""))
            })
        }
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var p = t(1),
            f = (t(0), t(6), t(142)),
            b = t(9),
            y = t(13),
            v = t(12),
            C = t(11),
            I = t(49),
            k = t.n(I),
            L = t(431),
            U = t(21),
            T = t(20),
            w = null,
            x = function() {
                function n(n, l, t, e, i, a, u, o, s, r, c, m, d, _) {
                    this.loadingCtrl = n, this.alertCtrl = l, this.keyboard = t, this.nav = e, this.navParams = i, this.translate = a, this.DataAccess = u, this.UserUtils = o, this.StorageAccess = s, this.toastCtrl = r, this.commentsProvider = c, this.network = m, this.ReusableUtils = d, this.events = _, this.showTaggingList = !1, this.employeesToTag = [], this.originalEmployeesToTag = [], this.taggedUsersList = [], this.splitString = [], this.tagListHeight = [], this.errorCodeEnabled = !1, this.pageNum = 0, this.totalCount = 0, this.isDisabled = {}, this.enableScroll = !1, this.commentExist = !1, this.deleteComment = k.a.throttle(function(n, l) {
                        if (this.network.checkInternetConnection()) {
                            var t = this;
                            t.isDisabled[n] = !0;
                            var e = "/v1/hub/scd/delete/commentId/" + n + "/threadId/" + l;
                            t.network.checkInternetConnection() && t.DataAccess.delete(e, {}).subscribe(function(n) {
                                10 == t.comments.dataList.length && 0 != t.pageNum && (t.pageNum = t.pageNum - 1), t.comments.dataList.length > 10 && (t.pageNum = 0), t.StorageAccess.setValue("isDirty", !0), t.getAllComments(null), t.events.publish("refreshData"), t.ReusableUtils.showToast("commentRemovedSuccessfully", {})
                            }, function(l) {
                                t.isDisabled[n] = !1
                            })
                        }
                    }, 2e3, {
                        trailing: !1
                    });
                    var g = this;
                    if (w = g.ReusableUtils.presentLoadingCustom(), g.placeHolder = g.UserUtils.getTranslatedString("writeComments", {}), g.comments = {
                            dataList: [],
                            totalCount: 0
                        }, g.emp = {
                            imageUrl: "",
                            displayName: ""
                        }, g.disabledButton = null, g.navParams.data) {
                        w.present();
                        var h = g.navParams.get("threadId");
                        g.threadId = h, g.getAllComments(null), g.getUsersWhoCanBeTagged(h), w.dismiss()
                    }
                    g.StorageAccess.getValue("empInfo").then(function(n) {
                        g.emp = JSON.parse(n)
                    })
                }
                return n.prototype.scrollToBottom = function() {
                    this.content.scrollTo(0, this.content.contentHeight, 0)
                }, n.prototype.checkForCommentField = function() {
                    this.commentExist = 0 != this.newComment.length
                }, n.prototype.getFormattedDate = function(n) {
                    return n ? new Date(n).toDateString().split(" ").slice(1).join(" ") : ""
                }, n.prototype.getUsersWhoCanBeTagged = function(n) {
                    for (var l = [], t = 1; t < arguments.length; t++) l[t - 1] = arguments[t];
                    try {
                        var e = this;
                        e.commentsProvider.getUsers(l, n).subscribe(function(n) {
                            n && (e.employeesToTag = n, k.a.isUndefined(l) || k.a.isNull(l) || k.a.isEmpty(l) || e.showListAndSetHeight())
                        }, function(n) {
                            e.ReusableUtils.showHttpError(n)
                        })
                    } catch (n) {}
                }, n.prototype.bindSearchEmployees = function(n) {
                    try {
                        this.employeesToTag = [], this.getUsersWhoCanBeTagged(this.threadId, n)
                    } catch (n) {}
                }, n.prototype.showListAndSetHeight = function() {
                    try {
                        this.tagListHeight = 1 == this.employeesToTag.length ? 52 : 2 == this.employeesToTag.length ? 104 : 3 == this.employeesToTag.length ? 156 : 208, this.showTaggingList = !0
                    } catch (n) {}
                }, n.prototype.search = function(n, l) {
                    try {
                        if ("@" === n.slice(-1) && 1 === n.length) this.bindSearchEmployees("");
                        else if (n.length >= 2) {
                            var t = n.split(" ").pop();
                            if ("@" === t.substring(0, 1)) {
                                var e = t.substring(1, t.length);
                                this.bindSearchEmployees(e)
                            } else this.showTaggingList = !1
                        } else this.showTaggingList = (n.slice(-1), !1)
                    } catch (n) {}
                }, n.prototype.selectEmp = function(n) {
                    try {
                        var l = this.newComment.split(" ").pop();
                        this.newComment = this.newComment.substring(0, this.newComment.length - l.length) + "@" + n.displayName + " ", this.taggedUsersList.push(n)
                    } catch (n) {}
                }, n.prototype.closeTagPopover = function() {
                    var n = this;
                    try {
                        setTimeout(function() {
                            n.showTaggingList = !1
                        }, 1e3)
                    } catch (n) {}
                }, n.prototype.getAllComments = function(n) {
                    var l = this;
                    l.commentExist = !1, l.commentsProvider.getAllComments(l.threadId, l.pageNum).subscribe(function(t) {
                        t && (n ? t.dataList.length > 0 && (t.dataList.length >= 10 && (l.pageNum = l.pageNum + 1), t.dataList.reverse(), l.comments.dataList = k.a.union(t.dataList, l.comments.dataList), l.totalCount = l.comments.dataList.length, l.remainingCount = t.totalCount - l.comments.dataList.length, l.remainingCount > 0 ? l.enableScroll = !0 : 0 == l.remainingCount && (l.enableScroll = !1)) : t.dataList.length > 0 ? (l.comments = t, l.comments.dataList.reverse(), setTimeout(function() {
                            l.content.scrollToBottom(300)
                        }, 1e3), t.dataList.length >= 10 && (l.pageNum = l.pageNum + 1), l.totalCount = l.comments.dataList.length, l.remainingCount = l.comments.totalCount - l.comments.dataList.length, l.remainingCount > 0 ? l.enableScroll = !0 : 0 == l.remainingCount && (l.enableScroll = !1)) : l.comments = t)
                    }, function(n) {
                        l.ReusableUtils.showHttpError(n)
                    })
                }, n.prototype.doInfinite = function() {
                    this.getAllComments(!0)
                }, n.prototype.htmlEntitiesDecode = function(n) {
                    try {
                        return this.UserUtils.htmlEntitiesDecode(n)
                    } catch (n) {}
                }, n.prototype.addComment = function(n, l) {
                    var t = this;
                    t.UserUtils.getTranslatedString("enterDetails", {});
                    if (t.keyboard.hide(), (w = t.ReusableUtils.presentLoadingCustom()).present(), n && !k.a.isUndefined(n) && "" != n.trim()) {
                        t.disabledButton = !0;
                        var e = this.UserUtils.getTranslatedString("justnow", {}),
                            i = {
                                comment: n.trim(),
                                commentedBy: {
                                    displayName: t.emp.displayName,
                                    imageUrl: t.emp.imageUrl,
                                    id: t.emp.employeeId
                                },
                                commentedOn: e,
                                canDelete: !0
                            };
                        t.commentsProvider.postComment(t.threadId, n, l).subscribe(function(n) {
                            n ? (t.pageNum = 0, t.remainingCount = 0, t.comments.dataList.push(i), t.getAllComments(null), t.events.publish("refreshData"), t.StorageAccess.setValue("isDirty", !0), w.dismiss(), t.newComment = "", t.disabledButton = null, setTimeout(function() {
                                t.content.scrollToBottom(300)
                            }, 1e3)) : (w.dismiss(), setTimeout(function() {
                                t.ReusableUtils.showToastWithOk("enterDetails")
                            }, 300))
                        }, function(n) {
                            t.disabledButton = null, w.dismiss(), setTimeout(function() {
                                t.ReusableUtils.showToastWithOk("enterDetails")
                            }, 300)
                        })
                    } else t.disabledButton = null, w.dismiss(), this.ReusableUtils.showToastWithOk("enterDetails")
                }, n.prototype.validateNewComment = function(n) {
                    try {
                        if (void 0 !== n && "undefined" !== n) {
                            var l = "",
                                t = n.split("@");
                            this.splitString = [];
                            for (var e = 0, i = t; e < i.length; e++) {
                                var a = i[e];
                                "" != a && " " != a && this.splitString.push(a)
                            }
                            var u = [];
                            if (1 == this.splitString.length) {
                                for (var o = !0, s = 0, r = this.splitString; s < r.length; s++) {
                                    var c = r[s];
                                    l += c += " ";
                                    for (var m = 0, d = this.taggedUsersList; m < d.length; m++) {
                                        if (c.includes((f = d[m]).displayName + " ")) {
                                            o = !1;
                                            l = l.replace(f.displayName + " ", " <a>" + f.displayName + "</a> "), u.push(f.id)
                                        }
                                    }
                                }
                                1 == o && (l = n)
                            } else {
                                l = "";
                                for (var _ in this.splitString) {
                                    o = !0;
                                    for (var g = c = this.splitString[_], h = 0, p = this.taggedUsersList; h < p.length; h++) {
                                        var f;
                                        if (c.includes((f = p[h]).displayName + " ")) {
                                            o = !1;
                                            g = g.replace(f.displayName + " ", " <a>" + f.displayName + "</a> "), u.push(f.id)
                                        }
                                    }
                                    0 == parseInt(_) && 1 == o && "@" == n[0] && (g = "@" + g), parseInt(_) >= 1 && 1 == o && (g = "@" + g), l += g
                                }
                            }
                            this.taggedUsersList = [], this.addComment(l, u)
                        } else this.ReusableUtils.showToastWithOk("enterDetails")
                    } catch (n) {}
                }, n
            }(),
            S = t(219),
            N = t(220),
            F = t(138),
            D = t(176),
            O = t(218),
            E = D.b,
            B = function() {
                return function() {}
            }(),
            j = t(773),
            $ = t(774),
            A = t(775),
            P = t(776),
            R = t(777),
            H = t(778),
            M = t(779),
            W = t(780),
            V = t(781),
            q = t(56),
            J = t(25),
            z = t(23),
            G = t(3),
            Y = t(48),
            K = t(53),
            Q = t(37),
            X = t(27),
            Z = t(177),
            nn = t(85),
            ln = t(81),
            tn = t(38),
            en = t(141),
            an = t(10),
            un = t(102),
            on = t(7),
            sn = t(140),
            rn = t(75),
            cn = t(18),
            mn = t(16),
            dn = t(139),
            _n = t(103),
            gn = t(80),
            hn = t(67),
            pn = t(36),
            fn = t(5),
            bn = t(14),
            yn = t(47),
            vn = t(63),
            Cn = t(19),
            In = t(95),
            kn = t(60),
            Ln = t(161),
            Un = t(54),
            Tn = t(178),
            wn = t(30),
            xn = t(124),
            Sn = t(68),
            Nn = t(84),
            Fn = t(116),
            Dn = t(17),
            On = t(104),
            En = t(160),
            Bn = p._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            jn = p._1("ng-component", x, function(n) {
                return p._29(0, [(n()(), p._5(0, 0, null, null, 2, "ng-component", [], null, null, null, h, Bn)), p._23(512, null, L.a, L.a, [v.a, C.a, T.a, Sn.a, y.a]), p._4(2, 49152, null, 0, x, [Nn.a, Fn.a, f.a, mn.a, Dn.a, b.j, v.a, C.a, y.a, On.a, L.a, T.a, U.a, En.a], null, null)], null, null)
            }, {}, {}, []),
            $n = t(31),
            An = t(221),
            Pn = t(402),
            Rn = t(222),
            Hn = t(158);
        t.d(l, "CommentsModuleNgFactory", function() {
            return Mn
        });
        var Mn = p._2(B, [], function(n) {
            return p._13([p._14(512, p.i, p.Y, [
                [8, [j.a, $.a, A.a, P.a, R.a, H.a, M.a, W.a, V.a, jn]],
                [3, p.i], p.w
            ]), p._14(4608, an.l, an.k, [p.v, [2, an.u]]), p._14(4608, wn.u, wn.u, []), p._14(4608, wn.d, wn.d, []), p._14(5120, b.f, E, [F.c]), p._14(4608, b.c, b.e, []), p._14(4608, b.h, b.d, []), p._14(4608, b.b, b.a, []), p._14(4608, b.j, b.j, [b.m, b.f, b.c, b.h, b.b, b.k, b.l]), p._14(4608, $n.a, $n.a, []), p._14(512, an.b, an.b, []), p._14(512, An.a, An.a, []), p._14(512, wn.s, wn.s, []), p._14(512, wn.g, wn.g, []), p._14(512, wn.q, wn.q, []), p._14(512, Pn.a, Pn.a, []), p._14(512, N.a, N.a, []), p._14(512, Rn.a, Rn.a, []), p._14(512, b.g, b.g, []), p._14(512, O.a, O.a, []), p._14(512, S.a, S.a, []), p._14(512, Pn.b, Pn.b, []), p._14(512, B, B, []), p._14(256, b.l, void 0, []), p._14(256, b.k, void 0, []), p._14(256, Hn.a, x, [])])
        })
    }
});