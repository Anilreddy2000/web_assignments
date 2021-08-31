function main() {
    let data = [
        {
          "name": "Virat",
          "statistics": {
            "matches": "210",
            "innings": "200",
            "notOut": "10",
            "battinghand": "Right-hand",
            "strike_rate": "67.89"
          }
        },
        {
          "name": "Dhoni",
          "statistics": {
            "matches": "210",
            "innings": "200",
            "notOut": "10",
            "battinghand": "Right-hand",
            "strike_rate": "49.9"
          }
        },
        {
          "name": "Sachin",
          "statistics": {
            "matches": "250",
            "innings": "240",
            "notOut": "12",
            "battinghand": "Right-hand",
            "strike_rate": "57.89"
          }
        }
      ];
    let formTable = "";

    formTable = `<table><tr><th>Name</th><th>Matches</th><th>Innings</th><th>NotOut</th><th>battinghand</th><th>strike_rate</th></tr>`;

    for(let i=0; i<data.length;i++) {
        formTable += `<tr><td>${data[i].name}</td><td>${data[i].statistics.matches}</td>
        <td>${data[i].statistics.innings}</td><td>${data[i].statistics.notOut}</td>
        <td>${data[i].statistics.battinghand}</td><td>${data[i].statistics.strike_rate}</td></tr>`
    }

    document.getElementById("table-container").innerHTML += formTable;

    let data1 = [
      {
        "name": "Virat",
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
        "name": "Dhoni",
        "statistics": {
          "Game":"ODI",
          "matches": "210",
          "innings": "200",
          "notOut": "10",
          "battinghand": "Right-hand",
          "strike_rate": "49.9"
        }
      },
      {
        "name": "Sachin",
        "statistics": {
          "Game":"ODI",
          "matches": "250",
          "innings": "240",
          "notOut": "12",
          "battinghand": "Right-hand",
          "strike_rate": "57.89"
        }
      }
    ];
    let formTable2="";
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
    document.getElementById("table-container1").innerHTML += formTable2;
  }
  let data2 = [
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
  let data21 = [
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
  let formTable3 ="";
  for(let i=0;i<data2.length;i++){
    
    formTable3=`<table>
                <caption></caption>
                <tr>
                <th></th>
                <th>Matches</th>
                <th>Innings</th>
                <th>NotOut</th>
                <th>battinghand</th>
                <th>strike_rate</th></tr>`;
    formTable3 += `<caption>${data2[i].name}</caption>`;
    for(let j=0;j<data21.length;j++){
      if(`${data2.id}`==`${data21.id}`){
        formTable3 +=`<tr><td>${data1[i].statistics.Game}</td>
      <td>${data21[i].statistics.matches}</td>
      <td>${data21[i].statistics.innings}</td>
      <td>${data21[i].statistics.notOut}</td>
      <td>${data21[i].statistics.battinghand}</td>
      <td>${data21[i].statistics.strike_rate}</td></tr>`;
      }
      
    }
    document.getElementById("table-container2").innerHTML += formTable3;
  }
  }