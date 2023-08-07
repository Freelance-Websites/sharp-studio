import CustomHead from '@/components/CustomHead';
import Header from "@/components/Header";

import { attributes } from '@/content/architects-and-developers/portfolio.md';

export default function Home() {
  // const { title } = attributes;

  return (
    <main>
      <CustomHead
        // title={title}
      />
      <Header
        type="architects-and-developers"
      />
      <p>test</p>
    </main>
  )
}