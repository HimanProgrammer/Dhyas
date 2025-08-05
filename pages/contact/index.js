import pageTitles from '../../data/pageTitles.json';
import { useEffect, useState } from 'react';

const ContactPage = () => {
    const [lang, setLang] = useState('en');
    const [titleText, setTitleText] = useState(pageTitles.en);

    useEffect(() => {
        const storedLang = localStorage.getItem('selectedLanguage') || 'en';
        setLang(storedLang);
        setTitleText(pageTitles[storedLang] || pageTitles.en);
    }, []);

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <pageTitles pageTitle={titleText.contactPageTitle || 'Contact Us'} pagesub={titleText.contactPageSub || 'Contact'} />
            <ContactPage />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
