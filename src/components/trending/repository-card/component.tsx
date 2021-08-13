import Link from "@primer/components/lib/Link";
import { RepoIcon } from "@primer/octicons-react";
import { RepositoryCardProps } from "./component-props.interface";

export default function RepositoryCardComponent(props: RepositoryCardProps) {
  const { repo } = props;
  return (
    <div>
      <h1 className="h3 lh-condensed">
        <Link href={repo.url} target="_blank">
          <RepoIcon size={16} className="mr-1 color-text-secondary" />
          <span className="text-normal">{repo.username} / </span>
          {repo.repositoryName}
        </Link>
      </h1>
    </div>
  );
}
