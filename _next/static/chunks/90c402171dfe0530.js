(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  32150,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      i = e.i(46932),
      s = e.i(87652),
      r = e.i(91994),
      a = e.i(95420);
    function o({ children: e, className: o = "" }) {
      let l = (0, n.useRef)(null),
        c = (0, s.useMotionValue)(0),
        d = (0, s.useMotionValue)(0),
        u = (0, r.useSpring)(c, { stiffness: 150, damping: 15 }),
        m = (0, r.useSpring)(d, { stiffness: 150, damping: 15 }),
        h = (0, a.useTransform)(m, [-0.5, 0.5], [10, -10]),
        f = (0, a.useTransform)(u, [-0.5, 0.5], [-10, 10]);
      return (0, t.jsx)(i.motion.div, {
        ref: l,
        className: o,
        onMouseMove: function (e) {
          if (!l.current) return;
          let t = l.current.getBoundingClientRect(),
            n = t.width,
            i = t.height,
            s = e.clientX - t.left - n / 2,
            r = e.clientY - t.top - i / 2;
          c.set(s / n), d.set(r / i);
        },
        onMouseLeave: function () {
          c.set(0), d.set(0);
        },
        style: { rotateX: h, rotateY: f, transformStyle: "preserve-3d" },
        children: e,
      });
    }
    e.s(["default", () => o]);
  },
  68590,
  (e) => {
    "use strict";
    let t, n;
    var i = e.i(43476),
      s = e.i(71645),
      r = e.i(57688),
      a = e.i(46932),
      o = e.i(86427),
      l = e.i(65566),
      c = e.i(60830),
      d = e.i(87022);
    function u(e, t) {
      let n,
        i = () => {
          let { currentTime: i } = t,
            s = (null === i ? 0 : i.value) / 100;
          n !== s && e(s), (n = s);
        };
      return d.frame.preUpdate(i, !0), () => (0, d.cancelFrame)(i);
    }
    var m = e.i(30551),
      h = e.i(89026),
      f = e.i(49652);
    let p = new WeakMap(),
      x = (e, t, n) => (i, s) =>
        s && s[0]
          ? s[0][e + "Size"]
          : (0, h.isSVGElement)(i) && "getBBox" in i
          ? i.getBBox()[t]
          : i[n],
      g = x("inline", "width", "offsetWidth"),
      v = x("block", "height", "offsetHeight");
    function b({ target: e, borderBoxSize: t }) {
      p.get(e)?.forEach((n) => {
        n(e, {
          get width() {
            return g(e, t);
          },
          get height() {
            return v(e, t);
          },
        });
      });
    }
    function y(e) {
      e.forEach(b);
    }
    let w = new Set();
    var j = e.i(83920),
      N = e.i(25791);
    let k = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      }),
      C = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
      };
    function T(e, t, n, i) {
      let s = n[t],
        { length: r, position: a } = C[t],
        o = s.current,
        l = n.time;
      (s.current = e[`scroll${a}`]),
        (s.scrollLength = e[`scroll${r}`] - e[`client${r}`]),
        (s.offset.length = 0),
        (s.offset[0] = 0),
        (s.offset[1] = s.scrollLength),
        (s.progress = (0, j.progress)(0, s.scrollLength, s.current));
      let c = i - l;
      s.velocity = c > 50 ? 0 : (0, N.velocityPerSecond)(s.current - o, c);
    }
    e.i(47167);
    var E = e.i(44230),
      O = e.i(15923),
      W = e.i(76959),
      z = e.i(72846);
    let B = { start: 0, center: 0.5, end: 1 };
    function L(e, t, n = 0) {
      let i = 0;
      if ((e in B && (e = B[e]), "string" == typeof e)) {
        let t = parseFloat(e);
        e.endsWith("px")
          ? (i = t)
          : e.endsWith("%")
          ? (e = t / 100)
          : e.endsWith("vw")
          ? (i = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
          ? (i = (t / 100) * document.documentElement.clientHeight)
          : (e = t);
      }
      return "number" == typeof e && (i = t * e), n + i;
    }
    let S = [0, 0],
      I = [
        [0, 0],
        [1, 1],
      ],
      M = { x: 0, y: 0 },
      A = new WeakMap(),
      q = new WeakMap(),
      H = new WeakMap(),
      P = (e) => (e === document.scrollingElement ? window : e);
    function R(e, { container: i = document.scrollingElement, ...s } = {}) {
      if (!i) return c.noop;
      let r = H.get(i);
      r || ((r = new Set()), H.set(i, r));
      let a = (function (e, t, n, i = {}) {
        return {
          measure: (t) => {
            !(function (e, t = e, n) {
              if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
                let i = t;
                for (; i && i !== e; )
                  (n.x.targetOffset += i.offsetLeft),
                    (n.y.targetOffset += i.offsetTop),
                    (i = i.offsetParent);
              }
              (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
                (n.x.containerLength = e.clientWidth),
                (n.y.containerLength = e.clientHeight);
            })(e, i.target, n),
              T(e, "x", n, t),
              T(e, "y", n, t),
              (n.time = t),
              (i.offset || i.target) &&
                (function (e, t, n) {
                  let { offset: i = I } = n,
                    { target: s = e, axis: r = "y" } = n,
                    a = "y" === r ? "height" : "width",
                    o =
                      s !== e
                        ? (function (e, t) {
                            let n = { x: 0, y: 0 },
                              i = e;
                            for (; i && i !== t; )
                              if ((0, z.isHTMLElement)(i))
                                (n.x += i.offsetLeft),
                                  (n.y += i.offsetTop),
                                  (i = i.offsetParent);
                              else if ("svg" === i.tagName) {
                                let e = i.getBoundingClientRect(),
                                  t = (i =
                                    i.parentElement).getBoundingClientRect();
                                (n.x += e.left - t.left),
                                  (n.y += e.top - t.top);
                              } else if (i instanceof SVGGraphicsElement) {
                                let { x: e, y: t } = i.getBBox();
                                (n.x += e), (n.y += t);
                                let s = null,
                                  r = i.parentNode;
                                for (; !s; )
                                  "svg" === r.tagName && (s = r),
                                    (r = i.parentNode);
                                i = s;
                              } else break;
                            return n;
                          })(s, e)
                        : M,
                    l =
                      s === e
                        ? { width: e.scrollWidth, height: e.scrollHeight }
                        : "getBBox" in s && "svg" !== s.tagName
                        ? s.getBBox()
                        : { width: s.clientWidth, height: s.clientHeight },
                    c = { width: e.clientWidth, height: e.clientHeight };
                  t[r].offset.length = 0;
                  let d = !t[r].interpolate,
                    u = i.length;
                  for (let e = 0; e < u; e++) {
                    let n = (function (e, t, n, i) {
                      let s = Array.isArray(e) ? e : S,
                        r = 0;
                      return (
                        "number" == typeof e
                          ? (s = [e, e])
                          : "string" == typeof e &&
                            (s = (e = e.trim()).includes(" ")
                              ? e.split(" ")
                              : [e, B[e] ? e : "0"]),
                        (r = L(s[0], n, i)) - L(s[1], t)
                      );
                    })(i[e], c[a], l[a], o[r]);
                    d || n === t[r].interpolatorOffsets[e] || (d = !0),
                      (t[r].offset[e] = n);
                  }
                  d &&
                    ((t[r].interpolate = (0, E.interpolate)(
                      t[r].offset,
                      (0, O.defaultOffset)(i),
                      { clamp: !1 }
                    )),
                    (t[r].interpolatorOffsets = [...t[r].offset])),
                    (t[r].progress = (0, W.clamp)(
                      0,
                      1,
                      t[r].interpolate(t[r].current)
                    ));
                })(e, n, i);
          },
          notify: () => t(n),
        };
      })(i, e, { time: 0, x: k(), y: k() }, s);
      if ((r.add(a), !A.has(i))) {
        let e,
          s = () => {
            for (let e of r) e.measure(d.frameData.timestamp);
            d.frame.preUpdate(a);
          },
          a = () => {
            for (let e of r) e.notify();
          },
          o = () => d.frame.read(s);
        A.set(i, o);
        let l = P(i);
        window.addEventListener("resize", o, { passive: !0 }),
          i !== document.documentElement &&
            q.set(
              i,
              "function" == typeof i
                ? (w.add(i),
                  n ||
                    ((n = () => {
                      let e = {
                        get width() {
                          return window.innerWidth;
                        },
                        get height() {
                          return window.innerHeight;
                        },
                      };
                      w.forEach((t) => t(e));
                    }),
                    window.addEventListener("resize", n)),
                  () => {
                    w.delete(i),
                      w.size ||
                        "function" != typeof n ||
                        (window.removeEventListener("resize", n), (n = void 0));
                  })
                : (!t &&
                    "u" > typeof ResizeObserver &&
                    (t = new ResizeObserver(y)),
                  (e = (0, f.resolveElements)(i)).forEach((e) => {
                    let n = p.get(e);
                    n || ((n = new Set()), p.set(e, n)),
                      n.add(o),
                      t?.observe(e);
                  }),
                  () => {
                    e.forEach((e) => {
                      let n = p.get(e);
                      n?.delete(o), n?.size || t?.unobserve(e);
                    });
                  })
            ),
          l.addEventListener("scroll", o, { passive: !0 }),
          o();
      }
      let o = A.get(i);
      return (
        d.frame.read(o, !1, !0),
        () => {
          (0, d.cancelFrame)(o);
          let e = H.get(i);
          if (!e || (e.delete(a), e.size)) return;
          let t = A.get(i);
          A.delete(i),
            t &&
              (P(i).removeEventListener("scroll", t),
              q.get(i)?.(),
              window.removeEventListener("resize", t));
        }
      );
    }
    let V = new Map();
    function $({ source: e, container: t, ...n }) {
      var i;
      let s,
        r,
        { axis: a } = n;
      e && (t = e);
      let o = V.get(t) ?? new Map();
      V.set(t, o);
      let l = n.target ?? "self",
        c = o.get(l) ?? {},
        d = a + (n.offset ?? []).join(",");
      return (
        c[d] ||
          (c[d] =
            !n.target && (0, m.supportsScrollTimeline)()
              ? new ScrollTimeline({ source: t, axis: a })
              : ((i = { container: t, ...n }),
                (s = { value: 0 }),
                (r = R((e) => {
                  s.value = 100 * e[i.axis].progress;
                }, i)),
                { currentTime: s, cancel: r })),
        c[d]
      );
    }
    var Y = e.i(47414),
      D = e.i(74008);
    let U = () => ({
        scrollX: (0, o.motionValue)(0),
        scrollY: (0, o.motionValue)(0),
        scrollXProgress: (0, o.motionValue)(0),
        scrollYProgress: (0, o.motionValue)(0),
      }),
      F = (e) => !!e && !e.current;
    var G = e.i(95420),
      X = e.i(32150);
    function K() {
      let e = (0, s.useRef)(null),
        { scrollY: t } = (function ({ container: e, target: t, ...n } = {}) {
          let i = (0, Y.useConstant)(U),
            r = (0, s.useRef)(null),
            a = (0, s.useRef)(!1),
            o = (0, s.useCallback)(
              () => (
                (r.current = (function (
                  e,
                  {
                    axis: t = "y",
                    container: n = document.scrollingElement,
                    ...i
                  } = {}
                ) {
                  var s, r;
                  let a;
                  if (!n) return c.noop;
                  let o = { axis: t, container: n, ...i };
                  return "function" == typeof e
                    ? ((s = e),
                      (r = o),
                      2 === s.length
                        ? R((e) => {
                            s(e[r.axis].progress, e);
                          }, r)
                        : u(s, $(r)))
                    : ((a = $(o)),
                      e.attachTimeline({
                        timeline: o.target ? void 0 : a,
                        observe: (e) => (
                          e.pause(),
                          u((t) => {
                            e.time = e.iterationDuration * t;
                          }, a)
                        ),
                      }));
                })(
                  (e, { x: t, y: n }) => {
                    i.scrollX.set(t.current),
                      i.scrollXProgress.set(t.progress),
                      i.scrollY.set(n.current),
                      i.scrollYProgress.set(n.progress);
                  },
                  {
                    ...n,
                    container: e?.current || void 0,
                    target: t?.current || void 0,
                  }
                )),
                () => {
                  r.current?.();
                }
              ),
              [e, t, JSON.stringify(n.offset)]
            );
          return (
            (0, D.useIsomorphicLayoutEffect)(() => {
              if (((a.current = !1), !(F(e) || F(t)))) return o();
              a.current = !0;
            }, [o]),
            (0, s.useEffect)(
              () =>
                a.current
                  ? ((0, l.invariant)(
                      !F(e),
                      "Container ref is defined but not hydrated",
                      "use-scroll-ref"
                    ),
                    (0, l.invariant)(
                      !F(t),
                      "Target ref is defined but not hydrated",
                      "use-scroll-ref"
                    ),
                    o())
                  : void 0,
              [o]
            ),
            i
          );
        })(),
        n = (0, G.useTransform)(t, [0, 300], [200, 0]);
      return (0, i.jsxs)("div", {
        ref: e,
        className:
          "relative w-full h-screen lg:min-h-[800px] left-0 top-0 overflow-hidden bg-background",
        children: [
          (0, i.jsx)("video", {
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: "absolute top-0 left-0 w-full h-full object-cover z-0",
            children: (0, i.jsx)("source", {
              src: "/images/cc1VV.mp4",
              type: "video/mp4",
            }),
          }),
          (0, i.jsx)("div", {
            className:
              "absolute top-0 left-0 w-full h-full bg-background/80 z-0",
          }),
          (0, i.jsx)(a.motion.div, {
            className: "w-[400px] aspect-square absolute bottom-0 left-1/2 z-0",
            id: "sausage",
            style: { y: n, x: "-50%" },
            children: (0, i.jsx)(X.default, {
              className: "relative w-full h-full has-custom-cursor",
              "data-cursor-text":
                "Unbothered. Moisturized. Happy. In My Lane. Focused. Flourishing.",
              children: (0, i.jsx)(r.default, {
                src: "/images/cc2rre.webp",
                alt: "Nobody Sausage",
                fill: !0,
                className: "object-cover",
                priority: !0,
              }),
            }),
          }),
          (0, i.jsx)("div", {
            className:
              "relative z-10 flex flex-col items-center justify-between lg:min-h-[800px] h-screen w-full pointer-events-none",
            children: (0, i.jsxs)("div", {
              className:
                "px-4 flex flex-col items-center justify-center flex-1 grow pointer-events-auto",
              children: [
                (0, i.jsx)("h1", {
                  className:
                    "sausage-brand font-brand text-white text-center mb-4 text-[2.5rem] leading-[3.1rem] xl:text-[5rem] xl:leading-[82px] uppercase",
                  children: "Paws uniting the blockchain",
                }),
                (0, i.jsx)("p", {
                  className:
                    "text-accent text-base xl:text-[2rem] mb-8 max-w-md text-center",
                  children: "Join the CATvolution.",
                }),
                (0, i.jsx)("div", {
                  className: "flex flex-col sm:flex-row gap-4 mb-20 z-20",
                  children: (0, i.jsx)("a", {
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x1D6a7402e387a55F44cc9712969c4bE77C42574B",
                    className:
                      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-500 text-primary-foreground shadow hover:bg-accent/90 h-9 px-4 py-2 big-button text-[14px] xl:text-base",
                    children: "BUY NOW",
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    e.s(["default", () => K], 68590);
  },
  94773,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(57688),
      i = e.i(32150),
      s = e.i(46932);
    function r() {
      return (0, t.jsx)("div", {
        className:
          "relative xl:h-screen xl:min-h-[800px] w-full bg-background xl:bg-[url('/images/tokenomics-bg.webp')] xl:bg-contain xl:bg-top-right bg-no-repeat overflow-hidden z-20 px-4 xl:px-0 sm:py-0 md:py-10 xl:py-0",
        id: "3",
        children: (0, t.jsx)("div", {
          className: "max-w-[1536px] mx-auto",
          children: (0, t.jsxs)("div", {
            className:
              "xl:grid xl:grid-cols-12 gap-4 xl:h-screen xl:min-h-[800px]",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "col-span-5 flex flex-col items-center justify-center flex-1 grow relative",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col items-center flex-1 grow pt-[100px] md:pt-[120px] xl:pt-[150px] 2xl:pt-[200px] z-10 xl:z-auto",
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-white text-lg max-w-md text-center uppercase contrast",
                        children: "CATCOIN",
                      }),
                      (0, t.jsx)("h2", {
                        className:
                          "sausage-brand font-brand text-white text-center text-[2.5rem] leading-[3.1rem] xl:text-[3rem] xl:leading-[3rem] mb-4 uppercase contrast",
                        children: (0, t.jsx)("span", {
                          className: "text-accent",
                          children: "TOKENOMICS",
                        }),
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-white text-base xl:text-lg mb-8 max-w-md text-center",
                        children: "Pure meme power, no funny business.",
                      }),
                    ],
                  }),
                  (0, t.jsx)(i.default, {
                    className:
                      "hidden md:block w-[300px] h-[300px] md:w-[450px] md:h-[450px] absolute -bottom-[0px] left-1/2 -translate-x-1/2 has-custom-cursor",
                    "data-cursor-text": "BING!",
                    children: (0, t.jsx)(n.default, {
                      alt: "Tokenomics",
                      src: "/images/catcoins-tokenomics-left.webp",
                      width: 800,
                      height: 800,
                      className: "object-contain",
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className:
                  "max-w-[600px] mx-auto xl:mx-0 xl:col-start-7 xl:col-span-5 flex flex-col items-center justify-center flex-1 grow min-h-[500px]",
                children: (0, t.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full",
                  children: [
                    { label: "Tax", value: "0/0", icon: "💸" },
                    { label: "Liquidity", value: "BURNT", icon: "🔥" },
                    { label: "Contract", value: "RENOUNCED", icon: "📝" },
                    { label: "Total Supply", value: "1B", icon: "💎" },
                  ].map((e, n) =>
                    (0, t.jsxs)(
                      s.motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { delay: 0.1 * n },
                        className:
                          "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-none",
                        "data-cursor-text": e.value,
                        children: [
                          (0, t.jsx)("span", {
                            className: "text-4xl mb-2 grayscale",
                            children: e.icon,
                          }),
                          (0, t.jsx)("h3", {
                            className:
                              "sausage-brand text-accent text-2xl xl:text-3xl text-center",
                            children: e.value,
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-white text-sm uppercase tracking-wider opacity-80",
                            children: e.label,
                          }),
                        ],
                      },
                      n
                    )
                  ),
                }),
              }),
            ],
          }),
        }),
      });
    }
    e.s(["default", () => r]);
  },
  88848,
  (e) => {
    "use strict";
    var t = e.i(43476);
    function n() {
      return (0, t.jsx)("div", {
        className: "relative w-full bg-background py-20 px-4 xl:px-0 z-40",
        children: (0, t.jsxs)("div", {
          className: "max-w-[1536px] mx-auto",
          children: [
            (0, t.jsx)("div", {
              className: "flex flex-col items-center justify-center mb-16",
              children: (0, t.jsxs)("h3", {
                className:
                  "sausage-brand font-brand text-light-background text-center text-[3rem] leading-[3.1rem] xl:text-[5rem] xl:leading-[5rem] mb-4 uppercase",
                children: [
                  "Dance to",
                  (0, t.jsx)("br", {}),
                  (0, t.jsx)("span", {
                    className: "text-accent",
                    children: 'THE "MEOW"!',
                  }),
                ],
              }),
            }),
            (0, t.jsxs)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full max-w-6xl mx-auto",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "relative w-full rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4] lg:aspect-square",
                  "data-cursor-text": "MOVE YOUR BODY!",
                  children: (0, t.jsx)("video", {
                    src: "/images/cc2.mp4",
                    className: "w-full h-full object-cover",
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    "relative w-full rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4] lg:aspect-square",
                  "data-cursor-text": "BADASS!",
                  children: (0, t.jsx)("video", {
                    src: "/images/cc3.mp4",
                    className: "w-full h-full object-cover",
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    }
    e.s(["default", () => n]);
  },
  39565,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645);
    e.i(57688);
    let i = [
      {
        question: "What is Catcoin?",
        answer:
          "Catcoin ($CATCOIN) is a community-driven cryptocurrency and volunteer movement designed to unite fans of meme tokens and decentralized finance. It strives for decentralization, community empowerment, and social impact through its ecosystem and volunteer base. Catcoin was launched as a community project and is now fully owned and operated by its community.",
      },
      {
        question: "Is $CATCOIN a meme token or does it have utility?",
        answer:
          "Catcoin is THE original meme token.  As Catcoin leans into its brand new revival on ETH, its community becomes its utility.  It represents one of the very first CTO style projects, before they were even known as this.  And its powerful community allows it to excel through any market condition.  With that said, Catcoin aims to keep charity in its heart, with future examples to be shown once completed, all thanks to the power of its amazing community.",
      },
      {
        question: "Who created Catcoin and is the original creator involved?",
        answer:
          "Catcoin was launched on November 26, 2021 by Miaoshi Nekomoto (the ‘Cat’ of Satoshi Nakamoto). The original creator is anonymous, and there is a doxed and passionate team of crypto veterans that manage the project. Catcoin, the original cat-themed cryptocurrency, was born in December 2013 as the world's first feline memecoin. Launched on December 23, 2013, with its genesis block mined at 23:03:52 GMT by the mysterious creator known as Catoshi Nakamoto (a playful twist on Bitcoin's Satoshi), it emerged just days after Dogecoin in the early altcoin wave. Built as a scrypt-based proof-of-work coin with a capped supply of 21 million (mirroring Bitcoin's scarcity but in the cat meme spirit), it fostered a small but dedicated community tied to cat culture, memes, and lighthearted rivalry with dog-themed coins. For over a decade, this OG version persisted quietly on its own blockchain, outlasting many early projects while staying true to its decentralized, fun roots. The 2021 Catcoin on Binance Smart Chain (BSC) emerged during the meme coin boom as a community-driven feline-themed token, launched on November 26, 2021, by the pseudonymous creator Miaoshi Nekomoto (a fun nod to Satoshi Nakamoto). Positioned as a decentralized rival to dog-themed coins like Shiba Inu, it featured a high supply, locked liquidity, and renounced ownership shortly after launch to emphasize true community control. The project quickly built hype around cat memes, charity elements (like supporting animal rescues, and providing women and youth with trades/STEM education for a better future.), and various early utilities. This OG memecoin on BSC represented the first modern revival of cat-themed crypto energy, distinct from the old 2013 PoW coin, and saw contract upgrades—including a notable V1 to V2 migration around April-May 2022 for enhanced security, better features, and smoother community governance. and fostered a passionate holder base through social media, giveaways, and ecosystem growth. Catcoin essentially paved the way for modern cat meme tokens. Yet as the space evolved, the necessary parameters for a successful memecoin changed. Which brings us to the present moment, where Catcoin is gearing up for its debut Ethereum launch, where it will once again bring to the forefront the project's enduring meme spirit and massive community presence to become an unforgettable force of the meme-industry and challenge the dogs and frogs of today for dominance.",
      },
      {
        question: "What’s the purpose of $CATCOIN?",
        answer:
          "The purpose of Catcoin is to build a massive, community-led memecoin with meaningful social impact, and a passionate global base, driving both crypto meme celebration and charitable initiatives born from this infectious energy.",
      },
      {
        question: "What should I expect if I buy $CATCOIN?",
        answer:
          "Holders can expect to be part of a massive collective of likeminded crypto individuals, aiming to take their movement to the meow-oon!",
      },
      {
        question: "Who can be part of the Catcoin community?",
        answer:
          "Everyone is welcome to join the Catcoin community. Catcoin has an open-door policy where everyone can contribute to its direction and growth.",
      },
      {
        question:
          "What are the official token contract addresses for $CATCOIN?",
        answer:
          "Catcoin’s official token ETH contract is:\n\n TBA \n\n Note: Old addresses are discontinued, be wary of impersonators and copies on various chains.  The Original Catcoin team that is making the meme what it is meant to be is ONLY available on this current ETH address",
      },
      {
        question: "What’s the token supply for $CATCOIN?",
        answer:
          "Catcoin has a total supply of 1 billion circulating tokens and community-locked characteristics; liquidity is burnt and ownership renounced to support decentralization.",
      },
    ];
    function s() {
      let [e, s] = (0, n.useState)(null);
      return (0, t.jsx)("div", {
        className: "relative min-h-screen w-full bg-accent z-10 px-4 xl:px-0",
        id: "4",
        children: (0, t.jsx)("div", {
          className: "max-w-[1536px] mx-auto",
          children: (0, t.jsx)("div", {
            className: "xl:grid xl:grid-cols-12 gap-4 min-h-screen relative",
            children: (0, t.jsx)("div", {
              className:
                "xl:col-start-3 xl:col-span-8 flex flex-col items-center justify-center flex-1 grow",
              children: (0, t.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center flex-1 grow w-full pt-16 xl:py-15",
                children: [
                  (0, t.jsx)("p", {
                    className:
                      "text-white text-lg max-w-md text-center uppercase",
                    children: "FAQ",
                  }),
                  (0, t.jsxs)("h2", {
                    className:
                      "sausage-brand font-brand text-white text-center text-[3rem] leading-[3.1rem] xl:text-[4rem] xl:leading-[72px] mb-4 uppercase",
                    children: [
                      "Section for",
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)("span", {
                        className: "text-background",
                        children: "Lost CATs",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("p", {
                    className:
                      "text-white text-base xl:text-lg mb-8 max-w-md text-center",
                    children: [
                      "It’s okay to have questions. Nobody is perrrrrfect.",
                      (0, t.jsx)("br", {}),
                      "Cats are stronger together!",
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "w-full max-w-2xl",
                    children: i.map((n, i) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className:
                            "border-b last:border-b-0 mb-3 bg-white px-5 py-3 rounded-xl",
                          children: [
                            (0, t.jsx)("h3", {
                              className: "flex",
                              children: (0, t.jsxs)("button", {
                                type: "button",
                                onClick: () => {
                                  s(e === i ? null : i);
                                },
                                className:
                                  "focus-visible:border-ring focus-visible:ring-ring/50 text-background flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-bold transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
                                "aria-expanded": e === i,
                                children: [
                                  n.question,
                                  (0, t.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: `lucide lucide-chevron-down text-muted-primary pointer-events-none size-5 shrink-0 transition-transform duration-200 ${
                                      e === i ? "rotate-180" : ""
                                    }`,
                                    children: (0, t.jsx)("path", {
                                      d: "m6 9 6 6 6-6",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: `overflow-hidden text-background transition-[max-height] duration-300 ease-in-out ${
                                e === i
                                  ? "max-h-[500px] opacity-100"
                                  : "max-h-0 opacity-0"
                              }`,
                              children: (0, t.jsx)("div", {
                                className: "pb-4 pt-0 text-sm",
                                children: n.answer
                                  .split("\n")
                                  .map((e, i) =>
                                    (0, t.jsxs)(
                                      "span",
                                      {
                                        children: [
                                          e,
                                          i < n.answer.split("\n").length - 1 &&
                                            (0, t.jsx)("br", {}),
                                        ],
                                      },
                                      i
                                    )
                                  ),
                              }),
                            }),
                          ],
                        },
                        i
                      )
                    ),
                  }),
                ],
              }),
            }),
          }),
        }),
      });
    }
    e.s(["default", () => s]);
  },
]);
