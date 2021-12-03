# MySejahtera-Cracked
Sebuah projek kajian terbuka terhadap Aplikasi MySejahtera yang selalu digunakan oleh rakyat Malaysia sejak pandemik Covid-19. Kajian ini dibuat untuk tujuan pelajaran semata-mata dan bukanlah untuk menggodam atau clone aplikasi untuk dapatkan sijil vaksi palsu.

Projek ini dijalankan oleh perorangan, Mr Hery (saya sendiri dan hanya saya), tidak melibatkan mana-mana pihak samada mereka yang like, form, starred dari repos ini.

## Pengenalan MySejahtera
Aplikasi MySejahtera adalah sebuah aplikasi yang digunakan untuk kerajaan Malaysia menjejak pergerakan rakyat Malaysia dan beri notifikasi/informasi pada pengguna tentang keselamatan sesebuah tempat itu dari wabak Covid-19. Aplikasi ini dibangunkan pada tahun 2020 oleh sebuah syarikat di Singapore KPISoft.com (bukti ada pada code) menggukan teknologi hybrid Cordova + iOnic Framework. Tahap keselamatan aplikasi ini adalah MEMUASKAN - 5/10 (pendapat saya), tidak terlalu strictly secure dan tidak pula too easy to hack.

# Findings
Berikut adalah beberapa perkara major yang saya keluarkan dan rumuskan dalam projek ini. Maklumat ini akan dikemaskini dari masa ke semasa mengikut `mood` dan kemampuan saya.

## 1. Maklumat Pembangunan MySejahtera
- Framework: iOnic 3.9.10 + Cordova 6.1.0 - Rujuk: `mysejahtera/assets/www/index.html` dan `mysejahtera/assets/www/assets/manifest.json`
- Developer: KPISoft - Rujuk: `mysejahtera/assets/www/manifest.json`
- Lain-lain Framework: highstock, map.js, highcharts-more, solid-gauge, funnel, bullet, treemap, heatmap, hammer, polyfill dan banyak lagi - Rujuk: `mysejahtera/assets/www/index.html`
- Path Application: `assets/www`
- Path Certificate: `assets/www/certificates`
- Path Cordova Plugin: `assets/www/plugins`
- Path Javascript (setiap module dalam MySejahtera): `assets/www/build` - Bermula dari `main.js` - Rujuk: `mysejahtera/assets/www/index.html`
- Database: SQLite (DB Name: `__ionicstorage`) - Location: `default`

Main javascript (app logic) di compile dengan WebPack dan file `main.js` adalah file utama bagi app ini.

## 2. App Certificate
Aplikasi ini menyimpan 2 certificate dan salah satunya adalah untuk kegunaan bagi google service. Certificate ini selalunya digunakan untuk indentity verification di server side/client side. Secara teorinya, hanya aplikasi yang disijilkan (certified) sahaja boleh buat request pada server atau sebaliknya.

