webpackJsonp([21568026027427], {
  './node_modules/json-loader/index.js!./.cache/json/speedy-terminal-tabs-html.json': function(
    e,
    t
  ) {
    e.exports = {
      data: {
        markdownRemark: {
          html:
            '<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 476px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 65.33613445378151%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqUlEQVQoz2Moa55eTi5iKK6fNLuxtW1K/qwZs6ZMnNLX3QdE3R3dvV09QMaEvgn9vf19PSBBIKO/p3/yxMmzZs4CKu7qncqQU9HFI6PGJq/DJq3GJqvJJqnELqctqmIgoqQnoqzHq6HAxsfFDgZ8/Px8fLz8/Py8vLx8fHwa2oYMWWUdXFw8zKQDZXUdCjSrjWoeQppzK7ttnHwMze0NzeyIR0YWDp6BsQAZtmyC89cbzQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="terminal screen capture"\n        title=""\n        src="/static/d0e3ca22822bd854aa4df3ed4b75cc49-78af0.png"\n        srcset="/static/d0e3ca22822bd854aa4df3ed4b75cc49-137cf.png 148w,\n/static/d0e3ca22822bd854aa4df3ed4b75cc49-2c343.png 295w,\n/static/d0e3ca22822bd854aa4df3ed4b75cc49-78af0.png 476w"\n        sizes="(max-width: 476px) 100vw, 476px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Here’s a quick tip I just came across and I’m already kicking myself for not having looked for it before. You may have noticed that over time when using <strong>terminal.app</strong> that opening a new tab can take a fair amount of time. This can sometimes completely destroy your workflow while you agonizingly wait to be able to start typing.</p>\n<p>What’s going on is that by default, opening a new tab and therefore a new shell session, <strong>terminal.app</strong> uses <em>login</em> as the default command which will show your last login date. In order to get this date it has to search a system log, over time these files become heavily fragmented and lead to this delay.</p>\n<p>But there’s a simple solution to this problem that involves specifying the command that will be executed when launching shell sessions ourselves. <strong>zsh</strong> accepts the parameter ’<em>-i</em>’ and for those stuck on <strong>bash</strong>, you can use ’<em>-p</em>‘.</p>\n<p>Now in order to set this parameter we can open <strong>terminal.app</strong> preferences and choose ”<em>Shells open with: Command</em>”. Now we simply introduce the path to our preferred shell and add the corresponding parameter mentioned before. In <strong>iTerm2</strong> we can also make this change under <em>preferences/profiles/general</em>.</p>\n<p>Hopefully I’m not the last person to have discovered this and I have been of some help.</p>\n<p>Happy Tabbing!</p>',
          frontmatter: {
            date: 'February 09, 2015',
            path: '/speedy-terminal-tabs.html',
            tags: ['tag'],
            title: 'Speedy Terminal Tabs',
            image: {
              childImageSharp: {
                resize: {
                  src: '/static/d0e3ca22822bd854aa4df3ed4b75cc49-2c40b.png',
                },
              },
            },
          },
        },
      },
      pathContext: {
        prev: {
          excerpt:
            'I find myself reading a lot about entrepreneurship and carving your place in a market. I’m not that interested in being someone who navigates these perils but I enjoy being knowledgeable enough to talk to those who have made the plunge.  So when I...',
          html:
            '<p>I find myself reading a lot about entrepreneurship and carving your place in a market. I’m not that interested in being someone who navigates these perils but I enjoy being knowledgeable enough to talk to those who have made the plunge. </p>\n<p>So when I initially had an idea for a ridiculously simple <strong>iOS</strong> app back in August ‘14, I initially discarded it as it wasn’t going from <a href="http://zerotoonebook.com">zero to one</a> in any way and people certainly weren’t going to pay for it. The entire idea of the app is to display a <strong>YouTube</strong> users subscriber count, that’s it, a single number pulled from the <strong>YouTube</strong> API. Nonetheless I decided to build the app just to see if it was as simple to create as the idea was to come about. I soon moved on and forgot all about it.</p>\n<p>Now the reason there’s any demand for my idea is because the <strong>YouTube</strong> app on <strong>iOS</strong> shows a subscriber count but it isn’t in real time and to budding <strong>YouTubers</strong> keeping tabs on their daily growth this is important. Fast-forward to a month ago and I discovered that the official YouTube app was still showing a stale count and that no one else had thought to spend the hour it took me to build the app and then release it.</p>\n<p>So I made the decision to become a registered <strong>iOS</strong> developer and release my app as it would be a good learning experience having already published apps on <strong>Google Play</strong>. I quickly learned that there were a lot more complications with submitting apps on <strong>iOS</strong> than <strong>Android</strong> and because I was using a 3rd party API I learnt a little bit about trademarks. <strong>YouTube</strong> doesn’t allow their name to be used in an apps name in any way, this includes variations such as YT, my app was originally going to be called ytsubs so that was now out. Even so, because my app relied entirely on the <strong>YouTube</strong> API, I was allowed to use a “Powered by Youtube” logo in my app which give it some sense of polish.</p>\n<p>Now the thing that stuck out for me most with <strong>iOS</strong> is how easy it is to add in the latest capabilities that the OS provides, the app has a widget in the Notification Center, utilises handoff to open your <strong>YouTube</strong> channel on another device and even supports <strong>watch</strong> from day 1.</p>\n<p>So what I thought was a silly idea, and still do, allowed me to learn about all the different areas of <strong>iOS</strong> development with minimal effort. Thanks goes out to my <a href="https://www.youtube.com/channel/UCScRSwdX0t31gjk3MYXIuYQ">girlfriend</a> who sparked the idea with her incessant checking of her channel count and now I look forward to seeing how far my app can reach.</p>\n<p><strong>Update 07/09/15</strong>: sub count has seen great response from users and with iOS 9 approaching I recently spent some time preparing <strong>sub count</strong> for <strong>swift 2</strong> and <strong>WatchOS 2</strong>. I’m looking forward to releasing the new and improved version 2.0 of <strong>sub count</strong> as soon as possible.</p>\n<html><head></head><body><center><a href="https://itunes.apple.com/us/app/sub-count/id977966794?mt=8&amp;uo=6&amp;at=&amp;ct=" target="itunes_store">\n\t\t \n\t\t </a>\n</center></body></html>',
          id:
            '/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/posts/2015-04-13-sub-count/index.md absPath of file >>> MarkdownRemark',
          timeToRead: 2,
          frontmatter: {
            date: '2015-04-13T12:00:00+00:00',
            path: '/sub-count.html',
            tags: ['tag'],
            title: 'Sub Count',
          },
        },
        next: {
          excerpt:
            'During the summer of 2014 I have been making the most of not working by trying out lots of different technologies, Node.js, Verilog, Apple’s new hotness Swift and improving on my still novice status as an Android developer. This post is regarding my...',
          html:
            '<p>During the summer of 2014 I have been making the most of not working by trying out lots of different technologies, Node.js, Verilog, Apple’s new hotness Swift and improving on my still novice status as an Android developer.</p>\n<p>This post is regarding my recent efforts with Android. After finally grasping most of the Android staples that had always baffled me before, Content Providers, Cursor Loaders, Custom Adapaters, I quickly realised that I could now build the app I had worked on previously in Google Summer of Code 2013, ocw-android but with all these great tools provided by Android.</p>\n<p>So in the space of a little under 3 weeks I completely re wrote the app from scratch and have ended up with something that runs really well and is also fun to use.</p>\n<p>On first opening the app, all data is downloaded as json, parsed and then stored in an sqlite database, any subsequent openings of the app will not require internet and will just load the local data until the user chooses to “Pull To Refresh”.</p>\n<p></p>\n<p>All the views are bound to cursors pulled from the content provider so that should the data in the database change while the service that downloads the json data is running, the views will update automatically.</p>\n<p>On the usability side there are some cool features like a two pane tablet interface.</p>\n<p></p>\n<p>And a navigation drawer for filtering the event list by date.</p>\n<p></p>\n<p>Seeing as my Summer is now rapidly drawing to a close I have decided to wrap up my work on the app for now but you can download the current snapshot of ocw-android-2014 from the Play Store right now!</p>\n<html><head></head><body><center><a href="https://play.google.com/store/apps/details?id=com.partiallogic.ocw_android_2014">\n  \n</a></center></body></html>\n<p>You can also find all the source code on Github as an Android Studio project.</p>\n<html><head></head><body><center><a href="https://github.com/markholland/ocw-android">\n  \n</a></center></body></html>',
          id:
            '/Users/markholland/Documents/js/gatsby/partiallogic-gatsbyJS/posts/2014-08-29-ocw/index.md absPath of file >>> MarkdownRemark',
          timeToRead: 1,
          frontmatter: {
            date: '2014-08-29T12:00:00+00:00',
            path: '/ocw-2014.html',
            tags: ['tag'],
            title: 'Android revisited',
          },
        },
      },
    };
  },
});
//# sourceMappingURL=path---speedy-terminal-tabs-html-8477a88496a7fa086297.js.map
