export const homeController = (req, res) => {
	// const { term } = req.query.term;
	// console.log(term);
	res.render('home', { pageTitle: 'Home' });
};

export const searchController = (req, res) => {
	const { term } = req.query;

	res.render('search', { pageTitle: 'Search', term });
};
