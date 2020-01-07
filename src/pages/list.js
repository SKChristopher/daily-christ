import React from "react"
import moment from 'moment'

import Layout from "../components/layout"
import SEO from "../components/seo"

const today = moment().format("YYYY/MM/DD")

const Checkbox = ({ text }) =>
  <div>
    <input type="checkbox" />
    &nbsp;{ text }
  </div>

const ListPage = () => (
  <Layout>
    <SEO title="List" />
    <div style={{ textAlign: "center" }}>
      <br />
      <hr />
      <p>{today}</p>
      <Checkbox text="do 1 thing" />
      <Checkbox text="wake up" />
      <Checkbox text="breakfast" />
      <Checkbox text="coffee in the afternoon" />
      <Checkbox text="smile or something" />
      <Checkbox text="meditate" />
    </div>
  </Layout>
)

export default ListPage
