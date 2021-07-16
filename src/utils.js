export const readingTime = (text) =>
	Math.ceil(text.trim().split(/\s+/).length / 225); // 225 is avg wpm

export const blog = [{
	img: {
		src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
		alt: 'a man holding phone with a Nike logo',
	},
	title: 'Wellintong Quiw drops new heat',
	body: "The artist surprise the world with the release...",
	date: new Date(),
	author: {
		name: 'Luis Bonilla',
		img: {
			src: 'https://pbs.twimg.com/profile_images/1407147550143127556/4co4MhYu_400x400.jpg',
			alt: '',
		},
	},
}, ];
export const ourWork = [{
		img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'Nike’s web app',
		body: 'Making the Nike’s website experience <i>swoosh</i>.',
		date: new Date(),
	},
	{
		img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'Nike’s web app',
		body: 'Making the Nike’s website experience <i>swoosh</i>.',
		date: new Date(),
	},
	{
		img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'Nike’s web app',
		body: 'Making the Nike’s website experience <i>swoosh</i>.',
		date: new Date(),
	},
];

export const ourWorkPosts = [{
	type: 'Website',
	title: 'Nike’s web app',
	body: "<p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p><h3 class='post-subtitle'>Our Approach</h3><p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p>",
	imgCarousel: [{
			src: '/assets/post-carousel-0.png',
			alt: ''
		},
		{
			src: '/assets/post-carousel-1.png',
			alt: ''
		},
		{
			src: '/assets/post-carousel-2.png',
			alt: ''
		},
	],
}, ];