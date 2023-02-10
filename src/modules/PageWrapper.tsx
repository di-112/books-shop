import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Sidebar from './Sidebar'

const SectionWrapper = styled(Box)(() => ({
  maxWidth: 1180,
  margin: '0 auto',
  textAlign: 'center',
}))

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 auto',
  height: '100%',
  padding: `${theme.spacing(2)} ${theme.spacing(8)}`,
}))

interface IPageWrapper {
  title: string,
  children: React.ReactNode
  isDisabledSidebar?: boolean,
}

const PageWrapper:FC<IPageWrapper> = ({ children, title, isDisabledSidebar = false }) => (
  <ContentWrapper className="content_wrapper">
    {!isDisabledSidebar && <Sidebar isDisabled={isDisabledSidebar} />}
    <SectionWrapper as="main">
      {children}
    </SectionWrapper>
  </ContentWrapper>
)

export default PageWrapper
