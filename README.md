Build zig with `zig build-lib -dynamic mathlib.zig -target x86_64-linux-gnu`


# Calling Zig from Go
This is an example of Go calling a Zig C library. Run with either `LD_LIBRARY_PATH=. go run .
` or build `go build -o myprogram`

# Calling Zig from Python
This is an example of Python calling a Zig C library. Run with `python3 main.py`

# Calling Zig from TypeScript+Bun
This is an example of TypeScript calling a Zig C library. Run with `bun run index.ts`