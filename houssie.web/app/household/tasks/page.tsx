import { getActiveTasks, createTask, updateTask } from "@/services/Tasks"
import { ApiResponse } from "@/types/api"
import { Task } from "@/types/task"
import { TaskItem, CreateTask } from "@/components/feature"
import { ErrorAlert } from "@/components/feedback"
import { ItemGroup } from "@/components/ui/item"

const page = async () => {
  const tasks: ApiResponse<Task[]> = await getActiveTasks()

  const handleCreateTask = async (task: Task) => {
    "use server"
    const response = await createTask(task)
    if (response.success) {
      console.log("success")
    } else {
      console.log("error")
    }
  }

  const handleTaskDone = async (task: Task) => {
    "use server"
    console.log("task", task)
    // const response = await updateTask({
    //   id: task.id,
    //   task: { ...task, isDone: true },
    // })
    // if (response.success) {
    //   console.log("success")
    // } else {
    //   console.log("error")
    // }
  }

  return (
    <article className="flex flex-col justify-between">
      {/* Scrollable task list */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {tasks.success && (
          <section>
            <ItemGroup>
              {tasks.data.map((task) => (
                <TaskItem
                  task={task}
                  key={task.id}
                  onTaskDone={handleTaskDone}
                />
              ))}
            </ItemGroup>
          </section>
        )}

        {!tasks.success && (
          <section className="flex justify-center">
            <ErrorAlert message={tasks.error} />
          </section>
        )}
      </div>
      {/* Fixed bottom area */}
      <div className="border-t bg-background p-4">
        <CreateTask onSubmit={handleCreateTask} />
      </div>
    </article>
  )
}

export default page
