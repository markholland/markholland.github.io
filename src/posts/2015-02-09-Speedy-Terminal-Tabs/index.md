---
path: "/speedy-terminal-tabs.html"
date: "2015-02-09T12:00:00+00:00"
title: "Speedy Terminal Tabs"
tags: ["tag"]
image: "terminal.png"
---

![terminal screen capture](http://partiallogic.com/images/posts/terminal.png)

Here's a quick tip I just came across and I'm already kicking myself for not having looked for it before. You may have noticed that over time when using **terminal.app** that opening a new tab can take a fair amount of time. This can sometimes completely destroy your workflow while you agonizingly wait to be able to start typing.

What's going on is that by default, opening a new tab and therefore a new shell session, **terminal.app** uses *login* as the default command which will show your last login date. In order to get this date it has to search a system log, over time these files become heavily fragmented and lead to this delay.

But there's a simple solution to this problem that involves specifying the command that will be executed when launching shell sessions ourselves. **zsh** accepts the parameter '*-i*' and for those stuck on **bash**, you can use '*-p*'.

Now in order to set this parameter we can open **terminal.app** preferences and choose "*Shells open with: Command*". Now we simply introduce the path to our preferred shell and add the corresponding parameter mentioned before. In **iTerm2** we can also make this change under *preferences/profiles/general*.

Hopefully I'm not the last person to have discovered this and I have been of some help.

Happy Tabbing!