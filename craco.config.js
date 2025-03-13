const path = require('path');

module.exports = {
    webpack: {
        alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@constants': path.resolve(__dirname, 'src/constants/'),
        '@types': path.resolve(__dirname, 'src/types/types.ts'),
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@theme': path.resolve(__dirname, 'src/theme/'),
        },
    },
};