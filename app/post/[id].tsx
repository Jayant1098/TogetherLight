import { useQuery } from '@tanstack/react-query';
import { Slot, router, useLocalSearchParams } from 'expo-router';
import React from 'react';

import { Text, View, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Post, getPost } from '../../api/posts';
import { ActivityIndicator } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import PostDetails from '../../components/Post/PostDetails';

const PostDetailsScreen = () => {
  const { id: postId } = useLocalSearchParams();

  const query = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPost(Number(postId)),
    enabled: !!postId,
    onError: (error) => Alert.alert(error?.toString() || ''),
  });

  const { data, isLoading, isRefetching } = query;

  return (
    <SafeAreaView>
      <PostDetailsHeader postId={postId} />
      {isLoading || isRefetching ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color='grey' size='small' />
          <Text> Loading Post with id: {postId}</Text>
        </View>
      ) : data ? (
        <PostDetails post={data} />
      ) : (
        <Text>No data...</Text>
      )}
    </SafeAreaView>
  );
};

function PostDetailsHeader({ postId }: { postId: any }) {
  return (
    <View style={styles.postDetailsHeader}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <Ionicons name='arrow-back' size={24} />
      </TouchableOpacity>

      <Text style={styles.headerText}>Post {postId}</Text>
    </View>
  );
}

export default PostDetailsScreen;

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  postDetailsHeader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    padding: 10,
    borderBlockColor: '#f0f0f0',
    borderBottomWidth: 1,
  },
  backButton: { justifyContent: 'center' },
  loadingContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    fontWeight: 'bold',
    gap: 10,
  },
});
