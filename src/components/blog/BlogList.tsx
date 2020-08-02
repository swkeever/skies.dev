import React, { useContext } from 'react';
import BlogListItem from './BlogListItem';
import Empty from '../../../assets/empty.svg';
import { BlogContext } from '../../pages';
import { globalStyles } from '../../styles';

function Header({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-5 mb-8 text-xl font-light text-center text-onNeutralBgSoft">
      {children}
    </h2>
  );
}

function Blogs({ allBlogs }: { allBlogs: Blog[] }) {
  const { page, setPage } = useContext(BlogContext);
  const blogsPerPage = 6;
  const firstBlogShown = page * blogsPerPage;
  const lastBlogShown = Math.min(
    firstBlogShown + blogsPerPage,
    allBlogs.length,
  );
  const blogs = allBlogs.slice(firstBlogShown, lastBlogShown);

  const PaginationButton = ({
    className = '',
    disabled,
    onClick,
    children,
  }) => (
    <button
      disabled={disabled}
      type="button"
      onClick={() => {
        document.getElementById('blog-list').scrollIntoView(true);
        onClick();
      }}
      className={`
      relative 
      inline-flex items-center 
      px-4 py-2 
      leading-5 font-medium 
      rounded-full 
      ${globalStyles.outline}
                        shadow-lg

      ${
        disabled
          ? `
            text-neutralSoft
            cursor-not-allowed
            `
          : `
            text-onNeutralBgSoft
            hover:bg-primaryBgSoft
            hover:text-onPrimaryBgSoft
            active:bg-neutralBg
            active:text-onNeutralBg
            bg-neutralBg


            `
      }
      ${globalStyles.transitions.colors}
      ${className}
      `}
    >
      {children}
    </button>
  );

  return (
    <div className="sm:px-6 px-4 max-w-screen-xl mx-auto">
      <Header>
        {`${allBlogs.length} result${allBlogs.length > 1 ? 's' : ''}.`}
      </Header>
      <ul
        id="blog-list"
        className={`grid
          grid-cols-1 
          gap-8 
          px-4
          md:grid-cols-2 
          lg:grid-cols-3 
      `}
      >
        {blogs.slice(0, 6).map((b) => (
          <BlogListItem key={b.id} blog={b} />
        ))}
      </ul>
      <nav
        className={`
      ${globalStyles.transitions.colors}
      mt-12 bg-neutralBgSoft
        
       flex items-center justify-between 
       px-4
       `}
      >
        <div className="hidden sm:block">
          <p className="leading-5 text-onNeutralBgSoft">
            Showing page&nbsp;
            <span className="font-medium">{page + 1}</span>
            &nbsp;of&nbsp;
            <span className="font-medium">
              {Math.ceil(allBlogs.length / blogsPerPage)}
            </span>
            &nbsp;pages.
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <PaginationButton
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="mr-2"
          >
            Previous
          </PaginationButton>
          <PaginationButton
            disabled={firstBlogShown + blogsPerPage >= allBlogs.length}
            onClick={() => setPage(page + 1)}
          >
            Next
          </PaginationButton>
        </div>
      </nav>
    </div>
  );
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const children = blogs.length ? (
    <Blogs allBlogs={blogs} />
  ) : (
    <div className="">
      <Header>No results found.</Header>
      <Empty
        className={`
          max-w-2xl
          w-full
          px-4
          mx-auto 
          h-auto 
          mb-12
        `}
      />
    </div>
  );

  return (
    <section
      className={`
      bg-neutralBgSoft self-stretch flex-grow pt-16 -mt-16 pb-12
      ${globalStyles.transitions.colors}
      `}
    >
      {children}
    </section>
  );
}
