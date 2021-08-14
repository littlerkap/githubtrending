/**
 * Docs: https://gh-trending-api.herokuapp.com/docs#/default/trending_developers_developers_get
 */
export interface DeveloperInterface {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository?: {
    repositoryName: string;
    description: string;
    url: string;
  };
}
