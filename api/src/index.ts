import app from "./app";

app.listen(app.get('port'), () => {
  console.log(`Api is running and listening on port ${app.get('port')}!`)
});