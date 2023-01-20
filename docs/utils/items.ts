import version from "../../package.json";

interface Items {
  title: string;
  links: Link[];
}
interface Link {
  href: string;
  children: string | React.ReactNode;
  disabled?: boolean;
  isNew?: boolean;
  isUpdated?: boolean;
}

export const items: Items[] = [
  {
    title: "Get started",
    links: [
      {
        href: "/docs/get-started/installation",
        children: "Installation",
      },
      {
        href: "/docs/get-started/usage",
        children: "Usage",
      },
      {
        href: "/docs/get-started/theme",
        children: "Theme",
      },
      {
        href: "/docs/get-started/customization",
        children: "Customization",
      },
    ],
  },

  {
    title: "Components",
    links: [
      { href: "/docs/components/accordion", children: "Accordion" },
      { href: "/docs/components/alert", children: "Alert" },
      { href: "/docs/components/avatar", children: "Avatar" },
      { href: "/docs/components/badge", children: "Badge" },
      { href: "/docs/components/breadcrumb", children: "Breadcrumb" },
      { href: "/docs/components/button", children: "Button" },
      {
        href: "/docs/components/button-group",
        children: "ButtonGroup",
      },

      { href: "/docs/components/card", children: "Card" },
      { href: "/docs/components/checkbox", children: "Checkbox" },

      { href: "/docs/components/drawer", children: "Drawer" },
      {
        href: "/docs/components/divider",
        children: "Divider",
        disabled: true,
      },
      { href: "/docs/components/dropdown", children: "Dropdown" },
      { href: "/docs/components/input", children: "Input" },
      {
        href: "/docs/components/link",
        children: "Link",
        disabled: true,
      },
      { href: "/docs/components/modal", children: "Modal" },
      {
        href: "/docs/components/pagination",
        children: "Pagination",
        disabled: true,
      },
      { href: "/docs/components/navbar", children: "Navbar" },
      { href: "/docs/components/radio", children: "Radio" },
      { href: "/docs/components/select", children: "Select" },
      {
        href: "/docs/components/skeleton",
        children: "Skeleton",
        disabled: true,
      },
      { href: "/docs/components/switch", children: "Switch" },

      {
        href: "/docs/components/stepper",
        children: "Stepper",
        disabled: true,
      },
      { href: "/docs/components/tabs", children: "Tabs" },
      { href: "/docs/components/table", children: "Table" },
      { href: "/docs/components/textarea", children: "Textarea" },
      { href: "/docs/components/tooltip", children: "Tooltip" },
    ],
  },
];

export const RippleUIVersion = version.version;
