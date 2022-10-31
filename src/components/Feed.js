/*
import { useState } from "react";

import "../../styles/PostForm.css";
import "../../styles/Feed.css";


import paperPlaneIcon from "../../images/paper-plane.svg";


export function Feed(props) {
  const [history, setHistory] = useState("");
  const [userName, setUserName] = useState("");
  const [posts, setPosts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setPosts([
      ...posts,
      {
        id: Math.random(), //gerar um número de usuário aleatório
        content: history,
        userName,
        publishedAt: new Date(),
      },
    ]);

    setHistory("");
    setUserName("");
  }

  return (
    <div className="wrapper">
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          value={history}
          placeholder="Escreva uma nova história..."
          onChange={(event) => setHistory(event.target.value)}
        />

        <div>
          <img src={userIcon} alt="User" />
          <input
            value={userName}
            placeholder="Digite seu nome..."
            onChange={(event) => setUserName(event.target.value)}
          />

          <button type="submit" disabled={props.btnDisable}>
            <img src={paperPlaneIcon} alt="Paper plane" />
            Publicar
          </button>
        </div>
      </form>

      <main>
        {posts.length == 0 && (
          <div className="feed-status">
            <img src={emptyFolderIcon} alt="Empty folder" />

            <h1>Não encontramos nada</h1>
            <h2>
              Parece que você e seus amigos não postaram nada. Comece a escrever
              uma nova história!
            </h2>
          </div>
        )}

        {posts.length > 0 && (
          <>
            <header>
              <h1>Seu Feed</h1>
              <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
            </header>

            <section className="feed">
              {posts.map((post) => (
                <article key={post.id}>
                  <p>{post.content}</p>

                  <footer>
                    <div className="user-details">
                      <img src={userIcon} />
                      <strong>{post.userName}</strong>
                    </div>

                    <div className="time">
                      <img src={clockIcon} alt="Clock" />
                      <span>
                        Publicado em{" "}
                        {post.publishedAt.toLocaleDateString("pt-br")}
                      </span>
                    </div>
                  </footer>
                </article>
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
*/
import userIcon from "../images/user.svg";
import clockIcon from "../images/clock.svg";
import emptyFolderIcon from "../images/empty-folder.svg";

import "../styles/Feed.css";

export default function Feed(props) {
  if (props.posts.length == 0) {
    return (
      <div className="feed-status">
        <img src={emptyFolderIcon} alt="Empty folder" />

        <h1>Não encontramos nada</h1>
        <h2>
          Parece que você e seus amigos não postaram nada. Comece a escrever uma
          nova história!
        </h2>
      </div>
    );
  }
  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>

      <section className="feed">
        {props.posts.map((post) => (
          <article key={post.id}>
            <p>{post.content}</p>

            <footer>
              <div className="user-details">
                <img src={userIcon} />
                <strong>{post.userName}</strong>
              </div>

              <div className="time">
                <img src={clockIcon} alt="Clock" />
                <span>
                  Publicado em {post.publishedAt.toLocaleDateString("pt-br")}
                </span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
