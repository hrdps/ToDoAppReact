# Question:

Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
For example, given:
const nums = [2, 7, 11, 15];
const target = 9;
The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
Requirements:
• Implement the solution in JavaScript.
• The solution should have a time complexity better than O(n^2).
• Include proper error handling for edge cases.

# Answer:

This is a two sum problem which we can solve by iterating through the array in nested mode to get the answer. However, the time complexity will be O(n^2). We are using object to store the target - nums[i] and checking if nums[i+1] exist in the object. If yes, we got the answer.

```javascript
const getIndices = (nums, target) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      return [obj[nums[i]], i];
    }
    let tmp = target - nums[i];
    obj[tmp] = i;
  }
  return [];
};
```
