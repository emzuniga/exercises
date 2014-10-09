// Add your code here


// $('.filter-button').on('click', function () {
//   alert("Yup, it's a button.");
// });

$('.filter-button').on('click', function (){
	$('.' + this.id).toggle();
	$('#' + this.id).toggleClass('active');
	alertify.log(this.id.toUpperCase());
})


