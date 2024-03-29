import { Container } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DocumentAdder from "@/components/documentadd";
import { createContext } from "react";
export default function Home() {
  const maxW = 1200;
  return (
    <Container maxW= {maxW}>
    <Navbar>

  </Navbar>
    <Hero>

    </Hero>
    <DocumentAdder>

    </DocumentAdder>


    </Container>

  );
}
