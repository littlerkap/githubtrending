export interface SelectFilterProps {
  filterName: string;
  filterType: string;
  filterItems: {
    label: string;
    value: string;
  }[];
  defaultValue?: string;
  headerText?: string;
  showClearButton?: boolean;
  onSeleted: (value: any) => void;
}
