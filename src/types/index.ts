export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  type: "web" | "mobile";
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "testing" | "tools" | "mobile" | "concepts";
  icon: React.ReactElement;
}
