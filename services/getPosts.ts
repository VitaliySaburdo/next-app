export const getPosts = async () => {
  const response = await fetch(`/api/posts`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
};
