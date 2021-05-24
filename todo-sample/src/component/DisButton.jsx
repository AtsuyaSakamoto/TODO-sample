import React from 'react'
import {Link} from 'react-router-dom'

const DisButton=(props)=>{
    return(
        <React.Fragment>
            <button>
<Link to={`/${props.index}`}>詳細</Link>
            </button>
        </React.Fragment>
    )
}

export default DisButton