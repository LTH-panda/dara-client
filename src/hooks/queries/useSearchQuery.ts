import { useQuery } from "@tanstack/react-query";
import { searchByTitle } from "apis/video";

type Options = {
  enadled?: boolean;
};

function useSearchQuery(title: string, options: Options) {
  return useQuery(extractKey(title), () => searchByTitle(title), {
    enabled: options.enadled,
  });
}

export default useSearchQuery;

const extractKey = (title: string) => ["searchs", title];

useSearchQuery.extractKey = extractKey;
