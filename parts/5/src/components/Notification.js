import React from 'react'
export const Notification = ({data}) => {
    if (data === null) {
        return null
    } else {
        return (
            <div className={data.type}>
                {data.message}
            </div>
        )
    }

}