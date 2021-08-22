module.exports = {
  setupFilesAfterEnv: ['./src/setupTest.js'],
  verbose: true,
  coverageDirectory: './coverage',
  moduleNameMapper: {
    '\\.(css|less|scss|sass|svg|jpg|png|jpeg)$': 'identity-obj-proxy',
  },
  setupFiles: ['./src/setupTest.js'],
  testPathIgnorePatterns: ['./public'],
  coveragePathIgnorePatterns: ['./public'],
};
