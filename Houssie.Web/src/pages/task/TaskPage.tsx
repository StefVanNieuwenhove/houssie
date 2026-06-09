import { Container } from '@mui/material';
import { getTasks } from '../../api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Loader, TaskOverviewTable, ErrorBox } from '../../components';

const TaskPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });
  const queryClient = useQueryClient();

  const handleOnRetry = () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] });
  };

  const handleOnClose = () => {};

  return (
    <>
      {isLoading && <Loader text='Fetching tasks...' />}
      {error && (
        <ErrorBox
          error='Failed to fetch tasks'
          title='Fetching tasks.'
          onClose={handleOnClose}
          onRetry={handleOnRetry}
        />
      )}
      {data && (
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          <TaskOverviewTable tasks={data} />
        </Container>
      )}
    </>
  );
};

export default TaskPage;
