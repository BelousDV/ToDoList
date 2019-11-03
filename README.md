# ToDoList
TestTask<br>
<p>This application allows you to create, delete and edit tasks.</p>
<p>To create a task, use the create button. When creating, you can enter the name of the task, its description, and also indicate the priority of importance.</p>
<p>To edit, delete or execute for each task, use the menu button. The list of tasks can be sorted by name, priority and status.</p>
<p>To store data is used browser <strong>localStorage</strong>.</p>
<a href="https://belousdv.github.io/">On this link you will see the application https://belousdv.github.io</a>
<br>
<p>Project development involves the use of npm, Webpack 4, NodeJS, webpack-dev-server, webpack-cli, css-loader, postcss-loader, sass-loader, style-loader, autoprefixer, css-nano.</p>
<p>The assembly of project data is in the file <strong>package.json</strong> and <strong>package-lock.json</strong>, the configuration of the project modules is in the <strong>webpack.config.js and src / postcss.config.js</strong> files. 
You can build a new environment by copying these files to a new directory, install NodeJS and run the command line:</p>
<p><strong>npm install</strong> - installs all the necessary modules for the project;</p>
<p><strong>npm run build</strong> - compiles javascript, css-files for the project into the dist directory from src;</p>
<p><strong>npm run dev</strong> - to start the server and start the project automatically in the browser.</p>
<p>JavaScript was used to implement the logic of this project, and the SASS / SCSS preprocessor and Autoprefixer were used to write CSS styles.</p> 
<p>The project was built using the Webpack package manager.</p>
<p>The source JavaScript files are located in the <strong>src</strong> directory, the main script connected to the HTML markup - <strong>main.js</strong> is located in the <strong>dist</strong> directory.
The <strong>main.js</strong> file was compiled by the package manager from the <strong>src</strong> directory and the source files <strong>index.js, load.js, create.js, search.js</strong>.
The <strong>main.css</strong> file contains a stylesheet, it was compiled from <strong>SCSS / main.scss</strong> using Webpack, for this css-loader, postcss-loader, sass-loader, style-loader and autoprefixer were installed.</p>
