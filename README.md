# What is flybrid?

It's a simple, alternative approach for creating 'fluid-hybrid' layouts for HTML emails, that will work nicely alongside other fluid-hybrid techniques.

Other fluid-hybrid approaches use complex combinations of tricks and hacks to achieve the desired effect. They are driven by a lot of smart thinking, but they are typically complex, difficult to implement quickly, and come with their own set of quirks. For most layouts of two or more columns, flybrid will allow you to achieve comparable results with less code and complexity, helping you meet deadlines with your sanity intact.

### Benefits of flybrid

- No conditional `<table>` code or `<div>`s for each layout. Just a single `<table>` that breaks down in the right email clients.
- No additional tricks or hacks are needed for targeting different clients - the included styles
- Forget `max-width` CSS rules - control width using `width` again.
- Less code, less maintenance, fewer headaches.
- Lots of examples to copy from.
- Well tested. [See the design test results for yourself »](https://www.emailonacid.com/app/acidtest/display/summary/02nvMlv0HNyCjHgYAoMovYuPS4Wb6f6MBS3gwlrMPiq8c/shared)

### Limitations of flybrid

- Using flybrid, columns will not shrink to fit the viewport on smaller mobile devices (like they do with other fluid-hybrid techniques), so it's not suitable for ALL layouts. [Check out the design tests](https://www.emailonacid.com/app/acidtest/display/summary/02nvMlv0HNyCjHgYAoMovYuPS4Wb6f6MBS3gwlrMPiq8c/shared) to get a better idea of how flybrid can be used. 

## Getting started

First take a look at `[dist/with-primer.html]()`. Follow the guidelines in the primer at the top, and check out the examples provided to learn how it works. 

For the flybrid approach to work in an email, your email will need a fluid-hybrid compatible 'frame' that will resize automatically to fit the viewport. If you've developed fluid-hybrid emails before, you'll likely have something existing to copy from. If not, you can copy `dist/without-primer.html` to use as a starting point, or use one from elsewhere (such as from [Nicole Merlin's fluid-hybrid tutorial](https://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919))

The styles used by flybrid have been separated out to `dist/flybrid.css`, to make them easy to drop into your project.

### Remember to inline your styles before sending

Before sending your email, you should use a tool to inline your CSS. `flybrid` has been developed using a [gulp](http://gulpjs.com/) workflow to automatically inline styles for testing (amongst other things). You may have your own 
https://inliner.cm/

Whatever technique you use to create your email. **ALWAYS TEST YOUR CODE BEFORE SENDING**.

### More about 'fluid-hybrid'

For those who don't know, 'fluid-hybrid' is an HTML email design term, referring to a method of creating multi-column layouts that 'stack' nicely on smaller screens without the use `@media` queries. It's primarily based around the idea of using `text-align:center` on a container element, and `display:inline-block` on the columns you wish to stack, which in combination, makes the columns align to the centre of the container when stacked.

Nicole Merlin's article gives a fantastic explanation and demonstration of the overall idea / approach:
http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919

Stig Morten Myre also does a great job of explaining the fluid-hybrid approach used by Campaign Monitor in their templates here:
https://medium.com/cm-engineering/coding-mobile-first-emails-1513ac4673e#.5qqm2t1at 

## Contributors

**[Andy Babic](http://twitter.com/andyjbabic "I'm on twitter")**, Web Developer at [Rock Kitchen Harris](https://www.rkh.co.uk)
