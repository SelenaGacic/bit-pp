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


    function ShoppingBag() {
        this.list = [];
        this.addProduct = function (product) {


            var today = new Date();
            var expirationDate = product.date;
            if (expirationDate.getTime() > today.getTime()) {
                this.list.push(product);

            }
        }

        this.calculateTotalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                var element = this.list[i];
                sum += element.price;
            }
            return sum;
        }

        this.averageProdPrice = function () {

            var averagePrice = this.calculateTotalPrice() / this.list.length;
            return averagePrice.toFixed(3);
        }

        this.getMostExpensive = function () {
            return this.list.sort().pop();

        }
    }




    function PaymentCard(accountBalance, status, validUntilDate) {
        this.accountBalance = accountBalance.toFixed(2);
        this.status = status;
        this.validUntilDate = new Date(validUntilDate);


        this.isValid = function () {
            var today = new Date();
            if (this.validUntilDate.getTime() < today.getTime()) {
                return false;
            } else {
                return true;
            }

        }

    }

    function checkoutAndBuy(shoppingBag, paymentCard) {
        var totalPrice = shoppingBag.calculateTotalPrice()
        if (paymentCard.isValid()) {


            if (paymentCard.accountBalance >= totalPrice) {
                return "You have enought money";


            } else {
                return "You don't have enough money, you are missing " + (totalPrice - paymentCard.accountBalance) + "$";

            }
        } else {
            return "Kartica je istekla, ne mozete da platite";
        }


    }



    var visa = new PaymentCard(60, "positive", "21 Feb 2001");

    var banana = new Product("Banana", 10.12389, "12 Feb 2018");
    var kruska = new Product("kruska", 150.12389, "12 Feb 2019");
    var meso = new Product("govedina", 500.88123, "05 jan 2020");

    var sb1 = new ShoppingBag();

    sb1.addProduct(banana);
    sb1.addProduct(kruska);
    sb1.addProduct(meso);
    // console.log(sb1.calculateTotalPrice());

    // console.log(Math.floor(Math.random() * (99999 - 10000) + 10000));
    // console.log(banana.getInfo());

    // console.log(sb1.averageProdPrice());
    // console.log(sb1.getMostExpensive());
    // console.log(sb1.list);
    // console.log(sb1.averageProdPrice());

    console.log(checkoutAndBuy(sb1, visa));
    console.log(visa.isValid());

    //var feta = new Product("sir",325,"22.03.2001");
    // var sb2 = new ShoppingBag();
    // sb2.addProduct(feta);
    // sb2.calculateTotalPrice();
    // var master=new PaymentCard(52485,"positiv","15.mart 2019");
    //console.log(checkoutAndBuy(sb2,master));
})();