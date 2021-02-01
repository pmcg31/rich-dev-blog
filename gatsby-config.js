/**
 * Gatsby site configuration.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Idea Up`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-reading-time`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 500,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener",
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: f => `blogData/${f.name}`
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              quality: 100,
              // linkImagesToOriginal: false,
            },
          },
          // {
          //   resolve: require.resolve(`./plugins/gatsby-remark-images-mymodal`),
          // },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     // Class prefix for <pre> tags containing syntax highlighting;
          //     // defaults to 'language-' (e.g. <pre class="language-js">).
          //     // If your site loads Prism into the browser at runtime,
          //     // (e.g. for use with libraries like react-live),
          //     // you may use this to prevent Prism from re-processing syntax.
          //     // This is an uncommon use-case though;
          //     // If you're unsure, it's best to use the default value.
          //     classPrefix: "language-",
          //     // This is used to allow setting a language for inline code
          //     // (i.e. single backticks) by creating a separator.
          //     // This separator is a string and will do no white-space
          //     // stripping.
          //     // A suggested value for English speakers is the non-ascii
          //     // character '›'.
          //     inlineCodeMarker: null,
          //     // This lets you set up language aliases.  For example,
          //     // setting this to '{ sh: "bash" }' will let you use
          //     // the language "sh" which will highlight using the
          //     // bash highlighter.
          //     aliases: {},
          //     // This toggles the display of line numbers globally alongside the code.
          //     // To use it, add the following line in gatsby-browser.js
          //     // right after importing the prism color scheme:
          //     //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
          //     // Defaults to false.
          //     // If you wish to only show line numbers on certain code blocks,
          //     // leave false and use the {numberLines: true} syntax below
          //     showLineNumbers: false,
          //     // If setting this to true, the parser won't handle and highlight inline
          //     // code used in markdown i.e. single backtick code like `this`.
          //     noInlineHighlight: false,
          //     // This adds a new language definition to Prism or extend an already
          //     // existing language definition. More details on this option can be
          //     // found under the header "Add new language definition or extend an
          //     // existing language" below.
          //     languageExtensions: [
          //       {
          //         language: "superscript",
          //         extend: "javascript",
          //         definition: {
          //           superscript_types: /(SuperType)/,
          //         },
          //         insertBefore: {
          //           function: {
          //             superscript_keywords: /(superif|superelse)/,
          //           },
          //         },
          //       },
          //     ],
          //     // Customize the prompt used in shell output
          //     // Values below are default
          //     prompt: {
          //       user: "root",
          //       host: "localhost",
          //       global: false,
          //     },
          //   },
          // },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
