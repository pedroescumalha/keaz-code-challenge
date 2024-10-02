# Backend code-challenge

Welcome, and thank you for your interest in joining our team as a Senior Backend Developer!

We’re kicking off the process with a coding challenge—this helps us quickly understand if our approaches to problem-solving and development are aligned. We know your time is valuable, and we respect that. This challenge is designed to take anywhere from 15 minutes to 2 hours, depending on how much time you’d like to invest. Please approach it in a way that feels right to you, without worrying about the details or striving for perfection.

We’re excited to see how you think through problems and look forward to your solutions!


## The Challenge

In this challenge, we’ve provided a small extract from our backend that represents a portion of our CRM feature. It’s a simplified version of the real thing, but it captures the essence of the kinds of problems we solve on a daily basis.

The following tasks will ask you to review, extend, and improve this code base. Each task is designed to explore different aspects of your backend development skills—from understanding existing code, to building on top of it, and applying best practices.

### 1 - Make it Run

The first task is simple: get the provided code up and running. Some errors have found their way into the codebase, and your goal is to identify and fix them.

Answer - Fixed the running issue, and also the import issues in the tests, not sure if this last one was just in my environment, but Jest couldn't resolve absolute paths.

### 2 - Refactor and Prioritize

Take a close look at the provided module. Are there any changes you would make? If so, list what you would modify and explain why. For each proposed change, please categorize its priority as **high**, **medium**, or **low**. If any of your suggestions are based on personal preference, be sure to note that as well.

Feel free to respond in any format that works best for you—it does not has to be in code

Answer - left some comments throughout the codebase with the format `// Pedro Simoes: [severity] - [comment]`.

### 3 - Test for Stability

The provided module currently has no test coverage. How would you approach testing to ensure the stability of this feature? Please outline your strategy and explain what you would specifically focus on testing.

Feel free to respond in any format that works best for you—it does not has to be in code

Answer - My primary focus would be on integration testing. Given the frequent changes in the codebase, maintaining unit tests could become time-consuming and challenging. Integration tests offer a more efficient approach during periods of significant backend changes, as they ensure the system works as expected from an end-user perspective. These tests would help verify that the overall functionality remains intact and nothing breaks. I would use TestContainers to spin up a PostgreSQL container for each test, seed the database, and clean up afterward. This approach provides an isolated and reliable environment for each test, ensuring consistency and accuracy.
