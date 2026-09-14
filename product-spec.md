# Product Spec: Restaurant Waitlist Manager

## Overview
A full-stack application designed to manage restaurant customer queues efficiently. It enables restaurant hosts to register incoming parties, track active waiting statuses, and persist records securely using SQLite.

## User Stories
- As a restaurant host, I want to add a customer name and party size to a live waitlist so that I can keep track of incoming guests.
- As a host, I want to view all current parties waiting in line via a clean web interface connected to a FastAPI backend.

## Acceptance Criteria
- The backend must expose REST endpoints conforming to the OpenAPI specification.
- Data must be stored and retrieved reliably using SQLite.
- The system must include automated tests validating root and waitlist operations.
