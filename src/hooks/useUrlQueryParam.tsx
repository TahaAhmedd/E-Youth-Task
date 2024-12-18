import {useSearchParams} from "react-router-dom";

export default function useUrlQueryParam() {
  const [searchParams, setSearchParams] = useSearchParams();

  const videoId = searchParams.get("videoId") || "";

  return {
    videoId,
    searchParams,
    setSearchParams,
  };
}
