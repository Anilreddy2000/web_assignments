
    

//console.log(JSON.stringify(data1));
function main(){
    var json1 = [
        {
          "id":"1",
          "name":"anil"
        },
        {
          "id":"2",
          "name":"sadil"
        },
        {
          "id":"3",
          "name":"abin"
        }
    ];
var json2 = [
        {
          "id":"1",
          "statistics": {
            "Game":"ODI",
            "matches": "210",
            "innings": "200",
            "notOut": "10",
            "battinghand": "Right-hand",
            "strike_rate": "67.89"
          }
        },
        {
          "id":"2",
          "statistics": {
            "Game":"ODI",
            "matches": "210",
            "innings": "200",
            "notOut": "10",
            "battinghand": "Right-hand",
            "strike_rate": "67.89"
          }
        },
        {
          "id":"3",
          "statistics": {
            "Game":"ODI",
            "matches": "210",
            "innings": "200",
            "notOut": "10",
            "battinghand": "Right-hand",
            "strike_rate": "67.89"
          }
        }
     ];
function joinObjects() {
  var idMap = {};

  for(var i = 0; i < arguments.length; i++) {

    for(var j = 0; j < arguments[i].length; j++) {
      var currentID = arguments[i][j]['id'];
        if(!idMap[currentID]) {
          idMap[currentID] = {};
        }

    for(key in arguments[i][j]) {
      idMap[currentID][key] = arguments[i][j][key];
    }
  }
}


var newArray = [];
for(property in idMap) {
  newArray.push(idMap[property]);
}
return newArray;
}

var data1 = joinObjects(json1, json2);


    let formTable2="";
    //console.log(JSON.stringify(data1));
  for(let i=0;i<data1.length;i++){
    
    formTable2=`<table>
                <caption></caption>
                <tr>
                
                <th></th>
                <th>Matches</th>
                <th>Innings</th>
                <th>NotOut</th>
                <th>battinghand</th>
                <th>strike_rate</th></tr>`;
    
    formTable2 += `<caption>${data1[i].name}</caption>`;
    for(let j=0;j<data1.length;j++){
      formTable2 +=`<tr><td>${data1[i].statistics.Game}</td>
                    <td>${data1[i].statistics.matches}</td>
                    <td>${data1[i].statistics.innings}</td>
                    <td>${data1[i].statistics.notOut}</td>
                    <td>${data1[i].statistics.battinghand}</td>
                    <td>${data1[i].statistics.strike_rate}</td></tr>`;
    }
    document.getElementById("table-container").innerHTML += formTable2;
  }
}
