import React from 'react'
import { Link } from 'gatsby'
import IconButton from '@material-ui/core/IconButton'
import { ArrowBack } from '@material-ui/icons'
import moment from 'moment'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark
  const date = moment(post.frontmatter.date).format('MMMM Do, YYYY')

  return(
    <Layout>
      <SEO title="blog post" />
      <IconButton
        aria-label="back"
        component={ Link }
        to="blog"
        style={{
          margin: '3px',
          padding: '6px',
        }}
      >
        <ArrowBack />
      </IconButton>
      {/* <Link to="blog">Go Back</Link> */}
      <hr />
      <h1>{ post.frontmatter.title }</h1>
      <h4 style={{
        color: 'grey',
      }}>{ date }</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
