import { Container, Fab, useTheme } from '@material-ui/core'
import React from 'react'
import { ScrollTopButton } from './common/ScrollTopButton'
import { AppNavbar, HEADER_HEIGHT, HEADER_HEIGHT_PX } from './UI'
import { BackButton } from './UI/BackButton'

export const Template = ({ children, withBackBtn = false }) => {
  return (
    <>
      <AppNavbar />
      <Container
        sx={{
          height: "100%",
          paddingTop: HEADER_HEIGHT_PX,
          display: "flex",
          flexDirection: "column"
        }}
      >
        {children}
      </Container>
      {withBackBtn && <Fab
        sx={{ position: 'fixed', top: HEADER_HEIGHT + 16, left: 16 }}
        color="primary"
        size="medium"
        aria-label="back page"
      >
        <BackButton color="inherit" />
      </Fab>}
      <ScrollTopButton threshold={100} color="primary" />
    </>
  )
}
