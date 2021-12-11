import React, {useEffect} from "react"
import "./Careers.css"
import Layout from "../../components/templates/Layout"
import CareerCard from "../../components/molecules/BlogCard/CareerCard"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import BorderedSelect from "../../components/atoms/Inputs/BorderedSelect"
import { useSelector, useDispatch } from "react-redux";
import { getJobDetails } from "../../actions"

const Careers = () => {

  const dispatch = useDispatch()
  const jobData = useSelector((state) => state.user.jobDetails)
  useEffect(() => {
    dispatch(getJobDetails())
  }, [])

  return (
    <Layout>
      <div className='careerVwPrt p-5'>
        <h1 className='text-left'>Careers</h1>
        <div className='blgBgWrpr d-flex align-items-center'>
          <div className='lftWrpr'>
            <h2>
              We are an independent, remote-friendly creative agency with
              offices in America
            </h2>
            <p>Let's Work Together</p>
          </div>
          <div className='blgImgWrpr'>
            <img src='/assets/careersimage.png' alt='' />
          </div>
        </div>
        <div className='opnPstnr my-5'>
          <h2>Open Positions</h2>
          <div className='pstStats'>
            <div className='pstCa text-center'>
              <h2>5</h2>
              <p>Design Positions</p>
            </div>
            <div className='pstCa text-center'>
              <h2>5</h2>
              <p>Design Positions</p>
            </div>
            <div className='pstCa text-center'>
              <h2>5</h2>
              <p>Design Positions</p>
            </div>
            <div className='pstCa text-center'>
              <h2>5</h2>
              <p>Design Positions</p>
            </div>
            <div className='pstCa text-center'>
              <h2>5</h2>
              <p>Design Positions</p>
            </div>
          </div>
        </div>
        <div className='fltrWrpr d-flex align-items-center justify-content-between mb-5'>
          <BorderedSelect
            label='Location'
            options={[
              { id: 1, value: "california" },
              { id: 2, value: "california2" },
            ]}
          />
          <BorderedSelect
            label='Job Category'
            options={[
              { id: 1, value: "Development" },
              { id: 2, value: "Design" },
            ]}
          />
          <BorderedSelect
            label='Busniess Category'
            options={[
              { id: 1, value: "HR" },
              { id: 2, value: "HR1" },
            ]}
          />
          <BorderedSelect
            label='Job Type'
            options={[
              { id: 1, value: "Full Time" },
              { id: 2, value: "Full Time1" },
            ]}
          />
          <BorderedSelect
            label='Rows'
            options={[
              { id: 1, value: "4" },
              { id: 2, value: "10" },
            ]}
          />
        </div>
        {jobData && <CareerCard data={jobData}/>}
        <p className='text-left my-2'>Showing 1-4 of 20 jobs</p>
        <h2 className='text-left mt-5 sctnTtle'>Employee Feedback</h2>
        <div className='emplFbdCard d-flex align-items-start'>
          <div className='imgContainer'>
            <img
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80'
              alt=''
            />
          </div>
          <div className='txtContainer pl-5'>
            <h4 className='m-0'>Oliver</h4>
            <p className='m-0'>
              <b>Role:</b> Teal Lead
            </p>
            <p className='mt-4 empDesc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              odio nec, eu neque sapien id sed fermentum. Quisque sit fermentum
              mattis pharetra nascetur venenatis, mi lorem. Elementum commodo
              faucibus nunc, proin proin vitae.
            </p>
          </div>
        </div>
        <ul className='cstmPagination'>
          <li>
            <div className='prevArrow'>
              <ArrowBackIcon />
            </div>
          </li>
          <li className='active'>1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
          <li>100</li>
          <li>
            <div className='prevArrow'>
              <ArrowForwardIcon />
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Careers
