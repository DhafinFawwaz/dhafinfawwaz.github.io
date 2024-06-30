import { tags } from "./tags";

export const skills = [
  {
    "devType": tags.filter(tag => tag.slug==="mobile-dev")[0],
    "tools": tags.filter(tag => 
      tag.slug==="android" 
      || tag.slug==="c"
      || tag.slug==="cplusplus"
      || tag.slug==="csharp"
      || tag.slug==="dart"
      || tag.slug==="firebase"
      || tag.slug==="flutter"
      || tag.slug==="java"
      || tag.slug==="kotlin"
      || tag.slug==="node"
      || tag.slug==="qt"
      || tag.slug==="unity"
    )
  },{
    "devType": tags.filter(tag => tag.slug==="game-dev")[0],
    "tools": tags.filter(tag => 
      tag.slug==="android"
      || tag.slug==="csharp"
      || tag.slug==="hlsl"
      || tag.slug==="unity"
      || tag.slug==="firebase"
      || tag.slug==="javascript"
      || tag.slug==="pixi"
      || tag.slug==="phaser"
    )
  },{
    "devType": tags.filter(tag => tag.slug==="web-dev")[0],
    "tools": tags.filter(tag => 
      tag.slug==="angular"
      || tag.slug==="css"
      || tag.slug==="d3"
      || tag.slug==="django"
      || tag.slug==="express"
      || tag.slug==="bootstrap"
      || tag.slug==="firebase"
      || tag.slug==="flask"
      || tag.slug==="heroku"
      || tag.slug==="html"
      || tag.slug==="javascript"
      || tag.slug==="mongodb"
      || tag.slug==="next"
      || tag.slug==="node"
      || tag.slug==="pixi"
      || tag.slug==="python"
      || tag.slug==="react"
      || tag.slug==="sqlite"
      || tag.slug==="postgresql"
      || tag.slug==="typescript"
      || tag.slug==="vercel"
      || tag.slug==="sveltekit"
      || tag.slug==="mysql"
      || tag.slug==="planetscale"
      || tag.slug==="supabase"
      || tag.slug==="cloudinary"
      || tag.slug==="vite"
      || tag.slug==="go"
      || tag.slug==="fiber"
      || tag.slug==="laravel"
      || tag.slug==="php"
      || tag.slug==="docker"
    )
  },{
    "devType": tags.filter(tag => tag.slug==="desktop-dev")[0],
    "tools": tags.filter(tag => 
      tag.slug==="cplusplus"
      || tag.slug==="csharp"
      || tag.slug==="java"
      || tag.slug==="dotnet"
      || tag.slug==="python"
      || tag.slug==="unity"
      || tag.slug==="flet"
    )
  },{
    "devType": tags.filter(tag => tag.slug==="os-dev")[0],
    "tools": tags.filter(tag => 
      tag.slug==="c"
      || tag.slug==="assembly"
      || tag.slug==="qemu"
    )
  },{
    "devType": tags.filter(tag => tag.slug==="other")[0],
    "tools": tags.filter(tag => 
      tag.slug==="blender"
      || tag.slug==="figma"
      || tag.slug==="git"
      || tag.slug==="ilustrator"
      || tag.slug==="photoshop"
    )
  },
]
