import { Container, Button, TextField } from '@mui/material';
import type { CreateTask } from '../../../types/task';
import type { FormEvent } from 'react';

type CreateTaskBarProps = {
  onCreateTask: (task: CreateTask) => void;
};

const CreateTaskBar = ({ onCreateTask }: CreateTaskBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    console.log(data.get('name'));
  };
  return (
    <>
      <Container
        component='form'
        maxWidth='lg'
        fixed
        onSubmit={handleSubmit}
        noValidate
        autoComplete='off'
        sx={{
          bottom: 0,
          position: 'fixed',
          pb: 2,
          pt: 2,
          borderTop: '1px solid lightgray',
          width: 'inherit',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}>
        <TextField
          placeholder='add a new task'
          variant='standard'
          fullWidth
          id='name'
          name='name'
        />
        <Button variant='contained' color='primary'>
          Date
        </Button>
      </Container>
    </>
  );
};

export default CreateTaskBar;
