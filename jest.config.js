module.exports = {
  setupFilesAfterEnv: ['./src/setupTest.js'],
  verbose: true,
  coverageDirectory: './coverage',
  setupFiles: ['./src/setupTest.js'],
  testPathIgnorePatterns: ['./public'],
  coveragePathIgnorePatterns: ['./public'],
};
