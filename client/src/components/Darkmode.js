import React from 'react'
import { BsToggleOn, BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Darkmode = ({toggleDarkMode, darkMode}) => {
  return (
    <div onClick={toggleDarkMode}>
      {darkMode ? <BsMoonStarsFill /> : <BsFillSunFill />}
    </div>
  )
}

export default Darkmode