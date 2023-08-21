import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import PortfolioGrid from "@/components/portfolio/Grid";
import PortfolioSlider from "@/components/portfolio/Slider";
import Footer from "@/components/Footer";

import { getAllCollections, getCollectionById, getCollectionIds } from '@/lib/collections';

import { attributes } from '@/content/brokers-and-realtors/portfolio.md';

interface Projects {
  id: string;
  thumbnail: string;
  title: string;
  credit: string;
  order: number;
  slides: Array<Object>
}

interface Project {
  id: string;
  thumbnail: string;
  title: string;
  credit: string;
  order: 1;
  slides: Array<Slide>;
}

interface Slide {
  image: string;
  proportion: string;
}

export default function PortfolioItem({ allProjectsData, projectData }: {
  allProjectsData: Array<Projects>;
  projectData: Project;
}) {
  const { title } = attributes;

  return (
    <main className="bg-off-white">
      <CustomHead
        title={title}
      />
      <Header
        type="brokers-and-realtors"
      />
      <section className="pt-[74px] px-4 container mx-auto">
        <PortfolioSlider
          project={projectData}
        />
        <PortfolioGrid
          type="brokers-and-realtors"
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