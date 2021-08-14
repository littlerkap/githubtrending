import useRepositories, {
  fetchRepositories,
} from "../../../hooks/useRepositories";

import Box from "@primer/components/lib/Box";
import Loading from "../../shared/loading/component";
import { RepositoriesComponentProps } from "./component-props.interface";
import RepositoryCardComponent from "../repository-card/component";
import Text from "@primer/components/lib/Text";
import TrendingBannerComponent from "../../shared/trending-banner/component";
import TrendingToolbarComponent from "../../shared/trending-toolbar/component";
import { useQueryClient } from "react-query";
import { useState } from "react";

/**
 * React Clone of Github Trending Repositories https://github.com/trending
 * @typedef RepositoriesComponentProps
 */
export default function RepositoriesComponent({
  url,
}: RepositoriesComponentProps) {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState({
    since: "daily",
    progLang: "",
  });
  const { status, data, error } = useRepositories(filter);

  /**
   * Async function to refetch Repositories on filter change
   * @param _filter {object}
   */
  const refetchRepos = async (_filter: any) => {
    setFilter((oldFilter) => ({
      ...oldFilter,
      ..._filter,
    }));

    await queryClient.prefetchQuery(
      ["repositories", `since=${filter.since},progLang=${filter.progLang}`],
      () => fetchRepositories(filter)
    );
  };

  return (
    <>
      {/* Banner */}
      <TrendingBannerComponent desc="See what the GitHub community is most excited about today." />

      <section className="position-relative container-lg p-responsive pt-6">
        <Box
          borderColor="border.primary"
          borderWidth={1}
          borderStyle="solid"
          borderRadius={6}
        >
          {/* Toolbar */}
          <TrendingToolbarComponent
            type="repositories"
            url={url}
            onFilter={refetchRepos}
          />

          {/* Repositories Table */}
          <>
            {status === "loading" ? (
              <Loading text="Fetching trending repositories" hideSpinner />
            ) : status === "error" ? (
              <Box p={4} color="text.danger" bg="bg.danger">
                <Text as="p" className="text-center">
                  <span>Error: {error?.message}</span>
                </Text>
              </Box>
            ) : (
              <>
                {data && data.length > 0 ? (
                  data?.map((repo, index) => (
                    <Box
                      borderColor="border.primary"
                      borderTopWidth={1}
                      borderTopStyle="solid"
                      p={3}
                      key={index}
                    >
                      <RepositoryCardComponent repo={repo} />
                    </Box>
                  ))
                ) : (
                  <Box p={4}>
                    <Text as="h3" className="text-center">
                      It looks like we don’t have any trending repositories.
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
