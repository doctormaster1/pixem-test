import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";

import {
  benefitApi,
  benefitB2b,
  benefitSeo,
  benefitWeb,
} from "@/components/data";
export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <div id="hizmetler"></div>
        <Benefits data={benefitWeb} />
        <Benefits imgPos="right" data={benefitB2b} />
        <Benefits data={benefitApi} />
        <Benefits imgPos="right" data={benefitSeo} />
        <SectionTitle
          preTitle="S.S.S"
          title="Herhangi Bir Sorun Varmı?"
        ></SectionTitle>
        <Faq />
      </Container>
    </>
  );
}
