/* JavaScript Virtual Keyboard (slim variant), version 2.7
 * (compressed with ESC: http://www.saltstorm.net/depo/esc/)
 *
 * (C) 2006-2008 Dmitriy Khudorozhkov (mailto:dmitrykhudorozhkov@yahoo.com)
 *
 * This software is provided "as-is", without any express or implied warranty.
 * In no event will the author be held liable for any damages arising from the
 * use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 *
 * 3. This notice may not be removed or altered from any source distribution.
 */
function VKeyboard($a, $b, $c, $d, $e, $f, $g, $h, $i, $j, $k, $l, $m, $n, $o, $p, $q, $r, $s, $t, $u, $v, $w, $x) {
  return this.$0v($a, $b, $c, $d, $e, $f, $g, $h, $i, $j, $k, $l, $m, $n, $o, $p, $q, $r, $s, $t, $u, $v, $w, $x);
};
VKeyboard.kbArray = [];
VKeyboard.prototype = {
  $y: function(event) {
    var e = event || window.event;
    return e.srcElement || e.target;
  },
  $z: function($A, $B, $C) {
    return ($A.attachEvent ? $A.attachEvent("on" + $B, $C) : (($A.addEventListener) ? $A.addEventListener($B, $C, false) : null));
  },
  $D: function($A, $B, $C) {
    return ($A.detachEvent ? $A.detachEvent("on" + $B, $C) : (($A.removeEventListener) ? $A.removeEventListener($B, $C, false) : null));
  },
  $E: function($F) {
    function getColor($G, $H, $I) {
      if (/rgb\((\d+),\s(\d+),\s(\d+)\)/.exec($G)) {
        switch ($H) {
        case 1:
          return parseInt(RegExp.$1, 10);
        case 2:
          return parseInt(RegExp.$2, 10);
        case 3:
          return parseInt(RegExp.$3, 10);
        default:
          return 0;
        }
      } else return $G.length == 4 ? parseInt($G.substr($H, 1) + $G.substr($H, 1), 16) : parseInt($G.substr($I, 2), 16);
    };

    function getR($J) {
      return getColor($J, 1, 1);
    };

    function getG($J) {
      return getColor($J, 2, 3);
    };

    function getB($J) {
      return getColor($J, 3, 5);
    };
    var el = $F.time ? $F : ($F.company && $F.company.time ? $F.company : null);
    if (el) {
      el.time = 0;
      clearInterval(el.timer);
    };
    var $K = this;
    var $L = $K.fontcolor,
      $M = $K.keycolor,
      $N = $K.bordercolor;
    if ($F.dead) $L = $K.deadcolor;
    if ((($F.innerHTML == "Shift") && $K.Shift) || (($F.innerHTML == "Caps") && $K.Caps) || (($F.innerHTML == "AltGr") && $K.AltGr)) $M = $K.lic;
    var fr = getR($L),
      fg = getG($L),
      fb = getB($L);
    var kr = getR($M),
      kg = getG($M),
      kb = getB($M);
    var br = getR($N),
      bg = getG($N),
      bb = getB($N);
    var $O = getR($K.cfc),
      $P = getG($K.cfc),
      $Q = getB($K.cfc);
    var $R = getR($K.cbg),
      $S = getG($K.cbg),
      $T = getB($K.cbg);
    var $U = getR($K.cbr),
      $V = getG($K.cbr),
      $W = getB($K.cbr);
    var $X = function() {
        function dec2hex($Y) {
          var $Z = "0123456789ABCDEF";
          var a = $Y % 16;
          var b = ($Y - a) / 16;
          return $Z.charAt(b) + $Z.charAt(a) + "";
        };
        $F.time = !$F.time ? 10 : ($F.time - 1);

        function calc_color($00, end) {
          return (end - ($F.time / 10) * (end - $00));
        };
        var $01 = calc_color($O, fr),
          $02 = calc_color($P, fg),
          $03 = calc_color($Q, fb);
        var $04 = calc_color($R, kr),
          $05 = calc_color($S, kg),
          $06 = calc_color($T, kb);
        var $07 = calc_color($U, br),
          $08 = calc_color($V, bg),
          $09 = calc_color($W, bb);

        function setStyles(style) {
          style.color = "#" + dec2hex($01) + dec2hex($02) + dec2hex($03);
          style.borderColor = "#" + dec2hex($07) + dec2hex($08) + dec2hex($09);
          style.backgroundColor = "#" + dec2hex($04) + dec2hex($05) + dec2hex($06);
        };
        var $0a = ($F == $K.mod[4]) ? false : true,
          is = $F.style,
          cs = $F.company ? $F.company.style : null;
        if (cs && $0a) setStyles(cs);
        setStyles(is);
        if (cs) {
          if (!$0a) {
            setStyles(cs);
            is.borderBottomColor = "#" + dec2hex($04) + dec2hex($05) + dec2hex($06);
          } else cs.borderBottomColor = "#" + dec2hex($04) + dec2hex($05) + dec2hex($06);
        };
        if (!$F.time) {
          clearInterval($F.timer);
          return;
        }
      };
    $X();
    $F.timer = window.setInterval($X, 50);
  },
  $0b: function($0c, top, $0d, $0e, $0f, $0g, $0h, $0i, $h, $0j, $0k, $0l) {
    var os = $0c.style;
    if (top) os.top = top;
    if ($0d) os.left = $0d;
    if ($0e) os.width = $0e;
    if ($0f) os.height = $0f;
    if ($0g) os.position = $0g;
    if ($0h) os.textAlign = $0h;
    if ($0i) os.lineHeight = $0i;
    if ($h) os.fontSize = $h;
    os.fontWeight = $0j || "bold";
    if ($0k) os.paddingLeft = $0k;
    if ($0l) os.paddingRight = $0l;
  },
  $0m: function(parent, id, top, $0d, $0e, $0f, $0h, $0i, $h, $0j, $0k, $0l) {
    var $0n = this.Cntr.id + id;
    var $0o = document.getElementById($0n);
    var $0p = $0o ? $0o.parentNode : document.createElement("DIV");
    this.$0b($0p, top, $0d, $0e, $0f, "absolute");
    var $0q = $0o || document.createElement("DIV");
    $0p.appendChild($0q);
    parent.appendChild($0p);
    this.$0b($0q, "", "", "", $0i, "relative", $0h, $0i, $h, $0j, $0k, $0l);
    $0q.id = $0n;
    return $0q;
  },
  $0r: function($0c) {
    return ($0c && $0c.parentNode) ? parseFloat($0c.parentNode.offsetLeft) : 0;
  },
  $0s: function($0c) {
    return ($0c && $0c.parentNode) ? parseFloat($0c.parentNode.offsetTop) : 0;
  },
  $0t: function($0c) {
    return ($0c && $0c.parentNode) ? parseFloat($0c.parentNode.offsetWidth) : 0;
  },
  $0u: function($0c) {
    return ($0c && $0c.parentNode) ? parseFloat($0c.parentNode.offsetHeight) : 0;
  },
  $0v: function($a, $b, $c, $d, $e, $f, $g, $h, $i, $j, $k, $l, $m, $n, $o, $p, $q, $r, $s, $t, $u, $v, $w, $x) {
    var $0o = (this.Cntr != undefined),
      ct = $0o ? this.Cntr : document.getElementById($a);
    var $0w = ($h && ($h != this.fontsize));
    this.$2i = ((typeof($b) == "function") && (($b.length == 1) || ($b.length == 2))) ? $b : (this.$2i || null);
    var ff = $g || this.fontname || "";
    var fs = $h || this.fontsize || "14px";
    var fc = $i || this.fontcolor || "#000";
    var dc = $j || this.deadcolor || "#F00";
    var bg = $k || this.bgcolor || "#FFF";
    var kc = $l || this.keycolor || "#FFF";
    var bc = $n || this.bordercolor || "#777";
    this.fontname = ff, this.fontsize = fs, this.fontcolor = fc;
    this.bgcolor = bg, this.keycolor = kc, this.deadcolor = dc, this.bordercolor = bc;
    this.lic = $m || this.lic || "#DDD";
    this.ibc = $o || this.ibc || "#CCC";
    this.ikc = $p || this.ikc || "#FFF";
    this.lsc = $q || this.lsc || "#F77";
    this.cfc = $s || this.cfc || "#CC3300";
    this.cbg = $t || this.cbg || "#FF9966";
    this.cbr = $u || this.cbr || "#CC3300";
    this.sc = ($r == undefined) ? ((this.sc == undefined) ? false : this.sc) : $r;
    this.gap = ($w != undefined) ? ($w ? 1 : -1) : (this.gap || 1);
    if (!$0o) {
      this.Cntr = ct;
      this.Caps = this.Shift = this.AltGr = false;
      this.DeadAction = [];
      this.DeadAction[0] = this.DeadAction[1] = null;
      this.keys = [], this.mod = [], this.pad = [];
      VKeyboard.kbArray[$a] = this;
    };
    var kb = $0o ? ct.childNodes[0] : document.createElement("DIV");
    if (!$0o) {
      ct.appendChild(kb);
      ct.style.display = "block";
      ct.style.zIndex = 999;
      if ($v) ct.style.position = "relative";
      else {
        ct.style.position = "absolute";
        var $0x = 0,
          $0y = 0,
          $0z = ct;
        if ($0z.offsetParent) {
          while ($0z.offsetParent) {
            $0x += $0z.offsetLeft;
            $0y += $0z.offsetTop;
            $0z = $0z.offsetParent;
          }
        } else if ($0z.x) {
          $0x += $0z.x;
          $0y += $0z.y;
        };
        ct.style.top = $0y + "px", ct.style.left = $0x + "px";
      };
      kb.style.position = "relative";
      kb.style.top = "0px", kb.style.left = "0px";
    };
    kb.style.border = "1px solid " + bc;
    var $0A = $0o ? kb.childNodes[0] : document.createElement("DIV"),
      ks = $0A.style;
    if (!$0o) {
      kb.appendChild($0A);
      ks.position = "relative";
      ks.width = "1px";
      ks.cursor = "default";
    };
    this.$z($0A, "selectstart", function(event) {
      return false;
    });
    this.$z($0A, "mousedown", function(event) {
      if (event.preventDefault) event.preventDefault();
      return false;
    });
    ks.fontFamily = ff, ks.backgroundColor = bg;
    if (!$0o || $0w) {
      var $0B = parseFloat(fs) / 14.0,
        $0C = Math.floor(25.0 * $0B),
        $0D = 2 * $0C,
        $0E = this.gap;
      var cp = String($0C) + "px",
        cx = String($0C - ($w ? 0 : 2.0)) + "px",
        lh = String($0C - 2.0) + "px";
      var $0F = 0,
        $0G = $0E,
        $0H = 0,
        $0I = 0;
      var c = "center",
        n = "normal",
        r = "right",
        l = "left",
        e = "&nbsp;",
        $0J = String(4 * $0B) + "px";
      var $0p;
      for (var i = 0; i < 13; i++) {
        this.keys[i] = $0p = this.$0m($0A, "___key" + String(i), $0G + "px", ($0F + $0H + $0E) + "px", cp, cp, c, lh, fs);
        $0F = this.$0r($0p), $0H = this.$0t($0p);
      };
      $0G = this.$0s($0p);
      $0I = this.$0u($0p);
      var $0K = this.$0m($0A, "___kbp", $0G + "px", ($0F + $0H + $0E) + "px", (2.96 * $0C) + "px", cp, r, lh, fs, n, "", $0J);
      $0K.innerHTML = "BackSpace";
      this.mod[0] = $0K;
      var $0L = this.$0m($0A, "___tab", ($0G + $0I + $0E) + "px", $0E + "px", (1.48 * $0C + $0E) + "px", cp, l, lh, fs, n, $0J);
      $0L.innerHTML = "Tab";
      this.mod[1] = $0L;
      $0F = this.$0r($0L), $0H = this.$0t($0L), $0G = this.$0s($0L);
      for (; i < 26; i++) {
        this.keys[i] = $0p = this.$0m($0A, "___key" + String(i), $0G + "px", ($0F + $0H + $0E) + "px", cp, cp, c, lh, fs);
        $0F = this.$0r($0p), $0H = this.$0t($0p);
      };
      this.kbpH = this.$0r($0K) + this.$0t($0K);
      var $0M = this.$0m($0A, "___caps", ($0G + $0I + $0E) + "px", $0E + "px", $0D + "px", cp, l, lh, fs, n, $0J);
      $0M.innerHTML = "Caps";
      this.mod[2] = $0M;
      $0F = this.$0r($0M), $0H = this.$0t($0M), $0G = this.$0s($0M);
      for (; i < 38; i++) {
        this.keys[i] = $0p = this.$0m($0A, "___key" + String(i), $0G + "px", ($0F + $0H + $0E) + "px", cp, cp, c, lh, fs);
        $0F = this.$0r($0p), $0H = this.$0t($0p);
      };
      $0G = this.$0s($0p);
      var s = $0F + $0H + $0E;
      var $0N = this.$0m($0A, "___enter_l", $0G + "px", s + "px", (this.kbpH - s) + "px", cp, r, lh, fs, n, "", $0J);
      $0N.innerHTML = "Enter";
      this.mod[3] = $0N;
      s = this.$0r(this.keys[25]) + this.$0t(this.keys[25]) + $0E;
      var $0O = this.$0m($0A, "___enter_top", this.$0s($0L) + "px", s + "px", (this.kbpH - s) + "px", cx, c, cx);
      $0O.innerHTML = e;
      $0O.subst = "Enter";
      this.mod[4] = $0O;
      $0O.company = $0N;
      $0N.company = $0O;
      var $0P = this.$0m($0A, "___shift", ($0G + $0I + $0E) + "px", $0E + "px", (2.52 * $0C) + "px", cp, l, lh, fs, n, $0J);
      $0P.innerHTML = "Shift";
      this.mod[5] = $0P;
      $0F = this.$0r($0P), $0H = this.$0t($0P), $0G = this.$0s($0P);
      for (; i < 48; i++) {
        this.keys[i] = $0p = this.$0m($0A, "___key" + String(i), $0G + "px", ($0F + $0H + $0E) + "px", cp, cp, c, lh, fs);
        $0F = this.$0r($0p), $0H = this.$0t($0p);
      };
      $0G = this.$0s($0p);
      var $0Q = this.$0m($0A, "___shift_r", $0G + "px", ($0F + $0H + $0E) + "px", (this.$0r($0K) + this.$0t($0K) - $0F - $0H - $0E) + "px", cp, r, lh, fs, n, "", $0J);
      $0Q.innerHTML = "Shift";
      this.mod[6] = $0Q;
      var $0R = String(1.32 * $0C) + "px";
      var $0S = this.$0m($0A, "___lang", ($0G + $0I + $0E) + "px", $0E + "px", $0R, cp, l, lh, fs, n, $0J);
      this.mod[7] = $0S;
      $0G = this.$0s($0S);
      ks.height = ($0G + $0I + $0E) + "px";
      $0G += "px";
      var $0T = this.$0m($0A, "___res_1", $0G, (this.$0r($0S) + this.$0t($0S) + $0E) + "px", $0R, cp, c, lh, fs);
      $0T.innerHTML = e;
      this.mod[8] = $0T;
      var $0U = this.$0m($0A, "___res_2", $0G, (this.$0r($0T) + this.$0t($0T) + $0E) + "px", $0R, cp, c, lh, fs);
      $0U.innerHTML = e;
      this.mod[9] = $0U;
      var $0V = this.$0m($0A, "___space", $0G, (this.$0r($0U) + this.$0t($0U) + $0E) + "px", (6.28 * $0C) + "px", cp, c, lh, fs);
      this.mod[10] = $0V;
      var $0W = this.$0m($0A, "___alt_gr", $0G, (this.$0r($0V) + this.$0t($0V) + $0E) + "px", $0R, cp, c, lh, parseFloat(fs) * 0.786, n);
      $0W.innerHTML = "AltGr";
      this.mod[11] = $0W;
      var $0X = this.$0m($0A, "___res_3", $0G, (this.$0r($0W) + this.$0t($0W) + $0E) + "px", $0R, cp, c, lh, fs);
      $0X.innerHTML = e;
      this.mod[12] = $0X;
      var $0Y = this.$0m($0A, "___res_4", $0G, (this.$0r($0X) + this.$0t($0X) + $0E) + "px", $0R, cp, c, lh, fs);
      $0Y.innerHTML = e;
      this.mod[13] = $0Y;
      var w = this.kbpH + $0E;
      if (!$0o && (($c == undefined) ? true : $c)) {
        var $0Z = this.$0m($0A, "___left", $0G, (this.kbpH + $0E + $0C / 2) + "px", cp, cp, c, lh, fs);
        $0Z.innerHTML = "&lt;"
        this.mod[14] = $0Z;
        if (($d == undefined) ? true : $d) {
          var $10 = this.$0m($0A, "___down", $0G, (this.$0r($0Z) + this.$0t($0Z) + $0E) + "px", cp, cp, c, lh, fs);
          $10.innerHTML = "\\/"
          this.mod[15] = $0p = $10;
          var $11 = this.$0m($0A, "___up", this.$0s($0Q) + "px", (this.$0r($0Z) + this.$0t($0Z) + $0E) + "px", cp, cp, c, lh, fs);
          $11.innerHTML = "/\\"
          this.mod[16] = $11;
        } else $0p = $0Z;
        var $12 = this.$0m($0A, "___right", $0G, (this.$0r($0p) + this.$0t($0p) + $0E) + "px", cp, cp, c, lh, fs);
        $12.innerHTML = "&gt;"
        this.mod[this.mod.length] = $12;
        this.kbpH = this.$0r($12) + this.$0t($12);
        w = this.kbpH + $0E;
      };
      if (($f == undefined) ? true : $f) {
        var w2 = this.$13($a, $0A);
        if (w2 > w) w = w2;
      };
      kb.style.width = ks.width = w + "px";
    };
    this._refresh_layout(this.avail_langs[$x || 0][0]);
    return this;
  },
  $13: function($a, parent) {
    var c = "center",
      n = "normal",
      l = "left";
    var fs = this.fontsize,
      bc = this.bordercolor,
      $0E = this.gap;
    var $0B = parseFloat(fs) / 14.0,
      $0C = Math.floor(25.0 * $0B);
    var $0D = 2 * $0C,
      dp = ($0D + 1) + "px",
      $14 = ($0D - 1 - (($0E < 0) ? 2 : 0)) + "px";
    var cp = String($0C) + "px",
      lh = String(Math.floor($0C - 2.0)) + "px";
    var $15 = (this.kbpH + $0C / 2 + $0E) + "px";
    var $16 = this.$0m(parent, "___pad_eur", $0E + "px", $15, cp, cp, c, lh, fs);
    $16.innerHTML = "&#x20AC;";
    this.pad[0] = $16;
    var $17 = (this.$0r($16) + this.$0t($16) + $0E) + "px";
    var $18 = this.$0m(parent, "___pad_slash", $0E + "px", $17, cp, cp, c, lh, fs);
    $18.innerHTML = "/";
    this.pad[1] = $18;
    var $19 = (this.$0r($18) + this.$0t($18) + $0E) + "px";
    var $1a = this.$0m(parent, "___pad_star", $0E + "px", $19, cp, cp, c, lh, fs);
    $1a.innerHTML = "*";
    this.pad[2] = $1a;
    var $1b = (this.$0r($1a) + this.$0t($1a) + $0E) + "px";
    var $1c = this.$0m(parent, "___pad_minus", $0E + "px", $1b, cp, cp, c, lh, fs);
    $1c.innerHTML = "-";
    this.pad[3] = $1c;
    this.kbpM = this.$0r($1c) + this.$0t($1c) + $0E;
    var $0I = this.$0u($16),
      $1d = (this.$0s($16) + $0I + $0E) + "px";
    var $1e = this.$0m(parent, "___pad_7", $1d, $15, cp, cp, c, lh, fs);
    $1e.innerHTML = "7";
    this.pad[4] = $1e;
    var $1f = this.$0m(parent, "___pad_8", $1d, $17, cp, cp, c, lh, fs);
    $1f.innerHTML = "8";
    this.pad[5] = $1f;
    var $1g = this.$0m(parent, "___pad_9", $1d, $19, cp, cp, c, lh, fs);
    $1g.innerHTML = "9";
    this.pad[6] = $1g;
    var $1h = this.$0m(parent, "___pad_plus", $1d, $1b, cp, dp, c, $14, fs);
    $1h.innerHTML = "+";
    this.pad[7] = $1h;
    $1d = (this.$0s($1e) + $0I + $0E) + "px";
    var $1i = this.$0m(parent, "___pad_4", $1d, $15, cp, cp, c, lh, fs);
    $1i.innerHTML = "4";
    this.pad[8] = $1i;
    var $1j = this.$0m(parent, "___pad_5", $1d, $17, cp, cp, c, lh, fs);
    $1j.innerHTML = "5";
    this.pad[9] = $1j;
    var $1k = this.$0m(parent, "___pad_6", $1d, $19, cp, cp, c, lh, fs);
    $1k.innerHTML = "6";
    this.pad[10] = $1k;
    $1d = (this.$0s($1i) + $0I + $0E) + "px";
    var $1l = this.$0m(parent, "___pad_1", $1d, $15, cp, cp, c, lh, fs);
    $1l.innerHTML = "1";
    this.pad[11] = $1l;
    var $1m = this.$0m(parent, "___pad_2", $1d, $17, cp, cp, c, lh, fs);
    $1m.innerHTML = "2";
    this.pad[12] = $1m;
    var $1n = this.$0m(parent, "___pad_3", $1d, $19, cp, cp, c, lh, fs);
    $1n.innerHTML = "3";
    this.pad[13] = $1n;
    var $1o = this.$0m(parent, "___pad_enter", $1d, $1b, cp, dp, c, $14, parseFloat(fs) * 0.643, n);
    $1o.innerHTML = "Enter";
    this.pad[14] = $1o;
    $1d = (this.$0s($1l) + $0I + $0E) + "px";
    var $1p = this.$0m(parent, "___pad_0", $1d, $15, dp, cp, l, lh, fs, "", 7 * $0B + "px");
    $1p.innerHTML = "0";
    this.pad[15] = $1p;
    var $1q = this.$0m(parent, "___pad_period", $1d, $19, cp, cp, c, lh, fs);
    $1q.innerHTML = ".";
    this.pad[16] = $1q;
    return this.kbpM;
  },
  $1r: function($0p, on, $1s, $1t, $1u) {
    if ($0p) {
      var ks = $0p.style;
      if (ks) {
        if ($1s) ks.color = $1s;
        if ($1t) ks.border = "1px solid " + $1t;
        if ($1u) ks.backgroundColor = $1u;
      };
      this.$D($0p, 'mouseup', this.$28);
      if (on) this.$z($0p, 'mouseup', this.$28);
    }
  },
  _refresh_layout: function($1v) {
    if (!$1v) $1v = this.mod[7].innerHTML;
    var fc = this.fontcolor,
      kc = this.keycolor,
      $1w = this.ikc;
    var $1x = this.ibc,
      bc = this.bordercolor,
      $1y = this.lic;
    var $1z = this.AltGr ? (this.Shift ? "alt_gr_shift" : "alt_gr") : (this.Shift ? "shift" : (this.Caps ? "caps" : "normal"));
    var $1A = this.keys.length;
    var $1B = this[$1v + "_normal"];
    var $1C = this[$1v + "_caps"];
    var $1D = this[$1v + "_shift"];
    var $1E = this[$1v + "_alt_gr"];
    var $1F = this[$1v + "_alt_gr_shift"];
    var $1G = this[this.DeadAction[1]] || null;
    var $1H = ($1C && ($1C.length == $1A));
    var $1I = ($1D && ($1D.length == $1A));
    var $1J = ($1E && ($1E.length == $1A));
    var $1K = ($1J && $1F && ($1F.length == $1A));
    var $1L = this.mod[2],
      $1M = this.mod[5],
      $1N = this.mod[6],
      $1O = this.mod[11];
    if ($1I) {
      this.$1r($1M, true, fc, bc, this.Shift ? $1y : kc);
      this.$1r($1N, true, fc, bc, this.Shift ? $1y : kc);
    } else {
      this.$1r($1M, false, $1x, $1x, $1w);
      this.$1r($1N, false, $1x, $1x, $1w);
      if ($1z == "shift") {
        $1z = "normal";
        this.Shift = false;
      }
    };
    if ($1J) {
      this.$1r($1O, true, fc, bc, this.AltGr ? $1y : kc);
      if (this.AltGr) {
        if ($1K) {
          this.$1r($1M, true, fc, bc);
          this.$1r($1N, true, fc, bc);
        } else {
          this.$1r($1M, false, $1x, $1x, $1w);
          this.$1r($1N, false, $1x, $1x, $1w);
          $1z = "alt_gr";
          this.Shift = false;
        }
      }
    } else {
      this.$1r($1O, false, $1x, $1x, $1w);
      if ($1z == "alt_gr") {
        $1z = "normal";
        this.AltGr = false;
      } else if ($1z == "alt_gr_shift") {
        $1z = "normal";
        this.AltGr = false, this.Shift = false;
        $1M.style.backgroundColor = kc, $1N.style.backgroundColor = kc;
      }
    };
    if (this.Shift && !$1K) this.$1r($1O, false, $1x, $1x, $1w);
    if ($1H && !this.AltGr) this.$1r($1L, true, fc, bc, this.Caps ? $1y : kc);
    else {
      this.$1r($1L, false, $1x, $1x, $1w);
      this.Caps = false;
      if ($1z == "caps") $1z = "normal";
    };
    var $1P = this[$1v + "_" + $1z];
    var i = $1A;
    while (--i >= 0) {
      var $0p = this.keys[i],
        $1Q = $1P[i];
      if (!$1Q) $1Q = "";
      if (this.Shift && this.Caps) {
        var $1R = $1B[i],
          $1S = $1C[i],
          $1T = $1D[i];
        if (($1S == $1T) && ($1R != $1S)) $1Q = $1R;
      };
      if (typeof($1Q) == "object") {
        $0p.innerHTML = $1Q[0], $0p.dead = $1Q[1];
        this.$1r($0p, true, this.deadcolor, bc, (this.DeadAction[0] == $1Q[0] ? $1y : kc));
      } else {
        $0p.dead = null;
        var $1U = false;
        if ($1Q != "") {
          if ($1G) {
            for (var j = 0, l = $1G.length; j < l; j++) {
              var dk = $1G[j];
              if (dk[0] == $1Q) {
                $1Q = dk[1];
                break;
              }
            };
            if (j == l) $1U = true;
          };
          $0p.innerHTML = $1Q;
          if ($1U) this.$1r($0p, false, $1x, $1x, $1w);
          else this.$1r($0p, true, fc, bc, kc);
        } else {
          $0p.innerHTML = "&nbsp;";
          this.$1r($0p, false, $1x, $1x, $1w);
        }
      }
    };
    i = this.mod.length;
    while (--i >= 0) {
      var $0p = this.mod[i];
      switch (i) {
      case 2:
      case 5:
      case 6:
      case 11:
        break;
      case 7:
        $0p.innerHTML = $1v;
        this.$D($0p, 'mousedown', this.$1W);
        if (this.DeadAction[1]) this.$1r($0p, false, $1x, $1x, $1w);
        else {
          var $1V = (this.avail_langs.length > 1);
          this.$1r($0p, false, fc, $1V ? this.lsc : $1x, $1V ? kc : $1w);
          if ($1V) this.$z($0p, 'mousedown', this.$1W);
        };
        break;
      case 10:
        $0p.innerHTML = this.DeadAction[1] ? this.DeadAction[0] : "&nbsp;";
      default:
        if ((this.DeadAction[1] && (i != 10)) || ((i == 8) || (i == 9) || (i == 12) || (i == 13))) this.$1r($0p, false, $1x, $1x, $1w);
        else this.$1r($0p, true, fc, bc, kc);
        var ks = $0p.style;
        switch (i) {
        case 4:
          ks.borderBottomColor = kc;
          break;
        case 8:
        case 9:
        case 12:
        case 13:
          ks.borderColor = $1x;
          break;
        }
      }
    };
    i = this.pad.length;
    while (--i >= 0) {
      $0p = this.pad[i];
      if (this.DeadAction[1]) this.$1r($0p, false, $1x, $1x, $1w);
      else this.$1r($0p, true, fc, bc, kc);
    }
  },
  $1W: function(event) {
    var $F = VKeyboard.prototype.$y(event);
    var $a = $F.id.substring(0, $F.id.indexOf("___"));
    var $K = VKeyboard.kbArray[$a];
    var ct = $K.Cntr,
      $1X = $K.menu;
    if ($1X) {
      ct.removeChild($1X);
      $K.menu = null;
    } else {
      var fs = $K.fontsize,
        kc = $K.keycolor,
        bc = "1px solid " + $K.bordercolor;
      var $0J = $K.pad.length,
        $1Y = $0J ? 5 : 4,
        $1Z = $0J ? 108 : 103;
      var $20 = Math.ceil($K.avail_langs.length / $1Y);
      var $0B = parseFloat(fs) / 14.0,
        $0C = Math.floor(25.0 * $0B),
        cp = $0C + "px",
        lh = ($0C - 2) + "px",
        w = $1Z * $0B;
      var h1 = Math.floor($0C + $0B),
        h2 = String(w - $0B) + "px",
        $0J = String(4 * $0B) + "px",
        wd = String(w * $1Y + 1) + "px";
      var $21 = $K.avail_langs.length;
      $1X = document.createElement("DIV");
      var ms = $1X.style;
      ms.display = "block";
      ms.position = "relative";
      ms.top = "1px", ms.left = "0px";
      ms.width = wd;
      ms.border = bc;
      ms.backgroundColor = $K.bgcolor;
      $K.menu = ct.appendChild($1X);
      var $22 = document.createElement("DIV");
      ms = $22.style;
      ms.fontFamily = $K.fontname;
      ms.position = "relative";
      ms.color = $K.fontcolor;
      ms.width = wd;
      ms.height = String($20 * h1 + 1) + "px";
      ms.cursor = "default";
      $1X.appendChild($22);

      function setcolor($0c, c) {
        return function() {
          $0c.style.backgroundColor = c;
        }
      };
      for (var j = 0; j < $21; j++) {
        var $23 = $K.$0m($22, "___lang_" + String(j), String(h1 * Math.floor(j / $1Y) + 1) + "px", String((j % $1Y) * w + 1) + "px", h2, cp, "center", lh, fs, "normal", $0J);
        $23.style.backgroundColor = kc;
        $23.style.border = bc;
        $23.innerHTML = $K.avail_langs[j][1];
        $K.$z($23, 'mousedown', $K.$24);
        $K.$z($23, 'mouseover', setcolor($23, $K.lic));
        $K.$z($23, 'mouseout', setcolor($23, kc));
      }
    }
  },
  $24: function(event) {
    var $F = VKeyboard.prototype.$y(event);
    var $a = $F.id.substring(0, $F.id.indexOf("___"));
    var $K = VKeyboard.kbArray[$a];
    var $25 = $F.id.indexOf("___lang_");
    var $26 = $F.id.substring($25 + 8, $F.id.length);
    var $27 = $K.avail_langs[$26][0];
    if ($K.mod[7].innerHTML != $27) $K._refresh_layout($27);
    $K.Cntr.removeChild($K.menu);
    $K.menu = null;
  },
  $28: function(event) {
    var $F = VKeyboard.prototype.$y(event);
    var $a = $F.id.substring(0, $F.id.indexOf("___"));
    var $K = VKeyboard.kbArray[$a];
    var $29 = $F.subst || $F.innerHTML;
    if (!$29) return;
    switch ($29) {
    case "Caps":
    case "Shift":
    case "AltGr":
      $K[$29] = !$K[$29];
      $K._refresh_layout();
      if ($K.sc) $K.$E($F);
      return;
    case "Tab":
      $29 = "\t";
      break;
    case "&nbsp;":
      $29 = " ";
      break;
    case "&quot;":
      $29 = "\"";
      break;
    case "&lt;":
      $29 = "<";
      break;
    case "&gt;":
      $29 = ">";
      break;
    case "&amp;":
      $29 = "&";
      break;
    };
    if ($K.sc) $K.$E($F);
    if ($F.dead) {
      if ($F.dead == $K.DeadAction[1]) {
        $29 = "";
        $K.DeadAction[0] = $K.DeadAction[1] = null;
      } else {
        $K.DeadAction[0] = $29;
        $K.DeadAction[1] = $F.dead;
      };
      $K._refresh_layout();
      return;
    } else {
      var r;
      if ($K.DeadAction[1]) {
        $K.DeadAction[0] = $K.DeadAction[1] = null;
        r = true;
      };
      if ($K.AltGr || $K.Shift || r) {
        $K.AltGr = false;
        $K.Shift = false;
        $K._refresh_layout();
      }
    };
    if ($K.$2i) $K.$2i($29, $K.Cntr.id);
  },
  SetParameters: function() {
    var l = arguments.length;
    if (!l || (l % 2 != 0)) return false;
    var p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, $2a, $2b, $2c, $2d, $2e, $2f, $2g;
    while (--l > 0) {
      var $2h = arguments[l];
      switch (arguments[--l]) {
      case "callback":
        p0 = ((typeof($2h) == "function") && (($2h.length == 1) || ($2h.length == 2))) ? $2h : this.$2i;
        break;
      case "font-name":
        p1 = $2h;
        break;
      case "font-size":
        p2 = $2h;
        break;
      case "font-color":
        p3 = $2h;
        break;
      case "dead-color":
        p4 = $2h;
        break;
      case "base-color":
        p5 = $2h;
        break;
      case "key-color":
        p6 = $2h;
        break;
      case "selection-color":
        p7 = $2h;
        break;
      case "border-color":
        p8 = $2h;
        break;
      case "inactive-border-color":
        p9 = $2h;
        break;
      case "inactive-key-color":
        $2a = $2h;
        break;
      case "lang-cell-color":
        $2b = $2h;
        break;
      case "show-click":
        $2c = $2h;
        break;
      case "click-font-color":
        $2d = $2h;
        break;
      case "click-key-color":
        $2e = $2h;
        break;
      case "click-border-color":
        $2f = $2h;
        break;
      case "layout":
        $2g = $2h;
        break;
      default:
        break;
      }
    };
    this.$0v(this.Cntr.id, p0, 0, 0, 0, (this.pad.length != 0), p1, p2, p3, p4, p5, p6, p7, p8, p9, $2a, $2b, $2c, $2d, $2e, $2f, this.gap, $2g);
    return true;
  },
  Show: function($2h) {
    var ct = this.Cntr.style;
    ct.display = (($2h == undefined) || ($2h == true)) ? "block" : (($2h == false) ? "none" : ct.display);
  },
  ShowNumpad: function($2h) {
    var sh = (($2h == undefined) || ($2h == true)) ? "block" : (($2h == false) ? "none" : null);
    if (!sh) return;
    var kb = this.Cntr.childNodes[0];
    var i = this.pad.length;
    if (i) {
      while (--i >= 0) this.pad[i].parentNode.style.display = sh;
      kb.style.width = kb.childNodes[0].style.width = (sh == "none") ? (this.kbpH + 1) + "px" : this.kbpM + "px";
    } else {
      if (sh == "block") {
        kb.style.width = kb.childNodes[0].style.width = this.$13(this.Cntr.id, kb.childNodes[0]);
        this._refresh_layout();
      }
    }
  },
  avail_langs: [
    ["Us", "English (US)"],
    ["Ca", "Canadian"],
    ["Ru", "&#x0420;&#x0443;&#x0441;&#x0441;&#x043A;&#x0438;&#x0439;"],
    ["De", "Deutsch"],
    ["Fr", "Fran&#x00E7;ais"],
    ["Es", "Espa&#x00F1;ol"],
    ["It", "Italiano"],
    ["Cz", "&#x010C;esky"],
    ["El", "&#x0388;&#x03BB;&#x03BB;&#x03B7;&#x03BD;&#x03B1;&#x03C2;"],
    ["He", "&#x05E2;&#x05D1;&#x05E8;&#x05D9;&#x05EA;"]
  ],
  Us_normal: [
    ["&#x0060;", "Grave"], "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x002D;", "&#x003D;", "&#x0071;", "&#x0077;", "&#x0065;", "&#x0072;", "&#x0074;", "&#x0079;", "&#x0075;", "&#x0069;", "&#x006F;", "&#x0070;", "&#x005B;", "&#x005D;", "&#x005C;", "&#x0061;", "&#x0073;", "&#x0064;", "&#x0066;", "&#x0067;", "&#x0068;", "&#x006A;", "&#x006B;", "&#x006C;", "&#x003B;", "&#x0027;", , "&#x007A;", "&#x0078;", "&#x0063;", "&#x0076;", "&#x0062;", "&#x006E;", "&#x006D;", "&#x002C;", "&#x002E;", "&#x002F;"],
  Us_caps: [
    ["&#x0060;", "Grave"], "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x002D;", "&#x003D;", "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", "&#x005B;", "&#x005D;", "&#x005C;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x003B;", "&#x0027;", , "&#x005A;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x002C;", "&#x002E;", "&#x002F;"],
  Us_shift: [
    ["&#x007E;", "Tilde"], "&#x0021;", "&#x0040;", "&#x0023;", "&#x0024;", "&#x0025;", ["&#x005E;", "Circumflex"], "&#x0026;", "&#x002A;", "&#x0028;", "&#x0029;", "&#x005F;", "&#x002B;", "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", "&#x007B;", "&#x007D;", "&#x007C;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x003A;", "&#x0022;", , "&#x005A;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x003C;", "&#x003E;", "&#x003F;"],
  Us_alt_gr: [, "&#x00A1;", "&#x00B2;", "&#x00B3;", "&#x00A4;", "&#x20AC;", "&#x00BC;", "&#x00BD;", "&#x00BE;", "&#x0091;", "&#x0092;", "&#x00A5;", "&#x00D7;", "&#x00E4;", "&#x00E5;", "&#x00E9;", "&#x00AE;", "&#x00FE;", "&#x00FC;", "&#x00FA;", "&#x00ED;", "&#x00F3;", "&#x00F6;", "&#x00AB;", "&#x00BB;", "&#x00AC;", "&#x00E1;", "&#x00DF;", "&#x0111;", , , , , , "&#x00F8;", "&#x00B6;", ["&#x00B4;", "Acute"], , "&#x00E6;", , "&#x00A9;", , , "&#x00F1;", "&#x00B5;", "&#x00E7;", , "&#x00BF;"],
  Us_alt_gr_shift: [, "&#x00B9;", , , "&#x00A3;", , , , , , , , "&#x00F7;", "&#x00C4;", "&#x00C5;", "&#x00C9;", , "&#x00DE;", "&#x00DC;", "&#x00DA;", "&#x00CD;", "&#x00D3;", "&#x00D6;", , , "&#x00A6;", "&#x00C1;", "&#x00A7;", "&#x0110;", , , , , , "&#x00D8;", "&#x00B0;", ["&#x00A8;", "Umlaut"], , "&#x00C6;", , "&#x00A2;", , , "&#x00D1;", , "&#x00C7;", , ""],
  Ca_normal: ["&#x002F;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x002D;", "&#x003D;", "&#x0071;", "&#x0077;", "&#x0065;", "&#x0072;", "&#x0074;", "&#x0079;", "&#x0075;", "&#x0069;", "&#x006F;", "&#x0070;", ["&#x005E;", "Circumflex"], "&#x00E7;", "&#x00F9;", "&#x0061;", "&#x0073;", "&#x0064;", "&#x0066;", "&#x0067;", "&#x0068;", "&#x006A;", "&#x006B;", "&#x006C;", "&#x003B;", "&#x00E8;", "&#x00E0;", "&#x007A;", "&#x0078;", "&#x0063;", "&#x0076;", "&#x0062;", "&#x006E;", "&#x006D;", "&#x002C;", "&#x002E;", "&#x00E9;"],
  Ca_caps: ["&#x002F;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x002D;", "&#x003D;", "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", ["&#x005E;", "Circumflex"], "&#x00C7;", "&#x00D9;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x003B;", "&#x00C8;", "&#x00C0;", "&#x005A;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x002C;", "&#x002E;", "&#x00C9;"],
  Ca_shift: ["&#x005C;", "&#x0021;", "&#x0040;", "&#x0023;", "&#x0024;", "&#x0025;", "&#x003F;", "&#x0026;", "&#x002A;", "&#x0028;", "&#x0029;", "&#x005F;", "&#x002B;", "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", ["&#x00A8;", "Umlaut"], "&#x00C7;", "&#x00D9;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x003A;", "&#x00C8;", "&#x00C0;", "&#x005A;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x0027;", "&#x0022;", "&#x00C9;"],
  Ca_alt_gr: ["&#x007C;", , , , , , , "&#x007B;", "&#x007D;", "&#x005B;", "&#x005D;", , "&#x00AC;", , , , , , , , , , , ["&#x0060;", "Grave"],
    ["&#x007E;", "Tilde"], , , , , , , , , , , "&#x00B0;", , , "&#x00AB;", "&#x00BB;", , , , , , "&#x003C;", "&#x003E;", ""],
  Ru_normal: ["&#x0451;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x002D;", "&#x003D;", "&#x0439;", "&#x0446;", "&#x0443;", "&#x043A;", "&#x0435;", "&#x043D;", "&#x0433;", "&#x0448;", "&#x0449;", "&#x0437;", "&#x0445;", "&#x044A;", "&#x005C;", "&#x0444;", "&#x044B;", "&#x0432;", "&#x0430;", "&#x043F;", "&#x0440;", "&#x043E;", "&#x043B;", "&#x0434;", "&#x0436;", "&#x044D;", , "&#x044F;", "&#x0447;", "&#x0441;", "&#x043C;", "&#x0438;", "&#x0442;", "&#x044C;", "&#x0431;", "&#x044E;", "&#x002E;"],
  Ru_caps: ["&#x0401;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x002D;", "&#x003D;", "&#x0419;", "&#x0426;", "&#x0423;", "&#x041A;", "&#x0415;", "&#x041D;", "&#x0413;", "&#x0428;", "&#x0429;", "&#x0417;", "&#x0425;", "&#x042A;", "&#x005C;", "&#x0424;", "&#x042B;", "&#x0412;", "&#x0410;", "&#x041F;", "&#x0420;", "&#x041E;", "&#x041B;", "&#x0414;", "&#x0416;", "&#x042D;", , "&#x042F;", "&#x0427;", "&#x0421;", "&#x041C;", "&#x0418;", "&#x0422;", "&#x042C;", "&#x0411;", "&#x042E;", "&#x002E;"],
  Ru_shift: ["&#x0401;", "&#x0021;", "&#x0022;", "&#x2116;", "&#x003B;", "&#x0025;", "&#x003A;", "&#x003F;", "&#x002A;", "&#x0028;", "&#x0029;", "&#x005F;", "&#x002B;", "&#x0419;", "&#x0426;", "&#x0423;", "&#x041A;", "&#x0415;", "&#x041D;", "&#x0413;", "&#x0428;", "&#x0429;", "&#x0417;", "&#x0425;", "&#x042A;", "&#x002F;", "&#x0424;", "&#x042B;", "&#x0412;", "&#x0410;", "&#x041F;", "&#x0420;", "&#x041E;", "&#x041B;", "&#x0414;", "&#x0416;", "&#x042D;", , "&#x042F;", "&#x0427;", "&#x0421;", "&#x041C;", "&#x0418;", "&#x0422;", "&#x042C;", "&#x0411;", "&#x042E;", "&#x002C;"],
  De_normal: [
    ["&#x005E;", "Circumflex"], "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x00DF;", ["&#x00B4;", "Acute"], "&#x0071;", "&#x0077;", "&#x0065;", "&#x0072;", "&#x0074;", "&#x007A;", "&#x0075;", "&#x0069;", "&#x006F;", "&#x0070;", "&#x00FC;", "&#x002B;", "&#x003C;", "&#x0061;", "&#x0073;", "&#x0064;", "&#x0066;", "&#x0067;", "&#x0068;", "&#x006A;", "&#x006B;", "&#x006C;", "&#x00F6;", "&#x00E4;", "&#x0023;", "&#x0079;", "&#x0078;", "&#x0063;", "&#x0076;", "&#x0062;", "&#x006E;", "&#x006D;", "&#x002C;", "&#x002E;", "&#x002D;"],
  De_caps: [
    ["&#x005E;", "Circumflex"], "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x00DF;", ["&#x00B4;", "Acute"], "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x005A;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", "&#x00DC;", "&#x002B;", "&#x003C;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x00D6;", "&#x00C4;", "&#x0023;", "&#x0059;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x002C;", "&#x002E;", "&#x002D;"],
  De_shift: ["&#x00BA;", "&#x0021;", "&#x0022;", "&#x00A7;", "&#x0024;", "&#x0025;", "&#x0026;", "&#x002F;", "&#x0028;", "&#x0029;", "&#x003D;", "&#x003F;", ["&#x0060;", "Grave"], "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x005A;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", "&#x00DC;", "&#x002A;", "&#x003E;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x00D6;", "&#x00C4;", "&#x0027;", "&#x0059;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x003B;", "&#x003A;", "&#x005F;"],
  De_alt_gr: [, , "&#x00B2;", "&#x00B3;", , , , "&#x007B;", "&#x005B;", "&#x005D;", "&#x007D;", "&#x005C;", , "&#x0040;", , "&#x20AC;", , , , , , , , , ["&#x007E;", "Tilde"], "&#x007C;", , , , , , , , , , , , , , , , , , , "&#x00B5;", , , ""],
  Fr_normal: ["&#x00B2;", "&#x0026;", "&#x00E9;", "&#x0022;", "&#x0027;", "&#x0028;", "&#x007C;", "&#x00E8;", "&#x005F;", "&#x00E7;", "&#x00E0;", "&#x0029;", "&#x003D;", "&#x0061;", "&#x007A;", "&#x0065;", "&#x0072;", "&#x0074;", "&#x0079;", "&#x0075;", "&#x0069;", "&#x006F;", "&#x0070;", ["&#x005E;", "Circumflex"], "&#x0024;", "&#x003C;", "&#x0071;", "&#x0073;", "&#x0064;", "&#x0066;", "&#x0067;", "&#x0068;", "&#x006A;", "&#x006B;", "&#x006C;", "&#x006D;", "&#x00F9;", "&#x002A;", "&#x0077;", "&#x0078;", "&#x0063;", "&#x0076;", "&#x0062;", "&#x006E;", "&#x002C;", "&#x003B;", "&#x003A;", "&#x0021;"],
  Fr_caps: ["&#x00B2;", "&#x0026;", "&#x00C9;", "&#x0022;", "&#x0027;", "&#x0028;", "&#x007C;", "&#x00C8;", "&#x005F;", "&#x00C7;", "&#x00C0;", "&#x0029;", "&#x003D;", "&#x0041;", "&#x005A;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", ["&#x005E;", "Circumflex"], "&#x0024;", "&#x003C;", "&#x0051;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x004D;", "&#x00D9;", "&#x002A;", "&#x0057;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x002C;", "&#x003B;", "&#x003A;", "&#x0021;"],
  Fr_shift: [, "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x00BA;", "&#x002B;", "&#x0041;", "&#x005A;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", ["&#x00A8;", "Umlaut"], "&#x00A3;", "&#x003E;", "&#x0051;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x004D;", "&#x0025;", "&#x00B5;", "&#x0057;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x003F;", "&#x005F;", "&#x002F;", "&#x00A7;"],
  Fr_alt_gr: [, , , "&#x0023;", "&#x007B;", "&#x005B;", "&#x007C;", , "&#x005C;", "&#x005E;", "&#x0040;", "&#x005D;", "&#x007D;", , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ""],
  Es_normal: ["&#x00BA;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x0092;", "&#x00A1;", "&#x0071;", "&#x0077;", "&#x0065;", "&#x0072;", "&#x0074;", "&#x0079;", "&#x0075;", "&#x0069;", "&#x006F;", "&#x0070;", ["&#x0060;", "Grave"], "&#x002B;", "&#x003C;", "&#x0061;", "&#x0073;", "&#x0064;", "&#x0066;", "&#x0067;", "&#x0068;", "&#x006A;", "&#x006B;", "&#x006C;", "&#x00F1;", ["&#x00B4;", "Acute"], "&#x00E7;", "&#x007A;", "&#x0078;", "&#x0063;", "&#x0076;", "&#x0062;", "&#x006E;", "&#x006D;", "&#x002C;", "&#x002E;", "&#x002D;"],
  Es_caps: ["&#x00BA;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x0092;", "&#x00A1;", "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", ["&#x0060;", "Grave"], "&#x002B;", "&#x003C;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x00D1;", ["&#x00B4;", "Acute"], "&#x00C7;", "&#x005A;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x002C;", "&#x002E;", "&#x002D;"],
  Es_shift: ["&#x00AA;", "&#x0021;", "&#x0022;", "&#x0027;", "&#x0024;", "&#x0025;", "&#x0026;", "&#x002F;", "&#x0028;", "&#x0029;", "&#x003D;", "&#x003F;", "&#x00BF;", "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", ["&#x005E;", "Circumflex"], "&#x002A;", "&#x003E;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x00D1;", ["&#x00A8;", "Umlaut"], "&#x00C7;", "&#x005A;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x003B;", "&#x003A;", "&#x005F;"],
  Es_alt_gr: ["&#x005C;", "&#x007C;", "&#x0040;", "&#x0023;", , , "&#x00AC;", , , , , , , , , , , , , , , , , "&#x005B;", "&#x005D;", , , , , , , , , , , , "&#x007B;", "&#x007D;", , , , , , , , , , ""],
  It_normal: ["&#x005C;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x0092;", "&#x00EC;", "&#x0071;", "&#x0077;", "&#x0065;", "&#x0072;", "&#x0074;", "&#x0079;", "&#x0075;", "&#x0069;", "&#x006F;", "&#x0070;", "&#x00E8;", "&#x002B;", "&#x003C;", "&#x0061;", "&#x0073;", "&#x0064;", "&#x0066;", "&#x0067;", "&#x0068;", "&#x006A;", "&#x006B;", "&#x006C;", "&#x00F2;", "&#x00E0;", "&#x00F9;", "&#x007A;", "&#x0078;", "&#x0063;", "&#x0076;", "&#x0062;", "&#x006E;", "&#x006D;", "&#x002C;", "&#x002E;", "&#x002D;"],
  It_caps: ["&#x005C;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x0092;", "&#x00EC;", "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", "&#x00C8;", "&#x002B;", "&#x003C;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x00D2;", "&#x00C0;", "&#x00D9;", "&#x005A;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x002C;", "&#x002E;", "&#x002D;"],
  It_shift: ["&#x007C;", "&#x0021;", "&#x0022;", "&#x00A3;", "&#x0024;", "&#x0025;", "&#x0026;", "&#x002F;", "&#x0028;", "&#x0029;", "&#x003D;", "&#x003F;", "&#x005E;", "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x0059;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", "&#x00E9;", "&#x002A;", "&#x003C;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x00E7;", "&#x00B0;", "&#x00A7;", "&#x005A;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x003B;", "&#x003A;", "&#x005F;"],
  It_alt_gr: [, , , , , , , , , , , , , , , , , , , , , , "&#x005B;", "&#x005D;", , , , , , , , , , , "&#x0040;", "&#x0023;", , , , , , , , , , , , ""],
  It_alt_gr_shift: [, , , , , , , , , , , , , , , , , , , , , , "&#x007B;", "&#x007D;", , , , , , , , , , , , , , , , , , , , , , , , ""],
  Cz_normal: ["&#x003B;", "&#x002B;", "&#x011B;", "&#x0161;", "&#x010D;", "&#x0159;", "&#x017E;", "&#x00FD;", "&#x00E1;", "&#x00ED;", "&#x00E9;", "&#x003D;", ["&#x00B4;", "Acute"], "&#x0071;", "&#x0077;", "&#x0065;", "&#x0072;", "&#x0074;", "&#x007A;", "&#x0075;", "&#x0069;", "&#x006F;", "&#x0070;", "&#x00FA;", "&#x0029;", "&#x0026;", "&#x0061;", "&#x0073;", "&#x0064;", "&#x0066;", "&#x0067;", "&#x0068;", "&#x006A;", "&#x006B;", "&#x006C;", "&#x016F;", "&#x00A7;", ["&#x00A8;", "Umlaut"], "&#x0079;", "&#x0078;", "&#x0063;", "&#x0076;", "&#x0062;", "&#x006E;", "&#x006D;", "&#x002C;", "&#x002E;", "&#x002D;"],
  Cz_caps: ["&#x003B;", "&#x002B;", "&#x011A;", "&#x0160;", "&#x010C;", "&#x0158;", "&#x017D;", "&#x00DD;", "&#x00C1;", "&#x00CD;", "&#x00C9;", "&#x003D;", "&#x02CA;", "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x005A;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", "&#x00DA;", "&#x0029;", "&#x0026;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x016E;", "&#x00A7;", ["&#x00A8;", "Umlaut"], "&#x0059;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x002C;", "&#x002E;", "&#x002D;"],
  Cz_shift: [
    ["&#x00BA;", "RingAbove"], "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x0025;", ["&#x02C7;", "Caron"], "&#x0051;", "&#x0057;", "&#x0045;", "&#x0052;", "&#x0054;", "&#x005A;", "&#x0055;", "&#x0049;", "&#x004F;", "&#x0050;", "&#x002F;", "&#x0028;", "&#x002A;", "&#x0041;", "&#x0053;", "&#x0044;", "&#x0046;", "&#x0047;", "&#x0048;", "&#x004A;", "&#x004B;", "&#x004C;", "&#x0022;", "&#x0021;", "&#x0027;", "&#x0059;", "&#x0058;", "&#x0043;", "&#x0056;", "&#x0042;", "&#x004E;", "&#x004D;", "&#x003F;", "&#x003A;", "&#x005F;"],
  Cz_alt_gr: [, ["&#x007E;", "Tilde"],
    ["&#x02C7;", "Caron"],
    ["&#x005E;", "Circumflex"],
    ["&#x02D8;", "Breve"],
    ["&#x00B0;", "RingAbove"],
    ["&#x02DB;", "Ogonek"],
    ["&#x0060;", "Grave"],
    ["&#x02D9;", "DotAbove"],
    ["&#x00B4;", "Acute"],
    ["&#x02DD;", "DoubleAcute"],
    ["&#x00A8;", "Umlaut"],
    ["&#x00B8;", "Cedilla"], "&#x005C;", "&#x007C;", "&#x20AC;", , , , , , , , "&#x00F7;", "&#x00D7;", "&#x003C;", , "&#x0111;", "&#x00D0;", "&#x005B;", "&#x005D;", , , "&#x0142;", "&#x0141;", "&#x0024;", "&#x00DF;", "&#x00A4;", "&#x003E;", "&#x0023;", , "&#x0040;", "&#x007B;", "&#x007D;", , , , ""],
  El_normal: ["&#x00BD;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x002D;", "&#x003D;", "&#x003B;", "&#x03C2;", "&#x03B5;", "&#x03C1;", "&#x03C4;", "&#x03C5;", "&#x03B8;", "&#x03B9;", "&#x03BF;", "&#x03C0;", "&#x005B;", "&#x005D;", "&#x00A7;", "&#x03B1;", "&#x03C3;", "&#x03B4;", "&#x03C6;", "&#x03B3;", "&#x03B7;", "&#x03BE;", "&#x03BA;", "&#x03BB;", ["&#x00B4;", "Acute"], "&#x0092;", "&#x005C;", "&#x03B6;", "&#x03C7;", "&#x03C8;", "&#x03C9;", "&#x03B2;", "&#x03BD;", "&#x03BC;", "&#x002C;", "&#x002E;", "&#x002F;"],
  El_caps: ["&#x00BD;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x002D;", "&#x003D;", "&#x003B;", "&#x03C2;", "&#x0395;", "&#x03A1;", "&#x03A4;", "&#x03A5;", "&#x0398;", "&#x0399;", "&#x039F;", "&#x03A0;", "&#x005B;", "&#x005D;", "&#x00A7;", "&#x0391;", "&#x03A3;", "&#x0394;", "&#x03A6;", "&#x0393;", "&#x0397;", "&#x039E;", "&#x039A;", "&#x039B;", ["&#x00B4;", "Acute"], "&#x0092;", "&#x005C;", "&#x0396;", "&#x03A7;", "&#x03A8;", "&#x03A9;", "&#x0392;", "&#x039D;", "&#x039C;", "&#x002C;", "&#x002E;", "&#x002F;"],
  El_shift: ["&#x00B1;", "&#x0021;", "&#x0040;", "&#x0023;", "&#x0024;", "&#x0025;", "&#x005E;", "&#x0026;", "&#x002A;", "&#x0028;", "&#x0029;", "&#x005F;", "&#x002B;", "&#x003A;", "&#x00A6;", "&#x0395;", "&#x03A1;", "&#x03A4;", "&#x03A5;", "&#x0398;", "&#x0399;", "&#x039F;", "&#x03A0;", "&#x007B;", "&#x007D;", "&#x00A9;", "&#x0391;", "&#x03A3;", "&#x0394;", "&#x03A6;", "&#x0393;", "&#x0397;", "&#x039E;", "&#x039A;", "&#x039B;", ["&#x00A8;", "Umlaut"], "&#x0091;", "&#x007C;", "&#x0396;", "&#x03A7;", "&#x03A8;", "&#x03A9;", "&#x0392;", "&#x039D;", "&#x039C;", "&#x003C;", "&#x003E;", "&#x003F;"],
  El_alt_gr: [, , "&#x00B2;", "&#x00B3;", "&#x00A3;", "&#x00A7;", "&#x00B6;", , "&#x00A4;", "&#x00A6;", "&#x00B0;", "&#x00B1;", "&#x00BD;", , , , , , , , , , , "&#x00AB;", "&#x00BB;", , , , , , , , , , , ["&#x0385;", "DialytikaTonos"], , "&#x00AC;", , , , , , , , , , ""],
  He_normal: ["&#x003B;", "&#x0031;", "&#x0032;", "&#x0033;", "&#x0034;", "&#x0035;", "&#x0036;", "&#x0037;", "&#x0038;", "&#x0039;", "&#x0030;", "&#x002D;", "&#x003D;", "&#x002F;", "&#x0027;", "&#x05E7;", "&#x05E8;", "&#x05D0;", "&#x05D8;", "&#x05D5;", "&#x05DF;", "&#x05DD;", "&#x05E4;", "&#x005B;", "&#x005D;", "&#x005C;", "&#x05E9;", "&#x05D3;", "&#x05D2;", "&#x05DB;", "&#x05E2;", "&#x05D9;", "&#x05D7;", "&#x05DC;", "&#x05DA;", "&#x05E3;", "&#x002C;", , "&#x05D6;", "&#x05E1;", "&#x05D1;", "&#x05D4;", "&#x05E0;", "&#x05DE;", "&#x05E6;", "&#x05EA;", "&#x05E5;", "&#x002E;"],
  He_shift: ["&#x007E;", "&#x0021;", "&#x0040;", "&#x0023;", "&#x0024;", "&#x0025;", "&#x005E;", "&#x0026;", "&#x002A;", "&#x0028;", "&#x0029;", "&#x005F;", "&#x002B;", "&#x002F;", "&#x0027;", "&#x05E7;", "&#x05E8;", "&#x05D0;", "&#x05D8;", "&#x05D5;", "&#x05DF;", "&#x05DD;", "&#x05E4;", "&#x007B;", "&#x007D;", "&#x007C;", "&#x05E9;", "&#x05D3;", "&#x05D2;", "&#x05DB;", "&#x05E2;", "&#x05D9;", "&#x05D7;", "&#x05DC;", "&#x05DA;", "&#x003A;", "&#x0022;", , "&#x05D6;", "&#x05E1;", "&#x05D1;", "&#x05D4;", "&#x05E0;", "&#x05DE;", "&#x05E6;", "&#x003C;", "&#x003E;", "&#x003F;"],
  He_alt_gr: [, , , , "&#x20AA;", , , , , , , "&#x05BE;", , , , , , , , "&#x05F0;", , , , , , , , , , , , "&#x05F2;", "&#x05F1;", , , , , , , , , , , , , , , ""],
  Acute: [
    ["&#x0061;", "&#x00E1;"],
    ["&#x0065;", "&#x00E9;"],
    ["&#x0069;", "&#x00ED;"],
    ["&#x006F;", "&#x00F3;"],
    ["&#x0075;", "&#x00FA;"],
    ["&#x0079;", "&#x00FD;"],
    ["&#x0041;", "&#x00C1;"],
    ["&#x0045;", "&#x00C9;"],
    ["&#x0049;", "&#x00CD;"],
    ["&#x004F;", "&#x00D3;"],
    ["&#x0055;", "&#x00DA;"],
    ["&#x0059;", "&#x00DD;"],
    ["&#x0063;", "&#x0107;"],
    ["&#x0043;", "&#x0106;"],
    ["&#x006C;", "&#x013A;"],
    ["&#x004C;", "&#x0139;"],
    ["&#x006D;", "&#x1E3F;"],
    ["&#x004D;", "&#x1E3E;"],
    ["&#x006E;", "&#x0144;"],
    ["&#x004E;", "&#x0143;"],
    ["&#x0072;", "&#x0155;"],
    ["&#x0052;", "&#x0154;"],
    ["&#x0073;", "&#x015B;"],
    ["&#x0053;", "&#x015A;"],
    ["&#x007A;", "&#x017A;"],
    ["&#x005A;", "&#x0179;"],
    ["&#x0391;", "&#x0386;"],
    ["&#x0395;", "&#x0388;"],
    ["&#x0397;", "&#x0389;"],
    ["&#x0399;", "&#x038A;"],
    ["&#x039F;", "&#x038C;"],
    ["&#x03A5;", "&#x038E;"],
    ["&#x03A9;", "&#x038F;"],
    ["&#x03B1;", "&#x03AC;"],
    ["&#x03B5;", "&#x03AD;"],
    ["&#x03B7;", "&#x03AE;"],
    ["&#x03B9;", "&#x03AF;"],
    ["&#x03BF;", "&#x03CC;"],
    ["&#x03C5;", "&#x03CD;"],
    ["&#x03C9;", "&#x03CE;"],
    ["&#x0057;", "&#x1E82;"],
    ["&#x0077;", "&#x1E83;"]
  ],
  Breve: [
    ["&#x0061;", "&#x0103;"],
    ["&#x0065;", "&#x0115;"],
    ["&#x0069;", "&#x012D;"],
    ["&#x006F;", "&#x014F;"],
    ["&#x0075;", "&#x016D;"],
    ["&#x0041;", "&#x0102;"],
    ["&#x0045;", "&#x0114;"],
    ["&#x0049;", "&#x012C;"],
    ["&#x004F;", "&#x014E;"],
    ["&#x0055;", "&#x016C;"],
    ["&#x0079;", "y&#x306;"],
    ["&#x0059;", "Y&#x306;"],
    ["&#x0067;", "&#x011F;"],
    ["&#x0047;", "&#x011E;"]
  ],
  Caron: [
    ["&#x0063;", "&#x010D;"],
    ["&#x0043;", "&#x010C;"],
    ["&#x0064;", "&#x010F;"],
    ["&#x0044;", "&#x010E;"],
    ["&#x0065;", "&#x011B;"],
    ["&#x0045;", "&#x011A;"],
    ["&#x006E;", "&#x0148;"],
    ["&#x004E;", "&#x0147;"],
    ["&#x0072;", "&#x0159;"],
    ["&#x0052;", "&#x0158;"],
    ["&#x0073;", "&#x0161;"],
    ["&#x0053;", "&#x0160;"],
    ["&#x0074;", "&#x0165;"],
    ["&#x0054;", "&#x0164;"],
    ["&#x007A;", "&#x017E;"],
    ["&#x005A;", "&#x017D;"],
    ["&#x006C;", "&#x013E;"],
    ["&#x004C;", "&#x013D;"]
  ],
  Cedilla: [
    ["&#x0063;", "&#x00E7;"],
    ["&#x0043;", "&#x00C7;"],
    ["&#x0067;", "&#x0123;"],
    ["&#x0047;", "&#x0122;"],
    ["&#x006B;", "&#x0137;"],
    ["&#x004B;", "&#x0136;"],
    ["&#x006C;", "&#x013C;"],
    ["&#x004C;", "&#x013B;"],
    ["&#x006E;", "&#x0146;"],
    ["&#x004E;", "&#x0145;"],
    ["&#x0072;", "&#x0157;"],
    ["&#x0052;", "&#x0156;"],
    ["&#x0073;", "&#x015F;"],
    ["&#x0053;", "&#x015E;"],
    ["&#x0074;", "&#x0163;"],
    ["&#x0054;", "&#x0162;"]
  ],
  Circumflex: [
    ["&#x0061;", "&#x00E2;"],
    ["&#x0041;", "&#x00C2;"],
    ["&#x0065;", "&#x00EA;"],
    ["&#x0045;", "&#x00CA;"],
    ["&#x0069;", "&#x00EE;"],
    ["&#x0049;", "&#x00CE;"],
    ["&#x006F;", "&#x00F4;"],
    ["&#x004F;", "&#x00D4;"],
    ["&#x0063;", "&#x0109;"],
    ["&#x0043;", "&#x0108;"],
    ["&#x0067;", "&#x011D;"],
    ["&#x0047;", "&#x011C;"],
    ["&#x0068;", "&#x0125;"],
    ["&#x0048;", "&#x0124;"],
    ["&#x006A;", "&#x0135;"],
    ["&#x004A;", "&#x0134;"],
    ["&#x0073;", "&#x015D;"],
    ["&#x0053;", "&#x015C;"],
    ["&#x0075;", "&#x00FB;"],
    ["&#x0055;", "&#x00DB;"],
    ["&#x0077;", "&#x0175;"],
    ["&#x0057;", "&#x0174;"],
    ["&#x0079;", "&#x0177;"],
    ["&#x0059;", "&#x0176;"]
  ],
  DialytikaTonos: [
    ["&#x03B9;", "&#x0390;"],
    ["&#x03C6;", "&#x03B0;"]
  ],
  DotAbove: [
    ["&#x0063;", "&#x010B;"],
    ["&#x0043;", "&#x010A;"],
    ["&#x0067;", "&#x0121;"],
    ["&#x0047;", "&#x0120;"],
    ["&#x007A;", "&#x017C;"],
    ["&#x005A;", "&#x017B;"],
    ["&#x0065;", "&#x0117;"],
    ["&#x0045;", "&#x0116;"],
    ["&#x006E;", "&#x1E45;"],
    ["&#x004E;", "&#x1E44;"],
    ["&#x006D;", "m&#x307;"],
    ["&#x004D;", "M&#x307;"],
    ["&#x0062;", "b&#x307;"],
    ["&#x0042;", "B&#x307;"]
  ],
  DoubleAcute: [
    ["&#x006F;", "&#x0151;"],
    ["&#x004F;", "&#x0150;"],
    ["&#x0075;", "&#x0171;"],
    ["&#x0055;", "&#x0170;"]
  ],
  Grave: [
    ["&#x0061;", "&#x00E0;"],
    ["&#x0065;", "&#x00E8;"],
    ["&#x0069;", "&#x00EC;"],
    ["&#x006F;", "&#x00F2;"],
    ["&#x0075;", "&#x00F9;"],
    ["&#x0041;", "&#x00C0;"],
    ["&#x0045;", "&#x00C8;"],
    ["&#x0049;", "&#x00CC;"],
    ["&#x004F;", "&#x00D2;"],
    ["&#x0055;", "&#x00D9;"],
    ["&#x0057;", "&#x1E80;"],
    ["&#x0077;", "&#x1E81;"],
    ["&#x0059;", "&#x1EF2;"],
    ["&#x0079;", "&#x1EF3;"],
    ["&#x006D;", "m&#x300;"],
    ["&#x004D;", "M&#x300;"],
    ["&#x006E;", "n&#x300;"],
    ["&#x004E;", "N&#x300;"]
  ],
  Ogonek: [
    ["&#x0069;", "&#x012F;"],
    ["&#x006F;", "&#x01EB;"],
    ["&#x0075;", "&#x0173;"],
    ["&#x0049;", "&#x012E;"],
    ["&#x004F;", "&#x01EA;"],
    ["&#x0055;", "&#x0172;"]
  ],
  RingAbove: [
    ["&#x0061;", "&#x00E5;"],
    ["&#x0041;", "&#x00C5;"],
    ["&#x0075;", "&#x016F;"],
    ["&#x0055;", "&#x016E;"]
  ],
  Tilde: [
    ["&#x0061;", "&#x00E3;"],
    ["&#x006F;", "&#x00F5;"],
    ["&#x006E;", "&#x00F1;"],
    ["&#x0041;", "&#x00C3;"],
    ["&#x004F;", "&#x00D5;"],
    ["&#x0069;", "&#x0129;"],
    ["&#x0049;", "&#x0128;"],
    ["&#x0075;", "&#x0169;"],
    ["&#x0055;", "&#x0168;"],
    ["&#x004E;", "&#x00D1;"],
    ["&#x0065;", "&#x1EBD;"],
    ["&#x0045;", "&#x1EBC;"],
    ["&#x0079;", "&#x1EF9;"],
    ["&#x0059;", "&#x1EF8;"],
    ["&#x0067;", "g&#x303;"],
    ["&#x0047;", "G&#x303;"]
  ],
  Umlaut: [
    ["&#x0061;", "&#x00E4;"],
    ["&#x0065;", "&#x00EB;"],
    ["&#x0069;", "&#x00EF;"],
    ["&#x006F;", "&#x00F6;"],
    ["&#x0075;", "&#x00FC;"],
    ["&#x0079;", "&#x00FF;"],
    ["&#x0041;", "&#x00C4;"],
    ["&#x0045;", "&#x00CB;"],
    ["&#x0049;", "&#x00CF;"],
    ["&#x004F;", "&#x00D6;"],
    ["&#x0055;", "&#x00DC;"],
    ["&#x0059;", "&#x0178;"],
    ["&#x0399;", "&#x03AA;"],
    ["&#x03A5;", "&#x03AB;"],
    ["&#x03B9;", "&#x03CA;"],
    ["&#x03C5;", "&#x03CB;"]
  ]
};
