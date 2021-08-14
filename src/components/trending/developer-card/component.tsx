import { FlameIcon, RepoIcon } from "@primer/octicons-react";

import Avatar from "@primer/components/lib/Avatar";
import Box from "@primer/components/lib/Box";
import Button from "@primer/components/lib/Button/Button";
import { DeveloperCardProps } from "./component-props.interface";
import Link from "@primer/components/lib/Link";
import StyledOcticon from "@primer/components/lib/StyledOcticon";
import Text from "@primer/components/lib/Text";
import Tooltip from "@primer/components/lib/Tooltip";
import Truncate from "@primer/components/lib/Truncate";

/**
 * Developer information card
 * @typedef DeveloperCardProps
 */
export default function DeveloperCardComponent(props: DeveloperCardProps) {
  const { developer } = props;
  return (
    <div className="d-flex">
      {/* Link to navigate to user in table */}
      <Link
        href={`#pa-${developer.username}`}
        muted
        className="color-text-secondary f6 text-center"
      >
        {developer.rank}
      </Link>

      <Box mx={3}>
        {/* Developer Avatar */}
        <Tooltip
          aria-label={developer.name}
          className="d-inline-block"
          direction="s"
        >
          <Link
            muted
            href={developer.url}
            target="_blank"
            className="d-inline-block"
          >
            <Avatar src={developer.avatar} size={48} />
          </Link>
        </Tooltip>
      </Box>

      <Box className="d-sm-flex flex-auto">
        <Box className="col-sm-8 d-md-flex">
          <Box className="col-md-6">
            {/* Developer name */}
            <h1 className="h3 lh-condensed">
              <Link href={developer.url} target="_blank">
                {developer.name}
              </Link>
            </h1>

            {/* Developer username */}
            <Text as="p" className="f4 text-normal" mb={1}>
              {developer.username}
            </Text>
          </Box>
          {developer.popularRepository &&
          developer.popularRepository.repositoryName ? (
            <Box className="col-md-6">
              <Text
                as="div"
                className="f6 color-text-secondary text-uppercase"
                mb={1}
              >
                <StyledOcticon icon={FlameIcon} size={16} color="#f66a0a" />
                &nbsp;Popular repo
              </Text>

              {/* Populor Repository name */}
              <h1 className="h4 lh-condensed">
                <Truncate
                  title={developer.popularRepository?.repositoryName}
                  maxWidth={175}
                >
                  <Link href={developer.popularRepository?.url} target="_blank">
                    <RepoIcon size={16} className="mr-1 color-text-secondary" />

                    {developer.popularRepository?.repositoryName}
                  </Link>
                </Truncate>
              </h1>

              {/* Populor Repository description */}
              <Text as="div" className="f6 color-text-secondary" mt={1}>
                {developer.popularRepository?.description}
              </Text>
            </Box>
          ) : (
            <Text as="div" className="f6 color-text-secondary" mb={1}>
              No Popular Repository for {developer.name}
            </Text>
          )}
        </Box>
        <Box className="col-sm-4 d-flex flex-sm-justify-end ml-sm-3">
          <div>
            <Tooltip
              aria-label={`Follow ${developer.name}`}
              direction="s"
              className="d-inline-block"
            >
              <Button
                variant="small"
                sx={{ height: "28px" }}
                className="color-text-secondary"
              >
                Follow
              </Button>
            </Tooltip>
          </div>
        </Box>
      </Box>
    </div>
  );
}
