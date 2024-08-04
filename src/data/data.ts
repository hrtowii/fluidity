import pic_1 from "./pictures/pic_1.jpg"
import pic_2 from "./pictures/pic_2.jpg"
import pic_3 from "./pictures/pic_3.jpg"
import pic_4 from "./pictures/pic_4.jpg"
import pic_5 from "./pictures/pic_5.jpg"
import pic_6 from "./pictures/pic_6.jpg"
import pic_7 from "./pictures/pic_7.jpg"
import pic_8 from "./pictures/pic_8.png"
import { queryToken } from "../Startpage/Searchbar/Searchbar"

export interface dataElem {
  label: string
  value: string
}

export interface linkGroup {
  title: string
  links: dataElem[]
}

/* eslint-disable prettier/prettier */
export const links: linkGroup[] = [
  {
    title: "Reddit",
    links: [
      {
        label: "r/sgexams",
        value: "https://www.reddit.com/r/sgexams/",
      },
      {
        label: "r/unixporn",
        value: "https://www.reddit.com/r/unixporn/",
      },
      {
        label: "r/singapore",
        value: "https://www.reddit.com/r/singapore/",
      },
      {
        label: "r/jailbreak",
        value: "https://www.reddit.com/r/jailbreak/",
      },
    ],
  },
  {
    title: "School",
    links: [
      {
        label: "Politemall",
        value: "https://nyplms.polite.edu.sg/",
      },
      {
        label: "Outlook",
        value: "https://outlook.office365.com/mail/",
      },
      {
        label: "NYP Portal",
        value: "https://mynypportal.nyp.edu.sg//",
      },
    ],
  },
  {
    title: "Coding",
    links: [
      {
        label: "Rust Book",
        value: "https://doc.rust-lang.org/book/",
      },
      {
        label: "Rust concurrency",
        value: "https://marabos.nl/atomics/",
      },
      {
        label: "NN from scratch",
        value: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
      }
    ],
  },
  // {
  //   title: "Design",
  //   links: [
  //     {
  //       label: "imgenlarger",
  //       value: "https://real-esrgan.com/#Playground",
  //     },
  //     {
  //       label: "img2svg",
  //       value: "https://picsvg.com/",
  //     },
  //   ],
  // },
  {
    title: "AI",
    links: [
      {
        label: "Claude",
        value: "https://claude.ai/",
      },
      {
        label: "Chatgipity",
        value: "https://chat.openai.com/",
      },
      {
        label: "Gemini",
        value: "https://gemini.google.com/",
      },
      {
        label: "Groq",
        value: "https://groq.com/",
      },
    ]
  },
  {
    title: "Music",
    links: [
      {
        label: "JP music I like",
        value: "https://open.spotify.com/playlist/3P1g8sdjEjhtJpvstQlMFe?si=9b15a943a7104cda",
      },
      {
        label: "JP music I like more",
        value: "https://open.spotify.com/playlist/7LSUi2q2oAz3CuV0rbdpcv?si=c6cd3362e6df4617",
      },
      {
        label: "Stud(ie)y",
        value: "https://open.spotify.com/playlist/1BHX7lRkOuRE01v7SOpEM5?si=70657d23a42749a3",
      },
      {
        label: "August 23-24",
        value: "https://open.spotify.com/playlist/6CiX9HQUqizhUdB4vVoiqM?si=b3a87aea98044e93",
      },
      {
        label: "Youtube music playlist",
        value: "https://www.youtube.com/playlist?list=PL8mvIdSAWr2qV7xOZtKNy-Q5EvtnOKebe",
      },
    ],
  },
  // {
  //   title: "Sauce",
  //   links: [
  //     {
  //       label: "Pictures - DeathAndMilk",
  //       value: "https://www.instagram.com/deathandmilk_/",
  //     },
  //     {
  //       label: "Icons - FontAwesome",
  //       value: "https://fontawesome.com/icons",
  //     },
  //     {
  //       label: "Text Flicker - CodeMyUI",
  //       value:
  //         "https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/",
  //     },
  //     {
  //       label: "Wave Animation - mburakerman",
  //       value: "https://codepen.io/mburakerman/pen/eRZZEv",
  //     },
  //     {
  //       label: "Da real sauce ԅ(♡﹃♡ԅ)",
  //       value: "https://www.youtube.com/watch?v=qr89xoZyE1g",
  //     },
  //     {
  //       label: "Even more real sauce ( ͡° ͜ʖ ͡°)",
  //       value: "https://www.youtube.com/watch?v=VLhJOd_TFiI",
  //     },
  //   ],
  // },
]

export const images: dataElem[] = [
  { label: "pic_1", value: pic_1 },
  { label: "pic_2", value: pic_2 },
  { label: "pic_3", value: pic_3 },
  { label: "pic_4", value: pic_4 },
  { label: "pic_5", value: pic_5 },
  { label: "pic_6", value: pic_6 },
  { label: "pic_7", value: pic_7 },
  { label: "pic_8", value: pic_8 },
]

export const searchEngines: dataElem[] = [
  {
    label: "Google",
    value: `https://www.google.com/search?q=${queryToken}`,
  },
  {
    label: "DuckDuckGo",
    value: `https://duckduckgo.com/?q=${queryToken}`,
  },
  {
    label: "Qwant",
    value: `https://qwant.com/?q=${queryToken}`,
  },
  {
    label: "Ecosia",
    value: `https://ecosia.org/search/?q=${queryToken}`,
  },
]

export type FastForwards = Record<string, string>

export interface Search {
  engine: string
  fastForward: FastForwards
}

export const searchSettings: Search = {
  engine: searchEngines[0].value,
  fastForward: {
    deepl: "https://deepl.com/",
    maps: "https://google.de/maps/",
    reddit: "https://reddit.com/",
    github: "https://github.com/",
    gitlab: "https://gitlab.com/",
    youtube: "https://youtube.com/",
  },
}

export interface colorsType {
  [key: string]: string
  "--bg-color": string
  "--default-color": string
  "--accent-color": string
  "--accent-color2": string
}

export interface Theme {
  name: string
  colors: colorsType
  image: string
}

export const themes: Theme[] = [
  {
    name: "You only have one shot.",
    image: "https://hrtowii.github.io/img/oneshotsun.png",
    colors: {
      "--bg-color": "#1d2021",
      "--default-color": "#CC9A52",
      "--accent-color": "#ebdbb2",
      "--accent-color2": "#FCE4B4",
    },
  },
  {
    name: "Catppuccin",
    image:
      "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png",
    colors: {
      "--bg-color": "#24273A",
      "--default-color": "#CAD3F5",
      "--accent-color": "#C6A0F6",
      "--accent-color2": "#8AADF4",
    },
  },
]
