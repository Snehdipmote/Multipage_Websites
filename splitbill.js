
// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of people sharing it. They require a function that takes in the cost of each dish and the number of people sharing it and returns an object that contains the total bill and the bill to be paid by each person in the group.
let p={Chicken:150,Fried_Rice:200,Mocktail:350,Tandoor:120}
console.log("");
function price(n,order)
{
    let total=Object.values(order);
    let totalcost=0;
    for(i=0;i<total.length;i++)
    {
        totalcost=totalcost+total[i];
    }
    let x=new Object();
    x.total_cost=totalcost;
    x.price_per_person=totalcost/n;
    console.log(x);
}

price(5,p);
