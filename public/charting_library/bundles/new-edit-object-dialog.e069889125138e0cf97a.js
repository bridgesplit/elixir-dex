(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [6265],
  {
    6920: (e) => {
      e.exports = {
        switcherWrapper: 'switcherWrapper-ZOZ_o9xK',
        'size-small': 'size-small-ZOZ_o9xK',
        'size-large': 'size-large-ZOZ_o9xK',
        'intent-select': 'intent-select-ZOZ_o9xK',
        switcherThumbWrapper: 'switcherThumbWrapper-ZOZ_o9xK',
        input: 'input-ZOZ_o9xK',
        switcherTrack: 'switcherTrack-ZOZ_o9xK',
        'intent-default': 'intent-default-ZOZ_o9xK',
        switcherThumb: 'switcherThumb-ZOZ_o9xK',
        focus: 'focus-ZOZ_o9xK',
      };
    },
    79948: (e) => {
      e.exports = {
        wrapper: 'wrapper-1Eudat6L',
        hovered: 'hovered-1Eudat6L',
        labelRow: 'labelRow-1Eudat6L',
        label: 'label-1Eudat6L',
        labelHint: 'labelHint-1Eudat6L',
        labelOn: 'labelOn-1Eudat6L',
      };
    },
    46941: (e) => {
      e.exports = {
        recalculateCheckbox: 'recalculateCheckbox-2z5ytJSA',
        singleInputTooltip: 'singleInputTooltip-2z5ytJSA',
        checkboxTooltip: 'checkboxTooltip-2z5ytJSA',
        descriptionCell: 'descriptionCell-2z5ytJSA',
        group: 'group-2z5ytJSA',
      };
    },
    28687: (e) => {
      e.exports = {
        smallStyleControl: 'smallStyleControl-11tnC1DU',
        additionalSelect: 'additionalSelect-11tnC1DU',
        childRowContainer: 'childRowContainer-11tnC1DU',
        defaultSelect: 'defaultSelect-11tnC1DU',
        defaultSelectItem: 'defaultSelectItem-11tnC1DU',
        block: 'block-11tnC1DU',
        group: 'group-11tnC1DU',
        wrapGroup: 'wrapGroup-11tnC1DU',
        textMarkGraphicBlock: 'textMarkGraphicBlock-11tnC1DU',
        textMarkGraphicWrapGroup: 'textMarkGraphicWrapGroup-11tnC1DU',
      };
    },
    2442: (e) => {
      e.exports = { scrollable: 'scrollable-2CTvqFKf' };
    },
    78706: (e) => {
      e.exports = {
        separator: 'separator-eqcGT_ow',
        small: 'small-eqcGT_ow',
        normal: 'normal-eqcGT_ow',
        large: 'large-eqcGT_ow',
      };
    },
    84264: (e, t, l) => {
      'use strict';
      l.d(t, {
        DEFAULT_MENU_ITEM_SWITCHER_THEME: () => h,
        MenuItemSwitcher: () => u,
      });
      var r = l(67294),
        n = l(94184),
        o = l.n(n),
        s = l(6920),
        a = l.n(s);
      function i(e) {
        const {
          className: t = '',
          intent: l = 'default',
          size: r = 'small',
          disabled: o,
        } = e;
        return n(
          t,
          a().switcherWrapper,
          a()['size-' + r],
          !o && a()['intent-' + l],
        );
      }
      class c extends r.PureComponent {
        render() {
          const { reference: e, size: t, intent: l, ...o } = this.props,
            s = n(a().input, -1 !== this.props.tabIndex && a().focus);
          return r.createElement(
            'div',
            { className: i(this.props) },
            r.createElement('input', {
              ...o,
              type: 'checkbox',
              className: s,
              ref: e,
            }),
            r.createElement(
              'div',
              { className: a().switcherThumbWrapper },
              r.createElement('div', { className: a().switcherTrack }),
              r.createElement('div', { className: a().switcherThumb }),
            ),
          );
        }
      }
      var p = l(74818),
        d = l(79948);
      const h = d;
      function u(e) {
        const {
            className: t,
            checked: l,
            id: n,
            label: s,
            labelDescription: a,
            value: i,
            preventLabelHighlight: h,
            reference: u,
            switchReference: m,
            theme: y = d,
            disabled: g,
          } = e,
          v = o()(y.label, l && !h && y.labelOn),
          b = o()(t, y.wrapper, l && y.wrapperWithOnLabel);
        return r.createElement(
          'label',
          { className: b, htmlFor: n, ref: u },
          r.createElement(
            'div',
            { className: y.labelRow },
            r.createElement('div', { className: v }, s),
            a && r.createElement('div', { className: y.labelHint }, a),
          ),
          r.createElement(c, {
            disabled: g,
            className: y.switch,
            reference: m,
            checked: l,
            onChange: function (t) {
              const l = t.target.checked;
              void 0 !== e.onChange && e.onChange(l);
            },
            value: i,
            tabIndex: -1,
            id: n,
            ...(0, p.filterDataProps)(e),
          }),
        );
      }
    },
    19442: (e, t, l) => {
      'use strict';
      l.r(t), l.d(t, { EditObjectDialogRenderer: () => Sl });
      var r = l(73935),
        n = l(67294),
        o = l(16282),
        s = l(79881),
        a = l(90963),
        i = l(79039),
        c = l(64222),
        p = l(27490),
        d = l(18437),
        h = l(87438),
        u = l(77658),
        m = l(58789),
        y = l(7591),
        g = l(79424),
        v = l(73991),
        b = l(17e3),
        C = l(1706),
        w = l(67945),
        S = l(54046),
        E = l(2442);
      class P extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._renderFooterLeft = (e) => {
              const { source: t, model: l } = this.props;
              if ((0, w.isLineTool)(t))
                return n.createElement(S.FooterMenu, { source: t, model: l });
              if ((0, b.isStudy)(t))
                return n.createElement(m.StudyDefaultsManager, {
                  model: l,
                  source: t,
                  mode: e ? 'compact' : 'normal',
                });
              throw new TypeError('Unsupported source type.');
            }),
            (this._handleSelect = (e) => {
              this.setState({ activeTabId: e }, () => {
                this._requestResize && this._requestResize();
              }),
                this.props.onActiveTabChanged &&
                  this.props.onActiveTabChanged(e);
            }),
            (this._handleScroll = () => {
              g.globalCloseDelegate.fire();
            }),
            (this._handleSubmit = () => {
              this.props.onSubmit(), this.props.onClose();
            });
          const { pages: t, initialActiveTab: l } = this.props;
          this.state = { activeTabId: t.allIds.includes(l) ? l : t.allIds[0] };
        }
        render() {
          const { title: e, onCancel: t, onClose: l } = this.props,
            { activeTabId: r } = this.state;
          return n.createElement(y.AdaptiveConfirmDialog, {
            dataName: 'indicator-properties-dialog',
            title: e,
            isOpened: !0,
            onSubmit: this._handleSubmit,
            onCancel: t,
            onClickOutside: l,
            onClose: l,
            footerLeftRenderer: this._renderFooterLeft,
            render: this._renderChildren(r),
            submitOnEnterKey: !1,
          });
        }
        _renderChildren(e) {
          return ({ requestResize: t }) => {
            this._requestResize = t;
            const { pages: l, source: r, model: o } = this.props,
              s = l.byId[e],
              a = 'Component' in s ? void 0 : s.page;
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(u.DialogTabs, {
                activeTabId: e,
                onSelect: this._handleSelect,
                tabs: l,
              }),
              n.createElement(
                v.TouchScrollContainer,
                { className: E.scrollable, onScroll: this._handleScroll },
                'Component' in s
                  ? n.createElement(s.Component, { source: r, model: o })
                  : n.createElement(C.PropertiesEditorTab, {
                      page: a,
                      tableKey: e,
                    }),
              ),
            );
          };
        }
      }
      var f = l(64512),
        _ = l(84254),
        T = l(76470);
      class x extends n.PureComponent {
        render() {
          const {
              input: e,
              value: t,
              onChange: l,
              onBlur: r,
              onKeyDown: o,
            } = this.props,
            a = e.options.reduce(
              (e, t) => ((e[t] = 'NONE' === t ? (0, s.t)('Default') : t), e),
              {},
            ),
            i = { ...e, optionsTitles: a };
          return n.createElement(T.SelectInputComponent, {
            input: i,
            value: t,
            onChange: l,
            onBlur: r,
            onKeyDown: o,
          });
        }
      }
      const k = (0, _.bind)(x);
      var I = l(13656),
        L = l(38754),
        R = l(22489),
        N = l(41497),
        M = l(35665),
        D = l(7202);
      l(95068);
      const V = n.createContext(null),
        B = (0, s.t)('{currency} per order'),
        z = (0, s.t)('{currency} per contract');
      class W extends n.PureComponent {
        render() {
          const { input: e } = this.props,
            t = (0, o.ensureNotNull)(this.context),
            l = {
              ...e,
              optionsTitles: {
                percent: '%',
                cash_per_order: B.format({ currency: t }),
                cash_per_contract: z.format({ currency: t }),
              },
            };
          return n.createElement(T.SelectInput, { input: l });
        }
      }
      W.contextType = V;
      const A = (0, s.t)('Contracts'),
        O = (0, s.t)('% of equity');
      class H extends n.PureComponent {
        render() {
          const { input: e } = this.props,
            t = (0, o.ensureNotNull)(this.context),
            l = {
              ...e,
              optionsTitles: {
                fixed: A,
                cash_per_order: t,
                percent_of_equity: O,
              },
            };
          return n.createElement(T.SelectInput, { input: l });
        }
      }
      H.contextType = V;
      var G = l(46941);
      class F extends n.PureComponent {
        render() {
          const { inputs: e } = this.props;
          return n.createElement(
            M.PropertyTable,
            null,
            n.createElement(
              L.InputRow,
              { label: (0, s.t)('Initial capital') },
              n.createElement(f.StudyInput, { input: e.initial_capital }),
              e.initial_capital.tooltip &&
                n.createElement(D.InputTooltip, {
                  className: G.singleInputTooltip,
                  title: (0, o.ensureDefined)(U(e.initial_capital.tooltip)),
                }),
            ),
            n.createElement(
              L.InputRow,
              { label: (0, s.t)('Base currency') },
              n.createElement(k, { input: e.currency }),
              e.currency.tooltip &&
                n.createElement(D.InputTooltip, {
                  className: G.singleInputTooltip,
                  title: (0, o.ensureDefined)(U(e.currency.tooltip)),
                }),
            ),
            n.createElement(
              L.InputRow,
              {
                label: (0, s.t)('Order size'),
                labelAlign: 'adaptive',
                tooltip: U(e.default_qty_type.tooltip),
              },
              n.createElement(
                R.InputGroup,
                { className: G.group },
                n.createElement(f.StudyInput, { input: e.default_qty_value }),
                n.createElement(H, { input: e.default_qty_type }),
              ),
            ),
            n.createElement(
              L.InputRow,
              {
                label: (0, s.t)('Pyramiding'),
                tooltip: U(e.pyramiding.tooltip),
              },
              n.createElement(
                'span',
                null,
                n.createElement(f.StudyInput, { input: e.pyramiding }),
              ),
              n.createElement(
                'span',
                { className: G.descriptionCell },
                (0, s.t)('orders', { context: 'Pyramiding: count orders' }),
              ),
            ),
            n.createElement(M.PropertyTable.Separator, null),
            n.createElement(
              L.InputRow,
              {
                label: (0, s.t)('Commission'),
                labelAlign: 'adaptive',
                tooltip: U(e.commission_type.tooltip),
              },
              n.createElement(
                R.InputGroup,
                { className: G.group },
                n.createElement(f.StudyInput, { input: e.commission_value }),
                n.createElement(W, { input: e.commission_type }),
              ),
            ),
            n.createElement(
              L.InputRow,
              {
                label: (0, s.t)('Verify price for limit orders'),
                tooltip: U(e.backtest_fill_limits_assumption.tooltip),
              },
              n.createElement(
                'span',
                null,
                n.createElement(f.StudyInput, {
                  input: e.backtest_fill_limits_assumption,
                }),
              ),
              n.createElement(
                'span',
                { className: G.descriptionCell },
                (0, s.t)('ticks', { context: 'slippage ... ticks' }),
              ),
            ),
            n.createElement(
              L.InputRow,
              { label: (0, s.t)('Slippage'), tooltip: U(e.slippage.tooltip) },
              n.createElement(
                'span',
                null,
                n.createElement(f.StudyInput, { input: e.slippage }),
              ),
              n.createElement(
                'span',
                { className: G.descriptionCell },
                (0, s.t)('ticks', { context: 'slippage ... ticks' }),
              ),
            ),
            n.createElement(M.PropertyTable.Separator, null),
            e.margin_long &&
              e.margin_short &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  L.InputRow,
                  {
                    label: (0, s.t)('Margin for long positions'),
                    tooltip: U(e.margin_long.tooltip),
                  },
                  n.createElement(
                    'span',
                    null,
                    n.createElement(f.StudyInput, { input: e.margin_long }),
                  ),
                  n.createElement(
                    'span',
                    { className: G.descriptionCell },
                    '%',
                  ),
                ),
                n.createElement(
                  L.InputRow,
                  {
                    label: (0, s.t)('Margin for short positions'),
                    tooltip: U(e.margin_short.tooltip),
                  },
                  n.createElement(
                    'span',
                    null,
                    n.createElement(f.StudyInput, { input: e.margin_short }),
                  ),
                  n.createElement(
                    'span',
                    { className: G.descriptionCell },
                    '%',
                  ),
                ),
                n.createElement(M.PropertyTable.Separator, null),
              ),
            n.createElement(
              L.InputRow,
              { label: (0, s.t)('Recalculate'), labelAlign: 'top' },
              n.createElement(
                'div',
                null,
                n.createElement(
                  'div',
                  { className: G.recalculateCheckbox },
                  n.createElement(I.BoolInput, {
                    label: (0, s.t)('After order is filled'),
                    input: e.calc_on_order_fills,
                  }),
                  e.calc_on_order_fills.tooltip &&
                    n.createElement(D.InputTooltip, {
                      className: G.checkboxTooltip,
                      title: (0, o.ensureDefined)(
                        U(e.calc_on_order_fills.tooltip),
                      ),
                    }),
                ),
                n.createElement(
                  'div',
                  { className: G.recalculateCheckbox },
                  n.createElement(I.BoolInput, {
                    label: (0, s.t)('On every tick'),
                    input: e.calc_on_every_tick,
                  }),
                  e.calc_on_every_tick.tooltip &&
                    n.createElement(D.InputTooltip, {
                      className: G.checkboxTooltip,
                      title: (0, o.ensureDefined)(
                        U(e.calc_on_every_tick.tooltip),
                      ),
                    }),
                ),
              ),
            ),
          );
        }
      }
      function U(e) {
        return e ? (0, s.t)(e) : e;
      }
      function Z(e) {
        const { property: t, model: l, inputs: r, study: o } = e;
        return n.createElement(
          N.PropertyContainer,
          { property: t.inputs, model: l, study: o },
          n.createElement(F, { inputs: r }),
        );
      }
      F.contextType = N.PropertyContext;
      var q = l(98824),
        K = l(65447);
      const j = (0, K.getLogger)(
        'Platform.GUI.PropertyDialog.Indicators.StrategyPage',
      );
      class J extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._handleWatchedDataChange = () => {
              this.setState({ currency: this._getCurrency() });
            });
          const { source: t } = this.props;
          if (((this._source = t), !(0, b.isStudy)(this._source)))
            throw new TypeError('Strategy page works only for study.');
          this._properties = t.properties();
          const l = t.metaInfo(),
            r = new q.MetaInfoHelper(l);
          (this._inputs = r.getStrategyProperties()),
            (this.state = { currency: this._getCurrency() });
        }
        componentDidMount() {
          this._source.watchedData.subscribe(this._handleWatchedDataChange);
        }
        componentWillUnmount() {
          this._source.watchedData.unsubscribe(this._handleWatchedDataChange);
        }
        render() {
          return n.createElement(
            V.Provider,
            { value: this.state.currency },
            n.createElement(Z, {
              inputs: this._inputs,
              property: this._properties,
              model: this.props.model,
              study: this.props.source,
            }),
          );
        }
        _getCurrency() {
          const e = this._source,
            t = e.reportData();
          if (null === t || void 0 === t.currency) {
            (void 0 !== this.state && null === this.state.currency) ||
              j.logWarn("Can't obtain currency from strategy report");
            const t = e
                .metaInfo()
                .inputs.find((e) => 'currency' === e.internalID),
              l = null == t ? void 0 : t.defval;
            if (l && 'NONE' !== l) return l.toString();
            const r = this.props.model.mainSeries().symbolInfo();
            return (
              (null == r ? void 0 : r.original_currency_code) ||
              (null == r ? void 0 : r.currency_code) ||
              null
            );
          }
          return t.currency;
        }
      }
      var Q = l(4093);
      class X extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._properties = this.props.source.properties()),
            (this._inputs = new q.MetaInfoHelper(
              this.props.source.metaInfo(),
            ).getUserEditableInputs());
        }
        render() {
          return n.createElement(Q.InputsTabContent, {
            property: this._properties,
            model: this.props.model,
            study: this.props.source,
            inputs: this._inputs,
          });
        }
      }
      var Y = l(41615),
        $ = l(77455),
        ee = l(85062),
        te = l.n(ee),
        le = l(91967),
        re = l(37763);
      const ne = new a.TranslatedString(
        'change visibility',
        (0, s.t)('change visibility'),
      );
      class oe extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const { setValue: t } = this.context,
                { visible: l } = this.props;
              l && (0, re.setPropertyValue)(l, (l) => t(l, e, ne));
            });
        }
        render() {
          const { id: e, title: t, visible: l, disabled: r } = this.props,
            o = (0, i.clean)((0, s.t)(t, { context: 'input' }), !0);
          return n.createElement(I.BoolInputComponent, {
            label: o,
            disabled: r,
            input: { id: e, type: 'bool', defval: !0, name: 'visible' },
            value: !l || (0, re.getPropertyValue)(l),
            onChange: this._onChange,
          });
        }
      }
      oe.contextType = le.StylePropertyContext;
      var se = l(10869),
        ae = l(84264),
        ie = l(93265),
        ce = l(13624),
        pe = l(73642),
        de = l(35720),
        he = l(99600),
        ue = l(90980),
        me = l(61830),
        ye = l(37319),
        ge = l(65052),
        ve = l(69627),
        be = l(89447);
      const Ce = {
          [$.LineStudyPlotStyle.Line]: {
            type: $.LineStudyPlotStyle.Line,
            order: 0,
            icon: ce,
            label: (0, s.t)('Line'),
          },
          [$.LineStudyPlotStyle.LineWithBreaks]: {
            type: $.LineStudyPlotStyle.LineWithBreaks,
            order: 1,
            icon: pe,
            label: (0, s.t)('Line with breaks'),
          },
          [$.LineStudyPlotStyle.StepLine]: {
            type: $.LineStudyPlotStyle.StepLine,
            order: 2,
            icon: de,
            label: (0, s.t)('Step line'),
          },
          [$.LineStudyPlotStyle.StepLineWithDiamonds]: {
            type: $.LineStudyPlotStyle.StepLineWithDiamonds,
            order: 3,
            icon: he,
            label: (0, s.t)('Step line with diamonds'),
          },
          [$.LineStudyPlotStyle.Histogram]: {
            type: $.LineStudyPlotStyle.Histogram,
            order: 4,
            icon: ue,
            label: (0, s.t)('Histogram'),
          },
          [$.LineStudyPlotStyle.Cross]: {
            type: $.LineStudyPlotStyle.Cross,
            order: 5,
            icon: me,
            label: (0, s.t)('Cross', { context: 'chart_type' }),
          },
          [$.LineStudyPlotStyle.Area]: {
            type: $.LineStudyPlotStyle.Area,
            order: 6,
            icon: ye,
            label: (0, s.t)('Area'),
          },
          [$.LineStudyPlotStyle.AreaWithBreaks]: {
            type: $.LineStudyPlotStyle.AreaWithBreaks,
            order: 7,
            icon: ge,
            label: (0, s.t)('Area with breaks'),
          },
          [$.LineStudyPlotStyle.Columns]: {
            type: $.LineStudyPlotStyle.Columns,
            order: 8,
            icon: ve,
            label: (0, s.t)('Columns'),
          },
          [$.LineStudyPlotStyle.Circles]: {
            type: $.LineStudyPlotStyle.Circles,
            order: 9,
            icon: be,
            label: (0, s.t)('Circles'),
          },
        },
        we = Object.values(Ce)
          .sort((e, t) => e.order - t.order)
          .map((e) => ({
            value: e.type,
            selectedContent: n.createElement(ie.DisplayItem, { icon: e.icon }),
            content: n.createElement(ie.DropItem, {
              icon: e.icon,
              label: e.label,
            }),
          })),
        Se = (0, s.t)('Price line');
      class Ee extends n.PureComponent {
        render() {
          const {
            id: e,
            plotType: t,
            className: l,
            priceLine: r,
            plotTypeChange: o,
            priceLineChange: s,
            disabled: a,
          } = this.props;
          if (!(t in Ce)) return null;
          const i = {
            readonly: !0,
            content: n.createElement(
              n.Fragment,
              null,
              n.createElement(ae.MenuItemSwitcher, {
                id: 'PlotTypePriceLineSwitch',
                checked: r,
                label: Se,
                preventLabelHighlight: !0,
                value: 'priceLineSwitcher',
                onChange: s,
              }),
              n.createElement(se.PopupMenuSeparator, null),
            ),
          };
          return n.createElement(ie.IconDropdown, {
            id: e,
            disabled: a,
            className: l,
            hideArrowButton: !0,
            items: [i, ...we],
            value: t,
            onChange: o,
          });
        }
      }
      var Pe = l(78736),
        fe = l(28687);
      const _e = new a.TranslatedString(
          'change plot type',
          (0, s.t)('change plot type'),
        ),
        Te = new a.TranslatedString(
          'change price line visibility',
          (0, s.t)('change price line visibility'),
        );
      class xe extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onPlotTypeChange = (e) => {
              const { setValue: t } = this.context,
                {
                  styleProp: { plottype: l },
                } = this.props;
              l && t(l, e, _e);
            }),
            (this._onPriceLineChange = (e) => {
              const { setValue: t } = this.context,
                {
                  styleProp: { trackPrice: l },
                } = this.props;
              l && t(l, e, Te);
            });
        }
        render() {
          const {
              id: e,
              paletteColor: t,
              paletteColorProps: l,
              styleProp: r,
              isLine: o,
              hasPlotTypeSelect: a,
              grouped: i,
              offset: c,
            } = this.props,
            p = l.childs();
          return n.createElement(
            L.InputRow,
            {
              grouped: i,
              label: n.createElement(
                'div',
                { className: fe.childRowContainer },
                (0, s.t)(t.name, { context: 'input' }),
              ),
              offset: c,
            },
            n.createElement(Pe.ColorWithThicknessSelect, {
              disabled: !r.visible.value(),
              color: p.color,
              transparency: r.transparency,
              thickness: o ? p.width : void 0,
              isPaletteColor: !0,
            }),
            o && a && r.plottype && r.trackPrice
              ? n.createElement(Ee, {
                  id: (0, Y.createDomId)(e, 'plot-type-select'),
                  disabled: !r.visible.value(),
                  className: fe.smallStyleControl,
                  plotType: r.plottype.value(),
                  priceLine: r.trackPrice.value(),
                  plotTypeChange: this._onPlotTypeChange,
                  priceLineChange: this._onPriceLineChange,
                })
              : null,
          );
        }
      }
      xe.contextType = le.StylePropertyContext;
      class ke extends n.PureComponent {
        render() {
          const {
              plot: e,
              area: t,
              palette: l,
              paletteProps: r,
              hideVisibilitySwitch: s,
              styleProp: a,
              showOnlyTitle: i,
              showSeparator: c = !0,
              offset: p,
            } = this.props,
            d = e ? e.id : (0, o.ensureDefined)(t).id,
            h = !d.startsWith('fill') && e && (0, $.isLinePlot)(e);
          return n.createElement(
            n.Fragment,
            null,
            !s &&
              n.createElement(
                M.PropertyTable.Row,
                null,
                n.createElement(
                  M.PropertyTable.Cell,
                  { placement: 'first', colSpan: 2, offset: p },
                  i
                    ? n.createElement(
                        'div',
                        null,
                        t ? t.title : a.title.value(),
                      )
                    : n.createElement(oe, {
                        id: d,
                        title: t ? t.title : a.title.value(),
                        visible: a.visible,
                      }),
                ),
              ),
            (function (e, t, l, r, s, a) {
              const i = t.colors,
                c = l.colors;
              return Object.keys(i).map((t, l) =>
                n.createElement(xe, {
                  key: t,
                  id: e,
                  grouped: !0,
                  paletteColor: (0, o.ensureDefined)(i[t]),
                  paletteColorProps: (0, o.ensureDefined)(c[t]),
                  styleProp: r,
                  isLine: s,
                  hasPlotTypeSelect: 0 === l,
                  offset: a,
                }),
              );
            })(d, l, r, a, h, p),
            c && n.createElement(M.PropertyTable.GroupSeparator, null),
          );
        }
      }
      ke.contextType = le.StylePropertyContext;
      var Ie = l(98687);
      const Le = new a.TranslatedString(
          'change plot type',
          (0, s.t)('change plot type'),
        ),
        Re = new a.TranslatedString(
          'change price line visibility',
          (0, s.t)('change price line visibility'),
        );
      class Ne extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onPlotTypeChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { plottype: l },
                } = this.props;
              l && t(l, e, Le);
            }),
            (this._onPriceLineChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { trackPrice: l },
                } = this.props;
              l && t(l, e, Re);
            });
        }
        render() {
          const {
            id: e,
            isRGB: t,
            isFundamental: l,
            property: {
              title: r,
              color: o,
              plottype: s,
              linewidth: a,
              transparency: i,
              trackPrice: c,
              visible: p,
            },
          } = this.props;
          return n.createElement(
            L.InputRow,
            {
              label: n.createElement(oe, {
                id: e,
                title: r.value(),
                visible: p,
              }),
            },
            t && !l
              ? this._getInputForRgb()
              : n.createElement(Pe.ColorWithThicknessSelect, {
                  disabled: !p.value(),
                  color: o,
                  transparency: i,
                  thickness: a,
                }),
            n.createElement(Ee, {
              id: (0, Y.createDomId)(e, 'plot-type-select'),
              disabled: !p.value(),
              className: fe.smallStyleControl,
              plotType: s.value(),
              priceLine: c.value(),
              plotTypeChange: this._onPlotTypeChange,
              priceLineChange: this._onPriceLineChange,
            }),
          );
        }
        _getInputForRgb() {
          const { id: e, showLineWidth: t, property: l } = this.props,
            { linewidth: r, visible: o } = l;
          return r && t
            ? n.createElement(Ie.LineWidthSelect, {
                id: (0, Y.createDomId)(e, 'line-width-select'),
                property: r,
                disabled: !o.value(),
              })
            : null;
        }
      }
      Ne.contextType = le.StylePropertyContext;
      const Me = n.createContext(null);
      class De extends n.PureComponent {
        render() {
          const {
            id: e,
            isRGB: t,
            title: l,
            visible: r,
            color: o,
            transparency: s,
            thickness: a,
            children: i,
            switchable: c = !0,
            offset: p,
            grouped: d,
          } = this.props;
          return n.createElement(
            L.InputRow,
            {
              label: c
                ? n.createElement(oe, { id: e, title: l, visible: r })
                : l,
              offset: p,
              grouped: d,
            },
            t
              ? null
              : n.createElement(Pe.ColorWithThicknessSelect, {
                  disabled: r && !(Array.isArray(r) ? r[0].value() : r.value()),
                  color: o,
                  transparency: s,
                  thickness: a,
                }),
            i,
          );
        }
      }
      De.contextType = le.StylePropertyContext;
      class Ve extends n.PureComponent {
        render() {
          const {
            id: e,
            isRGB: t,
            property: { colorup: l, colordown: r, transparency: s, visible: a },
          } = this.props;
          return n.createElement(Me.Consumer, null, (i) =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                M.PropertyTable.Row,
                null,
                n.createElement(
                  M.PropertyTable.Cell,
                  { placement: 'first', colSpan: 2, grouped: !0 },
                  n.createElement(oe, {
                    id: e,
                    title: pt((0, o.ensureNotNull)(i), e),
                    visible: a,
                  }),
                ),
              ),
              !t &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(De, {
                    id: e,
                    title: nt,
                    color: l,
                    transparency: s,
                    visible: a,
                    switchable: !1,
                    offset: !0,
                    grouped: !0,
                  }),
                  n.createElement(De, {
                    id: e,
                    title: ot,
                    color: r,
                    transparency: s,
                    visible: a,
                    switchable: !1,
                    offset: !0,
                    grouped: !0,
                  }),
                ),
              n.createElement(M.PropertyTable.GroupSeparator, null),
            ),
          );
        }
      }
      Ve.contextType = le.StylePropertyContext;
      var Be = l(68277),
        ze = l.n(Be),
        We = l(94184),
        Ae = l(81829),
        Oe = l(45221),
        He = l(64417);
      const Ge = {
          [He.MarkLocation.AboveBar]: {
            value: He.MarkLocation.AboveBar,
            content: (0, s.t)('Above bar'),
            order: 0,
          },
          [He.MarkLocation.BelowBar]: {
            value: He.MarkLocation.BelowBar,
            content: (0, s.t)('Below bar'),
            order: 1,
          },
          [He.MarkLocation.Top]: {
            value: He.MarkLocation.Top,
            content: (0, s.t)('Top'),
            order: 2,
          },
          [He.MarkLocation.Bottom]: {
            value: He.MarkLocation.Bottom,
            content: (0, s.t)('Bottom'),
            order: 3,
          },
          [He.MarkLocation.Absolute]: {
            value: He.MarkLocation.Absolute,
            content: (0, s.t)('Absolute'),
            order: 4,
          },
        },
        Fe = Object.values(Ge).sort((e, t) => e.order - t.order);
      class Ue extends n.PureComponent {
        render() {
          const {
            id: e,
            shapeLocation: t,
            className: l,
            menuItemClassName: r,
            shapeLocationChange: o,
            disabled: s,
          } = this.props;
          return n.createElement(Oe.Select, {
            id: e,
            disabled: s,
            className: l,
            menuItemClassName: r,
            items: Fe,
            value: t,
            onChange: o,
          });
        }
      }
      const Ze = new a.TranslatedString('change char', (0, s.t)('change char')),
        qe = new a.TranslatedString(
          'change location',
          (0, s.t)('change location'),
        );
      class Ke extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onCharChange = (e) => {
              const { setValue: t } = this.context,
                l = e.currentTarget.value.trim(),
                r = ze()(l),
                n = 0 === r.length ? '' : r[r.length - 1],
                {
                  property: { char: o },
                } = this.props;
              t(o, n, Ze);
            }),
            (this._onLocationChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { location: l },
                } = this.props;
              t(l, e, qe);
            });
        }
        render() {
          const {
            id: e,
            isRGB: t,
            property: {
              title: l,
              color: r,
              transparency: o,
              char: s,
              location: a,
              visible: i,
            },
            hasPalette: c,
          } = this.props;
          return n.createElement(
            L.InputRow,
            {
              grouped: c,
              label: n.createElement(oe, {
                id: e,
                title: l.value(),
                visible: i,
              }),
            },
            !c &&
              !t &&
              n.createElement(Pe.ColorWithThicknessSelect, {
                disabled: !i.value(),
                color: r,
                transparency: o,
              }),
            n.createElement(Ae.InputControl, {
              disabled: !i.value(),
              className: fe.smallStyleControl,
              value: s.value(),
              onChange: this._onCharChange,
            }),
            n.createElement(Ue, {
              id: (0, Y.createDomId)(e, 'shape-style-select'),
              disabled: !i.value(),
              className: We(fe.defaultSelect, fe.additionalSelect),
              menuItemClassName: fe.defaultSelectItem,
              shapeLocation: a.value(),
              shapeLocationChange: this._onLocationChange,
            }),
          );
        }
      }
      Ke.contextType = le.StylePropertyContext;
      var je = l(13618);
      const Je = {
        arrow_down: l(87736),
        arrow_up: l(41723),
        circle: l(62450),
        cross: l(72720),
        diamond: l(76702),
        flag: l(21437),
        label_down: l(54908),
        label_up: l(52213),
        square: l(66935),
        triangle_down: l(10838),
        triangle_up: l(89991),
        x_cross: l(12688),
      };
      function Qe(e) {
        return Je[e];
      }
      const Xe = [];
      Object.keys(je.plotShapesData).forEach((e) => {
        const t = je.plotShapesData[e];
        Xe.push({
          id: t.id,
          value: t.id,
          selectedContent: n.createElement(ie.DisplayItem, {
            icon: Qe(t.icon),
          }),
          content: n.createElement(ie.DropItem, {
            icon: Qe(t.icon),
            label: t.guiName,
          }),
        });
      });
      class Ye extends n.PureComponent {
        render() {
          const {
            id: e,
            shapeStyleId: t,
            className: l,
            shapeStyleChange: r,
            disabled: o,
          } = this.props;
          return n.createElement(ie.IconDropdown, {
            id: e,
            disabled: o,
            className: l,
            hideArrowButton: !0,
            items: Xe,
            value: t,
            onChange: r,
          });
        }
      }
      const $e = new a.TranslatedString(
          'change shape',
          (0, s.t)('change shape'),
        ),
        et = new a.TranslatedString(
          'change location',
          (0, s.t)('change location'),
        );
      class tt extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onPlotTypeChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { plottype: l },
                } = this.props;
              t(l, e, $e);
            }),
            (this._onLocationChange = (e) => {
              const { setValue: t } = this.context,
                {
                  property: { location: l },
                } = this.props;
              t(l, e, et);
            });
        }
        render() {
          const {
            id: e,
            isRGB: t,
            hasPalette: l,
            property: {
              title: r,
              color: o,
              transparency: s,
              plottype: a,
              location: i,
              visible: c,
            },
          } = this.props;
          return n.createElement(
            L.InputRow,
            {
              grouped: l,
              label: n.createElement(oe, {
                id: e,
                title: r.value(),
                visible: c,
              }),
            },
            !l &&
              !t &&
              n.createElement(Pe.ColorWithThicknessSelect, {
                disabled: !c.value(),
                color: o,
                transparency: s,
              }),
            n.createElement(Ye, {
              id: (0, Y.createDomId)(e, 'shape-style-select'),
              disabled: !c.value(),
              className: fe.smallStyleControl,
              shapeStyleId: a.value(),
              shapeStyleChange: this._onPlotTypeChange,
            }),
            n.createElement(Ue, {
              id: (0, Y.createDomId)(e, 'shape-location-select'),
              disabled: !c.value(),
              className: We(fe.defaultSelect, fe.additionalSelect),
              menuItemClassName: fe.defaultSelectItem,
              shapeLocation: i.value(),
              shapeLocationChange: this._onLocationChange,
            }),
          );
        }
      }
      tt.contextType = le.StylePropertyContext;
      var lt = l(68137);
      const rt = (0, K.getLogger)('Chart.Study.PropertyPage'),
        nt = (0, s.t)('Up'),
        ot = (0, s.t)('Down'),
        st = (0, s.t)('Body'),
        at = (0, s.t)('Wick'),
        it = (0, s.t)('Border');
      class ct extends n.PureComponent {
        render() {
          const { plot: e, palettes: t, study: l } = this.props,
            r = e.id,
            o = l.properties().styles[r],
            s = e.type,
            a = t.main,
            i = !!l.metaInfo().isRGB;
          if ('line' === s || 'bar_colorer' === s || 'bg_colorer' === s)
            return a && a.palette && a.paletteProps
              ? n.createElement(ke, {
                  plot: e,
                  palette: a.palette,
                  paletteProps: a.paletteProps,
                  styleProp: o,
                })
              : n.createElement(Ne, {
                  id: r,
                  property: o,
                  isRGB: i,
                  isFundamental: !1,
                  showLineWidth: 'line' === s,
                });
          if ('arrows' === s) {
            const s = this._getPlotSwitch(r, pt(l, r), o.visible);
            if (i) return s;
            const a = t.up,
              c = t.down;
            return a || c
              ? n.createElement(
                  n.Fragment,
                  null,
                  s,
                  a && a.palette && a.paletteProps
                    ? n.createElement(ke, {
                        plot: e,
                        palette: a.palette,
                        paletteProps: a.paletteProps,
                        styleProp: {
                          ...o,
                          title: (0, lt.createPrimitiveProperty)(nt),
                        },
                        showSeparator: !1,
                        showOnlyTitle: !0,
                        offset: !0,
                      })
                    : n.createElement(De, {
                        id: r,
                        isRGB: i,
                        title: nt,
                        color: o.colorup,
                        visible: o.visible,
                        transparency: o.transparency,
                        switchable: !1,
                        grouped: !0,
                        offset: !0,
                      }),
                  c && c.palette && c.paletteProps
                    ? n.createElement(ke, {
                        plot: e,
                        palette: c.palette,
                        paletteProps: c.paletteProps,
                        styleProp: {
                          ...o,
                          title: (0, lt.createPrimitiveProperty)(ot),
                        },
                        showSeparator: !1,
                        showOnlyTitle: !0,
                        offset: !0,
                      })
                    : n.createElement(De, {
                        id: r,
                        isRGB: i,
                        title: ot,
                        color: o.colordown,
                        visible: o.visible,
                        transparency: o.transparency,
                        switchable: !1,
                        grouped: !0,
                        offset: !0,
                      }),
                  n.createElement(M.PropertyTable.GroupSeparator, null),
                )
              : n.createElement(Ve, {
                  id: r,
                  property: o,
                  isRGB: i,
                  plot: e,
                  palettes: t,
                  styleProp: o,
                });
          }
          if ('chars' === s || 'shapes' === s)
            return n.createElement(
              n.Fragment,
              null,
              'chars' === s
                ? n.createElement(Ke, {
                    id: r,
                    property: o,
                    hasPalette: Boolean(a && a.palette),
                    isRGB: i,
                  })
                : n.createElement(tt, {
                    id: r,
                    property: o,
                    hasPalette: Boolean(a && a.palette),
                    isRGB: i,
                  }),
              a &&
                a.palette &&
                a.paletteProps &&
                n.createElement(ke, {
                  plot: e,
                  palette: a.palette,
                  paletteProps: a.paletteProps,
                  hideVisibilitySwitch: !0,
                  styleProp: o,
                }),
            );
          if ((0, $.isOhlcPlot)(e)) {
            const o = e.target,
              s = l.properties().ohlcPlots[o],
              c = this._getPlotSwitch(r, s.title.value(), s.visible);
            if (i) return c;
            const p = t.wick && t.wick.palette && t.wick.paletteProps,
              d = t.border && t.border.palette && t.border.paletteProps;
            return n.createElement(
              n.Fragment,
              null,
              c,
              a && a.palette && a.paletteProps
                ? n.createElement(ke, {
                    plot: e,
                    palette: a.palette,
                    paletteProps: a.paletteProps,
                    styleProp: {
                      ...s,
                      title: (0, lt.createPrimitiveProperty)(st),
                    },
                    showSeparator: !1,
                    showOnlyTitle: !0,
                    offset: !0,
                  })
                : n.createElement(De, {
                    id: r,
                    isRGB: i,
                    title: st,
                    visible: s.visible,
                    color: s.color,
                    transparency: s.transparency,
                    switchable: !1,
                    grouped: !0,
                    offset: !0,
                  }),
              t.wick &&
                t.wick.palette &&
                t.wick.paletteProps &&
                n.createElement(ke, {
                  plot: e,
                  palette: t.wick.palette,
                  paletteProps: t.wick.paletteProps,
                  styleProp: {
                    ...s,
                    title: (0, lt.createPrimitiveProperty)(at),
                  },
                  showSeparator: !1,
                  showOnlyTitle: !0,
                  offset: !0,
                }),
              Boolean(!p && s.wickColor) &&
                n.createElement(De, {
                  id: r,
                  isRGB: i,
                  title: at,
                  visible: s.visible,
                  color: s.wickColor,
                  transparency: s.transparency,
                  switchable: !1,
                  grouped: !0,
                  offset: !0,
                }),
              t.border &&
                t.border.palette &&
                t.border.paletteProps &&
                n.createElement(ke, {
                  plot: e,
                  palette: t.border.palette,
                  paletteProps: t.border.paletteProps,
                  styleProp: {
                    ...s,
                    title: (0, lt.createPrimitiveProperty)(it),
                  },
                  showSeparator: !1,
                  showOnlyTitle: !0,
                  offset: !0,
                }),
              Boolean(!d && s.borderColor) &&
                n.createElement(De, {
                  id: r,
                  isRGB: i,
                  title: it,
                  visible: s.visible,
                  color: s.borderColor,
                  transparency: s.transparency,
                  switchable: !1,
                  grouped: !0,
                  offset: !0,
                }),
              n.createElement(M.PropertyTable.GroupSeparator, null),
            );
          }
          return rt.logError('Unknown plot type: ' + s), null;
        }
        _getPlotSwitch(e, t, l) {
          return n.createElement(
            M.PropertyTable.Row,
            null,
            n.createElement(
              M.PropertyTable.Cell,
              { placement: 'first', colSpan: 2 },
              n.createElement(oe, { id: e, title: t, visible: l }),
            ),
          );
        }
      }
      function pt(e, t) {
        const l = (0, o.ensureDefined)(e.metaInfo().styles),
          { title: r } = (0, o.ensureDefined)(l[t]);
        return (0, o.ensureDefined)(r);
      }
      var dt = l(93425),
        ht = l(13278);
      const ut = new a.TranslatedString(
        'change line style',
        (0, s.t)('change line style'),
      );
      class mt extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onLineStyleChange = (e) => {
              const { setValue: t } = this.context,
                { lineStyle: l } = this.props;
              (0, re.setPropertyValue)(l, (l) => t(l, e, ut));
            });
        }
        render() {
          const { lineStyle: e, ...t } = this.props;
          return n.createElement(ht.LineStyleSelect, {
            ...t,
            lineStyle: (0, re.getPropertyValue)(e),
            lineStyleChange: this._onLineStyleChange,
          });
        }
      }
      mt.contextType = le.StylePropertyContext;
      const yt = new a.TranslatedString(
        'change value',
        (0, s.t)('change value'),
      );
      class gt extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onValueChange = (e) => {
              const { setValue: t } = this.context,
                { value: l } = this.props.property;
              t(l, e, yt);
            });
        }
        render() {
          const {
            id: e,
            property: {
              name: t,
              color: l,
              linestyle: r,
              linewidth: o,
              transparency: s,
              value: a,
              visible: i,
            },
          } = this.props;
          return n.createElement(
            L.InputRow,
            {
              labelAlign: 'adaptive',
              label: n.createElement(oe, {
                id: e,
                title: t.value(),
                visible: i,
              }),
            },
            n.createElement(
              'div',
              { className: fe.block },
              n.createElement(
                'div',
                { className: fe.group },
                n.createElement(Pe.ColorWithThicknessSelect, {
                  disabled: !i.value(),
                  color: l,
                  transparency: s,
                  thickness: o,
                }),
                n.createElement(mt, {
                  id: (0, Y.createDomId)(e, 'line-style-select'),
                  disabled: !i.value(),
                  className: fe.smallStyleControl,
                  lineStyle: r,
                }),
              ),
              n.createElement(
                'div',
                {
                  className: We(
                    fe.wrapGroup,
                    fe.defaultSelect,
                    fe.additionalSelect,
                  ),
                },
                n.createElement(dt.FloatInputComponent, {
                  input: { id: '', name: '', type: 'float', defval: 0 },
                  value: a.value(),
                  disabled: !i.value(),
                  onChange: this._onValueChange,
                }),
              ),
            ),
          );
        }
      }
      gt.contextType = le.StylePropertyContext;
      class vt extends n.PureComponent {
        render() {
          const {
            orders: { visible: e, showLabels: t, showQty: l },
          } = this.props;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'first', colSpan: 2 },
                n.createElement(oe, {
                  id: 'chart-orders-switch',
                  title: (0, s.t)('Trades on chart'),
                  visible: e,
                }),
              ),
            ),
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'first', colSpan: 2 },
                n.createElement(oe, {
                  id: 'chart-orders-labels-switch',
                  title: (0, s.t)('Signal labels'),
                  visible: t,
                }),
              ),
            ),
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'first', colSpan: 2 },
                n.createElement(oe, {
                  id: 'chart-orders-qty-switch',
                  title: (0, s.t)('Quantity'),
                  visible: l,
                }),
              ),
            ),
          );
        }
      }
      vt.contextType = le.StylePropertyContext;
      var bt = l(31505),
        Ct = l(82823);
      const wt = new a.TranslatedString(
          'change percent width',
          (0, s.t)('change percent width'),
        ),
        St = new a.TranslatedString(
          'change placement',
          (0, s.t)('change placement'),
        ),
        Et = new a.TranslatedString(
          'change values visibility',
          (0, s.t)('change values visibility'),
        ),
        Pt = [
          { value: bt.HHistDirection.LeftToRight, content: (0, s.t)('Left') },
          { value: bt.HHistDirection.RightToLeft, content: (0, s.t)('Right') },
        ],
        ft = (0, s.t)('Width (% of the box)'),
        _t = (0, s.t)('Placement'),
        Tt = (0, s.t)('Values'),
        xt = (0, s.t)('Text color');
      class kt extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onPercentWidthChange = (e) => {
              const { setValue: t } = this.context,
                { percentWidth: l } = this.props.property.childs();
              t(l, e, wt);
            }),
            (this._onPlacementChange = (e) => {
              const { setValue: t } = this.context,
                { direction: l } = this.props.property.childs();
              t(l, e, St);
            }),
            (this._onShowValuesChange = (e) => {
              const { setValue: t } = this.context,
                { showValues: l } = this.props.property.childs();
              t(l, e, Et);
            });
        }
        render() {
          const {
            title: e,
            percentWidth: t,
            direction: l,
            showValues: r,
            valuesColor: o,
            visible: s,
          } = this.props.property.childs();
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'first', colSpan: 2, grouped: !0 },
                n.createElement(oe, {
                  id: e.value(),
                  title: e.value(),
                  visible: s,
                }),
              ),
            ),
            n.createElement(
              L.InputRow,
              {
                label: n.createElement(
                  'div',
                  { className: fe.childRowContainer },
                  ft,
                ),
                grouped: !0,
              },
              n.createElement(Ct.IntegerInputComponent, {
                input: { id: '', name: '', type: 'integer', defval: 0 },
                value: t.value(),
                disabled: !s.value(),
                onChange: this._onPercentWidthChange,
              }),
            ),
            n.createElement(
              L.InputRow,
              {
                label: n.createElement(
                  'div',
                  { className: fe.childRowContainer },
                  _t,
                ),
                grouped: !0,
              },
              n.createElement(Oe.Select, {
                id: 'hhist-graphic-placement-select',
                disabled: !s.value(),
                className: fe.defaultSelect,
                menuItemClassName: fe.defaultSelectItem,
                items: Pt,
                value: l.value(),
                onChange: this._onPlacementChange,
              }),
            ),
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                {
                  className: fe.childRowContainer,
                  placement: 'first',
                  colSpan: 2,
                  grouped: !0,
                },
                n.createElement(I.BoolInputComponent, {
                  label: Tt,
                  input: {
                    id: e.value() + '_showValues',
                    type: 'bool',
                    defval: !0,
                    name: 'visible',
                  },
                  value: !r || r.value(),
                  disabled: !s.value(),
                  onChange: this._onShowValuesChange,
                }),
              ),
            ),
            n.createElement(
              L.InputRow,
              {
                label: n.createElement(
                  'div',
                  { className: fe.childRowContainer },
                  xt,
                ),
                grouped: !0,
              },
              n.createElement(Pe.ColorWithThicknessSelect, {
                disabled: s && !s.value(),
                color: o,
              }),
            ),
            this._renderColors(),
            n.createElement(M.PropertyTable.GroupSeparator, null),
          );
        }
        _renderColors() {
          const {
            colors: e,
            titles: t,
            transparencies: l,
            visible: r,
          } = this.props.property.childs();
          return e
            .childNames()
            .map((o) =>
              n.createElement(
                L.InputRow,
                {
                  key: o,
                  grouped: !0,
                  label: n.createElement(
                    'div',
                    { className: fe.childRowContainer },
                    t.childs()[o].value(),
                  ),
                },
                n.createElement(Pe.ColorWithThicknessSelect, {
                  disabled: !r.value(),
                  color: e.childs()[o],
                  transparency: l.childs()[o],
                }),
              ),
            );
        }
      }
      kt.contextType = le.StylePropertyContext;
      class It extends n.PureComponent {
        render() {
          const { title: e } = this.props,
            {
              color: t,
              transparency: l,
              width: r,
              style: o,
              visible: s,
            } = this.props.property.childs();
          return n.createElement(
            L.InputRow,
            {
              label: n.createElement(oe, {
                id: e.value(),
                title: e.value(),
                visible: s,
              }),
            },
            n.createElement(Pe.ColorWithThicknessSelect, {
              disabled: !s.value(),
              color: t,
              transparency: l,
              thickness: r,
            }),
            n.createElement(mt, {
              id: (0, Y.createDomId)(e.value(), 'line-style-select'),
              disabled: !s.value(),
              className: fe.smallStyleControl,
              lineStyle: o,
            }),
          );
        }
      }
      It.contextType = le.StylePropertyContext;
      class Lt extends n.PureComponent {
        render() {
          const { graphicType: e, study: t } = this.props,
            l = t.metaInfo().graphics,
            r = t.properties().graphics,
            s = (0, o.ensureDefined)(l[e]);
          return Object.keys(s).map((t, l) => {
            const o = r[e][t];
            return 'horizlines' === e || 'vertlines' === e || 'lines' === e
              ? n.createElement(It, {
                  key: t,
                  title: 'lines' === e ? o.title : o.name,
                  property: o,
                })
              : 'hhists' === e
              ? n.createElement(kt, { key: t, property: o })
              : null;
          });
        }
      }
      var Rt = l(3220);
      const Nt = new a.TranslatedString(
          'change font size',
          (0, s.t)('change font size'),
        ),
        Mt = [10, 11, 12, 14, 16, 20, 24, 28, 32, 40].map((e) => ({
          value: e,
          title: e.toString(),
        }));
      class Dt extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onFontSizeChange = (e) => {
              const { setValue: t } = this.context,
                { fontSize: l } = this.props;
              t(l, e, Nt);
            });
        }
        render() {
          const { fontSize: e, ...t } = this.props;
          return n.createElement(Rt.FontSizeSelect, {
            ...t,
            fontSizes: Mt,
            fontSize: e.value(),
            fontSizeChange: this._onFontSizeChange,
          });
        }
      }
      Dt.contextType = le.StylePropertyContext;
      const Vt = new a.TranslatedString(
          'change visibility',
          (0, s.t)('change visibility'),
        ),
        Bt = (0, s.t)('Labels font'),
        zt = (0, s.t)('Labels'),
        Wt = {
          Traditional: new Set([
            'S5/R5',
            'S4/R4',
            'S3/R3',
            'S2/R2',
            'S1/R1',
            'P',
          ]),
          Fibonacci: new Set(['S3/R3', 'S2/R2', 'S1/R1', 'P']),
          Woodie: new Set(['S4/R4', 'S3/R3', 'S2/R2', 'S1/R1', 'P']),
          Classic: new Set(['S4/R4', 'S3/R3', 'S2/R2', 'S1/R1', 'P']),
          DM: new Set(['S1/R1', 'P']),
          DeMark: new Set(['S1/R1', 'P']),
          Camarilla: new Set(['S4/R4', 'S3/R3', 'S2/R2', 'S1/R1', 'P']),
        };
      class At extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const { setValue: t } = this.context,
                { levelsStyle: l } = this.props.property.childs(),
                { showLabels: r } = l.childs();
              t(r, e, Vt);
            });
        }
        render() {
          const { fontsize: e, levelsStyle: t } = this.props.property.childs();
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              L.InputRow,
              {
                labelAlign: 'adaptive',
                label: n.createElement('span', null, Bt),
              },
              n.createElement(
                'div',
                { className: fe.block },
                n.createElement(
                  'div',
                  { className: We(fe.wrapGroup, fe.additionalSelect) },
                  n.createElement(Dt, {
                    id: 'pivot-points-standard-font-size-select',
                    fontSize: e,
                  }),
                ),
              ),
            ),
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'first', colSpan: 2 },
                n.createElement(I.BoolInputComponent, {
                  label: zt,
                  input: {
                    id: 'ShowLabels',
                    type: 'bool',
                    defval: !0,
                    name: 'visible',
                  },
                  value: t.childs().showLabels.value(),
                  onChange: this._onChange,
                }),
              ),
            ),
            this._renderColors(),
          );
        }
        _renderColors() {
          const { levelsStyle: e, inputs: t } = this.props.property.childs(),
            { colors: l, widths: r, visibility: s } = e.childs(),
            { kind: a } = t.childs(),
            i = (0, o.ensureDefined)(Wt[a.value()]);
          return l
            .childNames()
            .filter((e) => i.has(e))
            .map((e) =>
              n.createElement(De, {
                key: e,
                id: e,
                title: e,
                color: l.childs()[e],
                visible: s.childs()[e],
                thickness: r.childs()[e],
              }),
            );
        }
      }
      At.contextType = le.StylePropertyContext;
      const Ot = new a.TranslatedString(
          'change visibility',
          (0, s.t)('change visibility'),
        ),
        Ht = (0, s.t)('Volume profile'),
        Gt = (0, s.t)('Values'),
        Ft = (0, s.t)('Width (% of the box)'),
        Ut = (0, s.t)('Placement'),
        Zt = (0, s.t)('Developing VA'),
        qt = (0, s.t)('Values in status line'),
        Kt = (0, s.t)('Labels on price scale'),
        jt = [
          { value: bt.HHistDirection.RightToLeft, content: (0, s.t)('Right') },
          { value: bt.HHistDirection.LeftToRight, content: (0, s.t)('Left') },
        ];
      class Jt extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              this._setHhistsProperty('visible', e);
            }),
            (this._onShowValuesChange = (e) => {
              this._setHhistsProperty('showValues', e);
            }),
            (this._onValueChange = (e) => {
              this._setHhistsProperty('percentWidth', e);
            }),
            (this._onDirectionChange = (e) => {
              this._setHhistsProperty('direction', e);
            });
        }
        render() {
          var e, t;
          const { metaInfo: l } = this.props,
            {
              graphics: r,
              styles: a,
              showLabelsOnPriceScale: i,
              showLegendValues: c,
            } = this.props.property.childs(),
            { hhists: p, horizlines: d, polygons: h } = r.childs(),
            u = (0, o.ensureDefined)(l.graphics.hhists),
            m = Object.keys(u),
            y = p.childs()[m[0]],
            g = y.childs().visible,
            v = m.map((e) => p.childs()[e].childs().showValues),
            b = y.childs().percentWidth,
            C = y.childs().direction,
            w = m.map((e) => p.childs()[e].childs().valuesColor),
            S = d.childs().pocLines,
            E = (0, o.ensureDefined)(
              null === (e = l.graphics.horizlines) || void 0 === e
                ? void 0
                : e.pocLines,
            ),
            P = a.childs().developingPoc,
            f = (0, o.ensureDefined)(
              null === (t = l.styles) || void 0 === t
                ? void 0
                : t.developingPoc,
            ),
            _ = a.childs().developingVAHigh,
            T = a.childs().developingVALow,
            x = l.graphics.polygons && l.graphics.polygons.histBoxBg;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'first', colSpan: 2 },
                n.createElement(I.BoolInputComponent, {
                  label: Ht,
                  input: {
                    id: 'VolumeProfile',
                    type: 'bool',
                    defval: !0,
                    name: 'visible',
                  },
                  value: g.value(),
                  onChange: this._onChange,
                }),
              ),
            ),
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'first' },
                n.createElement(
                  'div',
                  { className: fe.childRowContainer },
                  n.createElement(I.BoolInputComponent, {
                    disabled: !g.value(),
                    label: Gt,
                    input: {
                      id: 'ShowValues',
                      type: 'bool',
                      defval: !0,
                      name: 'visible',
                    },
                    value: v[0].value(),
                    onChange: this._onShowValuesChange,
                  }),
                ),
              ),
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'last' },
                n.createElement(Pe.ColorWithThicknessSelect, {
                  disabled: !g.value() || !v[0].value(),
                  color: w,
                }),
              ),
            ),
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'first' },
                n.createElement('div', { className: fe.childRowContainer }, Ft),
              ),
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'last' },
                n.createElement(Ct.IntegerInputComponent, {
                  disabled: !g.value(),
                  input: { id: '', name: '', type: 'integer', defval: 0 },
                  value: b.value(),
                  onChange: this._onValueChange,
                }),
              ),
            ),
            n.createElement(
              M.PropertyTable.Row,
              null,
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'first' },
                n.createElement('div', { className: fe.childRowContainer }, Ut),
              ),
              n.createElement(
                M.PropertyTable.Cell,
                { placement: 'last' },
                n.createElement(Oe.Select, {
                  id: 'hhist-direction-select',
                  disabled: !g.value(),
                  className: fe.defaultSelect,
                  menuItemClassName: fe.defaultSelectItem,
                  items: jt,
                  value: C.value(),
                  onChange: this._onDirectionChange,
                }),
              ),
            ),
            m.map((e) =>
              n.createElement(
                n.Fragment,
                { key: e },
                p
                  .childs()
                  [e].childs()
                  .colors.childNames()
                  .map((t, l) => {
                    const r = u[e];
                    return n.createElement(
                      L.InputRow,
                      {
                        key: l,
                        label: n.createElement(
                          'div',
                          { className: fe.childRowContainer },
                          (r && (0, s.t)(r.titles[l])) || '',
                        ),
                      },
                      n.createElement(Pe.ColorWithThicknessSelect, {
                        disabled: !g.value(),
                        color: p.childs()[e].childs().colors.childs()[l],
                        transparency: p
                          .childs()
                          [e].childs()
                          .transparencies.childs()[l],
                      }),
                    );
                  }),
              ),
            ),
            n.createElement(
              De,
              {
                id: 'pocLines',
                title: E.name,
                color: S.childs().color,
                visible: S.childs().visible,
                thickness: S.childs().width,
              },
              n.createElement(mt, {
                id: 'poc-lines-line-style-select',
                disabled: !S.childs().visible.value(),
                className: fe.smallStyleControl,
                lineStyle: S.childs().style,
              }),
            ),
            P &&
              n.createElement(
                De,
                {
                  id: 'developingPoc',
                  title: (f.title && (0, s.t)(f.title)) || '',
                  color: P.childs().color,
                  visible: P.childs().visible,
                  thickness: P.childs().linewidth,
                },
                n.createElement(mt, {
                  id: 'developing-poc-line-style-select',
                  disabled: !P.childs().visible.value(),
                  className: fe.smallStyleControl,
                  lineStyle: P.childs().linestyle,
                }),
              ),
            _ &&
              T &&
              n.createElement(
                De,
                {
                  id: 'developingPoc',
                  title: Zt,
                  color: [_.childs().color, T.childs().color],
                  visible: [_.childs().visible, T.childs().visible],
                  thickness: [_.childs().linewidth, T.childs().linewidth],
                },
                n.createElement(mt, {
                  id: 'developing-VA-line-style-select',
                  disabled:
                    !_.childs().visible.value() && !T.childs().visible.value(),
                  className: fe.smallStyleControl,
                  lineStyle: [_.childs().linestyle, T.childs().linestyle],
                }),
              ),
            h &&
              n.createElement(
                L.InputRow,
                {
                  label: n.createElement(
                    'div',
                    null,
                    (x && (0, s.t)(x.name)) || '',
                  ),
                },
                n.createElement(Pe.ColorWithThicknessSelect, {
                  color: h.childs().histBoxBg.childs().color,
                  transparency: h.childs().histBoxBg.childs().transparency,
                }),
              ),
            'VbPFixed' !== l.shortId &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  M.PropertyTable.Cell,
                  { placement: 'first', colSpan: 2 },
                  n.createElement(oe, {
                    id: 'showLabelsOnPriceScale',
                    title: Kt,
                    visible: i,
                  }),
                ),
                n.createElement(
                  M.PropertyTable.Cell,
                  { placement: 'first', colSpan: 2 },
                  n.createElement(oe, {
                    id: 'showLegendValues',
                    title: qt,
                    visible: c,
                  }),
                ),
              ),
          );
        }
        _setHhistsProperty(e, t) {
          const { setValue: l } = this.context,
            { metaInfo: r, property: n } = this.props,
            s = n.childs().graphics.childs().hhists,
            a = Object.keys((0, o.ensureDefined)(r.graphics.hhists));
          for (let r = 0; r < a.length; r++) {
            const n = s.childs()[a[r]].child(e);
            l((0, o.ensureDefined)(n), t, Ot);
          }
        }
      }
      function Qt() {
        const e = (0, o.ensureNotNull)((0, n.useContext)(Me)),
          t = e.metaInfo(),
          l = e.properties();
        return n.createElement(Jt, { metaInfo: t, property: l });
      }
      Jt.contextType = le.StylePropertyContext;
      var Xt = l(82675);
      const Yt = {
        VbPFixed: Qt,
        PivotPointsStandard: function () {
          const e = (0, o.ensureNotNull)((0, n.useContext)(Me)).properties();
          return n.createElement(At, { property: e });
        },
        VbPVisible: Qt,
      };
      class $t extends n.PureComponent {
        render() {
          const e = (0, o.ensureNotNull)(this.context);
          return n.createElement(Me.Consumer, null, (t) =>
            n.createElement(
              le.StylePropertyContainer,
              { property: (0, o.ensureNotNull)(t).properties(), model: e },
              n.createElement(
                M.PropertyTable,
                null,
                this._renderCustomContent(
                  (0, o.ensureNotNull)(t).metaInfo().shortId,
                ),
              ),
            ),
          );
        }
        _renderCustomContent(e) {
          if (e in Yt) {
            const t = Yt[e];
            return n.createElement(t, null);
          }
          return null;
        }
      }
      $t.contextType = Xt.ModelContext;
      var el = l(12642);
      const tl = new a.TranslatedString(
          'change precision',
          (0, s.t)('change precision'),
        ),
        ll = (0, s.t)('Default'),
        rl = (0, s.t)('Precision'),
        nl = [{ value: 'default', content: ll }];
      for (let e = 0; e <= 8; e++) nl.push({ value: e, content: e.toString() });
      class ol extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const { setValue: t } = this.context,
                { precision: l } = this.props;
              t(l, e, tl);
            });
        }
        render() {
          const { id: e, precision: t } = this.props;
          return n.createElement(
            L.InputRow,
            { label: rl },
            n.createElement(Oe.Select, {
              id: e,
              className: fe.defaultSelect,
              menuItemClassName: fe.defaultSelectItem,
              items: nl,
              value: t.value(),
              onChange: this._onChange,
            }),
          );
        }
      }
      ol.contextType = le.StylePropertyContext;
      const sl = new a.TranslatedString(
          'change min tick',
          (0, s.t)('change min tick'),
        ),
        al = (0, s.t)('Default'),
        il = (0, s.t)('Override min tick'),
        cl = [
          { priceScale: 1, minMove: 1, frac: !1 },
          { priceScale: 10, minMove: 1, frac: !1 },
          { priceScale: 100, minMove: 1, frac: !1 },
          { priceScale: 1e3, minMove: 1, frac: !1 },
          { priceScale: 1e4, minMove: 1, frac: !1 },
          { priceScale: 1e5, minMove: 1, frac: !1 },
          { priceScale: 1e6, minMove: 1, frac: !1 },
          { priceScale: 1e7, minMove: 1, frac: !1 },
          { priceScale: 1e8, minMove: 1, frac: !1 },
          { priceScale: 2, minMove: 1, frac: !0 },
          { priceScale: 4, minMove: 1, frac: !0 },
          { priceScale: 8, minMove: 1, frac: !0 },
          { priceScale: 16, minMove: 1, frac: !0 },
          { priceScale: 32, minMove: 1, frac: !0 },
          { priceScale: 64, minMove: 1, frac: !0 },
          { priceScale: 128, minMove: 1, frac: !0 },
          { priceScale: 320, minMove: 1, frac: !0 },
        ],
        pl = [{ id: 'tick-default', value: 'default', content: al }];
      for (let e = 0; e < cl.length; e++) {
        const t = cl[e];
        pl.push({
          value: t.priceScale + ',' + t.minMove + ',' + t.frac,
          content: t.minMove + '/' + t.priceScale,
        });
      }
      class dl extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._onChange = (e) => {
              const { setValue: t } = this.context,
                { minTick: l } = this.props;
              t(l, e, sl);
            });
        }
        render() {
          const { id: e, minTick: t } = this.props;
          return n.createElement(
            L.InputRow,
            { label: il },
            n.createElement(Oe.Select, {
              id: e,
              className: fe.defaultSelect,
              menuItemClassName: fe.defaultSelectItem,
              items: pl,
              value: t.value(),
              onChange: this._onChange,
            }),
          );
        }
      }
      dl.contextType = le.StylePropertyContext;
      var hl = l(48854),
        ul = l(46358);
      const ml = (0, s.t)('Outputs');
      class yl extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._findPlotPalettes = (e) => {
              const { study: t } = this.props,
                l = t.metaInfo(),
                r = (0, o.ensureDefined)(l.palettes);
              return (0, $.isBarColorerPlot)(e) || (0, $.isBgColorerPlot)(e)
                ? {
                    main: {
                      palette: r[e.palette],
                      paletteProps: t.properties().palettes[e.palette],
                    },
                  }
                : this._findPalettesByTargetId(e.id);
            });
        }
        render() {
          const { study: e } = this.props,
            t = e.metaInfo();
          if ((0, el.isCustomStudy)(t.shortId))
            return n.createElement($t, null);
          const l = e.properties(),
            {
              precision: r,
              strategy: o,
              minTick: s,
              showLabelsOnPriceScale: a,
              showLegendValues: i,
            } = l,
            c = t.plots.length > 0,
            p = t.plots.some((e) => !(0, $.isPlotWithTechnicalValues)(e)),
            d = c || t.inputs.some((e) => 'price' === e.type),
            h = (0, hl.createAdapter)(e).canOverrideMinTick();
          return n.createElement(
            M.PropertyTable,
            null,
            this._plotsElement(),
            this._bandsElement(),
            this._bandsBackgroundsElement(),
            this._areasBackgroundsElement(),
            this._filledAreasElement(),
            this._graphicsElement(),
            h &&
              n.createElement(dl, {
                id: (0, Y.createDomId)(t.id, 'min-tick-select'),
                minTick: s,
              }),
            te().isScriptStrategy(t) &&
              n.createElement(vt, { orders: o.orders }),
            (d || p) &&
              n.createElement(
                M.PropertyTable.Row,
                null,
                n.createElement(M.PropertyTable.GroupSeparator, { size: 1 }),
                n.createElement(ul.GroupTitleSection, { title: ml, name: ml }),
                d &&
                  n.createElement(ol, {
                    id: (0, Y.createDomId)(t.id, 'precision-select'),
                    precision: r,
                  }),
                p &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      M.PropertyTable.Cell,
                      { placement: 'first', colSpan: 2 },
                      n.createElement(oe, {
                        id: 'showLabelsOnPriceScale',
                        title: 'Labels on price scale',
                        visible: a,
                      }),
                    ),
                    n.createElement(
                      M.PropertyTable.Cell,
                      { placement: 'first', colSpan: 2 },
                      n.createElement(oe, {
                        id: 'showLegendValues',
                        title: 'Values in status line',
                        visible: i,
                      }),
                    ),
                  ),
              ),
          );
        }
        _plotsElement() {
          const { study: e } = this.props,
            t = e.metaInfo();
          return new q.MetaInfoHelper(t)
            .getUserEditablePlots()
            .filter(
              (e) =>
                !(
                  (0, $.isUpColorerPlot)(e) ||
                  (0, $.isDownColorerPlot)(e) ||
                  (0, $.isCandleBorderColorerPlot)(e) ||
                  (0, $.isCandleWickColorerPlot)(e)
                ),
            )
            .map((t) => {
              const l = (0, $.isOhlcPlot)(t) ? { ...t, id: t.target } : t,
                r = this._findPlotPalettes(l);
              return n.createElement(ct, {
                key: t.id,
                plot: t,
                palettes: r,
                study: e,
              });
            });
        }
        _bandsElement() {
          const { study: e } = this.props,
            t = e.properties(),
            { bands: l } = t;
          return (
            l &&
            l.childNames().map((e, t) => {
              const r = l.child(e);
              if (!r.isHidden || !r.isHidden.value())
                return n.createElement(gt, {
                  key: t,
                  id: r.name.value(),
                  property: r,
                });
            })
          );
        }
        _bandsBackgroundsElement() {
          const { study: e } = this.props,
            t = e.properties(),
            { bandsBackground: l } = t;
          return (
            l &&
            n.createElement(De, {
              id: 'bandsBackground',
              title: 'Background',
              visible: l.fillBackground,
              color: l.backgroundColor,
              transparency: l.transparency,
            })
          );
        }
        _areasBackgroundsElement() {
          const { study: e } = this.props,
            t = e.metaInfo(),
            l = e.properties(),
            { areaBackground: r } = l;
          return t.isRGB
            ? null
            : r &&
                n.createElement(De, {
                  id: 'areaBackground',
                  title: 'Background',
                  visible: r.fillBackground,
                  color: r.backgroundColor,
                  transparency: r.transparency,
                });
        }
        _filledAreasElement() {
          const { study: e } = this.props,
            t = e.metaInfo(),
            l = t.filledAreas;
          return !l || t.isRGB
            ? []
            : l.map((t) => {
                if (t.isHidden) return null;
                const l = e.properties().filledAreasStyle[t.id],
                  r = t.title || 'Background';
                if (t.palette) {
                  const e = this._findPalettesByTargetId(t.id),
                    r = (0, o.ensureDefined)(e.main);
                  return n.createElement(ke, {
                    key: t.id,
                    area: t,
                    palette: (0, o.ensureDefined)(r.palette),
                    paletteProps: (0, o.ensureDefined)(r.paletteProps),
                    styleProp: l,
                  });
                }
                return n.createElement(De, {
                  key: t.id,
                  id: t.id,
                  title: r,
                  color: l.color,
                  visible: l.visible,
                  transparency: l.transparency,
                });
              });
        }
        _graphicsElement() {
          const { study: e } = this.props,
            t = e.metaInfo().graphics;
          return (
            t &&
            Object.keys(t).map((t, l) =>
              n.createElement(Lt, { key: t, graphicType: t, study: e }),
            )
          );
        }
        _findPalettesByTargetId(e) {
          const { study: t } = this.props,
            l = t.metaInfo(),
            r = l.plots,
            n = (0, o.ensureDefined)(l.palettes),
            s = {};
          for (const l of r)
            ((0, $.isColorerPlot)(l) || (0, $.isOhlcColorerPlot)(l)) &&
              l.target === e &&
              (s.main = {
                palette: n[l.palette],
                paletteProps: t.properties().palettes[l.palette],
              }),
              (0, $.isUpColorerPlot)(l) &&
                l.target === e &&
                (s.up = {
                  palette: n[l.palette],
                  paletteProps: t.properties().palettes[l.palette],
                }),
              (0, $.isDownColorerPlot)(l) &&
                l.target === e &&
                (s.down = {
                  palette: n[l.palette],
                  paletteProps: t.properties().palettes[l.palette],
                }),
              (0, $.isCandleWickColorerPlot)(l) &&
                l.target === e &&
                (s.wick = {
                  palette: n[l.palette],
                  paletteProps: t.properties().palettes[l.palette],
                }),
              (0, $.isCandleBorderColorerPlot)(l) &&
                l.target === e &&
                (s.border = {
                  palette: n[l.palette],
                  paletteProps: t.properties().palettes[l.palette],
                });
          return s;
        }
      }
      function gl(e) {
        return (0, le.bindPropertyContext)(yl, {
          ...e,
          property: e.study.properties(),
        });
      }
      class vl extends n.PureComponent {
        render() {
          return n.createElement(
            Xt.ModelContext.Provider,
            { value: this.props.model },
            n.createElement(
              Me.Provider,
              { value: this.props.source },
              n.createElement(gl, { study: this.props.source }),
            ),
          );
        }
      }
      var bl = l(97806),
        Cl = l(58738),
        wl = l(63725);
      class Sl extends Cl.DialogRenderer {
        constructor(e, t, l, n) {
          super(),
            (this._timeout = null),
            (this._handleClose = () => {
              r.unmountComponentAtNode(this._container),
                this._setVisibility(!1),
                this._subscription.unsubscribe(
                  this,
                  this._handleCollectionChanged,
                );
            }),
            (this._handleCancel = () => {
              this._model.undoToCheckpoint(this._checkpoint);
            }),
            (this._handleSubmit = () => {}),
            (this._handleActiveTabChanged = (e) => {
              c.setValue(this._activeTabSettingsName(), e);
            }),
            (this._source = e),
            (this._model = t),
            (this._propertyPages = n),
            (this._checkpoint = this._ensureCheckpoint(l)),
            (this._subscription = this._model
              .model()
              .dataSourceCollectionChanged()),
            this._subscription.subscribe(this, this._handleCollectionChanged);
        }
        hide(e) {
          e ? this._handleCancel() : this._handleSubmit(), this._handleClose();
        }
        isVisible() {
          return this.visible().value();
        }
        show(e = {}) {
          if (!p.enabled('property_pages')) return;
          const t = this._source.metaInfo();
          if (
            ((0, w.isLineTool)(this._source) &&
              (0, h.trackEvent)(
                'GUI',
                'Drawing Properties',
                this._source.name(),
              ),
            (0, b.isStudy)(this._source))
          ) {
            const e =
              !this._source.isPine() || this._source.isStandardPine()
                ? t.description
                : 'Custom Pine';
            (0, h.trackEvent)('GUI', 'Study Properties', e);
          }
          let l = {
            byId: {
              inputs: { title: (0, s.t)('Inputs'), Component: X },
              style: { title: (0, s.t)('Style'), Component: vl },
              properties: { title: (0, s.t)('Properties'), Component: J },
            },
            allIds: [],
          };
          const o = new q.MetaInfoHelper(t);
          o.hasUserEditableInputs() && l.allIds.push('inputs'),
            o.hasUserEditableProperties() && l.allIds.push('properties'),
            o.hasUserEditableStyles() && l.allIds.push('style'),
            this._propertyPages ||
              ((l.byId.visibilities = {
                title: (0, s.t)('Visibility'),
                page: this._createVisibilitiesPropertyPage(),
              }),
              l.allIds.push('visibilities')),
            (l = this._getPagesForStudyLineTool(l));
          const a =
            e.initialTab ||
            c.getValue(this._activeTabSettingsName()) ||
            'inputs';
          let u = (0, i.clean)(t.shortDescription, !0);
          r.render(
            n.createElement(P, {
              title: u,
              model: this._model,
              source: this._source,
              initialActiveTab: l.allIds.includes(a) ? a : l.allIds[0],
              pages: l,
              onSubmit: this._handleSubmit,
              onCancel: this._handleCancel,
              onClose: this._handleClose,
              onActiveTabChanged: this._handleActiveTabChanged,
            }),
            this._container,
          ),
            this._setVisibility(!0),
            d.emit('edit_object_dialog', {
              objectType: 'study',
              scriptTitle: this._source.title(),
            });
        }
        _createVisibilitiesPropertyPage() {
          const e = this._source
            .properties()
            .childs()
            .intervalsVisibilities.childs();
          return (0, bl.createPropertyPage)(
            (0, wl.getIntervalsVisibilitiesPropertiesDefinitions)(
              this._model,
              e,
              new a.TranslatedString(
                this._source.name(!0),
                this._source.title(!0),
              ),
            ),
            'visibility',
            (0, s.t)('Visibility'),
          );
        }
        _activeTabSettingsName() {
          return 'properties_dialog.active_tab.study';
        }
        _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e;
        }
        _getPagesForStudyLineTool(e) {
          if (this._propertyPages) {
            const t = this._propertyPages.filter(
                (e) => 'coordinates' === e.id || 'visibility' === e.id,
              ),
              l = {
                allIds: t.map((e) => e.id),
                byId: t.reduce(
                  (e, t) => ({ ...e, [t.id]: { title: t.title, page: t } }),
                  {},
                ),
              };
            return {
              allIds: [...e.allIds, ...l.allIds],
              byId: { ...e.byId, ...l.byId },
            };
          }
          return e;
        }
        _handleCollectionChanged() {
          null === this._timeout &&
            (this._timeout = setTimeout(() => {
              this._closeDialogIfSourceIsDeleted(), (this._timeout = null);
            }));
        }
        _closeDialogIfSourceIsDeleted() {
          null === this._model.model().dataSourceForId(this._source.id()) &&
            this._handleClose();
        }
      }
    },
    10869: (e, t, l) => {
      'use strict';
      l.d(t, { PopupMenuSeparator: () => a });
      var r = l(67294),
        n = l(94184),
        o = l.n(n),
        s = l(78706);
      function a(e) {
        const { size: t = 'normal', className: l } = e;
        return r.createElement('div', {
          className: o()(
            s.separator,
            'small' === t && s.small,
            'normal' === t && s.normal,
            'large' === t && s.large,
            l,
          ),
        });
      }
    },
    87736: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 21l7.424-6.114a.5.5 0 0 0-.318-.886H18.5V7h-9v7H6.894a.5.5 0 0 0-.318.886L14 21z"/></svg>';
    },
    41723: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14 7l7.424 6.114a.5.5 0 0 1-.318.886H18.5v7h-9v-7H6.894a.5.5 0 0 1-.318-.886L14 7z"/></svg>';
    },
    62450: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><circle stroke="currentColor" cx="14" cy="14" r="6.5"/></svg>';
    },
    72720: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 14.5h11M14.5 20V9"/></svg>';
    },
    76702: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M14.354 6.646L14 6.293l-.354.353-7 7-.353.354.353.354 7 7 .354.353.354-.353 7-7 .353-.354-.353-.354-7-7z"/></svg>';
    },
    21437: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8.5 22v-5.5m0 0v-8L12 7l4 2.5 3.5-1v8l-3.5 1-4-2.5-3.5 1.5z"/></svg>';
    },
    54908: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 8.5h-.5v9.707l.146.147 3 3 .354.353.354-.353 3-3 .146-.147V8.5H11z"/></svg>';
    },
    52213: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M11 18.5h-.5V8.793l.146-.147 3-3L14 5.293l.354.353 3 3 .146.147V18.5H11z"/></svg>';
    },
    66935: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 7.5h13v13h-13z"/></svg>';
    },
    10838: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 11.265l.478-.765H8.098l.478.765 5 8 .424.678.424-.678 5-8z"/></svg>';
    },
    89991: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M19.424 16.735l.478.765H8.098l.478-.765 5-8L14 8.057l.424.678 5 8z"/></svg>';
    },
    12688: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M9 9l11 11M9 20L20 9"/></svg>';
    },
    65052: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M13 11.5l-1.915-1.532a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82V18.5a1 1 0 0 0 1 1H13m3.5-7l4.293-4.293c.63-.63 1.707-.184 1.707.707V18.5a1 1 0 0 1-1 1H16"/><path fill="currentColor" d="M14 6h1v2h-1zM14 11h1v2h-1zM14 16h1v2h-1zM14 21h1v2h-1z"/></svg>';
    },
    37319: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13.52v4.98a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V8.914c0-.89-1.077-1.337-1.707-.707l-4.66 4.66a1 1 0 0 1-1.332.074l-3.716-2.973a1 1 0 0 0-1.198-.039l-3.96 2.772a1 1 0 0 0-.427.82z"/></svg>';
    },
    89447: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM16.5 19a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM22.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></svg>';
    },
    69627: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 12.5v8h3v-8h-3zM12.5 7.5v13h3v-13h-3zM18.5 15.5v5h3v-5h-3z"/></svg>';
    },
    61830: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M17 8.5h7M20.5 12V5M10 19.5h7M13.5 23v-7M3 12.5h7M6.5 16V9"/></svg>';
    },
    90980: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4.5 20v-7m3 7V10m3 10V8m3 12V10m3 10v-8m3 8V10m3 10V8"/></svg>';
    },
    73642: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l5-5a1.414 1.414 0 0 1 2 0m11-1l-5 5a1.414 1.414 0 0 1-2 0"/><path fill="currentColor" d="M14 5h1v2h-1zM14 10h1v2h-1zM14 15h1v2h-1zM14 20h1v2h-1z"/></svg>';
    },
    13624: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 16.5l4.586-4.586a2 2 0 0 1 2.828 0l3.172 3.172a2 2 0 0 0 2.828 0L23.5 10.5"/></svg>';
    },
    99600: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M9.8 2.7l.7-.7.7.7 2.1 2.1.2.2H18v9.5l.2.2 2.1 2.1.2.2H24v1h-3.5l-.2.2-2.1 2.1-.7.7-.7-.7-2.1-2.1-.7-.7.7-.7 2.1-2.1.2-.2V6h-3.5l-.2.2-2.1 2.1-.2.2V24H5.5v-1H10V8.5l-.2-.2-2.1-2.1-.7-.7.7-.7 2.1-2.1zM8.4 5.5l2.09 2.09 2.09-2.09-2.09-2.09L8.41 5.5zm9.09 14.09l-2.09-2.09 2.09-2.09 2.09 2.09-2.09 2.09z"/></svg>';
    },
    35720: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 17v5.5h4v-18h4v12h4v-9h4V21"/></svg>';
    },
  },
]);
