module.exports = {
    theme: {
        screens: {
            'md': '480px',
            'lg': '768px'
        },
        maxWidth: {
            'sm': '327px',
            'md': '689px',
            'lg': '1110px'
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.815rem',
            'base': '.875rem',
            'md': '.94rem',
            'lg': '1.125rem',
            'xl': ['1.5rem', {
                lineHeight: '33px'
            }],
            '2xl': ['1.75rem', {
                lineHeight: '38px'
            }],
            '3xl': '2rem',
            '4xl': ['2.25rem', {
                lineHeight: '40px'
            }],
            '5xl': ['2.5rem', {
                lineHeight: '44px'
            }],
            '6xl': ['3.5rem', {
                lineHeight: '58px'
            }],
        },
        extend: {
            colors: {
                'orange': '#D87D4A',
                'light-orange': '#FBAF85'
            },
            spacing: {
                '22': '5.5rem'
            }
        }
    },
    plugins: [],
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        `nuxt.config.{js,ts}`
    ]
}