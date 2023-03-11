import { useQuery } from '@tanstack/react-query';
import * as api from "../../../api";

const useTestimonial = () => {
  const {
    data: testimonials,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const data = await api.fetchTestimonials();
      console.log("testimonials", data.data)
      return data.data
    },
    staleTime: 60_000,
    cacheTime: 15 * (60 * 1000),
  });
  return {
    testimonials,
    isLoading,
    isError,
    error
  };
};

export default useTestimonial;
