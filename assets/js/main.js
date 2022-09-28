$(window).on('load', function() {
         
     if ($(window).scrollTop() > 80 ) {
         $('#header').addClass('header-shrink');
     }
     else {
         $('#header').removeClass('header-shrink');             
     }
}); 


$(document).ready(function() {
	
	/* ======= Fixed Header animation ======= */ 
        
    $(window).on('scroll', function() {
         
         if ($(window).scrollTop() > 100 ) {
             $('#header').addClass('header-shrink');
         }
         else {
             $('#header').removeClass('header-shrink');             
         }
         
         
    }); 
    
    
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});
    
    /* ===== Smooth scrolling ====== */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
		
		//Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('show')){
			$('.navbar-toggler').trigger('click');
		}
		
	});
	
	/* ====== test ===== */
	$('#navigation').on('show.bs.collapse', function () {
	   $('.header').addClass('header-has-bg');
	});
	$('#navigation').on('hide.bs.collapse', function () {
	   $('.header').removeClass('header-has-bg');
	});
    
	/* ======= Modal Data ========= */
    $(document).on('click', '.open-Modal', function(){
        let card = $(this)[0].querySelector('.card-body');
        let image = $(this)[0].querySelector('a > img').src;
        let name = card.querySelector('.mb-2').textContent;
        let job = card.querySelector('.mb-3 > .meta').textContent;
        let company = card.querySelector('.meta ~ .meta').textContent;
        
        let modal = $('#modal-speaker-1')[0];
        modal.querySelector('h2.name').innerText = name;
        modal.querySelector('h2.name ~ div.meta').innerText = job;
        modal.querySelector('div.meta ~ div.mb-2').innerText = company;
        modal.querySelector('img').src = image;
    });

	
	/* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("Nov 03, 2022").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown =  document.getElementById("countdown-box");

    if( Date.now() < target_date){
    
        var days_span = document.createElement("SPAN");
        days_span.className = 'days';
        countdown.appendChild(days_span);
        var hours_span = document.createElement("SPAN");
        hours_span.className = 'hours';
        countdown.appendChild(hours_span);
        var minutes_span = document.createElement("SPAN");
        minutes_span.className = 'minutes';
        countdown.appendChild(minutes_span);
        var secs_span = document.createElement("SPAN");
        secs_span.className = 'secs';
        countdown.appendChild(secs_span);

        // update the tag with id "countdown" every 1 second
        setInterval(function () {
        
            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
        
            // do some time calculations
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;
            
            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;
            
            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);
            
            // format countdown string + set tag value.
            days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit">Dias</span>';
            hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit">Hrs</span>';
            minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit">Min</span>';
            secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit">Segs</span>'; 
        
        }, 1000);

     }else{
        elements_ticket = Array.from(document.querySelectorAll('a')).filter(
            a => a.href.toLowerCase().includes('#tickets-section')
        );
        elements_ticket.forEach(a => a.classList = ['d-none'])
        ticket_section = document.getElementById('tickets-section')
        ticket_section.style.display = 'none'

        var text_span = document.createElement("h3");
        text_span.classList.add('text-center', 'm-5', 'text-secondary')
        text_span.textContent = 'Volte aqui no próximo ano. ;)'
        countdown.appendChild(text_span);
     }
        

});