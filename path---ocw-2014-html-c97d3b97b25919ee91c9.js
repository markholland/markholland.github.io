webpackJsonp([0x64a1e237954e], {
  './node_modules/json-loader/index.js!./.cache/json/ocw-2014-html.json': function(
    e,
    t
  ) {
    e.exports = {
      data: {
        markdownRemark: {
          html:
            '<p>During the summer of 2014 I have been making the most of not working by trying out lots of different technologies, Node.js, Verilog, Apple’s new hotness Swift and improving on my still novice status as an Android developer.</p>\n<p>This post is regarding my recent efforts with Android. After finally grasping most of the Android staples that had always baffled me before, Content Providers, Cursor Loaders, Custom Adapaters, I quickly realised that I could now build the app I had worked on previously in Google Summer of Code 2013, ocw-android but with all these great tools provided by Android.</p>\n<p>So in the space of a little under 3 weeks I completely re wrote the app from scratch and have ended up with something that runs really well and is also fun to use.</p>\n<p>On first opening the app, all data is downloaded as json, parsed and then stored in an sqlite database, any subsequent openings of the app will not require internet and will just load the local data until the user chooses to “Pull To Refresh”.</p>\n<p></p>\n<p>All the views are bound to cursors pulled from the content provider so that should the data in the database change while the service that downloads the json data is running, the views will update automatically.</p>\n<p>On the usability side there are some cool features like a two pane tablet interface.</p>\n<p></p>\n<p>And a navigation drawer for filtering the event list by date.</p>\n<p></p>\n<p>Seeing as my Summer is now rapidly drawing to a close I have decided to wrap up my work on the app for now but you can download the current snapshot of ocw-android-2014 from the Play Store right now!</p>\n<html><head></head><body><center><a href="https://play.google.com/store/apps/details?id=com.partiallogic.ocw_android_2014">\n  \n</a></center></body></html>\n<p>You can also find all the source code on Github as an Android Studio project.</p>\n<html><head></head><body><center><a href="https://github.com/markholland/ocw-android">\n  \n</a></center></body></html>',
          frontmatter: {
            date: 'August 29, 2014',
            path: '/ocw-2014.html',
            tags: ['tag'],
            title: 'Android revisited',
            image: {
              childImageSharp: {
                resize: {
                  src: '/static/4e9a95cf7025f7dc1da351e45e9f97b3-57c0c.jpg',
                },
              },
            },
          },
        },
      },
      pathContext: {
        prev: {
          excerpt:
            'Here’s a quick tip I just came across and I’m already kicking myself for not having looked for it before. You may have noticed that over time when using  terminal.app  that opening a new tab can take a fair amount of time. This can sometimes...',
          html:
            '<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 476px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 65.33613445378151%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqUlEQVQoz2Moa55eTi5iKK6fNLuxtW1K/qwZs6ZMnNLX3QdE3R3dvV09QMaEvgn9vf19PSBBIKO/p3/yxMmzZs4CKu7qncqQU9HFI6PGJq/DJq3GJqvJJqnELqctqmIgoqQnoqzHq6HAxsfFDgZ8/Px8fLz8/Py8vLx8fHwa2oYMWWUdXFw8zKQDZXUdCjSrjWoeQppzK7ttnHwMze0NzeyIR0YWDp6BsQAZtmyC89cbzQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="terminal screen capture"\n        title=""\n        src="/static/d0e3ca22822bd854aa4df3ed4b75cc49-78af0.png"\n        srcset="/static/d0e3ca22822bd854aa4df3ed4b75cc49-137cf.png 148w,\n/static/d0e3ca22822bd854aa4df3ed4b75cc49-2c343.png 295w,\n/static/d0e3ca22822bd854aa4df3ed4b75cc49-78af0.png 476w"\n        sizes="(max-width: 476px) 100vw, 476px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Here’s a quick tip I just came across and I’m already kicking myself for not having looked for it before. You may have noticed that over time when using <strong>terminal.app</strong> that opening a new tab can take a fair amount of time. This can sometimes completely destroy your workflow while you agonizingly wait to be able to start typing.</p>\n<p>What’s going on is that by default, opening a new tab and therefore a new shell session, <strong>terminal.app</strong> uses <em>login</em> as the default command which will show your last login date. In order to get this date it has to search a system log, over time these files become heavily fragmented and lead to this delay.</p>\n<p>But there’s a simple solution to this problem that involves specifying the command that will be executed when launching shell sessions ourselves. <strong>zsh</strong> accepts the parameter ’<em>-i</em>’ and for those stuck on <strong>bash</strong>, you can use ’<em>-p</em>‘.</p>\n<p>Now in order to set this parameter we can open <strong>terminal.app</strong> preferences and choose ”<em>Shells open with: Command</em>”. Now we simply introduce the path to our preferred shell and add the corresponding parameter mentioned before. In <strong>iTerm2</strong> we can also make this change under <em>preferences/profiles/general</em>.</p>\n<p>Hopefully I’m not the last person to have discovered this and I have been of some help.</p>\n<p>Happy Tabbing!</p>',
          id:
            '/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/posts/2015-02-09-Speedy-Terminal-Tabs/index.md absPath of file >>> MarkdownRemark',
          timeToRead: 1,
          frontmatter: {
            date: '2015-02-09T12:00:00+00:00',
            path: '/speedy-terminal-tabs.html',
            tags: ['tag'],
            title: 'Speedy Terminal Tabs',
          },
        },
        next: {
          excerpt:
            'So with the recent news of  Facebook  acquiring the Chat service  Whatsapp , many felt they had to find an alternative. I don’t blame them, if a company thinks buying another company is worth x money then they expect to make a lot more than x money...',
          html:
            '<p>So with the recent news of <strong>Facebook</strong> acquiring the Chat service <strong>Whatsapp</strong>, many felt they had to find an alternative. I don’t blame them, if a company thinks buying another company is worth x money then they expect to make a lot more than x money from owning it.</p>\n<p>But when people blindly make the switch they might easily be moving to a service with the same intentions or worse than what <strong>Facebook</strong> could turn <strong>Whatsapp</strong> into.</p>\n<p>One of these alternative chat services is <strong>Telegram</strong> that quite surprisingly was already making some impressive traction months before the <strong>Whatsapp</strong> acquisition came about.</p>\n<p>They follow a similar plan as <strong>Whatsapp</strong>, make a great experience and worry about making money once you have an impressive userbase. The difference with <strong>Telegram</strong> is that they are selling themselves as the <strong>“secure”</strong> alternative and because of this claim I’m here today.</p>\n<p>Obviously, why wouldn’t they sell themselves as the secure alternative, it makes great sense with all the <strong>NSA</strong>, <strong>GCHQ</strong> spying being a hot topic these days. Then they throw in that they are open source by making their <a href="%22https://github.com/DrKLO/Telegram%22">clients</a> available on github and detailing their <a href="%22https://core.telegram.org/mtproto%22">crypto technique</a>.</p>\n<p>All is well and good making your clients open source and I applaud any company that does but particularly when we’re talking about a chat service whose selling point is security, what use is open source clients when the server remains proprietary. All we can be sure of is that our messages are secure when they’re on the client, as soon as they’re sent to a black box server we have no certainty of what next happens to our messages. More worrying is that <a href="%22http://community.kde.org/GSoC/2014/Ideas#Project:_Telegram_Network_Support%22">multiple</a> <a href="%22http://wiki.apertium.org/wiki/Ideas_for_Google_Summer_of_Code%22">organizations</a> that have been accepted into this years Google Summer of Code have ideas on their project page to incorporate telegram into their project, this seems crazy to me and incredibly shortsighted.</p>\n<p>Next, detailing your crypto that super Ph.Ds in Maths created is all well and good until people start debunking its security within <a href="%22http://unhandledexpression.com/2013/12/17/telegram-stand-back-we-know-maths/%22">days</a>. Also, making a <a href="%22http://thoughtcrime.org/blog/telegram-crypto-challenge/%22">competition with flawed rules</a>  is a surefire way to turn the community against you even more.</p>\n<p>But let’s step back for a second and imagine that <strong>Telegram</strong> was identical to <strong>Whatsapp</strong>, no claims of security and people use it fully understanding that they have no control over anything once it has been sent, who exactly is <strong>Telegram</strong>? A small startup out to disrupt? Nop, not even close, <strong>Telegram</strong> was founded by the same cofounders of <strong><a href="%22http://en.wikipedia.org/wiki/VK_(social_network)%22">VK</a></strong>, the second largest social network in Europe. That fact alone should keep people far away from <strong>Telegram</strong>, you don’t trust <strong>Facebook</strong>? A site you use everyday? But you do trust someone in the exact same business of profiting from it’s users information that you don’t even use?</p>\n<p>So what chat service should you use if you want everything to be secure? Well, there probably isn’t and there never will be. There are options like <a href="%22https://crypto.cat%22">Cryptocat</a> but how sure can you really be?</p>\n<p>And this is where I’ve ended up, it all comes down to how much you <strong>Trust</strong> the companies whose products you use, my messenger of choice is currently <strong>Google Hangouts</strong>, it’s probably not secure, <strong>Google</strong> can read everything, the clients suck, but I’ve been using <strong>Google</strong> services for a long time and until now nothing bad has happened so a level of trust has been built up. And that’s it, it’s as safe to use as my trust in the company.</p>\n<p>Nothing more.</p>',
          id:
            '/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/posts/2014-03-09-Telegram/index.md absPath of file >>> MarkdownRemark',
          timeToRead: 3,
          frontmatter: {
            date: '2014-03-09T12:00:00+00:00',
            path: '/telegram.html',
            tags: ['tag'],
            title: "FOSS isn't enough STOP Trust is everything STOP",
          },
        },
      },
    };
  },
});
//# sourceMappingURL=path---ocw-2014-html-c97d3b97b25919ee91c9.js.map
