import { Container, Box, Typography, Button } from '@mui/material';

type FormProviderProps = {
  children: React.ReactNode;
  title?: string;
  onSubmit: () => void;
  onReset: () => void;
  SubmitBtnText?: string;
  isSubmitting: boolean;
};

const FormProvider = ({
  children,
  title,
  onSubmit,
  onReset,
  SubmitBtnText,
  isSubmitting,
}: FormProviderProps) => {
  return (
    <Container
      maxWidth='md'
      sx={{
        mt: 4,
        mb: 4,
        p: 2,
        width: '100%',
        borderRadius: '1rem',
        border: '1px solid lightgray',
      }}>
      {title && (
        <Box
          sx={{
            mb: 2,
            textAlign: 'center',
            borderBottom: '1px solid lightgray',
          }}>
          <Typography variant='h5' sx={{ mb: 1, textTransform: 'uppercase' }}>
            {title}
          </Typography>
        </Box>
      )}
      <form onSubmit={onSubmit} onReset={onReset}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {children}
        </Box>
        <Box
          sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button
            type='reset'
            variant='outlined'
            color='secondary'
            fullWidth
            disabled={isSubmitting}>
            Reset
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={isSubmitting}>
            {SubmitBtnText || 'Submit'}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default FormProvider;
