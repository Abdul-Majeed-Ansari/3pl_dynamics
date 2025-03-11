import { Menu } from "@/types/menu";

// type Menu = {
//   dropdown?: any;
//   id: number;
//   title: string;
//   path?: string;
//   newTab: boolean;
//   submenu?: Menu[];
// };

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
        path: "/products&services/inventory-management",
        newTab: false,
      },
      {
        id: 22,
        title: "Invoice Generation",
        path: "/products&services/invoice-generation",
        newTab: false,
      },
      {
        id: 23,
        title: "Payment Integration",
        path: "/products&services/payment-integration",
        newTab: false,
      },
      {
        id: 24,
        title: "Multi-Currency & Tax Support",
        path: "/products&services/multi-currency-tax-support",
        newTab: false,
      },
      {
        id: 25,
        title: "Warehousing",
        path: "/products&services/warehousing",
        newTab: false,
      },
      {
        id: 26,
        title: "Pick-Pack-Ship",
        path: "/products&services/pickpackship",
        newTab: false,
      },
      {
        id: 27,
        title: "Delivery",
        path: "/products&services/delivery",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Company",
    path: "/about",
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
