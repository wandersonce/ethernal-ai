import Heading from "@/components/Heading";
import SubscriptionButton from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

export default async function page() {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading title="Settings" description="Manage account settings" icon={Settings} iconCOlor="text-gray-700" bgColor="bg-gray-700/10" />

      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? "You are currently on a PRO plan" : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro}/>

      </div>
    </div>
  )
}
