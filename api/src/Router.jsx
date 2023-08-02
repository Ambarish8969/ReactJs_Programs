import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GetApi from './GetApi'
import PostApi from './PostApi'
import Home from './Home'

const Router =()=>{
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/getvehicles' element={<GetApi />} />
                <Route path='/addvehicle' element={<PostApi />} />
            </Routes>
        </>
    )
}

export default Router;