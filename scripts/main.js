$(document).ready(()=>{

    $('#submit').click(()=>{
        let userInput = $('#search').val();
        console.log(userInput)
        /*alert(userInput)*/
        $.ajax({
            url: `http://www.omdbapi.com/?apikey=ec5f8eb1&s=${userInput}`   
           })
           .done((response)=>{
            console.log("response", response)
        })
    })
    

})