import {MessageSquare} from 'lucide-react';

import Heading from "@/components/Heading";

export default function Conversation() {
  return (
    <div>
      <Heading 
        title="Conversation"
        description="The most Advanced conversation model."
        icon={MessageSquare}
        iconCOlor='text-violet-500'
        bgColor='bg-violet-500/10'
      />
      <div className='px-4 lg:px-8'>
        
      </div>
    </div>
  )
}
