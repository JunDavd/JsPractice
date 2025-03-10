const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

const totalCostProducts = (productAPrice * productAQuantity) + (productBPrice * productBQuantity) + (productCPrice * productCQuantity)

const costumerLimitPurchase = ''
if (totalCostProducts < 50){
    costumerLimitPurchase = 'puedes agregar más productos'
}else if(totalCostProducts >= 50 && totalCostProducts <= 100){
    costumerLimitPurchase = 'Estás cerca de tu límite de compra'
} else {
    costumerLimitPurchase = 'Has alcanzado el límite de tu compra'
}
console.log(costumerLimitPurchase)