import type { ReactElement } from 'react';

import { Badge } from '@/components/ui/Badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/Card';

type Props = {
  companyName: string;
  companyUrl?: string;
  description: ReactElement;
  duration: string;
  title: string | ReactElement;
  workType: 'Onsite' | 'Remote' | 'Hybrid';
};

export function ExperienceCard({
  companyName,
  companyUrl,
  workType,
  duration,
  title,
  description,
}: Props) {
  return (
    <Card className="bg-white py-4">
      <CardHeader className="py-0">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 leading-none font-semibold">
            {companyUrl ? (
              <a
                className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
                href={companyUrl}
              >
                {companyName}
              </a>
            ) : (
              companyName
            )}
            <span className="inline-flex gap-x-1">
              <Badge variant="secondary" className="align-middle text-xs">
                {workType}
              </Badge>
            </span>
          </h3>
          <div className="text-sm text-gray-500 tabular-nums">{duration}</div>
        </div>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h4 className="font-mono text-sm leading-none">{title}</h4>
        </div>
      </CardHeader>
      <CardContent className="mt-2 py-0 text-sm">{description}</CardContent>
      <CardFooter className="mt-2 py-0 print:hidden">
        <div className="flex w-full items-center justify-end"></div>
      </CardFooter>
    </Card>
  );
}
