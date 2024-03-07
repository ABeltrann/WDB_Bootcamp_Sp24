import { ChakraTheme, Container, Grid } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import hero from "@/components/hero";
import Hero from "@/components/hero";
import basicmodel from "@/components/basicmodel";
import BasicModel from "@/components/basicmodel";
import DocumentAdder from "@/components/documentadd";

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
