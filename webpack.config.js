const path = require( 'path' );

module.exports = {
    entry: './app/src/main.ts',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, './app/public' ),
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
