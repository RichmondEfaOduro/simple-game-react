export default () => {
 navigator.mediaDevices.getUserMedia({audio: true, video: true })
 .then((mediaStream) => {
    console.log(mediaStream);
  });
}
