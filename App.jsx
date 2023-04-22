import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View, FlatList } from 'react-native';

export default function App() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694100f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '5869490f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '5869480f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '5869470f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '5869460f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '5869450f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '5869440f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '5869430f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '5869420f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '5869410f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];


  return (
    <SafeAreaView style={styles.container}>
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mt-2 mb-5 text-xl">Making flat list</Text>

      <FlatList
        data={DATA}
        renderItem={({item}) =>{return <Text className="text-center rounded-lg text-white text-xl" style={styles.item}>{item.title}</Text>}}
        keyExtractor={item => item.id}
      />

      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
  },
  item: {
    backgroundColor: 'black',
    padding: 20,
    width:330,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

});
