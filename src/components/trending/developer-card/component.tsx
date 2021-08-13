// import { RepoIcon } from "@primer/octicons-react";

import { DeveloperCardProps } from "./component-props.interface";

export default function DeveloperCardComponent(props: DeveloperCardProps) {
  const { developer } = props;
  return (
    <div>
      <div>{developer.name}</div>
    </div>
  );
}
