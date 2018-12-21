var userInput1;
var userInput2;
var userInput3;

$("#sandwich").click(function(){
    userInput1=$("#input1").val();
    userInput2=$("#input2").val();
    userInput3=$("#input3").val();
    
    
    $("#message").html(sandwich(userInput1,userInput2,userInput3));
});

function sandwich( input1,input2,input3){
    return "Here is your" + input1 + "," + input2 + "," +
    "and" + input3 + ",";
 }