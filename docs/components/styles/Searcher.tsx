import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import { SearchIcon } from "../icons/SearchIcon";

interface IComponent {
  name: string;
  link: string;
}

const Components: IComponent[] = [
  {
    name: "Installation",
    link: "/docs/get-started/installation",
  },
  {
    name: "Usage",
    link: "/docs/get-started/usage",
  },
  {
    name: "Theme",
    link: "/docs/get-started/theme",
  },
  {
    name: "Button",
    link: "/docs/components/button",
  },
  {
    name: "Card",
    link: "/docs/components/card",
  },
  {
    name: "Checkbox",
    link: "/docs/components/checkbox",
  },
  {
    name: "Dropdown",
    link: "/docs/components/dropdown",
  },
  {
    name: "Input",
    link: "/docs/components/input",
  },
  {
    name: "Modal",
    link: "/docs/components/modal",
  },
  {
    name: "Navbar",
    link: "/docs/components/navbar",
  },
  {
    name: "Drawer",
    link: "/docs/components/drawer",
  },
  {
    name: "Radio",
    link: "/docs/components/radio",
  },
  {
    name: "Select",
    link: "/docs/components/select",
  },
  {
    name: "Switch",
    link: "/docs/components/switch",
  },
  {
    name: "Table",
    link: "/docs/components/table",
  },
  {
    name: "Tooltip",
    link: "/docs/components/tooltip",
  },
  {
    name: "Button Group",
    link: "/docs/components/button-group",
  },
  {
    name: "Avatar",
    link: "/docs/components/avatar",
  },
  {
    name: "Badge",
    link: "/docs/components/badge",
  },
  {
    name: "Breadcrumb",
    link: "/docs/components/breadcrumb",
  },
  {
    name: "Alert",
    link: "/docs/components/alert",
  },
  {
    name: "Textarea",
    link: "/docs/components/textarea",
  },
  {
    name: "Tabs",
    link: "/docs/components/tabs",
  },
  {
    name: "Accordion",
    link: "/docs/components/accordion",
  },
];

interface Props {
  isMobile?: boolean;
}

export const Searcher = ({ isMobile = false }: Props) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [suggestions, setSuggestions] = useState<IComponent[]>([]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        console.log("Close");
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    if (value) {
      const filtered = Components.filter((component) => {
        return component.name.toLowerCase().includes(value.toLowerCase());
      });
      setSuggestions(filtered);
    }
  }, [value]);

  const onClick = (link: string) => {
    router.push(link);
    setValue("");
  };

  const onFocus = () => {
    if (value.length > 0 && suggestions.length > 0 && wrapperRef.current) {
      // @ts-ignore
      wrapperRef.current.style.visibility = "visible";
    }
  };

  return (
    <div
      className={clsx(
        !isMobile && "hidden lg:flex",
        "relative items-center justify-between "
      )}
    >
      <div className="max-w-[18rem]">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 top-0 flex items-center pl-2">
            <SearchIcon />
          </div>
          <input
            value={value}
            onFocus={onFocus}
            onChange={(e) => setValue(e.target.value)}
            type="search"
            className="input py-2 px-8"
            autoComplete="off"
            placeholder="Search"
          />
          {value.length > 0 && suggestions.length > 0 && (
            <>
              <div
                ref={wrapperRef}
                className="absolute z-10 mt-1 max-h-72 w-full divide-y divide-gray-500 overflow-y-auto rounded-lg border border-gray-500 bg-backgroundSecondary shadow"
              >
                {suggestions.map((component) => (
                  <label
                    key={component.name}
                    className="block cursor-pointer p-2 hover:bg-gray-300"
                    onClick={() => onClick(component.link)}
                  >
                    {component.name}
                  </label>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
