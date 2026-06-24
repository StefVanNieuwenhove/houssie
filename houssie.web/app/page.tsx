import { Button } from "@/components/ui/button"
import { TOGGLE_THEME_KEY } from "@/lib/constants"

export default function Page() {
  return (
    <div className="p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2" color="primary">
            Button
          </Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>{TOGGLE_THEME_KEY}</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
