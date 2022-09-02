import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'
import GeneralButton from './GeneralButton'



const Header = () => {
  return (
    <Grid2 container spacing={2}>
    <Grid2 xs={10}>
     <h2>Plataforma Teatro San Martín</h2>
    </Grid2>
    <Grid2 xs={2}>
    <GeneralButton buttonText={"Login"} />
    </Grid2>
  </Grid2>
  )
}

export default Header


