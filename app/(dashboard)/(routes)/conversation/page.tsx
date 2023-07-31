"use client"

import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import {MessageSquare} from 'lucide-react';
import { useForm } from 'react-hook-form';

import Heading from "@/components/Heading";
import { formSchema } from './constants';

export default function Conversation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      prompt:"",
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async(values:z.infer<typeof formSchema>) => {
    console.log(values)
  }

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
