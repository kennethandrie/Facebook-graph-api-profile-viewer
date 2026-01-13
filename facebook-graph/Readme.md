# Facebook Graph API Profile Viewer

A simple web-based tool to view Facebook user profile data using the **Facebook Graph API v19.0** and **OAuth 2.0 access tokens**.

This project demonstrates how to:

* Authenticate with a Facebook access token
* Fetch user profile data from the Graph API
* Display profile details and profile pictures
* Handle loading states and API errors cleanly

---

## ✨ Features

* 🔐 Token-based authentication (OAuth 2.0)
* 👤 Fetch full Facebook profile details
* 🖼️ Fetch profile picture separately
* ⚠️ Error handling and validation
* ⏳ Loading indicators
* 📱 Fully responsive UI
* 💅 Clean and modern UI with pure HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript (ES6+)**
* **Facebook Graph API v19.0**

No frameworks. No build tools. Just clean frontend code.

---

## 📁 Project Structure

```
.
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # JavaScript logic & API calls
└── README.md       # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone or Download

```bash
git clone https://github.com/your-username/facebook-graph-api-viewer.git
```

Or download the ZIP and extract it.

---

### 2. Get a Facebook Access Token

You’ll need a valid **Facebook User Access Token** with appropriate permissions.

Steps (high level):

1. Go to **Meta for Developers**
2. Create an app
3. Use **Graph API Explorer**
4. Generate a User Access Token
5. Grant permissions such as:

   * `public_profile`
   * `email` (optional, if you want email data)

⚠️ Some fields (like email) require the user to have an email and to grant permission.

---

### 3. Run the App

This is a static app — no server required.

Just open:

```
index.html
```

in your browser.

---

## 🧪 How to Use

1. Paste your **Facebook Access Token** into the input field
2. Click:

   * **Get Full Profile** → Fetches name, ID, email, link, and picture
   * **Get Profile Picture** → Fetches only the profile picture
3. Click **Clear** to reset everything

---

## 🔍 API Endpoints Used

### Get Full Profile

```
GET /me
fields=id,name,first_name,last_name,email,link,picture
```

### Get Profile Picture

```
GET /me/picture?redirect=false&type=large
```

---

## ⚠️ Notes & Limitations

* Access tokens expire — if something stops working, generate a new token
* Some fields (like email) may return `Not Available`
* This tool is for **educational and development purposes**
* Do **not** expose access tokens in production apps

---

## 📸 Screenshots (Optional)

You can add screenshots here if you want:

```
![Screenshot](screenshot.png)
```

---

🧩 Possible Enhancements

* Token expiration detection
* Permission scope viewer
* Display raw JSON response
* Support for Pages or Instagram Graph API
* Dark mode 🌙

---

📜 License

This project is open-source and available under the **MIT License**.

---
