import React, { useEffect } from "react"
import { Switch, withRouter, Route, Redirect } from "react-router-dom"
import PrimaryButton from "../components/atoms/Button"
import Footer from "../components/organisms/Footer"
import Blogs from "../views/Blogs"
import Careers from "../views/Careers"
import CareersView from "../views/Careers/CareersView"
import Download from "../views/Download"
import Home from "../views/Home"
import MedicalKit from "../views/MedicalKit"
import Providers from "../views/Providers/Providers"
import Resources from "../views/Resources"
import RevenueCalculator from "../views/RevenueCalculator"
import ChronicCare from "../views/StaticPages/ChronicCare"
import ContactUs from "../views/StaticPages/ContactUs"
import CPTCodes from "../views/StaticPages/CPTCodes"
import PrivacyPolicy from "../views/StaticPages/PrivacyPolicy"
import ScheduleDemo from "../views/StaticPages/ScheduleDemo"
import UserAgreement from "../views/StaticPages/UserAgreement"

const Routes = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [window.location.pathname])

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/providers' component={Providers} />
        <Route exact path='/medical_kit' component={MedicalKit} />
        <Route exact path='/download' component={Download} />
        <Route exact path='/privacy_policy' component={PrivacyPolicy} />
        <Route exact path='/user_agreement' component={UserAgreement} />
        <Route exact path='/schedule_demo' component={ScheduleDemo} />
        <Route exact path='/contactus' component={ContactUs} />
        <Route exact path='/chronic_care' component={ChronicCare} />
        <Route exact path='/cpt_codes' component={CPTCodes} />
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/careers' component={Careers} />
        <Route exact path='/careerview/:id/:action' component={CareersView} />
        <Route exact path='/resource' component={Resources} />
        <Route exact path='/revenueCalculator' component={RevenueCalculator} />
      </Switch>
      <Footer />
    </>
  )
}

export default withRouter(Routes)
