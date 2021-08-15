export interface SelectFilterProps {
  /**
   * Name of the filter
   */
  filterName: string;
  /**
   * Type of the filter
   */
  filterType: "since" | "progLang";
  /**
   * Array of filter items
   */
  filterItems: {
    /**
     * Label of filter item
     */
    label: string;
    /**
     * Value of filter item
     */
    value: string;
  }[];
  /**
   * Default value of filter
   */
  defaultValue?: string;
  /**
   * Header text for dropdown
   */
  headerText?: string;
  /**
   * To show clear button after filter selected
   */
  showClearButton?: boolean;
  /**
   * To show search input
   */
  showSearch?: boolean;
  /**
   * Function with selected value
   */
  onSeleted: (value: any) => void;
}
