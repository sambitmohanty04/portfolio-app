import React, {useState, useEffect} from 'react'
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Darkmode = () => {

  const [darkMode, setDarkMode] = useState(true); // default dark

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.style.setProperty("--primary-color", "#fd4766");
      root.style.setProperty("--secondary-color", "#0e1525");
      root.style.setProperty("--bg-dark-blue", "#020d26");
      root.style.setProperty("--bg-dark-deepblue", "#08022d");
      root.style.setProperty("--bg-white", "#fff");
      root.style.setProperty("--gray-color", "#959595");
      root.style.setProperty("--primary-text", "#fd4766");
      root.style.setProperty("--text-white", "#fff");
      root.style.setProperty("--link-color", "#fff");
    } else {
      root.style.setProperty("--primary-color", "#1c99fe");
      root.style.setProperty("--secondary-color", "#f5f5f5");
      root.style.setProperty("--bg-dark-blue", "#eaeaea");
      root.style.setProperty("--bg-dark-deepblue", "#fff");
      root.style.setProperty("--bg-white", "#000");
      root.style.setProperty("--gray-color", "#666");
      root.style.setProperty("--primary-text", "#1c99fe");
      root.style.setProperty("--text-white", "#000");
      root.style.setProperty("--link-color", "#241031ff");
    }
  }, [darkMode]);

  return (
    <div onClick={toggleDarkMode} style={{ cursor: "pointer", fontSize: "1rem" }}>
      {darkMode ? <BsMoonStarsFill /> : <BsFillSunFill />}
    </div>
  )
}

export default Darkmode