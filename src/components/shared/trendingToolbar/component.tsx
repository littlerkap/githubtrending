import { NavLink } from "react-router-dom";
import SubNav from "@primer/components/lib/SubNav";
import { TrendingToolbarComponentProps } from "./component-props.interface";

/**
 * Toolbar component for Trending pages
 * @typedef TrendingToolbarComponentProps
 */
export default function TrendingToolbarComponent({
  type,
  url,
}: TrendingToolbarComponentProps) {
  return (
    <SubNav aria-label="Repositories">
      <SubNav.Links>
        <NavLink
          to={`${url}`}
          className={`subnav-item ${type === "repositories" && "active"}`}
        >
          Repositories
        </NavLink>
        <NavLink
          to={`${url}/developers`}
          className={`subnav-item ${type === "developers" && "active"}`}
        >
          Developers
        </NavLink>
      </SubNav.Links>
    </SubNav>
  );
}
