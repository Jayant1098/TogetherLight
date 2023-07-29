import React from 'react';
import { Post } from '../../api/posts';
import { Card, Paragraph, Title } from 'react-native-paper';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function PostListItem({
  title,
  body,
  id,
  onPostClick,
}: Omit<Post, 'userId'> & { onPostClick: (postId: number) => void }) {
  return (
    <Card
      mode='elevated'
      style={{ marginVertical: 2, borderRadius: 0, backgroundColor: '#fff' }}
      onPress={() => onPostClick(id)}
    >
      <Card.Content
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <View style={{ width: '90%' }}>
          <Title
            numberOfLines={1}
            ellipsizeMode='tail'
            style={{
              fontWeight: 'bold',
            }}
          >
            {title}
          </Title>
          <Paragraph
            numberOfLines={2}
            style={{
              opacity: 0.6,
            }}
          >
            {body}
          </Paragraph>
        </View>
        <View style={{ width: '10%', alignItems: 'center' }}>
          <MaterialIcons size={28} name='chevron-right' color='grey' />
        </View>
      </Card.Content>
    </Card>
  );
}

export default PostListItem;
