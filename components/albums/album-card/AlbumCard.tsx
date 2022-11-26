import React, { ReactElement } from 'react';
import { Card } from 'react-native-paper';

const AlbumCard = ({ album }: { album: AlbumDTO }): ReactElement => {
  const { name } = album;

  return (
    <Card style={{ margin: 8 }}>
      <Card.Title
        title={name}
        // left={LeftContent}
      />
      {/* album preview here */}
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
  );
};

export default AlbumCard;
