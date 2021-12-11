import React, { useState } from "react"
import "./Static.css"
import { Link } from "react-router-dom"
import Layout from "../../components/templates/Layout"
import { Document, Page, pdfjs } from "react-pdf"
import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import PrimaryButton from "../../components/atoms/Button"

const UserAgreement = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
  }

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevPage = () => {
    if (pageNumber <= numPages && pageNumber > 1) {
      setPageNumber(pageNumber - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <Layout>
      <div className='staticWrapper'>
        <h2 className='text-center'>
          <b>User Agreement</b>
        </h2>
        <Document
          options={options}
          className='mx-auto'
          file='https://img1.wsimg.com/blobby/go/0659bdb1-1551-464d-8433-9f6181463f0a/x.pdf'
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderAnnotationLayer />
        </Document>
        <div className='d-flex align-items-center justify-content-center mt-4'>
          <PrimaryButton label={<ArrowLeft />} onClick={handlePrevPage} />
          <p className='m-0 mx-4'>
            Page {pageNumber} of {numPages}
          </p>
          <PrimaryButton label={<ArrowRight />} onClick={handleNextPage} />
        </div>
      </div>
    </Layout>
  )
}

export default UserAgreement
