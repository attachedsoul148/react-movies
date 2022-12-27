import React, { useContext, useState } from 'react'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
  Link,
} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import MenuIcon from '@mui/icons-material/Menu'
import DraftsIcon from '@mui/icons-material/Drafts'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import RedditIcon from '@mui/icons-material/Reddit'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings'
import { grey } from '@mui/material/colors'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { AppContext, LocaleKinds } from './AppIntlProvider'
import { FormattedMessage } from 'react-intl'

const Navigation = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const navigator = useNavigate()
  const { state, dispatch } = useContext(AppContext)
  const [needLocale, setNeedLocale] = useState(true)
  if (localStorage.getItem('locale') && needLocale) {
    dispatch({
      type: 'LOCALE_CHANGED',
      payload: { locale: localStorage.getItem('locale') as LocaleKinds },
    })
    setNeedLocale(false)
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="default"
          sx={{ background: grey[800], color: 'white', p: 1 }}>
          <Toolbar>
            <Box sx={{ display: { xl: 'none', md: 'none', xs: 'block' } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setShowDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, alignItems: 'center', display: 'flex', gap: '0.5rem' }}>
              <Box sx={{ display: 'flex' }}>
                <Link to="/" component={RouterLink} color="#fff" underline="none">
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit">
                    <RedditIcon fontSize="medium" />
                  </IconButton>
                </Link>
              </Box>
              <Box sx={{ display: { xl: 'flex', md: 'flex', xs: 'none' }, gap: '2rem' }}>
                <Link to="/" component={RouterLink} color="#fff" underline="none">
                  <Typography variant="h6" component="div">
                    <FormattedMessage id="films" />
                  </Typography>
                </Link>
                <Link to="/recommendations" component={RouterLink} color="#fff" underline="none">
                  <Typography variant="h6" component="div">
                    <FormattedMessage id="recommendations" />
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box sx={{ minWidth: 120, mr: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  <FormattedMessage id="locale" />
                </InputLabel>
                <Select
                  sx={{ color: 'white' }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state.locale}
                  label="Locale"
                  onChange={(e: SelectChangeEvent) =>
                    dispatch({
                      type: 'LOCALE_CHANGED',
                      payload: { locale: e.target.value as LocaleKinds },
                    })
                  }>
                  <MenuItem value={'en-US'}>English</MenuItem>
                  <MenuItem value={'uk-UA'}>Українська</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button color="inherit">
              <FormattedMessage id="login" />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigator('/')}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Films" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => navigator('/recommendations')}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Recommendations" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigator('/trash')}>
              <ListItemIcon>
                <DeleteForeverIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => navigator('/settings')}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Navigation
