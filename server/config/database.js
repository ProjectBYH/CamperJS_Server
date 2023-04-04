const mysql = require('mysql');
const dbInfo = {
    host: process.env.DATABASE_HOST,
    port: process.env.MYSQL_DEFAULT_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
};

module.exports = {
    init: function () {
        return mysql.createConnection(dbInfo);
    },
    
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('데이터베이스 연결 에러 : ' + err);
            else console.log('데이터베이스 연결 성공');
        });
    }
};