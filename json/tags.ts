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

export interface ActiveTags {
  isActive: boolean;
  id: number;
};

export const tags = [
  
  new Tag(-6, "Os Dev", "os-dev", "#38db1f", "#ffffff", 
    ""
  ),
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
    "https://api.iconify.design/skill-icons/bootstrap.svg"
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
    "https://api.iconify.design/skill-icons/flask-light.svg"
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
    "https://api.iconify.design/skill-icons/vercel-light.svg"
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
    "https://api.iconify.design/skill-icons/planetscale-light.svg"
  ),
  new Tag(42, "Cloudinary", "cloudinary", "#6638d9", "#ffffff",
    "https://api.iconify.design/logos/cloudinary-icon.svg"
  ),
  new Tag(43, "PostgreSQL", "postgresql", "#0d6eff", "#ffffff",
    "https://api.iconify.design/skill-icons/postgresql-dark.svg"
  ),
  new Tag(44, "Supabase", "supabase", "#0d6eff", "#ffffff",
    "https://api.iconify.design/skill-icons/supabase-dark.svg"
  ),
  new Tag(45, "Vite", "vite", "#0d6eff", "#ffffff",
    "https://api.iconify.design/skill-icons/vite-dark.svg"
  ),
  new Tag(46, "Go", "go", "#00acd7", "#ffffff",
    "https://api.iconify.design/skill-icons/golang.svg"
  ),
  new Tag(47, "Fiber", "fiber", "#00acd7", "#ffffff",
    "https://docs.gofiber.io/img/logo-dark.svg"
  ),
  new Tag(48, "Laravel", "laravel", "#ff2d20", "#ffffff",
    "https://api.iconify.design/skill-icons/laravel-dark.svg"
  ),
  new Tag(49, "PHP", "php", "#242938", "#ffffff",
    "https://api.iconify.design/skill-icons/php-dark.svg"
  ),
  new Tag(50, "Flet", "flet", "#EE3167", "#ffffff",
    "https://flet.dev/img/logo.svg"
  ),
  new Tag(51, "Docker", "docker", "#0d6eff", "#ffffff",
    "https://api.iconify.design/skill-icons/docker.svg"
  ),
  new Tag(52, "Assembly", "assembly", "#242938", "#ffffff",
    "data:image/png;base64,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"
  ),
  new Tag(53, "Qemu", "qemu", "#242938", "#ffffff",
    "data:image/png;base64,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"
  ),
  new Tag(54, "Phaser", "phaser", "#1467db", "#ffffff",
    "https://cdn.phaser.io/images/logo/phaser-planet-small.png  "
  ),
  new Tag(55, "Nginx", "nginx", "#009900", "#ffffff",
    "https://api.iconify.design/skill-icons/nginx.svg  "
  ),
  
  
]
