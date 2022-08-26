function updateVideo() {
  const videoId = 'j8smPfMoc6g'

  //get video detail
  const video = YouTube.Videos.list('snippet', {
      id: videoId
    })
  const videoSnippet = video.items[0].snippet;

  //get view count
  const viewCount = YouTube.Videos.list('statistics', {
    id: videoId
  }).items[0].statistics.viewCount;


  videoSnippet['title'] = `Video ini ditonton sebanyak ${viewCount}`;
  delete videoSnippet.thumbnails;

  //update video
  try {
    const update = YouTube.Videos.update({
      id: videoId,
      snippet: videoSnippet
    }, 'snippet')
    Logger.log(`Judul baru = ${update.snippet.title}`)
  } catch (err) {
    Logger.log('Failed with an error %s', err.message);
  }
}
