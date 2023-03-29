import {
    incrementField,
    decrementField,
    doubleField,
    halveField,
    update,
    update2,
    update3,
    incrementSizeByName,
} from './index';
import objectSet from './util/objectSet';

var employee = {
    name: "Kim",
    salary: 120000
};

function raise10Percent(salary) {
    return salary * 1.1;
}

describe('incrementField', () => {
    test('returns object properly', () => {
        const result = incrementField({ a: 4 }, 'a');
        expect(result).toEqual({ a: 5 });
    })
})

describe('decrementField', () => {
    test('returns object properly', () => {
        const result = decrementField({ a: 4 }, 'a');
        expect(result).toEqual({ a: 3 });
    })
})

describe('doubleField', () => {
    test('returns object properly', () => {
        const result = doubleField({ a: 4 }, 'a');
        expect(result).toEqual({ a: 8 });
    })
})

describe('halveField', () => {
    test('returns object properly', () => {
        const result = halveField({ a: 4 }, 'a');
        expect(result).toEqual({ a: 2 });
    })
})

describe('example (359P)', () => {
    test('returns object properly', () => {
        const result = update(employee, 'salary', raise10Percent)
        expect(result).toEqual({
            name: "Kim",
            salary: 132000
        });
    })
})

describe('example (364P)', () => {
    test('returns object properly', () => {
        const user = {
            firstName: "Joe",
            lastName: "Nash",
            email: "JOE@EXAMPLE.COM"
        };
        const result = update(user, 'email', String.prototype.toLowerCase)
        expect(result).toEqual({
            firstName: "Joe",
            lastName: "Nash",
            email: "JOE@EXAMPLE.COM".toLowerCase(),
        });
    })
})

describe('example (365P)', () => {
    test('returns object properly', () => {
        const item = {
            name: "shoes",
            price: 7,
            quantity: 2
        };

        function tenXQuantity(item) {
            return update(item, 'quantity', function (quantity) {
                return quantity * 10;
            });
        }

        const result = tenXQuantity(item);
        expect(result).toEqual({
            name: "shoes",
            price: 7,
            quantity: 20
        });
    })
})

// 366P는 눈으로 풀어봅시다.

describe('example (367P)', () => {
    test('returns object properly', () => {
        var shirt = {
            name: "shirt",
            price: 13,
            options: {
                color: "blue",
                size: 3
            }
        };

        function incrementSize(item) {
            // update를 사용하는 구문으로 리팩토링 해보세요.
            var options = item.options;
            var size = options.size;
            var newSize = size + 1;
            var newOptions = objectSet(options, 'size', newSize);
            var newItem = objectSet(item, 'options', newOptions);
            return newItem;
        }

        const result = incrementSize(shirt);

        expect(result).toEqual({
            name: "shirt",
            price: 13,
            options: {
                color: "blue",
                size: 4
            }
        })
    })
})

describe('example (371P)', () => {
    test('returns object properly', () => {
        var shirt = {
            name: "shirt",
            price: 13,
            options: {
                color: "blue",
                size: 3
            }
        };

        const result = update2(shirt, 'options', 'size', function (size) {
            return size + 1;
        });

        expect(result).toEqual({
            name: "shirt",
            price: 13,
            options: {
                color: "blue",
                size: 4
            }
        })
    })
})

describe('example (375P)', () => {
    test('returns object properly', () => {
        var cart = {
            shirt: {
                name: "shirt",
                price: 13,
                options: {
                    color: "blue",
                    size: 3
                }
            }
        };

        const result = update3(cart, 'shirt', 'options', 'size', function (size) {
            return size + 1;
        });

        expect(result).toEqual({
            shirt: {
                name: "shirt",
                price: 13,
                options: {
                    color: "blue",
                    size: 4
                }
            }
        })
    })
})

describe('incrementSizeByName (385P)', () => {
    test('returns object properly', () => {
        var cart = {
            shirt: {
                name: "shirt",
                price: 13,
                options: {
                    color: "blue",
                    size: 3
                }
            }
        };

        const result = incrementSizeByName(cart, 'shirt');

        expect(result).toEqual({
            shirt: {
                name: "shirt",
                price: 13,
                options: {
                    color: "blue",
                    size: 4
                }
            }
        })
    })
})
