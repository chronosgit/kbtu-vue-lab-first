const importAll = (r) => {
	let images = {};

	r.keys().map((item) => {
		images[item.replace('./', '')] = r(item);
	});

	return images;
};

const images = importAll(
	require.context('@/assets/', false, /\.(png|jpe?g|svg)$/)
);

export default images;
