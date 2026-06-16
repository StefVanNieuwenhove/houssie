import * as yup from 'yup';

export const createTaskValidationSchema = yup.object().shape({
  name: yup.string().min(3, 'Name is too short').required('Name is required'),
  description: yup
    .string()
    .min(3, 'Description is too short')
    .required('Description is required'),
  dueDate: yup
    .date()
    .min(new Date(), 'Due date cannot be in the past')
    .required('Due date is required'),
});
