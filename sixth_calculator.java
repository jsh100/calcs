import java.util.Scanner;

public class sixth_calculator {

    private static double add(double a, double b) {
        return a + b;
    }

    private static double subtract(double a, double b) {
        return a - b;
    }

    private static double multiply(double a, double b) {
        return a * b;
    }

    private static double divide(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed.");
        }
        return a / b;
    }

    private static void printMenu() {
        System.out.println("\n=== Simple Calculator ===");
        System.out.println("Choose an operation:");
        System.out.println("1) Add");
        System.out.println("2) Subtract");
        System.out.println("3) Multiply");
        System.out.println("4) Divide");
        System.out.println("5) Exit");
        System.out.print("Enter your choice (1-5): ");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            printMenu();
            String choice = scanner.nextLine().trim();

            switch (choice) {
                case "1":
                case "2":
                case "3":
                case "4":
                    double num1, num2;
                    try {
                        System.out.print("Enter first number: ");
                        num1 = Double.parseDouble(scanner.nextLine().trim());
                        System.out.print("Enter second number: ");
                        num2 = Double.parseDouble(scanner.nextLine().trim());
                    } catch (NumberFormatException e) {
                        System.out.println("Invalid number format. Please try again.");
                        break;
                    }

                    try {
                        double result;
                        switch (choice) {
                            case "1":
                                result = add(num1, num2);
                                System.out.printf("Result: %.10g + %.10g = %.10g%n", num1, num2, result);
                                break;
                            case "2":
                                result = subtract(num1, num2);
                                System.out.printf("Result: %.10g - %.10g = %.10g%n", num1, num2, result);
                                break;
                            case "3":
                                result = multiply(num1, num2);
                                System.out.printf("Result: %.10g * %.10g = %.10g%n", num1, num2, result);
                                break;
                            case "4":
                                result = divide(num1, num2);
                                System.out.printf("Result: %.10g / %.10g = %.10g%n", num1, num2, result);
                                break;
                        }
                    } catch (ArithmeticException e) {
                        System.out.println("Error: " + e.getMessage());
                    }
                    break;

                case "5":
                    running = false;
                    System.out.println("Goodbye!");
                    break;

                default:
                    System.out.println("Invalid choice. Please enter a number from 1 to 5.");
                    break;
            }
        }

        scanner.close();
    }
}