import app from "./app";
let PORT: string | null = null;

async function runServer() {

    PORT = '3001';

    app.listen(PORT);
}

runServer().then(() => {

    console.log('🚀 Server listening on port ' + PORT);
})