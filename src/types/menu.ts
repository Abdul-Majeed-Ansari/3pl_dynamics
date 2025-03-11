export type Menu = {
  dropdown: any;
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
