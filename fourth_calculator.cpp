#include <iostream>
#include <limits>

void showMenu() {
    std::cout << "\n--- C++ Terminal Calculator ---\n";
    std::cout << "Operations: +  -  * /\n";
    std::cout << "Enter your expression (e.g., 10 + 5) or '0 x 0' to exit.\n";
    std::cout << ">> ";
}

int main() {
    double num1, num2;
    char op;
    bool running = true;

    while (running) {
        showMenu();
        
        if (!(std::cin >> num1 >> op >> num2)) {
            std::cout << "Invalid input. Please use the format: [number] [operator] [number]\n";
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }

        switch (op) {
            case '+':
                std::cout << "Result: " << num1 + num2 << std::endl;
                break;
            case '-':
                std::cout << "Result: " << num1 - num2 << std::endl;
                break;
            case '*':
                std::cout << "Result: " << num1 * num2 << std::endl;
                break;
            case '/':
                if (num2 == 0) {
                    std::cout << "Error: Division by zero is undefined.\n";
                } else {
                    std::cout << "Result: " << num1 / num2 << std::endl;
                }
                break;
            case 'x':
            case 'X':
                running = false;
                std::cout << "Exiting calculator..." << std::endl;
                break;
            default:
                std::cout << "Unknown operator '" << op << "'. Use +, -, *, or /.\n";
        }
    }
    return 0;
}