document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'The Beathles - covers',
                start: '2023-11-15',
                end:'2023-11-15'
            },
            {
                title: 'Coldplay',
                start: '2023-11-18',
                end:'2023-11-20'
            }
        ]
    }); 

    calendar.render();
  });