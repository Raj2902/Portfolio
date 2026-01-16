1. In your tsconfig.json file you can see this line :
   "jsx": "preserve"
   What is this and in the starter template of the nextjs its "jsx": "react-jsx" so whats the diffrence and when to use what?
   Ans:
   Setting : "jsx": "preserve".
   What it does : Leaves JSX as-is, doesn't transform it.
   Who transforms JSX : Next.js compiler handles it.

Setting : "jsx": "react-jsx".
What it does : Transforms JSX using React 17+ new transform.
Who transforms JSX : TypeScript compiler handles it.

Practical difference:

Both work fine, but "jsx": "preserve" is the recommended default for Next.js because:

Next.js handles JSX transformation - This is the intended workflow
Better compatibility - Works seamlessly with Next.js's build process
No need to import React - Just like with react-jsx, you don't need import React from 'react' at the top of JSX files
When would you use "jsx": "react-jsx"?

If you're using TypeScript standalone (not in a Next.js project)
If you want TypeScript to handle JSX transformation directly
Your setup is correct - using "jsx": "preserve" is the standard for Next.js projects. If you see react-jsx in some older Next.js templates, it still works, but preserve is the cleaner choice.

2)Use of the md file and basic syntax :
.md files are Markdown files—plain text files used for documentation and content formatting.

Common uses:

README files - Project documentation (setup instructions, features, usage)
Learning/notes - Like your learning.md file - to document what you're learning
Blog posts - Content that gets converted to HTML
Technical documentation - API docs, guides, tutorials
GitHub repositories - Every repo has a README.md
Advantages:

Plain text - Works anywhere, any editor
Easy formatting - Simple syntax for headers, lists, links, code blocks
Readable as-is - Looks good even without rendering
Version control friendly - Track changes easily with Git
Common Markdown syntax:

# Heading 1

## Heading 2

**bold** and _italic_

- List item
- List item

[Link text](https://example.com)

`inline code`

`code block`
Your learning.md file is a great place to document what you're learning about Next.js, TypeScript, and other concepts—keeping notes organized and searchable.Your learning.md file is a great place to document what you're learning about Next.js, TypeScript, and other concepts—keeping notes organized and searchable.

3)diffrence between inline code and code block ?
Ans:
Inline Code
Features
Syntax : Wrap with single backticks: `code`
Use case : Short snippets within text
Display: Appears on same line as text
Example:const name = "John"
Inline code example:
Use the `npm start` command to run your app.
Renders as: Use the npm start command to run your app.

Code Block
Features
Syntax : Wrap with triple backticks: `code`
Use case : Multiple lines of code
Display: Appears on separate lines
Example:Multi-line function
Code block example:

`````javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
````
**Renders as:**
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}```

When to use:

Inline code - Single commands, variable names, file names: package.json, const x = 5
Code block - Full functions, multiple lines, complete examples
`````

4)In your tsconfig.json file
"paths": {
"@/_": ["./src/_"]
}
in starter template its "@/\*": ["./"] what diffrence it creates?
Ans :
"@/_": ["./src/_"] vs "@/_": ["./_"]:

This is a path alias that lets you use @/ as a shortcut when importing files.
Practical difference:

Your current setup ("@/_": ["./src/_"]):
// This works:
import Hero from "@/components/hero-section"
// Resolves to: ./src/components/hero-section
If it was "@/_": ["./_"]:
// You'd have to do:
import Hero from "@/src/components/hero-section"
// Or your components would be at: ./components/ (root level, not src/)
Which is better?

Your current setup is better because:

Components stay organized in src folder
Cleaner imports (shorter paths)
Follows the standard Next.js project structure
The starter template's ["./*"] is less common because it doesn't assume a src folder structure, but your project uses src, so ["./src/*"] is the correct choice.

5)In your package.json you see two script as "dev" and "start" why two diffrent scripts ? And what is this turbopack its not in the starter template of the nextjs?
Ans: The dev script is use to start the development server with local enviroment and the start script is use to start the build with the production enviroment on the local system to test out.
Turbopack is a rust based bundler that makes the hot reloading, build time and the dev server start faster than the initial webpack bundler.
How to set it up.
All you need is just a flag --turbopack and next to be 15 or higher version.
"dev": "next dev --turbopack"
"build": "next build --turbopack"
