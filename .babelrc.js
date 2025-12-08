module.exports = {
  presets: [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.25%', 'not dead'],
        },
      },
    ],
  ],
  plugins: [
    // Remove PropTypes in production for smaller bundle
    process.env.NODE_ENV === 'production' && [
      'babel-plugin-transform-react-remove-prop-types',
      {
        removeImport: true,
      },
    ],
    // Remove console.log in production
    process.env.NODE_ENV === 'production' && [
      'babel-plugin-transform-remove-console',
      {
        exclude: ['error', 'warn'],
      },
    ],
  ].filter(Boolean),
};
