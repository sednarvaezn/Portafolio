"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Optional: You might want to update the URL or store the language preference
    localStorage.setItem("language", lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={i18n.language === "en" ? "default" : "outline"}
        size="icon"
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant={i18n.language === "es" ? "default" : "outline"}
        size="icon"
        onClick={() => changeLanguage("es")}
      >
        ES
      </Button>
    </div>
  );
}
