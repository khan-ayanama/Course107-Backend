# Introduction to Node, NPM, Package.JSON

* Node JS installation from official site nodejs.org - use only LTS versions
* Use terminal / command prompt to check installation : node -v npm -v
* VS Code installation directly from code.visualstudio.com site
* Use VS code terminal to run commands
* Node REPL interface can be used directly by typing node in terminal / command prompt . Use Ctrl+D to exit interface. Use * CTRL+C to exit terminal
* Running any JavaScript file from node using node filename.js
* Modules are basic containers in Node/JavaScript system. 1 file can be one module in Javascript.
* Two type of Module Systems in node JS are - CommonJS module and ES Modules.
    1. CoomonJS Module
    2. ES6 Module method

## CommonJS Method

```js
    // lib.js

    // exporting function in nodejs
    exports.sum = (a, b) => a + b;
    exports.diff = (a, b) => a - b;


    // index.js

    const lib = require("./lib");

    console.log(lib.sum(2, 4));
    console.log(lib.diff(6, 5));
```

### ES6 Method

Change the extensions of file to .mjs or define the type = module in package.json

```js
    // lib.js
    const sum = (a, b) => a + b;
    const diff = (a, b) => a - b;

    export { sum, diff };

    // index.js

    import { sum, diff } from "./lib.mjs";

    console.log(sum(2, 4));
    console.log(diff(2, 4));
```

## File System in node

* FileSystem Module(fs) is one of core modules of Node JS. fs can be used to read/write any file. There are many more core modules in NodeJS which you can check in NodeJS API docs.

* Reading files can be Synchronous or Asynchronous. Async is most preferred method in NodeJS. As there is NO blocking of I/O in NodeJS

* Common use for the File System module:

  * Read files
  * Create files
  * Update files
  * Delete files
  * Rename files

1. READ FILES

    ```js
        const fs = require("fs");

        // 1. It will print data synchronous
        const txt = fs.readFileSync("demo.txt", "utf-8");
        console.log(txt);

        // 2. Printing data asynchronous
        fs.readFile("demo.txt", "utf-8", (err, txt) => {
        console.log(txt);
        });
    ```

2. CREATE/UPDATE FILES

    The File System module has methods for creating new files:

    * fs.appendFile()
    * fs.open()
    * fs.writeFile()

    * The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created

        ```js
            var fs = require('fs');

            fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
            });
        ```

    * The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created

        ```js
            var fs = require('fs');

            fs.open('mynewfile2.txt', 'w', function (err, file) {
            if (err) throw err;
            console.log('Saved!');
            });
        ```

    * The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created

        ```js
            var fs = require('fs');

            fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
            });
        ```

3. DELETE FILES

    * The fs.unlink() method deletes the specified file:

        ```js
            var fs = require('fs');

            fs.unlink('mynewfile2.txt', function (err) {
            if (err) throw err;
            console.log('File deleted!');
            });
        ```

4. RENAME FILES

    * The fs.rename() method renames the specified file

        ```js
            var fs = require('fs');

            fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
            if (err) throw err;
            console.log('File Renamed!');
            });
        ```

## NPM

* Node project can be initialized with npm init command which also creates package.json file

* package.json is a configuration file for node projects which has scripts, dependencies, devDependencies etc

* npm install <package_name> is used to install any online modules available for node on NPM repository online.

nodemon is a package for running node server and track live * changes to re-start again.

* scripts inside package.json can be used like npm run <script_name> e.g npm run dev. Only for npm start you can avoid run.

* use npm install -g <package.json> to install packages globally on your system. Not just in the project but useful all over your system.

* Node versions are formatted like 4.1.9 where these are major.minor.patch versions.

* you can install all dependencies again using npm install again

* package-lock.json has exact versions installed and link of dependencies of each package.

* use npm update to update packages safely. npm outdated shows outdated and latets versions of packages installed in your package.json

* use npm uninstall <package_name> to uninstall packages from package.json

* node_modules should not be shared - you can make .gitignoreto ignore them to be uploaded.

## Command Line Arguements in Node

```js
    var arguments = process.argv ;

    console.log(arguments) ;

    // In terminal
    node index.js <arguements..>
```

## OS Module in nodejs

```js
    var os = require('os');
    console.log("Platform: " + os.platform());
    console.log("Architecture: " + os.arch());              
```

## ls command using js files

In Node.js, you can run system commands using the child_process module. To run the ls command and store its output in a text file, you can use the following code snippet as an example.

 ```js
        const { exec } = require('child_process');
        const fs = require('fs');

        // Run the 'ls' command
        exec('ls', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }

        // Store the command output in a text file
        fs.writeFile('output.txt', stdout, (writeError) => {
            if (writeError) {
            console.error(`Error writing to file: ${writeError.message}`);
            return;
            }
            console.log('Command output saved to output.txt');
        });
        });
```
