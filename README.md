# What is flybrid?

A new approach to creating 'fluid-hybrid' layouts in HTML emails, without the horrible conditional `<table>` code or `<div>` elements that are only used by certain email clients, or the potentially confusing switch to using CSS `min-width` and `max-width` rules to control column widths.

## Does it even work?

Before sending your email, it's intended that you use a CSS-Inliner to inline your CSS. Flybrid has been developed using the following inliner from Campaign Monitor:

https://inliner.cm/

Some CSS-Inliner tools work in different ways, so for peace of mind, you'll probably want to use that too.

Litmus test results for the current code can be found at:

https://litmus.com/checklist/public/d7cf1a7

## How do I use it?

Download yourself a copy and look at `commented.html` in the `html` directory. It's both a working example, and a guide. Follow the 8 rules explained within the comments, and you should know enough to modify the supplied code and use the technique within your own emails.

## Building on the great work by

 **Nicole Merlin** at Email Wizardry and her approach explained in the following article: http://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919
 
**Geoff Philips** at EmailOnAcid and all the useful blog articles he puts out on a regular basis:
https://www.emailonacid.com/blog/author/geoff-phillips
