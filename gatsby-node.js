const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            category
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: '/projects/' + node.frontmatter.category + '/' + node.frontmatter.slug,
      component: path.resolve('./src/components/projects/ProjectDetails.tsx'),
      context: { slug: node.frontmatter.slug },
    });
  });
};
