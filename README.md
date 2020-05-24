# Personal Blog

## Description

This project is a personal blog built with [Gatsby](https://www.gatsbyjs.org/) and inspired by [Dan Abramov's Blog](https://overreacted.io/). It overrides some default styles and configurations like styles and theme (using [gatsby-blog-theme plugin](https://www.gatsbyjs.org/packages/gatsby-theme-blog/)).

_Gatsby_ offers countless ways for feeding your UI with data. In this case, all posts are written as `.mdx` files, which is very convenient for developers.

## Project

The project has the following folder structure:

- `content/` - this is the folder where all `posts` are along with their assets.
- `src/` - this folder holds all shadow files that overwrites Gatsby's default configuration like styles and themes.
- `public/` - folder created by Gatsby
- `package.json` - default file for all [yarn](https://yarnpkg.com/) (and `npm`) projects

## Running Locally

1. Clone the repository

2. Install all dependencies

```
yarn install
```

3. Run it in `development` environment just to play around

```
yarn develop
```

> It will be running on `localhost:8000` by default

4. If you want to deploy it:

```
yarn build
```

> This populates `public` folder with content that is optimized and ready to be deployed
