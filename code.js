$(document).ready(function(){
     var $radios =  $('input[type="radio"]');

     $radios.change(function(){
          var $filtered = $radios.filter(':checked')

          console.log($filtered.val());
     });
      $("button").on("click", submit) ;
});


function submit(event) {
        event.preventDefault();
         let abbreviation = "";
         let rank= $("input[name=rank]:checked").data("abbreviation");


         let colorSelect = $("input[name=rank]:checked").data("color");


         let firstName= $("#firstName").val();
         let lastName= $("#lastName").val();

         // let fullName= $("firstName" + "lastName");
         // let checkedRadio= $("input[name=rank]:checked");


          // let colorSelect = position.data("color");


      $("#output").text(`Salute ${rank} ${abbreviation}, ${firstName}  ${lastName}`).data("abbreviation") ;

      $("#output").css ("color", colorSelect);
};


//display greeting with rank+ first and last name


      

