import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeOff, EyeIcon } from "lucide-react";

import { Button } from "./button";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-sm border border-black bg-[#ECEFF9] px-2 py-2 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const PasswordInput = React.forwardRef(({ className, ...props }, ref) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="flex rounded-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-950 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-within:ring-slate-300">
      <input
        type={isVisible ? "text" : "password"}
        className={cn(
          "flex h-10 w-full rounded-l-sm border border-black bg-[#ECEFF9] px-2 py-2 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none dark:placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950",
          className
        )}
        ref={ref}
        {...props}
      />
      <Button
        type="button"
        className="rounded-none rounded-r-sm"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <EyeIcon className="h-5 w-5" />
        ) : (
          <EyeOff className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export { Input, PasswordInput };
