import React from 'react';
import { FlatList } from 'react-native';
import { Post } from '../../api/posts';
import PostListItem from './PostListItem';

function PostList({
  refetch,
  isLoading,
  posts,
  onPostClick,
}: {
  refetch: () => void;
  isLoading: boolean;
  posts: Post[];
  onPostClick: (postId: number) => void;
}) {
  return (
    <FlatList
      persistentScrollbar
      onRefresh={refetch}
      refreshing={isLoading}
      data={posts}
      renderItem={({ item }) => (
        <PostListItem onPostClick={onPostClick} {...item} />
      )}
      keyExtractor={(item) => item.id + ':'}
    />
  );
}

export default PostList;
