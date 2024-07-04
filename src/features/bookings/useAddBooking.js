import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addBooking } from "../../services/apiBookings";

export function useAddBooking() {
  const queryClient = useQueryClient();

  const { mutate: addingBooking, isLoading: isAdding } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      toast.success("New guest successfully created");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addingBooking };
}
