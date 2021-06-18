const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
	const games = [
		{
			img: '/images/battle-field.png',
			name: 'Battle field 2042',
			description: 'This is one of the best premieres of the year',
			date: '22/10/2021',
		},
		{
			img: '/images/halo.png',
			name: 'Halo. infinite',
			description: 'This is one of the best premieres of the year',
			date: 'Coming soon',
		},
		{
			img: '/images/b4b.png',
			name: 'Blood 4 Blood',
			description: 'This is one of the best premieres of the year',
			date: '12/10/2021',
		},
		{
			img: '/images/mario.png',
			name: 'Mario + Rabbits',
			description: 'This is one of the best premieres of the year',
			date: 'Coming soon',
		},
		{
			img: '/images/justdance.png',
			name: 'Just Dance 2022',
			description: 'This is one of the best premieres of the year',
			date: '04/11/2021',
		},
		{
			img: '/images/forza.png',
			name: 'Forza 5',
			description: 'This is one of the best premieres of the year',
			date: 'Coming soon',
		},
		{
			img: '/images/mh.png',
			name: 'Monster Hunter. stories II',
			description: 'This is one of the best premieres of the year',
			date: '09/07/2021',
		},
		{
			img: '/images/elder-ring.png',
			name: 'Elden Ring',
			description: 'This is one of the best premieres of the year',
			date: '01/01/2022',
		},
	];

	res.render('index', { games });
};

module.exports = indexCtrl;
