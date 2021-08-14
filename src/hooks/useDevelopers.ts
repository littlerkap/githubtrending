import { DeveloperInterface } from "../utils/interfaces/developer";
import { Filter } from "../utils/interfaces/filter";
import axios from "axios";
import { useQuery } from "react-query";

/**
 * Async function to fetch developers
 */
export const fetchDevelopers = async (filter: Filter) => {
  const queryParam = filter?.since ? `?since=${filter.since}` : "";
  let url = "/developers";
  if (filter.progLang) {
    url += `/${filter.progLang}`;
  }
  const { data } = await axios.get(`${url}${queryParam}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return data;
};

/**
 * A custom hook to fetch github trending developers.
 */
export default function useDevelopers(filter: Filter) {
  return useQuery<DeveloperInterface[], Error>(
    ["developers", `since=${filter.since},progLang=${filter.progLang}`],
    () => fetchDevelopers(filter),
    {
      staleTime: 5000,
    }
  );
}
