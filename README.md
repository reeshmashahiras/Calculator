**📱 Calculator Web Application**
This project is a responsive, modern web calculator built with HTML5, CSS3, and Vanilla JavaScript.
It performs basic arithmetic operations, square, square root, and percentage calculations, and allows toggling between light and dark themes for a better user experience.

**🛠️ Built With**
HTML5: Structured the page layout and created calculator buttons, display areas, and theme toggle elements.

CSS3: Styled the entire calculator with custom themes, responsive design, and smooth hover/click animations.

JavaScript (Vanilla): Implemented the entire calculator logic, theme toggling, input handling, and dynamic updates.

**✨ Special Features**
1. Dynamic Theme Toggle
Users can switch between light and dark themes with a simple click.

The page appearance updates instantly without reloading.

The theme toggle button dynamically changes its icon (moon/sun) based on the current mode.

2. Smart Input Handling
Clicking on any number or operator button appends the value to the input display.

A single JavaScript function manages the input, reducing code repetition and making it easier to maintain.

3. Symbol Replacement for Evaluation
User-friendly symbols like × and ÷ are internally replaced with * and / to match JavaScript’s syntax during calculations.

This ensures users can input operations naturally without errors.

4. Extended Mathematical Operations
Additional functionalities like square (x²) and square root (√x) are available.

Users can perform more advanced calculations directly without needing separate scientific calculator apps.

5. Percentage Calculation
Converts any input number into a percentage with a single click.

Automatically displays the percentage symbol and result.

6. Error Handling
If an invalid expression is entered, the calculator gracefully handles errors.

Instead of crashing, it informs users about the invalid input, maintaining a smooth experience.

7. Backspace Functionality
A dedicated backspace feature lets users delete the last character entered.

This provides better control compared to clearing the entire input.

8. Real-time Display Updates
As users click buttons, both the equation and result areas are updated instantly.

Enhances clarity and usability by showing users their current operations step-by-step.

**📚 Key JavaScript Techniques Used**
Event Handling: Added event listeners to all buttons to handle clicks dynamically.

DOM Manipulation: Updated the calculator's display areas without page reloads.

Class Toggling: Changed CSS themes by toggling classes in real-time.

String Manipulation: Used methods to clean, slice, and replace parts of the input efficiently.

Safe Evaluation: Processed input carefully before calculating to avoid errors.

State Management: Handled input and result data separately using simple variable states.

