import objectSet from './util/objectSet';

export function incrementField(item, field) {
    // update를 사용해서 리팩토링 해보세요. 암묵적 인자를 드러내기 -> 함수 본문을 콜백으로 바꾸기
    var value = item[field];
    var newValue = value + 1;
    var newItem = objectSet(item, field, newValue);
    return newItem;
}

export function decrementField(item, field) {
    // update를 사용해서 리팩토링 해보세요. 암묵적 인자를 드러내기 -> 함수 본문을 콜백으로 바꾸기
    var value = item[field];
    var newValue = value - 1;
    var newItem = objectSet(item, field, newValue);
    return newItem;
}

export function doubleField(item, field) {
    // update를 사용해서 리팩토링 해보세요. 암묵적 인자를 드러내기 -> 함수 본문을 콜백으로 바꾸기
    var value = item[field];
    var newValue = value * 2;
    var newItem = objectSet(item, field, newValue);
    return newItem;
}

export function halveField(item, field) {
    // update를 사용해서 리팩토링 해보세요. 암묵적 인자를 드러내기 -> 함수 본문을 콜백으로 바꾸기
    var value = item[field];
    var newValue = value / 2;
    var newItem = objectSet(item, field, newValue);
    return newItem;
}

export function update(object, key, modify) {
    // 직접 만들어 봅시다.
    return;
}

export function update2(object, key1, key2, modify) {
    // 직접 만들어 봅시다.
    return;
}

export function update3(object, key1, key2, key3, modify) {
    // 직접 만들어 봅시다.
    return;
}

export function update4(object, key1, key2, key3, key4, modify) {
    // 직접 만들어 봅시다.
    return;
}

export function update5(object, key1, key2, key3, key4, key5, modify) {
    // 직접 만들어 봅시다.
    // 이대로 괜찮은가 싶으시죠?
    return;
}

export function nestedUpdate(object, keys, modify) {
    // 재귀 가즈아
}

export function incrementSizeByName(cart, name) {
    return nestedUpdate(cart, [name, 'options', 'size'], function (size) {
        return size + 1;
    });
}
