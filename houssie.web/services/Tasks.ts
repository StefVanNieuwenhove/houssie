import { env } from "@/env"
import { ApiResponse } from "@/types/api"
import { Task, CreateTask, UpdateTask } from "@/types/task"

const BASE_URL = `${env.API_URL}/todo`

export const getActiveTasks = async (): Promise<ApiResponse<Task[]>> => {
  try {
    const res = await fetch(`${BASE_URL}?active=true`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      return {
        error: `Request failed: ${res.status} - ${res.statusText}`,
        success: false,
      }
    }

    const data = (await res.json()) as Task[]
    return {
      data: data.map((task) => ({ ...task, dueDate: new Date(task.dueDate) })),
      success: true,
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return { error: message, success: false }
  }
}

export const createTask = async (
  task: CreateTask
): Promise<ApiResponse<Task>> => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })

    if (!res.ok) {
      return {
        error: `Request failed: ${res.status} - ${res.statusText}`,
        success: false,
      }
    }

    const data = (await res.json()) as Task
    return {
      data: { ...data, dueDate: new Date(data.dueDate) },
      success: true,
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return { error: message, success: false }
  }
}

export const updateTask = async ({
  id,
  task,
}: UpdateTask): Promise<ApiResponse<Task>> => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })

    if (!res.ok) {
      return {
        error: `Request failed: ${res.status} - ${res.statusText}`,
        success: false,
      }
    }

    const data = (await res.json()) as Task
    return {
      data: { ...data, dueDate: new Date(data.dueDate) },
      success: true,
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return { error: message, success: false }
  }
}
