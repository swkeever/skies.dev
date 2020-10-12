import { FixedObject, FluidObject } from 'gatsby-image';

interface BlogDate {
  published: string;
  modified: string;
}

interface BlogImage {
  src: {
    local: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    external: URL;
  };
  photographer: string;
}

interface BlogFrontmatter {
  date: BlogDate;
  title: string;
  description: string;
  categoryId: number;
  authorId: number;
  keywords: string[];
  tags: string[];
  image: BlogImage;
}

interface Author {
  name: string;
  link: URL;
  username: string;
  image: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

interface BlogCategory {
  className: string;
  name: string;
}

interface Field {
  slug: string;
  author: Author;
  category: BlogCategory;
}

export interface BlogMeta {
  frontmatter: BlogFrontmatter;
  fields: Field;
  id: string;
  timeToRead: number;
}

export interface PageQuery {
  allMdx: {
    nodes: BlogMeta[];
  };
}

export interface BlogHeadings {
  depth: number;
  value: string;
}

export interface BlogPostQuery {
  data: {
    blog: {
      id: string;
      timeToRead: number;
      body: string;
      headings: BlogHeadings;
      frontmatter: BlogFrontmatter;
      fields: Field;
    };
    logo: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    similarBlogs: {
      nodes: BlogMeta[];
    };
  };
}
