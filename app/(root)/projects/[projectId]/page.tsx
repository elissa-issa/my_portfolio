import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";

// Placeholder initials avatar — swap back to a real <Image> using your own
// public/profile-img.jpg once you have one; the template's photo was removed
// since it belonged to the original author, not you.
const authorInitials = siteConfig.authorName
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function Project({ params }: ProjectPageProps) {
  let project = Projects.find((val) => val.id === params.projectId);
  if (!project) {
    redirect("/projects");
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>
      <div>
        <time
          dateTime={Date.now().toString()}
          className="block text-sm text-muted-foreground"
        >
          {formatDateFromObj(project.startDate)}
        </time>
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {project.companyName}
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={project.category} />
        {project.websiteLink?.startsWith("http") && (
          <Link
            href={project.websiteLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "mt-4")}
          >
            <Icons.externalLink className="w-4 h-4 mr-2" />
            Visit Live Website
          </Link>
        )}
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <div
              className="w-[42px] h-[42px] rounded-full bg-primary flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <span className="font-heading text-sm text-primary-foreground">
                {authorInitials}
              </span>
            </div>

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{siteConfig.authorName}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Image
        src={project.companyLogoImg}
        alt={project.companyName}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Tech Stack
        </h2>
        <ChipContainer textArr={project.techStack} />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Description
        </h2>
        {/* {<project.descriptionComponent />} */}
        <ProjectDescription
          paragraphs={project.descriptionDetails.paragraphs}
          bullets={project.descriptionDetails.bullets}
        />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
          Page Info
        </h2>
        {project.pagesInfoArr.map((page, ind) => (
          <div key={ind}>
            <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
              <Icons.star className="h-5 w-5 mr-2" /> {page.title}
            </h3>
            <div>
              <p>{page.description}</p>
{page.imgArr && page.imgArr.length > 0 && (
                <div className="my-4 flex flex-row gap-4 overflow-x-auto pb-2">
                  {page.imgArr?.map((img, ind) => (
                    <Image
                      src={img}
                      key={ind}
                      alt={img}
                      width={480}
                      height={480}
                      className="h-[280px] w-auto flex-shrink-0 rounded-md border bg-muted object-contain transition-colors sm:h-[380px]"
                      priority
                    />
                  ))}
                </div>
              )}
              {page.videoArr?.map((video, ind) => (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video
                  src={video}
                  key={ind}
                  controls
                  className="my-4 w-full rounded-md border bg-muted transition-colors"
                />
              ))}
              {page.documentArr && page.documentArr.length > 0 && (
                <div className="my-4 flex flex-wrap gap-3">
                  {page.documentArr.map((doc, ind) => (
                    <Link
                      key={ind}
                      href={doc.href}
                      target="_blank"
                      className={cn(buttonVariants({ variant: "outline" }))}
                    >
                      <Icons.post className="w-4 h-4 mr-2" />
                      {doc.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
