import React from "react"
import moment from 'moment'

import Layout from "../components/layout"
import SEO from "../components/seo"

const today = moment().format("MMMM Do, YYYY")

const Checkbox = ({ text }) =>
  <p>
    <input type="checkbox" style={{
      zoom: '2.5',
    }} />
    &nbsp;{ text }
  </p>

const ListPage = () => (
  <Layout>
    <SEO title="List" />
    <div>
      <br />
      <p style={{ textAlign: 'center', }}>{today}</p>
      <hr />
      <div style={{
        marginLeft: '25%',
      }}>
        <Checkbox text="do 1 thing" />
        <Checkbox text="wake up" />
        <Checkbox text="breakfast" />
        <Checkbox text="coffee in the afternoon" />
        <Checkbox text="smile or something" />
        <Checkbox text="meditate" />
      </div>
    </div>
  </Layout>
)

export default ListPage
