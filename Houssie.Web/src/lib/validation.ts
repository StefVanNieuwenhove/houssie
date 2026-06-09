import * as yup from 'yup';

export const createTaskValidationSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  description: yup.string().min(3).required(),
  dueDate: yup.date().required(),
});
