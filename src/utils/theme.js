import { createTheme } from '@material-ui/core'
import { ruRU } from '@material-ui/core/locale'
import darkScrollbar from '@material-ui/core/darkScrollbar'

const initTheme = createTheme(undefined, ruRU)
export const theme = {
  ...initTheme,
  components: {
    ...initTheme.components,
    MuiCssBaseline: {
      styleOverrides: {
        body: initTheme.palette.mode === 'dark' ? darkScrollbar() : null,
      },
    },
  },
}
