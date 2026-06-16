import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ToggleButton,
} from '@mui/material';
import type { Task } from '../../../types/task';
import { DoneAll } from '@mui/icons-material';

type TaskOverviewProps = {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
};

const TaskOverview = ({ tasks, onTaskClick }: TaskOverviewProps) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} disableGutters>
          <ListItemButton
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              gap: 1,
            }}>
            <ToggleButton
              value='center'
              sx={{
                border: 'none',
                borderRadius: '1rem',
              }}>
              <DoneAll
                sx={{ fontSize: 20 }}
                onClick={() => onTaskClick(task)}
              />
            </ToggleButton>
            <ListItemText primary={task.name} secondary={task.dueDate} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskOverview;
