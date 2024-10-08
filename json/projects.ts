import { tags, Tag } from "./tags";

const blurDataURL16x9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAIAAAC0SDtlAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJJREFUeJxjeEIiYBjVMCg0AAB6foDQu5BAxwAAAABJRU5ErkJggg==";
const blurDataURL9x16 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAIAAABLKsIUAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABFJREFUeJxjeIIbMIzKDXo5AL1wgNDWSlfHAAAAAElFTkSuQmCC";


const blue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY2BY9OI/AAS6AopXiWMyAAAAAElFTkSuQmCC";
const bluedark = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY2DQy/4PAAJkAZl/AiRYAAAAAElFTkSuQmCC";
const bluelight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY3j76ft/AAl8A9a49/U9AAAAAElFTkSuQmCC";
const brownlight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY/h/uu8/AAh9A1iRVUieAAAAAElFTkSuQmCC";
const graydark = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY7CwsPgPAAL8AahMRHs7AAAAAElFTkSuQmCC";
const graylight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY7hy5cp/AAh4A3zas3NuAAAAAElFTkSuQmCC";
const green = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY2B4wfUfAAPQAfIQ5Md8AAAAAElFTkSuQmCC"
const greenlight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY9j6TPY/AAbEAriqyasLAAAAAElFTkSuQmCC";
const orange = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY/hfr/4fAAbLAqUa4S1PAAAAAElFTkSuQmCC";
const redlight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY/hUXPwfAAcLAth5aE22AAAAAElFTkSuQmCC";


