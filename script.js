
var deposit;
var name;
var total;
var deposits=[];

$(".newDeposit").click(function() {
   deposit =$(".accountDeposit").val();
   deposit= parseInt(deposit);
   name =$(".accountName").val();
    $(".ledger").append("<p>" + name + "</p><p>" + "$" + deposit + "</p>");
    
   total=0;
   
    console.log(total);
    $(".Number of Transactions").text(total);
    
   deposits.push(deposit);
   console.log(deposits);
    $(".number").html("<p>Number of Transactions: "+ deposits.length +"</p>");
    
    deposits.forEach(function(price) {
    total= total + price;
    
     console.log(total);
    $(".total").html("<p>Total Amount Deposited: "+ total +"</p>");
});
});