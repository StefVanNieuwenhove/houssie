import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

type Props = {
  message: string
}

const ErrorAlert = ({ message }: Props) => {
  return (
    <Alert className="max-w-md border-red-200 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-50">
      <AlertCircle />
      <AlertTitle>fetching data failed</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}

export default ErrorAlert
