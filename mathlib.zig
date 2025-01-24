const std = @import("std");

// Export an add function that takes two i32 and returns i32.
export fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Export a multiply function that takes two i32 and returns i32.
export fn multiply(a: i32, b: i32) i32 {
    return a * b;
}

// Export a hello function that returns the same pointer passed in.
// This is for demonstration: we receive `name` and simply return it.
export fn hello(name: [*:0]const u8) [*:0]const u8 {
    // Typically you'd do something more interesting here, like constructing
    // a new string, or storing it. But here, we just return the pointer.
    return name;
}
