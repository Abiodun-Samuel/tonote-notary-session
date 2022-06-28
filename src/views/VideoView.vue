<template>
  <div class="container-fluid">
    <div class="my-5 py-1"></div>

    <div class="row">
      <div class="col-lg-2 my-2">
        <div class="signer p-3">
          <div class="signer__name d-flex justify-content-between align-items-baseline">
            <p>John Doe</p>
            <span>Signer</span>
          </div>
          <div id="signer__video"></div>
        </div>
      </div>
      <div class="col-lg-7 my-2">
        <div class="document p-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            vitae impedit totam repudiandae dicta officia dolorum dolore
            eligendi, quam fugit blanditiis doloremque sed atque consectetur
            consequatur molestiae harum qui, ab corrupti dignissimos delectus
            unde necessitatibus in quas? Tempore, et exercitationem
            repellendus, earum quas molestiae aliquid voluptatum quae eos, cum
            nisi! Illo quia officia ea nam, repellat blanditiis nemo sint
            mollitia illum, sed aliquam. Nostrum facere laudantium, doloremque
            beatae repellat atque ipsum illum nesciunt? Facilis numquam labore
            soluta sint dolore temporibus magni dolorum minima placeat neque
            ab minus voluptatem eaque consectetur architecto, pariatur unde
            nulla quis iste quidem esse eveniet quia?
          </p>
        </div>
      </div>
      <div class="col-lg-3 my-2">
        <div class="notary p-3">
          <div class="notary__name d-flex justify-content-between align-items-baseline">
            <p>Abiodun Samuel</p>
            <span>Notary</span>
          </div>
          <div class="notary__video">
            <div id="stream-wrapper">
              <div id="stream-controls" class="my-2 d-inline-flex">
                <button class="" id="leave-btn">.</button>
                <button id="mic-btn">
                  <span class="iconify" data-icon="fa-solid:microphone"></span>
                </button>
                <button id="camera-btn">
                  <span class="iconify" data-icon="carbon:video-filled"></span>
                </button>
              </div>
            </div>
            <div id="video-streams"></div>
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

export default {
  data() {
    return {
      // callPlaced: false,
      // componentKey: 0,
    };
  },
  setup() {
    const APP_ID = process.env.VUE_APP_AGORA_APP_ID;
    const TOKEN = process.env.VUE_APP_AGORA_TOKEN;
    const CHANNEL = process.env.VUE_APP_AGORA_CHANNEL;

    const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  console.log(client);

    let localTracks = [];
    let remoteUsers = {};
    return {APP_ID, TOKEN, client, CHANNEL, localTracks, remoteUsers}
  },
  components: {
    // Icon,
  },
  methods: {
    async joinAndDisplayLocalStream() {
      
      this.client.on("user-published", this.handleUserJoined);

      this.client.on("user-left", this.handleUserLeft);

      let UID = await this.client.join(this.APP_ID, this.CHANNEL, this.TOKEN, null);

      this.localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

      let player = `<div style="margin: 0 auto;height: 230px;width: 230px;" class="video-container"  id="user-container-${UID}">
                        <div style="height: 100% !important; width: 100% !important;" class="video-player" id="user-${UID}"></div>
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
      document.getElementById("stream-controls").style.display = "flex";
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

        player_ = `<div style="margin: 0 auto;height: 230px;width: 230px;" class="video-container" id="user-container-${user.uid}">
                        <div style="height: 100% !important; width: 100% !important;" class="video-player" id="user-${user.uid}"></div> 
                 </div>`;
        document
          .getElementById("signer__video")
          .insertAdjacentHTML("afterend", player_);

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
      
      for (let i = 0;  this.localTracks.length > i; i++) {
         this.localTracks[i].stop();
         this.localTracks[i].close();
      }

      await  this.client.leave();
      document.getElementById("join-btn").style.display = "block";
      document.getElementById("stream-controls").style.display = "none";
      document.getElementById("video-streams").innerHTML = "";
    },
    async toggleMic(e) {
      
      if ( this.localTracks[0].muted) {
        await  this.localTracks[0].setMuted(false);
        e.target.innerHTML = `<span class="iconify" data-icon="fa-solid:microphone"></span>`;
        e.target.style.backgroundColor = "";
      } else {
        await  this.localTracks[0].setMuted(true);
        e.target.innerHTML = `<span class="iconify" data-icon="carbon:video-off-filled"></span>`;
        e.target.style.backgroundColor = "#EE4B2B";
      }
    },
    async toggleCamera(e) {
      
      if ( this.localTracks[1].muted) {
        await  this.localTracks[1].setMuted(false);
        e.target.innerHTML = `<span class="iconify" data-icon="carbon:video-filled"></span>`;
        e.target.style.backgroundColor = "";
      } else {
        await  this.localTracks[1].setMuted(true);
        e.target.innerHTML = `<span class="iconify" data-icon="carbon:video-off-filled"></span>`;
        e.target.style.backgroundColor = "";
      }
    }
  },
  mounted() {
    this.joinStream();
  }
}
</script>

<style scoped>
.signer,
.document,
.notary {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: var(--bs-box-shadow);
}

.signer,
.notary {
  height: 80vh;
}

header {
  height: 60px;
}

.button {
  /* background-color: #003bb3;
  color: #ffffff;
  text-decoration: none;
  border-radius: 3.5px;
  font-weight: 400;
  font-size: 0.9rem;
  padding: 0.4rem 0.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px; */
}

.button:hover {
  text-decoration: none;
  background-color: #1e69ff;
  color: #ffffff;
}

button:active {
  background-color: #dde8ff;
  color: #003bb3;
}

button {
  border: none;
  display: flex;
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
  /* position: fixed;
   top: 50%;
   left: 50%; */
  /* margin-top: -50px;
   margin-left: -100px; */
  font-size: 18px;
  padding: 20px 40px;
}

#video-streams {
  /* display: grid;
   grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); */
  /* height: 50vh; */
  /* height: 500px;
   width: 500px;
   margin: 0 auto; */
}

.hidden {
  display: none;
}

.hidden__two {
  visibility: hidden;
}

/* .video-container { */
  /* max-height: 100%; */
 
  /* border: 2px solid black;
   background-color: #203A49; */
/* } */

/* .video-player {
  height: 100% !important;
  width: 100% !important;
} */

#stream-controls {
  display: none;
  justify-content: center;
  margin-top: 0.5em;
}

@media screen and (max-width:1400px) {
  #video-streams {
    /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
    /* width: 95%; */
  }
}
</style>
