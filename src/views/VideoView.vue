<template>
  <div class="container">
    <div class="my-1 py-1"></div>

    <div class="row">
      <div class="col-lg-2 my-2">
        <div class="tool__box">
          <ToolBox />
        </div>
      </div>
      <div class="col-lg-7 my-2">
        <!-- <div class="document__box"> -->
        <DocumentBox />
        <!-- </div> -->
      </div>
      <div class="col-lg-3 my-2">
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
      </div>
    </div>
    <button id="join-btn" @click="joinStream">Join Stream</button>
  </div>
</template>

<script>
// import { Icon } from "@iconify/vue";
import AgoraRTC from "agora-rtc-sdk-ng";
import DocumentBox from "@/components/VideoSession/DocumentBox.vue";
import ToolBox from "@/components/VideoSession/ToolBox.vue";

export default {
  data() {
    return {
      // callPlaced: false,
      // componentKey: 0,
    };
  },
  components: {
    DocumentBox,
    ToolBox,
    // Icon,
  },
  setup() {
    const APP_ID = process.env.VUE_APP_AGORA_APP_ID;
    const TOKEN = process.env.VUE_APP_AGORA_TOKEN;
    const CHANNEL = process.env.VUE_APP_AGORA_CHANNEL;

    const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    let localTracks = [];
    let remoteUsers = {};
    return { APP_ID, TOKEN, client, CHANNEL, localTracks, remoteUsers };
  },
  methods: {
    async joinAndDisplayLocalStream() {
      this.client.on("user-published", this.handleUserJoined);

      this.client.on("user-left", this.handleUserLeft);

      let UID = await this.client.join(
        this.APP_ID,
        this.CHANNEL,
        this.TOKEN,
        null
      );

      this.localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

      let player = `<div style="height: 230px;width: 230px;" class="video-container"  id="user-container-${UID}">
                        <div style="height: 100% !important; width: 100% !important;border-radius:4px !important;" class="video-player" id="user-${UID}"></div>
                  </div><div class='mt-1 d-flex justify-content-center gap-1 align-items-center'>
                <button id="mic-btn" @click="toggleMic()">
                 <span class="iconify" data-icon="fa:microphone"></span>
                </button>
                <button id="camera-btn" @click="toggleCamera()">
                 <span
                      class="iconify"
                      data-icon="carbon:video-filled"
                    ></span>
                </button>
                </div>`;
      document
        .getElementById("video-streams")
        .insertAdjacentHTML("afterend", player);

      this.localTracks[1].play(`user-${UID}`);

      await this.client.publish([this.localTracks[0], this.localTracks[1]]);
    },

    async joinStream() {
      await this.joinAndDisplayLocalStream();
      document.getElementById("join-btn").style.display = "none";
      // document.getElementById("stream-controls").style.display = "flex";
    },

    async handleUserJoined(user, mediaType) {
      this.remoteUsers[user.uid] = user;
      await this.client.subscribe(user, mediaType);

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
    },

    async handleUserLeft(user) {
      delete this.remoteUsers[user.uid];
      document.getElementById(`user-container-${user.uid}`).remove();
    },

    async leaveAndRemoveLocalStream() {
      for (let i = 0; this.localTracks.length > i; i++) {
        this.localTracks[i].stop();
        this.localTracks[i].close();
      }

      await this.client.leave();
      document.getElementById("join-btn").style.display = "block";
      // document.getElementById("stream-controls").style.display = "none";
      document.getElementById("video-streams").innerHTML = "";
    },

    async toggleMic(e) {
      if (this.localTracks[0].muted) {
        await this.localTracks[0].setMuted(false);
        e.target.innerHTML = `<span class="iconify" data-icon="fa-solid:microphone"></span>`;
        e.target.style.backgroundColor = "";
      } else {
        await this.localTracks[0].setMuted(true);
        e.target.innerHTML = `<span class="iconify" data-icon="carbon:video-off-filled"></span>`;
        e.target.style.backgroundColor = "#EE4B2B";
      }
    },

    async toggleCamera(e) {
      if (this.localTracks[1].muted) {
        await this.localTracks[1].setMuted(false);
        e.target.innerHTML = `<span class="iconify" data-icon="carbon:video-filled"></span>`;
        e.target.style.backgroundColor = "";
      } else {
        await this.localTracks[1].setMuted(true);
        e.target.innerHTML = `<span class="iconify" data-icon="carbon:video-off-filled"></span>`;
        e.target.style.backgroundColor = "";
      }
    },
  },
  mounted() {
    this.joinStream();
  },
};
</script>

<style>
.tool__box,
.videocall__box {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: var(--bs-box-shadow);
}

.videocall__box {
  overflow-y: scroll;
}

.tool__box,
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

#join-btn {
  font-size: 18px;
  padding: 20px 40px;
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
