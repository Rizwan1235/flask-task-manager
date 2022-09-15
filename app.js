const app = require( "express" ) ( ) ;
const PORT = process.env.PORT || 1235;
app.get( "", (req, res) => {

res.send( "hey guys this is very intresting created by rizwan from it 3rd year");
});
app.listen (PORT, ( ) => {
console.log('app up at port ${PORT}');
});