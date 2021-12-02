import React, {useState} from 'react'
import { AppBar, Toolbar, Box, SwipeableDrawer, IconButton, ListItem, ListItemIcon, List } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/InfoOutlined';
import StarIcon from '@material-ui/icons/StarOutline';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/BarChart';
import { makeStyles } from '@material-ui/styles'
import { NavLink } from 'react-router-dom'
import { ReactComponent as DisneyIcon } from '../../utils/assets/img/disney.svg'
import { useWindowSize } from '../../utils/hooks'
import { Routes } from '../../utils/paths'
import { sx, flex } from '../../utils'
import { useLocation } from "react-router-dom"

export const HEADER_HEIGHT = 48
export const HEADER_HEIGHT_PX = HEADER_HEIGHT + 'px'
const useStyles = makeStyles((theme) => {
  return {
    link: {
      marginLeft: '0',
      padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
      borderRadius: '5px',
      position: 'relative',
      transition: 'background 0.2s ease-in',
      '&::after': {
        content: "''",
        opacity: 0,
        transition: 'opacity 0.2s ease-in',
      },
      '&:hover': {
        background: theme.palette.primary.dark,
      },
    },
    activeLink: {
      '&::after': {
        position: 'absolute',
        left: '10px',
        right: 0,
        width: 'calc(100% - 20px)',
        bottom: '4px',
        height: '2px',
        opacity: 1,
        backgroundColor: theme.palette.primary.contrastText,
      },
    },
    activeMenuItem: {
      backgroundColor: theme.palette.action.hover,
    },
    icon: {
      fill: theme.palette.primary.contrastText
    }
  }
})


const links = [
  { to: Routes.Favorites, label: 'Любимые персонажи', Icon: FavoriteIcon },
  { to: Routes.Popular, label: 'Популярные', Icon: StarIcon },
  { to: Routes.Characters, label: 'Персонажи', Icon: SearchIcon },
  { to: Routes.About, label: 'О персонажах', Icon: InfoIcon },
]

const AppNav = () => {
  const cl = useStyles()
  return <nav>
  {links.map((link) => (
    <NavLink
      key={link.to}
      to={link.to}
      className={cl.link}
      activeClassName={cl.activeLink}
    >
      {link.label}
    </NavLink>
  ))}
</nav>
} 


const AppNavList = ({toggleDrawer}) => {
  const cl = useStyles()
  const location = useLocation()
  console.log({location})
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {links.map(({ label, to, Icon }) => (
          <li className={sx({ [cl.activeMenuItem]: location.pathname === to })}>
            <ListItem button key={to}>
              <ListItemIcon sx={{minWidth: 40}}>
                <Icon />
              </ListItemIcon>
              <NavLink
                key={to}
                to={to}
              >
                {label}
              </NavLink>
            </ListItem>
          </li>
        ))}
      </List>
    </Box>
  );
}


const AppDrawer = () => {
  const [isOpen, setOpen] = useState(false)
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <AppNavList toggleDrawer={toggleDrawer} />
      </SwipeableDrawer>
    </>
  )



}

export const AppNavbar = ({ }) => {
  const cl = useStyles()
  const { width } = useWindowSize()
  const isMobile = width < 800
  return (
    <AppBar position="fixed" sx={{ height: HEADER_HEIGHT_PX }}>
        <Toolbar variant="dense" sx={{ ...flex.between, py: 1 }}>
          <DisneyIcon
            width={42}
            height={42}
            className={cl.icon}
          />
          {isMobile ? <AppDrawer /> : <AppNav />}
        </Toolbar>
      </AppBar>
  )
}