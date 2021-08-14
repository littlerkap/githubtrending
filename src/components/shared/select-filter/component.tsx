import Dropdown from "@primer/components/lib/Dropdown";
import { SelectFilterProps } from "./component-props.interface";
import SelectMenu from "@primer/components/lib/SelectMenu/SelectMenu";
import { useState } from "react";

export default function SelectFilterComponent(props: SelectFilterProps) {
  const { filterItems, filterName, defaultValue, headerText } = props;
  const [value, setValue] = useState(defaultValue || "");

  const onFilterClick = (event: any) => {
    console.log(event.target.dataset);
    setValue(event.target.dataset.value);
  };

  return (
    <SelectMenu css={{ display: "block" }}>
      <summary>
        {filterName}: &nbsp;
        <span className="text-bold">
          {value ? filterItems.find((i) => i.value === value)?.label : "Any"}{" "}
          <Dropdown.Caret m={0} />
        </span>
      </summary>
      <SelectMenu.Modal align="right">
        {headerText && <SelectMenu.Header>{headerText}</SelectMenu.Header>}

        <SelectMenu.List>
          {filterItems.map((filterItem, index) => (
            <SelectMenu.Item
              key={index}
              selected={value === filterItem.value}
              data-value={filterItem.value}
              data-label={filterItem.label}
              onClick={onFilterClick}
            >
              {filterItem.label}
            </SelectMenu.Item>
          ))}
        </SelectMenu.List>
      </SelectMenu.Modal>
    </SelectMenu>
  );
}
