import React, { FC } from 'react'
import Loader from '../../shared/ui/Loader'
import Filters from '../../widgets/Filters'
import ContentWrapper from './ContentWrapper'
import SectionWrapper from './SectionWrapper'

interface IPageWrapper {
  isLoading?: boolean,
  children: React.ReactNode
  withoutFilters?: boolean,
}

const PageWrapper:FC<IPageWrapper> = ({
  children,
  isLoading,
  withoutFilters = false,
}) => (
  <ContentWrapper className="content_wrapper">
    {!withoutFilters && <Filters />}
    <SectionWrapper component="main">
      {isLoading ? <Loader /> : children}
    </SectionWrapper>
  </ContentWrapper>
)

export default PageWrapper
