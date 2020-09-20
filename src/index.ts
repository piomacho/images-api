import app from '@server';

// Start the server
const port = Number(5050);
app.listen(port, () => {
    console.info('Express server started on port: ' + port);
});
