import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RESUME_DATA } from "@/data/resume";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | CV`,
  description: RESUME_DATA.summary,
};

export default function AboutPage() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <Button variant="ghost" asChild className="mb-8 pl-0 print:hidden">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
      </Button>
      
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <Globe className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <Phone className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <span className="sr-only">{social.name}</span>
                     {/* Icon handling can be improved later, using simplified text for now if icon component not available directly */}
                    <span className="text-xs font-bold">{social.name[0]}</span> 
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <Avatar className="h-28 w-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <section className="flex min-h-[180px] flex-col justify-center space-y-6">
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </section>

        <section className="flex min-h-[180px] flex-col justify-center space-y-6">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company} className="border-none shadow-none">
              <CardHeader className="p-0">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>
                      <span className="hidden gap-x-1 md:inline-flex">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm text-muted-foreground tabular-nums">
                      {work.start} - {work.end}
                    </div>
                  </div>
                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </div>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-sm">
                {work.description}
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="flex min-h-[180px] flex-col justify-center space-y-6">
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => (
            <Card key={education.school} className="border-none shadow-none">
              <CardHeader className="p-0">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm text-muted-foreground tabular-nums">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 p-0 text-sm">
                {education.degree}
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="flex min-h-[180px] flex-col justify-center space-y-6">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
