import React from 'react'

function Menu(props) {
    const menus = props.menus
    return (
        <div className="menu-list">
            {menus.map(menu => (
                <a key={menu.path} href={menu.path} className="menu-item">{menu.label}</a>
            ))}
        </div>
    )
}

export default Menu