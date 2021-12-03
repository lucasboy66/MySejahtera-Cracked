webpackJsonp([12], {
    1254: function(l, n, a) {
        "use strict";

        function e(l) {
            return i._29(0, [(l()(), i._5(0, 0, null, null, 5, "ion-slide", [], null, null, null, A.b, A.a)), i._4(1, 180224, null, 0, T.a, [i.k, i.F, R.a], null, null), (l()(), i._27(-1, 0, ["\n            "])), (l()(), i._5(3, 0, null, 0, 1, "img", [
                ["alt", ""],
                ["imageCache", ""],
                ["src-fallback", "assets/img/no-image.png"],
                ["style", "max-height: 80vh;"]
            ], [
                [8, "id", 0]
            ], [
                [null, "pinch"],
                [null, "load"],
                [null, "error"]
            ], function(l, n, a) {
                var e = !0,
                    t = l.component;
                if ("load" === n) {
                    e = !1 !== i._17(l, 4).onLoad() && e
                }
                if ("error" === n) {
                    e = !1 !== i._17(l, 4).onError() && e
                }
                if ("pinch" === n) {
                    e = !1 !== t.pinched(a) && e
                }
                return e
            }, null, null)), i._4(4, 540672, null, 0, E.a, [M.a, i.k, j.a], {
                cache: [0, "cache"],
                zoom: [1, "zoom"]
            }, null), (l()(), i._27(-1, 0, ["\n        "]))], function(l, n) {
                l(n, 4, 0, n.context.$implicit, !0)
            }, function(l, n) {
                l(n, 3, 0, "coachinEnlargeAndSaveImg" + n.context.index)
            })
        }

        function t(l) {
            return i._29(0, [i._25(402653184, 1, {
                slides: 0
            }), (l()(), i._5(1, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), i._4(2, 16384, null, 0, O.a, [z.a, i.k, i.F, [2, L.a]], null, null), (l()(), i._27(-1, null, ["\n    "])), (l()(), i._5(4, 0, null, null, 7, "ion-navbar", [
                ["class", "toolbar"],
                ["color", "theme"]
            ], [
                [8, "hidden", 0],
                [2, "statusbar-padding", null]
            ], null, null, q.b, q.a)), i._4(5, 49152, null, 0, N.a, [W.a, [2, L.a],
                [2, B.a], z.a, i.k, i.F
            ], {
                color: [0, "color"]
            }, null), (l()(), i._27(-1, 3, ["\n        "])), (l()(), i._5(7, 0, null, 3, 3, "ion-title", [], [
                [8, "id", 0]
            ], null, null, G.b, G.a)), i._4(8, 49152, null, 0, J.a, [z.a, i.k, i.F, [2, V.a],
                [2, N.a]
            ], null, null), (l()(), i._27(9, 0, [" ", " "])), i._20(131072, s.i, [s.j, i.g]), (l()(), i._27(-1, 3, ["\n    "])), (l()(), i._27(-1, null, ["\n"])), (l()(), i._27(-1, null, ["\n\n"])), (l()(), i._5(14, 0, null, null, 9, "ion-content", [], [
                [2, "statusbar-padding", null],
                [2, "has-refresher", null]
            ], null, null, Y.b, Y.a)), i._4(15, 4374528, null, 0, $.a, [z.a, H.a, K.a, i.k, i.F, W.a, Q.a, i.y, [2, L.a],
                [2, B.a]
            ], null, null), (l()(), i._27(-1, 1, ["\n    "])), (l()(), i._5(17, 0, null, 1, 5, "ion-slides", [
                ["centeredSlides", "true"],
                ["effect", "slide"],
                ["pager", "true"]
            ], null, [
                [null, "ionSlideDidChange"]
            ], function(l, n, a) {
                var e = !0;
                if ("ionSlideDidChange" === n) {
                    e = !1 !== l.component.slideChanged() && e
                }
                return e
            }, X.b, X.a)), i._4(18, 1228800, [
                [1, 4],
                ["mySlider", 4]
            ], 0, R.a, [z.a, H.a, i.y, [2, L.a], i.k, i.F], {
                effect: [0, "effect"],
                initialSlide: [1, "initialSlide"],
                pager: [2, "pager"],
                centeredSlides: [3, "centeredSlides"]
            }, {
                ionSlideDidChange: "ionSlideDidChange"
            }), (l()(), i._27(-1, 0, ["\n        "])), (l()(), i._0(16777216, null, 0, 1, null, e)), i._4(21, 802816, null, 0, Z.i, [i.O, i.L, i.t], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(), i._27(-1, 0, ["\n    "])), (l()(), i._27(-1, 1, ["\n"])), (l()(), i._27(-1, null, ["\n\n"])), (l()(), i._5(25, 0, null, null, 11, "ion-footer", [
                ["class", "sticky-footer"]
            ], null, null, null, null, null)), i._4(26, 16384, null, 0, ll.a, [z.a, i.k, i.F, [2, L.a]], null, null), (l()(), i._27(-1, null, ["\n    "])), (l()(), i._5(28, 0, null, null, 7, "ion-toolbar", [
                ["class", "toolbar"]
            ], [
                [2, "statusbar-padding", null]
            ], null, null, nl.b, nl.a)), i._4(29, 49152, null, 0, V.a, [z.a, i.k, i.F], null, null), (l()(), i._27(-1, 3, ["\n        "])), (l()(), i._5(31, 0, null, 3, 3, "button", [
                ["color", "btn-primary"],
                ["full", ""],
                ["ion-button", ""],
                ["solid", ""]
            ], [
                [8, "id", 0],
                [8, "disabled", 0]
            ], [
                [null, "click"]
            ], function(l, n, a) {
                var e = !0;
                if ("click" === n) {
                    e = !1 !== l.component.download() && e
                }
                return e
            }, al.b, al.a)), i._4(32, 1097728, null, 0, el.a, [
                [8, ""], z.a, i.k, i.F
            ], {
                color: [0, "color"],
                solid: [1, "solid"],
                full: [2, "full"]
            }, null), (l()(), i._27(33, 0, ["", ""])), i._20(131072, s.i, [s.j, i.g]), (l()(), i._27(-1, 3, ["\n    "])), (l()(), i._27(-1, null, ["\n"]))], function(l, n) {
                var a = n.component;
                l(n, 5, 0, "theme");
                l(n, 18, 0, "slide", a.index, "true", "true");
                l(n, 21, 0, a.images);
                l(n, 32, 0, "btn-primary", "", "")
            }, function(l, n) {
                var a = n.component;
                l(n, 4, 0, i._17(n, 5)._hidden, i._17(n, 5)._sbPadding);
                l(n, 7, 0, "imageGellery");
                l(n, 9, 0, i._28(n, 9, 0, i._17(n, 10).transform("Announcement")));
                l(n, 14, 0, i._17(n, 15).statusbarPadding, i._17(n, 15)._hasRefresher);
                l(n, 28, 0, i._17(n, 29)._sbPadding);
                l(n, 31, 0, "coachinEnlargeAndSaveDownBtn", a.isDownloadDisabled);
                l(n, 33, 0, i._28(n, 33, 0, i._17(n, 34).transform("Download")))
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = a(1),
            u = (a(0), a(6), a(11)),
            s = a(9),
            o = a(52),
            r = a(422),
            d = a(21),
            c = a(423),
            _ = a(65),
            h = a(12),
            g = function() {
                function l(l, n, a, e, t, i, u, s, o, r, d, c, _) {
                    this.navCtrl = l, this.navParams = n, this.UserUtils = a, this.translate = e, this.viewCtrl = t, this.file = i, this.platform = u, this.photoLib = s, this.toastCtrl = o, this.ReusableUtils = r, this.alertCtrl = d, this.DataAccess = c, this.socialSharing = _, this.images = [], this.isDownloadDisabled = !1;
                    try {
                        this.images = this.navParams.get("images"), this.index = this.navParams.get("index")
                    } catch (l) {}
                }
                return l.prototype.closePage = function() {
                    this.navCtrl.pop()
                }, l.prototype.pinched = function(l) {}, l.prototype.ionViewDidEnter = function() {
                    this.slides.slideTo(this.index, 500)
                }, l.prototype.closeEnlargeAndSaveModal = function() {
                    this.viewCtrl.dismiss()
                }, l.prototype.slideChanged = function() {
                    this.currentIndex = this.slides.getActiveIndex()
                }, l.prototype.download = function() {
                    var l = this;
                    try {
                        var n;
                        n = this.currentIndex ? this.currentIndex < this.images.length ? this.images[this.currentIndex] : this.images[this.currentIndex - 1] : this.images[this.index];
                        var a = "",
                            e = "",
                            t = "",
                            i = "";
                        a = l.ReusableUtils.getTranslatedString("mediaPermission", {}), e = l.ReusableUtils.getTranslatedString("mediaPermissionMessage", {}), t = l.ReusableUtils.getTranslatedString("ok", {}), i = l.ReusableUtils.getTranslatedString("cancel", {});
                        l.alertCtrl.create({
                            title: a,
                            message: e,
                            buttons: [{
                                text: i,
                                handler: function() {}
                            }, {
                                text: t,
                                handler: function() {
                                    l.downloadImage(n)
                                }
                            }]
                        }).present()
                    } catch (l) {}
                }, l.prototype.downloadImage = function(l) {
                    var n, a = this,
                        e = l.split("/").pop();
                    if (a.platform.is("ios")) a.share();
                    else {
                        if (!a.platform.is("android")) return this.isDownloadDisabled = !1, !1;
                        n = cordova.file.externalRootDirectory + "download/" + _.a.folderName + "/" + e, a.DataAccess.downloadFile(l, n).then(function(l) {
                            a.isDownloadDisabled = !1, cordova.plugins.MediaScannerPlugin.scanFile(n);
                            var e = a.UserUtils.getTranslatedString("downloadedSuccessfully", {});
                            a.ReusableUtils.showToastWithOk(e), a.closeEnlargeAndSaveModal()
                        }).catch(function(l) {
                            a.isDownloadDisabled = !1
                        })
                    }
                }, l.prototype.share = function() {
                    var l = this;
                    l.socialSharing.saveToPhotoAlbum(this.currentIndex ? this.currentIndex < this.images.length ? this.images[this.currentIndex] : this.images[this.currentIndex - 1] : this.images[this.index]).then(function(n) {
                        l.isDownloadDisabled = !1;
                        var a = l.UserUtils.getTranslatedString("downloadedSuccessfully", {});
                        l.ReusableUtils.showToastWithOk(a), l.closeEnlargeAndSaveModal()
                    }, function(n) {
                        l.isDownloadDisabled = !1
                    })
                }, l
            }(),
            f = a(219),
            p = a(220),
            m = a(138),
            b = a(176),
            v = a(218),
            w = b.b,
            S = function() {
                return function() {}
            }(),
            y = a(773),
            D = a(774),
            x = a(775),
            k = a(776),
            C = a(777),
            F = a(778),
            I = a(779),
            U = a(780),
            P = a(781),
            A = a(1363),
            T = a(414),
            R = a(292),
            E = a(177),
            M = a(85),
            j = a(81),
            O = a(102),
            z = a(3),
            L = a(7),
            q = a(140),
            N = a(75),
            W = a(18),
            B = a(16),
            G = a(139),
            J = a(103),
            V = a(80),
            Y = a(67),
            $ = a(36),
            H = a(5),
            K = a(14),
            Q = a(47),
            X = a(1364),
            Z = a(10),
            ll = a(95),
            nl = a(159),
            al = a(37),
            el = a(27),
            tl = a(17),
            il = a(104),
            ul = a(116),
            sl = i._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }),
            ol = i._1("ng-component", g, function(l) {
                return i._29(0, [(l()(), i._5(0, 0, null, null, 1, "ng-component", [], null, null, null, t, sl)), i._4(1, 49152, null, 0, g, [B.a, tl.a, u.a, s.j, L.a, o.a, H.a, r.a, il.a, d.a, ul.a, h.a, c.a], null, null)], null, null)
            }, {}, {}, []),
            rl = a(30),
            dl = a(31),
            cl = a(221),
            _l = a(402),
            hl = a(222),
            gl = a(158);
        a.d(n, "EnlargeAndSaveModuleNgFactory", function() {
            return fl
        });
        var fl = i._2(S, [], function(l) {
            return i._13([i._14(512, i.i, i.Y, [
                [8, [y.a, D.a, x.a, k.a, C.a, F.a, I.a, U.a, P.a, ol]],
                [3, i.i], i.w
            ]), i._14(4608, Z.l, Z.k, [i.v, [2, Z.u]]), i._14(4608, rl.u, rl.u, []), i._14(4608, rl.d, rl.d, []), i._14(5120, s.f, w, [m.c]), i._14(4608, s.c, s.e, []), i._14(4608, s.h, s.d, []), i._14(4608, s.b, s.a, []), i._14(4608, s.j, s.j, [s.m, s.f, s.c, s.h, s.b, s.k, s.l]), i._14(4608, dl.a, dl.a, []), i._14(512, Z.b, Z.b, []), i._14(512, cl.a, cl.a, []), i._14(512, rl.s, rl.s, []), i._14(512, rl.g, rl.g, []), i._14(512, rl.q, rl.q, []), i._14(512, _l.a, _l.a, []), i._14(512, p.a, p.a, []), i._14(512, hl.a, hl.a, []), i._14(512, s.g, s.g, []), i._14(512, v.a, v.a, []), i._14(512, f.a, f.a, []), i._14(512, _l.b, _l.b, []), i._14(512, S, S, []), i._14(256, s.l, void 0, []), i._14(256, s.k, void 0, []), i._14(256, gl.a, g, [])])
        })
    },
    1363: function(l, n, a) {
        "use strict";

        function e(l) {
            return t._29(2, [(l()(), t._5(0, 0, null, null, 1, "div", [
                ["class", "slide-zoom"]
            ], null, null, null, null, null)), t._16(null, 0)], null, null)
        }
        a.d(n, "a", function() {
            return i
        }), n.b = e;
        var t = a(1),
            i = t._3({
                encapsulation: 2,
                styles: [],
                data: {}
            })
    },
    1364: function(l, n, a) {
        "use strict";

        function e(l) {
            return t._29(2, [(l()(), t._5(0, 0, null, null, 3, "div", [
                ["class", "swiper-container"]
            ], [
                [1, "dir", 0]
            ], null, null, null, null)), (l()(), t._5(1, 0, null, null, 1, "div", [
                ["class", "swiper-wrapper"]
            ], null, null, null, null, null)), t._16(null, 0), (l()(), t._5(3, 0, null, null, 0, "div", [
                ["class", "swiper-pagination"]
            ], [
                [2, "hide", null]
            ], null, null, null, null))], null, function(l, n) {
                var a = n.component;
                l(n, 0, 0, a._rtl ? "rtl" : null);
                l(n, 3, 0, !a.pager)
            })
        }
        a.d(n, "a", function() {
            return i
        }), n.b = e;
        var t = a(1),
            i = (a(3), a(5), a(7), t._3({
                encapsulation: 2,
                styles: [],
                data: {}
            }))
    }
});