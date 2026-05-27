function play(){

const url=
"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

const video=
document.getElementById(
"player"
);

if(Hls.isSupported()){

const hls=
new Hls();

hls.loadSource(
url
);

hls.attachMedia(
video
);

}

}
