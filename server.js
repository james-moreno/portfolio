var express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    app      = express();
app.use(express.static( path.join( root, './client' )));
app.use(express.static( path.join( root, './bower_components' )));
app.listen( 8000, function() {
  console.log( 'server running on port 8000' );
});
