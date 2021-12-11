import React from "react"
import "./BlogCard.css"

const BlogCard = (props) => {
  return (
    <div className='blgCard'>
      <div className='blgImWrpr'>
        <img className='blgImage' src={props.image} alt={props.title} />
      </div>
      <p className='blgDt'>{props.date}</p>
      <h2 className='blgTtle'>{props.title}</h2>
      <p className='blgDsck'>{props.description}</p>
      <div className='InfoBtns d-flex align-items-center'>
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
  )
}

export default BlogCard
