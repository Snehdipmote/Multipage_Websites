// 12. Calculate rental cost
// A car rental company needs to calculate the cost of a rental based on the number of days rented and the type of car. They require a function that takes in the number of days rented and car type and returns the rental cost. The total cost would be the rental cost multiplied by the number of days rented. The rental costs are
// -Economy = Rs. 4000 /- per day.
// -Midsize = Rs. 10,000 /- per day.
// -Luxury = Rs. 20,000 /- per day.

function rent(n,type)
{
    let cost=0;
    switch(type)
    {
        case "Economy":
            cost=n*4000;
            console.log("The total rent of a Economy car for",n,"days is",cost,"$");
            break;
        case "Midsize":
            cost=n*10000;
            console.log("The total rent of a Midsize car for",n,"days is",cost,"$");
            break;
        case "Luxury":
            cost=n*20000;
            console.log("The total rent of a Luxury car for",n,"days is",cost,"$");
            break;
        default:
            console.log("We dont have",type,"cars available for rents.Please choose something else!");
            break;
    }
}
rent(9,"Midsize");
rent(5,"Economy");
rent(4,"Luxury");
rent(7,"Carvan");
