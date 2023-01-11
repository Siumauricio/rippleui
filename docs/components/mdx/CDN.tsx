import React from "react";
import { RippleUIVersion } from "../../utils/items";
import { CodeBlock } from "../playground/CodeBlock";

export const CDN = () => {
  return (
    <CodeBlock language="html" disabledFormat disableTabs={true}>
      {`
<link
   rel="stylesheet"
   href="https://cdn.jsdelivr.net/npm/rippleui@${RippleUIVersion}/dist/css/styles.css"
/>

<!-- And -->
<script src="https://cdn.tailwindcss.com"></script>

<button class="btn">Hello World!</button>
  `}
    </CodeBlock>
  );
};
