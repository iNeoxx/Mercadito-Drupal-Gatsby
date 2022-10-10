import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TestingPage = ({ data }) => {
    console.log(data.allNodeProduct.edges[0].node);
    //deconstructing the content coming from data
    const TestingPage = data.allNodeProduct.edges;
    const prodList = TestingPage.map((product) =>
        <div>
            <Img fluid={product.node.relationships.field_product_image.localFile.childImageSharp.fluid} />
            <h3>{product.node.field_product_name.value}</h3>
            <div dangerouslySetInnerHTML={{ __html: product.node.field_price }} />
            <div dangerouslySetInnerHTML={{ __html: product.node.field_description.value}} />
        </div>

    )
    return (
        <Layout>
            {prodList}
            <Link to="/">Go to Home</Link>

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
query MyQuery {
  allNodeProduct(filter: {field_state: {drupal_internal__target_id: {eq: 14}}}) {
    edges {
      node {
        id
        field_product_name {
          value
        }
        field_price
        field_description {
          value
        }
        relationships {
          field_product_image {
            localFile {
              childImageSharp{
                fluid(maxWidth: 1400 quality: 100){
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
export default TestingPage