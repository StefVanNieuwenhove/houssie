import { Box, Typography, CircularProgress, Container } from '@mui/material';

type LoaderProps = {
  text: string;
};

const Loader = ({ text }: LoaderProps) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: 'calc(100vh - 64px)', // Assuming a header height of 64px
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}>
        <CircularProgress aria-label='loading' size={50} />
        <Typography variant='h6'>{text}</Typography>
      </Box>
    </Container>
  );
};

export default Loader;
