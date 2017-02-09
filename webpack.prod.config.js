/**
 * Created by renqi on 2/9/2017.
 */

module.exports = {
    entry:'./app/main.js',
    output:{
        path:'./build/',
        filename:'index.js'
    },
    devServer:{
        inline:true,
        port:7777
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015', 'react']
                }
            }
        ]
    }
}