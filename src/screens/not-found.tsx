import Box from "@primer/components/lib/Box";
import Heading from "@primer/components/lib/Heading";
import { Link } from "react-router-dom";
import Text from "@primer/components/lib/Text";

/**
 * Fallback page
 */
export default function NotFoundPage() {
  return (
    <Box
      bg="bg.tertiary"
      borderColor="border.primary"
      borderBottomWidth={1}
      borderBottomStyle="solid"
      p={6}
      className="text-center not-found-page"
      mb={40}
    >
      <Heading fontSize={6} mb={2}>
        404 Error
      </Heading>
      <Text sx={{ display: "block" }} fontSize={3} mb={6}>
        Page not Found
      </Text>

      <Link to="/">Go back to home</Link>
    </Box>
  );
}
