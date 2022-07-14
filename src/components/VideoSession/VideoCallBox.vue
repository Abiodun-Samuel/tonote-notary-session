<template>
  <div class="videocall__box p-2">
    <div
      class="notary__name d-flex justify-content-between align-items-baseline"
    >
      <p class="my-0 py-0">Abiodun Samuel</p>
      <span>Notary</span>
    </div>

    <div class="notary__video">
      <!-- notary video box  -->
      <!-- <div id="stream-wrapper">
              <div id="stream-controls"></div>
            </div> -->
      <div id="video-streams"></div>
      <hr />
      <!-- document owner and witness video box -->
      <!-- <div
              class="signer__name d-flex justify-content-between align-items-baseline"
            >
              <p>John Doe</p>
              <span>Signer</span>
            </div> -->
      <div id="remote__users">
        <!-- <div id="signer__video"></div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useStore } from "vuex";

const store = useStore();
const APP_ID = process.env.VUE_APP_AGORA_APP_ID;
const TOKEN = process.env.VUE_APP_AGORA_TOKEN;
const CHANNEL = "demo";
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
let localTracks = [];
let remoteUsers = {};

onMounted(() => {
  joinStream();
  store.commit("notarysessionStore/NOTARY_READY");
});
onUnmounted(() => {
  store.commit("notarysessionStore/NOTARY_NOT_READY");
});

const joinAndDisplayLocalStream = async () => {
  client.on("user-published", handleUserJoined);
  client.on("user-left", handleUserLeft);
  // options.appId, options.channel, token, uid
  let UID = await client.join(APP_ID, CHANNEL, TOKEN, null);

  localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
  //   create screen sharing stream
  // AgoraRTC.createScreenVideoTrack(
  //   {
  //     encoderConfig: {
  //       framerate: 15,
  //       height: 720,
  //       width: 1280,
  //     },
  //   },
  //   "auto"
  // );

  let player = `<div style="height: 230px;width: 230px;" class="video-container"  id="user-container-${UID}">
                        <div style="height: 100% !important; width: 100% !important;border-radius:4px !important;" class="video-player" id="user-${UID}"></div>
                  </div><div class='mt-1 d-flex justify-content-center gap-1 align-items-center'>
                <button onload="checkCookies()" id="mic-btn" @click="toggleMic">
                 <span class="iconify" data-icon="fa:microphone"></span>
                </button>
                <button id="camera-btn" @click="toggleCamera">
                 <span
                      class="iconify"
                      data-icon="carbon:video-filled"
                    ></span>
                </button>
                </div>`;
  document
    .getElementById("video-streams")
    .insertAdjacentHTML("afterend", player);

  localTracks[1].play(`user-${UID}`);
  await client.publish([localTracks[0], localTracks[1]]);
};

const joinStream = async () => {
  await joinAndDisplayLocalStream();
  // document.getElementById("stream-controls").style.display = "flex";
};

const handleUserJoined = async (user, mediaType) => {
  remoteUsers[user.uid] = user;
  await client.subscribe(user, mediaType);

  if (mediaType === "video") {
    let player_ = document.getElementById(`user-container-${user.uid}`);
    console.log(player_);
    if (player_ != null) {
      player_.remove();
    }

    player_ = `<div style="height: 100px;width: 100px;" class="video-container" id="user-container-${user.uid}">
                        <div style="height: 100% !important; width: 100% !important;border-radius:4px !important;" class="video-player" id="user-${user.uid}"></div>
              <div class='mt-1 d-flex justify-content-center gap-1 align-items-center'>
                <button id="mic-btn">
                 <span class="iconify" data-icon="fa:microphone"></span>
                </button>
                <button id="camera-btn">
                 <span
                      class="iconify"
                      data-icon="carbon:video-filled"
                    ></span>
                </button>
                </div>
                 </div> `;
    document
      .getElementById("remote__users")
      .insertAdjacentHTML("beforeend", player_);
    // .insertAdjacentHTML("beforeend", player_);

    user.videoTrack.play(`user-${user.uid}`);
  }

  if (mediaType === "audio") {
    user.audioTrack.play();
  }
};

const handleUserLeft = async (user) => {
  delete remoteUsers[user.uid];
  document.getElementById(`user-container-${user.uid}`).remove();
};

// const leaveAndRemoveLocalStream = async () => {
//   for (let i = 0; localTracks.length > i; i++) {
//     localTracks[i].stop();
//     localTracks[i].close();
//   }

//   await client.leave();
//   // document.getElementById("join-btn").style.display = "block";
//   // document.getElementById("stream-controls").style.display = "none";
//   document.getElementById("video-streams").innerHTML = "";
// };

// const toggleMic = async (e) => {
//   if (localTracks[0].muted) {
//     await localTracks[0].setMuted(false);
//     e.target.innerHTML = `<span class="iconify" data-icon="fa-solid:microphone"></span>`;
//     e.target.style.backgroundColor = "";
//   } else {
//     await localTracks[0].setMuted(true);
//     e.target.innerHTML = `<span class="iconify" data-icon="carbon:video-off-filled"></span>`;
//     e.target.style.backgroundColor = "#EE4B2B";
//   }
// };

// const toggleCamera = async (e) => {
//   if (localTracks[1].muted) {
//     await localTracks[1].setMuted(false);
//     e.target.innerHTML = `<span class="iconify" data-icon="carbon:video-filled"></span>`;
//     e.target.style.backgroundColor = "";
//   } else {
//     await localTracks[1].setMuted(true);
//     e.target.innerHTML = `<span class="iconify" data-icon="carbon:video-off-filled"></span>`;
//     e.target.style.backgroundColor = "";
//   }
// };
</script>

<style>
.videocall__box {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: var(--bs-box-shadow);
}

.videocall__box {
  overflow-y: scroll;
}

.videocall__box {
  height: 80vh;
  position: sticky;
  top: 70px;
}

button:active {
  background-color: #dde8ff;
  color: #003bb3;
}

button {
  border: none;
  display: flex;
  padding: 3px 5px;
  font-size: 1rem;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: #003bb3;
  color: #dde8ff;
}

button[disabled] {
  background-color: #e2e5ed;
  color: #878787;
}

button[disabled]:hover {
  background-color: #d3dffc;
}

.notary__name p,
.signer__name p {
  color: #003bb3;
  font-size: 1rem;
  font-weight: 500;
}

.signer__name span,
.notary__name span {
  color: #003bb3;
  font-size: 0.8rem;
  font-weight: 500;
}

.hidden {
  display: none;
}

.hidden__two {
  visibility: hidden;
}

.video-player > div {
  border-radius: 0.6rem !important;
  box-shadow: var(--bs-box-shadow);
}

#remote__users {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  height: 100%;
}
/* #stream-controls {
  display: none;
  justify-content: center;
  margin-top: 0.5em;
} */

/* @media screen and (max-width:1400px) {
  #video-streams {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 95%;
  }
} */
</style>
