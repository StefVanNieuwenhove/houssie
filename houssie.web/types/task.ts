export type Task = {
  id: string
  name: string
  description: string
  isDone: boolean
  dueDate: Date
}

export type CreateTask = {
  name: string
  description: string
  dueDate: Date
}

export type UpdateTask = {
  id: string
  task: Task
}
