import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";
import PortfolioGrid from "@/components/portfolio/Grid";
import Footer from "@/components/Footer";

import { attributes } from '@/content/brokers-and-realtors/portfolio.md';

export default function Portfolio() {
  const { title, slider } = attributes;

  return (
    <main className="bg-off-white">
      <CustomHead
        title={title}
      />
      <Header
        type="brokers-and-realtors"
      />
      <section className="pt-14 px-4 container mx-auto">
        <PortfolioGrid
          type="brokers-and-realtors"
          slider={slider}
        />
      </section>
      <Footer classes="pb-4" />
    </main>
  )
}