import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView , FlatList ,Image ,TextInput } from 'react-native';
const image = { uri: "https://images.pexels.com/photos/7578652/pexels-photo-7578652.jpeg" };
//Static data to displaty in list
const DATA = [
  { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqzt670eYaKYLq6Q9xDNtwS6sAc-KzRxeSw&usqp=CAU" },
  { uri: "https://cdn.pixabay.com/photo/2017/09/01/13/08/guardian-angel-2704181__340.jpg" },
  { uri: "https://www.shutterstock.com/fr/image-photo/portrait-young-woman-doctor-on-blue-1931024537" },
  { uri: "https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg" },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* hello houssam */}
      <View style={styles.header}>
        <View style={styles.headerhellopanel}>
          <View style={styles.headerhello}>
            <Text style={styles.headerhellotxt}>Hello</Text>
            <Image style={styles.headerhelloimg} source={require('./assets/goodbye.png')}/>
          </View>
          <Text style={styles.headername}>Houssam eddine sehlaoui</Text>
        </View>
        <Image style={styles.headerimg} source={require('./assets/vieille-femme.png')}/>
      </View>

      {/* search docters*/}
      <View style={styles.searchpanel}>
        <TextInput style={styles.search} placeholder={'Search Doctor or Symptoms'}/>
        <Image style={styles.searchimg} source={require('./assets/search.png')}/>
      </View>

      {/* Nearby docters */}
      <View style={styles.categoriespanel}>
        <View style={styles.categoriespanelheader}>
          <Text style={styles.nearby}>Nearby Docters </Text>
          <Text style={styles.seealdoc}>See All</Text>
        </View>
        <FlatList 
          horizontal={true}
          style={styles.flatlist}
          data={DATA}
          showsHorizontalScrollIndicator={false}
          renderItem={({item ,i}) => 
            <View style={styles.doctorCard} key={i}>
                <Image style={styles.doctorCardimg} source={item}/>
                <Text style={styles.doctorCardname}>Dr. Ashley smith</Text>
                <Text style={styles.doctorCardspe}>cardiologist</Text>
                <View>
                  
                </View>
            </View>

          }
        />
       
      </View>

      {/* Categoris  */}
      <ScrollView style={styles.panelCat} >
          <Text style={styles.titlecat}>Categories</Text>
          <View style={styles.panelCatlist}>
            <View style={styles.catcard}>
              <Image style={styles.catimg} source={require('./assets/love.png')}/>
              <Text style={styles.catname}>Cardiology</Text>
            </View>
            <View style={styles.catcard}>
              <Image style={styles.catimg} source={require('./assets/brain.png')}/>
              <Text style={styles.catname}>Neurology</Text>
            </View>
            <View style={styles.catcard}>
              <Image style={styles.catimg} source={require('./assets/kidney.png')}/>
              <Text style={styles.catname}>Cardiology</Text>
            </View>
            <View style={styles.catcard}>
              <Image style={styles.catimg} source={require('./assets/lungs.png')}/>
              <Text style={styles.catname}>Cardiology</Text>
            </View>
          </View>
          <View style={styles.panelCatlist}>
            <View style={styles.catcard}>
              <Image style={styles.catimg} source={require('./assets/vertebra.png')}/>
              <Text style={styles.catname}>Cardiology</Text>
            </View>
            <View style={styles.catcard}>
              <Image style={styles.catimg} source={require('./assets/eye.png')}/>
              <Text style={styles.catname}>Cardiology</Text>
            </View>
            <View style={styles.catcard}>
              <Image style={styles.catimg} source={require('./assets/tooth.png')}/>
              <Text style={styles.catname}>Cardiology</Text>
            </View>
            <View style={styles.catcard}>
              <Image style={styles.catimg} source={require('./assets/stethoscope.png')}/>
              <Text style={styles.catname}>Other</Text>
            </View>
          </View>
          


      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor :'#e3e3e3',
    flex :1 ,
    paddingTop :40
  },




  header :{
    flexDirection :'row',
    height : 120,
    padding :10
  },
  headerhellopanel:{
    width :'75%',
    padding :15
  },
  headerhello:{
    flexDirection :'row',
  },
  headerhellotxt:{
    fontSize :20,
    marginRight :10
  },
  headerhelloimg:{
    height :15,
    width :15
  },
  headername:{
    marginTop:5,
    fontSize :24
  },
  headerimg :{
    width :70,
    height :70,
    margin :15 ,
    backgroundColor :'#3293a8',
    borderRadius :5,
    overflow :'hidden'
  },




  searchpanel :{
    margin :20 ,
    padding :20,
    flexDirection :'row',
    backgroundColor :'#ffff',
    overflow :'hidden',
    borderRadius :10
  },
  search:{
    width :310
  },
  searchimg:{
    width :20,
    height :20
  },





  categoriespanel :{
    marginLeft :10
  },
  categoriespanelheader:{
    flexDirection :'row' ,
    alignItems :'center',
    marginLeft :20,
  },
  nearby:{
    fontSize :20,

  },
  flatlist:{
  },
  seealdoc:{
    fontSize :15,
    position :'absolute',
    right :0,
    marginRight :20
  },
  doctorCard:{
    backgroundColor :'#ffff',
    width :300,
    height :260,
    overflow :'hidden',
    borderRadius :10,
    margin :10
  },
  doctorCardimg:{
    width:280,
    height :150,
    margin :10,
    overflow :'hidden',
    borderRadius :10
  },
  doctorCardname:{
    marginLeft :10,
    marginTop:10,
    fontSize :22
  },
  doctorCardspe:{
    marginLeft :10,
  },

  

  panelCat:{
    margin :10
  },
  titlecat:{
    fontSize :22,
    marginLeft :20
  },
  panelCatlist:{
    flexDirection :'row',
    justifyContent : 'center',
    alignItems :'center'
  },
  catcard:{
    backgroundColor :'#fff',
    width :80,
    height :110,
    margin :10,
    justifyContent :'center',
    alignItems :'center',
    overflow :'hidden',
    borderRadius :10
  },
  catimg:{
    width :50,
    height :50,
    margin:10
  },
  catname:{},

});
