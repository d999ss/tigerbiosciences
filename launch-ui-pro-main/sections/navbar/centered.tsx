import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "../../logos/launch-ui";

export default function Navbar() {
  return (
    <>
      <header className="absolute top-0 z-50 w-full p-2">
        <div className="mx-auto max-w-container">
          <NavbarComponent className="p-2">
            <NavbarLeft>
              <a href="#" className="flex items-center gap-2 text-xl font-bold">
                <LaunchUI />
                Launch UI
              </a>
            </NavbarLeft>
            <NavbarRight>
              <Button variant="default">Get Started</Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-xl font-bold"
                    >
                      <span>Launch UI</span>
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Getting Started
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Components
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Documentation
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </NavbarRight>
          </NavbarComponent>
        </div>
      </header>
      <div className="sticky top-0 z-50 mx-auto hidden max-w-container items-center justify-center p-3 md:flex">
        <NavbarComponent className="rounded-2xl border bg-background/30 p-1 backdrop-blur-lg">
          <Navigation />
        </NavbarComponent>
      </div>
    </>
  );
}
