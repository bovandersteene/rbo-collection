module.exports = {
    "globals": {
        "ts-jest": {
            "tsConfigFile": "src/tsconfig.spec.json"
        },
        "__TRANSFORM_HTML__": true
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|js)$",
    //"preset": "jest-preset-angular",
    "setupTestFrameworkScriptFile": "<rootDir>/src/setupJest.ts",
    "transform": {
        "^.+\\.(ts|html)$": "<rootDir>/node_modules/jest-preset-angular/preprocessor.js",
    },
    "transformIgnorePatterns": [
        "node_modules/(?!@ngrx)"
    ],
    "collectCoverageFrom": [
        "src/app/**/*.{ts}",
        "!src/app/environment/*.{ts}",
        "!src/app/language/*.{ts}",
        "!src/app/**/*.module.{ts}",
        "!src/app/**/*.state.{ts}",
        "!src/app/**/*.entity.{ts}"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "json"
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        "src/app/*.{js}"
    ],
    "testResultsProcessor": "jest-sonar-reporter",
    "moduleNameMapper": {
    }
};