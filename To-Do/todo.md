# todo

todo 

** spread

destructuring

clean reducers page - watch video


****

-  - when save a tune, i should see saved playlist.. and message saying how many songs are now in the database. 
 
- is showthis necessary? was this the original purpose of allTunes show 
-  allTunesShow = 1 should just be loginShow = 0 
- on logout, the save playlist still available
 1. playlist to large - break up
1. fix the seperate rating button
2. save works - but it’s not really saving to the database - well now its saving to allTunes rather than userTunes … 
3. also, should user select whether to save scrape tunes to general database?
4. clean reducers



    console.log("scrape")
    var result = this.props.posts.scrapes.length >0 ? (
      console.log("getting scrapes already there"),
      this.props.getScrapes()
    ) : 
    (
      this.props.fetchScrape().then(()=> {
        console.log("fetch, then add")  
        this.props.getScrapes()
      
      })
    )
    console.log(result)


db.test.ensureIndex({artist: 1, title: 1}, {unique: true, dropDups: true}) 

mongo ds058548.mlab.com:58548/music77 -u meldejesus -p mlab1970
## 
music77.playlists.ensureIndex({ artist: 1, title: 1 }, { unique: true})



var data = {
id: 
song: 
}

send as payload: data

log payload, and it will look like this: 

{id: xx song: xx}