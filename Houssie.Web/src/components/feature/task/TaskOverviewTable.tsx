import type { Task } from '../../../lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from '@mui/material';

type TaskOverviewTableProps = {
  tasks: Task[];
};

const TaskOverviewTable = ({ tasks }: TaskOverviewTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center' />
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Description</TableCell>
            <TableCell align='center'>Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell align='center'>
                  <Checkbox />
                </TableCell>
                <TableCell align='center'>{task.name}</TableCell>
                <TableCell align='center'>{task.description}</TableCell>
                <TableCell align='center'>{task.dueDate}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align='center'>
                No tasks available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskOverviewTable;
