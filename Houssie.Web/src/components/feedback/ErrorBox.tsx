import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

type Props = {
  title?: string;
  error: string;
  onClose?: () => void;
  onRetry?: () => void;
};

const ErrorBox = ({ error, title, onClose, onRetry }: Props) => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)',
      }}>
      <Alert
        severity='error'
        sx={{ width: '40rem', border: '2px solid #ccc', borderRadius: '8px' }}>
        <AlertTitle>{title || 'Error'}</AlertTitle>
        <Typography variant='body1'>{error}</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 2,
          }}>
          {onRetry && (
            <Button
              onClick={onRetry}
              variant='contained'
              color='inherit'
              sx={{ mr: 1 }}>
              Retry
            </Button>
          )}
          {onClose && (
            <Button
              onClick={onClose}
              variant='contained'
              color='inherit'
              sx={{ mr: 1 }}>
              Close
            </Button>
          )}
        </Box>
      </Alert>
    </Container>
  );
};

export default ErrorBox;
