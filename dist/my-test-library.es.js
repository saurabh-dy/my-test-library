import * as Fe from "react";
import Se, { useEffect as Rt } from "react";
var $e = { exports: {} }, se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function Ct() {
  if (br)
    return se;
  br = 1;
  var e = Se, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, p, d) {
    var f, v = {}, m = null, O = null;
    d !== void 0 && (m = "" + d), p.key !== void 0 && (m = "" + p.key), p.ref !== void 0 && (O = p.ref);
    for (f in p)
      o.call(p, f) && !c.hasOwnProperty(f) && (v[f] = p[f]);
    if (u && u.defaultProps)
      for (f in p = u.defaultProps, p)
        v[f] === void 0 && (v[f] = p[f]);
    return { $$typeof: r, type: u, key: m, ref: O, props: v, _owner: i.current };
  }
  return se.Fragment = n, se.jsx = s, se.jsxs = s, se;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function Ot() {
  return Sr || (Sr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Se, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), w = Symbol.iterator, g = "@@iterator";
    function x(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = w && t[w] || t[g];
      return typeof a == "function" ? a : null;
    }
    var F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++)
          l[h - 1] = arguments[h];
        y("error", t, l);
      }
    }
    function y(t, a, l) {
      {
        var h = F.ReactDebugCurrentFrame, C = h.getStackAddendum();
        C !== "" && (a += "%s", l = l.concat([C]));
        var T = l.map(function(S) {
          return String(S);
        });
        T.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, T);
      }
    }
    var _ = !1, b = !1, D = !1, N = !1, k = !1, G;
    G = Symbol.for("react.module.reference");
    function X(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === c || k || t === i || t === d || t === f || N || t === O || _ || b || D || typeof t == "object" && t !== null && (t.$$typeof === m || t.$$typeof === v || t.$$typeof === s || t.$$typeof === u || t.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === G || t.getModuleId !== void 0));
    }
    function U(t, a, l) {
      var h = t.displayName;
      if (h)
        return h;
      var C = a.displayName || a.name || "";
      return C !== "" ? l + "(" + C + ")" : l;
    }
    function re(t) {
      return t.displayName || "Context";
    }
    function z(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            var a = t;
            return re(a) + ".Consumer";
          case s:
            var l = t;
            return re(l._context) + ".Provider";
          case p:
            return U(t, t.render, "ForwardRef");
          case v:
            var h = t.displayName || null;
            return h !== null ? h : z(t.type) || "Memo";
          case m: {
            var C = t, T = C._payload, S = C._init;
            try {
              return z(S(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, q = 0, te, er, rr, tr, nr, or, ir;
    function ar() {
    }
    ar.__reactDisabledLog = !0;
    function Qr() {
      {
        if (q === 0) {
          te = console.log, er = console.info, rr = console.warn, tr = console.error, nr = console.group, or = console.groupCollapsed, ir = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ar,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        q++;
      }
    }
    function et() {
      {
        if (q--, q === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, t, {
              value: te
            }),
            info: Y({}, t, {
              value: er
            }),
            warn: Y({}, t, {
              value: rr
            }),
            error: Y({}, t, {
              value: tr
            }),
            group: Y({}, t, {
              value: nr
            }),
            groupCollapsed: Y({}, t, {
              value: or
            }),
            groupEnd: Y({}, t, {
              value: ir
            })
          });
        }
        q < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Te = F.ReactCurrentDispatcher, xe;
    function pe(t, a, l) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (C) {
            var h = C.stack.trim().match(/\n( *(at )?)/);
            xe = h && h[1] || "";
          }
        return `
` + xe + t;
      }
    }
    var De = !1, he;
    {
      var rt = typeof WeakMap == "function" ? WeakMap : Map;
      he = new rt();
    }
    function cr(t, a) {
      if (!t || De)
        return "";
      {
        var l = he.get(t);
        if (l !== void 0)
          return l;
      }
      var h;
      De = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = Te.current, Te.current = null, Qr();
      try {
        if (a) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (H) {
              h = H;
            }
            Reflect.construct(t, [], S);
          } else {
            try {
              S.call();
            } catch (H) {
              h = H;
            }
            t.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            h = H;
          }
          t();
        }
      } catch (H) {
        if (H && h && typeof H.stack == "string") {
          for (var E = H.stack.split(`
`), M = h.stack.split(`
`), j = E.length - 1, A = M.length - 1; j >= 1 && A >= 0 && E[j] !== M[A]; )
            A--;
          for (; j >= 1 && A >= 0; j--, A--)
            if (E[j] !== M[A]) {
              if (j !== 1 || A !== 1)
                do
                  if (j--, A--, A < 0 || E[j] !== M[A]) {
                    var L = `
` + E[j].replace(" at new ", " at ");
                    return t.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", t.displayName)), typeof t == "function" && he.set(t, L), L;
                  }
                while (j >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        De = !1, Te.current = T, et(), Error.prepareStackTrace = C;
      }
      var oe = t ? t.displayName || t.name : "", gr = oe ? pe(oe) : "";
      return typeof t == "function" && he.set(t, gr), gr;
    }
    function tt(t, a, l) {
      return cr(t, !1);
    }
    function nt(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function ye(t, a, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return cr(t, nt(t));
      if (typeof t == "string")
        return pe(t);
      switch (t) {
        case d:
          return pe("Suspense");
        case f:
          return pe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case p:
            return tt(t.render);
          case v:
            return ye(t.type, a, l);
          case m: {
            var h = t, C = h._payload, T = h._init;
            try {
              return ye(T(C), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, sr = {}, ur = F.ReactDebugCurrentFrame;
    function me(t) {
      if (t) {
        var a = t._owner, l = ye(t.type, t._source, a ? a.type : null);
        ur.setExtraStackFrame(l);
      } else
        ur.setExtraStackFrame(null);
    }
    function ot(t, a, l, h, C) {
      {
        var T = Function.call.bind(ve);
        for (var S in t)
          if (T(t, S)) {
            var E = void 0;
            try {
              if (typeof t[S] != "function") {
                var M = Error((h || "React class") + ": " + l + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              E = t[S](a, S, h, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              E = j;
            }
            E && !(E instanceof Error) && (me(C), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", l, S, typeof E), me(null)), E instanceof Error && !(E.message in sr) && (sr[E.message] = !0, me(C), R("Failed %s type: %s", l, E.message), me(null));
          }
      }
    }
    var it = Array.isArray;
    function ke(t) {
      return it(t);
    }
    function at(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function ct(t) {
      try {
        return lr(t), !1;
      } catch {
        return !0;
      }
    }
    function lr(t) {
      return "" + t;
    }
    function fr(t) {
      if (ct(t))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", at(t)), lr(t);
    }
    var ce = F.ReactCurrentOwner, st = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dr, pr, Ne;
    Ne = {};
    function ut(t) {
      if (ve.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function lt(t) {
      if (ve.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function ft(t, a) {
      if (typeof t.ref == "string" && ce.current && a && ce.current.stateNode !== a) {
        var l = z(ce.current.type);
        Ne[l] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(ce.current.type), t.ref), Ne[l] = !0);
      }
    }
    function dt(t, a) {
      {
        var l = function() {
          dr || (dr = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function pt(t, a) {
      {
        var l = function() {
          pr || (pr = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var ht = function(t, a, l, h, C, T, S) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: a,
        ref: l,
        props: S,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function yt(t, a, l, h, C) {
      {
        var T, S = {}, E = null, M = null;
        l !== void 0 && (fr(l), E = "" + l), lt(a) && (fr(a.key), E = "" + a.key), ut(a) && (M = a.ref, ft(a, C));
        for (T in a)
          ve.call(a, T) && !st.hasOwnProperty(T) && (S[T] = a[T]);
        if (t && t.defaultProps) {
          var j = t.defaultProps;
          for (T in j)
            S[T] === void 0 && (S[T] = j[T]);
        }
        if (E || M) {
          var A = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          E && dt(S, A), M && pt(S, A);
        }
        return ht(t, E, M, C, h, ce.current, S);
      }
    }
    var je = F.ReactCurrentOwner, hr = F.ReactDebugCurrentFrame;
    function ne(t) {
      if (t) {
        var a = t._owner, l = ye(t.type, t._source, a ? a.type : null);
        hr.setExtraStackFrame(l);
      } else
        hr.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function Ae(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function yr() {
      {
        if (je.current) {
          var t = z(je.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function vt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var vr = {};
    function mt(t) {
      {
        var a = yr();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function mr(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = mt(a);
        if (vr[l])
          return;
        vr[l] = !0;
        var h = "";
        t && t._owner && t._owner !== je.current && (h = " It was passed a child from " + z(t._owner.type) + "."), ne(t), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, h), ne(null);
      }
    }
    function _r(t, a) {
      {
        if (typeof t != "object")
          return;
        if (ke(t))
          for (var l = 0; l < t.length; l++) {
            var h = t[l];
            Ae(h) && mr(h, a);
          }
        else if (Ae(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = x(t);
          if (typeof C == "function" && C !== t.entries)
            for (var T = C.call(t), S; !(S = T.next()).done; )
              Ae(S.value) && mr(S.value, a);
        }
      }
    }
    function _t(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === v))
          l = a.propTypes;
        else
          return;
        if (l) {
          var h = z(a);
          ot(l, t.props, "prop", h, t);
        } else if (a.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var C = z(a);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Et(t) {
      {
        for (var a = Object.keys(t.props), l = 0; l < a.length; l++) {
          var h = a[l];
          if (h !== "children" && h !== "key") {
            ne(t), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), ne(null);
            break;
          }
        }
        t.ref !== null && (ne(t), R("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    function Er(t, a, l, h, C, T) {
      {
        var S = X(t);
        if (!S) {
          var E = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = vt(C);
          M ? E += M : E += yr();
          var j;
          t === null ? j = "null" : ke(t) ? j = "array" : t !== void 0 && t.$$typeof === r ? (j = "<" + (z(t.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : j = typeof t, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, E);
        }
        var A = yt(t, a, l, C, T);
        if (A == null)
          return A;
        if (S) {
          var L = a.children;
          if (L !== void 0)
            if (h)
              if (ke(L)) {
                for (var oe = 0; oe < L.length; oe++)
                  _r(L[oe], t);
                Object.freeze && Object.freeze(L);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _r(L, t);
        }
        return t === o ? Et(A) : _t(A), A;
      }
    }
    function gt(t, a, l) {
      return Er(t, a, l, !0);
    }
    function bt(t, a, l) {
      return Er(t, a, l, !1);
    }
    var St = bt, wt = gt;
    ue.Fragment = o, ue.jsx = St, ue.jsxs = wt;
  }()), ue;
}
process.env.NODE_ENV === "production" ? $e.exports = Ct() : $e.exports = Ot();
var I = $e.exports, We = { exports: {} }, Me = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr;
function Tt() {
  if (wr)
    return Me;
  wr = 1;
  var e = Se;
  function r(p, d) {
    return p === d && (p !== 0 || 1 / p === 1 / d) || p !== p && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = e.useSyncExternalStore, i = e.useRef, c = e.useEffect, s = e.useMemo, u = e.useDebugValue;
  return Me.useSyncExternalStoreWithSelector = function(p, d, f, v, m) {
    var O = i(null);
    if (O.current === null) {
      var w = { hasValue: !1, value: null };
      O.current = w;
    } else
      w = O.current;
    O = s(function() {
      function x(b) {
        if (!F) {
          if (F = !0, R = b, b = v(b), m !== void 0 && w.hasValue) {
            var D = w.value;
            if (m(D, b))
              return y = D;
          }
          return y = b;
        }
        if (D = y, n(R, b))
          return D;
        var N = v(b);
        return m !== void 0 && m(D, N) ? D : (R = b, y = N);
      }
      var F = !1, R, y, _ = f === void 0 ? null : f;
      return [function() {
        return x(d());
      }, _ === null ? void 0 : function() {
        return x(_());
      }];
    }, [d, f, v, m]);
    var g = o(p, O[0], O[1]);
    return c(function() {
      w.hasValue = !0, w.value = g;
    }, [g]), u(g), g;
  }, Me;
}
var Ie = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function xt() {
  return Rr || (Rr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Se;
    function r(d, f) {
      return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = e.useSyncExternalStore, i = e.useRef, c = e.useEffect, s = e.useMemo, u = e.useDebugValue;
    function p(d, f, v, m, O) {
      var w = i(null), g;
      w.current === null ? (g = {
        hasValue: !1,
        value: null
      }, w.current = g) : g = w.current;
      var x = s(function() {
        var _ = !1, b, D, N = function(U) {
          if (!_) {
            _ = !0, b = U;
            var re = m(U);
            if (O !== void 0 && g.hasValue) {
              var z = g.value;
              if (O(z, re))
                return D = z, z;
            }
            return D = re, re;
          }
          var Y = b, q = D;
          if (n(Y, U))
            return q;
          var te = m(U);
          return O !== void 0 && O(q, te) ? q : (b = U, D = te, te);
        }, k = v === void 0 ? null : v, G = function() {
          return N(f());
        }, X = k === null ? void 0 : function() {
          return N(k());
        };
        return [G, X];
      }, [f, v, m, O]), F = x[0], R = x[1], y = o(d, F, R);
      return c(function() {
        g.hasValue = !0, g.value = y;
      }, [y]), u(y), y;
    }
    Ie.useSyncExternalStoreWithSelector = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ie;
}
process.env.NODE_ENV === "production" ? We.exports = Tt() : We.exports = xt();
var Dt = We.exports, B = (
  // prettier-ignore
  // @ts-ignore
  "default" in Fe ? Fe.default : Fe
), Cr = Symbol.for("react-redux-context"), Or = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function kt() {
  if (!B.createContext)
    return {};
  const e = Or[Cr] ?? (Or[Cr] = /* @__PURE__ */ new Map());
  let r = e.get(B.createContext);
  return r || (r = B.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), e.set(B.createContext, r)), r;
}
var Q = /* @__PURE__ */ kt(), Nt = () => {
  throw new Error("uSES not initialized!");
};
function He(e = Q) {
  return function() {
    const n = B.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var Ir = /* @__PURE__ */ He(), Vr = Nt, jt = (e) => {
  Vr = e;
}, Pt = (e, r) => e === r;
function At(e = Q) {
  const r = e === Q ? Ir : He(e), n = (o, i = {}) => {
    const { equalityFn: c = Pt, devModeChecks: s = {} } = typeof i == "function" ? { equalityFn: i } : i;
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("You must pass a selector to useSelector");
      if (typeof o != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof c != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: u,
      subscription: p,
      getServerState: d,
      stabilityCheck: f,
      identityFunctionCheck: v
    } = r(), m = B.useRef(!0), O = B.useCallback(
      {
        [o.name](g) {
          const x = o(g);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: F,
              stabilityCheck: R
            } = {
              stabilityCheck: f,
              identityFunctionCheck: v,
              ...s
            };
            if (R === "always" || R === "once" && m.current) {
              const y = o(g);
              if (!c(x, y)) {
                let _;
                try {
                  throw new Error();
                } catch (b) {
                  ({ stack: _ } = b);
                }
                console.warn(
                  "Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: g,
                    selected: x,
                    selected2: y,
                    stack: _
                  }
                );
              }
            }
            if ((F === "always" || F === "once" && m.current) && x === g) {
              let y;
              try {
                throw new Error();
              } catch (_) {
                ({ stack: y } = _);
              }
              console.warn(
                "Selector " + (o.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: y }
              );
            }
            m.current && (m.current = !1);
          }
          return x;
        }
      }[o.name],
      [o, f, s.stabilityCheck]
    ), w = Vr(
      p.addNestedSub,
      u.getState,
      d || u.getState,
      O,
      c
    );
    return B.useDebugValue(w), w;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var zr = /* @__PURE__ */ At(), Ft = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
Ft ? B.useLayoutEffect : B.useEffect;
function $r(e = Q) {
  const r = e === Q ? Ir : (
    // @ts-ignore
    He(e)
  ), n = () => {
    const { store: o } = r();
    return o;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Mt = /* @__PURE__ */ $r();
function It(e = Q) {
  const r = e === Q ? Mt : $r(e), n = () => r().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Wr = /* @__PURE__ */ It();
jt(Dt.useSyncExternalStoreWithSelector);
function Vt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let r = e;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r || Object.getPrototypeOf(e) === null;
}
function zt(e) {
  return Vt(e) && "type" in e && typeof e.type == "string";
}
var Lr = Symbol.for("immer-nothing"), Tr = Symbol.for("immer-draftable"), $ = Symbol.for("immer-state"), $t = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function V(e, ...r) {
  if (process.env.NODE_ENV !== "production") {
    const n = $t[e], o = typeof n == "function" ? n.apply(null, r) : n;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ie = Object.getPrototypeOf;
function J(e) {
  return !!e && !!e[$];
}
function K(e) {
  var r;
  return e ? Gr(e) || Array.isArray(e) || !!e[Tr] || !!((r = e.constructor) != null && r[Tr]) || Re(e) || Ce(e) : !1;
}
var Wt = Object.prototype.constructor.toString();
function Gr(e) {
  if (!e || typeof e != "object")
    return !1;
  const r = ie(e);
  if (r === null)
    return !0;
  const n = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Wt;
}
function le(e, r) {
  we(e) === 0 ? Object.entries(e).forEach(([n, o]) => {
    r(n, o, e);
  }) : e.forEach((n, o) => r(o, n, e));
}
function we(e) {
  const r = e[$];
  return r ? r.type_ : Array.isArray(e) ? 1 : Re(e) ? 2 : Ce(e) ? 3 : 0;
}
function Le(e, r) {
  return we(e) === 2 ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r);
}
function Br(e, r, n) {
  const o = we(e);
  o === 2 ? e.set(r, n) : o === 3 ? e.add(n) : e[r] = n;
}
function Lt(e, r) {
  return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function Re(e) {
  return e instanceof Map;
}
function Ce(e) {
  return e instanceof Set;
}
function Z(e) {
  return e.copy_ || e.base_;
}
function Ge(e, r) {
  if (Re(e))
    return new Map(e);
  if (Ce(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!r && Gr(e))
    return ie(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[$];
  let o = Reflect.ownKeys(n);
  for (let i = 0; i < o.length; i++) {
    const c = o[i], s = n[c];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[c] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: e[c]
    });
  }
  return Object.create(ie(e), n);
}
function Ke(e, r = !1) {
  return Oe(e) || J(e) || !K(e) || (we(e) > 1 && (e.set = e.add = e.clear = e.delete = Gt), Object.freeze(e), r && le(e, (n, o) => Ke(o, !0))), e;
}
function Gt() {
  V(2);
}
function Oe(e) {
  return Object.isFrozen(e);
}
var Bt = {};
function ee(e) {
  const r = Bt[e];
  return r || V(0, e), r;
}
var fe;
function Ur() {
  return fe;
}
function Ut(e, r) {
  return {
    drafts_: [],
    parent_: e,
    immer_: r,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function xr(e, r) {
  r && (ee("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = r);
}
function Be(e) {
  Ue(e), e.drafts_.forEach(Yt), e.drafts_ = null;
}
function Ue(e) {
  e === fe && (fe = e.parent_);
}
function Dr(e) {
  return fe = Ut(fe, e);
}
function Yt(e) {
  const r = e[$];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : r.revoked_ = !0;
}
function kr(e, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const n = r.drafts_[0];
  return e !== void 0 && e !== n ? (n[$].modified_ && (Be(r), V(4)), K(e) && (e = ge(r, e), r.parent_ || be(r, e)), r.patches_ && ee("Patches").generateReplacementPatches_(
    n[$].base_,
    e,
    r.patches_,
    r.inversePatches_
  )) : e = ge(r, n, []), Be(r), r.patches_ && r.patchListener_(r.patches_, r.inversePatches_), e !== Lr ? e : void 0;
}
function ge(e, r, n) {
  if (Oe(r))
    return r;
  const o = r[$];
  if (!o)
    return le(
      r,
      (i, c) => Nr(e, o, r, i, c, n)
    ), r;
  if (o.scope_ !== e)
    return r;
  if (!o.modified_)
    return be(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const i = o.copy_;
    let c = i, s = !1;
    o.type_ === 3 && (c = new Set(i), i.clear(), s = !0), le(
      c,
      (u, p) => Nr(e, o, i, u, p, n, s)
    ), be(e, i, !1), n && e.patches_ && ee("Patches").generatePatches_(
      o,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function Nr(e, r, n, o, i, c, s) {
  if (process.env.NODE_ENV !== "production" && i === n && V(5), J(i)) {
    const u = c && r && r.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Le(r.assigned_, o) ? c.concat(o) : void 0, p = ge(e, i, u);
    if (Br(n, o, p), J(p))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(i);
  if (K(i) && !Oe(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ge(e, i), (!r || !r.scope_.parent_) && be(e, i);
  }
}
function be(e, r, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ke(r, n);
}
function qt(e, r) {
  const n = Array.isArray(e), o = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: r ? r.scope_ : Ur(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: r,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = o, c = Je;
  n && (i = [o], c = de);
  const { revoke: s, proxy: u } = Proxy.revocable(i, c);
  return o.draft_ = u, o.revoke_ = s, u;
}
var Je = {
  get(e, r) {
    if (r === $)
      return e;
    const n = Z(e);
    if (!Le(n, r))
      return Ht(e, n, r);
    const o = n[r];
    return e.finalized_ || !K(o) ? o : o === Ve(e.base_, r) ? (ze(e), e.copy_[r] = qe(o, e)) : o;
  },
  has(e, r) {
    return r in Z(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Z(e));
  },
  set(e, r, n) {
    const o = Yr(Z(e), r);
    if (o != null && o.set)
      return o.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = Ve(Z(e), r), c = i == null ? void 0 : i[$];
      if (c && c.base_ === n)
        return e.copy_[r] = n, e.assigned_[r] = !1, !0;
      if (Lt(n, i) && (n !== void 0 || Le(e.base_, r)))
        return !0;
      ze(e), Ye(e);
    }
    return e.copy_[r] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || r in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[r]) || (e.copy_[r] = n, e.assigned_[r] = !0), !0;
  },
  deleteProperty(e, r) {
    return Ve(e.base_, r) !== void 0 || r in e.base_ ? (e.assigned_[r] = !1, ze(e), Ye(e)) : delete e.assigned_[r], e.copy_ && delete e.copy_[r], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, r) {
    const n = Z(e), o = Reflect.getOwnPropertyDescriptor(n, r);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || r !== "length",
      enumerable: o.enumerable,
      value: n[r]
    };
  },
  defineProperty() {
    V(11);
  },
  getPrototypeOf(e) {
    return ie(e.base_);
  },
  setPrototypeOf() {
    V(12);
  }
}, de = {};
le(Je, (e, r) => {
  de[e] = function() {
    return arguments[0] = arguments[0][0], r.apply(this, arguments);
  };
});
de.deleteProperty = function(e, r) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(r)) && V(13), de.set.call(this, e, r, void 0);
};
de.set = function(e, r, n) {
  return process.env.NODE_ENV !== "production" && r !== "length" && isNaN(parseInt(r)) && V(14), Je.set.call(this, e[0], r, n, e[0]);
};
function Ve(e, r) {
  const n = e[$];
  return (n ? Z(n) : e)[r];
}
function Ht(e, r, n) {
  var i;
  const o = Yr(r, n);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = o.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function Yr(e, r) {
  if (!(r in e))
    return;
  let n = ie(e);
  for (; n; ) {
    const o = Object.getOwnPropertyDescriptor(n, r);
    if (o)
      return o;
    n = ie(n);
  }
}
function Ye(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ye(e.parent_));
}
function ze(e) {
  e.copy_ || (e.copy_ = Ge(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Kt = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (r, n, o) => {
      if (typeof r == "function" && typeof n != "function") {
        const c = n;
        n = r;
        const s = this;
        return function(p = c, ...d) {
          return s.produce(p, (f) => n.call(this, f, ...d));
        };
      }
      typeof n != "function" && V(6), o !== void 0 && typeof o != "function" && V(7);
      let i;
      if (K(r)) {
        const c = Dr(this), s = qe(r, void 0);
        let u = !0;
        try {
          i = n(s), u = !1;
        } finally {
          u ? Be(c) : Ue(c);
        }
        return xr(c, o), kr(i, c);
      } else if (!r || typeof r != "object") {
        if (i = n(r), i === void 0 && (i = r), i === Lr && (i = void 0), this.autoFreeze_ && Ke(i, !0), o) {
          const c = [], s = [];
          ee("Patches").generateReplacementPatches_(r, i, c, s), o(c, s);
        }
        return i;
      } else
        V(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (typeof r == "function")
        return (s, ...u) => this.produceWithPatches(s, (p) => r(p, ...u));
      let o, i;
      return [this.produce(r, n, (s, u) => {
        o = s, i = u;
      }), o, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    K(e) || V(8), J(e) && (e = qr(e));
    const r = Dr(this), n = qe(e, void 0);
    return n[$].isManual_ = !0, Ue(r), n;
  }
  finishDraft(e, r) {
    const n = e && e[$];
    (!n || !n.isManual_) && V(9);
    const { scope_: o } = n;
    return xr(o, r), kr(void 0, o);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const i = r[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const o = ee("Patches").applyPatches_;
    return J(e) ? o(e, r) : this.produce(
      e,
      (i) => o(i, r)
    );
  }
};
function qe(e, r) {
  const n = Re(e) ? ee("MapSet").proxyMap_(e, r) : Ce(e) ? ee("MapSet").proxySet_(e, r) : qt(e, r);
  return (r ? r.scope_ : Ur()).drafts_.push(n), n;
}
function qr(e) {
  return J(e) || V(10, e), Hr(e);
}
function Hr(e) {
  if (!K(e) || Oe(e))
    return e;
  const r = e[$];
  let n;
  if (r) {
    if (!r.modified_)
      return r.base_;
    r.finalized_ = !0, n = Ge(e, r.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Ge(e, !0);
  return le(n, (o, i) => {
    Br(n, o, Hr(i));
  }), r && (r.finalized_ = !1), n;
}
var W = new Kt(), Kr = W.produce;
W.produceWithPatches.bind(
  W
);
W.setAutoFreeze.bind(W);
W.setUseStrictShallowCopy.bind(W);
W.applyPatches.bind(W);
W.createDraft.bind(W);
W.finishDraft.bind(W);
var Jt = (e, r, n) => {
  if (r.length === 1 && r[0] === n) {
    let o = !1;
    try {
      const i = {};
      e(i) === i && (o = !0);
    } catch {
    }
    if (o) {
      let i;
      try {
        throw new Error();
      } catch (c) {
        ({ stack: i } = c);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, Xt = (e, r, n) => {
  const { memoize: o, memoizeOptions: i } = r, { inputSelectorResults: c, inputSelectorResultsCopy: s } = e, u = o(() => ({}), ...i);
  if (!(u.apply(null, c) === u.apply(null, s))) {
    let d;
    try {
      throw new Error();
    } catch (f) {
      ({ stack: d } = f);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: c,
        secondInputs: s,
        stack: d
      }
    );
  }
}, Zt = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Qt(e, r = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(r);
}
function en(e, r = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(r);
}
function rn(e, r = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o
    ).join(", ");
    throw new TypeError(`${r}[${n}]`);
  }
}
var jr = (e) => Array.isArray(e) ? e : [e];
function tn(e) {
  const r = Array.isArray(e[0]) ? e[0] : e;
  return rn(
    r,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), r;
}
function Pr(e, r) {
  const n = [], { length: o } = e;
  for (let i = 0; i < o; i++)
    n.push(e[i].apply(null, r));
  return n;
}
var nn = (e, r) => {
  const { identityFunctionCheck: n, inputStabilityCheck: o } = {
    ...Zt,
    ...r
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: Jt
    },
    inputStabilityCheck: {
      shouldRun: o === "always" || o === "once" && e,
      run: Xt
    }
  };
}, on = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, an = typeof WeakRef < "u" ? WeakRef : on, cn = 0, Ar = 1;
function _e() {
  return {
    s: cn,
    v: void 0,
    o: null,
    p: null
  };
}
function Xe(e, r = {}) {
  let n = _e();
  const { resultEqualityCheck: o } = r;
  let i, c = 0;
  function s() {
    var v;
    let u = n;
    const { length: p } = arguments;
    for (let m = 0, O = p; m < O; m++) {
      const w = arguments[m];
      if (typeof w == "function" || typeof w == "object" && w !== null) {
        let g = u.o;
        g === null && (u.o = g = /* @__PURE__ */ new WeakMap());
        const x = g.get(w);
        x === void 0 ? (u = _e(), g.set(w, u)) : u = x;
      } else {
        let g = u.p;
        g === null && (u.p = g = /* @__PURE__ */ new Map());
        const x = g.get(w);
        x === void 0 ? (u = _e(), g.set(w, u)) : u = x;
      }
    }
    const d = u;
    let f;
    if (u.s === Ar ? f = u.v : (f = e.apply(null, arguments), c++), d.s = Ar, o) {
      const m = ((v = i == null ? void 0 : i.deref) == null ? void 0 : v.call(i)) ?? i;
      m != null && o(m, f) && (f = m, c !== 0 && c--), i = typeof f == "object" && f !== null || typeof f == "function" ? new an(f) : f;
    }
    return d.v = f, f;
  }
  return s.clearCache = () => {
    n = _e(), s.resetResultsCount();
  }, s.resultsCount = () => c, s.resetResultsCount = () => {
    c = 0;
  }, s;
}
function Jr(e, ...r) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: r
  } : e, o = (...i) => {
    let c = 0, s = 0, u, p = {}, d = i.pop();
    typeof d == "object" && (p = d, d = i.pop()), Qt(
      d,
      `createSelector expects an output function after the inputs, but received: [${typeof d}]`
    );
    const f = {
      ...n,
      ...p
    }, {
      memoize: v,
      memoizeOptions: m = [],
      argsMemoize: O = Xe,
      argsMemoizeOptions: w = [],
      devModeChecks: g = {}
    } = f, x = jr(m), F = jr(w), R = tn(i), y = v(function() {
      return c++, d.apply(
        null,
        arguments
      );
    }, ...x);
    let _ = !0;
    const b = O(function() {
      s++;
      const N = Pr(
        R,
        arguments
      );
      if (u = y.apply(null, N), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: k, inputStabilityCheck: G } = nn(_, g);
        if (k.shouldRun && k.run(
          d,
          N,
          u
        ), G.shouldRun) {
          const X = Pr(
            R,
            arguments
          );
          G.run(
            { inputSelectorResults: N, inputSelectorResultsCopy: X },
            { memoize: v, memoizeOptions: x },
            arguments
          );
        }
        _ && (_ = !1);
      }
      return u;
    }, ...F);
    return Object.assign(b, {
      resultFunc: d,
      memoizedResultFunc: y,
      dependencies: R,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => u,
      recomputations: () => c,
      resetRecomputations: () => {
        c = 0;
      },
      memoize: v,
      argsMemoize: O
    });
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var sn = /* @__PURE__ */ Jr(Xe), un = Object.assign(
  (e, r = sn) => {
    en(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), o = n.map(
      (c) => e[c]
    );
    return r(
      o,
      (...c) => c.reduce((s, u, p) => (s[n[p]] = u, s), {})
    );
  },
  { withTypes: () => un }
), ln = (...e) => {
  const r = Jr(...e), n = Object.assign((...o) => {
    const i = r(...o), c = (s, ...u) => i(J(s) ? qr(s) : s, ...u);
    return Object.assign(c, i), c;
  }, {
    withTypes: () => n
  });
  return n;
};
ln(Xe);
function ae(e, r) {
  function n(...o) {
    if (r) {
      let i = r(...o);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? P(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: o[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (o) => zt(o) && o.type === e, n;
}
function Fr(e) {
  return K(e) ? Kr(e, () => {
  }) : e;
}
function Mr(e, r, n) {
  if (e.has(r)) {
    let i = e.get(r);
    return n.update && (i = n.update(i, r, e), e.set(r, i)), i;
  }
  if (!n.insert)
    throw new Error(process.env.NODE_ENV === "production" ? P(10) : "No insert provided for key not already in map");
  const o = n.insert(r, e);
  return e.set(r, o), o;
}
process.env.NODE_ENV;
function Xr(e) {
  const r = {}, n = [];
  let o;
  const i = {
    addCase(c, s) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? P(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (o)
          throw new Error(process.env.NODE_ENV === "production" ? P(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof c == "string" ? c : c.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? P(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in r)
        throw new Error(process.env.NODE_ENV === "production" ? P(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return r[u] = s, i;
    },
    addMatcher(c, s) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? P(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: c,
        reducer: s
      }), i;
    },
    addDefaultCase(c) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? P(31) : "`builder.addDefaultCase` can only be called once");
      return o = c, i;
    }
  };
  return e(i), [r, n, o];
}
function fn(e) {
  return typeof e == "function";
}
function dn(e, r) {
  if (process.env.NODE_ENV !== "production" && typeof r == "object")
    throw new Error(process.env.NODE_ENV === "production" ? P(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, o, i] = Xr(r), c;
  if (fn(e))
    c = () => Fr(e());
  else {
    const u = Fr(e);
    c = () => u;
  }
  function s(u = c(), p) {
    let d = [n[p.type], ...o.filter(({
      matcher: f
    }) => f(p)).map(({
      reducer: f
    }) => f)];
    return d.filter((f) => !!f).length === 0 && (d = [i]), d.reduce((f, v) => {
      if (v)
        if (J(f)) {
          const O = v(f, p);
          return O === void 0 ? f : O;
        } else {
          if (K(f))
            return Kr(f, (m) => v(m, p));
          {
            const m = v(f, p);
            if (m === void 0) {
              if (f === null)
                return f;
              throw new Error(process.env.NODE_ENV === "production" ? P(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return m;
          }
        }
      return f;
    }, u);
  }
  return s.getInitialState = c, s;
}
var pn = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", hn = (e = 21) => {
  let r = "", n = e;
  for (; n--; )
    r += pn[Math.random() * 64 | 0];
  return r;
}, yn = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function vn(e, r) {
  return `${e}/${r}`;
}
function mn({
  creators: e
} = {}) {
  var n;
  const r = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[yn];
  return function(i) {
    const {
      name: c,
      reducerPath: s = c
    } = i;
    if (!c)
      throw new Error(process.env.NODE_ENV === "production" ? P(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const u = (typeof i.reducers == "function" ? i.reducers(gn()) : i.reducers) || {}, p = Object.keys(u), d = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(y, _) {
        const b = typeof y == "string" ? y : y.type;
        if (!b)
          throw new Error(process.env.NODE_ENV === "production" ? P(12) : "`context.addCase` cannot be called with an empty action type");
        if (b in d.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? P(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + b);
        return d.sliceCaseReducersByType[b] = _, f;
      },
      addMatcher(y, _) {
        return d.sliceMatchers.push({
          matcher: y,
          reducer: _
        }), f;
      },
      exposeAction(y, _) {
        return d.actionCreators[y] = _, f;
      },
      exposeCaseReducer(y, _) {
        return d.sliceCaseReducersByName[y] = _, f;
      }
    };
    p.forEach((y) => {
      const _ = u[y], b = {
        reducerName: y,
        type: vn(c, y),
        createNotation: typeof i.reducers == "function"
      };
      Sn(_) ? Rn(b, _, f, r) : bn(b, _, f);
    });
    function v() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? P(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [y = {}, _ = [], b = void 0] = typeof i.extraReducers == "function" ? Xr(i.extraReducers) : [i.extraReducers], D = {
        ...y,
        ...d.sliceCaseReducersByType
      };
      return dn(i.initialState, (N) => {
        for (let k in D)
          N.addCase(k, D[k]);
        for (let k of d.sliceMatchers)
          N.addMatcher(k.matcher, k.reducer);
        for (let k of _)
          N.addMatcher(k.matcher, k.reducer);
        b && N.addDefaultCase(b);
      });
    }
    const m = (y) => y, O = /* @__PURE__ */ new Map();
    let w;
    function g(y, _) {
      return w || (w = v()), w(y, _);
    }
    function x() {
      return w || (w = v()), w.getInitialState();
    }
    function F(y, _ = !1) {
      function b(N) {
        let k = N[y];
        if (typeof k > "u") {
          if (_)
            k = x();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? P(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return k;
      }
      function D(N = m) {
        const k = Mr(O, _, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Mr(k, N, {
          insert: () => {
            const G = {};
            for (const [X, U] of Object.entries(i.selectors ?? {}))
              G[X] = _n(U, N, x, _);
            return G;
          }
        });
      }
      return {
        reducerPath: y,
        getSelectors: D,
        get selectors() {
          return D(b);
        },
        selectSlice: b
      };
    }
    const R = {
      name: c,
      reducer: g,
      actions: d.actionCreators,
      caseReducers: d.sliceCaseReducersByName,
      getInitialState: x,
      ...F(s),
      injectInto(y, {
        reducerPath: _,
        ...b
      } = {}) {
        const D = _ ?? s;
        return y.inject({
          reducerPath: D,
          reducer: g
        }, b), {
          ...R,
          ...F(D, !0)
        };
      }
    };
    return R;
  };
}
function _n(e, r, n, o) {
  function i(c, ...s) {
    let u = r(c);
    if (typeof u > "u") {
      if (o)
        u = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? P(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(u, ...s);
  }
  return i.unwrapped = e, i;
}
var En = /* @__PURE__ */ mn();
function gn() {
  function e(r, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: r,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(r) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [r.name](...n) {
          return r(...n);
        }
      }[r.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(r, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: r,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function bn({
  type: e,
  reducerName: r,
  createNotation: n
}, o, i) {
  let c, s;
  if ("reducer" in o) {
    if (n && !wn(o))
      throw new Error(process.env.NODE_ENV === "production" ? P(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    c = o.reducer, s = o.prepare;
  } else
    c = o;
  i.addCase(e, c).exposeCaseReducer(r, c).exposeAction(r, s ? ae(e, s) : ae(e));
}
function Sn(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function wn(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Rn({
  type: e,
  reducerName: r
}, n, o, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? P(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: c,
    fulfilled: s,
    pending: u,
    rejected: p,
    settled: d,
    options: f
  } = n, v = i(e, c, f);
  o.exposeAction(r, v), s && o.addCase(v.fulfilled, s), u && o.addCase(v.pending, u), p && o.addCase(v.rejected, p), d && o.addMatcher(v.settled, d), o.exposeCaseReducer(r, {
    fulfilled: s || Ee,
    pending: u || Ee,
    rejected: p || Ee,
    settled: d || Ee
  });
}
function Ee() {
}
var Cn = (e, r) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? P(32) : `${r} is not a function`);
}, Ze = "listenerMiddleware", On = (e) => {
  let {
    type: r,
    actionCreator: n,
    matcher: o,
    predicate: i,
    effect: c
  } = e;
  if (r)
    i = ae(r).match;
  else if (n)
    r = n.type, i = n.match;
  else if (o)
    i = o;
  else if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? P(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Cn(c, "options.listener"), {
    predicate: i,
    type: r,
    effect: c
  };
}, Tn = Object.assign((e) => {
  const {
    type: r,
    predicate: n,
    effect: o
  } = On(e);
  return {
    id: hn(),
    effect: o,
    type: r,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? P(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Tn
}), xn = Object.assign(ae(`${Ze}/add`), {
  withTypes: () => xn
});
ae(`${Ze}/removeAll`);
var Dn = Object.assign(ae(`${Ze}/remove`), {
  withTypes: () => Dn
});
function P(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const kn = {
  isGameStarted: !1,
  currentScreen: "A",
  isGameEnded: !1
}, Zr = En({
  name: "game",
  initialState: kn,
  reducers: {
    startGame: (e, r) => {
      e.isGameStarted = r.payload;
    },
    setGameScreen: (e, r) => {
      e.currentScreen = r.payload;
    }
  }
}), { startGame: Nn, setGameScreen: jn } = Zr.actions;
Zr.reducer;
const Pn = () => {
  const e = Wr();
  return {
    callback: (n) => {
      e(Nn(n));
    }
  };
}, An = () => {
  const { isGameStarted: e } = zr((n) => n.game), { callback: r } = Pn();
  return e ? null : /* @__PURE__ */ I.jsx(
    "div",
    {
      style: {
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100dvh",
        background: "skyblue",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /* @__PURE__ */ I.jsx(
        "div",
        {
          style: {
            minWidth: "300px",
            maxWidth: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid red"
          },
          children: /* @__PURE__ */ I.jsx(
            "button",
            {
              onClick: () => r(!0),
              type: "button",
              style: {
                border: "2px solid skyblue",
                borderRadius: "10px",
                padding: "5px 10px",
                cursor: "pointer"
              },
              children: "START"
            }
          )
        }
      )
    }
  );
}, Qe = () => {
  const { currentScreen: e } = zr((o) => o.game), r = Wr();
  return {
    setScreen: (o) => {
      r(jn(o));
    },
    currentScreen: e
  };
}, Fn = () => {
  const { currentScreen: e, setScreen: r } = Qe();
  return e !== "A" ? null : /* @__PURE__ */ I.jsxs("div", { children: [
    "ScreenA",
    " ",
    /* @__PURE__ */ I.jsx("button", { onClick: () => r("B"), children: "Go to screen B" })
  ] });
}, Mn = () => {
  const { currentScreen: e, setScreen: r } = Qe();
  return e !== "B" ? null : /* @__PURE__ */ I.jsxs("div", { children: [
    "ScreenB",
    " ",
    /* @__PURE__ */ I.jsx("button", { onClick: () => r("C"), children: "Go to screen C" })
  ] });
}, In = () => {
  const { currentScreen: e, setScreen: r } = Qe();
  return e !== "C" ? null : /* @__PURE__ */ I.jsxs("div", { children: [
    "ScreenC",
    " ",
    /* @__PURE__ */ I.jsx("button", { onClick: () => r("A"), children: "Go to screen A" })
  ] });
}, zn = () => (Rt(() => {
  console.log("sssss"), window.addEventListener("beforeunload", function(e) {
    e.preventDefault(), alert("Hello");
  });
}, []), /* @__PURE__ */ I.jsxs("section", { children: [
  /* @__PURE__ */ I.jsx(An, {}),
  /* @__PURE__ */ I.jsx(Fn, {}),
  /* @__PURE__ */ I.jsx(Mn, {}),
  /* @__PURE__ */ I.jsx(In, {})
] }));
export {
  zn as Game
};
