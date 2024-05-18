$(document).ready(()=>{


    $('#submit').click(()=>{
        $("#movieList").empty();
        let userInput = $('#search').val();
        console.log(userInput)
        getPages = (p) => {
        /*alert(userInput)*/
        $.ajax({
            url: `http://www.omdbapi.com/?apikey=ec5f8eb1&s=${userInput}&page=${p}`,
            async: false,   
        })

        .done((response)=>{
            console.log(response)
            let movies = response.Search
            let movieCount = response.totalResults
            $.each(movies, (i, e)=>{
                let poster = e.Poster
                console.log("poster", poster)
                if(poster !== "N/A"){
                    $("#movieList").append(`<img src= "${e.Poster}" alt= "movie poster" />`)
                    $('#movieSearchNumber').val(movieCount)
                }
            })
        })}
        getPages("1")
    })
})



    

            

        
 




