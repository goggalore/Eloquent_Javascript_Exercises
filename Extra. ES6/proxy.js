// The Proxy object is used to define custom behavior for fundimental 
// operations (e.g. get and set methods, enumeration, function invocation, etc.)

const logProxies = () => { 
    const uselessHandler = {
        get: function(object, prop) {
            console.log(`The value for property ${prop} has been accessed`);
        },
        set: function(object, prop, value) {
            console.log(`${prop} is being set to ${value}`);
        }
    }
    
    const handler = {
        get: function(object, prop) {
            if (prop === 'id') {
                console.warn(`Cannot access the private property id`);
            } else {
                console.log(`The value for property ${prop} has been accessed`);
                return object[prop]; 
            }
        },
        set: function(object, prop, value) {
            if (typeof value !== 'string') {
                console.warn('Only string values can be stored int his object');
            }
            else {    
                console.log(`${prop} is being set to ${value}`);
                object[prop] = value;
            }
        }
    }

    const initialObject = {
        id: 1,
        name: 'Joe Smith'
    }

    const lameObject = new Proxy(initialObject, uselessHandler);
    const proxiedObject = new Proxy(initialObject, handler);

    console.log(lameObject.name); // undefined
    console.log(proxiedObject.name); // Joe Smith

    lameObject.username = 'jsmith';
    proxiedObject.username = 'jsmith';

    console.log(lameObject.username); // undefined
    console.log(proxiedObject.username); // jsmith

    console.log(lameObject.id); // logs "The value for property id has been accessed"
                                // but returns undefined
    console.log(proxiedObject.id); // logs "cannot access the private property id"
                                   // throws error                            
}

logProxies(); 

// The custom override for get is called a 'trap'
// The handler object is essentially an object with a set of traps

// cool applications, like using a proxy to create a history of properties 
// accessed so a history feature can be implemented? 