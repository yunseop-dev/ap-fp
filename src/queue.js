function add_item_to_cart(item) {
    cart = add_item(cart, item);
    update_total_queue(cart);
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

var queue_items = [];

function update_total_queue(cart) {
    queue_items.push(cart);
}