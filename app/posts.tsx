import { useQuery } from '@tanstack/react-query';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import { getPosts } from '../api/posts';
import React from 'react';
import { router } from 'expo-router';

import PostList from '../components/Post/PostList';
import PostsHeader from '../components/Post/PostsHeader';

function navigateToPost(id: number) {
  router.push('/post/' + id);
}

const Posts = () => {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    onError: (error) => Alert.alert(error?.toString() || ''),
  });

  const { data, error, isLoading, refetch, isRefetching } = query;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PostsHeader refetch={refetch} />
        {/* Loading  */}
        {(isLoading || isRefetching) && (
          <Text style={styles.loadingText}>Fetching posts...</Text>
        )}

        {/* Post List */}
        {data?.length ? (
          <PostList
            isLoading={isLoading}
            posts={data}
            refetch={refetch}
            onPostClick={navigateToPost}
          />
        ) : (
          !error && !isLoading && <Text>No posts to show yet.</Text>
        )}
        {!!error && <Text>Error: {error?.toString()}</Text>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Posts;
