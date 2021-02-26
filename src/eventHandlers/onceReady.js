import isUp from "is-up";

async function onceReady(client) {
  console.log("onceReady!");

  setInterval(async () => {
    checkWebStatus(client);
  }, 5 * 1000);
}

const url = "https://chatops-bot-test-20210226.taeuk.workers.dev/";
const channelId = "814801278441619457";

async function checkWebStatus(client){
  if(await isUp(url)){
    console.log("정상 작동중");
  } else {
    console.log("사이트 오류");

    client.channels.cache
      .get(channelId)
      .send("웹사이트 접속이 불가합니다.");
  }
}

export default onceReady;
