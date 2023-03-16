import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Filters from './Filters'
import Loader from './Loader'

interface ISectionWrapper {
  widthContentWrapper?: number
}

const SectionWrapper = styled(Box)<ISectionWrapper>(({ widthContentWrapper }) => ({
  maxWidth: widthContentWrapper,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 auto',
  textAlign: 'center',
}))

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  columnGap: theme.spacing(4),
  margin: '0 auto',
  minHeight: '100vh',
  padding: `calc(var(--header-height) + ${theme.spacing(2)}) ${theme.spacing(8)} ${theme.spacing(2)}`,
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}))

interface IPageWrapper {
  isLoading?: boolean,
  children: React.ReactNode
  withoutFilters?: boolean,
  widthContentWrapper?: number
}

const PageWrapper:FC<IPageWrapper> = ({
  children,
  isLoading,
  widthContentWrapper = 1180,
  withoutFilters = false,
}) => (
  <ContentWrapper
    className="content_wrapper"
  >
    {!withoutFilters && <Filters />}
    <SectionWrapper
      component="main"
      widthContentWrapper={widthContentWrapper}
    >
      {isLoading ? <Loader /> : children}
    </SectionWrapper>
  </ContentWrapper>
)

export default PageWrapper
