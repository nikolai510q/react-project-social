import Axios from 'axios';

const instance = Axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "5c68e064-0112-498b-9a52-fb4926f4b4f7"
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	follow(userId) {
		return instance.post(`follow/${userId}`, {})
			.then(response => response.data)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	},
	getProfile(userId) {
		console.warn('userAPI.getProfile - old method, please use profileAPI.getProfile');
		return profileAPI.getProfile(userId)
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`/profile/${userId}`)
	},
	getStatus(userId) {
		return instance.get(`/profile/status/${userId}`)
	},
	updateStatus(status){
		return instance.put(`/profile/status`, { status: status })
	}
}

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`)
	}
}


