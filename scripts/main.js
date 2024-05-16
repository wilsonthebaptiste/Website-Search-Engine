$(document).ready(()=>{

    $('#submit').click(()=>{
        let userInput = $('#search').val()
        alert(userInput)
    });
    $.ajax({
     url: 'http://www.omdbapi.com/?i=tt3896198&apikey=ec5f8eb1'   
    })

})