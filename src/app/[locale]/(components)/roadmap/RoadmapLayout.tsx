"use client";

import { Box, Container } from "@chakra-ui/react";
import { HeroImage } from "@ui/HeroImage/HeroImage";
import { PageLayout } from "@ui/Layout/PageLayout";
import { ReactNode } from "react";
import { useBoolean } from "react-use";
import RoadmapSubscribeForm from "./RoadmapSubscribeForm";
// import Link from "next/link";

type RoadmapLayoutProps = {
  children: ReactNode;
  mode: "ROADMAP" | "ANNOUNCEMENTS";
  locale: string;
};
export default function RoadmapLayout({
  children,
  mode,
  locale,
}: RoadmapLayoutProps) {
  const [isOpen, setIsOpen] = useBoolean(false);

  return (
    <>
      <PageLayout
        main={
          <Container>
            <HeroImage
              title="Roadmap & product updates"
              description="See what we’re building, what’s coming next and keep up to date on product announcements"
              variant="roadmap"
              buttonText="Notify me"
              onButtonClick={() => setIsOpen(true)}
            />
            <RoadmapSubscribeForm isOpen={isOpen} setIsOpen={setIsOpen} />
            <Box my="56px"></Box>
            {/* <Flex
              as="ul"
              sx={{ overflowX: "auto" }}
              gap="24px"
              borderBottomWidth="1px"
              borderColor="tabs-main-br"
              width="100%"
              my="56px"
            >
              <Box>
                <Button
                  variant="category"
                  as={Link}
                  isActive={mode === "ANNOUNCEMENTS"}
                  href={`/${locale}/announcements`}
                >
                  Announcements
                </Button>
              </Box>
              <Box>
                <Button
                  variant="category"
                  as={Link}
                  isActive={mode === "ROADMAP"}
                  href={`/${locale}/roadmap`}
                >
                  Roadmap
                </Button>
              </Box>
            </Flex> */}
            {children}
          </Container>
        }
      />
    </>
  );
}