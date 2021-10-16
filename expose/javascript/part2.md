# Part 2. A Little More of a Challenge

## Variables
1. Line 12 will print `3` because the `var i` still remains inside the function scope. Since i gets incremented for each iteration and since the length of prices is 3, when exiting the loop, i will be 3.
2. Line 13 will print `150` because it is the most recent value of `discountedPrice`. Since `discountedPrice` is a var that is defined within the function scope, even though it was defined within the for-loop, it will remain in scope at line 13. There will not be an error for redefining the var. It gets reassigned each iteration of the loop so the most recent value will be the discounted prive of the last element in the list, so it will be 300 * (1-0.5) = 150. 
3. Line 14 will print `150` because it is the most recent value of `finalPrice`. Since `finalPrice` is a var variable, it is defined within the function scope and can still be accessed at line 8 and 14. Line 8 sets `finalPrice = 150` in the last iteration of the for-loop and line 14 prints this value.
4. The function will return an array that holds the value of each of the prices from the input `prices` array discounted by the input `discount`. Each iteration of the for-loop takes a price from the `prices` arrays and calculates the new discounted price using the input `discount`. Then this value is pushed into the array `discounted` that is being returned. So the return value will be an array storing all of these calculated discounts.
5. The code will cause an error because the variable `i` is defined with `let`. So when the for-loop is exited, `i` is no longer in the environment so at line 12, `i` is not within the scope and is considered undefined.
6. The code will cause an error for similar reasons to question 5. The variable `discountedPrice` is defined using `let` within the for-loop block and since let variables have block-scope, when the for-loop is exited by line 13, this means `discountedPrice` is out of scope and would be considered undefined at this point.
7. Line 14 will print `150`. The `finalPrice` is declared within the function. Since the for-loop can access outer blocks, each iteration of the for-loop sets `finalPrice` to the discounted price so in the last iteration, it will be set to 150. Then this value is printed on line 14.
8. The function will return an array that holds the value of each of the prices from the input `prices` array discounted by the input `discount`. Each iteration of the for-loop takes a price from the `prices` arrays and calculates the new discounted price using the input `discount`. Then this value is pushed into the array `discounted` that is being returned. So the return value will be an array storing all of these calculated discounts.
9. Similar to question 5, the code will cause an error because the variable `i` is defined with `let`. So when the for-loop is exited, `i` is no longer in the environment so at line 11, `i` is not within the scope and is considered undefined.
10. Line 12 will print `3`. The `length` is defined in line 4 and is within the scope of the entire function. No error is thrown from this variable because nowhere in the code is trying to reassign the value of a `const` variable. Since the length of the input array `prices` is 3, the `length` gets set to 3 and this is the value printed on line 12.
11. The function will return an array that holds the value of each of the prices from the input `prices` array discounted by the input `discount`. Each time through the for-loop a new `discountedPrice` is declared and defined and then pushed to the array. Each iteration of the for-loop takes a price from the `prices` arrays and calculates the new discounted price using the input `discount`. Then this value is pushed into the array `discounted` that is being returned. So the return value will be an array storing all of these calculated discounts. No error is thrown from this code because nowhere in the code is trying to reassign the value of a `const` variable. 

## Data Types
12. 
A. access name property: student.name
B. access Grad Year property: student["Grad Year"]
C. call function for greeting property: student.greeting();
D. access name of Favorite Teacher property: student['Favorite Teacher'].name
E. access first index of courseLoad property: student.courseLoad[0]

## Basic Operators and Type Conversion
13. Arithmetic
A. ‘3’ + 2 = `'32'` because integers map to their exact string representation so 2 maps to '2'.
B. ‘3’ - 2 = `1` because the subtraction is a math operator so there is a numeric conversion for the string `'3'` before subtracting 2. And 3-2 = 1.
C. 3 + null = `3` because null becomes zero for numeric conversions so 3+0=3.
D. ‘3’ + null = `'3null'` because since '3' is a string, null is converted to the string 'null' before being concatonated.
E. true + 3 = `4` because true maps to the value 1. and 1+3=4.
F. false + null = `0` because false is mapped to the value zero. And for numberic operations, null also becomes zero. So 0+0=0.
G. '3' + undefined = `'3undefined'` since '3' is a string, undefined gets converted to the string 'undefined' and is then concatonated.
H. '3' - undefined = `NaN` because is undergoes a numeric conversion. This means that undefined because NaN and the operation doesn't output a number.

14. Comparison
A. ‘2’ > 1 returns `true` because the string '2' becomes the number and 2 is greater than 1
B. ‘2’ < ‘12’ returns `false` because the string '1' (from the '12') comes before the string '2'
C. 2 == ‘2’ returns `true` because the string '2' gets converted to a number
D. 2 === ‘2’ returns `false` because it is a strict comparison that checks without type conversion and the types are not the same
E. true == 2 returns `false` because true gets converted to the number 1, which is not equal to 2
F. true === Boolean(2) returns `true` because since 2 is nonzero, it is considered true and since it uses a Boolean() type conversion the types also match in the strict comparison

15. Difference between `==` and `===` operators: The `==` is a normal equality comparison that automatically does type conversions when comparing. The `===` is a strict comparison that does not do type conversions so if the two operands are not the same type on top of being equal, it will evaluate to false.

## Loops
16. See part2-question16.js file

## Functions
17. The result returned from `modifyArray([1, 2, 3], doSomething)` will be an array `[2, 4, 6]`. The doSomething function is the callback argument into the modifyArray function. So everytime the callback is called, it will execute the doSomething function, which doubles the input number. Each time through the array, the callback function is called on the element of the input array. So for the first iteration, the first array value is doubled. And then it is pushed to the new array. At the end of the for-loop, the new array will store all the elements from the array that have now been doubled. This new array is returned so since the input array was [1, 2, 3], the returned array is [2, 4, 6].
    
## Timing
18. See part2-question18.js file
19. The output will be `1 4 3 2` with each number on a newline. The `1` will be printed first because it is the first operation. Printing te `2` will be placed on the queue after 1 second because of the setTimeout(). Printing the `3` will be placed on the queue with no delay. The `4` will be printed immediately because it is the next instruction to execute. Then, since the `3` was placed on the queue, it will print. Finally, after 1 second from when line 3 executed, the `2` will be printed.