import { Input, PasswordInput } from "@/components/ui/input";
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { useContext } from "react";
import { UserContext } from "@/hoc/UserContext";

const NAME_REGEX =
  /^([a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+)*[.]{0,1}){1,2}$/;

const PHONE_REGEX = /^\+(?:[0-9] ?){6,14}[0-9]$/;

const formSchema = z.object({
  firstName: z.string().refine((str) => NAME_REGEX.test(str), {
    message: "Invalid value",
  }),
  lastName: z.string().refine((str) => NAME_REGEX.test(str), {
    message: "Invalid value",
  }),
  phone: z.string().refine((str) => PHONE_REGEX.test(str), {
    message: "Invalid phone value",
  }),
  age: z.coerce.number().int().min(0).max(100),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "A password must be at least 8 characters long",
  }),
});

const EditProfileForm = ({ className }) => {
  const info = useContext(UserContext);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...info,
    },
  });

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <Form {...form}>
      <form
        action=""
        className={cn(
          "space-y-3 md:space-y-5 p-4 overflow-y-auto max-h-80 min-[480px]:max-h-none",
          className
        )}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="uppercase texl-lg">First name</FormLabel>
                <FormControl>
                  <Input
                    className=""
                    value={info.firstName}
                    placeholder="First name"
                    name="first-name"
                    required
                    {...field}
                  />
                </FormControl>

                <FormMessage className="" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="uppercase texl-lg">Last name</FormLabel>
                <FormControl>
                  <Input
                    className=""
                    value={info.lastName}
                    placeholder="Last name"
                    name="last-name"
                    required
                    {...field}
                  />
                </FormControl>

                <FormMessage className="" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="uppercase texl-lg">Number</FormLabel>
                <FormControl>
                  <Input
                    className=""
                    value={info.phone}
                    placeholder="Telephone"
                    name="phone"
                    type="tel"
                    required
                    {...field}
                  />
                </FormControl>

                <FormMessage className="" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="uppercase texl-lg">Age</FormLabel>
                <FormControl>
                  <Input
                    className=""
                    value={info.age}
                    placeholder="Age"
                    name="age"
                    type="number"
                    min={0}
                    max={100}
                    required
                    {...field}
                  />
                </FormControl>

                <FormMessage className="" />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="email"
            value={info.email}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="uppercase texl-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    className=""
                    placeholder="Email"
                    name="email"
                    required
                    {...field}
                  />
                </FormControl>

                <FormMessage className="" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="uppercase texl-lg">Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    className=""
                    value={info.password}
                    placeholder="Password"
                    name="password"
                    // type="password"
                    required
                    {...field}
                  />
                </FormControl>

                <FormMessage className="" />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          className="w-full md:flex md:w-auto md:mx-auto"
        >
          Save changes
        </Button>
      </form>
    </Form>
  );
};

export default EditProfileForm;
