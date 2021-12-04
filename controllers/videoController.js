export const videosController = (req, res) => {
	res.render('videos');
};

export const videoDetailController = (req, res) => {
	res.render('videoDetail');
};

export const videoUploadController = (req, res) => {
	res.render('upload');
};

export const videoDeleteContronller = (req, res) => {
	res.render('delete video');
};

export const editVideoController = (req, res) => {
	res.render('editVideo');
};
