import AboutComponent from "../components/about/component";
import Box from "@primer/components/lib/Box";
import techStack from "../utils/data/techStack";

/**
 * About page
 */
export default function AboutPage() {
  return (
    <Box className="about-page" mb={40}>
      <AboutComponent technologies={techStack} />
    </Box>
  );
}
