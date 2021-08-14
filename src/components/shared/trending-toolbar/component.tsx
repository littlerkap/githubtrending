import Box from "@primer/components/lib/Box";
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
    <Box
      bg="bg.tertiary"
      borderColor="border.primary"
      borderBottomWidth={1}
      borderBottomStyle="solid"
      p={3}
      borderTopLeftRadius={6}
      borderTopRightRadius={6}
    >
      <SubNav aria-label="Repositories">
        <SubNav.Links>
          <NavLink
            to={`${url}`}
            className="subnav-item"
            exact
            activeClassName="selected"
          >
            Repositories
          </NavLink>
          <NavLink
            to={`${url}/developers`}
            className="subnav-item"
            exact
            activeClassName="selected"
          >
            Developers
          </NavLink>
        </SubNav.Links>
      </SubNav>
    </Box>
  );
}
