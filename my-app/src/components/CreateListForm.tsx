import React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import DirectionsIcon from '@mui/icons-material/Directions'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FieldProps } from 'formik/dist/Field'
import { MovieType } from '../types/types'
import * as yup from 'yup'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'

const validationSchema = yup.object().shape({
  listName: yup.string().required('Required / Потрібно'),
})

const CreateListForm: React.FC<{
  selectedMovies: MovieType[]
  clickHandler: (link: string, listName: string) => void
}> = ({ selectedMovies, clickHandler }) => {
  const initialValues = {
    listName: '',
  }
  const onSubmit = (values: typeof initialValues) => {
    const ids = selectedMovies.map((el) => el.id)
    const idsString = ids.join()
    const link = `localhost:3000/recommendations?title=${values.listName}&ids=${idsString}`
    clickHandler(link, values.listName)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => (
        <Form
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
          }}>
          <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
            <IconButton sx={{ p: '10px' }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Field id="listName" name="listName">
              {({ field }: FieldProps) => (
                <InputBase
                  {...field}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Create list/Створіть список"
                  inputProps={{ 'aria-label': 'create movie list' }}
                />
              )}
            </Field>
            <ErrorMessage name="listName">
              {(msg: string) => (
                <Typography variant="body2" component="h2" style={{ color: red[300] }}>
                  {msg}
                </Typography>
              )}
            </ErrorMessage>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" color="primary" sx={{ p: '10px' }} aria-label="directions">
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </Form>
      )}
    </Formik>
  )
}

export default CreateListForm
