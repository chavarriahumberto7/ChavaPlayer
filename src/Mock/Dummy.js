/**
 * Define and export the dummy data.
 */




export const Playlists=[
  {
    id:'001',
    name: 'Stargroves',
    songs:20,
    thumbnail: require('../../assets/images/thumb_1.png')
  },
  {
    id:'002',
    name: 'So it goes',
    songs:5,
    thumbnail: require('../../assets/images/thumb_2.png')
  },
  {
    id:'003',
    name: 'PlayList 3',
    songs:20,
    thumbnail: require('../../assets/images/thumb_1.png')
  },
  {
    id:'004',
    name: 'PlayList 4',
    songs:5,
    thumbnail: require('../../assets/images/thumb_2.png')
  },

];

export const Favorites=[
  {
    id:'001',
    url:'',
    title:'Holy (feat. Chance the Rapper)',
    album:'Great Album',
    artist:'Justin Bieber',
    thumbnail:require('../../assets/images/thumb_1.png')
  },
  {
    id:'002',
    url:'',
    title:'Thunder',
    album:'Image Dragon',
    artist:'Image Dragon',
    thumbnail:require('../../assets/images/thumb_3.png')
  },
  {
    id:'003',
    url:'',
    title:'King & Queen',
    album:'Ava Max Album',
    artist:'Ava Max',
    thumbnail:require('../../assets/images/thumb_3.png')
  },
]
const dummyData = {Favorites,Playlists };



export default dummyData;
