import type { Task } from '@/lib/types';
import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableHeader,
} from '../../ui/table';
import ToggleTaskStaus from './ToggleTaskStaus';

type TaskTableProps = {
  data: Task[];
};

const TaskTable = ({ data }: TaskTableProps) => {
  return (
    <Table className='max-w-dvh mx-auto border border-primary'>
      <TableHeader className='bg-primary'>
        <TableRow>
          <TableHead className='text-primary'></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Due date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((task) => (
          <TableRow key={task.id}>
            <TableCell>
              <ToggleTaskStaus Task={task} />
            </TableCell>
            <TableCell>{task.name}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{new Date(task.dueDate).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className='bg-primary/50'>
          <TableCell colSpan={4} className='text-center'>
            total: {data.length} tasks
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TaskTable;
