import At from "react";
var ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function Dr() {
  if (bt)
    return ae;
  bt = 1;
  var e = At, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, d) {
    var u, h = {}, y = null, v = null;
    d !== void 0 && (y = "" + d), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (u in l)
      o.call(l, u) && !a.hasOwnProperty(u) && (h[u] = l[u]);
    if (c && c.defaultProps)
      for (u in l = c.defaultProps, l)
        h[u] === void 0 && (h[u] = l[u]);
    return { $$typeof: t, type: c, key: y, ref: v, props: h, _owner: i.current };
  }
  return ae.Fragment = r, ae.jsx = s, ae.jsxs = s, ae;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function Cr() {
  return gt || (gt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = At, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, T = "@@iterator";
    function E(n) {
      if (n === null || typeof n != "object")
        return null;
      var f = w && n[w] || n[T];
      return typeof f == "function" ? f : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(n) {
      {
        for (var f = arguments.length, p = new Array(f > 1 ? f - 1 : 0), m = 1; m < f; m++)
          p[m - 1] = arguments[m];
        O("error", n, p);
      }
    }
    function O(n, f, p) {
      {
        var m = D.ReactDebugCurrentFrame, N = m.getStackAddendum();
        N !== "" && (f += "%s", p = p.concat([N]));
        var C = p.map(function(_) {
          return String(_);
        });
        C.unshift("Warning: " + f), Function.prototype.apply.call(console[n], console, C);
      }
    }
    var S = !1, x = !1, z = !1, I = !1, j = !1, B;
    B = Symbol.for("react.module.reference");
    function ne(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === a || j || n === i || n === d || n === u || I || n === v || S || x || z || typeof n == "object" && n !== null && (n.$$typeof === y || n.$$typeof === h || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === B || n.getModuleId !== void 0));
    }
    function Ce(n, f, p) {
      var m = n.displayName;
      if (m)
        return m;
      var N = f.displayName || f.name || "";
      return N !== "" ? p + "(" + N + ")" : p;
    }
    function He(n) {
      return n.displayName || "Context";
    }
    function U(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var f = n;
            return He(f) + ".Consumer";
          case s:
            var p = n;
            return He(p._context) + ".Provider";
          case l:
            return Ce(n, n.render, "ForwardRef");
          case h:
            var m = n.displayName || null;
            return m !== null ? m : U(n.type) || "Memo";
          case y: {
            var N = n, C = N._payload, _ = N._init;
            try {
              return U(_(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, oe = 0, Qe, Ze, et, tt, rt, nt, ot;
    function it() {
    }
    it.__reactDisabledLog = !0;
    function rr() {
      {
        if (oe === 0) {
          Qe = console.log, Ze = console.info, et = console.warn, tt = console.error, rt = console.group, nt = console.groupCollapsed, ot = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: it,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        oe++;
      }
    }
    function nr() {
      {
        if (oe--, oe === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, n, {
              value: Qe
            }),
            info: J({}, n, {
              value: Ze
            }),
            warn: J({}, n, {
              value: et
            }),
            error: J({}, n, {
              value: tt
            }),
            group: J({}, n, {
              value: rt
            }),
            groupCollapsed: J({}, n, {
              value: nt
            }),
            groupEnd: J({}, n, {
              value: ot
            })
          });
        }
        oe < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Te = D.ReactCurrentDispatcher, ke;
    function pe(n, f, p) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (N) {
            var m = N.stack.trim().match(/\n( *(at )?)/);
            ke = m && m[1] || "";
          }
        return `
` + ke + n;
      }
    }
    var Pe = !1, he;
    {
      var or = typeof WeakMap == "function" ? WeakMap : Map;
      he = new or();
    }
    function at(n, f) {
      if (!n || Pe)
        return "";
      {
        var p = he.get(n);
        if (p !== void 0)
          return p;
      }
      var m;
      Pe = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = Te.current, Te.current = null, rr();
      try {
        if (f) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (L) {
              m = L;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (L) {
              m = L;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            m = L;
          }
          n();
        }
      } catch (L) {
        if (L && m && typeof L.stack == "string") {
          for (var b = L.stack.split(`
`), M = m.stack.split(`
`), k = b.length - 1, P = M.length - 1; k >= 1 && P >= 0 && b[k] !== M[P]; )
            P--;
          for (; k >= 1 && P >= 0; k--, P--)
            if (b[k] !== M[P]) {
              if (k !== 1 || P !== 1)
                do
                  if (k--, P--, P < 0 || b[k] !== M[P]) {
                    var W = `
` + b[k].replace(" at new ", " at ");
                    return n.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", n.displayName)), typeof n == "function" && he.set(n, W), W;
                  }
                while (k >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        Pe = !1, Te.current = C, nr(), Error.prepareStackTrace = N;
      }
      var ee = n ? n.displayName || n.name : "", wt = ee ? pe(ee) : "";
      return typeof n == "function" && he.set(n, wt), wt;
    }
    function ir(n, f, p) {
      return at(n, !1);
    }
    function ar(n) {
      var f = n.prototype;
      return !!(f && f.isReactComponent);
    }
    function ye(n, f, p) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return at(n, ar(n));
      if (typeof n == "string")
        return pe(n);
      switch (n) {
        case d:
          return pe("Suspense");
        case u:
          return pe("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return ir(n.render);
          case h:
            return ye(n.type, f, p);
          case y: {
            var m = n, N = m._payload, C = m._init;
            try {
              return ye(C(N), f, p);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, st = {}, ct = D.ReactDebugCurrentFrame;
    function ve(n) {
      if (n) {
        var f = n._owner, p = ye(n.type, n._source, f ? f.type : null);
        ct.setExtraStackFrame(p);
      } else
        ct.setExtraStackFrame(null);
    }
    function sr(n, f, p, m, N) {
      {
        var C = Function.call.bind(me);
        for (var _ in n)
          if (C(n, _)) {
            var b = void 0;
            try {
              if (typeof n[_] != "function") {
                var M = Error((m || "React class") + ": " + p + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              b = n[_](f, _, m, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              b = k;
            }
            b && !(b instanceof Error) && (ve(N), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", p, _, typeof b), ve(null)), b instanceof Error && !(b.message in st) && (st[b.message] = !0, ve(N), g("Failed %s type: %s", p, b.message), ve(null));
          }
      }
    }
    var cr = Array.isArray;
    function xe(n) {
      return cr(n);
    }
    function ur(n) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, p = f && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return p;
      }
    }
    function fr(n) {
      try {
        return ut(n), !1;
      } catch {
        return !0;
      }
    }
    function ut(n) {
      return "" + n;
    }
    function ft(n) {
      if (fr(n))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(n)), ut(n);
    }
    var ie = D.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, dt, je;
    je = {};
    function dr(n) {
      if (me.call(n, "ref")) {
        var f = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function pr(n) {
      if (me.call(n, "key")) {
        var f = Object.getOwnPropertyDescriptor(n, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function hr(n, f) {
      if (typeof n.ref == "string" && ie.current && f && ie.current.stateNode !== f) {
        var p = U(ie.current.type);
        je[p] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(ie.current.type), n.ref), je[p] = !0);
      }
    }
    function yr(n, f) {
      {
        var p = function() {
          lt || (lt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        p.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function mr(n, f) {
      {
        var p = function() {
          dt || (dt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        p.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var vr = function(n, f, p, m, N, C, _) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: f,
        ref: p,
        props: _,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Er(n, f, p, m, N) {
      {
        var C, _ = {}, b = null, M = null;
        p !== void 0 && (ft(p), b = "" + p), pr(f) && (ft(f.key), b = "" + f.key), dr(f) && (M = f.ref, hr(f, N));
        for (C in f)
          me.call(f, C) && !lr.hasOwnProperty(C) && (_[C] = f[C]);
        if (n && n.defaultProps) {
          var k = n.defaultProps;
          for (C in k)
            _[C] === void 0 && (_[C] = k[C]);
        }
        if (b || M) {
          var P = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          b && yr(_, P), M && mr(_, P);
        }
        return vr(n, b, M, N, m, ie.current, _);
      }
    }
    var Ae = D.ReactCurrentOwner, pt = D.ReactDebugCurrentFrame;
    function Z(n) {
      if (n) {
        var f = n._owner, p = ye(n.type, n._source, f ? f.type : null);
        pt.setExtraStackFrame(p);
      } else
        pt.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Me(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function ht() {
      {
        if (Ae.current) {
          var n = U(Ae.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function wr(n) {
      {
        if (n !== void 0) {
          var f = n.fileName.replace(/^.*[\\\/]/, ""), p = n.lineNumber;
          return `

Check your code at ` + f + ":" + p + ".";
        }
        return "";
      }
    }
    var yt = {};
    function br(n) {
      {
        var f = ht();
        if (!f) {
          var p = typeof n == "string" ? n : n.displayName || n.name;
          p && (f = `

Check the top-level render call using <` + p + ">.");
        }
        return f;
      }
    }
    function mt(n, f) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var p = br(f);
        if (yt[p])
          return;
        yt[p] = !0;
        var m = "";
        n && n._owner && n._owner !== Ae.current && (m = " It was passed a child from " + U(n._owner.type) + "."), Z(n), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, m), Z(null);
      }
    }
    function vt(n, f) {
      {
        if (typeof n != "object")
          return;
        if (xe(n))
          for (var p = 0; p < n.length; p++) {
            var m = n[p];
            Me(m) && mt(m, f);
          }
        else if (Me(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var N = E(n);
          if (typeof N == "function" && N !== n.entries)
            for (var C = N.call(n), _; !(_ = C.next()).done; )
              Me(_.value) && mt(_.value, f);
        }
      }
    }
    function gr(n) {
      {
        var f = n.type;
        if (f == null || typeof f == "string")
          return;
        var p;
        if (typeof f == "function")
          p = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === h))
          p = f.propTypes;
        else
          return;
        if (p) {
          var m = U(f);
          sr(p, n.props, "prop", m, n);
        } else if (f.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var N = U(f);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(n) {
      {
        for (var f = Object.keys(n.props), p = 0; p < f.length; p++) {
          var m = f[p];
          if (m !== "children" && m !== "key") {
            Z(n), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), Z(null);
            break;
          }
        }
        n.ref !== null && (Z(n), g("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    function Et(n, f, p, m, N, C) {
      {
        var _ = ne(n);
        if (!_) {
          var b = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = wr(N);
          M ? b += M : b += ht();
          var k;
          n === null ? k = "null" : xe(n) ? k = "array" : n !== void 0 && n.$$typeof === t ? (k = "<" + (U(n.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : k = typeof n, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, b);
        }
        var P = Er(n, f, p, N, C);
        if (P == null)
          return P;
        if (_) {
          var W = f.children;
          if (W !== void 0)
            if (m)
              if (xe(W)) {
                for (var ee = 0; ee < W.length; ee++)
                  vt(W[ee], n);
                Object.freeze && Object.freeze(W);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vt(W, n);
        }
        return n === o ? _r(P) : gr(P), P;
      }
    }
    function Or(n, f, p) {
      return Et(n, f, p, !0);
    }
    function Nr(n, f, p) {
      return Et(n, f, p, !1);
    }
    var Sr = Nr, Rr = Or;
    se.Fragment = o, se.jsx = Sr, se.jsxs = Rr;
  }()), se;
}
process.env.NODE_ENV === "production" ? Dr() : Cr();
function A(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Tr = typeof Symbol == "function" && Symbol.observable || "@@observable", _t = Tr, $e = () => Math.random().toString(36).substring(7).split("").join("."), kr = {
  INIT: `@@redux/INIT${/* @__PURE__ */ $e()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ $e()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${$e()}`
}, H = kr;
function de(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Pr(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Ar(e))
    return "date";
  if (jr(e))
    return "error";
  const r = xr(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function xr(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function jr(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Ar(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function K(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Pr(e)), t;
}
function It(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? A(2) : `Expected the root reducer to be a function. Instead, received: '${K(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? A(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? A(1) : `Expected the enhancer to be a function. Instead, received: '${K(r)}'`);
    return r(It)(e, t);
  }
  let o = e, i = t, a = /* @__PURE__ */ new Map(), s = a, c = 0, l = !1;
  function d() {
    s === a && (s = /* @__PURE__ */ new Map(), a.forEach((E, D) => {
      s.set(D, E);
    }));
  }
  function u() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? A(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function h(E) {
    if (typeof E != "function")
      throw new Error(process.env.NODE_ENV === "production" ? A(4) : `Expected the listener to be a function. Instead, received: '${K(E)}'`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? A(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let D = !0;
    d();
    const g = c++;
    return s.set(g, E), function() {
      if (D) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? A(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        D = !1, d(), s.delete(g), a = null;
      }
    };
  }
  function y(E) {
    if (!de(E))
      throw new Error(process.env.NODE_ENV === "production" ? A(7) : `Actions must be plain objects. Instead, the actual type was: '${K(E)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof E.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? A(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof E.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? A(17) : `Action "type" property must be a string. Instead, the actual type was: '${K(E.type)}'. Value was: '${E.type}' (stringified)`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? A(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = o(i, E);
    } finally {
      l = !1;
    }
    return (a = s).forEach((g) => {
      g();
    }), E;
  }
  function v(E) {
    if (typeof E != "function")
      throw new Error(process.env.NODE_ENV === "production" ? A(10) : `Expected the nextReducer to be a function. Instead, received: '${K(E)}`);
    o = E, y({
      type: H.REPLACE
    });
  }
  function w() {
    const E = h;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(D) {
        if (typeof D != "object" || D === null)
          throw new Error(process.env.NODE_ENV === "production" ? A(11) : `Expected the observer to be an object. Instead, received: '${K(D)}'`);
        function g() {
          const S = D;
          S.next && S.next(u());
        }
        return g(), {
          unsubscribe: E(g)
        };
      },
      [_t]() {
        return this;
      }
    };
  }
  return y({
    type: H.INIT
  }), {
    dispatch: y,
    subscribe: h,
    getState: u,
    replaceReducer: v,
    [_t]: w
  };
}
function Ot(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ir(e, t, r, o) {
  const i = Object.keys(t), a = r && r.type === H.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!de(e))
    return `The ${a} has unexpected type of "${K(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const s = Object.keys(e).filter((c) => !t.hasOwnProperty(c) && !o[c]);
  if (s.forEach((c) => {
    o[c] = !0;
  }), !(r && r.type === H.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function Mr(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: H.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? A(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: H.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? A(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${H.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function $r(e) {
  const t = Object.keys(e), r = {};
  for (let s = 0; s < t.length; s++) {
    const c = t[s];
    process.env.NODE_ENV !== "production" && typeof e[c] > "u" && Ot(`No reducer provided for key "${c}"`), typeof e[c] == "function" && (r[c] = e[c]);
  }
  const o = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let a;
  try {
    Mr(r);
  } catch (s) {
    a = s;
  }
  return function(c = {}, l) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const h = Ir(c, r, l, i);
      h && Ot(h);
    }
    let d = !1;
    const u = {};
    for (let h = 0; h < o.length; h++) {
      const y = o[h], v = r[y], w = c[y], T = v(w, l);
      if (typeof T > "u") {
        const E = l && l.type;
        throw new Error(process.env.NODE_ENV === "production" ? A(14) : `When called with an action of type ${E ? `"${String(E)}"` : "(unknown type)"}, the slice reducer for key "${y}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[y] = T, d = d || T !== w;
    }
    return d = d || o.length !== Object.keys(c).length, d ? u : c;
  };
}
function ge(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...o) => t(r(...o)));
}
function Vr(...e) {
  return (t) => (r, o) => {
    const i = t(r, o);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? A(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const s = {
      getState: i.getState,
      dispatch: (l, ...d) => a(l, ...d)
    }, c = e.map((l) => l(s));
    return a = ge(...c)(i.dispatch), {
      ...i,
      dispatch: a
    };
  };
}
function Mt(e) {
  return de(e) && "type" in e && typeof e.type == "string";
}
var $t = Symbol.for("immer-nothing"), Nt = Symbol.for("immer-draftable"), V = Symbol.for("immer-state"), Fr = process.env.NODE_ENV !== "production" ? [
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
function $(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Fr[e], o = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var te = Object.getPrototypeOf;
function G(e) {
  return !!e && !!e[V];
}
function Y(e) {
  var t;
  return e ? Vt(e) || Array.isArray(e) || !!e[Nt] || !!((t = e.constructor) != null && t[Nt]) || Se(e) || Re(e) : !1;
}
var zr = Object.prototype.constructor.toString();
function Vt(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = te(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === zr;
}
function ue(e, t) {
  Ne(e) === 0 ? Object.entries(e).forEach(([r, o]) => {
    t(r, o, e);
  }) : e.forEach((r, o) => t(o, r, e));
}
function Ne(e) {
  const t = e[V];
  return t ? t.type_ : Array.isArray(e) ? 1 : Se(e) ? 2 : Re(e) ? 3 : 0;
}
function ze(e, t) {
  return Ne(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ft(e, t, r) {
  const o = Ne(e);
  o === 2 ? e.set(t, r) : o === 3 ? e.add(r) : e[t] = r;
}
function Wr(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Se(e) {
  return e instanceof Map;
}
function Re(e) {
  return e instanceof Set;
}
function X(e) {
  return e.copy_ || e.base_;
}
function We(e, t) {
  if (Se(e))
    return new Map(e);
  if (Re(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Vt(e))
    return te(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[V];
  let o = Reflect.ownKeys(r);
  for (let i = 0; i < o.length; i++) {
    const a = o[i], s = r[a];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[a] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: e[a]
    });
  }
  return Object.create(te(e), r);
}
function Ke(e, t = !1) {
  return De(e) || G(e) || !Y(e) || (Ne(e) > 1 && (e.set = e.add = e.clear = e.delete = Ur), Object.freeze(e), t && ue(e, (r, o) => Ke(o, !0))), e;
}
function Ur() {
  $(2);
}
function De(e) {
  return Object.isFrozen(e);
}
var Lr = {};
function Q(e) {
  const t = Lr[e];
  return t || $(0, e), t;
}
var fe;
function zt() {
  return fe;
}
function Yr(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function St(e, t) {
  t && (Q("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ue(e) {
  Le(e), e.drafts_.forEach(Br), e.drafts_ = null;
}
function Le(e) {
  e === fe && (fe = e.parent_);
}
function Rt(e) {
  return fe = Yr(fe, e);
}
function Br(e) {
  const t = e[V];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Dt(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[V].modified_ && (Ue(t), $(4)), Y(e) && (e = _e(t, e), t.parent_ || Oe(t, e)), t.patches_ && Q("Patches").generateReplacementPatches_(
    r[V].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = _e(t, r, []), Ue(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== $t ? e : void 0;
}
function _e(e, t, r) {
  if (De(t))
    return t;
  const o = t[V];
  if (!o)
    return ue(
      t,
      (i, a) => Ct(e, o, t, i, a, r)
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return Oe(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const i = o.copy_;
    let a = i, s = !1;
    o.type_ === 3 && (a = new Set(i), i.clear(), s = !0), ue(
      a,
      (c, l) => Ct(e, o, i, c, l, r, s)
    ), Oe(e, i, !1), r && e.patches_ && Q("Patches").generatePatches_(
      o,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function Ct(e, t, r, o, i, a, s) {
  if (process.env.NODE_ENV !== "production" && i === r && $(5), G(i)) {
    const c = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ze(t.assigned_, o) ? a.concat(o) : void 0, l = _e(e, i, c);
    if (Ft(r, o, l), G(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && r.add(i);
  if (Y(i) && !De(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    _e(e, i), (!t || !t.scope_.parent_) && Oe(e, i);
  }
}
function Oe(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ke(t, r);
}
function qr(e, t) {
  const r = Array.isArray(e), o = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : zt(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
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
  let i = o, a = Ge;
  r && (i = [o], a = le);
  const { revoke: s, proxy: c } = Proxy.revocable(i, a);
  return o.draft_ = c, o.revoke_ = s, c;
}
var Ge = {
  get(e, t) {
    if (t === V)
      return e;
    const r = X(e);
    if (!ze(r, t))
      return Kr(e, r, t);
    const o = r[t];
    return e.finalized_ || !Y(o) ? o : o === Ve(e.base_, t) ? (Fe(e), e.copy_[t] = Be(o, e)) : o;
  },
  has(e, t) {
    return t in X(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(X(e));
  },
  set(e, t, r) {
    const o = Wt(X(e), t);
    if (o != null && o.set)
      return o.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Ve(X(e), t), a = i == null ? void 0 : i[V];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Wr(r, i) && (r !== void 0 || ze(e.base_, t)))
        return !0;
      Fe(e), Ye(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ve(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Fe(e), Ye(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = X(e), o = Reflect.getOwnPropertyDescriptor(r, t);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: o.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    $(11);
  },
  getPrototypeOf(e) {
    return te(e.base_);
  },
  setPrototypeOf() {
    $(12);
  }
}, le = {};
ue(Ge, (e, t) => {
  le[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
le.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && $(13), le.set.call(this, e, t, void 0);
};
le.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && $(14), Ge.set.call(this, e[0], t, r, e[0]);
};
function Ve(e, t) {
  const r = e[V];
  return (r ? X(r) : e)[t];
}
function Kr(e, t, r) {
  var i;
  const o = Wt(t, r);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = o.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function Wt(e, t) {
  if (!(t in e))
    return;
  let r = te(e);
  for (; r; ) {
    const o = Object.getOwnPropertyDescriptor(r, t);
    if (o)
      return o;
    r = te(r);
  }
}
function Ye(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ye(e.parent_));
}
function Fe(e) {
  e.copy_ || (e.copy_ = We(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Gr = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, o) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const s = this;
        return function(l = a, ...d) {
          return s.produce(l, (u) => r.call(this, u, ...d));
        };
      }
      typeof r != "function" && $(6), o !== void 0 && typeof o != "function" && $(7);
      let i;
      if (Y(t)) {
        const a = Rt(this), s = Be(t, void 0);
        let c = !0;
        try {
          i = r(s), c = !1;
        } finally {
          c ? Ue(a) : Le(a);
        }
        return St(a, o), Dt(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === $t && (i = void 0), this.autoFreeze_ && Ke(i, !0), o) {
          const a = [], s = [];
          Q("Patches").generateReplacementPatches_(t, i, a, s), o(a, s);
        }
        return i;
      } else
        $(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (s, ...c) => this.produceWithPatches(s, (l) => t(l, ...c));
      let o, i;
      return [this.produce(t, r, (s, c) => {
        o = s, i = c;
      }), o, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Y(e) || $(8), G(e) && (e = Ut(e));
    const t = Rt(this), r = Be(e, void 0);
    return r[V].isManual_ = !0, Le(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[V];
    (!r || !r.isManual_) && $(9);
    const { scope_: o } = r;
    return St(o, t), Dt(void 0, o);
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
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const o = Q("Patches").applyPatches_;
    return G(e) ? o(e, t) : this.produce(
      e,
      (i) => o(i, t)
    );
  }
};
function Be(e, t) {
  const r = Se(e) ? Q("MapSet").proxyMap_(e, t) : Re(e) ? Q("MapSet").proxySet_(e, t) : qr(e, t);
  return (t ? t.scope_ : zt()).drafts_.push(r), r;
}
function Ut(e) {
  return G(e) || $(10, e), Lt(e);
}
function Lt(e) {
  if (!Y(e) || De(e))
    return e;
  const t = e[V];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = We(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = We(e, !0);
  return ue(r, (o, i) => {
    Ft(r, o, Lt(i));
  }), t && (t.finalized_ = !1), r;
}
var F = new Gr(), Yt = F.produce;
F.produceWithPatches.bind(
  F
);
F.setAutoFreeze.bind(F);
F.setUseStrictShallowCopy.bind(F);
F.applyPatches.bind(F);
F.createDraft.bind(F);
F.finishDraft.bind(F);
var Jr = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
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
      } catch (a) {
        ({ stack: i } = a);
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
}, Xr = (e, t, r) => {
  const { memoize: o, memoizeOptions: i } = t, { inputSelectorResults: a, inputSelectorResultsCopy: s } = e, c = o(() => ({}), ...i);
  if (!(c.apply(null, a) === c.apply(null, s))) {
    let d;
    try {
      throw new Error();
    } catch (u) {
      ({ stack: d } = u);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: a,
        secondInputs: s,
        stack: d
      }
    );
  }
}, Hr = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Qr(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Zr(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function en(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Tt = (e) => Array.isArray(e) ? e : [e];
function tn(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return en(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function kt(e, t) {
  const r = [], { length: o } = e;
  for (let i = 0; i < o; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var rn = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: o } = {
    ...Hr,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: Jr
    },
    inputStabilityCheck: {
      shouldRun: o === "always" || o === "once" && e,
      run: Xr
    }
  };
}, nn = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, on = typeof WeakRef < "u" ? WeakRef : nn, an = 0, Pt = 1;
function Ee() {
  return {
    s: an,
    v: void 0,
    o: null,
    p: null
  };
}
function Je(e, t = {}) {
  let r = Ee();
  const { resultEqualityCheck: o } = t;
  let i, a = 0;
  function s() {
    var h;
    let c = r;
    const { length: l } = arguments;
    for (let y = 0, v = l; y < v; y++) {
      const w = arguments[y];
      if (typeof w == "function" || typeof w == "object" && w !== null) {
        let T = c.o;
        T === null && (c.o = T = /* @__PURE__ */ new WeakMap());
        const E = T.get(w);
        E === void 0 ? (c = Ee(), T.set(w, c)) : c = E;
      } else {
        let T = c.p;
        T === null && (c.p = T = /* @__PURE__ */ new Map());
        const E = T.get(w);
        E === void 0 ? (c = Ee(), T.set(w, c)) : c = E;
      }
    }
    const d = c;
    let u;
    if (c.s === Pt ? u = c.v : (u = e.apply(null, arguments), a++), d.s = Pt, o) {
      const y = ((h = i == null ? void 0 : i.deref) == null ? void 0 : h.call(i)) ?? i;
      y != null && o(y, u) && (u = y, a !== 0 && a--), i = typeof u == "object" && u !== null || typeof u == "function" ? new on(u) : u;
    }
    return d.v = u, u;
  }
  return s.clearCache = () => {
    r = Ee(), s.resetResultsCount();
  }, s.resultsCount = () => a, s.resetResultsCount = () => {
    a = 0;
  }, s;
}
function Bt(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, o = (...i) => {
    let a = 0, s = 0, c, l = {}, d = i.pop();
    typeof d == "object" && (l = d, d = i.pop()), Qr(
      d,
      `createSelector expects an output function after the inputs, but received: [${typeof d}]`
    );
    const u = {
      ...r,
      ...l
    }, {
      memoize: h,
      memoizeOptions: y = [],
      argsMemoize: v = Je,
      argsMemoizeOptions: w = [],
      devModeChecks: T = {}
    } = u, E = Tt(y), D = Tt(w), g = tn(i), O = h(function() {
      return a++, d.apply(
        null,
        arguments
      );
    }, ...E);
    let S = !0;
    const x = v(function() {
      s++;
      const I = kt(
        g,
        arguments
      );
      if (c = O.apply(null, I), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: j, inputStabilityCheck: B } = rn(S, T);
        if (j.shouldRun && j.run(
          d,
          I,
          c
        ), B.shouldRun) {
          const ne = kt(
            g,
            arguments
          );
          B.run(
            { inputSelectorResults: I, inputSelectorResultsCopy: ne },
            { memoize: h, memoizeOptions: E },
            arguments
          );
        }
        S && (S = !1);
      }
      return c;
    }, ...D);
    return Object.assign(x, {
      resultFunc: d,
      memoizedResultFunc: O,
      dependencies: g,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => c,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: h,
      argsMemoize: v
    });
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var sn = /* @__PURE__ */ Bt(Je), cn = Object.assign(
  (e, t = sn) => {
    Zr(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), o = r.map(
      (a) => e[a]
    );
    return t(
      o,
      (...a) => a.reduce((s, c, l) => (s[r[l]] = c, s), {})
    );
  },
  { withTypes: () => cn }
);
function qt(e) {
  return ({ dispatch: r, getState: o }) => (i) => (a) => typeof a == "function" ? a(r, o, e) : i(a);
}
var un = qt(), fn = qt, ln = (...e) => {
  const t = Bt(...e), r = Object.assign((...o) => {
    const i = t(...o), a = (s, ...c) => i(G(s) ? Ut(s) : s, ...c);
    return Object.assign(a, i), a;
  }, {
    withTypes: () => r
  });
  return r;
};
ln(Je);
var dn = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ge : ge.apply(null, arguments);
}, pn = (e) => e && typeof e.match == "function";
function re(e, t) {
  function r(...o) {
    if (t) {
      let i = t(...o);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? R(0) : "prepareAction did not return an object");
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
  return r.toString = () => `${e}`, r.type = e, r.match = (o) => Mt(o) && o.type === e, r;
}
function hn(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  pn(e);
}
function yn(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function mn(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (o) => r(o);
  const {
    isActionCreator: t = hn
  } = e;
  return () => (r) => (o) => (t(o) && console.warn(yn(o.type)), r(o));
}
function Kt(e, t) {
  let r = 0;
  return {
    measureTime(o) {
      const i = Date.now();
      try {
        return o();
      } finally {
        const a = Date.now();
        r += a - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Gt = class ce extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ce.prototype);
  }
  static get [Symbol.species]() {
    return ce;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new ce(...t[0].concat(this)) : new ce(...t.concat(this));
  }
};
function xt(e) {
  return Y(e) ? Yt(e, () => {
  }) : e;
}
function jt(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && (i = r.update(i, t, e), e.set(t, i)), i;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? R(10) : "No insert provided for key not already in map");
  const o = r.insert(t, e);
  return e.set(t, o), o;
}
function vn(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function En(e, t, r) {
  const o = Jt(e, t, r);
  return {
    detectMutations() {
      return Xt(e, t, o, r);
    }
  };
}
function Jt(e, t = [], r, o = "", i = /* @__PURE__ */ new Set()) {
  const a = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), a.children = {};
    for (const s in r) {
      const c = o ? o + "." + s : s;
      t.length && t.indexOf(c) !== -1 || (a.children[s] = Jt(e, t, r[s], c));
    }
  }
  return a;
}
function Xt(e, t = [], r, o, i = !1, a = "") {
  const s = r ? r.value : void 0, c = s === o;
  if (i && !c && !Number.isNaN(o))
    return {
      wasMutated: !0,
      path: a
    };
  if (e(s) || e(o))
    return {
      wasMutated: !1
    };
  const l = {};
  for (let u in r.children)
    l[u] = !0;
  for (let u in o)
    l[u] = !0;
  const d = t.length > 0;
  for (let u in l) {
    const h = a ? a + "." + u : u;
    if (d && t.some((w) => w instanceof RegExp ? w.test(h) : h === w))
      continue;
    const y = Xt(e, t, r.children[u], o[u], c, h);
    if (y.wasMutated)
      return y;
  }
  return {
    wasMutated: !1
  };
}
function wn(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(c, l, d, u) {
      return JSON.stringify(c, r(l, u), d);
    }, r = function(c, l) {
      let d = [], u = [];
      return l || (l = function(h, y) {
        return d[0] === y ? "[Circular ~]" : "[Circular ~." + u.slice(0, d.indexOf(y)).join(".") + "]";
      }), function(h, y) {
        if (d.length > 0) {
          var v = d.indexOf(this);
          ~v ? d.splice(v + 1) : d.push(this), ~v ? u.splice(v, 1 / 0, h) : u.push(h), ~d.indexOf(y) && (y = l.call(this, h, y));
        } else
          d.push(y);
        return c == null ? y : c.call(this, h, y);
      };
    }, {
      isImmutable: o = vn,
      ignoredPaths: i,
      warnAfter: a = 32
    } = e;
    const s = En.bind(null, o, i);
    return ({
      getState: c
    }) => {
      let l = c(), d = s(l), u;
      return (h) => (y) => {
        const v = Kt(a, "ImmutableStateInvariantMiddleware");
        v.measureTime(() => {
          if (l = c(), u = d.detectMutations(), d = s(l), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? R(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const w = h(y);
        return v.measureTime(() => {
          if (l = c(), u = d.detectMutations(), d = s(l), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? R(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(y)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), v.warnIfExceeded(), w;
      };
    };
  }
}
function Ht(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || de(e);
}
function qe(e, t = "", r = Ht, o, i = [], a) {
  let s;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || a != null && a.has(e))
    return !1;
  const c = o != null ? o(e) : Object.entries(e), l = i.length > 0;
  for (const [d, u] of c) {
    const h = t ? t + "." + d : d;
    if (!(l && i.some((v) => v instanceof RegExp ? v.test(h) : h === v))) {
      if (!r(u))
        return {
          keyPath: h,
          value: u
        };
      if (typeof u == "object" && (s = qe(u, h, r, o, i, a), s))
        return s;
    }
  }
  return a && Qt(e) && a.add(e), !1;
}
function Qt(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Qt(t))
      return !1;
  return !0;
}
function bn(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = Ht,
      getEntries: r,
      ignoredActions: o = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: a = [],
      warnAfter: s = 32,
      ignoreState: c = !1,
      ignoreActions: l = !1,
      disableCache: d = !1
    } = e, u = !d && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (h) => (y) => (v) => {
      if (!Mt(v))
        return y(v);
      const w = y(v), T = Kt(s, "SerializableStateInvariantMiddleware");
      return !l && !(o.length && o.indexOf(v.type) !== -1) && T.measureTime(() => {
        const E = qe(v, "", t, r, i, u);
        if (E) {
          const {
            keyPath: D,
            value: g
          } = E;
          console.error(`A non-serializable value was detected in an action, in the path: \`${D}\`. Value:`, g, `
Take a look at the logic that dispatched this action: `, v, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), c || (T.measureTime(() => {
        const E = h.getState(), D = qe(E, "", t, r, a, u);
        if (D) {
          const {
            keyPath: g,
            value: O
          } = D;
          console.error(`A non-serializable value was detected in the state, in the path: \`${g}\`. Value:`, O, `
Take a look at the reducer(s) handling this action type: ${v.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), T.warnIfExceeded()), w;
    };
  }
}
function we(e) {
  return typeof e == "boolean";
}
var gn = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: o = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let s = new Gt();
  if (r && (we(r) ? s.push(un) : s.push(fn(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (o) {
      let c = {};
      we(o) || (c = o), s.unshift(wn(c));
    }
    if (i) {
      let c = {};
      we(i) || (c = i), s.push(bn(c));
    }
    if (a) {
      let c = {};
      we(a) || (c = a), s.unshift(mn(c));
    }
  }
  return s;
}, _n = "RTK_autoBatch", Zt = (e) => (t) => {
  setTimeout(t, e);
}, On = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Zt(10), Nn = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const o = t(...r);
  let i = !0, a = !1, s = !1;
  const c = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? On : e.type === "callback" ? e.queueNotification : Zt(e.timeout), d = () => {
    s = !1, a && (a = !1, c.forEach((u) => u()));
  };
  return Object.assign({}, o, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const h = () => i && u(), y = o.subscribe(h);
      return c.add(u), () => {
        y(), c.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var h;
      try {
        return i = !((h = u == null ? void 0 : u.meta) != null && h[_n]), a = !i, a && (s || (s = !0, l(d))), o.dispatch(u);
      } finally {
        i = !0;
      }
    }
  });
}, Sn = (e) => function(r) {
  const {
    autoBatch: o = !0
  } = r ?? {};
  let i = new Gt(e);
  return o && i.push(Nn(typeof o == "object" ? o : void 0)), i;
}, q = process.env.NODE_ENV === "production";
function Rn(e) {
  const t = gn(), {
    reducer: r = void 0,
    middleware: o,
    devTools: i = !0,
    preloadedState: a = void 0,
    enhancers: s = void 0
  } = e || {};
  let c;
  if (typeof r == "function")
    c = r;
  else if (de(r))
    c = $r(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? R(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!q && o && typeof o != "function")
    throw new Error(process.env.NODE_ENV === "production" ? R(2) : "`middleware` field must be a callback");
  let l;
  if (typeof o == "function") {
    if (l = o(t), !q && !Array.isArray(l))
      throw new Error(process.env.NODE_ENV === "production" ? R(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    l = t();
  if (!q && l.some((w) => typeof w != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? R(4) : "each middleware provided to configureStore must be a function");
  let d = ge;
  i && (d = dn({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !q,
    ...typeof i == "object" && i
  }));
  const u = Vr(...l), h = Sn(u);
  if (!q && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? R(5) : "`enhancers` field must be a callback");
  let y = typeof s == "function" ? s(h) : h();
  if (!q && !Array.isArray(y))
    throw new Error(process.env.NODE_ENV === "production" ? R(6) : "`enhancers` callback must return an array");
  if (!q && y.some((w) => typeof w != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? R(7) : "each enhancer provided to configureStore must be a function");
  !q && l.length && !y.includes(u) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const v = d(...y);
  return It(c, a, v);
}
function er(e) {
  const t = {}, r = [];
  let o;
  const i = {
    addCase(a, s) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? R(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (o)
          throw new Error(process.env.NODE_ENV === "production" ? R(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const c = typeof a == "string" ? a : a.type;
      if (!c)
        throw new Error(process.env.NODE_ENV === "production" ? R(28) : "`builder.addCase` cannot be called with an empty action type");
      if (c in t)
        throw new Error(process.env.NODE_ENV === "production" ? R(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${c}'`);
      return t[c] = s, i;
    },
    addMatcher(a, s) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? R(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: a,
        reducer: s
      }), i;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? R(31) : "`builder.addDefaultCase` can only be called once");
      return o = a, i;
    }
  };
  return e(i), [t, r, o];
}
function Dn(e) {
  return typeof e == "function";
}
function Cn(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? R(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, o, i] = er(t), a;
  if (Dn(e))
    a = () => xt(e());
  else {
    const c = xt(e);
    a = () => c;
  }
  function s(c = a(), l) {
    let d = [r[l.type], ...o.filter(({
      matcher: u
    }) => u(l)).map(({
      reducer: u
    }) => u)];
    return d.filter((u) => !!u).length === 0 && (d = [i]), d.reduce((u, h) => {
      if (h)
        if (G(u)) {
          const v = h(u, l);
          return v === void 0 ? u : v;
        } else {
          if (Y(u))
            return Yt(u, (y) => h(y, l));
          {
            const y = h(u, l);
            if (y === void 0) {
              if (u === null)
                return u;
              throw new Error(process.env.NODE_ENV === "production" ? R(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return y;
          }
        }
      return u;
    }, c);
  }
  return s.getInitialState = a, s;
}
var Tn = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", kn = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += Tn[Math.random() * 64 | 0];
  return t;
}, Pn = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function xn(e, t) {
  return `${e}/${t}`;
}
function jn({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[Pn];
  return function(i) {
    const {
      name: a,
      reducerPath: s = a
    } = i;
    if (!a)
      throw new Error(process.env.NODE_ENV === "production" ? R(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const c = (typeof i.reducers == "function" ? i.reducers(Mn()) : i.reducers) || {}, l = Object.keys(c), d = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(O, S) {
        const x = typeof O == "string" ? O : O.type;
        if (!x)
          throw new Error(process.env.NODE_ENV === "production" ? R(12) : "`context.addCase` cannot be called with an empty action type");
        if (x in d.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? R(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + x);
        return d.sliceCaseReducersByType[x] = S, u;
      },
      addMatcher(O, S) {
        return d.sliceMatchers.push({
          matcher: O,
          reducer: S
        }), u;
      },
      exposeAction(O, S) {
        return d.actionCreators[O] = S, u;
      },
      exposeCaseReducer(O, S) {
        return d.sliceCaseReducersByName[O] = S, u;
      }
    };
    l.forEach((O) => {
      const S = c[O], x = {
        reducerName: O,
        type: xn(a, O),
        createNotation: typeof i.reducers == "function"
      };
      Vn(S) ? zn(x, S, u, t) : $n(x, S, u);
    });
    function h() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? R(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [O = {}, S = [], x = void 0] = typeof i.extraReducers == "function" ? er(i.extraReducers) : [i.extraReducers], z = {
        ...O,
        ...d.sliceCaseReducersByType
      };
      return Cn(i.initialState, (I) => {
        for (let j in z)
          I.addCase(j, z[j]);
        for (let j of d.sliceMatchers)
          I.addMatcher(j.matcher, j.reducer);
        for (let j of S)
          I.addMatcher(j.matcher, j.reducer);
        x && I.addDefaultCase(x);
      });
    }
    const y = (O) => O, v = /* @__PURE__ */ new Map();
    let w;
    function T(O, S) {
      return w || (w = h()), w(O, S);
    }
    function E() {
      return w || (w = h()), w.getInitialState();
    }
    function D(O, S = !1) {
      function x(I) {
        let j = I[O];
        if (typeof j > "u") {
          if (S)
            j = E();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? R(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return j;
      }
      function z(I = y) {
        const j = jt(v, S, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return jt(j, I, {
          insert: () => {
            const B = {};
            for (const [ne, Ce] of Object.entries(i.selectors ?? {}))
              B[ne] = An(Ce, I, E, S);
            return B;
          }
        });
      }
      return {
        reducerPath: O,
        getSelectors: z,
        get selectors() {
          return z(x);
        },
        selectSlice: x
      };
    }
    const g = {
      name: a,
      reducer: T,
      actions: d.actionCreators,
      caseReducers: d.sliceCaseReducersByName,
      getInitialState: E,
      ...D(s),
      injectInto(O, {
        reducerPath: S,
        ...x
      } = {}) {
        const z = S ?? s;
        return O.inject({
          reducerPath: z,
          reducer: T
        }, x), {
          ...g,
          ...D(z, !0)
        };
      }
    };
    return g;
  };
}
function An(e, t, r, o) {
  function i(a, ...s) {
    let c = t(a);
    if (typeof c > "u") {
      if (o)
        c = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? R(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(c, ...s);
  }
  return i.unwrapped = e, i;
}
var In = /* @__PURE__ */ jn();
function Mn() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function $n({
  type: e,
  reducerName: t,
  createNotation: r
}, o, i) {
  let a, s;
  if ("reducer" in o) {
    if (r && !Fn(o))
      throw new Error(process.env.NODE_ENV === "production" ? R(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = o.reducer, s = o.prepare;
  } else
    a = o;
  i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, s ? re(e, s) : re(e));
}
function Vn(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Fn(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function zn({
  type: e,
  reducerName: t
}, r, o, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? R(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: s,
    pending: c,
    rejected: l,
    settled: d,
    options: u
  } = r, h = i(e, a, u);
  o.exposeAction(t, h), s && o.addCase(h.fulfilled, s), c && o.addCase(h.pending, c), l && o.addCase(h.rejected, l), d && o.addMatcher(h.settled, d), o.exposeCaseReducer(t, {
    fulfilled: s || be,
    pending: c || be,
    rejected: l || be,
    settled: d || be
  });
}
function be() {
}
var Wn = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? R(32) : `${t} is not a function`);
}, Xe = "listenerMiddleware", Un = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: o,
    predicate: i,
    effect: a
  } = e;
  if (t)
    i = re(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (o)
    i = o;
  else if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? R(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Wn(a, "options.listener"), {
    predicate: i,
    type: t,
    effect: a
  };
}, Ln = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: o
  } = Un(e);
  return {
    id: kn(),
    effect: o,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? R(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Ln
}), Yn = Object.assign(re(`${Xe}/add`), {
  withTypes: () => Yn
});
re(`${Xe}/removeAll`);
var Bn = Object.assign(re(`${Xe}/remove`), {
  withTypes: () => Bn
});
function R(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const qn = {
  isGameStarted: !1,
  currentScreen: "A",
  isGameEnded: !1
}, tr = In({
  name: "game",
  initialState: qn,
  reducers: {
    startGame: (e, t) => {
      e.isGameStarted = t.payload;
    },
    setGameScreen: (e, t) => {
      e.currentScreen = t.payload;
    }
  }
});
tr.actions;
const Kn = tr.reducer;
Rn({
  reducer: {
    game: Kn
  }
});
