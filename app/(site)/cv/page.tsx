import { GlobeIcon } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { ExperienceCard } from "@/components/ExperienceCard";

export default function CvPage() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-4 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-4 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">Sedat Can Uygur</h1>
            <p className="max-w-md items-center text-pretty font-mono text-sm text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href="https://www.google.com/maps/place/Muğla,+Türkiye"
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                Muğla, Türkiye
              </a>
            </p>
          </div>
          <Avatar className="h-20 w-20">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/90511329"
              alt="Sedat Can Uygur"
            />
            <AvatarFallback>SCU</AvatarFallback>
          </Avatar>
        </div>
        <section className="flex min-h-0 flex-col gap-y-3">
          <Link href={"about"}>
            <h2 className="text-xl font-bold hover:underline">About</h2>
          </Link>
          <p className="text-pretty font-mono text-base text-muted-foreground">
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
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>
          <ExperienceCard
            companyName="Freelance"
            companyUrl="https://www.linkedin.com/in/sedat-can-uygur"
            workType="Remote"
            duration="09.2023 - Current"
            title="Senior Software Engineer"
            description={
              <ul className="list-disc ps-4">
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
            }
          />
          <ExperienceCard
            companyName="feature/mind"
            companyUrl="https://featuremind.com"
            workType="Remote"
            duration="10.2021 - 06.2023"
            title="Senior Software Engineer"
            description={
              <ul className="list-disc ps-4">
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
            }
          />
          <ExperienceCard
            companyName="Vodafone"
            companyUrl="https://www.vodafone.com.tr"
            workType="Remote"
            duration="03.2020 - 09.2021"
            title="Senior Software Engineer"
            description={
              <ul className="list-disc ps-4">
                <li>
                  Developed and implemented ticket management and web service
                  projects using SOAP and REST APIs.
                </li>
                <li>
                  Designed scalable and service‑oriented architectures to
                  support large‑scale IT operations and enterprise workflows.
                </li>
              </ul>
            }
          />
          <ExperienceCard
            companyName="Kuzey Pharma"
            companyUrl="https://www.kuzeypharma.com"
            workType="Onsite"
            duration="03.2017 - 02.2020"
            title="Software Engineer"
            description={
              <ul className="list-disc ps-4">
                <li>
                  Designed and developed an ERP project using Java technologies,
                  ensuring robust business process automation.
                </li>
                <li>
                  Created and managed databases with T-SQL and PL/SQL to
                  maintain data integrity and performance.
                </li>
              </ul>
            }
          />
          <ExperienceCard
            companyName="Kreatif"
            companyUrl="https://www.kreatif.net"
            workType="Onsite"
            duration="12.2015 - 01.2017"
            title="Software Engineer"
            description={
              <ul className="list-disc ps-4">
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
            }
          />
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          <Card className="bg-white py-4">
            <CardHeader className="py-0">
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
                  09.2010 - 06.2015
                </div>
              </div>
            </CardHeader>
            <CardContent className="py-0 mt-2 text-xs">
              B.S. Computer Engineering
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
