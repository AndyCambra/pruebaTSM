import React from 'react'
import Header from './Header'
import Grid2 from '@mui/material/Unstable_Grid2'
import FolderList from './GeneralList'



const Layout = () => {
  return (
    <Grid2 container spacing={2}>
    <Grid2 xs={12}>
    
        <Header />
    
    </Grid2>
    <Grid2 xs={4}>
   <FolderList />
    </Grid2>
    <Grid2 xs={8}>
    
    </Grid2>
  </Grid2>
  )
}

export default Layout