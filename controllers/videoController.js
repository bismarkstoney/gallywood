export const videosController = (req, res) => {
	res.render('videos', { pageTitle: 'Videos' });
};

export const videoDetailController = (req, res) => {
	res.render('videoDetail', { pageTitle: 'Video Details' });
};

export const videoUploadController = (req, res) => {
	res.render('upload', { pageTitle: 'Upload' });
};

export const videoDeleteContronller = (req, res) => {
	res.render('delete video', { pageTitle: 'Delete Video' });
};

export const editVideoController = (req, res) => {
	res.render('editVideo', { pageTitle: 'Edit Video' });
};
