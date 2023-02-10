import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Sidebar from './Sidebar'

const SectionWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1180,
  textAlign: 'center',
  paddingLeft: theme.spacing(12),
}))

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 auto',
  padding: `${theme.spacing(2)} ${theme.spacing(8)}`,
}))

interface IPageWrapper {
  title: string,
  children: React.ReactNode
}

const PageWrapper:FC<IPageWrapper> = ({ children, title }) => (
  <ContentWrapper className="content_wrapper">
    <Sidebar />
    <SectionWrapper as="main">
      <Typography
        variant="h5"
        fontWeight={700}
        component="h1"
        textAlign="left"
        mb={2}
        paddingLeft={3}
      >
        {title}
      </Typography>
      {children}
    </SectionWrapper>
  </ContentWrapper>
)

export default PageWrapper
