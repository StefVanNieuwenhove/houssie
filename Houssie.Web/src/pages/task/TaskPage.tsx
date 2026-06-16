import { memo } from 'react';
import { Container } from '@mui/material';
import { useTasks } from '../../context/TaskProvider';
import { TaskOverview, CreateTaskBar } from '../../components/feature';
import type { Task, CreateTask } from '../../types/task';

const TaskPage = memo(() => {
  const { tasks } = useTasks();

  const handleTaskClick = (task: Task) => {
    console.log(task);
  };

  const handleCreateTask = (task: CreateTask) => {
    console.log('create task', task);
  };
  return (
    <>
      <Container
        maxWidth='lg'
        fixed
        sx={{
          mx: 'auto',
          mt: 5,
        }}>
        <fieldset
          style={{ border: '1px solid lightgray', borderRadius: '1rem' }}>
          <legend>Tasks</legend>
          <TaskOverview tasks={tasks} onTaskClick={handleTaskClick} />
        </fieldset>
        <CreateTaskBar onCreateTask={handleCreateTask} />
      </Container>
    </>
  );
});

export default TaskPage;
