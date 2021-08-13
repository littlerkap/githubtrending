import { DeveloperInterface } from "../utils/interfaces/developer";
import axios from "axios";
import { useQuery } from "react-query";

/**
 * Async fnction to fetch developers
 */
const fetchDevelopers = async () => {
  const { data } = await axios.get(
    "https://gh-trending-api.herokuapp.com/developers"
  );
  return data;
};

/**
 * A custom hook to fetch github trending developers.
 */
export default function useDevelopers() {
  return useQuery<DeveloperInterface[], Error>("developers", fetchDevelopers);
}
