import { RepositoryInterface } from "../utils/interfaces/repository";
import axios from "axios";
import { useQuery } from "react-query";

/**
 * Async fnction to fetch repositories
 */
const fetchRepositories = async () => {
  const { data } = await axios.get(
    "https://gh-trending-api.herokuapp.com/repositories"
  );
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
