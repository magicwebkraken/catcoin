(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33525,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  98183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return i;
      },
      urlQueryToSearchParams: function () {
        return a;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function i(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (t[r] = [e, n]);
      }
      return t;
    }
    function s(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function a(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, s(e));
        else t.set(r, s(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return a;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(90809)._(e.r(98183)),
      s = /https?|ftp|gopher|file/;
    function a(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        a = e.hash || "",
        l = e.query || "",
        u = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : r &&
            ((u = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (u += ":" + e.port)),
        l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
      let c = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || s.test(n)) && !1 !== u)
          ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
          : u || (u = ""),
        a && "#" !== a[0] && (a = "#" + a),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${u}${o}${c}${a}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function u(e) {
      return a(e);
    }
  },
  18967,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return y;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return g;
      },
      PageNotFoundError: function () {
        return b;
      },
      SP: function () {
        return m;
      },
      ST: function () {
        return x;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return s;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return u;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return w;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function s(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => a.test(e);
    function u() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = u();
      return e.substring(t.length);
    }
    function f(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && d(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let m = "u" > typeof performance,
      x =
        m &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class y extends Error {}
    class g extends Error {}
    class b extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class v extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class j extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function w(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(18967),
      o = e.r(52817);
    function i(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  22016,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return b;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(90809),
      s = e.r(43476),
      a = i._(e.r(71645)),
      l = e.r(95057),
      u = e.r(8372),
      c = e.r(18581),
      f = e.r(18967),
      d = e.r(5550);
    e.r(33525);
    let p = e.r(91949),
      h = e.r(73668),
      m = e.r(9396);
    function x(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function y(t) {
      var r;
      let n,
        o,
        i,
        [l, y] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
        b = (0, a.useRef)(null),
        {
          href: v,
          as: j,
          children: w,
          prefetch: C = null,
          passHref: P,
          replace: E,
          shallow: N,
          scroll: S,
          onClick: O,
          onMouseEnter: M,
          onTouchStart: R,
          legacyBehavior: _ = !1,
          onNavigate: T,
          ref: L,
          unstable_dynamicOnHover: $,
          ...k
        } = t;
      (n = w),
        _ &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, s.jsx)("a", { children: n }));
      let A = a.default.useContext(u.AppRouterContext),
        I = !1 !== C,
        U =
          !1 !== C
            ? null === (r = C) || "auto" === r
              ? m.FetchStrategy.PPR
              : m.FetchStrategy.Full
            : m.FetchStrategy.PPR,
        { href: B, as: F } = a.default.useMemo(() => {
          let e = x(v);
          return { href: e, as: j ? x(j) : e };
        }, [v, j]);
      if (_) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        o = a.default.Children.only(n);
      }
      let D = _ ? o && "object" == typeof o && o.ref : L,
        z = a.default.useCallback(
          (e) => (
            null !== A &&
              (b.current = (0, p.mountLinkInstance)(e, B, A, U, I, y)),
            () => {
              b.current &&
                ((0, p.unmountLinkForCurrentNavigation)(b.current),
                (b.current = null)),
                (0, p.unmountPrefetchableInstance)(e);
            }
          ),
          [I, B, A, U, y]
        ),
        K = {
          ref: (0, c.useMergedRef)(z, D),
          onClick(t) {
            _ || "function" != typeof O || O(t),
              _ &&
                o.props &&
                "function" == typeof o.props.onClick &&
                o.props.onClick(t),
              !A ||
                t.defaultPrevented ||
                (function (t, r, n, o, i, s, l) {
                  if ("u" > typeof window) {
                    let u,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) &&
                          "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), l)) {
                      let e = !1;
                      if (
                        (l({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(99781);
                    a.default.startTransition(() => {
                      f(n || r, i ? "replace" : "push", s ?? !0, o.current);
                    });
                  }
                })(t, B, F, b, E, S, T);
          },
          onMouseEnter(e) {
            _ || "function" != typeof M || M(e),
              _ &&
                o.props &&
                "function" == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              A && I && (0, p.onNavigationIntent)(e.currentTarget, !0 === $);
          },
          onTouchStart: function (e) {
            _ || "function" != typeof R || R(e),
              _ &&
                o.props &&
                "function" == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              A && I && (0, p.onNavigationIntent)(e.currentTarget, !0 === $);
          },
        };
      return (
        (0, f.isAbsoluteUrl)(F)
          ? (K.href = F)
          : (_ && !P && ("a" !== o.type || "href" in o.props)) ||
            (K.href = (0, d.addBasePath)(F)),
        (i = _
          ? a.default.cloneElement(o, K)
          : (0, s.jsx)("a", { ...k, ...K, children: n })),
        (0, s.jsx)(g.Provider, { value: l, children: i })
      );
    }
    e.r(84508);
    let g = (0, a.createContext)(p.IDLE_LINK_STATUS),
      b = () => (0, a.useContext)(g);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  88653,
  (e) => {
    "use strict";
    e.i(47167);
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(31178),
      o = e.i(47414),
      i = e.i(74008),
      s = e.i(21476),
      a = e.i(72846),
      l = r,
      u = e.i(37806);
    function c(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    class f extends l.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
          let e = t.offsetParent,
            r = ((0, a.isHTMLElement)(e) && e.offsetWidth) || 0,
            n = this.props.sizeRef.current;
          (n.height = t.offsetHeight || 0),
            (n.width = t.offsetWidth || 0),
            (n.top = t.offsetTop),
            (n.left = t.offsetLeft),
            (n.right = r - n.width - n.left);
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function d({ children: e, isPresent: n, anchorX: o, root: i }) {
      let s = (0, l.useId)(),
        a = (0, l.useRef)(null),
        d = (0, l.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
        { nonce: p } = (0, l.useContext)(u.MotionConfigContext),
        h = (function (...e) {
          return r.useCallback(
            (function (...e) {
              return (t) => {
                let r = !1,
                  n = e.map((e) => {
                    let n = c(e, t);
                    return r || "function" != typeof n || (r = !0), n;
                  });
                if (r)
                  return () => {
                    for (let t = 0; t < n.length; t++) {
                      let r = n[t];
                      "function" == typeof r ? r() : c(e[t], null);
                    }
                  };
              };
            })(...e),
            e
          );
        })(a, e.props?.ref ?? e?.ref);
      return (
        (0, l.useInsertionEffect)(() => {
          let { width: e, height: t, top: r, left: l, right: u } = d.current;
          if (n || !a.current || !e || !t) return;
          let c = "left" === o ? `left: ${l}` : `right: ${u}`;
          a.current.dataset.motionPopId = s;
          let f = document.createElement("style");
          p && (f.nonce = p);
          let h = i ?? document.head;
          return (
            h.appendChild(f),
            f.sheet &&
              f.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${c}px !important;
            top: ${r}px !important;
          }
        `),
            () => {
              h.contains(f) && h.removeChild(f);
            }
          );
        }, [n]),
        (0, t.jsx)(f, {
          isPresent: n,
          childRef: a,
          sizeRef: d,
          children: l.cloneElement(e, { ref: h }),
        })
      );
    }
    let p = ({
      children: e,
      initial: n,
      isPresent: i,
      onExitComplete: a,
      custom: l,
      presenceAffectsLayout: u,
      mode: c,
      anchorX: f,
      root: p,
    }) => {
      let m = (0, o.useConstant)(h),
        x = (0, r.useId)(),
        y = !0,
        g = (0, r.useMemo)(
          () => (
            (y = !1),
            {
              id: x,
              initial: n,
              isPresent: i,
              custom: l,
              onExitComplete: (e) => {
                for (let t of (m.set(e, !0), m.values())) if (!t) return;
                a && a();
              },
              register: (e) => (m.set(e, !1), () => m.delete(e)),
            }
          ),
          [i, m, a]
        );
      return (
        u && y && (g = { ...g }),
        (0, r.useMemo)(() => {
          m.forEach((e, t) => m.set(t, !1));
        }, [i]),
        r.useEffect(() => {
          i || m.size || !a || a();
        }, [i]),
        "popLayout" === c &&
          (e = (0, t.jsx)(d, {
            isPresent: i,
            anchorX: f,
            root: p,
            children: e,
          })),
        (0, t.jsx)(s.PresenceContext.Provider, { value: g, children: e })
      );
    };
    function h() {
      return new Map();
    }
    var m = e.i(64978);
    let x = (e) => e.key || "";
    function y(e) {
      let t = [];
      return (
        r.Children.forEach(e, (e) => {
          (0, r.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    let g = ({
      children: e,
      custom: s,
      initial: a = !0,
      onExitComplete: l,
      presenceAffectsLayout: u = !0,
      mode: c = "sync",
      propagate: f = !1,
      anchorX: d = "left",
      root: h,
    }) => {
      let [g, b] = (0, m.usePresence)(f),
        v = (0, r.useMemo)(() => y(e), [e]),
        j = f && !g ? [] : v.map(x),
        w = (0, r.useRef)(!0),
        C = (0, r.useRef)(v),
        P = (0, o.useConstant)(() => new Map()),
        E = (0, r.useRef)(new Set()),
        [N, S] = (0, r.useState)(v),
        [O, M] = (0, r.useState)(v);
      (0, i.useIsomorphicLayoutEffect)(() => {
        (w.current = !1), (C.current = v);
        for (let e = 0; e < O.length; e++) {
          let t = x(O[e]);
          j.includes(t)
            ? (P.delete(t), E.current.delete(t))
            : !0 !== P.get(t) && P.set(t, !1);
        }
      }, [O, j.length, j.join("-")]);
      let R = [];
      if (v !== N) {
        let e = [...v];
        for (let t = 0; t < O.length; t++) {
          let r = O[t],
            n = x(r);
          j.includes(n) || (e.splice(t, 0, r), R.push(r));
        }
        return "wait" === c && R.length && (e = R), M(y(e)), S(v), null;
      }
      let { forceRender: _ } = (0, r.useContext)(n.LayoutGroupContext);
      return (0, t.jsx)(t.Fragment, {
        children: O.map((e) => {
          let r = x(e),
            n = (!f || !!g) && (v === O || j.includes(r));
          return (0, t.jsx)(
            p,
            {
              isPresent: n,
              initial: (!w.current || !!a) && void 0,
              custom: s,
              presenceAffectsLayout: u,
              mode: c,
              root: h,
              onExitComplete: n
                ? void 0
                : () => {
                    if (E.current.has(r) || (E.current.add(r), !P.has(r)))
                      return;
                    P.set(r, !0);
                    let e = !0;
                    P.forEach((t) => {
                      t || (e = !1);
                    }),
                      e && (_?.(), M(C.current), f && b?.(), l && l());
                  },
              anchorX: d,
              children: e,
            },
            r
          );
        }),
      });
    };
    e.s(["AnimatePresence", () => g], 88653);
  },
  54588,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(57688),
      n = e.i(22016),
      o = e.i(71645),
      i = e.i(46932),
      s = e.i(88653);
    function a() {
      let [e, a] = (0, o.useState)(!1);
      return (0, t.jsx)("nav", {
        className:
          "text-sm text-white w-full px-4 lg:px-10 py-4 fixed top-0 z-50",
        children: (0, t.jsxs)("div", {
          className: "flex justify-between max-w-[1536px] mx-auto items-center",
          children: [
            (0, t.jsx)(n.default, {
              href: "/",
              children: (0, t.jsx)("div", {
                className:
                  "w-[200px] h-[40px] md:w-[300px] md:h-[56px] xl:w-[328px] xl:h-[70px] relative",
                children: (0, t.jsx)(r.default, {
                  src: "/images/yxccyxcyxccx.webp",
                  alt: "CatCoin Logo",
                  fill: !0,
                  className: "object-contain object-left",
                  priority: !0,
                }),
              }),
            }),
            (0, t.jsx)("div", {
              className: "flex items-center md:hidden",
              children: (0, t.jsx)("button", {
                className:
                  "relative z-50 w-10 h-10 text-white flex items-center justify-center",
                "aria-label": "Toggle menu",
                onClick: () => a(!e),
                children: (0, t.jsxs)("div", {
                  className:
                    "w-6 flex flex-col items-end justify-center gap-1.5 transition-all",
                  children: [
                    (0, t.jsx)("span", {
                      className: `block h-0.5 bg-white transition-all duration-300 w-6 ${
                        e ? "rotate-45 translate-y-2" : ""
                      }`,
                    }),
                    (0, t.jsx)("span", {
                      className: `block h-0.5 bg-white transition-all duration-300 w-4 ${
                        e ? "opacity-0" : "opacity-100"
                      }`,
                    }),
                    (0, t.jsx)("span", {
                      className: `block h-0.5 bg-white transition-all duration-300 w-6 ${
                        e ? "-rotate-45 -translate-y-2" : ""
                      }`,
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)(s.AnimatePresence, {
              children:
                e &&
                (0, t.jsxs)(i.motion.div, {
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  className:
                    "fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 md:hidden",
                  children: [
                    (0, t.jsx)("a", {
                      href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xde7ea3e9db316b821934a2d223cf0c1f0ab9daa5",
                      children: (0, t.jsx)("button", {
                        onClick: () => a(!1),
                        className:
                          "text-2xl font-bold uppercase hover:text-primary transition-colors",
                        children: "Buy now",
                      }),
                    }),
                    (0, t.jsx)("a", {
                      href: "https://t.me/Catcoin_paw",
                      children: (0, t.jsx)("button", {
                        onClick: () => a(!1),
                        className:
                          "text-2xl font-bold uppercase hover:text-primary transition-colors",
                        children: "Community",
                      }),
                    }), 
                    (0, t.jsx)("a", {
                      href: "https://x.com/Catcoin_paw",
                      children: (0, t.jsx)("button", {
                        onClick: () => a(!1),
                        className:
                          "text-2xl font-bold uppercase hover:text-primary transition-colors",
                        children: "Say Meow",
                      }),
                    }),
                  ],
                }),
            }),
            (0, t.jsxs)("div", {
              className: "hidden md:flex gap-4",
              children: [
                (0, t.jsx)("a", {
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xde7ea3e9db316b821934a2d223cf0c1f0ab9daa5",
                  className:
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-500 text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 small-button",
                  children: "Buy now",
                }),
                (0, t.jsx)("a", {
                  href: "https://t.me/Catcoin_paw",
                  className:
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 h-9 px-4 py-2 small-button",
                  children: "Community",
                }),
                (0, t.jsx)("a", {
                  href: "https://x.com/Catcoin_paw",
                  className:
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 h-9 px-4 py-2 small-button",
                  children: "Say Meow",
                }),
              ],
            }),
          ],
        }),
      });
    }
    e.s(["default", () => a]);
  },
  18552,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(46932),
      o = e.i(87652),
      i = e.i(91994),
      s = e.i(88653);
    function a() {
      let [e, a] = (0, r.useState)(""),
        [l, u] = (0, r.useState)(!1),
        [c, f] = (0, r.useState)([]),
        d = (0, o.useMotionValue)(-100),
        p = (0, o.useMotionValue)(-100),
        h = (0, i.useSpring)(d, { stiffness: 500, damping: 28 }),
        m = (0, i.useSpring)(p, { stiffness: 500, damping: 28 }),
        x = (0, r.useRef)({ x: -100, y: -100 }),
        y = (0, r.useRef)(0);
      (0, r.useEffect)(() => {
        let e = (e) => {
          let { clientX: t, clientY: r } = e;
          d.set(t), p.set(r);
          let n = e.target,
            o = n.closest("[data-cursor-text]");
          if (
            (o ? a(o.getAttribute("data-cursor-text")) : a(""),
            u(!!n.closest('a, button, [role="button"]')),
            Math.hypot(t - x.current.x, r - x.current.y) > 50)
          ) {
            let e =
                Math.atan2(r - x.current.y, t - x.current.x) * (180 / Math.PI) +
                90,
              n = { id: y.current++, x: t, y: r, angle: e };
            f((e) => [...e.slice(-15), n]),
              (x.current = { x: t, y: r }),
              setTimeout(() => {
                f((e) => e.filter((e) => e.id !== n.id));
              }, 1e3);
          }
        };
        return (
          window.addEventListener("mousemove", e),
          () => window.removeEventListener("mousemove", e)
        );
      }, [d, p]);
      let g = ({ color: e = "#FBD204" }) =>
        (0, t.jsxs)("svg", {
          viewBox: "0 0 100 100",
          fill: e,
          xmlns: "http://www.w3.org/2000/svg",
          className: "drop-shadow-sm",
          children: [
            (0, t.jsx)("path", {
              d: "M50 35C58.2843 35 65 28.2843 65 20C65 11.7157 58.2843 5 50 5C41.7157 5 35 11.7157 35 20C35 28.2843 41.7157 35 50 35Z",
            }),
            (0, t.jsx)("path", {
              d: "M20 50C28.2843 50 35 43.2843 35 35C35 26.7157 28.2843 20 20 20C11.7157 20 5 26.7157 5 35C5 43.2843 11.7157 50 20 50Z",
            }),
            (0, t.jsx)("path", {
              d: "M80 50C88.2843 50 95 43.2843 95 35C95 26.7157 88.2843 20 80 20C71.7157 20 65 26.7157 65 35C65 43.2843 71.7157 50 80 50Z",
            }),
            (0, t.jsx)("path", {
              d: "M50 95C66.5685 95 80 81.5685 80 65C80 48.4315 66.5685 35 50 35C33.4315 35 20 48.4315 20 65C20 81.5685 33.4315 95 50 95Z",
            }),
          ],
        });
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)(s.AnimatePresence, {
            children: c.map((e) =>
              (0, t.jsx)(
                n.motion.div,
                {
                  className:
                    "fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9998] opacity-40",
                  initial: { opacity: 0.4, scale: 0.8 },
                  animate: { opacity: 0 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  style: {
                    left: e.x,
                    top: e.y,
                    rotate: e.angle,
                    x: "-50%",
                    y: "-50%",
                  },
                  children: (0, t.jsx)(g, { color: "#FBD204" }),
                },
                e.id
              )
            ),
          }),
          (0, t.jsxs)(n.motion.div, {
            className:
              "fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center",
            style: { x: h, y: m, translateX: "-50%", translateY: "-50%" },
            animate: { scale: l || e ? 1.5 : 1 },
            children: [
              (0, t.jsx)("div", {
                className: "relative w-8 h-8",
                children: (0, t.jsx)(g, { color: "#FBD204" }),
              }),
              (0, t.jsx)(s.AnimatePresence, {
                children:
                  e &&
                  (0, t.jsx)(n.motion.div, {
                    initial: { opacity: 0, scale: 0.8, x: 20 },
                    animate: { opacity: 1, scale: 1, x: 30 },
                    exit: { opacity: 0, scale: 0.8, x: 20 },
                    className:
                      "absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-[#FBD204] text-white px-4 py-2 rounded-2xl whitespace-nowrap font-bold text-sm shadow-xl border-2 border-white/20",
                    children: e,
                  }),
              }),
            ],
          }),
        ],
      });
    }
    e.s(["default", () => a]);
  },
]);
