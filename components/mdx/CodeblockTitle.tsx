/**
 * Renders a codeblock title as a styled div element.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The content to be displayed inside the codeblock title.
 * @returns {JSX.Element} The rendered codeblock title.
 */
export function CodeblockTitle({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="rehype-code-title bg-solaralizedlight-darkened dark:bg-solaralizeddark-darkened mb-0 rounded-t-md px-4 pt-4 pb-0 text-sm font-normal"
      {...props}
    >
      <span className="rehype-code-title-content bg-solaralizedlight dark:bg-solaralizeddark relative top-[6px] -left-[6px] inline-block max-w-full overflow-x-auto p-1 whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}
