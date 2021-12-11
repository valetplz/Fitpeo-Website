import React, { useState, useEffect } from "react"
import "./Layout.css"
import SideNav from "../../organisms/SideNav"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import PrimaryButton from "../../atoms/Button"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

const Layout = (props) => {
  const classes = useStyles()
  const [backTop, setBackTop] = useState(false)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  const listenScrollEvent = (event) => {
    if (window.scrollY > 70) {
      setBackTop(true)
    } else if (window.scrollY < 70) {
      setBackTop(false)
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  return (
    <div className='viewPort'>
      <div className='mblNav'>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <CloseIcon
                className='drwrClsIcon'
                onClick={toggleDrawer(anchor, false)}
              />
              <SideNav onClose={toggleDrawer(anchor, false)} />
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className='dskNav'>
        <SideNav />
      </div>
      <div
        className={`viewScreen ${
          window.location.pathname.includes("/home") ||
          window.location.pathname.includes("/providers") ||
          window.location.pathname.includes("/medical_kit")
            ? "overflowHidden"
            : ""
        }`}
      >
        <div className='mblNav mnuIcon'>
          <PrimaryButton
            ariaLabel='menuButton'
            className='nvTglButton'
            onClick={toggleDrawer("left", true)}
            label={<MenuIcon />}
          />
          <h3 className='ml-4 mb-0'>
            <b>Fitpeo</b>
          </h3>
        </div>
        {props.children}
        {backTop ? (
          <PrimaryButton
            ariaLabel='upwardButton'
            label={<ArrowUpwardIcon />}
            class='bckTpBtn'
            onClick={() => window.scrollTo(0, 0)}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Layout
