// TODO: Pull this variable from process.env.REACT_APP_API (via an .env file)
const API_URL = process.env.REACT_APP_API;

/**
 * Service class for interacting with an API, authenticating users against the
 * API, and storing JSON Web Tokens in the browser's localStorage.
 */

class ApiService {
  constructor(api_url) {
    this.api_url = api_url;
  }

  async login(username, password) {
    const response = await this.post("/users/authenticate", {
      username,
      password,
    });
    this.setToken(response.token);
  }

  loggedIn() {
    // TODO: Check if token is expired using 'jwt-decode'
    // TODO: Install using 'npm install jwt-decode'
    /*
    if (jwtDecode(token).exp < Date.now() / 1000) {
        // Do something to renew token
    }
     */
    return this.getToken() !== null;
  }


  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
  }

  async makeRequest(path, options) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    // Automatically append the token if the user is logged in
    if (this.loggedIn()) {
      headers["Authorization"] = `Bearer ${this.getToken()}`;
    }
    try {
      const response = await fetch(this.api_url + path, {
        headers: headers,
        ...options,
      });

      const parsedResponse = await response.json();
      if (response.ok) {
        return parsedResponse;
      } else {
        // The response contains an object with an error message; throw it as an error
        throw parsedResponse;
      }
    } catch (error) {
      throw error;
    }
  }

  // Helper method for easy GET requests
  get(path) {
    return this.makeRequest(path, { method: "GET" });
  }

  // Helper method for easy POST requests; just pass body as an object
  post(path, body) {
    return this.makeRequest(path, {
      method: "POST",
      body: body ? JSON.stringify(body) : null,
    });
  }
}

// Export a single instance of the class
const apiService = new ApiService(API_URL);

export default apiService;