import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { Alert, Paper, Box } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
  WhatsappShareButton,
  RedditShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  ViberShareButton,
  TelegramShareButton,
} from 'react-share'
import { FormattedMessage } from 'react-intl'

const CopyModal: React.FC<{
  link: string
  isOpen: boolean
  listName: string
  closeHandler: () => void
}> = ({ link, isOpen, listName, closeHandler }) => {
  const [copied, setCopied] = useState(false)
  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open={isOpen}
      onClose={() => {
        closeHandler()
        setCopied(false)
      }}
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      sx={{
        zIndex: 3,
        display: 'flex',
        p: 1,
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Paper
        sx={{
          position: 'relative',
          minWidth: 400,
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.shadows[5],
          p: 4,
          pt: 2,
          pb: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          justifyContent: 'center',
          textAlign: 'center',
        }}>
        <Typography id="server-modal-title" variant="h6" component="h2">
          {listName}
        </Typography>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            value={link}
            readOnly
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <CopyToClipboard text={link}>
            <IconButton
              color="primary"
              sx={{ p: '10px' }}
              aria-label="directions"
              onClick={() => setCopied(true)}>
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Paper>
        {copied && (
          <Alert severity="success">
            <FormattedMessage id="copied" />
          </Alert>
        )}
        <Box
          sx={{ display: 'flex', gap: 1, justifyContent: 'space-between', alignItems: 'center' }}>
          <EmailShareButton url={link}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <TwitterShareButton url={link}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <FacebookShareButton url={link}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TelegramShareButton url={link}>
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
          <WhatsappShareButton url={link}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <RedditShareButton url={link}>
            <RedditIcon size={32} round={true} />
          </RedditShareButton>
          <PinterestShareButton url={link} media={''}>
            <PinterestIcon size={32} round={true} />
          </PinterestShareButton>
          <InstapaperShareButton url={link}>
            <InstapaperIcon size={32} round={true} />
          </InstapaperShareButton>
          <ViberShareButton url={link}>
            <ViberIcon size={32} round={true} />
          </ViberShareButton>
        </Box>
      </Paper>
    </Modal>
  )
}

export default CopyModal
