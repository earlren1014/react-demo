/**
 * Created by renqi on 2/6/2017.
 */

module.exports = {
    entry:'./main.js',
    output:{
        path:'/',
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