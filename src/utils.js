export const readingTime = (text) =>
	Math.ceil(text.trim().split(/\s+/).length / 225); // 225 is avg wpm

export const blog = [
	{
		img: {
			src: 'https://unsplash.com/photos/wwqRpSNBPq4/download?force=true&w=640',
			alt: 'a man holding phone with a Nike logo',
		},
		title: 'How we built a fucking dope web app in 3 hours',
		body: "The beauty of this is that it gives guidance to the Apple developers, there are no new disruptive technologies that pop out of nowhere, it's a clear and predictable roadmap, which allows the developers to follow this guided path, and simply focus on getting better at what they do and very occasionally learn the new way of doing things. Now... I love the web, I was not going to change my career and become a mobile developer overnight. So naturally, I started looking for alternatives in my domain. That's when I crossed paths with the well-known and battle-tested MVC frameworks 🐍 💎. The beauty of this is that it gives guidance to the Apple developers, there are no new disruptive technologies that pop out of nowhere, it's a clear and predictable roadmap, which allows the developers to follow this guided path, and simply focus on getting better at what they do and very occasionally learn the new way of doing things. Now... I love the web, I was not going to change my career and become a mobile developer overnight. So naturally, I started looking for alternatives in my domain. That's when I crossed paths with the well-known and battle-tested MVC frameworks 🐍 💎. The beauty of this is that it gives guidance to the Apple developers, there are no new disruptive technologies that pop out of nowhere, it's a clear and predictable roadmap, which allows the developers to follow this guided path, and simply focus on getting better at what they do and very occasionally learn the new way of doing things. Now... I love the web, I was not going to change my career and become a mobile developer overnight. So naturally, I started looking for alternatives in my domain. That's when I crossed paths with the well-known and battle-tested MVC frameworks 🐍 💎.",
		date: new Date(),
		author: {
			name: 'Luis Bonilla',
			img: {
				src: 'https://pbs.twimg.com/profile_images/1407147550143127556/4co4MhYu_400x400.jpg',
				alt: '',
			},
		},
	},
];
export const ourWork = [
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

export const ourWorkPosts = [
	{
		type: 'Website',
		title: 'Nike’s web app',
		body: "<p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p><h3 class='post-subtitle'>Our Approach</h3><p class='post-text'>Constant change makes producing quality drawing sets nearly impossible. Checkset recognizes that the industry faces increasingly volatile parameters such as budgets, timelines, and unpredictable clients.</p>",
		imgCarousel: [
			{ src: '/assets/post-carousel-0.png', alt: '' },
			{ src: '/assets/post-carousel-1.png', alt: '' },
			{ src: '/assets/post-carousel-2.png', alt: '' },
		],
	},
];
