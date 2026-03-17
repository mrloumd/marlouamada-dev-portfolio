export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
}
