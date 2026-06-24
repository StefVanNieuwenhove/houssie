import { Task } from "@/types/task"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Props = {
  onSubmit: (task: Task) => void
}

const CreateTask = ({ onSubmit }: Props) => {
  return (
    <div className="flex flex-row gap-4 border-b border-border p-4">
      <Input className="bottom-0 w-full" />
      <Button>Create task</Button>
    </div>
  )
}

export default CreateTask
