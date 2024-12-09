# Asynchronicity

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 

https://parallel.js.org/

Used: https://github.com/COSC3020/asynchronous-functions-jataylor111-1/blob/main/code.test.js for test code

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

Used the mapReduce solution discussed in class as I found it rather interesting, due to the parallelism it is also inherently asynchronous.
In addition, implemented a purely asynchronous form of the same solution.

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.
In this case, since map() is iterating over the array once and reduce() is also iterating over the array this would result in $\Theta(n+n)$ or $\Theta(2n)$ or $\Theta(n)$ after dropping constants. In parallel, the number of workers spawned is equal to n where n is the number of values in the array, making the work n and span would be 1 as a worker is spawned for each value.
