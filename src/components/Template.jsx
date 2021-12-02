import { Container, useTheme } from '@material-ui/core'
import React from 'react'
import { ScrollTopButton } from './common/ScrollTopButton'
import { AppNavbar, HEADER_HEIGHT_PX } from './UI'

export const Template = ({ children }) => {
  return (
    <>
      <AppNavbar />
      <Container sx={{height: `calc(100% - ${HEADER_HEIGHT_PX})`, paddingTop: HEADER_HEIGHT_PX}}>{children}</Container>
      <ScrollTopButton threshold={100} color="primary" />
    </>
  )
}
