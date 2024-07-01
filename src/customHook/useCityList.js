import { useQuery } from "@tanstack/react-query";
import fetchCityList from "../services/fetchCityList";

export default function useCityList(city) {
  const result = useQuery({ queryKey: [`${city}`], queryFn: fetchCityList });
  return [result?.data ?? [], result.status];
}
