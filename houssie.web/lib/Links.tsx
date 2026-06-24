import { LinkGroup } from "@/types/nav"
import {
  BookMarked,
  BookPlus,
  Calendar,
  CalendarSearch,
  ChefHat,
  CircleCheckBig,
  Home,
  LeafyGreen,
  ListTodo,
  Refrigerator,
  ShoppingBasket,
} from "lucide-react"

export const links: LinkGroup[] = [
  {
    group: "Household",
    items: [
      {
        type: "group",
        name: "Planner",
        icon: <Calendar size={16} />,
        links: [
          {
            name: "Overview",
            href: "/household/planner",
            icon: <CalendarSearch size={16} />,
          },
        ],
      },
      {
        type: "single",
        name: "Tasks",
        icon: <CircleCheckBig size={16} />,
        links: "/household/tasks",
      },
    ],
  },
  {
    group: "Kitchen",
    items: [
      {
        type: "group",
        name: "Groceries",
        icon: <LeafyGreen size={16} />,
        links: [
          {
            name: "Things in stock",
            href: "/kitchen/groceries/in-stock",
            icon: <Refrigerator size={16} />,
          },
          {
            name: "Things to buy",
            href: "/kitchen/groceries/to-buy",
            icon: <ShoppingBasket size={16} />,
          },
        ],
      },
      {
        type: "group",
        name: "Recipes",
        icon: <ChefHat size={16} />,
        links: [
          {
            name: "My Recipes",
            href: "/kitchen/recipes",
            icon: <BookMarked size={16} />,
          },
          {
            name: "Add Recipe",
            href: "/kitchen/recipes/create",
            icon: <BookPlus size={16} />,
          },
        ],
      },
    ],
  },
]
