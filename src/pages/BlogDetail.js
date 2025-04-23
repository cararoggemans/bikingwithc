import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ProjectNavigation from '../components/ProjectNavigation';
import MetaDescription from '../components/MetaDescription';
import Footer from '../components/Footer';
import blogDataEN from '../data/en/blogData';
import blogDataNL from '../data/nl/blogData';


const BlogDetail = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang, slug } = useParams();

  const blogData = lang === "nl" ? blogDataNL : blogDataEN;
  const currentBlog = blogData.find(blog => blog.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!currentBlog) {
      const fallbackBlog = lang === "nl"
        ? blogDataEN.find(blog => blog.slug === slug) 
        : blogDataNL.find(blog => blog.slug === slug);
      
      if (fallbackBlog) {
        navigate(`/${i18n.language}/blog/${fallbackBlog.slug}`, { replace: true });
      }
    }
  }, [lang, slug, navigate, i18n.language, currentBlog]);

  if (!currentBlog) {
    return <p>{t("blog.not_found")}</p>;
  }

  return (
    <>
      <MetaDescription
          title={`Blog | ${currentBlog.title}`} 
          description={`${currentBlog.meta_description}`} 
        />
      <Hero 
        dynamicSources={currentBlog.imageSources}
        title={currentBlog.title} 
        teaserText={t("featured_blogs.read_more")} 
        backgroundAlt={currentBlog.hero_alt}
      />
      
      <div className="blog-detail__description">
        <div className="container">
          <div className="row">
            <div className="work-detail__image offset-lg-1 col-lg-3 col-sm-5">
              <img src={currentBlog.summary_image} alt={currentBlog.alt} />
            </div>
            <div className="work-detail__text offset-lg-1 col-lg-5 col-sm-7">
              <p>{currentBlog.start_content}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row justify-content-center blog-detail__main">
          <div className="blog-detail__text col-sm-6">
            {currentBlog.middle_content_1 && <p>{currentBlog.middle_content_1}</p>}

            {currentBlog.extra_list_items && currentBlog.extra_list_items.length > 0 && (
              <>
                <p>{currentBlog.extra_list_intro}</p>
                {currentBlog.extra_list_type === "ordered" ? (
                  <ol className="blog-detail__list blog-detail__list--ordered">
                    {currentBlog.extra_list_items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className="blog-detail__list blog-detail__list--unordered">
                    {currentBlog.extra_list_items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
            {currentBlog.middle_content_2 && <p>{currentBlog.middle_content_2}</p>}
            
            {currentBlog.list_items && currentBlog.list_items.length > 0 && (
              <>
                <p>{currentBlog.list_intro}</p>
                {currentBlog.list_type === "ordered" ? (
                  <ol className="blog-detail__list blog-detail__list--ordered">
                    {currentBlog.list_items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul className="blog-detail__list blog-detail__list--unordered">
                    {currentBlog.list_items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {currentBlog.end_content && <p>{currentBlog.end_content}</p>}
            {currentBlog.final_content && <p>{currentBlog.final_content}</p>}
          </div>
        </div>
      </div>

      <ProjectNavigation 
        currentItemId={currentBlog.id} 
        items={blogData} 
        type="blog" 
      />
      <Footer />
    </>
  );
};

export default BlogDetail;
