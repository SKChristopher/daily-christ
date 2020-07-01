import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

const buttonLink = (text, link) => (
  <Button component={Link} to={link}>
    {text}
  </Button>
)

const buttonLinkHome = buttonLink("Home", "/")
const buttonLinkBlog = buttonLink("Blog", "/blog")
const buttonLinkList = buttonLink("List", "/list")

const Menu = () => (
  <div
    style={{
      padding: "10px",
      listStyle: "none",
      display: "flex",
      justifyContent: "space-evenly",
    }}
  >
    <ButtonGroup>
      {buttonLinkHome}
      {buttonLinkBlog}
      {buttonLinkList}
    </ButtonGroup>
  </div>
)

export default Menu
