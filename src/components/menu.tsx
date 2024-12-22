import { MenuItem } from "@/types/menuType";
import Link from "next/link";

const MenuComponents = ({ menuProps }: { menuProps: MenuItem[] }) => {
  return (
    <>
      <ul id="menu" className="flex gap-5 items-center font-semibold">
        <li>
          <Link href="/about" scroll={false}>About</Link>
        </li>
        <li>
          <Link href="/pricing" scroll={false}>Pricing</Link>
        </li>
        <li>
          <Link href="/contact" scroll={false}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MenuComponents;
