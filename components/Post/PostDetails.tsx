import React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { Post } from '../../api/posts';
import { AntDesign } from '@expo/vector-icons';

function PostDetails({ post }: { post: Post }) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{post?.title}</Text>
      <Text style={styles.postContent}>{post?.body}</Text>

      <View style={styles.postMetaDataContainer}>
        <View style={styles.userInfoContainer}>
          <AntDesign name='user' size={14} />
          <Text style={styles.userInfo}>Author: {post?.userId}</Text>
        </View>
      </View>
    </View>
  );
}

export default PostDetails;

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    fontSize: 10,
  },
  postMetaDataContainer: {
    flexDirection: 'row',
    columnGap: 10,
    opacity: 0.4,
    marginTop: 6,
    fontSize: 6,
    alignSelf: 'flex-start',
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postContent: {
    color: 'grey',
    marginTop: 10,
    fontSize: 14,
  },
});
