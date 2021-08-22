// module.exports = {
//   setupFilesAfterEnv: ['./src/setupTest.js'],
//   verbose: true,
//   coverageDirectory: './coverage',
//   moduleNameMapper: {
//     '\\.(css|less|scss|sass|svg|jpg|png|jpeg)$': 'identity-obj-proxy',
//   },
//   setupFiles: ['./src/setupTest.js'],
//   testPathIgnorePatterns: ['./public'],
//   coveragePathIgnorePatterns: ['./public'],
// };

module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testEnvironment: 'jsdom',

  testMatch: ['**/tests/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|jsx|oga})$':
  //     '<rootDir>/src/__test__/__mocks__/fileMock.js',
  //   '\\.(css|less|scss)$': '<rootDir>/src/__test__/__mocks__/styleMock.js',
  // },
};
