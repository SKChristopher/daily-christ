import React, { useState, useEffect } from "react"
import axios from 'axios'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const createURL = (characterName, realm, accessToken) => {
    return `https://us.api.blizzard.com/profile/wow/character/${realm}/${characterName}/pvp-bracket/3v3?namespace=profile-us&locale=en_US&access_token=${accessToken}`
  }

  const [data, setData] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const user = process.env.bnet_client ? process.env.BNET_CLIENT : 'BNET_CLIENT_STRING'
      const password = process.env.bnet_secret ? process.env.BNET_SECRET : 'BNET_SECRET_STRING'
      console.log(process.env)
      console.log(process.env.BNET_CLIENT)

      var dataString = 'grant_type=client_credentials';

      const bnetTokenResponse = await axios(
        {
          url: 'https://us.battle.net/oauth/token',
          method: 'post',
          data: dataString,
          auth: {
            username: user,
            password,
          }
        }
      )

      const accessToken = bnetTokenResponse.data.access_token

      const url = createURL("silverkitty", "tichondrius", accessToken)
      const result = await axios.get(url)

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
