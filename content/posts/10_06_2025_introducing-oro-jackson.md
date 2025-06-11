---
title: Oro Jackson - Static site generator written in Rust
---

I love [Quartz](https://quartz.jzhao.xyz/). Depending upon when you are watching this post, the website you are watching it on is probably made using Quartz too. <br/>
It is such an awesome project that it inspired me to create a static site generator. For the past year, I have been trying to learn Rust and so I decided to write a static site generator in Rust.

# Introducing Oro Jackson

> The name is based on a [pirate ship](https://onepiece.fandom.com/wiki/Oro_Jackson) from [One Piece](https://en.wikipedia.org/wiki/One_Piece)

**Oro Jackson** is a customizable, single executable, plugin-based, very fast, open-source, static site generator written in Rust.

> [Check it out here](https://github.com/lovedeepsingh-07/oro-jackson)

When I am writing this blog post. The total number of features that I have added to this is not that many but the basic features of a static site generator are added.<br/>
The notable features that are present are:

- Latex support
- Syntax highlighting
- Mermaid diagrams
- Nix support
- Docker Support
- Customizable plugin-based architecture

I plan to add many more features in the future.

# How it Works ?

If you look at the innitial commits of the repository, you will see some weird things in the code. The code is just put-together, it does not follow any proper rule or principle regarding the architecture of the application that I am trying to build. In the starting, it worked, and pretty nicely too. But, it soon started cathing up to me when every new feature started requiring a major, if not complete refactor of the majority of the application code.

Frustrated by that issue I started looking into the [Quartz Architecture](https://quartz.jzhao.xyz/advanced/architecture) and the code itself. That's when I realised that I needed an abstraction in order to properly build this project.

Hence, I mimicked the architecture of Quartz and other stuff from the internet to create a **plugin-based** architecture of the project. The very basics of this architecture can be explaine via the following diagram:

```mermaid
graph LR
    MarkdownContent(Markdown Content) --> Transformers{{Transformers}} --> Emitters{{Emitters}} --> OutputHTML(Output HTML)
```

1. When the user runs the build-subcommand the first thing that occurs is that we prepare the content from the content folder, by prepare I mean that every file from the content directory is converted into [oj_file](https://github.com/lovedeepsingh-07/oro-jackson/blob/main/src/oj_file.rs) which is just a simple abstraction over the actual file itself.
2. The prepared content is then sent into a function that simply runs a for loop and applies all the `transformers` onto the preaped content. What I mean by applying is that every single transformer does some action on the prepared content before passing it along to the next transformer. Transformers perform functions such as converting markdown to HTML, sanitizing the HTML etc.
   > Each individual transformer acts on every single file before passing it onto the next transformer, and the order in which the transformers are applied is also very important
3. After the transformers have processed the content, the processed content is then passed onto `emitters` which do a different job than transformers but in a similar manner. The emitters basically take the processed content and writes it into the build directory. Ofcourse there are some additional tasks that need to done by the emitters in order to properly perform their main job.

# Looking for Contributors

Even though I love this project so very much, time is a resource that cannot be manipulated by my love. I just graduated high school a few months ago and have a lot on my plate currently and that is why this project took so long(~2 months) to even get to this point.<br/>
The main reason for this blog post is that I am looking for people to contribute to this project.

If you have some knowledge of Rust and Javascript ecosystem and are interested in this project, consider checking out the various [github issues](https://github.com/lovedeepsingh-07/oro-jackson/issues) that I have added. I have added issues relating to many aspects of this project such as bugs with rebuilding, enhancement issues, new features, etc and I have also marked `good-first-issue`s for beginners.

Any contribution(however small) would be greatly appreciated!