- Path Certificate Google: `assets/www/certificates/GoogleCer.cer`
Berikut adalah maklumat terperinci mengenai certificate ini 
(diambil dari Windows 10 Certificate Viewer - default)
```
This certificate has expired or is not yet valid
Issued to: upload.video.google.com
Issued by: GTS CA 1O1
Valid from 13 Apr 2021 to 6 Jul 2021
Version: v3
Serial: 00c385aaf86edaa0ce050000000087bc16
Sign. Alg.: sha256RSA
Hash Alg.: sha256
...
Enhanced Key Usage: Server Authentication (1.3.6.1.5.5.7.3.1)
Thumbprints: 15696f01b77b1783164d11270c743721a4818855
...
Public Key: 04 63 1c 1a ad ed 4d fc 10 44 b9 f7 1c b9 ae f6 cc 1f f1 7a 8b 7f 71 5f 1b 44 db 00 67 97 76 cb 22 3a e3 7c 9c f9 0a e4 ea e2 f9 f6 1e 9a 18 ea 13 21 07 d9 79 f6 ec a6 4a 31 ce d3 cf 4e 93 0e a0
Public Key Param.: ECDSA_P256
```
- Path Certificate MySejahtera:
Berikut adalah maklumat terperinci mengenai certificate ini 
(diambil dari Windows 10 Certificate Viewer - default)
```
This certificate is intended for the following purpose(s):
  - Proves your identity to remote computer
  - Ensures the identity of a remote computer
  ...
Issued to: mysejahtera.malaysia.gov.my
Issued by: Entrust Certification Authority - L1M
Valid from 25 Mar 2021 to 25 Mar 2022
Verison: v3
Serial: 49eaaaff8dabc7c40000000054d118d8
Sign. Alg.: sha256RSA
Hash Alg.: sha256
...
Enhanced Key Usage: Server Authentication (1.3.6.1.5.5.7.3.1) Client Authentication (1.3.6.1.5.5.7.3.2)
Thumbprint: 138159ece145516b78c462fb09f40d3441b971ba
...
Public Key (RSA 2048): 30 82 01 0a 02 82 01 01 00 e8 85 18 b2 0d 33 72 ff 08 1b 02 25 75 f9 1a e4 71 69 3a ed fb c8 78 fe c3 be 18 aa ac 3c c3 cb a6 09 3b cb ef 1f e8 3c 00 66 36 22 d4 e1 88 1b bd 13 77 b4 ff 19 ee 47 39 81 2d cf 08 87 06 07 9a e9 86 5a e3 09 17 bd 80 cd 08 f0 a8 3e 45 e2 ea cf 92 cb 91 4f d1 18 6c 3a e2 62 35 90 55 41 eb 79 04 a8 1b 69 98 c4 60 4d 2c 0f 18 e5 59 14 50 36 0c 37 1e d9 cb 4b 77 5d 4b d6 8d 32 a6 c2 d9 04 a7 a7 9b 6d a4 85 1c 31 c8 26 66 3a 54 3b 5e c7 3f 3c 42 b7 3c ab 67 9d 85 93 5c 0f c1 93 08 72 de 06 9f 08 0f 80 1b 24 e7 4d a5 f5 e2 cc 23 da f7 a3 da 48 34 d5 a8 3a a5 f7 66 6b 73 4a b1 b5 d2 f5 14 9a fc 91 e7 bd 6a 0f 8e 0d 25 e1 81 4f d3 03 31 9d be 26 30 07 af 8c f7 ce 0f 24 87 0a a7 10 f5 26 e6 24 f5 05 b3 ba aa 28 f9 6d ed df fc f7 d2 b7 b0 a3 52 be 09 e1 39 25 c2 f3 02 03 01 00 01
Public Key Param.: 05 00
```
Certificate ini boleh dikitar semula dan digunakan pada app yang lain pada build yang sama (mampu di-clone dan dibuat fake app). Tetapi penggunaan certficate ini adalah untuk host verification sahaja (bukan encrpytion etc.), maksudnya tak kira berapa app clone dibuat, data tetap sampai pada server MySejahtera, sama seperti buka URL mysejahtera pada web browser lain-lain, tetapi tetap akses pada tempat yang sama.

## 3. JS Beautified & Extraction
Setiap webpack js dipecahkan ikut module (per id) dan app ini terkandung lebih 1000 module berada dalam lebih 80 (0.js-87.js + main.js) file js. Kerja-kerja beautify js code dibuat menggunakan online tool https://beautifier.io/. Kerja-kerja retrace semula logic flow agak sukar dan ambil masa kerana saiz code yang sangat besar dan file yang sangat banyak. Sementara ini, kerja-kerja extraction dibuat untuk dapatkan senarai endpoint API/URL Web, senarai host dan senarai function/method sahaja dan diletakkan dalam file berasingan.

- Senarai Method/Functions: `zipped/functions.txt`
- Senarai End Point/URL: `zipped/urls.txt`
- Senarai Host: `zipped/host.txt`
- Senarai Email: `zipped/email.txt`
- Senarai Table Database: `zipped/tables.txt`

## 4. Application Mode & Request Routing
Berdasarkan senarai host diatas, aplikasi MySejahtera mempunyai 2 mode, dev (untuk development) & production (pengguna awam). Berikut adalah snippet setting mereka:
```
//build/main.js line 19883
var l = {
    prodLink: "https://skylarkmr.kpisoft.com/mobile-registry/v1/users?userId=",
    devLink: "https://mysejahtera.malaysia.gov.my",
    ...
    mode: "PROD"
    ...
}
```
Pada pandangan peribadi saya (berdasarkan setting diatas), kemungkinan aplikasi yang dalam production mode aplikasi akan berinteraksi dengan host `skylarkmr.kpisoft.com` dan untuk development mode menggunakan host `mysejahtera.malaysia.gov.my`. Data-data pengguna awam dihantar ke server `skylarkmr.kpisoft.com` bukan `mysejahtera.malaysia.gov.my`.

