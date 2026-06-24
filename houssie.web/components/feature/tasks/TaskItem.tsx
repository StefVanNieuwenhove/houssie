"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Task } from "@/types/task"
import { EllipsisVertical, CircleCheck } from "lucide-react"
import { TIME_ZONE } from "@/lib/constants"
import { Toggle } from "@/components/ui/toggle"

type Props = {
  task: Task
  onTaskDone: (task: Task) => void
}

const TaskItem = ({ task, onTaskDone }: Props) => {
  return (
    <>
      <Item>
        <ItemMedia>
          <Toggle size="lg" onChange={() => onTaskDone(task)}>
            <CircleCheck />
          </Toggle>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{task.name}</ItemTitle>
          <ItemDescription>
            {task.description} - {task.dueDate.toLocaleDateString(TIME_ZONE)}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </ItemActions>
      </Item>
      <hr className="border-b" />
    </>
  )
}

export default TaskItem
