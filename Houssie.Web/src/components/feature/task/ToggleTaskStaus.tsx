import { Checkbox } from '@/components/ui/checkbox';
import { useApiPut } from '@/hooks/useApi';
import type { Task } from '@/lib/types';

type ToggleTaskStausProps = {
  Task: Task;
};

const ToggleTaskStaus = ({ Task }: ToggleTaskStausProps) => {
  const updateTask = useApiPut<Task, Task>('/todo');

  return (
    <Checkbox
      defaultChecked={Task.isDone}
      onCheckedChange={(checked) => {
        updateTask.mutate({ ...Task, isDone: checked === true });
      }}
    />
  );
};

export default ToggleTaskStaus;
