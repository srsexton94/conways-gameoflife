
# Conways Game of Life
A redition of Conway's game of life that sets an adjustable-size board to random start settings.  Built in participation of [Mintbean's CareerHack Hackathon](https://www.mintbean.io/).
##### [Deployed App can be found here](https://srsexton94.github.io/conways-gameoflife/)

## Dependencies
* [GA Browser Template](https://git.generalassemb.ly/ga-wdi-boston/browser-template) includes `require` system webpack, build pipeline, development server, Boostrap 3, Handlebars.js - no front end frameworks
* `npm install`
* grunt (`nag`, `make-standard`, `serve`, `build`, `deploy`)


## Structure
* Scripts: stored in [`assets/scripts/`](assets/scripts), the manifest [`assets/scripts/app.js`](assets/scripts/app.js)
* Config: deals with `apiUrls` in [`assets/scripts/config.js`](assets/scripts/config.js), but unnecessary for this project
* Styles: stored in [`assets/styles`](assets/styles) and loaded from [`assets/styles/index.scss`](assets/styles/index.scss).
* Forms: use [getFormFields](get-form-fields.md) to retrieve form data to send to an API (unnecessary for this project)
* Images: store in [`public/`](public)
* Fonts: use a CDN or download to [`public`](public)
