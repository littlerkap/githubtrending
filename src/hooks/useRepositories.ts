import { Filter } from "../utils/interfaces/filter";
import { RepositoryInterface } from "../utils/interfaces/repository";
import axios from "axios";
import { useQuery } from "react-query";

/**
 * Async function to fetch repositories
 */
export const fetchRepositories = async (filter: Filter) => {
  const queryParam = filter?.since ? `?since=${filter.since}` : "";
  let url = "/repositories";
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
 * A custom hook to fetch githu trending repositories.
 */
export default function useRepositories(filter: Filter) {
  return useQuery<RepositoryInterface[], Error>(
    ["repositories", `since=${filter.since},progLang=${filter.progLang}`],
    () => fetchRepositories(filter),
    {
      staleTime: 5000,
    }
  );
}
