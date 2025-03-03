import { StyleSheet, Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView , VideoSource } from 'expo-video';
import { useEventListener } from 'expo';

import { NavigationContainer } from '@react-navigation/native';

// const videoSource = "http://"

const assetId = require('../../assets/videos/mWEL2_Mission2_Assess_INTRO.mp4');


const videoSource : VideoSource = {
  assetId,
  metadata: {
    title: 'mWel Mission',
    artist: 'Wellness Toolkit Project',
  },
};

// const player = useVideoPlayer(assetId);
// event handling


const ABout = () => {
  
  const player = useVideoPlayer(videoSource, player => {
    player.loop = false;
    player.play();
  });

  

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  // useEventListener(player, 'statusChange', ({ status, error }) => {
  //   setPlayerStatus(status);
  //   setPlayerError(error);
  //   console.log('Player status changed: ', status);
  // });
  


  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text>ABout</Text>
        </View>
        <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
        <View style={styles.controlsContainer}>
          <Button
            title={isPlaying ? 'Pause' : 'Play'}
            onPress={() => {
              if (isPlaying) {
                player.pause();
              } else {
                player.play();
              }
            }}
          />
        </View>
    </SafeAreaView>
    
  )
}

export default ABout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});