import React from 'react'

const Alert = (props) => {
    return (
        props.alert !== null && (
            <div className="container my-2">
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} >
                    {props.alert.msg}
                
                </div>
            

            </div>
        )
    )
}
export default Alert