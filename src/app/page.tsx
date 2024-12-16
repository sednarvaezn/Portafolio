"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Briefcase,
  Code,
  Target,
  User,
  Mail,
  MapPin,
  Linkedin,
} from "lucide-react";
import { experiences } from "../data/experiences";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
];

const personalInfo = {
  name: "Sebastian Danilo Narvaez Narvaez",
  email: "narvaeznarvaezsd@gmail.com",
  location: "Ipiales, Nariño, Colombia",
  linkedin: "https://www.linkedin.com/in/sebastian-narvaez-1a87bb140/",
};

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 scroll-mt-16 flex flex-col gap-4">
        <div className="flex items-center mb-4">
          <User className="w-10 h-10 mr-4 text-primary" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {personalInfo.name}
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-gray-600 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-blue-600 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="w-5 h-5 text-primary" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center mt-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t("profile.title")}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {t("profile.description")}
          </p>
          <div className="flex justify-end mt-4">
            <Link href="/projects">
              <Button variant="default">
                {t("seeProjects")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Professional Goals */}
      <div
        id="profesional-goals"
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 scroll-mt-16"
      >
        <div className="flex items-center mb-4">
          <Target className="w-10 h-10 mr-4 text-primary" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {t("professionalGoals.title")}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          {t("professionalGoals.description")}
        </p>
      </div>

      {/* Technologies */}
      <div
        id="technologies"
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 scroll-mt-16"
      >
        <div className="flex items-center mb-4">
          <Code className="w-10 h-10 mr-4 text-primary" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {t("technologies.title")}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div
        id="workExperience"
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 scroll-mt-16"
      >
        <div className="flex items-center mb-4">
          <Briefcase className="w-10 h-10 mr-4 text-primary" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {t("workExperience.title")}
          </h2>
        </div>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative py-6 transition-all duration-300 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 rounded-lg px-4"
            >
              <div className="flex items-start justify-between space-x-4">
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {exp.company}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 opacity-80 group-hover:opacity-100 transition-opacity">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.description[currentLanguage as "en" | "es"].map(
                      (description, descIndex) => (
                        <li
                          key={descIndex}
                          className="flex items-start space-x-2 group-hover:text-gray-800 dark:group-hover:text-white transition-colors"
                        >
                          <svg
                            className="w-4 h-4 mt-1 flex-shrink-0 text-blue-500 dark:text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="flex-grow">{description}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
