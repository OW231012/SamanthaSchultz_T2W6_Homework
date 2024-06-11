
let marsTicketAmount = 0;

let marsTicketPrice = 100;

let saturnTicketAmount = 0;

let saturnTicketPrice = 200

function IncreaseMarsTickets()
{
    marsTicketAmount = parseInt(document.getElementById('ticketsMars').value);
    // console.log("Howdy");
    marsTicketAmount = marsTicketAmount + 1;
    document.getElementById('ticketsMars').value = marsTicketAmount;
}

function DecreaseMarsTickets()
{
    marsTicketAmount = parseInt(document.getElementById('ticketsMars').value);
    marsTicketAmount = marsTicketAmount - 1;
    if (marsTicketAmount < 0) 
    {
        marsTicketAmount = 0;   
    }
    document.getElementById('ticketsMars').value = marsTicketAmount;
}



function IncreaseSaturnTickets()
{
    saturnTicketAmount = parseInt(document.getElementById('ticketsSaturn').value);
    // console.log("Howdy");
    saturnTicketAmount = saturnTicketAmount + 1;
    document.getElementById('ticketsSaturn').value = saturnTicketAmount;
}

function DecreaseSaturnTickets()
{
    saturnTicketAmount = parseInt(document.getElementById('ticketsSaturn').value);
    saturnTicketAmount = saturnTicketAmount - 1;
    if (saturnTicketAmount < 0) 
    {
        saturnTicketAmount = 0;   
    }
    document.getElementById('ticketsSaturn').value = saturnTicketAmount;
}


function DisplayTotal()
{
    marsTicketAmount = document.getElementById('ticketsMars').value;
    document.getElementById('total').innerHTML = `R${marsTicketAmount * marsTicketPrice + saturnTicketAmount * saturnTicketPrice}`;
}

