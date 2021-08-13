import Box from "@primer/components/lib/Box";
import DeveloperCardComponent from "../developer-card/component";
import { DevelopersComponentProps } from "./component-props.interface";
import Loading from "../../shared/loading/component";
import TrendingToolbarComponent from "../../shared/trendingToolbar/component";
import useDevelopers from "../../../hooks/useDevelopers";

/**
 * React Clone of Github Trending Developers https://github.com/developers
 * @typedef DevelopersComponentProps
 */
export default function DevelopersComponent({ url }: DevelopersComponentProps) {
  const { status, data, error, isFetching } = useDevelopers();

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
          These are the developers building the hot tools today.
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
            <TrendingToolbarComponent type="developers" url={url} />
          </Box>
          <div>
            {status === "loading" ? (
              <Loading />
            ) : status === "error" ? (
              <span>Error: {error?.message}</span>
            ) : (
              <>
                {data?.map((dev, index) => (
                  <Box
                    borderColor="border.primary"
                    borderTopWidth={1}
                    borderTopStyle="solid"
                    p={3}
                    key={index}
                  >
                    <DeveloperCardComponent developer={dev} />
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
