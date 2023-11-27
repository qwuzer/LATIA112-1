let myGraph = document.getElementById('myGraph');

// let trace1 ={};
// trace1.type ="bar";
// trace1.x =[];
// trace1.y =[];
// for( let i=0; i < animals_Taipei_Zoo.length; i++){
//     trace1.x[i] =animals_Taipei_Zoo[i]['name'];
//     trace1.y[i] =animals_Taipei_Zoo[i]['count'];
// }

// let trace2 ={};
// trace2.type ="bar";
// trace2.x =[];
// trace2.y =[];
// for( let i=0; i< animals_Taoyuan_Zoo.length; i++){
//     trace2.x[i] =animals_Taoyuan_Zoo[i]['name'];
//     trace2.y[i] =animals_Taoyuan_Zoo[i]['count'];
// }


let trace1 = {}
trace1.type ="bar";
trace1.x = []
trace1.y =[];

trace1.x[0] = "Taipei Zoo";
trace1.y[0] = animals_Taipei_Zoo[0].count;
trace1.x[1] = "Taoyuan Zoo";
trace1.y[1] = animals_Taoyuan_Zoo[0].count;

trace1.text = trace1.y
trace1.textfont ={
    size: 20,
    color: 'gold',

};
trace1.marker ={
    color: 'red',
};

let trace2 = {}
trace2.type ="bar";
trace2.x = []
trace2.y =[];

trace2.x[0] = "Taipei Zoo";
trace2.y[0] = animals_Taipei_Zoo[1].count;
trace2.x[1] = "Taoyuan Zoo";
trace2.y[1] = animals_Taoyuan_Zoo[1].count;

trace2.text = trace2.y
trace2.textfont ={
    size: 20,
    color: 'orange',

};
trace2.marker ={
    color: 'blue',
};


let trace3 = {}
trace3.type ="bar";
trace3.x = []
trace3.y = [];

trace3.x[0] = "Taipei Zoo";
trace3.y[0] = animals_Taipei_Zoo[2].count;
trace3.x[1] = "Taoyuan Zoo";
trace3.y[1] = animals_Taoyuan_Zoo[2].count;

trace3.text = trace3.y
trace3.textfont ={
    size: 20,
    color: 'white',

};
trace3.marker ={
    color: 'black',
};


let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout ={
    margin:{
        t:0
    },
    barmode: 'stack'
};

Plotly.newPlot(myGraph, data, layout);
