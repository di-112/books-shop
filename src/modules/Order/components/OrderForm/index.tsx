import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { initialData } from './resources/initialData'
import { StyledTextField } from './components/StyledTextField'
import Field from './components/Field'

interface IOrderFormValues {
  firstName: string
  lastName: string
  address: string
  date: string
}

interface IOrderForm {
  price: number
}

const OrderForm: FC<IOrderForm> = ({ price }) => {
  const {
    control,
  } = useForm<IOrderFormValues>({
    defaultValues: initialData,
    mode: 'onBlur',
  })

  return (
    <>
      <form>
        <Field
          label="Имя"
          name="firstName"
        >
          <Controller
            control={control}
            rules={{ required: true }}
            name="firstName"
            render={({
              field,
              fieldState,
            }) => (
              <StyledTextField
                placeholder="Иван"
                error={fieldState.invalid}
                {...field}
              />
            )}
          />
        </Field>
        <Field
          label="Фамилия"
          name="lastName"
        >
          <Controller
            control={control}
            name="lastName"
            rules={{ required: true }}
            render={({
              field,
              fieldState,
            }) => (
              <StyledTextField
                placeholder="Иванов"
                error={fieldState.invalid}
                {...field}
              />
            )}
          />
        </Field>
        <Field
          label="Адрес"
          name="address"
        >
          <Controller
            control={control}
            name="address"
            rules={{ required: true }}
            render={({
              field,
              fieldState,
            }) => (
              <StyledTextField
                placeholder="Москва"
                error={fieldState.invalid}
                {...field}
              />
            )}
          />
        </Field>
      </form>
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="flex-end"
        gap={1}
      >
        <Box
          display="flex"
          gap={1}
          mb={1}
        >
          <Typography fontWeight={700}>Стоимость заказа:</Typography>
          <Typography fontWeight={700}>{`${price}  ₽`}</Typography>
        </Box>
        <Button variant="contained">
          Оформить заказ
        </Button>
      </Box>
    </>
  )
}

export default OrderForm
