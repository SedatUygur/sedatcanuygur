import Link from 'next/link';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/Card';

type Props = {
  description: string | React.ReactElement;
  externalLink?: boolean;
  href: string;
  title: string;
};

export function HeroCard({
  title,
  description,
  href,
  externalLink = false,
}: Props) {
  const card = (
    <Card className="w-full shadow-lg hover:scale-101 hover:shadow-xl">
      <CardHeader className="p-4">
        <CardTitle className="text-primary dark:text-bright">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );

  return externalLink ? (
    <a className="flex w-full" href={href} target="_blank">
      {card}
    </a>
  ) : (
    <Link className="flex w-full" href={href}>
      {card}
    </Link>
  );
}
