# FAQ accordion card solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Screenshot

!['project preview](./src/assets/images/desktop-design.jpg "project preview")

### Links

- Google Fonts: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans?query=kumbh)
- Icons: [ICONS8](https://icons8.com/icons/set/faq-icon)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [CSS Modules Stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) - For styles


### What I learned


```css
.proud-of-this-css {
  transition: opacity 0.3s ease, max-height 0.3s ease;
}
```
```js
 <div
      className={styles.article}
      style={
        activeQuestNumber === itemNumber
          ? { paddingBottom: "16px", gap: "13px" }
          : {}
      }
      onClick={() => toggleQuest(itemNumber)}
    >
```
## Author

- Author - [Giorgi Gurgenidze](https://www.linkedin.com/in/george-gurgenidze-5801501a0/)
- GitHub Repo - [FAQ-Accordion-Card](https://github.com/gurgenidzegiorgi/FAQ-Accordion-Card)
- Live URL - [Vercel](https://www.twitter.com/yourusername)
