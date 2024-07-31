"use client";

import Themes from "@/contants/theme";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) return null;

  let _theme = theme as string;
  if (theme && theme === "system") {
    _theme = systemTheme as string;
  }

  const themeSwitchHandler = (_currentTheme: string) => {
    const themeToSwitch =
      _currentTheme === Themes.dark ? Themes.light : Themes.dark;
    setTheme(themeToSwitch);
  };

  return (
    <button
      className="flex h-10 w-10 rounded-md bg-white p-2 text-3xl text-primary shadow-md"
      onClick={() => themeSwitchHandler(_theme)}
    >
      {_theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeButton;
