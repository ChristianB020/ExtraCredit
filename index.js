const quoteText = document.getElementById("quoteText"); 
const quoteAuthor = document.getElementById("quoteAuthor")
const url = 'https://api.api-ninjas.com/v1/quotes?category='; 
const apikey = 'OkNEOkKX82avKszpBT2cVw==FGO3R5R2b3opoedm';
const quoteSection = document.getElementById("innnerSection1"); 

quoteAuthor.addEventListener("DOMContentLoaded", fetchQuote())

async function fetchQuote (){
    var category = 'education'
    
    try{
       
        

        const response = await fetch(url+category, {
            method: 'GET', 
            headers:{ 'X-Api-Key': apikey            
            },
            contentType: 'application/json',
        }); 

        if (!response.ok){
            throw new Error("Can find quotes api issue")
        }
        const data = await response.json(); 
       

        quoteText.innerHTML ="";
        quoteAuthor.innerHTML="";

        quoteText.textContent = " ' "+ data[0].quote + " ' "; 
        quoteAuthor.textContent += "By: " + data[0].author; 
          
        
       
    

    }catch(error){
        console.error(error)
    }



}

quoteSection.addEventListener("click", fetchQuote);
