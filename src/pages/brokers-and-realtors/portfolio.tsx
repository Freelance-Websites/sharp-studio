import { useState, useEffect } from 'react';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import PortfolioGrid from "@/components/portfolio/Grid";
import Footer from "@/components/Footer";

import { getAllCollections } from '@/lib/collections';

import { attributes } from '@/content/brokers-and-realtors/portfolio.md';

interface LanguageProjects {
  thumbnail: string;
  title: string;
  credit: string;
  slides: Array<Slide>;
}

interface Projects {
  order: number;
  id: string;
  en: LanguageProjects;
  es: LanguageProjects;
}

interface Slide {
  image: string;
  proportion: string;
}

export default function Portfolio({ projectsData }: {
  projectsData: Array<Projects>;
}) {
  const { en, es } = attributes;
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    window.localStorage.setItem('language', lang);
  }

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('language');
    changeLanguage(storedLanguage ? storedLanguage : 'en');
  });

  return (
    <main className="bg-off-white">
      <CustomHead
        title={language === 'en' ? en.title : es.title}
      />
      <Header
        type="brokers-and-realtors"
        activeLanguage={language}
        changeLanguage={changeLanguage}
      />
      <section className="pt-14 px-4 container mx-auto">
        <PortfolioGrid
          type="brokers-and-realtors"
          items={projectsData}
          language={language}
        />
      </section>
      <Footer classes="pb-4" />
    </main>
  )
}

export async function getStaticProps() {
  const projectsData = getAllCollections("brokers-and-realtors/portfolio");
  return {
    props: {
      projectsData,
    }
  };
};