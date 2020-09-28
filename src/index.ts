import app from './Server';

// Start the server
const port = (process.env.PORT || 5050)
app.listen(port, () => {
    console.info('Express server started on port: ' + port);
});
