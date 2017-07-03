
var precioMinimoProcesar = 625.3;
var precioCotaProcesar = 700;
var totalSale = 0;
var cantidadVentas = 0;
var cantidadVentasCota = 0;
var vendedorMax = null;
var montoVendedorMax = 0;

var usSales = db.getCollection('sales').find({'products.price':{$gt:precioMinimoProcesar}}).limit(3);

while(usSales.hasNext()){
    
    let usSale = usSales.next();
    print('Nueva Venta...')
    
    usSale.products.forEach( function(prod){
        
            totalSale += prod.price * prod.cant;
            print('Procesando Producto...');
                    
        });
    print('Total Venta... '+ totalSale)
    if(totalSale > montoVendedorMax){
        print('Nuevo Vendedor Max...' + JSON.stringify(usSale.vendor));
        print('Nuevo Monto Vendedor Max...' + totalSale);
        montoVendedorMax = totalSale;
        vendedorMax = usSale.vendor;
    }
        
    if(totalSale >= precioCotaProcesar){
        print('Se agrega enpresa que supera la cota de ventas...');
        cantidadVentasCota ++;
    }
    
    totalSale = 0;  

}

printjson(vendedorMax);
