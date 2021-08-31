function main(){
    document.getElementById('submit').addEventListener('click',function(){
        let f_name = document.getElementById('fname').value;
        let l_name = document.getElementById('lname').value;
        let pwsd = document.getElementById('pwd').value;

        localStorage.setItem('first Name',f_name);
        localStorage.setItem('last Name',l_name);
        localStorage.setItem('Password',pwsd);

        sessionStorage.setItem('first Name',f_name);
        sessionStorage.setItem('last Name',l_name);
        sessionStorage.setItem('password',pwsd);

        document.cookie = 'first name = '+f_name +', expires=' + new Date(2022,8,9).toUTCString();
        document.cookie = 'last name = '+l_name +', expires=' + new Date(2022,8,9).toUTCString();
        document.cookie = 'password = '+pwsd + ', expires=' + new Date(2022,8,9).toUTCString();
        
        
        return document.cookie;
    })
    console.log();
}