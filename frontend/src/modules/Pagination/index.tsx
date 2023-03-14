import { alpha, styled } from '@mui/material/styles'
import { Pagination as AntPagination } from '@mui/material'
import React from 'react'
import { usePageStore } from '../../store/page'

const StyledPagination = styled(AntPagination)(({ theme }) => ({
  background: alpha(theme.palette.common.white, 0.5),
  padding: theme.spacing(2),
  display: 'flex',
  marginRight: theme.spacing(4),
  justifyContent: 'flex-end',
}))

const Pagination = () => {
  const { page, setPage, countPage } = usePageStore(state => state)

  return (
    <StyledPagination
      page={page}
      disabled={countPage === 1}
      count={countPage}
      color="primary"
      onChange={(e, value) => setPage(value)}
      shape="rounded"
    />
  )
}

export default Pagination
