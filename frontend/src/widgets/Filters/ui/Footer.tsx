import React, { FC } from 'react'
import Button from '@mui/material/Button'

interface IFooter {
  onOk: () => void,
  onCancel: () => void,
  isDisabled: boolean,
}

const Footer:FC<IFooter> = ({
  onOk,
  onCancel,
  isDisabled,
}) => (
  <>
    <Button
      sx={{
        right: 16,
        bottom: 16,
        position: 'absolute',
      }}
      variant="contained"
      onClick={onOk}
      disabled={isDisabled}
    >
      Подтвердить
    </Button>
    <Button
      sx={{
        left: 16,
        bottom: 16,
        position: 'absolute',
      }}
      color="error"
      variant="contained"
      onClick={onCancel}
      disabled={isDisabled}
    >
      Сбросить
    </Button>
  </>
)

export default Footer
