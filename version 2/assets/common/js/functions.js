



var startDate = new Date(1996, 0, 1);
var endDate   = new Date(2016, 0, 1);

function arrayToDays(d) {
    date = new Date(d[2], (d[1]-1), d[0], 0,0,0);
    return date;
}
function toD1D2(dt) {
    var v1 = arrayToDays(dt.Start) - startDate;
    var v2 = arrayToDays(dt.End)   - startDate;
    return [v1, v2];
}

function toAngle(date) {

    var v1    = arrayToDays(date) - startDate;
    var v2    = endDate - startDate;
    var angle = Math.PI * 2 * v1 / v2;

    return angle;
}

function combineColorMap( d, cMap, reverse=false, start=0){

    var cMapList = colorMaps[cMap];
    var l        = cMapList.length;

    if (reverse)
        cMapList = cMapList.reverse();

    for (var i = 0; i < d.length; i++)
        d[i].push(cMapList[ (i+start) % l ]);
    

    return d;
}

var data = resume.Education.map(toD1D2);
data = combineColorMap(data, 'blues', true, 3);

document.getElementById("text").innerHTML = data;


var vis = d3.select("#svg_donut");

var cScale    = d3.scale.linear()
                    .domain([0, endDate-startDate])
                    .range( [0, 2*Math.PI]);

var arc1 = d3.svg.arc() 
               .innerRadius(50) 
               .outerRadius(100) 
               .startAngle(function(d){
                    return cScale(d[0]);
                }) 
               .endAngle(function(d){
                    return cScale(d[1]);
                }); 

vis.selectAll("path") 
    .data(data) 
    .enter() 
    .append("path") 
    .attr("d", arc1) 
    .style("fill", function(d){return d[2];}) 
    .attr("transform", "translate(300,200)");


