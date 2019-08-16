import React from 'react'
import { Link } from 'gatsby'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="blog" />
    <List>
      {data.allMarkdownRemark.edges
        .sort((a, b) => {
          const aDate = a.node.frontmatter.date.split('/')
          const bDate = b.node.frontmatter.date.split('/')
          return new Date(new Date(bDate[0], bDate[1], bDate[2])) - new Date(aDate[0], aDate[1], aDate[2])
        })
        .map(post => (
          <ListItem
            button
            component={ Link }
            to={ post.node.frontmatter.path }
            key={ post.node.id }
            style={{
              display: 'grid',
              gridTemplateColumns: '10% 30% 50% 10%'
            }}
          >
            <small>{ post.node.frontmatter.date }</small>
            <ListItemText
              style={{
                display: 'inline',
              }}
              primary={ post.node.frontmatter.title }
            />
          </ListItem>
        ))}
    </List>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default BlogPage
