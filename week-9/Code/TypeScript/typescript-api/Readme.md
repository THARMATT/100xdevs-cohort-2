In TypeScript, the `Pick`, `Partial`, and `Readonly` utility types are commonly used to manipulate and create new types based on existing types.

1. **`Pick<T, K>`:**
   - `Pick<T, K>` is a utility type that creates a new type by picking only the selected properties `K` from an existing type `T`.
   - It allows you to specify a subset of properties from the original type to include in the new type.
   - Example:
     ```typescript
     interface Person {
         name: string;
         age: number;
         address: string;
     }

     type PersonBasicInfo = Pick<Person, 'name' | 'age'>;
     ```
     In this example, `PersonBasicInfo` contains only the `name` and `age` properties from the `Person` interface.

2. **`Partial<T>`:**
   - `Partial<T>` is a utility type that creates a new type where all properties of `T` are optional.
   - It allows you to create a type with the same structure as `T`, but with all properties being optional.
   - Example:
     ```typescript
     interface Person {
         name: string;
         age: number;
         address: string;
     }

     type PartialPerson = Partial<Person>;
     ```
     In this example, `PartialPerson` allows all properties of `Person` to be optional.

3. **`Readonly<T>`:**
   - `Readonly<T>` is a utility type that creates a new type where all properties of `T` are readonly.
   - It makes all properties of `T` readonly, meaning they cannot be reassigned after they are initialized.
   - Example:
     ```typescript
     interface Person {
         readonly name: string;
         readonly age: number;
         readonly address: string;
     }

     type ReadonlyPerson = Readonly<Person>;
     ```
     In this example, `ReadonlyPerson` makes all properties of `Person` readonly, preventing their reassignment.

Combining these utility types allows you to create powerful and flexible type definitions in TypeScript. For example, you can use `Pick` to select specific properties, `Partial` to make them optional, and `Readonly` to make them readonly as needed.

In TypeScript, `Record` and `Map` are both used for handling collections of data, but they have different behaviors and usage patterns.
---
### 1. `Record<K, T>`

The `Record<K, T>` utility type is used to create an object type whose keys are of type `K` and values are of type `T`. It allows you to define a type that represents a record or dictionary with specific keys and their corresponding value types.

Example:
```typescript
type FruitPrices = Record<string, number>;

const fruitPrices: FruitPrices = {
    apple: 1.99,
    banana: 0.99,
    orange: 2.49
};
```

In this example, `FruitPrices` represents a dictionary where the keys are strings (fruit names) and the values are numbers (prices). The `Record` utility type allows you to enforce a specific structure for objects with known keys.

### 2. `Map<K, V>`

The `Map<K, V>` is a built-in data structure in JavaScript and TypeScript that allows you to store key-value pairs where the keys can be of any type. Unlike plain objects, `Map` provides additional methods for manipulating data and iterating over entries.

Example:
```typescript
const fruitPrices = new Map<string, number>();
fruitPrices.set('apple', 1.99);
fruitPrices.set('banana', 0.99);
fruitPrices.set('orange', 2.49);
```

In this example, `fruitPrices` is a `Map` where the keys are strings (fruit names) and the values are numbers (prices). `Map` provides methods like `set()` to add entries, `get()` to retrieve values, `has()` to check for the existence of a key, `delete()` to remove entries, and more.

### Comparison:

- **Keys:**
  - `Record`: Keys must be known at compile time, and their types are specified in the type definition.
  - `Map`: Keys can be of any type, including objects or other data structures.

- **Usage:**
  - `Record`: Used for enforcing a specific structure of objects with known keys, mainly at compile time.
  - `Map`: Used for storing key-value pairs where keys are dynamic or unknown until runtime, and when additional functionality provided by `Map` is needed.

- **Mutability:**
  - `Record`: Objects created with `Record` are mutable and can be modified directly.
  - `Map`: Provides methods for manipulating data and is typically used for handling mutable collections.

- **Performance:**
  - `Record`: Generally faster for small, known collections due to direct property access.
  - `Map`: Can be more efficient for larger collections and dynamic key sets due to its optimized data structure.

In summary, `Record` is used for defining object types with known keys and types, while `Map` is used for storing dynamic key-value pairs with additional functionality. The choice between them depends on the specific use case and requirements of your application.