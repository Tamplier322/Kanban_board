module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@styles(.*)$': '<rootDir>/src/styles$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@types(.*)$': '<rootDir>/src/types$1',
    },
};