# What is flybrid?

It's a demonstration and explanation of an approach for achieving 'fluid hybrid' layouts in HTML emails, without any unsightly conditional `<table>` code or additional `<div>` elements, or the confusing switch to using CSS `max-width` rules to control column widths, and the limitations that has when inner content doesn't quite 'push the columns out' to their intended size

For those who don't know, 'fluid-hybrid' is an HTML email design term, referring to a method of creating multi-column layouts that 'stack' nicely on smaller screens without the use `@media` queries (with `@media` queries often used to 'progressively enhance' the experience in email clients that support them). It's primarily based around the idea of using `text-align:center` on a container element, and `display:inline-block` on the columns you wish to stack, which in combination, makes the columns align to the centre of the container when stacked.

Nicole Merlin's article gives a fantastic explanation and demonstration of the overall idea / approach:
http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919

Flybrid essentially provides similar results in the same email clients, but has been developed to make the technical implementation of the approach a little simpler and easier to understand. Sticking with `width` CSS rules to control column sizes also tends to produce more consistent results in Outlook.

## Known limitations

The switch to using the `width` CSS rule instead of a `width:100%` / `max-width` combination to control column widths, means than columns will not naturally shrink down to fit the screen when their natural width exceeds that of the screen (adding `max-width:100%` to the columns does not seem to work). For example, a `400px` wide column will remain `400px` wide on a `320px` display. You can override the width easily enough with `@media` queries for clients that support them. But, in clients that don't (most commonly Gmail for Android & iOS), the results will be less than ideal. This shouldn't be a problem for most multi-column layouts, as columns will quite often be narrower than the smallest screen you wish to support (iPhone5/5S at 320 pixels). However, if your layout has columns upwards of 300px wide (e.g. in a side / main column layout), you might want to consider using the approach discussed in Nicola Merlin's article instead.

## Test results

Design test results for the current code can be found at: https://www.emailonacid.com/app/acidtest/display/summary/Nr9jCTqRpOzMjzxGG2tcs3QCXKJMhsG5TIh0iQU9aU1PL/shared

## How do I use it?

Download yourself a copy and look at `commented.html` in the `html` directory. It's both a working example, and a guide. Follow the rules explained within the comments, and you should know enough to modify the supplied code and use the technique within your own emails.

Before sending your email, it's intended that you use a CSS-Inliner tool to inline your CSS. `flybrid` has been developed using the following inliner tool from Campaign Monitor to prepare HTML before sending tests. Some CSS-Inliner tools work differently. So, for peace of mind, you'll probably want to use this too:
https://inliner.cm/

Whatever technique you use to create your email. **ALWAYS TEST YOUR CODE BEFORE SENDING**.

## Contributors

**[Andy Babic](http://twitter.com/andyjbabic "I'm on twitter")**, Web Developer at [Rock Kitchen Harris](https://www.rkh.co.uk)

## Building on the great work by

**Nicole Merlin** at Email Wizardry and her great 'fluid hybrid' tutorial: http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919
 
**Ros Hodgekiss** at Campaign Monitor, who originally posted about the 'fluid hybrid' approach in this article:
https://www.campaignmonitor.com/blog/email-marketing/2014/07/creating-a-centred-responsive-design-without-media-queries/
