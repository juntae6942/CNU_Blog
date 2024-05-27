import { useEffect, useState } from 'react';
import { getPostList } from '../api';
import PostListItem from '../components/PostListItem';
import { IResponsePostList } from '../api/types';
import NoPostList from '../components/NoPostList';
import useGetPostList from '../queries/useGetPostList.ts';

const Home = () => {
  const { data: postList = [], isError, isLoading } = useGetPostList();

  if (isLoading) {
    return <div>....불러오는 중...</div>;
  }

  if (postList.length === 0 || isError) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(item => (
        <PostListItem key={item.id} id={`${item.id}`} title={item.title} contents={item.contents} tag={item.tag} />
      ))}
    </div>
  );
};

export default Home;
