import { dlopen, FFIType, suffix, ptr, CString } from "bun:ffi";
const { i32, cstring } = FFIType;

// Path to the shared library
const path = `./libmathlib.${suffix}`;

// Load the library and define the symbols
const lib = dlopen(path, {
  add: {
    args: [i32, i32],
    returns: i32,
  },
  multiply: {
    args: [i32, i32],
    returns: i32,
  },
  hello: {
    args: [cstring],
    returns: cstring,
  },
});

// Helper function to allocate a null-terminated string in memory
function createCString(str: string): Uint8Array {
  const encoder = new TextEncoder();
  const encodedStr = encoder.encode(`${str}\0`); // Encode the string and add null terminator
  const buffer = new Uint8Array(encodedStr.length); // Allocate memory
  buffer.set(encodedStr); // Copy the encoded string into the memory buffer
  return buffer;
}

// Call the `add` function
const sum = lib.symbols.add(3, 5);
console.log(`Sum: ${sum}`);

// Call the `multiply` function
const product = lib.symbols.multiply(3, 5);
console.log(`Product: ${product}`);

// Call the `hello` function
const nameBuffer = createCString("PythonZiggy");
const helloPtr = lib.symbols.hello(ptr(nameBuffer)); // Pass the memory pointer

// Convert the pointer to a string
const hello = new TextDecoder().decode(nameBuffer);
console.log(`Hello: ${hello}`);