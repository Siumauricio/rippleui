import Link from "next/link";
import Router from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import type {
  InternalDocSearchHit,
  StoredDocSearchHit,
} from "@docsearch/react/dist/esm/types";
import { createPortal } from "react-dom";
import { SearchIcon } from "../icons/SearchIcon";

const docSearchConfig = {
  appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID || "",
  apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY || "",
  indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME || "",
};

interface HitProps {
  hit: InternalDocSearchHit | StoredDocSearchHit;
  children: React.ReactNode;
}

function Hit({ hit, children }: HitProps) {
  return <Link href={hit.url}>{children}</Link>;
}

export function Search() {
  let [isOpen, setIsOpen] = useState(false);
  let [modifierKey, setModifierKey] = useState("");

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useDocSearchKeyboardEvents({ isOpen, onOpen, onClose });

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(window.navigator.userAgent) ? "⌘" : "Ctrl "
    );
  }, []);

  return (
    <>
      <button
        type="button"
        className="flex  h-5 w-5 items-center justify-start  hover:border-gray-600 md:h-auto md:w-64 md:flex-none md:rounded-lg  md:border md:border-gray-500 md:bg-backgroundSecondary md:py-2 md:pl-4 md:pr-3.5   md:text-sm"
        onClick={onOpen}
      >
        <SearchIcon className="-ml-2 h-5 w-5 flex-none fill-content3 " />
        <span className="sr-only text-content3 md:not-sr-only md:ml-2">
          Search docs
        </span>
        {modifierKey && (
          <kbd className="ml-auto hidden font-medium text-content3 md:block">
            <kbd className="font-sans">{modifierKey}</kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        )}
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            {...docSearchConfig}
            resultsFooterComponent={() => (
              <div>
                <a href="https://www.algolia.com/docsearch">Algolia</a>
              </div>
            )}
            initialScrollY={window.scrollY}
            onClose={onClose}
            hitComponent={Hit}
            navigator={{
              navigate({ itemUrl }) {
                Router.push(itemUrl);
              },
            }}
          />,
          document.body
        )}
    </>
  );
}
