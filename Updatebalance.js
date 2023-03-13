// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an object with a keys name and balance. Write functions using object methods to update a customer's account balance based on a deposit or withdrawal.
const detail={Rachel:500,Ross:200,Joey:700,Monica:1100,Chandler:2000,Phoebe:100};
function updatebalance(user,indicator,cash,data)
{
    // Here user is for userame whose account details you want to update
    // indicator is whether its deposit/withdrwal
    // cash is how much you want to deposit/withdraw
    // data is the detail object containing names and balance
    if(indicator=="deposit")
    {
        data[user]=data[user]+cash;
        console.log(cash,"$ credited to",user,"'s account");
    }
    else if(indicator=="withdrawal")
    {
        data[user]=data[user]-cash;
        console.log(cash,"$ debited from",user,"'s account");
    }
    else
    {
        console.log("Please enter a valid indicator:deposit/withdrawal")
    }
    console.log(detail);
}
updatebalance('Joey',"deposit",500,detail);
updatebalance('Monica',"withdrawal",300,detail);
updatebalance('Monica',"awal",300,detail);