export const projects = [
  {
    "id": 0,
    "title": "AnimationUI",
    "slug": "animationui",
    "thumbnail": "AnimationUI.webp",
    "blurDataURL": graydark,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "csharp"
      || tag.slug === "unity"
      || tag.slug === "ilustrator"
      || tag.slug === "figma"
      || tag.slug === "tools"
    ),
    "description": "A really useful tool to animate UI in Unity Engine. It was born because i'm tired of writing and tweaking UI animations manually. With this tool, you can create UI animation easily with no code. You can simply drag and drop to create some smooth UI animation. There are some option that you can set such as the easing, duration, etc. You can also see the preview, drag the progress bar and also see the progress bar of each individual sequence. You can also make a custom sequence for non UI component with UnityEvent including the dynamic one. Adding function to call at certain time or at the end of animation is also possible with code. Features:\n- Sequence for Animating values of RectTransform, Image, Camera, CanvasGroup, Transform, and Dynamic UnityEvent.\n- Sequence for instant method such as Set Active All Input, Play SFX, Wait before executing next \n- sequence, Set Active GameObject, Loading scene, and UnityEvent\n- Preview animation in edit mode with Progress bar both globally and in each sequence.\n- Reorderable sequences.\n- Addable function to call at the end of animation or at certain determined time.\n- Public variables for every sequence.\n- Custom ButtonUI as bonus.\n- Demo.\n- Others.",
    "src": "https://github.com/DhafinFawwaz/Unity-AnimationUI",
    "imageDetails": [
      {
        "img": "PreviewAnimationUI.gif",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "DemoSettings.gif",
        "blurDataURL": redlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "DemoUpgrade.gif",
        "blurDataURL": redlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "DemoStart.gif",
        "blurDataURL": redlight,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 1,
    "title": "Pace Break",
    "slug": "pace-break",
    "thumbnail": "Pace Break.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "hlsl"
      || tag.slug === "blender"
      || tag.slug === "figma"
    ),
    "description": "Fast paced platformer combat game to showcase my programming and technical artist skills.",
    "src": "https://kitkatmt.itch.io/pacebreak",
    "imageDetails": [
      {
        "img": "1.gif",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.gif",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.gif",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.gif",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 2,
    "title": "HexaTap",
    "slug": "hexatap",
    "thumbnail": "HexaTap.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "pixi"
      || tag.slug === "javascript"
      || tag.slug === "firebase"
      || tag.slug === "html"
      || tag.slug === "css"
      || tag.slug === "vite"
    ),
    "description": "Fast paced tapping  game playable on browser. This is my first website and was built for learning web development. I decided to make a game for my first website because i already have some knowledge in game development before.",
    "src": "https://hexatap-47a94.web.app/",
    "imageDetails": [
      {
        "img": "DemoGameplay.webp",
        "blurDataURL": bluedark,
        "width": 153.2,
        "height": 276.58,
      }, {
        "img": "HexaTap.webp",
        "blurDataURL": bluedark,
        "width": 486,
        "height": 276.58,
      }
    ]
  }, {
    "id": 3,
    "title": "Rangkiang Form",
    "slug": "rangkiang-form",
    "thumbnail": "Rangkiang Form.webp",
    "blurDataURL": bluelight,
    "tags": tags.filter(tag =>
      tag.slug === "web-dev"
      || tag.slug === "react"
      || tag.slug === "javascript"
      || tag.slug === "html"
      || tag.slug === "css"
      || tag.slug === "vercel"
      || tag.slug === "express"
      || tag.slug === "node"
    ),
    "description": "A form website integrated with google spreadsheet (google docs) api. This was created because there's no option to put commas to separate number for currency input if we use google form. This is specially created.",
    "src": "",
    "imageDetails": [
      {
        "img": "Preview Mobile.webp",
        "blurDataURL": bluelight,
        "width": 155.79,
        "height": 275.11,
      }, {
        "img": "Preview Docs.webp",
        "blurDataURL": bluelight,
        "width": 483.41,
        "height": 275.11,
      }
    ]
  }, {
    "id": 4,
    "title": "Leapy Leapy Fishy",
    "slug": "leapy-leapy-fishy",
    "thumbnail": "Leapy Leapy Fishy.webp",
    "blurDataURL": blue,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "ilustrator"
      || tag.slug === "blender"
      || tag.slug === "figma"
      || tag.slug === "hlsl"
    ),
    "description": "2nd winner for a Game Dev Competition MAGE 7 issued by Sepuluh Nopember Institute of Technology. Those 2 months of development were really painfull since i also have to study for an official national level Informatics competition by The Ministry of Education, Culture, Research, and Technology and also the amount of homework from my school. Name may be lame, but i'm still proud of it.",
    "src": "https://www.youtube.com/watch?v=M86PU0PGgaM",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": blue,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": blue,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.webp",
        "blurDataURL": brownlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.webp",
        "blurDataURL": blue,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 5,
    "title": "Bezier Curve Generator",
    "slug": "bezier-curve-generator",
    "thumbnail": "bezier-curve-generator.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "web-dev"
      || tag.slug === "pixi"
      || tag.slug === "tailwind"
      || tag.slug === "javascript"
      || tag.slug === "vercel"
    ),
    "description": "Interactive Bezier Curve Generator with really cool animation. It can generate Bezier Curve with any number of control points with either Brute Force or Divide and Conquer algorithm. The process of generating the curve can be shown with animation. It also has some nice feature such as dragable input points, navigation in viewport by zooming or dragging, and others. Of course, it's also mobile responsive.",
    "src": "https://beziercurvegenerator.vercel.app/",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 6,
    "title": "SiAbsen",
    "slug": "siabsen",
    "thumbnail": "siabsen.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "web-dev"
      || tag.slug === "next"
      || tag.slug === "react"
      || tag.slug === "postgresql"
      || tag.slug === "vercel"
      || tag.slug === "firebase"
    ),
    "description": "Notification bot for attendance presence in my college. It's made because i oftenly forget to fill the attendance presence form. It's usefull for me and my friends. It's made with only free services which are vercel and inggest api.",
    "src": "https://siabsen.vercel.app/",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": bluedark,
        "width": 134,
        "height": 288,
      }, {
        "img": "siabsen.webp",
        "blurDataURL": bluedark,
        "width": 486,
        "height": 277,
      }
    ]
  }, {
    "id": 7,
    "title": "QR Code Reminder With ChatGPT API",
    "slug": "expiration-reminder",
    "thumbnail": "Expiration Reminder.webp",
    "blurDataURL": bluelight,
    "tags": tags.filter(tag =>
      tag.slug === "mobile-dev"
      || tag.slug === "web-dev"
      || tag.slug === "flutter"
      || tag.slug === "dart"
      || tag.slug === "sqlite"
      || tag.slug === "vercel"
      || tag.slug === "node"
      || tag.slug === "mongodb"
      || tag.slug === "express"
    ),
    "description": "Mobile app that reminds you when a product is about to expire with qr code to add the reminder. This app was created with flutter and dart. It also has an extra feature which is an auto-generated description integrated with ChatGPT API. ",
    "src": "",
    "imageDetails": [
      {
        "img": "Expiration Reminder.webp",
        "blurDataURL": bluelight,
        "width": 700,
        "height": 400,
      },
    ]
  }, {
    "id": 8,
    "title": "VFX Mesh Generator",
    "slug": "vfx-mesh-generator",
    "thumbnail": "VFX Mesh Generator.webp",
    "blurDataURL": graylight,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "tools"
    ),
    "description": "As a technical artist, its really annoying having to switch to Blender to make an adjustment to a 3d mesh when making a VFX. It can generate mesh with many kinds of variation in a short time. There's also a bonus which is the debug texture to preview the uv coordinate of the mesh. Features:\n- Generate primitive uv mapped 3d mesh with controllable properties\n- Edit the mesh dynamically on runtime\n- Auto update mesh on editor\n- Flip normals\n- Save mesh\n- Bonus utilites for debugging like debug texture",
    "src": "https://github.com/DhafinFawwaz/Unity-VFX-Mesh-Generator",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": graylight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": graylight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.webp",
        "blurDataURL": graylight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.webp",
        "blurDataURL": graylight,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 9,
    "title": "Project Arthur",
    "slug": "project-arthur",
    "thumbnail": "Project Arthur.webp",
    "blurDataURL": greenlight,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "ilustrator"
      || tag.slug === "blender"
      || tag.slug === "figma"
      || tag.slug === "hlsl"
    ),
    "description": "A Top Down pixel art game made with UnityEngine(C#, HLSL) made for GIM submission. The game is currently unfinished. This project is the one that inspire me to make a really optimized coins. Those coin animation has a lot of variation like the initial phase for spinning or initial phase for jumping but can still be made with only 1 shader, 1 texture, and 1 material without any Unity's Monobehaviour.Update() which means it can be rendered in only 1 batch and is very optimized.",
    "src": "https://kitkatmt.itch.io/sword-boi",
    "imageDetails": [
      {
        "img": "Project Arthur.gif",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.gif",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.gif",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.gif",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 10,
    "title": "Grappler Crashers",
    "slug": "grappler-crashers",
    "thumbnail": "Grappler Crashers.webp",
    "blurDataURL": orange,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "ilustrator"
      || tag.slug === "blender"
      || tag.slug === "figma"
      || tag.slug === "hlsl"
    ),
    "description": "Game built for a submission in Ganesha Interactive Media (GIM). Made with Unity Engine (C#, HLSL)",
    "src": "https://kitkatmt.itch.io/grappler-crashers",
    "imageDetails": [
      {
        "img": "1.gif",
        "blurDataURL": blue,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.gif",
        "blurDataURL": blue,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.gif",
        "blurDataURL": blue,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.gif",
        "blurDataURL": blue,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 11,
    "title": "Cube Associator",
    "slug": "cube-associator",
    "thumbnail": "Cube Associator.webp",
    "blurDataURL": redlight,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "ilustrator"
      || tag.slug === "figma"
      || tag.slug === "hlsl"
    ),
    "description": "A game created as submission for GMTK game jam 2020. This was created when i was still a beginner in Game Development. It was both fun and frustating experience.",
    "src": "https://kitkatmt.itch.io/cube-associator",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.webp",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.webp",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 12,
    "title": "Very Optimized Coins Shader",
    "slug": "very-optimized-coins-shader",
    "thumbnail": "Very Optimized Coins Shader.webp",
    "blurDataURL": green,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "hlsl"
      || tag.slug === "tools"
    ),
    "description": `A very optimized coin made with a lot of shader tricks as the result of years of my research and playing with shader.\n- The jump height varies\n- Initial phase of the spinning coins varies\n- Coin spins with the same speed as it's shadow, but the shadow didn't jump\n- Jumps with neither trigonometric function nor if statements but can still jump periodically\n- All of the parameters above can also be set to be with the same values as we want.\n- Without any C# Component, which means there's neiher Monobehaviour.Update() nor FixedUpdate(). All of it is made with shader.\n- With only 1 texture, 1 material, 1 shader (which are the requirement to make rendering with 1 batch possible)\nThe main problem in optimizing a game is mostly about rendering. Of course, you can make all of this with the default sprite shader that already exist in the engine, and make those animation individually with a C# component. This will still make it rendered in 1 batch since it uses only 1 shader and 1 material which is the default one that comes with the engine. But imagine thousands of Monobehaviour.Update() running from those thousands of instance of C# component. It's overkill. That's why we can use shader. But if we use shader, all of those coins will do it's animation simultaneously like a military march. With the shader in this project, all of those variation is made possible but with a drawback which makes tinting the sprite is not possible anymore. But this won't affect anything since we almost never need to tint a rendered sprite. This is not the only trick. Getting the decimal of Time.time, custom parabole function instead of sine function, etc. are also things a few of many tricks that makes all the above possible.
    `,
    "src": "https://github.com/DhafinFawwaz/Unity-Optimized-Coins-Shader",
    "imageDetails": [
      {
        "img": "MonobehaviourUpdate.gif",
        "blurDataURL": green,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "MultiMaterial.gif",
        "blurDataURL": green,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "SingleMaterial.gif",
        "blurDataURL": green,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "Optimized.gif",
        "blurDataURL": green,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 13,
    "title": "Clustered Chaos",
    "slug": "clustered-chaos",
    "thumbnail": "Clustered Chaos.webp",
    "blurDataURL": greenlight,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "hlsl"
    ),
    "description": `A game made for submision at GIM Jam 2022. It gets an award as the best gameplay and the best apprentice game.`,
    "src": "https://kitkatmt.itch.io/clustered-chaos",
    "imageDetails": [
      {
        "img": "1.gif",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.gif",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.gif",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "5.gif",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 14,
    "title": "Unfinished Collection",
    "slug": "unfinished-collection",
    "thumbnail": "Unfinished Collection.webp",
    "blurDataURL": blurDataURL16x9,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
    ),
    "description": "My collection of project that is still on progress but has long since touched. These are projects that i wanted to make from start again with the knowledge i have now but don't have time to do it yet.",
    "src": "",
    "imageDetails": [
      {
        "img": "1.gif",
        "blurDataURL": graydark,
        "width": 154,
        "height": 277,
      }, {
        "img": "2.gif",
        "blurDataURL": bluelight,
        "width": 486,
        "height": 277,
      }
    ]
  }, {
    "id": 15,
    "title": "VFX-Shader Collection",
    "slug": "vfx-shader-collection",
    "thumbnail": "VFX-Shader Collection.webp",
    "blurDataURL": blurDataURL16x9,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "hlsl"
    ),
    "description": "My collections of game vfx made with some shaders and particle system. Everything is created with a lot of shader tricks. Some of it have optimized version with many tricks with shader but with some drawbacks.",
    "src": "",
    "imageDetails": [
      {
        "img": "1.gif",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.gif",
        "blurDataURL": bluelight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.gif",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.gif",
        "blurDataURL": orange,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 16,
    "title": "Flavy",
    "slug": "flavy",
    "thumbnail": "Flavy.webp",
    "blurDataURL": bluelight,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "hlsl"
      || tag.slug === "csharp"
    ),
    "description": "A game to introduce the new campus branch of Bandung Institute of Technology to the student that will attend it. I work as freelance and was part of this project as programmer, animator, and realtime vfx creation. I took care of some things like shader for transition and particle vfx, and UI. I'm also the one that animate the character in this game. This project was created back when i was still in highschool and i still don't know whether i can attend Bandung Institute of Technology later. Through some effort, i manage to get accepted to Bandung Institute of Technology and meet with the other people who contribute to this.",
    "src": "https://joshia-t.itch.io/flavy",
    "imageDetails": [
      {
        "img": "Map.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "Field.webp",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "Album.webp",
        "blurDataURL": bluelight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "Leaderboard.webp",
        "blurDataURL": bluelight,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 17,
    "title": "Legenda Gunung Tampomas",
    "slug": "legenda-gunung-tampomas",
    "thumbnail": "Legenda Gunung Tampomas.webp",
    "blurDataURL": orange,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
    ),
    "description": "A story book game for kids to tell the Legend of Tampomas Mountain. I work as freelance programmer and animator in this project. I also used Audacity, a tool for sfx creation, to help me mark at which seconds for each word to create the dub of the naration. It's a really simple project but i learn many things about managing many simple things in this project.",
    "src": "",
    "imageDetails": [
      {
        "img": "Volcano.webp",
        "blurDataURL": orange,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "Search.webp",
        "blurDataURL": brownlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "Count.webp",
        "blurDataURL": orange,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "Ending.webp",
        "blurDataURL": bluelight,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 18,
    "title": "Snake 4D [+5000 Installs]",
    "slug": "snake-4d",
    "thumbnail": "Snake 4D.webp",
    "blurDataURL": orange,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "hlsl"
    ),
    "description": "The usual snake game but with a twist which is the ability for the snake to move to the 4th dimension. I's an old game that i made back when i'm still in highschool and is still a beginner. I managed to get +5000 downloads on this game probably because i finally understand the market after publishing some games before.",
    "src": "https://play.google.com/store/apps/details?id=com.sppAghetti.Snake4D&hl=en&gl=US",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": green,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": greenlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.webp",
        "blurDataURL": brownlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.webp",
        "blurDataURL": graylight,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 19,
    "title": "Kirana & Laplip",
    "slug": "kirana-dan-laplip",
    "thumbnail": "Kirana dan Laplip.webp",
    "blurDataURL": orange,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
    ),
    "description": "A story book game for kids to tell the story of Kirana & Laplip. I work as freelance programmer and animator in this project. It's a really simple project but i learn many things about managing many simple things in this project.",
    "src": "",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": orange,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": brownlight,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.webp",
        "blurDataURL": orange,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.webp",
        "blurDataURL": bluelight,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 20,
    "title": "Linear Equation System Matrix",
    "slug": "linear-equation-system-matrix",
    "thumbnail": "Linear Equation System Matrix.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "desktop-dev"
      || tag.slug === "java"
    ),
    "description": "A java program with GUI to implement things about Linear Equation System with Matrix in Linear Algebra. It contains implementation for many function such as Gauss Elimination, Gauss-jordan Elimination, Matrix Inverse with many method, Matrix Determinant, Cramer's rule, Polynomial Interpolation, Bicubic Interpolation, Multiple Linear Regression, and image enlargement with Interpolation. It's made with Java Swing for the GUI and a lot of things needs to be overiden to make it looks good. This project gets the highest score in my college year.",
    "src": "https://github.com/ganadipa/Algeo01-22066",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 21,
    "title": "Ocular",
    "slug": "ocular",
    "thumbnail": "Ocular.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "web-dev"
      || tag.slug === "c"
      || tag.slug === "typescript"
      || tag.slug === "python"
      || tag.slug === "next"
      || tag.slug === "django"
      || tag.slug === "tailwind"
      || tag.slug === "sqlite"
      || tag.slug === "react"
    ),
    "description": "Implementation of Linear Algebra in Content-Based Image Retrieval for reverse image search with a website. The frontend is made with Next.js and the backend is made with django and c. The c program is used to calculate the heavy image processing. It also uses caching and multiprocessing to speed up the whole process. It has some features such as searching based on texture, searching based on color, dataset upload, pdf export for search result, web scrapping, and automatic camera to capture image. This project gets the 2nd highest score in my college year.",
    "src": "https://github.com/DhafinFawwaz/Algeo02-22043",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 22,
    "title": "Portfolio",
    "slug": "portfolio",
    "thumbnail": "Portfolio.webp",
    "blurDataURL": graydark,
    "tags": tags.filter(tag =>
      tag.slug === "web-dev"
      || tag.slug === "next"
      || tag.slug === "typescript"
      || tag.slug === "react"
      || tag.slug === "html"
      || tag.slug === "css"
    ),
    "description": "This website is made to showcase my works. An opportunity for an internship would be nice :). This website was created with Next js and react. It's currently not finished yet",
    "src": "https://dhafinfawwaz.github.io/",
    "imageDetails": [
      {
        "img": "Portfolio.webp",
        "blurDataURL": graydark,
        "width": 810.55,
        "height": 379,
      }, {
        "img": "Preview Mobile.webp",
        "blurDataURL": graylight,
        "width": 211,
        "height": 480,
      }
    ]
  }, {
    "id": 23,
    "title": "Ecommerce Book",
    "slug": "ecommerce-book",
    "thumbnail": "Ecommerce Book.webp",
    "blurDataURL": blue,
    "tags": tags.filter(tag =>
      tag.slug === "web-dev"
      || tag.slug === "django"
      || tag.slug === "python"
      || tag.slug === "javascript"
      || tag.slug === "bootstrap"
      || tag.slug === "html"
      || tag.slug === "css"
      || tag.slug === "sqlite"
      || tag.slug === "heroku"
    ),
    "description": "A website created for an assignment of Introduction to Computation in Bandung Institute of Technology. It's created with Django and some help from javascript for the client side.",
    "src": "https://github.com/DhafinFawwaz/Project-Book-Django",
    "imageDetails": [
      {
        "img": "Ecommerce Book.webp",
        "blurDataURL": blue,
        "width": 468.19,
        "height": 251.19,
      }, {
        "img": "Preview Mobile.webp",
        "blurDataURL": blue,
        "width": 171.01,
        "height": 251.19,
      }
    ]
  }, {
    "id": 24,
    "title": "Reusable Finite State Machine with Editor",
    "slug": "reusable-finite-state-machine-with-editor",
    "thumbnail": "Reusable Finite State Machine with Editor.webp",
    "blurDataURL": graylight,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "tools"
    ),
    "description": "Implementation of state design pattern in Object Oriented Programming with reusable base class for the state machine and includes the editor to make creating and updating state easier. Features:\n- Reusable base class for state machine\n- Can add custom function that can be overriden on any state, for example the OnHurt one.\n- An editor to view what are the states and to create a new state including automaticallyit in \n- the states (the U of Core<T,U>)\n- Bonus feature for a good implementation for HitRequest and HitResult",
    "src": "https://github.com/DhafinFawwaz/Unity-Reusable-Finite-State-Machine-With-Editor",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": graylight,
        "width": 300,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": graylight,
        "width": 335,
        "height": 179.78,
      }
    ]
  }, {
    "id": 25,
    "title": "Auth with Many Frameworks",
    "slug": "auth-with-many-frameworks",
    "thumbnail": "Auth with Multiple Frameworks.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "web-dev"
      || tag.slug === "tailwind"
      || tag.slug === "typescript"
      || tag.slug === "next"
      || tag.slug === "node"
      || tag.slug === "express"
      || tag.slug === "javascript"
      || tag.slug === "python"
      || tag.slug === "django"
      || tag.slug === "go"
      || tag.slug === "fiber"
      || tag.slug === "php"
      || tag.slug === "laravel"
      || tag.slug === "supabase"
    ),
    "description": "Implementation of Authentication with Next js and Next Auth as frontend and multiple backend frameworks. It implements the best way to block access to certain page, and redirect the user. It also block access to certain api endpoints if the user is not authenticated.",
    "src": "https://github.com/DhafinFawwaz/Auth-With-Many-Frameworks",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": graylight,
        "width": 300,
        "height": 179.78,
      }, {
        "img": "Auth with Multiple Frameworks.webp",
        "blurDataURL": graylight,
        "width": 335,
        "height": 179.78,
      }
    ]
  }, {
    "id": 26,
    "title": "HitBox System with Editor",
    "slug": "hitbox-system-with-editor",
    "thumbnail": "HitBox System with Editor.webp",
    "blurDataURL": graylight,
    "tags": tags.filter(tag =>
      tag.slug === "game-dev"
      || tag.slug === "unity"
      || tag.slug === "csharp"
      || tag.slug === "tools"
    ),
    "description": "A flexible Hitbox system with its visualization and easy edit when animating. It uses the built in 2d Collider which makes it easily customizable. It supports circle and rectangle hitbox. It's already tested and has guaranteed hit on every frame, doesn't matter the framerate, as long as its using the physics update like using animate physics in animator. Features: \n- Easily edit hitbox when using animator. \n- Has HitboxCaster and HitboxReceiver. These can be customized with using layer and collision matrix to make custom things lika shield or guard. \n- Visualization with color when certain hitbox is collided. \n- Guaranteed to hit a certain hitbox only once, then reset when the HitboxCaster is disabled.",
    "src": "https://github.com/DhafinFawwaz/2D-HitBox-System-with-Editor",
    "imageDetails": [
      {
        "img": "HitBox System with Editor.webp",
        "blurDataURL": graylight,
        "width": 300,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": graylight,
        "width": 335,
        "height": 179.78,
      }
    ]
  }, {
    "id": 27,
    "title": "Le Mari",
    "slug": "le-mari",
    "thumbnail": "le-mari.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "desktop-dev"
      || tag.slug === "python"
      || tag.slug === "flet"
      || tag.slug === "ci-cd"
      || tag.slug === "sqlite"
    ),
    "description": "An app to manage your outfit.",
    "src": "https://github.com/DhafinFawwaz/LeMari",
    "imageDetails": [
      {
        "img": "4.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "5.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "1.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 31,
    "title": "Farmer Rancher Mayor Simulator",
    "slug": "farmer-rancher-mayor-simulator",
    "thumbnail": "farmer-rancher-mayor-simulator.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "desktop-dev"
      || tag.slug === "c++"
      || tag.slug === "qt"
    ),
    "description": "A game written in c++ and qt about Farmer, Rancher & Mayor Simulator",
    "src": "https://github.com/DhafinFawwaz/Tubes-OOP-1",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      },{
        "img": "2.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      },{
        "img": "3.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      },{
        "img": "4.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      },
    ]
  }, {
    "id": 29,
    "title": "Breach Protocol Solver",
    "slug": "breach-protocol-solver",
    "thumbnail": "breach-protocol-solver.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "desktop-dev"
      || tag.slug === "python"
      || tag.slug === "qt"
    ),
    "description": "Cyberpunk 2077 Breach Protocol solver made in Python with implementation of the Brute Force Algorithm.",
    "src": "https://github.com/DhafinFawwaz/Tubes2_FE_Tiefensuche",
    "imageDetails": [
      {
        "img": "breach-protocol-solver.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      },
    ]
  }, {
    "id": 30,
    "title": "OSLahPokoknya",
    "slug": "oslahpokoknya",
    "thumbnail": "oslahpokoknya.png",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "os-dev"
      || tag.slug === "c"
      || tag.slug === "assembly"
      || tag.slug === "qemu"
    ),
    "description": "A really cool Operating System made with C and Assembly",
    "src": "https://github.com/DhafinFawwaz/OsLahPokoknya",
    "imageDetails": [
      {
        "img": "1.png",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      },{
        "img": "2.png",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      },{
        "img": "3.png",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      },{
        "img": "4.png",
        "blurDataURL": graydark,
        "width": 319.6,
        "height": 179.78,
      },
    ]
  }, {
    "id": 28,
    "title": "WikiRace Solver",
    "slug": "wikirace-solver",
    "thumbnail": "wikirace-solver.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "web-dev"
      || tag.slug === "javascript"
      || tag.slug === "tailwind"
      || tag.slug === "pixi"
      || tag.slug === "go"
      || tag.slug === "fiber"
      || tag.slug === "docker"
    ),
    "description": "Solve Wikirace with web scrapping, multithreading, and implementation of Breadth First Search Algorithm and Iterative Deepening Search Algorithm. It's made with Go Fiber for the backend and Pixi.js for the frontend.",
    "src": "https://github.com/DhafinFawwaz/Tubes2_FE_Tiefensuche",
    "imageDetails": [
      {
        "img": "1.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "2.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "3.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "4.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  }, {
    "id": 32,
    "title": "Film Store",
    "slug": "film-store",
    "thumbnail": "details_lg.webp",
    "blurDataURL": bluedark,
    "tags": tags.filter(tag =>
      tag.slug === "web-dev"
      || tag.slug === "django"
      || tag.slug === "docker"
      || tag.slug === "nginx"
      || tag.slug === "python"
      || tag.slug === "tailwind"
      || tag.slug === "javascript"
    ),
    "description": "Website about buying movie. It implements things like database, file storage, authentication, caching, polling, static file serving, automated end to end testing, deployment, and many more.",
    "src": "https://github.com/DhafinFawwaz/Film-Store",
    "imageDetails": [
      {
        "img": "explore_lg.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "details2_lg.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "review_lg.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }, {
        "img": "register_lg.webp",
        "blurDataURL": bluedark,
        "width": 319.6,
        "height": 179.78,
      }
    ]
  },
]

export interface Project {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  blurDataURL: string,
  tags: Tag[];
  description: string;
  src: string;
  imageDetails: ImageDetail[]
}

interface ImageDetail {
  img: string;
  blurDataURL: string;
  width: number;
  height: number;
}