## 5. User Validation
Sementara permulaan proses extraction dibuat, satu email dijumpai dalam `main.js`. Email `anderson@kpisoft.com` berada dalam method `checkForUsername` dalam `main.js` line 20067. Snippet:
```
...
}, e.prototype.checkForUsername = function() {
    var e = this;
    return new Promise(function(n, t) {
        e.db.executeSql("SELECT * FROM login", []).then(function(e, t) {
            if (e.rows.length > 0) {
                var l = e.rows.item(0);
                n("anderson@kpisoft.com" == l.username)
            } else n(!1)
        }, function(e) {
            t(e)
        })
    })
},
...
```
Berdasarkan code diatas, `checkForUsername` buat pemeriksaan username/email dan return `true` jika username adalah `anderson@kpisoft.com` dan sebaliknya return `false`.

## 6. AES Encryption Implementation
Berdasarkan code yang teliti, aplikasi ini menggunakan AES Encryption untuk encryption JSON String sebelum dihantar ke server dan decrypt semula di server side. Ini adalahlangkah keselamatan yang sangat baik bagi aplkasi mobile bagi mengelakkan MITM Attack (man-in-the-middle). Penggunaan AES ini memerlukan 3 input, iaitu:
- AES Key (Password) wajib 32 Karakter (selalunya gunakan md5 hash)
- AES IV Key (Initial Vector) wajib 16 karakter (selalunya random block)
- Data untuk dienkrypt

Malangnya, aplikasi ini 'hard-coded' credential AES Encryption ini dalam aplikasi ini sendiri. Boleh lihat dalam `main.js` module 88 (initial module) pada line 34674, kita boleh lihat AES Key dan IV Key ditulis tanpa sanitize dan menggunakan 'pure-string'/'readable-string'. Snippet:
```
...
,this.secureKey = "5a11cc4cb8472a3195349dacda4aca6b", this.secureIV = "dfa089ea35e42d5a",
...
```
Dan function/method encrypt & decrypt:
```
e.prototype.encrypt = function(e) {
  var n = this;
  return new Promise(function(t, a) {
      try {
          var i = l.enc.Utf8.parse(n.tokenFromUI),
              r = l.enc.Utf8.parse(n.tokenFromUI);
          t(l.AES.encrypt(e, i, {
              keySize: 16,
              iv: r,
              mode: l.mode.ECB,
              padding: l.pad.Pkcs7
          }).toString())
      } catch (e) {
          a(e)
      }
  })
}, e.prototype.decrypt = function(e) {
  var n = this;
  return new Promise(function(t, a) {
      try {
          var i = l.enc.Utf8.parse(n.tokenFromUI),
              r = l.enc.Utf8.parse(n.tokenFromUI);
          t(l.AES.decrypt(e, i, {
              keySize: 16,
              iv: r,
              mode: l.mode.ECB,
              padding: l.pad.Pkcs7
          }).toString(l.enc.Utf8).toString())
      } catch (e) {
          a(e)
      }
  })
},
...
```
Berdasarkan code diatas, kita dapati AES crendential adalah seperti berikut:
- AES Key: 5a11cc4cb8472a3195349dacda4aca6b (32 Karakter dari MD5)
- AES IV Key: dfa089ea35e42d5a

Apa yang menjadi masalah adalah, jika hacker dapat crendential ini, maka ia dapat memudahkan kerja MITM attack kerana AES IV itu sendiri tidak random dan ianya pure string (text yang boleh dibaca dan copy paste dimana-mana). Pada pendapat saya, walaupun untuk generate random IV Key adalah sukar kerana encryption ini berlaku pada client device, tetapi kita boleh generate IV Key tersebut di server side dan bukan pure string, kemudian encode menggunakan base64. Tidak dinafikan dengan cara ini masih juga hacker mampu lakukan MITM Attack tetapi cara ini mampu menyukarkan hacker kerana perlu membuat IV Key request kalau nak decrypt apa-apa data. 

[UPDATED] AES Ecryption, sementara ini dilihat digunakan untuk scan QR Code sahaja. Penggunaan IV Key yang tidak random (untuk QR Code) tidak menjejaskan keselamatan aplikasi.

## 7. Server Footprinting
Kerja dalam proses

## 8. Cordova App Rebuild (Clone)
Kerja dalam proses

## 9. XSS Attack
Kerja dalam proses
