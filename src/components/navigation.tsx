"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { navItems } from "@/utils/navigation.constant";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => scrollToSection("#home")}
            transition={{ delay: 0.2 }}
            className="cursor-pointer text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className="cursor-pointer text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              className="cursor-pointer hidden md:flex items-center space-x-2"
              onClick={() => {
                // Mock download functionality
                const link = document.createElement("a");
                link.href = "/assets/resume.pdf";
                link.download = "resume.pdf";
                link.click();
              }}
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </Button>

            <Button
              className="cursor-pointer"
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-border"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {item.name}
              </button>
            ))}
            <Button size="sm" className="w-full mt-4">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
