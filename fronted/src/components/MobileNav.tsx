import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>

      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to WebweaverFoods.com!</span>
        </SheetTitle>

        <Separator />

        <SheetDescription className="flex">
          <Button className="bg-orange-500 font-bold flex-1 ">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
