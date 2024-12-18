"use client";
import React, { useState } from "react";
import { ChevronRight, Code, Server, Layers, Image } from "lucide-react";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((project) => project.id === projectId);
  const [activeSection, setActiveSection] = useState("description");
  const [selectedScreenshot, setSelectedScreenshot] = useState<string>();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    project && (
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 h-fit">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            {project.name}
          </h2>
          <nav className="space-y-2">
            {[
              {
                key: "description",
                label: t("project.navBar.description"),
                icon: <Layers className="mr-2 text-blue-500" />,
              },
              {
                key: "technologies",
                label: t("project.navBar.technologies"),
                icon: <Code className="mr-2 text-green-500" />,
              },
              {
                key: "practices",
                label: t("project.navBar.practices"),
                icon: <Server className="mr-2 text-purple-500" />,
              },
              {
                key: "screenshots",
                label: t("project.navBar.images"),
                icon: <Image className="mr-2 text-red-500" />,
              },
            ].map((section) => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`w-full text-left p-3 rounded-md transition-all flex items-center ${
                  activeSection === section.key
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                }`}
              >
                {section.icon}
                {section.label}
                <ChevronRight
                  className="ml-auto opacity-50"
                  size={18}
                />
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-2 bg-white dark:bg-gray-900 rounded-lg p-6">
          {/* Description Section */}
          {activeSection === "description" && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t("project.description.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {
                  project.description.description[
                    currentLanguage as "en" | "es"
                  ]
                }
              </p>

              <ul className="list-inside list-disc space-y-2 mt-4">
                {project.description.responsabilities[
                  currentLanguage as "en" | "es"
                ].map((responsability, index) => {
                  return (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      {responsability}
                    </li>
                  );
                })}
              </ul>

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  {t("viewProject")}
                </a>
              )}
            </div>
          )}

          {/* Technologies Section */}
          {activeSection === "technologies" && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t("project.technologiesUsed.title")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md flex items-center space-x-3"
                  >
                    <span className="text-gray-700 dark:text-gray-200">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practices Section */}
          {activeSection === "practices" && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t("project.practices.title")}
              </h3>
              <ul className="space-y-3">
                {project.practices.map((practice) => (
                  <li
                    key={practice}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {practice}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Screenshots Section */}
          {activeSection === "screenshots" && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t("project.images.title")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedScreenshot(screenshot)}
                    className="rounded-lg overflow-hidden hover:scale-105 transition-transform"
                  >
                    <img
                      src={screenshot}
                      alt={`Captura ${index + 1}`}
                      className="w-full h-40 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Project Folder Structure (Optional) */}
          {project.folderStructure && activeSection === "description" && (
            <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                Estructura de Carpetas
              </h4>
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
                {project.folderStructure}
              </pre>
            </div>
          )}
        </div>

        {/* Modal for Full Screenshot */}
        {selectedScreenshot && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedScreenshot("")}
          >
            <img
              src={selectedScreenshot}
              alt="Captura de pantalla ampliada"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    )
  );
};

export default ProjectDetailPage;
