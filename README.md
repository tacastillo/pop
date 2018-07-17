# Pop

**Pop** is an open-sourced Angular component library used to convey the personal brand of a developer (me). The library is heavily _experimental_ and is much more of a learning process than actual production quality package.

## Disclaimer
In no way, shape or form, do I believe that Pop is sufficient example of how component libraries and design systems work. This project is just kind of my jump into the space and is more _experimental_ than anything else. I come from no experience in the design space, let alone something as massive as creating a living language such as a design system. I **also** cannot vouch that anything I've done can be interpreted as a "best practice" from the development standpoint.

## Goals
When coming up with the idea of Pop and writing it, I really wanted to be able to have it separated as a two lists with some overlap: one with its goals as a component library, and another with what I wanted to convey with Pop as a design system.

### As a Component Library
* **Keep Things Atomic** - Follow the ideas of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) in building pieces as small as possible, and then letting them build on top of each other to form organisms.
* **Empower the Developer** - Keep the components as agnostic as possible so that they developer using them can define the purpose and intents of the components. Expose most of a component's API so the developer can manage the logic in their components, not in Pop's.
* **Be Extendable** - In conjuction with the above point, write code with the thought process of constantly keeping other developers in mind. Leave the components small and readable so that others can extend Pop components however they want with no side effects.
* **Test the _SHIT_ Out of Everything** - Follow Test-Driven Development(TDD) principles and write unit and component integration tests to test the components as thoroughly as possible.  Given that much of the component's APIs are exposed to the developer, it gets really important for developer's to have faith in the stability of the components. That, and because unit testing does not get any easier than testing individual atoms.

### As a Design System
* **Tokenize Every Value** - Using [design tokens](http://www.lightningdesignsystem.com/design-tokens/) creates consistency in a developer's code and streamlines a developer's thought process since they don't have to consciously figure out how much spacing or what color to use. Pop was written by a single developer with no design team, but using design tokens builds a bridge between developer and designer as it creates a common language that both groups can understand.
* **Bold and Expressive** - Leverage combinations of bold color and stark contrast in order to draw the end user's attention. This isn't a design system made for enterprise sales software; it's made to grab attention and retain users.
* **Size Matters** - Have atoms and text be larger than usual in order to make things easy to read, use and navigate.
* **Generous Space** - Let the text and components breathe by allowing padding on components and leaving plenty of margin between separate groupings. Let links, buttons and triggers be easy to hover and click, while keeping in mind [Fitt's Law](https://en.wikipedia.org/wiki/Fitts%27s_law).
* **Group with Intention** - Be aware of grouping elements and components together, making use of [Gestalt Principles](https://en.wikipedia.org/wiki/Principles_of_grouping), however always question whether its necessary to group elements. When combined with large paddings and margins, prioritizing using space instead of borders in order to separate groups.
* **Minimize Motion** - Refrain from using translations on large elements or components in order to transition content. In order of priority, some alternatives to focus on include: color, opacity, or shape.
