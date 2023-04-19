var queue_items = [];
var working = false;

function runNext() {
    if (working)
        return;
    working = true;
    var cart = queue_items.shift();
    calc_cart_total(cart, function (total) {
        update_total_dom(total);
        working = false;
        runNext();
    });
}

function update_total_queue(cart) {
    queue_items.push(cart);
    setTimeout(runNext, 0);
}