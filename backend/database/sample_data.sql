-- Sample data for GlobalTrotters (PostgreSQL)
-- Run after creating schema

-- Users
INSERT INTO users (name, email, password) VALUES ('Alice Example', 'alice@example.com', 'REPLACE_WITH_HASH') ON CONFLICT DO NOTHING;

-- Cities
INSERT INTO cities (name, country, cost_index) VALUES ('Paris','France',120.50) ON CONFLICT DO NOTHING;
INSERT INTO cities (name, country, cost_index) VALUES ('Bangkok','Thailand',45.00) ON CONFLICT DO NOTHING;
INSERT INTO cities (name, country, cost_index) VALUES ('New York','USA',130.00) ON CONFLICT DO NOTHING;

-- Activities
INSERT INTO activities (name, category, average_cost, duration) VALUES ('Louvre Museum Tour','sightseeing',25.00, '02:00:00') ON CONFLICT DO NOTHING;
INSERT INTO activities (name, category, average_cost, duration) VALUES ('Street Food Walk','food',15.00, '01:30:00') ON CONFLICT DO NOTHING;

-- Example trip (you will need to replace user id accordingly)
-- Assume user id = 1 exists
INSERT INTO trips (user_id, trip_name, start_date, end_date, description) VALUES (1,'Sample Europe', '2026-06-01','2026-06-10','A short Europe trip') ON CONFLICT DO NOTHING;

-- Example stop and activity (replace ids as needed after creating trip)
-- For manual setup: query trips and cities to get ids and then insert into trip_stops and trip_activities.
