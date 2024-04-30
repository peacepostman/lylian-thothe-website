const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Portfolios {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: '/portfolio/' + node.frontmatter.slug,
      component: path.resolve('./src/components/portfolio/PortfolioDetails.tsx'),
      context: { slug: node.frontmatter.slug },
    });
  });
};
