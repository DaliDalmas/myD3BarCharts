const svg = d3.select('svg');
canvasColor = 'white'
svg.style("background-color", `${canvasColor}`);


const width = +svg.attr('width')
const height = +svg.attr('height')

d3.csv('https://raw.githubusercontent.com/DaliDalmas/myD3BarCharts/main/Dataset3.csv').then(
    data=>{
        console.log(data)
    }
)

