function updateVideo() {
  const videoId = 'BxV14h0kFs0'

  //get video detail
  const video = YouTube.Videos.list('snippet', {
      id: videoId
    })
  const videoSnippet = video.items[0].snippet;

  //get view count
  const viewCount = YouTube.Videos.list('statistics', {
    id: videoId
  }).items[0].statistics.viewCount;


  videoSnippet['title'] = `This video has been watched as much as ${viewCount}`;
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
