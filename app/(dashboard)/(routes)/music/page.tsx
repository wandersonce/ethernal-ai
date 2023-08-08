"use client"

import axios from 'axios'
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { MusicIcon} from 'lucide-react';
import { useForm } from 'react-hook-form';

import Heading from "@/components/Heading";
import { formSchema } from './constants';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Empty from '@/components/Empty';
import Loader from '@/components/Loader';
import { useProModal } from '@/app/hooks/use-pro-modal';

export default function Music() {
  const [music, setMusic] = useState<string>();

  const proModal = useProModal();
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      prompt:"",
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async(values:z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined);

      const response = await axios.post('/api/music', values)
      setMusic(response.data.audio);
      form.reset()

    } catch (error:any) {
      if(error?.response?.status === 403){
        proModal.onOpen();
      }
    }finally{
      router.refresh()
    }
  }

  return (
    <div>
      <Heading 
        title="Music Generator"
        description="Turn your prompt into music."
        icon={MusicIcon}
        iconCOlor='text-emerald-500'
        bgColor='bg-emerald-500/10'
      />
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=' rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap2'>
              <FormField name="prompt" render={({field}) => (
                <FormItem className='col-span-12 lg:col-span-10'> 
                  <FormControl className='m-0 p-0'>
                    <Input 
                      className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                      disabled={isLoading}
                      placeholder='Piano solo...'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )} />
              <Button className='col-span-12 lg:col-span-2 w-full' disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
          <p className='text-xs text-muted-foreground pl-4 pt-1'>If you are trying this for the first time, it may take a white to get the response. Don't worry it still working 😊</p>
        </div>
        <div className='space-y-4 mt-4'>
          {isLoading && (
            <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
              <Loader />
            </div>
          )}
          {!music && !isLoading && (
            <Empty label="No Music Generated."/>
          )}
            {music && (
              <audio controls className='w-full mt-8'>
                <source src={music}/> 
              </audio>
            )}
        </div>
      </div>
    </div>
  )
}
