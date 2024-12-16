"use client";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ModeToggle } from "@/components/modeToggle/modeToggle";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <nav className="flex items-center space-x-4">
        {/* Add navigation menu items */}
        <a
          href="/"
          className="font-bold"
        >
          Portafolio
        </a>
      </nav>
      <nav className="flex items-center space-x-4">
        {/* Add navigation menu items */}
        <a
          href="/#profesional-goals"
          className="font-bold"
        >
          {t("professionalGoals.title")}
        </a>
      </nav>
      <nav className="flex items-center space-x-4">
        {/* Add navigation menu items */}
        <a
          href="/#technologies"
          className="font-bold"
        >
          {t("technologies.title")}
        </a>
      </nav>
      <nav className="flex items-center space-x-4">
        {/* Add navigation menu items */}
        <a
          href="/#workExperience"
          className="font-bold"
        >
          {t("workExperience.title")}
        </a>
      </nav>
      <nav className="flex items-center space-x-4">
        {/* Add navigation menu items */}
        <a
          href="/projects"
          className="font-bold"
        >
          {t("projects")}
        </a>
      </nav>
      <div className="flex items-center justify-end space-x-4">
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
