import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Junio-Leonel.png",
      name: "Junio Leonel",
      role: "Web Design",
    },
    content: [
      { type: "paragraph", content: "Fala galera !" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. E um projeto que fiz no NLW Return",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-07-09 19:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Vitorleonel.png",
      name: "Vitor Leonel",
      role: "Desenvolvedor Full-Stack",
    },
    content: [
      { type: "paragraph", content: "Fala galera !" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. E um projeto que fiz no NLW Return",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-07-20 19:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
