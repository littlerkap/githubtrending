import { DeveloperInterface } from "../utils/interfaces/developer";
import axios from "axios";
import { useQuery } from "react-query";
/**
 * Async function to fetch developers
 */
const fetchDevelopers = async () => {
  const { data } = await axios.get("/developers", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return data;
};

/**
 * A custom hook to fetch github trending developers.
 */
export default function useDevelopers() {
  return useQuery<DeveloperInterface[], Error>("developers", fetchDevelopers);
}
