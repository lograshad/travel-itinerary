import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'


interface ItineraryItem {
  id: string;
  type: 'flight' | 'hotel' | 'activity';
  name: string;
  description: string;
  price: number;
  rating: number;
  // Flight specific properties
  origin?: string;
  destination?: string;
  departureDate?: string;
  arrivalDate?: string;
  // Hotel specific properties
  address?: string;
  checkIn?: string;
  checkOut?: string;
  // Activity specific properties
  duration?: string;
  location?: string;
}


const useItinerary = () => {
  const queryClient = useQueryClient()

  const { data: itinerary = [] } = useQuery<ItineraryItem[]>({
    queryKey: ['itinerary'],
    queryFn: () => {
      const storedItinerary = localStorage.getItem('itinerary')
      return storedItinerary ? JSON.parse(storedItinerary) : []
    },
  })

  const addToItinerary = useMutation({
    mutationFn: (newItem: ItineraryItem) => {
      const updatedItinerary = [...itinerary, newItem]
      localStorage.setItem('itinerary', JSON.stringify(updatedItinerary))
      return Promise.resolve(updatedItinerary)
    },
    onSuccess: (updatedItinerary) => {
      queryClient.setQueryData(['itinerary'], updatedItinerary)
    },
  })

  const removeFromItinerary = useMutation({
    mutationFn: (itemId: string) => {
      const updatedItinerary = itinerary.filter((item) => item.id !== itemId)
      localStorage.setItem('itinerary', JSON.stringify(updatedItinerary))
      return Promise.resolve(updatedItinerary)
    },
    onSuccess: (updatedItinerary) => {
      queryClient.setQueryData(['itinerary'], updatedItinerary)
    },
  })

  return {
    itinerary,
    addToItinerary,
    removeFromItinerary,
  }
}

export default useItinerary

