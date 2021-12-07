/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

/*global module*/

module.exports = {
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./src/testconfig/test.config.js'],
    snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
    transformIgnorePatterns: ['node_modules/'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
};
