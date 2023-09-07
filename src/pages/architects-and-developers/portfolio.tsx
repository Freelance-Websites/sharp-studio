import { useState, useEffect } from 'react';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import PortfolioGrid from "@/components/portfolio/Grid";
import Footer from "@/components/Footer";

import { getAllCollections } from '@/lib/collections';

import { MediumText } from '@/components/Typography';

import { attributes } from '@/content/architects-and-developers/portfolio.md';

interface Projects {
  order: number;
  id: string;
  thumbnail: string;
  title: string;
  credit: string;
  slides: Array<Slide>;
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
        type="architects-and-developers"
        activeLanguage={language}
        changeLanguage={changeLanguage}
      />
      <section className="pt-14 px-4 container mx-auto">
        <div className="pt-8">
          <h1 className="font-neue-bold"><MediumText color="text-black">{language === 'en' ? en.title : es.title}</MediumText></h1>
        </div>
        <PortfolioGrid
          type="architects-and-developers"
          items={projectsData}
          language={language}
        />
      </section>
      <Footer classes="pb-4" />
    </main>
  )
}

export async function getStaticProps() {
  const projectsData = getAllCollections("architects-and-developers/portfolio");
  return {
    props: {
      projectsData,
    }
  };
};