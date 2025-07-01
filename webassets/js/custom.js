/*
 function onlynumbers(e){
    if (e.keyCode>=48 && e.keyCode <= 57) {
        return ;
    }
    else{
        e.preventDefault();
    }
 }*/

 function onlycharacters(e){
    var key = e.keyCode;
    if (key >= 48 && key <= 57) {
        e.preventDefault();
    }
 }

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email)
}



$(document).ready(function(){

/*$('[name="mobile"]').on('keypress',function(e){

    var key = e.keyCode;
    if (e.keyCode>=48 && e.keyCode <= 57  && this.value.length <=9){
        return ;
    }else{
        e.preventDefault();
    }
});
*/

$('[name="mobile"]').on('keypress',function(e){

    var charCode = (e.which) ? e.which : e.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && this.value.length <=9)
       return false;
     return true;
});



$('[name="name"]').on('keypress',function(e){
    onlycharacters(e);
});



$("body").on("submit","#freetrial",function(e){
     	e.preventDefault();
        var trialformvalid = true ;
        
   if( $('[name ="mobile"]').val() == "" || $('[name ="mobile"]').val().length < 10 ){
        trialformvalid = false ;
       $('#merrormsg').html('Please enter valid mobile number').css('color','red');

    }else{
        trialformvalid = true ;
    }

    if ($("[name ='name']").val() == "") {

        trialformvalid = false ;
       $('#nerrormsg').html('Name is required').css('color','red');

    // }else  if( $('#trialservice').val() == "" ){
    //     trialformvalid = false ;
    //   $('#serrormsg').html('Please select a service').css('color','red');

    }
    else if(($("#trialemail").length > 0) ){
       
        if($('#trialemail').val() == "" ){
            trialformvalid = false ;
            $('#eerrormsg').html('Email is required').css('color','red');
        }else if(isEmail($("#trialemail").val()) != true){
            trialformvalid = false ;
            $('#eerrormsg').html('Please enter correct email address').css('color','red');
        }
    }
    else{
       var trialformvalid = true ;
    }

    if(trialformvalid ==true){
        var url = site_url+'/home/free_trial';
        var ds = $(this);
        var formData = new FormData(ds[0]);
        $.ajax({
        url:url,
        type:"POST",
        data:formData,
        dataType:"json",
        processData: false,
        contentType: false,
        beforeSend:function(){
           //alert('beforesend');
        },
        success: function(res){
                if(res.success==1){
                    ds[0].reset();
                    if(res.location =='free_trial'){
                        location.reload();
                    }else{
                        $("#onload").modal('hide');
                    }
                }
                alert(res.msg);
            }
        });
    }

});



$("body").on("submit","#contactForm",function(e){
    e.preventDefault();
    var formvalidate = true ;
    if ($("[name ='name']").val() == "") {
        formvalidate = false ;
       $('#cnerrormsg').html('Name is required').css('color','red');
    }else{
        $('#cnerrormsg').html('');
    }

    if($('#email').val() == "" ){
        formvalidate = false ;
        $('#ceerrormsg').html('Email is required').css('color','red');
    }else if(isEmail($("#email").val()) != true){
        formvalidate = false ;
        $('#ceerrormsg').html('Please enter correct email address').css('color','red');
    }
    else{
        $('#ceerrormsg').html('');
    }

    if ($("#subject").val() == "") {
        formvalidate = false ;
       $('#cserrormsg').html('Subject is required').css('color','red');
    }else{
        $('#cserrormsg').html('');
    }

    if($("#message").val() == "") {
        formvalidate = false ;
       $('#cmerrormsg').html('Message is required').css('color','red');
    }else{
        $('#cmerrormsg').html('');
    }

    if(formvalidate ==true){
        var url =  $(this).attr('action')
        var ds = $(this);
        var formData = new FormData(ds[0]);
        $.ajax({
        url:url,
        type:"POST",
        data:formData,
        dataType:"json",
        processData: false,
        contentType: false,
        beforeSend:function(){
           //alert('url=>'+url);
        },
        success: function(res){
                if(res.success==1){
                    ds[0].reset();
                    location.reload();
                }
                alert(res.msg);
            }
        });
    }

});



		/*$("body").on("submit","#worryproblemf",function(e){
        
        var ds = $(this);

         	e.preventDefault();
         	if($('#worryproblemf').parsley().isValid()){
         		
                var url = site_url+'/home/worryproblem';
                
                var formData = new FormData(ds[0]);
                $.ajax({
                    url:url,
                    type:"POST",
                    data:formData,
                    dataType:"json",
                    processData: false,
                    contentType: false,
                    beforeSend:function(){
                    },
                    success: function(res){
                    	console.log(res);
                    	if(res.success==1){
							ds[0].reset();
							location.reload();
                    	}
                        alert(res.msg);
                    }
                });
                
            }else{
                alert('Please fill Form correctly!');
                return false;
            }

    });



        $("body").on("submit","#userregister",function(e){
         	e.preventDefault();
         	 var ds = $(this);
         	if(ds.parsley().isValid()){
         		var url = ds.attr('action');
                var formData = new FormData($("#userregister")[0]);
                $.ajax({
                    url:url,
                    type:"POST",
                    data:formData,
                    dataType:"json",
                    processData: false,
                    contentType: false,
                    beforeSend:function(){
                       
                    },
                    success: function(res){
                    	
                    	if(res.success==1){
                    		ds[0].reset();
          							$("#loginform").show();
          							$("#registerform").hide();

                    	}
                        alert(res.msg);
                    }
                });
            }else{
                alert('Please fill Form correctly!');
                return false;
            }

        });

        $("body").on("submit","#userlogin",function(e){
         	e.preventDefault();
         	 var ds = $(this);
         	if(ds.parsley().isValid()){
         		var url = ds.attr('action');
                var formData = new FormData(ds[0]);
                $.ajax({
                    url:url,
                    type:"POST",
                    data:formData,
                    dataType:"json",
                    processData: false,
                    contentType: false,
                    beforeSend:function(){
                    },
                    success: function(res){
                    	alert(res.success);
                    	alert(res.msg);
                    	if(res.success==1){
                    		ds[0].reset();
                    		window.location.href = res.msg;
							$("#myModal1").modal('hide');
                    	}else{
                    		alert(res.msg);
                    	}
                    }
                });
            }else{
                alert('Please fill Form correctly!');
                return false;
            }

        });


        $(".viewmsg").click(function(){
            $("#viewmsgmodal").show();
            //$("#registerform").hide();
        });
*/
    


});
