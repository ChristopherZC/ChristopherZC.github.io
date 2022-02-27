webgazer.setGazeListener((data, timestamp) => {
    console.log(data, timestamp)
}).begin()

webgazer.params.showVideoPreview = true;