import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  console.log(data.allNodePage);
  //deconstructing the content coming from data
  const HomePage = data.allNodePage.edges[0].node;
  return(
    <Layout>
      <h3>{HomePage.title}</h3>
      <div className="redetxt" dangerouslySetInnerHTML={ { __html: HomePage.body.value}}/>
      <Link to="/article/">Go to article</Link>
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
  allNodePage(
    filter:{id:{eq:"bae0fd08-b382-58bd-86ce-dc83ba9a7c77"}}) {
  edges {
    node {
      id
      title
      body {
        value
      } 
    }
  }
}
}
`
export default IndexPage

