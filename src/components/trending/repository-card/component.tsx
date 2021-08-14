import { RepoForkedIcon, RepoIcon, StarIcon } from "@primer/octicons-react";

import Avatar from "@primer/components/lib/Avatar";
import Box from "@primer/components/lib/Box";
import Button from "@primer/components/lib/Button";
import Link from "@primer/components/lib/Link";
import { RepositoryCardProps } from "./component-props.interface";
import Text from "@primer/components/lib/Text";
import Tooltip from "@primer/components/lib/Tooltip";

export default function RepositoryCardComponent(props: RepositoryCardProps) {
  const { repo } = props;
  return (
    <>
      {/* Action: Star Repository */}
      <Box className="float-right d-flex">
        <Tooltip aria-label={`Star ${repo.username}/${repo.repositoryName}`}>
          <Button
            variant="small"
            sx={{ height: "28px" }}
            className="color-text-secondary"
          >
            <StarIcon size={16} />
            <Text ml={2} className="d-inline">
              Star
            </Text>
          </Button>
        </Tooltip>
      </Box>

      {/* Repository name */}
      <h1 className="h3 lh-condensed">
        <Link href={repo.url} target="_blank">
          <RepoIcon size={16} className="mr-1 color-text-secondary" />
          <span className="text-normal">{repo.username} / </span>
          {repo.repositoryName}
        </Link>
      </h1>

      {/* Repository description */}
      <Text as="p" className="col-9 color-text-secondary" my={1} pr={4}>
        {repo.description}
      </Text>

      <Box mt={2} className="color-text-secondary f6">
        {/* Programming Language */}
        {repo.language && (
          <Text ml={0} mr={3} className="d-inline-block">
            {repo.language}
          </Text>
        )}

        {/* Stars */}
        <Link
          muted
          href={`${repo.url}/stargazers`}
          target="_blank"
          mr={3}
          className="d-inline-block"
        >
          <StarIcon size={16} />
          &nbsp;{repo.totalStars.toLocaleString()}
        </Link>

        {/* Forks */}
        <Link
          muted
          href={`${repo.url}/network/members.swc`}
          target="_blank"
          mr={3}
          className="d-inline-block"
        >
          <RepoForkedIcon size={16} />
          &nbsp;{repo.forks.toLocaleString()}
        </Link>

        <Text mr={3} className="d-inline-block">
          Built by
          {repo.builtBy.map((user, index) => (
            <Link
              key={index}
              muted
              href={user.url}
              target="_blank"
              ml="1"
              className="d-inline-block"
              title={user.username}
            >
              <Tooltip aria-label={user.username}>
                <Avatar src={user.avatar} />
              </Tooltip>
            </Link>
          ))}
        </Text>

        {/* Stars Today */}
        <Text className="float-sm-right">
          <StarIcon size={16} />
          &nbsp;{repo.starsSince} stars today
        </Text>
      </Box>
    </>
  );
}
