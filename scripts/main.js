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
            /*console.log(response)*/ /*This console log is to check if resposne is successful*/
            let movies = response.Search
            let movieCount = response.totalResults
            $.each(movies, (i, e)=>{
                let poster = e.Poster
                let  movieName = e.Title
                let movieYear = e.Year
                /*console.log("movieName", movieName)
                console.log("movieYear", movieYear)
                console.log("poster", poster)*/ /* these console logs are to check if data is pulled from array successfully*/
                if(poster !== "N/A"){
                    $("#movieList").append(`<div class ="moviePoster">
                    <img src= "${e.Poster}" alt= "${movieName}" />
                    <div class="movieInfo">
                    <p class="movieName"> ${movieName}</p>
                    <p class="movieYear"> ${movieYear}</p>
                    </div>
                    </div>`)
                    $('#movieSearchNumber').val(movieCount)
                }
            })
        })}
        getPages(1)
    })
let pageNumber = 1
$('#fwdArrow').click(() => {
    $("#movieList").empty()
   pageNumber +=1;
   getPages(pageNumber)
   console.log(pageNumber)
})

$('#backArrow').click(() => {
    $("#movieList").empty()
   pageNumber -=1;
   getPages(pageNumber)
   console.log(pageNumber)
})

})




    

            

        
 




