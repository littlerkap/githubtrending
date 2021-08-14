import { RepositoryInterface } from "../utils/interfaces/repository";
import axios from "axios";
import { useQuery } from "react-query";

/**
 * Async function to fetch repositories
 */
const fetchRepositories = async () => {
  const { data } = await axios.get("/repositories", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return data;
};

/**
 * A custom hook to fetch githu trending repositories.
 */
export default function useRepositories() {
  return useQuery<RepositoryInterface[], Error>(
    "repositories",
    fetchRepositories
  );
}
