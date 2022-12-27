import { Menu, MenuItem } from '@mui/material'
import React, { MouseEvent, useState } from 'react'
import styled from '@emotion/styled'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

interface OptionType {
  name: string
  callback: Function
}
interface DotMenuProps {
  options: OptionType[]
}

export const MoreButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: rgba(218, 218, 218, 0.5);
  color: white;
  transition: 200ms ease;
  cursor: pointer;
  &:hover {
    background: rgba(188, 187, 187, 0.7);
  }
`

const DotMenu: React.FC<DotMenuProps> = ({ options }) => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    setOpen(true)
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }
  return (
    <>
      <MoreButton onClick={(e) => clickHandler(e)}>
        <MoreHorizIcon color="action" />
      </MoreButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            padding: '0.3rem 0.5rem 0.5rem 0.5rem',
            overflowY: 'hidden',
          },
        }}>
        {options.map((option) => (
          <MenuItem
            onClick={() => {
              handleClose()
              option.callback()
            }}
            key={option.name}
            autoFocus={false}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default DotMenu
