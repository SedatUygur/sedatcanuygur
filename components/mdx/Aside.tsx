type Props = {
  heading: string;
} & React.PropsWithChildren;

export function Aside({ heading, children }: Props) {
  return (
    <aside className="border-l-gleam bg-solaralizedlight dark:bg-solaralizeddark dark:border-l-cloud rounded-xl border-l-4 p-4">
      <h6 className="font-bold">{heading}</h6>
      {children}
    </aside>
  );
}
