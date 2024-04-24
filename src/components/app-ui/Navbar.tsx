import { menuSVG, reactIcon } from "@/assets";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/constants";
import { styles } from "@/lib/styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className={`${styles.paddingX} py-5 sticky top-0 z-50 text-[18px] bg-white dark:bg-slate-900 border-b-[1px] border-gray-200`}
    >
      <div className="flex items-center justify-between max-w-screen-md mx-auto">
        <Link
          to="/"
          className="cursor-pointer font-bold flex items-center gap-4"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={reactIcon} />
          <div>Tom | Profolio</div>
        </Link>

        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList className="space-x-5 cursor-pointer text-gray-400">
            {navLinks.map((item) => (
              <NavigationMenuItem
                key={item.id}
                className="hover:text-gray-500 active:text-black"
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu className="sm:hidden mr-5">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <img src={menuSVG} alt="menu" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="cursor-pointer flex flex-col">
                {navLinks.map((item) => (
                  <NavigationMenuLink
                    key={item.id}
                    className="p-3 hover:bg-slate-200"
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
