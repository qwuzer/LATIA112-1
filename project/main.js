d3.csv("https://raw.githubusercontent.com/qwuzer/LATIA112-1/main/project/faraway1.csv").then(
    res => {
        console.log(res);
        drawPieChart(res);
    }
);

function drawPieChart(res) {
    let myGraph = document.getElementById('PieChart');

    let maleCount = 0;
    let femaleCount = 0;
    for (let i = 0; i < res.length; i++) {
      maleCount += parseInt(res[i]["男學生數"]);
      femaleCount += parseInt(res[i]["女學生數"]);
    //   console.log(maleCount);
    }

    let data = [{
        type: "pie",
        title: "gender",
        labels: ["Male", "Female"],
        values: [maleCount, femaleCount],
        domain: {
            row: 0,
            column: 0
        }
    }];

    let layout = {
        title: 'Gender Distribution on faraway schools',
        margin: {
            t: 40,
            l: 0
        },
        grid: {
            rows: 2,
            columns: 2
        }
    };

    Plotly.newPlot(myGraph, data, layout);
}


// function drawBarChart (res){
//     let myGraph = document.getElementById('BarChart');

//     let count1 = 0;
//     let count2 = 0;

//     for (let i = 0; i < res.length; i++) {
//         if( res[i]["Age"] < 50){
//             count1++;
//         } else {
//             count2++;
//         }
//     }


//     let data =[];
//     data =[{
//         type: "bar",
//         x: ["Age < 50", "Age >= 50"],
//         y: [count1, count2],
//         text: [count1, count2],
//         textfont: {
//             size: 15,
//             color: 'white',
//         },
//         marker: {
//             color: ['orange', 'blue']
//         },
//         domain: {
//             row: 0,
//             column: 1
//         }
//     }]

//     let layout ={
//         margin:{
//             t:0,
//             l:30
//         }
//     };

//     Plotly.newPlot(myGraph, data, layout);

// }