import { MenuItem } from "@/types/menuType";
import Link from "next/link";

const MenuComponents = ({ menuProps }: { menuProps: MenuItem[] }) => {
  return (
    <>
      {/* <Menubar>
        {menuProps.map((item) => (
          <MenubarMenu key={item.link}>
            <MenubarTrigger>{item.title}</MenubarTrigger>
            {item.items && (
              <MenubarContent>
                {item.items?.map((item) => (
                  <div key={item.link}>
                    <MenubarItem>
                      <Link href={item.link}>{item.title}</Link>
                      {item.new && (
                        <>
                          <MenubarShortcut className="text-red-500 font-semibold">
                            New
                          </MenubarShortcut>
                        </>
                      )}
                    </MenubarItem>
                  </div>
                ))}
              </MenubarContent>
            )}
          </MenubarMenu>
        ))}
      </Menubar> */}

      <ul className="flex gap-5 items-center">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MenuComponents;
