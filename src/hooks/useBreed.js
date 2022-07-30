import useSWR from "swr";
import fetcher from "../../lib/fetcher";

const useBreed = (animal) => {
  const { data, error } = useSWR(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
    fetcher
  );
  return {
    breedList: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useBreed;
