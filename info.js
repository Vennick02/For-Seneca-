
    function validatePswd()
    {
        var check = false;
        var inputValue = document.signup.pswd.value;     // password value 
        var confirmValue = document.signup.con_pswd.value;
        if (inputValue.length != 6)
        {
            alert("Password must be 6 characters at length\n");
        //  messages ="<p> The password must contain 6 characters</p>";
        //  showErrors(messages);
            return false;
        } // if
            else if (!isNaN(inputValue[0]))
            {
            alert("Password must start with a charatcer\n");
            return false;
            }  //else if
        
        
        for (var i = 0; i < inputValue.length; i++)
      {
        
        if (inputValue[i] == inputValue[i].toUpperCase()) 
        {
            check = true;
        }  // if
      }  //for 

       if (!check)
       {
        alert("Password must have at least one uppercase character")
            return false;
       }  // if

       var test = false;
       for (var j = 0; j < inputValue.length; j++)
       {
            if (!isNaN(inputValue[j])){
                test = true;
            }

       } // for 
       if (!test)
       {
           alert("Password must contain at least one digit");
           return false;
       }
        
        if (inputValue != confirmValue)
        {
            alert("Passwords must be the same");
            return false;
        }

        var UserValue = document.signup.username.value;
        if (UserValue.length < 6)
        {
            alert("Username must be at least 6 characters at length");
            return false;
        }
        else if (!isNaN(UserValue[0]))
        {
            alert("Username must start with a charatcer\n");
            return false;
            } 
        else {
            alert("The form submited sussccesfully");
            return true;
        }

    } // End of function 

  /*  function validateUser()
    {
        var UserValue = document.signup.username.value;
        if (UserValue.length < 6)
        {
            alert("Username must be at least 6 characters at length");
            return false;
        }
        else if (!isNaN(UserValue[0]))
        {
            alert("Username must start with a charatcer\n");
            return false;
            } 
    }*/




    function validateForm()
    {
     //   clearErrors();
        return validatePswd();
    }
   /*function showErrors(messages)
    {
        document.querySelector('#errors').innerHTML = messages;
    }*/
