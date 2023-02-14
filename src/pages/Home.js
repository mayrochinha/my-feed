import { useState, useEffect } from "react";

import Feed from "../components/Feed";
import PostForm from "../components/PostForm";
import { getPostsList } from "../services/postsService";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadPosts() {

      try {
        const postList = await getPostsList();

        if (!postList) {
          setHasError(true);
          return;
        }

        setPosts(postList);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();

  }, []);


  function handleSubmit({ history, userName }) {
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
          isLoading={isLoading}
          hasError={hasError}
          posts={posts}
          title="Seu Feed"
          subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
        />
      </main>
    </>
  );
}