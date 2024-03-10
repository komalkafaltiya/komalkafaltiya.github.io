var password = document.getElementById("leftText");
    function genPasswords(){
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_?";
      var password = "";
      var passwordLength = 16;
      for (var i=0;i<=passwordLength;i++){
        var randomNumbers = Math.floor(Math.random()*chars.length)
        password+= chars[randomNumbers];
      }
      document.getElementById("leftText").value = password;
    }
    function copyPassword(){
      var copytext=document.getElementById("leftText");
      copytext.select();
      copytext.setSelectionRange(0,999);
      document.execCommand("copy");
    }
