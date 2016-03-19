var resume = {
    "Education":[
        {
            "Degree": "Bachelor of Engineering",
            "Acronym": "B.E.",
            "Start":[01,04,1997],
            "End":[01,04,2001],
            "Institution":"Kavikulguru Institute of Technoogy and Science, Ramtek,",
            "Institution Small":"KITS Ramtek",
            "Location":{
                "City": "Ramtek",
                "State": "Maahrashtra",
                "State-Small": "M.S.",
                "Country": "India"
            }
        },
        {
            "Degree": "Master of Science",
            "Acronym": "M.S.",
            "Start":[01,04,2002],
            "End":[01,04,2004],
            "Institution":"Rochester Institute of Technology",
            "Institution Small":"RIT",
            "Location":{
                "City": "Rochester",
                "State": "New York",
                "State-Small": "N.Y.",
                "Country": "U.S."
            }
        },
        {
            "Degree": "Doctor of Philosophy",
            "Acronym": "Ph.D.",
            "Start":[01,04,2004],
            "End":[15,12,2009],
            "Institution":"Rochester Institute of Technology",
            "Institution Small":"RIT",
            "Location":{
                "City": "Rochester",
                "State": "New York",
                "State-Small": "N.Y.",
                "Country": "U.S."
            }
        },
    ],

    "Jobs":{

    },

    "Papers":{

    }
};

var colorMaps = {
    'blueYellow':['#ffffcc','#c7e9b4','#7fcdbb','#41b6c4','#2c7fb8','#253494'],
    'redYellow':['#ffffb2','#fed976','#feb24c','#fd8d3c','#f03b20','#bd0026'],
    'grayGreen':['#f6eff7','#d0d1e6','#a6bddb','#67a9cf','#1c9099','#016c59'],
    'greens':['#f7fcf5','#e5f5e0','#c7e9c0','#a1d99b','#74c476','#41ab5d','#238b45','#006d2c','#00441b'],
    'grays':['#ffffff','#f0f0f0','#d9d9d9','#bdbdbd','#969696','#737373','#525252','#252525','#000000'],
    'blues':['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'],
    'oranges':['#fff5eb','#fee6ce','#fdd0a2','#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704'],
    'purples':['#fcfbfd','#efedf5','#dadaeb','#bcbddc','#9e9ac8','#807dba','#6a51a3','#54278f','#3f007d'],
    'reds':['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d']

};

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


