package main

/*
#cgo LDFLAGS: -L. -lmathlib
#include <stdint.h>

// Declare the Zig functions.
int32_t add(int32_t a, int32_t b);
int32_t multiply(int32_t a, int32_t b);
char* hello(char* name);
*/
import "C"
import "fmt"

func main() {
    a, b := int32(3), int32(5)

    sum := C.add(C.int32_t(a), C.int32_t(b))
    product := C.multiply(C.int32_t(a), C.int32_t(b))
    hello := C.hello(C.CString("Ziggy"))
    fmt.Printf("Sum: %d\n", int32(sum))
    fmt.Printf("Product: %d\n", int32(product))
    fmt.Printf("Hello: %s\n",  C.GoString(hello))
}
