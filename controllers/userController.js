export const getUser = (req, res) => {
	res.send('hello users');
};

export const login = (req, res) => {
	res.render('login', { pageTitle: 'Login' });
};

export const logout = (req, res) => {
	res.render('logout', { pageTitle: 'Logout' });
};

export const join = (req, res) => {
	res.render('join', { pageTitle: 'Join' });
};

export const userDetails = (req, res) => {
	res.render('userDetails', { pageTitle: 'User Details' });
};

export const userProfileEdit = (req, res) => {
	res.render('editProfile', { pageTitle: 'Edit Profile' });
};

export const changePassword = (req, res) => {
	res.render('changePassword', { pageTitle: 'Change Password' });
};
