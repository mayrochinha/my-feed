import { useState } from "react";

import Feed from "../components/Feed";
import PostForm from "../components/PostForm";

export default function Home() {
    const [posts, setPosts] = useState([]);

    function handleSubmit({history, userName}) {
    setPosts([
      ...posts,
      {
        id: Math.random(), //gerar um número de usuário aleatório
        content: history,
        userName,
        publishedAt: new Date(),
      },
    ]);
  }

  return (
    <>
        <PostForm onSubmit={handleSubmit} />

        <main>
          <Feed 
            posts={posts} 
            title="Seu Feed"
            subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
          />
        </main>
    </>
  );
}