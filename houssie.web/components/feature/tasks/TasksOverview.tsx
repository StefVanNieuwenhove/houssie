import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Task } from "@/types/task"
import { TIME_ZONE } from "@/lib/constants"
import { Toggle } from "@/components/ui/toggle"
import { CircleCheck } from "lucide-react"

type Props = {
  tasks: Task[]
}

const TasksOverview = ({ tasks }: Props) => {
  return (
    <Table className="">
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>
              <Toggle variant="outline" size="default">
                <CircleCheck />
              </Toggle>
            </TableCell>
            <TableCell>{task.name}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.dueDate.toLocaleDateString(TIME_ZONE)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TasksOverview
