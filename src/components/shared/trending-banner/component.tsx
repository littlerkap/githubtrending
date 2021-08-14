import Box from "@primer/components/lib/Box";
import Text from "@primer/components/lib/Text";
import { TrendingBannerComponentProps } from "./component-props.interface";

/**
 * Toolbar component for Trending pages
 * @typedef TrendingBannerComponentProps
 */
export default function TrendingBannerComponent({
  heading = "Trending",
  desc,
}: TrendingBannerComponentProps) {
  return (
    <Box
      bg="bg.tertiary"
      borderColor="border.primary"
      borderBottomWidth={1}
      borderBottomStyle="solid"
      p={6}
      className="text-center"
    >
      <h1 className="h1">{heading}</h1>
      <Text as="p" fontSize={2} className="color-text-secondary">
        {desc}
      </Text>
    </Box>
  );
}
