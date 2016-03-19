# Notes on the resume 

The data should be contained in a json file from which things should be parsed. 

The [circular timeline][resume circular timeline] is impressive. I need to make a couple different versions. One for distribution, on paper, and another for an online demonstration. 

Updates in this version ...

1. The major change is the fact that the folder structure is going to change significantly. The current folder structure will be as follows:

```bash
    .
    ├── Readme.md
    ├── assets
    │   └── assets
    │       ├── common
    │       │   ├── css
    │       │   │   └── main.css
    │       │   ├── img
    │       │   └── js
    │       │       └── functions.js
    │       └── lib
    │           └── d3
    │               ├── LICENSE
    │               ├── d3.js
    │               └── d3.min.js
    └── index.html
```

2. The data and the code is separated into different javascript files. The data is a jason-style javascript object. All of the functionallity is converted into small manaagble chunks ...



##References:
1. [The circular timeline ][resume circular timeline]
2. [The infographic][infographic resume]
3. [Visual resume with an associated video][visual resume]
4. [Cheat sheet 1][csv cheats leads]

### Colormap References
5. [A good website][colormap]
6. [The most definitive place to go to][colorbrewer]

[visual resume]: http://visual.ly/what-resumup
[csv cheats leads]: http://visual.ly/what-include-cv
[infographic resume]: http://visual.ly/infographic-resume-4
[resume circular timeline]: http://visual.ly/resume-timeline-infographic
[colormap]:https://vis4.net/blog/posts/mastering-multi-hued-color-scales/
[colorbrewer]:http://colorbrewer2.org/

