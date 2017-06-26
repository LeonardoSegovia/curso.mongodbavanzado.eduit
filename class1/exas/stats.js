let usSales = db.sales.find().limit(2);
let stats = { products: {}, vendors: {} };
let totalAmount = 0;

print("Procesando...");
print("Hay ventas... ", usSales.hasNext())

while (usSales.hasNext()) {
    let usSale = usSales.next();
    printjson(usSale);

    if (typeof(usSale.products.length) == 'undefined') continue;

    print("Procesando productos y totales...");
    printjson(usSale);

    usSale.products.forEach(function(p) {
        if (typeof stats.products[p.prodName] == 'undefined') { stats.products[p.prodName] = 0; }

        totalAmount += p.price * p.cant;
        stats.products[p.prodName] += p.price * p.cant;

    });

    print("INCREMENTO");
    printjson(stats);

}

print("RESULTADO");
print("Monto total: ", totalAmount);
printjson(stats);