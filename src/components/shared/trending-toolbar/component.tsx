import Box from "@primer/components/lib/Box";
import { NavLink } from "react-router-dom";
import SelectFilterComponent from "../select-filter/component";
import SubNav from "@primer/components/lib/SubNav";
import { TrendingToolbarComponentProps } from "./component-props.interface";
import dateRangeFilterItems from "../../../utils/data/dateRangeFilterItems";
import languageFilterItems from "../../../utils/data/languageFilterItems";

/**
 * Toolbar component for Trending pages
 * @typedef TrendingToolbarComponentProps
 */
export default function TrendingToolbarComponent({
  type,
  url,
  onFilter,
}: TrendingToolbarComponentProps) {
  const onLanguageSelected = (value: any) => {
    onFilter(value);
  };

  const onDateRangeSelected = (value: any) => {
    onFilter(value);
  };

  return (
    <Box
      bg="bg.tertiary"
      borderColor="border.primary"
      borderBottomWidth={1}
      borderBottomStyle="solid"
      p={3}
      borderTopLeftRadius={6}
      borderTopRightRadius={6}
      className="d-md-flex flex-items-center flex-justify-between"
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
      <Box
        className="d-sm-flex flex-items-center flex-md-justify-end mt-3 mt-md-0 table-list-header-toggle
          ml-n2 ml-md-0"
      >
        <Box position="relative" className="mb-3 mb-sm-0" mx={2}>
          <SelectFilterComponent
            filterItems={languageFilterItems.map((item) => ({
              label: item.label,
              value: item.label.split(" ").join("-").toLocaleLowerCase(),
            }))}
            filterType="progLang"
            filterName="Language"
            headerText="Select a language"
            showClearButton
            onSeleted={onLanguageSelected}
          />
        </Box>
        <Box position="relative" className="mb-3 mb-sm-0" mx={2}>
          <SelectFilterComponent
            filterItems={dateRangeFilterItems}
            filterType="since"
            filterName="Date Range"
            defaultValue="daily"
            headerText="Adjust time span"
            onSeleted={onDateRangeSelected}
          />
        </Box>
      </Box>
    </Box>
  );
}
