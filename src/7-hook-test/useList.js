import useQueryCharacters from "./useQueryCharacters";

const useList = () => {
  const list = useQueryCharacters();

  return list.length;
};

export default useList;
