var brfv5Module = (function () {
  var _scriptDir =
    typeof document !== "undefined" && document.currentScript ?
    document.currentScript.src :
    undefined;
  if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
  return function (brfv5Module) {
    brfv5Module = brfv5Module || {};

    ("use strict");
    var Module = typeof brfv5Module !== "undefined" ? brfv5Module : {};
    (function (lib) {
      "use strict";
      lib["isWASM"] = true;
      lib["isASMJS"] = false;
      lib["WebAssemblySupport"] = (function () {
        try {
          if (
            typeof WebAssembly === "object" &&
            typeof WebAssembly.instantiate === "function"
          ) {
            var bin =
              new Uint8Array([
              0,
              97,
              115,
              109,
              1,
              0,
              0,
              0,
              1,
              6,
              1,
              96,
              1,
              127,
              1,
              127,
              3,
              2,
              1,
              0,
              5,
              3,
              1,
              0,
              1,
              7,
              8,
              1,
              4,
              116,
              101,
              115,
              116,
              0,
              0,
              10,
              16,
              1,
              14,
              0,
              32,
              0,
              65,
              1,
              54,
              2,
              0,
              32,
              0,
              40,
              2,
              0,
              11,
            ]);
            var mod = new WebAssembly.Module(bin);
            if (mod instanceof WebAssembly.Module) {
              var inst = new WebAssembly.Instance(mod, {});
              return (
                inst instanceof WebAssembly.Instance &&
                inst.exports.test(4) !== 0
              );
            }
          }
        } catch (e) {}
        return false;
      })();
      if (!lib["WebAssemblySupport"]) {
        if (lib["binaryError"]) {
          lib["binaryError"]("WebAssembly is not supported");
        }
        throw "WebAssembly is not supported";
      }
    })(Module);
    (function (lib) {
      "use strict";
      lib["defaultValue"] = function (arg, val) {
        return typeof arg !== "undefined" ? arg : val;
      };
      if (typeof console !== "undefined") {
        lib["trace"] = console.log.bind(console);
        lib["error"] = console.error.bind(console);
        lib["warn"] = console.warn.bind(console);
      } else {
        lib["trace"] = function () {};
        lib["error"] = lib["trace"];
        lib["warn"] = lib["trace"];
      }
      lib["BRFv5Landmark"] = function (_x, _y) {
        this["x"] = lib["defaultValue"](_x, 0);
        this["y"] = lib["defaultValue"](_y, 0);
      };
      lib["BRFv5Landmark"]["prototype"]["setTo"] = function (_x, _y) {
        this["x"] = lib["defaultValue"](_x, 0);
        this["y"] = lib["defaultValue"](_y, 0);
      };
      lib["BRFv5Rectangle"] = function (_x, _y, _width, _height) {
        this["x"] = lib["defaultValue"](_x, 0);
        this["y"] = lib["defaultValue"](_y, 0);
        this["width"] = lib["defaultValue"](_width, 0);
        this["height"] = lib["defaultValue"](_height, 0);
      };
      lib["BRFv5Rectangle"]["prototype"]["setTo"] = function (
        _x,
        _y,
        _width,
        _height,
      ) {
        this["x"] = lib["defaultValue"](_x, 0);
        this["y"] = lib["defaultValue"](_y, 0);
        this["width"] = lib["defaultValue"](_width, 0);
        this["height"] = lib["defaultValue"](_height, 0);
      };
      lib["BRFv5State"] = {
        FACE_DETECTION: "face_detection",
        FACE_TRACKING: "face_tracking",
        RESET: "reset",
      };
      lib["BRFv5Face"] = function () {
        this["state"] = lib["BRFv5State"]["RESET"];
        this["confidence"] = 0;
        this["landmarks"] = [];
        this["vertices"] = [];
        this["bounds"] = new lib["BRFv5Rectangle"](0, 0, 0, 0);
        this["scale"] = 1;
        this["translationX"] = 0;
        this["translationY"] = 0;
        this["rotationX"] = 0;
        this["rotationY"] = 0;
        this["rotationZ"] = 0;
      };
      lib["BRFv5Config"] = function () {
        this["imageConfig"] = {
          inputWidth: 640,
          inputHeight: 480
        };
        this["faceDetectionConfig"] = {
          regionOfInterest: new lib["BRFv5Rectangle"](10, 10, 620, 460),
          minFaceSize: 144,
          maxFaceSize: 480,
          faceSizeIncrease: 24,
          stepSize: 0,
          minNumNeighbors: 12,
          rectMergeFactor: 0.2,
          rectSkipFactor: 0.5,
          filterNoise: true,
        };
        this["faceTrackingConfig"] = {
          regionOfInterest: new lib["BRFv5Rectangle"](10, 10, 620, 460),
          numFacesToTrack: 1,
          numTrackingPasses: 3,
          minFaceScaleStart: 35,
          maxFaceScaleStart: 999,
          maxRotationXStart: 15,
          maxRotationYStart: 25,
          maxRotationZStart: 20,
          confidenceThresholdStart: 0.8,
          minFaceScaleReset: 20,
          maxFaceScaleReset: 420,
          maxRotationXReset: 35,
          maxRotationYReset: 45,
          maxRotationZReset: 999,
          confidenceThresholdReset: 0,
          enableStabilizer: true,
          enableFreeRotation: true,
        };
        this["enableFaceTracking"] = true;
      };
      lib["BRFv5Config"]["createInstance"] = function () {
        return new lib["BRFv5Config"]();
      };
    })(Module);
    (function (lib) {
      "use strict";
      lib["process"] = (function () {
        return (function () {
          function e(r, n, t) {
            function i(o, s) {
              if (!n[o]) {
                if (!r[o]) {
                  var f = "function" == typeof require && require;
                  if (!s && f) return f(o, !0);
                  if (a) return a(o, !0);
                  var v = new Error("Cannot find module '" + o + "'");
                  throw ((v.code = "MODULE_NOT_FOUND"), v);
                }
                var w = (n[o] = {
                  exports: {}
                });
                r[o][0].call(
                  w.exports,
                  function (e) {
                    var n = r[o][1][e];
                    return i(n || e);
                  },
                  w,
                  w.exports,
                  e,
                  r,
                  n,
                  t,
                );
              }
              return n[o].exports;
            }
            for (
              var a = "function" == typeof require && require, o = 0; o < t.length; o++
            )
              i(t[o]);
            return i;
          }
          return e;
        })()({
            1: [
              function (e, r, n) {
                var t = 4096;
                var i = 2 * t + 32;
                var a = 2 * t - 1;
                var +




                = new Uint32Array([
                  0,
                  1,
                  3,
                  7,
                  15,
                  31,
                  63,
                  127,
                  255,
                  511,
                  1023,
                  2047,
                  4095,
                  8191,
                  16383,
                  32767,
                  65535,
                  131071,
                  262143,
                  524287,
                  1048575,
                  2097151,
                  4194303,
                  8388607,
                  16777215,
                ]);

                function s(e) {
                  (this.buf_ = new Uint8Array(i)),
                  (this.input_ = e),
                  this.reset();
                }
                (s.READ_SIZE = t),
                (s.IBUF_MASK = a),
                (s.prototype.reset = function () {
                  (this.buf_ptr_ = 0),
                  (this.val_ = 0),
                  (this.pos_ = 0),
                  (this.bit_pos_ = 0),
                  (this.bit_end_pos_ = 0),
                  (this.eos_ = 0),
                  this.readMoreInput();
                  for (var e = 0; e < 4; e++)
                    (this.val_ |= this.buf_[this.pos_] << (8 * e)),
                    ++this.pos_;
                  return this.bit_end_pos_ > 0;
                }),
                (s.prototype.readMoreInput = function () {
                  if (this.bit_end_pos_ > 256) return;
                  else if (this.eos_) {
                    if (this.bit_pos_ > this.bit_end_pos_)
                      throw new Error(
                        "Unexpected end of input " +
                        this.bit_pos_ +
                        " " +
                        this.bit_end_pos_,
                      );
                  } else {
                    var e = this.buf_ptr_;
                    var r = this.input_.read(this.buf_, e, t);
                    if (r < 0) throw new Error("Unexpected end of input");
                    if (r < t) {
                      this.eos_ = 1;
                      for (var n = 0; n < 32; n++) this.buf_[e + r + n] = 0;
                    }
                    if (0 === e) {
                      for (var n = 0; n < 32; n++)
                        this.buf_[(t << 1) + n] = this.buf_[n];
                      this.buf_ptr_ = t;
                    } else this.buf_ptr_ = 0;
                    this.bit_end_pos_ += r << 3;
                  }
                }),
                (s.prototype.fillBitWindow = function () {
                  while (this.bit_pos_ >= 8)
                    (this.val_ >>>= 8),
                    (this.val_ |= this.buf_[this.pos_ & a] << 24),
                    ++this.pos_,
                    (this.bit_pos_ = (this.bit_pos_ - 8) >>> 0),
                    (this.bit_end_pos_ = (this.bit_end_pos_ - 8) >>> 0);
                }),
                (s.prototype.readBits = function (e) {
                  if (32 - this.bit_pos_ < e) this.fillBitWindow();
                  var r = (this.val_ >>> this.bit_pos_) & o[e];
                  return (this.bit_pos_ += e), r;
                }),
                (r.exports = s);
              },
              {},
            ],
            2: [
              function (e, r, n) {
                (n.lookup = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  4,
                  4,
                  0,
                  0,
                  4,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  8,
                  12,
                  16,
                  12,
                  12,
                  20,
                  12,
                  16,
                  24,
                  28,
                  12,
                  12,
                  32,
                  12,
                  36,
                  12,
                  44,
                  44,
                  44,
                  44,
                  44,
                  44,
                  44,
                  44,
                  44,
                  44,
                  32,
                  32,
                  24,
                  40,
                  28,
                  12,
                  12,
                  48,
                  52,
                  52,
                  52,
                  48,
                  52,
                  52,
                  52,
                  48,
                  52,
                  52,
                  52,
                  52,
                  52,
                  48,
                  52,
                  52,
                  52,
                  52,
                  52,
                  48,
                  52,
                  52,
                  52,
                  52,
                  52,
                  24,
                  12,
                  28,
                  12,
                  12,
                  12,
                  56,
                  60,
                  60,
                  60,
                  56,
                  60,
                  60,
                  60,
                  56,
                  60,
                  60,
                  60,
                  60,
                  60,
                  56,
                  60,
                  60,
                  60,
                  60,
                  60,
                  56,
                  60,
                  60,
                  60,
                  60,
                  60,
                  24,
                  12,
                  28,
                  12,
                  0,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  0,
                  1,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  2,
                  3,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  1,
                  1,
                  1,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  0,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  5,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  6,
                  7,
                  0,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  8,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  24,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  32,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  40,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  48,
                  56,
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                  31,
                  32,
                  33,
                  34,
                  35,
                  36,
                  37,
                  38,
                  39,
                  40,
                  41,
                  42,
                  43,
                  44,
                  45,
                  46,
                  47,
                  48,
                  49,
                  50,
                  51,
                  52,
                  53,
                  54,
                  55,
                  56,
                  57,
                  58,
                  59,
                  60,
                  61,
                  62,
                  63,
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                  31,
                  32,
                  33,
                  34,
                  35,
                  36,
                  37,
                  38,
                  39,
                  40,
                  41,
                  42,
                  43,
                  44,
                  45,
                  46,
                  47,
                  48,
                  49,
                  50,
                  51,
                  52,
                  53,
                  54,
                  55,
                  56,
                  57,
                  58,
                  59,
                  60,
                  61,
                  62,
                  63,
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                  31,
                  32,
                  33,
                  34,
                  35,
                  36,
                  37,
                  38,
                  39,
                  40,
                  41,
                  42,
                  43,
                  44,
                  45,
                  46,
                  47,
                  48,
                  49,
                  50,
                  51,
                  52,
                  53,
                  54,
                  55,
                  56,
                  57,
                  58,
                  59,
                  60,
                  61,
                  62,
                  63,
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                  31,
                  32,
                  33,
                  34,
                  35,
                  36,
                  37,
                  38,
                  39,
                  40,
                  41,
                  42,
                  43,
                  44,
                  45,
                  46,
                  47,
                  48,
                  49,
                  50,
                  51,
                  52,
                  53,
                  54,
                  55,
                  56,
                  57,
                  58,
                  59,
                  60,
                  61,
                  62,
                  63,
                  0,
                  0,
                  0,
                  0,
                  1,
                  1,
                  1,
                  1,
                  2,
                  2,
                  2,
                  2,
                  3,
                  3,
                  3,
                  3,
                  4,
                  4,
                  4,
                  4,
                  5,
                  5,
                  5,
                  5,
                  6,
                  6,
                  6,
                  6,
                  7,
                  7,
                  7,
                  7,
                  8,
                  8,
                  8,
                  8,
                  9,
                  9,
                  9,
                  9,
                  10,
                  10,
                  10,
                  10,
                  11,
                  11,
                  11,
                  11,
                  12,
                  12,
                  12,
                  12,
                  13,
                  13,
                  13,
                  13,
                  14,
                  14,
                  14,
                  14,
                  15,
                  15,
                  15,
                  15,
                  16,
                  16,
                  16,
                  16,
                  17,
                  17,
                  17,
                  17,
                  18,
                  18,
                  18,
                  18,
                  19,
                  19,
                  19,
                  19,
                  20,
                  20,
                  20,
                  20,
                  21,
                  21,
                  21,
                  21,
                  22,
                  22,
                  22,
                  22,
                  23,
                  23,
                  23,
                  23,
                  24,
                  24,
                  24,
                  24,
                  25,
                  25,
                  25,
                  25,
                  26,
                  26,
                  26,
                  26,
                  27,
                  27,
                  27,
                  27,
                  28,
                  28,
                  28,
                  28,
                  29,
                  29,
                  29,
                  29,
                  30,
                  30,
                  30,
                  30,
                  31,
                  31,
                  31,
                  31,
                  32,
                  32,
                  32,
                  32,
                  33,
                  33,
                  33,
                  33,
                  34,
                  34,
                  34,
                  34,
                  35,
                  35,
                  35,
                  35,
                  36,
                  36,
                  36,
                  36,
                  37,
                  37,
                  37,
                  37,
                  38,
                  38,
                  38,
                  38,
                  39,
                  39,
                  39,
                  39,
                  40,
                  40,
                  40,
                  40,
                  41,
                  41,
                  41,
                  41,
                  42,
                  42,
                  42,
                  42,
                  43,
                  43,
                  43,
                  43,
                  44,
                  44,
                  44,
                  44,
                  45,
                  45,
                  45,
                  45,
                  46,
                  46,
                  46,
                  46,
                  47,
                  47,
                  47,
                  47,
                  48,
                  48,
                  48,
                  48,
                  49,
                  49,
                  49,
                  49,
                  50,
                  50,
                  50,
                  50,
                  51,
                  51,
                  51,
                  51,
                  52,
                  52,
                  52,
                  52,
                  53,
                  53,
                  53,
                  53,
                  54,
                  54,
                  54,
                  54,
                  55,
                  55,
                  55,
                  55,
                  56,
                  56,
                  56,
                  56,
                  57,
                  57,
                  57,
                  57,
                  58,
                  58,
                  58,
                  58,
                  59,
                  59,
                  59,
                  59,
                  60,
                  60,
                  60,
                  60,
                  61,
                  61,
                  61,
                  61,
                  62,
                  62,
                  62,
                  62,
                  63,
                  63,
                  63,
                  63,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                ])),
                (n.lookupOffsets = new Uint16Array([
                  1024,
                  1536,
                  1280,
                  1536,
                  0,
                  256,
                  768,
                  512,
                ]));
              },
              {},
            ],
            3: [
              function (e, r, n) {
                var t = e("./streams").BrotliInput;
                var i = e("./streams").BrotliOutput;
                var a = e("./bit_reader");
                var o = e("./dictionary");
                var s = e("./huffman").HuffmanCode;
                var f = e("./huffman").BrotliBuildHuffmanTable;
                var v = e("./context");
                var w = e("./prefix");
                var d = e("./transform");
                var u = 8;
                var p = 16;
                var h = 256;
                var l = 704;
                var c = 26;
                var b = 6;
                var y = 2;
                var m = 8;
                var W = 255;
                var x = 1080;
                var U = 18;
                var E = new Uint8Array([
                  1,
                  2,
                  3,
                  4,
                  0,
                  5,
                  17,
                  6,
                  16,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                ]);
                var V = 16;
                var O = new Uint8Array([
                  3,
                  2,
                  1,
                  0,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  2,
                  2,
                  2,
                  2,
                  2,
                  2,
                ]);
                var N = new Int8Array([
                  0,
                  0,
                  0,
                  0,
                  -1,
                  1,
                  -2,
                  2,
                  -3,
                  3,
                  -1,
                  1,
                  -2,
                  2,
                  -3,
                  3,
                ]);
                var q = new Uint16Array([
                  256,
                  402,
                  436,
                  468,
                  500,
                  534,
                  566,
                  598,
                  630,
                  662,
                  694,
                  726,
                  758,
                  790,
                  822,
                  854,
                  886,
                  920,
                  952,
                  984,
                  1016,
                  1048,
                  1080,
                ]);

                function Y(e) {
                  var r;
                  if (0 === e.readBits(1)) return 16;
                  if (((r = e.readBits(3)), r > 0)) return 17 + r;
                  if (((r = e.readBits(3)), r > 0)) return 8 + r;
                  return 17;
                }

                function B(e) {
                  if (e.readBits(1)) {
                    var r = e.readBits(3);
                    if (0 === r) return 1;
                    else return e.readBits(r) + (1 << r);
                  }
                  return 0;
                }

                function R() {
                  (this.meta_block_length = 0),
                  (this.input_end = 0),
                  (this.is_uncompressed = 0),
                  (this.is_metadata = false);
                }

                function H(e) {
                  var r = new R();
                  var n;
                  var t;
                  var i;
                  if (
                    ((r.input_end = e.readBits(1)),
                      r.input_end && e.readBits(1))
                  )
                    return r;
                  if (((n = e.readBits(2) + 4), 7 === n)) {
                    if (((r.is_metadata = true), 0 !== e.readBits(1)))
                      throw new Error("Invalid reserved bit");
                    if (((t = e.readBits(2)), 0 === t)) return r;
                    for (i = 0; i < t; i++) {
                      var a = e.readBits(8);
                      if (i + 1 === t && t > 1 && 0 === a)
                        throw new Error("Invalid size byte");
                      r.meta_block_length |= a << (8 * i);
                    }
                  } else
                    for (i = 0; i < n; ++i) {
                      var o = e.readBits(4);
                      if (i + 1 === n && n > 4 && 0 === o)
                        throw new Error("Invalid size nibble");
                      r.meta_block_length |= o << (4 * i);
                    }
                  if ((++r.meta_block_length, !r.input_end && !r.is_metadata))
                    r.is_uncompressed = e.readBits(1);
                  return r;
                }

                function M(e, r, n) {
                  var i;
                  if (
                    (n.fillBitWindow(),
                      (r += (n.val_ >>> n.bit_pos_) & W),
                      (i = e[r].bits - m),
                      i > 0)
                  )
                    (n.bit_pos_ += m),
                    (r += e[r].value),
                    (r += (n.val_ >>> n.bit_pos_) & ((1 << i) - 1));
                  return (n.bit_pos_ += e[r].bits), e[r].value;
                }

                function A(e, r, n, t) {
                  var i = 0;
                  var a = u;
                  var o = 0;
                  var v = 0;
                  var w = 32768;
                  var d = [];
                  for (var h = 0; h < 32; h++) d.push(new s(0, 0));
                  f(d, 0, 5, e, U);
                  while (i < r && w > 0) {
                    var l = 0;
                    var c;
                    if (
                      (t.readMoreInput(),
                        t.fillBitWindow(),
                        (l += (t.val_ >>> t.bit_pos_) & 31),
                        (t.bit_pos_ += d[l].bits),
                        (c = 255 & d[l].value),
                        c < p)
                    ) {
                      if (((o = 0), (n[i++] = c), 0 !== c))
                        (a = c), (w -= 32768 >> c);
                    } else {
                      var b = c - 14;
                      var y;
                      var m;
                      var W = 0;
                      if (c === p) W = a;
                      if (v !== W)(o = 0), (v = W);
                      if (((y = o), o > 0))(o -= 2), (o <<= b);
                      if (((o += t.readBits(b) + 3), (m = o - y), i + m > r))
                        throw new Error(
                          "[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols",
                        );
                      for (var x = 0; x < m; x++) n[i + x] = v;
                      if (((i += m), 0 !== v)) w -= m << (15 - v);
                    }
                  }
                  if (0 !== w)
                    throw new Error("[ReadHuffmanCodeLengths] space = " + w);
                  for (; i < r; i++) n[i] = 0;
                }

                function g(e, r, n, t) {
                  var i = 0;
                  var a;
                  var o = new Uint8Array(e);
                  if ((t.readMoreInput(), (a = t.readBits(2)), 1 === a)) {
                    var v;
                    var w = e - 1;
                    var d = 0;
                    var u = new Int32Array(4);
                    var p = t.readBits(2) + 1;
                    while (w)(w >>= 1), ++d;
                    for (v = 0; v < p; ++v)
                      (u[v] = t.readBits(d) % e), (o[u[v]] = 2);
                    switch (((o[u[0]] = 1), p)) {
                      case 1:
                        break;
                      case 3:
                        if (u[0] === u[1] || u[0] === u[2] || u[1] === u[2])
                          throw new Error("[ReadHuffmanCode] invalid symbols");
                        break;
                      case 2:
                        if (u[0] === u[1])
                          throw new Error("[ReadHuffmanCode] invalid symbols");
                        o[u[1]] = 1;
                        break;
                      case 4:
                        if (
                          u[0] === u[1] ||
                          u[0] === u[2] ||
                          u[0] === u[3] ||
                          u[1] === u[2] ||
                          u[1] === u[3] ||
                          u[2] === u[3]
                        )
                          throw new Error("[ReadHuffmanCode] invalid symbols");
                        if (t.readBits(1))(o[u[2]] = 3), (o[u[3]] = 3);
                        else o[u[0]] = 2;
                    }
                  } else {
                    var v;
                    var h = new Uint8Array(U);
                    var l = 32;
                    var c = 0;
                    var b = [
                      new s(2, 0),
                      new s(2, 4),
                      new s(2, 3),
                      new s(3, 2),
                      new s(2, 0),
                      new s(2, 4),
                      new s(2, 3),
                      new s(4, 1),
                      new s(2, 0),
                      new s(2, 4),
                      new s(2, 3),
                      new s(3, 2),
                      new s(2, 0),
                      new s(2, 4),
                      new s(2, 3),
                      new s(4, 5),
                    ];
                    for (v = a; v < U && l > 0; ++v) {
                      var y = E[v];
                      var W = 0;
                      var x;
                      if (
                        (t.fillBitWindow(),
                          (W += (t.val_ >>> t.bit_pos_) & 15),
                          (t.bit_pos_ += b[W].bits),
                          (x = b[W].value),
                          (h[y] = x),
                          0 !== x)
                      )
                        (l -= 32 >> x), ++c;
                    }
                    if (!(1 === c || 0 === l))
                      throw new Error(
                        "[ReadHuffmanCode] invalid num_codes or space",
                      );
                    A(h, e, o, t);
                  }
                  if (((i = f(r, n, m, o, e)), 0 === i))
                    throw new Error(
                      "[ReadHuffmanCode] BuildHuffmanTable failed: ",
                    );
                  return i;
                }

                function F(e, r, n) {
                  var t;
                  var i;
                  return (
                    (t = M(e, r, n)),
                    (i = w.kBlockLengthPrefixCode[t].nbits),
                    w.kBlockLengthPrefixCode[t].offset + n.readBits(i)
                  );
                }

                function Z(e, r, n) {
                  var t;
                  if (e < V)(n += O[e]), (n &= 3), (t = r[n] + N[e]);
                  else t = e - V + 1;
                  return t;
                }

                function P(e, r) {
                  var n = e[r];
                  var t = r;
                  for (; t; --t) e[t] = e[t - 1];
                  e[0] = n;
                }

                function k(e, r) {
                  var n = new Uint8Array(256);
                  var t;
                  for (t = 0; t < 256; ++t) n[t] = t;
                  for (t = 0; t < r; ++t) {
                    var i = e[t];
                    if (((e[t] = n[i]), i)) P(n, i);
                  }
                }

                function K(e, r) {
                  (this.alphabet_size = e),
                  (this.num_htrees = r),
                  (this.codes = new Array(r + r * q[(e + 31) >>> 5])),
                  (this.htrees = new Uint32Array(r));
                }
                K.prototype.decode = function (e) {
                  var r;
                  var n;
                  var t = 0;
                  for (r = 0; r < this.num_htrees; ++r)
                    (this.htrees[r] = t),
                    (n = g(this.alphabet_size, this.codes, t, e)),
                    (t += n);
                };

                function X(e, r) {
                  var n = {
                    num_htrees: null,
                    context_map: null
                  };
                  var t;
                  var i = 0;
                  var a;
                  var o;
                  r.readMoreInput();
                  var f = (n.num_htrees = B(r) + 1);
                  var v = (n.context_map = new Uint8Array(e));
                  if (f <= 1) return n;
                  if (((t = r.readBits(1)), t)) i = r.readBits(4) + 1;
                  for (a = [], o = 0; o < x; o++) a[o] = new s(0, 0);
                  for (g(f + i, a, 0, r), o = 0; o < e;) {
                    var w;
                    if ((r.readMoreInput(), (w = M(a, 0, r)), 0 === w))
                      (v[o] = 0), ++o;
                    else if (w <= i) {
                      var d = 1 + (1 << w) + r.readBits(w);
                      while (--d) {
                        if (o >= e)
                          throw new Error(
                            "[DecodeContextMap] i >= context_map_size",
                          );
                        (v[o] = 0), ++o;
                      }
                    } else(v[o] = w - i), ++o;
                  }
                  if (r.readBits(1)) k(v, e);
                  return n;
                }

                function G(e, r, n, t, i, a, o) {
                  var s = 2 * n;
                  var f = n;
                  var v = M(r, n * x, o);
                  var w;
                  if (0 === v) w = i[s + (1 & a[f])];
                  else if (1 === v) w = i[s + ((a[f] - 1) & 1)] + 1;
                  else w = v - 2;
                  if (w >= e) w -= e;
                  (t[n] = w), (i[s + (1 & a[f])] = w), ++a[f];
                }

                function L(e, r, n, t, i, o) {
                  var s = i + 1;
                  var f = n & i;
                  var v = o.pos_ & a.IBUF_MASK;
                  var w;
                  if (r < 8 || o.bit_pos_ + (r << 3) < o.bit_end_pos_) {
                    while (r-- > 0)
                      if (
                        (o.readMoreInput(), (t[f++] = o.readBits(8)), f === s)
                      )
                        e.write(t, s), (f = 0);
                    return;
                  }
                  if (o.bit_end_pos_ < 32)
                    throw new Error(
                      "[CopyUncompressedBlockToOutput] br.bit_end_pos_ < 32",
                    );
                  while (o.bit_pos_ < 32)
                    (t[f] = o.val_ >>> o.bit_pos_), (o.bit_pos_ += 8), ++f, --r;
                  if (
                    ((w = (o.bit_end_pos_ - o.bit_pos_) >> 3),
                      v + w > a.IBUF_MASK)
                  ) {
                    var d = a.IBUF_MASK + 1 - v;
                    for (var u = 0; u < d; u++) t[f + u] = o.buf_[v + u];
                    (w -= d), (f += d), (r -= d), (v = 0);
                  }
                  for (var u = 0; u < w; u++) t[f + u] = o.buf_[v + u];
                  if (((f += w), (r -= w), f >= s)) {
                    e.write(t, s), (f -= s);
                    for (var u = 0; u < f; u++) t[u] = t[s + u];
                  }
                  while (f + r >= s) {
                    if (((w = s - f), o.input_.read(t, f, w) < w))
                      throw new Error(
                        "[CopyUncompressedBlockToOutput] not enough bytes",
                      );
                    e.write(t, s), (r -= w), (f = 0);
                  }
                  if (o.input_.read(t, f, r) < r)
                    throw new Error(
                      "[CopyUncompressedBlockToOutput] not enough bytes",
                    );
                  o.reset();
                }

                function J(e) {
                  var r = (e.bit_pos_ + 7) & ~7;
                  var n = e.readBits(r - e.bit_pos_);
                  return 0 == n;
                }

                function T(e) {
                  var r = new t(e);
                  var n = new a(r);
                  Y(n);
                  var i = H(n);
                  return i.meta_block_length;
                }
                n.BrotliDecompressedSize = T;

                function z(e, r) {
                  var n = new t(e);
                  if (null == r) r = T(e);
                  var a = new Uint8Array(r);
                  var o = new i(a);
                  if ((D(n, o), o.pos < o.buffer.length))
                    o.buffer = o.buffer.subarray(0, o.pos);
                  return o.buffer;
                }
                n.BrotliDecompressBuffer = z;

                function D(e, r) {
                  var n;
                  var t = 0;
                  var i = 0;
                  var f = 0;
                  var u;
                  var p = 0;
                  var m;
                  var W;
                  var U;
                  var E;
                  var O = [16, 15, 11, 4];
                  var N = 0;
                  var q = 0;
                  var R = 0;
                  var A = [new K(0, 0), new K(0, 0), new K(0, 0)];
                  var P;
                  var k;
                  var T;
                  var z = 128 + a.READ_SIZE;
                  (T = new a(e)),
                  (f = Y(T)),
                  (u = (1 << f) - 16),
                  (m = 1 << f),
                  (W = m - 1),
                  (U = new Uint8Array(m + z + o.maxDictionaryWordLength)),
                  (E = m),
                  (P = []),
                  (k = []);
                  for (var D = 0; D < 3 * x; D++)
                    (P[D] = new s(0, 0)), (k[D] = new s(0, 0));
                  while (!i) {
                    var I = 0;
                    var j;
                    var Q = [1 << 28, 1 << 28, 1 << 28];
                    var C = [0];
                    var S = [1, 1, 1];
                    var _ = [0, 1, 0, 1, 0, 1];
                    var $ = [0];
                    var ee;
                    var re;
                    var ne;
                    var te;
                    var ie = null;
                    var ae = null;
                    var oe;
                    var se = null;
                    var fe;
                    var ve = 0;
                    var we = null;
                    var de = 0;
                    var ue = 0;
                    var pe = null;
                    var he = 0;
                    var le = 0;
                    var ce = 0;
                    var be;
                    var ye;
                    for (n = 0; n < 3; ++n)
                      (A[n].codes = null), (A[n].htrees = null);
                    T.readMoreInput();
                    var me = H(T);
                    if (((I = me.meta_block_length), t + I > r.buffer.length)) {
                      var We = new Uint8Array(t + I);
                      We.set(r.buffer), (r.buffer = We);
                    }
                    if (
                      ((i = me.input_end),
                        (j = me.is_uncompressed),
                        me.is_metadata)
                    ) {
                      for (J(T); I > 0; --I) T.readMoreInput(), T.readBits(8);
                      continue;
                    }
                    if (0 === I) continue;
                    if (j) {
                      (T.bit_pos_ = (T.bit_pos_ + 7) & ~7),
                      L(r, I, t, U, W, T),
                        (t += I);
                      continue;
                    }
                    for (n = 0; n < 3; ++n)
                      if (((S[n] = B(T) + 1), S[n] >= 2))
                        g(S[n] + 2, P, n * x, T),
                        g(c, k, n * x, T),
                        (Q[n] = F(k, n * x, T)),
                        ($[n] = 1);
                    for (
                      T.readMoreInput(),
                      ee = T.readBits(2),
                      re = V + (T.readBits(4) << ee),
                      ne = (1 << ee) - 1,
                      te = re + (48 << ee),
                      ae = new Uint8Array(S[0]),
                      n = 0; n < S[0];
                      ++n
                    )
                      T.readMoreInput(), (ae[n] = T.readBits(2) << 1);
                    var xe = X(S[0] << b, T);
                    (oe = xe.num_htrees), (ie = xe.context_map);
                    var Ue = X(S[2] << y, T);
                    for (
                      fe = Ue.num_htrees,
                      se = Ue.context_map,
                      A[0] = new K(h, oe),
                      A[1] = new K(l, S[1]),
                      A[2] = new K(te, fe),
                      n = 0; n < 3;
                      ++n
                    )
                      A[n].decode(T);
                    (we = 0),
                    (pe = 0),
                    (be = ae[C[0]]),
                    (le = v.lookupOffsets[be]),
                    (ce = v.lookupOffsets[be + 1]),
                    (ye = A[1].htrees[0]);
                    while (I > 0) {
                      var Ee;
                      var Ve;
                      var Oe;
                      var Ne;
                      var qe;
                      var Ye;
                      var Be;
                      var Re;
                      var He;
                      var Me;
                      var Ae;
                      if ((T.readMoreInput(), 0 === Q[1]))
                        G(S[1], P, 1, C, _, $, T),
                        (Q[1] = F(k, x, T)),
                        (ye = A[1].htrees[C[1]]);
                      if (
                        (--Q[1],
                          (Ee = M(A[1].codes, ye, T)),
                          (Ve = Ee >> 6),
                          Ve >= 2)
                      )
                        (Ve -= 2), (Be = -1);
                      else Be = 0;
                      for (
                        Oe = w.kInsertRangeLut[Ve] + ((Ee >> 3) & 7),
                        Ne = w.kCopyRangeLut[Ve] + (7 & Ee),
                        qe =
                        w.kInsertLengthPrefixCode[Oe].offset +
                        T.readBits(w.kInsertLengthPrefixCode[Oe].nbits),
                        Ye =
                        w.kCopyLengthPrefixCode[Ne].offset +
                        T.readBits(w.kCopyLengthPrefixCode[Ne].nbits),
                        q = U[(t - 1) & W],
                        R = U[(t - 2) & W],
                        Me = 0; Me < qe;
                        ++Me
                      ) {
                        if ((T.readMoreInput(), 0 === Q[0]))
                          G(S[0], P, 0, C, _, $, T),
                          (Q[0] = F(k, 0, T)),
                          (ve = C[0] << b),
                          (we = ve),
                          (be = ae[C[0]]),
                          (le = v.lookupOffsets[be]),
                          (ce = v.lookupOffsets[be + 1]);
                        if (
                          ((He = v.lookup[le + q] | v.lookup[ce + R]),
                            (de = ie[we + He]),
                            --Q[0],
                            (R = q),
                            (q = M(A[0].codes, A[0].htrees[de], T)),
                            (U[t & W] = q),
                            (t & W) === W)
                        )
                          r.write(U, m);
                        ++t;
                      }
                      if (((I -= qe), I <= 0)) break;
                      if (Be < 0) {
                        var He;
                        if ((T.readMoreInput(), 0 === Q[2]))
                          G(S[2], P, 2, C, _, $, T),
                          (Q[2] = F(k, 2 * x, T)),
                          (ue = C[2] << y),
                          (pe = ue);
                        if (
                          (--Q[2],
                            (He = 255 & (Ye > 4 ? 3 : Ye - 2)),
                            (he = se[pe + He]),
                            (Be = M(A[2].codes, A[2].htrees[he], T)),
                            Be >= re)
                        ) {
                          var ge;
                          var Fe;
                          var Ze;
                          (Be -= re),
                          (Fe = Be & ne),
                          (Be >>= ee),
                          (ge = (Be >> 1) + 1),
                          (Ze = ((2 + (1 & Be)) << ge) - 4),
                          (Be = re + ((Ze + T.readBits(ge)) << ee) + Fe);
                        }
                      }
                      if (((Re = Z(Be, O, N)), Re < 0))
                        throw new Error("[BrotliDecompress] invalid distance");
                      if (t < u && p !== u) p = t;
                      else p = u;
                      if (((Ae = t & W), Re > p))
                        if (
                          Ye >= o.minDictionaryWordLength &&
                          Ye <= o.maxDictionaryWordLength
                        ) {
                          var Ze = o.offsetsByLength[Ye];
                          var Pe = Re - p - 1;
                          var ke = o.sizeBitsByLength[Ye];
                          var Ke = (1 << ke) - 1;
                          var Xe = Pe & Ke;
                          var Ge = Pe >> ke;
                          if (((Ze += Xe * Ye), Ge < d.kNumTransforms)) {
                            var Le = d.transformDictionaryWord(
                              U,
                              Ae,
                              Ze,
                              Ye,
                              Ge,
                            );
                            if (((Ae += Le), (t += Le), (I -= Le), Ae >= E)) {
                              r.write(U, m);
                              for (var Je = 0; Je < Ae - E; Je++)
                                U[Je] = U[E + Je];
                            }
                          } else
                            throw new Error(
                              "Invalid backward reference. pos: " +
                              t +
                              " distance: " +
                              Re +
                              " len: " +
                              Ye +
                              " bytes left: " +
                              I,
                            );
                        } else
                          throw new Error(
                            "Invalid backward reference. pos: " +
                            t +
                            " distance: " +
                            Re +
                            " len: " +
                            Ye +
                            " bytes left: " +
                            I,
                          );
                      else {
                        if (Be > 0)(O[3 & N] = Re), ++N;
                        if (Ye > I)
                          throw new Error(
                            "Invalid backward reference. pos: " +
                            t +
                            " distance: " +
                            Re +
                            " len: " +
                            Ye +
                            " bytes left: " +
                            I,
                          );
                        for (Me = 0; Me < Ye; ++Me) {
                          if (((U[t & W] = U[(t - Re) & W]), (t & W) === W))
                            r.write(U, m);
                          ++t, --I;
                        }
                      }
                      (q = U[(t - 1) & W]), (R = U[(t - 2) & W]);
                    }
                    t &= 1073741823;
                  }
                  r.write(U, t & W);
                }
                (n.BrotliDecompress = D), o.init();
              },
              {
                "./bit_reader": 1,
                "./context": 2,
                "./dictionary": 6,
                "./huffman": 7,
                "./prefix": 9,
                "./streams": 10,
                "./transform": 11,
              },
            ],
            4: [
              function (e, r, n) {
                var t = e("base64-js");
                n.init = function () {
                  var r = e("./decode").BrotliDecompressBuffer;
                  var n = t.toByteArray(e("./dictionary.bin.js"));
                  return r(n);
                };
              },
              {
                "./decode": 3,
                "./dictionary.bin.js": 5,
                "base64-js": 8
              },
            ],
            5: [
              function (e, r, n) {
                r.exports =
                  "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";
              },
              {},
            ],
            6: [
              function (e, r, n) {
                var t = e("./dictionary-browser");
                (n.init = function () {
                  n.dictionary = t.init();
                }),
                (n.offsetsByLength = new Uint32Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  4096,
                  9216,
                  21504,
                  35840,
                  44032,
                  53248,
                  63488,
                  74752,
                  87040,
                  93696,
                  100864,
                  104704,
                  106752,
                  108928,
                  113536,
                  115968,
                  118528,
                  119872,
                  121280,
                  122016,
                ])),
                (n.sizeBitsByLength = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  10,
                  10,
                  11,
                  11,
                  10,
                  10,
                  10,
                  10,
                  10,
                  9,
                  9,
                  8,
                  7,
                  7,
                  8,
                  7,
                  7,
                  6,
                  6,
                  5,
                  5,
                ])),
                (n.minDictionaryWordLength = 4),
                (n.maxDictionaryWordLength = 24);
              },
              {
                "./dictionary-browser": 4
              },
            ],
            7: [
              function (e, r, n) {
                function t(e, r) {
                  (this.bits = e), (this.value = r);
                }
                n.HuffmanCode = t;
                var i = 15;

                function a(e, r) {
                  var n = 1 << (r - 1);
                  while (e & n) n >>= 1;
                  return (e & (n - 1)) + n;
                }

                function o(e, r, n, i, a) {
                  do {
                    (i -= n), (e[r + i] = new t(a.bits, a.value));
                  } while (i > 0);
                }

                function s(e, r, n) {
                  var t = 1 << (r - n);
                  while (r < i) {
                    if (((t -= e[r]), t <= 0)) break;
                    ++r, (t <<= 1);
                  }
                  return r - n;
                }
                n.BrotliBuildHuffmanTable = function (e, r, n, f, v) {
                  var w = r;
                  var d;
                  var u;
                  var p;
                  var h;
                  var l;
                  var c;
                  var b;
                  var y;
                  var m;
                  var W;
                  var x;
                  var U = new Int32Array(i + 1);
                  var E = new Int32Array(i + 1);
                  for (x = new Int32Array(v), p = 0; p < v; p++) U[f[p]]++;
                  for (E[1] = 0, u = 1; u < i; u++) E[u + 1] = E[u] + U[u];
                  for (p = 0; p < v; p++)
                    if (0 !== f[p]) x[E[f[p]]++] = p;
                  if (((y = n), (m = 1 << y), (W = m), 1 === E[i])) {
                    for (h = 0; h < W; ++h) e[r + h] = new t(0, 65535 & x[0]);
                    return W;
                  }
                  for (h = 0, p = 0, u = 1, l = 2; u <= n; ++u, l <<= 1)
                    for (; U[u] > 0; --U[u])
                      (d = new t(255 & u, 65535 & x[p++])),
                      o(e, r + h, l, m, d),
                      (h = a(h, u));
                  for (
                    b = W - 1, c = -1, u = n + 1, l = 2; u <= i;
                    ++u, l <<= 1
                  )
                    for (; U[u] > 0; --U[u]) {
                      if ((h & b) !== c)
                        (r += m),
                        (y = s(U, u, n)),
                        (m = 1 << y),
                        (W += m),
                        (c = h & b),
                        (e[w + c] = new t(
                          (y + n) & 255,
                          (r - w - c) & 65535,
                        ));
                      (d = new t((u - n) & 255, 65535 & x[p++])),
                      o(e, r + (h >> n), l, m, d),
                        (h = a(h, u));
                    }
                  return W;
                };
              },
              {},
            ],
            8: [
              function (e, r, n) {
                "use strict";
                (n.byteLength = w), (n.toByteArray = u), (n.fromByteArray = l);
                var t = [];
                var i = [];
                var a = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
                var o =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                for (var s = 0, f = o.length; s < f; ++s)
                  (t[s] = o[s]), (i[o.charCodeAt(s)] = s);
                (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);

                function v(e) {
                  var r = e.length;
                  if (r % 4 > 0)
                    throw new Error(
                      "Invalid string. Length must be a multiple of 4",
                    );
                  var n = e.indexOf("=");
                  if (n === -1) n = r;
                  var t = n === r ? 0 : 4 - (n % 4);
                  return [n, t];
                }

                function w(e) {
                  var r = v(e);
                  var n = r[0];
                  var t = r[1];
                  return (3 * (n + t)) / 4 - t;
                }

                function d(e, r, n) {
                  return (3 * (r + n)) / 4 - n;
                }

                function u(e) {
                  var r;
                  var n = v(e);
                  var t = n[0];
                  var o = n[1];
                  var s = new a(d(e, t, o));
                  var f = 0;
                  var w = o > 0 ? t - 4 : t;
                  for (var u = 0; u < w; u += 4)
                    (r =
                      (i[e.charCodeAt(u)] << 18) |
                      (i[e.charCodeAt(u + 1)] << 12) |
                      (i[e.charCodeAt(u + 2)] << 6) |
                      i[e.charCodeAt(u + 3)]),
                    (s[f++] = (r >> 16) & 255),
                    (s[f++] = (r >> 8) & 255),
                    (s[f++] = 255 & r);
                  if (2 === o)
                    (r =
                      (i[e.charCodeAt(u)] << 2) |
                      (i[e.charCodeAt(u + 1)] >> 4)),
                    (s[f++] = 255 & r);
                  if (1 === o)
                    (r =
                      (i[e.charCodeAt(u)] << 10) |
                      (i[e.charCodeAt(u + 1)] << 4) |
                      (i[e.charCodeAt(u + 2)] >> 2)),
                    (s[f++] = (r >> 8) & 255),
                    (s[f++] = 255 & r);
                  return s;
                }

                function p(e) {
                  return (
                    t[(e >> 18) & 63] +
                    t[(e >> 12) & 63] +
                    t[(e >> 6) & 63] +
                    t[63 & e]
                  );
                }

                function h(e, r, n) {
                  var t;
                  var i = [];
                  for (var a = r; a < n; a += 3)
                    (t =
                      ((e[a] << 16) & 16711680) +
                      ((e[a + 1] << 8) & 65280) +
                      (255 & e[a + 2])),
                    i.push(p(t));
                  return i.join("");
                }

                function l(e) {
                  var r;
                  var n = e.length;
                  var i = n % 3;
                  var a = [];
                  var o = 16383;
                  for (var s = 0, f = n - i; s < f; s += o)
                    a.push(h(e, s, s + o > f ? f : s + o));
                  if (1 === i)
                    (r = e[n - 1]), a.push(t[r >> 2] + t[(r << 4) & 63] + "==");
                  else if (2 === i)
                    (r = (e[n - 2] << 8) + e[n - 1]),
                    a.push(
                      t[r >> 10] + t[(r >> 4) & 63] + t[(r << 2) & 63] + "=",
                    );
                  return a.join("");
                }
              },
              {},
            ],
            9: [
              function (e, r, n) {
                function t(e, r) {
                  (this.offset = e), (this.nbits = r);
                }
                (n.kBlockLengthPrefixCode = [
                  new t(1, 2),
                  new t(5, 2),
                  new t(9, 2),
                  new t(13, 2),
                  new t(17, 3),
                  new t(25, 3),
                  new t(33, 3),
                  new t(41, 3),
                  new t(49, 4),
                  new t(65, 4),
                  new t(81, 4),
                  new t(97, 4),
                  new t(113, 5),
                  new t(145, 5),
                  new t(177, 5),
                  new t(209, 5),
                  new t(241, 6),
                  new t(305, 6),
                  new t(369, 7),
                  new t(497, 8),
                  new t(753, 9),
                  new t(1265, 10),
                  new t(2289, 11),
                  new t(4337, 12),
                  new t(8433, 13),
                  new t(16625, 24),
                ]),
                (n.kInsertLengthPrefixCode = [
                  new t(0, 0),
                  new t(1, 0),
                  new t(2, 0),
                  new t(3, 0),
                  new t(4, 0),
                  new t(5, 0),
                  new t(6, 1),
                  new t(8, 1),
                  new t(10, 2),
                  new t(14, 2),
                  new t(18, 3),
                  new t(26, 3),
                  new t(34, 4),
                  new t(50, 4),
                  new t(66, 5),
                  new t(98, 5),
                  new t(130, 6),
                  new t(194, 7),
                  new t(322, 8),
                  new t(578, 9),
                  new t(1090, 10),
                  new t(2114, 12),
                  new t(6210, 14),
                  new t(22594, 24),
                ]),
                (n.kCopyLengthPrefixCode = [
                  new t(2, 0),
                  new t(3, 0),
                  new t(4, 0),
                  new t(5, 0),
                  new t(6, 0),
                  new t(7, 0),
                  new t(8, 0),
                  new t(9, 0),
                  new t(10, 1),
                  new t(12, 1),
                  new t(14, 2),
                  new t(18, 2),
                  new t(22, 3),
                  new t(30, 3),
                  new t(38, 4),
                  new t(54, 4),
                  new t(70, 5),
                  new t(102, 5),
                  new t(134, 6),
                  new t(198, 7),
                  new t(326, 8),
                  new t(582, 9),
                  new t(1094, 10),
                  new t(2118, 24),
                ]),
                (n.kInsertRangeLut = [0, 0, 8, 8, 0, 16, 8, 16, 16]),
                (n.kCopyRangeLut = [0, 8, 0, 8, 16, 0, 16, 8, 16]);
              },
              {},
            ],
            10: [
              function (e, r, n) {
                function t(e) {
                  (this.buffer = e), (this.pos = 0);
                }
                (t.prototype.read = function (e, r, n) {
                  if (this.pos + n > this.buffer.length)
                    n = this.buffer.length - this.pos;
                  for (var t = 0; t < n; t++)
                    e[r + t] = this.buffer[this.pos + t];
                  return (this.pos += n), n;
                }),
                (n.BrotliInput = t);

                function i(e) {
                  (this.buffer = e), (this.pos = 0);
                }
                (i.prototype.write = function (e, r) {
                  if (this.pos + r > this.buffer.length)
                    throw new Error("Output buffer is not large enough");
                  return (
                    this.buffer.set(e.subarray(0, r), this.pos),
                    (this.pos += r),
                    r
                  );
                }),
                (n.BrotliOutput = i);
              },
              {},
            ],
            11: [
              function (e, r, n) {
                var t = e("./dictionary");
                var i = 0;
                var a = 1;
                var o = 2;
                var s = 3;
                var f = 4;
                var v = 5;
                var w = 6;
                var d = 7;
                var u = 8;
                var p = 9;
                var h = 10;
                var l = 11;
                var c = 12;
                var b = 13;
                var y = 14;
                var m = 15;
                var W = 16;
                var x = 17;
                var U = 18;
                var V = 20;

                function O(e, r, n) {
                  (this.prefix = new Uint8Array(e.length)),
                  (this.transform = r),
                  (this.suffix = new Uint8Array(n.length));
                  for (var t = 0; t < e.length; t++)
                    this.prefix[t] = e.charCodeAt(t);
                  for (var t = 0; t < n.length; t++)
                    this.suffix[t] = n.charCodeAt(t);
                }
                var N = [
                  new O("", i, ""),
                  new O("", i, " "),
                  new O(" ", i, " "),
                  new O("", c, ""),
                  new O("", h, " "),
                  new O("", i, " the "),
                  new O(" ", i, ""),
                  new O("s ", i, " "),
                  new O("", i, " of "),
                  new O("", h, ""),
                  new O("", i, " and "),
                  new O("", b, ""),
                  new O("", a, ""),
                  new O(", ", i, " "),
                  new O("", i, ", "),
                  new O(" ", h, " "),
                  new O("", i, " in "),
                  new O("", i, " to "),
                  new O("e ", i, " "),
                  new O("", i, '"'),
                  new O("", i, "."),
                  new O("", i, '">'),
                  new O("", i, "\n"),
                  new O("", s, ""),
                  new O("", i, "]"),
                  new O("", i, " for "),
                  new O("", y, ""),
                  new O("", o, ""),
                  new O("", i, " a "),
                  new O("", i, " that "),
                  new O(" ", h, ""),
                  new O("", i, ". "),
                  new O(".", i, ""),
                  new O(" ", i, ", "),
                  new O("", m, ""),
                  new O("", i, " with "),
                  new O("", i, "'"),
                  new O("", i, " from "),
                  new O("", i, " by "),
                  new O("", W, ""),
                  new O("", x, ""),
                  new O(" the ", i, ""),
                  new O("", f, ""),
                  new O("", i, ". The "),
                  new O("", l, ""),
                  new O("", i, " on "),
                  new O("", i, " as "),
                  new O("", i, " is "),
                  new O("", d, ""),
                  new O("", a, "ing "),
                  new O("", i, "\n\t"),
                  new O("", i, ":"),
                  new O(" ", i, ". "),
                  new O("", i, "ed "),
                  new O("", V, ""),
                  new O("", U, ""),
                  new O("", w, ""),
                  new O("", i, "("),
                  new O("", h, ", "),
                  new O("", u, ""),
                  new O("", i, " at "),
                  new O("", i, "ly "),
                  new O(" the ", i, " of "),
                  new O("", v, ""),
                  new O("", p, ""),
                  new O(" ", h, ", "),
                  new O("", h, '"'),
                  new O(".", i, "("),
                  new O("", l, " "),
                  new O("", h, '">'),
                  new O("", i, '="'),
                  new O(" ", i, "."),
                  new O(".com/", i, ""),
                  new O(" the ", i, " of the "),
                  new O("", h, "'"),
                  new O("", i, ". This "),
                  new O("", i, ","),
                  new O(".", i, " "),
                  new O("", h, "("),
                  new O("", h, "."),
                  new O("", i, " not "),
                  new O(" ", i, '="'),
                  new O("", i, "er "),
                  new O(" ", l, " "),
                  new O("", i, "al "),
                  new O(" ", l, ""),
                  new O("", i, "='"),
                  new O("", l, '"'),
                  new O("", h, ". "),
                  new O(" ", i, "("),
                  new O("", i, "ful "),
                  new O(" ", h, ". "),
                  new O("", i, "ive "),
                  new O("", i, "less "),
                  new O("", l, "'"),
                  new O("", i, "est "),
                  new O(" ", h, "."),
                  new O("", l, '">'),
                  new O(" ", i, "='"),
                  new O("", h, ","),
                  new O("", i, "ize "),
                  new O("", l, "."),
                  new O("� ", i, ""),
                  new O(" ", i, ","),
                  new O("", h, '="'),
                  new O("", l, '="'),
                  new O("", i, "ous "),
                  new O("", l, ", "),
                  new O("", h, "='"),
                  new O(" ", h, ","),
                  new O(" ", l, '="'),
                  new O(" ", l, ", "),
                  new O("", l, ","),
                  new O("", l, "("),
                  new O("", l, ". "),
                  new O(" ", l, "."),
                  new O("", l, "='"),
                  new O(" ", l, ". "),
                  new O(" ", h, '="'),
                  new O(" ", l, "='"),
                  new O(" ", h, "='"),
                ];
                (n.kTransforms = N), (n.kNumTransforms = N.length);

                function q(e, r) {
                  if (e[r] < 192) {
                    if (e[r] >= 97 && e[r] <= 122) e[r] ^= 32;
                    return 1;
                  }
                  if (e[r] < 224) return (e[r + 1] ^= 32), 2;
                  return (e[r + 2] ^= 5), 3;
                }
                n.transformDictionaryWord = function (e, r, n, i, a) {
                  var o = N[a].prefix;
                  var s = N[a].suffix;
                  var f = N[a].transform;
                  var v = f < c ? 0 : f - (c - 1);
                  var w = 0;
                  var d = r;
                  var u;
                  if (v > i) v = i;
                  var b = 0;
                  while (b < o.length) e[r++] = o[b++];
                  if (((n += v), (i -= v), f <= p)) i -= f;
                  for (w = 0; w < i; w++) e[r++] = t.dictionary[n + w];
                  if (((u = r - i), f === h)) q(e, u);
                  else if (f === l)
                    while (i > 0) {
                      var y = q(e, u);
                      (u += y), (i -= y);
                    }
                  var m = 0;
                  while (m < s.length) e[r++] = s[m++];
                  return r - d;
                };
              },
              {
                "./dictionary": 6
              },
            ],
            12: [
              function (e, r, n) {
                r.exports = e("./dec/decode").BrotliDecompressBuffer;
              },
              {
                "./dec/decode": 3
              },
            ],
          }, {},
          [12],
        )(12);
      })();
    })(Module);
    (function (lib) {
      "use strict";
      var ENVIRONMENT_IS_WEB = typeof window === "object";
      var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
      var ENVIRONMENT_IS_NODE =
        typeof process === "object" &&
        typeof require === "function" &&
        !ENVIRONMENT_IS_WEB &&
        !ENVIRONMENT_IS_WORKER;
      var _this = null;
      if (ENVIRONMENT_IS_WORKER) {
        _this = self;
      } else if (ENVIRONMENT_IS_WEB) {
        _this = window;
      } else if (ENVIRONMENT_IS_NODE) {
        _this = global;
      } else {
        throw "Can't load library file. Environment must be either window, web worker.";
      }
      if (!lib["binaryLocation"]) {
        throw "Can't load library file. binaryLocation not set.";
      }
      if (!lib["modelLocation"]) {
        throw "Can't load library file. modelLocation not set.";
      }
      if (!lib["modelChunks"]) {
        throw "Can't load library file. modelChunks not set.";
      }
      if (_this) {
        if (
          (lib["isWASM"] && !lib["isASMJS"]) ||
          (!lib["isWASM"] && lib["isASMJS"])
        ) {
          if (lib["isWASM"] && !lib["WebAssemblySupport"]) {
            throw "Can't load library file. WebAssemblySupport is false.";
          } else {
            if (!lib["brfv5Binary"]) {
              var numChunks = lib["modelChunks"];
              lib["brfv5Binary"] = null;
              lib["brfv5ModelChunks"] = [];
              lib["brfv5ModelChunks"].fill(0, 0, numChunks);
              lib["brfv5BinaryLoadState"] = 0;
              var numFiles = numChunks + 1;
              var onError = function (e) {
                lib["error"]("BRFv5 could not be loaded.", e);
                lib["brfv5Binary"] = null;
                lib["brfv5ModelChunks"] = null;
                lib["brfv5BinaryLoadState"] = -1;
              };
              if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
                var loadModelChunk = function (chunk) {
                  var urlModel = lib["modelLocation"] + chunk + ".brfv5";
                  var xhrModel = new XMLHttpRequest();
                  xhrModel.open("GET", urlModel, true);
                  xhrModel.responseType = "arraybuffer";
                  xhrModel.onerror = onError;
                  xhrModel.onprogress = lib["binaryProgress"] || null;
                  xhrModel.onload = function (e) {
                    if (lib["brfv5BinaryLoadState"] >= 0) {
                      lib["brfv5ModelChunks"][chunk] = new Uint8Array(
                        e.currentTarget.response,
                      );
                      lib["brfv5BinaryLoadState"] =
                        lib["brfv5BinaryLoadState"] + 1;
                    }
                  };
                  xhrModel.send(null);
                };
                for (var i = 0; i < numChunks; i++) {
                  loadModelChunk(i);
                }
                var urlBinary = lib["binaryLocation"];
                var xhrBinary = new XMLHttpRequest();
                xhrBinary.open("GET", urlBinary, true);
                xhrBinary.responseType = "arraybuffer";
                xhrBinary.onerror = onError;
                xhrBinary.onprogress = lib["binaryProgress"] || null;
                xhrBinary.onload = function () {
                  if (lib["brfv5BinaryLoadState"] >= 0) {
                    if (urlBinary.endsWith(".brfv5")) {
                      lib["brfv5Binary"] = lib["process"](
                        new Uint8Array(xhrBinary.response),
                      );
                    } else {
                      lib["brfv5Binary"] = xhrBinary.response;
                    }
                    lib["brfv5BinaryLoadState"] =
                      lib["brfv5BinaryLoadState"] + 1;
                  }
                };
                if (lib["isASMJS"]) {
                  lib["memoryInitializerRequest"] = {
                    response: null,
                    status: 200,
                    addEventListener: function (type, successCallback) {
                      var intervalId = setInterval(function () {
                        if (
                          lib["brfv5BinaryLoadState"] === numFiles &&
                          lib["brfv5Binary"] &&
                          lib["brfv5ModelChunks"].length === numChunks
                        ) {
                          lib["memoryInitializerRequest"].response =
                            lib["brfv5Binary"];
                          clearInterval(intervalId);
                          successCallback();
                        }
                      }, 50);
                    },
                  };
                } else {
                  lib["instantiateWasm"] = function (imports, successCallback) {
                    var intervalId = setInterval(function () {
                      if (
                        lib["brfv5BinaryLoadState"] === numFiles &&
                        lib["brfv5Binary"] &&
                        lib["brfv5ModelChunks"].length === numChunks
                      ) {
                        clearInterval(intervalId);
                        WebAssembly.instantiate(lib["brfv5Binary"], imports)
                          .then(function (output) {
                            successCallback(output.instance);
                          })
                          .catch(function (e) {
                            lib["error"]("BRFv5 could not be instantiated.", e);
                          });
                      }
                    }, 50);
                    return {};
                  };
                }
                xhrBinary.send(null);
              } else {
                var fs = require("fs");
                for (var i = 0; i < numChunks; i++) {
                  if (lib["brfv5BinaryLoadState"] >= 0) {
                    lib["brfv5ModelChunks"][i] = fs.readFileSync(
                      lib["modelLocation"] + i + ".brfv5",
                    );
                    lib["brfv5BinaryLoadState"] =
                      lib["brfv5BinaryLoadState"] + 1;
                  }
                }
                var urlBinary = lib["binaryLocation"];
                var data = fs.readFileSync(urlBinary);
                if (lib["brfv5BinaryLoadState"] >= 0) {
                  if (urlBinary.endsWith(".brfv5")) {
                    lib["brfv5Binary"] = lib["process"](data);
                  } else {
                    lib["brfv5Binary"] = data;
                  }
                  lib["brfv5BinaryLoadState"] = lib["brfv5BinaryLoadState"] + 1;
                }
                lib["instantiateWasm"] = function (imports, successCallback) {
                  var intervalId = setInterval(function () {
                    if (
                      lib["brfv5BinaryLoadState"] === numFiles &&
                      lib["brfv5Binary"] &&
                      lib["brfv5ModelChunks"].length === numChunks
                    ) {
                      clearInterval(intervalId);
                      WebAssembly.instantiate(lib["brfv5Binary"], imports)
                        .then(function (output) {
                          successCallback(output.instance);
                        })
                        .catch(function (e) {
                          lib["error"]("BRFv5 could not be instantiated.", e);
                        });
                    }
                  }, 50);
                  return {};
                };
              }
            }
          }
        }
      } else {
        throw "Can't load library file. Environment not set.";
      }
    })(Module);
    var moduleOverrides = {};
    var key;
    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = function (status, toThrow) {
      throw toThrow;
    };
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_HAS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_HAS_NODE =
      typeof process === "object" &&
      typeof process.versions === "object" &&
      typeof process.versions.node === "string";
    ENVIRONMENT_IS_NODE =
      ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    var scriptDirectory = "";

    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readAsync, readBinary, setWindowTitle;
    var nodeFS;
    var nodePath;
    if (ENVIRONMENT_IS_NODE) {
      scriptDirectory = __dirname + "/";
      read_ = function shell_read(filename, binary) {
        if (!nodeFS) nodeFS = require("fs");
        if (!nodePath) nodePath = require("path");
        filename = nodePath["normalize"](filename);
        return nodeFS["readFileSync"](filename, binary ? null : "utf8");
      };
      readBinary = function readBinary(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/");
      }
      arguments_ = process["argv"].slice(2);
      process["on"]("uncaughtException", function (ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", abort);
      quit_ = function (status) {
        process["exit"](status);
      };
      Module["inspect"] = function () {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          return read(f);
        };
      }
      readBinary = function readBinary(f) {
        var data;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };
      if (typeof scriptArgs != "undefined") {
        arguments_ = scriptArgs;
      } else if (typeof arguments != "undefined") {
        arguments_ = arguments;
      }
      if (typeof quit === "function") {
        quit_ = function (status) {
          quit(status);
        };
      }
      if (typeof print !== "undefined") {
        if (typeof console === "undefined") console = {};
        console.log = print;
        console.warn = console.error =
          typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(
          0,
          scriptDirectory.lastIndexOf("/") + 1,
        );
      } else {
        scriptDirectory = "";
      } {
        read_ = function shell_read(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function readBinary(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = function readAsync(url, onload, onerror) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = function xhr_onload() {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
      setWindowTitle = function (title) {
        document.title = title;
      };
    } else {}
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = null;
    if (Module["arguments"]) arguments_ = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    if (Module["quit"]) quit_ = Module["quit"];

    function dynCall(sig, ptr, args) {
      if (args && args.length) {
        return Module["dynCall_" + sig].apply(null, [ptr].concat(args));
      } else {
        return Module["dynCall_" + sig].call(null, ptr);
      }
    }
    var tempRet0 = 0;
    var setTempRet0 = function (value) {
      tempRet0 = value;
    };
    var wasmBinary;
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
    var noExitRuntime;
    if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
    if (typeof WebAssembly !== "object") {
      err("no native wasm support detected");
    }
    var wasmMemory;
    var wasmTable = new WebAssembly.Table({
      initial: 499,
      maximum: 499 + 0,
      element: "anyfunc",
    });
    var ABORT = false;
    var EXITSTATUS = 0;

    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }

    function getCFunc(ident) {
      var func = Module["_" + ident];
      assert(
        func,
        "Cannot call unknown function " + ident + ", make sure it is exported",
      );
      return func;
    }

    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = {
        string: function (str) {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) {
            var len = (str.length << 2) + 1;
            ret = stackAlloc(len);
            stringToUTF8(str, ret, len);
          }
          return ret;
        },
        array: function (arr) {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        },
      };

      function convertReturnValue(ret) {
        if (returnType === "string") return UTF8ToString(ret);
        if (returnType === "boolean") return Boolean(ret);
        return ret;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0) stackRestore(stack);
      return ret;
    }

    function cwrap(ident, returnType, argTypes, opts) {
      argTypes = argTypes || [];
      var numericArgs = argTypes.every(function (type) {
        return type === "number";
      });
      var numericRet = returnType !== "string";
      if (numericRet && numericArgs && !opts) {
        return getCFunc(ident);
      }
      return function () {
        return ccall(ident, returnType, argTypes, arguments, opts);
      };
    }
    var UTF8Decoder =
      typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

    function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (u8Array[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = u8Array[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          var u1 = u8Array[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode(((u0 & 31) << 6) | u1);
            continue;
          }
          var u2 = u8Array[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
          } else {
            u0 =
              ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (u8Array[idx++] & 63);
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
          }
        }
      }
      return str;
    }

    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }

    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0)) return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
        }
        if (u <= 127) {
          if (outIdx >= endIdx) break;
          outU8Array[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          outU8Array[outIdx++] = 192 | (u >> 6);
          outU8Array[outIdx++] = 128 | (u & 63);
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          outU8Array[outIdx++] = 224 | (u >> 12);
          outU8Array[outIdx++] = 128 | ((u >> 6) & 63);
          outU8Array[outIdx++] = 128 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          outU8Array[outIdx++] = 240 | (u >> 18);
          outU8Array[outIdx++] = 128 | ((u >> 12) & 63);
          outU8Array[outIdx++] = 128 | ((u >> 6) & 63);
          outU8Array[outIdx++] = 128 | (u & 63);
        }
      }
      outU8Array[outIdx] = 0;
      return outIdx - startIdx;
    }

    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }

    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
          u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
        if (u <= 127) ++len;
        else if (u <= 2047) len += 2;
        else if (u <= 65535) len += 3;
        else len += 4;
      }
      return len;
    }
    var UTF16Decoder =
      typeof TextDecoder !== "undefined" ?
      new TextDecoder("utf-16le") :
      undefined;

    function writeArrayToMemory(array, buffer) {
      HEAP8.set(array, buffer);
    }

    function writeAsciiToMemory(str, buffer, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull) HEAP8[buffer >> 0] = 0;
    }
    var WASM_PAGE_SIZE = 65536;

    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - (x % multiple);
      }
      return x;
    }
    var buffer,
      HEAP8,
      HEAPU8,
      HEAP16,
      HEAPU16,
      HEAP32,
      HEAPU32,
      HEAPF32,
      HEAPF64;

    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var DYNAMIC_BASE = 4673808,
      DYNAMICTOP_PTR = 479344;
    var INITIAL_TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 113246208;
    if (Module["wasmMemory"]) {
      wasmMemory = Module["wasmMemory"];
    } else {
      wasmMemory = new WebAssembly.Memory({
        initial: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE,
      });
    }
    if (wasmMemory) {
      buffer = wasmMemory.buffer;
    }
    INITIAL_TOTAL_MEMORY = buffer.byteLength;
    updateGlobalBufferAndViews(buffer);
    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;

    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
          callback();
          continue;
        }
        var func = callback.func;
        if (typeof func === "number") {
          if (callback.arg === undefined) {
            Module["dynCall_v"](func);
          } else {
            Module["dynCall_vi"](func, callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;

    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }

    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }

    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }

    function exitRuntime() {
      runtimeExited = true;
    }

    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }

    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }

    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;

    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }

    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};

    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      what += "";
      out(what);
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
      throw new WebAssembly.RuntimeError(what);
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";

    function isDataURI(filename) {
      return String.prototype.startsWith ?
        filename.startsWith(dataURIPrefix) :
        filename.indexOf(dataURIPrefix) === 0;
    }
    var wasmBinaryFile = "brfv5_js_tk240320_v5.1.5_trial.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }

    function getBinary() {
      try {
        if (wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(wasmBinaryFile);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err) {
        abort(err);
      }
    }

    function getBinaryPromise() {
      if (
        !wasmBinary &&
        (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) &&
        typeof fetch === "function"
      ) {
        return fetch(wasmBinaryFile, {
            credentials: "same-origin"
          })
          .then(function (response) {
            if (!response["ok"]) {
              throw (
                "failed to load wasm binary file at '" + wasmBinaryFile + "'"
              );
            }
            return response["arrayBuffer"]();
          })
          .catch(function () {
            return getBinary();
          });
      }
      return new Promise(function (resolve, reject) {
        resolve(getBinary());
      });
    }

    function createWasm() {
      var info = {
        env: asmLibraryArg,
        wasi_snapshot_preview1: asmLibraryArg
      };

      function receiveInstance(instance, module) {
        var exports = instance.exports;
        Module["asm"] = exports;
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");

      function receiveInstantiatedSource(output) {
        receiveInstance(output["instance"]);
      }

      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise()
          .then(function (binary) {
            return WebAssembly.instantiate(binary, info);
          })
          .then(receiver, function (reason) {
            err("failed to asynchronously prepare wasm: " + reason);
            abort(reason);
          });
      }

      function instantiateAsync() {
        if (
          !wasmBinary &&
          typeof WebAssembly.instantiateStreaming === "function" &&
          !isDataURI(wasmBinaryFile) &&
          typeof fetch === "function"
        ) {
          fetch(wasmBinaryFile, {
            credentials: "same-origin"
          }).then(function (
            response,
          ) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiatedSource, function (reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              instantiateArrayBuffer(receiveInstantiatedSource);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiatedSource);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports = Module["instantiateWasm"](info, receiveInstance);
          return exports;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false;
        }
      }
      instantiateAsync();
      return {};
    }
    var ASM_CONSTS = {
      1066: function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
        return Module["calc"](Module, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
      },
      1141: function ($0) {
        eval(Module["UTF8ToString"]($0));
      },
      1427: function () {
        Module["onSDKReady"]();
      },
      1451: function () {
        Module["onSDKConfigured"]();
      },
    };
    var _readAsmConstArgsArray = [];

    function readAsmConstArgs(sigPtr, buf) {
      var args = _readAsmConstArgsArray;
      args.length = 0;
      var ch;
      while ((ch = HEAPU8[sigPtr++])) {
        if (ch === 100 || ch === 102) {
          buf = (buf + 7) & ~7;
          args.push(HEAPF64[buf >> 3]);
          buf += 8;
        } else {
          buf = (buf + 3) & ~3;
          args.push(HEAP32[buf >> 2]);
          buf += 4;
        }
      }
      return args;
    }

    function _emscripten_asm_const_iii(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }
    __ATINIT__.push({
      func: function () {
        ___wasm_call_ctors();
      },
    });

    function ___assert_fail(condition, filename, line, func) {
      abort(
        "Assertion failed: " +
        UTF8ToString(condition) +
        ", at: " + [
          filename ? UTF8ToString(filename) : "unknown filename",
          line,
          func ? UTF8ToString(func) : "unknown function",
        ],
      );
    }

    function ___lock() {}

    function ___setErrNo(value) {
      if (Module["___errno_location"])
        HEAP32[Module["___errno_location"]() >> 2] = value;
      return value;
    }

    function ___map_file(pathname, size) {
      ___setErrNo(63);
      return -1;
    }
    var PATH = {
      splitPath: function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
      normalizeArray: function (parts, allowAboveRoot) {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === ".") {
            parts.splice(i, 1);
          } else if (last === "..") {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift("..");
          }
        }
        return parts;
      },
      normalize: function (path) {
        var isAbsolute = path.charAt(0) === "/",
          trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(
          path.split("/").filter(function (p) {
            return !!p;
          }),
          !isAbsolute,
        ).join("/");
        if (!path && !isAbsolute) {
          path = ".";
        }
        if (path && trailingSlash) {
          path += "/";
        }
        return (isAbsolute ? "/" : "") + path;
      },
      dirname: function (path) {
        var result = PATH.splitPath(path),
          root = result[0],
          dir = result[1];
        if (!root && !dir) {
          return ".";
        }
        if (dir) {
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
      basename: function (path) {
        if (path === "/") return "/";
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1) return path;
        return path.substr(lastSlash + 1);
      },
      extname: function (path) {
        return PATH.splitPath(path)[3];
      },
      join: function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join("/"));
      },
      join2: function (l, r) {
        return PATH.normalize(l + "/" + r);
      },
    };
    var SYSCALLS = {
      buffers: [null, [],
        []
      ],
      printChar: function (stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },
      varargs: 0,
      get: function (varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
        return ret;
      },
      getStr: function () {
        var ret = UTF8ToString(SYSCALLS.get());
        return ret;
      },
      get64: function () {
        var low = SYSCALLS.get(),
          high = SYSCALLS.get();
        return low;
      },
      getZero: function () {
        SYSCALLS.get();
      },
    };

    function ___syscall221(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }

    function ___syscall5(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var pathname = SYSCALLS.getStr(),
          flags = SYSCALLS.get(),
          mode = SYSCALLS.get();
        var stream = FS.open(pathname, flags, mode);
        return stream.fd;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }

    function ___syscall54(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }

    function __emscripten_syscall_munmap(addr, len) {
      if (addr === -1 || len === 0) {
        return -28;
      }
      var info = SYSCALLS.mappings[addr];
      if (!info) return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }

    function ___syscall91(which, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var addr = SYSCALLS.get(),
          len = SYSCALLS.get();
        return __emscripten_syscall_munmap(addr, len);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }

    function ___unlock() {}

    function _abort() {
      abort();
    }

    function _emscripten_get_heap_size() {
      return HEAP8.length;
    }

    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
    }

    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow((size - buffer.byteLength + 65535) >> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {}
    }

    function _emscripten_resize_heap(requestedSize) {
      var oldSize = _emscripten_get_heap_size();
      var PAGE_MULTIPLE = 65536;
      var maxHeapSize = 2147483648 - PAGE_MULTIPLE;
      if (requestedSize > maxHeapSize) {
        return false;
      }
      var minHeapSize = 16777216;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize + 33554432 / cutDown;
        var newSize = Math.min(
          maxHeapSize,
          alignUp(
            Math.max(minHeapSize, requestedSize, overGrownHeapSize),
            PAGE_MULTIPLE,
          ),
        );
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    }
    var ENV = {};

    function _emscripten_get_environ() {
      if (!_emscripten_get_environ.strings) {
        var env = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: (
            (typeof navigator === "object" &&
              navigator.languages &&
              navigator.languages[0]) ||
            "C"
          ).replace("-", "_") + ".UTF-8",
          _: thisProgram,
        };
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + "=" + env[x]);
        }
        _emscripten_get_environ.strings = strings;
      }
      return _emscripten_get_environ.strings;
    }

    function _environ_get(__environ, environ_buf) {
      var strings = _emscripten_get_environ();
      var bufSize = 0;
      strings.forEach(function (string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(__environ + i * 4) >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = _emscripten_get_environ();
      HEAP32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function (string) {
        bufSize += string.length + 1;
      });
      HEAP32[penviron_buf_size >> 2] = bufSize;
      return 0;
    }

    function _exit(status) {
      exit(status);
    }

    function _fd_close(fd) {
      try {
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }

    function _fd_read(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doReadv(stream, iov, iovcnt);
        HEAP32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }

    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      try {
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }

    function _fd_write(fd, iov, iovcnt, pnum) {
      try {
        var num = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(iov + i * 8) >> 2];
          var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
          for (var j = 0; j < len; j++) {
            SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
          }
          num += len;
        }
        HEAP32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }

    function _setTempRet0($i) {
      setTempRet0($i | 0);
    }

    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }

    function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]);
      return sum;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ?
          __MONTH_DAYS_LEAP :
          __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    }

    function _strftime(s, maxsize, format, tm) {
      var tm_zone = HEAP32[(tm + 40) >> 2];
      var date = {
        tm_sec: HEAP32[tm >> 2],
        tm_min: HEAP32[(tm + 4) >> 2],
        tm_hour: HEAP32[(tm + 8) >> 2],
        tm_mday: HEAP32[(tm + 12) >> 2],
        tm_mon: HEAP32[(tm + 16) >> 2],
        tm_year: HEAP32[(tm + 20) >> 2],
        tm_wday: HEAP32[(tm + 24) >> 2],
        tm_yday: HEAP32[(tm + 28) >> 2],
        tm_isdst: HEAP32[(tm + 32) >> 2],
        tm_gmtoff: HEAP32[(tm + 36) >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : "",
      };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y",
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(
          new RegExp(rule, "g"),
          EXPANSION_RULES_1[rule],
        );
      }
      var WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      function leadingSomething(value, digits, character) {
        var str = typeof value === "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }

      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0");
      }

      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }

      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }

      function getWeekBasedYear(date) {
        var thisDate = __addDays(
          new Date(date.tm_year + 1900, 0, 1),
          date.tm_yday,
        );
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          } else {
            return thisDate.getFullYear();
          }
        } else {
          return thisDate.getFullYear() - 1;
        }
      }
      var EXPANSION_RULES_2 = {
        "%a": function (date) {
          return WEEKDAYS[date.tm_wday].substring(0, 3);
        },
        "%A": function (date) {
          return WEEKDAYS[date.tm_wday];
        },
        "%b": function (date) {
          return MONTHS[date.tm_mon].substring(0, 3);
        },
        "%B": function (date) {
          return MONTHS[date.tm_mon];
        },
        "%C": function (date) {
          var year = date.tm_year + 1900;
          return leadingNulls((year / 100) | 0, 2);
        },
        "%d": function (date) {
          return leadingNulls(date.tm_mday, 2);
        },
        "%e": function (date) {
          return leadingSomething(date.tm_mday, 2, " ");
        },
        "%g": function (date) {
          return getWeekBasedYear(date).toString().substring(2);
        },
        "%G": function (date) {
          return getWeekBasedYear(date);
        },
        "%H": function (date) {
          return leadingNulls(date.tm_hour, 2);
        },
        "%I": function (date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        "%j": function (date) {
          return leadingNulls(
            date.tm_mday +
            __arraySum(
              __isLeapYear(date.tm_year + 1900) ?
              __MONTH_DAYS_LEAP :
              __MONTH_DAYS_REGULAR,
              date.tm_mon - 1,
            ),
            3,
          );
        },
        "%m": function (date) {
          return leadingNulls(date.tm_mon + 1, 2);
        },
        "%M": function (date) {
          return leadingNulls(date.tm_min, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return "AM";
          } else {
            return "PM";
          }
        },
        "%S": function (date) {
          return leadingNulls(date.tm_sec, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (date) {
          return date.tm_wday || 7;
        },
        "%U": function (date) {
          var janFirst = new Date(date.tm_year + 1900, 0, 1);
          var firstSunday =
            janFirst.getDay() === 0 ?
            janFirst :
            __addDays(janFirst, 7 - janFirst.getDay());
          var endDate = new Date(
            date.tm_year + 1900,
            date.tm_mon,
            date.tm_mday,
          );
          if (compareByDay(firstSunday, endDate) < 0) {
            var februaryFirstUntilEndMonth =
              __arraySum(
                __isLeapYear(endDate.getFullYear()) ?
                __MONTH_DAYS_LEAP :
                __MONTH_DAYS_REGULAR,
                endDate.getMonth() - 1,
              ) - 31;
            var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
            var days =
              firstSundayUntilEndJanuary +
              februaryFirstUntilEndMonth +
              endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
        },
        "%V": function (date) {
          var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
          var endDate = __addDays(
            new Date(date.tm_year + 1900, 0, 1),
            date.tm_yday,
          );
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            return "53";
          }
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            return "01";
          }
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
            daysDifference =
              date.tm_yday + 32 - firstWeekStartThisYear.getDate();
          } else {
            daysDifference =
              date.tm_yday + 1 - firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference / 7), 2);
        },
        "%w": function (date) {
          return date.tm_wday;
        },
        "%W": function (date) {
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday =
            janFirst.getDay() === 1 ?
            janFirst :
            __addDays(
              janFirst,
              janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1,
            );
          var endDate = new Date(
            date.tm_year + 1900,
            date.tm_mon,
            date.tm_mday,
          );
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth =
              __arraySum(
                __isLeapYear(endDate.getFullYear()) ?
                __MONTH_DAYS_LEAP :
                __MONTH_DAYS_REGULAR,
                endDate.getMonth() - 1,
              ) - 31;
            var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
            var days =
              firstMondayUntilEndJanuary +
              februaryFirstUntilEndMonth +
              endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
        },
        "%y": function (date) {
          return (date.tm_year + 1900).toString().substring(2);
        },
        "%Y": function (date) {
          return date.tm_year + 1900;
        },
        "%z": function (date) {
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          off = (off / 60) * 100 + (off % 60);
          return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
        },
        "%Z": function (date) {
          return date.tm_zone;
        },
        "%%": function () {
          return "%";
        },
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(
            new RegExp(rule, "g"),
            EXPANSION_RULES_2[rule](date),
          );
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    }

    function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm);
    }

    function _time(ptr) {
      var ret = (Date.now() / 1e3) | 0;
      if (ptr) {
        HEAP32[ptr >> 2] = ret;
      }
      return ret;
    }

    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(
        stringy,
        u8array,
        0,
        u8array.length,
      );
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    }
    var asmLibraryArg = {
      b: ___assert_fail,
      g: ___lock,
      r: ___map_file,
      f: ___syscall221,
      j: ___syscall5,
      i: ___syscall54,
      q: ___syscall91,
      e: ___unlock,
      c: _abort,
      d: _emscripten_asm_const_iii,
      n: _emscripten_memcpy_big,
      o: _emscripten_resize_heap,
      s: _environ_get,
      t: _environ_sizes_get,
      k: _exit,
      h: _fd_close,
      u: _fd_read,
      l: _fd_seek,
      v: _fd_write,
      memory: wasmMemory,
      m: _setTempRet0,
      p: _strftime_l,
      table: wasmTable,
      a: _time,
    };
    var asm = createWasm();
    Module["asm"] = asm;
    var ___wasm_call_ctors = (Module["___wasm_call_ctors"] = function () {
      return (___wasm_call_ctors = Module["___wasm_call_ctors"] =
        Module["asm"]["w"]).apply(null, arguments);
    });
    var __ZN5brfv512BRFv5Manager9configureEv = (Module[
      "__ZN5brfv512BRFv5Manager9configureEv"
    ] = function () {
      return (__ZN5brfv512BRFv5Manager9configureEv = Module[
        "__ZN5brfv512BRFv5Manager9configureEv"
      ] = Module["asm"]["x"]).apply(null, arguments);
    });
    var __ZN5brfv512BRFv5Manager6updateEv = (Module[
      "__ZN5brfv512BRFv5Manager6updateEv"
    ] = function () {
      return (__ZN5brfv512BRFv5Manager6updateEv = Module[
        "__ZN5brfv512BRFv5Manager6updateEv"
      ] = Module["asm"]["y"]).apply(null, arguments);
    });
    var __ZN5brfv512BRFv5Manager5resetEv = (Module[
      "__ZN5brfv512BRFv5Manager5resetEv"
    ] = function () {
      return (__ZN5brfv512BRFv5Manager5resetEv = Module[
        "__ZN5brfv512BRFv5Manager5resetEv"
      ] = Module["asm"]["z"]).apply(null, arguments);
    });
    var __ZN5brfv512BRFv5Manager16getDetectedRectsEv = (Module[
      "__ZN5brfv512BRFv5Manager16getDetectedRectsEv"
    ] = function () {
      return (__ZN5brfv512BRFv5Manager16getDetectedRectsEv = Module[
        "__ZN5brfv512BRFv5Manager16getDetectedRectsEv"
      ] = Module["asm"]["A"]).apply(null, arguments);
    });
    var __ZN5brfv512BRFv5Manager14getMergedRectsEv = (Module[
      "__ZN5brfv512BRFv5Manager14getMergedRectsEv"
    ] = function () {
      return (__ZN5brfv512BRFv5Manager14getMergedRectsEv = Module[
        "__ZN5brfv512BRFv5Manager14getMergedRectsEv"
      ] = Module["asm"]["B"]).apply(null, arguments);
    });
    var __ZN5brfv512BRFv5Manager8getFacesEv = (Module[
      "__ZN5brfv512BRFv5Manager8getFacesEv"
    ] = function () {
      return (__ZN5brfv512BRFv5Manager8getFacesEv = Module[
        "__ZN5brfv512BRFv5Manager8getFacesEv"
      ] = Module["asm"]["C"]).apply(null, arguments);
    });
    var ___original_main = (Module["___original_main"] = function () {
      return (___original_main = Module["___original_main"] =
        Module["asm"]["D"]).apply(null, arguments);
    });
    var ___brfv5__api__configure = (Module[
      "___brfv5__api__configure"
    ] = function () {
      return (___brfv5__api__configure = Module["___brfv5__api__configure"] =
        Module["asm"]["E"]).apply(null, arguments);
    });
    var ___brfv5__api__setupModel = (Module[
      "___brfv5__api__setupModel"
    ] = function () {
      return (___brfv5__api__setupModel = Module["___brfv5__api__setupModel"] =
        Module["asm"]["F"]).apply(null, arguments);
    });
    var ___brfv5__api__update = (Module["___brfv5__api__update"] = function () {
      return (___brfv5__api__update = Module["___brfv5__api__update"] =
        Module["asm"]["G"]).apply(null, arguments);
    });
    var ___brfv5__api__reset = (Module["___brfv5__api__reset"] = function () {
      return (___brfv5__api__reset = Module["___brfv5__api__reset"] =
        Module["asm"]["H"]).apply(null, arguments);
    });
    var ___brfv5__api__getDetectedRects_size = (Module[
      "___brfv5__api__getDetectedRects_size"
    ] = function () {
      return (___brfv5__api__getDetectedRects_size = Module[
        "___brfv5__api__getDetectedRects_size"
      ] = Module["asm"]["I"]).apply(null, arguments);
    });
    var ___brfv5__api__getMergedRects_size = (Module[
      "___brfv5__api__getMergedRects_size"
    ] = function () {
      return (___brfv5__api__getMergedRects_size = Module[
        "___brfv5__api__getMergedRects_size"
      ] = Module["asm"]["J"]).apply(null, arguments);
    });
    var ___brfv5__api__getFaces_size = (Module[
      "___brfv5__api__getFaces_size"
    ] = function () {
      return (___brfv5__api__getFaces_size = Module[
        "___brfv5__api__getFaces_size"
      ] = Module["asm"]["K"]).apply(null, arguments);
    });
    var ___brfv5__api__getFace_size = (Module[
      "___brfv5__api__getFace_size"
    ] = function () {
      return (___brfv5__api__getFace_size = Module[
        "___brfv5__api__getFace_size"
      ] = Module["asm"]["L"]).apply(null, arguments);
    });
    var ___brfv5__api__getDetectedRects = (Module[
      "___brfv5__api__getDetectedRects"
    ] = function () {
      return (___brfv5__api__getDetectedRects = Module[
        "___brfv5__api__getDetectedRects"
      ] = Module["asm"]["M"]).apply(null, arguments);
    });
    var ___brfv5__api__getMergedRects = (Module[
      "___brfv5__api__getMergedRects"
    ] = function () {
      return (___brfv5__api__getMergedRects = Module[
        "___brfv5__api__getMergedRects"
      ] = Module["asm"]["N"]).apply(null, arguments);
    });
    var ___brfv5__api__getFaces = (Module[
      "___brfv5__api__getFaces"
    ] = function () {
      return (___brfv5__api__getFaces = Module["___brfv5__api__getFaces"] =
        Module["asm"]["O"]).apply(null, arguments);
    });
    var _free = (Module["_free"] = function () {
      return (_free = Module["_free"] = Module["asm"]["P"]).apply(
        null,
        arguments,
      );
    });
    var _malloc = (Module["_malloc"] = function () {
      return (_malloc = Module["_malloc"] = Module["asm"]["Q"]).apply(
        null,
        arguments,
      );
    });
    var _main = (Module["_main"] = function () {
      return (_main = Module["_main"] = Module["asm"]["R"]).apply(
        null,
        arguments,
      );
    });
    var stackSave = (Module["stackSave"] = function () {
      return (stackSave = Module["stackSave"] = Module["asm"]["S"]).apply(
        null,
        arguments,
      );
    });
    var stackAlloc = (Module["stackAlloc"] = function () {
      return (stackAlloc = Module["stackAlloc"] = Module["asm"]["T"]).apply(
        null,
        arguments,
      );
    });
    var stackRestore = (Module["stackRestore"] = function () {
      return (stackRestore = Module["stackRestore"] = Module["asm"]["U"]).apply(
        null,
        arguments,
      );
    });
    var dynCall_vi = (Module["dynCall_vi"] = function () {
      return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["V"]).apply(
        null,
        arguments,
      );
    });
    var dynCall_ii = (Module["dynCall_ii"] = function () {
      return (dynCall_ii = Module["dynCall_ii"] = Module["asm"]["W"]).apply(
        null,
        arguments,
      );
    });
    var dynCall_vii = (Module["dynCall_vii"] = function () {
      return (dynCall_vii = Module["dynCall_vii"] = Module["asm"]["X"]).apply(
        null,
        arguments,
      );
    });
    var dynCall_iiii = (Module["dynCall_iiii"] = function () {
      return (dynCall_iiii = Module["dynCall_iiii"] = Module["asm"]["Y"]).apply(
        null,
        arguments,
      );
    });
    var dynCall_viijii = (Module["dynCall_viijii"] = function () {
      return (dynCall_viijii = Module["dynCall_viijii"] =
        Module["asm"]["Z"]).apply(null, arguments);
    });
    var dynCall_viiii = (Module["dynCall_viiii"] = function () {
      return (dynCall_viiii = Module["dynCall_viiii"] =
        Module["asm"]["_"]).apply(null, arguments);
    });
    var dynCall_iii = (Module["dynCall_iii"] = function () {
      return (dynCall_iii = Module["dynCall_iii"] = Module["asm"]["$"]).apply(
        null,
        arguments,
      );
    });
    var dynCall_viii = (Module["dynCall_viii"] = function () {
      return (dynCall_viii = Module["dynCall_viii"] =
        Module["asm"]["aa"]).apply(null, arguments);
    });
    var dynCall_jiji = (Module["dynCall_jiji"] = function () {
      return (dynCall_jiji = Module["dynCall_jiji"] =
        Module["asm"]["ba"]).apply(null, arguments);
    });
    var dynCall_iidiiii = (Module["dynCall_iidiiii"] = function () {
      return (dynCall_iidiiii = Module["dynCall_iidiiii"] =
        Module["asm"]["ca"]).apply(null, arguments);
    });
    var dynCall_iiiii = (Module["dynCall_iiiii"] = function () {
      return (dynCall_iiiii = Module["dynCall_iiiii"] =
        Module["asm"]["da"]).apply(null, arguments);
    });
    var dynCall_iiiiii = (Module["dynCall_iiiiii"] = function () {
      return (dynCall_iiiiii = Module["dynCall_iiiiii"] =
        Module["asm"]["ea"]).apply(null, arguments);
    });
    var dynCall_iiiiiiiii = (Module["dynCall_iiiiiiiii"] = function () {
      return (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] =
        Module["asm"]["fa"]).apply(null, arguments);
    });
    var dynCall_iiiiiii = (Module["dynCall_iiiiiii"] = function () {
      return (dynCall_iiiiiii = Module["dynCall_iiiiiii"] =
        Module["asm"]["ga"]).apply(null, arguments);
    });
    var dynCall_iiiiij = (Module["dynCall_iiiiij"] = function () {
      return (dynCall_iiiiij = Module["dynCall_iiiiij"] =
        Module["asm"]["ha"]).apply(null, arguments);
    });
    var dynCall_iiiiid = (Module["dynCall_iiiiid"] = function () {
      return (dynCall_iiiiid = Module["dynCall_iiiiid"] =
        Module["asm"]["ia"]).apply(null, arguments);
    });
    var dynCall_iiiiijj = (Module["dynCall_iiiiijj"] = function () {
      return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] =
        Module["asm"]["ja"]).apply(null, arguments);
    });
    var dynCall_iiiiiiii = (Module["dynCall_iiiiiiii"] = function () {
      return (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] =
        Module["asm"]["ka"]).apply(null, arguments);
    });
    var dynCall_iiiiiijj = (Module["dynCall_iiiiiijj"] = function () {
      return (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] =
        Module["asm"]["la"]).apply(null, arguments);
    });
    var dynCall_viiiiii = (Module["dynCall_viiiiii"] = function () {
      return (dynCall_viiiiii = Module["dynCall_viiiiii"] =
        Module["asm"]["ma"]).apply(null, arguments);
    });
    var dynCall_v = (Module["dynCall_v"] = function () {
      return (dynCall_v = Module["dynCall_v"] = Module["asm"]["na"]).apply(
        null,
        arguments,
      );
    });
    var dynCall_viiiii = (Module["dynCall_viiiii"] = function () {
      return (dynCall_viiiii = Module["dynCall_viiiii"] =
        Module["asm"]["oa"]).apply(null, arguments);
    });
    Module["asm"] = asm;
    Module["ccall"] = ccall;
    Module["cwrap"] = cwrap;
    Module["UTF8ToString"] = UTF8ToString;
    Module["stringToUTF8"] = stringToUTF8;
    Module["dynCall"] = dynCall;
    var calledRun;
    Module["then"] = function (func) {
      if (calledRun) {
        func(Module);
      } else {
        var old = Module["onRuntimeInitialized"];
        Module["onRuntimeInitialized"] = function () {
          if (old) old();
          func(Module);
        };
      }
      return Module;
    };

    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    var calledMain = false;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };

    function callMain(args) {
      var entryFunction = Module["_main"];
      var argc = 0;
      var argv = 0;
      try {
        var ret = entryFunction(argc, argv);
        exit(ret, true);
      } catch (e) {
        if (e instanceof ExitStatus) {
          return;
        } else if (e == "unwind") {
          noExitRuntime = true;
          return;
        } else {
          var toLog = e;
          if (e && typeof e === "object" && e.stack) {
            toLog = [e, e.stack];
          }
          err("exception thrown: " + toLog);
          quit_(1, e);
        }
      } finally {
        calledMain = true;
      }
    }

    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) return;

      function doRun() {
        if (calledRun) return;
        calledRun = true;
        if (ABORT) return;
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        if (shouldRunNow) callMain(args);
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    Module["run"] = run;

    function exit(status, implicit) {
      if (implicit && noExitRuntime && status === 0) {
        return;
      }
      if (noExitRuntime) {} else {
        ABORT = true;
        EXITSTATUS = status;
        exitRuntime();
        if (Module["onExit"]) Module["onExit"](status);
      }
      quit_(status, new ExitStatus(status));
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    var shouldRunNow = true;
    if (Module["noInitialRun"]) shouldRunNow = false;
    noExitRuntime = true;
    run();
    (function (lib) {
      "use strict";
      lib["sdkReady"] = false;
      lib["sdkConfigured"] = false;
      var _void = null;
      var _int = "number";
      var _uint8Array = "number";
      var _float32Array = "number";
      var _noArgs = [];
      var _float32Bytes = new Float32Array(1).BYTES_PER_ELEMENT;
      var _uint8Bytes = new Uint8Array(1).BYTES_PER_ELEMENT;
      var resizeArray = function (array, length) {
        if (array.length > length) {
          array.splice(length, array.length - length);
        } else {
          array.length = length;
        }
      };
      var resizeArrayRectangles = function (array, length) {
        if (array.length > length) {
          array.splice(length, array.length - length);
        }
        if (array.length < length) {
          var i = array.length;
          while (i < length) {
            array[i] = new lib["BRFv5Rectangle"](0, 0, 0, 0);
            ++i;
          }
        }
      };
      var resizeArrayFaces = function (array, length) {
        if (array.length > length) {
          array.splice(length, array.length - length);
        }
        if (array.length < length) {
          var i = array.length;
          while (i < length) {
            array[i] = new lib["BRFv5Face"]();
            ++i;
          }
        }
      };
      var resizeArrayLandmarks = function (array, length) {
        if (array.length > length) {
          array.splice(length, array.length - length);
        }
        if (array.length < length) {
          var i = array.length;
          while (i < length) {
            array[i] = new lib["BRFv5Landmark"](0, 0);
            ++i;
          }
        }
      };
      var mapFloat32DataToRectangle = function (rect, data, k) {
        rect["x"] = data[k];
        rect["y"] = data[k + 1];
        rect["width"] = data[k + 2];
        rect["height"] = data[k + 3];
        return k + 4;
      };
      var mapFloat32DataToFace = function (face, data, k, elementSize) {
        var state = data[k++];
        face["state"] =
          state === 0 ?
          lib["BRFv5State"]["RESET"] :
          state === 1 ?
          lib["BRFv5State"]["FACE_DETECTION"] :
          lib["BRFv5State"]["FACE_TRACKING"];
        face["confidence"] = data[k++];
        face["scale"] = data[k++];
        face["translationX"] = data[k++];
        face["translationY"] = data[k++];
        face["rotationX"] = data[k++];
        face["rotationY"] = data[k++];
        face["rotationZ"] = data[k++];
        face["bounds"]["x"] = data[k++];
        face["bounds"]["y"] = data[k++];
        face["bounds"]["width"] = data[k++];
        face["bounds"]["height"] = data[k++];
        var numLandmarks = elementSize - 8 - 4;
        numLandmarks /= 2;
        resizeArrayLandmarks(face["landmarks"], numLandmarks);
        resizeArray(face["vertices"], numLandmarks * 2);
        for (var i = 0; i < numLandmarks; i++) {
          var x = data[k++];
          var y = data[k++];
          var landmark = face["landmarks"][i];
          landmark["x"] = x;
          landmark["y"] = y;
          face["vertices"][i * 2] = x;
          face["vertices"][i * 2 + 1] = y;
        }
        return k;
      };
      var mapFloat32DataToRectangleArray = function (array, data, numElements) {
        resizeArrayRectangles(array, numElements);
        var i = 0;
        var k = 0;
        while (i < numElements) {
          k = mapFloat32DataToRectangle(array[i], data, k);
          i += 1;
        }
      };
      var mapFloat32DataToFaceArray = function (
        array,
        data,
        numElements,
        dataSizeFace,
      ) {
        resizeArrayFaces(array, numElements);
        var i = 0;
        var k = 0;
        while (i < numElements) {
          k = mapFloat32DataToFace(array[i], data, k, dataSizeFace);
          i += 1;
        }
      };
      var __brfv5__api__getDetectedRects_size = lib["cwrap"](
        "__brfv5__api__getDetectedRects_size",
        _int,
        _noArgs,
      );
      var __brfv5__api__getMergedRects_size = lib["cwrap"](
        "__brfv5__api__getMergedRects_size",
        _int,
        _noArgs,
      );
      var __brfv5__api__getFaces_size = lib["cwrap"](
        "__brfv5__api__getFaces_size",
        _int,
        _noArgs,
      );
      var __brfv5__api__getFace_size = lib["cwrap"](
        "__brfv5__api__getFace_size",
        _int,
        _noArgs,
      );
      var __brfv5__api__getDetectedRects = lib[
        "cwrap"
      ]("__brfv5__api__getDetectedRects", _int, [_float32Array]);
      var __brfv5__api__getMergedRects = lib[
        "cwrap"
      ]("__brfv5__api__getMergedRects", _int, [_float32Array]);
      var __brfv5__api__getFaces = lib["cwrap"](
        "__brfv5__api__getFaces",
        _int,
        [_float32Array],
      );
      var __brfv5__api__configure = lib["cwrap"](
        "__brfv5__api__configure",
        _int,
        [_float32Array],
      );
      var __brfv5__api__setupModel = lib["cwrap"](
        "__brfv5__api__setupModel",
        _void,
        [_int, _uint8Array, _int],
      );
      var __brfv5__api__update = lib["cwrap"]("__brfv5__api__update", _void, [
        _uint8Array,
      ]);
      var __brfv5__api__reset = lib["cwrap"](
        "__brfv5__api__reset",
        _void,
        _noArgs,
      );
      var __configuredImageDataWidth = 0;
      var __configuredImageDataHeight = 0;
      var __configure = function (config) {
        if (config) {
          var numConfigElements = 2 + 12 + 20 + 1;
          _increaseCacheConfig(numConfigElements);
          var setDefault = lib["defaultValue"];
          for (var i = 0; i < numConfigElements; i++) {
            _cacheArrayConfig[i] = -1;
          }
          if (config["imageConfig"]) {
            _cacheArrayConfig[0] = setDefault(
              config["imageConfig"]["inputWidth"],
              -1,
            );
            _cacheArrayConfig[1] = setDefault(
              config["imageConfig"]["inputHeight"],
              -1,
            );
          }
          if (config["faceDetectionConfig"]) {
            if (config["faceDetectionConfig"]["regionOfInterest"]) {
              _cacheArrayConfig[2] = setDefault(
                config["faceDetectionConfig"]["regionOfInterest"]["x"],
                -1,
              );
              _cacheArrayConfig[3] = setDefault(
                config["faceDetectionConfig"]["regionOfInterest"]["y"],
                -1,
              );
              _cacheArrayConfig[4] = setDefault(
                config["faceDetectionConfig"]["regionOfInterest"]["width"],
                -1,
              );
              _cacheArrayConfig[5] = setDefault(
                config["faceDetectionConfig"]["regionOfInterest"]["height"],
                -1,
              );
            }
            _cacheArrayConfig[6] = setDefault(
              config["faceDetectionConfig"]["minFaceSize"],
              -1,
            );
            _cacheArrayConfig[7] = setDefault(
              config["faceDetectionConfig"]["maxFaceSize"],
              -1,
            );
            _cacheArrayConfig[8] = setDefault(
              config["faceDetectionConfig"]["faceSizeIncrease"],
              -1,
            );
            _cacheArrayConfig[9] = setDefault(
              config["faceDetectionConfig"]["stepSize"],
              -1,
            );
            _cacheArrayConfig[10] = setDefault(
              config["faceDetectionConfig"]["minNumNeighbors"],
              -1,
            );
            _cacheArrayConfig[11] = setDefault(
              config["faceDetectionConfig"]["rectMergeFactor"],
              -1,
            );
            _cacheArrayConfig[12] = setDefault(
              config["faceDetectionConfig"]["rectSkipFactor"],
              -1,
            );
            _cacheArrayConfig[13] = setDefault(
              config["faceDetectionConfig"]["filterNoise"],
              -1,
            );
          }
          if (config["faceTrackingConfig"]) {
            if (config["faceTrackingConfig"]["regionOfInterest"]) {
              _cacheArrayConfig[14] = setDefault(
                config["faceTrackingConfig"]["regionOfInterest"]["x"],
                -1,
              );
              _cacheArrayConfig[15] = setDefault(
                config["faceTrackingConfig"]["regionOfInterest"]["y"],
                -1,
              );
              _cacheArrayConfig[16] = setDefault(
                config["faceTrackingConfig"]["regionOfInterest"]["width"],
                -1,
              );
              _cacheArrayConfig[17] = setDefault(
                config["faceTrackingConfig"]["regionOfInterest"]["height"],
                -1,
              );
            }
            _cacheArrayConfig[18] = setDefault(
              config["faceTrackingConfig"]["numFacesToTrack"],
              -1,
            );
            _cacheArrayConfig[19] = setDefault(
              config["faceTrackingConfig"]["numTrackingPasses"],
              -1,
            );
            _cacheArrayConfig[20] = setDefault(
              config["faceTrackingConfig"]["minFaceScaleStart"],
              -1,
            );
            _cacheArrayConfig[21] = setDefault(
              config["faceTrackingConfig"]["maxFaceScaleStart"],
              -1,
            );
            _cacheArrayConfig[22] = setDefault(
              config["faceTrackingConfig"]["maxRotationXStart"],
              -1,
            );
            _cacheArrayConfig[23] = setDefault(
              config["faceTrackingConfig"]["maxRotationYStart"],
              -1,
            );
            _cacheArrayConfig[24] = setDefault(
              config["faceTrackingConfig"]["maxRotationZStart"],
              -1,
            );
            _cacheArrayConfig[25] = setDefault(
              config["faceTrackingConfig"]["confidenceThresholdStart"],
              -1,
            );
            _cacheArrayConfig[26] = setDefault(
              config["faceTrackingConfig"]["minFaceScaleReset"],
              -1,
            );
            _cacheArrayConfig[27] = setDefault(
              config["faceTrackingConfig"]["maxFaceScaleReset"],
              -1,
            );
            _cacheArrayConfig[28] = setDefault(
              config["faceTrackingConfig"]["maxRotationXReset"],
              -1,
            );
            _cacheArrayConfig[29] = setDefault(
              config["faceTrackingConfig"]["maxRotationYReset"],
              -1,
            );
            _cacheArrayConfig[30] = setDefault(
              config["faceTrackingConfig"]["maxRotationZReset"],
              -1,
            );
            _cacheArrayConfig[31] = setDefault(
              config["faceTrackingConfig"]["confidenceThresholdReset"],
              -1,
            );
            _cacheArrayConfig[32] = setDefault(
              config["faceTrackingConfig"]["enableStabilizer"],
              -1,
            );
            _cacheArrayConfig[33] = setDefault(
              config["faceTrackingConfig"]["enableFreeRotation"],
              -1,
            );
          }
          _cacheArrayConfig[34] = setDefault(config["enableFaceTracking"], -1);
          __brfv5__api__configure(_cachePtrConfig);
        }
      };
      var __modelDataPtr = null;
      var __modelDataSize = 0;
      var __setupModel = function (chunk, data) {
        var currentSize = data["length"] * _uint8Bytes;
        if (
          !__modelDataPtr ||
          __modelDataSize === 0 ||
          currentSize > __modelDataSize
        ) {
          if (__modelDataPtr >= 0) {
            lib["_free"](__modelDataPtr);
          }
          __modelDataSize = currentSize;
          __modelDataPtr = lib["_malloc"](__modelDataSize);
        }
        lib["HEAPU8"].set(data, __modelDataPtr);
        __brfv5__api__setupModel(chunk, __modelDataPtr, data["length"]);
      };
      var __imageDataPtr = null;
      var __imageDataSize = 0;
      var __update = function (imageData) {
        var currentSize = imageData["data"]["length"] * _uint8Bytes;
        if (
          !__imageDataPtr ||
          __imageDataSize === 0 ||
          currentSize > __imageDataSize
        ) {
          if (__imageDataPtr >= 0) {
            lib["_free"](__imageDataPtr);
          }
          __imageDataSize = currentSize;
          __imageDataPtr = lib["_malloc"](__imageDataSize);
        }
        lib["HEAPU8"].set(imageData["data"], __imageDataPtr);
        __brfv5__api__update(__imageDataPtr);
      };
      var __reset = function () {
        __brfv5__api__reset();
      };
      var _cacheSizeDetectedRects = 0;
      var _cacheSizeMergedRects = 0;
      var _cacheSizeFaces = 0;
      var _cacheSizeConfig = 0;
      var _cachePtrDetectedRects = -1;
      var _cacheArrayDetectedRects = null;
      var _cachePtrMergedRects = -1;
      var _cacheArrayMergedRects = null;
      var _cachePtrFaces = -1;
      var _cacheArrayFaces = null;
      var _cachePtrConfig = -1;
      var _cacheArrayConfig = null;
      var _increaseCacheDetectedRects = function (numElements) {
        if (numElements < 512) numElements = 512;
        var dataSizeDetectedRects = numElements * 4 * _float32Bytes;
        if (dataSizeDetectedRects > _cacheSizeDetectedRects) {
          if (_cachePtrDetectedRects >= 0) {
            lib["_free"](_cachePtrDetectedRects);
          }
          _cacheSizeDetectedRects = dataSizeDetectedRects;
          _cachePtrDetectedRects = lib["_malloc"](_cacheSizeDetectedRects);
        }
        if (
          !_cacheArrayDetectedRects ||
          _cacheArrayDetectedRects["length"] !== numElements
        ) {
          _cacheArrayDetectedRects = new Float32Array(
            lib["HEAPU8"]["buffer"],
            _cachePtrDetectedRects,
            numElements,
          );
        }
      };
      var _increaseCacheMergedRects = function (numElements) {
        if (numElements < 64) numElements = 64;
        var dataSizeMergedRects = numElements * 4 * _float32Bytes;
        if (dataSizeMergedRects > _cacheSizeMergedRects) {
          if (_cachePtrMergedRects >= 0) {
            lib["_free"](_cachePtrMergedRects);
          }
          _cacheSizeMergedRects = dataSizeMergedRects;
          _cachePtrMergedRects = lib["_malloc"](_cacheSizeMergedRects);
        }
        if (
          !_cacheArrayMergedRects ||
          _cacheArrayMergedRects["length"] !== numElements
        ) {
          _cacheArrayMergedRects = new Float32Array(
            lib["HEAPU8"]["buffer"],
            _cachePtrMergedRects,
            numElements,
          );
        }
      };
      var _increaseCacheFaces = function (numElements, dataSizeFace) {
        if (numElements < 1) numElements = 1;
        if (numElements < 64) numElements = 64;
        if (dataSizeFace < 1) dataSizeFace = 1;
        var dataSizeFaces = numElements * dataSizeFace * _float32Bytes;
        if (dataSizeFaces > _cacheSizeFaces) {
          if (_cachePtrFaces >= 0) {
            lib["_free"](_cachePtrFaces);
          }
          _cacheSizeFaces = dataSizeFaces;
          _cachePtrFaces = lib["_malloc"](_cacheSizeFaces);
        }
        if (
          !_cacheArrayFaces ||
          _cacheArrayFaces["length"] !== numElements * dataSizeFace
        ) {
          _cacheArrayFaces = new Float32Array(
            lib["HEAPU8"]["buffer"],
            _cachePtrFaces,
            numElements * dataSizeFace,
          );
        }
      };
      var _increaseCacheConfig = function (numConfigElements) {
        var dataSizeConfig = numConfigElements * _float32Bytes;
        if (dataSizeConfig > _cacheSizeConfig) {
          if (_cachePtrConfig >= 0) {
            lib["_free"](_cachePtrConfig);
          }
          _cacheSizeConfig = dataSizeConfig;
          _cachePtrConfig = lib["_malloc"](_cacheSizeConfig);
        }
        if (
          !_cacheArrayConfig ||
          _cacheArrayConfig["length"] !== numConfigElements
        ) {
          _cacheArrayConfig = new Float32Array(
            lib["HEAPU8"]["buffer"],
            _cachePtrConfig,
            numConfigElements,
          );
        }
      };
      var __fetchResults = function (_detectedRects, _mergedRects, _faces) {
        var numDetectedRects = __brfv5__api__getDetectedRects_size();
        var numMergedRects = __brfv5__api__getMergedRects_size();
        var numFaces = __brfv5__api__getFaces_size();
        var dataSizeFace = __brfv5__api__getFace_size();
        _increaseCacheDetectedRects(numDetectedRects);
        _increaseCacheMergedRects(numMergedRects);
        _increaseCacheFaces(numFaces, dataSizeFace);
        if (numDetectedRects <= 0) {
          _detectedRects.length = 0;
        } else {
          __brfv5__api__getDetectedRects(_cachePtrDetectedRects);
          mapFloat32DataToRectangleArray(
            _detectedRects,
            _cacheArrayDetectedRects,
            numDetectedRects,
          );
        }
        if (numMergedRects <= 0) {
          _mergedRects.length = 0;
        } else {
          __brfv5__api__getMergedRects(_cachePtrMergedRects);
          mapFloat32DataToRectangleArray(
            _mergedRects,
            _cacheArrayMergedRects,
            numMergedRects,
          );
        }
        if (numFaces <= 0) {
          _faces.length = 0;
        } else {
          __brfv5__api__getFaces(_cachePtrFaces);
          mapFloat32DataToFaceArray(
            _faces,
            _cacheArrayFaces,
            numFaces,
            dataSizeFace,
          );
        }
      };
      var BRFv5Manager = function () {
        var _self = this;
        var _detectedRects = [];
        var _mergedRects = [];
        var _faces = [];
        var _errors = {
          referToExamples: " Please refer to the BRFv5 examples on GitHub for the correct usage.",
          sdkNotReady: "Error 0001: SDK is not ready yet.",
          expectedJson: "Error 0002: BRFv5Manager.configure(config): expected config in json format (string or object).",
          noBRFv5Config: "Error 0003: BRFv5Manager.configure(config): expected a valid BRFv5 config.",
          sdkNotConfigured: "Warning 0004: BRFv5Manager.update(imageData): BRFv5 was not configured. Using defaults.",
          configImageData: "Warning 0005: BRFv5Manager.update(imageData): automatic ImageData configuration (width, height).",
          missingImageData: "Error 0006: BRFv5Manager.update(imageData): expected ImageData.",
          invalidImageData: "Error 0007: BRFv5Manager.update(imageData): invalid ImageData. BRFv5 uses the ImageData object instead of ImageData.data.",
        };
        _self["configure"] = function (config) {
          if (!lib["sdkReady"]) {
            throw _errors.sdkNotReady + _errors.referToExamples;
          }
          if (!config) {
            throw _errors.expectedJson + _errors.referToExamples;
          }
          var _config = JSON.stringify(config).toString();
          try {
            _config = JSON.parse(_config);
            if (
              _config["imageConfig"] ||
              _config["faceDetectionConfig"] ||
              _config["faceTrackingConfig"] ||
              _config["enableFaceTracking"]
            ) {
              if (_config["imageConfig"]) {
                if (_config["imageConfig"]["inputWidth"]) {
                  __configuredImageDataWidth =
                    _config["imageConfig"]["inputWidth"];
                }
                if (_config["imageConfig"]["inputHeight"]) {
                  __configuredImageDataHeight =
                    _config["imageConfig"]["inputHeight"];
                }
              }
            } else {
              _config = null;
            }
          } catch (error) {
            _config = null;
          }
          if (!_config) {
            throw _errors.noBRFv5Config + _errors.referToExamples;
          }
          __configure(_config);
        };
        _self["setupModel"] = function (chunk, data) {
          if (!lib["sdkReady"]) {
            throw _errors.sdkNotReady + _errors.referToExamples;
          }
          __setupModel(chunk, data);
        };
        _self["update"] = function (imageData) {
          if (!lib["sdkReady"]) {
            throw _errors.sdkNotReady + _errors.referToExamples;
          }
          if (!imageData) {
            throw _errors.missingImageData + _errors.referToExamples;
          }
          if (
            !imageData["width"] ||
            !imageData["height"] ||
            !imageData["data"]
          ) {
            throw _errors.invalidImageData + _errors.referToExamples;
          }
          if (!lib["sdkConfigured"] && !lib["sdkConfiguredTraced"]) {
            lib["warn"](_errors.sdkNotConfigured + _errors.referToExamples);
            lib["sdkConfiguredTraced"] = true;
          }
          if (
            imageData["width"] !== __configuredImageDataWidth ||
            imageData["height"] !== __configuredImageDataHeight
          ) {
            lib["warn"](_errors.configImageData + _errors.referToExamples);
            var imageConfig = {};
            imageConfig["imageConfig"] = {};
            imageConfig["imageConfig"]["inputWidth"] = imageData["width"];
            imageConfig["imageConfig"]["inputHeight"] = imageData["height"];
            _self["configure"](imageConfig);
          }
          __update(imageData);
          __fetchResults(_detectedRects, _mergedRects, _faces);
        };
        _self["reset"] = function () {
          if (!lib["sdkReady"]) {
            throw _errors.sdkNotReady + _errors.referToExamples;
          }
          __reset();
          __fetchResults(_detectedRects, _mergedRects, _faces);
        };
        _self["getDetectedRects"] = function () {
          return _detectedRects;
        };
        _self["getMergedRects"] = function () {
          return _mergedRects;
        };
        _self["getFaces"] = function () {
          return _faces;
        };
      };
      lib["BRFv5Manager"] = new BRFv5Manager();
      lib["BRFv5Manager"]["getInstance"] = function () {
        return lib["BRFv5Manager"];
      };
      lib["onSDKReady"] = function () {
        lib["sdkReady"] = true;
        var numChunks = lib["brfv5ModelChunks"].length;
        for (var i = 0; i < numChunks; i++) {
          lib["BRFv5Manager"]["setupModel"](i, lib["brfv5ModelChunks"][i]);
        }
        if (
          lib["onInit"] && {}.toString.call(lib["onInit"]) === "[object Function]"
        ) {
          lib["onInit"](
            lib["BRFv5Manager"]["getInstance"](),
            lib["BRFv5Config"]["createInstance"](),
          );
        } else {
          lib["trace"]("BRFv5 is ready.");
        }
      };
      lib["onSDKConfigured"] = function () {
        lib["sdkConfigured"] = true;
        lib["sdkConfiguredTraced"] = false;
      };
    })(Module);

    return brfv5Module;
  };
})();
