import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LadingPage() {
  return (
    <div>Lading Page
      <div>
        <Link href="/sign-in">
        <Button>
          Login
        </Button>
        </Link>
        <Link href="/sign-up">
        <Button>
          Register
        </Button>
        </Link>
      </div>

    </div>
  )
}
