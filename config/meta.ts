interface MetaConfig {
  name: string;
  title: string;
  description: string;
  links: {
    twitter: string;
    github: string;
  };
}

export const metaConfig: MetaConfig = {
  name: "test name",
  title: "test title",
  description: "test description",
  links: {
    twitter: "test twitter",
    github: "test github",
  },
};
