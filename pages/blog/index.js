import React, { Fragment, useEffect, useState } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import BlogList from '../../components/BlogList/BlogList';
import Navbar from '../../components/NavbarS3/NavbarS3';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import logo from '/public/images/logo-2.png';
import pageTitles from '../../data/pageTitles.json';

const BlogPage = () => {
  const [lang, setLang] = useState('en');
  const [titleData, setTitleData] = useState({});

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(storedLang);
    setTitleData(pageTitles[storedLang] || {});

    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(newLang);
      setTitleData(pageTitles[newLang] || {});
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header'} Logo={logo} />
      <PageTitle
        pageTitle={titleData.blogPageTitle}
        pagesub={titleData.blogPageSub}
      />
      <BlogList />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogPage;
