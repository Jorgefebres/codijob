/* ------------------------------------------------------------------------------
 *
 *  # Handsontable - Excel-like tables with extensive funtionality
 *
 *  Demo JS code for handsontable_basic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var HotBasic = function() {


    //
    // Setup module components
    //

    // Basic HOT examples
    var _componentHotBasic = function() {
        if (typeof Handsontable == 'undefined') {
            console.warn('Warning - handsontable.min.js is not loaded.');
            return;
        }


        // Basic configuration
        // ------------------------------

        // Add data for all examples
        var car_data = [{"pro_id":1,"pro_nom":"Alcantarillado de Socabaya","pro_ubi":"Arequipa - Socabaya","pro_cd":"1200000.90","pro_gg":"13.00","pro_uti":"19.00","pro_fechin":"2018-09-01","pro_fechfin":"2018-11-30","pro_tipo":"obra","cli_id":3,"created_at":"2018-09-21 19:38:34","updated_at":"2018-09-21 19:38:34"},{"pro_id":2,"pro_nom":"Alcantarillado de Socabaya","pro_ubi":"Arequipa - Socabaya","pro_cd":"1200000.90","pro_gg":"13.00","pro_uti":"19.00","pro_fechin":"2018-09-01","pro_fechfin":"2018-11-30","pro_tipo":"expediente","cli_id":3,"created_at":"2018-09-21 19:46:11","updated_at":"2018-09-21 19:46:11"},{"pro_id":3,"pro_nom":"Alcantarillado de Socabaya","pro_ubi":"Arequipa - Socabaya","pro_cd":"1200000.90","pro_gg":"13.00","pro_uti":"19.00","pro_fechin":"2018-09-01","pro_fechfin":"2018-11-30","pro_tipo":"supervision","cli_id":3,"created_at":"2018-09-21 19:48:08","updated_at":"2018-09-21 19:48:08"},{"pro_id":4,"pro_nom":"Pavimentaci\u00f3n Av. Parra","pro_ubi":"asdasd","pro_cd":"1200000.90","pro_gg":"15.00","pro_uti":"20.00","pro_fechin":"2018-09-08","pro_fechfin":"2018-09-30","pro_tipo":"obra","cli_id":3,"created_at":"2018-09-21 19:50:55","updated_at":"2018-09-21 19:50:55"},{"pro_id":5,"pro_nom":"Nuevo Proyecto","pro_ubi":"Arequipa","pro_cd":"12334566.00","pro_gg":"12.00","pro_uti":"10.00","pro_fechin":"2018-09-28","pro_fechfin":"2018-09-28","pro_tipo":"supervision","cli_id":3,"created_at":"2018-09-26 20:18:20","updated_at":"2018-09-26 20:18:20"},{"pro_id":6,"pro_nom":"Pavimentaci\u00f3n Av. Dolores","pro_ubi":"JLByR - Arequipa","pro_cd":"500000.00","pro_gg":"15.00","pro_uti":"20.00","pro_fechin":"2018-10-01","pro_fechfin":"2018-12-29","pro_tipo":"obra","cli_id":3,"created_at":"2018-10-01 16:00:30","updated_at":"2018-10-01 16:00:30"},{"pro_id":7,"pro_nom":": REFORMULACI\u00d3N,\u00a0ACTUALIZACION Y MEJORAMIENTO,\u00a0\u00a0DEL SERVICIO\u00a0\u00a0DE TRANSITO VEHICULAR\u00a0\u00a0Y PEATONAL\u00a0EN EL ANEXOS","pro_ubi":"URACA - CASTILLA - AREQUIPA","pro_cd":"733195.00","pro_gg":"10.00","pro_uti":"5.00","pro_fechin":"2018-10-01","pro_fechfin":"2019-01-26","pro_tipo":"obra","cli_id":2,"created_at":"2018-10-01 16:16:21","updated_at":"2018-10-01 16:16:21"},{"pro_id":8,"pro_nom":"Ejemplo de Nombre de Proyecto","pro_ubi":"Arequipa","pro_cd":"2000000.00","pro_gg":"10.00","pro_uti":"8.00","pro_fechin":"2018-12-31","pro_fechfin":"2018-12-31","pro_tipo":"obra","cli_id":3,"created_at":"2018-10-15 22:27:56","updated_at":"2018-10-15 22:27:56"}];

        // Define element
        var hot_basic = document.getElementById('hot_basic');

        // Initialize with options
        var hot_basic_init = new Handsontable(hot_basic, {
            data: car_data,
            stretchH: 'all'
        });

        $('.sidebar-control').on('click', function() {
            hot_basic_init.render();
        })



        // Column headers
        // ------------------------------

        // Define element
        var hot_col_headers = document.getElementById('hot_col_headers');

        // Initialize with options
        var hot_col_headers_init = new Handsontable(hot_col_headers, {
            data: car_data,
            colHeaders: true,
            stretchH: 'all'
        });



        // Row headers
        // ------------------------------

        // Define element
        var hot_row_headers = document.getElementById('hot_row_headers');

        // Initialize with options
        var hot_row_headers_init = new Handsontable(hot_row_headers, {
            data: car_data,
            colHeaders: true,
            rowHeaders: true,
            stretchH: 'all'
        });



        // Custom headers text
        // ------------------------------

        // Define element
        var hot_headers = document.getElementById('hot_headers');

        // Initialize with options
        var hot_headers_init = new Handsontable(hot_headers, {
            data: car_data,
            rowHeaders: true,
            colHeaders: ['Brand', 'Model', 'Year', 'Color', 'Price'],
            stretchH: 'all'
        });


        // Comments
        // ------------------------------

        // Define element
        var hot_comments = document.getElementById('hot_comments');

        // Init with options
        var hot_comments_init = new Handsontable(hot_comments, {
            data: car_data,
            rowHeaders: true,
            colHeaders: true,
            stretchH: 'all',
            comments: true,
            cell: [
                {row: 1, col: 1, comment: {value: 'The most nice looking muscle car'}},
                {row: 2, col: 2, comment: {value: 'Another comment'}}
            ]
        });



        // Custom borders
        // ------------------------------

        // Add data
        var hot_borders_data = Handsontable.helper.createSpreadsheetData(40, 10);

        // Define element
        var hot_borders = document.getElementById('hot_borders');

        // Init with options
        hot_borders_init = Handsontable(hot_borders, {
            data: hot_borders_data,
            rowHeaders: true,
            stretchH: 'all',
            fixedColumnsLeft: 2,
            fixedRowsTop: 2,
            colHeaders: true,
            customBorders: [
                {
                    range: {
                        from: {
                            row: 1,
                            col: 1
                        },
                        to: {
                            row: 3,
                            col: 4
                        }
                    },
                    top: {
                        width: 2,
                        color: '#5292F7'
                    },
                    left: {
                        width: 2,
                        color: 'orange'
                    },
                    bottom: {
                        width: 2,
                        color: 'red'
                    },
                    right: {
                        width: 2,
                        color: 'magenta'
                    }
                },
                {
                    row: 2,
                    col: 2,
                    left: {
                        width: 2,
                        color: 'red'
                    },
                    right: {
                        width: 1,
                        color: 'green'
                    }
                }
            ]
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentHotBasic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    HotBasic.init();
});
