interface Items {
  title: string;
  links: Link[];
}
interface Link {
  href: string;
  children: string | React.ReactNode;
  disabled?: boolean;
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
        href: "/docs/get-started/customization",
        children: "Customization",
        disabled: true,
      },
      {
        href: "/docs/get-started/theme",
        children: "Theme",
      },
      {
        href: "/docs/get-started/dark-mode",
        children: "Dark mode",
        disabled: true,
      },
    ],
  },

  {
    title: "Components",
    links: [
      { href: "/docs/components/button", children: "Button" },
      { href: "/docs/components/input", children: "Input" },
      { href: "/docs/components/textarea", children: "Textarea" },
      { href: "/docs/components/checkbox", children: "Checkbox" },
      {
        href: "/docs/components/button-group",
        children: "ButtonGroup",
      },
      { href: "/docs/components/radio", children: "Radio" },
      { href: "/docs/components/drawer", children: "Drawer" },
      { href: "/docs/components/modal", children: "Modal" },
      { href: "/docs/components/select", children: "Select" },
      { href: "/docs/components/switch", children: "Switch" },
      { href: "/docs/components/table", children: "Table" },
      { href: "/docs/components/navbar", children: "Navbar" },

      {
        href: "/docs/components/collapse",
        children: "Collapse",
        disabled: true,
      },
      { href: "/docs/components/breadcrumb", children: "Breadcrumb" },
      { href: "/docs/components/badge", children: "Badge" },
      { href: "/docs/components/alert", children: "Alert" },
      { href: "/docs/components/tooltip", children: "Tooltip" },
      { href: "/docs/components/avatar", children: "Avatar" },
      { href: "/docs/components/dropdown", children: "Dropdown" },
      { href: "/docs/components/card", children: "Card" },
    ],
  },
  {
    title: "Credits",
    links: [{ href: "/docs", children: "Overview" }],
  },
];
