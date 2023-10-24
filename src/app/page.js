import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
export default function Home() {
  return (
   <>
   <div className="bg-zinc-950 dark:bg-black-100 text-white dark:text-white">
    new
    <Button > Click me</Button>
    <ModeToggle/>
   </div>
   </>
  )
}
