export function Blockquote({ children }: React.PropsWithChildren) {
  return (
    <blockquote className="border-l-gleam border-l-4 dark:border-l-dusk">
      {children}
    </blockquote>
  );
}
