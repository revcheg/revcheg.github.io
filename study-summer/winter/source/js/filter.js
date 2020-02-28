(function () {
//   $('#filter').submit(function (e) {
//     e.preventDefault();
//     $.ajax({
//       url: "https://holidays.study.ua/trips/filter/",
//       type: "POST",
//       data: new FormData(this),
//       processData: false,
//       contentType: false
//     }).done(function (data) {
//       $(".loop").html(data);
//     });
//   });
// 
//   $(document).on("click", ".pagination", function (e) {
//     e.preventDefault();
//     var btn = $(this);
//     var next = btn.data('next');
// 
//     form = new FormData($('#filter')[0]);
//     btn.css('display', 'none');
//     btn.data('next', next + 1)
// 
//     $.ajax({
//       url: "https://holidays.study.ua/trips/filter/page-"+next+"/",
//       type: "POST",
//       data: form,
//       processData: false,
//       contentType: false
//     }).done(function (data) {
//       $(".loop").append(data);
//     });
// });
// 
// 
// 

	
	$(document).ready(function(){
		 $('#filter').submit();
	});
		
    $('#filter').submit(function (e) {
        e.preventDefault();
		$.ajax({
			url: "https://holidays.study.ua/trips/filter/",
			type: "POST",
			data: new FormData(this),
			processData: false,
			contentType: false
		}).done(function (data) {
			$(".loop").html(data);
		});
    });
	
	
	$(document).on("click", ".pagination", function (e) {
		e.preventDefault();
		var btn = $(this);
		var next = btn.data('next') + 1;
		console.log(next);
		
		form = new FormData($('#filter')[0]);
		btn.remove();
		
		$.ajax({
			url: "https://holidays.study.ua/trips/filter/page-"+next+"/",
			type: "POST",
			data: form,
			processData: false,
			contentType: false
		}).done(function (data) {
			$(".loop").append(data);
		});
	});
})();