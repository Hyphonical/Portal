module.exports = {
	content: ['./components/**/*.{vue,js,ts}', './layouts/**/*.vue', './pages/**/*.vue', './app.vue'],
	plugins: [],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				modrinth: '#00AF5C',
			},
			animation: {
				'bob': 'bob 6s ease-in-out infinite',
				'fade-in': 'fade-in 700ms ease-out forwards',
				'slide-up': 'slide-up 700ms ease-out both',
				'blur-in': 'blur-in 600ms ease-out both',
			},
			keyframes: {
				'bob': {
					'0%, 100%': {
						transform: 'translateY(-2%)',
					},
					'50%': {
						transform: 'translateY(2%)',
					},
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(12px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'blur-in': {
					from: { opacity: '0', filter: 'blur(6px)' },
					to: { opacity: '1', filter: 'blur(0)' },
				},
			},
		},
	},
};
