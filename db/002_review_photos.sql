CREATE TABLE IF NOT EXISTS review_photos (
  id UUID PRIMARY KEY,
  review_id UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
  position SMALLINT NOT NULL CHECK (position BETWEEN 0 AND 2),
  image BYTEA NOT NULL CHECK (octet_length(image) <= 1048576),
  UNIQUE (review_id, position)
);
