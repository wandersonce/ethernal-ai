import Image from "next/image";

export default function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-pulse">
        <Image 
         alt="Loading..."
         src="/logo.png"
         fill
        />
      </div>
      <p className="text-sm text-muted-foreground ">
        Ethernal is thinking...
      </p>
    </div>
  )
}
