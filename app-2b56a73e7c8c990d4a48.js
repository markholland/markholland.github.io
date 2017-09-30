webpackJsonp([0xd2a57dc1d883], {
  './.cache/api-runner-browser.js': function(e, o, n) {
    'use strict';
    function t(e, o, n) {
      var t = a.map(function(n) {
        if (n.plugin[e]) {
          var t = n.plugin[e](o, n.options);
          return t;
        }
      });
      return (
        (t = t.filter(function(e) {
          return 'undefined' != typeof e;
        })),
        t.length > 0 ? t : n ? [n] : []
      );
    }
    function s(e, o, n) {
      return a.reduce(function(n, t) {
        return t.plugin[e]
          ? n.then(function() {
              return t.plugin[e](o, t.options);
            })
          : n;
      }, Promise.resolve());
    }
    (o.__esModule = !0), (o.apiRunner = t), (o.apiRunnerAsync = s);
    var a = [
      {
        plugin: n('./node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
        options: { plugins: [] },
      },
      {
        plugin: n(
          './node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'
        ),
        options: { plugins: [] },
      },
      {
        plugin: n('./node_modules/gatsby-plugin-offline/gatsby-browser.js'),
        options: { plugins: [] },
      },
    ];
  },
  './.cache/async-requires.js': function(e, o, n) {
    'use strict';
    var t;
    (o.components = {
      'component---node-modules-gatsby-plugin-offline-app-shell-js': n(
        './node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js'
      ),
      'component---src-templates-tags-jsx': n(
        './node_modules/gatsby-module-loader/index.js?name=component---src-templates-tags-jsx!./src/templates/tags.jsx'
      ),
      'component---src-templates-blog-post-jsx': n(
        './node_modules/gatsby-module-loader/index.js?name=component---src-templates-blog-post-jsx!./src/templates/blog-post.jsx'
      ),
      'component---src-pages-404-jsx': n(
        './node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-jsx!./src/pages/404.jsx'
      ),
      'component---src-pages-index-jsx': n(
        './node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-jsx!./src/pages/index.jsx'
      ),
      'component---src-pages-about-jsx': n(
        './node_modules/gatsby-module-loader/index.js?name=component---src-pages-about-jsx!./src/pages/about.jsx'
      ),
      'component---src-pages-projects-jsx': n(
        './node_modules/gatsby-module-loader/index.js?name=component---src-pages-projects-jsx!./src/pages/projects.jsx'
      ),
    }),
      (o.json = ((t = {
        'layout-index.json': n(
          './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
        ),
        'offline-plugin-app-shell-fallback.json': n(
          './node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json'
        ),
      }),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['tags.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---tags!./.cache/json/tags.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['tags-videogames.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---tags-videogames!./.cache/json/tags-videogames.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['tags-music.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---tags-music!./.cache/json/tags-music.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['tags-tag.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---tags-tag!./.cache/json/tags-tag.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['psvr-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---psvr-html!./.cache/json/psvr-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['best-of-2015-music-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---best-of-2015-music-html!./.cache/json/best-of-2015-music-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['top-podcasts-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---top-podcasts-html!./.cache/json/top-podcasts-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['hidden-sounds-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---hidden-sounds-html!./.cache/json/hidden-sounds-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['sub-count-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---sub-count-html!./.cache/json/sub-count-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['speedy-terminal-tabs-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---speedy-terminal-tabs-html!./.cache/json/speedy-terminal-tabs-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['ocw-2014-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---ocw-2014-html!./.cache/json/ocw-2014-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['telegram-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---telegram-html!./.cache/json/telegram-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['best-of-2013-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---best-of-2013-html!./.cache/json/best-of-2013-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['droicon-mad-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---droicon-mad-html!./.cache/json/droicon-mad-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['arm-64-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---arm-64-html!./.cache/json/arm-64-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['digital-downloads-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---digital-downloads-html!./.cache/json/digital-downloads-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['mac-g-4-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---mac-g-4-html!./.cache/json/mac-g-4-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['rotten-apple-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---rotten-apple-html!./.cache/json/rotten-apple-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['fake-raspberry-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---fake-raspberry-html!./.cache/json/fake-raspberry-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['best-of-2012-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---best-of-2012-html!./.cache/json/best-of-2012-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['kolibri-os-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---kolibri-os-html!./.cache/json/kolibri-os-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['cropping-pdfs-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---cropping-pdfs-html!./.cache/json/cropping-pdfs-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['phase-one-complete.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---phase-one-complete!./.cache/json/phase-one-complete.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['start-orb-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---start-orb-html!./.cache/json/start-orb-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['pandora-fms-gsoc-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---pandora-fms-gsoc-html!./.cache/json/pandora-fms-gsoc-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['drawing-to-a-close-gsoc-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---drawing-to-a-close-gsoc-html!./.cache/json/drawing-to-a-close-gsoc-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['quick-update-gsoc-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---quick-update-gsoc-html!./.cache/json/quick-update-gsoc-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['foxy-utils-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---foxy-utils-html!./.cache/json/foxy-utils-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['we-have-lift-off-gsoc-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---we-have-lift-off-gsoc-html!./.cache/json/we-have-lift-off-gsoc-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['silky-smooth-scrolling.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---silky-smooth-scrolling!./.cache/json/silky-smooth-scrolling.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['four-days-to-go-gsoc-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---four-days-to-go-gsoc-html!./.cache/json/four-days-to-go-gsoc-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['first-irc-gsoc-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---first-irc-gsoc-html!./.cache/json/first-irc-gsoc-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['i-found-them-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---i-found-them-html!./.cache/json/i-found-them-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['back-to-the-start-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---back-to-the-start-html!./.cache/json/back-to-the-start-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['just-an-average-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---just-an-average-html!./.cache/json/just-an-average-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['root-of-the-problem-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---root-of-the-problem-html!./.cache/json/root-of-the-problem-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['fruity-computing-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---fruity-computing-html!./.cache/json/fruity-computing-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['sumatra-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---sumatra-html!./.cache/json/sumatra-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['it-knows-all-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---it-knows-all-html!./.cache/json/it-knows-all-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['but-i-bought-it-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---but-i-bought-it-html!./.cache/json/but-i-bought-it-html.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['404.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['about.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['projects.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---projects!./.cache/json/projects.json'
      )),
      (t['layout-index.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json'
      )),
      (t['404-html.json'] = n(
        './node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json'
      )),
      t)),
      (o.layouts = {
        'component---src-layouts-index-jsx': n(
          './node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-jsx!./.cache/layouts/index.js'
        ),
      });
  },
  './.cache/component-renderer.js': function(e, o, n) {
    'use strict';
    function t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, o) {
      if (!(e instanceof o))
        throw new TypeError('Cannot call a class as a function');
    }
    function a(e, o) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !o || ('object' != typeof o && 'function' != typeof o) ? e : o;
    }
    function l(e, o) {
      if ('function' != typeof o && null !== o)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof o
        );
      (e.prototype = Object.create(o && o.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        o &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, o)
            : (e.__proto__ = o));
    }
    o.__esModule = !0;
    var d =
        Object.assign ||
        function(e) {
          for (var o = 1; o < arguments.length; o++) {
            var n = arguments[o];
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          }
          return e;
        },
      u = n('./node_modules/react/react.js'),
      r = t(u),
      c = n('./node_modules/prop-types/index.js'),
      m = t(c),
      i = n('./.cache/loader.js'),
      j = t(i),
      p = n('./.cache/emitter.js'),
      h = t(p),
      g = function(e) {
        var o = e.children;
        return r.default.createElement('div', null, o());
      },
      b = (function(e) {
        function o(n) {
          s(this, o);
          var t = a(this, e.call(this));
          return (
            (t.state = {
              location: n.location,
              pageResources: j.default.getResourcesForPathname(
                n.location.pathname
              ),
            }),
            t
          );
        }
        return (
          l(o, e),
          (o.prototype.componentWillReceiveProps = function(e) {
            var o = this;
            if (this.state.location.pathname !== e.location.pathname) {
              var n = j.default.getResourcesForPathname(e.location.pathname);
              n
                ? this.setState({ location: e.location, pageResources: n })
                : j.default.getResourcesForPathname(
                    e.location.pathname,
                    function(n) {
                      o.setState({ location: e.location, pageResources: n });
                    }
                  );
            }
          }),
          (o.prototype.componentDidMount = function() {
            var e = this;
            h.default.on('onPostLoadPageResources', function(o) {
              o.page.path ===
                j.default.getPage(e.state.location.pathname).path &&
                e.setState({ pageResources: o.pageResources });
            });
          }),
          (o.prototype.shouldComponentUpdate = function(e, o) {
            return (
              !o.pageResources ||
              (!(this.state.pageResources || !o.pageResources) ||
                (this.state.pageResources.component !==
                  o.pageResources.component ||
                  (this.state.pageResources.json !== o.pageResources.json ||
                    !(
                      this.state.location.key === o.location.key ||
                      !o.pageResources.page ||
                      (!o.pageResources.page.matchPath &&
                        !o.pageResources.page.path)
                    ))))
            );
          }),
          (o.prototype.render = function() {
            return this.props.page
              ? this.state.pageResources
                ? (0, u.createElement)(
                    this.state.pageResources.component,
                    d(
                      { key: this.props.location.pathname },
                      this.props,
                      this.state.pageResources.json
                    )
                  )
                : null
              : this.props.layout
                ? (0, u.createElement)(
                    this.state.pageResources && this.state.pageResources.layout
                      ? this.state.pageResources.layout
                      : g,
                    d(
                      {
                        key:
                          this.state.pageResources &&
                          this.state.pageResources.layout
                            ? this.state.pageResources.layout
                            : 'DefaultLayout',
                      },
                      this.props
                    )
                  )
                : null;
          }),
          o
        );
      })(r.default.Component);
    (b.propTypes = {
      page: m.default.bool,
      layout: m.default.bool,
      location: m.default.object,
    }),
      (o.default = b),
      (e.exports = o.default);
  },
  './.cache/emitter.js': function(e, o, n) {
    'use strict';
    function t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = n('./node_modules/mitt/dist/mitt.js'),
      a = t(s),
      l = (0, a.default)();
    e.exports = l;
  },
  './.cache/find-page.js': function(e, o, n) {
    'use strict';
    var t = n('./node_modules/react-router-dom/index.js'),
      s = {};
    e.exports = function(e) {
      var o =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
      return function(n) {
        var a = n.slice(o.length);
        if (
          (a.split('#').length > 1 &&
            (a = a
              .split('#')
              .slice(0, -1)
              .join('')),
          a.split('?').length > 1 &&
            (a = a
              .split('?')
              .slice(0, -1)
              .join('')),
          s[a])
        )
          return s[a];
        var l = void 0;
        return (
          e.some(function(e) {
            if (e.matchPath) {
              if (
                (0, t.matchPath)(a, { path: e.path }) ||
                (0, t.matchPath)(a, { path: e.matchPath })
              )
                return (l = e), (s[a] = e), !0;
            } else if ((0, t.matchPath)(a, { path: e.path, exact: !0 })) return (l = e), (s[a] = e), !0;
            return !1;
          }),
          l
        );
      };
    };
  },
  './node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xa2868bfb69fc, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/404-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xe70826b53c04, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/404.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xf927f8900006, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/about.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---arm-64-html!./.cache/json/arm-64-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xfda6c39ea663, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/arm-64-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---back-to-the-start-html!./.cache/json/back-to-the-start-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x987e303f4e16, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/back-to-the-start-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---best-of-2012-html!./.cache/json/best-of-2012-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(4135591022067, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/best-of-2012-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---best-of-2013-html!./.cache/json/best-of-2013-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(2412604831546, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/best-of-2013-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---best-of-2015-music-html!./.cache/json/best-of-2015-music-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(40893211578372, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/best-of-2015-music-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---but-i-bought-it-html!./.cache/json/but-i-bought-it-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xb8975a3ec36, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/but-i-bought-it-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---cropping-pdfs-html!./.cache/json/cropping-pdfs-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(26986410390407, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/cropping-pdfs-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---digital-downloads-html!./.cache/json/digital-downloads-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xcbca8e60335a, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/digital-downloads-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---drawing-to-a-close-gsoc-html!./.cache/json/drawing-to-a-close-gsoc-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(69599710739010, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/drawing-to-a-close-gsoc-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---droicon-mad-html!./.cache/json/droicon-mad-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(24794943383322, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/droicon-mad-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---fake-raspberry-html!./.cache/json/fake-raspberry-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(33358419467613, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/fake-raspberry-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---first-irc-gsoc-html!./.cache/json/first-irc-gsoc-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(38021173769919, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/first-irc-gsoc-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---four-days-to-go-gsoc-html!./.cache/json/four-days-to-go-gsoc-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xfd4e837d0907, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/four-days-to-go-gsoc-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---foxy-utils-html!./.cache/json/foxy-utils-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xfc538d484ce1, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/foxy-utils-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---fruity-computing-html!./.cache/json/fruity-computing-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x7edccd38b131, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/fruity-computing-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---hidden-sounds-html!./.cache/json/hidden-sounds-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xdd3d1807397e, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/hidden-sounds-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---i-found-them-html!./.cache/json/i-found-them-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x945baad4808a, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/i-found-them-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x81b8806e4260, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/index.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---it-knows-all-html!./.cache/json/it-knows-all-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xed24ea7ac955, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/it-knows-all-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---just-an-average-html!./.cache/json/just-an-average-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x7644f01d869e, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/just-an-average-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---kolibri-os-html!./.cache/json/kolibri-os-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x9f4dd189a7c0, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/kolibri-os-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(60335399758886, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/layout-index.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---mac-g-4-html!./.cache/json/mac-g-4-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xaf01124e8e97, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/mac-g-4-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---ocw-2014-html!./.cache/json/ocw-2014-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x64a1e237954e, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/ocw-2014-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xbf4c176e203a, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/offline-plugin-app-shell-fallback.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---pandora-fms-gsoc-html!./.cache/json/pandora-fms-gsoc-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x7f844159f4b0, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/pandora-fms-gsoc-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---phase-one-complete!./.cache/json/phase-one-complete.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xcc507d759cc7, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/phase-one-complete.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---projects!./.cache/json/projects.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(97786326051841, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/projects.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---psvr-html!./.cache/json/psvr-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x81b781726a26, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/psvr-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---quick-update-gsoc-html!./.cache/json/quick-update-gsoc-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(32169873434621, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/quick-update-gsoc-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---root-of-the-problem-html!./.cache/json/root-of-the-problem-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(71978070213141, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/root-of-the-problem-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---rotten-apple-html!./.cache/json/rotten-apple-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(6770635427130, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/rotten-apple-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---silky-smooth-scrolling!./.cache/json/silky-smooth-scrolling.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xe0a504530c67, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/silky-smooth-scrolling.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---speedy-terminal-tabs-html!./.cache/json/speedy-terminal-tabs-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(21568026027427, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/speedy-terminal-tabs-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---start-orb-html!./.cache/json/start-orb-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x9ab5b39d8a3c, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/start-orb-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---sub-count-html!./.cache/json/sub-count-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xf3c38b38eab8, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/sub-count-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---sumatra-html!./.cache/json/sumatra-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(81118664459597, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/sumatra-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---tags-music!./.cache/json/tags-music.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x6a0f12fa8f2b, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/tags-music.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---tags-tag!./.cache/json/tags-tag.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x63c62a4ba499, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/tags-tag.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---tags-videogames!./.cache/json/tags-videogames.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x8092bd2ef553, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/tags-videogames.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---tags!./.cache/json/tags.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(55702396619907, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/tags.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---telegram-html!./.cache/json/telegram-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x61fbbcd3ea6e, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/telegram-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---top-podcasts-html!./.cache/json/top-podcasts-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(97295374547357, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/top-podcasts-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=path---we-have-lift-off-gsoc-html!./.cache/json/we-have-lift-off-gsoc-html.json': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(19775944182584, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/json-loader/index.js!./.cache/json/we-have-lift-off-gsoc-html.json'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-jsx!./.cache/layouts/index.js': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(79611799117203, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/babel-loader/lib/index.js?{"plugins":["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-stage-0/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js'
                );
              });
        });
      });
  },
  './.cache/loader.js': function(e, o, n) {
    (function(o) {
      'use strict';
      function t(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = n('./node_modules/react/react.js'),
        a = (t(s), n('./.cache/find-page.js')),
        l = t(a),
        d = n('./.cache/emitter.js'),
        u = t(d),
        r = void 0,
        c = {},
        m = {},
        i = {},
        j = {},
        p = {},
        h = [],
        g = [],
        b = {},
        f = [],
        y = {},
        x = function(e) {
          return (e && e.default) || e;
        },
        _ = void 0,
        k = !0;
      (_ = n('./.cache/prefetcher.js')({
        getNextQueuedResources: function() {
          return f.slice(-1)[0];
        },
        createResourceDownload: function(e) {
          v(e, function() {
            (f = f.filter(function(o) {
              return o !== e;
            })),
              _.onResourcedFinished(e);
          });
        },
      })),
        u.default.on('onPreLoadPageResources', function(e) {
          _.onPreLoadPageResources(e);
        }),
        u.default.on('onPostLoadPageResources', function(e) {
          _.onPostLoadPageResources(e);
        });
      var N = function(e, o) {
          return y[e] > y[o] ? 1 : y[e] < y[o] ? -1 : 0;
        },
        C = function(e, o) {
          return b[e] > b[o] ? 1 : b[e] < b[o] ? -1 : 0;
        },
        v = function(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function() {};
          if (j[e])
            o.nextTick(function() {
              n(null, j[e]);
            });
          else {
            var t =
              'component---' === e.slice(0, 12)
                ? m.components[e] || m.layouts[e]
                : m.json[e];
            t(function(o, t) {
              (j[e] = t), n(o, t);
            });
          }
        },
        w = function(e, n) {
          p[e]
            ? o.nextTick(function() {
                n(null, p[e]);
              })
            : v(e, function(o, t) {
                if (o) n(o);
                else {
                  var s = x(t());
                  (p[e] = s), n(o, s);
                }
              });
        },
        R = 1,
        S = {
          empty: function() {
            (g = []), (b = {}), (y = {}), (f = []), (h = []);
          },
          addPagesArray: function(e) {
            h = e;
            var o = '';
            r = (0, l.default)(e, o);
          },
          addDevRequires: function(e) {
            c = e;
          },
          addProdRequires: function(e) {
            m = e;
          },
          dequeue: function(e) {
            return g.pop();
          },
          enqueue: function(e) {
            if (
              !h.some(function(o) {
                return o.path === e;
              })
            )
              return !1;
            var o = 1 / R;
            (R += 1),
              b[e] ? (b[e] += 1) : (b[e] = 1),
              S.has(e) || g.unshift(e),
              g.sort(C);
            var n = r(e);
            return (
              n.jsonName &&
                (y[n.jsonName]
                  ? (y[n.jsonName] += 1 + o)
                  : (y[n.jsonName] = 1 + o),
                f.indexOf(n.jsonName) !== -1 ||
                  j[n.jsonName] ||
                  f.unshift(n.jsonName)),
              n.componentChunkName &&
                (y[n.componentChunkName]
                  ? (y[n.componentChunkName] += 1 + o)
                  : (y[n.componentChunkName] = 1 + o),
                f.indexOf(n.componentChunkName) !== -1 ||
                  j[n.jsonName] ||
                  f.unshift(n.componentChunkName)),
              f.sort(N),
              _.onNewResourcesAdded(),
              !0
            );
          },
          getResources: function() {
            return { resourcesArray: f, resourcesCount: y };
          },
          getPages: function() {
            return { pathArray: g, pathCount: b };
          },
          getPage: function(e) {
            return r(e);
          },
          has: function(e) {
            return g.some(function(o) {
              return o === e;
            });
          },
          getResourcesForPathname: function(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function() {};
            k &&
              navigator &&
              navigator.serviceWorker &&
              navigator.serviceWorker.controller &&
              'activated' === navigator.serviceWorker.controller.state &&
              (r(e) ||
                navigator.serviceWorker.getRegistrations().then(function(e) {
                  for (
                    var o = e,
                      n = Array.isArray(o),
                      t = 0,
                      o = n ? o : o[Symbol.iterator]();
                    ;

                  ) {
                    var s;
                    if (n) {
                      if (t >= o.length) break;
                      s = o[t++];
                    } else {
                      if (((t = o.next()), t.done)) break;
                      s = t.value;
                    }
                    var a = s;
                    a.unregister();
                  }
                  window.location.reload();
                })),
              (k = !1);
            var t = r(e);
            if (!t)
              return void console.log('A page wasn\'t found for "' + e + '"');
            if (((e = t.path), i[e]))
              return (
                o.nextTick(function() {
                  n(i[e]),
                    u.default.emit('onPostLoadPageResources', {
                      page: t,
                      pageResources: i[e],
                    });
                }),
                i[e]
              );
            u.default.emit('onPreLoadPageResources', { path: e });
            var s = void 0,
              a = void 0,
              l = void 0,
              d = function() {
                if (s && a && (!t.layoutComponentChunkName || l)) {
                  i[e] = { component: s, json: a, layout: l };
                  var o = { component: s, json: a, layout: l };
                  n(o),
                    u.default.emit('onPostLoadPageResources', {
                      page: t,
                      pageResources: o,
                    });
                }
              };
            return (
              w(t.componentChunkName, function(e, o) {
                e &&
                  console.log(
                    'Loading the component for ' + t.path + ' failed'
                  ),
                  (s = o),
                  d();
              }),
              w(t.jsonName, function(e, o) {
                e && console.log('Loading the JSON for ' + t.path + ' failed'),
                  (a = o),
                  d();
              }),
              void (
                t.layoutComponentChunkName &&
                w(t.layoutComponentChunkName, function(e, o) {
                  e &&
                    console.log('Loading the Layout for ' + t.path + ' failed'),
                    (l = o),
                    d();
                })
              )
            );
          },
          peek: function(e) {
            return g.slice(-1)[0];
          },
          length: function() {
            return g.length;
          },
          indexOf: function(e) {
            return g.length - g.indexOf(e) - 1;
          },
        };
      e.exports = S;
    }.call(o, n('./node_modules/process/browser.js')));
  },
  './.cache/pages.json': function(e, o) {
    e.exports = [
      {
        componentChunkName:
          'component---node-modules-gatsby-plugin-offline-app-shell-js',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'offline-plugin-app-shell-fallback.json',
        path: '/offline-plugin-app-shell-fallback/',
      },
      {
        componentChunkName: 'component---src-templates-tags-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'tags.json',
        path: '/tags',
      },
      {
        componentChunkName: 'component---src-templates-tags-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'tags-videogames.json',
        path: '/tags/videogames',
      },
      {
        componentChunkName: 'component---src-templates-tags-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'tags-music.json',
        path: '/tags/music',
      },
      {
        componentChunkName: 'component---src-templates-tags-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'tags-tag.json',
        path: '/tags/tag',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'psvr-html.json',
        path: '/psvr.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'best-of-2015-music-html.json',
        path: '/best-of-2015-music.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'top-podcasts-html.json',
        path: '/top-podcasts.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'hidden-sounds-html.json',
        path: '/hidden-sounds.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'sub-count-html.json',
        path: '/sub-count.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'speedy-terminal-tabs-html.json',
        path: '/speedy-terminal-tabs.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'ocw-2014-html.json',
        path: '/ocw-2014.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'telegram-html.json',
        path: '/telegram.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'best-of-2013-html.json',
        path: '/best-of-2013.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'droicon-mad-html.json',
        path: '/droicon-mad.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'arm-64-html.json',
        path: '/arm64.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'digital-downloads-html.json',
        path: '/digital-downloads.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'mac-g-4-html.json',
        path: '/mac-g4.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'rotten-apple-html.json',
        path: '/rotten-apple.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'fake-raspberry-html.json',
        path: '/fake-raspberry.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'best-of-2012-html.json',
        path: '/best-of-2012.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'kolibri-os-html.json',
        path: '/kolibri-os.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'cropping-pdfs-html.json',
        path: '/cropping-pdfs.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'phase-one-complete.json',
        path: '/phase-one-complete',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'start-orb-html.json',
        path: '/start-orb.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'pandora-fms-gsoc-html.json',
        path: '/pandora-fms-gsoc.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'drawing-to-a-close-gsoc-html.json',
        path: '/drawing-to-a-close-gsoc.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'quick-update-gsoc-html.json',
        path: '/quick-update-gsoc.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'foxy-utils-html.json',
        path: '/foxy-utils.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'we-have-lift-off-gsoc-html.json',
        path: '/we-have-lift-off-gsoc.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'silky-smooth-scrolling.json',
        path: '/silky-smooth-scrolling',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'four-days-to-go-gsoc-html.json',
        path: '/four-days-to-go-gsoc.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'first-irc-gsoc-html.json',
        path: '/first-irc-gsoc.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'i-found-them-html.json',
        path: '/i-found-them.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'back-to-the-start-html.json',
        path: '/back-to-the-start.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'just-an-average-html.json',
        path: '/just-an-average.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'root-of-the-problem-html.json',
        path: '/root-of-the-problem.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'fruity-computing-html.json',
        path: '/fruity-computing.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'sumatra-html.json',
        path: '/sumatra.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'it-knows-all-html.json',
        path: '/it-knows-all.html',
      },
      {
        componentChunkName: 'component---src-templates-blog-post-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'but-i-bought-it-html.json',
        path: '/but-i-bought-it.html',
      },
      {
        componentChunkName: 'component---src-pages-404-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: '404.json',
        path: '/404/',
      },
      {
        componentChunkName: 'component---src-pages-index-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'index.json',
        path: '/',
      },
      {
        componentChunkName: 'component---src-pages-about-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'about.json',
        path: '/about/',
      },
      {
        componentChunkName: 'component---src-pages-projects-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: 'projects.json',
        path: '/projects/',
      },
      {
        componentChunkName: 'component---src-pages-404-jsx',
        layout: 'index',
        layoutComponentChunkName: 'component---src-layouts-index-jsx',
        jsonName: '404-html.json',
        path: '/404.html',
      },
    ];
  },
  './.cache/prefetcher.js': function(e, o) {
    'use strict';
    e.exports = function(e) {
      var o = e.getNextQueuedResources,
        n = e.createResourceDownload,
        t = [],
        s = [],
        a = function() {
          var e = o();
          e && (s.push(e), n(e));
        },
        l = function(e) {
          switch (e.type) {
            case 'RESOURCE_FINISHED':
              s = s.filter(function(o) {
                return o !== e.payload;
              });
              break;
            case 'ON_PRE_LOAD_PAGE_RESOURCES':
              t.push(e.payload.path);
              break;
            case 'ON_POST_LOAD_PAGE_RESOURCES':
              t = t.filter(function(o) {
                return o !== e.payload.page.path;
              });
              break;
            case 'ON_NEW_RESOURCES_ADDED':
          }
          setTimeout(function() {
            0 === s.length && 0 === t.length && a();
          }, 0);
        };
      return {
        onResourcedFinished: function(e) {
          l({ type: 'RESOURCE_FINISHED', payload: e });
        },
        onPreLoadPageResources: function(e) {
          l({ type: 'ON_PRE_LOAD_PAGE_RESOURCES', payload: e });
        },
        onPostLoadPageResources: function(e) {
          l({ type: 'ON_POST_LOAD_PAGE_RESOURCES', payload: e });
        },
        onNewResourcesAdded: function() {
          l({ type: 'ON_NEW_RESOURCES_ADDED' });
        },
        getState: function() {
          return { pagesLoading: t, resourcesDownloading: s };
        },
        empty: function() {
          (t = []), (s = []);
        },
      };
    };
  },
  0: function(e, o, n) {
    'use strict';
    function t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s =
        Object.assign ||
        function(e) {
          for (var o = 1; o < arguments.length; o++) {
            var n = arguments[o];
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          }
          return e;
        },
      a = n('./.cache/api-runner-browser.js'),
      l = n('./node_modules/react/react.js'),
      d = t(l),
      u = n('./node_modules/react-dom/index.js'),
      r = t(u),
      c = n('./node_modules/react-router-dom/index.js'),
      m = n('./node_modules/gatsby-react-router-scroll/index.js'),
      i = n('./node_modules/history/createBrowserHistory.js'),
      j = t(i),
      p = n('./node_modules/domready/ready.js'),
      h = t(p),
      g = n('./.cache/emitter.js'),
      b = t(g),
      f = n('./.cache/pages.json'),
      y = t(f),
      x = n('./.cache/component-renderer.js'),
      _ = t(x),
      k = n('./.cache/async-requires.js'),
      N = t(k),
      C = n('./.cache/loader.js'),
      v = t(C);
    n('./node_modules/core-js/modules/es6.promise.js'),
      (window.___emitter = b.default),
      v.default.addPagesArray(y.default),
      v.default.addProdRequires(N.default),
      (window.asyncRequires = N.default),
      (window.___loader = v.default),
      (window.matchPath = c.matchPath),
      (0, a.apiRunnerAsync)('onClientEntry').then(function() {
        function e(e) {
          window.___history ||
            ((window.___history = e),
            e.listen(function(e, o) {
              (0, a.apiRunner)('onRouteUpdate', { location: e, action: o });
            }));
        }
        function o(e, o) {
          var n = o.location.pathname,
            t = (0, a.apiRunner)('shouldUpdateScroll', {
              prevRouterProps: e,
              pathname: n,
            });
          if (t.length > 0) return t[0];
          if (e) {
            var s = e.location.pathname;
            if (s === n) return !1;
          }
          return !0;
        }
        (0, a.apiRunner)('registerServiceWorker').length > 0 &&
          n('./.cache/register-service-worker.js');
        var t = function(e) {
          function o(t) {
            t.page.path === v.default.getPage(e).path &&
              (b.default.off('onPostLoadPageResources', o),
              clearTimeout(n),
              window.___history.push(e));
          }
          if (window.location.pathname !== e) {
            var n = setTimeout(function() {
              b.default.off('onPostLoadPageResources', o),
                b.default.emit('onDelayedLoadPageResources', { pathname: e }),
                window.___history.push(e);
            }, 1e3);
            v.default.getResourcesForPathname(e)
              ? (clearTimeout(n), window.___history.push(e))
              : b.default.on('onPostLoadPageResources', o);
          }
        };
        window.___navigateTo = t;
        var u = (0, j.default)();
        (0,
        a.apiRunner)('onRouteUpdate', { location: u.location, action: u.action });
        var i = (0, a.apiRunner)('replaceRouterComponent', { history: u })[0],
          p = function(e) {
            var o = e.children;
            return d.default.createElement(c.Router, { history: u }, o);
          };
        v.default.getResourcesForPathname(window.location.pathname, function() {
          var n = function() {
              return (0, l.createElement)(
                i ? i : p,
                null,
                (0, l.createElement)(
                  m.ScrollContext,
                  { shouldUpdateScroll: o },
                  (0, l.createElement)((0, c.withRouter)(_.default), {
                    layout: !0,
                    children: function(o) {
                      return (0, l.createElement)(c.Route, {
                        render: function(n) {
                          e(n.history);
                          var t = o ? o : n;
                          return v.default.getPage(t.location.pathname)
                            ? (0, l.createElement)(
                                _.default,
                                s({ page: !0 }, t)
                              )
                            : (0, l.createElement)(_.default, {
                                location: { page: !0, pathname: '/404.html' },
                              });
                        },
                      });
                    },
                  })
                )
              );
            },
            t = (0, a.apiRunner)('wrapRootComponent', { Root: n }, n)[0];
          (0, h.default)(function() {
            return r.default.render(
              d.default.createElement(t, null),
              'undefined' != typeof window
                ? document.getElementById('___gatsby')
                : void 0,
              function() {
                (0, a.apiRunner)('onInitialClientRender');
              }
            );
          });
        });
      });
  },
  './.cache/register-service-worker.js': function(e, o, n) {
    'use strict';
    function t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = n('./.cache/emitter.js'),
      a = t(s),
      l = '/';
    'serviceWorker' in navigator &&
      navigator.serviceWorker
        .register(l + 'sw.js')
        .then(function(e) {
          e.addEventListener('updatefound', function() {
            var o = e.installing;
            console.log('installingWorker', o),
              o.addEventListener('statechange', function() {
                switch (o.state) {
                  case 'installed':
                    navigator.serviceWorker.controller
                      ? window.location.reload()
                      : (console.log('Content is now available offline!'),
                        a.default.emit('sw:installed'));
                    break;
                  case 'redundant':
                    console.error(
                      'The installing service worker became redundant.'
                    );
                }
              });
          });
        })
        .catch(function(e) {
          console.error('Error during service worker registration:', e);
        });
  },
  './node_modules/domready/ready.js': function(e, o, n) {
    !(function(o, n) {
      e.exports = n();
    })('domready', function() {
      var e,
        o = [],
        n = document,
        t = n.documentElement.doScroll,
        s = 'DOMContentLoaded',
        a = (t ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
      return (
        a ||
          n.addEventListener(
            s,
            (e = function() {
              for (n.removeEventListener(s, e), a = 1; (e = o.shift()); ) e();
            })
          ),
        function(e) {
          a ? setTimeout(e, 0) : o.push(e);
        }
      );
    });
  },
  './node_modules/gatsby-module-loader/patch.js': function(e, o, n) {
    'use strict';
    function t() {
      function e(e) {
        var o = t.lastChild;
        return 'SCRIPT' !== o.tagName
          ? void (
              'undefined' != typeof console &&
              console.warn &&
              console.warn('Script is not a script', o)
            )
          : void (o.onload = o.onerror = function() {
              (o.onload = o.onerror = null), setTimeout(e, 0);
            });
      }
      var o,
        t = document.querySelector('head'),
        s = n.e,
        a = n.s;
      n.e = function(t, l) {
        var d = !1,
          u = !0,
          r = function(e) {
            l && (l(n, e), (l = null));
          };
        return !a && o && o[t]
          ? void r(!0)
          : (s(t, function() {
              d ||
                ((d = !0),
                u
                  ? setTimeout(function() {
                      r();
                    })
                  : r());
            }),
            void (
              d ||
              ((u = !1),
              e(function() {
                d ||
                  ((d = !0),
                  a ? (a[t] = void 0) : (o || (o = {}), (o[t] = !0)),
                  r(!0));
              }))
            ));
      };
    }
    t();
  },
  './node_modules/gatsby-plugin-catch-links/catch-links.js': function(e, o) {
    'use strict';
    e.exports = function(e, o) {
      e.addEventListener('click', function(e) {
        if (
          0 !== e.button ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.defaultPrevented
        )
          return !0;
        for (var n = null, t = e.target; t.parentNode; t = t.parentNode)
          if ('A' === t.nodeName) {
            n = t;
            break;
          }
        if (!n) return !0;
        if (n.target && '_self' !== n.target.toLowerCase()) return !0;
        if (n.pathname === window.location.pathname && '' !== n.target.hash)
          return !0;
        if (n.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i) !== -1)
          return !0;
        var s = document.createElement('a');
        s.href = n.href;
        var a = document.createElement('a');
        return (
          (a.href = window.location.href),
          s.host !== a.host ||
            (e.preventDefault(), o(n.getAttribute('href')), !1)
        );
      });
    };
  },
  './node_modules/gatsby-plugin-catch-links/gatsby-browser.js': function(
    e,
    o,
    n
  ) {
    'use strict';
    function t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = n('./node_modules/gatsby-link/index.js'),
      a = n('./node_modules/gatsby-plugin-catch-links/catch-links.js'),
      l = t(a);
    (0, l.default)(window, function(e) {
      (0, s.navigateTo)(e);
    });
  },
  './node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(99219681209289, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n('./node_modules/gatsby-plugin-offline/app-shell.js');
              });
        });
      });
  },
  './node_modules/gatsby-plugin-offline/gatsby-browser.js': function(e, o) {
    'use strict';
    o.registerServiceWorker = function() {
      return !0;
    };
  },
  './node_modules/gatsby-remark-autolink-headers/gatsby-browser.js': function(
    e,
    o,
    n
  ) {
    'use strict';
    var t = function(e) {
      setTimeout(function() {
        var o = window.location.hash.replace('#', '');
        if ('' !== o) {
          var n = document.getElementById(o);
          if (n) {
            var t = n.offsetTop;
            window.scrollTo(0, t - e);
          }
        }
      }, 10);
    };
    (o.onClientEntry = function(e, o) {
      var n = 0;
      o.offsetY && (n = o.offsetY);
    }),
      (o.onRouteUpdate = function(e, o) {
        var n = 0;
        o.offsetY && (n = o.offsetY), t(n);
      });
  },
  './node_modules/mitt/dist/mitt.js': function(e, o) {
    function n(e) {
      return (
        (e = e || Object.create(null)),
        {
          on: function(o, n) {
            (e[o] || (e[o] = [])).push(n);
          },
          off: function(o, n) {
            e[o] && e[o].splice(e[o].indexOf(n) >>> 0, 1);
          },
          emit: function(o, n) {
            (e[o] || []).map(function(e) {
              e(n);
            }),
              (e['*'] || []).map(function(e) {
                e(o, n);
              });
          },
        }
      );
    }
    e.exports = n;
  },
  './node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-jsx!./src/pages/404.jsx': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xa6bc690a59e9, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/babel-loader/lib/index.js?{"plugins":["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-stage-0/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.jsx'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=component---src-pages-about-jsx!./src/pages/about.jsx': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x83323ebd9d39, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/babel-loader/lib/index.js?{"plugins":["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-stage-0/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.jsx'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-jsx!./src/pages/index.jsx': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xc23565d713b7, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/babel-loader/lib/index.js?{"plugins":["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-stage-0/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.jsx'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=component---src-pages-projects-jsx!./src/pages/projects.jsx': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(19843951674672, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/babel-loader/lib/index.js?{"plugins":["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-stage-0/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/projects.jsx'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=component---src-templates-blog-post-jsx!./src/templates/blog-post.jsx': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0xb92941d84ed6, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/babel-loader/lib/index.js?{"plugins":["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-stage-0/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/blog-post.jsx'
                );
              });
        });
      });
  },
  './node_modules/gatsby-module-loader/index.js?name=component---src-templates-tags-jsx!./src/templates/tags.jsx': function(
    e,
    o,
    n
  ) {
    n('./node_modules/gatsby-module-loader/patch.js'),
      (e.exports = function(e) {
        return n.e(0x5e2ecaeed82a, function(o, t) {
          t
            ? (console.log('bundle loading error', t), e(!0))
            : e(null, function() {
                return n(
                  './node_modules/babel-loader/lib/index.js?{"plugins":["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-stage-0/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/tags.jsx'
                );
              });
        });
      });
  },
});
//# sourceMappingURL=app-2b56a73e7c8c990d4a48.js.map
