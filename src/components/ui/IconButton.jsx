import React from 'react'

const IconButton = ({icon, ...props}) => {
    return (
        <button className='' {...props}>
            {icon}
        </button>
    )
}

export default IconButton