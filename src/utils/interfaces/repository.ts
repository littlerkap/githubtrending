/**
 * Docs: https://gh-trending-api.herokuapp.com/docs#/default/trending_repositories_repositories_get
 */
export interface RepositoryInterface {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: {
    username: string;
    url: string;
    avatar: string;
  }[];
}
