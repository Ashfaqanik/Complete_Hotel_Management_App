import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addGuest } from "../../services/apiGuest";

export function useAddGuest() {
  const queryClient = useQueryClient();

  const { mutate: addingGuest, isLoading: isAdding } = useMutation({
    mutationFn: addGuest,
    onSuccess: () => {
      toast.success("New guest successfully created");
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addingGuest };
}
