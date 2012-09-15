/**
 * Copyright 2011 Kurtis L. Nusbaum
 *
 * This file is part of UDJ.
 *
 * UDJ is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * UDJ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with UDJ.  If not, see <http://www.gnu.org/licenses/>.
 */

function showPlayerDashBoard(){
  $("#login-page").hide();
  $("#player-dashboard").show();
}

$(document).ready(function(){

  function doLogin(){
    function loginSuccess(data){
      localStorage['ticket_hash'] = data['ticket_hash']
      $("#login-status").html("Logged in!");
      setTimeout(showPlayerDashBoard, 750);
    }
    function loginError(jqXHR, textStatus, error){
      $("#login-status").html("Login Failed!");
    }


    var enteredUsername = $("#username").val();
    var enteredPassword = $("#password").val();
    
    $("#login-status").html("Logging in...");
    $("#login-status").show();
    $.ajax({
      type : 'POST',
      url : "https://www.udjplayer.com/udj/0_6/auth", 
      data : { username : enteredUsername, password : enteredPassword},
      success : loginSuccess,
      error : loginError
    });
  }

  $("#loginbutton").click(doLogin)

});

