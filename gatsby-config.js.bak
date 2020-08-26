const languages = require("./src/data/languages");

module.exports = {
  siteMetadata: {
    title: "Top Bike Tours Portugal",
    siteUrl: "https://topbiketoursportugal.com/",
    description: `
    Top Bike Tours Portugal is a provider of holiday’s packages and routes, which offers an incredible holiday experience, entertainment and leisure activities based on quality and value.
    `,
    canonicalUrl: "https://topbiketoursportugal.com/",
    image: "https://topbiketoursportugal.com/images/jason-lengstorf.jpg",
    author: {
      name: "Top Bike Tours Portugal",
      minibio: `
      Founded in 2013, Top Bike Tours Portugal formerly Fold n 'Visit is a very young company, with experience in pedestrian and cycling tours in Porto and long distance cycling routes to the north of the Iberian Peninsula. Our activities are coordinated by tourism professionals, with a huge knowledge of heritage and sports.
      `,
    },
    organization: {
      name: "Top Bike Tours Portugal",
      url: "https://topbiketoursportugal.com",
      logo: "https://topbiketoursportugal.com/android-chrome-512x512.png",
    },
    social: {
      twitter: "https://twitter.com/FoldnVisit",
      fbAppID: "",
      youtube: "https://www.youtube.com/channel/UCqryPkh_snkIAqvDXFvaK7A",
      facebook: "https://www.facebook.com/topbiketoursportugal/",
      instagram: "https://www.instagram.com/topbiketoursportugal/",
      googleplus: "https://plus.google.com/u/0/112634467779546919402",
    },
    categories: [
      {
        slug: "acting-like-a-grown-up",
        name: "Acting Like a Grown-Up",
      },
      {
        slug: "finding-direction",
        name: "Finding Direction",
      },
      {
        slug: "happiness",
        name: "Building Happiness",
      },
      {
        slug: "motivation",
        name: "Staying Motivated",
      },
      {
        slug: "remote-productivity",
        name: "Remote Productivity",
      },
      {
        slug: "remote-work",
        name: "Living & Working Remotely",
      },
      {
        slug: "storytelling",
        name: "Storytelling",
      },
      {
        slug: "impact",
        name: "Creating an Impact",
      },
    ],
    icon: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     /*id: 'GTM-add_your_tag_here',*/
    //     id: 'GTM-NG8ZHTH',
    //     includeInDevelopment: false
    //   }
    // },
    // `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-106573860-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
      },
    },
    // {
    //   resolve: "gatsby-plugin-i18n",
    //   options: {
    //     langKeyDefault: "en",
    //     prefixDefault: false,
    //     langKeyForNull: "any",
    //     useLangKeyLayout: false,
    //     markdownRemark: {
    //       postPage: "src/templates/blog-post.js",
    //       query: `
    //         {
    //           allMarkdownRemark {
    //             edges {
    //               node {
    //                 fields {
    //                   slug,
    //                   langKey
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `
    //     }
    //   }
    // },
    // {
    //   resolve: `@mangoart/gatsby-plugin-purechat`,
    //   options: {
    //     // include the PureChat js snippet
    //     enabled: true,
    //     // your website id, extract from the snippet provided by purechat
    //     websiteId: `edb60542-b472-406a-8d78-e833449c21d8`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-load-script`,
    //   options: {
    //     disable: false,
    //     src: `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=78235668-9ba3-43e0-b6a9-4b5322217da3`,
    //     onLoad: `() => console.log('deu')`
    //   }
    // },
    //   resolve: `gatsby-plugin-tawk`, {
    //   options: {
    //     tawkId: "5862998cddb8373fd2b445cf"
    //     // get this from the tawk script widget
    //   }
    // },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    // {
    //   resolve: 'gatsby-plugin-react-leaflet',
    //   options: {
    //     linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
    //   }
    // },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto", "Lato", "Montserrat"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/content/pages`,
    //     name: "pages"
    //   }
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/settings`,
        name: "settings",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1444,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          `gatsby-remark-embedder`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-mdx`,
    //   options: {
    //     extensions: [".mdx", ".md"],
    //     defaultLayouts: {
    //       // This entry template will switch the page template based on
    //       // a frontmatter value provided in the CMS, allowing users to
    //       // choose different template layouts.
    //       default: require.resolve(
    //         `${__dirname}/src/page-templates/cms-entry.template.js`
    //       )
    //     }
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-netlify-cms",
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.js`
    //   }
    // },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        // manualInit: true,
        // enableIdentityWidget: false,
        // customizeWebpackConfig: (config, { plugins }) => {
        //   config.plugins.push(
        //     plugins.define({
        //       __MANIFEST_PLUGIN_HAS_LOCALISATION__: JSON.stringify('false'),
        //     }),
        //   );
        // },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `./src/data/`,
      },
    },

    // `gatsby-plugin-postcss`,

    // {
    //   resolve: `gatsby-plugin-purgecss`, // must be after other CSS plugins
    //   options: {
    //     develop: true,
    //     printRejected: true,
    //     ignore: ["react-image-lightbox/style.css","/banner.scss", "/banner.css","/tourPricing.mod.scss","/tourPricing.mod.css"],
    //   },
    // },
    
    // {
    //   resolve: 'gatsby-plugin-sw',
    //   options: {
    //     swPath: 'src/utils/my-service-worker.js', // Default to 'src/sw.js'
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Top Bike Tours Portugal`,
        short_name: `TopBikeTours`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        // Setting a color is optional.
        color: "white",
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [
          "/languages/*",
          `/_optional/`,
          "/banners/*",
          "/404.html",
          "/404.pt*",
          "/tags/index.en",
          "/tags/index.pt",
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            };
          }),
      },
    },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: "2701463496558439"
    //   }
    // },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
