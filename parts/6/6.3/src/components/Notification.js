import React from 'react'
import { useSelector } from 'react-redux'

export const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(notification) {
    return (<div style={style}>
      {notification}
    </div>)
  } else return (<></>)
}