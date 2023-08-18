export class Tag {
  id: number;
  title: string;
  slug: string;
  bgColor: string;
  textColor: string;
  img: string;

  constructor(_id: number, _title: string, _slug: string, _bgColor: string, _textColor: string, _img: string) {
    this.id = _id;
    this.title = _title;
    this.slug = _slug;
    this.bgColor = _bgColor;
    this.textColor = _textColor;
    this.img = _img;
  }
}

// export type ActiveTags = {
//   isActive: boolean;
//   id: number;
// };
export interface ActiveTags {
  isActive: boolean;
  id: number;
};

export const tags = [
  
  new Tag(-5, "Mobile Dev", "mobile-dev", "#38db1f", "#ffffff", 
    ""
  ),
  new Tag(-4, "Game Dev", "game-dev", "#ff5151", "#ffffff", 
    ""
  ),
  new Tag(-3, "Web Dev", "web-dev", "#1482ff", "#ffffff", 
    ""
  ),
  new Tag(-2, "Desktop Dev", "desktop-dev", "#de8810", "#ffffff",
    ""
  ),
  new Tag(-1, "Other", "other", "#ff1cdd", "#ffffff", 
    ""
  ),
  new Tag(0, "Tools", "tools", "#7e1cff", "#ffffff",
    ""
  ),


  new Tag(1, "Angular", "angular", "#c3002f", "#ffffff",
    "https://angular.io/assets/images/logos/angular/angular.svg"
  ),
  new Tag(2, "Blender", "blender", "#ed931c", "#ffffff",
    "https://download.blender.org/branding/community/blender_community_badge_white.svg"
  ),
  new Tag(3, "Bootstrap", "bootstrap", "#920dff", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
  ),
  new Tag(4, "C", "c", "#0412b5", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
  ),
  new Tag(5, "C++", "cplusplus", "#c20e0e", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
  ),
  new Tag(6, "C#", "csharp", "#710ec2", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
  ),
  new Tag(7, "CSS", "css", "#19d9ff", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
  ),
  new Tag(8, "D3", "d3", "#ff8708", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg"
  ),
  new Tag(9, "Dart", "dart", "#1985ff", "#ffffff",
    "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
  ),
  new Tag(10, "Django", "django", "#02bf2e", "#ffffff",
    "https://cdn.worldvectorlogo.com/logos/django.svg"
  ),
  new Tag(11, ".NET", "dotnet", "#001aff", "#ffffff",
    "https://api.iconify.design/skill-icons/dotnet.svg"
  ),
  new Tag(12, "Express", "express", "#83c90a", "#ffffff",
    "https://api.iconify.design/skill-icons/expressjs-dark.svg"
  ),
  new Tag(13, "Figma", "figma", "#ff0a43", "#ffffff",
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
  ),
  new Tag(14, "Firebase", "firebase", "#ffb60a", "#ffffff",
    "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
  ),
  new Tag(15, "Flask", "flask", "#ff0a2f", "#ffffff",
    "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
  ),
  new Tag(16, "Flutter", "flutter", "#0ab1ff", "#ffffff",
    "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
  ),
  new Tag(17, "Git", "git", "#ff1e12", "#ffffff",
    "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
  ),
  new Tag(18, "Heroku", "heroku", "#680dd1", "#ffffff",
    "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
  ),
  new Tag(19, "HTML", "html", "#ff7308", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
  ),
  new Tag(20, "Ilustrator", "ilustrator", "#ff9008", "#ffffff",
    "https://api.iconify.design/skill-icons/illustrator.svg"
  ),
  new Tag(21, "Java", "java", "#0e98e8", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
  ),
  new Tag(22, "Javascript", "javascript", "#ebba0c", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
  ),
  new Tag(23, "Kotlin", "kotlin", "#0f87ff", "#ffffff",
    "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"
  ),
  new Tag(24, "MongoDB", "mongodb", "#5cdb0d", "#ffffff",
    "https://api.iconify.design/skill-icons/mongodb.svg"
  ),
  new Tag(25, "Next", "next", "#710ddb", "#ffffff",
    "https://api.iconify.design/logos/nextjs-icon.svg"
  ),
  new Tag(26, "Node", "node", "#11bf2e", "#ffffff",
    "https://api.iconify.design/logos/nodejs-icon-alt.svg"
  ),
  new Tag(27, "Pandas", "pandas", "#0b239c", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg"
  ),
  new Tag(28, "Photoshop", "photoshop", "#1117c2", "#ffffff",
    "https://api.iconify.design/skill-icons/photoshop.svg"
  ),
  new Tag(29, "Pixi", "pixi", "#db143f", "#ffffff",
    "https://pixijs.download/pixijs-text.svg"
  ),
  new Tag(30, "Python", "python", "#1467db", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
  ),
  new Tag(31, "Qt", "qt", "#1ac914", "#ffffff",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg"
  ),
  new Tag(32, "React", "react", "#005ac7", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
  ),
  new Tag(33, "SQLite", "sqlite", "#0988e8", "#ffffff",
    "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
  ),
  new Tag(34, "TailWind", "tailwind", "#0c72f7", "#ffffff",
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
  ),
  new Tag(35, "Typescript", "typescript", "#137fd1", "#ffffff",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
  ),
  new Tag(36, "Unity", "unity", "#1600a8", "#ffffff",
    "https://api.iconify.design/skill-icons/unity-dark.svg"
  ),
  new Tag(37, "Vercel", "vercel", "#4413ad", "#ffffff",
    "https://api.iconify.design/logos/vercel-icon.svg"
  ),
  new Tag(38, "HLSL", "hlsl", "#1323ad", "#ffffff",
    "https://api.iconify.design/vscode-icons/file-type-hlsl.svg"
  ),
  new Tag(39, "Svelte Kit", "sveltekit", "#ff4800", "#ffffff",
    "https://api.iconify.design/vscode-icons/file-type-svelte.svg"
  ),
  new Tag(40, "MySQL", "mysql", "#0d6eff", "#ffffff",
    "https://api.iconify.design/skill-icons/mysql-dark.svg"
  ),
  new Tag(41, "PlanetScale", "planetscale", "#2b2b2b", "#ffffff",
    "https://api.iconify.design/logos/planetscale.svg"
  ),
  new Tag(42, "Cloudinary", "cloudinary", "#6638d9", "#ffffff",
    "https://api.iconify.design/logos/cloudinary-icon.svg"
  )
]
