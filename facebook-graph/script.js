// ============================
// 1) BASE CONFIG
// ============================
const BASE_URL = "https://graph.facebook.com/v19.0";

// ============================
// 2) DOM ELEMENTS
// ============================
const tokenInput = document.getElementById("tokenInput");
const btnProfile = document.getElementById("btnProfile");
const btnPicture = document.getElementById("btnPicture");
const btnClear = document.getElementById("btnClear");
const results = document.getElementById("results");
const errorBox = document.getElementById("errorBox");
const loading = document.getElementById("loading");

// ============================
// 3) UTILITIES
// ============================
function showLoading(msg = "Loading...") {
  loading.textContent = msg;
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");
}

function hideError() {
  errorBox.classList.add("hidden");
  errorBox.textContent = "";
}

function clearResults() {
  results.innerHTML = "";
}

function disableButtons(disabled = true) {
  btnProfile.disabled = disabled;
  btnPicture.disabled = disabled;
}

// Input Validation
function getToken() {
  const token = tokenInput.value.trim();
  if (!token) {
    showError("⚠️ Access Token is required. Please paste your token.");
    return null;
  }

  // Basic token validation: prevent spaces and invalid characters
  if (token.includes(" ")) {
    showError("⚠️ Invalid token format. Remove spaces.");
    return null;
  }

  return token;
}

// ============================
// 4) API FUNCTIONS (MODULAR)
// ============================
async function fetchJSON(endpoint, token, extraParams = "") {
  const url = `${BASE_URL}${endpoint}?access_token=${token}${extraParams}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok || data.error) {
    const errMsg = data?.error?.message || "Unknown error occurred.";
    throw new Error(errMsg);
  }

  return data;
}

async function getFullProfile(token) {
  return fetchJSON("/me", token, "&fields=id,name,first_name,last_name,email,link,picture.width(300).height(300)");
}

async function getProfilePicture(token) {
  return fetchJSON("/me/picture", token, "&redirect=false&type=large");
}

// ============================
// 5) DOM RENDERING FUNCTIONS
// ============================
function renderProfile(profile) {
  clearResults();

  const imgUrl = profile?.picture?.data?.url || "";
  const email = profile.email || "Not Available";

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="profile-top">
      <img src="${imgUrl}" alt="Profile Picture"/>
      <div class="profile-details">
        <h2>${profile.name}</h2>
        <p><strong>ID:</strong> ${profile.id}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Profile Link:</strong> <a href="${profile.link}" target="_blank">Open</a></p>
      </div>
    </div>

    <table class="table">
      <tr><td>First Name</td><td>${profile.first_name || "-"}</td></tr>
      <tr><td>Last Name</td><td>${profile.last_name || "-"}</td></tr>
    </table>
  `;

  results.appendChild(card);
}

function renderPicture(pictureData) {
  clearResults();

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>Profile Picture</h2>
    <p>URL returned from /me/picture endpoint</p>
    <img src="${pictureData.data.url}" alt="Profile Picture" style="width:200px; border-radius:10px; margin-top:10px;" />
  `;

  results.appendChild(card);
}

// ============================
// 6) EVENT LISTENERS
// ============================
btnProfile.addEventListener("click", async () => {
  hideError();
  clearResults();

  const token = getToken();
  if (!token) return;

  try {
    disableButtons(true);
    showLoading("Fetching full profile...");

    const profile = await getFullProfile(token);
    renderProfile(profile);

  } catch (err) {
    showError("❌ Failed to load profile: " + err.message);
  } finally {
    hideLoading();
    disableButtons(false);
  }
});

btnPicture.addEventListener("click", async () => {
  hideError();
  clearResults();

  const token = getToken();
  if (!token) return;

  try {
    disableButtons(true);
    showLoading("Fetching profile picture...");

    const pic = await getProfilePicture(token);
    renderPicture(pic);

  } catch (err) {
    showError("❌ Failed to load picture: " + err.message);
  } finally {
    hideLoading();
    disableButtons(false);
  }
});

btnClear.addEventListener("click", () => {
  tokenInput.value = "";
  hideError();
  hideLoading();
  clearResults();
});
