import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";

type Props = {
  title: string;
  description: string;
  href: string;
};

export function HeroCard({ title, description, href }: Props) {
  return (
    <Link href={href}>
      <Card className="w-64 h-40 md:w-80 md:h-32">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
