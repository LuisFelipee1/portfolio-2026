export type Theme = "light" | "dark";

export type Language = "pt" | "en";

export interface Translation {
  nav: {
    projects: string;
    companies: string;
    education: string;
    about: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    cta: string;
  };
  sections: {
    projects: {
      title: string;
      subtitle: string;
      placeholder: string;
    };
    companies: {
      title: string;
      subtitle: string;
      irko: string;
      alpar: string;
      chat2desk: string;
    };
    education: {
      title: string;
      subtitle: string;
      placeholder: string;
    };
    about: {
      title: string;
      subtitle: string;
      bio: string;
      photoPlaceholder: string;
    };
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
  theme: {
    light: string;
    dark: string;
  };
}

export type TranslationKey = keyof Translation;
