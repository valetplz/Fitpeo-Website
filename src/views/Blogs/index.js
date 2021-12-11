import React from "react"
import "./Blog.css"
import Layout from "../../components/templates/Layout"
import BlogCard from "../../components/molecules/BlogCard"

const Blogs = () => {
  const blogData = [
    {
      image: "/assets/blogImg.png",
      date: "Monday-Jun-21",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
    {
      image: "/assets/blogImg.png",
      date: "Monday-Jun-21",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
    {
      image: "/assets/blogImg.png",
      date: "Monday-Jun-21",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
    {
      image: "/assets/blogImg.png",
      date: "Monday-Jun-21",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
    {
      image: "/assets/blogImg.png",
      date: "Monday-Jun-21",
      title: "Fitpeo Health celebrates National Nurses Week 2021",
      description:
        "2021 is a year to reflect on the unmatched sacrifice made by nurses on the frontlines in the battle against COVID-19.",
    },
  ]

  return (
    <Layout>
      <div className='blgVwPrt p-5'>
        <h1 className='text-left'>Our Blogs</h1>
        <div className='blgBgWrpr d-flex align-items-center'>
          <div className='lftWrpr'>
            <p>Monday-Jun-21</p>
            <h2>
              Fitpeo Health Recognized for Remote Patient Care Innovation in
              2021 Breakthrough Awards Program
            </h2>
            <div className='btmInfoBtns d-flex align-items-center'>
              <div className='viewInfo d-flex align-items-center mr-3'>
                <img src='/assets/eye.svg' alt='' />
                <p className='m-0 ml-1'>20</p>
              </div>
              <div className='viewInfo d-flex align-items-center'>
                <img src='/assets/comment.svg' alt='' />
                <p className='m-0 ml-1'>20</p>
              </div>
              <div className='viewInfo ml-auto'>
                <img src='/assets/share.svg' alt='' />
              </div>
            </div>
          </div>
          <div className='blgImgWrpr'>
            <img src='/assets/blogbig.png' alt='' />
          </div>
        </div>
        <div className='blgCardsWrpr mt-5'>
          {blogData.map((data) => (
            <BlogCard
              image={data.image}
              date={data.date}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blogs
