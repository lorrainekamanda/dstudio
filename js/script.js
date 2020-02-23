$(document).ready(function(){
    $("#icon1").click(function(){
    $("#content").toggle()
    $("#icon1").toggle( )
  
 })
 $("#content").click(function(){
  $("#icon1").toggle()
  $("#content").toggle()
})

$("#icon2").click(function(){
   $("#icon2").toggle()
   $("#content2").toggle()
 })
 $("#content2").click(function(){
  $("#icon2").toggle()
  $("#content2").toggle()
})
 
 $("#icon3").click(function(){
  $("#icon3").toggle()
  $("#content3").toggle()
})
$("#content3").click(function(){
  $("#icon3").toggle()
  $("#content3").toggle()
})

  
})

document.getElementById("submit").onclick = function(){
  var name = ""
  var email = ""
  var comment = ""
  name= document.getElementById("name").value 

  email = document.getElementById("email").value
  
  comment = document.getElementById("message").value


  if( name == ""){
    alert("please key in your name")
    return false
  }
  if ( email == ""){
    alert("please key in your email")
    return false
  }
  if ( comment == ""){
    alert("please write your comment")
    return false
  }
  else{
    alert(" Hello " + name + " we have  recived your comment from your email account " +email+ " please stay in touch" )
    return true
  }
  
   
}