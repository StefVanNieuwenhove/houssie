export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch('/api/todo');
  const data = await response.json();
  return data;
};
