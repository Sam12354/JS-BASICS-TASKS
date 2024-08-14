function createExtensibleObject() {
    const obj = {};

    obj.extend = function(template) {
        for (const key in template) {
            if (template.hasOwnProperty(key)) {
                if (typeof template[key] === 'function') {
                    Object.getPrototypeOf(obj)[key] = template[key];
                } else {
                    obj[key] = template[key];
                }
            }
        }
        return obj;
    };

    return obj;
}
