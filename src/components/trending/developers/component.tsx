import useDevelopers, { fetchDevelopers } from "../../../hooks/useDevelopers";

import Box from "@primer/components/lib/Box";
import DeveloperCardComponent from "../developer-card/component";
import { DevelopersComponentProps } from "./component-props.interface";
import Loading from "../../shared/loading/component";
import Text from "@primer/components/lib/Text";
import TrendingBannerComponent from "../../shared/trending-banner/component";
import TrendingToolbarComponent from "../../shared/trending-toolbar/component";
import { useQueryClient } from "react-query";
import { useState } from "react";

/**
 * React Clone of Github Trending Developers https://github.com/developers
 * @typedef DevelopersComponentProps
 */
export default function DevelopersComponent({ url }: DevelopersComponentProps) {
  const [filter, setFilter] = useState({
    since: "daily",
    progLang: "",
  });
  const { status, data, error } = useDevelopers(filter);
  const queryClient = useQueryClient();

  const refetchData = async (_filter: any) => {
    setFilter((oldFilter) => ({
      ...oldFilter,
      ..._filter,
    }));

    await queryClient.prefetchQuery(
      ["developers", `since=${filter.since},progLang=${filter.progLang}`],
      () => fetchDevelopers(filter)
    );
  };

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
          <TrendingToolbarComponent
            type="developers"
            url={url}
            onFilter={refetchData}
          />

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
                {data && data.length > 0 ? (
                  data?.map((dev, index) => (
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
                  ))
                ) : (
                  <Box p={4}>
                    <Text as="h3" className="text-center">
                      It looks like we don’t have any trending developers.
                    </Text>
                  </Box>
                )}
              </>
            )}
          </>
        </Box>
      </section>
    </>
  );
}
