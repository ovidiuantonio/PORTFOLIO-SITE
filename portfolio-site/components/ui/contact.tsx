"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
 
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message:z.string().min(20)
})

export default function ContactForm() {
  const contactForm = useRef(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    emailjs
      .sendForm('service_f5sb7e4', 'template_yixx629', contactForm.current == null ? " " : contactForm.current, {
        publicKey: 'O-4Lp44ts_YAF5vz2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    console.log(values.toString())
  }


    return (
      <Form {...form}>
      <form ref={contactForm} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:max-w-[50%] max-w-[90%] mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-bold">Name *</FormLabel>
              <FormControl>
                <Input className="placeholder:text-gray-300 pt-2 pb-2 h-12" placeholder="Your Name ..." {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-bold">Email *</FormLabel>
              <FormControl>
                <Input className="placeholder:text-gray-300 pt-2 pb-2 h-12" placeholder="Your Email ..." {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-bold">Message *</FormLabel>
              <FormControl>
              <Textarea
                  className="placeholder:text-gray-300 resize-none pt-4 pb-2 h-24" placeholder="Write your message here ..."
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    );
  }