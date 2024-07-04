import supabase from "./supabase";

export async function addGuest(newGuest) {
  const { error } = await supabase.from("guests").insert(newGuest);

  if (error) {
    console.error(error.message);
    throw new Error("Guest could not be added");
  }
}

export async function getGuests() {
  let { data, error } = await supabase.from("guests").select("id,email");

  if (error) {
    console.error(error);
    throw new Error("Guests could not be loaded");
  }

  return data;
}
