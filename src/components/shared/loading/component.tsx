import Box from "@primer/components/lib/Box";
import { LoadingProps } from "./component-props.interface";
import Spinner from "@primer/components/lib/Spinner";
import Text from "@primer/components/lib/Text";

/**
 * Loader Component
 * @typedef LoadingProps
 */
export default function Loading(props: LoadingProps) {
  const { text, hideSpinner } = props;
  return (
    <Box p={6} className="text-center">
      {!hideSpinner && <Spinner />}

      {text && (
        <Text as="p" mt={1}>
          {text}
          <span className="AnimatedEllipsis"></span>
        </Text>
      )}
    </Box>
  );
}
