import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://iypbyzsxhknpycriqgsg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cGJ5enN4aGtucHljcmlxZ3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MTQzNjUsImV4cCI6MjAzMDM5MDM2NX0.4EDGUMlfVdXliXC-l5nTqxQLQ23UqVlQ4W6Db-_4ltw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
