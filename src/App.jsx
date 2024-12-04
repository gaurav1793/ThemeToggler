
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

const themecontext = createContext();

function App() {
  const [theme,setTheme]=useState('light');
  return (
    <>
      <themecontext.Provider value={{theme,setTheme}}>
        <div id='container'  style={{backgroundColor:theme==='light'?'beige':'black'}}>
          <ChildA/>
        </div>
      </themecontext.Provider>
    </>
  )
}

export default App
export {themecontext}