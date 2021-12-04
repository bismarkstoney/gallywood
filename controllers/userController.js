export const getUser = (req, res) => {
	res.send('hello users');
};

export const login = (req, res) => {
	res.render('login');
};

export const logout = (req, res) => {
	res.render('logout');
};

export const join = (req, res) => {
	res.render('join');
};

export const userDetails = (req, res) => {
	res.render('userDetails');
};

export const userProfileEdit = (req, res) => {
	res.render('editProfile');
};

export const changePassword = (req, res) => {
	res.render('changePassword');
};
