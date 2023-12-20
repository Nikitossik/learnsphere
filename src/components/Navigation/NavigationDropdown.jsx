import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import burger from "../../assets/icons/burger.svg";

const NavigationDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="block sm:hidden">
        <Button variant="ghost">
          <img src={burger} className="" alt="burger menu" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="justify-center">Course</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center">Topic</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center">Teacher</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationDropdown;
