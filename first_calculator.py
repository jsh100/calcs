def add(x, y):
	return x + y
def subtract(x, y):
	return x - y
def multiply(x, y):
	return x * y
def divide(x, y):
	if y == 0:
		return "Error: Cannot divide by zero."
	return x / y
def power(x ,y):
	return x ** y
def display_menu():
	print("\n" + "="*40)
	print("Calculator")
	print("="*40)
	print("1. Add")
	print("2. Subtract")
	print("3. Multiply")
	print("4. Divide")
	print("5. Power")
	print("6. Exit")
def get_numbers():
	try:
		num1 = float(input("Enter first number: "))
		num2 = float(input("Enter second number: "))
		return num1, num2
	except ValueError:
		print("Invalid input! Please enter valid numbers.")
		return None, None
def main():
	while True:
		display_menu()
		choice = input("Enter your choice (1-6): ")
		if choice == '6':
			print("\nThank you for using the calculator. Goodbye!")
			break
		if choice in ['1', '2', '3', '4', '5']:
			num1, num2 = get_numbers()
			if num1 is None or num2 is None:
				continue
			if choice == '1':
				print(f"\n{num1} + {num2} = {add(num1, num2)}")
			elif choice == '2':
				print(f"\n{num1} - {num2} = {subtract(num1, num2)}")
			elif choice == '3':
				print(f"\n{num1} * {num2} = {multiply(num1, num2)}")
			elif choice == '4':
				result = divide(num1, num2)
				print(f"\n{num1} / {num2} = {result}")
			elif choice == '5':
				print(f"\n{num1} ^ {num2} = {power(num1, num2)}")
		else:
			print("Invalid choice! Please select 1-6.")
if __name__ == "__main__":
	main()
