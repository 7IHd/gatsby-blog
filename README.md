# Gatsby
Modern site generator for React.

## Install and Run
Install gatsby and run it.

Direct [link](https://yarnpkg.com/lang/en/docs/install)


### Site Dependencies
```
cd test-drive
npm install
```


### Install Prettier
Prettier should already be listed as a dev dependency.
```
npm install --only=dev
```
Follow the following [directions](https://github.com/prettier/eslint-plugin-prettier) to have eslint and prettier play nicely.


### Follow quick start directions
Direct [link](https://www.gatsbyjs.org/docs/quick-start)


### Access Site
Access your site (probably localhost:8000, it will say once it's finished running `develop`) to see the "Hello World".


## Install Plugins for Transforming Markdown with Gatsby
Gatsby makes use of various plugins for building static sites. Here we will install `gatsby-source-filesystem` and `gatsby-transformer-remark` to work with locally stored Markdown files.


### Install plugins
```
npm install --save gatsby-source-filesystem@next gatsby-transformer-remark@next
```


### Create config
Create the `gatsby-config.js` file.

In that file, we'll do `module.exports`. We'll provide a `siteMetadata:` key, give it a `title` of `'My Blog'`, and `description` of, `'This is my cool blog.'`.

*gatsby-config.js*

```
module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'This is my cool blog.'
  },
}
```

Now that we have the `siteMetadata` object created, we'll add an array of plugins. First, we'll do  `gatsby-transformer-remark`.
Now we'll use an object because we're going to need to pass some options.

We'll `resolve` our plugin `gatsby-source-filesystem`. Then it can take an `options` object with a `name`. We'll call it `'pages'`. Its path will be in our current directory, so we'll do a string template with `${__dirname}/src/pages`.

```
module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'This is my cool blog.'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
```
