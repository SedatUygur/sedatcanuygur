export function Blockquote({ children }: React.PropsWithChildren) {
  return (
    <blockquote className="border-l-gray-100 dark:border-l-dusk">
      {children}
    </blockquote>
  );
}
