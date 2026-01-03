# GlobeTrotter API Documentation

This document outlines the API contracts for the GlobeTrotter application's integration layer.

## Authentication

All API requests (except login/signup) require a JWT token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

## API Endpoints

### 1. City Search API

**Endpoint:** `/api/cities`  
**Method:** `GET`  
**Description:** Search for cities based on query parameters

#### Query Parameters
| Parameter | Type   | Required | Description                    |
|-----------|--------|----------|--------------------------------|
| q         | string | Yes      | Search query (city name)       |
| country   | string | No       | Filter by country code (optional) |

#### Example Request
```http
GET /api/cities?q=paris&country=FR
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Example Response
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Paris",
      "country": "France",
      "country_code": "FR",
      "latitude": 48.8566,
      "longitude": 2.3522,
      "description": "The City of Light",
      "image_url": "https://example.com/paris.jpg"
    },
    {
      "id": 2,
      "name": "Paris",
      "country": "United States",
      "country_code": "US",
      "latitude": 33.6617,
      "longitude": -95.5555,
      "description": "Paris, Texas",
      "image_url": "https://example.com/paris-tx.jpg"
    }
  ],
  "total": 2
}
```

---

### 2. Activity Search API

**Endpoint:** `/api/activities`  
**Method:** `GET`  
**Description:** Search for activities in a specific city with optional filters

#### Query Parameters
| Parameter | Type     | Required | Description                           |
|-----------|----------|----------|---------------------------------------|
| cityId    | number   | Yes      | ID of the city to search activities   |
| category  | string[] | No       | Activity categories (can be multiple) |
| price_min | number   | No       | Minimum price filter                  |
| price_max | number   | No       | Maximum price filter                  |
| rating    | number   | No       | Minimum rating filter (1-5)          |
| duration  | string   | No       | Duration filter (e.g., "2-4h")       |

#### Example Request
```http
GET /api/activities?cityId=1&category=museum&category=tour&price_max=50&rating=4
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Example Response
```json
{
  "success": true,
  "data": [
    {
      "id": 101,
      "name": "Louvre Museum Tour",
      "description": "Guided tour of the world's largest art museum",
      "category": "museum",
      "price": 35.00,
      "currency": "EUR",
      "duration": "3h",
      "rating": 4.8,
      "reviews_count": 1250,
      "image_url": "https://example.com/louvre.jpg",
      "location": {
        "latitude": 48.8606,
        "longitude": 2.3376,
        "address": "Rue de Rivoli, 75001 Paris, France"
      }
    },
    {
      "id": 102,
      "name": "Seine River Cruise",
      "description": "Romantic evening cruise along the Seine",
      "category": "tour",
      "price": 45.00,
      "currency": "EUR",
      "duration": "2h",
      "rating": 4.5,
      "reviews_count": 890,
      "image_url": "https://example.com/seine.jpg",
      "location": {
        "latitude": 48.8566,
        "longitude": 2.3522,
        "address": "Port de la Bourdonnais, 75007 Paris, France"
      }
    }
  ],
  "total": 2,
  "filters_applied": {
    "cityId": 1,
    "category": ["museum", "tour"],
    "price_max": 50,
    "rating": 4
  }
}
```

---

### 3. Add City to Trip API

**Endpoint:** `/api/trips/:tripId/cities`  
**Method:** `POST`  
**Description:** Add a city to an existing trip

#### Path Parameters
| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| tripId    | number | Yes      | Trip ID     |

#### Request Body
```json
{
  "cityId": 1
}
```

#### Example Request
```http
POST /api/trips/123/cities
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "cityId": 1
}
```

#### Example Response
```json
{
  "success": true,
  "message": "City added to trip successfully",
  "data": {
    "trip_id": 123,
    "city_id": 1,
    "added_at": "2026-01-03T10:30:00Z",
    "city": {
      "id": 1,
      "name": "Paris",
      "country": "France"
    }
  }
}
```

---

### 4. Add Activity to Itinerary API

**Endpoint:** `/api/itinerary/:itineraryId/activities`  
**Method:** `POST`  
**Description:** Add an activity to a specific itinerary

#### Path Parameters
| Parameter    | Type   | Required | Description  |
|--------------|--------|----------|--------------|
| itineraryId  | number | Yes      | Itinerary ID |

#### Request Body
```json
{
  "activityId": 101
}
```

#### Example Request
```http
POST /api/itinerary/456/activities
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "activityId": 101
}
```

#### Example Response
```json
{
  "success": true,
  "message": "Activity added to itinerary successfully",
  "data": {
    "itinerary_id": 456,
    "activity_id": 101,
    "order_position": 3,
    "added_at": "2026-01-03T10:30:00Z",
    "activity": {
      "id": 101,
      "name": "Louvre Museum Tour",
      "duration": "3h",
      "price": 35.00
    }
  }
}
```

---

### 5. Reorder Itinerary API

**Endpoint:** `/api/itinerary/reorder`  
**Method:** `PUT`  
**Description:** Reorder activities in an itinerary using drag-and-drop

#### Request Body
```json
{
  "itinerary_id": 456,
  "ordered_items": [103, 101, 102, 105]
}
```

#### Example Request
```http
PUT /api/itinerary/reorder
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "itinerary_id": 456,
  "ordered_items": [103, 101, 102, 105]
}
```

#### Example Response
```json
{
  "success": true,
  "message": "Itinerary reordered successfully",
  "data": {
    "itinerary_id": 456,
    "updated_at": "2026-01-03T10:30:00Z",
    "activities": [
      {
        "id": 103,
        "name": "Eiffel Tower Visit",
        "order_position": 1
      },
      {
        "id": 101,
        "name": "Louvre Museum Tour",
        "order_position": 2
      },
      {
        "id": 102,
        "name": "Seine River Cruise",
        "order_position": 3
      },
      {
        "id": 105,
        "name": "Montmartre Walking Tour",
        "order_position": 4
      }
    ]
  }
}
```

## Error Responses

All APIs return consistent error responses in the following format:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": {
      "cityId": "City ID is required"
    }
  }
}
```

### Common HTTP Status Codes
- `200` - Success
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid or missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found (resource doesn't exist)
- `500` - Internal Server Error

## Rate Limiting

All APIs are rate-limited to 100 requests per minute per user. When the limit is exceeded, the API returns:

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later.",
    "retry_after": 60
  }
}
```