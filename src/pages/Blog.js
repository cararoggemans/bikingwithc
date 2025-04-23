import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import blogDataEN from '../data/en/blogData';
import blogDataNL from '../data/nl/blogData';
import MetaDescription from '../components/MetaDescription';
import BlogItem from '../components/BlogItem';
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t, i18n } = useTranslation();

  const blogData = i18n.language === "nl" ? blogDataNL : blogDataEN;

  return (
    <div>
      <MetaDescription
          title={t("meta.blog.title")} 
          description={t("meta.blog.description")} 
        />
      <Hero
        backgroundBaseName="blog"
        title={t("pages.blog.hero_title")}
        teaserText={t("pages.blog.subtitle")}
      />

      <section className="description container" id="small-description">
      <div className="row justify-content-center">
        <h2 className="blog-page__title">{t("pages.blog.title")}</h2>
        <p className="blog-page__description">{t("pages.blog.description")}</p>
      </div>
      </section>
      <div className="blog-page__grid">
      <div className="container">
        <div className="row justify-content-center">
              {blogData.map((blog, index) => (
                <div key={blog.id} className="blog-page__item col-12 col-md-6 col-lg-4 mb-4">
                  <BlogItem 
                    image={blog.image}
                    title={blog.title}
                    link={`/${i18n.language}/blog/${blog.slug}`}
                    alt={blog.alt}
                    description={blog.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      <Footer />
    </div>
  );
};

export default Blog;