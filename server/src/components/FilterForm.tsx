import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Field, FieldProps, Form, Formik } from 'formik'
import React from 'react'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import { FormattedMessage } from 'react-intl'

const FilterForm: React.FC<{
  setFilter: (title: string, sortBy: string, isAdult: boolean) => void
}> = ({ setFilter }) => {
  const initialValues = {
    title: '',
    sortBy: '',
    isAdult: false,
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        setFilter(values.title, values.sortBy, values.isAdult)
      }}>
      {() => (
        <Form>
          <Typography variant="h4" component="h4" sx={{ mb: 1 }}>
            <FormattedMessage id="fform" />
          </Typography>
          <Paper sx={{ p: 2, display: 'flex', gap: 2 }}>
            <Field id="title" name="title">
              {({ field }: FieldProps) => (
                <TextField
                  label="Title/Заголовок"
                  variant="outlined"
                  {...field}
                  sx={{ flex: 1 }}
                  placeholder="Title/Заголовок"
                  inputProps={{ 'aria-label': 'List title' }}
                />
              )}
            </Field>
            <Field id="sortBy" name="sortBy" as="select" className="select">
              <option value={'popularity.desc'}>Popularity desc</option>
              <option value={'popularity.asc'}>Popularity asc</option>
              <option value={'release_date.desc'}>Release desc</option>
              <option value={'release_date.asc'}>Release asc</option>
            </Field>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Field id="isAdult" name="isAdult" type="checkbox" />
              <label htmlFor="isAdult">
                <Typography variant="subtitle2" component="h4" sx={{ fontSize: 16 }}>
                  <FormattedMessage id="adult" />
                </Typography>
              </label>
            </Box>
            <Button
              variant="outlined"
              type="submit"
              color="primary"
              sx={{ p: '5px 20px 5px 20px' }}
              aria-label="directions">
              <FormattedMessage id="submit" />
            </Button>
          </Paper>
        </Form>
      )}
    </Formik>
  )
}

export default FilterForm
