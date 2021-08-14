export interface SelectFilterProps {
  filterName: string;
  filterItems: {
    label: string;
    value: string;
  }[];
  defaultValue?: string;
  headerText?: string;
}
