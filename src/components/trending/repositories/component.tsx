import Box from "@primer/components/lib/Box";
import Loading from "../../shared/loading/component";
import { RepositoriesComponentProps } from "./component-props.interface";
import RepositoryCardComponent from "../repository-card/component";
import TrendingToolbarComponent from "../../shared/trendingToolbar/component";
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
    <div>
      <Box
        bg="bg.tertiary"
        borderColor="border.primary"
        borderBottomWidth={1}
        borderBottomStyle="solid"
        p={6}
        className="text-center"
      >
        <h1 className="h1">Trending</h1>
        <p className="f4 color-text-secondary col-md-10 mx-auto">
          See what the GitHub community is most excited about today.
        </p>
      </Box>

      <section className="position-relative container-lg p-responsive pt-6">
        <Box
          borderColor="border.primary"
          borderWidth={1}
          borderStyle="solid"
          borderRadius={6}
        >
          <Box
            bg="bg.tertiary"
            borderColor="border.primary"
            borderBottomWidth={1}
            borderBottomStyle="solid"
            p={3}
            borderTopLeftRadius={6}
            borderTopRightRadius={6}
          >
            <TrendingToolbarComponent type="repositories" url={url} />
          </Box>
          <div>
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
          </div>
        </Box>
      </section>
    </div>
  );
}
