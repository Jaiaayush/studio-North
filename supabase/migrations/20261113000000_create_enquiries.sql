-- supabase/migrations/..._create_enquiries.sql: DATABASE
-- Creates the "enquiries" table that stores every contact form submission.
-- This exact SQL has already been run on the Studio North Supabase project.
-- It is kept here as a record, and so the database can be rebuilt from scratch.

create table public.enquiries (
  id bigint generated always as identity primary key, -- 1, 2, 3... set by the database
  created_at timestamptz not null default now(),      -- when the enquiry arrived
  name text not null check (char_length(name) between 2 and 80),
  email text not null check (char_length(email) between 3 and 120),
  phone text not null default '' check (char_length(phone) <= 30),
  business text not null check (char_length(business) between 2 and 120),
  budget text not null check (char_length(budget) <= 40),
  message text not null check (char_length(message) between 10 and 2000)
);

-- Row Level Security: with this on, nobody can do anything to the table
-- unless a policy below says they can.
alter table public.enquiries enable row level security;

-- Start from zero permissions for website visitors, then allow INSERT only.
-- "anon" is the role used by the public (publishable) key.
revoke all on table public.enquiries from anon, authenticated;
grant insert on table public.enquiries to anon, authenticated;

-- No login needed: any visitor may ADD an enquiry.
-- There is deliberately NO select, update or delete policy, so visitors can
-- never read, change or remove enquiries. You read them in the Supabase dashboard.
create policy "Anyone can submit an enquiry"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);
