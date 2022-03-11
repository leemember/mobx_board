import React from 'react'

type Text = {
    text: string
}

const Header = ({text}:Text) => {
    return (
        <div className="header">
            <h1 className="title">{text}</h1>         
        </div>
    )
}

export default Header