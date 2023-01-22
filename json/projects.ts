import { tags } from "./tags";
import { Tag } from "./tags";

export const projects = [
  {
    "id": 0,
    "title": "AnimationUI",
    "slug": "animationui",
    "thumbnail": "AnimationUI.webp",
    "tags": tags.filter(tag => 
      tag.slug==="game-dev"
      || tag.slug==="csharp"
      || tag.slug==="unity"
      || tag.slug==="ilustrator"
      || tag.slug==="figma"
      || tag.slug==="tools"
    ),
    "description": "A really useful tool to animate UI in Unity Engine. It was born because i'm tired of writing and tweaking UI animations manually. With this tool, you can create UI animation easily with no code. You can simply drag and drop to create some smooth UI animation. There are some option that you can set such as the easing, duration, etc. You can also see the preview, drag the progress bar and also see the progress bar of each individual sequence. You can also make a custom sequence for non UI component with UnityEvent including the dynamic one. Adding function to call at certain time or at the end of animation is also possible with code.",
    "src": "https://github.com/DhafinFawwaz/Unity-AnimationUI",
    "imgs": [
      "PreviewAnimationUI.gif",
      "DemoSettings.gif",
      "DemoUpgrade.gif",
      "DemoStart.gif",
    ]
  },{
    "id": 1,
    "title": "HexaTap",
    "slug": "hexatap",
    "thumbnail": "HexaTap.webp",
    "tags": tags.filter(tag => 
      tag.slug==="game-dev"
      || tag.slug==="pixi"
      || tag.slug==="javascript"
      || tag.slug==="firebase"
      || tag.slug==="html"
      || tag.slug==="css"
    ),
    "description": "Fast paced tapping  game playable on browser. This is my first website and was built for learning web development. I decided to make a game for my first website because i already have some knowledge in game development before.",
    "src": "https://hexatap-47a94.web.app/",
    "imgs": [
      "DemoGameplay.webp",
      "HexaTap.webp",
    ]
  },{
    "id": 2,
    "title": "Rangkiang Form",
    "slug": "rangkiang-form",
    "thumbnail": "Rangkiang Form.webp",
    "tags": tags.filter(tag => 
      tag.slug==="web-dev"
      || tag.slug==="react"
      || tag.slug==="javascript"
      || tag.slug==="html"
      || tag.slug==="css"
      || tag.slug==="vercel"
      || tag.slug==="express"
    ),
    "description": "A form website integrated with google spreadsheet (google docs) api. This was created because there's no option to put commas to separate number for currency input if we use google form. This is specially created.",
    "src": "",
    "imgs": [
      "Preview Mobile.webp",
      "Preview Docs.webp",
    ]
  },{
    "id": 3,
    "title": "Leapy Leapy Fishy",
    "slug": "leapy-leapy-fishy",
    "thumbnail": "Leapy Leapy Fishy.webp",
    "tags": tags.filter(tag => 
      tag.slug==="game-dev"
      || tag.slug==="unity"
      || tag.slug==="csharp"
      || tag.slug==="ilustrator"
      || tag.slug==="blender"
      || tag.slug==="figma"
      || tag.slug==="hlsl"
    ),
    "description": "2nd winner for a Game Dev Competition MAGE 7 issued by Sepuluh Nopember Institute of Technology. Those 2 months of development were really painfull since i also have to study for an official national level Informatics competition by The Ministry of Education, Culture, Research, and Technology and also the amount of homework from my school. Name may be lame, but i'm still proud of it.",
    "src": "https://www.youtube.com/watch?v=M86PU0PGgaM",
    "imgs": [
      "1.webp",
      "2.webp",
      "4.webp",
      "3.webp",
    ]
  },{
    "id": 4,
    "title": "Portfolio",
    "slug": "portfolio",
    "thumbnail": "Portfolio.webp",
    "tags": tags.filter(tag => 
      tag.slug==="web-dev"
      || tag.slug==="next"
      || tag.slug==="typescript"
      || tag.slug==="react"
      || tag.slug==="html"
      || tag.slug==="css"
    ),
    "description": "This website is made to showcase my works. An opportunity for an internship would be nice :). This website was created with Next js and react. It's currently not finished yet",
    "src": "dhafinfawwaz.github.io",
    "imgs": [
      "Portfolio.webp",
      "Preview Mobile.webp",
    ]
  },{
    "id": 5,
    "title": "Ecommerce Book",
    "slug": "ecommerce-book",
    "thumbnail": "Ecommerce Book.webp",
    "tags": tags.filter(tag => 
      tag.slug==="web-dev"
      || tag.slug==="django"
      || tag.slug==="python"
      || tag.slug==="javascript"
      || tag.slug==="bootstrap"
      || tag.slug==="html"
      || tag.slug==="css"
      || tag.slug==="sqlite"
    ),
    "description": "A website created for an assignment of Introduction to Computation in Bandung Institute of Technology. It's created with Django and some help from javascript for the client side.",
    "src": "https://github.com/DhafinFawwaz/Project-Book-Django",
    "imgs": [
      "Ecommerce Book.webp",
      "Preview Mobile.webp",
    ]
  },{
    "id": 6,
    "title": "Project Arthur",
    "slug": "project-arthur",
    "thumbnail": "Project Arthur.webp",
    "tags": tags.filter(tag => 
      tag.slug==="game-dev"
      || tag.slug==="unity"
      || tag.slug==="csharp"
      || tag.slug==="ilustrator"
      || tag.slug==="blender"
      || tag.slug==="figma"
      || tag.slug==="hlsl"
    ),
    "description": "A Top Down pixel art game made with UnityEngine(C#, HLSL) made for GIM submission. The game is currently unfinished. This project is the one that inspire me to make a really optimized coins. Those coin animation has a lot of variation like the initial phase for spinning or initial phase for jumping but can still be made with only 1 shader, 1 texture, and 1 material without any Unity's Monobehaviour.Update() which means it can be rendered in only 1 batch and is very optimized.",
    "src": "https://kitkatmt.itch.io/sword-boi",
    "imgs": [
      "Project Arthur.gif",
      "2.gif",
      "3.gif",
      "4.gif",
    ]
  },{
    "id": 7,
    "title": "Grappler Crashers",
    "slug": "grappler-crashers",
    "thumbnail": "Grappler Crashers.webp",
    "tags": tags.filter(tag => 
      tag.slug==="game-dev"
      || tag.slug==="unity"
      || tag.slug==="csharp"
      || tag.slug==="ilustrator"
      || tag.slug==="blender"
      || tag.slug==="figma"
      || tag.slug==="hlsl"
    ),
    "description": "Game built for a submission in Ganesha Interactive Media (GIM). Made with Unity Engine (C#, HLSL)",
    "src": "https://kitkatmt.itch.io/grappler-crashers",
    "imgs": [
      "1.gif",
      "2.gif",
      "3.gif",
      "4.gif",
    ]
  },{
    "id": 8,
    "title": "Cube Associator",
    "slug": "cube-associator",
    "thumbnail": "Cube Associator.webp",
    "tags": tags.filter(tag => 
      tag.slug==="game-dev"
      || tag.slug==="unity"
      || tag.slug==="csharp"
      || tag.slug==="ilustrator"
      || tag.slug==="figma"
      || tag.slug==="hlsl"
    ),
    "description": "A game created as submission for GMTK game jam 2020. This was created when i was still a beginner in Game Development. It was both fun and frustating experience.",
    "src": "https://kitkatmt.itch.io/cube-associator",
    "imgs": [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
    ]
  },{
    "id": 9,
    "title": "VFX-Shader Collection",
    "slug": "vfx-shader-collection",
    "thumbnail": "16x9.webp",
    "tags": tags.filter(tag => 
      tag.slug==="game-dev"
      || tag.slug==="unity"
      || tag.slug==="hlsl"
    ),
    "description": "My collections of game vfx made with some shaders and particle system. Everything is created with a lot of shader tricks. Some of it have optimized version with many tricks with shader but with some drawbacks.",
    "src": "",
    "imgs": [
      "9x16.webp",
      "16x9.webp",
    ]
  },{
    "id": 10,
    "title": "Very Optimized Coins Shader",
    "slug": "very-optimized-coins-shader",
    "thumbnail": "Very Optimized Coins Shader.webp",
    "tags": tags.filter(tag => 
      tag.slug==="game-dev"
      || tag.slug==="unity"
      || tag.slug==="csharp"
      || tag.slug==="hlsl"
      || tag.slug==="tools"
    ),
    "description": `A very optimized coin made with a lot of shader tricks as the result of years of my research and playing with shader.\n- The jump height varies\n- Initial phase of the spinning coins varies\n- Coin spins with the same speed as it's shadow, but the shadow didn't jump\n- Jumps with neither trigonometric function nor if statements but can still jump periodically\n- All of the parameters above can also be set to be with the same values as we want.\n- Without any C# Component, which means there's neiher Monobehaviour.Update() nor FixedUpdate(). All of it is made with shader.\n- With only 1 texture, 1 material, 1 shader (which are the requirement to make rendering with 1 batch possible)\nThe main problem in optimizing a game is mostly about rendering. Of course, you can make all of this with the default sprite shader that already exist in the engine, and make those animation individually with a C# component. This will still make it rendered in 1 batch since it uses only 1 shader and 1 material which is the default one that comes with the engine. But imagine thousands of Monobehaviour.Update() running from those thousands of instance of C# component. It's overkill. That's why we can use shader. But if we use shader, all of those coins will do it's animation simultaneously like a military march. With the shader in this project, all of those variation is made possible but with a drawback which makes tinting the sprite is not possible anymore. But this won't affect anything since we almost never need to tint a rendered sprite. This is not the only trick. Getting the decimal of Time.time, custom parabole function instead of sine function, etc. are also things a few of many tricks that makes all the above possible.
    `,
    "src": "https://github.com/DhafinFawwaz/Unity-Optimized-Coins-Shader",
    "imgs": [
      "MonobehaviourUpdate.gif",
      "MultiMaterial.gif",
      "SingleMaterial.gif",
      "Optimized.gif",
    ]
  }
]

export interface Project {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  tags: Tag[];
  description: string;
  src: string;
  imgs: string[];
}

export interface Projects {
  project: Project;
}