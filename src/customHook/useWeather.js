import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../services/OpenWeatherService";

export default function useWeather(lat, lon) {
  const result = useQuery({ queryKey: [lat, lon], queryFn: fetchWeatherData });
  return [result?.data ?? [], result.status];
}
