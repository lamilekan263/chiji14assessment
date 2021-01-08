import React from 'react'
import github from './../assets/images/github.svg'

const Nav = () => {
    return (
      <nav className="p-3 sticky top-0 bg-white z-50 shadow-lg">
        <img src={github} alt="star"  />
      </nav>
    );
}

export default Nav
