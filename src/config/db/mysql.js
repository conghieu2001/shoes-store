const mysql = require('mysql');
const config = {
    db: {
        host: 'localhost',
        user: 'root',
        password: 'conghieu2001',
        database: 'nienluan',
    },
};
// config.connect( function(error) {
//     {
//         if (error) {
//             throw error;
//         }
//         else {
//             console.log('Mysql database is connected Successfully');
//         }
//     }
// });
module.exports = config;
