import React from 'react'
import { Box, Button } from '@mui/material'
import { useBreakPoints } from '@vgl/hooks'
import { useLocation, useNavigate } from 'react-router-dom'
import { ADMIN_MENUS, COLORS, MODERATOR_MENUS } from '@vgl/constants'

const AppSidebar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { tabMode, mobileMode } = useBreakPoints()

  const user = {
    role: 'admin',
  }

  const smallScreen = mobileMode || tabMode
  const menusCheck = user.role === 'admin' ? ADMIN_MENUS : MODERATOR_MENUS

  const singlePath_ = pathname.substring(0, pathname.lastIndexOf('/'))

  return (
    <React.Fragment>
      {!smallScreen && (
        <Box
          height={1024}
          display="flex"
          maxHeight={1024}
          alignItems="center"
          flexDirection="column"
          bgcolor={COLORS.white}
          padding="50px 0px 50px 0px"
          borderRight={`1px solid ${COLORS.grey.main}`}
        >
          <img src="/assets/icons/sortara.svg" alt="" />
          <Box
            mt={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            {menusCheck.map(({ title, path, singlePath }, index) => {
              index = user.role === 'admin' ? index : index + 1
              return (
                <Box mt={2} key={index}>
                  <Button
                    variant="text"
                    sx={{ width: '100%' }}
                    onClick={() => navigate(path)}
                    className={
                      pathname === path || singlePath === singlePath_
                        ? 'selected-sidebar-btn'
                        : 'sidebar-btn'
                    }
                  >
                    {title}
                  </Button>
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
    </React.Fragment>
  )
}

export default AppSidebar