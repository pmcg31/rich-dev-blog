const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  //const blogPostMdx = path.resolve('./src/templates/blog-post-mdx.js')
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Get plain markdown pages
  const mdPosts = result.data.allMarkdownRemark.edges
  console.log(mdPosts[0])

  // Get mdx pages
  const mdxPosts = result.data.allMdx.edges

  // Merge data into one array called posts
  var md_idx = 0,
    mdx_idx = 0,
    posts = []
  while (mdx_idx < mdxPosts.length || md_idx < mdPosts.length) {
    console.log("mdPosts.length: " + mdPosts.length)
    console.log("mdxPosts.length: " + mdxPosts.length)
    console.log("md_idx: " + md_idx + " mdx_idx: " + mdx_idx)
    console.log("mdPosts[" + md_idx + "]: ")
    console.log(mdPosts[md_idx])
    console.log("mdxPosts[" + mdx_idx + "]: ")
    console.log(mdxPosts[mdx_idx])
    const mdxDate =
      mdx_idx < mdxPosts.length
        ? new Date(mdxPosts[mdx_idx].node.frontmatter.date)
        : new Date("1970-01-01")
    const mdDate =
      md_idx < mdPosts.length
        ? new Date(mdPosts[md_idx].node.frontmatter.date)
        : new Date("1970-01-01")

    console.log("md date: " + mdDate + " mdxDate: " + mdxDate)

    if (mdxDate > mdDate) {
      // Process mdx node
      if (mdx_idx < mdxPosts.length) {
        posts.push(mdxPosts[mdx_idx])
        mdx_idx++
      }
    } else {
      // Process md node
      if (md_idx < mdPosts.length) {
        posts.push(mdPosts[md_idx])
        md_idx++
      }
    }
  }

  // Iterate posts and create pages
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    })
  }

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/blog${value}`,
    })
  }
}
