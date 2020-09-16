var projectID = window.location.hash;
projectID = projectID.replace("#", "");
fetch("https://projects.scratch.mit.edu/" + projectID).then(res => res.json()).then((data) => {
  var assets = [];
  var current;
  data.targets.forEach(function(item, index, array) {
   item.costumes.forEach(function(item, index, array) {
   current = "https://cdn.assets.scratch.mit.edu/internalapi/asset/" + item.assetId + "." + item.dataFormat + "/get/"
   assets.push(current);
    }); 
   });
  data.targets.forEach(function(item, index, array) {
   item.sounds.forEach(function(item, index, array) {
   current = "https://cdn.assets.scratch.mit.edu/internalapi/asset/" + item.assetId + "." + item.dataFormat + "/get/"
   assets.push(current);
  });
 });
  document.getElementById("assets_display").innerHTML = assets.join(" ");
});
