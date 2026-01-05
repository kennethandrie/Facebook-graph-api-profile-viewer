# Facebook Graph API Profile Viewer  
### OAuth 2.0 Authorization Code Flow

A simple project that demonstrates how to authenticate users using **Facebook Login (OAuth 2.0 Authorization Code Flow)** and fetch **basic profile information** using the **Facebook Graph API**.

This project is intended for **educational and authorized use only** and follows Facebook Platform Policies.

---

## Features

- Facebook Login via OAuth 2.0
- Authorization Code Flow (`response_type=code`)
- Secure access token exchange (server-side)
- Fetch basic user profile data
- Display user information such as:
  - Name
  - Email (if available)
  - Profile picture
  - User ID

---

## Tech Stack

- Facebook Graph API
- OAuth 2.0
- JavaScript
- HTML & CSS
- Backend (Node.js / PHP / Python – required for token exchange)

---

## OAuth Login URL

The app redirects users to Facebook’s OAuth dialog:

```text
https://www.facebook.com/v19.0/dialog/oauth
