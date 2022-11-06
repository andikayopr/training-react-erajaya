const videoData = [
    {
      name: 'Miss Scarlet',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Rusty',
      present: false,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Colonel Mustard',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Professor Plum',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    }
  ]


const presentedVideos = videoData.filter((videos) => videos.present == true); 

console.log("Jumlah video yang tampil (present) :" , presentedVideos.length)
console.log(presentedVideos);