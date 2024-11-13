

type createprop = {
    name : string,
    email : string,
    description : string
}


export const UserTalk = async({description , name , email} : createprop) =>{

    let result = {}

    await fetch ("http://localhost:8000/talk/" , {
        method : "POST",
        body : JSON.stringify({
            description,
            name,
            email
        }),
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => {
        if(response.status === 200) {
        
            result = true
        }else{
         
            result = false
        }

      
    })

     if (result === true) {
      return true;
    } else {
      return false;
    }
}


type user = {
    fullname : string,
    username : string,
    email : string,
    password1 : string,
    password2 : string,
    Phone: string
}

export const CreateNewUser = async ( { fullname, username, email, password1, password2 , Phone } : user) => {
    let result = {};
  
    if (username || email || fullname || password1 !== "") {
      await fetch("https://panel.rexcode.ir/register", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          fullname : fullname,
          email: email,
          phonenumber:Phone,
          password1: password1,
          password2: password2,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        setTimeout(() => {
          if (response.ok === true) {
          
            window.location.assign("/register/login");
  
      
          }else{
            location.reload()
          }
        }, 500);
       
        return response.json();
      });
    }
  
    // if (result === true) {
    //   return true;
    // } else {
    //   return false;
    // }
  };


  type gettokem = {
    username : string,
    password1 : string
  }
  
  export const GetToken = async ({username , password1} : gettokem) => {
    let result = {};
  
    if (username && password1 ) {
      await fetch("https://panel.rexcode.ir/api/token", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.status === 200) {
          }
  
          return res.json();
        })
        .then((data) => {
          if (data.access) {
            localStorage.setItem("token", JSON.stringify(data.access));
            localStorage.setItem("loggedIn", "true");
            const checkPage = localStorage.getItem("addtocart");
            setTimeout(() => {
              if (checkPage) {
                window.location.assign("/shipping");
              } else {
                window.location.assign("/");
              }
            }, 500);
  
            result = true;
          } else {
            result = false;
          }
        });
    }
  
    if (result === true) {
      return true;
    } else {
      return false;
    }
  };