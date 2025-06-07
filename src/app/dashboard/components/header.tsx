import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HandCoins, LogOut, Menu } from "lucide-react";
import Link from "next/link";

export function HeaderDesktop() {
  return (
    <main className="border border-b">
      <header className="container mx-auto h-16  flex items-center justify-between px-4 py-3 ">
        <aside className="flex items-center text-amber-500 font-bold text-xl">
          <HandCoins className="w-6 h-6 mr-2" />
          <span>ApoiaDev</span>
        </aside>
        <aside className="hidden md:flex gap-6 ">
          <Link href={"#"} className="font-semibold">
            DashBoard
          </Link>
          <Link href={"#"} className="font-semibold">
            Meu Perfil
          </Link>
          <LogOut className="text-red-500" />
        </aside>
        <aside className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant={"outline"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-72">
              <SheetHeader className="flex justify-center">
                <h2 className="font-semibold text-lg ">Menu</h2>
              </SheetHeader>
              <div className="font-semibold space-y-4  px-4">
                <Link href={"./dashboard"}>Dashboard</Link>
                <Link href={"./meuperfil"}>Meu perfil</Link>
              </div>
              <Link
                href={"./"}
                className="px-4 pt-3 flex gap-3 items-center group"
              >
                <LogOut className="text-red-400 group-hover:text-red-500 w-5 h-5" />
                <span className="text-red-500 font-medium">Sair</span>
              </Link>
            </SheetContent>
          </Sheet>
        </aside>
      </header>
    </main>
  );
}
