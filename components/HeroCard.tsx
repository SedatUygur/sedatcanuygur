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
      <Card className="w-64 h-24 md:w-80 md:h-24 shadow-lg hover:shadow-xl hover:scale-101">
        <CardHeader>
          <CardTitle className="text-primary dark:text-bright">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
