import React from 'react'

export default function Alert(props) {
    function Capitalize(str) {
        let word = str.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{ height: '48px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}
