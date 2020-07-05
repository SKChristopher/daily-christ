import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// const colors = [
//   "rebeccapurple",
//   "#F5B7B1",
//   "#F8C471",
//   "#85C1E9",
//   "#82E0AA",
//   "#5D6D7E",
//   "#F7DC6F",
// ]

// const today = new Date()
// const dayNum = today.getDay()

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'white', // `${colors[dayNum]}`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#9400D3`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
