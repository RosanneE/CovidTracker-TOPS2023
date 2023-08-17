import { createClient } from '@supabase/supabase-js';
// require("dotenv").config();

//This is used to interact with the API/storage

const supabase = createClient("https://rouoteoqwehgnrgbeigu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvdW90ZW9xd2VoZ25yZ2JlaWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxOTg3NzUsImV4cCI6MjAwNzc3NDc3NX0.HuGa9D_rDrSgFGlTqKjWvfOHtr3GsVjFUhq77tBNvIk");
// const supabase = createClient("https://rouoteoqwehgnrgbeigu.supabase.co", process.env.SUPABASE_API_KEY);

export default supabase;