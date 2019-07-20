import axios from 'axios';

// export default function() {
// 	const token = localStorage.getItem('token');

// 	return axios.create({
// 		baseURL: `http://localhost:3300/api/`,
// 		headers: {
// 			'Content-Type': 'application/json',
// 			token: `${token}`
// 		}
// 	});
// }

export default function() {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: `https://mighty-coast-53463.herokuapp.com/api/`,
		headers: {
			'Content-Type': 'application/json',
			token: `${token}`
		}
	});
}
