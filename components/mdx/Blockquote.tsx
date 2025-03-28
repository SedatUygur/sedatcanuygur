import clsx from 'clsx';

type Props = {
  noMargin?: boolean;
} & React.PropsWithChildren;

export function Blockquote({ noMargin, children }: Props) {
  return (
    <blockquote
      className={clsx('border-l-gleam dark:border-l-dusk border-l-4', {
        'my-0': noMargin,
      })}
    >
      {children}
    </blockquote>
  );
}
