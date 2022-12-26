export const useCounter = () => {
  const {
    data,
    refetch,
    isLoading: isTriviaoading,
    error,
  } = useQuery(["cat"], async () => {
    return fetch("https://opentdb.com/api.php?amount=10").then((res) =>
      res.json()
    );
  });
  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  };
  if (error) {
    console.log(error);
  }
  console.log(data);
  return { data, refetchData, isTriviaoading };
};
