
// Setup module
// ------------------------------

var FullCalendarBasic = function() {

    //
    // Setup module components
    //

    // Basic calendar
    var _componentFullCalendarBasic = function() {
        if (!$().fullCalendar) {
            console.warn('Warning - fullcalendar.min.js is not loaded.');
            return;
        }

        // Add demo events
        // ------------------------------

        // Default events
        var events = [
            {
                title: 'All Day Essssvent',
                start: '2014-11-01'
            },
            {
                title: 'Long Event',
                start: '2014-11-07',
                end: '2014-11-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-11-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-11-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2014-11-11',
                end: '2014-11-13'
            },
            {
                title: 'Meeting',
                start: '2014-11-12T10:30:00',
                end: '2014-11-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2014-11-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2014-11-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2014-11-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2014-11-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2014-11-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2014-11-28'
            }
        ];

        // Initialization
        // ------------------------------

        // Agenda view
        $('.fullcalendar-agenda').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2014-11-12',
            defaultView: 'agendaWeek',
            editable: true,
            businessHours: true,
            events: events,
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFullCalendarBasic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FullCalendarBasic.init();
});
