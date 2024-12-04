import React, { useContext } from 'react'

import { themecontext } from '../App'
const ChildC = () => {
    const {theme,setTheme} = useContext(themecontext);
    function themeToogler(){
        if(theme === 'light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
  return ( 
       <button onClick={themeToogler}>
            change theme
       </button>
  )
}

export default ChildC