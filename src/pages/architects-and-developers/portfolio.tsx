import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import PortfolioGrid from "@/components/portfolio/Grid";
import Footer from "@/components/Footer";

import { attributes } from '@/content/architects-and-developers/portfolio.md';

export default function Portfolio() {
  const { title, slider } = attributes;

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
          slider={slider}
        />
      </section>
      <Footer classes="pb-4" />
    </main>
  )
}