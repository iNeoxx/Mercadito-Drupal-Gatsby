import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ArticlePage = ({data}) => {
  console.log(data.allNodePage);
  //deconstructing the content coming from data
  const ArticlePage = data.allNodeArticle.edges[0].node;
  return(
    <Layout>
      <h3>{ArticlePage.title}</h3>
      <Img fluid={ArticlePage.relationships.field_image.localFile.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={ { __html: ArticlePage.body.value}}/>
      <Link to="/">Go to Home</Link>
      <Link to="/testing/">Go to products</Link>
    </Layout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
export const query = graphql`
query {
  allNodeArticle (filter:{id:{eq:"5d28c988-d8e0-5533-9f6f-bfbc42b9d2a3"}}) {
    edges {
      node {
        id
        title
        body {
          value
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
}

  
`
export default ArticlePage