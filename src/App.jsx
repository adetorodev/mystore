import React from 'react'
import { Hero } from './components'
import Topbar from './components/headers/Topbar'
import TopMenu from './components/headers/TopMenu'

const App = () =>{
  return (
    <>
      <main>
        <Topbar />
        <TopMenu />
      </main>
    </>
  )
}

export default App