import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import { Icon, InlineIcon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import instagramIcon from "@iconify/icons-grommet-icons/instagram"
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled"
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled"
import youtubeFilled from "@iconify/icons-ant-design/youtube-filled"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='lftWrpr text-left'>
        <h3>Fitpeo Inc</h3>
        <p>
          6428 Beach Boulevard, Jacksonville, Florida 32216, <br />
          United States
        </p>
        <a href='tel:+18779045227'>+1 (877) 904-5227</a>
      </div>
      <div className='cntrWrpr'>
        <p>Follow us on social media</p>
        <div>
          <a
            href='https://twitter.com/fitpeo'
            target='blank'
            aria-label='twitter'
          >
            <Icon
              icon={twitterCircleFilled}
              style={{ color: "#ffffff", fontSize: "32px", margin: "0 10px" }}
            />
          </a>
          <a
            href='https://www.facebook.com/Fitpeo'
            target='blank'
            aria-label='facebook'
          >
            <Icon
              icon={facebookIcon}
              style={{ color: "#ffffff", fontSize: "28px", margin: "0 10px" }}
            />
          </a>
          <a
            href='https://www.instagram.com/fitpeoinc/'
            target='blank'
            aria-label='instagram'
          >
            <Icon
              icon={instagramIcon}
              style={{ color: "#ffffff", fontSize: "26px", margin: "0 10px" }}
            />
          </a>
          <a
            href='https://www.linkedin.com/company/78234489/admin/'
            target='blank'
            aria-label='linkedin'
          >
            <Icon
              icon={linkedinFilled}
              style={{ color: "#ffffff", fontSize: "32px", margin: "0 10px" }}
            />
          </a>
          <a
            href='https://www.youtube.com/channel/UCSPkpmE8fxdcwXJEw_PmLyw'
            target='blank'
            aria-label='youtube'
          >
            <Icon
              icon={youtubeFilled}
              style={{ color: "#ffffff", fontSize: "32px", margin: "0 10px" }}
            />
          </a>
        </div>
      </div>
      <div className='rtWrpr text-right'>
        <ul>
          <li>
            <Link rel="preload"   to='/privacy_policy'>Privacy Policy</Link>
          </li>
          <li>
            <Link rel="preload"   to='/about'>About</Link>
          </li>
          <li>
            <Link rel="preload"   to='/faq'>FAQ</Link>
          </li>
          <li>
            <Link rel="preload"   to='/contactus'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
