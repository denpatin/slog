# Slim Powered Blog Engine

A proof-of-concept experiment whether via `slim` one can handily and seamlessly build a blog to host at GitHub.

## Development

### Prerequisites

It is assumed that you already have `Ruby 2.4.0` installed.
If not, then you can follow a couple of simple steps from [here](https://rvm.io/) (applicable only for OS X and Linux).

Also, it is assumed that you already have `Node.js` installed.

### Preparation

1. `git clone https://github.com/denpatin/slog.git && cd slog`
* `bundle install`
* Gulp & Co.
```
npm install gulp-cli -g
npm install gulp -D
npm install --save-dev del
npm install --save-dev gulp-if
npm install --save-dev gulp-rename
npm install --save-dev gulp-concat
npm install --save-dev gulp-uglify
npm install --save-dev gulp-concat-css
npm install --save-dev gulp-minify-css
```

### Building the Blog

For now, just execute the `ruby build.rb > index.html` command. Then you find the main page file as `index.html`.

### Working with Assets

Run the `gulp dev` command (or `gulp prod` for cleaning unused css) to recompile the assets. You can find the build-ready versions in the `assets/build` directory.

### Creating New Post

`ruby new.rb` is responsible for creating new posts. You must pass an argument to the script; the argument is the title of the new post.

For example, `ruby new.rb My new entry` creates a file `201703181754-my_new_entry.slim` in the `posts/` directory, providing that the current time is 17:54 of 18th March, 2017.
