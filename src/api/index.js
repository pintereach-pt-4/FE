import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:3300/api/`,
  headers: { token: localStorage.getItem("token") }
});

// export default axios.create({
//   baseURL: `https://mighty-coast-53463.herokuapp.com/api/`,
//   headers: { token: localStorage.getItem("token") }
// });
