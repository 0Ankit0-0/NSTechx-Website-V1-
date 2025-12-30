/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			green: {
  				'50': '#e6fce9',
  				'100': '#b3f5bc',
  				'200': '#80ee8f',
  				'300': '#4de762',
  				'400': '#1ae035',
  				'500': '#02be2c',
  				'600': '#038a21',
  				'700': '#026b1a',
  				'800': '#024c13',
  				'900': '#012d0b',
  				'950': '#011e07',
  			},
  			orange: {
  				'50': '#fef2ee',
  				'100': '#fcd9cc',
  				'200': '#fac0aa',
  				'300': '#f8a788',
  				'400': '#f68e66',
  				'500': '#e94d1a',
  				'600': '#d43d0f',
  				'700': '#a82f0c',
  				'800': '#7c2209',
  				'900': '#501406',
  				'950': '#380e04',
  			},
  			primary: {
  				'50': '#e6fce9',
  				'100': '#b3f5bc',
  				'200': '#80ee8f',
  				'300': '#4de762',
  				'400': '#1ae035',
  				'500': '#02be2c',
  				'600': '#038a21',
  				'700': '#026b1a',
  				'800': '#024c13',
  				'900': '#012d0b',
  				'950': '#011e07',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'bar-up': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        }
  		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
      'blob': 'blob 7s infinite',
      'bar-up': 'bar-up 1s ease-out forwards',
		},
    animationDelay: {
      '4000': '4s',
    },
		backgroundImage: {
			'gradient-green': 'linear-gradient(135deg, hsl(134 98% 38%) 0%, hsl(131 96% 27%) 100%)',
			'gradient-green-light': 'linear-gradient(135deg, hsl(134 95% 97%) 0%, hsl(134 90% 92%) 100%)',
			'gradient-orange': 'linear-gradient(135deg, hsl(15 83% 51%) 0%, hsl(15 90% 45%) 100%)',
			'gradient-blue': 'linear-gradient(135deg, hsl(134 98% 38%) 0%, hsl(131 96% 27%) 100%)',
			'gradient-blue-light': 'linear-gradient(135deg, hsl(134 95% 97%) 0%, hsl(134 90% 92%) 100%)',
		}
	}
  },
  plugins: [require("tailwindcss-animate")],
}