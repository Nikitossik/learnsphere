import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import google from "../../assets/icons/google.svg";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "A password must be at least 8 characters long",
  }),
});

const SignInForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <Form {...form}>
      <form
        action=""
        className="max-w-[18.75rem] mr-auto ml-auto md:mr-0 lg:mr-auto md:max-w-none lg:max-w-[30rem]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-5">
              <div className="flex items-center">
                <FormLabel className="hidden pr-4 md:flex flex-auto justify-center uppercase texl-lg md:text-xl">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="md:basis-[18.75rem]"
                    placeholder="Email"
                    name="email"
                    required
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="md:max-w-[18.75rem] ml-auto" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-7">
              <div className="flex justify-between items-center gap-x-4">
                <FormLabel className="hidden md:inline uppercase texl-lg md:text-xl">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="md:basis-[18.75rem]"
                    placeholder="Password"
                    name="password"
                    type="password"
                    required
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage className="md:max-w-[18.75rem] ml-auto" />
            </FormItem>
          )}
        />

        <div className="md:max-w-[18.75rem] md:ml-auto ">
          <a href="#" className="block mb-7 text-[#385A83]">
            I forgot my password
          </a>
          <Button variant="outline" className="w-full mb-2">
            Log In
          </Button>
          <div className="flex flex-col items-center md:mt-8 lg:mt-[3.12rem]">
            <Label
              htmlFor=""
              className="uppercase block text-xl font-bold text-center mb-5 leading-normal"
            >
              Or Log in using:
            </Label>
            <Button className="" size="icon" variant="ghost">
              <img src={google} className="w-[43px]" alt="Sing up via Google" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
