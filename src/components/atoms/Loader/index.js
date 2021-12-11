import React from 'react'
import './Loader.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
    return (
        <div className="loaderWrapper">
            <CircularProgress />
        </div>
    )
}

export default Loader
