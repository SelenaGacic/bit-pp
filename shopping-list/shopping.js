(function () {
    function Product(name, price, exDate) {
        this.id = (function () {
            return Math.floor(Math.random() * (99999 - 10000) + 10000);
        }());
        this.name = name;
        this.price = price;
        this.date = new Date(exDate);
        this.getInfo = function () {
            var firstLetter = name.charAt(0);
            var secondLetter = name.charAt(1);
            var result = firstLetter + secondLetter;
            return result.toUpperCase() + this.id + ", " + this.name + ", " + price.toFixed(3);
        }
    }
    // this.getData=function(){
    //     var output="";
    //     var myData = this.date.getFullYear();
    //     return output;
    // }



    function ShoppingBag() {
        this.list = [];
        this.addProduct = function (product) {
            this.list.push(product);
        }
        this.averageProdPrice = function () {

            var averagePrice = this.calculateTotalPrice() / this.list.length;
            return averagePrice.toFixed(3);
        }
        this.getMostExpensive = function () {
            return this.list.sort().pop();

        }
        this.calculateTotalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                var element = this.list[i];
                sum += element.price;
            }
            return sum;
        }
    }
    // function PaymentCard() {
    //     this.account_balance=account_balance;
    //     this.status=status;
    //     this.validUntilDate= function (date){
    //         return this.date - 
    //     }
        
        
    
    



    var banana = new Product("Banana", 10.12389, "12 Feb 2018");
    var kruska = new Product("kruska", 150.12389, "12 Feb 2018");
    var meso = new Product("govedina", 500.88123, "05 jan 2020");

    var sb1 = new ShoppingBag();

    console.log(sb1.list);

    sb1.addProduct(banana);
    sb1.addProduct(kruska);
    sb1.addProduct(meso);
    sb1.averageProdPrice();
    sb1.calculateTotalPrice();

    // console.log(Math.floor(Math.random() * (99999 - 10000) + 10000));
    // console.log(banana.getInfo());

    console.log(sb1.averageProdPrice());
    console.log(sb1.getMostExpensive());

})();