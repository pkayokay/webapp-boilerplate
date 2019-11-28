module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-color': 'white',
      },
      screens: {
        range: { 'min': '200px', 'max': '500px'},
        skip: [
          { 'min': '200px', 'max': '500px'},
          { 'min': '900px'}
        ]
      },
    }
  },
  variants: {
    // Enabled by default
    // backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}

// tw notes
// - custom utility classes
// - responsive classes
// - hover, focus states
// - variants - not out of the boxed, must be enabled on the modules property (hover, focus, group hover, responsive)
// - We can define our own varients in our css file @varients hover { }
// - options to override all custom classes with tailwind with important
