import Box from "@primer/components/lib/Box";
import Spinner from "@primer/components/lib/Spinner";
import Text from "@primer/components/lib/Text";

interface LoadingProps {
  text?: string;
}

export default function Loading(props: LoadingProps) {
  const { text } = props;
  return (
    <Box p={6} className="text-center">
      <Spinner />
      {text && (
        <Text as="p" mt={1}>
          {text}
        </Text>
      )}
    </Box>
  );
}
