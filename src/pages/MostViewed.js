import Feed from '../components/Feed';
import { useState, useEffect } from "react";
import { getMostViewedPostsList } from '../services/postsService';

export default function MostViewed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadPosts() {

      try {
        const postList = await getMostViewedPostsList();


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

  return (
    <main className="most-viewed">
      <Feed
        hasError={hasError}
        isLoading={isLoading}
        posts={posts}
        title="Mais vistos"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}