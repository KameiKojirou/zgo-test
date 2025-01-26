import ctypes

# Load the shared library
# Use `./` to specify the current directory explicitly
lib = ctypes.CDLL("./libmathlib.so")

# Define argument and return types for the C functions
lib.add.argtypes = [ctypes.c_int32, ctypes.c_int32]
lib.add.restype = ctypes.c_int32

lib.multiply.argtypes = [ctypes.c_int32, ctypes.c_int32]
lib.multiply.restype = ctypes.c_int32

lib.hello.argtypes = [ctypes.c_char_p]
lib.hello.restype = ctypes.c_char_p

# Call the functions
a, b = 3, 5
sum_result = lib.add(a, b)
product_result = lib.multiply(a, b)
hello_result = lib.hello(b"PythonZiggy")

print(f"Sum: {sum_result}")
print(f"Product: {product_result}")
print(f"Hello: {hello_result.decode('utf-8')}")
