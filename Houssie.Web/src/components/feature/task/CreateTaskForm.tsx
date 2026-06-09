import React from 'react';
import { useFormik } from 'formik';
import { createTaskValidationSchema } from '../../../lib/validation';
import { Container, TextField } from '@mui/material';

const CreateTaskForm = () => {
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
      description: '',
      dueDate: '',
    },
    validationSchema: createTaskValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container
      maxWidth='md'
      sx={{
        mt: 4,
        mb: 4,
        backgroundColor: 'gray',
        width: '100%',
        borderRadius: '8px',
      }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id='name'
          label='Name'
          value={values.name}
          onChange={handleChange}
        />
      </form>
    </Container>
  );
};

export default CreateTaskForm;
