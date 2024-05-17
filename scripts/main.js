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
            $.each(movies, (i, e)=>{
                let poster = e.Poster
                console.log("poster", poster)
            })
        })
    })
    

})



/* know that the response.totalResults will give you the total number of results from the search*/