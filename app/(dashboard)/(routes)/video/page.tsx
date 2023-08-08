"use client"

import axios from 'axios'
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import {  VideoIcon} from 'lucide-react';
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

export default function Video() {
  const [video, setVideo] = useState<string>();

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
      setVideo(undefined);

      const response = await axios.post('/api/video', values)
      setVideo(response.data[0]);
      form.reset()

    } catch (error:any) {
      //TODO: Open Pro Modal
      console.log(error)
    }finally{
      router.refresh()
    }
  }

  return (
    <div>
      <Heading 
        title="Video Generator"
        description="Turn your prompt into a Video."
        icon={VideoIcon}
        iconCOlor='text-orange-700'
        bgColor='bg-orange-700/10'
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
                      placeholder='Clown fish swiming around a coral...'
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
          {!video && !isLoading && (
            <Empty label="No Video Generated."/>
          )}
            {video && (
              <video className='w-full aspect-video mt-8 mb-8 rounded-lg border bg-black' controls >
                <source src={video} />
              </video>
            )}
        </div>
      </div>
    </div>
  )
}