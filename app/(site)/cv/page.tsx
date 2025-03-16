import { GlobeIcon } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

export default function CvPage() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">Sedat Can Uygur</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              Senior Software Engineer with over 8 years of experience in full
              stack development and software architecture
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href="https://www.google.com/maps/place/Portland,+OR"
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                Muğla, Türkiye
              </a>
            </p>
          </div>
          <Avatar className="size-28">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/90511329"
              alt="Sedat Can Uygur"
            />
            <AvatarFallback>SCU</AvatarFallback>
          </Avatar>
        </div>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            Innovative and results-driven Senior Software Engineer with over 8
            years of experience in full‑stack development, software
            architecture. Expert at designing and implementing resilient,
            scalable systems using microservices, cloud technologies and modern
            DevOps practices. Proven track record in delivering high‑quality
            solutions for enterprise clients including Vodafone, Under Armour
            and Sun & Sand Sports and driving technical excellence through best
            practices in coding, testing and system design.
          </p>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a
                    className="hover:underline"
                    href="https://www.truelancer.com/freelancer/sedatuygur"
                  >
                    Freelance
                  </a>
                  <span className="inline-flex gap-x-1">
                    <Badge variant="secondary" className="align-middle text-xs">
                      Remote
                    </Badge>
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  September, 2023 - Current
                </div>
              </div>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h4 className="font-mono text-sm leading-none">
                  Senior Software Engineer
                </h4>
              </div>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
              <ul>
                <li>
                  Architect and develop full stack solutions with an emphasis on
                  scalable microservices and resilient design.
                </li>
                <li>
                  Implement fault-tolerant and performance optimizations using
                  patterns like circuit breakers and redundancy.
                </li>
                <li>
                  Leverage cloud platforms (AWS, Google Cloud) and
                  containerization (Docker, Kubernetes) to streamline
                  deployments.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a className="hover:underline" href="https://featuremind.com">
                    feature/mind
                  </a>
                  <span className="inline-flex gap-x-1">
                    <Badge variant="secondary" className="align-middle text-xs">
                      Remote
                    </Badge>
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  October, 2021 - June, 2023
                </div>
              </div>
              <h4 className="font-mono text-sm leading-none">
                Senior Software Engineer
              </h4>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
              <ul>
                <li>
                  Led design, development and integration of Salesforce-based
                  solutions on Commerce Cloud and Service Cloud.
                </li>
                <li>
                  Developed end‑to‑end projects using Lightning, APEX and
                  Salesforce Flows.
                </li>
                <li>
                  Streamlined data migration processes and implemented rigorous
                  testing and documentation practices.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a
                    className="hover:underline"
                    href="https://www.vodafone.com.tr"
                  >
                    Vodafone
                  </a>
                  <span className="inline-flex gap-x-1">
                    <Badge variant="secondary" className="align-middle text-xs">
                      On-Site & Remote
                    </Badge>
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  March, 2020 - September, 2021
                </div>
              </div>
              <h4 className="font-mono text-sm leading-none">
                Senior Software Engineer
              </h4>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
              <ul>
                <li>
                  Designed and implemented ticket management and web service
                  projects using SOAP and REST APIs.
                </li>
                <li>
                  Designed scalable and service‑oriented architectures to
                  support large‑scale IT operations and enterprise workflows.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a
                    className="hover:underline"
                    href="https://www.kuzeypharma.com"
                  >
                    Kuzey Pharma
                  </a>
                  <span className="inline-flex gap-x-1">
                    <Badge variant="secondary" className="align-middle text-xs">
                      On-Site
                    </Badge>
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  March, 2017 - February, 2020
                </div>
              </div>
              <h4 className="font-mono text-sm leading-none">
                Software Engineer
              </h4>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
              <ul>
                <li>
                  Designed and developed an ERP project using Java technologies,
                  ensuring robust business process automation.
                </li>
                <li>
                  Created and managed databases with T-SQL and PL/SQL to
                  maintain data integrity and performance.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a className="hover:underline" href="https://www.kreatif.net">
                    Kreatif
                  </a>
                  <span className="inline-flex gap-x-1">
                    <Badge variant="secondary" className="align-middle text-xs">
                      On-Site
                    </Badge>
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  December, 2015 - January, 2017
                </div>
              </div>
              <h4 className="font-mono text-sm leading-none">
                Software Engineer
              </h4>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
              <ul>
                <li>
                  Designed and developed e‑commerce websites and plugins using
                  nopCommerce, contributing to innovative online retail
                  solutions.
                </li>
                <li>
                  Award : Saklı Orman - 1st place in the food & beverage
                  category at the 14th Golden Spider Web Awards.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          <Card className="bg-white">
            <CardHeader>
              <div className="flex items-start justify-between gap-x-2 text-base">
                <h3 className="flex flex-col space-y-1 font-semibold leading-none">
                  <a
                    className="hover:underline"
                    href="https://mu.edu.tr/en"
                    target="_blank"
                  >
                    Muğla Sıtkı Koçman University
                  </a>
                  <a
                    className="text-sm text-gray-500 hover:underline"
                    href="https://bilgisayar.mu.edu.tr/en"
                    target="_blank"
                  >
                    Department of Computer Engineering
                  </a>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  September, 2010 - June, 2015
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2">
              B.S. Computer Engineering
            </CardContent>
          </Card>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            <Badge>C#</Badge>
            <Badge>Java</Badge>
            <Badge>Python</Badge>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>ASP.NET Core</Badge>
            <Badge>CSS3</Badge>
            <Badge>SQL</Badge>
            <Badge>MySQL</Badge>
            <Badge>MS SQL</Badge>
            <Badge>T-SQL</Badge>
            <Badge>Spring</Badge>
            <Badge>HTML</Badge>
            <Badge>Agile</Badge>
            <Badge>SCRUM</Badge>
            <Badge>PL/SQL</Badge>
            <Badge>Git</Badge>
            <Badge>Linux</Badge>
            <Badge>MongoDB</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Node.js</Badge>
            <Badge>Salesforce</Badge>
            <Badge>Machine Learning</Badge>
          </div>
        </section>
      </section>
    </main>
  );
}
