import { MenuItem } from "@/types/menuType";

export const MenuList: MenuItem[] = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Product",
    link: "/product",
    items: [
      {
        title: "Product 1",
        link: "produk-1",
      },
      {
        title: "Product 2",
        link: "produk-2",
      },
      {
        title: "Product 3",
        link: "produk-3",
        new: true,
      },
    ],
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
