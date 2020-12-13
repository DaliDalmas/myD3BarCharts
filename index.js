const svg = d3.select('svg');
canvasColor = 'white'
svg.style("background-color", `${canvasColor}`);


const width = +svg.attr('width')
const height = +svg.attr('height')




const render = data => {
    const yValue = d=>d["Country"]
    const xValue = d=>d["Female Labor Force Participation Rate"]
    const margin = {top:20,bottom:20,right:40,left:200}
    const innerWidth = width-margin.left-margin.right;
    const innerHeight = height-margin.top-margin.bottom;


    const xScale = d3.scaleLinear()
                    .domain([0,d3.max(data,xValue)])
                    .range([0,innerWidth]);

    const yScale = d3.scaleBand()
                    .domain(data.map(yValue))
                    .range([0,innerHeight])
                    .padding(0.1);

    const g = svg.append('g')
                .attr('transform',`translate(${margin.left},${margin.top})`);

    g.append('g').call(d3.axisLeft(yScale));

    g.append('g').call(d3.axisBottom(xScale))
        .attr('transform',`translate(0,${innerHeight})`);;

    g.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('y',d=>yScale(yValue(d)))
    .attr('width',d=>xScale(xValue(d)))
    .attr('height',yScale.bandwidth())
};

d3.csv('https://raw.githubusercontent.com/DaliDalmas/myD3BarCharts/main/Women%20Entrepreneurship%20and%20Labor%20Force.csv').then(
    data=>{
        data.forEach(d => {
            d['Female Labor Force Participation Rate']=+d['Female Labor Force Participation Rate']
        });

        render(data)
        console.log(data)
    }
)

