import { useState, useEffect } from 'react';

import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import PortfolioGrid from "@/components/portfolio/Grid";
import PortfolioSlider from "@/components/portfolio/Slider";
import Footer from "@/components/Footer";

import { getAllCollections, getCollectionById, getCollectionIds } from '@/lib/collections';

import { attributes } from '@/content/brokers-and-realtors/portfolio.md';

interface Project {
  id: string;
  thumbnail: string;
  title: string;
  credit: string;
  slides: Array<Slide>;
  contentHtml: string;
  order: number;
}

interface Slide {
  image?: string;
  proportion?: string;
  video?: string;
}

export default function PortfolioItem({ allProjectsData, projectData }: {
  allProjectsData: Array<Project>;
  projectData: Project;
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
      <section className="pt-[74px] px-4 container mx-auto">
        <PortfolioSlider
          project={projectData}
          language={language}
        />
        <PortfolioGrid
          type="brokers-and-realtors"
          items={allProjectsData}
          language={language}
        />
      </section>
      <Footer classes="pb-4" />
    </main>
  )
}

export async function getStaticProps({ params }: {
  params: any
}) {
  const allProjectsData = getAllCollections("brokers-and-realtors/portfolio");
  const projectData = await getCollectionById("brokers-and-realtors/portfolio", params.id);
  return {
    props: {
      allProjectsData,
      projectData,
    }
  };
};

export async function getStaticPaths() {
  const paths = getCollectionIds("brokers-and-realtors/portfolio");

  return {
    paths,
    fallback: false
  };
}