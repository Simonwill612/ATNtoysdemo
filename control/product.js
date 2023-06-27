module.exports = function(app, Product) {
    app.get('/product', function(_req, res) {
        Product.find({}, function(_err, products) {
            res.render('product', { products: products });
        });
    });

    app.get('/product/add_to_cart/:pid', function(req, res) {
        var pid = req.params.pid;

        if (!req.session.cart) req.session.cart = {};

        console.log(req.session.cart);

        Product.find({ ID: pid }, function(_err, product) {
            if (product != null) {
                if (pid in req.session.cart) {
                    req.session.cart[pid].qty++;
                } else {
                    req.session.cart[pid] = JSON.parse(JSON.stringify(product[0]));
                    req.session.cart[pid].qty = 1;
                }
                res.redirect('/product');
            }
        });
    });
}
