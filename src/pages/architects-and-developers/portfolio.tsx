import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import PortfolioGrid from "@/components/portfolio/Grid";
import Footer from "@/components/Footer";

import { getAllCollections } from '@/lib/collections';

import { attributes } from '@/content/architects-and-developers/portfolio.md';

interface Slide {
  order: number;
  id: string;
  thumbnail: string;
  title: string;
  credit: string;
}

export default function Portfolio({ projectsData }: {
  projectsData: Array<Slide>;
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
      <section className="pt-14 px-4 container mx-auto">
        <PortfolioGrid
          type="architects-and-developers"
          slider={projectsData}
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