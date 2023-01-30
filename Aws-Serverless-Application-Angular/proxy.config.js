const PROXY_CONFIG =[
    {
        context:[
            '/api',
        ],
        target: "https://ojviia7zik.execute-api.us-east-1.amazonaws.com/Prod/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {"^/api":""}
    }

];

module.exports = PROXY_CONFIG;