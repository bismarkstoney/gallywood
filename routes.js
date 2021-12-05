const HOME = '/';

const SEARCH = '/search';

//Users

const USERS = '/';
const JOIN = '/users/join';
const LOGIN = '/users/login';
const LOGOUT = '/users/logout';
const USER_DETAILS = '/users/:id';

const EDIT_PROFILE = '/users/edit-profile';
const CHANGE_PASSWORD = '/users/change-password';

//Videos

const VIDEOS = '/';
const UPLOAD = '/videos/upload';
const VIDEO_DETAIL = '/videos/:id';
const EDIT_VIDEO = '/videos/:id/edit';
const DELETE_VIDEO = '/videos/:id/delete';

const routes = {
	home: HOME,
	join: JOIN,
	login: LOGIN,
	logout: LOGOUT,
	search: SEARCH,
	users: USERS,
	userDetails: USER_DETAILS,
	editProfile: EDIT_PROFILE,
	changePassword: CHANGE_PASSWORD,
	videos: VIDEOS,
	upload: UPLOAD,
	videoDetail: VIDEO_DETAIL,
	editVideo: EDIT_VIDEO,
	deleteVideo: DELETE_VIDEO,
};

export default routes;
