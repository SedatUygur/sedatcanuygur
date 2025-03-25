import type { PropsWithChildren } from "react";

/**
 * Renders an inline code block with Solarized Light or Dark theme depending on
 * the current theme.
 *
 * @param children the code block to render
 * @returns the rendered code block
 */

export function InlineCodeBlock({ children }: PropsWithChildren) {
  return (
    <code
      className="not-prose font-mono text-sm text-solaralizedlight-foreground bg-solaralizedlight
      dark:text-solaralizeddark-foreground dark:bg-solaralizeddark rounded-md px-1.5 py-1"
    >
      {children}
    </code>
  );
}
