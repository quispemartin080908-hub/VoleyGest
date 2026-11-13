// Configuración global de Supabase para VoleyGest
const SUPABASE_URL = 'https://tcuhcjzwvugcuqpftbwp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdWhjanp3dnVnY3VxcGZ0YndwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2NjI3NjksImV4cCI6MjEwOTIzODc2OX0.vW3oZVOfw45rNyaPiX1tlTNGQeokLTchj2cvKLHtYho';

// Inicialización del cliente de Supabase
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);