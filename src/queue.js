function Queue() {
    var queue_items = [];
    var working = false;

    function runNext() {
        if (working)
            return;
        if (queue_items.length === 0)
            return;
        working = true;
        var cart = queue_items.shift();
        calc_cart_total(cart, function (total) {
            update_total_dom(total);
            working = false;
            runNext();
        });
    }

    return function (cart) {
        queue_items.push(cart);
        setTimeout(runNext, 0);
    };
}

var update_total_queue = Queue();