
/**
 * Click callback
 */
function createGif() {

    gifshot.createGIF({
        gifWidth: 400,
        gifHeight: 533,
        frameDuration: 10, // (10 = 1s)
        'images': getImageSources()
    },function(obj, bbb) {
        if (!obj || obj.error) {
            alert('error')
            return;
        }
        var image = obj.image,
        animatedImage = document.createElement('img');
        animatedImage.src = image;
        document.body.appendChild(animatedImage);
    });
}

/**
 * Constructs URLs for each image.
 */
function getImageSources() {
    var ids = [
        '0001', '0002', '0003', '0004', '0005', '0006', '0007',
        '0008', '0009', '0010', '0011', '0012', '0013', '0014'
    ];
    return ids.map(function(name){
        return 'http://localhost:8000/images/' + name + '.JPG';
    })
}