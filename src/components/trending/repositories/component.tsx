import Box from "@primer/components/lib/Box";
import Loading from "../../shared/loading/component";
import { RepositoriesComponentProps } from "./component-props.interface";
import RepositoryCardComponent from "../repository-card/component";
import TrendingBannerComponent from "../../shared/trending-banner/component";
import TrendingToolbarComponent from "../../shared/trending-toolbar/component";
import useRepositories from "../../../hooks/useRepositories";

/**
 * React Clone of Github Trending Repositories https://github.com/trending
 * @typedef RepositoriesComponentProps
 */
export default function RepositoriesComponent({
  url,
}: RepositoriesComponentProps) {
  const { status, data, error, isFetching } = useRepositories();

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
          <TrendingToolbarComponent type="repositories" url={url} />

          {/* Repositories Table */}
          <>
            {status === "loading" ? (
              <Loading />
            ) : status === "error" ? (
              <span>Error: {error?.message}</span>
            ) : (
              <>
                {data?.map((repo, index) => (
                  <Box
                    borderColor="border.primary"
                    borderTopWidth={1}
                    borderTopStyle="solid"
                    p={3}
                    key={index}
                  >
                    <RepositoryCardComponent repo={repo} />
                  </Box>
                ))}

                <div>{isFetching ? <Loading /> : " "}</div>
              </>
            )}
          </>
        </Box>
      </section>
    </>
  );
}
