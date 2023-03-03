import React from "react";
import { View, FlatList, StyleSheet, ScrollView, Image, Dimensions, Text } from "react-native";
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";
import news_banner_data from "./news_banner_data.json";

const App = () => {

  const renderNews = ({ item }) => <NewsCard news={item} />
  const renderBanner = (bannerNews) => <Image
    style={styles.banner_image}
    source={{uri: bannerNews.imageUrl}}
    key={bannerNews.id}
  />

  return (
    <View style={styles.container}>
        <View style={styles.header_area}>
        <Text style={styles.header_text}>NEWS</Text>
      </View>
      <FlatList
        ListHeaderComponent={() =>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_banner_data.map(renderBanner)}
          </ScrollView>
        }
        data={news_data}
        renderItem={renderNews}
        keyExtractor={(item,index) => item.u_id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkgray',
  },
  header_text: {
    padding: 7,
    marginBottom: 0,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  header_area:{
    backgroundColor: 'azure',
  },
  banner_image:{
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 5,
    marginTop: 10,
  },
});

export default App;