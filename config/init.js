initializeDatabase = () => {
    console.log('\n Enter your MySQL Password.\n Type: CREATE DATABASE ecommerce_db;\n Then Type: QUIT');
    const { spawn } = require('child_process');
    const child = spawn('mysql -u root -p', { shell: true, detached: true });

    child.stdout.on('data', (data) => {
        console.log(`child stdout:\n${data}`);
    });

    child.stderr.on('data', (data) => {
        //console.error(`child stderr:\n${data}`);
    });
    child.on('exit', function (code, signal) {
        console.log('\n Success!\n');

    });

}

initializeDatabase();