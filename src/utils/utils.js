export const formatMillisecs = (time) => {
    let minutes = Math.floor(time / (1000*60)),
        seconds = Math.floor((time / 1000) % 60),
        millisecs = parseInt((time % 1000) / 10);

    minutes = minutes < 10 ? "0"+minutes : minutes;
    seconds = seconds < 10 ? "0"+seconds : seconds;
    millisecs = millisecs < 10 ? "0"+millisecs : millisecs;

    return `${minutes}:${seconds}:${millisecs}`;
}