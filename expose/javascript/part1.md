# Part 1. A Quick Introduction

## var declaration
1. Line 9 prints `values added: 20` because the numbers are added and stored in `result` in line 7. 
2. Line 13 prints `final result: 20` because the numbers are added and stored in `result` in line 7. Since `result` is a var, it stays in scope because var has function scope, not block scope.

## let declaration
3. Line 9 prints `values added: 20` because the numbers are added and stored in `result` in line 7. The sum is still accessible in line 9 because it is within the same block `result` was declared in. (Assuming the error from line 13 has been fixed and does not prevent execution)
4. Line 13 returns an error. It is trying to access the let variable `result` outside of the block it was defined in so line 13 thinks `result` has not been defined yet.

## const declaration
5. Nothing is printed by line 9 because the code returns an error because the `const result` is trying to be reassigned on line 7. It is not allowed to reassign a const variable after it is assgined for the first time.
6. Nothing is printed by line 13 because the code returns an error because the `const result` is trying to be reassigned on line 7. It is not allowed to reassign a const variable after it is assgined for the first time.
