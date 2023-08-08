import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import PortfolioGrid from "@/components/portfolio/Grid";
import PortfolioSlider from "@/components/portfolio/Slider";
import Footer from "@/components/Footer";

import { getAllCollections, getCollectionById, getCollectionIds } from '@/lib/collections';

import { attributes } from '@/content/architects-and-developers/portfolio.md';

interface Slide {
  order: number;
  id: string;
  thumbnail: string;
  title: string;
  credit: string;
}

interface Project {
  slides: Array<string>;
  title: string;
  credit: string;
}

export default function PortfolioItem({ allProjectsData, projectData }: {
  allProjectsData: Array<Slide>;
  projectData: Project;
}) {
  const { title } = attributes;

  return (
    <main className="bg-off-white">
      <CustomHead
        title={title}
      />
      <Header
        type="architects-and-developers"
      />
      <section className="pt-[74px] px-4 container mx-auto">
        <PortfolioSlider
          project={projectData}
        />
        <PortfolioGrid
          type="architects-and-developers"
          slider={allProjectsData}
        />
      </section>
      <Footer classes="pb-4" />
    </main>
  )
}

export async function getStaticProps({ params }: {
  params: any
}) {
  const allProjectsData = getAllCollections("architects-and-developers/portfolio");
  const projectData = await getCollectionById("architects-and-developers/portfolio", params.id);
  return {
    props: {
      allProjectsData,
      projectData,
    }
  };
};

export async function getStaticPaths() {
  const paths = getCollectionIds("architects-and-developers/portfolio");

  return {
    paths,
    fallback: false
  };
}