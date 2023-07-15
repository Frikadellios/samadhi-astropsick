const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {
			boxShadow: {
				xs: "0px 1px 1px rgba(24, 24, 27, 0.06), 0px 0px 0px rgba(24, 24, 27, 0.08), 0px 0px 0px rgba(24, 24, 27, 0.08)",
				sm: "0px 2px 1px rgba(24, 24, 27, 0.01), 0px 1px 1px rgba(24, 24, 27, 0.05), 0px 1px 1px rgba(24, 24, 27, 0.09), 0px 0px 0px rgba(24, 24, 27, 0.1), 0px 0px 0px rgba(24, 24, 27, 0.1);",
				md: "0px 5px 2px rgba(24, 24, 27, 0.03), 0px 3px 2px rgba(24, 24, 27, 0.1), 0px 1px 1px rgba(24, 24, 27, 0.17), 0px 0px 1px rgba(24, 24, 27, 0.2), 0px 0px 0px rgba(24, 24, 27, 0.2);",
				lg: "0px 25px 7px rgba(24, 24, 27, 0.01), 0px 16px 6px rgba(24, 24, 27, 0.04), 0px 9px 5px rgba(24, 24, 27, 0.15), 0px 4px 4px rgba(24, 24, 27, 0.26), 0px 1px 2px rgba(24, 24, 27, 0.29), 0px 0px 0px rgba(24, 24, 27, 0.3);",
			},
			animation: {
				blob: 'blob 10s infinite',
				border: 'background ease infinite',
			},
			keyframes: {
				background: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				blob: {
				  '0%, 100%': {
					transform: 'translate(0, 0) scale(1)',
				  },
				  '25%': {
					transform: 'translate(20px, -50px) scale(1.1)',
				  },
				  '50%': {
					transform: 'translate(0, 20px) scale(1)',
				  },
				  '75%': {
					transform: 'translate(-20px, -15px) scale(0.9)',
				  },
				},
				
			  },
			fontFamily: {
				cursive: ["Titan One", "cursive"],
				sans: ["InterVariable", "sans-serif"],
				mono: ["Montserrat", "sans-serif"],
			},
			colors: {
				transparent: 'transparent',
				blacks: {
					50: "#E6E6E6",
					100: "#CCCCCC",
					200: "#999999",
					300: "#666666",
					400: "#333333",
					500: "#000000",
					600: "#000000",
					700: "#000000",
					800: "#000000",
					900: "#000000",
					950: "#000000"
				  },
				whites: {
					50: "#FCFCFC",
					100: "#FCFCFC",
					200: "#FCFCFC",
					300: "#FCFCFC",
					400: "#FCFCFC",
					500: "#FCFCFC",
					600: "#FCFCFC",
					700: "#FFFFFF",
					800: "#D6D6D6",
					900: "#9C9C9C",
					950: "#737373"
				  },
				blues: {
					50: "#DCDFFF",
					100: "#B3B9FE",
					200: "#6774FE",
					300: "#1B2EFD",
					400: "#0212CA",
					500: "#010C80",
					600: "#010965",
					700: "#01074C",
					800: "#000533",
					900: "#000219",
					950: "#00010F"
				  },
				yellows: {
					50: "#FFFDF0",
					100: "#FFFBE0",
					200: "#FFF7C2",
					300: "#FFF3A3",
					400: "#FFEE80",
					500: "#FFE957",
					600: "#FFE229",
					700: "#FFDC00",
					800: "#D1B500",
					900: "#998500",
					950: "#706100"
				  },
				grays: {
					50: "#F0F0F0",
					100: "#E0E0E0",
					200: "#BFBFBF",
					300: "#A1A1A1",
					400: "#808080",
					500: "#616161",
					600: "#404040",
					700: "#212121",
					800: "#171717",
					900: "#0A0A0A",
					950: "#050505"
				  },
				oranges: {
					50: "#FEF8F1",
					100: "#FDEEDD",
					200: "#FBDDBB",
					300: "#FACF9E",
					400: "#F8BE7D",
					500: "#F6AD5B",
					600: "#F49D39",
					700: "#F28C18",
					800: "#A95F0A",
					900: "#522E05",
					950: "#2B1802"
				  },
				purples: {
					50: "#EEEBFA",
					100: "#DAD2F4",
					200: "#B9AAE9",
					300: "#947DDE",
					400: "#7255D3",
					500: "#5231BF",
					600: "#3F2692",
					700: "#2D1B69",
					800: "#1E1245",
					900: "#100925",
					950: "#070410"
				  },
				pinks: {
					50: "#FFEBFA",
					100: "#FFD6F5",
					200: "#FFB3ED",
					300: "#FF8AE4",
					400: "#FF66DB",
					500: "#FF3DD2",
					600: "#FF1AC9",
					700: "#F000B8",
					800: "#9E0079",
					900: "#52003F",
					950: "#29001F"
				  },
				azures: {
					50: "#F3FCFB",
					100: "#E2F8F6",
					200: "#C6F1EC",
					300: "#A9EAE3",
					400: "#8DE2DA",
					500: "#70DBD1",
					600: "#54D4C7",
					700: "#37CDBE",
					800: "#238B80",
					900: "#114540",
					950: "#092522"
				  },
				darks: {
					50: "#EDEFF2",
					100: "#DEE1E8",
					200: "#BAC1CF",
					300: "#99A3B8",
					400: "#75839E",
					500: "#5A6781",
					600: "#414A5D",
					700: "#2A303C",
					800: "#1B1F27",
					900: "#0F1115",
					950: "#060709"
				  },
				greens: {
					50: "#F2FFE5",
					100: "#E5FFCC",
					200: "#CDFF9E",
					300: "#B3FF6B",
					400: "#9BFF3D",
					500: "#81FF0A",
					600: "#68D600",
					700: "#51A800",
					800: "#367000",
					900: "#1B3800",
					950: "#0C1900"
				  },
				darkreds: {
					50: "#FFE5E5",
					100: "#FFCCCC",
					200: "#FF9494",
					300: "#FF6161",
					400: "#FF2929",
					500: "#F50000",
					600: "#C20000",
					700: "#8B0000",
					800: "#5C0000",
					900: "#2E0000",
					950: "#190000"
				  },
				skys: {
					50: "#F0FAFE",
					100: "#E1F5FE",
					200: "#C4ECFD",
					300: "#ABE4FC",
					400: "#8EDAFB",
					500: "#70D1FA",
					600: "#53C7F9",
					700: "#38BDF8",
					800: "#078CC5",
					900: "#034663",
					950: "#022331"
				  },
				night: {
					50: "#E8EDF7",
					100: "#CED8EE",
					200: "#A1B3DD",
					300: "#708CCC",
					400: "#4265B8",
					500: "#324C8B",
					600: "#20325A",
					700: "#0F172A",
					800: "#090E1A",
					900: "#05080F",
					950: "#030408"
				  },
				hovers: {
					50: "#FDFAFF",
					100: "#FBF6FE",
					200: "#F8ECFD",
					300: "#F6E8FD",
					400: "#F2DFFC",
					500: "#EFD5FB",
					600: "#EBCCFA",
					700: "#E8C4F9",
					800: "#B43DEB",
					900: "#600E86",
					950: "#320745"
				  },
				reds: {
					50: "#FDF2F2",
					100: "#F9E1E1",
					200: "#F4C3C3",
					300: "#EFA9A9",
					400: "#E98B8B",
					500: "#E36D6D",
					600: "#DD4F4F",
					700: "#D83333",
					800: "#961D1D",
					900: "#490E0E",
					950: "#270707"
				  },
			},
			backgroundImage: {
				"blue-yellow-gradient": "linear-gradient(83.21deg, #3245FF 0%, #FFDC00 100%)",
				"blue-green-gradient": "linear-gradient(247.23deg, #4AF2C8 0%, #2F4CB3 100%)",
				"red-pink-gradient": "linear-gradient(66.77deg, #D83333 0%, #F041FF 100%)",
				"orange-yellow-gradient": "linear-gradient(266.93deg, #F8E42E 0%, #FF7D54 100%)",
			},
			height: {
				header: "5rem",
			},
			lineHeight: {
				prose: 1.8125,
			},
			maxWidth: {
				prose: "70ch",
			},
			zIndex: {
				"white-button-fill": -1,
				noise: -2,
				grid: -3,
				blur: -4,
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
		container: false,
	  },
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('tailwindcss-animated'),
		require('@tailwindcss/line-clamp'),
		
		// adds a `s-*` utility to apply the same width and height
		plugin(function sizePlugin(api) {
			api.matchUtilities(
				{ s: (value) => ({ width: value, height: value }) },
				{ values: api.theme("width") },
			)
		}),

		// adds `fluid-cols-*`, `fluid-cols-fit`, and `fluid-cols-fill` utilities
		plugin(function fluidColumnsPlugin(api) {
			api.matchUtilities(
				{
					"fluid-cols": (value) => ({
						gridTemplateColumns: `repeat(var(--fluid-cols-repeat, auto-fill), minmax(${value}, 1fr))`,
					}),
				},
				{ values: api.theme("width") },
			)

			api.addUtilities({
				".fluid-cols-fit": { "--fluid-cols-repeat": "auto-fit" },
				".fluid-cols-fill": { "--fluid-cols-repeat": "auto-fill" },
			})
		}),

		plugin(function astroComponentsPlugin({ addComponents, theme }) {
			addComponents({
				"b, strong": {
					fontWeight: 700,
				},

				":focus-visible": {
					"@apply outline-blue-500 outline-offset-2": {},
				},

				".container": {
					"@apply w-full mx-auto max-w-screen-2xl px-4 md:px-8": {},
				},
				".heading-1": {
					"@apply font-cursive text-7xl leading-tight text-blues-600 dark:text-yellows-600": {},
				},

				".heading-2": {
					"@apply font-sans text-6xl font-bold text-blues-600 dark:text-yellows-600 leading-tight": {},
				},

				".heading-3": {
					"@apply font-sans font-bold text-4xl leading-tight text-blues-600 dark:text-yellows-600 leading-tight": {},
					fontSize: "32px",
				},

				".heading-4": {
					"@apply font-sans font-semibold tracking-widest text-blues-600 dark:text-yellows-600 uppercase text-2xl  leading-tight": {},
				},

				".heading-5": {
					"@apply font-sans font-bold text-xl text-blues-600 dark:text-yellows-600 leading-tight m-5 animate-fade-right animate-infinite animate-duration-[3500ms] animate-delay-[3500ms] animate-ease-in-out animate-alternate-reverse animate-fill-both": {},
				},

				".body": {
					"@apply font-sans text-base  text-grays-700 dark:text-whites-500": {},
				},
				".body-large": {
					"@apply text-2xl font-bold text-lg font-sans text-blues-600 hover:text-color dark:text-yellows-600 dark:hover:text-color leading-normal": {},
				},

				".code": {
					"@apply font-sans font-mono": {},
				},

				".link": {
					"@apply font-bold text-blues-600 hover:text-color dark:text-yellows-600 dark:hover:text-color"  : {},
				},
				".link-underline": {
					"@apply link border-b border-gray-300 hover:border-blue-500": {},
				},

				".input": {
					"@apply rounded-lg border border-grays-500 bg-grays-600 p-3 leading-none shadow-inner":
						{},
				},
				".input-textarea": {
					"@apply py-2 leading-normal": {},
				},
				".landing-section": {
					"@apply flex flex-col items-center justify-center overflow-visible text-center": {},
				},

				".bg-grid": {
					// https://stackoverflow.com/a/32861765/1332403
					backgroundSize: "20px 20px",
					backgroundImage: `linear-gradient(to right, ${theme(
						"colors.-blues.600",
					)} 1px, transparent 1px),\n    linear-gradient(to bottom, ${theme(
						"colors.yellows.600",
					)} 1px, transparent 1px)`,
					backgroundPosition: "top center",
					imageRendering: "pixelated",

					// https://stackoverflow.com/a/9670876/1332403
					maskImage: `linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)`,
				},
			})
		}),

		plugin(function maskGradientPlugin(api) {
			api.addUtilities({
				".mask-radial-gradient": {
					maskImage: "radial-gradient(rgba(0, 0, 0, 0.8), transparent 60%)",
				},
				".mask-linear-gradient-to-b": {
					maskImage: "linear-gradient(to bottom, white 0%, white 33%, transparent 90%)",
				},
			})
		}),
	],
}
