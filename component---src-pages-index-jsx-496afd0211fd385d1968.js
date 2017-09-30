webpackJsonp([0xc23565d713b7], {
  './src/components/Link.jsx': function(e, t, n) {
    'use strict';
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      var t = e.children,
        n = e.className,
        s = e.to;
      return r.default.createElement(
        d.default,
        { className: ['link'].concat(n || []).join(' '), to: s },
        t
      );
    }
    (t.__esModule = !0), (t.default = a);
    var o = n('./node_modules/react/react.js'),
      r = s(o),
      l = n('./node_modules/gatsby-link/index.js'),
      d = s(l);
    n('./src/scss/Link.scss'), (e.exports = t.default);
  },
  './node_modules/babel-loader/lib/index.js?{"plugins":["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-stage-0/lib/index.js","/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.jsx': function(
    e,
    t,
    n
  ) {
    'use strict';
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e, t) {
      return (e.raw = t), e;
    }
    function o(e) {
      var t = e.data,
        n = t.allMarkdownRemark.edges;
      return i.default.createElement(
        'div',
        { className: 'content-container' },
        i.default.createElement(
          'div',
          { className: 'content' },
          n
            .filter(function(e) {
              return e.node.frontmatter.title.length > 0;
            })
            .map(function(e) {
              var t = e.node;
              return i.default.createElement(
                b,
                { id: 'blog-post-preview', key: t.id },
                i.default.createElement(
                  p,
                  { id: 'blog-post-title' },
                  i.default.createElement(
                    f.default,
                    { to: t.frontmatter.path },
                    t.frontmatter.title
                  )
                ),
                i.default.createElement('p', null, t.excerpt),
                i.default.createElement(
                  f.default,
                  { to: t.frontmatter.path },
                  'Read more'
                )
              );
            })
        )
      );
    }
    (t.__esModule = !0), (t.pageQuery = void 0);
    var r = a(
        [
          '\n  margin: 0 auto 30px 0;\n  padding-bottom: 20px;\n  maxWidth: 960;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  border-bottom: 2px solid #eee;\n  &:last-child {\n    border-bottom-width: 0;\n  }\n',
        ],
        [
          '\n  margin: 0 auto 30px 0;\n  padding-bottom: 20px;\n  maxWidth: 960;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  border-bottom: 2px solid #eee;\n  &:last-child {\n    border-bottom-width: 0;\n  }\n',
        ]
      ),
      l = a(
        [
          '\n  width: 100%;\n  font-size: 1.5em;\n  margin-top: 0;\n  @media only screen and (max-width: 720px) {\n    font-size: 1.4em;\n  }\n',
        ],
        [
          '\n  width: 100%;\n  font-size: 1.5em;\n  margin-top: 0;\n  @media only screen and (max-width: 720px) {\n    font-size: 1.4em;\n  }\n',
        ]
      );
    t.default = o;
    var d = n('./node_modules/react/react.js'),
      i = s(d),
      c = n('./node_modules/styled-components/lib/index.js'),
      u = s(c),
      m = n('./src/components/Link.jsx'),
      f = s(m);
    n('./src/scss/index.scss'), n('./src/scss/content-container.scss');
    var b = u.default.div(r),
      p = u.default.h1(l);
    t.pageQuery = function(e) {
      e.graphql;
      return '** extracted graphql fragment **';
    };
  },
  './src/scss/Link.scss': function(e, t) {},
  './src/scss/index.scss': function(e, t) {},
});
//# sourceMappingURL=component---src-pages-index-jsx-496afd0211fd385d1968.js.map
