import React from 'react'

export default function Avatar(props) {
    const {
        imgUrl
    } = props;
    return (
    <div>
        <img src={`${imgUrl}`}></img>
    </div>
  )
}
