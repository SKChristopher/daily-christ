import React, { useState, useEffect } from "react"
import Axios from 'axios'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const createURL = (characterName, realm) => {
    return `https://us.api.blizzard.com/profile/wow/character/${realm}/${characterName}/pvp-bracket/3v3?namespace=profile-us&locale=en_US&access_token=USJOux74KBnWUBsxSH75p6CpzQAI1ph4Le`
  }

  const url = createURL("silverkitty", "tichondrius")
  const [data, setData] = useState(Axios.get(url))

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(url)
      setData(result.data)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
        <div>
          <p>
            {data && data.rating && data.character.name
              ? `${data.character.name} : ${data.rating.toString()}`
              : "loading..."}
          </p>
          <p>
            {data && data.weekly_match_statistics
              ? `This week : ${JSON.stringify(data.weekly_match_statistics)}`
              : "loading..."}
          </p>
          <p>
            {data && data.season_match_statistics
              ? `This season : ${JSON.stringify(data.season_match_statistics)}`
              : "loading..."}
          </p>
        </div>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
