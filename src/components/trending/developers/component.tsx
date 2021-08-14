import Box from "@primer/components/lib/Box";
import DeveloperCardComponent from "../developer-card/component";
import { DevelopersComponentProps } from "./component-props.interface";
import Loading from "../../shared/loading/component";
import Text from "@primer/components/lib/Text";
import TrendingBannerComponent from "../../shared/trending-banner/component";
import TrendingToolbarComponent from "../../shared/trending-toolbar/component";
import useDevelopers from "../../../hooks/useDevelopers";

/**
 * React Clone of Github Trending Developers https://github.com/developers
 * @typedef DevelopersComponentProps
 */
export default function DevelopersComponent({ url }: DevelopersComponentProps) {
  const { status, data, error } = useDevelopers();

  return (
    <>
      {/* Banner */}
      <TrendingBannerComponent desc="These are the developers building the hot tools today." />

      <section className="position-relative container-lg p-responsive pt-6">
        <Box
          borderColor="border.primary"
          borderWidth={1}
          borderStyle="solid"
          borderRadius={6}
        >
          {/* Toolbar */}
          <TrendingToolbarComponent type="developers" url={url} />

          {/* Developers Table */}
          <>
            {status === "loading" ? (
              <Loading text="Fetching trending developers" hideSpinner />
            ) : status === "error" ? (
              <Box p={4} color="text.danger" bg="bg.danger">
                <Text as="p" className="text-center">
                  <span>Error: {error?.message}</span>
                </Text>
              </Box>
            ) : (
              <>
                {data?.map((dev, index) => (
                  <Box
                    borderColor="border.primary"
                    borderTopWidth={1}
                    borderTopStyle="solid"
                    p={3}
                    key={index}
                    id={`pa-${dev.username}`}
                  >
                    <DeveloperCardComponent developer={dev} />
                  </Box>
                ))}
              </>
            )}
          </>
        </Box>
      </section>
    </>
  );
}
