import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import type { PropsWithChildren } from 'react';
import type {
  TaskProviderProps,
  CreateTask as CreateTaskType,
  Task,
} from '../types/task';
import {
  getTasks as getTasksApi,
  createTask as createTaskApi,
} from '../api/task';

const TaskContext = createContext<TaskProviderProps | null>(null);

const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used inside <TaskProvider>');
  return context;
};

const TaskProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getTasks = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const data = await getTasksApi();
      setTasks(data);
    } catch (error) {
      setIsError(true);
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createTask = useCallback(async (task: CreateTaskType) => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const data = await createTaskApi(task);
      setTasks((prev) => [...prev, data]);
    } catch (error) {
      setIsError(true);
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;

    const load = async () => {
      setIsLoading(true);
      const data = await getTasksApi();
      if (!ignore) setTasks(data);
      setIsLoading(false);
    };

    load();

    return () => {
      ignore = true;
    };
  }, [getTasks]);

  const values = useMemo(
    () => ({
      tasks,
      isLoading,
      isError,
      error,
      getTasks,
      createTask,
    }),
    [tasks, isLoading, isError, error, getTasks, createTask],
  );

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { TaskProvider, useTasks };
