webpackJsonp([3], {
    1294: function(e, t, n) {
        "use strict";

        function r(e) {
            return s._29(0, [(e()(), s._5(0, 0, null, null, 1, "img", [
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"]
            ], [
                [8, "alt", 0],
                [8, "id", 0]
            ], [
                [null, "load"],
                [null, "error"]
            ], function(e, t, n) {
                var r = !0;
                if ("load" === t) {
                    r = !1 !== s._17(e, 1).onLoad() && r
                }
                if ("error" === t) {
                    r = !1 !== s._17(e, 1).onError() && r
                }
                return r
            }, null, null)), s._4(1, 540672, null, 0, M.a, [U.a, s.k, k.a], {
                cache: [0, "cache"],
                employeeId: [1, "employeeId"]
            }, null)], function(e, t) {
                e(t, 1, 0, t.parent.context.$implicit.imageUrl, t.parent.context.$implicit.employeeId)
            }, function(e, t) {
                e(t, 0, 0, t.component.UserUtils.getInitials(t.parent.context.$implicit.displayName), "teamlistImg_" + t.parent.context.$implicit.employeeId)
            })
        }

        function i(e) {
            return s._29(0, [(e()(), s._5(0, 0, null, null, 1, "span", [], [
                [8, "id", 0]
            ], null, null, null, null)), (e()(), s._27(1, null, ["", ""]))], null, function(e, t) {
                var n = t.component;
                e(t, 0, 0, "teamlistIonIcon_" + t.parent.context.$implicit.employeeId);
                e(t, 1, 0, n.UserUtils.getInitials(t.parent.context.$implicit.displayName))
            })
        }

        function o(e) {
            return s._29(0, [(e()(), s._5(0, 0, null, null, 18, "ion-item", [
                ["class", "item item-block"]
            ], null, [
                [null, "click"]
            ], function(e, t, n) {
                var r = !0;
                if ("click" === t) {
                    r = !1 !== e.component.itemTapped(n, e.context.$implicit) && r
                }
                return r
            }, x.b, x.a)), s._4(1, 1097728, null, 3, O.a, [H.a, V.a, s.k, s.F, [2, z.a]], null, null), s._25(335544320, 1, {
                contentLabel: 0
            }), s._25(603979776, 2, {
                _buttons: 1
            }), s._25(603979776, 3, {
                _icons: 1
            }), s._4(5, 16384, null, 0, F.a, [], null, null), (e()(), s._27(-1, 2, ["\n          "])), (e()(), s._5(7, 0, null, 0, 8, "ion-avatar", [
                ["class", "profile-pic"],
                ["item-start", ""]
            ], null, null, null, null, null)), s._4(8, 16384, null, 0, J.a, [], null, null), (e()(), s._27(-1, null, ["\n            "])), (e()(), s._0(16777216, null, null, 1, null, r)), s._4(11, 16384, null, 0, Y.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (e()(), s._27(-1, null, ["\n            "])), (e()(), s._0(16777216, null, null, 1, null, i)), s._4(14, 16384, null, 0, Y.j, [s.O, s.L], {
                ngIf: [0, "ngIf"]
            }, null), (e()(), s._27(-1, null, ["\n          "])), (e()(), s._27(-1, 2, ["\n          "])), (e()(), s._5(17, 0, null, 2, 0, "p", [
                ["text-wrap", ""]
            ], [
                [8, "innerHTML", 1],
                [8, "id", 0]
            ], null, null, null, null)), (e()(), s._27(-1, 2, ["\n        "]))], function(e, t) {
                e(t, 11, 0, t.context.$implicit.imageUrl);
                e(t, 14, 0, !t.context.$implicit.imageUrl)
            }, function(e, t) {
                e(t, 17, 0, t.context.$implicit.displayName, "teamListDisplayName_" + t.context.$implicit.employeeId)
            })
        }

        function a(e) {
            return s._29(0, [(e()(), s._5(0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), s._4(1, 16384, null, 0, K.a, [V.a, s.k, s.F, [2, Q.a]], null, null), (e()(), s._27(-1, null, ["\n  "])), (e()(), s._5(3, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, W.b, W.a)), s._4(4, 49152, null, 0, j.a, [Z.a, [2, Q.a],
                [2, $.a], V.a, s.k, s.F
            ], {
                color: [0, "color"]
            }, null), (e()(), s._27(-1, 3, ["\n    "])), (e()(), s._5(6, 0, null, 3, 3, "ion-title", [], null, null, null, q.b, q.a)), s._4(7, 49152, null, 0, G.a, [V.a, s.k, s.F, [2, X.a],
                [2, j.a]
            ], null, null), (e()(), s._27(8, 0, ["", ""])), s._20(131072, l.i, [l.j, s.g]), (e()(), s._27(-1, 3, ["\n  "])), (e()(), s._27(-1, null, ["\n"])), (e()(), s._27(-1, null, ["\n\n"])), (e()(), s._5(13, 0, null, null, 24, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, ee.b, ee.a)), s._4(14, 4374528, null, 0, te.a, [V.a, ne.a, re.a, s.k, s.F, Z.a, ie.a, s.y, [2, Q.a],
                [2, $.a]
            ], null, null), (e()(), s._27(-1, 1, ["\n  "])), (e()(), s._5(16, 0, null, 1, 20, "ion-card", [], null, null, null, null, null)), s._4(17, 16384, null, 0, oe.a, [V.a, s.k, s.F], null, null), (e()(), s._27(-1, null, ["\n    "])), (e()(), s._5(19, 0, null, null, 16, "ion-card-content", [], null, null, null, null, null)), s._4(20, 16384, null, 0, ae.a, [V.a, s.k, s.F], null, null), (e()(), s._27(-1, null, ["\n      "])), (e()(), s._5(22, 0, null, null, 5, "ion-searchbar", [
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
                [null, "ngModelChange"],
                [null, "ionInput"],
                [null, "ionCancel"]
            ], function(e, t, n) {
                var r = !0,
                    i = e.component;
                if ("ngModelChange" === t) {
                    r = !1 !== (i.myInput = n) && r
                }
                if ("ionInput" === t) {
                    r = !1 !== i.search(n) && r
                }
                if ("ionCancel" === t) {
                    r = !1 !== i.onCancel(n) && r
                }
                return r
            }, se.b, se.a)), s._4(23, 671744, null, 0, le.o, [
                [8, null],
                [8, null],
                [8, null],
                [8, null]
            ], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), s._23(2048, null, le.k, null, [le.o]), s._4(25, 16384, null, 0, le.l, [le.k], null, null), s._4(26, 1294336, null, 0, ue.a, [V.a, ne.a, s.k, s.F, [2, le.k]], {
                placeholder: [0, "placeholder"]
            }, {
                ionInput: "ionInput",
                ionCancel: "ionCancel"
            }), (e()(), s._27(-1, null, [" "])), (e()(), s._27(-1, null, ["\n      "])), (e()(), s._5(29, 0, null, null, 5, "ion-list", [
                ["class", "items-no-lines"]
            ], null, null, null, null, null)), s._4(30, 16384, null, 0, ce.a, [V.a, s.k, s.F, ne.a, he.l, re.a], null, null), (e()(), s._27(-1, null, ["\n        "])), (e()(), s._0(16777216, null, null, 1, null, o)), s._4(33, 802816, null, 0, Y.i, [s.O, s.L, s.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (e()(), s._27(-1, null, ["\n      "])), (e()(), s._27(-1, null, ["\n    "])), (e()(), s._27(-1, null, ["\n  "])), (e()(), s._27(-1, 1, ["\n"]))], function(e, t) {
                var n = t.component;
                e(t, 4, 0, "theme");
                e(t, 23, 0, n.myInput);
                e(t, 26, 0, n.placeHolder);
                e(t, 33, 0, n.employees)
            }, function(e, t) {
                e(t, 3, 0, s._17(t, 4)._hidden, s._17(t, 4)._sbPadding);
                e(t, 8, 0, s._28(t, 8, 0, s._17(t, 9).transform("team")));
                e(t, 13, 0, s._17(t, 14).statusbarPadding, s._17(t, 14)._hasRefresher);
                e(t, 22, 1, ["teamSearchBar", s._17(t, 25).ngClassUntouched, s._17(t, 25).ngClassTouched, s._17(t, 25).ngClassPristine, s._17(t, 25).ngClassDirty, s._17(t, 25).ngClassValid, s._17(t, 25).ngClassInvalid, s._17(t, 25).ngClassPending, s._17(t, 26)._animated, s._17(t, 26)._value, s._17(t, 26)._isActive, s._17(t, 26)._showCancelButton, s._17(t, 26)._shouldAlignLeft, s._17(t, 26)._isFocus])
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(1),
            l = (n(0), n(6), n(9)),
            u = n(142),
            c = n(49),
            h = n.n(c),
            f = n(12),
            d = n(13),
            g = n(11),
            p = n(1330),
            m = n(20),
            v = function() {
                function e(e, t, n, r, i, o, a, s, l) {
                    this.keyboard = e, this.network = t, this.nav = n, this.navParams = r, this.DataAccess = i, this.StorageAccess = o, this.UserUtils = a, this.translate = s, this.view = l, this.placeHolder = "", this.placeHolderSearch = "", this.myInput = "";
                    this.placeHolder = this.UserUtils.getTranslatedString("search", {}), this.navParams.data && (this.employees = JSON.parse(this.navParams.get("subordinates")), this.team = this.employees)
                }
                return e.prototype.search = function(e) {
                    var t = this.myInput;
                    this.employees = "" != t.trim() ? h.a.filter(this.team, function(e) {
                        return e.displayName.toLowerCase().indexOf(t.toLowerCase()) > -1
                    }) : this.team
                }, e.prototype.onCancel = function(e) {
                    this.keyboard.hide(), this.employees = this.team
                }, e.prototype.itemTapped = function(e, t) {
                    this.network.checkInternetConnection() && this.nav.push(p.a, {
                        employee: t
                    })
                }, e.prototype.ionViewWillLeave = function() {
                    this.keyboard.hide()
                }, e
            }(),
            y = n(219),
            b = n(220),
            w = n(138),
            C = n(176),
            S = n(218),
            _ = C.b,
            E = function() {
                return function() {}
            }(),
            I = n(773),
            P = n(774),
            T = n(775),
            A = n(776),
            B = n(777),
            R = n(778),
            D = n(779),
            N = n(780),
            L = n(781),
            M = n(177),
            U = n(85),
            k = n(81),
            x = n(56),
            O = n(25),
            H = n(23),
            V = n(3),
            z = n(48),
            F = n(53),
            J = n(141),
            Y = n(10),
            K = n(102),
            Q = n(7),
            W = n(140),
            j = n(75),
            Z = n(18),
            $ = n(16),
            q = n(139),
            G = n(103),
            X = n(80),
            ee = n(67),
            te = n(36),
            ne = n(5),
            re = n(14),
            ie = n(47),
            oe = n(60),
            ae = n(54),
            se = n(180),
            le = n(30),
            ue = n(127),
            ce = n(63),
            he = n(19),
            fe = n(17),
            de = s._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            ge = s._1("ng-component", v, function(e) {
                return s._29(0, [(e()(), s._5(0, 0, null, null, 1, "ng-component", [], null, null, null, a, de)), s._4(1, 49152, null, 0, v, [u.a, m.a, $.a, fe.a, f.a, d.a, g.a, l.j, Q.a], null, null)], null, null)
            }, {}, {}, []),
            pe = n(31),
            me = n(221),
            ve = n(402),
            ye = n(222),
            be = n(158);
        n.d(t, "TeamListModuleNgFactory", function() {
            return we
        });
        var we = s._2(E, [], function(e) {
            return s._13([s._14(512, s.i, s.Y, [
                [8, [I.a, P.a, T.a, A.a, B.a, R.a, D.a, N.a, L.a, ge]],
                [3, s.i], s.w
            ]), s._14(4608, Y.l, Y.k, [s.v, [2, Y.u]]), s._14(4608, le.u, le.u, []), s._14(4608, le.d, le.d, []), s._14(5120, l.f, _, [w.c]), s._14(4608, l.c, l.e, []), s._14(4608, l.h, l.d, []), s._14(4608, l.b, l.a, []), s._14(4608, l.j, l.j, [l.m, l.f, l.c, l.h, l.b, l.k, l.l]), s._14(4608, pe.a, pe.a, []), s._14(512, Y.b, Y.b, []), s._14(512, me.a, me.a, []), s._14(512, le.s, le.s, []), s._14(512, le.g, le.g, []), s._14(512, le.q, le.q, []), s._14(512, ve.a, ve.a, []), s._14(512, b.a, b.a, []), s._14(512, ye.a, ye.a, []), s._14(512, l.g, l.g, []), s._14(512, S.a, S.a, []), s._14(512, y.a, y.a, []), s._14(512, ve.b, ve.b, []), s._14(512, E, E, []), s._14(256, l.l, void 0, []), s._14(256, l.k, void 0, []), s._14(256, be.a, v, [])])
        })
    },
    1324: function(e, t) {
        var n, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        t.getSymbolSize = function(e) {
            if (!e) throw new Error('"version" cannot be null or undefined');
            if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
            return 4 * e + 17
        }, t.getSymbolTotalCodewords = function(e) {
            return r[e]
        }, t.getBCHDigit = function(e) {
            for (var t = 0; 0 !== e;) t++, e >>>= 1;
            return t
        }, t.setToSJISFunction = function(e) {
            if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
            n = e
        }, t.isKanjiModeEnabled = function() {
            return void 0 !== n
        }, t.toSJIS = function(e) {
            return n(e)
        }
    },
    1325: function(e, t, n) {
        var r = n(1332),
            i = n(1333);
        t.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        }, t.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        }, t.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        }, t.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        }, t.MIXED = {
            bit: -1
        }, t.getCharCountIndicator = function(e, t) {
            if (!e.ccBits) throw new Error("Invalid mode: " + e);
            if (!r.isValid(t)) throw new Error("Invalid version: " + t);
            return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
        }, t.getBestModeForData = function(e) {
            return i.testNumeric(e) ? t.NUMERIC : i.testAlphanumeric(e) ? t.ALPHANUMERIC : i.testKanji(e) ? t.KANJI : t.BYTE
        }, t.toString = function(e) {
            if (e && e.id) return e.id;
            throw new Error("Invalid mode")
        }, t.isValid = function(e) {
            return e && e.bit && e.ccBits
        }, t.from = function(e, n) {
            if (t.isValid(e)) return e;
            try {
                return function(e) {
                    if ("string" != typeof e) throw new Error("Param is not a string");
                    switch (e.toLowerCase()) {
                        case "numeric":
                            return t.NUMERIC;
                        case "alphanumeric":
                            return t.ALPHANUMERIC;
                        case "kanji":
                            return t.KANJI;
                        case "byte":
                            return t.BYTE;
                        default:
                            throw new Error("Unknown mode: " + e)
                    }
                }(e)
            } catch (e) {
                return n
            }
        }
    },
    1326: function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return "number" == typeof e ? a(e) : function(e, t, n) {
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return function(e, t, n) {
                    if (t < 0 || e.byteLength < t) throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < t + (n || 0)) throw new RangeError("'length' is out of bounds");
                    var i;
                    i = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n);
                    return i.__proto__ = r.prototype, i
                }(e, t, n);
                if ("string" == typeof e) return function(e) {
                    var t = 0 | u(e),
                        n = o(t),
                        r = n.write(e);
                    r !== t && (n = n.slice(0, r));
                    return n
                }(e);
                return function(e) {
                    if (r.isBuffer(e)) {
                        var t = 0 | i(e.length),
                            n = o(t);
                        return 0 === n.length ? n : (e.copy(n, 0, 0, t), n)
                    }
                    if (e) {
                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function(e) {
                            return e != e
                        }(e.length) ? o(0) : s(e);
                        if ("Buffer" === e.type && Array.isArray(e.data)) return s(e.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e)
            }(e, t, n)
        }

        function i(e) {
            if (e >= h) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + h.toString(16) + " bytes");
            return 0 | e
        }

        function o(e) {
            var t = new Uint8Array(e);
            return t.__proto__ = r.prototype, t
        }

        function a(e) {
            return o(e < 0 ? 0 : 0 | i(e))
        }

        function s(e) {
            for (var t = e.length < 0 ? 0 : 0 | i(e.length), n = o(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
            return n
        }

        function l(e, t) {
            t = t || 1 / 0;
            for (var n, r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                        continue
                    }
                    n = 65536 + (i - 55296 << 10 | n - 56320)
                } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function u(e) {
            if (r.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            return 0 === e.length ? 0 : l(e).length
        }
        var c = n(406),
            h = 2147483647;
        r.prototype.__proto__ = Uint8Array.prototype, r.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && r[Symbol.species] === r && Object.defineProperty(r, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        }), r.prototype.write = function(e, t, n) {
            void 0 === t ? (n = this.length, t = 0) : void 0 === n && "string" == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
            var r = this.length - t;
            if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            return function(e, t, n, r) {
                return function(e, t, n, r) {
                    for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                    return i
                }(l(t, e.length - n), e, n, r)
            }(this, e, t, n)
        }, r.prototype.slice = function(e, t) {
            var n = this.length;
            e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
            var i = this.subarray(e, t);
            return i.__proto__ = r.prototype, i
        }, r.prototype.copy = function(e, t, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var i, o = r - n;
            if (this === e && n < t && t < r)
                for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
            else if (o < 1e3)
                for (i = 0; i < o; ++i) e[i + t] = this[i + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o
        }, r.prototype.fill = function(e, t, n) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
                    var i = e.charCodeAt(0);
                    i < 256 && (e = i)
                }
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);
            var o;
            if ("number" == typeof e)
                for (o = t; o < n; ++o) this[o] = e;
            else {
                var a = r.isBuffer(e) ? e : new r(e),
                    s = a.length;
                for (o = 0; o < n - t; ++o) this[o + t] = a[o % s]
            }
            return this
        }, r.concat = function(e, t) {
            if (!c(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return o(null);
            var n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var i = a(t),
                s = 0;
            for (n = 0; n < e.length; ++n) {
                var l = e[n];
                if (!r.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
                l.copy(i, s), s += l.length
            }
            return i
        }, r.byteLength = u, r.prototype._isBuffer = !0, r.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, e.exports = r
    },
    1327: function(e, t) {
        t.L = {
            bit: 1
        }, t.M = {
            bit: 0
        }, t.Q = {
            bit: 3
        }, t.H = {
            bit: 2
        }, t.isValid = function(e) {
            return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
        }, t.from = function(e, n) {
            if (t.isValid(e)) return e;
            try {
                return function(e) {
                    if ("string" != typeof e) throw new Error("Param is not a string");
                    switch (e.toLowerCase()) {
                        case "l":
                        case "low":
                            return t.L;
                        case "m":
                        case "medium":
                            return t.M;
                        case "q":
                        case "quartile":
                            return t.Q;
                        case "h":
                        case "high":
                            return t.H;
                        default:
                            throw new Error("Unknown EC Level: " + e)
                    }
                }(e)
            } catch (e) {
                return n
            }
        }
    },
    1330: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        n(0), n(6), n(69);
        var r = n(49),
            i = n.n(r),
            o = (n(12), n(20), n(163), n(13), n(11), n(142), n(147), n(404), n(88), n(21), n(31), n(65)),
            a = (n(403), n(1339)),
            s = (n.n(a), n(123), function() {
                function e(e, t, n, r, s, l, u, c, h, f, d, g, p, m, v, y, b, w, C, S, _, E, I, P) {
                    var T = this;
                    this.sanitizer = e, this.modalCtrl = t, this.zone = n, this.keyboard = r, this.nav = s, this.navParams = l, this.StorageAccess = u, this.DataAccess = c, this.UserUtils = h, this.graphConfig = f, this.translate = d, this.ref = g, this.Alert = p, this.loadingCtrl = m, this.network = v, this.toastCtrl = y, this.connectivityService = b, this.profileProvider = w, this.commonProvider = C, this.ReusableUtils = S, this.mixPanelService = _, this.meetInProvider = E, this.hubProvider = I, this.events = P, this.showQR = null, this.vaccineQrCodes = [], this.labTest = null, this.vaccine = null, this.vaccineCertificate = null, this.isGreenBubblePass = null, this.zoneDetails = null, this.zoneKey = null, this.myAppName = o.a.appName, this.opacityVal = 1, this.scrolling = !1, this.presentEmpId = null, this.errorCodeEnabled = !1, this.showScore = !0, this.isTabPage = !0, this.isOn = !0, this.isDisabled = !1, this.userBasicInfo = "", this.designationData = "", this.team = "null", this.employee = {}, this.employee1 = "", this.widgets = [], this.scorecardWidgets = [], this.activeScorecardWidgets = [], this.competencyScorecardWidgets = [], this.otherWidgets = [], this.user = {}, this.mySubordinates = [], this.allSubordinates = [], this.hasTeam = !1, this.isMoreSubordinates = !1, this.teamScoreChartData = {}, this.myScoreChartData = {}, this.isSubordinate = null, this.showToast = !0, this.myInput = "", this.hasMyTeamScore = !1, this.hasMyScore = !1, this.pageNum = 0, this.isInfiniteProfileEnabled = !1, this.totalInfoCount = 0, this.fromMyTeam = !1, this.incrementCount = 0, this.myAngularxQrCode = null, this.riskCategory = "", this.code = "some sample string", this.image2 = null, this.image1 = null, this.duration = "", this.flag = !1, this.dependents = [], this.openMoreMenu = i.a.throttle(function() {
                        this.isTabPage && this.nav.push("SettingsPage", {
                            employee: JSON.stringify(this.user)
                        })
                    }, 3e3, {
                        trailing: !1
                    }), this.getQRCode = i.a.throttle(function() {
                        var e, t, n, r = T,
                            i = a;
                        if (r.navParams.get("employee") ? (e = r.navParams.get("employee").employeeId, t = {
                                data: {
                                    passportNumber: r.user.passportNumber,
                                    dateOfBirth: r.user.dateOfBirth,
                                    country: r.user.country
                                },
                                IcNumber: r.user.licenceNumber,
                                id: r.user.employeeId,
                                flag: !0,
                                editableFields: r.user.editableFields
                            }, n = "editDependentPage") : (n = "AboutYouPage", t = {
                                employee: JSON.stringify(r.user)
                            }), r.user.dateOfBirth) {
                            var o = r.loadingCtrl.create();
                            o.present(), r.profileProvider.getQRCardUrl(e).subscribe(function(e) {
                                o.dismiss();
                                var t = e.data;
                                if (e.success) {
                                    for (var n in t) i.toDataURL(t[n], {
                                        errorCorrectionLevel: "L"
                                    }, function(e, t) {
                                        r.vaccineQrCodes.push(t)
                                    });
                                    r.showQR = 1
                                } else {
                                    r.Alert.create({
                                        message: e.errorMessage,
                                        buttons: ["Ok"]
                                    }).present()
                                }
                            }, function(e) {
                                o.dismiss(), r.ReusableUtils.showToastWithOk("pleaseTryAfterSometime"), r.ReusableUtils.saveErrorLog({}, e)
                            })
                        } else {
                            var s;
                            r.translate.get("takeMeThere").subscribe(function(e) {
                                return s = e
                            });
                            var l;
                            e ? r.translate.get("depDobError").subscribe(function(e) {
                                return l = e
                            }) : r.translate.get("userDobError").subscribe(function(e) {
                                return l = e
                            });
                            r.Alert.create({
                                message: l,
                                buttons: [{
                                    text: s,
                                    handler: function(e) {
                                        r.nav.push(n, t)
                                    }
                                }]
                            }).present()
                        }
                    }, 5e3, {
                        trailing: !1
                    });
                    var A = this;
                    A.displayData = " ", A.fromMyTeam = A.navParams.get("fromMyTeam"), A.StorageAccess.getValue("username").then(function(e) {
                        A.uName = e
                    }), A.clearTeamWhenUserSwitched(), A.getAllData()
                }
                return e.prototype.clearTeamWhenUserSwitched = function() {
                    var e = this;
                    e.StorageAccess.getValue("switchUser").then(function(t) {
                        t && (e.StorageAccess.setValue("switchUser", null), e.StorageAccess.setValue("vaccineDependents", null), e.StorageAccess.setValue("dependentsList", null), e.mySubordinates = [], e.HSO = void 0, e.labTest = null, e.vaccine = null, e.vaccineCertificate = null)
                    })
                }, e.prototype.updateTravelBubble = function() {
                    var e = this;
                    if (e.isTabPage) {
                        var t = [],
                            n = !1,
                            r = i.a.uniq(i.a.keys(e.districtZoneDetails.zoneMessageMap).join().replace(/_MY/g, "").split(","));
                        i.a.each(e.districtZoneDetails.data, function(r, i) {
                            t.push(i.split("_")[0]), -1 != r.indexOf(e.user.homeLocation) && (e.isGreenBubblePass = !1, n = !0, e.zoneKey = i.split("_")[0], e.zoneDetails = e.districtZoneDetails.zoneMessageMap["ms_MY" == e.translate.currentLang ? e.zoneKey + "_MY" : e.zoneKey], e.passCardColor = e.zoneDetails.cardColourCode)
                        }), n || (e.zoneKey = "HIGH_RISK" == i.a.difference(r, t)[0] ? i.a.difference(r, t)[1] : i.a.difference(r, t)[0], e.zoneDetails = e.districtZoneDetails.zoneMessageMap["ms_MY" == e.translate.currentLang ? e.zoneKey + "_MY" : e.zoneKey], e.passCardColor = e.zoneDetails.cardColourCode), "Low" == e.risk ? e.isGreenBubblePass = !0 : (e.passCardColor = e.districtZoneDetails.zoneMessageMap.HIGH_RISK.cardColourCode, e.isGreenBubblePass = !1)
                    }
                }, e.prototype.getHSODetails = function(e) {
                    e.data && (this.HSO = e.data, this.HSO.createdDate = new Date(this.HSO.createdDate), this.HSO.endDate = new Date(this.HSO.endDate), this.duration = this.HSO.createdDate.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    }).replace(/ /g, "-") + " " + this.UserUtils.getTranslatedString("TO", {}) + " " + this.HSO.endDate.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    }).replace(/ /g, "-"), this.HSO.createdDate = this.HSO.createdDate.toLocaleString("en-US", {
                        month: "long",
                        day: "numeric"
                    }) + " " + this.HSO.createdDate.toLocaleTimeString("en-US"))
                }, e.prototype.getFormattedDate = function() {
                    return this.UserUtils.getFormattedDate((new Date).getTime())
                }, e.prototype.ionSelected = function() {
                    var e = this;
                    setTimeout(function() {
                        e.content.scrollToTop(500)
                    }, 1)
                }, e.prototype.getUserDetailsById = function(e, t) {
                    var n = this;
                    n.isTabPage ? n.hubProvider.getEmployeeInfo(t).subscribe(function(e) {
                        n.StorageAccess.setValue("empId", e.employeeId), n.StorageAccess.setValue("employeeInfo", e), n.StorageAccess.setValue("empInfo", JSON.stringify(e)), e && (n.riskCategory = e.designationCode, n.user = e, n.risk = n.user.designationCode.includes("LOW") ? "Low" : "High", n.StorageAccess.getValue("districtZoneDetails").then(function(e) {
                            e && (n.districtZoneDetails = JSON.parse(e), n.updateTravelBubble())
                        }), "location" in e && e.location ? (n.latCord = e.location.lat, n.longCord = e.location.lng, n.image1 = o.a.devLink + e.location.imageUrl, n.generateQRCode(), n.getStatus()) : n.generateQRCode(), n.displayData = n.user.displayName, n.designationData = n.user.designation ? n.user.designation : "")
                    }, function(e) {
                        n.ReusableUtils.showHttpError(e), n.ReusableUtils.saveErrorLog({}, e)
                    }) : e && n.profileProvider.getEmployeeInfo(e).subscribe(function(e) {
                        e && (n.riskCategory = e.designationCode, n.user = e, n.getProfileCards(n.user.employeeId), "location" in e && e.location ? (n.latCord = e.location.lat, n.longCord = e.location.lng, n.image1 = o.a.devLink + e.location.imageUrl, n.generateQRCode(), n.getStatus()) : n.generateQRCode(), n.displayData = n.user.displayName, n.designationData = n.user.designation ? n.user.designation : "")
                    }, function(e) {
                        n.ReusableUtils.showHttpError(e), n.ReusableUtils.saveErrorLog({}, e)
                    })
                }, e.prototype.toggle = function(e) {
                    this.isDisabled || (this.isOn = e)
                }, e.prototype.getWidgetOrders = function(e) {
                    this.scorecardWidgets = i.a.filter(e, function(e) {
                        return "PUBLISHED_SCORECARD_REVIEW" == e.type
                    }), this.otherWidgets = i.a.filter(e, function(e) {
                        return "PUBLISHED_SCORECARD_REVIEW" != e.type
                    })
                }, e.prototype.getActiveScorecards = function(e) {
                    var t = this;
                    t.profileProvider.getActivePerformanceScorecards(e).subscribe(function(e) {
                        e.data && (t.activeScorecardWidgets = e.data)
                    }, function(e) {
                        t.ReusableUtils.showHttpError(e)
                    })
                }, e.prototype.getCompetencyScorecards = function(e) {
                    try {
                        var t = this;
                        t.profileProvider.getCompetencyScorecards(e).subscribe(function(e) {
                            t.competencyScorecardWidgets = e
                        }, function(e) {
                            t.ReusableUtils.showHttpError(e)
                        })
                    } catch (e) {}
                }, e.prototype.getProfileInformation = function(e, t) {
                    var n = this;
                    n.profileProvider.getProfileInfo(e, n.pageNum).subscribe(function(e) {
                        0 == n.widgets.length ? n.widgets = e.tasks : (n.widgets.length < 10 && (n.widgets = []), i.a.each(e.tasks, function(e) {
                            n.widgets.push(e)
                        })), n.isInfiniteProfileEnabled = e.totalCount > n.widgets.length, n.totalInfoCount = e.totalCount, n.getWidgetOrders(n.widgets), n.loading.dismiss(), t && t.complete()
                    }, function(e) {
                        n.ReusableUtils.showHttpError(e), n.ReusableUtils.saveErrorLog({}, e), t && t.complete()
                    })
                }, e.prototype.getTeam = function(e) {
                    var t = this;
                    "mobile" == t.connectivityService.getPlatform() && t.profileProvider.getMyTeamMembers(e).subscribe(function(e) {
                        t.team = e, t.mySubordinates = e, t.dependents = e.slice(), t.getVaccineTeam(), t.mySubordinates.length > 0 && (t.hasTeam = !0)
                    }, function(e) {
                        t.ReusableUtils.showHttpError(e), t.ReusableUtils.saveErrorLog({}, e)
                    })
                }, e.prototype.getVaccineTeam = function() {
                    var e = this;
                    e.StorageAccess.getValue("vaccineDependents").then(function(t) {
                        if (t) {
                            var n = "string" == typeof t ? JSON.parse(t) : t;
                            n.length > 0 ? n.forEach(function(t) {
                                -1 === i.a.findIndex(e.mySubordinates, {
                                    employeeId: t.employeeId
                                }) && e.mySubordinates.push(t)
                            }) : e.mySubordinates.forEach(function(t, n) {
                                -1 === i.a.findIndex(e.dependents, {
                                    employeeId: t.employeeId
                                }) && e.mySubordinates.splice(n, 1)
                            }), e.mySubordinates.length > 0 && (e.hasTeam = !0)
                        } else e.hubProvider.getVaccinationEmployeeInfo().subscribe(function(t) {
                            var n = "string" == typeof t ? JSON.parse(t) : t;
                            n && (e.StorageAccess.setValue("employeeInfo", n.employeeInfo), e.StorageAccess.setValue("empInfo", JSON.stringify(n.employeeInfo)), e.StorageAccess.setValue("vaccineDependents", n.vaccineDependents), n.vaccineDependents.forEach(function(t) {
                                -1 === i.a.findIndex(e.mySubordinates, {
                                    employeeId: t.employeeId
                                }) && e.mySubordinates.push(t)
                            }), e.mySubordinates.length > 0 && (e.hasTeam = !0))
                        }, function(t) {
                            e.ReusableUtils.showHttpError(t), e.ReusableUtils.saveErrorLog({}, t)
                        })
                    })
                }, e.prototype.getMyScoreChart = function(e, t) {
                    this.myScoreChartData = this.profileProvider.getProgressChart(e)
                }, e.prototype.getTeamScoreChart = function(e, t) {
                    this.teamScoreChartData = this.profileProvider.getProgressChart(e)
                }, e.prototype.isDefined = function(e) {
                    return !(i.a.isUndefined(e) || i.a.isNull(e))
                }, e.prototype.getScores = function(e) {
                    var t = this;
                    t.profileProvider.getScores(e).subscribe(function(n) {
                        if (t.showScore = n.showScore, t.commonProvider.isDefined(n.myScore)) {
                            var r = {
                                status: t.commonProvider.isDefined(n.myScorePercentage) ? Math.round(n.myScorePercentage) : 0,
                                color: t.commonProvider.isDefined(n.myScoreColor) ? n.myScoreColor : null,
                                title: t.commonProvider.isDefined(n.myScore) ? n.myScore : "-"
                            };
                            t.hasMyScore = !0, t.getMyScoreChart(r, e)
                        }
                        if (t.commonProvider.isDefined(n.teamScore)) {
                            var i = {
                                status: t.commonProvider.isDefined(n.teamScorePercentage) ? Math.round(n.teamScorePercentage) : 0,
                                color: t.commonProvider.isDefined(n.teamScoreColor) ? n.teamScoreColor : null,
                                title: t.commonProvider.isDefined(n.teamScore) ? n.teamScore : "-"
                            };
                            t.hasMyTeamScore = !0, t.getTeamScoreChart(i, e)
                        }
                    }, function(e) {
                        t.ReusableUtils.showHttpError(e)
                    })
                }, e.prototype.ionViewWillEnter = function() {}, e.prototype.generateQRCode = function() {
                    var e = this,
                        t = a;
                    e.myAngularxQrCode = JSON.stringify({
                        username: e.uName,
                        licenceNumber: e.user.licenceNumber,
                        image1: e.image1,
                        image2: e.image2,
                        displayName: e.user.displayName,
                        lastModifiedOn: e.user.lastModifiedOn,
                        imageUrl: e.user.imageUrl,
                        employeeId: e.user.employeeId,
                        designation: e.user.designation,
                        designationCode: e.user.designationCode
                    }), e.commonProvider.encrypt(e.myAngularxQrCode).then(function(n) {
                        t.toDataURL(n, {
                            errorCorrectionLevel: "L"
                        }, function(t, n) {
                            e.generated = n
                        })
                    }).catch(function(e) {})
                }, e.prototype.getProfileCards = function(e) {
                    var t = this;
                    t.translate.get("yes").subscribe(function(e) {
                        return e
                    }), t.translate.get("no").subscribe(function(e) {
                        return e
                    }), t.profileProvider.getProfileCards(e).subscribe(function(e) {
                        e && e.length && i.a.each(e, function(e) {
                            "HSO" == e.type ? t.getHSODetails(e) : "LAB_TEST" == e.type ? t.labTest = e.data : "VACCINE_CERTIFICATE" == e.type && (t.vaccineCertificate = e.data)
                        }), e && e.length || (t.HSO = void 0, t.labTest = null, t.vaccine = null, t.vaccineCertificate = null)
                    }, function(e) {
                        t.ReusableUtils.saveErrorLog({}, e)
                    })
                }, e.prototype.getAllData = function() {
                    var e = this;
                    e.loading = e.ReusableUtils.presentLoadingCustom(), e.loading.present();
                    var t = null;
                    e.navParams.data && (e.user = e.navParams.get("employee"), t = e.user), t ? (e.isTabPage = !1, e.isSubordinate = !0, e.incrementCount = e.incrementCount + 1, e.presentEmpId = t.employeeId, e.getUserDetailsById(t.employeeId)) : (e.getProfileCards(), e.isSubordinate = !1, e.StorageAccess.getValue("empInfo").then(function(t) {
                        e.riskCategory = JSON.parse(t).designationCode, e.user = JSON.parse(t), e.risk = e.user.designationCode.includes("LOW") ? "Low" : "High", e.StorageAccess.getValue("image2").then(function(t) {
                            t && (e.image2 = t)
                        }), "location" in e.user && e.user.location ? (e.latCord = JSON.parse(t).location.lat, e.longCord = JSON.parse(t).location.lng, e.image1 = o.a.devLink + e.user.location.imageUrl, e.generateQRCode(), e.getStatus()) : e.generateQRCode(), e.incrementCount = e.incrementCount + 1, e.presentEmpId = e.user.employeeId, e.user.displayName && (e.displayData = e.user.displayName), e.designationData = e.user.designation ? e.user.designation : "", e.user.hasTeam ? e.getTeam(e.user.employeeId) : e.getVaccineTeam(), "homeLocation" in e.user ? e.StorageAccess.getValue("districtZoneDetails").then(function(t) {
                            t && (e.districtZoneDetails = JSON.parse(t), e.updateTravelBubble())
                        }) : e.getUserDetailsById(e.user.employeeId)
                    })), e.loading.dismiss()
                }, e.prototype.syncPage = function() {
                    this.refreshPage(null, "SYNC")
                }, e.prototype.refreshPage = function(e, t) {
                    this.widgets = [], this.competencyScorecardWidgets = [], this.activeScorecardWidgets = [], this.scorecardWidgets = [], this.otherWidgets = [], this.HSO = void 0, this.getUserDetailsById(this.presentEmpId, t), this.user.hasTeam ? this.getTeam(this.presentEmpId) : this.getVaccineTeam(), this.getProfileCards(), e && e.complete()
                }, e.prototype.doRefresh = function(e) {
                    this.network.checkInternetConnection() ? this.refreshPage(e, "SYNC") : e.complete()
                }, e.prototype.showAll = function() {
                    this.nav.push("TeamList", {
                        subordinates: JSON.stringify(this.allSubordinates)
                    })
                }, e.prototype.search = function(e) {
                    var t = this.myInput;
                    this.allSubordinates = "" != t.trim() ? i.a.filter(this.team, function(e) {
                        return e.displayName.toLowerCase().indexOf(t.toLowerCase()) > -1
                    }) : this.team
                }, e.prototype.onBlur = function(e) {
                    this.keyboard.hide()
                }, e.prototype.onClear = function(e) {
                    this.allSubordinates = this.team
                }, e.prototype.onCancel = function(e) {
                    this.keyboard.hide(), this.allSubordinates = this.team
                }, e.prototype.openSubOrdinatePage = function(e, t, n) {
                    this.nav.push("ProfilePage", {
                        employee: t
                    })
                }, e.prototype.doInfiniteInfo = function(e) {
                    this.totalInfoCount > this.widgets.length ? (this.pageNum++, this.getProfileInformation(this.user.employeeId, e)) : e.complete()
                }, e.prototype.onScroll = function(e) {
                    var t = this;
                    this.zone.run(function() {
                        ("up" != e.directionY || e.scrollTop >= e.scrollHeight - e.contentHeight) && 0 !== e.scrollTop ? e.scrollTop > 0 && (t.scrolling = !0) : t.scrolling = !1
                    })
                }, e.prototype.getStatus = function() {
                    var e, t = this;
                    e = o.a.devLink + "/register/api/location/status?locale=" + t.translate.currentLang;
                    var n = {
                        lat: t.latCord,
                        lng: t.longCord,
                        classification: t.riskCategory
                    };
                    t.StorageAccess.getValue("bAth").then(function(r) {
                        var i = JSON.parse(r);
                        t.meetInProvider.fetchHotSpot(e, n, i).then(function(e) {
                            "data" in e && (t.StorageAccess.setValue("image2", o.a.devLink + e.data), t.image2 = o.a.devLink + e.data, t.generateQRCode())
                        }, function(e) {
                            t.generateQRCode(), t.ReusableUtils.saveErrorLog({}, e)
                        })
                    })
                }, e.prototype.travelPermit = function() {
                    try {
                        this.nav.push("TravelPassDetails", {
                            districtZoneDetails: this.districtZoneDetails,
                            lastModifiedZoneDate: this.lastModifiedZoneDate,
                            greenZoneStatesAndDistricts: this.greenZoneStatesAndDistricts,
                            isGreenZone: this.isGreenBubblePass,
                            zoneKey: this.zoneKey,
                            risk: "Low" != this.risk
                        })
                    } catch (e) {}
                }, e.prototype.getDependentMessage = function() {
                    var e = "ms_MY" == this.translate.currentLang ? "Risiko Tanggungan : " : "Dependent Risk : ",
                        t = "ms_MY" == this.translate.currentLang ? this.user.hasHighRiskDependents ? "Tinggi" : "Rendah" : this.user.hasHighRiskDependents ? "High" : "Low";
                    return this.user.hasHighRiskDependents ? e + "<b style='color:#FF0000'>" + t + "</b>" : e + "<b style='color:#0CBA1C'}>" + t + "</b>"
                }, e.prototype.getEmpId = function() {
                    return this.navParams.get("employee") ? this.navParams.get("employee").employeeId : null
                }, e.prototype.downloadVaccinationCert = function() {
                    var e, t, n, r = this,
                        i = this;
                    if (i.navParams.get("employee") ? (e = i.navParams.get("employee").employeeId, t = {
                            data: {
                                passportNumber: i.user.passportNumber,
                                dateOfBirth: i.user.dateOfBirth,
                                country: i.user.country
                            },
                            IcNumber: i.user.licenceNumber,
                            id: i.user.employeeId,
                            flag: !0,
                            editableFields: i.user.editableFields
                        }, n = "editDependentPage") : (n = "AboutYouPage", t = {
                            employee: JSON.stringify(i.user)
                        }), i.user.dateOfBirth) {
                        var o = i.getEmpId();
                        if (i.vaccineCertificate.vaccinationCertGenerated) {
                            var a = "/v1/mobileApp/vaccination/certificate/download";
                            o && (a = a + "?employeeId=" + o);
                            i.commonProvider.downloadFileFromUrl(a, "vaccination_" + i.vaccineCertificate.icOrPassport, "pdf", "vaccinationCertDownloaded")
                        } else {
                            var s = this.loadingCtrl.create();
                            s.present(), i.commonProvider.generateVaccinationCert(o).subscribe(function(e) {
                                if (e.success) i.vaccineCertificate.vaccinationCertGenerated = !0, r.ReusableUtils.showToastWithOk("vaccinationCertGenerationRequestSuccess", 3e3);
                                else {
                                    var t = i.UserUtils.getTranslatedString("error!", {}),
                                        n = i.UserUtils.getTranslatedString("ok", {});
                                    i.Alert.create({
                                        title: t,
                                        subTitle: e.errorMessage,
                                        buttons: [n]
                                    }).present()
                                }
                                s.dismiss()
                            }, function(e) {
                                r.ReusableUtils.showToastWithOk("vaccinationCertGenerationRequestFailed", 5e3), s.dismiss()
                            })
                        }
                    } else {
                        var l;
                        i.translate.get("takeMeThere").subscribe(function(e) {
                            return l = e
                        });
                        var u;
                        e ? i.translate.get("depDobError").subscribe(function(e) {
                            return u = e
                        }) : i.translate.get("userDobError").subscribe(function(e) {
                            return u = e
                        });
                        i.Alert.create({
                            message: u,
                            buttons: [{
                                text: l,
                                handler: function(e) {
                                    i.nav.push(n, t)
                                }
                            }]
                        }).present()
                    }
                }, e
            }())
    },
    1331: function(e, t, n) {
        var r = n(1327),
            i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
            o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        t.getBlocksCount = function(e, t) {
            switch (t) {
                case r.L:
                    return i[4 * (e - 1) + 0];
                case r.M:
                    return i[4 * (e - 1) + 1];
                case r.Q:
                    return i[4 * (e - 1) + 2];
                case r.H:
                    return i[4 * (e - 1) + 3];
                default:
                    return
            }
        }, t.getTotalCodewordsCount = function(e, t) {
            switch (t) {
                case r.L:
                    return o[4 * (e - 1) + 0];
                case r.M:
                    return o[4 * (e - 1) + 1];
                case r.Q:
                    return o[4 * (e - 1) + 2];
                case r.H:
                    return o[4 * (e - 1) + 3];
                default:
                    return
            }
        }
    },
    1332: function(e, t, n) {
        function r(e, t) {
            return l.getCharCountIndicator(e, t) + 4
        }

        function i(e, t) {
            var n = 0;
            return e.forEach(function(e) {
                var i = r(e.mode, t);
                n += i + e.getBitsLength()
            }), n
        }
        var o = n(1324),
            a = n(1331),
            s = n(1327),
            l = n(1325),
            u = n(406),
            c = o.getBCHDigit(7973);
        t.isValid = function(e) {
            return !isNaN(e) && e >= 1 && e <= 40
        }, t.from = function(e, n) {
            return t.isValid(e) ? parseInt(e, 10) : n
        }, t.getCapacity = function(e, n, i) {
            if (!t.isValid(e)) throw new Error("Invalid QR Code version");
            void 0 === i && (i = l.BYTE);
            var s = 8 * (o.getSymbolTotalCodewords(e) - a.getTotalCodewordsCount(e, n));
            if (i === l.MIXED) return s;
            var u = s - r(i, e);
            switch (i) {
                case l.NUMERIC:
                    return Math.floor(u / 10 * 3);
                case l.ALPHANUMERIC:
                    return Math.floor(u / 11 * 2);
                case l.KANJI:
                    return Math.floor(u / 13);
                case l.BYTE:
                default:
                    return Math.floor(u / 8)
            }
        }, t.getBestVersionForData = function(e, n) {
            var r, o = s.from(n, s.M);
            if (u(e)) {
                if (e.length > 1) return function(e, n) {
                    for (var r = 1; r <= 40; r++)
                        if (i(e, r) <= t.getCapacity(r, n, l.MIXED)) return r
                }(e, o);
                if (0 === e.length) return 1;
                r = e[0]
            } else r = e;
            return function(e, n, r) {
                for (var i = 1; i <= 40; i++)
                    if (n <= t.getCapacity(i, r, e)) return i
            }(r.mode, r.getLength(), o)
        }, t.getEncodedBits = function(e) {
            if (!t.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
            for (var n = e << 12; o.getBCHDigit(n) - c >= 0;) n ^= 7973 << o.getBCHDigit(n) - c;
            return e << 12 | n
        }
    },
    1333: function(e, t) {
        var n = "(?:[　-〿]|[぀-ゟ]|[゠-ヿ]|[＀-￯]|[一-龯]|[★-☆]|[←-↕]|※|[‐―‘’‥…“”∥≠]|[Α-ё]|[§¨±´×÷])+";
        t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+-./:]+", "g"), t.BYTE = new RegExp("(?:(?![A-Z0-9 $%*+-./:]|(?:[　-〿]|[぀-ゟ]|[゠-ヿ]|[＀-￯]|[一-龯]|[★-☆]|[←-↕]|※|[‐―‘’‥…“”∥≠]|[Α-ё]|[§¨±´×÷])+).)+", "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+-./:]+", "g");
        var r = new RegExp("^" + n + "$"),
            i = new RegExp("^[0-9]+$"),
            o = new RegExp("^[A-Z0-9 $%*+-./:]+$");
        t.testKanji = function(e) {
            return r.test(e)
        }, t.testNumeric = function(e) {
            return i.test(e)
        }, t.testAlphanumeric = function(e) {
            return o.test(e)
        }
    },
    1334: function(e, t) {
        function n(e) {
            if ("string" != typeof e) throw new Error("Color should be defined as hex string");
            var t = e.slice().replace("#", "").split("");
            if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
            3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map(function(e) {
                return [e, e]
            }))), 6 === t.length && t.push("F", "F");
            var n = parseInt(t.join(""), 16);
            return {
                r: n >> 24 & 255,
                g: n >> 16 & 255,
                b: n >> 8 & 255,
                a: 255 & n
            }
        }
        t.getOptions = function(e) {
            e || (e = {}), e.color || (e.color = {});
            return {
                scale: e.scale || 4,
                margin: void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                color: {
                    dark: n(e.color.dark || "#000000ff"),
                    light: n(e.color.light || "#ffffffff")
                },
                type: e.type,
                rendererOpts: e.rendererOpts || {}
            }
        }, t.qrToImageData = function(e, t, n, r, i) {
            for (var o = t.modules.size, a = t.modules.data, s = n * r, l = o * r + 2 * s, u = [i.light, i.dark], c = 0; c < l; c++)
                for (var h = 0; h < l; h++) {
                    var f = 4 * (c * l + h),
                        d = i.light;
                    if (c >= s && h >= s && c < l - s && h < l - s) {
                        d = u[a[Math.floor((c - s) / r) * o + Math.floor((h - s) / r)]]
                    }
                    e[f++] = d.r, e[f++] = d.g, e[f++] = d.b, e[f] = d.a
                }
        }
    },
    1339: function(e, t, n) {
        function r(e, t, n, r, o) {
            var a = arguments.length - 1;
            if (a < 2) throw new Error("Too few arguments provided");
            if (2 === a ? (o = n, n = t, t = r = void 0) : 3 === a && (t.getContext && void 0 === o ? (o = r, r = void 0) : (o = r, r = n, n = t, t = void 0)), "function" != typeof o) throw new Error("Callback required as last argument");
            try {
                o(null, e(i.create(n, r), t, r))
            } catch (e) {
                o(e)
            }
        }
        var i = n(1340),
            o = n(1356),
            a = n(1357);
        t.create = i.create, t.toCanvas = r.bind(null, o.render), t.toDataURL = r.bind(null, o.renderToDataURL), t.toString = r.bind(null, function(e, t, n) {
            return a.render(e, n)
        }), t.qrcodedraw = function() {
            return {
                draw: t.toCanvas
            }
        }
    },
    1340: function(e, t, n) {
        function r(e, t, n) {
            var r, i, o = e.size,
                a = v.getEncodedBits(t, n);
            for (r = 0; r < 15; r++) i = 1 == (a >> r & 1), e.set(r < 6 ? r : r < 8 ? r + 1 : o - 15 + r, 8, i, !0), e.set(8, r < 8 ? o - r - 1 : r < 9 ? 15 - r - 1 + 1 : 15 - r - 1, i, !0);
            e.set(o - 8, 8, 1, !0)
        }

        function i(e, t, n) {
            var r = new u;
            n.forEach(function(t) {
                r.put(t.mode.bit, 4), r.put(t.getLength(), y.getCharCountIndicator(t.mode, e)), t.write(r)
            });
            var i = 8 * (s.getSymbolTotalCodewords(e) - g.getTotalCodewordsCount(e, t));
            for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
            for (var o = (i - r.getLengthInBits()) / 8, l = 0; l < o; l++) r.put(l % 2 ? 17 : 236, 8);
            return function(e, t, n) {
                for (var r = s.getSymbolTotalCodewords(t), i = g.getTotalCodewordsCount(t, n), o = r - i, l = g.getBlocksCount(t, n), u = l - r % l, c = Math.floor(r / l), h = Math.floor(o / l), f = h + 1, d = c - h, m = new p(d), v = 0, y = new Array(l), b = new Array(l), w = 0, C = new a(e.buffer), S = 0; S < l; S++) {
                    var _ = S < u ? h : f;
                    y[S] = C.slice(v, v + _), b[S] = m.encode(y[S]), v += _, w = Math.max(w, _)
                }
                var E, I, P = new a(r),
                    T = 0;
                for (E = 0; E < w; E++)
                    for (I = 0; I < l; I++) E < y[I].length && (P[T++] = y[I][E]);
                for (E = 0; E < d; E++)
                    for (I = 0; I < l; I++) P[T++] = b[I][E];
                return P
            }(r, e, t)
        }

        function o(e, t, n) {
            var o;
            if (w(e)) o = b.fromArray(e);
            else {
                if ("string" != typeof e) throw new Error("Invalid data");
                var a = t;
                if (!a) {
                    var l = b.rawSplit(e);
                    a = m.getBestVersionForData(l, n)
                }
                o = b.fromString(e, a || 40)
            }
            var u = m.getBestVersionForData(o, n);
            if (!u) throw new Error("The amount of data is too big to be stored in a QR Code");
            if (t) {
                if (t < u) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + u + ".\n")
            } else t = u;
            var g = i(t, n, o),
                p = s.getSymbolSize(t),
                v = new c(p);
            ! function(e, t) {
                for (var n = e.size, r = f.getPositions(t), i = 0; i < r.length; i++)
                    for (var o = r[i][0], a = r[i][1], s = -1; s <= 7; s++)
                        if (!(o + s <= -1 || n <= o + s))
                            for (var l = -1; l <= 7; l++) a + l <= -1 || n <= a + l || e.set(o + s, a + l, s >= 0 && s <= 6 && (0 === l || 6 === l) || l >= 0 && l <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && l >= 2 && l <= 4, !0)
            }(v, t),
            function(e) {
                for (var t = e.size, n = 8; n < t - 8; n++) {
                    var r = n % 2 == 0;
                    e.set(n, 6, r, !0), e.set(6, n, r, !0)
                }
            }(v),
            function(e, t) {
                for (var n = h.getPositions(t), r = 0; r < n.length; r++)
                    for (var i = n[r][0], o = n[r][1], a = -2; a <= 2; a++)
                        for (var s = -2; s <= 2; s++) e.set(i + a, o + s, -2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s, !0)
            }(v, t), r(v, n, 0), t >= 7 && function(e, t) {
                    for (var n, r, i, o = e.size, a = m.getEncodedBits(t), s = 0; s < 18; s++) n = Math.floor(s / 3), e.set(n, r = s % 3 + o - 8 - 3, i = 1 == (a >> s & 1), !0), e.set(r, n, i, !0)
                }(v, t),
                function(e, t) {
                    for (var n = e.size, r = -1, i = n - 1, o = 7, a = 0, s = n - 1; s > 0; s -= 2)
                        for (6 === s && s--;;) {
                            for (var l = 0; l < 2; l++)
                                if (!e.isReserved(i, s - l)) {
                                    var u = !1;
                                    a < t.length && (u = 1 == (t[a] >>> o & 1)), e.set(i, s - l, u), -1 == --o && (a++, o = 7)
                                } if ((i += r) < 0 || n <= i) {
                                i -= r, r = -r;
                                break
                            }
                        }
                }(v, g);
            var y = d.getBestMask(v, r.bind(null, v, n));
            return d.applyMask(y, v), r(v, n, y), {
                modules: v,
                version: t,
                errorCorrectionLevel: n,
                maskPattern: y,
                segments: o
            }
        }
        var a = n(1326),
            s = n(1324),
            l = n(1327),
            u = n(1341),
            c = n(1342),
            h = n(1343),
            f = n(1344),
            d = n(1345),
            g = n(1331),
            p = n(1346),
            m = n(1332),
            v = n(1349),
            y = n(1325),
            b = n(1350),
            w = n(406);
        t.create = function(e, t) {
            if (void 0 === e || "" === e) throw new Error("No input text");
            var n, r = l.M;
            return void 0 !== t && (r = l.from(t.errorCorrectionLevel, l.M), n = m.from(t.version), t.toSJISFunc && s.setToSJISFunction(t.toSJISFunc)), o(e, n, r)
        }
    },
    1341: function(e, t) {
        function n() {
            this.buffer = [], this.length = 0
        }
        n.prototype = {
            get: function(e) {
                var t = Math.floor(e / 8);
                return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
            },
            put: function(e, t) {
                for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(e) {
                var t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
            }
        }, e.exports = n
    },
    1342: function(e, t, n) {
        function r(e) {
            if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
            this.size = e, this.data = new i(e * e), this.data.fill(0), this.reservedBit = new i(e * e), this.reservedBit.fill(0)
        }
        var i = n(1326);
        r.prototype.set = function(e, t, n, r) {
            var i = e * this.size + t;
            this.data[i] = n, r && (this.reservedBit[i] = !0)
        }, r.prototype.get = function(e, t) {
            return this.data[e * this.size + t]
        }, r.prototype.xor = function(e, t, n) {
            this.data[e * this.size + t] ^= n
        }, r.prototype.isReserved = function(e, t) {
            return this.reservedBit[e * this.size + t]
        }, e.exports = r
    },
    1343: function(e, t, n) {
        var r = n(1324).getSymbolSize;
        t.getRowColCoords = function(e) {
            if (1 === e) return [];
            for (var t = Math.floor(e / 7) + 2, n = r(e), i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), o = [n - 7], a = 1; a < t - 1; a++) o[a] = o[a - 1] - i;
            return o.push(6), o.reverse()
        }, t.getPositions = function(e) {
            for (var n = [], r = t.getRowColCoords(e), i = r.length, o = 0; o < i; o++)
                for (var a = 0; a < i; a++) 0 === o && 0 === a || 0 === o && a === i - 1 || o === i - 1 && 0 === a || n.push([r[o], r[a]]);
            return n
        }
    },
    1344: function(e, t, n) {
        var r = n(1324).getSymbolSize;
        t.getPositions = function(e) {
            var t = r(e);
            return [
                [0, 0],
                [t - 7, 0],
                [0, t - 7]
            ]
        }
    },
    1345: function(e, t) {
        function n(e, n, r) {
            switch (e) {
                case t.Patterns.PATTERN000:
                    return (n + r) % 2 == 0;
                case t.Patterns.PATTERN001:
                    return n % 2 == 0;
                case t.Patterns.PATTERN010:
                    return r % 3 == 0;
                case t.Patterns.PATTERN011:
                    return (n + r) % 3 == 0;
                case t.Patterns.PATTERN100:
                    return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                case t.Patterns.PATTERN101:
                    return n * r % 2 + n * r % 3 == 0;
                case t.Patterns.PATTERN110:
                    return (n * r % 2 + n * r % 3) % 2 == 0;
                case t.Patterns.PATTERN111:
                    return (n * r % 3 + (n + r) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + e)
            }
        }
        t.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        var r = 3,
            i = 3,
            o = 40,
            a = 10;
        t.getPenaltyN1 = function(e) {
            for (var t = e.size, n = 0, i = 0, o = 0, a = null, s = null, l = 0; l < t; l++) {
                i = o = 0, a = s = null;
                for (var u = 0; u < t; u++) {
                    var c = e.get(l, u);
                    c === a ? i++ : (i >= 5 && (n += r + (i - 5)), a = c, i = 1), (c = e.get(u, l)) === s ? o++ : (o >= 5 && (n += r + (o - 5)), s = c, o = 1)
                }
                i >= 5 && (n += r + (i - 5)), o >= 5 && (n += r + (o - 5))
            }
            return n
        }, t.getPenaltyN2 = function(e) {
            for (var t = e.size, n = 0, r = 0; r < t - 1; r++)
                for (var o = 0; o < t - 1; o++) {
                    var a = e.get(r, o) + e.get(r, o + 1) + e.get(r + 1, o) + e.get(r + 1, o + 1);
                    4 !== a && 0 !== a || n++
                }
            return n * i
        }, t.getPenaltyN3 = function(e) {
            for (var t = e.size, n = 0, r = 0, i = 0, a = 0; a < t; a++) {
                r = i = 0;
                for (var s = 0; s < t; s++) r = r << 1 & 2047 | e.get(a, s), s >= 10 && (1488 === r || 93 === r) && n++, i = i << 1 & 2047 | e.get(s, a), s >= 10 && (1488 === i || 93 === i) && n++
            }
            return n * o
        }, t.getPenaltyN4 = function(e) {
            for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];
            return Math.abs(Math.ceil(100 * t / n / 5) - 10) * a
        }, t.applyMask = function(e, t) {
            for (var r = t.size, i = 0; i < r; i++)
                for (var o = 0; o < r; o++) t.isReserved(o, i) || t.xor(o, i, n(e, o, i))
        }, t.getBestMask = function(e, n) {
            for (var r = Object.keys(t.Patterns).length, i = 0, o = 1 / 0, a = 0; a < r; a++) {
                n(a), t.applyMask(a, e);
                var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                t.applyMask(a, e), s < o && (o = s, i = a)
            }
            return i
        }
    },
    1346: function(e, t, n) {
        function r(e) {
            this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
        }
        var i = n(1326),
            o = n(1347);
        r.prototype.initialize = function(e) {
            this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
        }, r.prototype.encode = function(e) {
            if (!this.genPoly) throw new Error("Encoder not initialized");
            var t = new i(this.degree);
            t.fill(0);
            var n = i.concat([e, t], e.length + this.degree),
                r = o.mod(n, this.genPoly),
                a = this.degree - r.length;
            if (a > 0) {
                var s = new i(this.degree);
                return s.fill(0), r.copy(s, a), s
            }
            return r
        }, e.exports = r
    },
    1347: function(e, t, n) {
        var r = n(1326),
            i = n(1348);
        t.mul = function(e, t) {
            var n = new r(e.length + t.length - 1);
            n.fill(0);
            for (var o = 0; o < e.length; o++)
                for (var a = 0; a < t.length; a++) n[o + a] ^= i.mul(e[o], t[a]);
            return n
        }, t.mod = function(e, t) {
            for (var n = new r(e); n.length - t.length >= 0;) {
                for (var o = n[0], a = 0; a < t.length; a++) n[a] ^= i.mul(t[a], o);
                for (var s = 0; s < n.length && 0 === n[s];) s++;
                n = n.slice(s)
            }
            return n
        }, t.generateECPolynomial = function(e) {
            for (var n = new r([1]), o = 0; o < e; o++) n = t.mul(n, [1, i.exp(o)]);
            return n
        }
    },
    1348: function(e, t, n) {
        var r = n(1326),
            i = new r(512),
            o = new r(256);
        ! function() {
            for (var e = 1, t = 0; t < 255; t++) i[t] = e, o[e] = t, 256 & (e <<= 1) && (e ^= 285);
            for (t = 255; t < 512; t++) i[t] = i[t - 255]
        }(), t.log = function(e) {
            if (e < 1) throw new Error("log(" + e + ")");
            return o[e]
        }, t.exp = function(e) {
            return i[e]
        }, t.mul = function(e, t) {
            return 0 === e || 0 === t ? 0 : i[o[e] + o[t]]
        }
    },
    1349: function(e, t, n) {
        var r = n(1324),
            i = r.getBCHDigit(1335);
        t.getEncodedBits = function(e, t) {
            for (var n = e.bit << 3 | t, o = n << 10; r.getBCHDigit(o) - i >= 0;) o ^= 1335 << r.getBCHDigit(o) - i;
            return 21522 ^ (n << 10 | o)
        }
    },
    1350: function(e, t, n) {
        function r(e) {
            return unescape(encodeURIComponent(e)).length
        }

        function i(e, t, n) {
            for (var r, i = []; null !== (r = e.exec(n));) i.push({
                data: r[0],
                index: r.index,
                mode: t,
                length: r[0].length
            });
            return i
        }

        function o(e) {
            var t, n, r = i(d.NUMERIC, l.NUMERIC, e),
                o = i(d.ALPHANUMERIC, l.ALPHANUMERIC, e);
            g.isKanjiModeEnabled() ? (t = i(d.BYTE, l.BYTE, e), n = i(d.KANJI, l.KANJI, e)) : (t = i(d.BYTE_KANJI, l.BYTE, e), n = []);
            return r.concat(o, t, n).sort(function(e, t) {
                return e.index - t.index
            }).map(function(e) {
                return {
                    data: e.data,
                    mode: e.mode,
                    length: e.length
                }
            })
        }

        function a(e, t) {
            switch (t) {
                case l.NUMERIC:
                    return u.getBitsLength(e);
                case l.ALPHANUMERIC:
                    return c.getBitsLength(e);
                case l.KANJI:
                    return f.getBitsLength(e);
                case l.BYTE:
                    return h.getBitsLength(e)
            }
        }

        function s(e, t) {
            var n, r = l.getBestModeForData(e);
            if ((n = l.from(t, r)) !== l.BYTE && n.bit < r.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + l.toString(n) + ".\n Suggested mode is: " + l.toString(r));
            switch (n !== l.KANJI || g.isKanjiModeEnabled() || (n = l.BYTE), n) {
                case l.NUMERIC:
                    return new u(e);
                case l.ALPHANUMERIC:
                    return new c(e);
                case l.KANJI:
                    return new f(e);
                case l.BYTE:
                    return new h(e)
            }
        }
        var l = n(1325),
            u = n(1351),
            c = n(1352),
            h = n(1353),
            f = n(1354),
            d = n(1333),
            g = n(1324),
            p = n(1355);
        t.fromArray = function(e) {
            return e.reduce(function(e, t) {
                return "string" == typeof t ? e.push(s(t, null)) : t.data && e.push(s(t.data, t.mode)), e
            }, [])
        }, t.fromString = function(e, n) {
            for (var i = function(e, t) {
                    for (var n = {}, r = {
                            start: {}
                        }, i = ["start"], o = 0; o < e.length; o++) {
                        for (var s = e[o], u = [], c = 0; c < s.length; c++) {
                            var h = s[c],
                                f = "" + o + c;
                            u.push(f), n[f] = {
                                node: h,
                                lastCount: 0
                            }, r[f] = {};
                            for (var d = 0; d < i.length; d++) {
                                var g = i[d];
                                n[g] && n[g].node.mode === h.mode ? (r[g][f] = a(n[g].lastCount + h.length, h.mode) - a(n[g].lastCount, h.mode), n[g].lastCount += h.length) : (n[g] && (n[g].lastCount = h.length), r[g][f] = a(h.length, h.mode) + 4 + l.getCharCountIndicator(h.mode, t))
                            }
                        }
                        i = u
                    }
                    for (d = 0; d < i.length; d++) r[i[d]].end = 0;
                    return {
                        map: r,
                        table: n
                    }
                }(function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var i = e[n];
                        switch (i.mode) {
                            case l.NUMERIC:
                                t.push([i, {
                                    data: i.data,
                                    mode: l.ALPHANUMERIC,
                                    length: i.length
                                }, {
                                    data: i.data,
                                    mode: l.BYTE,
                                    length: i.length
                                }]);
                                break;
                            case l.ALPHANUMERIC:
                                t.push([i, {
                                    data: i.data,
                                    mode: l.BYTE,
                                    length: i.length
                                }]);
                                break;
                            case l.KANJI:
                                t.push([i, {
                                    data: i.data,
                                    mode: l.BYTE,
                                    length: r(i.data)
                                }]);
                                break;
                            case l.BYTE:
                                t.push([{
                                    data: i.data,
                                    mode: l.BYTE,
                                    length: r(i.data)
                                }])
                        }
                    }
                    return t
                }(o(e, g.isKanjiModeEnabled())), n), s = p.find_path(i.map, "start", "end"), u = [], c = 1; c < s.length - 1; c++) u.push(i.table[s[c]].node);
            return t.fromArray(function(e) {
                return e.reduce(function(e, t) {
                    var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                    return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
                }, [])
            }(u))
        }, t.rawSplit = function(e) {
            return t.fromArray(o(e, g.isKanjiModeEnabled()))
        }
    },
    1351: function(e, t, n) {
        function r(e) {
            this.mode = i.NUMERIC, this.data = e.toString()
        }
        var i = n(1325);
        r.getBitsLength = function(e) {
            return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
        }, r.prototype.getLength = function() {
            return this.data.length
        }, r.prototype.getBitsLength = function() {
            return r.getBitsLength(this.data.length)
        }, r.prototype.write = function(e) {
            var t, n, r;
            for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);
            var i = this.data.length - t;
            i > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, 3 * i + 1))
        }, e.exports = r
    },
    1352: function(e, t, n) {
        function r(e) {
            this.mode = i.ALPHANUMERIC, this.data = e
        }
        var i = n(1325),
            o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
        r.getBitsLength = function(e) {
            return 11 * Math.floor(e / 2) + e % 2 * 6
        }, r.prototype.getLength = function() {
            return this.data.length
        }, r.prototype.getBitsLength = function() {
            return r.getBitsLength(this.data.length)
        }, r.prototype.write = function(e) {
            var t;
            for (t = 0; t + 2 <= this.data.length; t += 2) {
                var n = 45 * o.indexOf(this.data[t]);
                n += o.indexOf(this.data[t + 1]), e.put(n, 11)
            }
            this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
        }, e.exports = r
    },
    1353: function(e, t, n) {
        function r(e) {
            this.mode = o.BYTE, this.data = new i(e)
        }
        var i = n(1326),
            o = n(1325);
        r.getBitsLength = function(e) {
            return 8 * e
        }, r.prototype.getLength = function() {
            return this.data.length
        }, r.prototype.getBitsLength = function() {
            return r.getBitsLength(this.data.length)
        }, r.prototype.write = function(e) {
            for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
        }, e.exports = r
    },
    1354: function(e, t, n) {
        function r(e) {
            this.mode = i.KANJI, this.data = e
        }
        var i = n(1325),
            o = n(1324);
        r.getBitsLength = function(e) {
            return 13 * e
        }, r.prototype.getLength = function() {
            return this.data.length
        }, r.prototype.getBitsLength = function() {
            return r.getBitsLength(this.data.length)
        }, r.prototype.write = function(e) {
            var t;
            for (t = 0; t < this.data.length; t++) {
                var n = o.toSJIS(this.data[t]);
                if (n >= 33088 && n <= 40956) n -= 33088;
                else {
                    if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    n -= 49472
                }
                e.put(n = 192 * (n >>> 8 & 255) + (255 & n), 13)
            }
        }, e.exports = r
    },
    1355: function(e, t, n) {
        "use strict";
        var r = {
            single_source_shortest_paths: function(e, t, n) {
                var i = {},
                    o = {};
                o[t] = 0;
                var a = r.PriorityQueue.make();
                a.push(t, 0);
                for (var s, l, u, c, h, f, d; !a.empty();) {
                    c = (s = a.pop()).cost, h = e[l = s.value] || {};
                    for (u in h) h.hasOwnProperty(u) && (f = c + h[u], d = o[u], (void 0 === o[u] || d > f) && (o[u] = f, a.push(u, f), i[u] = l))
                }
                if (void 0 !== n && void 0 === o[n]) {
                    var g = ["Could not find a path from ", t, " to ", n, "."].join("");
                    throw new Error(g)
                }
                return i
            },
            extract_shortest_path_from_predecessor_list: function(e, t) {
                for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
                return n.reverse(), n
            },
            find_path: function(e, t, n) {
                var i = r.single_source_shortest_paths(e, t, n);
                return r.extract_shortest_path_from_predecessor_list(i, n)
            },
            PriorityQueue: {
                make: function(e) {
                    var t, n = r.PriorityQueue,
                        i = {};
                    e = e || {};
                    for (t in n) n.hasOwnProperty(t) && (i[t] = n[t]);
                    return i.queue = [], i.sorter = e.sorter || n.default_sorter, i
                },
                default_sorter: function(e, t) {
                    return e.cost - t.cost
                },
                push: function(e, t) {
                    this.queue.push({
                        value: e,
                        cost: t
                    }), this.queue.sort(this.sorter)
                },
                pop: function() {
                    return this.queue.shift()
                },
                empty: function() {
                    return 0 === this.queue.length
                }
            }
        };
        e.exports = r
    },
    1356: function(e, t, n) {
        var r = n(1334);
        t.render = function(e, t, n) {
            var i = n,
                o = t;
            void 0 !== i || t && t.getContext || (i = t, t = void 0), t || (o = function() {
                try {
                    return document.createElement("canvas")
                } catch (e) {
                    throw new Error("You need to specify a canvas element")
                }
            }()), i = r.getOptions(i);
            var a = (e.modules.size + 2 * i.margin) * i.scale,
                s = o.getContext("2d"),
                l = s.createImageData(a, a);
            return r.qrToImageData(l.data, e, i.margin, i.scale, i.color),
                function(e, t, n) {
                    e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
                }(s, o, a), s.putImageData(l, 0, 0), o
        }, t.renderToDataURL = function(e, n, r) {
            var i = r;
            void 0 !== i || n && n.getContext || (i = n, n = void 0), i || (i = {});
            return t.render(e, n, i).toDataURL(i.type || "image/png", (i.rendererOpts || {}).quality)
        }
    },
    1357: function(e, t, n) {
        function r(e) {
            return 'fill="rgb(' + [e.r, e.g, e.b].join(",") + ')" fill-opacity="' + (e.a / 255).toFixed(2) + '"'
        }
        var i = n(1334);
        t.render = function(e, t) {
            var n = i.getOptions(t),
                o = e.modules.size,
                a = e.modules.data,
                s = (o + 2 * n.margin) * n.scale,
                l = '<?xml version="1.0" encoding="utf-8"?>\n';
            l += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n', l += '<svg version="1.1" baseProfile="full"', l += ' width="' + s + '" height="' + s + '"', l += ' viewBox="0 0 ' + s + " " + s + '"', l += ' xmlns="http://www.w3.org/2000/svg"', l += ' xmlns:xlink="http://www.w3.org/1999/xlink"', l += ' xmlns:ev="http://www.w3.org/2001/xml-events">\n', l += '<rect x="0" y="0" width="' + s + '" height="' + s + '" ' + r(n.color.light) + " />\n", l += '<defs><rect id="p" width="' + n.scale + '" height="' + n.scale + '" /></defs>\n', l += "<g " + r(n.color.dark) + ">\n";
            for (var u = 0; u < o; u++)
                for (var c = 0; c < o; c++)
                    if (a[u * o + c]) {
                        l += '<use x="' + (n.margin + c) * n.scale + '" y="' + (n.margin + u) * n.scale + '" xlink:href="#p" />\n'
                    } return l += "</g>\n", l += "</svg>"
        }
    }
});