import React from 'react'
import './LoadingHOC.css'

const LoadingHOC = (Component) =>{
    return function loadingHoc({loading,...p}) {
        return (
        (loading) ? <div className="load"></div> : <Component {...p}/>
    )
}
}
export default (LoadingHOC);