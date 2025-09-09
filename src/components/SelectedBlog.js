import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogItem from './BlogItem';
import blogDataEN from '../data/en/blogData';
import blogDataNL from '../data/nl/blogData';

const SelectedBlog = () => {
  const { t, i18n } = useTranslation();
  
  // ✅ Select the correct language blog data dynamically
  const blogData = i18n.language === "nl" ? blogDataNL : blogDataEN;

  // ✅ Prevent modifying the original array
  const sortedBlogs = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const blogClasses = [
    "selected-blog__item offset-lg-2 col-lg-4 col-md-6",
    "selected-blog__item col-lg-4 col-md-6",
  ];

  return (
    <section className="selected-blog">
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <h2 className="selected-blog__title">{t("featured_blogs.title")}</h2>
          <p className="selected-blog__subtitle" aria-hidden="true">
            {t("featured_blogs.subtitle")}
          </p>
        </div>
      </div>
        <ul className="selected-blog__articles row">
          {sortedBlogs.slice(0, 2).map((blog, index) => (
            <li key={blog.id} className={blogClasses[index] || "selected-blog__item col-lg-4 col-md-6"}>
              <BlogItem
                image={blog.image}
                title={blog.title}
                description={blog.description}
                alt={blog.alt}
                link={`/${i18n.language}/blog/${blog.slug}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SelectedBlog;
