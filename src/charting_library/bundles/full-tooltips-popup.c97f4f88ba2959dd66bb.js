(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [8643],
  {
    67891: function (e, t) {
      var n, o, r;
      (o = [t]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n = !1;
              if ('undefined' != typeof window) {
                var o = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener('testPassive', null, o),
                  window.removeEventListener('testPassive', null, o);
              }
              var r =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                a = [],
                i = !1,
                l = -1,
                s = void 0,
                c = void 0,
                d = function (e) {
                  return a.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                u = function (e) {
                  var t = e || window.event;
                  return (
                    !!d(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                m = function () {
                  setTimeout(function () {
                    void 0 !== c &&
                      ((document.body.style.paddingRight = c), (c = void 0)),
                      void 0 !== s &&
                        ((document.body.style.overflow = s), (s = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, o) {
                if (r) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                    );
                  if (
                    e &&
                    !a.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var m = { targetElement: e, options: o || {} };
                    (a = [].concat(t(a), [m])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (l = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, o, r, a;
                        1 === t.targetTouches.length &&
                          ((o = e),
                          (a = (n = t).targetTouches[0].clientY - l),
                          !d(n.target) &&
                            ((o && 0 === o.scrollTop && 0 < a) ||
                            ((r = o) &&
                              r.scrollHeight - r.scrollTop <= r.clientHeight &&
                              a < 0)
                              ? u(n)
                              : n.stopPropagation()));
                      }),
                      i ||
                        (document.addEventListener(
                          'touchmove',
                          u,
                          n ? { passive: !1 } : void 0,
                        ),
                        (i = !0));
                  }
                } else {
                  (v = o),
                    setTimeout(function () {
                      if (void 0 === c) {
                        var e = !!v && !0 === v.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((c = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === s &&
                        ((s = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var p = { targetElement: e, options: o || {} };
                  a = [].concat(t(a), [p]);
                }
                var v;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (a.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      i &&
                        (document.removeEventListener(
                          'touchmove',
                          u,
                          n ? { passive: !1 } : void 0,
                        ),
                        (i = !1)),
                      (a = []),
                      (l = -1))
                    : (m(), (a = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (r) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (a = a.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      i &&
                        0 === a.length &&
                        (document.removeEventListener(
                          'touchmove',
                          u,
                          n ? { passive: !1 } : void 0,
                        ),
                        (i = !1));
                  } else
                    1 === a.length && a[0].targetElement === e
                      ? (m(), (a = []))
                      : (a = a.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? n.apply(t, o)
              : n) || (e.exports = r);
    },
    81051: (e) => {
      e.exports = {
        'css-value-small-size': '18px',
        'css-value-border-radius-small-size': '9px',
        'css-value-large-size': '22px',
        'css-value-border-radius-large-size': '11px',
        popupWidget: 'popupWidget-1LnizAbt',
        desc: 'desc-1LnizAbt',
        icon: 'icon-1LnizAbt',
        small: 'small-1LnizAbt',
        large: 'large-1LnizAbt',
        title: 'title-1LnizAbt',
        text: 'text-1LnizAbt',
        item: 'item-1LnizAbt',
        boldItem: 'boldItem-1LnizAbt',
        action: 'action-1LnizAbt',
        additionalWidget: 'additionalWidget-1LnizAbt',
      };
    },
    64526: (e) => {
      e.exports = {
        wrap: 'wrap-164vy-kj',
        positionBottom: 'positionBottom-164vy-kj',
        backdrop: 'backdrop-164vy-kj',
        drawer: 'drawer-164vy-kj',
        positionLeft: 'positionLeft-164vy-kj',
      };
    },
    36783: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { render: () => E });
      var o = n(67294),
        r = n(73935),
        a = (n(79881), n(76420)),
        i = n(68521),
        l = n(57374),
        s = n(94004),
        c = n(45259),
        d = n(94184),
        u = n(16282),
        m = n(49775),
        p = n(27278),
        v = n(47903),
        f = n(81051);
      const h = new WeakMap(),
        g = new WeakMap();
      function w(e) {
        const t = (0, p.useWatchedValueReadonly)({ watchedValue: e.info });
        if (null === t) return null;
        const n = t.map((t) => {
          const {
            title: n,
            titleColor: r,
            icon: a,
            iconClassName: i,
            html: l,
            action: s,
            size: p,
          } = t;
          h.has(t) || h.set(t, (0, c.randomHash)());
          let w = [];
          return (
            void 0 !== e.additionalWidgets &&
              (w = e.additionalWidgets.map(
                (e) => (
                  g.has(e) || g.set(e, (0, c.randomHash)()),
                  e.renderer((0, u.ensureDefined)(g.get(e)), f.additionalWidget)
                ),
              )),
            o.createElement(
              'div',
              { key: h.get(t), className: f.popupWidget },
              o.createElement(m.Icon, {
                className: d(f.icon, i, f[p]),
                icon: a || void 0,
              }),
              o.createElement(
                'div',
                { className: f.desc },
                o.createElement(
                  'span',
                  {
                    style: { color: r || void 0 },
                    className: d(f.title, f[p]),
                  },
                  n,
                ),
                l &&
                  o.createElement(
                    'p',
                    { className: d(f.text, f[p]) },
                    l.map((e, t) => {
                      let n, r;
                      return (
                        (0, v.isObject)(e)
                          ? ((n = e.text), (r = e.bold))
                          : (n = e),
                        o.createElement('span', {
                          key: 'html_item_' + t,
                          className: d(f.item, r && f.boldItem),
                          dangerouslySetInnerHTML: { __html: n },
                        })
                      );
                    }),
                  ),
                s &&
                  o.createElement(
                    'span',
                    {
                      className: d(
                        s.tooltip && 'apply-common-tooltip',
                        f.action,
                        f[p],
                      ),
                      onClick: () => {
                        e.onClose(), null == s || s.onClick();
                      },
                      title: s.tooltip,
                    },
                    s.text,
                  ),
                w,
              ),
            )
          );
        });
        return o.createElement(o.Fragment, null, n);
      }
      const b = new WeakMap();
      function y(e) {
        const { statusWidgetInfos: t } = e,
          n = t
            .filter((e) => e.visible.value())
            .map(
              (t) => (
                b.has(t) || b.set(t, (0, c.randomHash)()),
                o.createElement(w, {
                  key: b.get(t),
                  info: t.model.fullInfo(),
                  onClose: e.onClose,
                  additionalWidgets: t.additionalWidgets,
                })
              ),
            );
        return o.createElement(
          s.DrawerManager,
          null,
          o.createElement(
            i.MatchMedia,
            { rule: 'screen and (max-width: 428px)' },
            (t) =>
              t
                ? o.createElement(
                    l.Drawer,
                    { onClose: e.onClose, position: 'Bottom' },
                    n,
                  )
                : o.createElement(
                    a.PopupMenu,
                    {
                      isOpened: !0,
                      onClose: e.onClose,
                      position: e.position,
                      doNotCloseOn: e.rendererButton,
                    },
                    n,
                  ),
          ),
        );
      }
      function E(e, t, n, a, i, l) {
        const s = {
          rendererButton: n,
          position: l,
          statusWidgetInfos: a,
          onClose: i,
        };
        e
          ? r.render(o.createElement(y, { ...s }), t)
          : r.unmountComponentAtNode(t);
      }
    },
    94004: (e, t, n) => {
      'use strict';
      n.d(t, { DrawerManager: () => r, DrawerContext: () => a });
      var o = n(67294);
      class r extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._addDrawer = () => {
              const e = this.state.currentDrawer + 1;
              return this.setState({ currentDrawer: e }), e;
            }),
            (this._removeDrawer = () => {
              const e = this.state.currentDrawer - 1;
              return this.setState({ currentDrawer: e }), e;
            }),
            (this.state = { currentDrawer: 0 });
        }
        render() {
          return o.createElement(
            a.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.currentDrawer,
              },
            },
            this.props.children,
          );
        }
      }
      const a = o.createContext(null);
    },
    57374: (e, t, n) => {
      'use strict';
      n.d(t, { Drawer: () => p });
      var o = n(67294),
        r = n(16282),
        a = n(94184),
        i = n(67891),
        l = n(75761),
        s = n(4735),
        c = n(94004),
        d = n(43367),
        u = n(94884),
        m = n(64526);
      function p(e) {
        const {
            position: t = 'Bottom',
            onClose: n,
            children: p,
            className: v,
            theme: f = m,
          } = e,
          h = (0, r.ensureNotNull)((0, o.useContext)(c.DrawerContext)),
          [g, w] = (0, o.useState)(0),
          b = (0, o.useRef)(null),
          y = (0, o.useContext)(u.CloseDelegateContext);
        return (
          (0, o.useEffect)(() => {
            const e = (0, r.ensureNotNull)(b.current);
            return (
              e.focus({ preventScroll: !0 }),
              y.subscribe(h, n),
              (0, l.setFixedBodyState)(!0),
              d.CheckMobile.iOS() && (0, i.disableBodyScroll)(e),
              w(h.addDrawer()),
              () => {
                y.unsubscribe(h, n);
                const t = h.removeDrawer();
                d.CheckMobile.iOS() && (0, i.enableBodyScroll)(e),
                  0 === t && (0, l.setFixedBodyState)(!1);
              }
            );
          }, []),
          o.createElement(
            s.Portal,
            null,
            o.createElement(
              'div',
              { className: a(m.wrap, m['position' + t]) },
              g === h.currentDrawer &&
                o.createElement('div', { className: m.backdrop, onClick: n }),
              o.createElement(
                'div',
                {
                  className: a(m.drawer, f.drawer, m['position' + t], v),
                  ref: b,
                  tabIndex: -1,
                  'data-name': e['data-name'],
                },
                p,
              ),
            ),
          )
        );
      }
    },
    76420: (e, t, n) => {
      'use strict';
      n.d(t, { PopupMenu: () => c });
      var o = n(67294),
        r = n(73935),
        a = n(4735),
        i = n(90901),
        l = n(94884),
        s = n(47165);
      function c(e) {
        const {
            controller: t,
            children: n,
            isOpened: c,
            closeOnClickOutside: d = !0,
            doNotCloseOn: u,
            onClickOutside: m,
            onClose: p,
            ...v
          } = e,
          f = (0, o.useContext)(l.CloseDelegateContext),
          h = (0, s.useOutsideEvent)({
            handler: function (e) {
              m && m(e);
              if (!d) return;
              if (u && e.target instanceof Node) {
                const t = r.findDOMNode(u);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              p();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return c
          ? o.createElement(
              a.Portal,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              o.createElement(
                'span',
                { ref: h, style: { pointerEvents: 'auto' } },
                o.createElement(
                  i.Menu,
                  {
                    ...v,
                    onClose: p,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: f,
                    ref: t,
                  },
                  n,
                ),
              ),
            )
          : null;
      }
    },
  },
]);
