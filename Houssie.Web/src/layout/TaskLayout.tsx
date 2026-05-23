import { Loader } from '@/components/feedback';
import { TaskTable } from '@/components/tables';
import { useApi } from '@/hooks/useApi';
import type { Task } from '@/lib/types';

const TaskLayout = () => {
  const { data, isLoading } = useApi<Task[]>('tasks', '/todo?active=true');

  if (isLoading) {
    return <Loader text='Loading tasks...' />;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const handleTaskDone = (task: Task) => {
    console.log('handleTaskDone', task.id);
  };

  return (
    <main className='w-full h-full flex flex-col my-2 mx-auto'>
      <h3 className='text-xl font-bold text-center w-full underline uppercase'>
        Tasks
      </h3>
      <div className='w-full h-full flex flex-col gap-2 p-4'>
        {data.success && data.data.length > 0 ? (
          <TaskTable data={data.data} onTaskDone={handleTaskDone} />
        ) : (
          <div className='w-full h-full flex flex-col gap-2'>
            <h4 className='text-xl font-bold'>No tasks found</h4>
          </div>
        )}
      </div>
    </main>
  );
};

export default TaskLayout;
