import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddCode from './pages/addcode'
import AdminPage from './pages/admin'
import EditCode from './pages/editcode'
import EditToken from './pages/EditToken'
import HomePage from './pages/home'
import ListToken from './pages/ListToken'

function App() {


  return (
    <div className="App">
        <Routes>
            <Route path='/'>
              <Route index element={<HomePage />}/>
            </Route>
            <Route path='admin'>
                <Route index element={<AdminPage />} />
                <Route path='addcode' element={<AddCode />} />
                <Route path='editcode/:id' element={<EditCode />} />
                <Route path='list' element={<ListToken />} />
                <Route path='edit' element={<EditToken />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App
