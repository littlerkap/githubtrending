import AboutComponent from "../components/about/component";
import Box from "@primer/components/lib/Box";

const technologies = [
  { name: "React js", link: "https://reactjs.org/" },
  {
    name: "React Router",
    link: "https://reactrouter.com/web/guides/quick-start",
  },
  {
    name: "React Query",
    link: "https://react-query.tanstack.com/",
  },
  { name: "Primer Design System React", link: "https://primer.style/react/" },
  {
    name: "Github Trending API",
    link: "https://gh-trending-api.herokuapp.com/docs",
  },
];

/**
 * About page
 */
export default function AboutPage() {
  return (
    <Box className="about-page" mb={40}>
      <AboutComponent technologies={technologies} />
    </Box>
  );
}
