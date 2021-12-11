import React, { useEffect } from "react"
import "./SideNav.css"
import { Link, NavLink, useHistory } from "react-router-dom"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import Scrollspy from "react-scrollspy"

const SideNav = (props) => {
  const [homeexpand, setHomeExpand] = React.useState(false)
  const [providerexpand, setProviderExpand] = React.useState(false)
  const history = useHistory()

  const handleProviderClick = () => {
    setProviderExpand(!providerexpand)
    setHomeExpand(false)
    if (window.location.pathname != "/providers") {
      history.push("/providers")
    }
  }

  const hanldeHomeExpand = () => {
    setProviderExpand(false)
    setHomeExpand(!homeexpand)
  }

  useEffect(() => {
    if (window.location.pathname == "/providers") {
      setProviderExpand(!providerexpand)
      setHomeExpand(false)
    }

    if (window.location.pathname == "/home") {
      setHomeExpand(true)
      setProviderExpand(false)
    }
  }, [window.location.pathname])

  return (
    <div className='sideNavWrapper' onClick={props.onClose}>
      <h2 className='lgoTxt'>FitPeo</h2>
      <ul className='nvLnksContainer'>
        <li>
          <NavLink
            // exact
            onClick={hanldeHomeExpand}
            to='/home'
            // activeClassName='active'
            className={`${
              window.location.pathname === "/"
                ? "active"
                : window.location.pathname == "/home"
                ? "active"
                : null
            } ${homeexpand && "nvExpnded"}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          {homeexpand && (
            <div className='inrNvLinks'>
              <ul className='pl-0'>
                <li>
                  <a
                    href='#rpmworks'
                    className={`${
                      window.location.href.includes("#rpmworks") && "active"
                    }`}
                    s
                  >
                    How RPM Works
                  </a>
                </li>
                <li>
                  <a
                    href='#rpmprocess'
                    className={`${
                      window.location.href.includes("#rpmprocess") && "active"
                    }`}
                  >
                    Process of RPM
                  </a>
                </li>
                <li>
                  <a
                    href='#pathway'
                    className={`${
                      window.location.href.includes("#pathway") && "active"
                    }`}
                  >
                    Pathway Process
                  </a>
                </li>
                <li>
                  <a
                    href='#whychoose'
                    className={`${
                      window.location.href.includes("#whychoose") && "active"
                    }`}
                  >
                    Why choose us
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <button
            className={`${providerexpand && "nvExpnded"} ${
              window.location.pathname.includes("/providers") && "active"
            }`}
            onClick={handleProviderClick}
          >
            Providers
          </button>
        </li>
        <li>
          {providerexpand && (
            <div className='inrNvLinks'>
              <ul className='pl-0'>
                <li>
                  <a
                    href='#bestresult'
                    className={`${
                      window.location.href.includes("#bestresult") && "active"
                    }`}
                  >
                    Best result from our providers
                  </a>
                </li>
                <li>
                  <a
                    href='#enrolled'
                    className={`${
                      window.location.href.includes("#enrolled") && "active"
                    }`}
                  >
                    Who are all enrolled in our platform
                  </a>
                </li>
                <li>
                  <a
                    href='#workforprovider'
                    className={`${
                      window.location.href.includes("#workforprovider") &&
                      "active"
                    }`}
                  >
                    How Does It Work for Providers
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
        {/* <li>
          <NavLink exact to='/payers' activeClassName='active'>
            Payers
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink exact to='#' activeClassName='inactive'>
            Chronic
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink exact to='#' activeClassName='inactive'>
            Employee
          </NavLink>
        </li> */}
        <li>
          <NavLink exact to='/chronic_care' activeClassName='active'>
            Chronic Care
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/medical_kit' activeClassName='active'>
            Medical Kit
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/cpt_codes' activeClassName='active'>
            CPT Codes
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/blogs' activeClassName='active'>
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/careers' activeClassName='active'>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/resource' activeClassName='active'>
            Resource
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/revenuecalculator' activeClassName='active'>
            Revenue Calculator
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/download' activeClassName='active'>
            Download
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
