# mocha-typescript-global-hook

This sample project describes how to setup a global hook for mocha testcases for typescript.

How it works?
-------------
1. Have a helper.ts (may be js if your are not using typescript) have a exported function/hook which can be used later in any 
test file.
2. We have a CalculatorTest.ts file having mocha test case using helper file to utilize the hook. In this case we dont need to
declare beforeeach block since we can garb common functionality from the helper(global hook).



PS: This sample can be used with javascript as well. 
