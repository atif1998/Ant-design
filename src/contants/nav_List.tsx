export interface INavListItem {
  id: number;
  href?: string;
  icon: string;
  name: string;
  subLinks?: {
    id: number;
    href: string;
    icon: string;
    name: string;
  }[];
}

const NavList: INavListItem[] = [
  {
    id: 0,
    href: "/dashboard",
    icon: "/dashboard/Home.svg",
    name: "Home",
  },
  {
    id: 1,
    href: "/users",
    icon: "/dashboard/Users.svg",
    name: "Users",
  },
  {
    id: 2,
    icon: "/ChatDark.svg",
    name: "Communication",
  },
  {
    id: 3,
    href: "/facilities",
    icon: "/dashboard/ManageFacility.svg",
    name: "Manage Facilities",
  },
  {
    id: 4,
    href: "/users4",
    icon: "/dashboard/Reports.svg",
    name: "Reports",
  },
  {
    id: 5,
    href: "/users5",
    icon: "/dashboard/Activity.svg",
    name: "Activity Logs",
  },
  {
    id: 6,
    href: "/audit",
    icon: "/dashboard/Audit.svg",
    name: "Audit Trail",
  },
];

export default NavList;
