function getCities(){
  $.ajax({
    url: "http://localhost:9999/name",
    success: (data)=>{
      console.log(data);
    }
  });
}

$('#theForm').submit(getCities());
