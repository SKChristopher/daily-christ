import React from "react"
import { Link } from "gatsby"
import IconButton from "@material-ui/core/IconButton"
import { ArrowBack } from "@material-ui/icons"
import moment from "moment"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { maxPage } from "./data"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark
  const date = moment(post.frontmatter.date).format("MMMM Do, YYYY")
  const { title, path } = post.frontmatter
  const { html } = post
  const pathNum = path.slice(1, path.length) * 1

  return (
    <Layout>
      <SEO title={title} />
      <IconButton
        aria-label="back"
        component={Link}
        to="/blog"
        style={{
          margin: "3px",
          padding: "6px",
        }}
      >
        <ArrowBack />
      </IconButton>
      {/* <Link to="blog">Go Back</Link> */}
      <hr />
      <h1>{title}</h1>
      <div
        style={{
          paddingBottom: "20px",
          listStyle: "none",
          justifyContent: "space-evenly",
        }}
      >
        <ButtonGroup>
          {pathNum > 1 && (
            <Button
              aria-label="previous"
              component={Link}
              to={`/${pathNum - 1}`}
            >
              Prev
            </Button>
          )}
          {pathNum < maxPage && (
            <Button aria-label="next" component={Link} to={`/${pathNum + 1}`}>
              Next
            </Button>
          )}
        </ButtonGroup>
      </div>
      <h4
        style={{
          color: "grey",
        }}
      >
        {date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
