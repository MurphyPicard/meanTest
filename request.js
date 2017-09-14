function getCities(){
  $.ajax({
    url: "http://localhost:9999/cities",
    success: (data)=>{
      data.forEach((city)=>{
        $('select').append('<option>' + city + '</option>')
      });

      console.log(data);
    }
  });
}

$('#theForm').submit(function(e){
  e.preventDefault();
  getCities();
});
