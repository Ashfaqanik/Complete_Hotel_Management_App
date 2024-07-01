import supabase from "./supabase";

export async function addGuest(newGuest) {
  const { error } = await supabase.from("guests").insert(newGuest);

  if (error) {
    console.error(error.message);
    throw new Error("Guest could not be added");
  }
}
