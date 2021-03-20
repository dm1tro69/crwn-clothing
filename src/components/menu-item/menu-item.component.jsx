import React from 'react'
import {useHistory, useRouteMatch} from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    const history = useHistory()
    const match = useRouteMatch()

    console.log(match.url)
return (
    <div onClick={()=> history.push(`${linkUrl}`)} className={`${size} menu-item`}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)
}
export default MenuItem