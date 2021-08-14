import { AboutComponentPropsInterface } from "./component-props.interface";
import Box from "@primer/components/lib/Box";
import Heading from "@primer/components/lib/Heading";
import Label from "@primer/components/lib/Label";
import Link from "@primer/components/lib/Link";

/**
 * About page component
 * @typedef AboutComponentPropsInterface
 */
export default function AboutComponent({
  technologies,
}: AboutComponentPropsInterface) {
  return (
    <Box className="position-relative container-lg p-responsive pt-6">
      <Heading fontSize={6} mb={4}>
        Made with Love by :&nbsp;
        <Link
          href="https://github.com/littlerkap"
          target="_blank"
          rel="noreferrer"
        >
          Rahul Kapuriya
        </Link>
      </Heading>

      <Heading fontSize={4} mb={2}>
        Link to the source code :&nbsp;
        <Link
          href="https://github.com/littlerkap/githubtrending"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Trending
        </Link>
      </Heading>

      <Heading fontSize={3} mb={2}>
        Technologies used :&nbsp;
      </Heading>

      {technologies.map((technology) => (
        <Link
          target="_blank"
          rel="noreferrer"
          href={technology.link}
          key={technology.name}
          className="mr-2 mb-2"
        >
          <Label variant="xl" outline>
            {technology.name}
          </Label>
        </Link>
      ))}
    </Box>
  );
}
