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
    <div className="rehype-code-title" {...props}>
      <span className="rehype-code-title-content">{children}</span>
    </div>
  );
}
