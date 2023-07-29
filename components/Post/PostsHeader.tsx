import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';

function PostsHeader({ refetch }: { refetch: any }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Posts</Text>
      <TouchableOpacity onPress={refetch}>
        <Ionicons name='reload' size={14} color='black' />
      </TouchableOpacity>
    </View>
  );
}

export default PostsHeader;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 15,
  },
});
