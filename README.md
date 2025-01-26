Build zig with `zig build-lib -dynamic mathlib.zig -target x86_64-linux-gnu`

This is an example of Go calling a Zig C library. Run with either `LD_LIBRARY_PATH=. go run .
` or build `go build -o myprogram`
