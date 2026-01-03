-- PostgreSQL schema for GlobalTrotters
-- Tables: users, trips, cities, trip_stops, activities, trip_activities, budgets, shared_trips

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS trips (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  trip_name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(255),
  cost_index NUMERIC(6,2)
);

CREATE TABLE IF NOT EXISTS trip_stops (
  id SERIAL PRIMARY KEY,
  trip_id INTEGER NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  city_id INTEGER NOT NULL REFERENCES cities(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  stop_order INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS activities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  average_cost NUMERIC(10,2),
  duration INTERVAL
);

CREATE TABLE IF NOT EXISTS trip_activities (
  id SERIAL PRIMARY KEY,
  stop_id INTEGER NOT NULL REFERENCES trip_stops(id) ON DELETE CASCADE,
  activity_id INTEGER NOT NULL REFERENCES activities(id),
  scheduled_time TIMESTAMP,
  cost NUMERIC(10,2)
);

CREATE TABLE IF NOT EXISTS budgets (
  id SERIAL PRIMARY KEY,
  trip_id INTEGER NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  daily_budget NUMERIC(12,2),
  total_budget NUMERIC(12,2)
);

CREATE TABLE IF NOT EXISTS shared_trips (
  id SERIAL PRIMARY KEY,
  trip_id INTEGER NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  public_slug UUID UNIQUE,
  is_public BOOLEAN DEFAULT false
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_trips_user ON trips(user_id);
CREATE INDEX IF NOT EXISTS idx_trip_stops_trip ON trip_stops(trip_id);
CREATE INDEX IF NOT EXISTS idx_trip_activities_stop ON trip_activities(stop_id);

-- Relationship notes (for documentation):
-- 1-to-many: users -> trips; trips -> trip_stops; trip_stops -> trip_activities
-- Many-to-many: activities are reusable entities that can be linked to many stops via trip_activities
