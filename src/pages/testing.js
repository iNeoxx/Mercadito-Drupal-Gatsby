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
            <h3>{product.node.field_title.value}</h3>
            <div className="redetxt" dangerouslySetInnerHTML={{ __html: product.node.field_price }} />
            <div className="redetxt" dangerouslySetInnerHTML={{ __html: product.node.body.value }} />
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
    allNodeProduct(filter: {field_category: {drupal_internal__target_id: {eq: 5}}}) {
      edges {
        node {
          id
          field_title {
            value
          }
          field_price
          body {
            value
          }
        }
      }
    }
  }
  
  

  
`
export default TestingPage