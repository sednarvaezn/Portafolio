"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t("projects")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
