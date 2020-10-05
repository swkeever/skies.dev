import { FixedObject, FluidObject } from 'gatsby-image';

interface BlogImage {
  childImageSharp: {
    fluid: FluidObject;
  };
}

interface BlogFrontmatter {
  datePublished: string;
  dateModified: string;
  title: string;
  description: string;
  category: number;
  keywords: string[];
  tags: string[];
  image: BlogImage;
  imageUrl: string;
  imagePhotographer: string;
}

interface Field {
  slug: string;
}

interface BlogMeta {
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
