use std::io::{self, Write};

fn main() {
    println!("--- Rust CLI Calculator ---");
    println!("Type your expression (e.g., 5 + 10) or 'exit' to quit.");

    loop {
        print!(">> ");
        io::stdout().flush().unwrap();

        let mut input = String::new();
        io::stdin().read_line(&mut input).unwrap();
        let input = input.trim();

        if input == "exit" { break; }

        let parts: Vec<&str> = input.split_whitespace().collect();
        if parts.len() != 3 {
            println!("Usage: [num] [op] [num]");
            continue;
        }

        let num1: f64 = parts[0].parse().unwrap_or(0.0);
        let op = parts[1];
        let num2: f64 = parts[2].parse().unwrap_or(0.0);

        match op {
            "+" => println!("Result: {}", num1 + num2),
            "-" => println!("Result: {}", num1 - num2),
            "*" => println!("Result: {}", num1 * num2),
            "/" => {
                if num2 == 0.0 { println!("Error: Division by zero"); }
                else { println!("Result: {}", num1 / num2); }
            }
            _ => println!("Unknown operator: {}", op),
        }
    }
}