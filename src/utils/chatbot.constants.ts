export const quickResponses = [
  { text: "What's your experience?", query: "experience" },
  { text: "View projects", query: "projects" },
  { text: "Download resume", query: "resume" },
  { text: "Contact info", query: "contact" },
];
export const botResponses: Record<string, string> = {
  experience:
    "I have 5+ years of experience as a software engineer, specializing in frontend development with React, Angular, and modern JavaScript. I've worked with startups and tech companies building scalable web applications.",
  projects:
    "I've built various projects including e-commerce platforms, task management apps, weather dashboards, and REST APIs. You can check out my portfolio section above to see detailed examples with live demos and source code.",
  resume:
    "You can download my resume using the button in the navigation bar or the hero section. It contains detailed information about my experience, education, and technical skills.",
  contact:
    "You can reach me at alex.johnson@email.com or +1 (555) 123-4567. I'm also available on LinkedIn and GitHub. I typically respond within 24 hours!",
  skills:
    "My core skills include React, TypeScript, Angular, Node.js, Python, and AWS. I'm also experienced with modern development tools and practices like Git, CI/CD, and agile methodologies.",
  default:
    "I'm Alex's virtual assistant! I can help you learn more about Alex's experience, projects, skills, or how to get in touch. Try asking about his background, technical skills, or recent projects!",
};