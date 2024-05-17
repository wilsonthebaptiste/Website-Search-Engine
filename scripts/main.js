$(document).ready(()=>{

    $('#submit').click(()=>{
        let userInput = $('#search').val();
        console.log(userInput)
        /*alert(userInput)*/
        $.ajax({
            url: `http://www.omdbapi.com/?apikey=ec5f8eb1&s=${userInput}`   
           })
           .done((response)=>{
            let movies = response.Search
            let movieCount = response.totalResults
            $.each(movies, (i, e)=>{
                let poster = e.Poster
                console.log("poster", poster)
                $("#movieList").append(`<img src= "${e.Poster}" alt= "movie poster" />`)
                $('#movieSearchNumber').val(movieCount)
            })
        })
    })
    

})

