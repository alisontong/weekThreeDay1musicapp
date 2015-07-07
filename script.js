var $track = $("#track");
var $searchForm = $("#spotify-search");
var $results = $("#results")

$searchForm.on('submit', function(event){
    event.preventDefault();
    $.get(
      'https://api.spotify.com/v1/search?type=track&q=' + $track.val(),
      function(data) {
        var songName = data.tracks.items[0].artists[0].name;
        var album = data.tracks.items[0].album.name;
        var artist = data.tracks.items[0].name;
        console.log(songName);
        console.log(album); 
        console.log(artist);
    

})});

var dataNew = new dataX;

      function dataX(songName,album,artist){
        this.songName = songName;
        this.album = album;
        this.artist = artist;
      }
      
      dataX.all = []

      dataX.prototype.save = function (songName,ablum,artist){
        dataX.all.push(dataNew)
      }
      dataNew.save();

      //render
      dataX.prototype.render = function (songName,album,artist){
        var index = dataX.all.indexOf(dataNew);
        var $dataNew = $(data1Template(dataNew));
        $dataNew.attr('data-index',index);
        $results.append($dataNew);
      }
      dataNew.render();

      //reset the form
      $searchForm[0].reset();
      $('#track').focus();
  });

$results.on('clcik', '.data1', function(){
    $(this).addClass('done');
});




