import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import Loader from './Loader'

const SectionWrapper = styled(Box)(() => ({
  maxWidth: 1180,
  flexGrow: 1,
  height: '100%',
  margin: '0 auto',
  textAlign: 'center',
}))

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  columnGap: theme.spacing(4),
  margin: '0 auto',
  minHeight: '100vh',
  padding: `calc(var(--header-height) + ${theme.spacing(2)}) ${theme.spacing(8)} ${theme.spacing(1)}`,
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}))

interface IPageWrapper {
  isLoading?: boolean,
  children: React.ReactNode
  withoutSidebar?: boolean,
}

const PageWrapper:FC<IPageWrapper> = ({
  children,
  isLoading,
  withoutSidebar = false,
}) => (
  <ContentWrapper className="content_wrapper">
    {!withoutSidebar && <Sidebar />}
    <SectionWrapper as="main">
      {isLoading ? <Loader /> : children}
    </SectionWrapper>
  </ContentWrapper>
)

export default PageWrapper
