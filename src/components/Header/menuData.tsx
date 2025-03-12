import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    dropdown: undefined
  },
  {
    id: 2,
    title: "Products/Features",
    path: "/products&features",
    newTab: false,
    dropdown: [
      {
        id: 21,
        title: "Inventory Management",
        path: "/",
        newTab: false,
      },
      {
        id: 22,
        title: "Invoice Generation",
        path: "/",
        newTab: false,
      },
      {
        id: 23,
        title: "Payment Integration",
        path: "/",
        newTab: false,
      },
      {
        id: 24,
        title: "Multi-Currency & Tax Support",
        path: "/",
        newTab: false,
      },
      {
        id: 25,
        title: "Warehousing",
        path: "/",
        newTab: false,
      },
      {
        id: 26,
        title: "Pick-Pack-Ship",
        path: "/",
        newTab: false,
      },
      {
        id: 27,
        title: "Delivery",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Company",
    path: "/company",
    newTab: false,
    dropdown: undefined
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
    dropdown: undefined
  },
];

export default menuData;
