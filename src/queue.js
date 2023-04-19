function add_item_to_cart(item) {
    cart = add_item(cart, item);
    calc_cart_total(cart, update_total_dom);
}

function calc_cart_total(cart, callback) {
    var total = 0;
    cost_ajax(cart, function (cost) {
        total += cost;
        shipping_ajax(cart, function (shipping) {
            total += shipping;
            callback(total);
        });
    });
}