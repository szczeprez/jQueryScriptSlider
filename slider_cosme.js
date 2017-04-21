jQuery(document).ready(function() {
 var p1 = '0';
 var p2 = '0';
 var p3 = '0';
 var p4 = '0';
        var valueOfSlider = 0;
 var limitML = max_p_010_001_cosme;
 
 /*----------Slider COSME 010----------*/
 
 $("#slider_cosme").slider({
  animate: true,
  value: startValue_cosme,
  range: "max",
  min: 20000,
  max: max_suwak_cosme,
  step: 100,
  create: function(event, ui) {
   if( $("#p_010_007_1:checked").val() != 'S' ){
     
         $("#slider_cosme").slider({ disabled: true });
    }else{
         $("#slider_cosme").slider({ disabled: false });
   }
   if( flaga_zapamietania_cosme != 'S' ){
    $("#slider_cosme").slider({ value: parseInt(max_suwak_cosme) });
    $("#sValue_cosme").text(((parseInt(max_suwak_cosme)).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
    $("#p_010_001_1").val( parseInt(max_suwak_cosme) );
   }else{
    $("#slider_cosme").slider({ value: parseInt(max_suwak_cosme) });
    $("#sValue_cosme").text(((parseInt(max_suwak_cosme)).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
    $("#p_010_001_1").val(parseInt(max_p_010_001_cosme));
     }
     
   if(flag_suwak_cosme != 'S'){
     p4 = $("#p_010_001_1").val();
   }else{
     p4 = '0';
   }
   if(flag_suwak1 != 'S'){
    p1 = $("#p_010_001").val();
   }else{
    p1 = '0';
   }
   if(flag_suwak2 != 'S'){
    p2 = $("#p_010_002").val();
   }else{
    p2 = '0';
   }
   if(flag_suwak3 != 'S'){
    p3 = $("#p_010_003").val();
   }else{
   p3 = '0';
   }
   $("#p_010_043").attr('checked', true);
   $("#p_010_043").attr("disabled", true);
   $("#p_010_044").attr('checked', true);
  if(parseInt($("#p_010_001_1").val()) <= parseInt($("#p_010_006_limit").val())){
      $("#p_010_044").attr('checked', false);
      $("#p_010_001_2").val('N');
      $(".kwotyCosme").hide();
  } else {
      $("#p_010_044").attr('checked', true);
      $("#p_010_001_2").val('S');
      $(".kwotyCosme").show();
      $(".kwotaWnioskowanaCosme").text(getValue('p_010_001_1'));
      $(".kwotaMiesiecznejRedukcji").text(parseInt(( parseInt($("#p_010_001_1").val()) - parseInt($("#p_010_006_limit").val())) / 9));
      $(".kwotaRedukcji").text(parseInt($("#p_010_006_limit").val()) + parseInt(startValue_cosme));
  }
 
 
    $("#p_010_001_1").val(parseInt(max_p_010_001_cosme));
    setSumaAndToUse(max_suwak_cosme, limitML);
 
   if( flaga_zapamietania_1 != 'S' ){
    $("#slider_cosme a").append("<div id=sValue_cosme >"+((startValue_cosme.toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "))+"</div>");
   }else{
    $("#slider_cosme a").append("<div id=sValue_cosme >"+((_startValue_cosme_.toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "))+"</div>");
   }
  },
  slide: function(event, ui) {
                       
    if( parseInt(ui.value) >= parseInt(startValue_cosme) ){
     $("#p_010_001_1").val( parseInt(ui.value) - parseInt(startValue_cosme) );
     valueOfSlider = parseInt(ui.value);
     }else{
     $("#p_010_001_1").val( 0 );
                                        return false;
    }
    $("#sValue_cosme").text(((ui.value).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
   
   if(flag_suwak_cosme != 'S'){
    p4 = $("#p_010_001_1").val();
   }else{
    p4 = '0';
   }
   if(flag_suwak1 != 'S'){
    p1 = $("#p_010_001").val();
   }else{
    p1 = '0';
   }
   if(flag_suwak2 != 'S'){
    p2 = $("#p_010_002").val();
   }else{
    p2 = '0';
   }
   if(flag_suwak3 != 'S'){
    p3 = $("#p_010_003").val();
   }else{
    p3 = '0';
   }
if(js_promo_variable == 'S' && $('#p_010_040').val() == 'S'){
 if(parseInt(ui.value) >= parseInt(wysokosc_startu_promocji)){
 
 
  var optionsArray = document.getElementById('p_010_019').options;
  optionsArray.length = 0;
   
  var myValue = new Array("0");
  var myName = new Array("0%");
  myNewOption = new Option( myName, myValue );
  myNewOption.id = "p_010_019_option_0";
  optionsArray[0] = myNewOption;
 }else{
 
  var optionsArray = document.getElementById('p_010_019').options;
  optionsArray.length = 0;
   
  var myValue = new Array("3,5");
  var myName = new Array("3,5%");
  myNewOption = new Option( myName, myValue );
  myNewOption.id = "p_010_019_option_1";
  optionsArray[0] = myNewOption;
 }
}
 
   $("#p_010_043").attr('checked', true);
   $("#p_010_043").attr("disabled", true);
   $("#p_010_044").attr('checked', true);
   if(parseInt( valueOfSlider ) > (parseInt( $("#p_010_006_limit" ).val()) + startValue_cosme )){
    $(".kwotyCosme").show();
    $("#p_010_044").attr('checked', true);
    $("#p_010_001_2").val('S');
           $("#p_010_001_1_limit").val( valueOfSlider );
    $(".kwotaWnioskowanaCosme").text( valueOfSlider );
    $(".kwotaMiesiecznejRedukcji").text(parseInt(( parseInt( valueOfSlider ) - parseInt(startValue_cosme) - parseInt($("#p_010_006_limit").val())) / 9));
    $(".kwotaRedukcji").text(parseInt( $("#p_010_006_limit" ).val()) + startValue_cosme );
   
   }else{
    $(".kwotyCosme").hide();
    $(".kwotaWnioskowanaCosme").text("");
    $(".kwotaMiesiecznejRedukcji").text("");
    $(".kwotaRedukcji").text("");
    $("#p_010_044").attr('checked', false);
    $("#p_010_001_2").val('N');
   }
 
        setSumaAndToUse(parseInt(p4), limitML);
  }
 });
 
  $("#p_010_007_1").change(function() {
   var p1 = '0';
   var p2 = '0';
   var p3 = '0';
   var p4 = '0';
 
  if(flag_suwak_cosme != 'S'){
    p4 = $("#p_010_001_1").val();
  }else{
    p4 = $("#p_010_001_1").val();
   }
  if(flag_suwak1 != 'S'){
   p1 = $("#p_010_001").val();
  }else{
   p1 = '0';
  }
  if(flag_suwak2 != 'S'){
   p2 = $("#p_010_002").val();
  }else{
   p2 = '0';
  }
  if(flag_suwak3 != 'S'){
   p3 = $("#p_010_003").val();
  }else{
   p3 = '0';
  }
                $("#p_010_043").attr('checked', true);
                $("#p_010_043").attr("disabled", true);
                $("#p_010_044").attr('checked', true);
 
    $("#slider_cosme").slider({ value: parseInt(max_suwak_cosme) });
    $("#sValue_cosme").text( ((parseInt(max_suwak_cosme)).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
    $("#p_010_001_1").val( parseInt(max_suwak_cosme) );
   $(".kwotaWnioskowanaCosme").text(getValue('p_010_001_1'));
   $(".kwotaMiesiecznejRedukcji").text(parseInt(( parseInt($("#p_010_001_1").val()) - parseInt($("#p_010_006_limit").val()) ) / 9));
   $(".kwotaRedukcji").text(parseInt($("#p_010_006_limit").val()) + parseInt(startValue_cosme) );
  if( $("#p_010_007_1:checked").val() != 'S' ){
   $("#p_010_001_1").val(parseInt(max_suwak_cosme));
   $("#slider_cosme").slider({ value: max_suwak_cosme });
   $("#sValue_cosme").text( ((parseInt(max_suwak_cosme)).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
 
   setSumaAndToUse(parseInt(p4), limitML);
  }
 
  if( $("#p_010_007_1:checked").val() == 'S' ){
      if( !startValue_cosme > 0){
       $("#p_010_001_1").val(parseInt(max_suwak_cosme));
       setSumaAndToUse(max_suwak_cosme, limitML);
   }else{
    if(pwCosme == '1'){
     var limitML1 = max_p_010_001_cosme;
    $("#p_010_001_1").val(limitML1);
                 
                setSumaAndToUse(max_p_010_001, limitML1);
   
    }else{
    $("#p_010_001_1").val(parseInt(max_p_010_001_cosme));
    setSumaAndToUse(max_p_010_001_cosme, limitML);
if((parseInt(startValue_cosme) + parseInt($("#p_010_001_1").val())) < parseInt($("#p_010_006_limit").val())){
    $(".kwotyCosme").hide();
}else{
    $(".kwotyCosme").show();
}
    }
   }
 
   $("#p_010_001").val('0');
   $("#p_010_002").val('0');
   $("#p_010_003").val('0');
   $("#slider1").slider({ value: startValue1 });
   $("#slider2").slider({ value: startValue2 });
   $("#slider3").slider({ value: startValue3 });
   $("#sValue").text( (startValue1.toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
   $("#sValue2").text( (startValue2.toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
   $("#sValue3").text( (startValue3.toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
  }
 });
 
 $("#p_010_001_1").change(function() {
  if(!isNaN(parseInt($(this).val()))) {
   var inputValue = parseInt($(this).val());
   $("#slider_cosme").slider({ value: parseInt(inputValue) + parseInt(startValue_cosme) });
   $("#p_010_001_1").val( inputValue );
   $("#sValue_cosme").text( ((parseInt(inputValue) + parseInt(startValue_cosme)).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
   
   if(parseInt(max_p_010_001_cosme) < inputValue) {
    $("#p_010_001_1").val( max_p_010_001_cosme );
    $("#slider_cosme").slider({ value: max_suwak_cosme });
    $("#sValue_cosme").text((max_suwak_cosme.toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
   }
   if(parseInt(min_p_010_001_cosme) > inputValue){
    $("#p_010_001_1").val( min_p_010_001_cosme );
    $("#slider_cosme").slider({ value: startValue_cosme });
    $("#sValue_cosme").text((startValue_cosme.toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
   }
 
  } else {
   var value = $( "#slider_cosme" ).slider( "option", "value" );
   $("#p_010_001_1").val( value );
   $("#sValue_cosme").text((value.toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
  }
 
   $("#p_010_043").attr('checked', true);
    $("#p_010_043").attr("disabled", true);
   if(parseInt($("#p_010_001_1").val()) > parseInt( $("#p_010_006_limit" ).val())){
 
    $(".kwotyCosme").show();
    $("#p_010_044").attr('checked', true);
    $("#p_010_001_2").val('S');
       $("#p_010_001_1_limit").val( parseInt($("#p_010_001_1").val()) + parseInt(startValue_cosme) );
    $(".kwotaWnioskowanaCosme").text( parseInt($("#p_010_001_1").val()) + parseInt(startValue_cosme) );
    $(".kwotaMiesiecznejRedukcji").text(parseInt(( parseInt( parseInt($("#p_010_001_1").val()) + parseInt(startValue_cosme) ) - parseInt(startValue_cosme) - parseInt($("#p_010_006_limit").val())) / 9));
    $(".kwotaRedukcji").text(parseInt($("#p_010_006_limit").val()) + parseInt(startValue_cosme) );
   
   }else{
    $(".kwotyCosme").hide();
    $(".kwotaWnioskowanaCosme").text("");
    $(".kwotaMiesiecznejRedukcji").text("");
    $(".kwotaRedukcji").text("");
    $("#p_010_044").attr('checked', false);
    $("#p_010_001_2").val('N');
   }
     setSumaAndToUse($("#p_010_001_1").val(), limitML);
 
 });
 
  $("#p_010_044").change(function() {
 
  var inputValue = parseInt($("#p_010_006_limit").val()) ;
 
 
   if($("#p_010_044").val() == 'S'){
    if( parseInt($("#p_010_006_limitML").val()) >= parseInt( max_suwak_cosme ) ){
       $("#p_010_001_1").val( parseInt( max_suwak_cosme ));
    }else{
       $("#p_010_001_1").val( parseInt($("#p_010_006_limitML").val()));
    }
    $("#slider_cosme").slider({ value: parseInt(max_suwak_cosme) });
    $("#sValue_cosme").text( ((parseInt(max_suwak_cosme)).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
   
    $(".kwotaWnioskowanaCosme").text( parseInt(max_suwak_cosme) );
    $(".kwotaMiesiecznejRedukcji").text(parseInt(( parseInt(max_suwak_cosme) - parseInt($("#p_010_006_limit").val())) / 9));
                                $(".kwotaRedukcji").text(parseInt($("#p_010_006_limit").val()) + parseInt(startValue_cosme) );
   
    setSumaAndToUse(max_suwak_cosme, limitML);
   
   }
 
   if(getValue('p_010_044') == '0' ){
                                if( parseInt($("#p_010_006_limitML").val()) >= parseInt( max_suwak_cosme ) ){
   
       $("#p_010_001_1").val( parseInt( max_suwak_cosme ));
    }else{
   
       $("#p_010_001_1").val( parseInt($("#p_010_006_limitML").val()));
    }
    if( parseInt($("#p_010_006_limit").val()) >= parseInt( max_suwak_cosme ) ){
   
        $("#sValue_cosme").text( ((parseInt( max_suwak_cosme )).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
     $(".kwotaWnioskowanaCosme").text(getValue('p_010_001_1'));
     $(".kwotaMiesiecznejRedukcji").text(parseInt(( parseInt($("#p_010_001_1").val()) - parseInt( max_suwak_cosme )) / 9));
     $(".kwotaRedukcji").text(parseInt(max_suwak_cosme));
   
    }else{
   
     $("#sValue_cosme").text( ((parseInt($("#p_010_006_limit").val())).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
     $(".kwotaWnioskowanaCosme").text(getValue('p_010_001_1'));
           $(".kwotaMiesiecznejRedukcji").text(parseInt(( parseInt($("#p_010_001_1").val()) - parseInt($("#p_010_006_limit").val())) / 9));
     $(".kwotaRedukcji").text(parseInt($("#p_010_006_limit").val()) + parseInt(startValue_cosme) );
                                     if( pwCosme == '0' ){
                                 $("#p_010_001_1").val( parseInt($('#p_010_006_limit').val() ));
                                    }else{
                                 $("#p_010_001_1").val( parseInt($('#p_010_006_limit').val() ));
                                    }
    }
                               if( pwCosme == '0' ){
    $("#slider_cosme").slider({ value: parseInt($("#p_010_006_limit").val()) + parseInt(startValue_cosme) });
                               }else{
    $("#slider_cosme").slider({ value: parseInt(inputValue) });
                               }
 
    setSumaAndToUse(inputValue, limitML);
   }
  });
       
         /* ukrywa znaczek walidacji */
        $("#ok_p_010_001_1").hide();
         $("#p_010_001_1").keyup(function(e) {
          if(e.keyCode == 13) {
           $("#p_010_001_1").change();
           $("#p_010_001").change();
           $("#p_010_002").change();
           $("#p_010_003").change();
           $("#p_010_004").change();
          }
         });
 
    /*FUNKCJA PRZYPISUJE WARTOSCI DO ZMIENNYCH SUMA ORAZ DO WYKORZYSTANIA*/
 function setSumaAndToUse(var1, var2){
  $("#p_010_004").val(parseInt(var1));
  $("#suma").text( (($("#p_010_004").val()).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + " PLN" );
  $("#p_010_005").val( parseInt( var2 ) - parseInt($("#p_010_004").val()) );
  if( parseInt($("#p_010_005").val()) < 0 ){
   $("#do_wykorzystania").text( "0 PLN" );
  }else{
   $("#do_wykorzystania").text( ((parseInt( var2 ) - parseInt($("#p_010_004").val())).toString()).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + " PLN" );
 
  }
          if( pwCosme == '1'){
            $("#p_010_044").attr('checked', false);
            $("#p_010_044").attr("disabled", true);
            $("#p_010_001_2").val('N');
            $(".kwotyCosme").hide();
            $("#fieldarea_p_010_044").html("Drogi kliencie przy podwyższeniu nie będziesz miał redukcji!");
           }
      }
 
	