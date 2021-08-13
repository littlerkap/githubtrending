import Box from "@primer/components/lib/Box";
import Spinner from "@primer/components/lib/Spinner";

export default function Loading() {
  return (
    <Box p={6} className="text-center">
      <Spinner />
    </Box>
  );
}
