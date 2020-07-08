const languages = require("./src/data/languages");
const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  // console.log("Starting createPages");

  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              tags
              templateKey
              path
              language
            }
            fields {
              slug
              localizedPath
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    // const tours = result.data.allTourJson.edges;

    // tours.forEach(edge => {
    //   const {
    //     node: { templateKey, path: uri, id }
    //   } = edge;
    //   try {
    //     createPage({
    //       path: uri,
    //       component: path.resolve(`src/templates/${String(templateKey)}.js`),
    //       // additional data can be passed via context
    //       context: {
    //         id
    //       }
    //     });
    //   } catch (error) {
    //     // console.log(templateKey);
    //     throw error;
    //   }
    // });

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      const language = edge.node.frontmatter.language || "en";
      // console.log("Path:" + edge.node.frontmatter.path);
      // console.log(
      //   "Path:" +
      //     edge.node.frontmatter.path +
      //     ", slug:" +
      //     edge.node.fields.slug +
      //     ", localizedPath:" +
      //     edge.node.fields.localizedPath +
      //     ", language:" +
      //     language
      // );
      try {
        createPage({
          path:
            edge.node.frontmatter.path ||
            edge.node.fields.localizedPath ||
            edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          localizedPath: edge.node.fields.localizedPath,
          languages: [],
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            language
          }
        });
      } catch (error) {
        // console.log(edge.node.frontmatter.templateKey);
        throw error;
      }
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  // console.log('Starting onCreateNode');

  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    const value = createFilePath({ node, getNode });
    // console.log(value);

    createNodeField({
      name: `slug`,
      node,
      value
    });

    if (_.get(node, "frontmatter.slug")) {
      slug = `/${node.frontmatter.slug.toLowerCase()}/`;
    }
    // else if (
    //   // home page gets root slug
    //   parsedFilePath.name === "home" &&
    //   parsedFilePath.dir.indexOf("pages") !== -1
    //   // && parsedFilePath.dir.indexOf("posts") !== -1
    // ) {
    //   slug = `/`;
    // }
    else if (_.get(node, "frontmatter.path")) {
      slug = `/${_.kebabCase(node.frontmatter.path)}/`;
    } else if (
      _.get(node, "frontmatter.title") &&
      parsedFilePath.dir.indexOf("tours") !== -1
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}/`;
    } else if (_.get(node, "frontmatter.title")) {
      slug = `/${_.kebabCase(parsedFilePath.dir)}/${_.kebabCase(
        node.frontmatter.title
      )}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    // console.log("slug:" + slug);

    // Add contentType to node.fields
    createNodeField({
      node,
      name: `contentType`,
      value: parsedFilePath.dir
    });

    //add lankey to node fields
    var regex = /^.+\.([aA-zZ]{2})$/gi;
    var matches = regex.exec(parsedFilePath.name);
    var langCode = matches && matches.length > 1 ? matches[1] : "en";
    var langKey = langCode.length > 0 ? langCode : "en";

    createNodeField({
      node,
      name: `langKey`,
      value: langKey
    });

    //Create localized path
    createNodeField({
      node,
      name: `localizedPath`,
      value:
        langKey === languages.defaultLangKey ||
        node.frontmatter.language === languages.defaultLangKey
          ? node.frontmatter.path || slug
          : `/${langKey}${slug}/`
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }

    type Feature @infer {
      title: String
      textcolor: String
      align: String
      bokunLink: String
      bokunId: String
      bokunLinkText: String
    }

    type Author @infer {
      country: String
      name: String
      reviewerSource: String
      avatar: File
    }

    type Pricing @infer {
      discount: Float
      price: Float
      bestValue: Boolean
      type: String
      highSeasonPriceSupplement: Float
      package: String
      packageContents: [PackageContents]
    }

    type PackageContents @infer {
      icon: String
      title: String
      value: String
    }

    type Frontmatter @infer {
      minAge: Int
      distance: Int
      difficulty: Int
      duration: Int
      distanceUnit: String
      durationUnit: String
      groupSizeMax: Int
      groupSizeMin: Int
      highlight: Boolean
      physicality: Int
      skillLevel: Int
      pricing: [Pricing]
      afterequipment: String
      mapUrl: String
      feature: Feature
      showHome: Boolean
      author: Author
    }
    
  `;
  createTypes(typeDefs);
};

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage, deletePage } = actions;

//   console.log("Current path: " + page.path);

//   if (page.path === "/_optional/") {
//     deletePage(page);
//     return;
//   }

//   const regex = /^.+\.([aA-zZ]{2})\/.*$/;
//   // Check if the page is a localized 404
//   if (page.path.match(regex)) {
//     const oldPage = { ...page };

//     // Get the language code from the path, and match all paths
//     // starting with this code (apart from other valid paths)
//     const langCode = regex.exec(page.path)[1] || languages.defaultLangKey;
//     const isDefaultLanguage = languages.defaultLangKey === langCode;

//     // page.matchPath = isDefaultLanguage ? `/*` : `/${langCode}/*`;

//     let newPath = isDefaultLanguage
//       ? `${page.path.replace(`.${langCode}`, "")}`
//       : `/${langCode}${page.path.replace(`.${langCode}`, "")}`;

//     if (newPath.endsWith("/index/"))
//       newPath = newPath.substring(0, newPath.length - 7);

//     console.log(`${page.path} -> ${newPath}`);

//     // Recreate the modified page
//     deletePage(oldPage);
//     createPage({
//       ...page,
//       path: newPath.replace("/../", "/")
//     });
//   }
// };

// function replaceLanguagePath(path) {
//   var langCode = path.substring(path.length - 2);

//   if (langCode === languages.defaultLangKey)
//     return path.substring(0, path.length - 3);

//   if (languages.langs.indexOf(langCode) !== -1) {
//     return path.substring(0, path.length - 3);
//   }

//   return path;
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   const typeDefs = `
//     type BannersJsonBanners implements node{
//       image: File
//     }
//   `;
//   createTypes(typeDefs);
// };
// exports.sourceNodes = ({actions}) => {
//   const {createTypes} = actions
//   const typeDefs = `

//   type Banner implements Node {
//     image: File
//   }

//   type BannersJson implements Node {
//     banners: [Banner]
//   }
//   `
//   createTypes(typeDefs)
// }

// function createTourPages(tours, createPage) {
//   tours.forEach(edge => {
//     edge.node.tours.forEach(tour => {
//       const id = edge.node.id;
//       // const id = tour.Id;
//       createPage({
//         path: tour.path || tour.slug,
//         component: path.resolve(`src/templates/${String(tour.TemplateKey)}.js`),
//         // additional data can be passed via context
//         context: {
//           id,
//           ...tour
//         }
//       });
//     });
//   });
// }

// exports.createPages = ({ actions: { createPage } }) => {
//   createPage({
//     path: '/hello',
//     component: HelloWorldComponent,
//   });

//   createPage({
//     path: '/hello-slash/',
//     component: HelloWorldComponent,
//   });
// };
