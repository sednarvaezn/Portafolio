import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Project } from "@/data/projects";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const router = useRouter();
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>
          {project.description.description[currentLanguage as "en" | "es"]}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex min-h-[250px] flex-grow items-center justify-center gap-2">
            {project.mainScreenshot && (
              <Image
                src={project.mainScreenshot}
                alt={`${project.name} `}
                width={200}
                height={150}
                className="rounded-md object-cover"
              />
            )}
          </div>
          <div className="flex justify-between">
            {project.githubLink && (
              <Button
                variant="outline"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                GitHub
              </Button>
            )}
            {
              <Button
                variant="outline"
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                {t("seeDetails")}
              </Button>
            }
            {project.liveLink && (
              <Button onClick={() => window.open(project.liveLink, "_blank")}>
                {t("viewProject")}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
