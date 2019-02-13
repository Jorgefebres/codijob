/* ------------------------------------------------------------------------------
 *
 *  # D3.js - basic tree layout
 *
 *  Demo of tree layout setup with .json data source
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3TreeBasic = function() {


    //
    // Setup module components
    //

    // Chart
    var _treeBasic = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-tree-basic'),
            height = 800;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 40},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom - 5;



            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append("svg");

            // Add SVG group
            var svg = container
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



            // Construct chart layout
            // ------------------------------

            // Tree
            var tree = d3.layout.tree()
                .size([height, width - 180]);

            // Diagonal projection
            var diagonal = d3.svg.diagonal()
                .projection(function(d) { return [d.y, d.x]; });



            // Load data
            // ------------------------------
            var miJson = {
 "name": "flare",
 "children": [
  {
   "name": "animate",
   "children": [
    {"name": "Pause", "size": 449},
    {"name": "FunctionSequence", "size": 5842},
    {
     "name": "interpolate",
     "children": [
      {"name": "ArrayInterpolator", "size": 1983},
      {"name": "ColorInterpolator", "size": 2047},
      {"name": "DateInterpolator", "size": 1375},
      {"name": "Interpolator", "size": 8746},
      {"name": "PointInterpolator", "size": 1675},
      {"name": "RectangleInterpolator", "size": 2042}
     ]
    },
    {"name": "ISchedulable", "size": 1041},
    {"name": "Tween", "size": 6006}
   ]
  },
  {
   "name": "data",
   "children": [
    {"name": "DataSchema", "size": 2165},
    {"name": "DataSet", "size": 586},
    {
     "name": "converters",
     "children": [
      {"name": "Converters", "size": 721},
      {"name": "DelimitedTextConverter", "size": 4294},
      {"name": "GraphMLConverter", "size": 9800},
      {"name": "IDataConverter", "size": 1314},
      {"name": "JSONConverter", "size": 2220}
     ]
    },
    {"name": "DataSource", "size": 3331},
    {"name": "DataUtil", "size": 3322}
   ]
  },
  {
   "name": "physics",
   "children": [
    {"name": "DragForce", "size": 1082},
    {"name": "GravityForce", "size": 1336},
    {"name": "Spring", "size": 2213},
    {"name": "SpringForce", "size": 1681}
   ]
  },
  {
   "name": "query",
   "children": [
    {"name": "If", "size": 2732},
    {"name": "Match", "size": 3748},
    {"name": "Maximum", "size": 843},
    {
     "name": "methods",
     "children": [
      {"name": "count", "size": 277},
      {"name": "distinct", "size": 292},
      {"name": "div", "size": 595},
      {"name": "eq", "size": 594},
      {"name": "fn", "size": 460},
      {"name": "xor", "size": 354}
     ]
    },
    {"name": "Query", "size": 13896},
    {"name": "Range", "size": 1594},
    {"name": "Xor", "size": 1101}
   ]
  },
  {
   "name": "scale",
   "children": [
    {"name": "IScaleMap", "size": 2105},
    {"name": "ScaleType", "size": 1821},
    {"name": "TimeScale", "size": 5833}
   ]
  }
 ]
};
            d3.json(miJson, function(error, json) {

                var nodes = tree.nodes(json),
                    links = tree.links(nodes);


                // Links
                // ------------------------------

                // Append link group
                var linkGroup = svg.append("g")
                    .attr("class", "d3-tree-link-group");

                // Append link path
                var link = linkGroup.selectAll(".d3-tree-link")
                    .data(links)
                    .enter()
                    .append("path")
                        .attr("class", "d3-tree-link")
                        .attr("d", diagonal)
                        .style("fill", "none")
                        .style("stroke", "#ddd")
                        .style("stroke-width", 1.5);


                // Nodes
                // ------------------------------

                // Append node group
                var nodeGroup = svg.append("g")
                    .attr("class", "d3-tree-node-group");

                // Append node
                var node = nodeGroup.selectAll(".d3-tree-node")
                    .data(nodes)
                    .enter()
                    .append("g")
                        .attr("class", "d3-tree-node")
                        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

                // Append node circles
                node.append("circle")
                    .attr("r", 4.5)
                    .attr("class", "d3-tree-circle")
                    .style("fill", "#fff")
                    .style("stroke", "#2196F3")
                    .style("stroke-width", 1.5);

                // Append node text
                node.append("text")
                    .attr("dx", function(d) { return d.children ? -12 : 12; })
                    .attr("dy", 4)
                    .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
                    .style("font-size", 12)
                    .text(function(d) { return d.name; });



                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', resize);

                // Call function on sidebar width change
                $('.sidebar-control').on('click', resize);


                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function resize() {

                    // Layout variables
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                    nodes = tree.nodes(json),
                    links = tree.links(nodes);

                    // Layout
                    // -------------------------

                    // Main svg width
                    container.attr("width", width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr("width", width + margin.left + margin.right);


                    // Tree size
                    tree.size([height, width - 180]);


                    // Chart elements
                    // -------------------------

                    // Link paths
                    svg.selectAll(".d3-tree-link").attr("d", diagonal)

                    // Node paths
                    svg.selectAll(".d3-tree-node").attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
                }
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _treeBasic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3TreeBasic.init();
});
