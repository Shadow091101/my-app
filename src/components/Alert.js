import React from 'react'

export default function Alert(props) {

    const capitalize=(word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    const getAlertClass = (type) => {
        switch (type) {
            case 'error':
                return 'danger'; // Use 'alert-danger' for errors
            case 'success':
                return 'success'; // 'alert-success' for success
            default:
                return 'primary'; // Fallback, just in case
        }
    }

    return (
        <div style={{height:'50px'}}>

        {props.alert && <div className={`alert alert-${getAlertClass(props.alert.type)} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
        </div>
    )
}
//if props.alert is null then alert will not be shown.