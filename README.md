# What is flybrid?

It's a demonstration and explaination of an approach for achieving 'fluid-hybrid' layouts in HTML emails, without any horrible conditional `<table>` code or `<div>` elements that are only used by certain email clients, or the potentially confusing switch to using CSS `min-width` and `max-width` rules to control column widths.

For those who don't know, 'fluid-hybrid' is an HTML email design term used to describe an approach for creating multi-column layouts that 'stack' nicely on smaller screens without the use `@media` queries, but with `@media` queries used to 'progressively enhance' the experience in email clients that support them. It's primarily built around the idea of using `text-align:center` on a container, and `display:inline-block` on the elements you want to stack, which in combination, makes the elements align to the centre of the container when stacked.

Nicole Merlin's article gives a fantastic explaination and demonstration of the overall effect:
http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919

Flybrid essentially provides the same results in the same email clients, but has been developed to make the technical implementation of the approach a little simpler and easier to understand.


## Does it even work?

Yes, it does. Or, at least the HTML examples provided in `commented.html` and `uncommented.html` all work as expected. Litmus test results for the current code can be found at: https://litmus.com/pub/395acb8

## How do I use it?

Download yourself a copy and look at `commented.html` in the `html` directory. It's both a working example, and a guide. Follow the rules explained within the comments, and you should know enough to modify the supplied code and use the technique within your own emails.

Before sending your email, it's intended that you use a CSS-Inliner tool to inline your CSS. `flybrid` has been developed using the following inliner tool from Campaign Monitor to prepare HTML before sending tests. Some CSS-Inliner tools work differently. So, for peace of mind, you'll probably want to use this too:
https://inliner.cm/

Whatever technique you use to create your email. **ALWAYS TEST YOUR CODE BEFORE SENDING**.

## Contributors

**[Andy Babic](http://twitter.com/andyjbabic "I'm on twitter")**, Web Developer at [Rock Kitchen Harris](https://www.rkh.co.uk)

## Building on the great work by

 **Nicole Merlin** at Email Wizardry and her approach explained in the following article: http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919
 
**Geoff Philips** at EmailOnAcid and all the useful blog articles he puts out on a regular basis:
https://www.emailonacid.com/blog/author/geoff-phillips
