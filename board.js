function createBoard(paper) {
  paper.rect(0,0,400,400);
  var cnt = 0;
  for (var i = 0; i < 8; i++) {
    cnt ++;
    for (var j = 0; j < 8; j++) {
      cnt ++;
      var color = cnt % 2 ? "#001" : "white";
      var r = paper.rect(50 * i, 50 * j, 50, 50).attr({fill: color,"fill-opacity": 0});
      r.animate({"fill-opacity": 1}, 1000);
    }
  }
}